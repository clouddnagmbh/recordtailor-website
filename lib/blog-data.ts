/**
 * Blog-Artikel für recordtailor.com. Bewusst nicht in MDX, sondern in
 * strukturierten Feldern — jeder Artikel ist ein Objekt mit `paragraphs`
 * (rendert als `<p>`) und `sections` (jede mit h2 + paragraphs).
 * Blogartikel dienen Content-Marketing und GEO (Answer Engines finden
 * hier lange, zitierbare Passagen).
 */

export type BlogArticle = {
  slug: string;
  title: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string; // ISO
  readingMinutes: number;
  tags: string[];
  sections: {
    heading?: string;
    paragraphs: string[];
  }[];
};

export const ARTICLES: BlogArticle[] = [
  {
    slug: "dms-migration-8-fehler",
    title: "DMS-Migration: 8 Fehler, die Millionen kosten",
    lead: "Ein DMS-Wechsel scheitert selten am Content-Import. Er scheitert an den acht Themen, an die keiner denkt, bevor der Cutover-Tag da ist.",
    metaTitle: "DMS-Migration: 8 Fehler, die Millionen kosten — RecordTailor",
    metaDescription:
      "Warum DMS-Migrationen scheitern: ACLs, ArchiveLink-Umschaltung, Retention Policies, Signatur-Historie, Custom-Aspects, Volltextindex, Change-Management, Rollback. Eine Feldstudie.",
    publishedAt: "2026-07-14",
    readingMinutes: 9,
    tags: ["Migration", "DMS ablösen", "Praxis"],
    sections: [
      {
        paragraphs: [
          "Ein DMS ist keine Datenbank. Wenn Sie eine Datenbank migrieren, prüfen Sie Schema, Constraints, Indizes und Trigger. Fertig. Ein DMS-Umzug hat einen Faktor mehr — die Menschen, die damit arbeiten — und mindestens sechs Dinge, die man nicht sieht: ACLs, ArchiveLink-Konfiguration, Retention Policies, Signatur-Historie, Custom-Aspects und den Volltextindex. Jedes einzelne davon kann eine Migration in Woche 7 sprengen. Diese acht Themen kennen wir aus zehn Jahren SAP-DMS-Projekten. Wenn Sie eines davon abhaken, ohne es geprüft zu haben, sitzen Sie am Cutover-Wochenende länger, als Ihnen lieb ist.",
        ],
      },
      {
        heading: "1. ACLs, die niemand mehr versteht",
        paragraphs: [
          "Jedes gewachsene DMS hat Gruppen und Rechte, die in dreizehn Iterationen entstanden sind. Der ursprüngliche Grund, warum die Gruppe „Recht-Freigabe-Sonderfall-2018\" existiert, ist mit dem damaligen Compliance-Officer in Pension gegangen. Wenn Sie diese Gruppen 1:1 kopieren, tragen Sie das Chaos mit. Wenn Sie sie neu machen, riskieren Sie, dass zwei Sachbearbeiter am Montag nichts mehr sehen können.",
          "Was funktioniert: eine ACL-Inventur vor der Migration. Wir laufen mit einem Skript durch das Bestandssystem, listen jede aktive Gruppe mit letztem Nutzungs-Zeitstempel und Zahl der aktuell darauf beruhenden Dokumente. Alles, was seit 24 Monaten nicht benutzt wurde, kommt in eine Cleanup-Liste. Der Cutover startet mit einem sauberen Rechte-Set.",
        ],
      },
      {
        heading: "2. ArchiveLink schwenkt an einem Wochenende — oder nie",
        paragraphs: [
          "SAP hängt in der Regel per ArchiveLink am DMS. Die ContReps-Konfiguration ist im SAP hinterlegt, meist von einem Externen, den keiner mehr erreicht. Wenn Sie SAP-Cutover und DMS-Cutover nicht koordiniert planen, hat Ihr Rechnungswesen am Montag um 08:00 keine Anzeige-Möglichkeit für Belege. Wir haben das gesehen. Es ist nicht schön.",
          "Der Move-Plan: DMS-neu läuft parallel. ArchiveLink zeigt weiterhin auf DMS-alt. Am Cutover-Wochenende schwenkt die ContReps-URL. In den Wochen davor werden die neuen Endpunkte mit Test-Belegen validiert. Der eigentliche Cutover-Schritt ist eine SAP-Config-Änderung, die 20 Minuten dauert.",
        ],
      },
      {
        heading: "3. Retention Policies migrieren nicht automatisch",
        paragraphs: [
          "„Wir behalten die Retention Policies bei\" ist ein Satz, der in Discovery-Meetings oft fällt und selten hält. Retention-Policies sind DMS-spezifisch — was Alfresco als Aspect ausdrückt, ist in DocuWare eine Storage-Location-Regel, in OpenText ein Records-Management-Container. Die Semantik ist selten 1:1 übertragbar.",
          "Was hilft: Retention Policies vor der Migration in einer plattformneutralen Tabelle festhalten (Dokumentklasse, Aufbewahrungsdauer, Löschtrigger, Legal Hold). Diese Tabelle ist ohnehin für die DSGVO-Dokumentation nützlich und wird nach dem Cutover das neue Regelwerk.",
        ],
      },
      {
        heading: "4. Signatur-Historie ist mehr als eine PDF-Datei",
        paragraphs: [
          "Eine eIDAS-qualifizierte Signatur ist an einen Zertifikatspfad gebunden. Wenn Sie das DMS wechseln, muss die Kette Signatur → Zertifikat → CA → Root weiterhin nachvollziehbar sein. Sonst gilt die Signatur nach dem Cutover als „nicht mehr verifizierbar\" und Ihre PAdES-B-LTA-Ambition ist futsch.",
          "Konkret: Signatur-Metadaten, Timestamp-Authorities, LTV-Informationen (Long-Term Validation) müssen mitgehen. Wir prüfen jede Signatur beim Import auf Validität und lassen Ausreißer in eine Manual-Review-Queue laufen, statt sie stumm zu kopieren.",
        ],
      },
      {
        heading: "5. Custom-Aspects — die Metadaten, die nicht im Standard-Schema sind",
        paragraphs: [
          "Alfresco-Aspects, ELO-Verschlagwortungs-Masken, d.velop-Formulare — jedes DMS hat Custom-Metadaten-Definitionen, die im Standard-Schema nicht abgebildet sind. Wenn Sie diese ignorieren, verlieren Sie Attribute, die Sachbearbeiter über Jahre gepflegt haben. Wenn Sie sie 1:1 übernehmen, tragen Sie technische Schulden mit.",
          "Der Königsweg: Custom-Aspects werden zu Anfangsvorschlägen für den KI-Assistenten. Er lernt aus den bisher gepflegten Werten und kann bereits im Test-Run bessere Vorschläge machen als die alte Regel-Basis. Was Sie in Jahren händisch gebaut haben, wird ab Cutover-Tag automatisch weitergeführt.",
        ],
      },
      {
        heading: "6. Volltextindex neu bauen — Zeit und Speicher planen",
        paragraphs: [
          "Ein Volltextindex über 5 Millionen Dokumente ist ein paar Terabyte groß und dauert Stunden. Wenn Sie das erst am Cutover-Wochenende starten, riskieren Sie, dass am Montagfrüh die Suche „nichts findet\" — obwohl das Dokument da ist. Der Nutzer merkt es. Und ruft an.",
          "Was funktioniert: Volltextindex parallel zum Content-Import aufbauen. Am Cutover-Datum ist der Index synchron. Der Suche-Feature-Flag wird umgestellt, sobald die Deckung geprüft ist.",
        ],
      },
      {
        heading: "7. Change-Management: Ihre Sachbearbeiter sind das Nadelöhr, nicht das System",
        paragraphs: [
          "Ein modernes DMS mit KI-Klassifikation ändert die Arbeitsroutine der Sachbearbeiter. Wer bisher fünf Klicks pro Beleg gebraucht hat, macht jetzt zwei. Das klingt gut — und ist bei den ersten fünfzig Belegen auch gut. Beim ersten Beleg, bei dem die KI unsicher ist und der Sachbearbeiter selbst entscheiden muss, taucht das Muster auf: „Aha, die KI kann's also doch nicht.\" Das ist ein Change-Management-Moment, kein Software-Bug.",
          "Was hilft: transparente Konfidenz-Scores. Der Sachbearbeiter sieht bei jedem Vorschlag, wie sicher die KI ist. Unter 80 % entscheidet der Mensch. Über 80 % geht es automatisch. So bleibt das Vertrauen intakt, weil die KI nicht überredet — sie fragt.",
        ],
      },
      {
        heading: "8. Rollback-Plan — der, den man hoffentlich nie braucht",
        paragraphs: [
          "Am Cutover-Wochenende geht etwas schief. Nicht bei uns, hoffentlich. Aber wenn: Sie brauchen einen Rollback-Plan, der in unter zwei Stunden zurück zum alten DMS führt. Klingt trivial. Ist es nicht.",
          "Der einfache Fall: das alte DMS läuft 30 Tage lang im Read-Only-Modus weiter. Neue Belege gehen ins neue System, alte bleiben abrufbar aus dem alten. Falls ein Rollback nötig ist, wird der Read-Only-Modus aufgehoben und der neue Endpunkt zurück umkonfiguriert. Voraussetzung: Sie haben die Cutover-Reihenfolge so gebaut, dass Rollback tatsächlich möglich ist — kein einmaliger Schema-Break, keine „wir löschen jetzt die alten Daten\"-Schritte am Cutover-Tag.",
        ],
      },
      {
        heading: "Was Sie mitnehmen",
        paragraphs: [
          "Eine DMS-Migration ist eine Change-Management-Übung mit Software-Anteil, nicht umgekehrt. Wenn Sie die acht Themen oben strukturiert angehen, ist die eigentliche Cutover-Nacht ein Non-Event. Wenn Sie eines davon ignorieren, wird es die längste Nacht Ihrer Karriere.",
          "Wir haben deshalb einen Migrations-Discovery-Sprint definiert: zwei Wochen, in denen wir mit Ihrem Team die acht Themen durchgehen. Das Ergebnis ist ein Migrations-Plan, in dem für jedes Thema klar ist, wer wann was macht. Wenn Sie mehr wissen wollen, sagen Sie Bescheid.",
        ],
      },
    ],
  },
  {
    slug: "was-ein-modernes-dms-2026-koennen-muss",
    title: "Was ein modernes DMS 2026 können muss",
    lead: "Nicht mehr, aber auch nicht weniger als das, was durch KI in den letzten zwei Jahren möglich geworden ist. Fünf Fähigkeiten, ohne die ein DMS 2026 nicht ernst zu nehmen ist.",
    metaTitle: "Was ein modernes DMS 2026 können muss — RecordTailor",
    metaDescription:
      "Klassifikation < 30 s, KI-Setup ohne Consulting, Hybrid-Suche mit Vektor-Semantik, ohne Fat-Client, Deployment-Freiheit. Fünf Fähigkeiten, die 2026 zum Pflichtprogramm gehören.",
    publishedAt: "2026-07-07",
    readingMinutes: 6,
    tags: ["Anforderungen", "KI", "Marktüberblick"],
    sections: [
      {
        paragraphs: [
          "DMS-Systeme sind zwanzig Jahre alt. Die meisten Kernkonzepte — Repository, Metadaten, ACLs, Volltextsuche — waren 2005 bereits ausgereift. Was sich in den letzten zwei Jahren radikal verändert hat, sind die Werkzeuge, mit denen ein DMS Dokumente „verstehen\" kann. Wer 2026 ein DMS kauft und diese Werkzeuge nicht bekommt, kauft ein Produkt von 2018.",
          "Fünf Fähigkeiten trennen 2026 die Moderne vom Museum:",
        ],
      },
      {
        heading: "1. Klassifikation in unter 30 Sekunden — lokal",
        paragraphs: [
          "Ein Dokument, das reingeht, muss innerhalb einer halben Minute klassifiziert sein, mit Konfidenz-Score und extrahierten Attributen. Nicht in einer externen Cloud, sondern auf einer GPU im eigenen Rechenzentrum. Alles langsamer bedeutet: der Sachbearbeiter wartet, verliert Vertrauen und macht die Arbeit doppelt.",
          "Die 30-Sekunden-Grenze ist keine Marketing-Zahl. Sie ist die Grenze, ab der ein Mensch das Ergebnis noch als „direkt\" wahrnimmt. Alles darüber ist Batch-Verhalten, und Batch-Verhalten wird ignoriert.",
        ],
      },
      {
        heading: "2. Setup ohne Consulting-Marathon",
        paragraphs: [
          "Ein DMS, das 40 Tage Beratungs-Setup braucht, um Belegarten zu definieren, kauft heute niemand mehr, der die Rechnung selbst bezahlt. Die KI muss aus dem eigenen Dokumenten-Bestand ein Schema vorschlagen können, das der Fachbereich nur noch korrigiert.",
          "Wir sind in vier Stunden fertig, nicht in vier Monaten. Die Zeit-Reduktion liegt nicht daran, dass wir Wunder tun — sondern daran, dass die KI die Fleißarbeit übernimmt, die Berater vorher händisch gemacht haben.",
        ],
      },
      {
        heading: "3. Hybrid-Suche: Volltext + Vektor-Semantik",
        paragraphs: [
          "„Zeig mir alle Verträge mit einer DSGVO-Löschpflicht nach 30 Tagen\" ist eine typische Suche. Volltextsuche findet, was das Wort „30 Tage\" enthält. Sie findet nicht den Vertrag, der „binnen eines Monats\" schreibt. Vektor-Semantik findet beides.",
          "Ein DMS ohne Vektor-Suche findet nur, was der Nutzer bereits weiß. Ein DMS mit Vektor-Suche findet, was der Nutzer meint. Das ist ein Kategorienunterschied, kein Feature-Vergleich.",
        ],
      },
      {
        heading: "4. Kein Fat-Client, keine Endgeräte-Software",
        paragraphs: [
          "Windows-Terminal-Server, TWAIN-Treiber, ELO-Java-Client, d.3one — jede Endgeräte-Software ist ein Roll-out-Termin, den Ihre IT nicht bekommt und der Sachbearbeiter nicht will. 2026 gibt es keinen Grund, warum ein DMS mehr braucht als einen Browser und einen MFP-Scanner mit Netzwerk-Endpunkt.",
          "Der praktische Testfall: kann eine Neuanstellung am ersten Arbeitstag ohne IT-Ticket auf das DMS zugreifen? Wenn nein, ist es kein modernes DMS.",
        ],
      },
      {
        heading: "5. Deployment-Freiheit — On-Prem, Public Cloud, Private Cloud",
        paragraphs: [
          "Nicht jedes Unternehmen darf in die Public Cloud. Nicht jedes will es. Ein DMS, das nur SaaS anbietet, disqualifiziert sich für die Hälfte der Enterprise-Kunden. Ein DMS, das nur On-Premise anbietet, disqualifiziert sich für die andere Hälfte.",
          "Die Antwort ist nicht Cloud oder Prem. Die Antwort ist Wahlfreiheit: dasselbe Produkt läuft auf Docker Compose im eigenen Rechenzentrum, in Ihrem Public-Cloud-Account und als Managed Service in einer dedizierten EU-Region. Sie entscheiden. Wir liefern.",
        ],
      },
      {
        heading: "Der Prüfstein",
        paragraphs: [
          "Wenn Ihr aktuelles DMS drei der fünf Punkte nicht kann, ist ein Wechsel keine Modernisierungs-Übung — es ist Notwendigkeit. Der Rückstand wird jeden Monat größer.",
          "RecordTailor kann alle fünf. Wenn Sie sehen wollen, wie sich das im Alltag anfühlt: 30 Minuten Demo mit einem Ihrer eigenen Dokumente.",
        ],
      },
    ],
  },
  {
    slug: "on-premise-oder-managed-private-cloud",
    title: "On-Premise oder Managed Private Cloud: Wie Sie entscheiden",
    lead: "Beide Wege sind besser als eine Multi-Tenant-Cloud. Welcher der richtige für Ihr Unternehmen ist, hängt an drei Fragen — und einer, die kaum jemand stellt.",
    metaTitle: "On-Premise oder Managed Private Cloud — RecordTailor",
    metaDescription:
      "Wann On-Premise, wann Managed Private Cloud? Entscheidungsleitfaden nach Datenhoheit-Anforderung, IT-Kapazität und Total-Cost-of-Ownership. Für DMS-Käufer.",
    publishedAt: "2026-06-30",
    readingMinutes: 5,
    tags: ["Deployment", "On-Premise", "Managed Service"],
    sections: [
      {
        paragraphs: [
          "Wenn Sie ein DMS kaufen, kaufen Sie zwei Dinge: das Produkt und die Art, wie es läuft. Bei RecordTailor gibt es drei Betriebswege — On-Premise, Public Cloud (in Ihrem eigenen AWS/Azure/GCP-Account) und Managed Private Cloud (dedizierte Instanz, betrieben von uns in einer EU-Region). Public Cloud ist meist Nebenweg. Die eigentliche Entscheidung fällt zwischen On-Premise und Managed Private Cloud.",
        ],
      },
      {
        heading: "Frage 1: Was sagt Ihre Compliance-Abteilung zu externen Betreibern?",
        paragraphs: [
          "Einige Branchen — Banken unter FMA-Aufsicht, öffentliche Verwaltung, kritische Infrastruktur — dürfen ihre Kern-Dokumente nicht in fremden Betrieb geben. Wenn Ihre Compliance-Abteilung diese Position bezieht, ist die Entscheidung getroffen: On-Premise. Kein Managed Service, egal wie dediziert.",
          "Für alle anderen ist es eine Kosten- und Kapazitäts-Frage, keine Rechtsfrage.",
        ],
      },
      {
        heading: "Frage 2: Wie viel IT-Ops-Kapazität haben Sie frei?",
        paragraphs: [
          "On-Premise bedeutet: Sie betreiben das System selbst. Updates, Backups, Monitoring, Certificate-Rotation, GPU-Treiber-Pflege. Das ist mit Docker Compose überschaubar, aber es ist Arbeit. Wenn Sie ein IT-Ops-Team mit Kapazität haben, ist das kein Problem — im Gegenteil, es gibt maximale Kontrolle.",
          "Wenn Ihr IT-Team ohnehin am Anschlag ist, drückt Managed Private Cloud die Betriebs-Last aus dem Haus. Wir übernehmen, was uns betrifft: Updates, Monitoring, 24/7-Bereitschaft. Sie behalten die Datenhoheit — die Daten liegen weiterhin in Ihrer dedizierten Instanz, nicht in einer Multi-Tenant-Wolke.",
        ],
      },
      {
        heading: "Frage 3: Wie sieht Ihr Fünf-Jahres-Blick auf TCO aus?",
        paragraphs: [
          "Über fünf Jahre gerechnet ist On-Premise günstiger, wenn Sie das Ops-Team bereits haben. Der Break-Even liegt typischerweise bei Jahr drei — der einmalige Setup-Aufwand amortisiert sich gegen den laufenden Managed-Service-Preis.",
          "Wenn Sie das Ops-Team NICHT haben, dreht sich das Bild: On-Premise heißt dann, dass Sie externe Betreuung einkaufen — was in Summe teurer werden kann als der Managed Service. Die ehrlichste Antwort kommt aus einem konkreten Angebot, nicht aus einer Faustregel.",
        ],
      },
      {
        heading: "Die Frage, die kaum jemand stellt",
        paragraphs: [
          "Was passiert, wenn Sie in drei Jahren wechseln wollen? Von On-Premise zu Managed. Oder umgekehrt.",
          "Bei RecordTailor ist dieser Wechsel eingebaut: dasselbe Produkt, dasselbe Datenformat, dieselben Schnittstellen. Ein Wechsel zwischen den Deployment-Wegen ist ein Ops-Vorgang von ein paar Tagen, kein Migrations-Projekt. Das ist der Grund, warum die Entscheidung heute nicht so schwer wiegen muss, wie es sich anfühlt. Fangen Sie mit dem an, was zu Ihrer aktuellen Situation passt. Wenn sich die Situation ändert, ändern wir den Weg.",
        ],
      },
    ],
  },
  {
    slug: "warum-ihr-dms-nicht-suchen-kann",
    title: "Warum Ihr DMS nicht suchen kann — und was Sie dagegen tun",
    lead: "Ihre Buchhalterin sucht seit Jahren mit Excel, weil das DMS zu langsam ist. Das liegt selten am Volumen. Es liegt am Modell.",
    metaTitle: "Warum Ihr DMS nicht suchen kann — RecordTailor",
    metaDescription:
      "Volltextsuche versus semantische Vektor-Suche: warum klassische DMS-Suche 2026 nicht mehr reicht — und wie eine Hybrid-Suche das ändert.",
    publishedAt: "2026-06-23",
    readingMinutes: 5,
    tags: ["Suche", "Vektor-Semantik", "KI"],
    sections: [
      {
        paragraphs: [
          "Jedes zweite Discovery-Gespräch, das wir mit DMS-Kunden führen, dreht sich am Ende um dieselbe Beobachtung: die Buchhaltung sucht mit Excel. Nicht offiziell, aber verlässlich. Rechnungen, Verträge, Angebote — alles landet in einer Excel-Tabelle, aus der schneller zu finden ist, als aus dem DMS. Das ist nicht komisch, es ist ein Symptom.",
          "Klassische DMS-Suche funktioniert nach demselben Prinzip wie Google im Jahr 2005: Sie tippen Wörter, das System findet Dokumente, in denen diese Wörter vorkommen. Volltextsuche mit Ranking. Das war gut damals. Heute reicht es nicht mehr.",
        ],
      },
      {
        heading: "Das Problem: Menschen suchen nach Bedeutung, nicht nach Wörtern",
        paragraphs: [
          "„Zeig mir alle Verträge, in denen wir zur DSGVO-Löschung nach 30 Tagen verpflichtet sind.\" Klassische Suche findet den Vertrag, der wörtlich „DSGVO-Löschung nach 30 Tagen\" enthält. Sie findet nicht den Vertrag, der „Löschverpflichtung binnen eines Monats\" schreibt. Sie findet auch nicht den Vertrag, der auf § 17 Abs. 1 DSGVO verweist, ohne den Absatz zu zitieren.",
          "Der Sachbearbeiter weiß das nach der dritten fehlgeschlagenen Suche. Ab da wird jede DMS-Suche mit sinkender Erwartung angegangen. Nach einem halben Jahr ist die Excel-Tabelle der offizielle Suchindex.",
        ],
      },
      {
        heading: "Die Lösung: Vektor-Semantik + Volltext gleichzeitig",
        paragraphs: [
          "Semantische Suche (Vektor-Embeddings) versteht Bedeutung. „30 Tage\" und „binnen eines Monats\" landen im Vektorraum an derselben Stelle. Das Modell weiß, dass die zwei Formulierungen dasselbe meinen, weil es Millionen von Texten gesehen hat, in denen sie austauschbar verwendet werden.",
          "Vektor-Suche allein ist nicht genug — sie ist gut bei Bedeutung, aber schwach bei genauen Zahlen, Rechnungsnummern, IBANs. Hybrid-Suche kombiniert Vektor-Semantik mit klassischem Volltext-Ranking in einer Query. Das Ergebnis: der Sachbearbeiter tippt, was er meint, und findet, was er meint — auch wenn er nicht die exakten Worte trifft.",
        ],
      },
      {
        heading: "Warum das erst 2024 möglich wurde",
        paragraphs: [
          "Vektor-Embeddings sind seit fünf Jahren praktisch. Was 2024 dazu kam: leistungsstarke, lokal ausführbare Embedding-Modelle, die Deutsch und Fachvokabular verstehen. Vorher musste man in Cloud-APIs von OpenAI oder Google gehen — mit allen Datenschutz-Konsequenzen. Heute läuft ein E5-Multilingual-Modell auf einer RTX 4090 im eigenen Serverraum und liefert Embeddings, die Ihre Verträge verstehen.",
          "Kombiniert mit einem klassischen BM25-Volltextindex ergibt sich Hybrid-Suche, die für 90 % aller DMS-Anfragen das richtige Ergebnis in der ersten Trefferliste hat. Nicht auf Platz eins immer — aber in den oberen drei fast immer.",
        ],
      },
      {
        heading: "Der Nachweis: probieren Sie es",
        paragraphs: [
          "Man kann Hybrid-Suche nicht durch eine PowerPoint-Folie erklären. Sie fühlt sich anders an. Wir stellen einen 30-minütigen Demo-Slot bereit, in dem Sie ein anonymisiertes Beispiel-Dokument mitbringen. Fragen Sie danach — mit Ihrem eigenen Wortlaut, nicht mit dem des Autors. Wenn RecordTailor es findet, wissen Sie, warum Ihre Buchhaltung Excel benutzt.",
        ],
      },
    ],
  },
];
