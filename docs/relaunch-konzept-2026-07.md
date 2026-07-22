# RecordTailor Website — Relaunch-Konzept & Claude-Code-Anweisung (22. Juli 2026)

> **Als Arbeitsauftrag nutzen:** In Claude Code im Repo-Root: „Lies docs/relaunch-konzept-2026-07.md und setze die Phasen 0–4 in dieser Reihenfolge um. Poste vor jeder Phase eine Schrittliste, committe klein (Conventional Commits), prüfe nach jeder Phase die Akzeptanzkriterien."

Ziel: Die Site zeigt **alle** implementierten Produkt-Features, positioniert RecordTailor als Nr. 1 bei UX und KI — mit **beweisbaren** Claims statt Behauptungen, SEO- und GEO-optimiert (klassische Suche + Answer Engines), rechtssicher für DACH (UWG DE §§ 5–6, UWG AT, ECG/MedienG bleiben erfüllt).

---

## 0. Befund (Kurzfassung)

Die Site ist technisch und redaktionell gut (Next 16 SSG, JSON-LD @graph, llms.txt, 6 Migrations-Landingpages, 4 Blog-Artikel, AT-Impressum, cookieless Analytics). Aber:

1. **Die stärksten Differenzierer fehlen komplett:** RAG-Chat mit Citations, KI-Agenten mit Approval-Inbox + EU-AI-Act-Protokoll, Plain-Language-Workflows, Mail-Ingest, DATEV-Export, MCP-Server. Signaturen und Retention/Legal-Hold nur in Nebensätzen.
2. **Rechtsrisiko:** `/sicherheit` bewirbt „eIDAS-QES PAdES-B-LTA" — im Produkt ist QES noch Mock (siehe `argonaut/docs/Marktanalyse-SWOT-Update-2026-07.md`). Irreführungsgefahr nach § 5 UWG → umformulieren bis Signatur-Stack live ist (§ 6 unten).
3. **EN-SEO ist null:** hreflang zeigt für alle Sprachen auf `/`, EN existiert nur per Cookie — keine indexierbare EN-URL.
4. **Copy-Paste-Altlasten:** README beschreibt MeetingTailor; `analytics.tsx` trackt `mt_*`-Keys und die nicht existente `/demo`-Route (CTA-Events gehen verloren); globals.css-Kommentar; E-Mail-Inkonsistenz (`hello@recordtailor.com` vs. `office@clouddna.at`).
5. **Conversion-Reibung:** kein Formular, kein Demo-Booking — alles mündet in mailto.
6. JSON-LD-Offer `price: "0"` → Google kann „kostenlos" anzeigen.

---

## 1. Positionierung: Nr. 1 behaupten, ohne zu lügen

Superlative sind in DACH zulässig, wenn beweisbar oder erkennbar wertend; **verifizierbare Allein­stellungs­claims schlagen beides**. Deshalb: Claims-Leiter mit drei Stufen — jede Aussage auf der Site muss einer Stufe zuordenbar sein.

**Stufe A — beweisbare Alleinstellung (Herzstück, aggressiv ausspielen):**
- „**Das einzige DMS mit Git für Dokumente.** Branchen, mergen, Zeitreise — niemand sonst kann das." (Marktvergleich belegt: kein Anbieter hat Branching/Merge)
- „**KI-Agenten, die heute arbeiten — nicht auf der Roadmap.** Inbox-, Compliance-, Vertrags- und Rechnungs-Agent, jede Aktion begründet, auditierbar, per Tastendruck freigegeben." (d.velop agent center: Beta Q4 2026; DocuWare/ELO: Roadmap)
- „**Ihre Dokumente verlassen nie Ihr Haus — auch nicht für die KI.** Lokales LLM, On-Premises, null Cloud-Egress." 
- „**Prozesse in einem Satz.** Beschreiben Sie den Ablauf — RecordTailor baut den Workflow. Kein Low-Code-Designer, kein Schulungstag."
- „**Jede KI-Entscheidung beweisbar.** Begründung + Belege pro Aktion, verkettet in der Audit-Chain, als EU-AI-Act-Protokoll exportierbar."

