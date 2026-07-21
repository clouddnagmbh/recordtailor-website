import Link from "next/link";
import Script from "next/script";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href: string };

/**
 * Breadcrumb-Leiste + BreadcrumbList-JSON-LD in einem. Der letzte
 * Eintrag ist die aktuelle Seite (kein Link, im UI grau). Für die
 * Suchmaschine wird jede Position gemappt; Google zeigt daraus
 * eine Breadcrumb-Snippet-Zeile im Suchergebnis.
 */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `https://recordtailor.com${c.href}`,
    })),
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-6xl px-5 pt-6 text-xs text-muted-foreground"
    >
      <Script
        id={`ld-breadcrumb-${crumbs[crumbs.length - 1]?.href.replace(/[^\w]+/g, "-")}`}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(jsonLd)}
      </Script>
      <ol className="flex flex-wrap items-center gap-1.5">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={c.href} className="inline-flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3 opacity-60" aria-hidden />}
              {isLast ? (
                <span className="text-foreground/70" aria-current="page">
                  {c.label}
                </span>
              ) : (
                <Link href={c.href} className="hover:text-foreground">
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
