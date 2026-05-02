import "./globals.css";
import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { RateTicker } from "@/components/rate-ticker";
import { OrganizationSchema, WebSiteSchema } from "@/components/schemas";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_HANDLE } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Personal finance, leveled up`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "mortgage rates",
    "high yield savings",
    "HYSA",
    "CD rates",
    "personal loans",
    "credit cards",
    "refinance calculator",
    "personal finance",
    "best HYSA",
    "best mortgage lenders",
  ],
  authors: [{ name: "Fintiex Editorial", url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Personal finance, leveled up`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Personal finance, leveled up.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE_HANDLE,
    creator: SITE_HANDLE,
    title: `${SITE_NAME} — Personal finance, leveled up`,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "finance",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable} ${mono.variable}`}>
      <body>
        <OrganizationSchema />
        <WebSiteSchema />
        <RateTicker />
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
