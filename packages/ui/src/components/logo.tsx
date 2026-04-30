import { tokens } from "../tokens";

export function Logo({ height = 28 }: { height?: number }) {
  return (
    <span
      style={{
        fontFamily: tokens.font.display,
        color: tokens.color.primary,
        fontWeight: 600,
        fontSize: height,
        letterSpacing: "-0.01em",
      }}
    >
      Fintiex
    </span>
  );
}
