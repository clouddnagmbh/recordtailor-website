import { CalendarClock, Mail, MapPin, Phone } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { DICTS } from "@/lib/i18n/dictionary";
import { getLocale, getT } from "@/lib/i18n";
import { bilingualAlternates } from "@/lib/i18n/alternates";

import { ContactForm } from "./contact-form";

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

const CAL_URL = process.env.NEXT_PUBLIC_CAL_URL ?? "https://cal.com/clouddna/recordtailor-demo";

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

      <section className="border-b border-border bg-background py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div>
              <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
                Schreiben Sie uns.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Wir melden uns in der Regel innerhalb eines Werktags. Für dringende Fälle
                erreichen Sie uns telefonisch.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-4">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-2xl border-2 border-gold/40 bg-gold-soft p-6 hover:border-gold"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gold text-white">
                  <CalendarClock className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    Lieber sofort einen Termin
                  </div>
                  <div className="mt-1 font-semibold">30-Minuten-Demo buchen</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Direkt in unseren Kalender. Keine Marketing-Rückrufe.
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${t("contact.mail")}`}
                className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-6 hover:border-gold/60"
              >
                <Mail className="mt-0.5 h-5 w-5 text-gold" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {t("contact.label.mail")}
                  </div>
                  <div className="mt-1 text-sm font-medium">{t("contact.mail")}</div>
                </div>
              </a>

              <a
                href={`tel:${t("contact.phone").replace(/\s/g, "")}`}
                className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-6 hover:border-gold/60"
              >
                <Phone className="mt-0.5 h-5 w-5 text-gold" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {t("contact.label.phone")}
                  </div>
                  <div className="mt-1 text-sm font-medium">{t("contact.phone")}</div>
                </div>
              </a>

              <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-6">
                <MapPin className="mt-0.5 h-5 w-5 text-gold" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {t("contact.label.addr")}
                  </div>
                  <div className="mt-1 text-sm font-medium">{t("contact.address")}</div>
                  <div className="text-xs text-muted-foreground">Untere Hauptstraße 23, 7410</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