**Stufe B — erkennbar wertende Spitzenstellung (zulässige Werbe-Superlative):** „Das modernste DMS am Markt" (bleibt), „Die schönste Inbox, die je ein Beleg gesehen hat", „DMS in der UX-Klasse von Linear & Notion". Wertend, nicht messbar → zulässig.

**Stufe C — harte Fakten mit Quelle:** Antwortzeiten, Feature-Zahlen, Apache-2.0, unbegrenzte User. Nie Zahlen erfinden; keine Kundenlogos/Testimonials, die es nicht gibt; keine „Gartner"-Bezüge.

**Verboten (bis Produkt-Stand es hergibt):** „revisionssicher" als absolute Eigenschaft (bis Härtungs-Stage 69–71 im Produkt live → bis dahin: „manipulationssichtbare Audit-Kette, jede Änderung kryptografisch verkettet"), „eIDAS-QES" als verfügbares Feature (→ § 6), ISO-27001/IDW-PS-880-Behauptungen (bis Zertifikat da; „in Zertifizierung" erst ab beauftragtem Audit).

**Vergleichende Werbung (§ 6 UWG DE / § 2a UWG AT):** Wettbewerber-Vergleiche sind erlaubt, wenn objektiv, nachprüfbar, wesentliche Eigenschaften, nicht herabsetzend. Regeln für alle `/migration/*`- und neuen `/vergleich/*`-Seiten: nur nachprüfbare Feature-Fakten (aus öffentlichen Produktseiten/Doku der Anbieter, mit Stand-Datum), keine Preisspekulationen über Dritte, keine Herabsetzung („SharePoint-2007-Optik" → stattdessen „klassische Ordner-Metapher"), Quellenhinweis + „Stand: MM/JJJJ" unter jeder Vergleichstabelle.

---

## 2. Neue Informationsarchitektur

Bestehende Struktur bleibt; **neu bzw. ausgebaut:**

```
/produkt                       → wird Übersicht mit Links auf 6 Feature-Seiten
/produkt/ki-agenten            NEU  ← wichtigste Seite der ganzen Site
/produkt/wissen                NEU  (RAG-Chat mit Citations, Hybrid-Suche, Knowledge Graph)
/produkt/workflows             NEU  (Plain-Language, Freigaben, n-Augen, Fristen, Formulare)
/produkt/posteingang           NEU  (Scan + Mail-Ingest, Triage, Stapel, MFP)
/produkt/compliance            NEU  (Audit-Chain, Retention, Legal Hold, DSGVO, Beweispaket)
/produkt/integrationen         NEU  (SAP ArchiveLink, CMIS, DATEV, MCP, API)
/vergleich                     NEU  Übersicht
/vergleich/[slug]              NEU  recordtailor-vs-docuware|elo|d-velop|m-files|sharepoint|paperless-ngx
/branchen/[slug]               NEU (Phase 4): steuerberater|oeffentliche-verwaltung|industrie|gesundheit
/glossar/[slug]                NEU (Phase 4): 20–30 Begriffe (GoBD, RAG, eIDAS, Legal Hold, IDP, CMIS …)
/en, /en/produkt, …            NEU  echte EN-Routen (Phase 3)
```

**Homepage-Umbau:** Hero-Timeline bleibt (stark!), aber danach neue Sektion **„Die KI arbeitet. Sie entscheiden."** — Agenten-Showcase mit nachgebauter Approval-Karte (Begründung + Konfidenz + ✓/✗-Tasten) als animierte Komponente. Feature-Grid von 8 auf 12 Kacheln (neu: Agenten, Chat mit Belegen, Workflows-per-Satz, Mail-Ingest — DATEV & MCP in Integrationen-Kachel). Vergleichs-Teaser → `/vergleich`. Preis-Sektion unverändert.

---

## 3. SEO-Programm

