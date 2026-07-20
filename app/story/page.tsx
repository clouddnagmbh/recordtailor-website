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

function StoryDE() {
  return (
    <div>
      <article className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          Wie das anfing
        </div>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          Zwanzig Jahre Aktenordner. Und dann ein Satz.
        </h1>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/85">
          <p>
            Ich bin IT-Unternehmer, kein Dokumenten-Mensch. Ich habe die CloudDNA
            GmbH aus Loipersdorf im Burgenland zwanzig Jahre lang aufgebaut, indem
            ich für Konzerne SAP-Integrationen entworfen habe — die schwere Software,
            die still läuft, die Rechnungen bucht, die Vorlagen archiviert, die
            niemand sieht. Ein DMS zu bauen stand nie auf meinem Zettel. Und doch
            habe ich in zwanzig Jahren SAP kein einziges Projekt erlebt, in dem
            das Dokumentenmanagement nicht irgendwann zum Problem geworden wäre.
          </p>

          <p>
            Man beginnt bei jedem Konzernkunden mit der gleichen Landkarte: eine
            Grafik in einer PowerPoint, die zeigt, wie die Belege durchs Haus
            wandern. SAP liest das Papier, ein OCR-Server drückt es in ein
            Archiv-System, ein Sachbearbeiter freigibt, das Archiv verlinkt es
            zurück ins SAP. Auf der Folie sieht das aus wie eine Autobahn. In der
            Realität ist es ein Feldweg, der bei jedem zweiten Kilometer in ein
            Wartezimmer mündet.
          </p>

          <p>
            Ich habe Kunden gesehen, die für ihr DMS mehr Lizenzgebühren zahlten
            als für ihr HR-System. Ich habe Kunden gesehen, die eine eigene
            Vollzeitstelle nur dafür geschaffen hatten, dass jemand die
            Metadaten der eingescannten Belege händisch korrigiert. Ich habe
            einen Vorstand einer regionalen Genossenschaft kennengelernt, der
            zu mir sagte:
          </p>

          <blockquote className="border-l-2 border-gold py-1 pl-5 font-serif text-xl italic leading-relaxed">
            „Wir zahlen einen sechsstelligen Betrag im Jahr für ein Archiv, das
            unsere Buchhalterin bittet, mit Excel zu suchen, weil dort die
            Rechnungen schneller zu finden sind."
          </blockquote>

          <p>
            Das war der Moment, in dem mir klar wurde: das eigentliche Problem
            der DMS-Branche ist nicht, dass sie nicht speichern kann. Sie kann
            fabelhaft speichern. Terabytes lang. Regulatorisch sauber. Auditierbar.
            Sie kann nur das Eine nicht: <em>lesen</em>. Das Dokument, das
            reingeht, ist für das DMS ein Blob mit Metadaten. Ob es eine
            Kündigung, eine Rechnung, ein Mahnbescheid oder ein Vertragsanhang
            ist, weiß das System nur, wenn ein Mensch es ihm einträgt. Und
            deshalb tragen Menschen ein. Millionen von Menschen, jeden Tag,
            und niemand merkt, dass genau das der teuerste Teil ihres Tages ist.
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            Der Feldweg wird zur Autobahn — mit KI.
          </h2>

          <p>
            2024 wurde etwas möglich, das vorher nicht möglich war. Nicht in
            der Marketing-Definition von KI, sondern in der handfesten: ein
            lokal laufendes Modell, das ein Rechnungs-PDF anschaut und in
            Sekunden weiß, was es ist. IBAN, Betrag, Vertragsbezug, Fälligkeit.
            Nicht aus einer Cloud-Blackbox — auf einer GPU, die im Serverraum
            unseres Kunden steht.
          </p>

          <p>
            Das habe ich zuerst als Experiment gebaut, für einen einzelnen
            Kunden. Ein kleines Python-Skript, das den Scan-Ordner beobachtet
            und den DMS-Import mit Klassifikations-Vorschlägen füttert. Am
            zweiten Tag hat die Buchhalterin mich angerufen: „Kann das
            Ding auch die Verträge finden, in denen wir uns zu einer
            Sammelrechnung verpflichtet haben?" Am dritten Tag: „Und die
            Verträge, wo Kündigungsfristen kurz vor Ablauf sind?"
          </p>

          <p>
            Ich habe verstanden, dass ich nicht mehr am Rand des DMS
            arbeitete. Ich baute gerade das DMS. Nur ohne die zwanzig Jahre
            an Legacy-Ballast, die kein aktueller Anbieter mehr loswird —
            Fat-Clients, TWAIN-Treiber, Lizenzmodelle nach User und Modul,
            Cloud-Zwang.
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            Warum ausgerechnet aus dem Burgenland?
          </h2>

          <p>
            Weil hier bei uns ein Unternehmen wie CloudDNA existieren kann,
            das seit zwei Jahrzehnten mit Enterprise-Kunden arbeitet, ohne
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
            versprochen hat, „KI-fähig zu sein", und die dann eine PDF-Textbox
            bekommen haben. Es ist ein DMS, das wir selbst benutzen würden.
            Das ist das einzige Kriterium, an dem wir uns messen lassen.
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            Wie's weitergeht.
          </h2>

          <p>
            Wir liefern RecordTailor als Produkt aus — wenn Sie Ihren
            Kubernetes-Cluster mögen, betreiben Sie es selbst. Und wir
            betreiben es als Managed Service — wenn Sie lieber schlafen
            möchten und uns die Nacht überlassen. Zwei Wege, ein Produkt.
            Nichts davon geht in irgendeine Multi-Tenant-Cloud, die auch
            Ihr Wettbewerber benutzt.
          </p>

          <p>
            Wenn Sie ein Dokument haben, das Sie nicht mehr finden — schicken
            Sie es uns. Wir zeigen Ihnen in einer halben Stunde, was
            RecordTailor damit macht. Und wenn wir nicht passen, sagen wir
            es. Ehrlich.
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

function StoryEN() {
  return (
    <div>
      <article className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          How this began
        </div>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          Twenty years of filing cabinets. Then one sentence.
        </h1>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/85">
          <p>
            I'm a software entrepreneur, not a document person. For twenty
            years I've built CloudDNA GmbH, from Loipersdorf in Austria's
            eastern Burgenland region, by designing SAP integrations for
            large enterprises — the heavy software that runs quietly, books
            invoices, archives templates, and that no one sees. Building a
            DMS was never on my list. And yet in twenty years of SAP work I
            have not seen a single project in which document management did
            not, at some point, become the problem.
          </p>

          <p>
            You start with the same slide at every enterprise customer: a
            PowerPoint showing how documents travel through the house. SAP
            reads the paper, an OCR server pushes it into an archive, a
            clerk approves, the archive links back to SAP. On the slide it
            looks like a motorway. In reality it's a country road that
            passes a waiting room every second kilometer.
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
            That was the moment it hit me: the real problem with the DMS
            industry isn't that it can't store. It stores beautifully.
            Terabytes deep. Compliant. Auditable. What it cannot do is{" "}
            <em>read</em>. To the DMS, an incoming document is a blob with
            metadata. Whether it's a termination notice, an invoice, a
            demand letter, or a contract amendment — the system only knows
            because a human tells it. So humans tell it. Millions of humans,
            every day, and nobody notices that this is the single most
            expensive part of their day.
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            The country road turns motorway — with AI.
          </h2>

          <p>
            In 2024 something became possible that had not been possible
            before. Not in the marketing sense of AI, but in the concrete
            one: a locally running model that looks at an invoice PDF and,
            in seconds, knows what it is. IBAN, amount, contract reference,
            due date. Not from a cloud black box — on a GPU that sits in
            our customer's own server room.
          </p>

          <p>
            I first built this as an experiment, for a single customer. A
            small Python script that watched the scan folder and fed
            classification suggestions into the DMS import. On day two the
            bookkeeper called me: "Can this thing also find the contracts
            where we committed to a monthly invoice roll-up?" On day three:
            "And the contracts where cancellation windows are about to
            close?"
          </p>

          <p>
            I realised I was no longer working at the edge of the DMS. I
            was building the DMS. Just without twenty years of legacy
            baggage that no incumbent can shed — fat clients, TWAIN
            drivers, per-user-per-module licensing, cloud-lock-in.
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            Why from Burgenland, of all places?
          </h2>

          <p>
            Because in our part of the world a company like CloudDNA can
            exist that has worked with enterprise customers for two decades
            without ever raising a single round of venture capital. We
            build software the way our neighbours make wine: with time,
            with respect for the craft, and with a clear picture of what a
            good product actually looks like in the end. And because we
            sit close enough to the German-speaking Mittelstand to know
            where it hurts, and far enough from any "Silicon Vienna"
            ecosystem to not have to ride every hype wave that comes past.
          </p>

          <p>
            RecordTailor is our offer to everyone whose DMS would need a
            lawyer to be cancelled. To everyone whose accounting team
            secretly uses Excel because DMS search takes too long. To
            everyone whose vendor promised to be "AI-ready" and delivered a
            PDF text box. It's the DMS we would use ourselves. That's the
            only bar we hold ourselves to.
          </p>

          <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight">
            What happens next.
          </h2>

          <p>
            We ship RecordTailor as a product — if you like your Kubernetes
            cluster, run it yourself. And we run it as a managed service —
            if you'd rather sleep and let us take the night shift. Two
            paths, one product. None of it goes into a multi-tenant cloud
            your competitor also uses.
          </p>

          <p>
            If you have a document you can't find any more — send it to
            us. In half an hour we'll show you what RecordTailor does with
            it. And if we're not the right fit, we'll say so. Honestly.
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
