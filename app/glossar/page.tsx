import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookText } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { GLOSSAR } from "@/lib/glossar-data";

export const metadata: Metadata = {
  title: { absolute: "DMS-Glossar — GoBD, RAG, eIDAS, MCP & mehr" },
  description:
    "20 Begriffe rund um Dokumentenmanagement, KI-Governance und Compliance — präzise definiert, mit Bezug zu RecordTailor.",
  alternates: { canonical: "/glossar" },
};

export default function GlossarPage() {
  return (
    <div>
      <Breadcrumbs
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Glossar", href: "/glossar" },
        ]}
      />
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:py-20">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              <BookText className="mr-1 inline h-3 w-3" />
              Glossar
            </div>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              DMS-Wörterbuch — Klartext statt Marketing.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Zwanzig Begriffe, die in Ausschreibungen, Compliance-Meetings und Vertriebs-Gesprächen
              regelmäßig auftauchen. Kurz, präzise, mit Bezug zu dem, was RecordTailor konkret tut.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-5xl gap-3 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
          {GLOSSAR.map((g, i) => (
            <Reveal key={g.slug} delay={i * 30}>
              <Link
                href={`/glossar/${g.slug}`}
                className="flex h-full flex-col rounded-2xl border border-border bg-surface p-5 hover:border-gold/60 hover:shadow-elevated"
              >
                <div className="font-serif text-lg font-medium tracking-tight">{g.term}</div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {g.short}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold">
                  Definition
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
