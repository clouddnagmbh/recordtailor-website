import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Offenlegung nach § 5 ECG / § 25 MedienG.",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="font-serif text-4xl font-medium tracking-tight">Impressum</h1>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            Medieninhaber und Herausgeber
          </h2>
          <p>
            CloudDNA GmbH
            <br />
            Untere Hauptstraße 23
            <br />
            7410 Loipersdorf im Burgenland
            <br />
            Österreich
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">Kontakt</h2>
          <p>
            E-Mail: hello@recordtailor.com
            <br />
            Web: https://recordtailor.com
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            Firmenbuch und Behörde
          </h2>
          <p>
            Firmenbuchnummer, Firmenbuchgericht und zuständige Bezirkshauptmannschaft
            werden hier ergänzt, sobald die Betriebsstätte für RecordTailor final
            eingerichtet ist.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            Angaben zur Online-Streitbeilegung
          </h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
            zur Verfügung: https://ec.europa.eu/consumers/odr. Wir sind nicht
            verpflichtet, an einem Streitbeilegungsverfahren teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">Haftung</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für
            die Inhalte externer Links. Für den Inhalt verlinkter Seiten sind ausschließlich
            deren Betreiber verantwortlich.
          </p>
        </section>
      </div>
    </div>
  );
}
