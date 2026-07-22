import type { Metadata } from "next";

import StoryPage from "@/app/story/page";
import { bilingualAlternates } from "@/lib/i18n/alternates";
import { DICTS } from "@/lib/i18n/dictionary";

export const metadata: Metadata = {
  title: { absolute: "Story — RecordTailor" },
  description: DICTS.en["story.meta.desc"],
  alternates: {
    canonical: "/en/story",
    languages: bilingualAlternates("/story", "/en/story"),
  },
};

export default StoryPage;
