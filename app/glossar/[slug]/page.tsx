import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowRight, BookText } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { GLOSSAR, findGlossarEntry } from "@/lib/glossar-data";

export function generateStaticParams() {
  return GLOSSAR.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = findGlossarEntry(slug);
  if (!g) return {};
  return {
    title: { absolute: `${g.term} — DMS-Glossar · RecordTailor` },
    description: g.short,
    alternates: { canonical: `/glossar/${g.slug}` },
  };
}

export default async function GlossarSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = findGlossarEntry(slug);
  if (!entry) notFound();

  const base = "https://recordtailor.com";
  const canonical = `${base}/glossar/${entry.slug}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: base + "/" },
          { "@type": "ListItem", position: 2, name: "Glossar", item: base + "/glossar" },
          { "@type": "ListItem", position: 3, name: entry.term, item: canonical },
        ],
      },
      {
        "@type": "DefinedTerm",
        "@id": canonical,
        name: entry.term,
        description: entry.short,
        url: canonical,
        inDefinedTermSet: {
          "@type": "DefinedTermSet",
          name: "RecordTailor DMS-Glossar",
          url: `${base}/glossar`,
        },
      },
    ],
  };

  return (
    <div>
      <Script
        id={`ld-glossar-${entry.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(graph)}
      </Script>

      <Breadcrumbs
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Glossar", href: "/glossar" },
          { label: entry.term, href: `/glossar/${entry.slug}` },
        ]}
      />

      <article className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          <BookText className="mr-1 inline h-3 w-3" />
          Glossar
        </div>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          {entry.term}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{entry.short}</p>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/85">
          {entry.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {entry.seeAlso && entry.seeAlso.length > 0 && (
          <div className="mt-12 rounded-2xl border border-border bg-surface-muted p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Verwandte Begriffe
            </div>
            <ul className="mt-3 flex flex-wrap gap-2">
              {entry.seeAlso.map((s) => {
                const target = findGlossarEntry(s);
                if (!target) return null;
                return (
                  <li key={s}>
                    <Link
                      href={`/glossar/${target.slug}`}
                      className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1 text-sm hover:border-gold/60"
                    >
                      {target.term}
                      <ArrowRight className="h-3 w-3 opacity-60" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </article>
    </div>
  );
}
