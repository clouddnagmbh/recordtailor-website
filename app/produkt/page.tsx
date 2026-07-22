import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  GitBranch,
  Inbox,
  Layers,
  MessageCircleQuestion,
  Network,
  Plug,
  ScanLine,
  Search,
  ShieldCheck,
  Wand2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { DICTS } from "@/lib/i18n/dictionary";
import { getLocale, getT } from "@/lib/i18n";
import { PRODUKT_PAGES } from "@/lib/produkt-data";
import { bilingualAlternates } from "@/lib/i18n/alternates";

export async function generateMetadata() {
  const l = await getLocale();
  return {
    title: l === "en" ? "Product" : "Produkt",
    description: DICTS[l]["produkt.meta.desc"],
    alternates: {
      canonical: "/produkt",
      languages: bilingualAlternates("/produkt", "/en/produkt"),
    },
  };
}

const FEATURE_PAGE_ICONS: Record<string, LucideIcon> = {
  "ki-agenten": BrainCircuit,
  wissen: Search,
  workflows: Workflow,
  posteingang: Inbox,
  compliance: ShieldCheck,
  integrationen: Network,
};

/**
 * Die zwölf Fähigkeiten aus der Homepage-Feature-Grid — auf /produkt zeigen
 * wir sie mit Deep-Links auf die jeweils passendste Feature-Seite. So bleibt
 * die Homepage-Aussage („Zwölf Fähigkeiten") konsistent zur Produkt-Übersicht.
 */
const CAPABILITIES: Array<{ icon: LucideIcon; i: number; href?: string }> = [
  { icon: BrainCircuit, i: 9, href: "/produkt/ki-agenten" },
  { icon: MessageCircleQuestion, i: 10, href: "/produkt/wissen" },
  { icon: Workflow, i: 11, href: "/produkt/workflows" },
  { icon: Inbox, i: 12, href: "/produkt/posteingang" },
  { icon: Wand2, i: 1, href: "/produkt/posteingang" },
  { icon: Wand2, i: 6 },
  { icon: ScanLine, i: 7, href: "/produkt/posteingang" },
  { icon: Layers, i: 8, href: "/produkt/posteingang" },
  { icon: GitBranch, i: 2 },
  { icon: Search, i: 3, href: "/produkt/wissen" },
  { icon: Network, i: 4, href: "/produkt/wissen" },
  { icon: Plug, i: 5, href: "/produkt/integrationen" },
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
              Sechs Themen. Zwölf Fähigkeiten. Ein Dokumentensystem.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              KI-Agenten, die heute produktiv arbeiten. Ein Chat, der mit Belegen antwortet.
              Workflows, die Sie in einem Satz beschreiben. Ein Posteingang, egal wie das
              Dokument ankommt. Compliance, die als Architektur mitgebaut wurde. Und
              Anschluss an alles, was Sie schon haben — SAP, DATEV, CMIS, MCP.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section 1: Die 6 Feature-Themen als Übersichts-Karten */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Reveal>
            <header className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Feature-Seiten im Detail
              </div>
              <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                Sechs Themen — jedes eine eigene Seite.
              </h2>
            </header>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUKT_PAGES.map((p, idx) => {
              const Icon = FEATURE_PAGE_ICONS[p.slug] ?? BrainCircuit;
              return (
                <Reveal key={p.slug} delay={idx * 60}>
                  <Link
                    href={`/produkt/${p.slug}`}
                    className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8 transition-shadow hover:shadow-elevated"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-soft text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {p.eyebrow}
                    </div>
                    <h3 className="mt-1 font-serif text-2xl font-medium tracking-tight">
                      {p.h1}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.glance[0]}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                      Details
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Die 12 Fähigkeiten — synchron zur Homepage */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16">
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
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map(({ icon: Icon, i, href }) => {
              const inner = (
                <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-elevated">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold-soft text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{t(`feat.${i}.title`)}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {t(`feat.${i}.body`)}
                  </p>
                  {href ? (
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold">
                      Details
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  ) : null}
                </article>
              );
              return (
                <Reveal key={i} delay={i * 50}>
                  {href ? <Link href={href}>{inner}</Link> : inner}
                </Reveal>
              );
            })}
          </div>
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
