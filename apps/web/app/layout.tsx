import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Newsreader, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { RateTicker } from "@/components/rate-ticker";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: { default: "Fintiex — America's Rate Authority", template: "%s — Fintiex" },
  description:
    "Daily rates, tools, and plain-English guides for mortgages, savings, credit cards, and loans. Updated continuously, sources cited.",
  metadataBase: new URL("https://fintiex.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${newsreader.variable} ${mono.variable}`}>
      <body>
        <RateTicker />
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
