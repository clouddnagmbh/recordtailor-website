import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://recordtailor.com/sitemap.xml",
    host: "https://recordtailor.com",
  };
}
