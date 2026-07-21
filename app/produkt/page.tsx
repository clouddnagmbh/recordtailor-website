import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  GitBranch,
  Layers,
  Network,
  Plug,
  ScanLine,
  Search,
  Wand2,
} from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { DICTS } from "@/lib/i18n/dictionary";
import { getLocale, getT } from "@/lib/i18n";

export async function generateMetadata() {
  const l = await getLocale();
  return {
    title: l === "en" ? "Product" : "Produkt",
    description: DICTS[l]["produkt.meta.desc"],
  };
}

const FEATURES = [
  { icon: BrainCircuit, i: 1 },
  { icon: Wand2, i: 6 },
  { icon: ScanLine, i: 7 },
  { icon: Layers, i: 8 },
  { icon: GitBranch, i: 2 },
  { icon: Search, i: 3 },
  { icon: Network, i: 4 },
  { icon: Plug, i: 5 },
];

export default async function ProduktPage() {
  const t = await getT();
  return (
    <div>
      <Breadcrumbs
        crumbs={[
          { label: "Start", href: "/" },
          { label: t("nav.produkt"), href: "/produkt" },
        ]}
      />
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {t("nav.produkt")}
            </div>
            <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
              {t("feat.title")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{t("feat.sub")}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, i }) => (
            <Reveal key={i} delay={i * 60}>
              <article className="h-full rounded-2xl border border-border bg-surface p-8">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-soft text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="font-serif text-2xl font-medium tracking-tight">
                  {t(`feat.${i}.title`)}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {t(`feat.${i}.body`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-16 text-cream">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-5 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            {t("produkt.cta.title")}
          </h2>
          <p className="text-cream/80">{t("produkt.cta.body")}</p>
          <Link
            href="/kontakt"
            className="mt-2 inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-white hover:bg-gold-hover"
          >
            {t("produkt.cta.button")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
