import { FileCheck2, ShieldCheck } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { DICTS } from "@/lib/i18n/dictionary";
import { getLocale, getT } from "@/lib/i18n";
import { bilingualAlternates } from "@/lib/i18n/alternates";

export async function generateMetadata() {
  const l = await getLocale();
  return {
    title: l === "en" ? "Security" : "Sicherheit",
    description: DICTS[l]["sec.meta.desc"],
    alternates: {
      canonical: "/sicherheit",
      languages: bilingualAlternates("/sicherheit", "/en/sicherheit"),
    },
  };
}

export default async function SicherheitPage() {
  const t = await getT();
  return (
    <div>
      <Breadcrumbs
        crumbs={[
          { label: "Start", href: "/" },
          { label: t("nav.sicherheit"), href: "/sicherheit" },
        ]}
      />
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {t("sec.eyebrow")}
            </div>
            <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
              {t("sec.title")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t("sec.body")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="grid gap-3 sm:grid-cols-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-surface px-5 py-4 text-sm">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{t(`sec.item${i}`)}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nachrechenbar statt behauptet — rt-verify */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              <FileCheck2 className="mr-1 inline h-3 w-3" />
              Nachrechenbar statt behauptet
            </div>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              Der Prüfer verifiziert selbst — ohne Zugang zu Ihrer Instanz.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              RecordTailor exportiert das Beweispaket zu einem Zeitraum als in sich
              geschlossenes Bundle: Dokumente, Ereignis-Historie, Hash-Manifest und
              die externen Zeitanker (OpenTimestamps und RFC-3161-Zeitstempel). Ein
              Prüfer öffnet das Bundle mit dem quelloffenen Kommandozeilen-Tool{" "}
              <code className="rounded bg-surface-muted px-1 py-0.5 text-[0.9em]">rt-verify</code>{" "}
              auf dem eigenen Laptop und rechnet die Kette lokal nach — kein
              Netz-Zugang, kein Vertrauen in unsere Datenbank, keine Marketing-Zusagen.
              Wenn die Kette hält, sehen Sie es. Wenn sie kippt, auch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-16 text-cream">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium tracking-tight">
              {t("sec.audit.title")}
            </h2>
            <p className="mt-4 text-cream/80">{t("sec.audit.body")}</p>
            <pre className="mt-6 overflow-x-auto rounded-xl bg-ink-soft p-4 text-xs text-cream/80">{`$ rt-verify ./beweispaket-2026-Q2.bundle
✓ 41 837 events read from bundle
✓ Hash chain intact through 2026-07-20 14:03:24
✓ Append-only trigger signature: verified
✓ External time anchor (OpenTimestamps): matches Bitcoin block 897 214
✓ External time anchor (RFC 3161, A-Trust TSA): matches 2026-07-21T02:14:07Z
✓ Digital signatures: 41 837/41 837 valid
ℹ eIDAS QES (PAdES-B-LTA) via A-Trust: in Vorbereitung`}</pre>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
