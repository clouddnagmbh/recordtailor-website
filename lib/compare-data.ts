/**
 * Vergleichsseiten unter /vergleich/[slug]. Nach § 6 UWG DE / § 2a UWG AT ist
 * vergleichende Werbung zulässig, wenn objektiv, nachprüfbar, wesentliche
 * Eigenschaften betreffend und nicht herabsetzend. Diese Regeln gelten hier
 * strikt:
 *   - Nur öffentlich nachprüfbare Fakten aus Produktdoku/Produktseiten der
 *     jeweiligen Anbieter (Stand: Juli 2026).
 *   - Keine Preisspekulationen über Dritte.
 *   - Keine Herabsetzung („SharePoint-2007-Optik“ ist raus — stattdessen
 *     „klassische Ordner-Metapher“).
 *   - Jede Tabelle trägt „Stand 07/2026“ und einen Marken-Disclaimer.
 *   - Roadmap-Angaben der Wettbewerber werden als „angekündigt“ gekennzeichnet.
 *
 * Datenquellen: Marktanalyse-SWOT-Update 07/2026 sowie die dort zitierten
 * öffentlichen Produktseiten. Wo eine Angabe nicht klar public war, ist die
 * Zelle mit „nicht öffentlich dokumentiert“ befüllt statt geraten.
 */

export type CompareRow = {
  criterion: string;
  rt: string;
  competitor: string;
};

export type CompareEntry = {
  slug: string;
  vendor: string;
  displayName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Zwei Sätze — Zitat-Antwort für Answer Engines. */
  directAnswer: string;
  rows: CompareRow[];
  migrationSteps: { title: string; body: string }[];
  faq: { q: string; a: string }[];
};

const AS_OF = "Stand 07/2026";

export const COMPARISON_AS_OF = AS_OF;

