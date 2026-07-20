import Link from "next/link";
import { ArrowRight, Check, Cloud, ServerCog } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { DICTS } from "@/lib/i18n/dictionary";
import { getLocale, getT } from "@/lib/i18n";

export async function generateMetadata() {
  const l = await getLocale();
  return {
    title: l === "en" ? "Pricing" : "Preise",
    description: DICTS[l]["price.meta.desc"],
  };
}

export default async function PreisePage() {
  const t = await getT();
  return (
    <div>
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {t("price.eyebrow")}
            </div>
            <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
              {t("price.title")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t("price.body")}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {t("price.cta.body")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-5 lg:grid-cols-2">
          {/* On-Premise Product */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold-soft text-gold">
                <ServerCog className="h-5 w-5" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {t("price.track.onprem.label")}
              </div>
              <h2 className="mt-1 font-serif text-2xl font-medium tracking-tight">
                {t("price.track.onprem.title")}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {t("price.track.onprem.body")}
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{t(`price.included.${i}`)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <div className="flex items-baseline justify-between border-t border-border pt-6">
                  <span className="text-sm text-muted-foreground">
                    {t("price.label.base")}
                  </span>
                  <span className="font-serif text-2xl">{t("price.label.onrequest")}</span>
                </div>
                <Link
                  href="/kontakt"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-cream shadow-soft hover:bg-ink-soft"
                >
                  {t("price.cta.button")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Managed Service */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-2xl border-2 border-gold/40 bg-gold-soft p-8">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-white">
                <Cloud className="h-5 w-5" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                {t("price.track.managed.label")}
              </div>
              <h2 className="mt-1 font-serif text-2xl font-medium tracking-tight">
                {t("price.track.managed.title")}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {t("price.track.managed.body")}
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{t(`price.managed.included.${i}`)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <div className="flex items-baseline justify-between border-t border-gold/30 pt-6">
                  <span className="text-sm text-muted-foreground">
                    {t("price.label.monthly")}
                  </span>
                  <span className="font-serif text-2xl">{t("price.label.onrequest")}</span>
                </div>
                <Link
                  href="/kontakt"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-white hover:bg-gold-hover"
                >
                  {t("price.cta.button")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium tracking-tight">
              {t("price.rechner.title")}
            </h2>
            <p className="mt-4 text-muted-foreground">{t("price.rechner.body")}</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
