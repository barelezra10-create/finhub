import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F4C81",
        "primary-dark": "#0A3760",
        accent: "#1F8A70",
        ink: "#0B1220",
        "ink-muted": "#475569",
        paper: "#FBFAF7",
        line: "#E5E0D5",
      },
      fontFamily: {
        display: ['"IBM Plex Serif"', "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
