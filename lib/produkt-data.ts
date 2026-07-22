/**
 * Feature-Seiten unter /produkt/[slug]. Inhalte strikt aus der Ist-Stand-
 * Tabelle in argonaut/docs/Marktanalyse-SWOT-Update-2026-07.md §1 abgeleitet
 * — nur was dort als ✅ geführt wird, darf hier als Feature behauptet werden.
 * Roadmap-Themen (QES, Retention-Enforcement, Office-Add-ins) werden entweder
 * als „in Vorbereitung“ gekennzeichnet oder ganz weggelassen.
 *
 * Claims-Leiter (§1 Konzept) je Feature:
 *   Stufe A = beweisbare Alleinstellung (aggressiv ausspielen)
 *   Stufe B = erkennbar wertende Superlative (zulässig)
 *   Stufe C = harte Fakten (Zahlen aus Ist-Stand-Tabelle)
 */

export type FeatureSection = {
  title: string;
  body: string;
};

export type FeaturePage = {
  slug: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  /** Auf-einen-Blick-Kasten: 3–5 zitierfähige Sätze mit Produktname (§4 Konzept). */
  glance: string[];
  sections: FeatureSection[];
  faq: { q: string; a: string }[];
  /** Verwandte Feature-Slugs für interne Verlinkung. */
  related: string[];
};

