/**
 * Vergleichsseiten unter /vergleich/[slug]. Nach § 6 UWG DE / § 2a UWG AT ist
 * vergleichende Werbung zulässig, wenn objektiv, nachprüfbar, wesentliche
 * Eigenschaften betreffend und nicht herabsetzend. Diese Regeln gelten hier
 * strikt:
 *   - Nur öffentlich nachprüfbare Fakten aus Produktdoku/Produktseiten der
 *     jeweiligen Anbieter (Stand: Juli 2026).
 *   - Keine Preisspekulationen über Dritte.
 *   - Keine Herabsetzung.
 *   - Jede Tabelle trägt „Stand 07/2026“ und einen Marken-Disclaimer.
 *   - Roadmap-Angaben der Wettbewerber werden als „angekündigt“ gekennzeichnet
 *     und bekommen den Status `partial`, nicht `yes`.
 *
 * Status-Semantik (steuert das Icon in der Tabelle):
 *   yes     → Feature vorhanden/produktiv
 *   partial → Feature nur teilweise / angekündigt / add-on / eingeschränkt
 *   no      → Feature nicht vorhanden / nicht öffentlich dokumentiert
 */

export type CompareStatus = "yes" | "partial" | "no";

export type CompareCell = {
  status: CompareStatus;
  text: string;
};

