import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 text-sm leading-relaxed text-foreground/90">
      <h1 className="mb-8 font-serif text-3xl font-semibold sm:text-4xl">Datenschutzerklärung</h1>

      <p className="mb-8 text-sm text-muted-foreground">
        Diese Erklärung betrifft ausschließlich die Marketing-Site
        recordtailor.com. Das Produkt RecordTailor selbst wird On-Premise
        oder als dedizierter Managed Service betrieben — Ihre Dokumente
        kommen nie in unsere Nähe. Die Datenschutz-Bedingungen für den
        Produktbetrieb regeln wir vertraglich separat.
      </p>

      <section className="mb-8">
        <h2 className="mb-2 font-serif text-lg font-semibold">1. Verantwortlicher</h2>
        <p>
          CloudDNA GmbH, Untere Hauptstraße 23, 7410 Loipersdorf, Österreich. Tel.: +43 664 1964199,
          E-Mail: office@clouddna.at bzw. hello@recordtailor.com
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 font-serif text-lg font-semibold">2. Hosting & Server-Logs</h2>
        <p>
          Diese Website wird bei Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA)
          gehostet (Auftragsverarbeiter, Art. 28 DSGVO; ggf. Drittlandübermittlung auf Basis von
          Standardvertragsklauseln). Beim Aufruf werden technisch notwendige Zugriffsdaten
          (IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser/Betriebssystem, Referrer) kurzzeitig
          in Server-Logs verarbeitet und in der Regel nach wenigen Wochen automatisch gelöscht.
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (sicherer und stabiler Betrieb).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 font-serif text-lg font-semibold">3. Cookies & Web-Analyse</h2>
        <p>
          Diese Website setzt keine einwilligungspflichtigen Cookies und keine Tracking-Pixel ein.
          Zur Reichweitenmessung nutzen wir eine eigene, cookielose Instrumentierung: Beim
          Seitenaufruf wird eine Zufalls-ID im sessionStorage des Browsers erzeugt (nicht im
          Cookie, keine Wiedererkennung über Sessions hinweg) und mit aggregierten Kennzahlen
          (Pfad, Referrer-Domain, UTM-Parameter, Gerätekategorie, Sprach- und Landcode) an unseren
          Collector übertragen. Wir speichern keine IP-Adressen. Rechtsgrundlage: Art. 6 Abs. 1
          lit. f DSGVO (statistische Analyse zur Verbesserung des Angebots).
        </p>
        <p className="mt-2">
          Für die Sprachumschaltung wird ein rein technisches Cookie <code>rt_locale</code> gesetzt
          (Wert: <code>de</code> oder <code>en</code>). Dieses Cookie ist einwilligungsfrei nutzbar
          (Art. 5 Abs. 3 Satz 2 ePrivacy-RL, unbedingt erforderlich).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 font-serif text-lg font-semibold">4. Kontaktaufnahme</h2>
        <p>
          Bei Kontakt per E-Mail verarbeiten wir die übermittelten Angaben zur Bearbeitung der
          Anfrage (Art. 6 Abs. 1 lit. b bzw. f DSGVO) und löschen sie, sobald sie nicht mehr
          erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 font-serif text-lg font-semibold">5. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch (Art. 15–21 DSGVO). Wenden Sie sich dazu an
          hello@recordtailor.com. Außerdem besteht ein Beschwerderecht bei der österreichischen
          Datenschutzbehörde (dsb.gv.at).
        </p>
      </section>

      <p className="text-xs text-muted-foreground">
        Stand: Juli 2026. Diese Erklärung wird vor dem Launch rechtlich geprüft und bei Bedarf um
        weitere Auftragsverarbeiter ergänzt.
      </p>
    </article>
  );
}
