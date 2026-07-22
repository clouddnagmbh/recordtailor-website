/**
 * Fach-Glossar für recordtailor.com. Jeder Eintrag = eigenes JSON-LD
 * `DefinedTerm` und eine eigene Route unter `/glossar/[slug]`. Länge
 * pro Eintrag 150–300 Wörter — genug für zitierfähige Substanz, kurz
 * genug für schnelle Beantwortung durch Answer Engines.
 */

export type GlossarEntry = {
  slug: string;
  term: string;
  short: string;
  paragraphs: string[];
  seeAlso?: string[];
};

export const GLOSSAR: GlossarEntry[] = [
  {
    slug: "gobd",
    term: "GoBD",
    short:
      "Grundsätze zur ordnungsmäßigen Führung und Aufbewahrung von Büchern, Aufzeichnungen und Unterlagen in elektronischer Form sowie zum Datenzugriff.",
    paragraphs: [
      "Die GoBD sind Verwaltungsanweisungen des deutschen Bundesministeriums der Finanzen und regeln, wie steuerlich relevante Aufzeichnungen und Belege elektronisch geführt und aufbewahrt werden dürfen. Sie sind für Unternehmen, die in Deutschland steuerpflichtig sind, bindend; in Österreich sind vergleichbare Anforderungen in BAO und UGB verankert.",
      "Für ein DMS heißen die GoBD konkret: Belege sind unveränderbar zu speichern (jede Änderung wird sichtbar dokumentiert), die Ordnung ist nach einem nachvollziehbaren System zu wahren, und der Prüfer muss innerhalb angemessener Fristen Zugriff auf die Belege bekommen. RecordTailor setzt das über eine manipulationssichtbare Audit-Hash-Chain, Policies-as-Code für Aufbewahrungsfristen und einen Court-Bundle-Export um.",
      "Ein IDW-PS-880-Testat einer Wirtschaftsprüfungsgesellschaft bescheinigt einem DMS die GoBD-Konformität. RecordTailor ist heute nicht testiert; das Testat ist Teil unserer Roadmap.",
    ],
    seeAlso: ["idw-ps-880", "audit-hash-chain", "aufbewahrungsfrist"],
  },
  {
    slug: "rag",
    term: "RAG (Retrieval-Augmented Generation)",
    short:
      "KI-Architektur, bei der ein Sprachmodell relevante Passagen aus einem eigenen Bestand zieht, bevor es antwortet — jede Aussage lässt sich mit einer Quelle belegen.",
    paragraphs: [
      "RAG kombiniert klassisches Retrieval (Suche) mit generativer KI. Statt das Sprachmodell frei antworten zu lassen, wird zuerst der eigene Dokumentenbestand nach relevanten Passagen durchsucht — die gefundenen Textstellen werden dem Modell als Kontext mitgegeben, das Modell antwortet nur auf dieser Grundlage. Der große Unterschied zum reinen LLM-Chat: Jede Aussage lässt sich zu einer konkreten Fundstelle in einem Dokument zurückverfolgen.",
      "Im DMS ist RAG interessant, weil es die Halluzinations-Rate senkt (das Modell darf nur nachvollziehbar antworten) und die Datenhoheit erhält (das Modell braucht nur die passenden Passagen, nicht den ganzen Bestand). Bei RecordTailor läuft der RAG-Chat gegen lokale Embeddings pro Tenant und ein lokales LLM — kein Cloud-Egress.",
      "Ein Sonderfall ist versionsbewusstes RAG: Der Chat kennt die Historie der Dokumente (Branches, Versionen) und kann Fragen wie „Was hat sich in Klausel 7 zwischen den letzten drei Vertragsständen geändert?“ beantworten — nur möglich, wenn Dokumente ein Git-artiges Modell haben.",
    ],
    seeAlso: ["hybrid-suche", "citations", "embeddings"],
  },
  {
    slug: "eidas",
    term: "eIDAS",
    short:
      "EU-Verordnung 910/2014 zu elektronischen Identifizierungen und Vertrauensdiensten — regelt insbesondere die drei Signaturstufen einfach, fortgeschritten und qualifiziert.",
    paragraphs: [
      "Die eIDAS-Verordnung schafft einen EU-weit einheitlichen Rechtsrahmen für elektronische Identitäten, Signaturen, Siegel und Zeitstempel. Sie unterscheidet drei Signaturstufen mit steigender Beweiskraft: die einfache elektronische Signatur (jedes „ich stimme zu“-Klicken), die fortgeschrittene (an eine Person gebunden, Veränderungen erkennbar) und die qualifizierte elektronische Signatur (QES) — die einzige mit dem Rechtsstatus der handschriftlichen Unterschrift.",
      "Eine QES setzt einen qualifizierten Vertrauensdiensteanbieter (QTSP) voraus, der die Identität des Unterzeichners nach den EU-Vorgaben prüft und das Signatur-Zertifikat ausstellt. In Österreich sind unter anderem A-Trust und D-Trust als QTSPs am Markt.",
      "RecordTailor arbeitet heute mit elektronischen Signaturen und einer manipulationssichtbaren Beweiskette; die QES-Integration mit einem QTSP ist Teil unserer Roadmap. Von Dritten qualifiziert signierte Dokumente (PAdES-B-LTA) bleiben in RecordTailor verifizierbar — das Format ist plattform­neutral.",
    ],
    seeAlso: ["qtsp", "pades", "signatur-beweiswert"],
  },
  {
    slug: "legal-hold",
    term: "Legal Hold",
    short:
      "Aufhebung des regelbasierten Löschens für einen definierten Bestand während einer Prüfung, eines Verfahrens oder einer Untersuchung.",
    paragraphs: [
      "Ein Legal Hold friert Dokumente gegen jede Löschung ein — auch gegen die regelbasierte Retention, die sonst nach Ablauf der Aufbewahrungsfrist Kandidaten zum Löschen vorschlagen würde. Der Hold ist zweckgebunden: eine Prüfung, ein Gerichtsverfahren, eine interne Untersuchung. Solange er läuft, ist die betroffene Menge unantastbar.",
      "In der Praxis reicht es nicht, „Nicht löschen“-Post-its auf Ordner zu kleben. Ein Legal Hold ist selbst dokumentiert (mit Grund, Umfang, Anordnender, Datum) und versioniert. Wird er aufgehoben, greift die Retention wieder — inklusive der eventuell inzwischen abgelaufenen Löschregeln.",
      "In RecordTailor sind Legal Holds Teil der Compliance-Schicht: Der Compliance-Agent kennt sie und schlägt keine Löschung für Dokumente unter Hold vor. Aufhebung eines Holds ist ein eigener Freigabe-Schritt, kein Nebenbei-Klick.",
    ],
    seeAlso: ["retention", "aufbewahrungsfrist", "gobd"],
  },
  {
    slug: "idp",
    term: "IDP (Intelligent Document Processing)",
    short:
      "Sammelbegriff für KI-gestützte Verarbeitung von Dokumenten — Klassifikation, Extraktion, Prüfung, Ablage in einem Fluss.",
    paragraphs: [
      "IDP bezeichnet den Fluss, in dem eingehende Dokumente (PDFs, Scans, E-Mails, XRechnung-XML) automatisch klassifiziert, ihre Attribute extrahiert und gegen Prüfregeln validiert werden, bevor sie in ihre Ablage gehoben werden. Klassisches OCR ist eine Vorstufe; IDP setzt darauf und ergänzt Klassifikation und Extraktion mit KI.",
      "Der Effekt: Wo früher ein Sachbearbeiter pro Beleg fünf Klicks brauchte, macht der Sachbearbeiter zwei, weil das System die Ablage und die Attribute schon vorschlägt. Fehleranfällige Handarbeit wird zu Freigabe-Handarbeit — und die 20 % Grenzfälle, in denen die KI unsicher ist, landen in einer Approval-Inbox.",
      "In RecordTailor sind die IDP-Komponenten Standard: KI-Triage in unter 30 Sekunden, Attribut-Extraktion mit Konfidenz-Score, Vorschlag für Belegart und Workflow. Der Sprung von IDP zu Agentic AI ist der nächste — statt einzelner Extraktionen entscheidet ein Agent über den Weg des Belegs.",
    ],
    seeAlso: ["agentic-ai", "ocr", "klassifikation"],
  },
  {
    slug: "agentic-ai",
    term: "Agentic AI",
    short:
      "KI-Ansatz, bei dem ein Agent ein Ziel verfolgt, Werkzeuge kombiniert und begründete Aktionen liefert — mehr als ein Modellaufruf, weniger als ein autonomer Prozess.",
    paragraphs: [
      "Ein KI-Agent im DMS-Kontext bekommt einen Auftrag (triagieren, prüfen, freigeben-vorbereiten), entscheidet über Zwischenschritte selbst und liefert am Ende eine Aktion mit Begründung ab. Drei Merkmale unterscheiden ihn von einer einfachen KI-Klassifikation: Ziel-Orientierung, Werkzeug-Nutzung (Suche, Klassifikation, API-Aufrufe kombiniert) und Reversibilität — jede Aktion ist prüfbar und rückgängig machbar.",
      "Für die Governance heißt das: Ein Agent handelt nicht autonom, sondern innerhalb einer Approval-Inbox. Unter einer konfigurierbaren Konfidenz landet die Aktion beim Menschen; darüber schlägt der Agent vor oder — mit expliziter Tenant-Allowlist — wendet automatisch an. Jede Aktion trägt Begründung, Konfidenz und Beleg und wird in der Audit-Hash-Chain verkettet.",
      "RecordTailor hat vier Agenten produktiv (Inbox, Compliance, Vertrag, Rechnung). Der Unterschied zu „Roadmap-Agenten“ der Wettbewerber: Ein produktiver Agent hat schon eine gemessene Konfidenz-Verteilung, kennt seine Fehlerfälle und kann in einer Betriebsprüfung im Detail vorgezeigt werden.",
    ],
    seeAlso: ["idp", "audit-hash-chain", "eu-ai-act"],
  },
  {
    slug: "cmis",
    term: "CMIS 1.1",
    short:
      "Content Management Interoperability Services — offener OASIS-Standard für den Zugriff auf Content-Repositories.",
    paragraphs: [
      "CMIS 1.1 definiert eine standardisierte API für den Zugriff auf Dokumenten-Repositories: Objekt-Modell, Types, Properties, ACLs, Versionen. Wer einen CMIS-Client hat (die Content-Management-Welt kennt Dutzende: Alfresco, Nuxeo, OpenText, SharePoint mit Adapter), kann jedes CMIS-fähige Repository ansteuern — ohne proprietäres SDK.",
      "Für ein DMS ist CMIS 1.1 zweifach relevant: Erstens macht es Migrationen von einem CMIS-Anbieter zum nächsten technisch trivial. Zweitens ist es die Rückversicherung des Kunden: „Falls ich Ihr System eines Tages verlassen will, wie komme ich raus?“ — Antwort: CMIS 1.1.",
      "RecordTailor implementiert das CMIS-Browser-Binding vollständig. Das ist auch der Grund, warum Alfresco-Migrationen bei uns über den nativen CMIS-Weg laufen können und nicht über proprietäre Adapter.",
    ],
    seeAlso: ["archivelink", "migration", "vendor-lock-in"],
  },
  {
    slug: "archivelink",
    term: "SAP ArchiveLink",
    short:
      "SAP-Schnittstelle zur Anbindung eines externen Content-Repositories an SAP-Systeme, insbesondere für die Ablage von Buchhaltungsbelegen.",
    paragraphs: [
      "ArchiveLink ist die etablierte SAP-Schnittstelle, mit der Belege aus SAP-Modulen (typisch: FI, MM, HR) in einem externen Content-Repository abgelegt und aus dem SAP heraus wieder aufgerufen werden. Das Repository muss die ArchiveLink-Schnittstelle sprechen; das SAP-System kennt dann eine Content Repository ID und leitet Ablage- und Abruf-Requests dorthin.",
      "In der Praxis ist ArchiveLink oft die einzige Verbindung, die ein etabliertes DMS zum ERP hat. Wechseln Sie das DMS, tauschen Sie im SAP-ContRep-Setup die URL — der Rest des SAP-Systems bleibt unberührt. Das macht ArchiveLink für Migrationen zum stabilen Anker.",
      "RecordTailor spricht ArchiveLink kompatibel zu Alfresco und den etablierten DMS. Der Umstieg ist am Cutover-Wochenende ein Config-Change, keine SAP-Anpassung.",
    ],
    seeAlso: ["cmis", "migration", "sap"],
  },
  {
    slug: "hybrid-suche",
    term: "Hybrid-Suche",
    short:
      "Kombination aus klassischer Volltext-Suche (BM25) und semantischer Vektor-Suche in einer Query — findet, was gemeint ist, auch wenn die Worte nicht passen.",
    paragraphs: [
      "Volltext-Suche findet Dokumente, in denen die eingegebenen Worte vorkommen. Vektor-Suche (semantisch) findet Dokumente, deren Bedeutung zur Frage passt — auch wenn andere Worte verwendet wurden. „Löschpflicht nach 30 Tagen“ und „Erasing binnen eines Monats“ landen im Vektorraum an derselben Stelle.",
      "Beide Sichten haben Schwächen. Volltext ist blind für Umschreibungen. Vektor ist ungenau bei exakten Zahlen, IBANs, Rechnungsnummern. Hybrid-Suche mischt die Rankings beider Indizes — meist über Reciprocal Rank Fusion — und liefert die Ergebnisse, bei denen beide Sichten zustimmen, zuerst.",
      "In RecordTailor läuft jede Suche parallel gegen BM25 und pgvector; die Fusion macht die Rankings vergleichbar. Der Effekt: Der Nutzer tippt, was er meint, und findet, was er meint.",
    ],
    seeAlso: ["rag", "embeddings", "pgvector"],
  },
  {
    slug: "audit-hash-chain",
    term: "Audit-Hash-Chain",
    short:
      "Kryptografisch verkettete Event-Historie — jeder Eintrag enthält den Hash seines Vorgängers, sodass nachträgliche Manipulationen sichtbar werden.",
    paragraphs: [
      "Eine Audit-Hash-Chain ist die kompakte Antwort auf die Frage: „Können Sie beweisen, dass niemand nachträglich an der Historie geschraubt hat?“ Jedes Event (Upload, Klassifikation, Freigabe, Signatur, Löschung, Agenten-Aktion) bekommt einen SHA-256-Hash, der den Hash des Vorgänger-Events einschließt. Wer nachträglich einen Eintrag ändert oder entfernt, kippt die gesamte Kette — sichtbar per CLI-Verifikation.",
      "Wichtig: Das Verfahren macht Änderungen sichtbar, nicht unmöglich. Wir sprechen deshalb bewusst von „manipulationssichtbarer“ Protokollierung, nicht von absoluter Sicherheit. Für einen GoBD-Beweiswert genügt Sichtbarkeit — der Prüfer erkennt jede Änderung und weiß, wo er ansetzen muss.",
      "RecordTailor verifiziert die Kette CLI-basiert: `recordtailorctl audit verify --from ...` bestätigt (oder verweigert) die Integrität einer Zeitreihe.",
    ],
    seeAlso: ["gobd", "revisionssicher", "court-bundle"],
  },
  {
    slug: "revisionssicher",
    term: "Revisionssicher",
    short:
      "Umgangssprachlicher Begriff für DMS-Ablagen, die den GoBD-Anforderungen an Unveränderbarkeit und Nachvollziehbarkeit genügen — kein rechtlicher Terminus.",
    paragraphs: [
      "„Revisionssicher“ ist ein Marketing-Begriff, der in DMS-Ausschreibungen häufig auftaucht, im Gesetzestext aber so nicht vorkommt. Gemeint ist typischerweise die Konformität mit den GoBD (Deutschland) oder vergleichbaren Vorgaben (Österreich: BAO, UGB): Unveränderbarkeit, Nachvollziehbarkeit, Ordnungsgemäßheit, Verfügbarkeit.",
      "In der seriösen Sprache heißt das: revisionssichere Ablage nach GoBD-Kriterien mit manipulationssichtbarer, kryptografisch verketteter Protokollierung. Ein absolutes Sicherheitsversprechen im Sinne eines Zertifikats geben wir nicht ohne belastbaren Beweis — dafür braucht es ein IDW-PS-880-Testat einer Wirtschaftsprüfungsgesellschaft.",
      "RecordTailor arbeitet architektonisch nach den GoBD-Kriterien; das Testat ist Roadmap. Wir schreiben das offen, um weder uns noch Sie zu täuschen.",
    ],
    seeAlso: ["gobd", "idw-ps-880", "audit-hash-chain"],
  },
  {
    slug: "idw-ps-880",
    term: "IDW PS 880",
    short:
      "Prüfungsstandard des Instituts der Wirtschaftsprüfer für die Prüfung von Softwareprodukten — Testate bescheinigen typisch die GoBD-Konformität eines DMS.",
    paragraphs: [
      "Der IDW PS 880 legt fest, wie Wirtschaftsprüfungsgesellschaften ein Softwareprodukt darauf prüfen, ob es die GoBD-Anforderungen erfüllt. Das Ergebnis ist ein IDW-PS-880-Testat, das einem DMS die Konformität bescheinigt. Für viele Beschaffungsprozesse — insbesondere im öffentlichen Sektor und in regulierten Branchen — ist ein solches Testat de facto Kaufvoraussetzung.",
      "Für RecordTailor ist ein Testat Teil unserer Roadmap. Wir schreiben das offen: Heute sind wir architektonisch GoBD-konform, aber ohne Testat. Wer das Testat als K.-o.-Kriterium hat, muss noch warten. Wer die Compliance-Architektur, die produktiven KI-Agenten und die Datenhoheit als entscheidende Kriterien sieht, kann heute einsteigen — mit dem Testat kommt später der Zertifikats-Anker.",
    ],
    seeAlso: ["gobd", "iso-27001", "revisionssicher"],
  },
  {
    slug: "eu-ai-act",
    term: "EU AI Act",
    short:
      "EU-Verordnung über künstliche Intelligenz (VO 2024/1689) — klassifiziert KI-Systeme in Risikostufen und definiert Pflichten für Anbieter und Anwender.",
    paragraphs: [
      "Der EU AI Act ist seit August 2024 in Kraft und tritt in mehreren Stufen bis 2027 in Anwendung. Er klassifiziert KI-Systeme in vier Risikostufen (verboten, hochriskant, transparenzpflichtig, minimal) und definiert entsprechend abgestufte Pflichten: Transparenz, Dokumentation, Human Oversight, Log-Pflichten. Für DMS-KI (Klassifikation, Extraktion, Chat, Agenten) greifen in aller Regel die Transparenz- und Governance-Pflichten.",
      "In der Praxis heißt das: Nutzer müssen erkennen, wenn KI im Spiel ist; jede KI-Entscheidung muss dokumentiert und für einen definierten Zeitraum aufbewahrt werden; ein Mensch muss die Entscheidung prüfen und übersteuern können. Wer ein KI-System betreibt, ohne diese Fähigkeiten nachweisen zu können, riskiert bei einer Prüfung Nachforderungen — nicht sofort Sanktionen, aber unangenehme Diskussionen.",
      "RecordTailor exportiert das Agent-Protokoll als EU-AI-Act-taugliche PDF: Zeitstempel, Modell, Prompt, Konfidenz, Begründung, Evidence — verkettet in der Audit-Hash-Chain und außerhalb des Systems verifizierbar.",
    ],
    seeAlso: ["agentic-ai", "audit-hash-chain", "dsgvo"],
  },
  {
    slug: "dsgvo",
    term: "DSGVO",
    short:
      "Datenschutz-Grundverordnung (VO 2016/679) — regelt den Schutz personenbezogener Daten in der EU, inklusive Recht auf Löschung (Art. 17).",
    paragraphs: [
      "Die DSGVO gilt seit 2018 EU-weit einheitlich und formuliert die Rechte natürlicher Personen an ihren personenbezogenen Daten. Für ein DMS relevant sind vor allem Art. 6 (Rechtsgrundlagen der Verarbeitung), Art. 17 (Recht auf Löschung) und Art. 32 (Sicherheit der Verarbeitung — Verschlüsselung, Zugangskontrolle, Verfügbarkeit).",
      "Ein Sonderfall ist Art. 17 in Verbindung mit KI: Ein Erase-Antrag pseudonymisiert nicht nur die Datei, sondern muss auch die KI-Extraktionen, die Vektor-Embeddings und die Antwort-Caches erasieren — sonst könnte der RAG-Chat Wochen später den Namen aus dem Modell reproduzieren, obwohl das Original „gelöscht“ ist. RecordTailor führt den Erase-Job über alle Stores.",
      "Zusammen mit dem EU AI Act macht die DSGVO die Datenhoheit zu einem Kernthema von DMS-KI: Wer die Prompts sieht, wer die Modelle betreibt, wo die Embeddings liegen. Lokale LLMs on-premises sind die strukturelle Antwort.",
    ],
    seeAlso: ["gdpr-erase", "eu-ai-act", "row-level-security"],
  },
  {
    slug: "row-level-security",
    term: "Row-Level Security",
    short:
      "Postgres-Feature, das Zeilen-basierte Zugriffs­kontrolle auf DB-Ebene erzwingt — Tenant-Isolation, die nicht nur im UI, sondern in der Datenbank greift.",
    paragraphs: [
      "Row-Level Security (RLS) ist ein Postgres-Feature, mit dem der Datenbank-Server für jede Anfrage prüft, welche Zeilen der aktuelle Nutzer/Tenant sehen darf. Fehler in der Anwendungs­schicht (vergessener Tenant-Filter, kaputtes UI) können damit nicht mehr zu einem Cross-Tenant-Leck werden, weil der Filter in der Datenbank selbst sitzt.",
      "Für ein Multi-Tenant-DMS ist RLS die belastbare Antwort auf die Frage: „Wenn ich mir Zugriff auf Ihre Datenbank verschaffe — welche Daten anderer Tenants kann ich sehen?“ Antwort: keine, wenn ich nicht auch die Rolle des jeweiligen Tenants annehme.",
      "In RecordTailor ist RLS für alle sensiblen Tabellen aktiv. Auch wir als Betreiber sehen ohne einen autorisierten Tenant-Kontext nichts. Kombiniert mit AES-256-GCM at rest und lokalen LLMs ergibt sich die Datenhoheits-Zusicherung, die on-prem-fähige DMS erfordert.",
    ],
    seeAlso: ["multi-tenancy", "acl", "dsgvo"],
  },
  {
    slug: "mcp",
    term: "MCP (Model Context Protocol)",
    short:
      "Offener Standard für die Anbindung von KI-Clients an externe Werkzeuge — der aufkommende De-facto-Standard für Tool-Aufrufe aus LLM-Anwendungen.",
    paragraphs: [
      "MCP definiert, wie ein KI-Client (z. B. Claude, Copilot oder ein eigener Agent) Werkzeuge in externen Systemen aufrufen kann. Der Server exponiert Tools (Funktionen mit Signatur und Beschreibung); der Client wählt aus, welches Tool er nutzen will, und übergibt die Ergebnisse als Kontext an sein Modell. Für den Anwender heißt das: Er kann aus seinem KI-Chat heraus Aktionen in einem angebundenen Enterprise-System auslösen.",
      "Für DMS ist MCP der Weg, auf dem 2026 externe KI-Agenten mit dem eigenen Bestand arbeiten können — ohne dass jemand eigene Konnektoren baut. Der DMS-MCP-Server exponiert etwa fünf Tools: suchen, ablegen, klassifizieren, Workflow starten, Freigabe erteilen. RLS und Scopes greifen unverändert.",
      "RecordTailor liefert einen MCP-Server mit dem Standard-Deployment aus. Der Nutzer hängt ihn in einen KI-Client ein, holt ein Service-Token und kann seinen Chat oder Agenten mit dem DMS reden lassen.",
    ],
    seeAlso: ["agentic-ai", "service-token", "cmis"],
  },
  {
    slug: "content-addressable-storage",
    term: "Content-Addressable Storage (CAS)",
    short:
      "Speicher-Muster, bei dem der Inhaltshash die Adresse des Dokuments ist — identische Bytes liegen nur einmal auf der Platte, egal wie oft sie ankommen.",
    paragraphs: [
      "In einem klassischen Dateisystem hat jedes Dokument einen Pfad, der willkürlich ist. In Content-Addressable Storage ist die Adresse ein Hash über den Inhalt selbst (in RecordTailor: BLAKE3). Identische Bytes ergeben denselben Hash und teilen sich damit denselben Speicherplatz — ein Beleg, der fünfmal reinkommt, wird einmal gespeichert.",
      "Der Effekt: Deduplikation ist eingebaut, nicht nachgeschaltet. Wachsende Bestände wachsen nur mit echtem Zuwachs an Inhalten, nicht mit dem Rauschen doppelt gescannter oder doppelt gemailter Belege. Für Archive mit langen Aufbewahrungs­fristen und stark redundanten Belegströmen (Rechnungen, Verträge, Standard-Korrespondenz) ist der Speicher­platz-Gewinn erheblich.",
      "Zusätzlich sorgt CAS für Manipulationssichtbarkeit auf Byte-Ebene: Ändert sich ein Byte, ändert sich der Hash und damit die Adresse — das alte Original bleibt erhalten. Zusammen mit der Audit-Hash-Chain ergibt sich eine doppelte Absicherung: Content und Ereignisse.",
    ],
    seeAlso: ["audit-hash-chain", "dedup", "blake3"],
  },
  {
    slug: "iso-27001",
    term: "ISO/IEC 27001",
    short:
      "Internationaler Standard für Informations­sicherheits-Management­systeme (ISMS) — Zertifikat für Organisationen, die Sicherheit systematisch managen.",
    paragraphs: [
      "ISO 27001 zertifiziert nicht ein einzelnes Softwareprodukt, sondern die Art und Weise, wie eine Organisation Informationssicherheit managt: Risiko-Analyse, Kontroll-Auswahl, Umsetzung, Prüfung, kontinuierliche Verbesserung. Für Kunden im regulierten Umfeld — Banken, Versicherungen, öffentliche Verwaltung — ist eine ISO-27001-Zertifizierung des DMS-Anbieters häufig ein K.-o.-Kriterium.",
      "Der Weg zur Zertifizierung ist mehrstufig und dauert Monate bis Jahre: Vorbereitung, internes Audit, Zertifizierungs-Audit einer akkreditierten Prüf­stelle, jährliche Überwachungs-Audits. Der Prozess ist teuer, aber die Signalwirkung im Vertrieb ist erheblich.",
      "CloudDNA hat den ISO-27001-Prozess auf der Roadmap. Wir schreiben nicht „in Zertifizierung“, bevor wir das Audit beauftragt haben — das ist die Grenze zwischen einer offenen Aussage und einer irreführenden.",
    ],
    seeAlso: ["idw-ps-880", "compliance", "gobd"],
  },
  {
    slug: "on-premise",
    term: "On-Premise",
    short:
      "Deployment-Modell, bei dem eine Software im eigenen Rechenzentrum des Kunden läuft — keine Cloud, keine externen Endpunkte für die Daten.",
    paragraphs: [
      "On-Premise heißt: Sie betreiben die Software im eigenen Rechenzentrum, mit Ihren Servern, Ihrer Netz-Segmentierung, Ihrer Sicherung. Der Anbieter liefert Images, Charts, Dokumentation. Wenn die Software im Standby-Modus laufen soll (air-gapped), muss das Deployment ohne Internet-Zugang funktionieren.",
      "Für ein DMS ist On-Premise die strukturelle Antwort auf drei Themen: Datenhoheit (Ihre Belege verlassen Ihr Netz nicht), Regulatorik (Behörden, Banken, Genossenschaften mit strenger DSGVO-Vorgabe) und Vertrauens­grenzen (Sie müssen dem Anbieter nicht vertrauen, weil Sie ihn nicht in Ihren Datenpfad lassen).",
      "RecordTailor läuft im Standard als Docker-Compose-Deployment auf einem einzelnen Host oder als Helm-Chart auf Kubernetes. Air-gapped ist möglich, Updates kommen als signierte Tarballs mit Attestation-Check.",
    ],
    seeAlso: ["air-gap", "docker", "kubernetes"],
  },
  {
    slug: "sovereign-ai",
    term: "Souveräne KI",
    short:
      "KI-Betrieb, bei dem Modelle, Prompts und Ergebnisse den eigenen Zuständigkeits­bereich nicht verlassen — lokal ausgeführt, ohne Cloud-KI-API im Datenpfad.",
    paragraphs: [
      "Souveräne KI ist die Antwort auf ein strukturelles Problem: Cloud-KI-APIs (OpenAI, Google, Microsoft Copilot) verarbeiten Ihre Prompts und Dokumente außerhalb Ihres Zuständigkeits­bereichs. Für DSGVO-sensible Bestände, Behörden-Betrieb oder klassische regulierte Industrien ist das oft ein Ausschluss­kriterium — nicht wegen böser Absicht des Anbieters, sondern wegen der grundsätzlichen Kontrollfrage.",
      "Souveräne KI löst das durch lokale Modelle: Ein LLM (etwa über Ollama betrieben) läuft im eigenen Rechenzentrum, die Prompts, Embeddings und Antworten verlassen das Netz nicht. Der Aufwand: eine GPU im Serverraum, ein Modell-Update-Zyklus, das Modell muss zur Sprache passen (Deutsch + Fachvokabular).",
      "RecordTailor läuft im Default gegen ein lokales Ollama-Modell; pro Tenant lässt sich der Modell-Provider konfigurieren. Für die meisten Compliance-Kunden ist genau das der Grund, sich für uns zu entscheiden.",
    ],
    seeAlso: ["on-premise", "dsgvo", "eu-ai-act"],
  },
];

export function findGlossarEntry(slug: string): GlossarEntry | undefined {
  return GLOSSAR.find((g) => g.slug === slug);
}
