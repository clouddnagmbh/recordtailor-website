import type { Metadata } from "next";

import PreisePage from "@/app/preise/page";
import { bilingualAlternates } from "@/lib/i18n/alternates";
import { DICTS } from "@/lib/i18n/dictionary";

export const metadata: Metadata = {
  title: { absolute: "Pricing — RecordTailor" },
  description: DICTS.en["price.meta.desc"],
  alternates: {
    canonical: "/en/preise",
    languages: bilingualAlternates("/preise", "/en/preise"),
  },
};

export default PreisePage;
