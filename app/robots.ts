import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://meetingtailor.com/sitemap.xml",
    host: "https://meetingtailor.com",
  };
}
