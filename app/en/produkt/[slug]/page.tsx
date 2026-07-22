import type { Metadata } from "next";

import ProduktSlugPage from "@/app/produkt/[slug]/page";
import { bilingualAlternates } from "@/lib/i18n/alternates";
import { PRODUKT_PAGES, findFeatureBySlug } from "@/lib/produkt-data";

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
      canonical: `/en/produkt/${page.slug}`,
      languages: bilingualAlternates(`/produkt/${page.slug}`, `/en/produkt/${page.slug}`),
    },
  };
}

export default ProduktSlugPage;
