import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowRight, Building2, Check } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { BRANCHEN, findBrancheBySlug } from "@/lib/branchen-data";
import { findFeatureBySlug } from "@/lib/produkt-data";

export function generateStaticParams() {
  return BRANCHEN.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const b = findBrancheBySlug(slug);
  if (!b) return {};
  return {
    title: { absolute: b.metaTitle },
    description: b.metaDescription,
    alternates: { canonical: `/branchen/${b.slug}` },
  };
}

export default async function BrancheSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const b = findBrancheBySlug(slug);
  if (!b) notFound();

  const base = "https://recordtailor.com";
  const canonical = `${base}/branchen/${b.slug}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: base + "/" },
          { "@type": "ListItem", position: 2, name: "Branchen", item: base + "/branchen" },
          { "@type": "ListItem", position: 3, name: b.branche, item: canonical },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: b.faq.map((f) => ({
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
        id={`ld-branche-${b.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(graph)}
      </Script>

      <Breadcrumbs
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Branchen", href: "/branchen" },
          { label: b.branche, href: `/branchen/${b.slug}` },
        ]}
      />

      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:py-20">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              <Building2 className="mr-1 inline h-3 w-3" />
              {b.branche}
            </div>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              {b.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{b.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Was Ihre Branche typischerweise braucht
            </div>
            <h2 className="mt-2 font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              Vier Kern-Anforderungen.
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-3">
            {b.needs.map((n, i) => (
              <Reveal key={i} delay={i * 40}>
                <li className="flex items-start gap-3 rounded-2xl border border-border bg-surface px-5 py-4 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{n}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="grid gap-6">
            {b.answers.map((a, i) => (
              <Reveal key={i} delay={i * 60}>
                <article className="rounded-2xl border border-border bg-surface p-8">
                  <h2 className="font-serif text-2xl font-medium tracking-tight">{a.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{a.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {b.featureLinks.length > 0 && (
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-4xl px-5 py-14">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Passende Feature-Seiten
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {b.featureLinks.map((slug) => {
                const rel = findFeatureBySlug(slug);
                if (!rel) return null;
                return (
                  <li key={slug}>
                    <Link
                      href={`/produkt/${rel.slug}`}
                      className="flex h-full flex-col gap-1 rounded-2xl border border-border bg-surface px-5 py-4 text-sm hover:border-gold/60"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                        {rel.eyebrow}
                      </span>
                      <span className="text-base font-medium">{rel.h1}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              Häufige Fragen aus {b.branche}.
            </h2>
          </Reveal>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface">
            {b.faq.map((f, i) => (
              <details key={i} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-semibold">
                  <span>{f.q}</span>
                  <span className="mt-1 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-cream">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-5 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight">
            30 Minuten. Ihr Anwendungsfall. Ehrliche Einordnung.
          </h2>
          <Link
            href="/kontakt"
            className="mt-2 inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-white hover:bg-gold-hover"
          >
            Gespräch anfragen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
