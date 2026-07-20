import {
  Check,
  FileText,
  GitBranch,
  Inbox,
  Search,
  Sparkles,
} from "lucide-react";

import { getT } from "@/lib/i18n";

/**
 * Drei Mockup-Karten, die typische RecordTailor-Momente zeigen: eine
 * klassifizierte Rechnung, ein Branch-Merge auf einem Vertrag und ein
 * Suchergebnis mit Zitat. Nichts davon ist ein echter Screenshot — es
 * sind stilisierte UI-Snapshots im Design der App, gerendert als
 * verschachtelte Tailwind-Karten. Auf Retina-Displays sieht das schärfer
 * aus als jedes PNG.
 */
export async function AppScreens() {
  const t = await getT();
  return (
    <section className="border-b border-border bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <header className="mb-12 max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {t("screens.eyebrow")}
          </div>
          <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            {t("screens.title")}
          </h2>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          <ScreenClassify />
          <ScreenSearch />
          <ScreenBranch />
        </div>
      </div>
    </section>
  );
}

function ScreenChrome({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-elevated">
      <div className="flex items-center gap-2 border-b border-border bg-cream-dark px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-thread-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-3 truncate rounded-md bg-surface px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
          {label}
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

/* ------ 1. Rechnung klassifiziert -------------------------------------- */
function ScreenClassify() {
  return (
    <ScreenChrome label="rt / inbox / Rechnung_2026_0741.pdf">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold">
          <FileText className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold">Rechnung_2026_0741.pdf</div>
          <div className="mt-0.5 flex items-center gap-2 text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-1 rounded-md bg-gold-soft px-1.5 py-0.5 font-semibold text-gold">
              <Sparkles className="h-3 w-3" />
              KI-Klassifikation
            </span>
            <span>vor 3 s</span>
          </div>
        </div>
      </div>

      <dl className="mt-5 grid grid-cols-3 gap-3 text-[11px]">
        <div>
          <dt className="uppercase tracking-[0.12em] text-muted-foreground">Klasse</dt>
          <dd className="mt-0.5 font-semibold">Eingangsrechnung</dd>
        </div>
        <div>
          <dt className="uppercase tracking-[0.12em] text-muted-foreground">Konfidenz</dt>
          <dd className="mt-0.5 tabular font-semibold text-gold">97 %</dd>
        </div>
        <div>
          <dt className="uppercase tracking-[0.12em] text-muted-foreground">Akte</dt>
          <dd className="mt-0.5 font-semibold">Debitor 4711</dd>
        </div>
        <div className="col-span-3 grid grid-cols-2 gap-3 border-t border-border pt-3">
          <div>
            <dt className="uppercase tracking-[0.12em] text-muted-foreground">IBAN</dt>
            <dd className="mt-0.5 tabular">AT61 1904 3002 3457 3201</dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.12em] text-muted-foreground">Betrag</dt>
            <dd className="mt-0.5 tabular font-semibold">€ 4 219,80</dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.12em] text-muted-foreground">Fällig</dt>
            <dd className="mt-0.5 tabular">30. 08. 2026</dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.12em] text-muted-foreground">Vertrag</dt>
            <dd className="mt-0.5">Wartung-24-A · v3</dd>
          </div>
        </div>
      </dl>

      <div className="mt-4 flex items-center justify-between rounded-lg bg-cream-dark px-3 py-2 text-[11px]">
        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
          <Inbox className="h-3.5 w-3.5" />
          Task → Sachbearbeiter Berger
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-gold">
          <Check className="h-3.5 w-3.5" />
          Freigabe angefordert
        </span>
      </div>
    </ScreenChrome>
  );
}

/* ------ 2. Hybrid-Suche ------------------------------------------------- */
function ScreenSearch() {
  return (
    <ScreenChrome label="rt / suche">
      <div className="flex items-center gap-2 rounded-lg border border-border bg-cream-dark px-3 py-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <span className="text-xs">
          Verträge mit DSGVO-Löschpflicht nach 30 Tagen
        </span>
      </div>

      <ul className="mt-4 space-y-3">
        {[
          {
            title: "Wartungsvertrag Meridian-Systems",
            hint: "§ 8.4 „... spätestens 30 Kalendertage ...\"",
            match: "97 %",
          },
          {
            title: "AVV Cloudflare (unterzeichnet 2025-11)",
            hint: "Anhang B, Zeile 12 — löscht 30 d nach Ende",
            match: "94 %",
          },
          {
            title: "Datenaustauschvereinbarung ÖGK",
            hint: "Punkt 6 — „binnen eines Monats\"",
            match: "82 %",
          },
        ].map((r) => (
          <li key={r.title} className="rounded-lg border border-border bg-cream-dark/40 px-3 py-2.5 text-xs">
            <div className="flex items-start justify-between gap-3">
              <span className="font-semibold">{r.title}</span>
              <span className="tabular shrink-0 rounded-md bg-gold-soft px-1.5 py-0.5 text-[10px] font-semibold text-gold">
                {r.match}
              </span>
            </div>
            <div className="mt-1 text-[11px] italic text-muted-foreground">{r.hint}</div>
          </li>
        ))}
      </ul>
    </ScreenChrome>
  );
}

/* ------ 3. Branch-Merge ------------------------------------------------- */
function ScreenBranch() {
  return (
    <ScreenChrome label="rt / verträge / Mietvertrag Halle-B">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <GitBranch className="h-4 w-4" />
        <span>3 Branches, 1 Merge pending</span>
      </div>

      <ol className="mt-4 space-y-3">
        {[
          {
            label: "main",
            note: "v4 · Unterzeichnet 2025-11-02",
            active: false,
          },
          {
            label: "verhandlung/anpassung-2026",
            note: "v4-a · § 6 „Wertsicherung\" angepasst",
            active: true,
          },
          {
            label: "review/legal",
            note: "3 Kommentare · warten auf Zustimmung",
            active: false,
          },
        ].map((b) => (
          <li key={b.label} className="flex items-start gap-3 rounded-lg border border-border bg-surface px-3 py-2.5">
            <span
              className={`mt-1 inline-block h-2 w-2 shrink-0 rounded-full ${
                b.active ? "bg-gold" : "bg-border"
              }`}
            />
            <div>
              <div className="text-xs font-semibold">{b.label}</div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">{b.note}</div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-4 rounded-lg bg-ink px-3 py-2 text-[11px] text-cream">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5">
            <GitBranch className="h-3.5 w-3.5 text-gold" />
            Merge nach <span className="font-semibold">main</span>
          </span>
          <span className="tabular text-cream/60">2 Diffs · 0 Konflikte</span>
        </div>
      </div>
    </ScreenChrome>
  );
}
