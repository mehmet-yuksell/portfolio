import { ImageResponse } from "next/og";
import { getDictionary } from "@/data/dictionaries";
import { site } from "@/data/site";
import { defaultLocale, isLocale } from "@/lib/i18n";

export const alt = `${site.name} — Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const t = getDictionary(locale);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "radial-gradient(circle at 75% 20%, #2a2463 0%, #0a0c16 55%)",
        color: "#e8eaf4",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "#8b7cf6",
            color: "#0a0c16",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          MY
        </div>
        <div style={{ fontSize: 26, color: "#a0a6bf" }}>mehmetyuksel.online</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}>
          {site.name}
        </div>
        <div
          style={{ marginTop: 28, fontSize: 34, color: "#a0a6bf", maxWidth: 900, lineHeight: 1.35 }}
        >
          {t.hero.role}
        </div>
      </div>

      <div style={{ display: "flex", gap: 14 }}>
        {["Python", "Data", "AI", "Web"].map((tag) => (
          <div
            key={tag}
            style={{
              display: "flex",
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.16)",
              fontSize: 22,
              color: "#a99dff",
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
