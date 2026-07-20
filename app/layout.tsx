import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";

import { Analytics } from "@/components/analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getLocale, getT } from "@/lib/i18n";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://recordtailor.com"),
  title: {
    default: "RecordTailor — Dokumente nach Maß.",
    template: "%s · RecordTailor",
  },
  description:
    "RecordTailor — Dokumente nach Maß. KI-natives Dokumentenmanagement, ausschließlich On-Premise. Every record measures. Aus Österreich.",
  keywords: [
    "On-Premise DMS",
    "KI Dokumentenmanagement",
    "AI DMS on premise",
    "SAP ArchiveLink Alternative",
    "Alfresco Nachfolger",
    "DocuWare Alternative",
    "DMS ohne Cloud",
    "Air-Gapped DMS",
    "Enterprise Content Management Österreich",
    "CMIS 1.1 kompatibles DMS",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "RecordTailor",
    locale: "de_AT",
    type: "website",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RecordTailor — Dokumente nach Maß.",
    description: "Every record measures. On-Premise DMS aus Österreich.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1120",
  colorScheme: "light",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [t, locale] = await Promise.all([getT(), getLocale()]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://recordtailor.com/#org",
        name: "CloudDNA GmbH",
        url: "https://recordtailor.com",
        brand: { "@type": "Brand", name: "RecordTailor" },
        contactPoint: {
          "@type": "ContactPoint",
          email: "hello@recordtailor.com",
          contactType: "customer support",
          areaServed: ["AT", "DE", "CH"],
          availableLanguage: ["German", "English"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Untere Hauptstraße 23",
          postalCode: "7410",
          addressLocality: "Loipersdorf",
          addressRegion: "Burgenland",
          addressCountry: "AT",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://recordtailor.com/#app",
        name: "RecordTailor",
        applicationCategory: "BusinessApplication",
        operatingSystem: "On-Premise · Linux / Kubernetes",
        slogan: "Every record measures.",
        description: t("meta.description"),
        featureList: [
          "KI-Triage in Echtzeit (Klassifikation, Extraktion, Zusammenfassung)",
          "Branches & Merge für Dokumente (Git-artige Versionierung)",
          "Hybrid-Suche (BM25 + Vektor)",
          "Knowledge Graph über Personen, Verträge, Fristen",
          "SAP ArchiveLink & CMIS 1.1 nativ",
          "Scan-Ingest ohne Fat-Client (MFP → Browser)",
          "eIDAS-QES-Signaturen (PAdES-B-LTA)",
          "Hash-Chain-Audit über alle Events",
          "Air-Gapped Installation, Helm-Chart, Sigstore-Attestation",
          "Open-Source-Kern (Apache-2.0)",
        ],
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "Auf Anfrage",
            priceCurrency: "EUR",
          },
        },
        publisher: { "@id": "https://recordtailor.com/#org" },
      },
    ],
  };

  return (
    <html
      lang={locale === "en" ? "en" : "de-AT"}
      className={`${inter.variable} ${fraunces.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
