/**
 * Stylized badge for insurance carriers and other entities not in lib/brands.ts.
 * Uses a real logo image from /public/insurance/ when one is mapped here, else
 * falls back to the initials badge keyed by brand color.
 */

// Carrier name → filename in /public/insurance/. Add an entry when committing
// a new high-quality logo file. Carriers not listed here render via the
// colored-initials fallback (kept consistent with brand-logo.tsx).
const CARRIER_IMAGE: Record<string, string> = {
  "GEICO": "geico.png",
  "Progressive": "progressive.png",
  "State Farm": "state-farm.png",
  "USAA": "usaa.png",
  "Nationwide": "nationwide.png",
  "The General": "the-general.png",
  "Farmers": "farmers.png",
  "Lemonade": "lemonade.png",
  "Ladder Life": "ladder-life.png",
  "Mutual of Omaha": "mutual-of-omaha.png",
  "Policygenius": "policygenius.png",
};

const CARRIER_COLOR: Record<string, string> = {
  // Auto
  "GEICO": "#00A4DC",
  "State Farm": "#C8102E",
  "Progressive": "#0066B2",
  "Allstate": "#00ADEF",
  "USAA": "#003F87",
  "Liberty Mutual": "#FFE600",
  "Nationwide": "#1B315E",
  "The General": "#FFC72C",
  "Farmers": "#C8102E",
  // Home
  "Lemonade": "#FF0080",
  // Life
  "Haven Life": "#FF6B5B",
  "Ladder Life": "#4A2BFF",
  "Northwestern Mutual": "#1F1F1F",
  "Prudential": "#003366",
  "Mutual of Omaha": "#C8102E",
  "Policygenius": "#6E5CFF",
};

const LIGHT_CARRIERS = new Set(["Liberty Mutual", "The General"]);

function initials(name: string): string {
  const cleaned = name
    .replace(/\b(by|the|of|a|an|life|insurance)\b/gi, "")
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) {
    const first = parts[0]!;
    return (first[0] ?? "?").toUpperCase() + (first[1] ?? "").toLowerCase();
  }
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

interface CarrierLogoProps {
  carrier: string;
  size?: number;
  className?: string;
}

export function CarrierLogo({ carrier, size = 72, className = "" }: CarrierLogoProps) {
  const file = CARRIER_IMAGE[carrier];

  if (file) {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-xl bg-white border border-line overflow-hidden ${className}`}
        style={{ width: size, height: size }}
        aria-label={`${carrier} logo`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/insurance/${file}`}
          alt={`${carrier} logo`}
          className="object-contain"
          style={{ width: size * 0.78, height: size * 0.78 }}
          loading="lazy"
        />
      </span>
    );
  }

  const bg = CARRIER_COLOR[carrier] ?? "#1F1F1F";
  const textColor = LIGHT_CARRIERS.has(carrier) ? "#0A0A0A" : "#FFFFFF";
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center rounded-xl font-mono font-bold uppercase tracking-tight ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: bg,
        color: textColor,
        fontSize: Math.max(14, Math.round(size * 0.34)),
        letterSpacing: "-0.02em",
      }}
    >
      {initials(carrier)}
    </span>
  );
}
