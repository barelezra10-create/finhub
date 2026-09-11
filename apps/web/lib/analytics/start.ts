export async function startAnalytics() {
  if (!process.env.ANALYTICS_DATABASE_URL) return;
  const { db } = await import("./db");
  const { readFile } = await import("node:fs/promises");
  const { join } = await import("node:path");
  const schema = await readFile(join(process.cwd(), "lib/analytics/schema.sql"), "utf8");
  const retain = async () => {
    try {
      await db().query(schema);
      await db().query("DELETE FROM fintiex_analytics WHERE created_at < now() - interval '90 days'");
      await db().query("DELETE FROM fintiex_admin_sessions WHERE expires_at <= now()");
      await db().query("DELETE FROM fintiex_admin_login_attempts WHERE expires_at <= now()");
    }
    catch { console.error("Analytics retention temporarily unavailable"); }
  };
  await retain();
  const { startSearchRefresh } = await import("./search-sync");
  startSearchRefresh();
  const state = globalThis as typeof globalThis & { analyticsRetention?: ReturnType<typeof setInterval> };
  if (!state.analyticsRetention) state.analyticsRetention = setInterval(() => { void retain(); }, 60 * 60 * 1000);
  state.analyticsRetention.unref();
}
