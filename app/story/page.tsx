import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { TailorFamilySection } from "@/components/tailor-family";
import { DICTS } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n";

export async function generateMetadata() {
  const l = await getLocale();
  return {
    title: "Story",
    description: DICTS[l]["story.meta.desc"],
    alternates: { canonical: "/story" },
  };
}

export default async function StoryPage() {
  const l = await getLocale();
  return l === "en" ? <StoryEN /> : <StoryDE />;
}

/* ============================================================
   DE
   ============================================================ */
function StoryDE() {
  return (
    <div>
      <article className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          Wie das anfing
        </div>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          Every life counts. Und irgendwann: every record measures.
        </h1>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/85">
          <p>
            Ich bin kein Dokumenten-Mensch. Ich habe zwei Berufe erlernt,
            in denen es keine 99,9 % gibt: Linienpilot bei{" "}
            <strong>Austrian Airlines</strong> und Fluglotse bei{" "}
            <strong>Austro Control</strong>. Die Aufnahmetests für beide
            gehören zu den <strong>schwersten der Welt</strong> — der
            DLR-Psycho-Test in Hamburg mit seiner Durchfallquote nördlich
            von <strong>98 %</strong>, das mehrtägige Assessment bei
            Austro Control, in dem Menschen erfahren, wie belastbar sie
            wirklich sind, oft zum ersten Mal in ihrem Leben. Zehntausende
            bewerben sich, ein paar Dutzend kommen durch. Ich habe beide
            bestanden.
          </p>
          <p>
            Bei MENSA bin ich obendrein — was, wenn ich ehrlich bin,
            weniger sagt als der Cockpit-Test. IQ misst, wie{" "}
            <em>schnell</em> jemand denkt. Der Cockpit-Test misst, wie{" "}
            <em>ruhig</em> jemand bleibt, wenn die Anzeige rechts oben
            schon fünf Sekunden lang etwas Falsches meldet und man es
            als Erster merken muss. In der Fliegerei ist das zweite die
            Größe, die zählt. Und in beiden Berufen überstrahlt ein
            Prinzip alles andere: es zählt jedes Leben. Every life counts.
            Nicht 999 von 1 000. <strong className="font-serif text-2xl not-italic text-gold sm:text-3xl">Alle.</strong>
          </p>

          <p>
            Wenn Sie wissen wollen, ob das eine Berufs-Pose oder ein
            Betriebssystem ist, ein kleines Detail: als ich im{" "}
            <strong>Herbst 2025 nach dreißig Jahren Pause wieder mit
            Tennis begonnen</strong> habe, habe ich mir keinen
            Vereinstrainer aus dem Nachbardorf gesucht. Ich habe einen
            gefunden, der jahrzehntelang{" "}
            <strong>ATP-Top-10-Spieler</strong> betreut hat. Nicht, weil
            ich vorhabe, auf die Tour zurückzukehren. Sondern weil ich,
            wenn ich etwas ernst nehme, wissen will, wo mein Deckel
            wirklich ist — nicht, wo ihn ein durchschnittlicher Trainer
            vermuten würde. <strong>Business oder Privatleben:
            dieselbe Haltung.</strong>
          </p>

          <p>
            Diese Prägung geht nicht weg, auch wenn man das Ruder abgibt.
            Wenn man Jahre damit verbringt, im Cockpit oder im Tower jeden
            Handgriff auf Wiederholbarkeit, jedes Verfahren auf
            Nachvollziehbarkeit und jedes Ergebnis auf Vollständigkeit zu
            prüfen, dann kann man es nicht mehr abschalten, wenn man in
            ein anderes Feld wechselt. Man schaut auf jedes System und
            misst es: <em>bringt es 100 %? Oder nur „meistens"?</em>
          </p>
        </div>

        <CloudDnaOriginBlock />

        <div className="mt-14 space-y-6 text-base leading-relaxed text-foreground/85">
          <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight">
            Zehn Jahre Aktenordner. Und dann ein Satz.
          </h2>

          <p>
            In diesen zehn Jahren habe ich mit CloudDNA in einer Ecke
            gearbeitet, die man von außen nicht sieht: SAP-Integrationen,
            Dokumentenströme, Archive. Wir haben in jedem größeren Projekt
            dasselbe Muster gefunden. Man beginnt mit einer Folie in einer
            PowerPoint, die zeigt, wie die Belege durchs Haus wandern. SAP
            liest das Papier, ein OCR-Server drückt es in ein
            Archiv-System, ein Sachbearbeiter freigibt, das Archiv verlinkt
            es zurück ins SAP. Auf der Folie sieht das aus wie eine
            Autobahn. In der Realität ist es ein Feldweg, der bei jedem
            zweiten Kilometer in ein Wartezimmer mündet.
          </p>

          <p>
            Ich habe Kunden gesehen, die für ihr DMS mehr Lizenzgebühren
            zahlten als für ihr HR-System. Ich habe Kunden gesehen, die
            eine eigene Vollzeitstelle nur dafür geschaffen hatten, dass
            jemand die Metadaten der eingescannten Belege händisch
            korrigiert. Ich habe einen Vorstand einer regionalen
            Genossenschaft kennengelernt, der zu mir sagte:
          </p>

          <blockquote className="border-l-2 border-gold py-1 pl-5 font-serif text-xl italic leading-relaxed">
            „Wir zahlen einen sechsstelligen Betrag im Jahr für ein
            Archiv, das unsere Buchhalterin bittet, mit Excel zu suchen,
            weil dort die Rechnungen schneller zu finden sind."
          </blockquote>

          <p>
            Für jemanden aus dem Cockpit ist das die Sorte Satz, bei dem
            das Prinzip greift. Das ist nicht 99,9 %. Das ist nicht einmal
            50 %. Das ist ein System, das seinen eigenen Zweck verfehlt
            und dafür bezahlt wird. Man kann das nicht wegdenken, wenn
            man gelernt hat, jedes Verfahren zu prüfen, bis es passt.
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            Der Feldweg wird zur Autobahn — mit KI.
          </h2>

          <p>
            2024 wurde etwas möglich, das vorher nicht möglich war. Nicht
            in der Marketing-Definition von KI, sondern in der
            handfesten: ein lokal laufendes Modell, das ein Rechnungs-PDF
            anschaut und in Sekunden weiß, was es ist. IBAN, Betrag,
            Vertragsbezug, Fälligkeit. Nicht aus einer Cloud-Blackbox —
            auf einer GPU, die im Serverraum unseres Kunden steht.
          </p>

          <p>
            Ich habe zuerst ein Experiment gebaut, für einen einzelnen
            Kunden. Ein kleines Skript, das den Scan-Ordner beobachtet
            und den DMS-Import mit Klassifikations-Vorschlägen füttert. Am
            zweiten Tag hat die Buchhalterin mich angerufen: „Kann das
            Ding auch die Verträge finden, in denen wir uns zu einer
            Sammelrechnung verpflichtet haben?" Am dritten Tag: „Und die
            Verträge, wo Kündigungsfristen kurz vor Ablauf sind?"
          </p>

          <p>
            Ich habe verstanden, dass ich nicht mehr am Rand des DMS
            arbeitete. Ich baute gerade das DMS. Nur ohne die
            Legacy-Ballast der Vor-KI-Ära, die kein Anbieter mehr loswird
            — Fat-Clients, TWAIN-Treiber, Lizenzmodelle nach User und
            Modul, Cloud-Zwang.
          </p>
        </div>

        <TailorFamilyPivotBlock siteName="RecordTailor" />

        <div className="mt-14 space-y-6 text-base leading-relaxed text-foreground/85">
          <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight">
            Every record measures.
          </h2>

          <p>
            Der Claim ist kein Wortspiel. Er ist die direkte Übersetzung
            dessen, was man aus der Aviation mitnimmt, ins DMS. Every
            life counts wird zu <em>every record measures</em>: jedes
            Dokument zählt, jedes Dokument ist messbar, jedes Dokument
            gehört gefunden — nicht 999 von 1 000. <strong className="font-serif text-2xl not-italic text-gold sm:text-3xl">Alle.</strong>
          </p>

          <p>
            Wir bauen RecordTailor so, wie ein Fluglotse einen
            Verkehrssektor räumt: ohne blinde Flecken, mit prüfbaren
            Verfahren, mit einer Hash-Chain über jede Entscheidung. Und
            wir liefern es so aus, wie eine Cockpit-Crew übergibt: mit
            einer klaren Checkliste, ohne offene Enden.
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            Wie's weitergeht.
          </h2>

          <p>
            Wir liefern RecordTailor als Produkt — wenn Sie Ihren
            Kubernetes-Cluster mögen, betreiben Sie es selbst. Und wir
            betreiben es als Managed Service — wenn Sie lieber schlafen
            möchten und uns die Nacht überlassen. Zwei Wege, ein Produkt.
            Nichts davon geht in irgendeine Multi-Tenant-Cloud, die auch
            Ihr Wettbewerber benutzt.
          </p>

          <p>
            Wenn Sie ein Dokument haben, das Sie nicht mehr finden —
            schicken Sie es uns. Wir zeigen Ihnen in einer halben Stunde,
            was RecordTailor damit macht. Und wenn wir nicht passen,
            sagen wir es. Ehrlich. Wie im Tower.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-cream shadow-soft hover:bg-ink-soft"
          >
            30 Minuten mit uns reden
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/produkt"
            className="inline-flex items-center gap-2 rounded-xl border border-ink/20 px-5 py-3 text-sm font-medium hover:bg-surface-muted"
          >
            Produkt-Übersicht
          </Link>
        </div>
      </article>

      <TailorFamilySection currentSlug="recordtailor" />
    </div>
  );
}

