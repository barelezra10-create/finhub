import "./globals.css";
import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { RateTicker } from "@/components/rate-ticker";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: { default: "Fintiex — Personal finance, leveled up", template: "%s — Fintiex" },
  description:
    "Live rates, sharp tools, and plain-English guides for mortgages, savings, credit cards, and loans. Built for the way money actually works in 2026.",
  metadataBase: new URL("https://fintiex.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable} ${mono.variable}`}>
      <body>
        <RateTicker />
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