export type CompareRow = {
  criterion: string;
  rt: CompareCell;
  competitor: CompareCell;
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

// Kurze Helper, damit die Zeilen kompakt lesbar bleiben.
const yes = (text: string): CompareCell => ({ status: "yes", text });
const partial = (text: string): CompareCell => ({ status: "partial", text });
const no = (text: string): CompareCell => ({ status: "no", text });

// Gemeinsame RecordTailor-Zellen — reduzieren Wiederholung über die 6 Slugs.
const RT = {
  klassifikation: yes("Produktiv, mit Erklärbarkeit und Few-Shot-Loop"),
  agenten: yes("Vier Agenten produktiv (Inbox, Compliance, Vertrag, Rechnung), Konfidenz-Gate, Approval-Inbox"),
  rag: yes("Produktiv, per-Tenant Embeddings, versionsbewusst"),
  plain: yes("Ein Satz → validiertes YAML → Klartext-Rückblick"),
  localLLM: yes("Ollama-Default, per Tenant konfigurierbar; kein Cloud-Egress"),
  onPrem: yes("Docker Compose oder Kubernetes; air-gapped-fähig"),
  git: yes("Branch, Diff, Merge — echte Dokument-Versionierung"),
  workflow: yes("Light: approve/review/sign/notify, n-Augen, Fristen, Eskalation"),
  gobd: partial("Manipulationssichtbare Audit-Hash-Chain; IDW-PS-880-Testat auf Roadmap"),
  sap: yes("SAP ArchiveLink und CMIS 1.1 nativ"),
  datev: partial("DATEV-CSV produktiv; DATEVconnect-API und XRechnung/ZUGFeRD in Vorbereitung"),
  addins: no("Office/Outlook-Add-ins in Vorbereitung"),
  mcp: yes("Nativer MCP-Server, fünf Tools"),
  multitenancy: yes("Postgres RLS pro Tenant"),
  legalHold: yes("Legal Hold produktiv, versioniert, mit Grund"),
  retention: partial("Policies-as-Code + Compliance-Agent meldet; Enforcement-Worker in Vorbereitung"),
  erase: yes("DSGVO-Art.-17-Erase über Content, Extraktionen, Embeddings und Cache"),
  airgap: yes("Air-gapped-Installation, signierte Updates, Sigstore-Attestation"),
  encryption: yes("AES-256-GCM at rest, TLS in transit"),
  auditProof: yes("Court-Bundle-Export inkl. Hash-Manifest, extern verifizierbar"),
  mailIngest: yes("IMAP-Mail-Agent, .eml GoBD-konform; Anhänge als eigene Belege"),
  scanIngest: yes("MFP-Scan-Ingest ohne Fat-Client, Barcode- oder KI-Trennung"),
  batch: yes("Batch-Prozessor auf GPU-Cores, BLAKE3-Deduplikation, Ausreißer-Bericht"),
  hybridSearch: yes("BM25 + Vektor (RRF) in einer Query"),
  openSourceCore: yes("Apache-2.0-Kern, keine Vendor-Lock-in-Falle"),
  packaging: yes("Ein Paket, alle Module inklusive, unbegrenzte Nutzer"),
  ssoMfa: partial("OIDC vorbereitet; SAML/SCIM auf Roadmap"),
  undo: yes("Rückgängigmachen von Agenten-Aktionen über Versionierung"),
  restApi: yes("REST-API mit Scoped Service-Tokens"),
  webhooks: yes("Webhooks (`workflow_event`, Ingest-Events) für Kunden-Automatisierung"),
  aiActProtocol: yes("EU-AI-Act-Protokoll als PDF exportierbar"),
} as const;

// -----------------------------------------------------------------------------
// Wettbewerber-Zellen
// -----------------------------------------------------------------------------
const COMMON_ROWS_BASE = (competitor: Record<string, CompareCell>): CompareRow[] => [
  { criterion: "KI-Klassifikation & Extraktion", rt: RT.klassifikation, competitor: competitor.klassifikation },
  { criterion: "KI-Agenten (produktiv, nicht Roadmap)", rt: RT.agenten, competitor: competitor.agenten },
  { criterion: "RAG-Chat mit Citations", rt: RT.rag, competitor: competitor.rag },
  { criterion: "Plain-Language-Workflows", rt: RT.plain, competitor: competitor.plain },
  { criterion: "Lokales LLM / kein Cloud-Egress", rt: RT.localLLM, competitor: competitor.localLLM },
  { criterion: "Deployment On-Premise", rt: RT.onPrem, competitor: competitor.onPrem },
  { criterion: "Air-gapped Installation", rt: RT.airgap, competitor: competitor.airgap },
  { criterion: "Git-artige Dokument-Versionierung (Branch/Merge)", rt: RT.git, competitor: competitor.git },
  { criterion: "Workflow-Engine (Freigabe, n-Augen, Fristen)", rt: RT.workflow, competitor: competitor.workflow },
  { criterion: "GoBD-Testat / IDW PS 880", rt: RT.gobd, competitor: competitor.gobd },
  { criterion: "ISO 27001 (Anbieter)", rt: partial("Auf Roadmap, nicht zertifiziert"), competitor: competitor.iso },
  { criterion: "Audit-Beweispaket (Court-Bundle mit Hash-Manifest)", rt: RT.auditProof, competitor: competitor.auditProof },
  { criterion: "Legal Hold", rt: RT.legalHold, competitor: competitor.legalHold },
  { criterion: "Retention-Enforcement", rt: RT.retention, competitor: competitor.retention },
  { criterion: "DSGVO-Erase (auch Extraktionen, Embeddings, Cache)", rt: RT.erase, competitor: competitor.erase },
  { criterion: "Verschlüsselung at rest", rt: RT.encryption, competitor: competitor.encryption },
  { criterion: "Multi-Tenancy (Row-Level Security)", rt: RT.multitenancy, competitor: competitor.multitenancy },
  { criterion: "SSO / MFA / SAML / SCIM", rt: RT.ssoMfa, competitor: competitor.ssoMfa },
  { criterion: "Hybrid-Suche (BM25 + Vektor in einer Query)", rt: RT.hybridSearch, competitor: competitor.hybridSearch },
  { criterion: "SAP ArchiveLink + CMIS 1.1", rt: RT.sap, competitor: competitor.sap },
  { criterion: "DATEV-Anbindung", rt: RT.datev, competitor: competitor.datev },
  { criterion: "Office- & Outlook-Add-ins", rt: RT.addins, competitor: competitor.addins },
  { criterion: "Mail-Ingest (IMAP, .eml GoBD-konform)", rt: RT.mailIngest, competitor: competitor.mailIngest },
  { criterion: "Scan-Ingest ohne Fat-Client", rt: RT.scanIngest, competitor: competitor.scanIngest },
  { criterion: "Stapelverarbeitung mit Deduplikation", rt: RT.batch, competitor: competitor.batch },
  { criterion: "MCP-Server (offene KI-Schnittstelle)", rt: RT.mcp, competitor: competitor.mcp },
  { criterion: "Undo / Rollback von KI-Aktionen", rt: RT.undo, competitor: competitor.undo },
  { criterion: "REST-API + Webhooks", rt: RT.restApi, competitor: competitor.restApi },
  { criterion: "EU-AI-Act-Protokoll exportierbar", rt: RT.aiActProtocol, competitor: competitor.aiActProtocol },
  { criterion: "Open-Source-Kern", rt: RT.openSourceCore, competitor: competitor.openSourceCore },
];

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
      "RecordTailor und DocuWare im nachprüfbaren Feature-Vergleich (Stand 07/2026): KI-Agenten, On-Prem, Git-Branching, GoBD-Testat. Fair verglichen, mit Quellen.",
    h1: "RecordTailor vs. DocuWare — der ehrliche Vergleich.",
    directAnswer:
      "DocuWare bringt ein GoBD-Testat, eine ausgereifte Workflow-Engine (Kinetic) und Office-/Outlook-Add-ins mit; RecordTailor liefert dafür vier produktive KI-Agenten, RAG-Chat mit Citations, Plain-Language-Workflows und Git-artige Dokumenten-Branches on-premises mit lokalem LLM. Wer heute ein Testat als K.-o.-Kriterium braucht, greift zu DocuWare; wer KI-Vorsprung und volle Datenhoheit will, zu RecordTailor.",
    rows: COMMON_ROWS_BASE({
      klassifikation: yes("Produktiv (Intelligent Indexing)"),
      agenten: partial("Als Marktthema in Trend-Reports; keine öffentlich verfügbare Agent-Runtime"),
      rag: partial("KI-Assistenten-Ansätze in DocuWare-Cloud dokumentiert; kein klassischer RAG-Chat als eigenständiges Feature dokumentiert"),
      plain: no("Grafischer Designer (Kinetic), keine Ein-Satz-Generierung dokumentiert"),
      localLLM: no("KI-Dienste laufen über die DocuWare-Cloud-Infrastruktur"),
      onPrem: yes("On-Premise-Variante verfügbar (Cloud-Priorität im Vertrieb)"),
      airgap: partial("On-Prem ist möglich, air-gapped-Installation nicht als Standard dokumentiert"),
      git: no("Lineare Versionierung, kein Branch/Merge"),
      workflow: yes("Umfassend (Kinetic, langjährig ausgereift)"),
      gobd: yes("GoBD-Testat vorhanden"),
      iso: yes("ISO 27001 zertifiziert"),
      auditProof: yes("GoBD-Audit-Log und Export­funktionen dokumentiert"),
      legalHold: yes("Records-Management-Funktion vorhanden"),
      retention: yes("Retention-Regeln produktiv durchsetzbar"),
      erase: partial("DSGVO-Erase möglich; Umfang über KI-Nebenprodukte nicht öffentlich detailliert"),
      encryption: yes("Verschlüsselung at rest"),
      multitenancy: yes("Multi-Mandanten-Fähigkeit"),
      ssoMfa: yes("SSO/SAML/MFA etabliert"),
      hybridSearch: partial("Volltext + strukturierte Suche; keine öffentlich dokumentierte Vektor-Semantik in derselben Query"),
      sap: yes("SAP-Integration und CMIS-Adapter verfügbar"),
      datev: yes("DATEV-Anbindung etabliert"),
      addins: yes("Office/Outlook-Add-ins nativ"),
      mailIngest: yes("E-Mail-Import produktiv"),
      scanIngest: yes("Scan-Client / Web-Ingest produktiv"),
      batch: yes("Batch-Import und Klassifikation etabliert"),
      mcp: no("Nicht öffentlich als Feature dokumentiert"),
      undo: partial("Versionierung linear; agentische Undo-Kette nicht dokumentiert"),
      restApi: yes("REST-API vorhanden"),
      aiActProtocol: no("Kein öffentlich dokumentiertes Agent-Protokoll als Export"),
      openSourceCore: no("Proprietär"),
    }),
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
        a: "Wenn das Testat ein K.-o.-Kriterium ist, bleiben Sie heute bei DocuWare. Wenn Sie KI-Vorsprung (produktive Agenten, RAG-Chat, Plain-Language-Workflows) und volle Datenhoheit brauchen — insbesondere bei DSGVO-sensiblen Beständen — ist RecordTailor die Wette. IDW-PS-880 und ISO 27001 sind bei uns Roadmap; wir sagen offen, dass sie heute nicht ausgestellt sind.",
      },
      {
        q: "Kann RecordTailor Kinetic-Workflows importieren?",
        a: "Kinetic-Definitionen sind grafisch modelliert und nicht direkt portierbar. Wir übernehmen die Prozess-Semantik: Sie beschreiben den Prozess in einem Satz, RecordTailor generiert das validierte YAML und übersetzt es zurück in Klartext. In der Praxis ist das schneller als ein 1:1-Adapter — weil die neue Definition sofort in unseren Standard passt.",
      },
      {
        q: "Bekommen wir Outlook-Integration wie in DocuWare?",
        a: "Heute nicht. Ein Outlook-Add-in ist in Vorbereitung. Falls Ihre Nutzer stark Outlook-gebunden sind (viele Belege per Mail), warten Sie diesen Meilenstein ab — oder brücken über den IMAP-Mail-Agent, der Mails automatisiert in den Posteingang hebt.",
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
      "RecordTailor und ELO im nachprüfbaren Feature-Vergleich (Stand 07/2026): KI-Agenten, Workflows, Testat, Add-ins. Fair verglichen, mit Quellen.",
    h1: "RecordTailor vs. ELO — der ehrliche Vergleich.",
    directAnswer:
      "ELO liefert eine tief ausgereifte Workflow-Engine, langjährige SAP-Integration und ein GoBD-Testat; RecordTailor bringt produktive KI-Agenten, RAG-Chat mit Citations, Plain-Language-Workflows und Git-Branching für Dokumente on-premises mit lokalem LLM. ELO ist der reife Klassiker, RecordTailor der KI-native Herausforderer.",
    rows: COMMON_ROWS_BASE({
      klassifikation: yes("Produktiv (ELO KI-Modul)"),
      agenten: partial("Als Roadmap-Thema kommuniziert; keine öffentlich verfügbare Agent-Runtime"),
      rag: partial("KI-Modul mit Chat-Ansätzen; kein klassischer RAG-Chat als Kern-Feature dokumentiert"),
      plain: no("Grafischer Workflow-Designer"),
      localLLM: partial("KI-Anteile mit optionalen Cloud-Diensten; lokaler Betrieb nicht als Default dokumentiert"),
      onPrem: yes("On-Premise etabliert"),
      airgap: partial("On-Prem-Betrieb möglich, air-gapped-Installation nicht als Standard dokumentiert"),
      git: no("Lineare Versionierung"),
      workflow: yes("Umfassend, Segment-Standard"),
      gobd: yes("GoBD-Testat vorhanden"),
      iso: yes("ISO 27001 zertifiziert"),
      auditProof: yes("Audit-Log und Records-Management etabliert"),
      legalHold: yes("Records-Management-Funktionen"),
      retention: yes("Retention produktiv"),
      erase: partial("DSGVO-Erase möglich; Behandlung von KI-Nebenprodukten (Embeddings, Cache) nicht öffentlich detailliert"),
      encryption: yes("Verschlüsselung at rest"),
      multitenancy: yes("Mandantenfähigkeit"),
      ssoMfa: yes("SSO/SAML/MFA etabliert"),
      hybridSearch: partial("iSearch + strukturierte Suche; Vektor-Anteil in einer Query nicht öffentlich detailliert"),
      sap: yes("SAP-Integration + CMIS langjährig etabliert"),
      datev: yes("DATEV-Anbindungen etabliert"),
      addins: yes("Office/Outlook-Add-ins vorhanden"),
      mailIngest: yes("Mail-Import produktiv"),
      scanIngest: yes("ELO-Scan-Client verbreitet"),
      batch: yes("Batch-Import und Klassifikation etabliert"),
      mcp: no("Nicht öffentlich als Feature dokumentiert"),
      undo: partial("Versionierung linear"),
      restApi: yes("REST-API vorhanden"),
      aiActProtocol: no("Kein öffentlich dokumentiertes Agent-Protokoll als Export"),
      openSourceCore: no("Proprietär"),
    }),
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
      "RecordTailor und d.velop im nachprüfbaren Feature-Vergleich (Stand 07/2026): agent center Beta, Git-Branching, On-Prem-LLM. Fair, mit Quellen.",
    h1: "RecordTailor vs. d.velop — der ehrliche Vergleich.",
    directAnswer:
      "d.velop hat mit dem agent center Agenten in Beta angekündigt (Q4 2026), ist GoBD-testiert und im DACH-Vertrieb stark; RecordTailor liefert vier Agenten heute produktiv aus, plus RAG-Chat mit Citations, Plain-Language-Workflows und Git-Branching für Dokumente — alles on-premises mit lokalem LLM. Wer den Zertifikats-Anker braucht, bleibt bei d.velop; wer den KI-Vorsprung greifen will, wechselt zu RecordTailor.",
    rows: COMMON_ROWS_BASE({
      klassifikation: yes("Produktiv"),
      agenten: partial("d.velop agent center als Beta angekündigt (Q4 2026)"),
      rag: yes("d.velop-KI-Assistent mit Chat-Funktionalität"),
      plain: no("Grafischer Prozess-Designer"),
      localLLM: partial("KI-Anteile Cloud-gestützt; lokaler Betrieb nicht als Default dokumentiert"),
      onPrem: yes("On-Premise verfügbar"),
      airgap: partial("On-Prem-Betrieb möglich; air-gapped-Installation nicht als Standard dokumentiert"),
      git: no("Lineare Versionierung"),
      workflow: yes("Umfassend, Prozess-Designer produktiv"),
      gobd: yes("GoBD-Testat vorhanden"),
      iso: yes("ISO 27001 zertifiziert"),
      auditProof: yes("Audit-Trail und Export dokumentiert"),
      legalHold: yes("Records-Management verfügbar"),
      retention: yes("Retention produktiv"),
      erase: partial("DSGVO-Erase möglich; KI-Nebenprodukte nicht öffentlich detailliert"),
      encryption: yes("Verschlüsselung at rest"),
      multitenancy: yes("Mandantenfähigkeit"),
      ssoMfa: yes("SSO/SAML/MFA etabliert"),
      hybridSearch: partial("Semantische Suche in d.velop-KI-Assistent; Umfang der Vektor-Fusion nicht detailliert"),
      sap: yes("SAP-Integration + CMIS etabliert"),
      datev: yes("DATEV-Konnektor vorhanden"),
      addins: yes("Office/Outlook-Add-ins vorhanden"),
      mailIngest: yes("Mail-Import produktiv"),
      scanIngest: yes("Scan-Client verbreitet"),
      batch: yes("Batch-Import mit d.velop-Modulen"),
      mcp: no("Nicht öffentlich als Feature dokumentiert"),
      undo: partial("Versionierung linear"),
      restApi: yes("REST-API + Konnektor-Modul"),
      aiActProtocol: partial("Erklärbarkeits-Ansätze in KI-Assistent; kein publiziertes Protokoll-Format"),
      openSourceCore: no("Proprietär (Modulbaukasten d.3, d.velop sign, d.velop analytics …)"),
    }),
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
        a: "Nein. Von d.velop sign qualifiziert signierte Dokumente (PAdES-B-LTA) bleiben nach der Migration verifizierbar. In RecordTailor selbst arbeiten wir heute mit elektronischen Signaturen und manipulationssichtbarer Beweiskette; die QES-Integration mit einem QTSP (Österreich: A-Trust) ist in Vorbereitung. Falls QES-Ausstellung im Neusystem heute unverzichtbar ist, warten Sie diesen Meilenstein ab.",
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
      "M-Files Aino ist am Markt bei RAG und Auto-Metadaten weit vorne, bringt Zertifikate mit und ist metadaten­getrieben stark; RecordTailor liefert vier produktive Agenten, Plain-Language-Workflows, Git-Branching und läuft on-premises mit lokalem LLM — kein Cloud-Egress. Für Metadaten-getriebene Prozesse mit externer Cloud passt M-Files, für souveräne Agenten-Automatisierung RecordTailor.",
    rows: COMMON_ROWS_BASE({
      klassifikation: yes("Produktiv (Aino)"),
      agenten: partial("Aktions-Vorschläge in Aino; volle Agent-Runtime nicht öffentlich detailliert"),
      rag: yes("Produktiv (Aino Chat, mit Aktions-Vorschlägen)"),
      plain: no("Kein Ein-Satz-Workflow-Ansatz öffentlich dokumentiert"),
      localLLM: no("Cloud-KI (Aino läuft M-Files-seitig)"),
      onPrem: partial("On-Premise-Variante verfügbar; Cloud-Priorität"),
      airgap: no("Air-gapped-Installation nicht als Standard dokumentiert"),
      git: no("Version­ierung linear"),
      workflow: yes("Workflow-Engine produktiv"),
      gobd: yes("GoBD-Testat vorhanden"),
      iso: yes("ISO 27001 zertifiziert"),
      auditProof: yes("Audit-Trail und Export"),
      legalHold: yes("Records-Management-Funktionen"),
      retention: yes("Retention produktiv"),
      erase: partial("DSGVO-Erase möglich; Behandlung von Aino-Nebenprodukten nicht öffentlich detailliert"),
      encryption: yes("Verschlüsselung at rest"),
      multitenancy: yes("Vaults / Multi-Tenant"),
      ssoMfa: yes("SSO/SAML/MFA etabliert"),
      hybridSearch: yes("Metadata-driven + Aino-RAG; Volltext-Vektor-Kombination in Aino-Chat vorhanden"),
      sap: yes("SAP-Konnektor + CMIS"),
      datev: partial("DATEV-Integrationen über Partner"),
      addins: yes("Office/Outlook-Add-ins nativ"),
      mailIngest: yes("Mail-Import produktiv"),
      scanIngest: yes("Scan-Client vorhanden"),
      batch: yes("Bulk-Import in Aino-Klassifikation"),
      mcp: no("Nicht öffentlich als Feature dokumentiert"),
      undo: partial("Versionierung linear"),
      restApi: yes("REST-API vorhanden"),
      aiActProtocol: partial("Erklärbarkeit in Aino-Vorschlägen; kein publiziertes Protokoll-Export-Format"),
      openSourceCore: no("Proprietär"),
    }),
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
        a: "M-Files ist für metadatengetriebene Ablage sehr weit. RecordTailor extrahiert Metadaten mit KI und macht den Knowledge Graph daraus — plus Klartext-Begründung pro Extraktion, plus Undo über die Versionierung. Wenn Ihr Anwendungsfall reines Metadaten-Filtern ist, bleibt M-Files stark; wenn Erklärbarkeit und Undo dazukommen, ist RecordTailor die bessere Wahl.",
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
      "SharePoint mit Copilot bringt umfassende Office-Integration, das Microsoft-Ökosystem und Cloud-KI-Agenten; RecordTailor liefert echte On-Prem-Ablage mit lokalem LLM, vier produktive Agenten, Plain-Language-Workflows und Git-Branching für Dokumente. Bei EU-Datenhoheit und DSGVO-sensiblen Beständen ist der Unterschied strukturell — Cloud vs. souverän.",
    rows: COMMON_ROWS_BASE({
      klassifikation: yes("Vorhanden (Syntex, Cloud)"),
      agenten: yes("Copilot Agents in Cloud verfügbar"),
      rag: yes("Copilot mit RAG in Cloud"),
      plain: partial("Copilot → Power Automate (Cloud); kein Ein-Satz-DMS-Workflow-Format"),
      localLLM: no("Cloud-KI (Azure OpenAI)"),
      onPrem: partial("Microsoft 365 ist Cloud-only; SharePoint Server on-prem als separate Produktlinie mit reduziertem Funktionsumfang"),
      airgap: no("Cloud-only für die neuesten KI-Features; kein air-gapped M365"),
      git: no("Versionierung linear"),
      workflow: yes("Power Automate umfassend"),
      gobd: partial("GoBD-Konformität stark implementierungs­abhängig; kein Standard-Testat auf die reine Plattform"),
      iso: yes("Microsoft ISO 27001 zertifiziert"),
      auditProof: partial("Audit-Log vorhanden, Court-Bundle-Analogon nicht als Standard-Export"),
      legalHold: yes("Purview/Records-Management verfügbar"),
      retention: yes("Retention-Labels und Enforcement (Purview)"),
      erase: partial("DSGVO-Erase über M365; Cloud-Sub-Prozessor-Kette in EU-Data-Boundary umstritten"),
      encryption: yes("BYOK / Customer Key möglich"),
      multitenancy: yes("Multi-Tenant per Design"),
      ssoMfa: yes("Entra ID / SSO / MFA / SCIM"),
      hybridSearch: yes("Microsoft Search + Copilot Retrieval"),
      sap: partial("Über Konnektoren (Middleware)"),
      datev: partial("Nur über Partner-Konnektoren"),
      addins: yes("Nativ Teil von Microsoft 365"),
      mailIngest: yes("Outlook-Integration nativ"),
      scanIngest: partial("Nur über 3rd-Party-Konnektoren"),
      batch: yes("Batch-Import über Migration Manager / Syntex"),
      mcp: partial("Copilot-Toolkit / Agent Store vorhanden; kein offener MCP-Server im DMS-Sinn"),
      undo: partial("Versionierung linear"),
      restApi: yes("Microsoft Graph API"),
      aiActProtocol: no("Kein publiziertes Agent-Protokoll-Export-Format im DMS-Sinn"),
      openSourceCore: no("Proprietär"),
    }),
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
      "Paperless-ngx ist als OSS-DMS im Kleinkundensegment stark und läuft lokal; RecordTailor deckt Enterprise-Anforderungen ab (SAP ArchiveLink, CMIS 1.1, Multi-Tenancy mit RLS, Workflow-Engine, produktive Agenten, MCP) und liefert Enterprise-Support samt SLA. Für Ein-Personen-Ablage bleibt Paperless-ngx solide; für regulierte Unternehmen skaliert es nicht mit.",
    rows: COMMON_ROWS_BASE({
      klassifikation: partial("Community-Add-ons (paperless-ai u. a.)"),
      agenten: no("Keine Agent-Runtime im Kern"),
      rag: partial("Community-Skripte, kein Kern-Feature"),
      plain: no("Kein Workflow-Konzept im Kern"),
      localLLM: yes("Lokal (OSS-Prinzip, oft mit lokalem Ollama betrieben)"),
      onPrem: yes("Docker Compose (lokal)"),
      airgap: yes("Air-gapped-Betrieb technisch möglich"),
      git: no("Nicht vorhanden"),
      workflow: no("Kein Workflow-Modul im Kern"),
      gobd: no("Kein Testat, keine GoBD-Zertifikate"),
      iso: no("Community-Projekt, keine Anbieter-Zertifikate"),
      auditProof: partial("Audit-Trail vorhanden; kein Court-Bundle-Export als Standard"),
      legalHold: no("Kein Legal-Hold-Konzept im Kern"),
      retention: partial("Retention über Custom-Tags und externe Skripte"),
      erase: partial("DSGVO-Erase über Standard-Delete; Sonderbehandlung von KI-Add-on-Nebenprodukten nicht dokumentiert"),
      encryption: partial("Über Storage-Layer/Filesystem konfigurierbar; kein Standard-at-rest"),
      multitenancy: no("Ein Corpus pro Instanz; keine RLS"),
      ssoMfa: partial("SSO nur über Reverse-Proxy-Setups"),
      hybridSearch: partial("Volltext + Tags; keine Vektor-Semantik im Kern"),
      sap: no("Nicht vorhanden"),
      datev: no("Nicht vorhanden"),
      addins: partial("Community-Add-ons für Mobile/Web-Clients"),
      mailIngest: yes("IMAP-Ingest produktiv (Community)"),
      scanIngest: yes("Scan-Folder-Import produktiv"),
      batch: yes("Bulk-Import + OCR"),
      mcp: partial("Community-Extensions"),
      undo: no("Kein Undo-Konzept für KI-Aktionen (weil kein KI-Agenten-Kern)"),
      restApi: yes("REST-API vorhanden"),
      aiActProtocol: no("Nicht vorhanden"),
      openSourceCore: yes("Vollständig Open Source (AGPL)"),
    }),
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
