"use server";

/**
 * Server-Action fürs Kontaktformular. Spam-Schutz ohne Cookie:
 *   - Honeypot-Feld `website` (für Menschen unsichtbar, für Bots verlockend).
 *   - Zeit-Falle `submittedAt` — echte Nutzer brauchen ≥ 2 s zwischen
 *     Formular-Rendering und Absenden.
 *
 * Mail-Versand über die Resend-REST-API. Kein neues NPM-Paket nötig; wir
 * rufen den HTTPS-Endpoint direkt. Ohne konfiguriertes `RESEND_API_KEY`
 * loggt die Action nur (Development-Modus).
 */

export type ContactState = {
  ok: boolean;
  message: string;
};

const INITIAL_TIMESTAMP_MIN_AGE_MS = 2_000;
const MAX_FIELD_LENGTH = 5_000;

function truncate(v: string): string {
  return v.slice(0, MAX_FIELD_LENGTH);
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = String(formData.get("website") ?? "");
  if (honeypot.trim().length > 0) {
    // Bot: still return ok so it doesn't retry.
    return { ok: true, message: "Danke, wir haben Ihre Nachricht erhalten." };
  }

  const submittedAtRaw = String(formData.get("submittedAt") ?? "0");
  const submittedAt = Number.parseInt(submittedAtRaw, 10);
  if (
    !Number.isFinite(submittedAt) ||
    Date.now() - submittedAt < INITIAL_TIMESTAMP_MIN_AGE_MS
  ) {
    return {
      ok: false,
      message: "Bitte versuchen Sie es gleich noch einmal.",
    };
  }

  const name = truncate(String(formData.get("name") ?? "").trim());
  const email = truncate(String(formData.get("email") ?? "").trim());
  const company = truncate(String(formData.get("company") ?? "").trim());
  const currentDms = truncate(String(formData.get("currentDms") ?? "").trim());
  const message = truncate(String(formData.get("message") ?? "").trim());

  if (!name || !email || !message) {
    return {
      ok: false,
      message: "Bitte füllen Sie Name, E-Mail und Nachricht aus.",
    };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      ok: false,
      message: "Die E-Mail-Adresse sieht ungewöhnlich aus. Bitte prüfen.",
    };
  }

  const subject = `RecordTailor · Kontaktanfrage von ${name}${company ? ` (${company})` : ""}`;
  const bodyLines = [
    `Name: ${name}`,
    `Firma: ${company || "—"}`,
    `E-Mail: ${email}`,
    `Aktuelles DMS: ${currentDms || "—"}`,
    "",
    "Nachricht:",
    message,
  ];
  const text = bodyLines.join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_RECIPIENT_EMAIL ?? "hello@recordtailor.com";
  const from = process.env.CONTACT_SENDER_EMAIL ?? "RecordTailor <hello@recordtailor.com>";

  if (!apiKey) {
    console.info("[contact] RESEND_API_KEY not set — logging instead of sending:\n", text);
    return {
      ok: true,
      message: "Danke — wir haben Ihre Nachricht erhalten und melden uns.",
    };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend send failed:", res.status, await res.text().catch(() => ""));
    return {
      ok: false,
      message:
        "Wir konnten Ihre Nachricht gerade nicht zustellen. Bitte versuchen Sie es in ein paar Minuten noch einmal — oder schreiben Sie direkt an hello@recordtailor.com.",
    };
  }

  return {
    ok: true,
    message: "Danke — wir haben Ihre Nachricht erhalten und melden uns.",
  };
}
