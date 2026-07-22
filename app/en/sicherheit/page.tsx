import type { Metadata } from "next";

import SicherheitPage from "@/app/sicherheit/page";
import { bilingualAlternates } from "@/lib/i18n/alternates";
import { DICTS } from "@/lib/i18n/dictionary";

export const metadata: Metadata = {
  title: { absolute: "Security — RecordTailor" },
  description: DICTS.en["sec.meta.desc"],
  alternates: {
    canonical: "/en/sicherheit",
    languages: bilingualAlternates("/sicherheit", "/en/sicherheit"),
  },
};

export default SicherheitPage;
