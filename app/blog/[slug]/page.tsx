import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ARTICLES } from "@/lib/blog-data";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.publishedAt,
      tags: article.tags,
    },
    twitter: { title: article.metaTitle, description: article.metaDescription },
  };
}

const DATE_FMT = new Intl.DateTimeFormat("de-AT", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: "CloudDNA GmbH",
      url: "https://recordtailor.com",
    },
    publisher: {
      "@type": "Organization",
      name: "CloudDNA GmbH",
      logo: {
        "@type": "ImageObject",
        url: "https://recordtailor.com/brand/recordtailor.png",
      },
    },
    mainEntityOfPage: `https://recordtailor.com/blog/${article.slug}`,
    keywords: article.tags.join(", "),
  };

  return (
    <div>
      <Script
        id={`ld-article-${article.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(jsonLd)}
      </Script>

      <Breadcrumbs
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: article.title, href: `/blog/${article.slug}` },
        ]}
      />

      <article className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
        <header>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <time dateTime={article.publishedAt}>
              {DATE_FMT.format(new Date(article.publishedAt))}
            </time>
            <span aria-hidden>·</span>
            <span>{article.readingMinutes} min Lesezeit</span>
            <span aria-hidden>·</span>
            <span>{article.tags.join(" · ")}</span>
          </div>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {article.lead}
          </p>
        </header>

        <div className="mt-12 space-y-10">
          {article.sections.map((section, i) => (
            <section key={i} className="space-y-5 text-base leading-relaxed text-foreground/85">
              {section.heading && (
                <h2 className="font-serif text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-surface-muted p-6 sm:p-8">
          <h3 className="font-serif text-xl font-semibold">
            Reden wir darüber.
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            30 Minuten. Sie schicken uns ein anonymisiertes Sample-Dokument
            oder Ihre aktuelle DMS-Fragestellung. Wir zeigen ehrlich, ob
            RecordTailor passt.
          </p>
          <Link
            href="/kontakt"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-cream shadow-soft hover:bg-ink-soft"
          >
            Gespräch vereinbaren
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </div>
  );
}
