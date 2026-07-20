import Link from "next/link";
import { ArrowRight, Lock, ServerCog, ShieldOff } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { DICTS } from "@/lib/i18n/dictionary";
import { getLocale, getT } from "@/lib/i18n";

export async function generateMetadata() {
  const l = await getLocale();
  return {
    title: l === "en" ? "On-premise" : "On-Premise",
    description: DICTS[l]["onprem.meta.desc"],
  };
}

export default async function OnPremisePage() {
  const t = await getT();
  return (
    <div>
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {t("prem.eyebrow")}
            </div>
            <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
              {t("prem.title")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t("prem.body")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-16 sm:grid-cols-3">
          {[
            { icon: ShieldOff, i: 1 },
            { icon: Lock, i: 2 },
            { icon: ServerCog, i: 3 },
          ].map(({ icon: Icon, i }) => (
            <Reveal key={i} delay={i * 80}>
              <article className="h-full rounded-2xl border border-border bg-surface p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold-soft text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold">{t(`prem.p${i}.title`)}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(`prem.p${i}.body`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              {t("onprem.req.title")}
            </h2>
            <ul className="mt-8 space-y-4 text-base">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="rounded-xl border border-border bg-surface p-5">
                  <div className="font-semibold">{t(`onprem.req.${i}.title`)}</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {t(`onprem.req.${i}.body`)}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-16 text-cream">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-5 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight">
            {t("onprem.cta.title")}
          </h2>
          <p className="text-cream/80">{t("onprem.cta.body")}</p>
          <Link
            href="/kontakt"
            className="mt-2 inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-white hover:bg-gold-hover"
          >
            {t("onprem.cta.button")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
