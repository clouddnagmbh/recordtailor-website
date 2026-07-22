import type { Metadata } from "next";

import ProduktPage from "@/app/produkt/page";
import { bilingualAlternates } from "@/lib/i18n/alternates";
import { DICTS } from "@/lib/i18n/dictionary";

export const metadata: Metadata = {
  title: { absolute: "Product — RecordTailor" },
  description: DICTS.en["produkt.meta.desc"],
  alternates: {
    canonical: "/en/produkt",
    languages: bilingualAlternates("/produkt", "/en/produkt"),
  },
};

export default ProduktPage;