export const PRODUKT_PAGES: FeaturePage[] = [
  // --------------------------------------------------------------------------
  // 1. KI-AGENTEN — die wichtigste Seite der Site
  // --------------------------------------------------------------------------
  {
    slug: "ki-agenten",
    eyebrow: "KI-Agenten",
    h1: "Die KI arbeitet. Sie entscheiden.",
    metaTitle: "KI-Agenten im DMS — Inbox, Compliance, Vertrag, Rechnung",
    metaDescription:
      "Vier KI-Agenten produktiv: Inbox, Compliance, Vertrag, Rechnung. Jede Aktion mit Begründung, Konfidenz und Freigabe-Gate. Hash-Chain-auditierbar, EU-AI-Act-tauglich.",
    lead:
      "Vier Agenten sind produktiv ausgeliefert — nicht auf einer Roadmap. Sie triagieren den Posteingang, prüfen Verträge auf Klauseln, matchen Rechnungen gegen Bestellungen und schlagen Retention-Fristen vor. Jede Aktion trägt eine Begründung, eine Konfidenz und einen Beleg. Was das System unsicher findet, landet in der Approval-Inbox; was klar ist, kann pro Tenant automatisch angewandt werden. Und alles — auch das Auto-Apply — verkettet sich in der Audit-Hash-Chain.",
    glance: [
      "RecordTailor liefert vier KI-Agenten heute produktiv aus: Inbox-Agent, Compliance-Agent, Vertrags-Agent, Rechnungs-Agent.",
      "Jede Aktion eines Agenten trägt eine natürlichsprachliche Begründung, eine Konfidenz und die zugrundeliegenden Belege — kein Blackbox-Output.",
      "Aktionen unter dem konfigurierten Konfidenz-Schwellwert landen in der Approval-Inbox; darüber schlägt der Agent vor oder — mit Tenant-Allowlist — wendet automatisch an.",
      "Jede Agenten-Aktion wird kryptografisch in die Audit-Hash-Chain verkettet und lässt sich als EU-AI-Act-taugliches Agent-Protokoll (PDF) exportieren.",
      "Alle Agenten laufen on-premises gegen ein lokales LLM (Ollama-Default) — kein Cloud-Egress, keine Trainingsdaten-Weitergabe.",
    ],
    sections: [
      {
        title: "Vier Agenten, jeder mit klarem Job",
        body: "Der Inbox-Agent nimmt neue Dokumente entgegen, klassifiziert, extrahiert Attribute und schlägt einen Ablageort samt Workflow vor. Der Compliance-Agent bewertet Bestände gegen die Policies-as-Code (GoBD, HGB, DSGVO) und meldet Aufbewahrungs- und Löschkandidaten. Der Vertrags-Agent findet Klauseln, Fristen und Abweichungen vom Muster; Änderungsvorschläge landen — dank Git-Modell — in einem Branch, nicht direkt am Original. Der Rechnungs-Agent liest Beträge, IBAN, Steuersätze und Vertragsbezug und bereitet die Freigabe vor.",
      },
      {
        title: "Begründung, Konfidenz, Beleg — für jede einzelne Aktion",
        body: "RecordTailor speichert für jede Agenten-Aktion (`agent_action`) drei Dinge: warum sie vorgeschlagen wurde (Klartext-Begründung), wie sicher der Agent war (Konfidenz-Score), und welche Textstellen im Quelldokument die Entscheidung stützen (Evidence-Zeiger). Der Nutzer sieht das im Transparenz-Panel; der Auditor sieht dasselbe im Protokoll-Export.",
      },
      {
        title: "Human-in-the-Loop — konfigurierbar pro Tenant und Aktionstyp",
        body: "Autonomie ist kein Schalter, sondern ein Dial. Vom reinen Vorschlagsmodus („Agent darf nichts selbst tun, nur vorschlagen“) über die Zwei-Augen-Freigabe bis zur Dunkelverarbeitung für Routinefälle. Konfidenz-Gate + Tenant-Allowlist entscheiden zwischen `auto_applied` und Inbox-Karte — Auto-Apply landet gleichermaßen in Hash-Chain und Protokoll.",
      },
      {
        title: "Undo-Garantie über das Git-Modell",
        body: "Jede schreibende Aktion eines Agenten ist über die Versionierung revertierbar. Der Vertrags-Agent macht keine Direktänderungen an Verträgen; er schlägt Änderungen als Branch vor, den Sie mergen oder verwerfen. Kein „der Agent hat unser Muster zerschossen“-Szenario.",
      },
      {
        title: "Ihre Daten bleiben im Haus — auch für die KI",
        body: "Alle Agenten laufen gegen ein lokales LLM (Ollama-Default; alternativ pro Tenant konfigurierbar). Kein Prompt, kein Dokument-Fragment, kein Embedding verlässt Ihr Netz. Für die Compliance-Kunden, die KI eigentlich fürchten, ist das der Weg zu KI, die sie kaufen können.",
      },
    ],
    faq: [
      {
        q: "Sind das echte Agenten oder nur KI-Klassifikation mit Marketing?",
        a: "Agent-Runtime im engeren Sinn: `agent_def` beschreibt den Agenten, `agent_run` eine Ausführung, `agent_action` eine einzelne Aktion mit Begründung, Konfidenz und Evidence. Vier Agenten sind implementiert und laufen gegen die Job-Queue — der Code liegt im Argonaut-Repo unter `services/worker/src/agents/`.",
      },
      {
        q: "Wie beweist das EU-AI-Act-Protokoll die KI-Entscheidungen?",
        a: "Der Export bündelt pro Aktion: Zeitstempel, Agent-Definition (Version), Modell und Modellparameter, Prompt, Konfidenz, Begründung, Evidence-Zeiger auf die Quelldokumente und den Hash des Vorgänger-Events. Wer die Kette prüft, sieht, dass nachträglich nichts verändert wurde.",
      },
      {
        q: "Was passiert bei einer Falschentscheidung des Agenten?",
        a: "Default ist `proposed` — der Agent schlägt vor, der Mensch entscheidet. Wo Auto-Apply aktiv ist, wird die Aktion versioniert und ist per Versionierung reversibel; die Hash-Chain hält die Nachvollziehbarkeit. Zusätzlich reduziert das Konfidenz-Gate die Rate falscher Auto-Applys auf statistisch bekanntem Niveau.",
      },
      {
        q: "Können wir eigene Agenten definieren?",
        a: "Die Agent-Definitionen sind versionierte Konfigurationen — Prompt-Template, Tools, Konfidenz-Schwelle, Auto-Apply-Regeln. Eigene Agenten sind über die Konfiguration heute möglich; ein UI-gestützter Agent-Builder für Nicht-Entwickler ist Roadmap.",
      },
    ],
    related: ["wissen", "workflows", "compliance"],
  },

  // --------------------------------------------------------------------------
  // 2. WISSEN — RAG, Hybrid-Suche, Knowledge Graph
  // --------------------------------------------------------------------------
  {
    slug: "wissen",
    eyebrow: "Wissen",
    h1: "Fragen Sie Ihren Dokumentenbestand. Er antwortet mit Belegen.",
    metaTitle: "DMS mit RAG-Chat & KI-Suche — RecordTailor Wissen",
    metaDescription:
      "RAG-Chat mit Citations, Hybrid-Suche (BM25 + Vektor) und Knowledge Graph — RecordTailor macht Ihren Bestand befragbar. Lokale Embeddings pro Tenant, DSGVO-konform.",
    lead:
      "Suchen ist gut, Fragen ist besser. RecordTailor kombiniert Volltext (BM25) und semantische Vektorsuche (pgvector) in einer einzigen Query — Reciprocal Rank Fusion mischt beide Rankings, damit Sie das Dokument finden, das zwar Ihre Worte nicht enthält, aber Ihre Frage beantwortet. Der RAG-Chat geht einen Schritt weiter: Er antwortet in natürlicher Sprache und legt jede Aussage mit einer Fundstelle im Original-Dokument offen. Kein LLM-Halluzinieren ohne Beleg.",
    glance: [
      "RecordTailor kombiniert BM25-Volltext und Vektorsemantik in einer Query — Reciprocal Rank Fusion mischt die Rankings.",
      "Der RAG-Chat antwortet mit Citations: jede Aussage verlinkt auf die Textstelle im Quelldokument, aus der sie stammt.",
      "Embeddings werden pro Tenant erzeugt und liegen in pgvector — RecordTailor nutzt lokale Modelle über Ollama; OpenAI-Provider pro Tenant konfigurierbar.",
      "Ein versionsbewusster Chat kennt den Git-Zeitstrahl: „Was hat sich in §7 zwischen Version 3 und 5 geändert?“ — nur möglich, weil Dokumente branchen.",
      "Der Knowledge Graph verknüpft Personen, Unternehmen, Verträge und Fristen automatisch — keine Metadaten-Pflege durch den Nutzer.",
    ],
    sections: [
      {
        title: "Hybrid-Suche statt zweier halb-guter Suchen",
        body: "Volltext findet die Dokumente, in denen Ihr Wort steht. Vektorsuche findet die, in denen Ihre Bedeutung steht. Beide Sichten allein sind blind für die jeweils andere. RecordTailor stellt jede Query an beide Indizes, mischt die Rankings über Reciprocal Rank Fusion und zeigt eine Ergebnisliste, die dem Nutzer erspart, zwei verschiedene Sucharten zu bedienen.",
      },
      {
        title: "RAG-Chat mit Fundstellen",
        body: "Der Chat gegen Ihren Bestand nutzt Retrieval-Augmented Generation: Er zieht die relevantesten Passagen aus Ihrem Corpus, kontextualisiert das LLM damit und antwortet mit Zitatzeigern in die Quelltexte. Jede Aussage lässt sich zurückverfolgen auf die Zeilen, aus denen sie stammt.",
      },
      {
        title: "Versionsbewusstes RAG — nur mit dem Git-Modell möglich",
        body: "„Was hat sich in Klausel 7 zwischen den letzten drei Vertragsständen geändert und was bedeutet das?“ — RecordTailor kann diese Frage beantworten, weil Dokumente wie in Git branchen und die Historie erhalten bleibt. Kein anderes DMS am Markt kann das.",
      },
      {
        title: "Knowledge Graph — automatisch, nicht handgepflegt",
        body: "Personen, Unternehmen, Verträge und Fristen werden bei der Klassifikation extrahiert und miteinander verknüpft. Vom Vertrag zum Ansprechpartner zum letzten Angebot — ein Klick, keine Handarbeit.",
      },
      {
        title: "Lokale Embeddings, pro Tenant getrennt",
        body: "Embeddings werden mit einem lokalen Modell (Ollama-Default) erzeugt; alternativ pro Tenant ein Provider Ihrer Wahl. Sie liegen als Vektoren in pgvector — kein externer Vektor-Store, keine Datenwanderung, keine Cross-Tenant-Sichtbarkeit dank Row-Level-Security.",
      },
    ],
    faq: [
      {
        q: "Halluziniert das LLM in den Chat-Antworten?",
        a: "Der Chat operiert im RAG-Modus — er darf nur beantworten, wozu er im Corpus einen Beleg findet, und muss jede Aussage mit einer Fundstelle unterlegen. Fehlen Belege, sagt er das. Vollständig ausschließen lässt sich Halluzination bei generativen Modellen nie; das Zitat-Prinzip macht sie aber sichtbar und überprüfbar.",
      },
      {
        q: "Welches Embedding-Modell verwendet RecordTailor?",
        a: "Default ist ein lokales Ollama-Modell. Pro Tenant lässt sich der Embedding-Provider konfigurieren (lokales Modell, OpenAI-kompatibler Endpoint, eigener Endpoint). Der Embedding-Namespace ist pro Tenant getrennt, sodass Modellwechsel und Re-Indexierung ohne Ausfall möglich sind.",
      },
      {
        q: "Wie groß darf der Bestand für den Chat sein?",
        a: "pgvector skaliert bis in den zweistelligen Millionenbereich pro Tenant. Wir stimmen HNSW-Parameter im Sizing ab. Für sehr große Bestände empfehlen wir GPU-Betrieb für die Antwort-Generierung, sonst wird die reine Retrieval-Latenz zum Engpass.",
      },
      {
        q: "Ist der Knowledge Graph eine separate Datenbank?",
        a: "Nein. Entitäten und Beziehungen liegen in Postgres neben den Dokumenten — kein zusätzliches Betriebsteil, keine Sync-Probleme. Der Graph wird beim Ingest über die KI-Extraktion aufgebaut und beim Löschen/Erasing mit­geführt.",
      },
    ],
    related: ["ki-agenten", "posteingang", "integrationen"],
  },

  // --------------------------------------------------------------------------
  // 3. WORKFLOWS — Plain-Language
  // --------------------------------------------------------------------------
  {
    slug: "workflows",
    eyebrow: "Workflows",
    h1: "Prozesse in einem Satz. Nicht auf einem Designer-Canvas.",
    metaTitle: "Plain-Language-Workflows — DMS-Workflow-Software",
    metaDescription:
      "Beschreiben Sie den Ablauf in einem Satz — RecordTailor baut den Workflow. Freigaben, Vier-Augen, Fristen aus validiertem YAML. Kein Low-Code-Designer.",
    lead:
      "Andere DMS liefern Low-Code-Designer, in denen Sie Kacheln auf ein Canvas ziehen und danach zwei Tage Schulung buchen. RecordTailor macht es umgekehrt: Sie schreiben einen Satz, das System generiert daraus ein validiertes Workflow-YAML und übersetzt es in Klartext zurück — Sie sehen sofort, ob es das ist, was Sie gemeint haben, und geben frei. Die Workflow-Engine selbst bleibt deterministisch — approve, review, sign, notify, n-Augen, Fristen, Eskalation. KI baut Workflows, sie führt sie nicht frei aus.",
    glance: [
      "In RecordTailor beschreiben Sie den Prozess in einem Satz — das System erzeugt ein Zod-validiertes Workflow-YAML und übersetzt es zurück in Klartext zur Freigabe.",
      "Die Workflow-Engine kennt Freigabe, Prüfung, Signatur, Benachrichtigung, Vier-Augen-Prinzip, Fristen und Eskalation als atomare Schritte.",
      "Workflow-Definitionen sind Dokumente im RecordTailor-Repository — sie versionieren, branchen und mergen wie jeder andere Vertrag oder Beleg.",
      "Der Prozess bleibt deterministisch: KI entwirft, aber die Ausführung folgt validierten Regeln — das ist das Compliance-Argument für KI-nahe Workflows.",
      "Bei stockenden Schritten meldet der Compliance-Agent Eskalationen und schlägt Vertretungen vor — die Engine ruft dazu den bestehenden `workflow_escalate`-Job.",
    ],
    sections: [
      {
        title: "Ein Satz. Ein Workflow.",
        body: "„Eingehende Rechnungen über 5.000 € gehen an die Fachabteilung zur Prüfung, danach an die Geschäftsführung zur Freigabe, Skonto-Frist minus zwei Tage als Deadline.“ — dieser eine Satz erzeugt in RecordTailor einen validierten Workflow. `/api/workflows/generate` gibt das YAML zurück, das System zeigt Ihnen den Klartext-Rückblick und wartet auf Ihre Freigabe. Kein Designer, kein Consulting-Slot.",
      },
      {
        title: "Deterministischer Kern — auditierbar",
        body: "Die Engine kennt einen abgeschlossenen Satz an Schritt-Typen: `approve`, `review`, `sign`, `notify`, dazu Kontrollstrukturen für Vier-Augen-Prinzip, Fristen und Eskalation. Die Zod-Schemas validieren jede Definition; ungültige Kombinationen sind nicht startbar. Das gibt dem KI-Autor der Definition seinen Rahmen — er kann nichts erfinden, was die Engine nicht kennt.",
      },
      {
        title: "Workflow-Defs branchen wie Dokumente",
        body: "Workflow-Definitionen liegen im Repository und nutzen das Git-Modell. Sie können eine Variante branchen, testen, mergen, zurückrollen — ohne die produktive Version zu stören. Diffs zwischen Versionen zeigen, was sich geändert hat, in derselben Ansicht wie ein Vertrags-Diff.",
      },
      {
        title: "Agenten als Workflow-Teilnehmer",
        body: "Ein Workflow-Schritt kann einem Agenten zugewiesen werden (Beispiel: Rechnungs-Agent extrahiert und prüft 3-Way-Match, danach Mensch genehmigt). Das Agenten-Ergebnis ist eine `agent_action` mit Begründung — der Workflow wartet auf `approved` oder `auto_applied` und geht dann weiter. Alles über die bestehende Job-Queue, keine Sonderpfade.",
      },
      {
        title: "Überwachung durch den Workflow-Copilot",
        body: "Ein Agent überwacht laufende Instanzen: Er erkennt stockende Schritte, schlägt Eskalation und Vertretung vor, und fasst wöchentlich zusammen („3 Freigaben überfällig, Engpass: Müller“). Er nutzt dazu den bestehenden `workflow_escalate`-Job — keine neue Infrastruktur.",
      },
    ],
    faq: [
      {
        q: "Wenn KI den Workflow erzeugt — wer haftet für Fehler?",
        a: "Sie. Die Plain-Language-Generierung schlägt ein YAML vor; erst Ihre Freigabe macht daraus einen produktiven Workflow. Die generierte Definition wird zusätzlich in Klartext zurück­übersetzt — Sie sehen genau, was Sie freigeben. Und weil Workflow-Defs versioniert sind, ist jede Änderung nachvollziehbar.",
      },
      {
        q: "Können Agenten Freigaben ohne Menschen erteilen?",
        a: "Wenn Sie es zulassen — und für welche Aktionstypen. Autonomie ist ein Tenant-Setting pro Aktionstyp: von rein vorschlagend über Zwei-Augen-Freigabe bis zur Dunkelverarbeitung für Routinefälle. Selbst Auto-Apply landet in Hash-Chain und Protokoll.",
      },
      {
        q: "Wir haben komplexe Prozesse mit externen Systemen — funktioniert das noch mit einem Satz?",
        a: "Für Anbindungen an externe Systeme gibt es den MCP-Server: externe Agenten (z. B. ein ERP-Agent Ihres Hauses) können RecordTailor-Workflows anstoßen, RLS und Scopes greifen unverändert. Zusätzlich publiziert die Engine `workflow_event`-Webhooks für Kunden-Automatisierungen.",
      },
      {
        q: "Was ist mit Notifications an Nutzer?",
        a: "In-App-Notifications (Inbox-Karten) sind implementiert. E-Mail- und Push-Benachrichtigungen für Workflow-Fristen und Agenten-Vorschläge sind in Vorbereitung.",
      },
    ],
    related: ["ki-agenten", "posteingang", "compliance"],
  },

  // --------------------------------------------------------------------------
  // 4. POSTEINGANG — Scan, Mail, Stapel, Triage
  // --------------------------------------------------------------------------
  {
    slug: "posteingang",
    eyebrow: "Posteingang",
    h1: "Ein Posteingang. Egal, wie das Dokument ankommt.",
    metaTitle: "Digitaler Posteingang & GoBD-Mail-Archivierung",
    metaDescription:
      "Scan, MFP und IMAP-Mail — RecordTailor triagiert jedes eingehende Dokument. Batch-Split am Barcode oder per KI, .eml GoBD-konform, Deduplikation in Minuten.",
    lead:
      "Ein Beleg kommt per Papier, per Mail oder per MFP-Scan — RecordTailor nimmt ihn an, wo immer er auftaucht, und leitet ihn in denselben Triage-Pfad. Der Scan-Agent überwacht Hot-Folder, splittet Stapel am Barcode-Trennblatt (oder per Layout-Heuristik) und fällt bei schlechter OCR auf ein Fallback zurück. Der Mail-Agent zieht IMAP-Postfächer, archiviert .eml GoBD-konform und legt Anhänge separat ab. Der Rechnungs-Agent bekommt anschließend, was er braucht.",
    glance: [
      "RecordTailor bündelt Scan, Mail und Datei-Upload in einem einzigen Posteingang mit einheitlicher KI-Triage.",
      "Der Scan-Agent überwacht Hot-Folder, splittet Belege am Barcode-Trennblatt (empfohlen für hohe Volumen) oder per KI-Heuristik und nutzt einen OCR-Fallback bei schwachen Vorlagen.",
      "Der Mail-Agent zieht IMAP-Postfächer, archiviert die .eml GoBD-konform und legt Anhänge als eigenständige Dokumente ab.",
      "Duplikate werden über den BLAKE3-Content-Hash erkannt — ein Dokument liegt immer nur einmal auf der Platte, auch wenn es fünfmal reingeschickt wird.",
      "Der Batch-Prozessor klassifiziert hunderte Dokumente parallel, protokolliert Ausreißer und schreibt alles in die Hash-Chain — 500 Belege in wenigen Minuten.",
    ],
    sections: [
      {
        title: "MFP-Scan ohne Fat-Client",
        body: "Der Multifunktionsdrucker scannt nach Scan-to-Folder oder gegen einen HTTPS-Endpunkt — kein TWAIN-Treiber, keine Endgeräte-Software auf Sachbearbeiter-PCs. Ein Endpunkt, ein Ordner, fertig. Die Belegtrennung im Stapel läuft wahlweise deterministisch über Barcode-Trennblätter (empfohlen für hohe Volumen) oder per KI-Heuristik (Layout- und Content-Wechsel).",
      },
      {
        title: "IMAP-Mail-Ingest, GoBD-konform",
        body: "Der Mail-Agent zieht IMAP-Postfächer und legt die vollständige .eml GoBD-konform ab — Header, Body, Anhänge, in der Reihenfolge des Originals. Anhänge werden zusätzlich als eigenständige Dokumente in den Bestand gehoben und dort klassifiziert. Für Microsoft-Graph- und Gmail-Konnektoren liegt das Datenmodell bereit; die Konnektoren selbst sind in Vorbereitung.",
      },
      {
        title: "Stapelverarbeitung in Minuten, nicht in Tagen",
        body: "500 Rechnungen aus dem Monatsabschluss, 50 000 Belege aus einem Archiv-Import? Der Batch-Prozessor klassifiziert parallel auf allen verfügbaren GPU-Cores, prüft Duplikate über Content-Hash (BLAKE3), meldet Ausreißer und protokolliert alles in der Hash-Chain. Kein manuelles Nachziehen.",
      },
      {
        title: "Deduplikation, bevor Speicher wächst",
        body: "RecordTailor speichert Content Content-Adressiert (CAS) — identische Bytes liegen nur einmal auf der Platte, egal wie oft sie ankommen. Duplikate im Posteingang werden erkannt, bevor sie zu Aktenrauschen werden; der Original-Speicherplatz auf MinIO/Ceph/NetApp wächst nur mit echtem Zuwachs.",
      },
      {
        title: "Triage in Echtzeit",
        body: "Jedes eingehende Dokument wird in unter 30 Sekunden klassifiziert, zusammengefasst und mit einem Konfidenz-Score versehen. Unter 80 % — Mensch entscheidet. Darüber — der Inbox-Agent schlägt Ablage und Folge-Workflow vor. Der Sachbearbeiter bekommt eine Karte, keine leere Suchmaske.",
      },
    ],
    faq: [
      {
        q: "Was, wenn ein Stapel keine Barcode-Trennblätter enthält?",
        a: "Dann greift die KI-Heuristik: Layout- und Content-Wechsel zwischen aufeinander­folgenden Seiten deuten auf einen Belegwechsel hin. Für hohe Volumen empfehlen wir trotzdem Barcode-Trennblätter — deterministisch schlägt Heuristik bei Fehlerkosten.",
      },
      {
        q: "Wie werden IMAP-Postfächer authentifiziert?",
        a: "Über tenantweise IMAP-Accounts mit Passwort oder App-Passwort. Für Enterprise-Postfächer (Microsoft Graph, Gmail) liegt das Datenmodell bereit; die konkreten OAuth-Konnektoren sind in Vorbereitung.",
      },
      {
        q: "Was passiert mit Anhängen einer Mail — verschmelzen die mit dem Mail-Text?",
        a: "Nein. Die .eml wird als Original archiviert (GoBD-Beweiswert), zusätzlich wird jeder Anhang als eigenständiges Dokument klassifiziert und in den Bestand gehoben. Die Herkunft (Mail-ID, Anhangs-Position) bleibt als Metadatum erhalten.",
      },
      {
        q: "Kann der Posteingang mit unserem Multifunktionsgerät sprechen?",
        a: "Wenn Ihr MFP „Scan-to-Folder“ oder „Scan-to-HTTPS“ spricht (praktisch jedes Gerät nach 2018), ja. Sie richten den Endpunkt einmal ein und der Scan-Agent nimmt ab dort alles auf.",
      },
    ],
    related: ["ki-agenten", "wissen", "integrationen"],
  },

  // --------------------------------------------------------------------------
  // 5. COMPLIANCE — Audit-Chain, Retention, Legal Hold, GoBD
  // --------------------------------------------------------------------------
  {
    slug: "compliance",
    eyebrow: "Compliance",
    h1: "Jede Änderung sichtbar. Jede Löschung begründet.",
    metaTitle: "GoBD-DMS mit Audit-Chain, Legal Hold & DSGVO-Erase",
    metaDescription:
      "Manipulationssichtbare Audit-Hash-Chain, Policies-as-Code für GoBD/HGB/DSGVO, Legal Hold, DSGVO-Erase, Court-Bundle-Export. Das Beweispaket, das ein Prüfer verlangt.",
    lead:
      "Compliance ist bei RecordTailor kein Modul, das jemand nachträglich aufgesetzt hat — es ist die Architektur. Jede Aktion (Upload, Klassifikation, Freigabe, Signatur, Löschung, Agenten-Aktion) wird als Event kryptografisch in eine Hash-Chain verkettet. Aufbewahrungs- und Löschregeln liegen als Policies-as-Code neben dem Code und sind versioniert. Legal Hold friert Bestände ein. Ein Court-Bundle-Export packt Dokumente, Verlauf und Hash-Manifest in ein Paket, das ein Prüfer eigenständig verifizieren kann.",
    glance: [
      "Jede Aktion in RecordTailor landet in einer manipulationssichtbaren Audit-Hash-Chain — jeder Event enthält den Hash seines Vorgängers.",
      "Aufbewahrungs- und Löschregeln sind Policies-as-Code (GoBD, HGB, DSGVO) — versioniert, im Repository, ohne UI-Klickstrecken.",
      "Legal Hold friert Dokumente und Bestandsgruppen gegen jede Löschung — auch gegen den regelbasierten Retention-Fall.",
      "DSGVO-Art.-17-Pseudonymisierung erasiert personenbezogene Daten aus dem Content, den Extraktionen, dem Cache und den Embeddings — nicht nur aus der Datei.",
      "Der Court-Bundle-Export bündelt Dokumente, Ereignis­historie und Hash-Manifest als selbstverifizierbares Beweispaket.",
    ],
    sections: [
      {
        title: "Audit-Hash-Chain — manipulationssichtbar",
        body: "Jedes Event bekommt einen SHA-256-Hash, der den Hash des Vorgänger-Events enthält. Wer nachträglich einen Eintrag ändert oder löscht, kippt die gesamte Kette — sichtbar per CLI-Verifikation, ohne Vertrauen in unsere Datenbank. Wir nennen das bewusst „manipulationssichtbar“, nicht „manipulations­sicher“: nichts, was in einer Datenbank liegt, ist absolut unveränderbar; aber jede Änderung wird sofort sichtbar.",
      },
      {
        title: "Policies-as-Code für GoBD, HGB, DSGVO",
        body: "Aufbewahrungsfristen und Lösch­regeln liegen als versionierte Policies im Repository — nicht als GUI-Klickstrecke, in der niemand mehr weiß, wer welches Häkchen gesetzt hat. Der Compliance-Agent bewertet Bestände gegen diese Policies und meldet Ausreißer. Retention-Enforcement (nightly Worker, der Löschkandidaten in die Approval-Inbox stellt und nach Zwei-Augen-Freigabe vollzieht) ist in Vorbereitung — heute meldet der Agent, der Vollzug ist manuell.",
      },
      {
        title: "Legal Hold",
        body: "Ein Bestand unter Legal Hold ist gegen jede Löschung eingefroren — auch gegen die regelbasierte Retention. Legal-Hold-Sätze sind selbst versioniert und tragen einen Grund (Prüfung, Prozess, Untersuchung). Wird der Hold aufgehoben, greift die Retention wieder.",
      },
      {
        title: "DSGVO-Art.-17 — bis in Embeddings und Cache",
        body: "Ein „right to be forgotten“-Antrag pseudonymisiert nicht nur die Datei, sondern erasiert die Personendaten aus den KI-Extraktionen, den Vektor-Embeddings und den Antwort-Caches. Sonst könnte der RAG-Chat Wochen später den Namen aus dem Modell reproduzieren, obwohl das Original „gelöscht“ ist. Der Erase-Job dokumentiert, welche Stores berührt wurden.",
      },
      {
        title: "Court-Bundle — das Beweispaket auf Knopfdruck",
        body: "Ein Export bündelt Dokumente, Ereignis­historie und Hash-Manifest zu einem Paket, das ein Prüfer außerhalb Ihres Netzes eigenständig verifiziert. Die Kette Signatur → Zertifikat → CA → Root bleibt nachvollziehbar; für qualifiziert signierte Bestände bleibt die PAdES-B-LTA-Verifizierbarkeit unabhängig von RecordTailor erhalten.",
      },
    ],
    faq: [
      {
        q: "Ist RecordTailor GoBD-zertifiziert?",
        a: "Die Architektur folgt den GoBD-Anforderungen (Unveränderbarkeit sichtbar per Hash-Chain, Nachvollziehbarkeit über Audit-Log, Ordnung über Policies-as-Code). Ein IDW-PS-880-Testat und eine ISO-27001-Zertifizierung sind Roadmap-Themen, aber heute nicht ausgestellt — wir schreiben das offen, um niemanden zu täuschen.",
      },
      {
        q: "Was heißt „revisionssicher“ bei Ihnen?",
        a: "Wir nutzen das Wort nur mit Zusatz: revisionssichere Ablage nach GoBD-Kriterien mit manipulationssichtbarer, kryptografisch verketteter Protokollierung. Ein absolutes Sicherheitsversprechen im Sinne eines Zertifikats geben wir erst, wenn das Testat vorliegt.",
      },
      {
        q: "Wie funktioniert die DSGVO-Erase mit dem Git-Modell?",
        a: "Bei einem Erase wird der personenbezogene Content aus allen Versionen pseudonymisiert — die Ereignis-Historie bleibt (weil sie Hashes speichert, keine Klarnamen), aber der Klarname im Content ist weg. Die Hash-Chain kippt dadurch nicht, weil sie über Event-Hashes verkettet ist, nicht über Content-Hashes.",
      },
      {
        q: "Setzt RecordTailor Retention automatisch durch?",
        a: "Heute meldet der Compliance-Agent Kandidaten, der Vollzug ist manuell (zwei Augen). Ein nightly Enforcement-Worker, der nach Zwei-Augen-Freigabe automatisch löscht und den Legal Hold respektiert, ist in Vorbereitung.",
      },
    ],
    related: ["ki-agenten", "workflows", "integrationen"],
  },

  // --------------------------------------------------------------------------
  // 6. INTEGRATIONEN — SAP ArchiveLink, CMIS, DATEV, MCP, API
  // --------------------------------------------------------------------------
  {
    slug: "integrationen",
    eyebrow: "Integrationen",
    h1: "Anschluss an alles, was Sie schon haben.",
    metaTitle: "SAP ArchiveLink, CMIS 1.1, DATEV, MCP — Integrationen",
    metaDescription:
      "SAP ArchiveLink und CMIS 1.1 nativ, DATEV-CSV für Steuerberater, MCP-Server für KI-Clients (Claude, Copilot). REST-API mit Service-Tokens statt Middleware-Zoo.",
    lead:
      "RecordTailor ist ein DMS, kein Silo. SAP-Systeme können RecordTailor als ArchiveLink-Content-Repository anbinden. CMIS 1.1 gibt jedem Content-Management-Client denselben Zugriff, den er von Alfresco oder SharePoint gewohnt ist. Belege gehen als DATEV-CSV an den Steuerberater. Und der MCP-Server macht RecordTailor zu einem Werkzeug, das jeder KI-Client sprechen kann — von Claude über Copilot bis zum eigenen ERP-Agenten.",
    glance: [
      "RecordTailor spricht SAP ArchiveLink und CMIS 1.1 nativ — bestehende SAP-Anbindungen schwenken durch Endpunkt-Tausch.",
      "Der DATEV-CSV-Export bringt Belege in das Format, das Steuerberater im Kanzlei­system erwarten.",
      "Der eingebaute MCP-Server exponiert fünf Tools, mit denen KI-Clients (Claude, Copilot, eigene Agenten) auf RecordTailor zugreifen — RLS und Scopes greifen unverändert.",
      "Service-Tokens ermöglichen technische Zugriffe (Skripte, Konnektoren) ohne Nutzerkonten mit Feinrechten pro Aktion.",
      "REST-API + Webhook-Publisher (`workflow_event`) sorgen dafür, dass Automatisierungen ohne Code (n8n, Zapier-analog) möglich sind.",
    ],
    sections: [
      {
        title: "SAP ArchiveLink — kompatibler Endpunkt-Tausch",
        body: "RecordTailor spricht ArchiveLink kompatibel zu Alfresco und den etablierten DMS. Im ContRep-Setup Ihres SAP-Systems tauschen Sie den Endpunkt aus — den Rest übernimmt der ArchiveLink-Adapter. Bestehende Anbindungen (Buchhaltung, Instand­haltung, HR-Akten) laufen ohne SAP-seitige Änderungen weiter.",
      },
      {
        title: "CMIS 1.1 nativ — der Standard, der Migrationen möglich macht",
        body: "Alle Content-Objekte, Types, Properties und ACLs sind über das CMIS-Browser-Binding erreichbar. Migrationen von CMIS-fähigen Quellen (Alfresco, OpenText, SharePoint mit CMIS-Adapter) laufen darüber. Umgekehrt bleibt Ihre Portabilität erhalten: Sie können RecordTailor jederzeit über CMIS in eine Nachfolge-Lösung migrieren.",
      },
      {
        title: "DATEV-CSV für den Steuerberater",
        body: "Belege werden als DATEV-CSV exportiert — das Format, das jedes Kanzlei­system versteht. Der 3-Way-Match zwischen Bestellung, Wareneingang und Rechnung liefert Belege für die Buchung. XRechnung- und ZUGFeRD-Parser sowie der DATEVconnect-API-Anschluss sind in Vorbereitung — CSV ist heute die Brücke.",
      },
      {
        title: "MCP-Server — das DMS, mit dem jeder KI-Client reden kann",
        body: "Model Context Protocol ist der aufkommende De-facto-Standard für KI-Tool-Anbindung. Der RecordTailor-MCP-Server exponiert fünf Tools: Dokumente suchen, ablegen, klassifizieren, Workflows starten, Freigaben erteilen. Ein Nutzer kann aus Claude, Copilot oder einem eigenen ERP-Agenten Freigaben erteilen — RLS und Tenant-Scopes greifen unverändert. Externe Agenten können umgekehrt RecordTailor-Workflows anstoßen.",
      },
      {
        title: "REST-API, Service-Tokens und Webhooks",
        body: "Für alles, was nicht CMIS spricht: eine REST-API mit denselben Rechten. Service-Tokens sind technische Zugriffe mit feinen Scopes (nur diese Tenant, nur diese Aktion) — kein Passwort in Skripten, keine geteilten Nutzer­konten. Webhooks (`workflow_event`, Ingest-Events) publizieren Zustandsänderungen nach außen; Kunden-Automatisierungen ohne Code werden damit realistisch.",
      },
    ],
    faq: [
      {
        q: "Wir haben SAP mit ArchiveLink-Anbindung an unser altes DMS. Was ändert sich?",
        a: "Wenig. RecordTailor spricht ArchiveLink kompatibel — im SAP-ContRep-Setup tauschen Sie nur den Endpunkt aus. Die Content-Repository-ID kann übernommen werden, die Buchungslogik in SAP bleibt unberührt.",
      },
      {
        q: "Was heißt „MCP-Server“ konkret — muss unser Betrieb dafür etwas tun?",
        a: "Der MCP-Server ist ein zusätzlicher Endpunkt, der neben der REST-API läuft. Für den Betrieb: nichts weiter aufsetzen, es ist Teil des Standard-Deployments. Für die Nutzung: den MCP-Endpunkt in einem KI-Client (Claude, Copilot, eigener Agent) einhängen, Token holen, Tools stehen zur Verfügung.",
      },
      {
        q: "Wir arbeiten mit einem Steuerberater über DATEV — reicht CSV?",
        a: "Für die Belegübermittlung heute: ja. Der Steuerberater importiert die CSV in DATEV Unternehmen online oder in die Kanzleisoftware. Der DATEVconnect-API-Anschluss (direkter Buchungsstapel-Transfer) ist in Vorbereitung.",
      },
      {
        q: "Können wir eigene Konnektoren gegen die REST-API bauen?",
        a: "Ja. API ist dokumentiert, Service-Tokens haben Scopes, Rate-Limits sind pro Tenant konfigurierbar. Für tiefere Automatisierungen (Trigger auf Zustandsänderungen) publizieren Webhooks — das ist meist einfacher als Polling.",
      },
    ],
    related: ["ki-agenten", "compliance", "wissen"],
  },
];

export function findFeatureBySlug(slug: string): FeaturePage | undefined {
  return PRODUKT_PAGES.find((p) => p.slug === slug);
}
