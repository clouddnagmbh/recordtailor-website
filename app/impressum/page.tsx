import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="mb-2 font-serif text-3xl font-semibold sm:text-4xl">Impressum</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Informationspflicht laut § 5 E-Commerce-Gesetz, § 14 Unternehmensgesetzbuch,
        § 63 Gewerbeordnung und Offenlegungspflicht laut § 25 Mediengesetz.
      </p>

      <div className="space-y-6 text-sm leading-relaxed text-foreground/90">
        <section>
          <p>RecordTailor ist ein Produkt der</p>
          <p className="mt-2 font-semibold">CloudDNA GmbH</p>
          <p>Untere Hauptstraße 23</p>
          <p>7410 Loipersdorf, Österreich</p>
        </section>

        <section>
          <p>Unternehmensgegenstand: IT-Dienstleistungen</p>
          <p>UID-Nummer: ATU72725928</p>
          <p>Firmenbuchnummer: FN 480760 a</p>
          <p>Firmenbuchgericht: Handelsgericht Eisenstadt</p>
          <p>Firmensitz: 7410 Loipersdorf, Untere Hauptstraße 23</p>
        </section>

        <section>
          <p>Tel.: +43 664 1964199</p>
          <p>E-Mail: office@clouddna.at · hello@recordtailor.com</p>
        </section>

        <section>
          <p>Geschäftsführer: Martin Koch</p>
          <p>Beteiligungsverhältnisse: Gesellschafter Martin Koch 100 %</p>
          <p>Verleihungsstaat: Österreich</p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-lg font-semibold">Offenlegung gemäß § 25 MedienG</h2>
          <p>
            Diese Website informiert über Produkte und Dienstleistungen der CloudDNA GmbH für
            KI-natives Dokumentenmanagement (Marke: RecordTailor).
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-lg font-semibold">EU-Streitschlichtung</h2>
          <p>
            Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform
            der EU zu richten: ec.europa.eu/consumers/odr. Sie können allfällige Beschwerden auch
            an die oben angegebene E-Mail-Adresse richten.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-lg font-semibold">Haftung für Inhalte dieser Webseite</h2>
          <p>
            Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns, korrekte und
            aktuelle Informationen bereitzustellen. Leider können wir keine Haftung für die
            Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell für jene, die seitens
            Dritter bereitgestellt werden. Sollten Ihnen problematische oder rechtswidrige Inhalte
            auffallen, bitten wir Sie, uns umgehend zu kontaktieren.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-lg font-semibold">Haftung für Links auf dieser Webseite</h2>
          <p>
            Unsere Webseite enthält Links zu anderen Webseiten, für deren Inhalt wir nicht
            verantwortlich sind. Wenn Ihnen rechtswidrige Links auf unserer Webseite auffallen,
            bitten wir Sie, uns zu kontaktieren.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-lg font-semibold">Urheberrechtshinweis</h2>
          <p>
            Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht.
            Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite
            rechtlich verfolgen. Die auf dieser Website dargestellten Marken Dritter sind Eigentum
            ihrer jeweiligen Inhaber.
          </p>
        </section>
      </div>
    </article>
  );
}
