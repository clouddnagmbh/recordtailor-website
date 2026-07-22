# RecordTailor — Marketing-Website

**Every record measures.** Marketing-Site für RecordTailor, das KI-native Dokumentenmanagement-System für Unternehmen, die ein Legacy-DMS ablösen (Alfresco, ELO, DocuWare, d.velop, OpenText, SharePoint) oder erstmals ein modernes DMS einführen. Ein Produkt der CloudDNA GmbH, Österreich.

Statisch gerendert mit **Next.js 16 App Router** und **Tailwind v4**. Deployment auf Vercel.

## Setup

```bash
pnpm install
pnpm dev            # http://localhost:4987
pnpm build          # produziert `.next/`
pnpm start          # produktiven Build lokal starten
```

## Environment

Kopiere `.env.example` nach `.env.local` und fülle bei Bedarf aus:

- `NEXT_PUBLIC_APP_URL` — App-URL, an die „In die App springen"-CTAs verlinken. Default: `https://app.recordtailor.com`.
- `NEXT_PUBLIC_ANALYTICS_ENDPOINT` — Optionaler Collector-Endpoint (cookielos, sessionStorage-basiert).
- `NEXT_PUBLIC_ANALYTICS_SITE_KEY` — Site-Key für den Collector.

## Struktur

```
app/                App-Router-Seiten (Homepage, /produkt, /produkt/*, /migration/[slug],
                    /vergleich, /vergleich/[slug], /blog, /on-premise, /sicherheit,
                    /preise, /story, /kontakt, /impressum, /datenschutz, /en/*)
components/         Site-Header, -Footer, LangSwitch, Reveal, App-Screens, Breadcrumbs,
                    Analytics, TailorFamily, EmblemSlab, AustriaBadge, BrandMark
lib/                blog-data.ts, migration-data.ts, compare-data.ts (Vergleichs­daten),
                    cn.ts, i18n/ (DE/EN-Dictionary, Locale-Cookie-Action)
public/             brand/ (Logo-Varianten), llms.txt, llms-full.txt
```

## Architektur-Kurz

- **Rendering:** ausschließlich SSG (kein Server-Side-Rendering zur Laufzeit, kein ISR — Content ist redaktionell, nicht Datenbank-getrieben).
- **Content-Modell:** strukturierte TypeScript-Objekte pro Sammlungs­seite (`lib/migration-data.ts`, `lib/compare-data.ts`, `lib/blog-data.ts`) — jede Seite eine kompakte Datei mit Hero, „Auf einen Blick"-Fakten, Sektionen, FAQ, JSON-LD.
- **JSON-LD:** `@graph` mit Organization + SoftwareApplication + FAQPage in `app/layout.tsx`; pro Seite ergänzt um `BreadcrumbList`, `Product`/`Offer`, `FAQPage`, `BlogPosting`.
- **i18n:** Cookie-gesteuerter Locale-Switch DE↔EN; ab Phase 3 zusätzlich indexierbare `/en/*`-Routen mit paarweisen hreflang-Alternates.
- **Kein Client-JS außer Reveal-Animationen, Analytics, LangSwitch, Formular-Submit.**

## Deployment

Verbinde das Repo mit Vercel — Framework wird automatisch als Next.js erkannt. Setze in Vercel die Env-Variable `NEXT_PUBLIC_APP_URL` auf die Ziel-App-Domain. Alles andere ist statisch (SSG). Lighthouse-Ziel: ≥ 95 in allen vier Kategorien.

## Konventionen

- Kein Client-JS außer für Interaktion (Reveal-Animation, Sprachumschalter, Analytics, Formular).
- Fonts via `next/font/google` (Fraunces für Serif-Display, Inter für Sans).
- Farbtokens in `app/globals.css` (Ivory · Midnight Navy · Heritage Blue — Tailor-Familie).
- Nur `lucide-react` als externe UI-Lib.
- Bilder < 300 KB. Neue Seiten immer in `app/sitemap.ts` und `public/llms.txt` eintragen.

## Lizenz

Proprietär. © CloudDNA GmbH.
