/**
 * DE/EN-Dictionary für die RecordTailor-Marketing-Site.
 * DE ist Quelle; EN spiegelt die wichtigsten Headlines und CTAs.
 */

export type Locale = "de" | "en";

export const LOCALES: Locale[] = ["de", "en"];
export const DEFAULT_LOCALE: Locale = "de";

type Dict = Record<string, string>;

const de: Dict = {
  // --- Meta ---
  "meta.description":
    "RecordTailor — Dokumente nach Maß. KI-natives Dokumentenmanagement, ausschließlich On-Premise. Every record measures. Aus Österreich.",

  // --- Nav ---
  "nav.produkt": "Produkt",
  "nav.migration": "Migration",
  "nav.onprem": "On-Premise",
  "nav.sicherheit": "Sicherheit",
  "nav.preise": "Preise",
  "nav.blog": "Blog",
  "nav.story": "Story",
  "nav.cta_primary": "Kontakt",

  // --- Hero ---
  "hero.eyebrow": "Every record measures.",
  "hero.headline": "Das modernste DMS am Markt.",
  "hero.sub":
    "RecordTailor ist das Dokumentenmanagement-System für Unternehmen, die ein bestehendes DMS ablösen — Alfresco, ELO, DocuWare, d.velop, OpenText, SharePoint — oder erstmals ein modernes DMS einführen wollen. KI-Triage in unter 30 Sekunden, KI-Assistent baut Ihr Belegarten-Schema in vier Stunden, Stapelverarbeitung für tausende Belege, MFP-Scan-Ingest ohne Fat-Client. Ausgeliefert als On-Premise-Produkt, in Ihrer Public Cloud oder als Managed Private Cloud. Kein Vendor-Lock-in.",
  "hero.moment.time": "14:03:00",
  "hero.moment.event": "Rechnung „Rechnung_2026_0741.pdf\" fällt in den Scan-Ordner.",
  "hero.moment.time2": "14:03:22",
  "hero.moment.event2":
    "Klassifiziert als Eingangsrechnung. Beträge, IBAN, Vertragsbezug erkannt. In Debitorenakte 4711 abgelegt.",
  "hero.moment.time3": "14:03:24",
  "hero.moment.event3":
    "Sachbearbeiter bekommt Task „Freigabe Rechnung 0741\" — 4 Sekunden.",
  "hero.cta.primary": "Live-Demo anfragen",
  "hero.cta.secondary": "Zur Feature-Übersicht",
  "hero.proof": "Made in Austria · CloudDNA GmbH · Auslieferung On-Premise",

  // --- Trustbar ---
  "trust.1": "On-Prem · Public · Private Cloud",
  "trust.2": "EU-Datenhoheit",
  "trust.3": "SAP ArchiveLink & CMIS 1.1",
  "trust.4": "Stapelverarbeitung en masse",
  "trust.5": "No training required",
  "trust.6": "Open-Source-Kern",

  // --- UX manifesto (former golden line) ---
  "line.eyebrow": "UX & Innovation rule",
  "line.title": "Nicht aus 1998. Nicht aus dem Beratungshaus.",
  "line.body":
    "Andere DMS starten mit einem vierzigtägigen Setup, in dem Berater Ihre Belegarten definieren, Ihre Attribute pflegen, Ihre Formulare bauen. Bei uns baut die KI Ihr Schema — aus Ihrem eigenen Dokumenten-Bestand. Werfen Sie 50 Rechnungen und 20 Verträge in einen Ordner: RecordTailor liest, klassifiziert und schlägt Ihnen ein komplettes Attribut-Modell vor. Vier Stunden. Nicht vier Monate. Und das UI dahinter kommt nicht aus 1998 — es ist keyboard-first, dark-mode-fluent, mobile-ready. Wer eine Suchmaschine bedienen kann, bedient RecordTailor.",
  "line.pill.1.t": "KI-Assistent für Belegarten",
  "line.pill.1.b":
    "Aus 50 Dokumenten das Schema. Aus 500 das perfekte. Sie korrigieren nur, was der Assistent nicht sicher weiß — den Rest schlägt er vor. Jede neue Belegart lernt er beim ersten Freigabe-Klick weiter.",
  "line.pill.2.t": "No training required.",
  "line.pill.2.b":
    "Wir schicken Ihnen keinen zweitägigen Schulungs-Sprint. Kein Handbuch, kein Onboarding-Wizard mit fünfzehn Klicks. Sie loggen sich ein, ziehen ein Dokument in den Browser, sehen was passiert. Fertig.",
  "line.pill.3.t": "UX aus 2026, nicht aus Windows 95.",
  "line.pill.3.b":
    "Keine Rechtsklick-Kaskaden. Keine ausklappbaren Baum-Views mit fünfzehn Ebenen. Keine grauen Toolbar-Buttons, die 2003 zum letzten Mal in Mode waren. Keyboard-first, dark-mode, mobile-ready — Standards, die man sich anderswo per Consulting kaufen muss.",

  // --- Feature grid ---
  "feat.title": "Zwölf Fähigkeiten, die andere als „Add-On\" verkaufen.",
  "feat.sub":
    "Nicht zusammengeklickt. Zusammen konzipiert. Jede Fähigkeit greift in die nächste — von den vier ausgelieferten KI-Agenten bis zur MFP-Scan-Aufnahme ohne Fat-Client.",

  "feat.1.title": "KI-Triage in Echtzeit",
  "feat.1.body":
    "Jedes hochgeladene Dokument wird in unter 30 Sekunden klassifiziert, zusammengefasst und mit einem Konfidenz-Score versehen. Unter 80 % — Mensch entscheidet. Darüber — automatischer Vorschlag.",

  "feat.2.title": "Branches wie in Git",
  "feat.2.body":
    "Ändern Sie einen Vertrag in einem Branch. Lassen Sie ihn parallel prüfen. Mergen Sie, wenn Konsens da ist. Volle Audit-Spur pro Version — bis hin zur Zeile.",

  "feat.3.title": "Hybrid-Suche",
  "feat.3.body":
    "Volltext plus semantische Vektorsuche in einer Query. „Zeig mir alle Verträge, wo wir uns zur DSGVO-Löschung nach 30 Tagen verpflichten\" findet auch das Dokument, das genau das nur mit anderen Worten sagt.",

  "feat.4.title": "Knowledge Graph",
  "feat.4.body":
    "Personen, Unternehmen, Verträge, Fristen. Alles auf einem Wissensgraphen. Ein Klick vom Vertrag zum Ansprechpartner zum letzten Angebot — ohne dass jemand Metadaten pflegen muss.",

  "feat.5.title": "SAP ArchiveLink & CMIS",
  "feat.5.body":
    "RecordTailor spricht ArchiveLink und CMIS 1.1 nativ. SAP kann uns als Archiv anbinden. Alfresco-Migrationen laufen ohne Datenverlust. Kein Middleware-Zoo.",

  "feat.6.title": "KI-Assistent baut Ihr Schema",
  "feat.6.body":
    "Beim Setup wirft der Assistent einen Blick auf Ihre Bestandsdokumente — 50 Rechnungen, 20 Verträge, 30 Mails — und schlägt Ihnen ein komplettes Belegarten- und Attribut-Modell vor. Sie korrigieren, wo es nicht passt. Vier Stunden statt vierzig Tage.",

  "feat.7.title": "Scan-Ingest ohne Fat-Client",
  "feat.7.body":
    "MFP direkt in RecordTailor scannen — per Scan-to-Folder oder HTTPS-Endpunkt. Kein TWAIN-Treiber, keine Endgeräte-Software auf Sachbearbeiter-PCs. Belegtrennung im Stapel wahlweise per Barcode-Trennblatt (deterministisch, empfohlen für hohe Volumen) oder per KI-Heuristik (Layout- und Content-Wechsel). Ein Endpunkt, ein Ordner, fertig.",

  "feat.8.title": "Stapelverarbeitung en masse",
  "feat.8.body":
    "500 Rechnungen aus dem Monatsabschluss? 50 000 Belege aus einem Archiv-Import? Der Batch-Prozessor klassifiziert parallel auf allen verfügbaren GPU-Cores, prüft Duplikate über Content-Hash, meldet Ausreißer, protokolliert alles in der Hash-Chain. Kein manuelles Nachziehen.",

  "feat.9.title": "KI-Agenten, die arbeiten",
  "feat.9.body":
    "Vier Agenten laufen heute produktiv: Inbox, Compliance, Vertrag, Rechnung. Jede Aktion mit Begründung, Konfidenz und Freigabe-Gate — nicht auf einer Roadmap.",

  "feat.10.title": "Chat mit Belegen",
  "feat.10.body":
    "RAG-Chat gegen den eigenen Bestand. Jede Antwort verlinkt auf die Textstelle im Original — kein LLM-Halluzinieren ohne Fundstelle.",

  "feat.11.title": "Workflows in einem Satz",
  "feat.11.body":
    "Beschreiben Sie den Ablauf in einem Satz — RecordTailor erzeugt daraus ein validiertes Workflow-YAML und übersetzt es Klartext zurück. Kein Low-Code-Designer.",

  "feat.12.title": "Mail-Ingest, GoBD-konform",
  "feat.12.body":
    "IMAP-Postfächer werden gezogen, .eml-Original beweiswertig abgelegt, Anhänge als eigene Dokumente in die Triage gehoben. Ein Posteingang für alles.",

  // --- Agents section (homepage S3c) ---
  "agents.eyebrow": "Die KI arbeitet. Sie entscheiden.",
  "agents.title": "Vier Agenten. Vier Jobs. Ein Freigabe-Gate.",
  "agents.body":
    "Der Inbox-Agent triagiert, was reinkommt. Der Compliance-Agent prüft Bestände gegen Aufbewahrungsregeln. Der Vertrags-Agent findet Klauseln und Abweichungen vom Muster. Der Rechnungs-Agent liest Beträge, IBAN, Steuersätze und Vertragsbezug. Jede Aktion mit Begründung und Konfidenz — unter dem Schwellwert wandert sie in Ihre Approval-Inbox, darüber schlägt der Agent vor oder wendet automatisch an. Alles verkettet in der Audit-Hash-Chain, exportierbar als EU-AI-Act-Protokoll.",
  "agents.card.eyebrow": "Approval-Inbox · Rechnungs-Agent",
  "agents.card.doc": "Rechnung 2026-0741 · Lieferant Kellner GmbH",
  "agents.card.line1": "Betrag 8.420,00 € · Skonto 2 % bis 04.08.2026",
  "agents.card.line2": "Bestellung PO-4711 gefunden · 3-Way-Match: ✓ Menge, ✓ Preis, ✓ IBAN",
  "agents.card.line3": "Ablage: Kreditorenakte 4711 · Workflow: Zwei-Augen-Freigabe (Skonto-Deadline)",
  "agents.card.confidence": "Konfidenz 94 % · Modell llama3-70b-local · Evidence: 3 Passagen",
  "agents.card.approve": "Freigeben",
  "agents.card.reject": "Ablehnen",
  "agents.cta": "Mehr zu den KI-Agenten",

  // --- On-Premise section ---
  "prem.eyebrow": "Warum reine On-Premise",
  "prem.title": "Ihre Dokumente bleiben, wo sie hingehören.",
  "prem.body":
    "Wir haben lange überlegt, ob wir eine Cloud-Variante anbieten. Wir tun es nicht — und das ist Absicht. Wenn Ihr DMS die Sicherheitskopie Ihres Unternehmens ist, gehört es nicht in fremde Rechenzentren.",
  "prem.p1.title": "Kein Datenabfluss.",
  "prem.p1.body":
    "Keine LLM-Anfrage verlässt Ihr Netz. Wir liefern die Modelle mit — lokal, quantisiert, GPU-optional.",
  "prem.p2.title": "Air-Gapped-fähig.",
  "prem.p2.body":
    "Installation ohne Internet-Zugang. Updates als signiertes Tarball. Attestation-Check verifiziert die Herkunft.",
  "prem.p3.title": "Docker Compose oder Kubernetes — Sie wählen.",
  "prem.p3.body":
    "Standard-Deployment ist Docker Compose: ein Kommando, ein Docker-Host, fertig. Für HA-Setups und größere Skalierung liefern wir ein Helm-Chart mit. Kein 40-Container-Zusammenschraub-Marathon, egal welcher Weg.",

  // --- Compare ---
  "cmp.eyebrow": "Kein Vergleich mit Legacy-DMS",
  "cmp.title": "Warum nicht das, was alle nutzen?",
  "cmp.legacy.title": "Klassische DMS (die grossen Drei)",
  "cmp.legacy.1": "Cloud-only oder komplexes SaaS-Deployment mit Datenabfluss",
  "cmp.legacy.2": "Windows-95-UI mit Rechtsklick-Kaskaden. Zweitägige Anwenderschulung.",
  "cmp.legacy.3": "40-Tage-Setup-Consulting, um Belegarten und Attribute zu definieren",
  "cmp.legacy.4": "KI ist ein kostenpflichtiges Add-On, das externe LLMs anzapft",
  "cmp.legacy.5": "Versionen sind lineare Kopien — kein Branching, kein Merge",
  "cmp.legacy.6": "Lizenzmodell nach User, Modul, Storage, Support",
  "cmp.rt.title": "RecordTailor",
  "cmp.rt.1": "Docker Compose als Standard, Kubernetes/Helm optional, air-gapped-fähig",
  "cmp.rt.2": "UX aus 2026. Keyboard-first, mobile-ready. No training required.",
  "cmp.rt.3": "KI-Assistent baut Ihr Schema in vier Stunden aus Ihrem Bestand",
  "cmp.rt.4": "KI ist der Kern, nicht das Add-On. Lokale LLMs mitgeliefert",
  "cmp.rt.5": "Branches, Merge, Diff — echte Versionierung wie in Git",
  "cmp.rt.6": "Ein Preis, verhandelt für Ihr Rechenzentrum",

  // --- Sicherheit ---
  "sec.eyebrow": "Sicherheit",
  "sec.title": "Prüfbar bis auf die Log-Zeile.",
  "sec.body":
    "Jede Aktion — Upload, Klassifikation, Freigabe, Signatur, Löschung — landet in einer Hash-Chain. Wer wann was mit welchem Dokument tat, ist kryptographisch nicht mehr umschreibbar. Elektronische Signaturen mit manipulationssichtbarer Beweiskette; qualifizierte Signatur (eIDAS QES) über Vertrauensdiensteanbieter in Vorbereitung. GDPR-Erase inklusive.",
  "sec.item1": "Postgres-RLS pro Tenant — auch wir sehen Ihre Daten nicht",
  "sec.item2": "Hash-Chain über alle Audit-Events, überprüfbar per CLI",
  "sec.item3": "Elektronische Signaturen mit manipulationssichtbarer Beweiskette; qualifizierte Signatur (eIDAS QES) über Vertrauensdiensteanbieter in Vorbereitung",
  "sec.item4": "Sigstore-Attestation für alle Container-Images",
  "sec.item5": "Confidential Compute (AMD SEV-SNP) optional",
  "sec.item6": "GDPR-Erase über alle Speicher, inkl. Embeddings und Cache",

  // --- Preise ---
  "price.eyebrow": "Preise",
  "price.title": "Ein Preis. Verhandelt für Ihr Haus.",
  "price.body":
    "Wir verkaufen kein pro-User-pro-Modul-Baukasten-Chaos. Ein DMS, ein Preis, für Ihren Standort. Was Sie zahlen, hängt von Volumen und Support-Level ab — nicht davon, wie viele Kolleg:innen es benutzen.",
  "price.included.title": "Immer enthalten",
  "price.included.1": "Alle Module — KI, Branching, Graph, Suche, Signaturen, ArchiveLink, CMIS",
  "price.included.2": "Unbegrenzte User im eigenen Netz",
  "price.included.3": "Lokale KI-Modelle mit Lizenz für kommerzielle Nutzung",
  "price.included.4": "Air-Gapped-Installation, Docker Compose oder Helm-Chart, Attestation-Check",
  "price.included.5": "Update-Kanal (signiert) für 24 Monate",
  "price.cta.body":
    "Setzen Sie sich mit uns zusammen. Wir schauen uns Ihre Belegvolumina an, machen Ihnen ein Angebot fürs Grundpaket plus SLA, und dann wissen Sie, was Sie haben. Keine Fangfragen zur Firmengröße.",
  "price.cta.button": "Preis anfragen",

  // --- FAQ ---
  "faq.title": "Was wir uns immer wieder anhören müssen.",
  "faq.q1": "Sie haben keine Cloud? Wirklich keine?",
  "faq.a1":
    "Keine. Das ist unser Ding. Wenn Sie eine Cloud-DMS-Lösung suchen, gibt es genug gute — wir sind es nicht.",
  "faq.q2": "Was passiert, wenn CloudDNA morgen weg ist?",
  "faq.a2":
    "Der Kern von RecordTailor ist Open Source (Apache-2.0). Postgres, MinIO, Ihre Daten — alles bleibt bei Ihnen und läuft weiter. Ihre Migration in eine Nachfolge-Lösung ist über Standardschnittstellen (CMIS) durchführbar.",
  "faq.q3": "Wie bekommt man ein DMS aus 2007 in RecordTailor migriert?",
  "faq.a3":
    "Wir haben Migrations-Adapter für Alfresco, d.velop, ELO, DocuWare und OpenText. Content, Metadaten, Versionen, ACLs — in einem Rutsch. Erwarten Sie 4–8 Wochen für ein mittleres Legacy-System.",
  "faq.q4": "Wie viel GPU brauchen wir wirklich?",
  "faq.a4":
    "Für 500 Dokumente pro Tag reicht eine RTX 4090 pro Standort. Für 50 000 Dokumente pro Tag: eine H100. Für 500 000 pro Tag: sprechen wir uns.",
  "faq.q5": "Können wir das erst evaluieren?",
  "faq.a5":
    "Ja. Wir stellen einen Docker-Compose-Stack mit Testdaten. 30 Minuten Aufsetzen, 4 Wochen zum Rumprobieren, dann entscheiden Sie.",

  // --- Story ---
  "story.eyebrow": "Warum wir das bauen",
  "story.title": "Wir wollten ein DMS, das wir selber nutzen würden.",
  "story.body":
    "Als Engineering-Studio arbeiten wir seit Jahren mit den grossen DMS-Systemen unserer Kunden. Wir haben SharePoint-Migrationen, Alfresco-Rescues, OpenText-Umzüge begleitet. Am Ende jedes Projekts der gleiche Gedanke: „Warum ist das so schwer? Warum muss ein Sachbearbeiter fünf Klicks machen, um eine Rechnung abzulegen?\" RecordTailor ist die Antwort. Keine Verhandlung mit Legacy-Zwängen. Ein DMS, gebaut wie ein Produkt-Team der 2020er ein DMS bauen würde.",
  "story.p1.title": "Aus dem Burgenland, für die EU.",
  "story.p1.body":
    "CloudDNA ist eine burgenländische Software-Manufaktur. Wir bauen Produkte, die dort laufen sollen, wo Sie sitzen — nicht auf einem Ozeankabel und nicht auf einem anderen Kontinent.",
  "story.p2.title": "Open Core.",
  "story.p2.body":
    "Der Kern ist Apache-2.0. Sie können den Code lesen, forken, prüfen. Was wir verkaufen, ist Enterprise-Support und die kommerzielle Distribution.",
  "story.p3.title": "Ein Produkt-Team, das mithört.",
  "story.p3.body":
    "Sie reden mit den Menschen, die das Produkt bauen — nicht mit einem CSM, der drei Ebenen entfernt sitzt.",

  // --- Kontakt ---
  "contact.title": "Reden wir.",
  "contact.body":
    "30 Minuten. Sie zeigen uns Ihren aktuellen DMS-Schmerz, wir zeigen Ihnen RecordTailor. Ehrlich: wenn wir nicht passen, sagen wir es.",
  "contact.mail": "hello@recordtailor.com",
  "contact.phone": "+43 664 1964199",
  "contact.address": "CloudDNA GmbH · Loipersdorf",

  // --- Misc chrome ---
  "moment.eyebrow": "Ein Nachmittag im Rechnungswesen",
  "featgrid.eyebrow": "Was drin steckt",
  "screens.eyebrow": "Wie es sich anfühlt",
  "screens.title": "Drei Momente in der Anwendung.",

  // --- Emblem / Made to Measure Slab ---
  "emblem.top": "Made to measure",
  "emblem.bottom": "Built for workflows",
  "emblem.headline": "„Made to measure\" ist bei uns kein Marketing-Wort.",
  "emblem.body":
    "Jedes RecordTailor-Deployment wird auf Ihre Belegarten, Ihre Prozesse, Ihren Vertragskatalog zugeschnitten. Kein Konfigurations-Assistent, der aus einer Standard-Liste kreuzt. Ein Setup-Sprint, in dem wir mit Ihrem Team messen: welche Dokumente, welche Kanten, welche Fristen. Was rauskommt, passt so genau auf Ihr Haus wie ein maßgeschneidertes Sakko — und ist genauso wenig austauschbar.",
  "emblem.measure.1.n": "48 h",
  "emblem.measure.1.l": "Sprint mit Ihrem Team",
  "emblem.measure.2.n": "14",
  "emblem.measure.2.l": "typische Belegarten",
  "emblem.measure.3.n": "97 %",
  "emblem.measure.3.l": "Klassifikations-Konfidenz nach Sprint",
  "nocloud.pill1": "Keine Cloud-Variante.",
  "nocloud.pill2": "Und das bleibt so.",

  // --- CTA ---
  "cta.eyebrow": "Verbindlich werden",
  "cta.title": "Every record measures.",
  "cta.body": "Sehen Sie in 20 Minuten, warum das kein Marketing-Spruch ist.",
  "cta.button": "Demo anfragen",
  "price.label.price": "Preis",
  "price.label.onrequest": "Auf Anfrage",
  "price.label.base": "Grundpaket + SLA",
  "price.label.monthly": "Pro Monat",
  "price.track.onprem.label": "Als Produkt",
  "price.track.onprem.title": "Selbst betreiben.",
  "price.track.onprem.body":
    "Sie kaufen die Lizenz, wir übergeben Ihnen Ihr eigenes System. Läuft in Ihrem Rechenzentrum, auf Docker Compose oder Kubernetes, hinter Ihrer Firewall.",
  "price.track.managed.label": "Als Managed Service",
  "price.track.managed.title": "Von uns betreiben lassen.",
  "price.track.managed.body":
    "Dedizierte Instanz für Ihr Unternehmen — keine Multi-Tenant-Cloud. Wir betreiben Ihr Setup in einer EU-Region Ihrer Wahl, wahlweise auf Docker Compose oder Kubernetes. Sie behalten Datenhoheit, wir übernehmen Betrieb, Patches, Backups und 24/7-Bereitschaft.",
  "price.managed.included.1": "Dedizierte Instanz in EU-Rechenzentrum (Wien, Frankfurt, Zürich)",
  "price.managed.included.2": "24/7-Monitoring und On-Call-Team",
  "price.managed.included.3": "Sicherheits-Patches innerhalb von 24 h",
  "price.managed.included.4": "Verschlüsselte Backups mit BYOK (Ihr Master-Key)",
  "price.managed.included.5": "SLA 99,9 % — auf Wunsch 99,99 %",

  // --- Produkt Subpage ---
  "produkt.meta.desc":
    "Sechs Fähigkeiten, die andere als Add-On verkaufen: KI-Triage, Branches, Hybrid-Suche, Knowledge Graph, ArchiveLink/CMIS, Scan-Ingest.",
  "produkt.cta.title": "Sehen Sie es an einem Ihrer Dokumente.",
  "produkt.cta.body":
    "30 Minuten. Sie schicken ein anonymisiertes Beispiel — wir zeigen live, was RecordTailor damit macht.",
  "produkt.cta.button": "Demo anfragen",

  // --- On-Premise Subpage ---
  "onprem.meta.desc":
    "RecordTailor wird ausschließlich On-Premise ausgeliefert. Kein Cloud-Angebot. Kein SaaS. Ihre Dokumente bleiben in Ihrem Rechenzentrum.",
  "onprem.req.title": "Was Sie tatsächlich brauchen.",
  "onprem.req.1.title": "Ein Docker-Host — oder ein Kubernetes-Cluster.",
  "onprem.req.1.body":
    "Für kleinere Standorte reicht ein Docker-Host mit Docker Compose — ein Kommando, ein System, fertig. Wer mehr Skalierung braucht: K3s, RKE2, OpenShift, EKS-on-prem — egal. Wir liefern das Helm-Chart mit, das überall läuft.",
  "onprem.req.2.title": "Postgres 16 mit pgvector.",
  "onprem.req.2.body":
    "Von uns oder Ihrem eigenen. HA-Setup mit Patroni ist im Chart drin, wenn gewünscht.",
  "onprem.req.3.title": "Objekt-Storage.",
  "onprem.req.3.body":
    "MinIO, Ceph, NetApp StorageGRID — S3-kompatibel reicht. Content-Addressable Storage sorgt dafür, dass duplizierte Dokumente nur einmal auf Platte landen.",
  "onprem.req.4.title": "GPU — optional, aber empfohlen.",
  "onprem.req.4.body":
    "Für lokale LLM-Inferenz. Eine RTX 4090 reicht für einen Standort mit ~500 Dokumenten pro Tag. Ohne GPU läuft alles bis auf die schnellste Klassifikation.",
  "onprem.cta.title": "Wir setzen es mit Ihrem Team auf.",
  "onprem.cta.body":
    "Zwei Tage. Ein Migration-Engineer von uns, jemand aus Ihrem Ops-Team. Am dritten Tag läuft RecordTailor bei Ihnen im Rechenzentrum.",
  "onprem.cta.button": "Installations-Slot anfragen",

  // --- Sicherheit Subpage ---
  "sec.meta.desc":
    "Postgres-RLS pro Tenant, Hash-Chain-Audit, elektronische Signaturen (eIDAS QES in Vorbereitung), Sigstore-Attestation, Confidential Compute optional. RecordTailor ist prüfbar bis auf die Log-Zeile.",
  "sec.audit.title": "Ein Audit-Log, der sich nicht umschreiben lässt.",
  "sec.audit.body":
    "Jedes Event bekommt einen SHA-256-Hash, der den Hash des Vorgängers enthält. Manipuliert jemand einen Eintrag, kippt die gesamte Kette. Verifiziert wird per CLI — Sie können jederzeit selbst prüfen, dass Ihre Historie unverfälscht ist.",

  // --- Preise Subpage ---
  "price.meta.desc":
    "Ein Preis, für Ihr Rechenzentrum. Kein pro-User-pro-Modul-Baukasten. Preis auf Anfrage — inklusive aller Module und unbegrenzter User.",
  "price.rechner.title": "Warum kein Preisrechner?",
  "price.rechner.body":
    "Wir haben eine Weile experimentiert. Jedes Modell — pro User, pro Dokument, pro GB — belohnt das falsche Verhalten. Kolleg:innen bekommen keinen Zugang. Alte Akten werden gelöscht, um Platz zu sparen. Am Ende zahlt man mehr für den Aufwand, den Preis zu managen, als für die Software selbst. Ein Preis, ein Standort — das funktioniert.",

  // --- Kontakt Subpage ---
  "contact.meta.desc":
    "Reden Sie mit CloudDNA. 30 Minuten Demo, ehrliche Einschätzung, danach entscheiden Sie.",
  "contact.label.mail": "E-Mail",
  "contact.label.phone": "Telefon",
  "contact.label.addr": "Adresse",

  // --- Story Subpage ---
  "story.meta.desc":
    "Warum CloudDNA RecordTailor baut — und wie ein burgenländisches Engineering-Studio auf die Idee kommt, ein DMS neu zu denken.",

  // --- Footer ---
  "footer.tagline": "RecordTailor — Dokumente nach Maß. On-Premise. Aus Österreich.",
  "footer.austria": "Made in Austria",
  "footer.product": "Produkt",
  "footer.legal": "Rechtliches",
  "footer.impressum": "Impressum",
  "footer.datenschutz": "Datenschutz",
  "footer.copyright": "© {year} CloudDNA GmbH · RecordTailor™",
};

