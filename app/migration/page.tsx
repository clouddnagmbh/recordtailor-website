import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, RefreshCw } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { LEGACY_DMS } from "@/lib/migration-data";

export const metadata: Metadata = {
  title: "DMS ablösen — Migration zu RecordTailor",
  description:
    "Wir lösen Ihr bestehendes DMS ab. Alfresco, d.velop, ELO, DocuWare, OpenText, SharePoint — Migrations-Adapter für alle großen Systeme. 4–8 Wochen, ohne Datenverlust.",
  alternates: { canonical: "/migration" },
};

export default function MigrationIndexPage() {
  return (
    <div>
      <Breadcrumbs
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Migration", href: "/migration" },
        ]}
      />

      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:py-20">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              <RefreshCw className="mr-1 inline h-3 w-3" />
              DMS-Migration
            </div>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Ihr Legacy-DMS ist Vergangenheit. In 4–8 Wochen.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              RecordTailor kommt mit fertigen Migrations-Adaptern für die
              wichtigsten Legacy-DMS-Systeme. Content, Metadaten, Versionen,
              ACLs und Signatur-Historie werden übernommen. SAP-ArchiveLink
              schwenkt an einem Wochenende. Ihre Sachbearbeiter merken den
              Wechsel an einer schnelleren Suche.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-5">
          <ul className="grid gap-4 sm:grid-cols-2">
            {LEGACY_DMS.map((dms) => (
              <li key={dms.slug}>
                <Link
                  href={`/migration/${dms.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6 hover:border-gold/60 hover:shadow-elevated"
                >
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                      {dms.vendor}
                    </div>
                    <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight">
                      {dms.displayName}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {dms.lead.split(". ").slice(0, 2).join(". ") + "."}
                    </p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-gold">
                    Migrationspfad ansehen
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink py-16 text-cream">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-5 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Ihr DMS ist nicht dabei?
          </h2>
          <p className="max-w-2xl text-cream/80">
            Wir bauen Migrations-Adapter auf Kundenwunsch. IBM FileNet, SAP
            Content Server, HP TRIM, Nuxeo, Laserfiche — nennen Sie uns Ihr
            System, wir prüfen den Aufwand.
          </p>
          <Link
            href="/kontakt"
            className="mt-2 inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-white hover:bg-gold-hover"
          >
            Migrations-Gespräch anfragen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
