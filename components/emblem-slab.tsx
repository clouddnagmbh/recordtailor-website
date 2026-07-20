import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { getT } from "@/lib/i18n";

/**
 * Der Emblem-Slab — nimmt die zwei Bogen-Zeilen des Logos ("Made to
 * Measure" oben, "Built for Workflows" unten) und reisst sie architek-
 * tonisch auf die volle Sektionsbreite auf. Das Logo steht im Zentrum,
 * die drei Zahlen darunter füllen die Marke mit Substanz ("es ist
 * gemessen, nicht geraten").
 */
export async function EmblemSlab() {
  const t = await getT();
  return (
    <section className="relative overflow-hidden border-b border-border bg-ink text-cream">
      {/* Radial gold glow behind emblem */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(201,162,39,0.35), rgba(11,17,32,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 py-24">
        {/* Bogen-Zeile oben — "MADE TO MEASURE" */}
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/60" />
            <span>{t("emblem.top")}</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
        </div>

        {/* Logo — gross, mittig, mit doppeltem Ring aus dem Ink-Hintergrund */}
        <div className="mt-10 flex justify-center">
          <Reveal>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-full border border-gold/20"
              />
              <div
                aria-hidden
                className="absolute -inset-10 rounded-full border border-gold/10"
              />
              <Image
                src="/brand/recordtailor.png"
                alt="RecordTailor — Made to measure. Built for workflows."
                width={280}
                height={280}
                priority
                className="relative block drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
              />
            </div>
          </Reveal>
        </div>

        {/* Bogen-Zeile unten — "BUILT FOR WORKFLOWS" */}
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/60" />
            <span>{t("emblem.bottom")}</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
        </div>

        {/* Statement */}
        <Reveal delay={120}>
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl">
              {t("emblem.headline")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream/75">
              {t("emblem.body")}
            </p>
          </div>
        </Reveal>

        {/* Drei „gemessene" Zahlen */}
        <div className="mt-14 grid gap-8 border-t border-ink-border pt-10 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="text-center">
                <div className="tabular font-serif text-5xl font-medium text-gold">
                  {t(`emblem.measure.${i}.n`)}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.22em] text-cream/60">
                  {t(`emblem.measure.${i}.l`)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
