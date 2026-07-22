/**
 * hreflang-Helfer: baut das paarweise DE↔EN-Alternates-Objekt für
 * Next.js `metadata.alternates.languages`. Wenn eine Seite kein EN-Pendant
 * hat, ruft man die Variante ohne `enPath` auf — dann trägt hreflang nur
 * DE-Varianten + x-default.
 */

export type HreflangMap = Record<string, string>;

export function bilingualAlternates(dePath: string, enPath: string): HreflangMap {
  return {
    "de-AT": dePath,
    "de-DE": dePath,
    "de-CH": dePath,
    en: enPath,
    "x-default": dePath,
  };
}

export function deOnlyAlternates(dePath: string): HreflangMap {
  return {
    "de-AT": dePath,
    "de-DE": dePath,
    "de-CH": dePath,
    "x-default": dePath,
  };
}
