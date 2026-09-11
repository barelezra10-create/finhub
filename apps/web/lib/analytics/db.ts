import { Pool } from "pg";

const globalDb = globalThis as typeof globalThis & { analyticsPool?: Pool };
export function db() {
  if (!process.env.ANALYTICS_DATABASE_URL) throw new Error("Analytics database not configured");
  return globalDb.analyticsPool ??= new Pool({ connectionString: process.env.ANALYTICS_DATABASE_URL, max: 4, connectionTimeoutMillis: 5000, statement_timeout: 10000 });
}
export async function report(days: number) {
  const values = [days];
  const range = "created_at >= date_trunc('day', now() AT TIME ZONE 'UTC') AT TIME ZONE 'UTC' - ($1::int - 1) * interval '1 day'";
  const pool = db();
  const [summary, daily, pages, sources, campaigns, outbound] = await Promise.all([
    pool.query(`SELECT count(*) FILTER (WHERE kind='pageview')::int AS views, count(DISTINCT visitor) FILTER (WHERE kind='pageview')::int AS visitors, count(*) FILTER (WHERE kind='outbound')::int AS clicks FROM fintiex_analytics WHERE ${range}`, values),
    pool.query(`SELECT to_char(created_at AT TIME ZONE 'UTC','YYYY-MM-DD') AS day, count(*)::int AS views, count(DISTINCT visitor)::int AS visitors FROM fintiex_analytics WHERE ${range} AND kind='pageview' GROUP BY 1 ORDER BY 1`, values),
    pool.query(`SELECT path AS label, count(*) FILTER (WHERE kind='pageview')::int AS views, count(DISTINCT visitor) FILTER (WHERE kind='pageview')::int AS visitors, count(*) FILTER (WHERE kind='outbound')::int AS clicks FROM fintiex_analytics WHERE ${range} GROUP BY path ORDER BY views DESC LIMIT 100`, values),
    pool.query(`SELECT source AS label, count(*)::int AS views, count(DISTINCT visitor)::int AS visitors FROM fintiex_analytics WHERE ${range} AND kind='pageview' GROUP BY source ORDER BY views DESC LIMIT 50`, values),
    pool.query(`SELECT source || ' / ' || medium || ' / ' || campaign AS label, count(*)::int AS views, count(DISTINCT visitor)::int AS visitors FROM fintiex_analytics WHERE ${range} AND kind='pageview' AND campaign<>'' GROUP BY source,medium,campaign ORDER BY views DESC LIMIT 50`, values),
    pool.query(`SELECT target AS label, count(*)::int AS clicks FROM fintiex_analytics WHERE ${range} AND kind='outbound' GROUP BY target ORDER BY clicks DESC LIMIT 50`, values),
  ]);
  return { summary: summary.rows[0], daily: daily.rows, pages: pages.rows, sources: sources.rows, campaigns: campaigns.rows, outbound: outbound.rows };
}
