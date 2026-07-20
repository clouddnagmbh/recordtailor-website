import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { TailorFamilySection } from "@/components/tailor-family";
import { DICTS } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n";

export const dynamic = "force-static";

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
            Ich bin kein Dokumenten-Mensch. Ich habe zwei Berufe erlernt, in
            denen es keine 99,9 % gibt: Linienpilot bei Austrian Airlines und
            Fluglotse bei Austro Control. Beides sind Ausbildungen, in die
            man erst einmal hineinkommen muss — die Aufnahmetests gehören zu
            den schwersten in Österreich — und beides sind Berufe, in denen
            ein Prinzip alles überstrahlt: es zählt jedes Leben. Every life
            counts. Nicht 999 von 1 000. Alle.
          </p>

          <p>
            Diese Prägung geht nicht weg, auch wenn man das Ruder abgibt.
            Wenn man Jahre damit verbringt, im Cockpit oder im Tower jeden
            Handgriff auf Wiederholbarkeit, jedes Verfahren auf
            Nachvollziehbarkeit und jedes Ergebnis auf Vollständigkeit zu
            prüfen, dann kann man es nicht mehr abschalten, wenn man in ein
            anderes Feld wechselt. Man schaut auf jedes System und misst es:{" "}
            <em>Bringt es 100 %? Oder nur „meistens"?</em>
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            Von KSIC zu CloudDNA.
          </h2>

          <p>
            Ich habe irgendwann angefangen, Software zu bauen — zuerst als
            Freelancer, dann mit einer Firma, die ich KSIC nannte. Ein
            trockenes Kürzel aus der Consulting-Ära. Wir integrierten
            SAP-Systeme für Konzernkunden. Der Name war ehrlich zu dem, was
            wir taten, und exakt so charmant.
          </p>

          <p>
            Nach ein paar Jahren kippte das Verhältnis: der Anteil unserer
            Arbeit, der eigentlich Produkt-Arbeit war und keine reine
            Beratung mehr, wurde immer größer. Der Name passte nicht mehr
            zur Firma. Wir haben umbenannt — <strong>CloudDNA</strong>. Die
            alte DNA blieb (SAP tief in den Genen, cockpitartige Genauigkeit
            in den Prozessen), was sich verändert hatte, war der
            Aggregatzustand. Wir waren jetzt Produkt-Firma. Seit gut zehn
            Jahren.
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            Zehn Jahre Aktenordner. Und dann ein Satz.
          </h2>

          <p>
            In diesen zehn Jahren habe ich mit CloudDNA in einer Ecke
            gearbeitet, die man von außen nicht sieht: SAP-Integrationen,
            Dokumentenströme, Archive. Wir haben in jedem größeren Projekt
            dasselbe Muster gefunden. Man beginnt mit einer Folie in einer
            PowerPoint, die zeigt, wie die Belege durchs Haus wandern. SAP
            liest das Papier, ein OCR-Server drückt es in ein Archiv-System,
            ein Sachbearbeiter freigibt, das Archiv verlinkt es zurück ins
            SAP. Auf der Folie sieht das aus wie eine Autobahn. In der
            Realität ist es ein Feldweg, der bei jedem zweiten Kilometer in
            ein Wartezimmer mündet.
          </p>

          <p>
            Ich habe Kunden gesehen, die für ihr DMS mehr Lizenzgebühren
            zahlten als für ihr HR-System. Ich habe Kunden gesehen, die eine
            eigene Vollzeitstelle nur dafür geschaffen hatten, dass jemand
            die Metadaten der eingescannten Belege händisch korrigiert. Ich
            habe einen Vorstand einer regionalen Genossenschaft
            kennengelernt, der zu mir sagte:
          </p>

          <blockquote className="border-l-2 border-gold py-1 pl-5 font-serif text-xl italic leading-relaxed">
            „Wir zahlen einen sechsstelligen Betrag im Jahr für ein Archiv,
            das unsere Buchhalterin bittet, mit Excel zu suchen, weil dort
            die Rechnungen schneller zu finden sind."
          </blockquote>

          <p>
            Für jemanden aus dem Cockpit ist das die Sorte Satz, bei dem
            das Prinzip greift. Das ist nicht 99,9 %. Das ist nicht einmal
            50 %. Das ist ein System, das seinen eigenen Zweck verfehlt und
            dafür bezahlt wird. Man kann das nicht wegdenken, wenn man
            gelernt hat, jedes Verfahren zu prüfen, bis es passt.
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            Der Feldweg wird zur Autobahn — mit KI.
          </h2>

          <p>
            2024 wurde etwas möglich, das vorher nicht möglich war. Nicht in
            der Marketing-Definition von KI, sondern in der handfesten: ein
            lokal laufendes Modell, das ein Rechnungs-PDF anschaut und in
            Sekunden weiß, was es ist. IBAN, Betrag, Vertragsbezug,
            Fälligkeit. Nicht aus einer Cloud-Blackbox — auf einer GPU, die
            im Serverraum unseres Kunden steht.
          </p>

          <p>
            Ich habe zuerst ein Experiment gebaut, für einen einzelnen
            Kunden. Ein kleines Skript, das den Scan-Ordner beobachtet und
            den DMS-Import mit Klassifikations-Vorschlägen füttert. Am
            zweiten Tag hat die Buchhalterin mich angerufen: „Kann das Ding
            auch die Verträge finden, in denen wir uns zu einer
            Sammelrechnung verpflichtet haben?" Am dritten Tag: „Und die
            Verträge, wo Kündigungsfristen kurz vor Ablauf sind?"
          </p>

          <p>
            Ich habe verstanden, dass ich nicht mehr am Rand des DMS
            arbeitete. Ich baute gerade das DMS. Nur ohne die Legacy-Ballast
            der Vor-KI-Ära, die kein Anbieter mehr loswird — Fat-Clients,
            TWAIN-Treiber, Lizenzmodelle nach User und Modul, Cloud-Zwang.
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            Every record measures.
          </h2>

          <p>
            Der Claim ist kein Wortspiel. Er ist die direkte Übersetzung
            dessen, was man aus der Aviation mitnimmt, ins DMS. Every life
            counts wird zu <em>every record measures</em>: jedes Dokument
            zählt, jedes Dokument ist mess­bar, jedes Dokument gehört
            gefunden — nicht 999 von 1 000. Alle.
          </p>

          <p>
            Wir bauen RecordTailor so, wie ein Fluglotse einen
            Verkehrssektor räumt: ohne blinde Flecken, mit prüfbaren
            Verfahren, mit einer Hash-Chain über jede Entscheidung. Und wir
            liefern es so aus, wie eine Cockpit-Crew übergibt: mit einer
            klaren Checkliste, ohne offene Enden.
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            Warum ausgerechnet aus dem Burgenland?
          </h2>

          <p>
            Weil hier bei uns ein Unternehmen wie CloudDNA existieren kann,
            das seit einem Jahrzehnt mit Enterprise-Kunden arbeitet, ohne
            eine einzige Runde Venture-Capital gesehen zu haben. Weil wir
            Software so bauen wie unsere Nachbarn ihren Wein: mit Zeit, mit
            Ehre für das Handwerk, und mit einem klaren Bild davon, was ein
            gutes Produkt am Ende ausmacht. Und weil wir hier nahe genug am
            deutschen Mittelstand sitzen, um zu wissen, wo es weh tut — und
            weit genug weg vom „Silicon Wien"-Ökosystem, um nicht auf jeder
            Hype-Welle mitschwimmen zu müssen.
          </p>

          <p>
            RecordTailor ist unser Angebot an alle, die ein DMS haben, das
            eigentlich einen Rechtsanwalt bräuchte, damit man ihm kündigen
            kann. An alle, deren Buchhaltung heimlich Excel benutzt, weil
            das Suchen im DMS zu lange dauert. An alle, denen ein Anbieter
            versprochen hat, „KI-fähig zu sein", und die dann eine
            PDF-Textbox bekommen haben. Es ist ein DMS, das wir selbst
            benutzen würden — und das man mit derselben Genauigkeit misst
            wie einen Anflug.
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
            was RecordTailor damit macht. Und wenn wir nicht passen, sagen
            wir es. Ehrlich. Wie im Tower.
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
            99.9 % doesn't exist: airline pilot with Austrian Airlines, and
            air traffic controller with Austro Control. Both take some of
            the toughest selection tests in Austria to enter, and both are
            professions ruled by a single principle that overshadows
            everything else: every life counts. Not 999 out of 1 000. All
            of them.
          </p>

          <p>
            That imprint doesn't leave you when you hand over the yoke. If
            you've spent years — in the cockpit or in the tower — checking
            every action for repeatability, every procedure for
            traceability, every outcome for completeness, you cannot switch
            it off when you move into a different field. You look at every
            system and measure it: <em>does it deliver 100 %? Or only
            „most of the time"?</em>
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            From KSIC to CloudDNA.
          </h2>

          <p>
            At some point I started building software — first as a
            freelancer, then with a company I called KSIC. A dry abbreviation
            from the consulting era. We built SAP integrations for large
            enterprises. The name was honest to what we did, and about as
            charming.
          </p>

          <p>
            A few years in, the balance tipped: the share of our work that
            was really product work — no longer just consulting — kept
            growing. The name didn't fit the company any more. We renamed
            it — <strong>CloudDNA</strong>. The old DNA stayed (SAP deep in
            the genes, cockpit-grade precision in the processes), what had
            changed was the state of matter. We were a product company
            now. That was a good ten years ago.
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            Ten years of filing cabinets. Then one sentence.
          </h2>

          <p>
            For those ten years I worked with CloudDNA in a corner nobody
            sees from the outside: SAP integrations, document flows,
            archives. In every larger project we found the same pattern.
            You start with a slide showing how documents travel through the
            house. SAP reads the paper, an OCR server pushes it into an
            archive, a clerk approves, the archive links back to SAP. On
            the slide it looks like a motorway. In reality it's a country
            road that passes a waiting room every second kilometre.
          </p>

          <p>
            I've seen customers pay more in annual license fees for their
            DMS than for their HR system. I've seen customers create a
            dedicated full-time position just to manually correct metadata
            on scanned documents. I met a board member of a regional
            cooperative who told me:
          </p>

          <blockquote className="border-l-2 border-gold py-1 pl-5 font-serif text-xl italic leading-relaxed">
            „We pay a six-figure sum a year for an archive that our
            bookkeeper asks to search in Excel, because that's where the
            invoices are actually findable."
          </blockquote>

          <p>
            For someone from the cockpit, that's the kind of sentence the
            principle grips onto. That isn't 99.9 %. That isn't even 50 %.
            That's a system paid to fail at its own purpose. You can't
            un-think it once you've trained to check every procedure until
            it fits.
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            The country road turns motorway — with AI.
          </h2>

          <p>
            In 2024 something became possible that had not been possible
            before. Not in the marketing sense of AI, but the concrete one:
            a locally running model that looks at an invoice PDF and, in
            seconds, knows what it is. IBAN, amount, contract reference,
            due date. Not from a cloud black box — on a GPU that sits in
            our customer's own server room.
          </p>

          <p>
            I first built it as an experiment, for one customer. A small
            script that watched the scan folder and fed classification
            suggestions into the DMS import. On day two the bookkeeper
            called: „Can this thing also find the contracts where we
            committed to a monthly invoice roll-up?" On day three: „And
            the contracts where cancellation windows are about to close?"
          </p>

          <p>
            I realised I was no longer working at the edge of the DMS. I
            was building the DMS. Just without the pre-AI legacy weight no
            incumbent can shed — fat clients, TWAIN drivers,
            per-user-per-module licensing, cloud-lock-in.
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            Every record measures.
          </h2>

          <p>
            The claim isn't a pun. It's the direct translation of what
            aviation leaves in you, into a DMS. Every life counts becomes{" "}
            <em>every record measures</em>: every document counts, every
            document is measurable, every document deserves to be findable
            — not 999 out of 1 000. All of them.
          </p>

          <p>
            We build RecordTailor the way a controller clears a traffic
            sector: no blind spots, with auditable procedures, with a hash
            chain across every decision. And we hand it over the way a
            cockpit crew does: with a clean checklist, no loose ends.
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            Why from Burgenland, of all places?
          </h2>

          <p>
            Because in our part of the world a company like CloudDNA can
            exist that has worked with enterprise customers for a decade
            without raising a single round of venture capital. We build
            software the way our neighbours make wine: with time, with
            respect for the craft, and with a clear picture of what a good
            product actually looks like in the end. And because we sit
            close enough to the German-speaking Mittelstand to know where
            it hurts, and far enough from any „Silicon Vienna" ecosystem
            to not have to ride every hype wave that comes past.
          </p>

          <p>
            RecordTailor is our offer to everyone whose DMS would need a
            lawyer to be cancelled. To everyone whose accounting team
            secretly uses Excel because DMS search takes too long. To
            everyone whose vendor promised to be „AI-ready" and delivered
            a PDF text box. It's the DMS we would use ourselves — and one
            we measure with the same precision as an approach.
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
            us. In half an hour we'll show you what RecordTailor does with
            it. And if we're not the right fit, we'll say so. Honestly.
            Like in the tower.
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
