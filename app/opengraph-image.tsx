import { ImageResponse } from "next/og";

export const alt = "Jessika Marisca, product designer who builds";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#F6EEE3", color: "#0E2A47" }}>
        <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em" }}>JESSIKA MARISCA</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 96, fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 0.95 }}>
          <span>I design products</span>
          <span>and build them</span>
          <span style={{ color: "#C42A16" }}>in SwiftUI.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, fontWeight: 600 }}>
          <span>Product designer · Apple Developer Academy</span>
          <span>jessikamarisca.com</span>
        </div>
      </div>
    ),
    size,
  );
}
