/**
 * Migrations-Ziele — jede Entity ist ein Legacy-DMS, das wir ablösen.
 * Slug + Kanon-Namen + kurzer Pitch + Pain-Points + Migration-Phasen.
 * Wird auf /migration und /migration/[slug] gerendert.
 */

export type LegacyDms = {
  slug: string;
  vendor: string;
  displayName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  painPoints: string[];
  answers: { title: string; body: string }[];
  migrationPhases: { title: string; body: string }[];
  faq: { q: string; a: string }[];
};

export const LEGACY_DMS: LegacyDms[] = [
  {
    slug: "alfresco",
    vendor: "Hyland",
    displayName: "Alfresco",
    metaTitle: "Alfresco ablösen — RecordTailor als moderner Nachfolger",
    metaDescription:
      "So migrieren Sie Ihr Alfresco-DMS auf RecordTailor: CMIS-1.1-Adapter, Metadaten-Übernahme, ACL-Import. Ohne Datenverlust, in 4–8 Wochen. KI-Klassifikation ab Tag eins.",
    h1: "Alfresco ablösen. Mit einem DMS, das lesen kann.",
    lead:
      "Alfresco hat den Enterprise-Content-Management-Markt zehn Jahre lang geprägt. 2026 gilt das Produkt vielen Kunden als schwer wartbar, langsam in der Suche und teuer im Support. RecordTailor bietet einen Migrationspfad, der die Kern-Assets — Content, Metadaten, Versionen, ACLs — vollständig übernimmt und ab Tag eins ein KI-natives DMS liefert.",
    painPoints: [
      "Java-Stack mit hoher Wartungsschwelle und veralteten Abhängigkeiten",
      "Suche funktioniert für Content, aber nicht für Bedeutung (kein Vektor-Semantik)",
      "Metadaten müssen händisch gepflegt werden — keine KI-Extraktion",
      "Community-Edition-Feature-Gap zur Enterprise-Version wird stetig größer",
      "Alfresco Content Services (ACS) Roadmap unsicher nach Hyland-Übernahme",
    ],
    answers: [
      {
        title: "CMIS-1.1-Adapter für nahtlosen Import",
        body: "RecordTailor spricht CMIS 1.1 nativ — dieselbe API, die Alfresco bereitstellt. Der Migrations-Adapter zieht Nodes, Type-Definitions, Aspects und Metadaten in einem Rutsch übers CMIS-Browser-Binding rüber. Ihr bestehendes SAP-ArchiveLink-Setup bleibt bestehen und schwenkt an einem Wochenende auf den neuen Endpunkt.",
      },
      {
        title: "ACL-Mapping ohne Datenverlust",
        body: "Alfresco-Site-Groups, -Permissions und -Aspects werden auf RecordTailor-RLS-Policies gemappt. Wir liefern eine 1:1-Übersetzungstabelle und ein CLI-Tool, das jede Alfresco-ACL prüft, bevor migriert wird. Kein „das haben wir vergessen"-Moment nach dem Cutover.",
      },
      {
        title: "KI ab Tag eins",
        body: "Sobald Ihre Alfresco-Bestände in RecordTailor liegen, lernt der KI-Assistent aus Ihrem existierenden Metadatenschema — die vielen Custom-Aspects, die Sie in Alfresco händisch gepflegt haben, werden zu Vorschlägen. Er extrahiert Attribute automatisch, klassifiziert Neuablagen, deckt Duplikate auf.",
      },
    ],
    migrationPhases: [
      {
        title: "Woche 1–2 · Discovery",
        body: "Wir schauen uns Ihr Alfresco-Schema, Ihre Aspects, Ihre Custom-Types an. Volumen, ACL-Struktur, ArchiveLink-Anbindungen. Ergebnis: konkreter Migrations-Plan, keine Überraschungen.",
      },
      {
        title: "Woche 3–5 · Dry-Run in Ihrer Umgebung",
        body: "Wir migrieren eine Stichprobe in eine parallele RecordTailor-Instanz. Sie prüfen Sichtbarkeit, ACLs, Suche, KI-Klassifikation. Nachjustieren, wo nötig.",
      },
      {
        title: "Woche 6–8 · Cutover",
        body: "Der eigentliche Umzug läuft an einem Wochenende. Alfresco geht in Read-Only, RecordTailor übernimmt den Live-Verkehr. SAP-ArchiveLink schwenkt auf den neuen Endpunkt. Alfresco bleibt 30 Tage als Fallback stehen.",
      },
    ],
    faq: [
      {
        q: "Was passiert mit unseren Custom-Aspects und Types?",
        a: "Sie werden auf RecordTailor-Belegarten und -Attribute übersetzt. Custom-Metadaten bleiben Custom, mit derselben Semantik. Der KI-Assistent lernt aus dem existierenden Schema und ergänzt es, wo Sie in Alfresco Lücken hatten.",
      },
      {
        q: "Wir haben eine Alfresco-Community-Edition. Geht das trotzdem?",
        a: "Ja. CMIS 1.1 gibt es in Community und Enterprise. Für Community-Edition-spezifische Zusatzmodule (Records Management, DMS-Extensions) klären wir im Discovery.",
      },
      {
        q: "Muss unser SAP-System umkonfiguriert werden?",
        a: "Nein. RecordTailor spricht SAP ArchiveLink kompatibel zu Alfresco. Sie tauschen im ContRep-Setup nur den Endpunkt aus.",
      },
    ],
  },
  {
    slug: "d-velop",
    vendor: "d.velop AG",
    displayName: "d.velop documents",
    metaTitle: "d.velop ablösen — Migration zu RecordTailor",
    metaDescription:
      "d.velop documents auf RecordTailor migrieren: Metadaten-Übernahme, Signatur-Historie, SAP-ArchiveLink-Kompatibilität. Modern, On-Premise oder Managed Private Cloud.",
    h1: "d.velop documents ablösen. Ohne Consulting-Marathon.",
    lead:
      "d.velop documents ist ein solides Enterprise-DMS mit starker DACH-Präsenz. Was viele Kunden stört: die Cloud-Zwänge der jüngeren Produktlinie, der Preis pro User und die Abhängigkeit von d.3-Kernkomponenten, die in eigenen Windows-Prozessen laufen. RecordTailor bietet einen Ausweg — auf Wunsch komplett On-Premise, mit KI-Kern und offenen Schnittstellen.",
    painPoints: [
      "Windows-Terminal-Server-Setup mit Fat-Client-Komponenten (d.3one, d.3 smart connect)",
      "Cloud-only für neuere Features — kein reines On-Premise mehr für alles",
      "Pro-User- und Pro-Modul-Lizenzierung, die mit dem Team wächst",
      "Klassifikation weiterhin regelbasiert, keine echte KI-Extraktion",
      "Bindung an d.velop-Ökosystem (d.3 SAP-Connector, d.velop sign)",
    ],
    answers: [
      {
        title: "Fat-Client raus. Browser rein.",
        body: "RecordTailor läuft zu 100 % im Browser. Kein d.3one-Client, kein Windows-Terminal-Server, kein Roll-out-Termin pro Update. Ihre Sachbearbeiter sehen den Wechsel an einer besseren Suche und einer schnelleren Ablage.",
      },
      {
        title: "SAP-ArchiveLink-Migration ohne Ausfall",
        body: "Wir übernehmen die ArchiveLink-Konfiguration aus d.3, mappen die ContReps und schwenken an einem Wochenende. SAP merkt nichts vom Wechsel — der Archiv-Endpunkt bleibt, das Backend darunter ist neu.",
      },
      {
        title: "Ein Preis, alle Module",
        body: "Statt d.3-Basis + d.velop sign + d.velop analytics + d.velop connect: RecordTailor kommt mit Signaturen (eIDAS-QES, PAdES-B-LTA), Analytics, KI, ArchiveLink und CMIS in einem Paket. Ein Preis pro Standort.",
      },
    ],
    migrationPhases: [
      {
        title: "Woche 1 · Bestandsaufnahme",
        body: "d.3-Repository-Struktur, Ordnerklassen, Belegarten, Signaturen-Historie. Wir dokumentieren jede aktive Objekt-Definition.",
      },
      {
        title: "Woche 2–4 · Parallelbetrieb",
        body: "RecordTailor läuft neben d.velop. Neue Belege gehen in beide Systeme. Sie prüfen 30 Tage, ob Suche, Klassifikation und Freigaben in RecordTailor Ihre Erwartungen erfüllen.",
      },
      {
        title: "Woche 5–8 · Bulk-Migration + Cutover",
        body: "Historische Bestände laufen als Stapelverarbeitung nach RecordTailor. Signatur-Historie bleibt kryptographisch prüfbar. d.velop geht in Read-Only.",
      },
    ],
    faq: [
      {
        q: "Was passiert mit unseren d.velop-sign-Signaturen?",
        a: "Wir übernehmen die Signatur-Historie 1:1. eIDAS-qualifizierte Signaturen bleiben nach PAdES-B-LTA valide. Neue Signaturen laufen in RecordTailor über einen QTSP Ihrer Wahl.",
      },
      {
        q: "Können wir während der Migration noch d.velop nutzen?",
        a: "Ja. Bis zum Cutover läuft d.velop weiter im Live-Betrieb, RecordTailor parallel. Nach Cutover wird d.velop 30 Tage im Read-Only-Modus als Fallback gehalten.",
      },
      {
        q: "Wie sieht das für unsere SAP-Anwender aus?",
        a: "Für den SAP-Sachbearbeiter ändert sich nichts. Die ArchiveLink-Anbindung bleibt, nur der Endpunkt zeigt jetzt auf RecordTailor.",
      },
    ],
  },
  {
    slug: "elo",
    vendor: "ELO Digital Office",
    displayName: "ELO",
    metaTitle: "ELO ablösen — RecordTailor als moderner ECM-Nachfolger",
    metaDescription:
      "ELO ECM Suite oder ELOoffice ablösen: KI-native Alternative mit CMIS-Adapter, SAP-ArchiveLink-Kompatibilität und On-Premise-Deployment. Migration in 4–8 Wochen.",
    h1: "ELO ablösen. Mit KI, die Ihre Ablage-Regeln versteht.",
    lead:
      "ELO ist ein etablierter DACH-Player mit tiefer SAP-Integration. Was viele Kunden 2026 überdenken: die Windows-lastige Client-Architektur, der ELOoffice-Suite-Preis und die schwerfällige Regel-Verwaltung. RecordTailor übersetzt Ihre ELO-Ablage-Logik in KI-Klassifikations-Regeln — was Sie in Jahren aufgebaut haben, bleibt erhalten, nur ohne Fat-Client.",
    painPoints: [
      "ELO Java Client / Windows Client mit hohem Setup-Aufwand pro Arbeitsplatz",
      "Regelbasierte Verschlagwortung ist schnell komplex und schwer wartbar",
      "Volltextsuche gut, semantische Suche fehlt",
      "ELO Analytics separates Modul, hohe Zusatzkosten",
      "Cloud-Migration langsam und mit vielen Sonderfällen",
    ],
    answers: [
      {
        title: "Regeln bleiben, KI übernimmt die Feinjustierung",
        body: "Ihre ELO-Verschlagwortungs-Regeln werden importiert und dienen als Trainings-Basis für den KI-Klassifikator. Wo eine Regel unsicher ist, entscheidet die KI mit Konfidenz-Score — der Sachbearbeiter bestätigt nur bei < 80 %.",
      },
      {
        title: "Ein Browser statt drei Clients",
        body: "ELO Web Client, ELO Java Client, ELO Windows Client — bei RecordTailor gibt es einen: Ihren Browser. Keine Endgeräte-Software, kein Roll-out beim nächsten Client-Update.",
      },
      {
        title: "ArchiveLink & CMIS aus einem Guss",
        body: "SAP-Anbindung, CMIS 1.1, Volltextsuche, Vektor-Suche, Signaturen, Analytics — alles im Paket. Kein Modul-Baukasten.",
      },
    ],
    migrationPhases: [
      {
        title: "Woche 1–2 · Schema-Import",
        body: "ELO-Ordnerhierarchie, Verschlagwortungs-Masken und Objekt-Typen werden extrahiert und in RecordTailor als Belegarten und Attribute abgebildet.",
      },
      {
        title: "Woche 3–5 · Content-Import via CMIS oder ELOwf",
        body: "Content-Migration parallel zum Live-Betrieb. Große Bestände laufen als Stapelverarbeitung über Nacht.",
      },
      {
        title: "Woche 6–8 · Cutover mit SAP-Umschaltung",
        body: "SAP schwenkt auf den neuen ArchiveLink-Endpunkt. ELO bleibt 30 Tage als Fallback.",
      },
    ],
    faq: [
      {
        q: "Können wir unsere ELO-Verschlagwortungs-Masken übernehmen?",
        a: "Ja. Die Masken werden 1:1 als RecordTailor-Belegarten mit Attributen abgebildet. Der KI-Assistent lernt aus den bisher gepflegten Werten und wird schneller besser als eine reine Regel-Basis.",
      },
      {
        q: "Wie migrieren wir ELO-Barcodes / Trennblätter?",
        a: "RecordTailor unterstützt Barcode-Trennblätter im Scan-Ingest nativ. Bestehende Barcode-Kataloge werden übernommen.",
      },
      {
        q: "Was ist mit ELO-Workflows?",
        a: "Bestehende Workflow-Definitionen werden nach RecordTailor-Workflow migriert. Beim Discovery klären wir, welche Custom-Aktivitäten portiert werden müssen.",
      },
    ],
  },
  {
    slug: "docuware",
    vendor: "DocuWare",
    displayName: "DocuWare",
    metaTitle: "DocuWare ablösen — RecordTailor als On-Premise-Alternative",
    metaDescription:
      "DocuWare-Cloud oder On-Premise ablösen: RecordTailor bietet KI-Klassifikation, Stapelverarbeitung und Datenhoheit in Ihrem eigenen Rechenzentrum. Migration in 4–8 Wochen.",
    h1: "DocuWare ablösen. Ohne dass Ihre Daten das Land verlassen.",
    lead:
      "DocuWare ist im Mittelstand stark vertreten, hat aber mit dem Sprung in die Cloud viele On-Premise-Kunden alleine gelassen. Wenn Sie DocuWare 6.x oder 7.x noch On-Premise fahren und wissen, dass der Support-Horizont endlich ist, ist RecordTailor der modernere Nachfolger — mit Datenhoheit als Grundprinzip.",
    painPoints: [
      "DocuWare Cloud zwingt in ein Multi-Tenant-Setup (nicht für alle Compliance-Regime tragbar)",
      "On-Premise-DocuWare-Versionen laufen aus, Migrationspfad meist nur in Cloud",
      "Klassifikation via Intelligent Indexing ist eine Blackbox — kein lokales Modell",
      "Preis skaliert mit Dokumentenvolumen (Intelligent Indexing) und mit User-Zahl",
      "Windows-lastige Client-Historie",
    ],
    answers: [
      {
        title: "Datenhoheit als Grundprinzip",
        body: "RecordTailor läuft On-Premise, in Ihrer Public Cloud oder als Managed Private Cloud in einer EU-Region Ihrer Wahl. Nichts geht in ein Multi-Tenant-Setup. Ihre Rechnungen kommen nie neben denen Ihres Wettbewerbers.",
      },
      {
        title: "KI, die Sie prüfen können",
        body: "Statt Intelligent-Indexing-Blackbox: ein lokal laufendes Modell, dessen Klassifikations-Entscheidungen mit Konfidenz-Score und Begründung ausgeliefert werden. Nachvollziehbarkeit für Audits.",
      },
      {
        title: "Volumen-freie Preisstruktur",
        body: "Wir zählen keine Dokumente und keine User im eigenen Netz. Ein Preis für Ihren Standort — auf Anfrage.",
      },
    ],
    migrationPhases: [
      {
        title: "Woche 1–2 · DocuWare-Export",
        body: "Wir extrahieren DocuWare-Archive und Belegarten mit dem DocuWare-Export-Toolkit. Metadaten bleiben strukturiert erhalten.",
      },
      {
        title: "Woche 3–5 · Import und Klassifikations-Reset",
        body: "Der KI-Assistent lernt aus den DocuWare-Ordnungsstrukturen und schlägt ein bereinigtes Schema vor. Ausgemistet werden veraltete Ordner, die niemand mehr benutzt hat.",
      },
      {
        title: "Woche 6–8 · Cutover",
        body: "DocuWare geht in Read-Only, RecordTailor übernimmt. Neue Scans landen ab Cutover-Datum direkt in RecordTailor.",
      },
    ],
    faq: [
      {
        q: "Können wir DocuWare Cloud auslassen und direkt zu RecordTailor?",
        a: "Ja. Wenn Sie DocuWare on-prem 7.x oder älter haben, geht der Weg direkt von dort zu RecordTailor. Kein Zwischenstopp in DocuWare-Cloud nötig.",
      },
      {
        q: "Was wird aus DocuWare-Intelligent-Indexing-Regeln?",
        a: "Die Regeln werden analysiert und in RecordTailor-KI-Trainingsdaten umgewandelt. Was bei DocuWare an Verhalten gelernt wurde, bleibt erhalten — nur transparenter.",
      },
      {
        q: "Haben Sie Erfahrung mit DocuWare-Workflows?",
        a: "Ja. Der Discovery-Schritt inventarisiert Ihre Workflow-Definitionen. Portierung erfolgt auf RecordTailor-Workflow-Engine.",
      },
    ],
  },
  {
    slug: "opentext",
    vendor: "OpenText",
    displayName: "OpenText Documentum / Extended ECM",
    metaTitle: "OpenText Documentum ablösen — RecordTailor als moderner Nachfolger",
    metaDescription:
      "OpenText Documentum oder Extended ECM ablösen: KI-nativer Nachfolger mit CMIS-Adapter, ACL-Migration, SAP-ArchiveLink-Kompatibilität. Weg vom Vendor-Lock-in.",
    h1: "OpenText Documentum ablösen. Zurück zum Vernünftigen.",
    lead:
      "OpenText Documentum und Extended ECM sind mächtige Systeme mit einer beeindruckenden Legacy. Sie sind auch teuer, langsam in der Modernisierung und mit einer Lernkurve, die Neu-Sachbearbeiter Wochen kostet. RecordTailor bietet den Weg aus dem Vendor-Lock-in — mit voller CMIS-Kompatibilität und einer Migration, die realistisch geplant werden kann.",
    painPoints: [
      "Hohe Lizenz- und Wartungskosten, insbesondere für xCP und BPS",
      "Komplexe Client-Landschaft (D2, Webtop, xCP-Runtime)",
      "Modernisierung von Custom-Applikationen bindet Ressourcen über Jahre",
      "SAP-Extended-ECM (SAP-OT-Bundle) mit unklarer Roadmap",
      "Datenhoheit teilweise nur in OpenText-Cloud, nicht immer On-Premise",
    ],
    answers: [
      {
        title: "CMIS-Migration ohne Applikations-Rewrite",
        body: "Solange Ihre Anwendungen CMIS 1.1 sprechen (was Documentum-Applikationen typischerweise tun), können sie auf RecordTailor umgestellt werden, ohne den App-Code anzufassen. Nur der Endpunkt ändert sich.",
      },
      {
        title: "SAP-Extended-ECM-Ersatz",
        body: "Wir übernehmen die ArchiveLink-Bindung und geben Ihnen eine klare Migrations-Story für die xECM-Business-Objekte. Kein Rätselraten über die OpenText-SAP-Roadmap.",
      },
      {
        title: "Vom D2-Client zum Browser",
        body: "RecordTailor braucht keinen D2, keinen Webtop, keinen xCP-Client. Die Anwender arbeiten im Browser, mit einer Suche, die tatsächlich schnell ist.",
      },
    ],
    migrationPhases: [
      {
        title: "Woche 1–3 · Discovery und Priorisierung",
        body: "OpenText-Ökosysteme sind selten klein. Wir identifizieren die kritischen 20 %, die 80 % der Arbeitslast tragen, und beginnen dort.",
      },
      {
        title: "Woche 4–8 · Pilot in einem Fachbereich",
        body: "Ein Fachbereich wechselt komplett zu RecordTailor. Rest bleibt auf OpenText. Erfahrungen fließen in den weiteren Rollout.",
      },
      {
        title: "Woche 9+ · Sukzessiver Ausrollen",
        body: "Nach dem Pilot folgt der Fachbereich-für-Fachbereich-Migrationsplan. Realistisch: 6–12 Monate für ein größeres OpenText-Setup.",
      },
    ],
    faq: [
      {
        q: "Wir haben Custom-Applikationen auf xCP. Was passiert damit?",
        a: "xCP-Prozesse müssen neu gebaut werden — sie sind nicht CMIS-kompatibel. Wir portieren typischerweise auf RecordTailor-Workflow. Aufwand hängt von der Prozess-Komplexität ab und ist Teil des Discovery.",
      },
      {
        q: "Können wir schrittweise migrieren?",
        a: "Ja. Anders als bei kleineren DMS lohnt sich bei OpenText fast immer der Fachbereich-für-Fachbereich-Ansatz statt Big-Bang.",
      },
      {
        q: "Wie sieht es mit unseren OpenText-Lifecycle-Regeln aus?",
        a: "Retention Policies werden 1:1 nach RecordTailor migriert. GDPR-Erase ist integriert.",
      },
    ],
  },
  {
    slug: "sharepoint",
    vendor: "Microsoft",
    displayName: "SharePoint",
    metaTitle: "SharePoint als DMS ablösen — RecordTailor als moderner Nachfolger",
    metaDescription:
      "SharePoint on-prem oder Microsoft 365 als DMS ablösen: bessere Suche, echte Klassifikation, EU-Datenhoheit, ArchiveLink-fähig. Migration in 4–8 Wochen.",
    h1: "SharePoint ablösen — wenn Ihr DMS Ihr DMS sein soll.",
    lead:
      "SharePoint ist ein exzellentes Kollaborations-Tool. Als DMS eingesetzt gerät es an Grenzen: Suche findet nicht, was sie finden sollte, ArchiveLink fehlt, Retention Policies sind schwer prüfbar. Wenn Sie SharePoint zwangsläufig als Ihr DMS betreiben und darüber nicht glücklich sind — RecordTailor ist die Alternative, die den DMS-Job ernst nimmt, ohne dass Sie SharePoint für Kollaboration aufgeben müssen.",
    painPoints: [
      "SharePoint-Search skaliert schlecht mit steigender Dokumenten-Zahl",
      "Kein ArchiveLink, kein CMIS 1.1 nativ — SAP-Anbindung nur über Umwege",
      "Retention Policies existieren, sind aber schwer auditierbar",
      "Metadaten werden in Bibliotheken händisch gepflegt — keine KI",
      "Datenhoheit: SharePoint Online = Microsoft-Datacenter außerhalb Ihrer Kontrolle",
    ],
    answers: [
      {
        title: "SharePoint bleibt, RecordTailor übernimmt das DMS",
        body: "SharePoint kann weiter für Kollaboration und Team-Sites laufen. Alles, was DMS-Verhalten braucht — Retention, Klassifikation, ArchiveLink, Signaturen — wandert nach RecordTailor. Die zwei Systeme koexistieren.",
      },
      {
        title: "SAP-ArchiveLink dazu",
        body: "SharePoint kann kein ArchiveLink. RecordTailor kann. Wenn Ihre SAP-Belege bisher irgendwo in einer SharePoint-Library liegen, bekommen sie mit RecordTailor endlich ihren ordentlichen Archivplatz.",
      },
      {
        title: "Suche, die tatsächlich findet",
        body: "Hybrid-Suche: Volltext plus Vektor-Semantik. „Zeig mir alle Verträge mit DSGVO-Löschpflicht nach 30 Tagen" liefert auch die Dokumente, wo genau das mit anderen Worten drinsteht.",
      },
    ],
    migrationPhases: [
      {
        title: "Woche 1–2 · Bestandsaufnahme",
        body: "Welche SharePoint-Bibliotheken haben DMS-Charakter, welche sind reine Kollaboration? Wir trennen, was getrennt gehört.",
      },
      {
        title: "Woche 3–5 · Selektive Migration",
        body: "DMS-Bestände wandern via SharePoint-REST-API nach RecordTailor. Bibliotheken für Kollaboration bleiben, wo sie sind.",
      },
      {
        title: "Woche 6–8 · Integration",
        body: "Wir richten Verlinkungen ein, damit Nutzer aus SharePoint auf RecordTailor-Dokumente verweisen können. Suche in RecordTailor wird zur Haupt-Suchmaschine für alles Dokument-artige.",
      },
    ],
    faq: [
      {
        q: "Können wir SharePoint parallel weiter nutzen?",
        a: "Absolut. Für Kollaboration ist SharePoint stark. Für DMS-Aufgaben ist RecordTailor besser. Wir empfehlen die Koexistenz.",
      },
      {
        q: "Was wird aus unseren Compliance-Labels in Microsoft Purview?",
        a: "Purview-Labels werden nach RecordTailor als Klassifikations-Metadaten übernommen. Retention Policies migrieren wir 1:1.",
      },
      {
        q: "Wir haben Power-Automate-Workflows auf SharePoint. Was tun?",
        a: "Workflows, die DMS-Verhalten steuern, portieren wir auf RecordTailor-Workflow. Kollaborations-Workflows bleiben in Power Automate.",
      },
    ],
  },
];
