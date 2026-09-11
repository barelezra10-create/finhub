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
    pool.query(`SELECT source AS label, count(*) FILTER(WHERE kind='pageview')::int AS views, count(DISTINCT visitor) FILTER(WHERE kind='pageview')::int AS visitors, count(*) FILTER(WHERE kind='outbound')::int AS clicks FROM fintiex_analytics WHERE ${range} GROUP BY source ORDER BY views DESC LIMIT 50`, values),
    pool.query(`SELECT source || ' / ' || medium || ' / ' || campaign AS label, count(*) FILTER(WHERE kind='pageview')::int AS views, count(DISTINCT visitor) FILTER(WHERE kind='pageview')::int AS visitors, count(*) FILTER(WHERE kind='outbound')::int AS clicks FROM fintiex_analytics WHERE ${range} AND campaign<>'' GROUP BY source,medium,campaign ORDER BY views DESC LIMIT 50`, values),
    pool.query(`SELECT target AS label, count(*)::int AS clicks FROM fintiex_analytics WHERE ${range} AND kind='outbound' GROUP BY target ORDER BY clicks DESC LIMIT 50`, values),
  ]);
  return { summary: summary.rows[0], daily: daily.rows, pages: pages.rows, sources: sources.rows, campaigns: campaigns.rows, outbound: outbound.rows };
}

export async function activity(days: number, page: number, kind: string, source: string) {
  const where = "created_at >= date_trunc('day', now() AT TIME ZONE 'UTC') AT TIME ZONE 'UTC' - ($1::int - 1) * interval '1 day' AND ($2::text = '' OR kind=$2) AND ($3::text = '' OR source=$3)";
  const pool = db();
  const [events,total] = await Promise.all([
    pool.query(`SELECT event_id, created_at, kind, path, source, medium, campaign, target FROM fintiex_analytics WHERE ${where} ORDER BY created_at DESC,event_id DESC LIMIT 50 OFFSET $4`,[days,kind,source,(page-1)*50]),
    pool.query(`SELECT count(*)::int AS count FROM fintiex_analytics WHERE ${where}`,[days,kind,source]),
  ]);
  return {events:events.rows,total:total.rows[0].count as number};
}
