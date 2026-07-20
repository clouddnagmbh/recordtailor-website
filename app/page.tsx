import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  GitBranch,
  GitCommit,
  Lock,
  Network,
  Plug,
  ScanLine,
  Search,
  ShieldCheck,
  Timer,
} from "lucide-react";

import { AppScreens } from "@/components/app-screens";
import { AustriaBadge } from "@/components/austria-badge";
import { Reveal } from "@/components/reveal";
import { TailorFamilySection } from "@/components/tailor-family";
import { getT } from "@/lib/i18n";

export default async function Home() {
  const t = await getT();

  return (
    <div>
      {/* S1 — Hero */}
      <section className="relative overflow-hidden border-b border-border bg-cream">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cream-dark/60 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                {t("hero.eyebrow")}
              </div>
              <h1 className="mt-4 font-serif text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl">
                {t("hero.headline")}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {t("hero.sub")}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-cream shadow-soft hover:bg-ink-soft"
                >
                  {t("hero.cta.primary")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/produkt"
                  className="inline-flex items-center gap-2 rounded-xl border border-ink/20 bg-background px-5 py-3 text-sm font-medium hover:bg-surface-muted"
                >
                  {t("hero.cta.secondary")}
                </Link>
              </div>

              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t("hero.proof")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-14 max-w-3xl rounded-2xl border border-border bg-surface p-6 shadow-elevated sm:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                <Timer className="mr-1 inline h-3 w-3" />
                {t("moment.eyebrow")}
              </div>
              <ul className="mt-4 space-y-4">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] items-start gap-4">
                    <span className="tabular rounded-md bg-gold-soft px-2 py-0.5 text-sm font-semibold text-gold">
                      {t(i === 1 ? "hero.moment.time" : `hero.moment.time${i}`)}
                    </span>
                    <p className="text-sm text-foreground">
                      {t(i === 1 ? "hero.moment.event" : `hero.moment.event${i}`)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* S2 — Trustbar */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gold" aria-hidden />
              {t(`trust.${i}`)}
            </span>
          ))}
        </div>
      </section>

      {/* S3 — Positioning line */}
      <section className="border-b border-border bg-ink text-cream">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <h2 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
              {t("line.title")}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-cream/80">
              {t("line.body")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* S3b — App-Screens */}
      <AppScreens />

      {/* S4 — Feature grid */}
      <section id="features" className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <header className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                {t("featgrid.eyebrow")}
              </div>
              <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                {t("feat.title")}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {t("feat.sub")}
              </p>
            </header>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: BrainCircuit, i: 1 },
              { icon: GitBranch, i: 2 },
              { icon: Search, i: 3 },
              { icon: Network, i: 4 },
              { icon: Plug, i: 5 },
              { icon: ScanLine, i: 6 },
            ].map(({ icon: Icon, i }) => (
              <Reveal key={i} delay={i * 60}>
                <article className="h-full rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-elevated">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold-soft text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{t(`feat.${i}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`feat.${i}.body`)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* S5 — On-Premise */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                {t("prem.eyebrow")}
              </div>
              <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                {t("prem.title")}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                {t("prem.body")}
              </p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm">
                <Lock className="h-4 w-4 text-gold" />
                <span className="font-semibold">{t("nocloud.pill1")}</span>
                <span className="text-muted-foreground">{t("nocloud.pill2")}</span>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {[1, 2, 3].map((i) => (
              <Reveal key={i} delay={i * 80}>
                <article className="rounded-2xl border border-border bg-surface p-6">
                  <h3 className="text-lg font-semibold">{t(`prem.p${i}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`prem.p${i}.body`)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* S6 — Compare */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <header className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                {t("cmp.eyebrow")}
              </div>
              <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                {t("cmp.title")}
              </h2>
            </header>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-border bg-surface-muted p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {t("cmp.legacy.title")}
                </div>
                <ul className="mt-4 space-y-3 text-sm">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                      <span className="text-muted-foreground line-through decoration-thread-red/60 decoration-1">
                        {t(`cmp.legacy.${i}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl border-2 border-gold/50 bg-gold-soft p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  {t("cmp.rt.title")}
                </div>
                <ul className="mt-4 space-y-3 text-sm">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span className="text-foreground">{t(`cmp.rt.${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* S7 — Sicherheit */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <header className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                {t("sec.eyebrow")}
              </div>
              <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                {t("sec.title")}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {t("sec.body")}
              </p>
            </header>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{t(`sec.item${i}`)}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* S8 — Preise */}
      <section className="border-b border-border bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                {t("price.eyebrow")}
              </div>
              <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                {t("price.title")}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-cream/80">
                {t("price.body")}
              </p>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/80">
                {t("price.cta.body")}
              </p>
              <Link
                href="/kontakt"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-white hover:bg-gold-hover"
              >
                {t("price.cta.button")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-ink-border bg-ink-soft p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/60">
                {t("price.included.title")}
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{t(`price.included.${i}`)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-ink-border pt-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-cream/70">{t("price.label.price")}</span>
                  <span className="font-serif text-2xl">{t("price.label.onrequest")}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* S9 — FAQ */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              {t("faq.title")}
            </h2>
          </Reveal>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface">
            {[1, 2, 3, 4, 5].map((i) => (
              <details key={i} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-semibold">
                  <span>{t(`faq.q${i}`)}</span>
                  <span className="mt-1 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(`faq.a${i}`)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <TailorFamilySection currentSlug="recordtailor" />

      {/* S11 — Final CTA */}
      <section className="border-t border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              <GitCommit className="mr-1 inline h-3 w-3" />
              {t("cta.eyebrow")}
            </div>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
              {t("cta.title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("cta.body")}</p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-cream shadow-soft hover:bg-ink-soft"
            >
              {t("cta.button")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-8 inline-flex">
              <AustriaBadge label={t("footer.austria")} />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
