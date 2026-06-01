/**
 * Stylized badge for insurance carriers and other entities not in lib/brands.ts.
 * Renders the carrier's initials over a brand-color background.
 */

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

// Carriers whose primary color is light enough that ink (dark) text reads
// better than white text.
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
