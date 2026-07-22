import { ShieldCheck } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { DICTS } from "@/lib/i18n/dictionary";
import { getLocale, getT } from "@/lib/i18n";

export async function generateMetadata() {
  const l = await getLocale();
  return {
    title: l === "en" ? "Security" : "Sicherheit",
    description: DICTS[l]["sec.meta.desc"],
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

      <section className="bg-ink py-16 text-cream">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium tracking-tight">
              {t("sec.audit.title")}
            </h2>
            <p className="mt-4 text-cream/80">{t("sec.audit.body")}</p>
            <pre className="mt-6 overflow-x-auto rounded-xl bg-ink-soft p-4 text-xs text-cream/80">{`$ recordtailorctl audit verify --from 2026-01-01
✓ 41 837 events verified.
✓ Hash chain intact through 2026-07-20 14:03:24.
✓ Digital signatures: 41 837/41 837 valid.
ℹ eIDAS QES (PAdES-B-LTA) via A-Trust: in Vorbereitung.`}</pre>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
