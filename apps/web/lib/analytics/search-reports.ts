import { db } from './db';
export type SearchRow = {query:string;clicks:number;impressions:number;ctr:number;position:number};
export type SearchPayload = {rows:SearchRow[];totals:{clicks:number;impressions:number;ctr:number;position:number};totalsScope:'property'|'reported queries'};
export type SearchReport = {engine:string;start_date:string;end_date:string;fetched_at:string;origin:string;payload:SearchPayload;status:string};
export function searchConfigured(engine:string) {
  return engine === 'google' ? Boolean(process.env.FINTIEX_GSC_CLIENT_ID && process.env.FINTIEX_GSC_CLIENT_SECRET && process.env.FINTIEX_GSC_REFRESH_TOKEN) : Boolean(process.env.FINTIEX_BING_API_KEY);
}
const jsonFetch = async(url:string,init:RequestInit={}) => {
  const response = await fetch(url,{...init,cache:'no-store',signal:AbortSignal.timeout(12000)});
  if(!response.ok) throw new Error(`Search provider returned ${response.status}`);
  return response.json();
};
export async function saveSearchReport(engine:string,days:number,start:string,end:string,payload:SearchPayload,origin:string) {
  await db().query("INSERT INTO fintiex_search_reports(engine,period_days,start_date,end_date,payload,origin) VALUES($1,$2,$3,$4,$5,$6) ON CONFLICT(engine,period_days) DO UPDATE SET start_date=excluded.start_date,end_date=excluded.end_date,payload=excluded.payload,origin=excluded.origin,fetched_at=now()",[engine,days,start,end,JSON.stringify(payload),origin]);
}
export function totalQueries(rows:SearchRow[]): SearchPayload['totals'] {
  const clicks=rows.reduce((n,r)=>n+r.clicks,0),impressions=rows.reduce((n,r)=>n+r.impressions,0);
  return {clicks,impressions,ctr:impressions?clicks/impressions:0,position:impressions?rows.reduce((n,r)=>n+r.position*r.impressions,0)/impressions:0};
}
export async function syncSearch(engine:string,days:number) {
  if(!searchConfigured(engine)) throw new Error('Search provider not connected');
  const end=new Date();end.setUTCDate(end.getUTCDate()-3);
  const start=new Date(end);start.setUTCDate(start.getUTCDate()-(days-1));
  const startDate=start.toISOString().slice(0,10),endDate=end.toISOString().slice(0,10);
  let payload:SearchPayload;
  if(engine==='google') {
    const auth=await jsonFetch('https://oauth2.googleapis.com/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({client_id:process.env.FINTIEX_GSC_CLIENT_ID!,client_secret:process.env.FINTIEX_GSC_CLIENT_SECRET!,refresh_token:process.env.FINTIEX_GSC_REFRESH_TOKEN!,grant_type:'refresh_token'})});
    const query=(dimensions:string[])=>jsonFetch('https://www.googleapis.com/webmasters/v3/sites/sc-domain%3Afintiex.com/searchAnalytics/query',{method:'POST',headers:{Authorization:`Bearer ${auth.access_token}`,'Content-Type':'application/json'},body:JSON.stringify({startDate,endDate,dimensions,type:'web',dataState:'final',rowLimit:1000})});
    const [detail,summary]=await Promise.all([query(['query']),query([])]);
    const rows:SearchRow[]=(detail.rows || []).map((r:{keys:string[];clicks:number;impressions:number;ctr:number;position:number})=>({query:r.keys[0] || '',clicks:r.clicks,impressions:r.impressions,ctr:r.ctr,position:r.position}));
    const t=summary.rows?.[0];payload={rows,totals:t?{clicks:t.clicks,impressions:t.impressions,ctr:t.ctr,position:t.position}:{clicks:0,impressions:0,ctr:0,position:0},totalsScope:'property'};
  } else {
    const url=new URL('https://ssl.bing.com/webmaster/api.svc/json/GetQueryStats');url.searchParams.set('siteUrl',process.env.FINTIEX_BING_SITE_URL || 'https://www.fintiex.com/');url.searchParams.set('apikey',process.env.FINTIEX_BING_API_KEY!);
    const result=await jsonFetch(url.toString());const map=new Map<string,SearchRow>();
    for(const row of result.d || []) {
      const stamp=String(row.Date).match(/\/Date\((\d+)/)?.[1];const date=stamp?new Date(Number(stamp)).toISOString().slice(0,10):String(row.Date).slice(0,10);
      if(date<startDate || date>endDate || !row.Query) continue;
      const old=map.get(row.Query) || {query:row.Query,clicks:0,impressions:0,ctr:0,position:0};
      old.position+=Number(row.AvgImpressionPosition || 0)*Number(row.Impressions || 0);old.clicks+=Number(row.Clicks || 0);old.impressions+=Number(row.Impressions || 0);map.set(row.Query,old);
    }
    const rows=[...map.values()].map(r=>({...r,position:r.impressions?r.position/r.impressions:0,ctr:r.impressions?r.clicks/r.impressions:0})).sort((a,b)=>b.clicks-a.clicks || b.impressions-a.impressions);
    payload={rows:rows.slice(0,1000),totals:totalQueries(rows),totalsScope:'reported queries'};
  }
  await saveSearchReport(engine,days,startDate,endDate,payload,'api');
}
export async function getSearchReport(engine:string,days:number):Promise<SearchReport|null> {
  let cached=(await db().query("SELECT *,to_char(start_date,'YYYY-MM-DD') AS start_date,to_char(end_date,'YYYY-MM-DD') AS end_date FROM fintiex_search_reports WHERE engine=$1 AND period_days IN ($2,0) ORDER BY CASE WHEN period_days=$2 THEN 0 ELSE 1 END LIMIT 1",[engine,days])).rows[0];
  let status=searchConfigured(engine)?'Connected':'Not connected';
  if(searchConfigured(engine) && (!cached || cached.origin !== 'api' || Date.now()-new Date(cached.fetched_at).getTime()>6*3600000)) {
    try { await syncSearch(engine,days);cached=(await db().query("SELECT *,to_char(start_date,'YYYY-MM-DD') AS start_date,to_char(end_date,'YYYY-MM-DD') AS end_date FROM fintiex_search_reports WHERE engine=$1 AND period_days=$2",[engine,days])).rows[0]; }
    catch {status='Refresh failed';}
  }
  return cached?{...cached,status}:null;
}
