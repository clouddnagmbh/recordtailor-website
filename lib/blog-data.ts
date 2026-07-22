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
          "Jedes gewachsene DMS hat Gruppen und Rechte, die in dreizehn Iterationen entstanden sind. Der ursprüngliche Grund, warum die Gruppe „Recht-Freigabe-Sonderfall-2018\“ existiert, ist mit dem damaligen Compliance-Officer in Pension gegangen. Wenn Sie diese Gruppen 1:1 kopieren, tragen Sie das Chaos mit. Wenn Sie sie neu machen, riskieren Sie, dass zwei Sachbearbeiter am Montag nichts mehr sehen können.",
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
          "„Wir behalten die Retention Policies bei\“ ist ein Satz, der in Discovery-Meetings oft fällt und selten hält. Retention-Policies sind DMS-spezifisch — was Alfresco als Aspect ausdrückt, ist in DocuWare eine Storage-Location-Regel, in OpenText ein Records-Management-Container. Die Semantik ist selten 1:1 übertragbar.",
          "Was hilft: Retention Policies vor der Migration in einer plattformneutralen Tabelle festhalten (Dokumentklasse, Aufbewahrungsdauer, Löschtrigger, Legal Hold). Diese Tabelle ist ohnehin für die DSGVO-Dokumentation nützlich und wird nach dem Cutover das neue Regelwerk.",
        ],
      },
      {
        heading: "4. Signatur-Historie ist mehr als eine PDF-Datei",
        paragraphs: [
          "Eine eIDAS-qualifizierte Signatur ist an einen Zertifikatspfad gebunden. Wenn Sie das DMS wechseln, muss die Kette Signatur → Zertifikat → CA → Root weiterhin nachvollziehbar sein. Sonst gilt die Signatur nach dem Cutover als „nicht mehr verifizierbar\“ und Ihre PAdES-B-LTA-Ambition ist futsch.",
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
          "Ein Volltextindex über 5 Millionen Dokumente ist ein paar Terabyte groß und dauert Stunden. Wenn Sie das erst am Cutover-Wochenende starten, riskieren Sie, dass am Montagfrüh die Suche „nichts findet\“ — obwohl das Dokument da ist. Der Nutzer merkt es. Und ruft an.",
          "Was funktioniert: Volltextindex parallel zum Content-Import aufbauen. Am Cutover-Datum ist der Index synchron. Der Suche-Feature-Flag wird umgestellt, sobald die Deckung geprüft ist.",
        ],
      },
      {
        heading: "7. Change-Management: Ihre Sachbearbeiter sind das Nadelöhr, nicht das System",
        paragraphs: [
          "Ein modernes DMS mit KI-Klassifikation ändert die Arbeitsroutine der Sachbearbeiter. Wer bisher fünf Klicks pro Beleg gebraucht hat, macht jetzt zwei. Das klingt gut — und ist bei den ersten fünfzig Belegen auch gut. Beim ersten Beleg, bei dem die KI unsicher ist und der Sachbearbeiter selbst entscheiden muss, taucht das Muster auf: „Aha, die KI kann's also doch nicht.\“ Das ist ein Change-Management-Moment, kein Software-Bug.",
          "Was hilft: transparente Konfidenz-Scores. Der Sachbearbeiter sieht bei jedem Vorschlag, wie sicher die KI ist. Unter 80 % entscheidet der Mensch. Über 80 % geht es automatisch. So bleibt das Vertrauen intakt, weil die KI nicht überredet — sie fragt.",
        ],
      },
      {
        heading: "8. Rollback-Plan — der, den man hoffentlich nie braucht",
        paragraphs: [
          "Am Cutover-Wochenende geht etwas schief. Nicht bei uns, hoffentlich. Aber wenn: Sie brauchen einen Rollback-Plan, der in unter zwei Stunden zurück zum alten DMS führt. Klingt trivial. Ist es nicht.",
          "Der einfache Fall: das alte DMS läuft 30 Tage lang im Read-Only-Modus weiter. Neue Belege gehen ins neue System, alte bleiben abrufbar aus dem alten. Falls ein Rollback nötig ist, wird der Read-Only-Modus aufgehoben und der neue Endpunkt zurück umkonfiguriert. Voraussetzung: Sie haben die Cutover-Reihenfolge so gebaut, dass Rollback tatsächlich möglich ist — kein einmaliger Schema-Break, keine „wir löschen jetzt die alten Daten\“-Schritte am Cutover-Tag.",
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
          "DMS-Systeme sind zwanzig Jahre alt. Die meisten Kernkonzepte — Repository, Metadaten, ACLs, Volltextsuche — waren 2005 bereits ausgereift. Was sich in den letzten zwei Jahren radikal verändert hat, sind die Werkzeuge, mit denen ein DMS Dokumente „verstehen\“ kann. Wer 2026 ein DMS kauft und diese Werkzeuge nicht bekommt, kauft ein Produkt von 2018.",
          "Fünf Fähigkeiten trennen 2026 die Moderne vom Museum:",
        ],
      },
      {
        heading: "1. Klassifikation in unter 30 Sekunden — lokal",
        paragraphs: [
          "Ein Dokument, das reingeht, muss innerhalb einer halben Minute klassifiziert sein, mit Konfidenz-Score und extrahierten Attributen. Nicht in einer externen Cloud, sondern auf einer GPU im eigenen Rechenzentrum. Alles langsamer bedeutet: der Sachbearbeiter wartet, verliert Vertrauen und macht die Arbeit doppelt.",
          "Die 30-Sekunden-Grenze ist keine Marketing-Zahl. Sie ist die Grenze, ab der ein Mensch das Ergebnis noch als „direkt\“ wahrnimmt. Alles darüber ist Batch-Verhalten, und Batch-Verhalten wird ignoriert.",
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
          "„Zeig mir alle Verträge mit einer DSGVO-Löschpflicht nach 30 Tagen\“ ist eine typische Suche. Volltextsuche findet, was das Wort „30 Tage\“ enthält. Sie findet nicht den Vertrag, der „binnen eines Monats\“ schreibt. Vektor-Semantik findet beides.",
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
          "„Zeig mir alle Verträge, in denen wir zur DSGVO-Löschung nach 30 Tagen verpflichtet sind.\“ Klassische Suche findet den Vertrag, der wörtlich „DSGVO-Löschung nach 30 Tagen\“ enthält. Sie findet nicht den Vertrag, der „Löschverpflichtung binnen eines Monats\“ schreibt. Sie findet auch nicht den Vertrag, der auf § 17 Abs. 1 DSGVO verweist, ohne den Absatz zu zitieren.",
          "Der Sachbearbeiter weiß das nach der dritten fehlgeschlagenen Suche. Ab da wird jede DMS-Suche mit sinkender Erwartung angegangen. Nach einem halben Jahr ist die Excel-Tabelle der offizielle Suchindex.",
        ],
      },
      {
        heading: "Die Lösung: Vektor-Semantik + Volltext gleichzeitig",
        paragraphs: [
          "Semantische Suche (Vektor-Embeddings) versteht Bedeutung. „30 Tage\“ und „binnen eines Monats\“ landen im Vektorraum an derselben Stelle. Das Modell weiß, dass die zwei Formulierungen dasselbe meinen, weil es Millionen von Texten gesehen hat, in denen sie austauschbar verwendet werden.",
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
  {
    slug: "ki-agenten-im-dms-2026",
    title: "KI-Agenten im DMS: Was 2026 wirklich geliefert wird — und was Roadmap ist",
    lead: "Agentic AI ist das Wort der Stunde im DMS-Markt. Wer heute konkret Agenten in Produktion hat und wer 2026 Ankündigungs-Slides zeigt — eine ehrliche Bestandsaufnahme.",
    metaTitle: "KI-Agenten im DMS 2026 — Ist-Stand statt Marketing-Slides",
    metaDescription:
      "Welche DMS-Anbieter liefern KI-Agenten heute produktiv aus und welche zeigen Roadmap-Slides? Bestandsaufnahme Juli 2026 mit konkreten Beispielen aus der Praxis.",
    publishedAt: "2026-07-22",
    readingMinutes: 11,
    tags: ["KI-Agenten", "agentic AI", "DMS", "Marktüberblick"],
    sections: [
      {
        paragraphs: [
          "Wer sich Anfang 2026 durch Analyst-Reports und DMS-Anbieter-Slides klickt, könnte den Eindruck bekommen, dass Agentic AI das Thema für die Branche gelöst hat. Gartner meldet, 67 % der Enterprise-IDP-Initiativen evaluieren agentenbasierte Ansätze. DocuWare schreibt in seinen 2026 Tech Trends von Agenten. ELO plant. d.velop kündigt sein agent center in Beta für Q4 an. M-Files erweitert Aino um Agent-Fähigkeiten. Microsoft baut Copilot Agents in SharePoint.",
          "Die Frage, die niemand offen stellt: Welche dieser Agenten laufen heute in der Produktion — und welche sind Ankündigungs-Slides? Wir sind durch die öffentlich zugänglichen Produktseiten, Release Notes und Beta-Programme gegangen. Der Befund ist nüchterner, als das Marketing suggeriert.",
        ],
      },
      {
        heading: "Was macht einen Agenten zu einem Agenten?",
        paragraphs: [
          "Bevor man den Markt vergleicht, braucht es eine Definition. Ein KI-Agent im DMS-Kontext ist nicht dasselbe wie ein Klassifizierer oder eine Extraktion. Ein Agent bekommt einen Auftrag („triagiere den Posteingang“, „prüfe diesen Vertrag gegen unser Muster“, „bereite die Rechnung zur Freigabe vor“), entscheidet über eine Reihe von Zwischenschritten selbst und liefert am Ende eine Aktion mit Begründung ab. Er ist mehr als ein Modellaufruf und weniger als ein autonomer Prozess.",
          "Die Fachliteratur benennt drei Merkmale, die einen Agenten von einem einfachen KI-Feature unterscheiden: Ziel-Orientierung (er verfolgt ein Ergebnis, nicht nur eine Ausgabe), Werkzeug-Nutzung (er kombiniert Suche, Klassifikation, Extraktion, API-Aufrufe zu einem Weg) und Reversibilität (jede Aktion muss durch einen Menschen bewertbar oder rückgängig machbar sein). Wer eines dieser drei Kriterien nicht erfüllt, verkauft KI-Klassifikation unter dem Wort „Agent“ — was legal ist, aber die Bewertung schwieriger macht.",
        ],
      },
      {
        heading: "Wer liefert heute — und wer kündigt an?",
        paragraphs: [
          "Der Wettbewerbsblick, Stand Juli 2026: DocuWare hat KI-Klassifikation produktiv, Agenten stehen als Roadmap-Thema in den Trend-Reports, aber nicht in den Release Notes. ELO liefert das KI-Modul mit Klassifikation und Extraktion, Agenten sind angekündigt. d.velop hat das agent center als Beta für Q4 2026 kommuniziert — konkret evaluierbar wird das dort erst gegen Jahresende. M-Files Aino ist bei RAG und Auto-Metadaten am weitesten und hat begonnen, Aktions-Vorschläge einzubauen; ein voller Agent-Ansatz ist im Umbau.",
          "Microsoft SharePoint mit Copilot Agents ist in der Cloud-Variante produktiv — mit den bekannten DSGVO- und EU-Data-Boundary-Themen, die für viele Mittelstands- und öffentliche Kunden ein Ausschlusskriterium bleiben. Paperless-ngx als OSS-Alternative hat über Community-Tools Ansätze wie paperless-ai, aber keine integrierte Agent-Runtime.",
          "RecordTailor liefert vier Agenten heute produktiv aus: einen Inbox-Agenten für die Triage, einen Compliance-Agenten für die Retention-Bewertung, einen Vertrags-Agenten für Klausel- und Fristprüfung, und einen Rechnungs-Agenten für 3-Way-Match und Freigabe-Vorbereitung. Jede Aktion trägt eine Begründung, eine Konfidenz und die Belegstellen im Quelldokument. Was das Marketing der etablierten Player als Roadmap-Thema führt, ist bei uns Alltag — mit dem offen ausgesprochenen Zusatz, dass uns Zertifikate und Referenzen (ISO 27001, IDW PS 880) fehlen, die die etablierten Player haben.",
        ],
      },
      {
        heading: "Warum das jetzt entscheidet",
        paragraphs: [
          "Das Fenster für „Agentic AI im DMS“ ist offen — geschätzt 12 bis 18 Monate, bis die etablierten Player nachziehen. In diesem Fenster entscheidet nicht der Feature-Katalog, sondern die Kombination aus Feature und Reifegrad. Ein Agent, der heute im Test-Betrieb 30 Minuten Triage pro Tag spart, ist mehr wert als eine Roadmap-Slide über einen Agenten, der Q1 2027 vielleicht in Beta geht.",
          "Der zweite Punkt, den die meisten Analysen unterschätzen: Der EU AI Act macht Erklärbarkeit zur Pflicht. Ein Agent, dessen Aktion ich nicht begründen und in einer Audit-Kette verfolgen kann, ist compliance-technisch ein Problem. Wer 2026 einen Agenten in Produktion nimmt und im Zweifelsfall kein exportierbares Protokoll erstellen kann, riskiert 2027 bei der ersten Prüfung eine unangenehme Diskussion. Wir haben deshalb das Agent-Protokoll von Anfang an so gebaut, dass es EU-AI-Act-tauglich ist.",
        ],
      },
      {
        heading: "Wie man einen Agenten in Produktion evaluiert",
        paragraphs: [
          "Vier Fragen entlarven, was ein Anbieter unter „Agent“ versteht. Erstens: „Zeigen Sie mir die letzte Aktion eines Agenten in Ihrer eigenen Instanz — mit Begründung und Belegen.“ Wenn der Anbieter das nicht innerhalb von zwei Minuten kann, ist der Agent kein Alltagswerkzeug.",
          "Zweitens: „Was passiert, wenn der Agent sich irrt?“ Antwort muss sein: Konfidenz-Gate mit konfigurierbarem Schwellwert, Versionierung als Undo-Mechanismus, und eine Approval-Inbox für alles unterhalb der Schwelle. „Der Agent macht keine Fehler“ ist eine Ausrede, keine Antwort.",
          "Drittens: „Können Sie das Agent-Protokoll für eine EU-AI-Act-Prüfung exportieren?“ Wer hier stockt, hat die Compliance-Dimension nicht ernst genommen.",
          "Viertens: „Läuft der Agent gegen ein lokales LLM oder gegen eine Cloud-API?“ Wenn Cloud: welche Region, welche Verträge, welche Backup-Auftragsverarbeiter. Wenn lokal: welches Modell, welche Hardware-Anforderung, welche Update-Zyklen. „Es läuft in der Cloud, alles ist sicher“ ist keine hinreichende Antwort für regulierte Kunden.",
        ],
      },
      {
        heading: "Was 2027 kommt — und was 2026 zählt",
        paragraphs: [
          "Ende 2026 werden mehrere der heute angekündigten Agent-Produkte in GA gehen. Die Feature-Lücke zwischen den etablierten Playern und den Herausforderern wird sich schließen — bei den Basis-Agenten für Inbox und Rechnungs-Prüfung ganz sicher. Der Vorsprung bleibt dort, wo Reifegrad, Erklärbarkeit und Datenhoheit zusammenkommen: bei lokalen LLMs mit Audit-Chain, bei konfigurierbaren Autonomie-Graden, bei Undo-Mechanismen über echte Versionierung.",
          "Für die konkrete Kaufentscheidung 2026 heißt das: Wer heute anfängt zu evaluieren, kann in 8 bis 12 Wochen eine Agent-gestützte DMS-Pilotphase starten. Wer wartet, bis „der etablierte Anbieter das auch hat“, verschenkt genau das Fenster, in dem die Verbesserung pro eingespartem Sachbearbeiter-Klick am größten ist. Das ist keine Marketing-Aussage; es ist der Zeitwert des Geldes, angewendet auf Produktivität.",
          "Wenn Sie den konkreten Ist-Stand für einen unserer Agenten sehen wollen, schicken Sie uns ein anonymisiertes Sample-Dokument. Wir zeigen live, mit welcher Begründung der Rechnungs-Agent bucht, mit welcher Konfidenz der Vertrags-Agent Klauseln findet und wie das Protokoll aussieht, das Sie dem Prüfer geben würden.",
        ],
      },
    ],
  },
  {
    slug: "eu-ai-act-dokumentenmanagement",
    title: "EU AI Act im Dokumentenmanagement: Pflichten und wie Erklärbarkeit konkret aussieht",
    lead: "Der EU AI Act ist in Kraft. Für DMS-Betreiber mit KI-Funktionen bedeutet das konkrete Dokumentations-, Transparenz- und Governance-Pflichten. Was Sie ab 2026 vorweisen können müssen — und wie ein Beweis dafür aussieht.",
    metaTitle: "EU AI Act & DMS — Erklärbarkeit, Governance, Beweispaket",
    metaDescription:
      "Was der EU AI Act für KI im Dokumentenmanagement fordert und wie ein exportierbares Agent-Protokoll aussieht: Transparenz, Dokumentation, Human Oversight in der Praxis.",
    publishedAt: "2026-07-21",
    readingMinutes: 12,
    tags: ["EU AI Act", "Compliance", "Governance"],
    sections: [
      {
        paragraphs: [
          "Der EU AI Act ist seit August 2024 in Kraft, die konkreten Anwendungspflichten treten gestaffelt in Kraft und erreichen 2026 den Bereich, der DMS-Betreiber betrifft. Wer ein DMS mit KI-Funktionen (Klassifikation, Extraktion, Chat, Agenten) einsetzt, muss ab jetzt Dokumentations-, Transparenz- und Human-Oversight-Anforderungen erfüllen. Die Frage ist nicht mehr ob, sondern wie. Der folgende Text beschreibt, welche Pflichten für gängige DMS-KI-Anwendungen greifen und wie ein konkreter Nachweis aussieht.",
        ],
      },
      {
        heading: "Welche Risikoklasse trifft DMS-KI?",
        paragraphs: [
          "Der EU AI Act klassifiziert KI-Systeme in vier Risikostufen: verboten, hochriskant, transparenzpflichtig und minimal. Reine Klassifikations- und Suchfunktionen im DMS sind in aller Regel keine Hochrisiko-Systeme im Sinne des Anhangs III. Sie fallen aber unter die generellen Transparenzpflichten (Art. 50) — der Nutzer muss wissen, wann KI im Spiel ist.",
          "Agenten, die Entscheidungen vorschlagen oder ausführen (Retention-Löschung, Freigabe-Entscheidung, Vertragsprüfung), werden interessanter. Wo die Entscheidung ein arbeitsrechtlicher, finanzieller oder rechtlicher Effekt für eine Person hat, kann der Hochrisiko-Charakter greifen. Für die Mehrheit der DMS-Anwendungen bleibt es bei Transparenzpflichten — aber die Empfehlung der EU-Kommission ist eindeutig: baut die Governance so, als wäre es Hochrisiko, weil die konkrete Klassifikation im Streitfall kein Anwender-Argument ist.",
        ],
      },
      {
        heading: "Die vier konkreten Pflichten",
        paragraphs: [
          "Erstens: Transparenz gegenüber dem Nutzer. Wenn eine KI-Klassifikation, eine Extraktion oder ein Agenten-Vorschlag auf dem Bildschirm landet, muss der Nutzer erkennen, dass das eine KI-Ausgabe ist. Kleine Icons und Konfidenz-Scores erfüllen das in der Praxis; ein Design, das KI-Ausgaben wie System-Wahrheit aussehen lässt, erfüllt es nicht.",
          "Zweitens: Dokumentation. Für jedes eingesetzte KI-System braucht es eine technische Dokumentation — Zweck, Trainingsdaten (soweit relevant), Modell-Provider, Modell-Version, bekannte Limitationen, Update-Zyklus. Wer ein Cloud-LLM nutzt, muss dokumentieren, welche Anbieter mit welchen Verträgen im Spiel sind. Wer ein lokales LLM nutzt (bei uns Default: Ollama-basiert), dokumentiert Modell, Version und Prüfstand.",
          "Drittens: Human Oversight. Jede KI-Entscheidung muss von einem Menschen prüfbar und übersteuerbar sein. Konkret: Approval-Inbox mit Begründung, Konfidenz-Schwelle, Versionierung als Undo-Mechanismus. Autonomie-Grade („Auto-Apply“) sind erlaubt, müssen aber konfigurierbar und pro Aktionstyp begründet sein.",
          "Viertens: Log-Pflichten. Jede KI-Aktion muss protokolliert und für eine definierte Aufbewahrungsfrist vorgehalten werden. Der Prüfer muss im Nachhinein rekonstruieren können, warum eine Entscheidung so und nicht anders gefallen ist.",
        ],
      },
      {
        heading: "Wie ein Beweis konkret aussieht",
        paragraphs: [
          "Nehmen wir den Fall Rechnungs-Agent: Eine Eingangsrechnung über 8 420 € kommt rein, der Agent extrahiert Beträge, IBAN, Steuersätze, sucht die Bestellung, prüft 3-Way-Match und schlägt die Ablage plus Zwei-Augen-Freigabe vor. Was muss das Protokoll enthalten, damit ein EU-AI-Act-Prüfer zufrieden ist?",
          "Der Kopf des Eintrags enthält Zeitstempel, Tenant-ID, Agent-Definition (Version), das aufgerufene Modell (Name + Version), sowie den Prompt-Template-Hash. Danach folgt die Aktion selbst: welche Klasse wurde erkannt, welche Attribute extrahiert, mit welcher Konfidenz. Anschließend die Begründung in natürlicher Sprache — nicht als Marketing-Text, sondern als der tatsächliche Chain-of-Thought, den der Agent produziert hat. Zum Schluss die Evidence-Zeiger: welche Textstellen im Quelldokument, welche Bestellungs-ID im ERP, welche Kontrolldaten wurden herangezogen.",
          "Der ganze Eintrag wird kryptografisch in die Audit-Hash-Chain verkettet. Wer nachträglich das Log manipuliert, kippt die Kette. Der Export als EU-AI-Act-Protokoll bündelt Einträge zu einem definierten Zeitraum, hängt das Hash-Manifest an und liefert eine PDF, die ein Prüfer außerhalb Ihres Systems eigenständig verifizieren kann.",
        ],
      },
      {
        heading: "Was Sie in einer Prüfung zeigen können müssen",
        paragraphs: [
          "Ein Behördenprüfer stellt in der Praxis drei Fragen. „Wie erkennt der Nutzer, dass KI im Spiel ist?“ — Zeigen Sie das UI mit Konfidenz-Score und KI-Kennzeichnung. „Wie prüfen Sie, dass die KI keine systematischen Fehler macht?“ — Zeigen Sie Ihre Fehler-Metrik pro Belegart und die letzten Fälle, in denen die KI daneben lag. „Können Sie eine konkrete Entscheidung nachweisen?“ — Öffnen Sie das Agent-Protokoll für den Fall.",
          "Wer bei einer dieser drei Fragen improvisiert, hat verloren. Alle drei Fragen sind mit einer sauberen Agent-Runtime + Audit-Chain in unter fünf Minuten beantwortbar. Wer die Governance auf Karteikarten und Excel führt, ist auch nicht illegal — aber der Prüfer verlässt das Meeting mit einem schlechten Bauchgefühl, und das führt in der Regel zu Nachforderungen.",
        ],
      },
      {
        heading: "Was Sie nicht dürfen — auch wenn es funktioniert",
        paragraphs: [
          "Der EU AI Act verbietet einige Praktiken. Für DMS relevant sind zwei: die verdeckte manipulative KI (ein Agent, der Nutzer täuscht) und die soziale Bewertung (Scoring von Personen anhand ihres Verhaltens). Ersteres ist offensichtlich; letzteres ist subtiler. Ein „Mitarbeiter-Performance-Score“, der auf Klassifikationsraten basiert, kann in den Verbotsbereich fallen. Wir raten aktiv davon ab, KPI-Dashboards zu bauen, die Klassifikations-Performance einzelner Sachbearbeiter aggregieren.",
        ],
      },
      {
        heading: "Was das für Ihre nächste DMS-Ausschreibung heißt",
        paragraphs: [
          "Nehmen Sie den EU AI Act als Ausschluss-Kriterium ernst. In die Ausschreibung gehören konkret vier Punkte: Erstens, ein Muster-Protokoll für eine Agent-Aktion (nicht Screenshots — echte JSON- oder PDF-Ausgabe). Zweitens, die Modell-Governance (welche Modelle, welche Update-Zyklen, welche Lieferanten). Drittens, die Human-Oversight-Konfiguration (Konfidenz-Gates, Approval-Wege, Undo). Viertens, die Datenhoheits-Zusicherung (wo läuft das LLM, wer sieht die Prompts).",
          "Wer bei diesen vier Punkten überzeugend antworten kann, hat die Governance ernst genommen. Wer stattdessen mit „das machen wir dann im Projekt“ antwortet, hat sie nicht. Der Aufwand, das nachträglich zu bauen, ist erfahrungsgemäß fünffach höher als das, was ein Anbieter kostet, der es bereits eingebaut hat.",
          "Wenn Sie das Protokoll eines RecordTailor-Agenten für einen anonymisierten Beispiel-Fall sehen wollen, sagen Sie Bescheid. Wir schicken das Muster-PDF; kein Vertragsabschluss nötig.",
        ],
      },
    ],
  },
  {
    slug: "datev-und-dms",
    title: "DATEV & DMS: So kommt der Beleg zum Steuerberater",
    lead: "Steuerberater lesen aus DATEV. Buchhaltungen scannen in ein DMS. Zwischen beiden liegt ein Datei-Format, ein Buchungsstapel und viele Missverständnisse — hier ein Praxis-Leitfaden.",
    metaTitle: "DATEV & DMS — Beleg-Übermittlung sauber gemacht",
    metaDescription:
      "DATEV-Anbindung an ein modernes DMS: CSV heute, DATEVconnect morgen, XRechnung/ZUGFeRD, 3-Way-Match, PDF/A. Ein Praxis-Leitfaden für Buchhaltungen und Kanzleien.",
    publishedAt: "2026-07-20",
    readingMinutes: 10,
    tags: ["DATEV", "Steuerberater", "Buchhaltung", "Interop"],
    sections: [
      {
        paragraphs: [
          "In der Zusammenarbeit zwischen einer Buchhaltung und einem Steuerberater passiert eine seltsame Übersetzung: Belege, die in einem DMS strukturiert abgelegt sind, landen in DATEV — meistens über einen Umweg, der Zeit kostet und Details verliert. Dieser Text erklärt, wie eine saubere DATEV-DMS-Brücke 2026 aussieht: welche Formate praktikabel sind, was heute funktioniert, was in Vorbereitung ist und wo die typischen Fehler liegen.",
        ],
      },
      {
        heading: "Die drei Wege, wie Belege zum Steuerberater kommen",
        paragraphs: [
          "Weg eins: DATEV Unternehmen Online. Der Klassiker. Die Buchhaltung scannt oder exportiert Belege in DATEV UO, der Steuerberater greift zu. Vorteil: DATEV kennt das Format. Nachteil: Die strukturierte Metadaten-Welt des DMS (Lieferant, Betrag, Fälligkeit, Vertragsbezug) wird auf DATEV-Felder abgebildet — und was DATEV UO nicht kennt, geht verloren.",
          "Weg zwei: DATEVconnect (API). Direkter Transfer als Buchungsstapel-Format zwischen DMS und DATEV. Vorteil: strukturierter, weniger manuelle Nacharbeit beim Steuerberater. Nachteil: DATEVconnect-Zulassung braucht Zertifizierungsschritte, die nicht in einer Woche gehen.",
          "Weg drei: DATEV-CSV. Ein Zwischenweg — die Buchhaltung exportiert einen Buchungsstapel als CSV im DATEV-Format, der Steuerberater importiert. Vorteil: heute praktikabel, ohne API-Zulassung. Nachteil: CSV ist textbasiert, kein API-Handshake — Übergabe-Fehler tauchen erst im DATEV-Import auf.",
        ],
      },
      {
        heading: "Was heute in RecordTailor funktioniert",
        paragraphs: [
          "RecordTailor exportiert Belege heute als DATEV-CSV. Der Rechnungs-Agent extrahiert die Attribute (Lieferant, IBAN, Beträge, Steuersätze), matcht sie gegen die Bestellung (3-Way-Match, sofern vorhanden), und der Export erzeugt einen Buchungsstapel im DATEV-CSV-Format. Der Steuerberater importiert das in seine Kanzleisoftware. Für die meisten Buchhaltungen ist das der pragmatische Weg heute.",
          "Was ebenfalls funktioniert: die PDF/A-konforme Ablage der Belege. Für die revisionsrelevante Aufbewahrung ist PDF/A das etablierte Format. Office-Dokumente, die durch die KI klassifiziert wurden, laufen durch eine Konvertierung nach PDF/A und bekommen den revisionsrelevanten Aufbewahrungspfad.",
        ],
      },
      {
        heading: "Was in Vorbereitung ist",
        paragraphs: [
          "DATEVconnect als direkter API-Anschluss ist der nächste Meilenstein. Damit entfällt der CSV-Zwischenschritt und die Bucher können den Stapel direkt an DATEV übergeben. Die Zulassung dafür ist ein mehrstufiger Prozess bei DATEV — wir sind darin. Bis dahin ist CSV die stabile Brücke.",
          "XRechnung und ZUGFeRD als eingehende Formate sind ebenfalls in Vorbereitung. XRechnung ist im öffentlichen Sektor der DE-Standard, ZUGFeRD im B2B verbreitet. Ein Parser, der die strukturierten XML-Anteile direkt in die Belegart-Extraktion einspeist, spart der KI die Volltext-Interpretation und erhöht die Präzision.",
          "Auch das 3-Way-Match zwischen Bestellung, Wareneingang und Rechnung ist heute als Vorschlag umgesetzt (der Rechnungs-Agent zeigt an, dass die drei Belege matchen). Als automatische Buchungs-Vorbereitung mit DATEVconnect-Übergabe steht das im nächsten Meilenstein.",
        ],
      },
      {
        heading: "Fünf typische Fehler in der Praxis",
        paragraphs: [
          "Fehler eins: Der Beleg wird zweimal gescannt. Buchhaltung scannt ins DMS, dann noch einmal in DATEV UO. Content-adressierte Deduplikation im DMS würde beim ersten Scan bereits einen Content-Hash bilden, mit dem der zweite Scan als Duplikat markiert wird — vorausgesetzt, das DMS bekommt beide Ströme.",
          "Fehler zwei: Metadaten gehen verloren. Der Beleg landet mit strukturierten Attributen (Lieferant, Betrag, Vertragsbezug) im DMS und in DATEV nur als PDF. Der Steuerberater tippt die Attribute nach. Vermeidbar über strukturierten Export (CSV, DATEVconnect).",
          "Fehler drei: Die Signatur ist weg. Der Beleg wurde qualifiziert signiert (eIDAS QES), aber die DATEV-CSV-Übergabe transportiert die Signatur nicht mit. Für revisionsrelevante Prüfungen bleibt daher der Verweis auf das DMS-Original als führende Quelle — kein „Copy in DATEV, Delete im DMS“-Muster.",
          "Fehler vier: Skonto verpasst. Der Beleg landet Freitagabend in DATEV UO, der Steuerberater sieht ihn Montag, die Buchung folgt Mittwoch — und die Skonto-Frist läuft am Dienstag ab. Ein Rechnungs-Agent im DMS erkennt die Skonto-Frist direkt bei der Klassifikation und setzt eine entsprechende Deadline im Workflow. Der Sachbearbeiter sieht die Frist auf der Freigabe-Karte.",
          "Fehler fünf: Das Archiv wächst schneller als DATEV kennt. DMS-Bestände werden 10 Jahre aufbewahrt (GoBD-Frist). Wenn die Retention-Policy des DMS und die des Steuerberater-Systems auseinander laufen, gibt es 2028 einen Beleg, den DATEV nicht mehr kennt, aber die GoBD-Prüfung noch will. Retention-Policies müssen konsolidiert werden — der Compliance-Agent im DMS kann das prüfen und melden.",
        ],
      },
      {
        heading: "Für Steuerberater: warum ein modernes DMS bei Mandanten hilft",
        paragraphs: [
          "Steuerberater, die ihre Mandanten in Richtung modernes DMS beraten, profitieren mehrfach. Erstens landet der Beleg strukturierter und schneller — das reduziert Nacharbeit in der Kanzlei. Zweitens ist die Beleg-Historie prüfbar, weil sie in der Audit-Hash-Chain liegt. Drittens wird die Betriebsprüfung durch den GoBD-Modus des Compliance-Agenten erleichtert — er stellt Bundle-Exporte inklusive Hash-Manifest zusammen, das ein Prüfer eigenständig verifiziert.",
          "Für die Kanzlei ist das ein zusätzliches Beratungsprodukt. Wir haben bereits einige Steuerberater, die RecordTailor als „Mandanten-DMS-Empfehlung“ führen. Die Konditionen dafür klären wir in einem 30-Minuten-Gespräch.",
        ],
      },
      {
        heading: "Was Sie heute konkret tun können",
        paragraphs: [
          "Wenn Sie eine Buchhaltung mit DATEV-Anbindung sind: prüfen Sie, ob Ihr DMS DATEV-CSV exportiert. Wenn ja, ist der Schritt zu strukturierter Übergabe klein. Wenn nein, sprechen Sie mit dem Anbieter — CSV ist ein Standard, keine Sonderentwicklung.",
          "Wenn Sie ein Steuerberater sind, der Mandanten ins moderne DMS mitnimmt: fragen Sie nach dem DATEV-Export-Format und nach der Roadmap zu DATEVconnect. Wenn der Anbieter nur PDF-Export kann, ist der Effizienzgewinn begrenzt.",
          "Und wenn Sie ein Muster-Export-CSV sehen wollen, bevor Sie sich entscheiden: sagen Sie Bescheid. Wir schicken einen anonymisierten Buchungsstapel-Export als Beispiel — kein Vertrag nötig, nur zur Sichtprüfung.",
        ],
      },
    ],
  },
  {
    slug: "workflows-in-einem-satz",
    title: "Warum wir Workflows in einem Satz bauen — und keinen Low-Code-Designer",
    lead: "Andere DMS liefern grafische Designer, in denen Sie Kacheln auf ein Canvas ziehen. RecordTailor macht es umgekehrt: Ein Satz erzeugt den Workflow. Warum das kein Rückschritt ist, sondern der UX-Coup 2026.",
    metaTitle: "Plain-Language-Workflows — warum kein Low-Code-Designer",
    metaDescription:
      "Warum RecordTailor Workflows aus einem Satz erzeugt statt einen grafischen Designer zu bauen: Freigaben, Fristen, Eskalation aus validiertem YAML — inklusive Klartext-Rückblick.",
    publishedAt: "2026-07-19",
    readingMinutes: 9,
    tags: ["Workflows", "Plain Language", "UX", "DMS"],
    sections: [
      {
        paragraphs: [
          "Die letzten zwanzig Jahre Workflow-Engines im Enterprise haben ein Werkzeug hervorgebracht, das als Standard gilt: den grafischen Prozess-Designer. Kacheln auf einem Canvas, Pfeile dazwischen, Verzweigungen, Merges. Es sieht gut aus in Sales-Demos. Es hält der Alltagsnutzung selten stand. Dieser Text erklärt, warum wir bei RecordTailor den Designer weggelassen haben — und wie das ohne Feature-Verlust geht.",
        ],
      },
      {
        heading: "Was mit grafischen Designern in der Praxis passiert",
        paragraphs: [
          "In der Sales-Demo ist der Designer der Star. Ein Consultant zieht ein „Approve“-Icon aufs Canvas, verbindet es mit einem „Send Email“-Icon, klickt Speichern. Der Kunde nickt. Alles wirkt einfach.",
          "Sechs Monate später steht in der Prozess-Abteilung eine Excel-Tabelle mit 47 Workflow-Definitionen, die jemand entworfen hat, den es nicht mehr gibt. Zwei Workflows machen fast dasselbe. Einer davon hat eine Escalation-Regel, die ins Leere läuft, weil der Zielempfänger seit letztem Jahr in einer anderen Abteilung sitzt. Ein dritter ist deaktiviert, weil er in einer alten Version funktioniert hat und nach dem Upgrade nicht mehr — aber niemand traut sich, ihn zu löschen.",
          "Der Grund ist strukturell: Ein grafischer Designer ist ein Autoren-Werkzeug, kein Lese-Werkzeug. Was auf dem Canvas als schöne Anordnung aussieht, ist als Text schwer zusammenzufassen. Die Klartext-Prüfung eines Workflows („macht das noch, was wir wollten?“) ist im Designer nur mit Klick-Marathon möglich.",
        ],
      },
      {
        heading: "Was wir stattdessen tun",
        paragraphs: [
          "Sie schreiben einen Satz. „Eingehende Rechnungen über 5.000 € gehen an die Fachabteilung zur Prüfung, danach an die Geschäftsführung zur Freigabe, Skonto-Frist minus zwei Tage als Deadline.“ RecordTailor parst diesen Satz und erzeugt daraus ein validiertes Workflow-YAML. Danach übersetzt es das YAML zurück in Klartext und zeigt Ihnen: „Ich habe verstanden — Rechnungen mit Betrag > 5000 EUR, Schritt 1: approve durch Rolle Fachabteilung, Schritt 2: approve durch Rolle Geschäftsführung, Deadline: Skontofrist minus 2 Werktage.“",
          "Sie prüfen den Klartext und geben frei. Der Workflow ist ab dann produktiv. Kein Canvas, keine Kacheln, keine Consultant-Session.",
        ],
      },
      {
        heading: "Warum das kein Feature-Verzicht ist",
        paragraphs: [
          "Der Einwand lautet: „Ein Satz kann nicht alles ausdrücken, was ein komplexer Prozess braucht.“ Stimmt und stimmt nicht.",
          "Stimmt: Für einen Prozess mit 20 Verzweigungen, drei parallelen Zweigen und einer nachgelagerten Konsolidierung wird der Satz lang. In der Praxis sehen wir das aber selten — die meisten Genehmigungs-, Prüf- und Signatur-Prozesse in DMS-Kontexten haben zwei bis fünf Schritte und eine Verzweigung. Für die 90 % der Fälle reicht ein Satz.",
          "Stimmt nicht: Auch komplexe Prozesse lassen sich in mehreren Sätzen ausdrücken. Die generierte YAML-Definition ist von Zod validiert und bildet die Kern-Konstrukte ab: approve, review, sign, notify, plus Kontrollstrukturen für Vier-Augen-Prinzip, Fristen, Eskalation und bedingte Verzweigung. Wer die YAML-Definition direkt schreiben will, kann das — der Plain-Language-Weg ist Convenience, nicht Zwang.",
        ],
      },
      {
        heading: "Der wichtige Nebeneffekt: Reviewbarkeit",
        paragraphs: [
          "Ein Workflow als Text-Definition ist reviewbar. Sie können ihn in eine Pull-Request-Diskussion einbetten, historische Änderungen als Diff sehen, per Code-Search finden. Ein Workflow als grafische Definition ist all das nicht — er ist ein Screenshot, im Zweifel mit einer Legende darunter, die ein anderer aktuell halten müsste.",
          "Workflow-Definitionen liegen in RecordTailor im Repository und nutzen dasselbe Git-Modell wie alle anderen Dokumente. Sie können eine Variante branchen, testen, mergen, zurückrollen — ohne die produktive Version zu stören. Das ist der Punkt, an dem Workflows aufhören, Schamanentum zu sein, und anfangen, wie Software behandelt zu werden.",
        ],
      },
      {
        heading: "KI entwirft, sie führt nicht aus",
        paragraphs: [
          "Ein zentraler Design-Punkt: Die KI hilft, den Workflow zu entwerfen. Sie führt ihn nicht frei aus. Die Ausführungs-Engine bleibt regelbasiert, deterministisch, auditiert. Das ist das Compliance-Argument für KI-nahe Workflows — der Prozess selbst ist beweisbar, KI sitzt an den Rändern (Entwurf, Vorschlag für Änderungen, Copilot für stockende Instanzen).",
          "Konkret heißt das: Wenn ein Agent im Workflow als Teilnehmer auftritt (Beispiel: Rechnungs-Agent führt den 3-Way-Match durch), landet seine Aktion als `agent_action` in derselben Struktur wie eine menschliche Freigabe — mit Begründung, Konfidenz, Belegen. Der Workflow selbst weiß nicht, ob der Schritt von einem Menschen oder einem Agenten erledigt wurde; die Governance-Frage stellt sich beim Agent-Auftritt selbst, nicht in der Workflow-Definition.",
        ],
      },
      {
        heading: "Was ein Nutzer beim ersten Mal erlebt",
        paragraphs: [
          "Wir haben die Plain-Language-Autoren-UX mit einer Handvoll Buchhaltungen getestet. Der überraschendste Effekt: die Autor:innen schreiben klarere Prozesse als vorher. Der Grund ist einfach — der Satz zwingt zur Klärung. „Wer freigibt, in welcher Reihenfolge, bis wann?“ — wenn die Autorin das nicht in einem Satz sagen kann, ist der Prozess nicht klar genug für die Realität.",
          "Der Klartext-Rückblick vor Freigabe hat einen zweiten Effekt: Auch Nicht-Autor:innen können den Workflow verstehen. In der Praxis heißt das, dass die Compliance-Kollegin nachträglich einen Workflow lesen kann, ohne Consultant-Übersetzung. Das war mit dem grafischen Designer nur mit Aufwand möglich.",
        ],
      },
      {
        heading: "Was Sie sehen sollten, bevor Sie das für Ihre Prozesse einschätzen",
        paragraphs: [
          "Ein Text erklärt Plain-Language-Workflows nur bedingt. Was hilft: eine 20-Minuten-Session, in der Sie einen Ihrer typischen Prozesse in einem Satz beschreiben und wir Ihnen die generierte Definition plus Klartext-Rückblick zeigen. Sie merken innerhalb der Session, ob der Ansatz für Ihre Prozessvielfalt trägt oder nicht.",
          "Der ehrliche Zusatz: Für Prozesse mit vielen parallelen Zweigen (typisch in großen Fertigungsketten) ist ein grafischer Designer weiter das bessere Werkzeug. Wir sagen Ihnen das dann. Für die typischen DMS-Workflows — Rechnungsfreigabe, Vertragsprüfung, Personalakten-Freigabe, Aktennotizen mit Zwei-Augen-Prinzip — ist der Ein-Satz-Weg schneller und weniger fehleranfällig.",
        ],
      },
    ],
  },
];
