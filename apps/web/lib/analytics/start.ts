export async function startAnalytics() {
  if (process.env.ANALYTICS_ENABLED !== "true" || !process.env.ANALYTICS_DATABASE_URL) return;
  const { db } = await import("./db");
  const { readFile } = await import("node:fs/promises");
  const { join } = await import("node:path");
  const schema = await readFile(join(process.cwd(), "lib/analytics/schema.sql"), "utf8");
  const retain = async () => {
    try {
      await db().query(schema);
      await db().query("DELETE FROM fintiex_analytics WHERE created_at < now() - interval '90 days'");
    }
    catch { console.error("Analytics retention temporarily unavailable"); }
  };
  await retain();
  const state = globalThis as typeof globalThis & { analyticsRetention?: ReturnType<typeof setInterval> };
  if (!state.analyticsRetention) state.analyticsRetention = setInterval(() => { void retain(); }, 60 * 60 * 1000);
  state.analyticsRetention.unref();
}