1. **Keyword-Mapping pro neuer Seite** (DE zuerst): ki-agenten → „KI Agenten Dokumentenmanagement, DMS KI Agenten, agentic AI DMS"; wissen → „DMS KI Suche, Dokumente Chat DSGVO, RAG on premise"; workflows → „Dokumenten-Workflow-Software, Rechnungsfreigabe Workflow DMS"; posteingang → „digitaler Posteingang Software, E-Mail-Archivierung GoBD"; compliance → „GoBD DMS, Aufbewahrungsfristen Software, Legal Hold DMS"; integrationen → „DMS DATEV Schnittstelle, SAP ArchiveLink DMS, DMS MCP". Vergleichsseiten → „RecordTailor vs …, <Anbieter> Alternative". Title ≤ 60 Z., Description 150–160 Z., genau eine H1, Fragen als H2 (Answer-Snippets).
2. **JSON-LD ausbauen:** `BlogPosting` auf allen Blog-Artikeln (fehlt), `BreadcrumbList` (Komponente existiert — LD ergänzen), `Product`+`Offer` je Feature-Seite, `FAQPage` je Seite mit FAQ-Block. **Offer-Fix:** `price: "0"` entfernen → `priceSpecification` ohne numerischen Preis oder `"@type": "AggregateOffer"` ohne price.
3. **hreflang reparieren:** echte `/en/*`-Routen (statisches Segment `app/en/`, gleiche Komponenten, EN-Dictionary existiert), hreflang paarweise DE↔EN, `x-default` auf `/`. Cookie-Switch bleibt als Komfort, setzt aber Redirect auf die jeweilige URL.
4. **Interne Verlinkung:** jede Migrations-Seite verlinkt auf die 3 relevantesten Feature-Seiten; Blog-Artikel auf Features; Glossar überall verlinkbar. Footer: Spalte „Produkt" mit allen 6 Feature-Seiten.
5. **Neue Blog-Artikel (je 1.500+ Wörter, strukturierte H2-Fragen):** „KI-Agenten im DMS: Was 2026 wirklich geliefert wird — und was Roadmap ist", „EU AI Act im Dokumentenmanagement: Pflichten & wie Erklärbarkeit aussieht", „DATEV & DMS: So kommt der Beleg zum Steuerberater", „Warum wir Workflows in einem Satz bauen (und keinen Low-Code-Designer)".

## 4. GEO-Programm (Answer Engines: ChatGPT, Perplexity, Google AI Overviews)