/* ------------------------------------------------------------
   CloudDNA-Origin — kanonisch, wie auf allen Tailor-Websites.
   „Zehn Jahre, ein Fischlokal, eine Umbenennung"
   ------------------------------------------------------------ */
function CloudDnaOriginBlock() {
  return (
    <section className="mt-14 space-y-5 leading-relaxed">
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
        Zehn Jahre, ein Fischlokal, eine Umbenennung
      </div>
      <h2 className="font-serif text-2xl font-semibold leading-tight sm:text-3xl">
        Wie aus KSIC die CloudDNA wurde.
      </h2>
      <p>
        Ich habe die CloudDNA vor zehn Jahren gegründet — ursprünglich
        nicht unter diesem Namen. Ich kam damals von SAP, wo ich Jahre
        in einem der größten Softwarekonzerne der Welt verbracht hatte.
        Ein sicherer Hafen. Genau der Ort, den man nicht verlässt, wenn
        man Kinder, ein Haus und eine ernste Miene hat. Ich habe ihn
        trotzdem verlassen.
      </p>
      <p>
        Am Anfang stand ein sperriger Name: die{" "}
        <strong>KSIC GmbH</strong> — Koch Security, Integration and Cloud
        Consulting. Vier Buchstaben, die niemand aussprechen konnte, mit
        einer Beschreibung, die alles und nichts sagte. Ich habe schnell
        gemerkt: das war die zweite Sache, die man an einem SAP-Ausstieg
        nicht macht — sich einen Namen geben, der klingt wie ein
        Compliance-Standard.
      </p>
      <p>
        Die Rettung kam bei einem Abendessen — obwohl ich das damals
        noch nicht wusste.{" "}
        <strong>Blankenese, Hamburg, ein Fischlokal an der Elbe.</strong>{" "}
        Ich war zu Besuch bei einem alten SAP-Kollegen —{" "}
        <strong>Jörg</strong>, einer dieser Menschen, die man einen
        SAP-Guru nennt, ohne dass es kitschig klingt. Mit dabei:{" "}
        <strong>Daniel</strong>, damals mein erster Mitarbeiter, für den
        es die allererste Dienstreise war. Am Fischtisch saß er nicht —
        wir zwei alten Hasen wollten in Ruhe reden. (Daniel, falls du
        das jemals liest: den Steinbutt tut mir bis heute leid.)
      </p>
      <p>
        Wir tranken einen weißen Burgunder, ich versuchte zum dritten
        Mal, meinen Firmennamen zu erklären. Jörg unterbrach mich, hob
        das Glas und sagte einen einzigen Satz:{" "}
        <em>„Martin, du hast die Cloud in deiner DNA."</em>
      </p>
      <p>Kein Vortrag. Keine Analyse. Ein Satz.</p>
      <p>
        Am nächsten Morgen bin ich in einem Hamburger Hotelzimmer
        aufgestanden, habe aus dem Fenster geschaut und gedacht:{" "}
        <strong>CloudDNA — das wäre ein geiler Name.</strong> Zwei
        Wochen später hieß die KSIC GmbH nicht mehr KSIC. Und Daniel hat
        seither noch viele Dienstreisen gemacht, allerdings meistens mit
        am Tisch.
      </p>
      <p className="border-l-2 border-gold pl-4 italic text-muted-foreground">
        Chapeau, Jörg. Ohne diesen einen Satz an diesem einen Tisch
        säßen wir hier vermutlich immer noch als KSIC — und du müsstest
        beim nächsten Wiedersehen wieder erklären, was die vier
        Buchstaben eigentlich bedeuten. Ein Abendessen, das sich
        gelohnt hat. Ein Kollege, den man behalten sollte.
      </p>
      <p>
        Was blieb, sind drei Dinge, die den Betrieb seit dem ersten Tag
        prägen — und mich als Menschen sowieso:
      </p>
      <ul className="ml-4 list-disc space-y-2 marker:text-gold">
        <li>
          Die Liebe zu <strong>gutem Essen und aufrichtigem Wein</strong>.
          Wichtige Entscheidungen fallen bei uns nicht in
          Konferenzräumen. Sie fallen an Tischen mit gutem Licht.
        </li>
        <li>
          Das <strong>Reisen</strong> — mit Kunden in ganz Europa, mit
          dem eigenen Team in Regionen, aus denen wir Talente holen oder
          in denen wir Kunden begleiten. Jede zweite Reise wird zur
          Weinreise, ob wir es geplant haben oder nicht.
        </li>
        <li>
          Das <strong>Südburgenland als Basis</strong> — die
          Thermenregion, die Weinregion. Nicht Wien, nicht Berlin, nicht
          San Francisco. Wir sitzen dort, wo unser Team lebt, und
          schöpfen aus zwei Talentschmieden, die man auf keiner
          Weltkarte findet: der <strong>HTL Pinkafeld</strong> und der{" "}
          <strong>FH Burgenland</strong>. Ohne die beiden gäbe es diese
          Firma nicht.
        </li>
      </ul>
      <p>
        Angefangen haben wir in einem winzigen Büro in{" "}
        <strong>Oberwart</strong>. Heute sitzen wir in der{" "}
        <strong>ehemaligen Raiffeisenbank in Loipersdorf</strong>, direkt
        in der Thermenregion. Ein Gebäude, das schon einmal einen
        anderen Bezug zum Himmel hatte, wenn man so will: nach oben. Von
        bescheidenen Anfängen zu einem Ort mit etwas mehr Platz — das
        ist Fortschritt.
      </p>
      <p>
        Aus dem Duo mit Daniel ist inzwischen ein Team von{" "}
        <strong>mehr als zwanzig Menschen</strong> geworden. Wir haben{" "}
        <strong>siebzehn Bücher bei SAP Press</strong> veröffentlicht —
        bunt gemischt, aber immer aus der Praxis, nie aus dem Marketing.
        Das ist die Sorte Kilometerstand, die man nicht ausdenken kann.
      </p>
      <p>
        Unser Motto — <strong>„We deliver"</strong> — meint zwei Dinge:
        Kundenaufträge, und ein Glas Wein im richtigen Moment. Wir sehen
        uns als modernes, agiles SAP-Startup. Wir sind nicht die Titanic
        der Beratungshäuser, wir sind ein <strong>Regattaboot</strong>.
        Schneller Kurswechsel, kleiner Wendekreis, keine drei Wochen
        Meeting-Marathon, bis eine Entscheidung fällt.
      </p>
      <p className="pt-1">
        <em>The Sky is the Limit.</em> Und ja — die Cloud ist manchmal
        wolkig. Aber genau dafür haben wir sie ja in den Genen.
      </p>
    </section>
  );
}

