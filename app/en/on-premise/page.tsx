import type { Metadata } from "next";

import OnPremisePage from "@/app/on-premise/page";
import { bilingualAlternates } from "@/lib/i18n/alternates";
import { DICTS } from "@/lib/i18n/dictionary";

export const metadata: Metadata = {
  title: { absolute: "On-premise — RecordTailor" },
  description: DICTS.en["onprem.meta.desc"],
  alternates: {
    canonical: "/en/on-premise",
    languages: bilingualAlternates("/on-premise", "/en/on-premise"),
  },
};

export default OnPremisePage;