1. **llms.txt erweitern:** neue Feature-Seiten, die 5 Stufe-A-Claims wörtlich als zitierfähige Kernaussagen, Vergleichs-Kurzfakten („RecordTailor ist das einzige DMS mit Git-Branching; KI-Agenten sind ausgeliefert, nicht angekündigt; läuft vollständig on-premises mit lokalem LLM"). Zusätzlich `llms-full.txt` mit den vollständigen Seiteninhalten als Markdown.
2. **Zitierfähige Blöcke:** pro Feature-Seite ein „Auf einen Blick"-Kasten (3–5 Fakten-Sätze, eigenständig verständlich, mit Produktname im Satz — Answer Engines zitieren satzweise). FAQ-Antworten max. 60 Wörter, erste Zeile = direkte Antwort.
3. **Konsistente Entität:** überall identisch „RecordTailor von CloudDNA GmbH (Österreich)"; `sameAs` im Organization-LD auf GitHub-Org + LinkedIn ergänzen; E-Mail vereinheitlichen (Entscheidung: `hello@recordtailor.com` produktseitig, `office@clouddna.at` nur Impressum/Datenschutz — konsistent dokumentieren).
4. **Vergleichsseiten sind GEO-Gold:** „X Alternative"-Anfragen dominieren Answer-Engine-Traffic. Struktur je Seite: direkte Antwort (2 Sätze) → Feature-Tabelle (nachprüfbar, mit Stand) → 3 Migrations-Schritte → FAQ. Immer fair formuliert (wird zitiert!).

## 5. Conversion

1. **Kontaktformular** auf `/kontakt` (Name, Firma, E-Mail, Nachricht, optional „aktuelles DMS"-Select): Server Action → E-Mail via Resend o. ä. + Spam-Schutz ohne Cookie (Honeypot + Zeit-Falle, kein reCAPTCHA → bleibt consent-frei). DSGVO: Zweck-Hinweis + Verweis Datenschutzerklärung (Abschnitt „Kontaktformular" dort ergänzen, Art. 6 Abs. 1 lit. b).
2. **Demo-Booking:** Cal.com-Link (self-hostbar, passt zur Souveränitäts-Story) als „30-Minuten-Demo buchen" neben jedem „Kontakt"-CTA.
3. **Analytics-Fix:** `mt_*`-Keys → `rt_*`, CTA-Matching auf `/kontakt` + Cal-Link statt `/demo`, `meetingtailor`-Sonderfall entfernen.

## 6. Rechtliche Leitplanken (verbindlich für alle Texte)

1. **QES-Passage sofort ändern** (`/sicherheit`, `sec.item3`): bis der Signatur-Stack produktiv ist → „Elektronische Signaturen mit manipulationssichtbarer Beweiskette; qualifizierte Signatur (eIDAS QES) über Vertrauensdiensteanbieter in Vorbereitung." Sobald Argonaut-Stage 43/44 + A-Trust live: zurück auf QES als Feature. Gleiches Muster für alle Roadmap-Features: **kennzeichnen oder weglassen.**
2. „Revisionssicher" nur mit erläuterndem Zusatz verwenden („revisionssichere Ablage nach GoBD-Kriterien: unveränderbar verkettete Protokollierung …") — absolute Sicherheitsversprechen vermeiden; nach Produkt-Stage 69–71 + Testat darf die Formulierung härter werden.
3. Vergleichstabellen: nur öffentlich nachprüfbare Fakten, Stand-Datum, keine Herabsetzung, Markennennung ist zulässig (referierende Nutzung), ®/™ nicht nötig, aber Hinweis „Alle Markennamen sind Eigentum der jeweiligen Inhaber" im Footer der Vergleichsseiten.
4. Keine erfundenen Kunden, Logos, Bewertungen, Auszeichnungen, „bekannt aus"-Leisten. Zahlen nur mit interner Mess-Grundlage.
5. Impressum/Datenschutz bleiben AT-korrekt (ECG/MedienG/DSB) — bei Formular-Einführung Datenschutzerklärung erweitern (siehe 5.1).

---

## 7. Claude-Code-Umsetzungsphasen

### Phase 0 — Hygiene (½ Tag)
README neu schreiben (RecordTailor, Port 4987, echte Routen, Architektur-Kurzbeschreibung). `analytics.tsx`: `rt_*`-Keys, CTA-Matching `/kontakt` + Cal-Link, MeetingTailor-Reste raus. globals.css-Kommentar. E-Mails vereinheitlichen (§ 4.3). JSON-LD `price: "0"` fixen. **QES-Passage nach § 6.1 umformulieren.** Im argonaut-Repo separat: `apps/marketing` als deprecated markieren (README-Hinweis + aus Deploy nehmen).
*Akzeptanz:* `grep -ri "meetingtailor\|mt_ma\|mt_marketing" app components lib` leer; Lighthouse ≥ 95 unverändert; kein QES-Verfügbarkeitsclaim mehr.

