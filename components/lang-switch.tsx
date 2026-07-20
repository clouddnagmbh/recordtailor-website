"use client";

import { useTransition } from "react";

import { setLocale } from "@/lib/i18n/actions";
import type { Locale } from "@/lib/i18n";

/**
 * Sprach-Umschalter — zwei Tabs, eine Naht darunter. Der goldene Stich
 * gleitet zwischen DE und EN. Das Motiv "Faden zieht sich durch" ist die
 * gemeinsame Bildsprache aller Tailors und ersetzt hier den üblichen
 * Dropdown.
 *
 * Server-Action `setLocale` setzt den Cookie und revalidiert die Layout-
 * Tree; Next fährt die Seite auf der neuen Sprache aus.
 */
const LOCALES: { code: Locale; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
];

export function LangSwitch({ current }: { current: Locale }) {
  const [pending, start] = useTransition();
  const activeIndex = current === "en" ? 1 : 0;

  return (
    <div
      role="group"
      aria-label="Sprache / Language"
      className="relative inline-flex select-none items-center"
    >
      {LOCALES.map((loc) => {
        const isActive = loc.code === current;
        return (
          <button
            key={loc.code}
            type="button"
            onClick={() => !isActive && start(() => setLocale(loc.code))}
            disabled={pending || isActive}
            aria-pressed={isActive}
            className={`relative px-2.5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
              isActive
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            } ${pending ? "opacity-70" : ""}`}
          >
            {loc.label}
          </button>
        );
      })}
      {/* Der Faden — dünn, mit einem goldenen Stich, der die aktive Sprache heftet. */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0.5 left-0 h-px w-full bg-[repeating-linear-gradient(90deg,var(--border)_0_3px,transparent_3px_6px)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 h-[3px] w-[calc(50%-4px)] rounded-full bg-gold transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(${activeIndex === 0 ? "2px" : "calc(100% + 6px)"})`,
        }}
      />
    </div>
  );
}
