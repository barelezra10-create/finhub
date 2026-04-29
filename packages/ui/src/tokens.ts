export const tokens = Object.freeze({
  color: Object.freeze({
    primary: "#0F4C81",
    primaryDark: "#0A3760",
    accent: "#1F8A70",
    ink: "#0B1220",
    inkMuted: "#475569",
    paper: "#FBFAF7",
    line: "#E5E0D5",
    danger: "#B43541",
    warning: "#C77A26",
  }),
  font: Object.freeze({
    display: '"IBM Plex Serif", Georgia, serif',
    body: 'Inter, system-ui, -apple-system, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
  }),
  radius: Object.freeze({
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
  }),
  spacing: Object.freeze({
    pageMaxWidth: "72rem",
    containerPad: "1.25rem",
  }),
});

export type Tokens = typeof tokens;