/* ------------------------------------------------------------
   Tailor-Family-Pivot — kanonisch, wie auf allen Tailor-Websites.
   „Wir haben uns neu erfunden. Weil die KI uns dazu gezwungen hat."
   ------------------------------------------------------------ */
function TailorFamilyPivotBlock({ siteName }: { siteName: string }) {
  return (
    <section className="mt-14 rounded-3xl border border-border bg-surface-muted p-8 sm:p-10">
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
        Warum überhaupt eine Tailor-Familie
      </div>
      <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
        Wir haben uns neu erfunden. Weil die KI uns dazu gezwungen hat.
      </h2>
      <div className="mt-6 space-y-5 text-base leading-relaxed">
        <p>
          Ich habe die CloudDNA aufgebaut, um für Konzerne
          SAP-Integrationen zu bauen — schwere Software, in Monaten
          getaktet, mit Angeboten in sechsstelliger Höhe. In dieser Welt
          war <em>Individualsoftware</em> ein rotes Tuch. Für uns. Für
          unsere Kunden. Für alle. Man mied sie wie der Teufel das
          Weihwasser: zu teuer, zu langsam, zu riskant. Standard-Software
          mit hundert Kompromissen galt als das Vernünftige.
        </p>
        <p>Bis 2023.</p>
        <p>
          Als ich zum ersten Mal ernsthaft mit Sprachmodellen gearbeitet
          habe, wurde mir klar: das ist keine graduelle Verbesserung.
          Das ist der Umbruch, der unser Handwerk umschreibt. Und für
          die Softwarehäuser — die Konzern-Berater, die SAP-Schmieden,
          die Nischen-Werkstätten — eine echte Bedrohung. Nicht in fünf
          Jahren. In eineinhalb.
        </p>
        <p>
          Ich habe zwei Dinge daraus gemacht. Erstens: ich habe mich
          selbst hingesetzt und Software gebaut — nicht, weil ich das
          besser kann als meine Leute, sondern weil ich verstehen
          wollte, wie sich unser Beruf verändert. Und weil ich glaube,
          dass man seinem Team nicht mit einer PowerPoint erklären kann,
          wie KI-gestützte Entwicklung funktioniert. Man muss es
          vorleben, nachts, am eigenen Editor, mit denselben Werkzeugen,
          die man ihnen empfiehlt.
        </p>
        <p>
          Zweitens: ich habe die Erkenntnis genommen und daraus eine
          Produktlinie gemacht. Denn die Kosten-Kurve hat sich
          verschoben. Was früher drei Monate und ein sechsstelliger
          Betrag war, geht heute in zwei Wochen. Nicht, weil
          Programmierer plötzlich zaubern. Sondern weil sie mit
          Copiloten arbeiten, die die Fleißarbeit übernehmen — und die
          Programmierer werden dadurch wieder das, was sie eigentlich
          sein sollten: Handwerker mit Kopf, nicht Tipper mit Zeitdruck.
        </p>
        <p>
          <strong>
            Individualsoftware ist unter diesen Bedingungen kein Luxus
            mehr. Sie ist das Vernünftigste, was ein Softwarehaus einem
            Kunden anbieten kann.
          </strong>
        </p>
        <p>
          Statt nur darüber zu reden, wollte ich es meinen Leuten
          vorleben. Also habe ich Domänen ausgesucht, die ich gut genug
          kenne — oder in denen ich Freunde habe, die mir jede Woche das
          Problem erklären, bis es sitzt — um sie ehrlich zu bauen:
        </p>
        <ul className="ml-4 list-disc space-y-2 marker:text-gold">
          <li>
            <strong>TaxTailor</strong> — für Steuerkanzleien, weil ein
            Freund mir bei einem Glas Wein von seinem
            Windows-Terminal-Server erzählt hat.
          </li>
          <li>
            <strong>DineTailor</strong> — für die Gastronomie, weil ich
            seit Jahren an fremden Tischen sitze und Champagner an
            Wirte verkaufe.
          </li>
          <li>
            <strong>StayTailor</strong> — für Hotellerie, weil die
            Thermenregion Loipersdorf voller Betriebe steckt, die sich
            unter dem Konditionen-Diktat der Portale ducken.
          </li>
          <li>
            <strong>MeetingTailor</strong> — für Sitzungen und Gremien,
            weil in meinem Freundeskreis Stiftungsräte, Gemeinderäte und
            Vereinsvorstände immer wieder dieselbe Nachtszene
            beschreiben.
          </li>
          <li>
            <strong>DocumentTailor</strong> — für SAP-Häuser, weil ich
            selbst fünfzehn Jahre lang Formulare auf den SAP Adobe
            Document Services gebaut habe und die Nachfolgefrage nicht
            länger unbeantwortet lassen wollte.
          </li>
          <li>
            <strong>RecordTailor</strong> — für alle, die ein DMS
            brauchen, das nicht nur speichert, sondern liest. Weil ich
            zu oft am Tisch gesessen bin, an dem eine Buchhalterin
            heimlich Excel öffnet, weil das DMS zu langsam ist.
          </li>
        </ul>
        <p>
          Maßgeschneiderte Werkzeuge für Branchen, die von generischen
          Cloud-Portalen aus den USA seit Jahren schlecht bedient
          werden. Die CloudDNA ist deshalb kein SAP-Zulieferer mehr —
          sie ist ein Werkstattbetrieb mit einer wachsenden
          Produktlinie. Wirtschaftlich riskanter. Menschlich das
          Ehrlichste, was wir tun konnten.
        </p>
        <p className="pt-2">
          Wenn Sie {siteName} überzeugt, ist das der Grund.
        </p>
        <p className="pt-4 text-sm text-muted-foreground">
          Die Schwester-Werkstätten:{" "}
          <a className="text-gold underline-offset-4 hover:underline" href="https://taxtailor.at">taxtailor.at</a>{" "}
          ·{" "}
          <a className="text-gold underline-offset-4 hover:underline" href="https://dinetailor.com">dinetailor.com</a>{" "}
          ·{" "}
          <a className="text-gold underline-offset-4 hover:underline" href="https://staytailor.com">staytailor.com</a>{" "}
          ·{" "}
          <a className="text-gold underline-offset-4 hover:underline" href="https://www.meetingtailor.com">meetingtailor.com</a>{" "}
          ·{" "}
          <a className="text-gold underline-offset-4 hover:underline" href="https://documenttailor.com">documenttailor.com</a>
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   EN
   ============================================================ */
function StoryEN() {
  return (
    <div>
      <article className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          How this began
        </div>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          Every life counts. Eventually: every record measures.
        </h1>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/85">
          <p>
            I'm not a document person. I trained in two professions where
            99.9 % doesn't exist: airline pilot with{" "}
            <strong>Austrian Airlines</strong> and air traffic controller
            with <strong>Austro Control</strong>. The selection tests for
            both are among the{" "}
            <strong>toughest anywhere in the world</strong> — the DLR
            psychometric assessment in Hamburg with its failure rate north
            of <strong>98 %</strong>, and the multi-day Austro Control
            assessment where people find out how resilient they really
            are, often for the first time in their lives. Tens of
            thousands apply, a few dozen make it through. I made it
            through both.
          </p>
          <p>
            I'm also a MENSA member — which, if I'm honest, says less
            than the cockpit test. IQ measures how <em>fast</em> you
            think. The cockpit test measures how <em>calm</em> you stay
            when the indicator top-right has been showing something
            wrong for five seconds and you have to be the first to
            notice. In aviation, the second is the quality that matters.
            And in both professions one principle overshadows everything
            else: every life counts. Not 999 out of 1 000.{" "}
            <strong className="font-serif text-2xl not-italic text-gold sm:text-3xl">All of them.</strong>
          </p>

          <p>
            If you want to know whether that's professional posture or
            operating system, one small detail: when I{" "}
            <strong>picked up tennis again in autumn 2025 after a
            thirty-year break</strong>, I didn't look for the local
            club coach. I found one who had spent decades working with{" "}
            <strong>ATP top-10 players</strong>. Not because I plan to
            return to the tour. Because when I take something
            seriously, I want to know where my ceiling really sits —
            not where an average coach would guess it.{" "}
            <strong>Business or private life: same posture.</strong>
          </p>

          <p>
            That imprint doesn't leave you when you hand over the yoke.
            If you've spent years — in the cockpit or in the tower —
            checking every action for repeatability, every procedure for
            traceability, every outcome for completeness, you cannot
            switch it off when you move into a different field. You look
            at every system and measure it: <em>does it deliver 100 %?
            Or only „most of the time"?</em>
          </p>
        </div>

        <CloudDnaOriginBlockEN />

        <div className="mt-14 space-y-6 text-base leading-relaxed text-foreground/85">
          <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight">
            Ten years of filing cabinets. Then one sentence.
          </h2>

          <p>
            For those ten years I worked with CloudDNA in a corner
            nobody sees from the outside: SAP integrations, document
            flows, archives. In every larger project we found the same
            pattern. You start with a slide showing how documents travel
            through the house. SAP reads the paper, an OCR server pushes
            it into an archive, a clerk approves, the archive links back
            to SAP. On the slide it looks like a motorway. In reality
            it's a country road that passes a waiting room every second
            kilometre.
          </p>

          <p>
            I've seen customers pay more in annual license fees for
            their DMS than for their HR system. I've seen customers
            create a dedicated full-time position just to manually
            correct metadata on scanned documents. I met a board member
            of a regional cooperative who told me:
          </p>

          <blockquote className="border-l-2 border-gold py-1 pl-5 font-serif text-xl italic leading-relaxed">
            „We pay a six-figure sum a year for an archive that our
            bookkeeper asks to search in Excel, because that's where the
            invoices are actually findable."
          </blockquote>

          <p>
            For someone from the cockpit, that's the kind of sentence
            the principle grips onto. That isn't 99.9 %. That isn't
            even 50 %. That's a system paid to fail at its own purpose.
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            The country road turns motorway — with AI.
          </h2>

          <p>
            In 2024 something became possible that had not been possible
            before: a locally running model that looks at an invoice PDF
            and, in seconds, knows what it is. Not from a cloud black
            box — on a GPU that sits in our customer's own server room.
          </p>

          <p>
            I first built it as an experiment, for one customer. On day
            two the bookkeeper called: „Can this thing also find the
            contracts where we committed to a monthly invoice roll-up?"
            On day three: „And the contracts where cancellation windows
            are about to close?" I realised I was no longer working at
            the edge of the DMS. I was building the DMS.
          </p>
        </div>

        <TailorFamilyPivotBlockEN siteName="RecordTailor" />

        <div className="mt-14 space-y-6 text-base leading-relaxed text-foreground/85">
          <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight">
            Every record measures.
          </h2>

          <p>
            The claim isn't a pun. It's the direct translation of what
            aviation leaves in you, into a DMS. Every life counts
            becomes <em>every record measures</em>: every document
            counts, every document is measurable, every document
            deserves to be findable — not 999 out of 1 000.{" "}
            <strong className="font-serif text-2xl not-italic text-gold sm:text-3xl">All of them.</strong>
          </p>

          <p>
            We build RecordTailor the way a controller clears a traffic
            sector: no blind spots, with auditable procedures, with a
            hash chain across every decision. And we hand it over the
            way a cockpit crew does: with a clean checklist, no loose
            ends.
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            What happens next.
          </h2>

          <p>
            We ship RecordTailor as a product — if you like your
            Kubernetes cluster, run it yourself. And we run it as a
            managed service — if you'd rather sleep and let us take the
            night shift. Two paths, one product. None of it goes into a
            multi-tenant cloud your competitor also uses.
          </p>

          <p>
            If you have a document you can't find any more — send it to
            us. In half an hour we'll show you what RecordTailor does
            with it. And if we're not the right fit, we'll say so.
            Honestly. Like in the tower.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-cream shadow-soft hover:bg-ink-soft"
          >
            Talk to us for 30 minutes
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/produkt"
            className="inline-flex items-center gap-2 rounded-xl border border-ink/20 px-5 py-3 text-sm font-medium hover:bg-surface-muted"
          >
            Product overview
          </Link>
        </div>
      </article>

      <TailorFamilySection currentSlug="recordtailor" />
    </div>
  );
}

function CloudDnaOriginBlockEN() {
  return (
    <section className="mt-14 space-y-5 leading-relaxed">
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
        Ten years, a fish restaurant, a rename
      </div>
      <h2 className="font-serif text-2xl font-semibold leading-tight sm:text-3xl">
        How KSIC became CloudDNA.
      </h2>
      <p>
        I founded CloudDNA ten years ago — originally under a different
        name. I came from SAP at the time, where I had spent years
        inside one of the largest software companies in the world. A
        safe harbour. Precisely the place you don't leave when you have
        kids, a house and a serious face. I left anyway.
      </p>
      <p>
        The starting point was a clumsy name:{" "}
        <strong>KSIC GmbH</strong> — Koch Security, Integration and
        Cloud Consulting. Four letters no one could pronounce, wrapped
        in a description that said everything and nothing. I quickly
        realised: that's the second thing you don't do when leaving SAP
        — give yourself a name that sounds like a compliance standard.
      </p>
      <p>
        The rescue arrived at dinner — though I didn't know it yet.{" "}
        <strong>Blankenese, Hamburg, a fish restaurant on the Elbe.</strong>{" "}
        I was visiting an old SAP colleague — <strong>Jörg</strong>, one
        of those people you call an SAP guru without it sounding
        cheesy. Along came <strong>Daniel</strong>, my very first
        employee at the time, on his very first business trip. He
        wasn't seated at the fish table — the two old hands wanted a
        quiet talk. (Daniel, if you ever read this: I'm still sorry
        about the turbot.)
      </p>
      <p>
        We drank a white Burgundy and I tried, for the third time, to
        explain my company name. Jörg cut me off, raised his glass and
        said a single sentence:{" "}
        <em>„Martin, you've got the Cloud in your DNA."</em>
      </p>
      <p>No lecture. No analysis. One sentence.</p>
      <p>
        The next morning I stood up in a Hamburg hotel room, looked out
        of the window, and thought:{" "}
        <strong>CloudDNA — that would be a great name.</strong> Two
        weeks later, KSIC GmbH was no longer KSIC. And Daniel has been
        on many business trips since — usually with a seat at the table.
      </p>
      <p className="border-l-2 border-gold pl-4 italic text-muted-foreground">
        Chapeau, Jörg. Without that one sentence at that one table
        we'd still be KSIC, and you'd still have to explain what the
        four letters mean at every reunion. A dinner that was worth it.
        A colleague worth keeping.
      </p>
      <p>
        What stayed are three things that have shaped the company from
        day one — and me as a person anyway:
      </p>
      <ul className="ml-4 list-disc space-y-2 marker:text-gold">
        <li>
          A love of <strong>good food and honest wine</strong>. Important
          decisions here don't happen in meeting rooms. They happen at
          tables with good light.
        </li>
        <li>
          <strong>Travel</strong> — with customers all over Europe,
          with our own team in regions we source talent from or where
          we accompany our customers. Every second trip becomes a wine
          trip, whether we planned it or not.
        </li>
        <li>
          <strong>Southern Burgenland as our base</strong> — the
          spa region, the wine region. Not Vienna, not Berlin, not San
          Francisco. We sit where our team lives, and draw from two
          talent forges you won't find on any world map: the{" "}
          <strong>HTL Pinkafeld</strong> and the <strong>FH
          Burgenland</strong>. Without either, this company wouldn't
          exist.
        </li>
      </ul>
      <p>
        We started in a tiny office in <strong>Oberwart</strong>. Today
        we sit in the <strong>former Raiffeisenbank in Loipersdorf</strong>,
        right in the spa region. A building that once had a different
        relationship with the sky, if you like: upward. From modest
        beginnings to a place with a bit more room — that's progress.
      </p>
      <p>
        The duo with Daniel has grown into a team of{" "}
        <strong>more than twenty people</strong>. We've published{" "}
        <strong>seventeen books at SAP Press</strong> — mixed subjects,
        but always from practice, never from marketing. That's the kind
        of mileage you can't invent.
      </p>
      <p>
        Our motto — <strong>„We deliver"</strong> — means two things:
        customer commitments, and a glass of wine at the right moment.
        We see ourselves as a modern, agile SAP startup. We are not the
        Titanic of consulting houses; we are a{" "}
        <strong>regatta boat</strong>. Quick course changes, small
        turning circle, no three-week meeting marathon to reach a
        decision.
      </p>
      <p className="pt-1">
        <em>The sky is the limit.</em> And yes — the cloud is sometimes
        cloudy. But that's exactly why we have it in our genes.
      </p>
    </section>
  );
}

function TailorFamilyPivotBlockEN({ siteName }: { siteName: string }) {
  return (
    <section className="mt-14 rounded-3xl border border-border bg-surface-muted p-8 sm:p-10">
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
        Why a Tailor family at all
      </div>
      <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
        We reinvented ourselves. Because AI forced us to.
      </h2>
      <div className="mt-6 space-y-5 text-base leading-relaxed">
        <p>
          I built CloudDNA to make SAP integrations for large
          enterprises — heavy software, in monthly rhythms, six-figure
          proposals. In that world, <em>custom software</em> was the
          red rag. For us. For our customers. For everyone. You avoided
          it like the plague: too expensive, too slow, too risky.
          Standard software with a hundred compromises was considered
          the sensible choice.
        </p>
        <p>Until 2023.</p>
        <p>
          When I first worked seriously with language models, it hit
          me: this is not a gradual improvement. This is the shift that
          rewrites our craft. And for the software shops — the
          enterprise consultancies, the SAP forges, the niche
          workshops — a real threat. Not in five years. In eighteen
          months.
        </p>
        <p>
          I did two things with that. First: I sat down and built
          software myself — not because I do it better than my people,
          but because I wanted to understand how our profession is
          changing. And because I don't believe you can explain
          AI-assisted development to your team in a PowerPoint. You
          have to live it, at night, at your own editor, with the same
          tools you recommend to them.
        </p>
        <p>
          Second: I turned the insight into a product line. Because the
          cost curve has shifted. What used to be three months and a
          six-figure sum can be done in two weeks now. Not because
          programmers suddenly perform magic — but because they work
          with copilots that take over the drudgery, and programmers
          become again what they should have been all along: craftsmen
          with a head on their shoulders, not typists on a deadline.
        </p>
        <p>
          <strong>
            Custom software isn't a luxury under these conditions any
            more. It's the most reasonable thing a software house can
            offer a customer.
          </strong>
        </p>
        <p>
          Instead of just talking about it, I wanted to live it in
          front of my team. So I picked domains I knew well enough — or
          where I have friends who explain the problem to me every week
          until it sticks — and built honestly:
        </p>
        <ul className="ml-4 list-disc space-y-2 marker:text-gold">
          <li>
            <strong>TaxTailor</strong> — for tax firms, because a
            friend told me at a glass of wine about his Windows terminal
            server.
          </li>
          <li>
            <strong>DineTailor</strong> — for hospitality, because
            I've spent years at other people's tables selling champagne
            to restaurateurs.
          </li>
          <li>
            <strong>StayTailor</strong> — for hotels, because the spa
            region of Loipersdorf is full of businesses ducking under
            the pricing dictates of the portals.
          </li>
          <li>
            <strong>MeetingTailor</strong> — for boards and councils,
            because my circle of friends is full of foundation
            trustees, town councillors and association boards who all
            describe the same late-night scene.
          </li>
          <li>
            <strong>DocumentTailor</strong> — for SAP houses, because
            I spent fifteen years building forms on SAP Adobe Document
            Services and no longer wanted the successor question left
            open.
          </li>
          <li>
            <strong>RecordTailor</strong> — for anyone who needs a DMS
            that not only stores, but reads. Because I've too often sat
            at the table where a bookkeeper secretly opens Excel
            because DMS search is too slow.
          </li>
        </ul>
        <p>
          Tailored tools for industries that generic US cloud portals
          have served poorly for years. CloudDNA is no longer an SAP
          supplier — it's a workshop with a growing product line.
          Riskier economically. And the most honest thing we could do,
          humanly.
        </p>
        <p className="pt-2">If {siteName} convinces you, that's the reason.</p>
        <p className="pt-4 text-sm text-muted-foreground">
          The sibling workshops:{" "}
          <a className="text-gold underline-offset-4 hover:underline" href="https://taxtailor.at">taxtailor.at</a>{" "}
          ·{" "}
          <a className="text-gold underline-offset-4 hover:underline" href="https://dinetailor.com">dinetailor.com</a>{" "}
          ·{" "}
          <a className="text-gold underline-offset-4 hover:underline" href="https://staytailor.com">staytailor.com</a>{" "}
          ·{" "}
          <a className="text-gold underline-offset-4 hover:underline" href="https://www.meetingtailor.com">meetingtailor.com</a>{" "}
          ·{" "}
          <a className="text-gold underline-offset-4 hover:underline" href="https://documenttailor.com">documenttailor.com</a>
        </p>
      </div>
    </section>
  );
}
