/**
 * Full-width article hero with a pillar-specific gradient background and a
 * large decorative SVG glyph in the corner. Renders inside /learn/[pillar]/[slug]
 * pages above the H1.
 */

type PillarKey =
  | "credit-card-basics"
  | "choosing-a-card"
  | "maximizing-rewards"
  | "building-credit"
  | "business-credit"
  | "mortgages"
  | "savings"
  | "loans"
  | "insurance"
  | "investing";

type PillarTheme = {
  // Background gradient (top-left → bottom-right)
  bg: string;
  // Decorative glyph color (low opacity, sits behind content)
  glyphColor: string;
  // Foreground text color for chip
  chipBg: string;
  chipFg: string;
  // Which glyph to render
  glyph:
    | "card"
    | "house"
    | "piggy"
    | "loan"
    | "shield"
    | "chart"
    | "wallet";
};

const PILLAR_THEME: Record<PillarKey, PillarTheme> = {
  "credit-card-basics": {
    bg: "linear-gradient(135deg, #FAFAF7 0%, #EAF1FF 100%)",
    glyphColor: "#3052FF",
    chipBg: "#0A0A0A",
    chipFg: "#D4FF3D",
    glyph: "card",
  },
  "choosing-a-card": {
    bg: "linear-gradient(135deg, #FAFAF7 0%, #EFEAFF 100%)",
    glyphColor: "#6E5CFF",
    chipBg: "#6E5CFF",
    chipFg: "#FFFFFF",
    glyph: "card",
  },
  "maximizing-rewards": {
    bg: "linear-gradient(135deg, #FAFAF7 0%, #F4FFD9 100%)",
    glyphColor: "#0A0A0A",
    chipBg: "#D4FF3D",
    chipFg: "#0A0A0A",
    glyph: "wallet",
  },
  "building-credit": {
    bg: "linear-gradient(135deg, #FAFAF7 0%, #F4FFD9 100%)",
    glyphColor: "#1E5C3C",
    chipBg: "#D4FF3D",
    chipFg: "#0A0A0A",
    glyph: "chart",
  },
  "business-credit": {
    bg: "linear-gradient(135deg, #FAFAF7 0%, #EFEAFF 100%)",
    glyphColor: "#4F3DEB",
    chipBg: "#6E5CFF",
    chipFg: "#FFFFFF",
    glyph: "wallet",
  },
  mortgages: {
    bg: "linear-gradient(135deg, #FAFAF7 0%, #FFE9EC 100%)",
    glyphColor: "#A02020",
    chipBg: "#6E5CFF",
    chipFg: "#FFFFFF",
    glyph: "house",
  },
  savings: {
    bg: "linear-gradient(135deg, #FAFAF7 0%, #F4FFD9 100%)",
    glyphColor: "#0E6B49",
    chipBg: "#D4FF3D",
    chipFg: "#0A0A0A",
    glyph: "piggy",
  },
  loans: {
    bg: "linear-gradient(135deg, #FAFAF7 0%, #E8F2FF 100%)",
    glyphColor: "#0F4B91",
    chipBg: "#0A0A0A",
    chipFg: "#D4FF3D",
    glyph: "loan",
  },
  insurance: {
    bg: "linear-gradient(135deg, #FAFAF7 0%, #FFE5DC 100%)",
    glyphColor: "#C04A0F",
    chipBg: "#6E5CFF",
    chipFg: "#FFFFFF",
    glyph: "shield",
  },
  investing: {
    bg: "linear-gradient(135deg, #FAFAF7 0%, #DCFCEB 100%)",
    glyphColor: "#0F7A45",
    chipBg: "#D4FF3D",
    chipFg: "#0A0A0A",
    glyph: "chart",
  },
};

