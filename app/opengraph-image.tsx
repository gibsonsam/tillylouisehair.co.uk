import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&display=swap`;
  const css = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible)" },
  }).then((r) => r.text());
  const fontUrl = css.match(/src: url\(([^)]+)\)/)?.[1];
  if (!fontUrl) throw new Error(`Could not extract font URL for ${family} ${weight}`);
  return fetch(fontUrl).then((r) => r.arrayBuffer());
}

export default async function OgImage() {
  const [playfair600, inter400, inter600] = await Promise.all([
    loadGoogleFont("Playfair Display", 600),
    loadGoogleFont("Inter", 400),
    loadGoogleFont("Inter", 600),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF8F5",
          position: "relative",
        }}
      >
        {/* Soft gold glow — top right */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 360,
            height: 360,
            borderRadius: 9999,
            backgroundColor: "rgba(201,168,76,0.09)",
            display: "flex",
          }}
        />
        {/* Border circle — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 280,
            height: 280,
            borderRadius: 9999,
            border: "1.5px solid rgba(201,168,76,0.28)",
            display: "flex",
          }}
        />
        {/* Small accent circle */}
        <div
          style={{
            position: "absolute",
            top: 80,
            right: 220,
            width: 72,
            height: 72,
            borderRadius: 9999,
            border: "1px solid rgba(44,26,14,0.08)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Brand name */}
          <div
            style={{
              fontFamily: "Playfair",
              fontSize: 104,
              fontWeight: 600,
              color: "#2C1A0E",
              letterSpacing: 2,
              lineHeight: 1,
            }}
          >
            Tilly Louise
          </div>

          {/* HAIR wordmark */}
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 16,
              fontWeight: 600,
              color: "#C9A84C",
              letterSpacing: 14,
              marginTop: 10,
            }}
          >
            HAIR
          </div>

          {/* Gold divider */}
          <div
            style={{
              width: 90,
              height: 1,
              backgroundColor: "#C9A84C",
              marginTop: 40,
              marginBottom: 40,
              display: "flex",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 26,
              fontWeight: 400,
              color: "#8A7060",
              textAlign: "center",
              maxWidth: 560,
              lineHeight: 1.55,
            }}
          >
            Premium hairdressing with a warm, boutique touch
          </div>

          {/* Location */}
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 14,
              fontWeight: 600,
              color: "#C9A84C",
              letterSpacing: 7,
              marginTop: 28,
            }}
          >
            UPPERMILL · SADDLEWORTH
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Playfair", data: playfair600, weight: 600, style: "normal" },
        { name: "Inter", data: inter400, weight: 400, style: "normal" },
        { name: "Inter", data: inter600, weight: 600, style: "normal" },
      ],
    },
  );
}
