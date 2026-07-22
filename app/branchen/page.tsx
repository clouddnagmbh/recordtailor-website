import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Building2 } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { BRANCHEN } from "@/lib/branchen-data";

export const metadata: Metadata = {
  title: { absolute: "DMS für Ihre Branche — RecordTailor" },
  description:
    "RecordTailor branchen-spezifisch: Steuerberater, öffentliche Verwaltung, Industrie & Fertigung, Gesundheit & Life Sciences. Was heute geht — und was in Vorbereitung ist.",
  alternates: { canonical: "/branchen" },
};

export default function BranchenPage() {
  return (
    <div>
      <Breadcrumbs
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Branchen", href: "/branchen" },
        ]}
      />
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:py-20">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              <Building2 className="mr-1 inline h-3 w-3" />
              Branchen
            </div>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              DMS-Kern, branchen-spezifisch gerahmt.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Dieselbe Software, andere Prioritäten je nach Haus. Vier Branchen, in denen wir
              regelmäßig sitzen — mit ehrlicher Einordnung, was wir heute abdecken und wo wir
              noch Roadmap-Themen haben.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-5xl gap-4 px-5 py-14 sm:grid-cols-2">
          {BRANCHEN.map((b, i) => (
            <Reveal key={b.slug} delay={i * 60}>
              <Link
                href={`/branchen/${b.slug}`}
                className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 hover:border-gold/60 hover:shadow-elevated"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Branche
                </div>
                <h2 className="mt-1 font-serif text-2xl font-medium tracking-tight">
                  {b.branche}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {b.lead}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                  Details
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
