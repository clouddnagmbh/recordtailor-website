import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowRight, Check, CircleDashed, MinusCircle, Scale } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import {
  COMPARISONS,
  COMPARISON_AS_OF,
  findComparisonBySlug,
  type CompareCell,
} from "@/lib/compare-data";

const STATUS_ICON: Record<CompareCell["status"], LucideIcon> = {
  yes: Check,
  partial: CircleDashed,
  no: MinusCircle,
};

const STATUS_CLASS: Record<CompareCell["status"], string> = {
  yes: "text-gold",
  partial: "text-thread-red",
  no: "opacity-40 text-muted-foreground",
};

const STATUS_LABEL: Record<CompareCell["status"], string> = {
  yes: "Vorhanden",
  partial: "Teilweise / in Vorbereitung / angekündigt",
  no: "Nicht vorhanden oder nicht öffentlich dokumentiert",
};

function StatusCell({ cell, side }: { cell: CompareCell; side: "rt" | "competitor" }) {
  const Icon = STATUS_ICON[cell.status];
  const iconClass = STATUS_CLASS[cell.status];
  const wrapperClass =
    side === "rt" ? "text-foreground/85" : "text-muted-foreground";
  return (
    <div className={`flex items-start gap-2 ${wrapperClass}`}>
      <Icon
        className={`mt-0.5 h-4 w-4 shrink-0 ${iconClass}`}
        aria-label={STATUS_LABEL[cell.status]}
      />
      <span>{cell.text}</span>
    </div>
  );
}

export function generateStaticParams() {
  return COMPARISONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cmp = findComparisonBySlug(slug);
  if (!cmp) return {};
  return {
    title: { absolute: cmp.metaTitle },
    description: cmp.metaDescription,
    alternates: { canonical: `/vergleich/${cmp.slug}` },
    openGraph: { title: cmp.metaTitle, description: cmp.metaDescription },
    twitter: { title: cmp.metaTitle, description: cmp.metaDescription },
  };
}

export default async function VergleichSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cmp = findComparisonBySlug(slug);
  if (!cmp) notFound();

  const base = "https://recordtailor.com";
  const canonical = `${base}/vergleich/${cmp.slug}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: base + "/" },
          { "@type": "ListItem", position: 2, name: "Vergleich", item: base + "/vergleich" },
          {
            "@type": "ListItem",
            position: 3,
            name: `RecordTailor vs. ${cmp.displayName}`,
            item: canonical,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: cmp.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div>
      <Script
        id={`ld-vergleich-${cmp.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(graph)}
      </Script>

      <Breadcrumbs
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Vergleich", href: "/vergleich" },
          { label: `RecordTailor vs. ${cmp.displayName}`, href: `/vergleich/${cmp.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:py-20">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              <Scale className="mr-1 inline h-3 w-3" />
              RecordTailor vs. {cmp.displayName}
            </div>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              {cmp.h1}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Direct answer (Answer-Engine-Snippet) */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Kurze Antwort
            </div>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              {cmp.directAnswer}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Feature-Tabelle */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              Feature-Vergleich — nur nachprüfbare Fakten.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {COMPARISON_AS_OF}. Quellen: öffentlich zugängliche Produktseiten von{" "}
              {cmp.displayName} und CloudDNA-Marktanalyse.
            </p>
          </Reveal>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-surface">
            <table className="min-w-full text-sm">
              <thead className="border-b border-border bg-surface-muted text-left text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                <tr>
                  <th scope="col" className="px-5 py-3">Kriterium</th>
                  <th scope="col" className="px-5 py-3 text-gold">RecordTailor</th>
                  <th scope="col" className="px-5 py-3">{cmp.displayName}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {cmp.rows.map((r, i) => (
                  <tr key={i} className="align-top">
                    <th
                      scope="row"
                      className="px-5 py-4 text-left font-medium text-foreground"
                    >
                      {r.criterion}
                    </th>
                    <td className="px-5 py-4">
                      <StatusCell cell={r.rt} side="rt" />
                    </td>
                    <td className="px-5 py-4">
                      <StatusCell cell={r.competitor} side="competitor" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-gold" /> Vorhanden / produktiv
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CircleDashed className="h-3.5 w-3.5 text-thread-red" /> Teilweise, angekündigt oder in Vorbereitung
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MinusCircle className="h-3.5 w-3.5 opacity-40" /> Nicht vorhanden oder nicht öffentlich dokumentiert
            </span>
          </div>
          <p className="mt-4 text-[11px] text-muted-foreground">
            Alle Markennamen sind Eigentum der jeweiligen Inhaber. Angaben zu {cmp.displayName}{" "}
            stammen aus den öffentlich zugänglichen Produktseiten des Anbieters
            ({COMPARISON_AS_OF}). Roadmap-Angaben sind als „angekündigt" gekennzeichnet.
          </p>
        </div>
      </section>

      {/* Migrationsweg */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Migrationsweg
            </div>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              Von {cmp.displayName} zu RecordTailor.
            </h2>
          </Reveal>
          <ol className="mt-10 space-y-4">
            {cmp.migrationSteps.map((step, i) => (
              <Reveal key={i} delay={i * 60}>
                <li className="flex gap-4 rounded-2xl border border-border bg-surface p-6">
                  <span className="tabular flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-cream">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              Häufige Fragen zum Vergleich mit {cmp.displayName}.
            </h2>
          </Reveal>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface">
            {cmp.faq.map((f, i) => (
              <details key={i} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-semibold">
                  <span>{f.q}</span>
                  <span className="mt-1 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 text-cream">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-5 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight">
            30 Minuten. Sie zeigen uns Ihr {cmp.displayName}. Wir zeigen ehrlich, ob RecordTailor passt.
          </h2>
          <Link
            href="/kontakt"
            className="mt-2 inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-white hover:bg-gold-hover"
          >
            Vergleichs-Gespräch anfragen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
