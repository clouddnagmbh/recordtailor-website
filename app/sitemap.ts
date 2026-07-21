import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://recordtailor.com";
  const now = new Date();
  const urls: Array<{
    path: string;
    freq: "daily" | "weekly" | "monthly";
    priority: number;
  }> = [
    { path: "/", freq: "weekly", priority: 1.0 },
    { path: "/produkt", freq: "monthly", priority: 0.9 },
    { path: "/on-premise", freq: "monthly", priority: 0.9 },
    { path: "/sicherheit", freq: "monthly", priority: 0.8 },
    { path: "/preise", freq: "monthly", priority: 0.9 },
    { path: "/story", freq: "monthly", priority: 0.7 },
    { path: "/kontakt", freq: "monthly", priority: 0.8 },
    { path: "/impressum", freq: "monthly", priority: 0.2 },
    { path: "/datenschutz", freq: "monthly", priority: 0.2 },
  ];
  return urls.map(({ path, freq, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));
}
