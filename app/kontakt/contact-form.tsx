"use client";

import { useActionState, useEffect, useMemo, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { submitContact, type ContactState } from "./actions";

const INITIAL: ContactState = { ok: false, message: "" };

/**
 * Client-Formular mit Server-Action + Honeypot + Zeit-Falle. Kein Cookie,
 * kein Consent-Banner nötig. Der Zeitstempel wird beim Rendern erzeugt und
 * mitgesendet — die Action lehnt Einreichungen unter 2 s ab.
 */
export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, INITIAL);
  const [renderedAt] = useState<number>(() => Date.now());
  const submittedAt = useMemo(() => renderedAt.toString(), [renderedAt]);

  useEffect(() => {
    if (state.ok) {
      const el = document.querySelector<HTMLDivElement>("[data-contact-status]");
      el?.focus();
    }
  }, [state.ok]);

  if (state.ok) {
    return (
      <div
        data-contact-status
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-gold/40 bg-gold-soft p-6"
      >
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-gold" />
          <div className="font-semibold text-foreground">{state.message}</div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Wir antworten in der Regel innerhalb eines Werktags. Sollten Sie schneller etwas brauchen,
          schreiben Sie direkt an{" "}
          <a className="font-medium underline underline-offset-4" href="mailto:hello@recordtailor.com">
            hello@recordtailor.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-4" noValidate>
      {/* Honeypot — visually hidden, tabbable-blocked. Bots fill it. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website (bitte leer lassen)
          <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <input type="hidden" name="submittedAt" value={submittedAt} />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="font-medium">Name*</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-gold/60"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium">Firma</span>
          <input
            type="text"
            name="company"
            autoComplete="organization"
            className="rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-gold/60"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="font-medium">E-Mail*</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-gold/60"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium">Aktuelles DMS</span>
          <select
            name="currentDms"
            defaultValue=""
            className="rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-gold/60"
          >
            <option value="">— keine Angabe —</option>
            <option value="alfresco">Alfresco</option>
            <option value="docuware">DocuWare</option>
            <option value="d-velop">d.velop</option>
            <option value="elo">ELO</option>
            <option value="m-files">M-Files</option>
            <option value="opentext">OpenText</option>
            <option value="sharepoint">SharePoint</option>
            <option value="paperless-ngx">Paperless-ngx</option>
            <option value="andere">Andere</option>
            <option value="keins">Wir haben noch keins</option>
          </select>
        </label>
      </div>

      <label className="grid gap-1 text-sm">
        <span className="font-medium">Nachricht*</span>
        <textarea
          name="message"
          required
          rows={6}
          className="rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-gold/60"
        />
      </label>

      <p className="text-xs text-muted-foreground">
        Pflichtfelder mit *. Ihre Angaben verarbeiten wir zur Bearbeitung Ihrer Anfrage
        (Art. 6 Abs. 1 lit. b DSGVO). Details in unserer{" "}
        <a href="/datenschutz" className="underline underline-offset-4">
          Datenschutzerklärung
        </a>
        .
      </p>

      {state.message && !state.ok && (
        <div
          role="alert"
          className="rounded-xl border border-thread-red/50 bg-thread-red/10 px-4 py-3 text-sm text-foreground"
        >
          {state.message}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-cream shadow-soft hover:bg-ink-soft disabled:opacity-70"
        >
          {pending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Wird gesendet …
            </>
          ) : (
            "Nachricht senden"
          )}
        </button>
      </div>
    </form>
  );
}
