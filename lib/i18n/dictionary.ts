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
  "nav.onprem": "On-Premise",
  "nav.sicherheit": "Sicherheit",
  "nav.preise": "Preise",
  "nav.story": "Story",
  "nav.cta_primary": "Kontakt",

  // --- Hero ---
  "hero.eyebrow": "Every record measures.",
  "hero.headline": "Dokumente. Nach Maß.",
  "hero.sub":
    "RecordTailor ist das DMS, das wie ein Kollege mitdenkt. Jedes Dokument wird beim Ablegen klassifiziert, verstanden und mit Ihrer Sachlogik verbunden. Betreiben Sie es selbst im eigenen Rechenzentrum — oder lassen Sie es uns als Managed Service in Ihrer dedizierten EU-Instanz betreiben. Kein Fat-Client. Kein Vendor-Lock-in.",
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
  "trust.1": "Reine On-Premise",
  "trust.2": "EU-Datenhoheit",
  "trust.3": "SAP ArchiveLink",
  "trust.4": "CMIS 1.1",
  "trust.5": "Ohne Fat-Client",
  "trust.6": "Open-Source-Kern",

  // --- Golden line (positioning) ---
  "line.title": "Wir sind das DMS der nächsten Generation.",
  "line.body":
    "Kein weiteres „Aktenschrank-in-der-Cloud\". RecordTailor liest Ihre Dokumente, versteht Ihre Fachbegriffe, verzweigt Änderungen wie Git und beantwortet Fragen mit Zitat und Fundstelle — alles in Ihrem eigenen Rechenzentrum.",

  // --- Feature grid ---
  "feat.title": "Sechs Fähigkeiten, die andere als „Add-On\" verkaufen.",
  "feat.sub":
    "Nicht zusammengeklickt. Zusammen konzipiert. Jede Fähigkeit greift in die nächste.",

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

  "feat.6.title": "Scan-Ingest ohne Fat-Client",
  "feat.6.body":
    "MFP direkt in RecordTailor scannen. Auto-Trennung erkennt Belegwechsel. Kein Windows-Scan-Client, keine TWAIN-Treiber-Kämpfe, keine Software auf Endgeräten.",

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
  "prem.p3.title": "Ein Kubernetes, ein Helm-Chart.",
  "prem.p3.body":
    "Deploy mit einem Kommando. Keine 40-Container-Compose-Datei zum Zusammenschrauben.",

  // --- Compare ---
  "cmp.eyebrow": "Kein Vergleich mit Legacy-DMS",
  "cmp.title": "Warum nicht das, was alle nutzen?",
  "cmp.legacy.title": "Klassische DMS (die grossen Drei)",
  "cmp.legacy.1": "Cloud-only oder komplexes SaaS-Deployment mit Datenabfluss",
  "cmp.legacy.2": "Fat-Client für Scan, Signatur, Suche",
  "cmp.legacy.3": "Metadaten müssen händisch gepflegt werden",
  "cmp.legacy.4": "KI ist ein kostenpflichtiges Add-On, das externe LLMs anzapft",
  "cmp.legacy.5": "Versionen sind lineare Kopien — kein Branching, kein Merge",
  "cmp.legacy.6": "Lizenzmodell nach User, Modul, Storage, Support",
  "cmp.rt.title": "RecordTailor",
  "cmp.rt.1": "Reine On-Premise, ein Helm-Chart, air-gapped-fähig",
  "cmp.rt.2": "100 % Browser. MFP-Scan, Signatur, Suche — kein Endgeräte-Setup",
  "cmp.rt.3": "KI erkennt Metadaten in unter 30 Sekunden pro Dokument",
  "cmp.rt.4": "KI ist der Kern, nicht das Add-On. Lokale LLMs mitgeliefert",
  "cmp.rt.5": "Branches, Merge, Diff — echte Versionierung wie in Git",
  "cmp.rt.6": "Ein Preis, verhandelt für Ihr Rechenzentrum",

  // --- Sicherheit ---
  "sec.eyebrow": "Sicherheit",
  "sec.title": "Prüfbar bis auf die Log-Zeile.",
  "sec.body":
    "Jede Aktion — Upload, Klassifikation, Freigabe, Signatur, Löschung — landet in einer Hash-Chain. Wer wann was mit welchem Dokument tat, ist kryptographisch nicht mehr umschreibbar. eIDAS-QES für Signaturen. GDPR-Erase inklusive.",
  "sec.item1": "Postgres-RLS pro Tenant — auch wir sehen Ihre Daten nicht",
  "sec.item2": "Hash-Chain über alle Audit-Events, überprüfbar per CLI",
  "sec.item3": "eIDAS-Qualifizierte Signaturen mit PAdES-B-LTA",
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
  "price.included.4": "Air-Gapped-Installation, Helm-Chart, Attestation-Check",
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
  "contact.phone": "+43 664 000 00 00",
  "contact.address": "CloudDNA GmbH · Loipersdorf",

  // --- Misc chrome ---
  "moment.eyebrow": "Ein Nachmittag im Rechnungswesen",
  "featgrid.eyebrow": "Was drin steckt",
  "screens.eyebrow": "Wie es sich anfühlt",
  "screens.title": "Drei Momente in der Anwendung.",

  // --- Emblem / Made to Measure Slab ---
  "emblem.top": "Made to measure",
  "emblem.bottom": "Built for workflows",
  "emblem.headline": "„Made to measure" ist bei uns kein Marketing-Wort.",
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
    "Sie kaufen die Lizenz, wir übergeben Ihnen Ihr eigenes System. Läuft in Ihrem Rechenzentrum, Ihrem Kubernetes, hinter Ihrer Firewall.",
  "price.track.managed.label": "Als Managed Service",
  "price.track.managed.title": "Von uns betreiben lassen.",
  "price.track.managed.body":
    "Dedizierte Instanz für Ihr Unternehmen — keine Multi-Tenant-Cloud. Wir betreiben Ihre Kubernetes-Umgebung in einer EU-Region Ihrer Wahl. Sie behalten Datenhoheit, wir übernehmen Betrieb, Patches, Backups und 24/7-Bereitschaft.",
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
  "onprem.req.1.title": "Ein Kubernetes-Cluster.",
  "onprem.req.1.body":
    "Ab drei Nodes ausreichend. K3s, RKE2, OpenShift, EKS-on-prem — egal. Wir liefern ein Helm-Chart, das überall läuft.",
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
    "Postgres-RLS pro Tenant, Hash-Chain-Audit, eIDAS-QES, Sigstore-Attestation, Confidential Compute optional. RecordTailor ist prüfbar bis auf die Log-Zeile.",
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
  "nav.onprem": "On-premise",
  "nav.sicherheit": "Security",
  "nav.preise": "Pricing",
  "nav.story": "Story",
  "nav.cta_primary": "Contact",

  "hero.eyebrow": "Every record measures.",
  "hero.headline": "Records, tailored.",
  "hero.sub":
    "The first on-premise DMS that thinks like a colleague. Every document is classified, understood, and connected to your business logic the moment it lands. No cloud. No fat client. No vendor lock-in.",
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

  "trust.1": "On-premise only",
  "trust.2": "EU data sovereignty",
  "trust.3": "SAP ArchiveLink",
  "trust.4": "CMIS 1.1",
  "trust.5": "No fat client",
  "trust.6": "Open-source core",

  "line.title": "The DMS of the next generation.",
  "line.body":
    "Not another \"filing cabinet in the cloud\". RecordTailor reads your documents, understands your domain vocabulary, branches changes like Git, and answers questions with citation and source — all inside your own data center.",

  "feat.title": "Six capabilities others sell as add-ons.",
  "feat.sub":
    "Not clicked together. Designed together. Every capability feeds the next.",
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
  "feat.6.title": "Scan ingest, no fat client",
  "feat.6.body":
    "MFP scans straight into RecordTailor. Auto-separation detects document boundaries. No Windows scan clients, no TWAIN driver wars.",

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
  "prem.p3.title": "One Kubernetes, one Helm chart.",
  "prem.p3.body":
    "One command to deploy. No 40-container Compose file to wire together.",

  "cmp.eyebrow": "Not comparable to legacy DMS",
  "cmp.title": "Why not what everyone else uses?",
  "cmp.legacy.title": "Classic DMS (the big three)",
  "cmp.legacy.1": "Cloud-only or complex SaaS deployment with data leakage",
  "cmp.legacy.2": "Fat clients for scanning, signing, searching",
  "cmp.legacy.3": "Metadata must be curated by hand",
  "cmp.legacy.4": "AI is a paid add-on that calls external LLMs",
  "cmp.legacy.5": "Versions are linear copies — no branching, no merge",
  "cmp.legacy.6": "Licensing per user, per module, per storage, per support",
  "cmp.rt.title": "RecordTailor",
  "cmp.rt.1": "On-premise only, one Helm chart, air-gapped ready",
  "cmp.rt.2": "100 % browser. MFP scan, sign, search — no endpoint setup",
  "cmp.rt.3": "AI extracts metadata in under 30 seconds per document",
  "cmp.rt.4": "AI is the core, not the add-on. Local LLMs shipped",
  "cmp.rt.5": "Branches, merge, diff — real versioning like Git",
  "cmp.rt.6": "One price, negotiated for your data center",

  "sec.eyebrow": "Security",
  "sec.title": "Auditable down to the log line.",
  "sec.body":
    "Every action — upload, classify, approve, sign, delete — lands on a hash chain. Who did what to which document, when, is cryptographically unforgeable. eIDAS QES for signatures. GDPR-erase included.",
  "sec.item1": "Postgres RLS per tenant — we can't see your data either",
  "sec.item2": "Hash chain over every audit event, verifiable via CLI",
  "sec.item3": "eIDAS-qualified signatures with PAdES-B-LTA",
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
  "price.included.4": "Air-gapped install, Helm chart, attestation check",
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
  "contact.phone": "+43 664 000 00 00",
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
    "You buy the license, we hand you your system. Runs in your data center, your Kubernetes, behind your firewall.",
  "price.track.managed.label": "As managed service",
  "price.track.managed.title": "Let us run it.",
  "price.track.managed.body":
    "A dedicated instance for your company — not a multi-tenant cloud. We operate your Kubernetes environment in the EU region you choose. You keep data sovereignty; we handle operations, patches, backups and 24/7 on-call.",
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
  "onprem.req.1.title": "A Kubernetes cluster.",
  "onprem.req.1.body":
    "Three nodes is enough. K3s, RKE2, OpenShift, EKS-on-prem — doesn't matter. We ship a Helm chart that runs anywhere.",
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
    "Postgres RLS per tenant, hash-chain audit, eIDAS QES, Sigstore attestation, confidential compute optional. RecordTailor is auditable down to the log line.",
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
