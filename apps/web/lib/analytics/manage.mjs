import { Pool } from 'pg';
import { readFile } from 'node:fs/promises';
if (!process.env.ANALYTICS_DATABASE_URL) throw new Error('Set ANALYTICS_DATABASE_URL');
const pool = new Pool({connectionString:process.env.ANALYTICS_DATABASE_URL});
try {
  if (process.argv[2] === 'init') {
    await pool.query(await readFile(new URL('./schema.sql',import.meta.url),'utf8'));
    console.log('Analytics schema ready');
  } else if (process.argv[2] === 'retain') {
    const result = await pool.query("DELETE FROM fintiex_analytics WHERE created_at < now() - interval '90 days'");
    console.log(`Removed ${result.rowCount} expired analytics events`);
  } else throw new Error('Use init or retain');
} finally {await pool.end();}
