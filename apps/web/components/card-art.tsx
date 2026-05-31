import type { CardData } from "@/lib/cards";

const ISSUER_COLOR: Record<string, [string, string]> = {
  "Chase": ["#0F4B91", "#0A2F5C"],
  "American Express": ["#0F6BB3", "#0A4A7E"],
  "Amex": ["#0F6BB3", "#0A4A7E"],
  "Citi": ["#003B70", "#001E3B"],
  "Capital One": ["#0E1A2B", "#000000"],
  "Wells Fargo": ["#A02020", "#5C0F0F"],
  "Discover": ["#F36A1F", "#A8420F"],
  "Bank of America": ["#012169", "#000F38"],
  "U.S. Bank": ["#0F2C5C", "#06183A"],
  "Barclays": ["#00AEEF", "#006A91"],
  "Goldman Sachs": ["#1F4E79", "#0F2A47"],
  "Brex": ["#1F1F1F", "#000000"],
  "WebBank": ["#2A6FB5", "#143B65"],
  "Stride Bank": ["#1E5C3C", "#0E3322"],
  "Self Financial": ["#3F2D8F", "#211658"],
  "Capital Bank": ["#0A3D72", "#051F3A"],
  "Synovus Bank": ["#13355B", "#081F38"],
};

const DEFAULT_GRADIENT: [string, string] = ["#1F1F1F", "#000000"];

function issuerGradient(issuer: string): [string, string] {
  return ISSUER_COLOR[issuer] ?? DEFAULT_GRADIENT;
}

function networkMark(network: string): string {
  const n = network.toLowerCase();
  if (n.includes("visa")) return "VISA";
  if (n.includes("master")) return "Mastercard";
  if (n.includes("amex") || n.includes("american")) return "AMEX";
  if (n.includes("discover")) return "DISCOVER";
  return network.toUpperCase();
}

interface CardArtProps {
  card: CardData;
  width?: number;
  className?: string;
}

/**
 * Stylized SVG credit card mockup. Renders a card-shaped rectangle with the
 * issuer's brand-color gradient, a chip detail, the issuer name, card name,
 * and network mark. Not a real card photo — avoids issuer image-licensing.
 */
export function CardArt({ card, width = 280, className = "" }: CardArtProps) {
  const height = Math.round(width * 0.63);
  const [c1, c2] = issuerGradient(card.issuer);
  const gradId = `cardgrad-${card.slug}`;
  const network = networkMark(card.network);

  // Padding scales with width so 280px and 480px both look right
  const pad = Math.round(width * 0.06);
  const chipW = Math.round(width * 0.1);
  const chipH = Math.round(chipW * 0.74);
  const issuerFs = Math.max(9, Math.round(width * 0.04));
  const nameFs = Math.max(12, Math.round(width * 0.058));
  const netFs = Math.max(8, Math.round(width * 0.038));

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      role="img"
      aria-label={`${card.issuer} ${card.name} card art`}
      className={className}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
        <radialGradient id={`${gradId}-glow`} cx="80%" cy="0%" r="80%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <linearGradient id={`${gradId}-chip`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D77A" />
          <stop offset="100%" stopColor="#B98E2F" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={width} height={height} rx="14" fill={`url(#${gradId})`} />
      <rect x="0" y="0" width={width} height={height} rx="14" fill={`url(#${gradId}-glow)`} />

      {/* Soft horizontal sheen line */}
      <rect
        x="0"
        y={Math.round(height * 0.55)}
        width={width}
        height="1"
        fill="rgba(255,255,255,0.08)"
      />

      {/* Chip */}
      <rect
        x={pad}
        y={Math.round(height * 0.36)}
        width={chipW}
        height={chipH}
        rx="3"
        fill={`url(#${gradId}-chip)`}
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="0.5"
      />

      {/* Issuer (top-left) */}
      <text
        x={pad}
        y={pad + issuerFs}
        fill="rgba(255,255,255,0.92)"
        fontSize={issuerFs}
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        fontWeight="600"
        letterSpacing="0.08em"
      >
        {card.issuer.toUpperCase()}
      </text>

      {/* Network mark (top-right) */}
      <text
        x={width - pad}
        y={pad + netFs}
        fill="rgba(255,255,255,0.85)"
        fontSize={netFs}
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        fontWeight="700"
        letterSpacing="0.1em"
        textAnchor="end"
      >
        {network}
      </text>

      {/* Card name (bottom-left) */}
      <text
        x={pad}
        y={height - pad}
        fill="#FFFFFF"
        fontSize={nameFs}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="700"
        letterSpacing="-0.01em"
      >
        {truncate(card.name, Math.max(18, Math.round(width / 14)))}
      </text>
    </svg>
  );
}

function truncate(s: string, max: number): string {
  if (s.length <= max) return s;
  return s.slice(0, max - 1).trimEnd() + "…";
}
