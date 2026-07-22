import Link from "next/link";

import { AustriaBadge } from "@/components/austria-badge";
import { BrandMark } from "@/components/brand-mark";
import { getT } from "@/lib/i18n";
import { PRODUKT_PAGES } from "@/lib/produkt-data";

export async function SiteFooter() {
  const t = await getT();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-4">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 font-serif text-lg font-semibold">
            <BrandMark />
            RecordTailor
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">{t("footer.tagline")}</p>
          <div className="mt-3">
            <AustriaBadge label={t("footer.austria")} />
          </div>
        </div>

        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {t("footer.product")}
          </div>
          <ul className="space-y-1.5 text-sm">
            <li>
              <Link href="/produkt" className="hover:text-foreground">
                {t("nav.produkt")}
              </Link>
            </li>
            {PRODUKT_PAGES.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/produkt/${p.slug}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {p.eyebrow}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Unternehmen
          </div>
          <ul className="space-y-1.5 text-sm">
            <li>
              <Link href="/story" className="hover:text-foreground">
                {t("nav.story")}
              </Link>
            </li>
            <li>
              <Link href="/preise" className="hover:text-foreground">
                {t("nav.preise")}
              </Link>
            </li>
            <li>
              <Link href="/on-premise" className="hover:text-foreground">
                {t("nav.onprem")}
              </Link>
            </li>
            <li>
              <Link href="/migration" className="hover:text-foreground">
                {t("nav.migration")}
              </Link>
            </li>
            <li>
              <Link href="/vergleich" className="hover:text-foreground">
                Vergleich
              </Link>
            </li>
            <li>
              <Link href="/branchen" className="hover:text-foreground">
                Branchen
              </Link>
            </li>
            <li>
              <Link href="/glossar" className="hover:text-foreground">
                Glossar
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-foreground">
                {t("nav.cta_primary")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {t("footer.legal")}
          </div>
          <ul className="space-y-1.5 text-sm">
            <li>
              <Link href="/sicherheit" className="hover:text-foreground">
                {t("nav.sicherheit")}
              </Link>
            </li>
            <li>
              <Link href="/impressum" className="hover:text-foreground">
                {t("footer.impressum")}
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-foreground">
                {t("footer.datenschutz")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-[11px] text-muted-foreground">
        {t("footer.copyright", { year })}
      </div>
    </footer>
  );
}
