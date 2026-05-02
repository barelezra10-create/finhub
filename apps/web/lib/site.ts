export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://fintiex.com";

export const SITE_NAME = "Fintiex";
export const SITE_TAGLINE = "Personal finance, leveled up.";
export const SITE_DESCRIPTION =
  "Live rates, sharp tools, and plain-English guides for mortgages, savings, credit cards, and loans. Built for the way money actually works in 2026.";
export const SITE_HANDLE = "@fintiex";

export function absUrl(path: string): string {
  if (path.startsWith("http")) return path;
  if (!path.startsWith("/")) path = "/" + path;
  return SITE_URL + path;
}
