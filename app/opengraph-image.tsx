import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

export const alt = "RecordTailor — Every record measures.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function logoDataUri(): Promise<string> {
  const bytes = await readFile(
    path.join(process.cwd(), "public/brand/recordtailor.png"),
  );
  return `data:image/png;base64,${bytes.toString("base64")}`;
}

export default async function OG() {
  const logo = await logoDataUri();
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0b1120",
          color: "#f7f8fb",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Offizielles RecordTailor-Emblem */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo}
            width={88}
            height={88}
            alt="RecordTailor"
            style={{ borderRadius: "50%", display: "block" }}
          />
          <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: -0.3, display: "flex" }}>
            RecordTailor
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#c9a227",
              fontWeight: 700,
            }}
          >
            Every record measures.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 600,
              maxWidth: 1000,
            }}
          >
            <span style={{ display: "flex" }}>Dokumente.</span>
            <span style={{ display: "flex" }}>Nach Maß.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            fontSize: 18,
            color: "rgba(247,248,251,0.72)",
          }}
        >
          <span>KI-Triage · Branches · Hybrid-Suche · Knowledge Graph · On-Prem oder Managed</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
