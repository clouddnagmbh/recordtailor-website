import type { MetadataRoute } from "next";

import { ARTICLES } from "@/lib/blog-data";
import { COMPARISONS } from "@/lib/compare-data";
import { LEGACY_DMS } from "@/lib/migration-data";
import { PRODUKT_PAGES } from "@/lib/produkt-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://recordtailor.com";
  const now = new Date();

  const staticUrls: Array<{
    path: string;
    freq: "daily" | "weekly" | "monthly";
    priority: number;
  }> = [
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

  const produktUrls = PRODUKT_PAGES.map((p) => ({
    url: `${base}/produkt/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const compareUrls = COMPARISONS.map((c) => ({
    url: `${base}/vergleich/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const migrationUrls = LEGACY_DMS.map((d) => ({
    url: `${base}/migration/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogUrls = ARTICLES.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticUrls.map(({ path, freq, priority }) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: freq,
      priority,
    })),
    ...produktUrls,
    ...compareUrls,
    ...migrationUrls,
    ...blogUrls,
  ];
}
