import { createHmac } from "node:crypto";

export const BOT = /bot|crawler|spider|headless|lighthouse|preview|facebookexternalhit|curl|wget|python|monitor|uptime/i;
export function cleanPath(value: unknown): string | null {
  if (typeof value !== "string" || value.length > 400 || !/^\/[a-zA-Z0-9/_-]*$/.test(value)) return null;
  if (/^\/(admin|api|_next)(\/|$)/.test(value)) return null;
  return value.replace(/\/+$/, "") || "/";
}
export function cleanTag(value: unknown) {
  return typeof value === "string" && /^[a-zA-Z0-9 _.-]{1,80}$/.test(value) ? value : "";
}
export function externalHost(value: unknown) {
  try {
    const url = new URL(typeof value === "string" ? value : "");
    if (!/^https?:$/.test(url.protocol)) return "";
    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    return host === "fintiex.com" || host === "localhost" ? "" : host.slice(0, 200);
  } catch { return ""; }
}
export function visitorHash(ip: string, ua: string, date = new Date()) {
  const secret = process.env.ANALYTICS_HASH_SECRET;
  if (!secret || secret.length < 32) throw new Error("Analytics secret not configured");
  return createHmac("sha256", secret).update(`${date.toISOString().slice(0,10)}|${ip}|${ua}`).digest("hex");
}