export const COMPARISONS: CompareEntry[] = [
  // --------------------------------------------------------------------------
  // DocuWare
  // --------------------------------------------------------------------------
  {
    slug: "recordtailor-vs-docuware",
    vendor: "DocuWare",
    displayName: "DocuWare",
    metaTitle: "RecordTailor vs. DocuWare — DMS-Vergleich",
    metaDescription:
      "RecordTailor und DocuWare im nachprüfbaren Feature-Vergleich (Stand 07/2026): KI-Agenten, On-Prem, Git-Branching, GoBD-Zertifikate. Fair verglichen, mit Quellen.",
    h1: "RecordTailor vs. DocuWare — der ehrliche Vergleich.",
    directAnswer:
      "DocuWare bringt ein GoBD-Testat und Office-/Outlook-Add-ins mit, RecordTailor liefert dafür produktive KI-Agenten, RAG-Chat mit Citations, Plain-Language-Workflows und Git-artige Dokumenten-Branches on-premises mit lokalem LLM. Wer Zertifikate braucht, greift heute zu DocuWare; wer KI-Vorsprung und volle Datenhoheit will, zu RecordTailor.",
    rows: [
      {
        criterion: "KI-Klassifikation & Extraktion",
        rt: "Produktiv, mit Erklärbarkeit und Few-Shot-Loop",
        competitor: "Produktiv (Intelligent Indexing)",
      },
      {
        criterion: "KI-Agenten (Inbox/Compliance/Vertrag/Rechnung)",
        rt: "Vier Agenten produktiv, Auto-Apply-Gate mit Konfidenz",
        competitor: "Angekündigt (Roadmap)",
      },
      {
        criterion: "RAG-Chat mit Citations",
        rt: "Produktiv, per-Tenant Embeddings",
        competitor: "Nicht öffentlich als Feature dokumentiert",
      },
      {
        criterion: "Plain-Language-Workflows",
        rt: "Ein Satz → validiertes YAML → Klartext-Rückblick",
        competitor: "Grafischer Designer (Kinetic)",
      },
      {
        criterion: "Lokales LLM / kein Cloud-Egress",
        rt: "Ollama-Default; kein Cloud-Egress",
        competitor: "Cloud-KI-Dienste",
      },
      {
        criterion: "Deployment On-Premise",
        rt: "Docker Compose oder Kubernetes; air-gapped-fähig",
        competitor: "On-Premise-Variante verfügbar; Cloud-Priorität im Vertrieb",
      },
      {
        criterion: "Git-Branching/Merge für Dokumente",
        rt: "Produktiv (Branch, Diff, Merge)",
        competitor: "Nicht vorhanden",
      },
      {
        criterion: "Workflow-Engine",
        rt: "Light: approve/review/sign/notify, n-Augen, Fristen, Eskalation",
        competitor: "Umfassend (Kinetic)",
      },
      {
        criterion: "GoBD-Testat / Zertifikate",
        rt: "Nicht zertifiziert; ISO 27001 und IDW PS 880 sind Roadmap",
        competitor: "Zertifiziert",
      },
      {
        criterion: "SAP ArchiveLink / CMIS 1.1",
        rt: "Nativ (beides)",
        competitor: "Über Connectors",
      },
      {
        criterion: "DATEV-Anbindung",
        rt: "DATEV-CSV; DATEVconnect-API angekündigt",
        competitor: "DATEV-Anbindungen etabliert",
      },
      {
        criterion: "Office- & Outlook-Add-ins",
        rt: "Nicht vorhanden (in Vorbereitung)",
        competitor: "Vorhanden",
      },
      {
        criterion: "MCP-Server (offene KI-Schnittstelle)",
        rt: "Nativ (fünf Tools)",
        competitor: "Nicht öffentlich als Feature dokumentiert",
      },
    ],
    migrationSteps: [
      {
        title: "Discovery — was liegt in DocuWare?",
        body: "Wir sichten Belegarten (Store), Indexfelder, Workflow-Definitionen aus Kinetic und die aktuelle Rechte-Struktur. Ergebnis: konkreter Migrations-Umfang, keine Überraschung im Cutover.",
      },
      {
        title: "Adapter-Migration über die DocuWare-REST-API",
        body: "Dokumente, Indexwerte, Versionen und Workflow-Historie werden über die REST-API in RecordTailor überführt. Signatur-Historie bleibt verifizierbar; Retention-Regeln übernehmen wir in Policies-as-Code.",
      },
      {
        title: "Cutover mit 30-Tage-Read-Only-Fallback",
        body: "DocuWare geht in Read-Only, RecordTailor übernimmt Live-Verkehr. 30 Tage bleibt DocuWare als Fallback, falls im neuen System Nacharbeit nötig ist.",
      },
    ],
    faq: [
      {
        q: "DocuWare ist GoBD-zertifiziert. Warum sollten wir wechseln?",
        a: "Wenn das Testat ein K.o.-Kriterium ist, bleiben Sie heute bei DocuWare. Wenn Sie KI-Vorsprung (Agenten, RAG-Chat, Plain-Language-Workflows) und volle Datenhoheit brauchen — insbesondere bei DSGVO-sensiblen Beständen — ist RecordTailor die Wette. ISO 27001 und IDW PS 880 sind bei uns Roadmap; wir sagen offen, dass sie heute nicht ausgestellt sind.",
      },
      {
        q: "Kann RecordTailor Kinetic-Workflows importieren?",
        a: "Kinetic-Definitionen sind grafisch modelliert und nicht direkt portierbar. Wir übernehmen die Prozess-Semantik: Sie beschreiben den Prozess in einem Satz, RecordTailor generiert das validierte YAML und übersetzt es zurück in Klartext. In der Praxis ist das schneller als ein 1:1-Adapter — weil die neue Definition sofort in unseren Standard passt.",
      },
      {
        q: "Bekommen wir Outlook-Integration wie in DocuWare?",
        a: "Nein, heute nicht. Ein Outlook-Add-in ist in Vorbereitung. Falls Ihre Nutzer stark Outlook-gebunden sind (viele Belege per Mail), warten Sie diesen Meilenstein ab — oder brücken über den IMAP-Mail-Agent, der Mails automatisiert in den Posteingang hebt.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // ELO
  // --------------------------------------------------------------------------
  {
    slug: "recordtailor-vs-elo",
    vendor: "ELO Digital Office",
    displayName: "ELO",
    metaTitle: "RecordTailor vs. ELO — DMS-Vergleich",
    metaDescription:
      "RecordTailor und ELO Digital Office im nachprüfbaren Feature-Vergleich (Stand 07/2026): KI-Agenten, Workflows, GoBD-Testat, Add-ins. Fair verglichen, mit Quellen.",
    h1: "RecordTailor vs. ELO — der ehrliche Vergleich.",
    directAnswer:
      "ELO liefert eine tief ausgereifte Workflow-Engine und ein GoBD-Testat, RecordTailor bringt produktive KI-Agenten, RAG-Chat mit Citations und Plain-Language-Workflows on-premises mit lokalem LLM sowie Git-Branching für Dokumente. ELO ist der reife Klassiker, RecordTailor der KI-native Herausforderer.",
    rows: [
      {
        criterion: "KI-Klassifikation & Extraktion",
        rt: "Produktiv, mit Erklärbarkeit und Few-Shot-Loop",
        competitor: "Produktiv (ELO KI-Modul)",
      },
      {
        criterion: "KI-Agenten (Inbox/Compliance/Vertrag/Rechnung)",
        rt: "Vier Agenten produktiv, Auto-Apply-Gate mit Konfidenz",
        competitor: "Angekündigt (Roadmap)",
      },
      {
        criterion: "RAG-Chat mit Citations",
        rt: "Produktiv, per-Tenant Embeddings",
        competitor: "Nicht öffentlich als Feature dokumentiert",
      },
      {
        criterion: "Plain-Language-Workflows",
        rt: "Ein Satz → validiertes YAML",
        competitor: "Grafischer Workflow-Designer",
      },
      {
        criterion: "Lokales LLM / kein Cloud-Egress",
        rt: "Ollama-Default; kein Cloud-Egress",
        competitor: "KI-Optionen mit Cloud-Anteil",
      },
      {
        criterion: "Deployment On-Premise",
        rt: "Docker Compose oder Kubernetes; air-gapped-fähig",
        competitor: "On-Premise etabliert",
      },
      {
        criterion: "Git-Branching/Merge für Dokumente",
        rt: "Produktiv",
        competitor: "Nicht vorhanden",
      },
      {
        criterion: "Workflow-Engine",
        rt: "Light (approve/review/sign/notify, n-Augen, Fristen)",
        competitor: "Umfassend (Standard des Segments)",
      },
      {
        criterion: "GoBD-Testat / Zertifikate",
        rt: "Nicht zertifiziert (Roadmap)",
        competitor: "Zertifiziert",
      },
      {
        criterion: "SAP ArchiveLink / CMIS 1.1",
        rt: "Nativ",
        competitor: "Vorhanden",
      },
      {
        criterion: "Office- & Outlook-Add-ins",
        rt: "Nicht vorhanden (in Vorbereitung)",
        competitor: "Vorhanden",
      },
      {
        criterion: "MCP-Server (offene KI-Schnittstelle)",
        rt: "Nativ",
        competitor: "Nicht öffentlich als Feature dokumentiert",
      },
    ],
    migrationSteps: [
      {
        title: "Discovery — ELO-Verschlagwortungs-Masken sichten",
        body: "Verschlagwortungs-Masken, Ordner-Struktur, Workflow-Vorlagen und Rechte-Struktur werden inventarisiert. Aus den bisher gepflegten Metadaten wird ein Vorschlag für das RecordTailor-Belegarten-Modell.",
      },
      {
        title: "Content- und Historien-Import über ELO-Schnittstellen",
        body: "Dokumente, Versionen, Verschlagwortung und Workflow-Historie werden übernommen. Custom-Aspects der ELO-Masken werden zu KI-gelernten Attribut-Kandidaten.",
      },
      {
        title: "Cutover mit Read-Only-Fallback",
        body: "ELO läuft 30 Tage im Read-Only-Modus als Rückfall-Ebene. Neue Ablagen landen in RecordTailor; ArchiveLink-Endpunkt schwenkt an einem Wochenende.",
      },
    ],
    faq: [
      {
        q: "Übernehmen Sie unsere ELO-Workflows?",
        a: "Wir übernehmen die Prozess-Semantik. Sie beschreiben den Workflow in einem Satz, RecordTailor generiert die YAML-Definition und übersetzt sie zurück. In der Praxis ist das schneller als ein 1:1-Adapter, weil die neue Definition sofort in unser Standardmodell passt.",
      },
      {
        q: "Was wird aus unseren ELO-Verschlagwortungs-Masken?",
        a: "Sie werden zu Anfangsvorschlägen für den KI-Assistenten. Er lernt aus den in der Maske gepflegten Werten und schlägt Belegarten und Attribute vor. Was Sie in Jahren händisch gebaut haben, führt der Assistent ab Tag eins automatisch weiter.",
      },
      {
        q: "Bekommen wir Office-Add-ins wie in ELO?",
        a: "Heute nicht. Ein Outlook-Add-in ist in Vorbereitung. Der Zugriff aus Office läuft heute über Browser (Drag-and-Drop) oder MFP-Scan-Ingest — für viele Sachbearbeiter ist das schneller als der Add-in-Weg, weil kein Kontextwechsel nötig ist.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // d.velop
  // --------------------------------------------------------------------------
  {
    slug: "recordtailor-vs-d-velop",
    vendor: "d.velop AG",
    displayName: "d.velop",
    metaTitle: "RecordTailor vs. d.velop — DMS-Vergleich",
    metaDescription:
      "RecordTailor und d.velop im nachprüfbaren Feature-Vergleich (Stand 07/2026): KI-Agenten (d.velop agent center beta), Git-Branching, On-Prem-LLM. Fair, mit Quellen.",
    h1: "RecordTailor vs. d.velop — der ehrliche Vergleich.",
    directAnswer:
      "d.velop hat mit dem agent center Agenten in Beta angekündigt (Q4 2026) und ist im GoBD-Testat etabliert; RecordTailor liefert Agenten heute produktiv aus, plus RAG-Chat mit Citations, Plain-Language-Workflows und Git-Branching für Dokumente — alles on-premises mit lokalem LLM. Wer den Zertifikats-Anker braucht, bleibt bei d.velop; wer den KI-Vorsprung greifen will, wechselt zu RecordTailor.",
    rows: [
      {
        criterion: "KI-Klassifikation & Extraktion",
        rt: "Produktiv, mit Erklärbarkeit und Few-Shot-Loop",
        competitor: "Produktiv",
      },
      {
        criterion: "KI-Agenten (Inbox/Compliance/Vertrag/Rechnung)",
        rt: "Vier Agenten produktiv",
        competitor: "d.velop agent center — Beta angekündigt (Q4 2026)",
      },
      {
        criterion: "RAG-Chat mit Citations",
        rt: "Produktiv, per-Tenant Embeddings",
        competitor: "Vorhanden",
      },
      {
        criterion: "Plain-Language-Workflows",
        rt: "Ein Satz → validiertes YAML",
        competitor: "Grafischer Prozess-Designer",
      },
      {
        criterion: "Lokales LLM / kein Cloud-Egress",
        rt: "Ollama-Default",
        competitor: "KI-Anteile Cloud-gestützt",
      },
      {
        criterion: "Deployment On-Premise",
        rt: "Docker Compose oder Kubernetes; air-gapped-fähig",
        competitor: "On-Premise verfügbar",
      },
      {
        criterion: "Git-Branching/Merge für Dokumente",
        rt: "Produktiv",
        competitor: "Nicht vorhanden",
      },
      {
        criterion: "GoBD-Testat / Zertifikate",
        rt: "Nicht zertifiziert (Roadmap)",
        competitor: "Zertifiziert",
      },
      {
        criterion: "SAP ArchiveLink / CMIS 1.1",
        rt: "Nativ",
        competitor: "Vorhanden",
      },
      {
        criterion: "Signaturen",
        rt: "Elektronische Signaturen mit Beweiskette; eIDAS QES via QTSP in Vorbereitung",
        competitor: "d.velop sign etabliert",
      },
      {
        criterion: "Modulmodell",
        rt: "Ein Paket (KI, Branching, Graph, Suche, Signaturen, ArchiveLink, CMIS)",
        competitor: "Modulbaukasten (d.3, d.velop sign, d.velop analytics, d.velop connect)",
      },
      {
        criterion: "Office- & Outlook-Add-ins",
        rt: "Nicht vorhanden (in Vorbereitung)",
        competitor: "Vorhanden",
      },
      {
        criterion: "MCP-Server",
        rt: "Nativ",
        competitor: "Nicht öffentlich als Feature dokumentiert",
      },
    ],
    migrationSteps: [
      {
        title: "Discovery — d.3, sign, analytics, connect zusammenführen",
        body: "Wir sichten die eingesetzten d.velop-Module und was Sie tatsächlich nutzen. Ergebnis: ein Paketumfang in RecordTailor statt Modul-Zoo.",
      },
      {
        title: "Migration über d.velop-Schnittstellen",
        body: "Dokumente, Metadaten, Signaturen und Workflow-Historie werden übernommen. Qualifiziert signierte Bestände (PAdES-B-LTA) bleiben verifizierbar; neue eIDAS-QES-Signaturen in RecordTailor folgen nach QTSP-Anschluss.",
      },
      {
        title: "Cutover mit Read-Only-Fallback",
        body: "d.velop bleibt 30 Tage im Read-Only-Modus. Neue Ablagen und Workflows laufen in RecordTailor.",
      },
    ],
    faq: [
      {
        q: "Was ist mit dem d.velop agent center?",
        a: "Zum Stand Juli 2026 als Beta angekündigt (Q4 2026). Bei RecordTailor sind vier Agenten (Inbox, Compliance, Vertrag, Rechnung) heute produktiv im Einsatz — mit Konfidenz-Gate, Approval-Inbox und Hash-Chain-Protokoll. Wenn d.velop agent center Ihr Kaufgrund wäre, prüfen Sie, wann die konkreten Agenten in GA gehen.",
      },
      {
        q: "Wir nutzen d.velop sign für qualifizierte Signaturen — verlieren wir das?",
        a: "Nein. Von d.velop sign qualifiziert signierte Dokumente (PAdES-B-LTA) bleiben nach der Migration verifizierbar. In RecordTailor selbst arbeiten wir mit elektronischen Signaturen und manipulationssichtbarer Beweiskette; die QES-Integration mit einem QTSP (Österreich: A-Trust) ist in Vorbereitung. Falls QES-Ausstellung im Neusystem heute unverzichtbar ist, warten Sie diesen Meilenstein ab.",
      },
      {
        q: "Wir haben viele d.velop-Konnektoren. Was wird daraus?",
        a: "RecordTailor spricht SAP ArchiveLink und CMIS 1.1 nativ. Für DATEV liegt der CSV-Export bereit, DATEVconnect-API und XRechnung/ZUGFeRD-Parser sind in Vorbereitung. Für alles Weitere: REST-API mit Service-Tokens plus MCP-Server für KI-Client-Anbindung.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // M-Files
  // --------------------------------------------------------------------------
  {
    slug: "recordtailor-vs-m-files",
    vendor: "M-Files",
    displayName: "M-Files",
    metaTitle: "RecordTailor vs. M-Files — DMS-Vergleich",
    metaDescription:
      "RecordTailor und M-Files (Aino) im nachprüfbaren Feature-Vergleich (Stand 07/2026): RAG-Chat, KI-Agenten, On-Prem, Git-Branching. Fair verglichen, mit Quellen.",
    h1: "RecordTailor vs. M-Files — der ehrliche Vergleich.",
    directAnswer:
      "M-Files Aino ist am Markt bei RAG und Auto-Metadaten weit vorne und bringt Zertifikate mit; RecordTailor liefert vier produktive Agenten, Plain-Language-Workflows, Git-Branching und läuft on-premises mit lokalem LLM — kein Cloud-Egress. Für Metadaten-getriebene Prozesse mit externer Cloud passt M-Files, für souveräne Agenten-Automatisierung RecordTailor.",
    rows: [
      {
        criterion: "KI-Klassifikation & Extraktion",
        rt: "Produktiv, mit Erklärbarkeit und Few-Shot-Loop",
        competitor: "Produktiv (Aino)",
      },
      {
        criterion: "KI-Agenten (Inbox/Compliance/Vertrag/Rechnung)",
        rt: "Vier Agenten produktiv",
        competitor: "Ansätze in Aino",
      },
      {
        criterion: "RAG-Chat mit Citations",
        rt: "Produktiv, per-Tenant Embeddings",
        competitor: "Produktiv (Aino Chat)",
      },
      {
        criterion: "Plain-Language-Workflows",
        rt: "Ein Satz → validiertes YAML",
        competitor: "Nicht öffentlich dokumentiert",
      },
      {
        criterion: "Lokales LLM / kein Cloud-Egress",
        rt: "Ollama-Default",
        competitor: "Cloud-KI",
      },
      {
        criterion: "Deployment On-Premise",
        rt: "Docker Compose oder Kubernetes; air-gapped-fähig",
        competitor: "Cloud-Priorität; On-Premise-Variante verfügbar",
      },
      {
        criterion: "Git-Branching/Merge für Dokumente",
        rt: "Produktiv",
        competitor: "Nicht vorhanden",
      },
      {
        criterion: "GoBD-Testat / Zertifikate",
        rt: "Nicht zertifiziert (Roadmap)",
        competitor: "Vorhanden",
      },
      {
        criterion: "SAP ArchiveLink / CMIS 1.1",
        rt: "Nativ",
        competitor: "Vorhanden",
      },
      {
        criterion: "Office- & Outlook-Add-ins",
        rt: "Nicht vorhanden (in Vorbereitung)",
        competitor: "Vorhanden",
      },
      {
        criterion: "MCP-Server",
        rt: "Nativ (fünf Tools)",
        competitor: "Nicht öffentlich als Feature dokumentiert",
      },
    ],
    migrationSteps: [
      {
        title: "Discovery — M-Files-Metadaten-Struktur sichten",
        body: "M-Files ist metadatengetrieben. Wir sichten Klassen, Property-Definitionen, View-Kriterien und Workflows — das wird die Basis für das RecordTailor-Belegarten-Modell.",
      },
      {
        title: "Migration über M-Files-API",
        body: "Dokumente, Metadaten und Versionen werden übernommen. Aus M-Files-Klassen werden RecordTailor-Belegarten, aus Property-Definitionen Attribute — der KI-Assistent lernt aus den Bestandsdaten und verbessert die Vorschläge.",
      },
      {
        title: "Cutover mit 30-Tage-Fallback",
        body: "M-Files bleibt 30 Tage als Read-Only-Fallback. Cloud-nahe Prozesse werden schrittweise durch RecordTailor-Workflows abgelöst.",
      },
    ],
    faq: [
      {
        q: "M-Files Aino kann RAG-Chat — was macht RecordTailor anders?",
        a: "Beide bieten RAG-Chat gegen den eigenen Bestand. Unterschied 1: RecordTailor läuft on-premises gegen ein lokales LLM (Ollama-Default), M-Files Aino nutzt Cloud-KI. Unterschied 2: RecordTailor kann versionsbewusst chatten („Was hat sich zwischen v3 und v5 geändert?“), weil Dokumente branchen — das kann kein anderer Anbieter am Markt.",
      },
      {
        q: "Ist M-Files nicht führend bei Auto-Metadaten?",
        a: "M-Files ist am Markt für metadatengetriebene Ablage sehr weit. RecordTailor extrahiert Metadaten mit KI und macht den Knowledge Graph daraus — plus Klartext-Begründung pro Extraktion, plus Undo über die Versionierung. Wenn Ihr Anwendungsfall reines Metadaten-Filtern ist, bleibt M-Files stark; wenn Erklärbarkeit und Undo dazukommen, ist RecordTailor die bessere Wahl.",
      },
      {
        q: "Was ist mit dem Vault-Konzept von M-Files?",
        a: "In RecordTailor entspricht das dem Tenant + Ordner-Struktur mit RLS und ACLs. Isolation ist auf DB-Ebene (Row-Level-Security), nicht nur auf UI-Ebene — auch wir (Betreiber) sehen ohne autorisierten Zugriff nichts.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // SharePoint + Copilot
  // --------------------------------------------------------------------------
  {
    slug: "recordtailor-vs-sharepoint",
    vendor: "Microsoft",
    displayName: "SharePoint + Copilot",
    metaTitle: "RecordTailor vs. SharePoint + Copilot — DMS-Vergleich",
    metaDescription:
      "RecordTailor und SharePoint mit Copilot im Feature-Vergleich (Stand 07/2026): Datenhoheit, KI-Agenten, GoBD, Git-Branching. Fair verglichen, mit Quellen.",
    h1: "RecordTailor vs. SharePoint + Copilot — der ehrliche Vergleich.",
    directAnswer:
      "SharePoint mit Copilot bringt umfassende Office-Integration und Microsoft-Ökosystem-Nähe mit, RecordTailor liefert echte On-Prem-Ablage mit lokalem LLM, produktiven Agenten, Plain-Language-Workflows und Git-Branching für Dokumente. Bei EU-Datenhoheit und DSGVO-sensiblen Beständen ist der Unterschied strukturell.",
    rows: [
      {
        criterion: "KI-Klassifikation & Extraktion",
        rt: "Produktiv, mit Erklärbarkeit",
        competitor: "Vorhanden (Syntex)",
      },
      {
        criterion: "KI-Agenten",
        rt: "Vier Agenten produktiv, on-premises",
        competitor: "Copilot Agents (Cloud)",
      },
      {
        criterion: "RAG-Chat mit Citations",
        rt: "Produktiv, per-Tenant, lokal",
        competitor: "Vorhanden (Copilot, Cloud)",
      },
      {
        criterion: "Plain-Language-Workflows",
        rt: "Ein Satz → validiertes YAML",
        competitor: "Copilot → Power Automate (Cloud)",
      },
      {
        criterion: "Lokales LLM / kein Cloud-Egress",
        rt: "Ollama-Default",
        competitor: "Cloud-KI (Azure OpenAI)",
      },
      {
        criterion: "Deployment On-Premise",
        rt: "Docker Compose oder Kubernetes; air-gapped-fähig",
        competitor: "Microsoft 365 ist Cloud-only; SharePoint Server on-prem separate Produktlinie",
      },
      {
        criterion: "Git-Branching/Merge für Dokumente",
        rt: "Produktiv",
        competitor: "Versionierung linear",
      },
      {
        criterion: "GoBD-konforme Ablage",
        rt: "Manipulationssichtbare Audit-Hash-Chain (Testat Roadmap)",
        competitor: "Umsetzung stark implementierungs­abhängig",
      },
      {
        criterion: "SAP ArchiveLink / CMIS 1.1",
        rt: "Nativ",
        competitor: "Über Konnektoren",
      },
      {
        criterion: "MCP-Server",
        rt: "Nativ",
        competitor: "Copilot-Toolkit vorhanden",
      },
      {
        criterion: "Office-Add-ins",
        rt: "Nicht vorhanden (in Vorbereitung)",
        competitor: "Nativ (SharePoint = Teil von Microsoft 365)",
      },
    ],
    migrationSteps: [
      {
        title: "Discovery — was liegt in SharePoint tatsächlich als DMS?",
        body: "SharePoint wird oft als DMS-Ersatz genutzt, aber Ablage-Muster reichen von Team-Sites bis strukturierten Bibliotheken. Wir sichten die konkret betroffenen Bibliotheken, Content-Types und Rechte-Struktur.",
      },
      {
        title: "Migration über die Microsoft-Graph-API",
        body: "Dokumente, Metadaten (Content-Type-Properties), Versionen und Rechte werden übernommen. Aus SharePoint-Content-Types werden RecordTailor-Belegarten; aus Site-Groups Rechte in RLS/ACL.",
      },
      {
        title: "Cutover — Beleg-Ablage raus, Kollaboration bleibt",
        body: "SharePoint bleibt für Team-Kollaboration in Microsoft 365 nutzbar. Was ins DMS gehört — Belege, Verträge, Akten — läuft ab Cutover in RecordTailor. Beide Systeme können parallel bestehen.",
      },
    ],
    faq: [
      {
        q: "Copilot hat Agenten. Warum RecordTailor?",
        a: "Wenn Ihre Daten in Microsoft 365 liegen dürfen: Copilot Agents sind eine valide Option. Wenn EU-Datenhoheit, DSGVO-Sensibilität oder Air-Gap-Betrieb Kriterien sind, ist der Unterschied strukturell: RecordTailor-Agenten laufen on-premises gegen ein lokales LLM, ohne Cloud-Egress.",
      },
      {
        q: "Können wir SharePoint für Kollaboration behalten?",
        a: "Ja. Viele Kunden nutzen SharePoint weiter für Team-Kollaboration (Chats, Meeting-Notizen, Projektdokumente) und lagern die revisionsrelevante Beleg-Ablage in RecordTailor. Die Systeme koexistieren.",
      },
      {
        q: "Was ist mit unseren Content-Types und Metadaten?",
        a: "Content-Types werden zu Belegarten in RecordTailor, ihre Site-Columns zu Attributen. Was bisher händisch gepflegt wurde, lernt der KI-Assistent aus Ihren Bestandsdaten und schlägt ab Tag eins Verbesserungen vor.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // Paperless-ngx
  // --------------------------------------------------------------------------
  {
    slug: "recordtailor-vs-paperless-ngx",
    vendor: "OSS-Community",
    displayName: "Paperless-ngx",
    metaTitle: "RecordTailor vs. Paperless-ngx — DMS-Vergleich",
    metaDescription:
      "RecordTailor und Paperless-ngx im Feature-Vergleich (Stand 07/2026): Enterprise-Interop, KI-Agenten, GoBD, SAP ArchiveLink. Wann OSS reicht, wann nicht.",
    h1: "RecordTailor vs. Paperless-ngx — der ehrliche Vergleich.",
    directAnswer:
      "Paperless-ngx ist als OSS-DMS im Kleinkundensegment stark und läuft lokal; RecordTailor deckt Enterprise-Anforderungen ab (SAP ArchiveLink, CMIS 1.1, Multi-Tenancy mit RLS, Workflow-Engine, Agenten, MCP) und liefert ein Enterprise-Support-Modell. Für Ein-Personen-Ablage bleibt Paperless-ngx solide; für regulierte Unternehmen skaliert es nicht mit.",
    rows: [
      {
        criterion: "KI-Klassifikation & Extraktion",
        rt: "Produktiv, mit Erklärbarkeit und Few-Shot-Loop",
        competitor: "Add-on-basiert (paperless-ai u. a.)",
      },
      {
        criterion: "KI-Agenten (Inbox/Compliance/Vertrag/Rechnung)",
        rt: "Vier Agenten produktiv, Auto-Apply-Gate",
        competitor: "Nicht vorhanden",
      },
      {
        criterion: "RAG-Chat mit Citations",
        rt: "Produktiv, per-Tenant Embeddings",
        competitor: "Community-Skripte, kein Kern-Feature",
      },
      {
        criterion: "Workflow-Engine",
        rt: "Light: approve/review/sign/notify, n-Augen, Fristen",
        competitor: "Nicht vorhanden",
      },
      {
        criterion: "Multi-Tenancy",
        rt: "Nativ (Postgres RLS pro Tenant)",
        competitor: "Nicht vorhanden",
      },
      {
        criterion: "Lokales LLM / kein Cloud-Egress",
        rt: "Ollama-Default",
        competitor: "Lokal (OSS-Prinzip)",
      },
      {
        criterion: "Deployment On-Premise",
        rt: "Docker Compose oder Kubernetes; air-gapped-fähig",
        competitor: "Docker Compose (lokal)",
      },
      {
        criterion: "Git-Branching/Merge für Dokumente",
        rt: "Produktiv",
        competitor: "Nicht vorhanden",
      },
      {
        criterion: "SAP ArchiveLink / CMIS 1.1",
        rt: "Nativ",
        competitor: "Nicht vorhanden",
      },
      {
        criterion: "GoBD-konforme Ablage",
        rt: "Manipulationssichtbare Audit-Hash-Chain (Testat Roadmap)",
        competitor: "Nicht als Kern-Feature",
      },
      {
        criterion: "MCP-Server",
        rt: "Nativ",
        competitor: "Community-Extensions",
      },
      {
        criterion: "Enterprise-Support / SLA",
        rt: "Kommerzieller Support inkl. SLA",
        competitor: "Community",
      },
    ],
    migrationSteps: [
      {
        title: "Content-Export aus Paperless-ngx",
        body: "Über das Paperless-ngx-Export-Format übernehmen wir Dokumente, Tags und Metadaten. Aus Tags werden Belegart-Vorschläge; der KI-Assistent lernt aus den bisherigen Ablagemustern.",
      },
      {
        title: "Enterprise-Interop einrichten",
        body: "SAP-ArchiveLink-Endpunkt, CMIS 1.1, DATEV-CSV, MCP-Server — was Paperless-ngx nicht kann, ist im RecordTailor-Standard-Deployment enthalten. Kein Modul-Zoo.",
      },
      {
        title: "Multi-Tenant-Struktur aufsetzen",
        body: "Was bisher ein flacher Corpus war, wird zu getrennten Tenants (Standort, Mandant, Bereich) mit Row-Level-Security. Rechte werden über ACL/RLS statt über Ordner-Sichtbarkeit gesteuert.",
      },
    ],
    faq: [
      {
        q: "Reicht Paperless-ngx nicht?",
        a: "Für private Ablage, kleine Vereine und Ein-Personen-Buchhaltungen: ja, oft völlig ausreichend. Für Unternehmen mit SAP-Anbindung, Multi-Standort, Mandantentrennung, Workflows und GoBD-Anspruch: nein — dort ist RecordTailor der Enterprise-Aufsatz mit den Interop-Ports, die Paperless-ngx nicht mitbringt.",
      },
      {
        q: "Ist RecordTailor auch Open Source?",
        a: "Der Kern ist Apache-2.0. Sie können den Code lesen, forken, prüfen. Was wir verkaufen, ist Enterprise-Support, die kommerzielle Distribution und die Integrationen (ArchiveLink, DATEV-CSV, MCP-Server). Kein Vendor-Lock-in: CMIS 1.1 hält die Migrationsoption zu einem Nachfolge-System offen.",
      },
      {
        q: "Behalten wir das lokale LLM-Prinzip von Paperless?",
        a: "Ja. RecordTailor läuft im Default gegen ein lokales Ollama-Modell — keine Cloud-KI-Anfragen. Pro Tenant lässt sich der Modell-Provider konfigurieren; das On-Prem-Prinzip bleibt.",
      },
    ],
  },
];

export function findComparisonBySlug(slug: string): CompareEntry | undefined {
  return COMPARISONS.find((c) => c.slug === slug);
}
