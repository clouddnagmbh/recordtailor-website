import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { LangSwitch } from "@/components/lang-switch";
import { getLocale, getT } from "@/lib/i18n";

export async function SiteHeader() {
  const [t, locale] = await Promise.all([getT(), getLocale()]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-serif text-lg font-semibold tracking-tight"
        >
          <BrandMark size={26} />
          RecordTailor
        </Link>

        <nav className="hidden items-center gap-5 text-sm md:flex" aria-label="Primary">
          <Link href="/produkt" className="text-muted-foreground hover:text-foreground">
            {t("nav.produkt")}
          </Link>
          <Link href="/migration" className="text-muted-foreground hover:text-foreground">
            {t("nav.migration")}
          </Link>
          <Link href="/vergleich" className="text-muted-foreground hover:text-foreground">
            Vergleich
          </Link>
          <Link href="/on-premise" className="text-muted-foreground hover:text-foreground">
            {t("nav.onprem")}
          </Link>
          <Link href="/sicherheit" className="text-muted-foreground hover:text-foreground">
            {t("nav.sicherheit")}
          </Link>
          <Link href="/preise" className="text-muted-foreground hover:text-foreground">
            {t("nav.preise")}
          </Link>
          <Link href="/blog" className="text-muted-foreground hover:text-foreground">
            {t("nav.blog")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch current={locale} />
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-1.5 rounded-xl bg-ink px-4 py-2 text-sm font-semibold text-cream shadow-soft hover:bg-ink-soft"
          >
            {t("nav.cta_primary")}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
