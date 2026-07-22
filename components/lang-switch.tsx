"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/lib/i18n";

/**
 * Sprach-Umschalter — zwei Tabs, eine Naht darunter. Der goldene Stich
 * gleitet zwischen DE und EN. Ab Phase 3 ein echter Link auf die jeweils
 * andere Sprachvariante (`/foo` ↔ `/en/foo`) — kein Cookie-Toggle mehr,
 * damit die URLs eindeutig indexierbar sind. Wenn für die aktuelle Seite
 * kein EN-Pendant existiert, führt der EN-Link auf die EN-Startseite.
 */
const KNOWN_EN_ROUTES = new Set<string>([
  "/",
  "/produkt",
  "/produkt/ki-agenten",
  "/produkt/wissen",
  "/produkt/workflows",
  "/produkt/posteingang",
  "/produkt/compliance",
  "/produkt/integrationen",
  "/on-premise",
  "/sicherheit",
  "/preise",
  "/kontakt",
  "/story",
]);

const LABELS: { code: Locale; label: string; hreflang: string }[] = [
  { code: "de", label: "DE", hreflang: "de-AT" },
  { code: "en", label: "EN", hreflang: "en" },
];

function stripEnPrefix(path: string): string {
  if (path === "/en") return "/";
  if (path.startsWith("/en/")) return path.slice(3);
  return path;
}

function toEn(path: string): string {
  const dePath = stripEnPrefix(path);
  if (!KNOWN_EN_ROUTES.has(dePath)) return "/en";
  return dePath === "/" ? "/en" : `/en${dePath}`;
}

export function LangSwitch({ current }: { current: Locale }) {
  const pathname = usePathname() ?? "/";
  const activeIndex = current === "en" ? 1 : 0;

  const links: Record<Locale, string> = {
    de: stripEnPrefix(pathname),
    en: toEn(pathname),
  };

  return (
    <div
      role="group"
      aria-label="Sprache / Language"
      className="relative inline-flex select-none items-center"
    >
      {LABELS.map((loc) => {
        const isActive = loc.code === current;
        const baseClasses = `relative px-2.5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
          isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        }`;
        if (isActive) {
          return (
            <span
              key={loc.code}
              aria-current="true"
              className={`${baseClasses} cursor-default`}
            >
              {loc.label}
            </span>
          );
        }
        return (
          <Link
            key={loc.code}
            href={links[loc.code]}
            hrefLang={loc.hreflang}
            className={baseClasses}
          >
            {loc.label}
          </Link>
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
