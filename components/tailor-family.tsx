import {
  ArrowRight,
  Archive,
  BedDouble,
  Calculator,
  FileText,
  Grape,
  Sparkles,
  UtensilsCrossed,
  Users,
  type LucideIcon,
} from "lucide-react";

type Sibling = {
  slug: string;
  href: string;
  name: string;
  tag: string;
  icon: LucideIcon;
};

/**
 * Die Familie der Tailors — dieselbe Sektion in jeder Marketing-Site.
 * `currentSlug` markiert die aktuelle App als „hier sind Sie", die
 * anderen sind klickbare Karten in die Nachbarschaft.
 */
const SIBLINGS: Sibling[] = [
  {
    slug: "dinetailor",
    href: "https://dinetailor.com",
    name: "DineTailor",
    tag: "Restaurants",
    icon: UtensilsCrossed,
  },
  {
    slug: "staytailor",
    href: "https://staytailor.at",
    name: "StayTailor",
    tag: "Hotellerie",
    icon: BedDouble,
  },
  {
    slug: "meetingtailor",
    href: "https://meetingtailor.at",
    name: "MeetingTailor",
    tag: "Tagungen & Events",
    icon: Users,
  },
  {
    slug: "documenttailor",
    href: "https://documenttailor.com",
    name: "DocumentTailor",
    tag: "Kanzleien",
    icon: FileText,
  },
  {
    slug: "taxtailor",
    href: "https://taxtailor.at",
    name: "TaxTailor",
    tag: "Steuerberatung",
    icon: Calculator,
  },
  {
    slug: "weintailor",
    href: "https://weintailor.at",
    name: "Weintailor",
    tag: "Winzerinnen und Winzer",
    icon: Grape,
  },
  {
    slug: "recordtailor",
    href: "https://recordtailor.com",
    name: "RecordTailor",
    tag: "Dokumentenmanagement",
    icon: Archive,
  },
];

export function TailorFamilySection({ currentSlug }: { currentSlug: string }) {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-4xl px-5 py-16">
        <header className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <Sparkles className="mr-1 inline h-3 w-3" />
            Die Familie der Tailors
          </div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Sieben Geschwister — jeder für seine Branche.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Jeder Tailor teilt mit den Geschwistern die Grundlagen — denselben
            Sicherheitskern, dieselbe DSGVO-Konformität, dieselbe
            EU-Datenhaltung, dieselbe KI, dieselben Rechnungsformate. Aber die{" "}
            <em>Sprache</em> ist eine andere: DineTailor spricht von Bons,
            StayTailor von Rechnungsläufen, TaxTailor von KESt-Meldungen,
            Weintailor von Mostgewicht und Kellerbuch.
          </p>
        </header>
        <ul className="grid gap-3 sm:grid-cols-2">
          {SIBLINGS.map((s) => {
            const isCurrent = s.slug === currentSlug;
            const Icon = s.icon;
            if (isCurrent) {
              return (
                <li
                  key={s.slug}
                  className="flex items-center gap-3 rounded-2xl border-2 border-gold bg-gold-soft px-4 py-3 text-sm"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gold text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-semibold text-gold">{s.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {s.tag} — hier sind Sie.
                    </div>
                  </div>
                </li>
              );
            }
            return (
              <li key={s.slug}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-sm transition-colors hover:border-gold/60 hover:bg-surface-muted"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-surface-muted text-navy">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="font-semibold">{s.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {s.tag}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
