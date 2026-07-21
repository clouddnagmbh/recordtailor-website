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
    default:
      "RecordTailor — Das modernste DMS am Markt. KI-nativ. On-Premise, Public oder Private Cloud.",
    template: "%s · RecordTailor",
  },
  description:
    "Sie wollen Ihr bestehendes DMS ablösen — Alfresco, ELO, DocuWare, d.velop, OpenText, SharePoint — oder erstmals ein modernes DMS einführen? RecordTailor liest, klassifiziert und findet Dokumente in unter 30 Sekunden. KI-Assistent baut Ihr Belegarten-Schema in vier Stunden. Stapelverarbeitung für tausende Belege. Scan-Ingest ohne Fat-Client. On-Premise, Public Cloud oder Managed Private Cloud. Every record measures.",
  keywords: [
    // Kaufabsicht "DMS ablösen / migrieren"
    "DMS ablösen",
    "DMS wechseln",
    "DMS Migration",
    "Legacy DMS Ablöse",
    "DMS Nachfolger",
    "modernes DMS 2026",
    // Konkrete Wettbewerber-Nachfolge (typische Search-Intents)
    "Alfresco Nachfolger",
    "Alfresco Migration",
    "d.velop Alternative",
    "ELO Alternative",
    "DocuWare Alternative",
    "OpenText Alternative",
    "SharePoint DMS Alternative",
    "SAP ArchiveLink Alternative",
    // Feature-Long-Tails
    "KI Dokumentenmanagement",
    "KI DMS Österreich",
    "AI-native DMS",
    "KI Belegarten Assistent",
    "Dokumenten-Klassifikation KI",
    "Stapelverarbeitung DMS",
    "Batch OCR DMS",
    "MFP Scan Ingest",
    "Scan-Ingest ohne Fat-Client",
    "Hybrid-Suche Dokumente",
    "eIDAS QES DMS",
    "CMIS 1.1 kompatibles DMS",
    // Deployment
    "On-Premise DMS",
    "Air-Gapped DMS",
    "Private Cloud DMS EU",
    "Managed DMS Service Österreich",
    "DMS ohne Vendor-Lock-in",
    "Open-Source DMS Enterprise",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "de-AT": "/",
      "de-DE": "/",
      "de-CH": "/",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    siteName: "RecordTailor",
    locale: "de_AT",
    alternateLocale: ["en_US"],
    type: "website",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RecordTailor — Das modernste DMS am Markt.",
    description:
      "DMS ablösen, ohne Consulting-Marathon. KI baut Ihr Schema in vier Stunden. On-Premise, Public oder Private Cloud. Every record measures.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
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
        applicationSubCategory: "Document Management System (DMS)",
        operatingSystem: "Linux / Kubernetes (On-Premise, Public Cloud, Private Cloud Managed)",
        slogan: "Every record measures.",
        description: t("meta.description"),
        featureList: [
          "KI-Triage in Echtzeit (Klassifikation, Extraktion, Zusammenfassung, < 30 s)",
          "KI-Assistent baut Belegarten- und Attribut-Schema aus Bestandsdokumenten",
          "Stapelverarbeitung: tausende Dokumente parallel klassifizieren, deduplizieren",
          "Scan-Ingest ohne Fat-Client: MFP → Browser, Auto-Trennung",
          "Branches & Merge für Dokumente (Git-artige Versionierung)",
          "Hybrid-Suche (BM25 + Vektor-Semantik)",
          "Knowledge Graph über Personen, Verträge, Fristen",
          "SAP ArchiveLink & CMIS 1.1 nativ",
          "eIDAS-QES-Signaturen (PAdES-B-LTA)",
          "Hash-Chain-Audit über alle Events",
          "Migrations-Adapter: Alfresco, ELO, DocuWare, d.velop, OpenText, SharePoint",
          "Air-Gapped Installation, Helm-Chart, Sigstore-Attestation",
          "Open-Source-Kern (Apache-2.0)",
          "Deployment als On-Premise-Produkt, Public Cloud oder Managed Private Cloud",
        ],
        offers: [
          {
            "@type": "Offer",
            name: "On-Premise",
            description:
              "Selbst-betrieben im eigenen Rechenzentrum. Kubernetes, air-gapped-fähig.",
            price: "0",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "Auf Anfrage",
              priceCurrency: "EUR",
            },
          },
          {
            "@type": "Offer",
            name: "Public Cloud",
            description:
              "Deployment in eigenem AWS-, Azure- oder GCP-Account des Kunden.",
            price: "0",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "Auf Anfrage",
              priceCurrency: "EUR",
            },
          },
          {
            "@type": "Offer",
            name: "Private Cloud (Managed Service)",
            description:
              "Von CloudDNA betriebene dedizierte Instanz in EU-Region (Wien, Frankfurt, Zürich).",
            price: "0",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "Auf Anfrage",
              priceCurrency: "EUR",
            },
          },
        ],
        publisher: { "@id": "https://recordtailor.com/#org" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://recordtailor.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Wir wollen unser bestehendes DMS ablösen — geht das mit RecordTailor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ja. Wir haben Migrations-Adapter für Alfresco, d.velop, ELO, DocuWare, OpenText und SharePoint. Content, Metadaten, Versionen und ACLs werden in einem Rutsch übernommen. Erwarten Sie 4–8 Wochen für ein mittleres Legacy-System.",
            },
          },
          {
            "@type": "Question",
            name: "Läuft RecordTailor auch On-Premise?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "RecordTailor ist primär On-Premise-fähig — inklusive air-gapped-Installation, signierten Updates und Sigstore-Attestation. Alternativ läuft es in Ihrem eigenen Public-Cloud-Account (AWS/Azure/GCP) oder als von uns betriebener Managed Private-Cloud-Service in einer EU-Region.",
            },
          },
          {
            "@type": "Question",
            name: "Was kostet RecordTailor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Preis auf Anfrage. Wir verkaufen keinen pro-User-pro-Modul-Baukasten. Ein Preis pro Standort bzw. Managed-Instanz, alle Module inklusive, unbegrenzte Nutzer im eigenen Netz.",
            },
          },
          {
            "@type": "Question",
            name: "Wie schnell klassifiziert die KI ein Dokument?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Unter 30 Sekunden pro Dokument auf einer lokalen GPU. Bei Stapelverarbeitung parallelisiert über hunderte Dokumente gleichzeitig — 500 Belege in wenigen Minuten.",
            },
          },
          {
            "@type": "Question",
            name: "Brauchen wir Consulting-Setup, um Belegarten zu definieren?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nein. Der KI-Assistent schaut Ihren Dokumenten-Bestand an und schlägt ein komplettes Belegarten- und Attribut-Modell vor. Vier Stunden statt vierzig Tage. Sie korrigieren nur, was nicht passt.",
            },
          },
        ],
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
