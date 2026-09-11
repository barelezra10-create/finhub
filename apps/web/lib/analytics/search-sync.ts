import { db } from './db';
import { searchConfigured, syncSearch } from './search-reports';

// Read-only provider requests; a database lock prevents duplicate replica jobs.
export async function refreshSearchReports() {
  const engines = ['google', 'bing'].filter(searchConfigured);
  if (!engines.length) return;
  const client = await db().connect();
  let locked = false;
  try {
    locked = (await client.query('SELECT pg_try_advisory_lock(73681941) AS locked')).rows[0].locked;
    if (!locked) return;
    for (const engine of engines) {
      for (const days of [1, 7, 30, 90]) {
        const current = await client.query("SELECT 1 FROM fintiex_search_reports WHERE engine=$1 AND period_days=$2 AND origin='api' AND fetched_at > now() - interval '6 hours'", [engine, days]);
        if (current.rowCount) continue;
        try { await syncSearch(engine, days); }
        catch { console.error(`Search report refresh failed for ${engine}; existing reports retained`); break; }
      }
    }
  } finally {
    if (locked) await client.query('SELECT pg_advisory_unlock(73681941)');
    client.release();
  }
}

export function startSearchRefresh() {
  const state = globalThis as typeof globalThis & { searchRefresh?: ReturnType<typeof setInterval> };
  if (state.searchRefresh) return;
  const run = () => { void refreshSearchReports().catch(() => console.error('Search report scheduler temporarily unavailable')); };
  run();
  state.searchRefresh = setInterval(run, 60 * 60 * 1000);
  state.searchRefresh.unref();
}
