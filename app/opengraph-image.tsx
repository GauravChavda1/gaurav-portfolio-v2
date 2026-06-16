import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#030712",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "sans-serif",
        borderLeft: "6px solid #3b82f6",
      }}
    >
      <div style={{ color: "#475569", fontSize: 22, marginBottom: 20 }}>
        gauravchavda.in
      </div>
      <div style={{ color: "#f1f5f9", fontSize: 58, fontWeight: 700, lineHeight: 1.1, marginBottom: 20 }}>
        Gaurav Chavda
      </div>
      <div style={{ color: "#3b82f6", fontSize: 30, marginBottom: 28 }}>
        Flutter Developer · Ahmedabad, India
      </div>
      <div style={{ color: "#64748b", fontSize: 20 }}>
        3+ years · Fintech · SaaS · HR Tech · Community Platforms
      </div>
    </div>
  );
}