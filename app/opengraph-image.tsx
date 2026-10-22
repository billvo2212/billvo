import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "billvo — terminal-flavored portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#1e1f1c",
        fontFamily: "ui-monospace, 'JetBrains Mono', monospace",
        padding: 72,
        color: "#f8f8f2",
      }}
    >
      <div style={{ display: "flex", gap: 10, marginBottom: 48 }}>
        <div style={{ width: 18, height: 18, borderRadius: 9, background: "#f92672" }} />
        <div style={{ width: 18, height: 18, borderRadius: 9, background: "#e6db74" }} />
        <div style={{ width: 18, height: 18, borderRadius: 9, background: "#a6e22e" }} />
      </div>
      <div style={{ fontSize: 32, color: "#75715e", marginBottom: 16, display: "flex" }}>
        <span style={{ color: "#a6e22e" }}>billvo@portfolio</span>
        <span>:</span>
        <span style={{ color: "#66d9ef" }}>~</span>
        <span style={{ color: "#a6e22e" }}>$</span>
        <span style={{ marginLeft: 12 }}>whoami</span>
      </div>
      <div style={{ fontSize: 120, lineHeight: 1.05, fontWeight: 700, color: "#f8f8f2" }}>
        Bill Vo
      </div>
      <div style={{ fontSize: 32, color: "#e6db74", marginTop: 24 }}>
        {"// software engineer · data curious · perpetual learner"}
      </div>
      <div
        style={{
          marginTop: "auto",
          fontSize: 24,
          color: "#75715e",
          display: "flex",
          gap: 24,
        }}
      >
        <span>github.com/billvo2212</span>
        <span>·</span>
        <span>Vancouver, BC</span>
        <span>·</span>
        <span style={{ color: "#a6e22e" }}>▮</span>
      </div>
    </div>,
    size,
  );
}
