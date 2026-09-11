import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, SESSION_SECONDS, allowLogin, createSession, validCredentials } from "@/lib/analytics/auth";

export const runtime = "nodejs";
export async function POST(request: NextRequest) {
  const origin = process.env.ANALYTICS_ORIGIN || "https://www.fintiex.com";
  const fail = (reason: string) => NextResponse.redirect(new URL(`/admin/login?error=${reason}`,origin),{status:303,headers:{"Cache-Control":"private, no-store"}});
  if (request.headers.get("origin") !== origin) return new NextResponse(null,{status:403});
  if (!request.headers.get("content-type")?.startsWith("application/x-www-form-urlencoded")) return new NextResponse(null,{status:415});
  const reader = request.body?.getReader();
  if (!reader) return fail("invalid");
  const chunks: Uint8Array[] = []; let size = 0;
  while (true) {
    const {done,value} = await reader.read(); if (done) break;
    size += value.length;
    if (size > 4096) {await reader.cancel(); return new NextResponse(null,{status:413});}
    chunks.push(value);
  }
  try {
    if (!await allowLogin(request.headers.get("x-real-ip") || "unknown")) return fail("limited");
    const form = new URLSearchParams(Buffer.concat(chunks).toString());
    if (!validCredentials(form.get("username") || "",form.get("password") || "")) return fail("invalid");
    const token = await createSession();
    const response = NextResponse.redirect(new URL("/admin",origin),{status:303,headers:{"Cache-Control":"private, no-store"}});
    response.cookies.set(ADMIN_COOKIE,token,{httpOnly:true,secure:new URL(origin).protocol === "https:",sameSite:"lax",path:"/",maxAge:SESSION_SECONDS});
    return response;
  } catch { return fail("unavailable"); }
}
