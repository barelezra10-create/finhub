import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE, validSession } from "@/lib/analytics/auth";

// Hosts that should 301 to fintiex.com with translated paths.
// Used when thecreditcardpick.com (and www) are mounted as a custom
// domain on the Fintiex Railway service.
const CCP_HOSTS = new Set([
  "thecreditcardpick.com",
  "www.thecreditcardpick.com",
]);

const TARGET_ORIGIN = "https://www.fintiex.com";

// Exact path translations: CCPick path -> Fintiex path.
const DIRECT_MAP: Record<string, string> = {
  "/": "/credit-cards",
  "/cards": "/credit-cards",
  "/best": "/best",
  "/learn": "/learn",
  "/glossary": "/glossary",
  "/tools": "/calculators",
  "/loans": "/loans",
  "/loans/personal-loans": "/loans/personal",
  "/loans/student-loans": "/loans/student",
  "/banking": "/savings",
  "/banking/savings-accounts": "/savings/accounts",
  "/insurance": "/insurance",
  "/insurance/auto-insurance": "/insurance/auto",
  "/insurance/home-insurance": "/insurance/home",
  "/insurance/life-insurance": "/insurance/life",
  "/investing": "/investing",
  "/investing/brokerages": "/investing/brokerages",
  "/about": "/about",
  "/team": "/about",
  "/contact": "/about",
  "/methodology": "/about",
  "/how-we-make-money": "/about",
  "/privacy": "/privacy",
  "/compare": "/credit-cards",
  "/tools/balance-transfer": "/calculators/balance-transfer",
  "/tools/payoff": "/calculators/debt-payoff",
  "/tools/personal-loan-calculator": "/calculators/personal-loan-payoff",
  "/tools/student-loan-payoff": "/calculators/student-loan-payoff",
  "/tools/rewards-optimizer": "/calculators/rewards-optimizer",
  "/tools/which-card": "/calculators/which-card",
  "/tools/apr": "/calculators/apr",
};

// Prefix translations for dynamic routes (longest prefix wins; ordering matters).
const PREFIX_MAP: ReadonlyArray<readonly [string, string]> = [
  ["/cards/", "/credit-cards/"],
  ["/best/", "/best/"],
  ["/learn/", "/learn/"],
  ["/glossary/", "/glossary/"],
  ["/loans/personal-loans/", "/loans/personal/"],
  ["/loans/student-loans/", "/loans/student/"],
  ["/banking/savings-accounts/", "/savings/accounts/"],
  ["/insurance/auto-insurance/", "/insurance/auto/"],
  ["/insurance/home-insurance/", "/insurance/home/"],
  ["/insurance/life-insurance/", "/insurance/life/"],
  ["/investing/brokerages/", "/investing/brokerages/"],
  // Affiliate-redirect paths (/go/<slug>) become /credit-cards/<slug>; if the
  // slug isn't a live card the next.config.ts redirects + /credit-cards listing
  // catch the fallout.
  ["/go/", "/credit-cards/"],
];

function translatePath(pathname: string): string {
  const direct = DIRECT_MAP[pathname];
  if (direct) return direct;

  for (const [from, to] of PREFIX_MAP) {
    if (pathname.startsWith(from)) {
      return to + pathname.slice(from.length);
    }
  }

  // Anything we don't recognize falls back to the Fintiex home page so a
  // bookmarked old URL still lands somewhere useful.
  return "/";
}

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/admin" || request.nextUrl.pathname.startsWith("/admin/")) {
    if (request.nextUrl.pathname !== "/admin/login" && !await validSession(request.cookies.get(ADMIN_COOKIE)?.value)) {
      return NextResponse.redirect(new URL("/admin/login",process.env.ANALYTICS_ORIGIN || request.url), { status: 303, headers: { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex, nofollow" } });
    }
    const response = NextResponse.next();
    response.headers.set("Cache-Control", "private, no-store");
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }
  const host = (request.headers.get("host") ?? "").toLowerCase();
  const { pathname, search } = request.nextUrl;

  // Bare apex -> www with the full path preserved. Without this, deep links
  // like fintiex.com/savings/hysa/nevada 404 instead of redirecting (only the
  // root was covered upstream), which GSC reports as Not found.
  if (host === "fintiex.com") {
    return NextResponse.redirect(new URL(pathname + search, TARGET_ORIGIN), {
      status: 301,
    });
  }

  if (!CCP_HOSTS.has(host)) return NextResponse.next();

  const destination = translatePath(pathname) + search;

  return NextResponse.redirect(new URL(destination, TARGET_ORIGIN), {
    status: 301,
  });
}

export const config = {
  runtime: "nodejs",
  // Run on everything except next-internal assets so static files keep serving.
  matcher: ["/admin/:path*", "/((?!_next/|favicon\\.ico|.*\\.[a-zA-Z0-9]+$).*)"],
};
