import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Scale } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { COMPARISONS, COMPARISON_AS_OF } from "@/lib/compare-data";

export const metadata: Metadata = {
  title: { absolute: "DMS-Vergleich — RecordTailor vs. DocuWare, ELO, d.velop, M-Files, SharePoint" },
  description:
    "Nachprüfbarer Feature-Vergleich zwischen RecordTailor und den etablierten DMS-Systemen (Stand 07/2026). Fair, mit Quellen, ohne Herabsetzung.",
  alternates: { canonical: "/vergleich" },
};

export default function VergleichPage() {
  return (
    <div>
      <Breadcrumbs
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Vergleich", href: "/vergleich" },
        ]}
      />
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:py-20">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              <Scale className="mr-1 inline h-3 w-3" />
              Vergleich
            </div>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              RecordTailor im Vergleich.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Sechs Vergleichsseiten mit nachprüfbaren Feature-Fakten — aus den öffentlich
              zugänglichen Produktseiten der jeweiligen Anbieter, {COMPARISON_AS_OF}. Keine
              Preisspekulationen, keine Herabsetzung. Wenn wir schwächer sind, steht das drin.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARISONS.map((c, i) => (
            <Reveal key={c.slug} delay={i * 60}>
              <Link
                href={`/vergleich/${c.slug}`}
                className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 hover:border-gold/60 hover:shadow-elevated"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  RecordTailor vs.
                </div>
                <h2 className="mt-1 font-serif text-2xl font-medium tracking-tight">
                  {c.displayName}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.directAnswer}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                  Vergleichstabelle
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-12">
        <div className="mx-auto max-w-4xl px-5 text-center text-xs text-muted-foreground">
          Alle Markennamen sind Eigentum der jeweiligen Inhaber. Feature-Angaben zu Wettbewerbern
          stammen aus öffentlich zugänglichen Produktseiten und Dokumentationen ({COMPARISON_AS_OF}).
        </div>
      </section>
    </div>
  );
}
