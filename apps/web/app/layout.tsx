import "./globals.css";
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plex = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: { default: "Fintiex", template: "%s — Fintiex" },
  description:
    "Personal finance hub: rates, tools, and guides for mortgages, savings, loans, and credit cards.",
  metadataBase: new URL("https://fintiex.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plex.variable}`}>
      <body>
        <SiteHeader />
        <main className="max-w-page mx-auto px-5 py-10">{children}</main>
      </body>
    </html>
  );
}
