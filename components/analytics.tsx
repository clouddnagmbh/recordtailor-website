"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Cookielose Marketing-Analytics. Pageview + CTA-Klicks. Session-ID im
 * sessionStorage (kein Cookie → kein Consent-Banner nötig). Endpoint
 * über ENV konfigurierbar; wenn nicht gesetzt, wird gar nichts gesendet.
 */
const SID_KEY = "mt_ma_sid";
const SITE_KEY_ENV = process.env.NEXT_PUBLIC_ANALYTICS_SITE_KEY;
const ENDPOINT_ENV = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;

function sid(): string {
  try {
    let v = sessionStorage.getItem(SID_KEY);
    if (!v) {
      v = crypto.randomUUID();
      sessionStorage.setItem(SID_KEY, v);
    }
    return v;
  } catch {
    return "";
  }
}

function post(body: Record<string, unknown>) {
  const endpoint = ENDPOINT_ENV;
  if (!endpoint) return;
  const payload = JSON.stringify({ ...body, k: SITE_KEY_ENV ?? "mt_marketing" });
  try {
    if (navigator.sendBeacon) {
      const ok = navigator.sendBeacon(endpoint, new Blob([payload], { type: "application/json" }));
      if (ok) return;
    }
  } catch {
    /* fallthrough */
  }
  try {
    fetch(endpoint, {
      method: "POST",
      body: payload,
      keepalive: true,
      credentials: "omit",
      headers: { "content-type": "application/json" },
    });
  } catch {
    /* swallow */
  }
}

export function Analytics() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.navigator?.doNotTrack === "1") return;

    const s = search?.toString() ?? "";
    post({
      t: "pageview",
      s: sid(),
      u: pathname + (s ? `?${s}` : ""),
      r: document.referrer || null,
      w: window.innerWidth,
      d: navigator.language,
      p: {
        utm_source: search?.get("utm_source") ?? undefined,
        utm_medium: search?.get("utm_medium") ?? undefined,
        utm_campaign: search?.get("utm_campaign") ?? undefined,
      },
    });

    const handler = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const a = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      const label = (a.textContent ?? "").trim().slice(0, 80);
      let name: string | null = null;
      if (href.includes("/demo")) name = "cta_demo";
      else if (href.includes("/preise") || href.includes("/pricing")) name = "cta_pricing";
      else if (/^https?:\/\//i.test(href) && !href.includes("meetingtailor")) name = "outbound";
      if (!name) return;
      post({
        t: "custom",
        n: name,
        s: sid(),
        u: pathname,
        p: { href: href.slice(0, 300), label },
      });
    };
    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, [pathname, search]);

  return null;
}