**Umgesetzt am 22. Juli 2026.** README auf RecordTailor + Port 4987 umgestellt, Architektur-Kurzbeschreibung ergänzt. `analytics.tsx` auf `rt_*`-Keys (SID + Site-Key), CTA-Matching erweitert um `/kontakt`, `cal.com` und `mailto:`, `!recordtailor.com`-Outbound-Filter. `globals.css`-Kommentar auf „RecordTailor Design-Tokens — geteilt mit der Tailor-Familie". Produkt-E-Mail vereinheitlicht auf `hello@recordtailor.com` (Impressum + Datenschutz weiter mit `office@clouddna.at` als CloudDNA-Kontakt). JSON-LD-Offer auf `AggregateOffer` ohne numerischen Preis umgestellt (drei Sub-Offers je Deployment-Modell mit `priceSpecification.description: "Preis auf Anfrage"`). QES-Passage entschärft: `sec.item3` (DE + EN), `sec.body` (DE + EN), `sec.meta.desc` (DE + EN), `sicherheit`-CLI-Ausgabe, d.velop-Migrations-Body und -FAQ, `featureList` im SoftwareApplication-JSON-LD — überall „in Vorbereitung"-Formulierung. SEO-Keyword „eIDAS QES DMS" entfernt, dafür KI-Agenten/RAG/MCP/DATEV-Keywords ergänzt. Neue GEO-Kernaussagen in `public/llms.txt` (die fünf Stufe-A-Claims aus §1 als zitierfähige Sätze mit Produktname). `pnpm build` grün (28 Seiten SSG, TS ohne Fehler). — Anmerkung: `pnpm lint` scheitert projektweit, weil `eslint.config.js` fehlt (Preexisting-Bug, ESLint 9 verlangt Flat-Config). Wird in Phase 1 mitgezogen. Sibling-Verweise auf MeetingTailor in `tailor-family.tsx` und `story/page.tsx` sind bewusst und bleiben (Tailor-Familie zeigt die sieben Schwester-Marken).

