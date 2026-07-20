/**
 * RecordTailor-Wortmarke — reduziertes SVG-Emblem. Ein Aktendeckel mit
 * horizontaler Faden-Linie (der "Tailor"-Stich, den alle Geschwister teilen).
 */
export function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-label="RecordTailor"
    >
      <rect x="1" y="1" width="30" height="30" rx="15" fill="var(--ink)" />
      <rect x="8.5" y="9" width="15" height="15" rx="1.5" stroke="var(--cream)" strokeWidth="1.4" fill="none" />
      <path d="M8.5 15 H23.5" stroke="var(--gold)" strokeWidth="1.4" strokeDasharray="1.6 1.4" />
      <circle cx="16" cy="15" r="1" fill="var(--gold)" />
    </svg>
  );
}
