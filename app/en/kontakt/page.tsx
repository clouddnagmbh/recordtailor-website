import type { Metadata } from "next";

import KontaktPage from "@/app/kontakt/page";
import { bilingualAlternates } from "@/lib/i18n/alternates";
import { DICTS } from "@/lib/i18n/dictionary";

export const metadata: Metadata = {
  title: { absolute: "Contact — RecordTailor" },
  description: DICTS.en["contact.meta.desc"],
  alternates: {
    canonical: "/en/kontakt",
    languages: bilingualAlternates("/kontakt", "/en/kontakt"),
  },
};

export default KontaktPage;
