import type { MetadataRoute } from "next";

import { ARTICLES } from "@/lib/blog-data";
import { COMPARISONS } from "@/lib/compare-data";
import { LEGACY_DMS } from "@/lib/migration-data";
import { PRODUKT_PAGES } from "@/lib/produkt-data";

const BASE = "https://recordtailor.com";

/** Pfade, für die es echte /en/*-Pendants gibt (Phase 3). Sitemap trägt sie
 *  bilingual mit paarweisen hreflang-Alternates ein. */
const BILINGUAL_PATHS = new Set<string>([
  "/",
  "/produkt",
  "/on-premise",
  "/sicherheit",
  "/preise",
  "/story",
  "/kontakt",
  ...PRODUKT_PAGES.map((p) => `/produkt/${p.slug}`),
]);

type Freq = "daily" | "weekly" | "monthly";

function entry(path: string, freq: Freq, priority: number) {
  const dePath = path === "/" ? "" : path;
  const enPath = path === "/" ? "/en" : `/en${path}`;
  const url = `${BASE}${dePath || "/"}`;
  const languages: Record<string, string> = {
    "de-AT": url,
    "de-DE": url,
    "de-CH": url,
    "x-default": url,
  };
  if (BILINGUAL_PATHS.has(path)) {
    languages.en = `${BASE}${enPath}`;
  }
  return {
    url,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls: Array<{ path: string; freq: Freq; priority: number }> = [
    { path: "/", freq: "weekly", priority: 1.0 },
    { path: "/produkt", freq: "monthly", priority: 0.9 },
    { path: "/on-premise", freq: "monthly", priority: 0.9 },
    { path: "/sicherheit", freq: "monthly", priority: 0.8 },
    { path: "/preise", freq: "monthly", priority: 0.9 },
    { path: "/migration", freq: "monthly", priority: 0.95 },
    { path: "/vergleich", freq: "monthly", priority: 0.9 },
    { path: "/blog", freq: "weekly", priority: 0.7 },
    { path: "/story", freq: "monthly", priority: 0.7 },
    { path: "/kontakt", freq: "monthly", priority: 0.8 },
    { path: "/impressum", freq: "monthly", priority: 0.2 },
    { path: "/datenschutz", freq: "monthly", priority: 0.2 },
  ];

  const produkt = PRODUKT_PAGES.map((p) => entry(`/produkt/${p.slug}`, "monthly", 0.9));
  const compare = COMPARISONS.map((c) => entry(`/vergleich/${c.slug}`, "monthly", 0.85));
  const migration = LEGACY_DMS.map((d) => entry(`/migration/${d.slug}`, "monthly", 0.85));
  const blog = ARTICLES.map((a) => {
    const e = entry(`/blog/${a.slug}`, "monthly", 0.6);
    return { ...e, lastModified: new Date(a.publishedAt) };
  });

  const enOnlyUrls = Array.from(BILINGUAL_PATHS).map((path) => {
    const enPath = path === "/" ? "/en" : `/en${path}`;
    return {
      url: `${BASE}${enPath}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as Freq,
      priority: 0.75,
      alternates: {
        languages: {
          "de-AT": `${BASE}${path === "/" ? "/" : path}`,
          en: `${BASE}${enPath}`,
          "x-default": `${BASE}${path === "/" ? "/" : path}`,
        },
      },
    };
  });

  return [
    ...staticUrls.map((s) => entry(s.path, s.freq, s.priority)),
    ...produkt,
    ...compare,
    ...migration,
    ...blog,
    ...enOnlyUrls,
  ];
}
