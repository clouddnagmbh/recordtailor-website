import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { ARTICLES } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Feldstudien und Praxis-Wissen zu DMS-Migration, KI-native Dokumentenverwaltung, Deployment-Entscheidungen. Von Menschen, die zehn Jahre DMS-Projekte hinter sich haben.",
  alternates: { canonical: "/blog" },
};

const DATE_FMT = new Intl.DateTimeFormat("de-AT", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BlogIndexPage() {
  const sorted = [...ARTICLES].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
  return (
    <div>
      <Breadcrumbs
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:py-20">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              <BookOpen className="mr-1 inline h-3 w-3" />
              Aus der Werkstatt
            </div>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Feldstudien, keine Meinungsstücke.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Wir schreiben nicht regelmäßig. Wir schreiben, wenn wir aus
              einem Kundenprojekt etwas gelernt haben, das andere DMS-Käufer
              wissen sollten. Migration, Auswahl, Betrieb — aus der Praxis,
              ohne Marketing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-5">
          <ul className="space-y-6">
            {sorted.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/blog/${a.slug}`}
                  className="group flex flex-col gap-2 rounded-2xl border border-border bg-surface p-6 hover:border-gold/60 hover:shadow-elevated"
                >
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <time dateTime={a.publishedAt}>
                      {DATE_FMT.format(new Date(a.publishedAt))}
                    </time>
                    <span aria-hidden>·</span>
                    <span>{a.readingMinutes} min Lesezeit</span>
                    <span aria-hidden>·</span>
                    <span>{a.tags.join(" · ")}</span>
                  </div>
                  <h2 className="font-serif text-2xl font-semibold tracking-tight group-hover:text-gold">
                    {a.title}
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {a.lead}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-gold">
                    Weiterlesen
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
