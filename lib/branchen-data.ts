/**
 * Branchen-Seiten unter /branchen/[slug]. Wir übernehmen die generellen
 * Feature-Aussagen aus produkt-data.ts und rahmen sie branchen-spezifisch.
 * Ehrlichkeit: Wenn etwas nur teilweise passt (z. B. eAkte-Roadmap in
 * öffentlicher Verwaltung), steht das explizit drin.
 */

export type BranchenEntry = {
  slug: string;
  branche: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  /** Vier Sätze: was diese Branche typischerweise vom DMS erwartet. */
  needs: string[];
  /** Wie RecordTailor die Bedürfnisse adressiert. */
  answers: { title: string; body: string }[];
  /** Konkrete Feature-Deep-Links (Slugs aus produkt-data.ts). */
  featureLinks: string[];
  faq: { q: string; a: string }[];
};

export const BRANCHEN: BranchenEntry[] = [
  {
    slug: "steuerberater",
    branche: "Steuerberater & Kanzleien",
    metaTitle: "DMS für Steuerberater — DATEV-Belege, GoBD, Mandanten",
    metaDescription:
      "RecordTailor für Steuerberater: DATEV-CSV-Export, GoBD-Architektur, Mandanten-Trennung mit RLS, KI-Rechnungs-Agent für den 3-Way-Match. Was heute schon geht und was in Vorbereitung ist.",
    h1: "DMS für Steuerberater. Belege, die schneller ankommen.",
    lead:
      "Kanzleien und Steuerberatungen arbeiten an der Nahtstelle zwischen der Buchhaltung des Mandanten und der eigenen Kanzleisoftware. RecordTailor sitzt genau dort: Der Rechnungs-Agent liest den eingehenden Beleg, matcht ihn gegen Bestellung und Vertrag, exportiert nach DATEV-CSV — der Steuerberater bekommt strukturierte Belege statt PDF-Wüsten.",
    needs: [
      "DATEV-kompatibler Belegtransfer mit Buchungsstapel-Format.",
      "GoBD-konforme Ablage und ein Beweispaket, das Betriebsprüfer eigenständig verifizieren können.",
      "Mandantentrennung mit belastbarer Isolation — Row-Level-Security, nicht nur UI-Filter.",
      "Ein Weg, wie eine Kanzlei ihre Mandanten Richtung modernes DMS beraten kann.",
    ],
    answers: [
      {
        title: "DATEV-CSV heute, DATEVconnect in Vorbereitung",
        body: "Der Rechnungs-Agent extrahiert Lieferant, IBAN, Beträge, Steuersätze und Fälligkeit. Aus der 3-Way-Match-Vorbereitung wird ein DATEV-CSV-Buchungsstapel, den die Kanzlei-Software importiert. Der DATEVconnect-API-Anschluss (direkter Transfer) und XRechnung/ZUGFeRD-Parser sind in Vorbereitung — CSV bleibt heute die stabile Brücke.",
      },
      {
        title: "GoBD-Architektur, ohne Testat-Schwindel",
        body: "Manipulationssichtbare Audit-Hash-Chain über jede Aktion (Upload, Klassifikation, Freigabe, Löschung, Agenten-Aktion), Policies-as-Code für Aufbewahrungsfristen, Court-Bundle-Export mit Hash-Manifest. Ein IDW-PS-880-Testat ist Roadmap — wir schreiben das offen, nicht „in Zertifizierung“.",
      },
      {
        title: "Mandantentrennung per Row-Level-Security",
        body: "Jeder Mandant ist ein eigener Tenant mit RLS-Isolation auf Datenbank-Ebene. Auch als Betreiber sehen wir ohne autorisierten Tenant-Kontext nichts. Kombiniert mit AES-256-GCM at rest und lokalem LLM ergibt sich die Datenhoheits-Zusicherung, die eine Kanzlei einem Mandanten zusichern kann.",
      },
      {
        title: "Als Beratungsprodukt für den Mandanten",
        body: "Wir kooperieren mit Kanzleien, die RecordTailor als Mandanten-DMS-Empfehlung führen. Konditionen (White-Label, Multi-Instanz-Betrieb, Onboarding-Support) klären wir in einem 30-Minuten-Gespräch.",
      },
    ],
    featureLinks: ["integrationen", "ki-agenten", "compliance"],
    faq: [
      {
        q: "Wie kommt der Beleg vom Mandanten zum Steuerberater?",
        a: "Der Mandant scannt oder erhält den Beleg per Mail — der Inbox-Agent triagiert und der Rechnungs-Agent bereitet den DATEV-CSV-Buchungsstapel vor. Sie importieren den Stapel in Ihre Kanzleisoftware. Die Original-PDF bleibt in RecordTailor beim Mandanten (revisionsrelevant) — die Buchung enthält den Verweis.",
      },
      {
        q: "Was ist mit XRechnung und ZUGFeRD?",
        a: "Parser für beide Formate sind in Vorbereitung. Heute klassifiziert die KI die PDF-Sicht (bei ZUGFeRD ist das der eingebettete PDF/A-Anteil); den strukturierten XML-Anteil integrieren wir mit dem Parser für zusätzliche Präzision.",
      },
      {
        q: "Wie funktioniert die Betriebsprüfung?",
        a: "Der Compliance-Agent stellt auf Zuruf ein Court-Bundle für einen Zeitraum zusammen — Dokumente, Ereignis-Historie, Hash-Manifest. Der Prüfer verifiziert außerhalb Ihres Systems eigenständig, dass die Kette intakt ist.",
      },
    ],
  },

  {
    slug: "oeffentliche-verwaltung",
    branche: "Öffentliche Verwaltung",
    metaTitle: "DMS für die öffentliche Verwaltung — On-Prem, EU-Datenhoheit",
    metaDescription:
      "RecordTailor in Behörden: On-Premise mit lokalem LLM, air-gapped-fähig, DSGVO-konform, Audit-Hash-Chain. eAkte-Anbindung ist Roadmap — wir schreiben ehrlich, was heute geht.",
    h1: "DMS für die öffentliche Verwaltung. On-Prem, ohne Cloud-Abhängigkeit.",
    lead:
      "Behörden und öffentliche Einrichtungen brauchen Datenhoheit, die auch bei Rechenzentrums-Prüfungen und Vergaberichtlinien Bestand hat. RecordTailor läuft on-premises, air-gapped-fähig, mit lokalem LLM — keine Cloud-KI-API im Datenpfad, keine EU-Data-Boundary-Diskussion.",
    needs: [
      "Betrieb im eigenen Rechenzentrum ohne Cloud-Anteil, air-gapped-fähig.",
      "DSGVO-konforme Verarbeitung inkl. Art.-17-Erase auch für KI-Nebenprodukte (Extraktionen, Embeddings, Cache).",
      "Eine Beweiskette, die eine Rechnungshof-Prüfung überlebt.",
      "Absehbare Anbindung an eAkte-Standards (BSI TR-03138 XAIP, DOMEA).",
    ],
    answers: [
      {
        title: "On-Prem mit lokalem LLM — kein Cloud-Egress",
        body: "Docker Compose auf einem Host, Kubernetes/Helm für HA, Air-Gap für sensible Netze. Das LLM (Ollama-Default) läuft im selben Netz — kein Prompt verlässt Ihr Rechenzentrum. Für kritische Umgebungen ergänzt Confidential Compute (AMD SEV-SNP) die Kette.",
      },
      {
        title: "DSGVO-Erase über alle Stores",
        body: "Art.-17-Antrag pseudonymisiert nicht nur die Datei, sondern erasiert auch KI-Extraktionen, Vektor-Embeddings und Antwort-Caches. Sonst könnte der RAG-Chat Wochen später den Namen aus dem Modell reproduzieren, obwohl das Original „gelöscht“ ist.",
      },
      {
        title: "Beweispaket auf Knopfdruck",
        body: "Manipulationssichtbare Audit-Hash-Chain, Court-Bundle-Export mit Hash-Manifest. Der Prüfer verifiziert unabhängig von Ihrer Instanz, dass die Historie intakt ist. IDW-PS-880-Testat und ISO 27001 sind bei uns Roadmap; wir sagen das offen — Aussage folgt Nachweis, nicht Marketing.",
      },
      {
        title: "eAkte-Interop — was heute geht, was Roadmap ist",
        body: "CMIS 1.1 nativ, SAP ArchiveLink nativ, REST-API mit Scoped Service-Tokens. Explizite BSI-TR-03138-XAIP-Ein-/Ausfuhr und DOMEA-Konformitätsnachweise sind noch Roadmap-Themen — wenn Ihre Vergabe eines davon zwingend fordert, sprechen Sie uns bitte an, damit wir Ihnen den aktuellen Stand ehrlich einordnen können.",
      },
    ],
    featureLinks: ["compliance", "wissen", "integrationen"],
    faq: [
      {
        q: "Ist RecordTailor VS-NfD-fähig?",
        a: "Grundlegende Voraussetzungen (On-Prem, lokales LLM, kein Cloud-Egress, air-gapped-Installation, verschlüsselte Ablage, Audit-Chain) sind gegeben. Eine offizielle VS-NfD-Zulassung ist projektbezogen zu erwirken; wir unterstützen den Prozess, sprechen aber offen, dass wir kein Standard-Zertifikat vorweisen.",
      },
      {
        q: "Was ist mit Backup, DR und Monitoring?",
        a: "Encrypted Backups mit BYOK (Ihr Master-Key), Konfigurations- und Datenbank-Restore-Verfahren, Prometheus-Metriken. Formale Backup-/DR-Runbooks als publiziertes Dokument sind in Vorbereitung — im Projekt gehen wir das mit Ihrem Ops-Team konkret durch.",
      },
      {
        q: "Können wir das im BSI-C5-Kontext einsetzen?",
        a: "C5 zertifiziert typischerweise Cloud-Anbieter — RecordTailor läuft on-prem, also fällt der Anbieter-C5 nicht direkt an. Für die Betriebs­verantwortung des Kunden können wir die relevanten Kontrollen dokumentieren; ein Projekt-Setup mit Ihrer C5-Beauftragten klären wir im Vorgespräch.",
      },
    ],
  },

  {
    slug: "industrie",
    branche: "Industrie & Fertigung",
    metaTitle: "DMS für Industrie & Fertigung — SAP, ISO-Doku, Verträge",
    metaDescription:
      "RecordTailor in produzierenden Unternehmen: SAP ArchiveLink nativ, KI-Vertrags-Agent, ISO-Doku-Ablage mit Retention und Legal Hold, DATEV-Brücke für die Buchhaltung.",
    h1: "DMS für Industrie & Fertigung. Vom Vertrag bis zur Prüfnorm.",
    lead:
      "Produzierende Unternehmen leben zwischen SAP, dem Vertragsmanagement und der ISO-Dokumentation. RecordTailor bindet SAP über ArchiveLink an, versteht Verträge mit dem Vertrags-Agenten und behandelt Prüfnormen und Qualitätsdokumente mit den gleichen Werkzeugen wie die Buchhaltungsbelege — ein Repository, nicht drei Silos.",
    needs: [
      "Nahtlose SAP-Anbindung — ArchiveLink, keine SAP-seitige Umkonfiguration.",
      "Verträge, Klauselprüfung, Fristen — im Blick, ohne Excel-Nebenrechnung.",
      "ISO-9001-, ISO-14001- und Prüfdokumente mit Retention, Legal Hold und Beweiskette.",
      "Volumenfestigkeit: 50 000 Belege pro Tag im Batch, ohne Nachwehen.",
    ],
    answers: [
      {
        title: "SAP ArchiveLink kompatibel",
        body: "RecordTailor spricht ArchiveLink kompatibel zu Alfresco und den etablierten DMS. Im SAP-ContRep-Setup tauschen Sie nur den Endpunkt aus — Buchungslogik, Belegsuche und WebGUI bleiben unberührt. Migrationen von einem Legacy-DMS laufen darüber ohne SAP-Neukonfiguration.",
      },
      {
        title: "Vertrags-Agent für Klauseln und Fristen",
        body: "Der Vertrags-Agent findet Klauseln, Fristen und Abweichungen vom Muster. Änderungsvorschläge landen — dank Git-Modell — in einem Branch, nicht direkt am Original. Kein „der Agent hat unser Muster zerschossen“-Szenario, weil jede Änderung reviewbar ist.",
      },
      {
        title: "ISO-Doku mit derselben Compliance-Schicht",
        body: "Prüfberichte, Kalibrierprotokolle und Managementhandbücher liegen in derselben Ablage wie die Buchhaltungsbelege — mit Retention-Regeln pro Belegart, Legal Hold für laufende Audits und Court-Bundle-Export für Behördenprüfungen. Kein zweites System für die Qualitätsstelle.",
      },
      {
        title: "Stapel- und Volumen-fest",
        body: "Der Batch-Prozessor klassifiziert auf allen verfügbaren GPU-Cores parallel, prüft Duplikate über den BLAKE3-Content-Hash und protokolliert Ausreißer in der Hash-Chain. 50 000 Belege aus einem Monatsabschluss laufen ohne manuelles Nachziehen durch.",
      },
    ],
    featureLinks: ["integrationen", "ki-agenten", "posteingang"],
    faq: [
      {
        q: "Wir haben ArchiveLink an ELO/DocuWare. Wie schwer ist der Umzug?",
        a: "Der SAP-seitige Schritt ist ein Endpunkt-Tausch im ContRep-Setup — 20 Minuten. Der DMS-seitige Schritt ist die Migration der Bestände; das dauert je nach Volumen 4–8 Wochen. In der Übergangszeit läuft das alte System 30 Tage im Read-Only-Modus als Fallback.",
      },
      {
        q: "Können wir CAD-Zeichnungen ablegen?",
        a: "Als Dateien: ja, wie jedes andere Dokument (mit Version, Metadaten, Retention). Als CAD-Viewer mit strukturierten Metadaten: dazu gibt es spezialisierte PLM-Systeme; RecordTailor ersetzt kein PLM, ergänzt es aber um die revisionsrelevante Ablage-Schicht.",
      },
      {
        q: "Wie steht es mit XRechnung / EN 16931 im B2G-Geschäft?",
        a: "XRechnung/ZUGFeRD-Parser sind in Vorbereitung. Heute klassifiziert die KI die eingebettete PDF-Sicht; den strukturierten XML-Anteil verarbeiten wir mit dem Parser für höhere Präzision. Der DATEV-CSV-Export liefert die Buchungsdaten Richtung FiBu.",
      },
    ],
  },

  {
    slug: "gesundheit",
    branche: "Gesundheit & Life Sciences",
    metaTitle: "DMS für Gesundheit & Life Sciences — DSGVO, Aufbewahrung, Studien",
    metaDescription:
      "RecordTailor in Kliniken und Life-Sciences-Unternehmen: On-Prem-Betrieb, langfristige Aufbewahrung, Legal Hold, DSGVO-Erase auch für KI-Nebenprodukte. Was heute geht und was in Vorbereitung ist.",
    h1: "DMS für Gesundheit & Life Sciences. Aufbewahrung, die tatsächlich zählt.",
    lead:
      "Kliniken, Ärztezentren, Pharma- und Medizintechnik-Unternehmen verwalten Dokumente mit ungewöhnlich langen Aufbewahrungsfristen und ungewöhnlich strengen Datenschutz-Anforderungen. RecordTailor ist strukturell darauf ausgelegt: On-Prem, lokales LLM, DSGVO-Erase inkl. KI-Nebenprodukte, Retention über Jahrzehnte.",
    needs: [
      "Sehr lange Aufbewahrungsfristen (10–30 Jahre) mit belastbarer Beweiskette.",
      "DSGVO-konforme Verarbeitung, insbesondere für besondere Kategorien (Art. 9).",
      "On-Premise-Betrieb — keine Cloud-KI im Datenpfad, EU-Datenhoheit selbstverständlich.",
      "Beweispakete für regulatorische Audits (GxP, ISO 13485, ISO 15189).",
    ],
    answers: [
      {
        title: "Langfristige Ablage mit Manipulations-Sichtbarkeit",
        body: "Jede Aktion wird in der Hash-Chain verkettet — auch nach 15 Jahren erkennt ein Prüfer eine nachträgliche Änderung. Retention-Regeln liegen als Policies-as-Code neben dem Code (versioniert), sodass ein späterer Auditor nachvollziehen kann, welche Fristen zu welchem Zeitpunkt galten.",
      },
      {
        title: "DSGVO-Art.-17 auch für KI-Nebenprodukte",
        body: "Ein Erase-Antrag pseudonymisiert die Datei und erasiert die Personendaten aus KI-Extraktionen, Vektor-Embeddings und Antwort-Caches. Sonst könnte der RAG-Chat den Namen später aus dem Modell reproduzieren, obwohl die Akte „gelöscht“ ist.",
      },
      {
        title: "On-Prem mit lokalem LLM",
        body: "Ollama-Default, per Tenant konfigurierbar. Kein Prompt und kein Fragment verlässt Ihr Netz. Air-gapped-Installation möglich, signierte Updates mit Sigstore-Attestation. Für kritische Umgebungen zusätzlich Confidential Compute (AMD SEV-SNP).",
      },
      {
        title: "Regulatorische Audits — Grenzen offen benannt",
        body: "Court-Bundle-Export mit Hash-Manifest gibt einem Auditor die Beweiskette in die Hand. Explizite GxP-Compliance-Zertifikate (21 CFR Part 11, EU Annex 11), ISO 13485 und ISO 15189 sind Themen, die projektbezogen zu bearbeiten sind — wir haben keine Standard-Zertifikate, arbeiten aber mit der Compliance-Stelle des Kunden am spezifischen Nachweis.",
      },
    ],
    featureLinks: ["compliance", "wissen", "ki-agenten"],
    faq: [
      {
        q: "Ist RecordTailor als Klinik-Archiv geeignet?",
        a: "Für die dokumenten­basierte Ablage (Behandlungsverträge, Aufklärungsbögen, Verwaltungs­dokumente, Personalakten): ja. Für strukturierte medizinische Daten (EPA, KIS-Daten) sind spezialisierte Systeme sinnvoll — RecordTailor ergänzt das um die revisionsrelevante Dokumentenschicht.",
      },
      {
        q: "GxP-Validierung — wie funktioniert das?",
        a: "GxP-Validierung ist Projekt- und Prozess-Arbeit, kein Feature-Häkchen. Wir liefern die technischen Grundlagen (Audit-Chain, Versionierung, Zugriffs-Log, Zeitstempel) und unterstützen die Validierung mit Ihrer QM-Stelle. Wenn Ihr Betrieb GxP-Validierung als K.-o.-Kriterium hat, prüfen wir das im Vorgespräch offen.",
      },
      {
        q: "Können wir DICOM-Daten ablegen?",
        a: "Als Datei-Objekt: ja. Für DICOM-Spezialfunktionen (Query/Retrieve, WADO) gibt es PACS-Systeme; RecordTailor ersetzt kein PACS, ergänzt es aber um die Dokumenten-Ablage rundherum (Befunde, Aufklärung, Verträge).",
      },
    ],
  },
];

export function findBrancheBySlug(slug: string): BranchenEntry | undefined {
  return BRANCHEN.find((b) => b.slug === slug);
}
