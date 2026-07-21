import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowRight, Check, RefreshCw } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { LEGACY_DMS } from "@/lib/migration-data";

export function generateStaticParams() {
  return LEGACY_DMS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dms = LEGACY_DMS.find((d) => d.slug === slug);
  if (!dms) return {};
  return {
    title: dms.metaTitle,
    description: dms.metaDescription,
    alternates: { canonical: `/migration/${dms.slug}` },
    openGraph: { title: dms.metaTitle, description: dms.metaDescription },
    twitter: { title: dms.metaTitle, description: dms.metaDescription },
  };
}

export default async function MigrationSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dms = LEGACY_DMS.find((d) => d.slug === slug);
  if (!dms) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dms.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div>
      <Script
        id={`ld-migration-${dms.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqJsonLd)}
      </Script>

      <Breadcrumbs
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Migration", href: "/migration" },
          { label: dms.displayName, href: `/migration/${dms.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:py-20">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              <RefreshCw className="mr-1 inline h-3 w-3" />
              {dms.vendor} → RecordTailor
            </div>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              {dms.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {dms.lead}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pain points */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              Warum {dms.displayName}-Kunden zu uns wechseln.
            </h2>
          </Reveal>
          <ul className="mt-8 space-y-3 text-sm">
            {dms.painPoints.map((p, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-surface px-5 py-4">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-thread-red/70" aria-hidden />
                <span className="text-muted-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our answers */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              Was RecordTailor besser macht.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {dms.answers.map((a, i) => (
              <Reveal key={i} delay={i * 80}>
                <article className="h-full rounded-2xl border border-border bg-surface p-6">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gold-soft text-gold">
                    <Check className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold tracking-tight">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Migration phases */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Migrationspfad
            </div>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              In 4–8 Wochen. Ohne Datenverlust.
            </h2>
          </Reveal>
          <ol className="mt-10 space-y-4">
            {dms.migrationPhases.map((phase, i) => (
              <Reveal key={i} delay={i * 80}>
                <li className="flex gap-4 rounded-2xl border border-border bg-surface p-6">
                  <span className="tabular flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-cream">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold tracking-tight">
                      {phase.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {phase.body}
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
              Häufige Fragen zur {dms.displayName}-Migration.
            </h2>
          </Reveal>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface">
            {dms.faq.map((f, i) => (
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
            30 Minuten. Sie zeigen uns Ihr {dms.displayName}. Wir zeigen Ihnen den Weg raus.
          </h2>
          <p className="text-cream/80">
            Schicken Sie uns ein anonymisiertes Schema-Sample. Wir schauen es
            an und geben Ihnen eine ehrliche Migrations-Einschätzung.
          </p>
          <Link
            href="/kontakt"
            className="mt-2 inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-white hover:bg-gold-hover"
          >
            Migrations-Gespräch anfragen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
