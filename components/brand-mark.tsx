import Image from "next/image";

/**
 * RecordTailor-Wortmarke — das runde Navy-Gold-Emblem
 * ("MADE TO MEASURE · BUILT FOR WORKFLOWS"). Ausgeliefert aus
 * /public/brand — Next optimiert und schneidet die Größe on-the-fly.
 */
export function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/brand/recordtailor.png"
      alt="RecordTailor"
      width={size}
      height={size}
      priority
      className="shrink-0 rounded-full"
    />
  );
}