function Glyph({ kind, color }: { kind: PillarTheme["glyph"]; color: string }) {
  const common = {
    width: 320,
    height: 320,
    viewBox: "0 0 100 100",
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    style: { opacity: 0.18 },
    "aria-hidden": true as const,
  };
  if (kind === "house") {
    return (
      <svg {...common}>
        <path d="M14 50 L50 18 L86 50" />
        <path d="M22 46 L22 84 L78 84 L78 46" />
        <path d="M42 84 L42 60 L58 60 L58 84" />
        <path d="M62 32 L62 22 L72 22 L72 38" />
      </svg>
    );
  }
  if (kind === "piggy") {
    return (
      <svg {...common}>
        <path d="M22 50 C22 36 36 28 52 28 C66 28 76 32 80 42 L86 42 L86 52 L84 56 C84 64 78 72 70 76 L70 84 L60 84 L60 80 C56 81 52 81 48 80 L48 84 L38 84 L38 76 C30 72 22 64 22 56 Z" />
        <circle cx="38" cy="48" r="2.5" fill={color} stroke="none" />
        <path d="M52 28 L46 22 L40 28" />
      </svg>
    );
  }
  if (kind === "loan") {
    return (
      <svg {...common}>
        <rect x="14" y="32" width="72" height="40" rx="4" />
        <circle cx="50" cy="52" r="10" />
        <path d="M50 46 L50 58 M46 50 L54 50 M46 54 L54 54" />
        <circle cx="24" cy="42" r="1.5" fill={color} stroke="none" />
        <circle cx="76" cy="62" r="1.5" fill={color} stroke="none" />
      </svg>
    );
  }
  if (kind === "shield") {
    return (
      <svg {...common}>
        <path d="M50 14 L82 24 L82 52 C82 68 70 80 50 86 C30 80 18 68 18 52 L18 24 Z" />
        <path d="M38 50 L46 58 L62 42" />
      </svg>
    );
  }
  if (kind === "chart") {
    return (
      <svg {...common}>
        <path d="M14 82 L86 82" />
        <path d="M18 82 L18 14" />
        <path d="M22 70 L36 56 L48 62 L62 40 L78 28" />
        <path d="M72 28 L78 28 L78 34" />
        <circle cx="36" cy="56" r="2" fill={color} stroke="none" />
        <circle cx="48" cy="62" r="2" fill={color} stroke="none" />
        <circle cx="62" cy="40" r="2" fill={color} stroke="none" />
      </svg>
    );
  }
  if (kind === "wallet") {
    return (
      <svg {...common}>
        <rect x="14" y="28" width="72" height="50" rx="4" />
        <path d="M14 40 L86 40" />
        <circle cx="72" cy="56" r="4" />
        <path d="M22 22 L70 22" />
      </svg>
    );
  }
  // card
  return (
    <svg {...common}>
      <rect x="12" y="28" width="76" height="48" rx="6" />
      <path d="M12 42 L88 42" />
      <rect x="20" y="54" width="14" height="10" rx="2" />
      <path d="M60 60 L78 60 M60 66 L72 66" />
    </svg>
  );
}

interface ArticleHeroProps {
  pillar: string;
  pillarLabel: string;
  title: string;
  description?: string;
  author: string;
  updated?: string | null;
  readTime?: number;
}

export function ArticleHero({
  pillar,
  pillarLabel,
  title,
  description,
  author,
  updated,
  readTime,
}: ArticleHeroProps) {
  const theme =
    (PILLAR_THEME[pillar as PillarKey] as PillarTheme | undefined) ??
    PILLAR_THEME["credit-card-basics"];
  return (
    <header
      className="relative overflow-hidden rounded-3xl border border-line mb-10 px-6 md:px-10 pt-10 pb-10 md:pt-14 md:pb-12"
      style={{ background: theme.bg }}
    >
      {/* Decorative glyph */}
      <div
        aria-hidden
        className="absolute -right-12 -bottom-12 md:-right-6 md:-bottom-6 pointer-events-none"
      >
        <Glyph kind={theme.glyph} color={theme.glyphColor} />
      </div>

      {/* Soft tinted blob in opposite corner */}
      <div
        aria-hidden
        className="absolute -top-24 -left-20 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${theme.glyphColor}22 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-3xl">
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-[0.1em] mb-5"
          style={{ background: theme.chipBg, color: theme.chipFg }}
        >
          {pillarLabel}
        </span>

        <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mb-5 text-ink">
          {title}
        </h1>

        {description ? (
          <p className="text-lg leading-relaxed text-mute max-w-2xl mb-6">
            {description}
          </p>
        ) : null}

        <div className="flex items-center gap-3 flex-wrap text-sm text-mute">
          <span>By {author}</span>
          {updated ? (
            <>
              <span aria-hidden>·</span>
              <span>Updated {updated}</span>
            </>
          ) : null}
          {readTime ? (
            <>
              <span aria-hidden>·</span>
              <span>{readTime} min read</span>
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
}
