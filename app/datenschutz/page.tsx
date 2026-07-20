import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Kurz und ehrlich: was wir auf recordtailor.com an Daten verarbeiten — und was nicht.",
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="font-serif text-4xl font-medium tracking-tight">Datenschutz</h1>

      <p className="mt-6 text-sm text-muted-foreground">
        RecordTailor als Produkt ist On-Premise — Ihre Dokumente kommen nie in unsere
        Nähe. Diese Seite betrifft ausschließlich diese Marketing-Site.
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            Verantwortliche Stelle
          </h2>
          <p>
            CloudDNA GmbH, Untere Hauptstraße 23, 7410 Loipersdorf im Burgenland,
            Österreich. E-Mail: hello@recordtailor.com.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            Server-Logs
          </h2>
          <p>
            Beim Aufruf dieser Seite protokolliert unser Hoster Standard-Logs
            (IP, User-Agent, Referrer, Zeitstempel). Speicherdauer: 7 Tage.
            Zweck: Betrieb und Missbrauchs-Erkennung.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">Cookies</h2>
          <p>
            Wir setzen einen einzigen Cookie:{" "}
            <code className="rounded bg-surface-muted px-1 py-0.5 text-xs">
              rt_locale
            </code>{" "}
            merkt sich, ob Sie DE oder EN gewählt haben. Kein Tracking. Kein Analytics
            mit Drittanbietern.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            Kontakt-Anfragen
          </h2>
          <p>
            Wenn Sie uns per E-Mail schreiben, verarbeiten wir die Nachricht auf einem
            EU-Mail-Server zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage: Art. 6
            Abs. 1 lit. b/f DSGVO. Löschung nach Abschluss des Kontakts, spätestens
            nach 24 Monaten Inaktivität.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            Ihre Rechte
          </h2>
          <p>
            Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit,
            Widerspruch. Beschwerde-Behörde: Österreichische Datenschutzbehörde,
            dsb@dsb.gv.at.
          </p>
        </section>
      </div>
    </div>
  );
}
