# MeetingTailor — Marketing-Website

**Protokolle nach Maß.** Marketing-Site für MeetingTailor, das KI-gestützte Sitzungsmanagement für Aufsichtsräte, Vorstände, Kommunen, Sparkassen und Genossenschaften. Ein Produkt der CloudDNA GmbH, Österreich.

Statisch gerendert mit **Next.js 16 App Router** und **Tailwind v4**. Deployment auf Vercel.

## Setup

```bash
pnpm install
pnpm dev            # http://localhost:4980 (kein Konflikt mit staytailor:4970)
pnpm build          # produziert `.next/`
pnpm start          # produktiven Build lokal starten
```

## Environment

Kopiere `.env.example` nach `.env.local` und fülle bei Bedarf aus:

- `NEXT_PUBLIC_APP_URL` — App-URL, an die „In die App springen"-CTAs verlinken. Default: `https://app.meetingtailor.com`.
- `NEXT_PUBLIC_ANALYTICS_ENDPOINT` — Optionaler Collector-Endpoint (cookielos, sessionStorage-basiert).
- `NEXT_PUBLIC_ANALYTICS_SITE_KEY` — Site-Key für den Collector.

## Struktur

```
app/            App-Router-Seiten (Homepage + /demo, /preise, /story, ...)
components/    Site-Header, -Footer, LanguageSwitcher, GoldenThread-Demo, Analytics
lib/i18n/       DE/EN-Dictionary, Cookie-basierter Locale-Switch
lib/demo/       Demo-Fixtures für Stadtwerke Grünbach AG (Sitzung, Aufgaben, Chat)
public/brand/   Logos (32/192/512 + Original-PNG)
```

## Deployment

Verbinde das Repo mit Vercel — Framework wird automatisch als Next.js erkannt. Setze in Vercel die Env-Variable `NEXT_PUBLIC_APP_URL` auf die Ziel-App-Domain. Alles andere ist statisch (ISR/SSG). Lighthouse-Ziel: ≥ 95 in allen vier Kategorien.

## Konventionen

- Kein Client-JS außer für Interaktion (goldener Faden, Sprachumschalter, Demo-Viewer, Analytics).
- Fonts via `next/font/google` (Fraunces für Serif-Display, Inter für Sans).
- Farbtokens in `app/globals.css` (Ink/Gold/Cream — Tailor-Familie).
- Nur `lucide-react` als externe UI-Lib.

## Lizenz

Proprietär. © CloudDNA GmbH.