const en: Dict = {
  "meta.description":
    "RecordTailor — Records, tailored. AI-native document management, on-premise only. Every record measures. Made in Austria.",

  "nav.produkt": "Product",
  "nav.migration": "Migration",
  "nav.onprem": "On-premise",
  "nav.sicherheit": "Security",
  "nav.preise": "Pricing",
  "nav.blog": "Blog",
  "nav.story": "Story",
  "nav.cta_primary": "Contact",

  "hero.eyebrow": "Every record measures.",
  "hero.headline": "The most modern DMS on the market.",
  "hero.sub":
    "RecordTailor is the document management system for companies replacing a legacy DMS — Alfresco, ELO, DocuWare, d.velop, OpenText, SharePoint — or adopting a modern DMS for the first time. AI triage in under 30 seconds, AI assistant builds your schema in four hours, batch processing for thousands of documents, MFP scan ingest with no fat client. Delivered as an on-premise product, in your public cloud, or as a managed private cloud. No vendor lock-in.",
  "hero.moment.time": "14:03:00",
  "hero.moment.event": "Invoice \"Invoice_2026_0741.pdf\" hits the scan folder.",
  "hero.moment.time2": "14:03:22",
  "hero.moment.event2":
    "Classified as an incoming invoice. Amounts, IBAN, contract link detected. Filed to debtor case 4711.",
  "hero.moment.time3": "14:03:24",
  "hero.moment.event3":
    "Clerk gets a task \"Approve invoice 0741\" — 4 seconds total.",
  "hero.cta.primary": "Request a live demo",
  "hero.cta.secondary": "Feature overview",
  "hero.proof": "Made in Austria · CloudDNA GmbH · Delivered on-premise",

  "trust.1": "On-prem · Public · Private cloud",
  "trust.2": "EU data sovereignty",
  "trust.3": "SAP ArchiveLink & CMIS 1.1",
  "trust.4": "Batch processing at scale",
  "trust.5": "No training required",
  "trust.6": "Open-source core",

  "line.eyebrow": "UX & innovation rule",
  "line.title": "Not from 1998. Not from a consulting house.",
  "line.body":
    "Other DMSes start with a forty-day setup where consultants define your document types, curate your attributes, build your forms. Here, the AI builds your schema — from your own document set. Drop 50 invoices and 20 contracts into a folder: RecordTailor reads, classifies and proposes a complete attribute model. Four hours. Not four months. And the UI behind it isn't from 1998 — it's keyboard-first, dark-mode-fluent, mobile-ready. If you can use a search engine, you can use RecordTailor.",
  "line.pill.1.t": "AI schema assistant.",
  "line.pill.1.b":
    "From 50 documents the schema. From 500 the perfect one. You only correct what the assistant isn't sure about; the rest it proposes. Every new document type it learns further on the first approval click.",
  "line.pill.2.t": "No training required.",
  "line.pill.2.b":
    "We don't send you on a two-day training sprint. No manual, no onboarding wizard with fifteen clicks. You log in, drag a document into the browser, watch it happen. Done.",
  "line.pill.3.t": "UX from 2026, not Windows 95.",
  "line.pill.3.b":
    "No right-click cascades. No collapsible tree views fifteen levels deep. No grey toolbar buttons last fashionable in 2003. Keyboard-first, dark-mode, mobile-ready — standards you'd have to buy in via consulting anywhere else.",

  "feat.title": "Twelve capabilities others sell as add-ons.",
  "feat.sub":
    "Not clicked together. Designed together. Every capability feeds the next — from four shipped AI agents to fat-client-free MFP scan ingest.",
  "feat.1.title": "AI triage in real time",
  "feat.1.body":
    "Every uploaded document is classified, summarized and scored in under 30 seconds. Under 80 % — a human decides. Above — an automatic suggestion.",
  "feat.2.title": "Branches like Git",
  "feat.2.body":
    "Change a contract in a branch. Have it reviewed in parallel. Merge when there's consensus. Full audit trail per version, line by line.",
  "feat.3.title": "Hybrid search",
  "feat.3.body":
    "Full-text plus semantic vectors in a single query. \"Show me every contract that commits us to GDPR-erase within 30 days\" finds the doc that says exactly that — with different words.",
  "feat.4.title": "Knowledge graph",
  "feat.4.body":
    "People, companies, contracts, deadlines — all on one graph. One click from contract to contact to last offer, without anyone maintaining metadata.",
  "feat.5.title": "SAP ArchiveLink & CMIS",
  "feat.5.body":
    "RecordTailor speaks ArchiveLink and CMIS 1.1 natively. SAP can attach us as an archive. Alfresco migrations run without data loss.",
  "feat.6.title": "AI assistant builds your schema",
  "feat.6.body":
    "At setup the assistant takes a look at your existing documents — 50 invoices, 20 contracts, 30 emails — and proposes a full document-type and attribute model. You correct where it doesn't fit. Four hours instead of forty days.",

  "feat.7.title": "Scan ingest without a fat client",
  "feat.7.body":
    "Scan straight from your MFP into RecordTailor — via scan-to-folder or an HTTPS endpoint. No TWAIN drivers, no endpoint software on user PCs. Document separation inside a stack: either barcode separator sheets (deterministic, recommended for high volumes) or AI heuristics (layout- and content-change detection). One endpoint, one folder, done.",

  "feat.8.title": "Batch processing at scale",
  "feat.8.body":
    "500 invoices from month-end close? 50,000 documents from an archive import? The batch processor classifies in parallel across every GPU core, deduplicates by content hash, flags outliers, logs everything on the hash chain. No manual follow-up.",

  "prem.eyebrow": "Why on-premise only",
  "prem.title": "Your documents stay where they belong.",
  "prem.body":
    "We thought hard about offering a cloud option. We chose not to — on purpose. If your DMS is the backup of your business, it doesn't belong in someone else's data center.",
  "prem.p1.title": "No data leakage.",
  "prem.p1.body":
    "No LLM request leaves your network. We ship the models — local, quantized, GPU-optional.",
  "prem.p2.title": "Air-gapped ready.",
  "prem.p2.body":
    "Install without internet. Updates as signed tarballs. Attestation check verifies the origin.",
  "prem.p3.title": "Docker Compose or Kubernetes — you choose.",
  "prem.p3.body":
    "Standard deployment is Docker Compose: one command, one Docker host, done. For HA setups and larger scale we ship a Helm chart. No 40-container wiring marathon either way.",

  "cmp.eyebrow": "Not comparable to legacy DMS",
  "cmp.title": "Why not what everyone else uses?",
  "cmp.legacy.title": "Classic DMS (the big three)",
  "cmp.legacy.1": "Cloud-only or complex SaaS deployment with data leakage",
  "cmp.legacy.2": "Windows-95 UI with right-click cascades. Two-day user training required.",
  "cmp.legacy.3": "40-day setup consulting to define document types and attributes",
  "cmp.legacy.4": "AI is a paid add-on that calls external LLMs",
  "cmp.legacy.5": "Versions are linear copies — no branching, no merge",
  "cmp.legacy.6": "Licensing per user, per module, per storage, per support",
  "cmp.rt.title": "RecordTailor",
  "cmp.rt.1": "Docker Compose by default, Kubernetes/Helm optional, air-gapped ready",
  "cmp.rt.2": "UX from 2026. Keyboard-first, mobile-ready. No training required.",
  "cmp.rt.3": "AI assistant builds your schema in four hours from your own document set",
  "cmp.rt.4": "AI is the core, not the add-on. Local LLMs shipped",
  "cmp.rt.5": "Branches, merge, diff — real versioning like Git",
  "cmp.rt.6": "One price, negotiated for your data center",

  "sec.eyebrow": "Security",
  "sec.title": "Auditable down to the log line.",
  "sec.body":
    "Every action — upload, classify, approve, sign, delete — lands on a hash chain. Who did what to which document, when, is cryptographically unforgeable. Electronic signatures with a tamper-evident audit chain; qualified signature (eIDAS QES) via trust service provider in preparation. GDPR-erase included.",
  "sec.item1": "Postgres RLS per tenant — we can't see your data either",
  "sec.item2": "Hash chain over every audit event, verifiable via CLI",
  "sec.item3": "Electronic signatures with tamper-evident audit chain; qualified signature (eIDAS QES) via trust service provider in preparation",
  "sec.item4": "Sigstore attestation on every container image",
  "sec.item5": "Confidential compute (AMD SEV-SNP) optional",
  "sec.item6": "GDPR-erase across every store, including embeddings and cache",

  "price.eyebrow": "Pricing",
  "price.title": "One price. Negotiated for your house.",
  "price.body":
    "We don't sell a per-user-per-module-per-storage matrix. One DMS, one price, for your site. What you pay depends on volume and SLA level — not on how many colleagues use it.",
  "price.included.title": "Always included",
  "price.included.1": "Every module — AI, branching, graph, search, signatures, ArchiveLink, CMIS",
  "price.included.2": "Unlimited users inside your network",
  "price.included.3": "Local AI models with commercial-use license",
  "price.included.4": "Air-gapped install, Docker Compose or Helm chart, attestation check",
  "price.included.5": "Signed update channel for 24 months",
  "price.cta.body":
    "Sit down with us. We look at your document volumes, quote the base pack plus SLA, and you know where you stand. No trick questions about company size.",
  "price.cta.button": "Request pricing",

  "faq.title": "What we hear again and again.",
  "faq.q1": "You really don't have a cloud offering?",
  "faq.a1":
    "None. That's our thing. If you want a cloud DMS, there are plenty of good ones — we're not one.",
  "faq.q2": "What happens if CloudDNA goes away tomorrow?",
  "faq.a2":
    "RecordTailor's core is open source (Apache-2.0). Postgres, MinIO, your data — everything stays with you and keeps running. Migration to a successor system is possible via standard interfaces (CMIS).",
  "faq.q3": "How do we migrate a 2007-era DMS into RecordTailor?",
  "faq.a3":
    "We have migration adapters for Alfresco, d.velop, ELO, DocuWare and OpenText. Content, metadata, versions, ACLs — all in one shot. Expect 4–8 weeks for a mid-sized legacy system.",
  "faq.q4": "How much GPU do we actually need?",
  "faq.a4":
    "For 500 docs/day, one RTX 4090 per site. For 50 000 docs/day: one H100. For 500 000/day — let's talk.",
  "faq.q5": "Can we evaluate first?",
  "faq.a5":
    "Yes. We ship a Docker Compose stack with test data. 30 minutes to set up, 4 weeks to poke around, then you decide.",

  "story.eyebrow": "Why we're building this",
  "story.title": "We wanted a DMS we'd actually use ourselves.",
  "story.body":
    "As an engineering studio we've spent years working with our customers' DMSes. SharePoint migrations, Alfresco rescues, OpenText transitions. Every project ended with the same thought: \"Why is this so hard? Why does a clerk have to click five times to file an invoice?\" RecordTailor is the answer. No negotiation with legacy constraints. A DMS built the way a 2020s product team would build one.",
  "story.p1.title": "From Burgenland, for the EU.",
  "story.p1.body":
    "CloudDNA is an Austrian software house based in Burgenland. We build products meant to run where you sit — not across an ocean cable, not on another continent.",
  "story.p2.title": "Open core.",
  "story.p2.body":
    "The core is Apache-2.0. Read it, fork it, audit it. What we sell is enterprise support and the commercial distribution.",
  "story.p3.title": "A product team that listens.",
  "story.p3.body":
    "You talk to the people who build the product — not to a CSM three layers away.",

  "contact.title": "Let's talk.",
  "contact.body":
    "30 minutes. Show us your current DMS pain, we show you RecordTailor. Honest: if we don't fit, we say so.",
  "contact.mail": "hello@recordtailor.com",
  "contact.phone": "+43 664 1964199",
  "contact.address": "CloudDNA GmbH · Loipersdorf",

  "moment.eyebrow": "An afternoon in accounts payable",
  "featgrid.eyebrow": "What's inside",
  "screens.eyebrow": "What it feels like",
  "screens.title": "Three moments inside the app.",

  "emblem.top": "Made to measure",
  "emblem.bottom": "Built for workflows",
  "emblem.headline": "\"Made to measure\" isn't marketing here.",
  "emblem.body":
    "Every RecordTailor deployment is tailored to your document types, your processes, your contract catalog. No config wizard ticking boxes on a standard list. A setup sprint where we measure with your team: which documents, which edges, which deadlines. What comes out fits your house like a bespoke suit — and is just as un-swappable.",
  "emblem.measure.1.n": "48 h",
  "emblem.measure.1.l": "sprint with your team",
  "emblem.measure.2.n": "14",
  "emblem.measure.2.l": "typical document types",
  "emblem.measure.3.n": "97 %",
  "emblem.measure.3.l": "classification confidence after sprint",
  "nocloud.pill1": "No cloud edition.",
  "nocloud.pill2": "And that stays that way.",

  "cta.eyebrow": "Commit yourself",
  "cta.title": "Every record measures.",
  "cta.body": "See in 20 minutes why that isn't just a marketing line.",
  "cta.button": "Request a demo",
  "price.label.price": "Price",
  "price.label.onrequest": "On request",
  "price.label.base": "Base pack + SLA",
  "price.label.monthly": "Per month",
  "price.track.onprem.label": "As a product",
  "price.track.onprem.title": "Run it yourself.",
  "price.track.onprem.body":
    "You buy the license, we hand you your system. Runs in your data center, on Docker Compose or Kubernetes, behind your firewall.",
  "price.track.managed.label": "As managed service",
  "price.track.managed.title": "Let us run it.",
  "price.track.managed.body":
    "A dedicated instance for your company — not a multi-tenant cloud. We operate your setup in the EU region you choose, on Docker Compose or Kubernetes. You keep data sovereignty; we handle operations, patches, backups and 24/7 on-call.",
  "price.managed.included.1": "Dedicated instance in EU data center (Vienna, Frankfurt, Zurich)",
  "price.managed.included.2": "24/7 monitoring and on-call team",
  "price.managed.included.3": "Security patches within 24 h",
  "price.managed.included.4": "Encrypted backups with BYOK (your master key)",
  "price.managed.included.5": "SLA 99.9 % — 99.99 % on request",

  "produkt.meta.desc":
    "Six capabilities others sell as add-ons: AI triage, branches, hybrid search, knowledge graph, ArchiveLink/CMIS, scan ingest.",
  "produkt.cta.title": "See it on one of your own documents.",
  "produkt.cta.body":
    "30 minutes. You send an anonymized example — we show you live what RecordTailor does with it.",
  "produkt.cta.button": "Request a demo",

  "onprem.meta.desc":
    "RecordTailor ships on-premise only. No cloud offering. No SaaS. Your documents stay in your data center.",
  "onprem.req.title": "What you actually need.",
  "onprem.req.1.title": "A Docker host — or a Kubernetes cluster.",
  "onprem.req.1.body":
    "For smaller sites a Docker host with Docker Compose is enough — one command, one system, done. Need more scale? K3s, RKE2, OpenShift, EKS-on-prem — doesn't matter. We ship a Helm chart that runs anywhere.",
  "onprem.req.2.title": "Postgres 16 with pgvector.",
  "onprem.req.2.body":
    "From us or your own. HA setup with Patroni is in the chart if you want it.",
  "onprem.req.3.title": "Object storage.",
  "onprem.req.3.body":
    "MinIO, Ceph, NetApp StorageGRID — S3-compatible is enough. Content-addressable storage means duplicate documents hit disk only once.",
  "onprem.req.4.title": "GPU — optional but recommended.",
  "onprem.req.4.body":
    "For local LLM inference. One RTX 4090 handles a site with ~500 docs/day. Without a GPU, everything works except the fastest classification.",
  "onprem.cta.title": "We set it up with your team.",
  "onprem.cta.body":
    "Two days. One migration engineer from us, someone from your ops team. On day three, RecordTailor is running in your data center.",
  "onprem.cta.button": "Request an install slot",

  "sec.meta.desc":
    "Postgres RLS per tenant, hash-chain audit, electronic signatures (eIDAS QES in preparation), Sigstore attestation, confidential compute optional. RecordTailor is auditable down to the log line.",
  "sec.audit.title": "An audit log that can't be rewritten.",
  "sec.audit.body":
    "Every event gets a SHA-256 hash that includes the hash of the previous one. Tamper with a single entry and the whole chain breaks. Verified via CLI — you can prove your history is intact at any time.",

  "price.meta.desc":
    "One price, for your data center. No per-user-per-module matrix. Pricing on request — includes every module and unlimited users.",
  "price.rechner.title": "Why no pricing calculator?",
  "price.rechner.body":
    "We tried for a while. Every model — per user, per document, per GB — rewards the wrong behavior. Colleagues don't get access. Old case files get deleted to save space. You end up spending more on managing the price than on the software itself. One price, one site — that works.",

  "contact.meta.desc":
    "Talk to CloudDNA. 30-minute demo, honest read, then you decide.",
  "contact.label.mail": "Email",
  "contact.label.phone": "Phone",
  "contact.label.addr": "Address",

  "story.meta.desc":
    "Why CloudDNA is building RecordTailor — and how an Austrian engineering studio comes to rethink DMS from scratch.",

  "footer.tagline": "RecordTailor — Records, tailored. On-premise. From Austria.",
  "footer.austria": "Made in Austria",
  "footer.product": "Product",
  "footer.legal": "Legal",
  "footer.impressum": "Imprint",
  "footer.datenschutz": "Privacy",
  "footer.copyright": "© {year} CloudDNA GmbH · RecordTailor™",
};

export const DICTS: Record<Locale, Dict> = { de, en };
