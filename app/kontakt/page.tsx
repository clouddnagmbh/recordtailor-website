import { Mail, MapPin, Phone } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { DICTS } from "@/lib/i18n/dictionary";
import { getLocale, getT } from "@/lib/i18n";
import { bilingualAlternates } from "@/lib/i18n/alternates";

export async function generateMetadata() {
  const l = await getLocale();
  return {
    title: l === "en" ? "Contact" : "Kontakt",
    description: DICTS[l]["contact.meta.desc"],
    alternates: {
      canonical: "/kontakt",
      languages: bilingualAlternates("/kontakt", "/en/kontakt"),
    },
  };
}

export default async function KontaktPage() {
  const t = await getT();
  return (
    <div>
      <Breadcrumbs
        crumbs={[
          { label: "Start", href: "/" },
          { label: t("nav.cta_primary"), href: "/kontakt" },
        ]}
      />
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
              {t("contact.title")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t("contact.body")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-4xl gap-4 px-5 sm:grid-cols-3">
          <Reveal>
            <a
              href={`mailto:${t("contact.mail")}`}
              className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-surface p-6 hover:border-gold/60"
            >
              <Mail className="h-5 w-5 text-gold" />
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {t("contact.label.mail")}
              </div>
              <div className="text-sm font-medium">{t("contact.mail")}</div>
            </a>
          </Reveal>
          <Reveal delay={80}>
            <a
              href={`tel:${t("contact.phone").replace(/\s/g, "")}`}
              className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-surface p-6 hover:border-gold/60"
            >
              <Phone className="h-5 w-5 text-gold" />
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {t("contact.label.phone")}
              </div>
              <div className="text-sm font-medium">{t("contact.phone")}</div>
            </a>
          </Reveal>
          <Reveal delay={160}>
            <div className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-surface p-6">
              <MapPin className="h-5 w-5 text-gold" />
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {t("contact.label.addr")}
              </div>
              <div className="text-sm font-medium">{t("contact.address")}</div>
              <div className="text-xs text-muted-foreground">Untere Hauptstraße 23, 7410</div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
