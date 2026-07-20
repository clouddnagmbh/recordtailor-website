import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

export const alt = "MeetingTailor — Protokolle nach Maß.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function logoDataUri(): Promise<string> {
  const bytes = await readFile(
    path.join(process.cwd(), "public/brand/meetingtailor-512.png"),
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
          background: "#191926",
          color: "#faf6ef",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Offizielles MeetingTailor-Emblem */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo}
            width={72}
            height={72}
            alt="MeetingTailor"
            style={{ borderRadius: "50%", display: "block" }}
          />
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: -0.3, display: "flex" }}>
            MeetingTailor
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
            Minutes, made to measure.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 600,
              maxWidth: 960,
            }}
          >
            <span style={{ display: "flex" }}>Protokolle</span>
            <span style={{ display: "flex" }}>nach Maß.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            fontSize: 18,
            color: "rgba(250,246,239,0.75)",
          }}
        >
          <span>Sitzung · Transkript · Goldener Faden · On-Premise · DSGVO</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
