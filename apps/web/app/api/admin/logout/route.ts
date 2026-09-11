import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, revokeSession } from "@/lib/analytics/auth";
export const runtime = "nodejs";
export async function POST(request: NextRequest) {
  const origin = process.env.ANALYTICS_ORIGIN || "https://www.fintiex.com";
  if (request.headers.get("origin") !== origin) return new NextResponse(null,{status:403});
  try { await revokeSession(request.cookies.get(ADMIN_COOKIE)?.value); }
  catch { return new NextResponse("Sign out temporarily unavailable. Please try again.",{status:503,headers:{"Cache-Control":"no-store"}}); }
  const response = NextResponse.redirect(new URL("/admin/login",origin),{status:303,headers:{"Cache-Control":"private, no-store"}});
  response.cookies.set(ADMIN_COOKIE,"",{httpOnly:true,secure:new URL(origin).protocol === "https:",sameSite:"lax",path:"/",maxAge:0});
  return response;
}
