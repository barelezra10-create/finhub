import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
import {Pool} from 'pg';
const url = process.env.ANALYTICS_DATABASE_URL;
if (!url || !new URL(url).pathname.endsWith('/fintiex_analytics_test')) throw new Error('Tests require the isolated fintiex_analytics_test database');
const pool = new Pool({connectionString:url});
const base = 'http://localhost:3047';
const ids = [];
const headers = {'content-type':'application/json',origin:base,'sec-fetch-site':'same-origin','x-real-ip':'192.0.2.10','user-agent':'Mozilla/5.0 TestBrowser'};
const auth = {authorization:`Basic ${Buffer.from('admin:'+process.env.ANALYTICS_ADMIN_PASSWORD).toString('base64')}`};
async function send(overrides={},custom={}) {
  const id = randomUUID(); ids.push(id);
  const body = {id,kind:'pageview',path:'/savings',referrer:'https://www.google.com/search?q=private',...overrides};
  return fetch(base+'/api/analytics',{method:'POST',headers:{...headers,...custom},body:JSON.stringify(body)});
}
try {
  const unauthorized = await fetch(base+'/admin'); assert.equal(unauthorized.status,401);
  assert.match(unauthorized.headers.get('cache-control'),/no-store/);
  assert.equal((await fetch(base+'/admin/private.csv')).status,401);
  assert.equal((await fetch(base+'/admin',{headers:{authorization:'Basic '+Buffer.from('admin:wrong').toString('base64')}})).status,401);
  const id=randomUUID();ids.push(id);
  assert.equal((await send({id})).status,204);
  assert.equal((await send({id})).status,204);
  assert.equal((await send({kind:'outbound',target:'https://bank.example/apply?email=private'})).status,204);
  assert.equal((await send({source:'newsletter',medium:'email',campaign:'weekly_rates'})).status,204);
  assert.equal((await send({}, {'user-agent':'Googlebot'})).status,204);
  assert.equal((await send({}, {dnt:'1'})).status,204);
  assert.equal((await send({}, {'sec-gpc':'1'})).status,204);
  assert.equal((await send({}, {origin:'https://evil.example'})).status,403);
  assert.equal((await send({path:'/admin'})).status,400);
  assert.equal((await send({path:'/savings?email=private'})).status,400);
  assert.equal((await send({id:'-'.repeat(36)})).status,400);
  assert.equal((await send({campaign:'x'.repeat(3000)})).status,413);
  const {rows} = await pool.query('SELECT * FROM fintiex_analytics WHERE event_id = ANY($1::uuid[])',[ids]);
  assert.equal(rows.length,3,'duplicate, bot, DNT, GPC, malformed and cross-site requests excluded');
  assert.equal(rows.filter(r=>r.kind==='pageview').length,2);
  assert.equal(rows[0].source,'google.com');
  assert.equal(new Set(rows.map(r=>r.visitor)).size,1,'one daily visitor');
  assert.equal(rows.find(r=>r.kind==='outbound').target,'bank.example');
  assert.ok(!JSON.stringify(rows).includes('private'),'sensitive query strings stripped');
  const admin = await fetch(base+'/admin?days=7',{headers:auth});
  assert.equal(admin.status,200);assert.match(admin.headers.get('cache-control'),/no-store/);
  const html=await admin.text();assert.match(html,/google.com/);assert.match(html,/weekly_rates/);assert.match(html,/bank.example/);
  console.log('PASS: authentication, no-store, ingestion, deduplication, daily visitor grouping, referral sanitization, campaigns, outbound clicks, bot/DNT/GPC filtering, origin checks, size/path validation and dashboard reporting');
} finally {
  await pool.query('DELETE FROM fintiex_analytics WHERE event_id = ANY($1::uuid[])',[ids]);
  await pool.end();
}
