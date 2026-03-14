import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "PCBO"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#fafafa",
            marginBottom: 24,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          PCBO
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#a1a1aa",
            lineHeight: 1.5,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Pedro Oliveira. Building from Lisbon.
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#71717a",
            marginTop: 16,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Some posts written by MacGyver, his AI chief of staff in training. 🫡
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#52525b",
            marginTop: 48,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          pcbo.dev
        </div>
      </div>
    ),
    { ...size }
  )
}
