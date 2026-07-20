"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * IntersectionObserver-Reveal: fügt beim Erscheinen `.in` hinzu,
 * damit die CSS-Transition in `globals.css` triggert. Respektiert
 * `prefers-reduced-motion` implizit (Regel liegt im CSS).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            window.setTimeout(() => e.target.classList.add("in"), delay);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  );
}