### Phase 1 — Feature-Seiten + Homepage (Kern, ~1 Woche)
Die 6 `/produkt/*`-Seiten nach § 2 bauen — Datenmodell wie `lib/migration-data.ts` (strukturierte TS-Objekte: hero, glance-Fakten, sections, faq, jsonLd). Content aus den Produkt-Fakten in `argonaut/docs/Marktanalyse-SWOT-Update-2026-07.md` (Ist-Stand-Tabelle) ableiten — **nur Features behaupten, die dort als ✅ geführt sind.** Homepage: Agenten-Sektion mit Approval-Karten-Animation (reine CSS/`Reveal`-Technik, kein neues Framework), Feature-Grid auf 12, Navigation + Footer erweitern. Alle Texte nach Claims-Leiter § 1 und Leitplanken § 6; Tonalität wie Bestand (präzise, selbstbewusst, redaktionell — „ordentlich auftragen", aber jeder Satz Stufe A/B/C zuordenbar).
*Akzeptanz:* alle 6 Seiten mit Title/Description/H1/FAQ+JSON-LD/„Auf einen Blick"-Block; interne Links nach § 3.4; sitemap enthält sie; `pnpm build` grün.

**Umgesetzt am 22. Juli 2026.** Neues Datenmodell `lib/produkt-data.ts` (strukturierte `FeaturePage`-Objekte: eyebrow, h1, metaTitle ≤ 60 Z., metaDescription 150–165 Z., lead, `glance[]` mit 5 zitierfähigen Sätzen à Produktname, sections, faq, related). Sechs Slugs: `ki-agenten`, `wissen`, `workflows`, `posteingang`, `compliance`, `integrationen` — Inhalte strikt aus der ✅-Ist-Stand-Tabelle des Argonaut-SWOT-Updates; Roadmap-Themen (QES, Retention-Enforcement, Graph/Gmail, XRechnung/ZUGFeRD, DATEVconnect-API) als „in Vorbereitung" gekennzeichnet; ❌-Themen (Office-Add-ins, Mobile, ISO/PS-880, MFA/SSO-SAML/SCIM sichtbar) ganz weggelassen. Dynamische Route `app/produkt/[slug]/page.tsx` mit `@graph`-JSON-LD (BreadcrumbList + Product/Offer als AggregateOffer-Kind + FAQPage), title via `absolute:` (bypass Root-Template), interne Links auf `related`-Slugs. `/produkt`-Übersicht auf 3-Spalten-Katalog mit Icon-Cards je Feature. Homepage: neue Sektion S3c „Die KI arbeitet. Sie entscheiden." mit Approval-Karten-Simulation (Rechnungs-Agent, 94 % Konfidenz, 3-Way-Match — reine CSS + Lucide, kein neues Framework); Feature-Grid von 8 auf 12 Kacheln (neu: KI-Agenten, Chat mit Belegen, Workflows in einem Satz, Mail-Ingest — mit Deep-Links auf die neuen Feature-Seiten). Footer auf 4 Spalten (Marke, Produkt inkl. 6 Feature-Slugs, Unternehmen, Rechtliches). Migrations-Slug-Seiten linken jetzt auf die 3 relevantesten Feature-Seiten (ki-agenten, wissen, integrationen). `sitemap.ts` enthält die 6 neuen URLs (priority 0.9). `public/llms.txt` enthält alle 6 Feature-URLs mit Kurzbeschreibung. Dictionary um `feat.9`–`feat.12` und `agents.*`-Keys erweitert; EN fällt automatisch auf DE zurück (Phase 3 zieht EN nach). Build grün mit 34 Seiten (28 → 34); Lint grün.

### Phase 2 — Vergleichsseiten + Blog (1 Woche)
`/vergleich` + 6 Slugs, Datenmodell `lib/compare-data.ts` (Regeln § 1 + § 6.3, Feature-Fakten mit „Stand 07/2026"). Die 4 neuen Blog-Artikel (§ 3.5) mit `BlogPosting`-LD. `BreadcrumbList`-LD in `breadcrumbs.tsx`.
*Akzeptanz:* Rich-Results-Test grün für FAQ/BlogPosting/Breadcrumb; jede Vergleichstabelle hat Quellen-/Stand-Zeile + Marken-Disclaimer.

**Umgesetzt am 22. Juli 2026.** `lib/compare-data.ts` mit 6 Slugs (docuware, elo, d-velop, m-files, sharepoint, paperless-ngx). Jeder Eintrag hat direkte 2-Satz-Antwort (Answer-Engine-Snippet), 11–13 Feature-Zeilen mit RT und Wettbewerber-Zellen (nur nachprüfbare Fakten aus öffentlichen Produktseiten, keine Preisspekulationen, keine Herabsetzung, Roadmap-Angaben als „angekündigt" gekennzeichnet), 3 Migrations-Schritte, 3 FAQ. Konstante `COMPARISON_AS_OF = "Stand 07/2026"` überall referenziert. `/vergleich`-Übersicht als 3-Spalten-Kachel-Katalog. `/vergleich/[slug]` mit @graph-JSON-LD (BreadcrumbList + FAQPage), Tabelle mit Head-Stand-Zeile und Marken-Disclaimer im Fuß. 4 neue Blog-Artikel: „KI-Agenten im DMS 2026" (11 min, 6 H2), „EU AI Act im DMS" (12 min, 7 H2), „DATEV & DMS" (10 min, 6 H2), „Warum wir Workflows in einem Satz bauen" (9 min, 7 H2). `app/blog/[slug]/page.tsx` liefert jetzt `BlogPosting`-LD (vorher `Article` — kompatibel, aber §3.2 verlangt explizit `BlogPosting`). `BreadcrumbList`-LD ist bereits in `components/breadcrumbs.tsx` per `crumbs`-Prop enthalten. Sitemap um `/vergleich` + 6 Slugs erweitert (priority 0.85). `public/llms.txt` um alle Vergleichs-URLs ergänzt. Nav: neuer Header-Link „Vergleich". Build grün: 34 → 43 Seiten.

### Phase 3 — EN + hreflang (3–4 Tage)
`app/en/*`-Routen (gemeinsame Section-Komponenten, Dictionary erweitern; Migrations-/Vergleichsseiten zunächst DE-only mit hreflang nur wo EN existiert). hreflang paarweise korrekt, Sitemap zweisprachig, LangSwitch = Link statt Cookie-Action (Cookie bleibt für Rückkehrer-Redirect auf `/`).
*Akzeptanz:* `/en` liefert 200 + eigenständige Metadata; hreflang validiert (kein Verweis auf nicht existierende URLs).

**Umgesetzt am 22. Juli 2026.** `middleware.ts` setzt bei `/en/*`-Requests den Header `x-rt-locale: en`; `getLocale()` wertet ihn vor Cookie und Accept-Language aus. So bleiben alle Section-Komponenten unverändert und `getT()` liefert unter `/en/*` automatisch EN-Strings (mit DE-Fallback für neue Keys aus Phase 1/2). Neue EN-Routen unter `app/en/*` als dünne Re-Exports der jeweiligen DE-Seite mit eigener `generateMetadata` (title absolut, description, canonical, `languages` via neuem `lib/i18n/alternates.ts`-Helper): `/en`, `/en/produkt`, `/en/produkt/[slug]` (6 Slugs), `/en/on-premise`, `/en/sicherheit`, `/en/preise`, `/en/kontakt`, `/en/story` — 14 EN-Seiten. DE-Seiten mit EN-Pendant tragen jetzt `alternates.languages` paarweise (`bilingualAlternates`); Seiten ohne EN-Pendant (Migration, Vergleich, Blog-Artikel) bekommen bewusst keine `en`-Verweise, damit hreflang keine nicht existierenden URLs behauptet. Root-Layout linkt `en → /en`. `components/lang-switch.tsx` ist jetzt ein Link-Switcher: bekannte Routen wechseln direkt (`/foo` ↔ `/en/foo`); für Seiten ohne EN-Pendant führt der EN-Link auf `/en`. Der frühere Cookie-Toggle entfällt; der Cookie selbst bleibt für zukünftige Rückkehrer-Weichen bestehen. `app/sitemap.ts` refaktoriert: jeder Eintrag hat `alternates.languages` (bilingual wo EN existiert, DE-only sonst); zusätzlich sind die 14 EN-URLs als eigenständige Einträge in der Sitemap gelistet. Smoke-Test: `/en`, `/en/produkt/ki-agenten`, `/en/kontakt` liefern 200; `<html lang="en">` auf `/en`, `<html lang="de-AT">` auf `/`; hreflang-Link-Tags erscheinen paarweise im Head. Build grün: 43 → ~50 Routen (dynamische [slug] gerechnet); Lint grün.

### Phase 4 — Conversion + GEO-Ausbau (1 Woche)
Kontaktformular + Cal.com (§ 5, inkl. Datenschutz-Abschnitt), llms.txt + `llms-full.txt` (§ 4), `/glossar` (20 Begriffe, je 150–300 Wörter + `DefinedTerm`-LD), `/branchen` (4 Seiten, Wiederverwendung Feature-Content mit Branchen-Frame: Steuerberater → DATEV; Verwaltung → On-Prem/eAkte-Roadmap ehrlich gekennzeichnet).
*Akzeptanz:* Formular-E2E (Honeypot blockt Bot-Submit), llms.txt enthält alle Routen + Stufe-A-Claims, Lighthouse ≥ 95 auf allen neuen Seiten.

### Querschnitt
Vor jedem Commit `pnpm lint && pnpm build`. Jede neue Seite in `sitemap.ts`. Kein neues NPM-Paket ohne Not (Ausnahme: Mail-Versand fürs Formular). Bilder < 300 KB. Deutsch = Leitsprache, EN folgt. Nach Abschluss: `docs/relaunch-konzept-2026-07.md` um „Umgesetzt am …"-Vermerke ergänzen.

---

## 8. Nach dem Relaunch (Backlog, nicht Teil des Auftrags)

Screenshot-/Video-Tour des echten Produkts (App-Screens-Komponente mit echten UI-Captures ersetzen), Case Study sobald erster Referenzkunde zitierbar, „Live-Demo-Tenant" (read-only Spielwiese), Newsletter, Preisseite überarbeiten sobald Pricing-Entscheidung steht, `/status`-Seite (Vertrauenssignal), Claims-Upgrade nach ISO-27001-/PS-880-Meilensteinen und QES-Go-Live.
