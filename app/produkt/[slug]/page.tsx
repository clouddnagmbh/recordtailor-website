import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { PRODUKT_PAGES, findFeatureBySlug } from "@/lib/produkt-data";
import { bilingualAlternates } from "@/lib/i18n/alternates";

export function generateStaticParams() {
  return PRODUKT_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = findFeatureBySlug(slug);
  if (!page) return {};
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: {
      canonical: `/produkt/${page.slug}`,
      languages: bilingualAlternates(`/produkt/${page.slug}`, `/en/produkt/${page.slug}`),
    },
    openGraph: { title: page.metaTitle, description: page.metaDescription },
    twitter: { title: page.metaTitle, description: page.metaDescription },
  };
}

export default async function ProduktSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = findFeatureBySlug(slug);
  if (!page) notFound();

  const base = "https://recordtailor.com";
  const canonical = `${base}/produkt/${page.slug}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: base + "/" },
          { "@type": "ListItem", position: 2, name: "Produkt", item: base + "/produkt" },
          { "@type": "ListItem", position: 3, name: page.eyebrow, item: canonical },
        ],
      },
      {
        "@type": "Product",
        name: `RecordTailor · ${page.eyebrow}`,
        description: page.metaDescription,
        brand: { "@type": "Brand", name: "RecordTailor" },
        url: canonical,
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EUR",
            description: "Preis auf Anfrage",
          },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.map((f) => ({
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
        id={`ld-produkt-${page.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(graph)}
      </Script>

      <Breadcrumbs
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Produkt", href: "/produkt" },
          { label: page.eyebrow, href: `/produkt/${page.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:py-20">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              <Sparkles className="mr-1 inline h-3 w-3" />
              {page.eyebrow}
            </div>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {page.lead}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Auf einen Blick */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Auf einen Blick
            </div>
            <h2 className="mt-2 font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              Fünf Sätze, die alles Wesentliche sagen.
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-3">
            {page.glance.map((line, i) => (
              <Reveal key={i} delay={i * 40}>
                <li className="flex items-start gap-3 rounded-2xl border border-border bg-surface px-5 py-4 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{line}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Sections */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="grid gap-6">
            {page.sections.map((s, i) => (
              <Reveal key={i} delay={i * 60}>
                <article className="rounded-2xl border border-border bg-surface p-8">
                  <h2 className="font-serif text-2xl font-medium tracking-tight">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              Häufige Fragen zu {page.eyebrow}.
            </h2>
          </Reveal>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface">
            {page.faq.map((f, i) => (
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

      {/* Related */}
      {page.related.length > 0 && (
        <section className="border-b border-border bg-cream">
          <div className="mx-auto max-w-4xl px-5 py-14">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Verwandte Feature-Seiten
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {page.related.map((slug) => {
                const rel = findFeatureBySlug(slug);
                if (!rel) return null;
                return (
                  <li key={slug}>
                    <Link
                      href={`/produkt/${rel.slug}`}
                      className="flex h-full items-center justify-between gap-3 rounded-2xl border border-border bg-surface px-5 py-4 text-sm hover:border-gold/60"
                    >
                      <span className="font-medium">{rel.eyebrow}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-ink py-16 text-cream">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-5 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight">
            Sehen Sie {page.eyebrow.toLowerCase()} an einem Ihrer Dokumente.
          </h2>
          <p className="text-cream/80">
            30 Minuten. Sie schicken ein anonymisiertes Beispiel — wir zeigen live, was RecordTailor damit macht.
          </p>
          <Link
            href="/kontakt"
            className="mt-2 inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-white hover:bg-gold-hover"
          >
            Demo anfragen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
