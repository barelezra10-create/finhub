import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Fintiex — Personal finance, leveled up.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0A0A0A",
          color: "#FAFAF7",
          padding: "72px",
          position: "relative",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background: "radial-gradient(circle, #D4FF3D 0%, transparent 70%)",
            opacity: 0.4,
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#D4FF3D",
              color: "#0A0A0A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "ui-monospace, monospace",
              fontWeight: 800,
              fontSize: 28,
            }}
          >
            Fx
          </div>
          <div style={{ fontWeight: 700, fontSize: 32 }}>Fintiex</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -3,
              maxWidth: 980,
            }}
          >
            Personal finance,
            <br />
            <span style={{ display: "inline-flex", position: "relative" }}>
              <span style={{ position: "relative", zIndex: 1 }}>leveled up.</span>
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 12,
                  height: 28,
                  background: "#D4FF3D",
                  zIndex: 0,
                }}
              />
            </span>
          </div>

          <div
            style={{
              marginTop: 36,
              fontSize: 26,
              color: "#A0A0A0",
              maxWidth: 880,
              lineHeight: 1.4,
            }}
          >
            Live rates, sharp tools, and plain-English guides for mortgages, savings, credit cards, and loans.
          </div>

          <div
            style={{
              marginTop: 36,
              display: "flex",
              alignItems: "center",
              gap: 28,
              fontSize: 18,
              color: "#A0A0A0",
              fontFamily: "ui-monospace, monospace",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "#FAFAF7", fontWeight: 700 }}>14</span> live sources
            <span style={{ opacity: 0.4 }}>·</span>
            <span style={{ color: "#FAFAF7", fontWeight: 700 }}>100+</span> pages
            <span style={{ opacity: 0.4 }}>·</span>
            <span style={{ color: "#FAFAF7", fontWeight: 700 }}>0</span> sponsored picks
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
