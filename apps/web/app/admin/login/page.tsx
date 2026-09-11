import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE, validSession } from "@/lib/analytics/auth";
import "../analytics.css";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {title:"Admin sign in | Fintiex",robots:{index:false,follow:false}};
export default async function Login({searchParams}:{searchParams:Promise<{error?:string}>}) {
  if (await validSession((await cookies()).get(ADMIN_COOKIE)?.value)) redirect("/admin");
  const {error} = await searchParams;
  const messages: Record<string,string> = {invalid:"The username or password is incorrect. Please try again.",limited:"Too many sign-in attempts. Please try again in 15 minutes.",unavailable:"Sign in is temporarily unavailable. Please try again shortly."};
  return <div className="analytics analytics-login"><section className="analytics-panel"><span className="analytics-login-logo">Fx</span><p className="analytics-eyebrow">FINTIEX ADMIN</p><h1>Welcome back.</h1><p className="analytics-muted">Sign in to view your traffic, sources, and click activity.</p>{error && messages[error] && <p className="analytics-error" role="alert">{messages[error]}</p>}<form action="/api/admin/login" method="post" className="analytics-login-form"><label htmlFor="username">Username</label><input id="username" name="username" autoComplete="username" autoCapitalize="none" spellCheck={false} required maxLength={80} defaultValue="admin"/><label htmlFor="password">Password</label><input id="password" name="password" type="password" autoComplete="current-password" required maxLength={512}/><button type="submit">Sign in</button></form><p className="analytics-login-note">Your session lasts 8 hours. Use Sign out when you finish on a shared device.</p><a className="analytics-back" href="/">← Back to Fintiex</a></section></div>;
}
