import { cookies, headers } from "next/headers";

import { DEFAULT_LOCALE, DICTS, LOCALES, type Locale } from "./dictionary";

export const LOCALE_COOKIE = "rt_locale";

/**
 * Aktive Locale: Cookie > Accept-Language > DE.
 */
export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieVal = cookieStore.get(LOCALE_COOKIE)?.value as Locale | undefined;
  if (cookieVal && LOCALES.includes(cookieVal)) return cookieVal;

  const h = await headers();
  const accept = h.get("accept-language") ?? "";
  if (/(^|,|\s)en\b/i.test(accept)) return "en";
  if (/(^|,|\s)de\b/i.test(accept)) return "de";
  return DEFAULT_LOCALE;
}

/**
 * Server-Curry: liefert `t(key, params?)` mit EN→DE-Fallback und
 * einfacher `{name}`-Platzhalter-Interpolation.
 */
export async function getT() {
  const locale = await getLocale();
  const primary = DICTS[locale];
  const fallback = DICTS[DEFAULT_LOCALE];

  return function t(key: string, params?: Record<string, string | number>): string {
    let raw = primary[key] ?? fallback[key] ?? key;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        raw = raw.replaceAll(`{${k}}`, String(v));
      }
    }
    return raw;
  };
}

export type { Locale } from "./dictionary";
export { LOCALES, DEFAULT_LOCALE } from "./dictionary";
