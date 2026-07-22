import type { Metadata } from "next";

import Home from "@/app/page";
import { bilingualAlternates } from "@/lib/i18n/alternates";
import { DICTS } from "@/lib/i18n/dictionary";

export const metadata: Metadata = {
  title: { absolute: "RecordTailor — The most modern DMS on the market. AI-native. On-premise, public or private cloud." },
  description: DICTS.en["meta.description"],
  alternates: {
    canonical: "/en",
    languages: bilingualAlternates("/", "/en"),
  },
  openGraph: { locale: "en_US" },
};

export default Home;
