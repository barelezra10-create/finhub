import { db } from './db';
export type Filters = {days:number;source:string;country:string;device:string;channel:string};
export type MetricRow = {label:string;views:number;visitors:number;clicks:number};
const metrics = "count(*) FILTER(WHERE kind='pageview')::int AS views, count(DISTINCT visitor) FILTER(WHERE kind='pageview')::int AS visitors, count(*) FILTER(WHERE kind='outbound')::int AS clicks";
const match = "($2::text='' OR source=$2) AND ($3::text='' OR country=$3) AND ($4::text='' OR device=$4) AND ($5::text='' OR channel=$5)";
const start = "date_trunc('day',now() AT TIME ZONE 'UTC') AT TIME ZONE 'UTC' - ($1::int-1)*interval '1 day'";
const range = `created_at >= ${start} AND ${match}`;
export function parseFilters(params: Record<string,string|undefined>): Filters {
  const days=Number(params.days || 30);
  return {days:[1,7,30,90].includes(days)?days:30,source:(params.source || '').trim().slice(0,200),country:/^[A-Z]{2}$/.test(params.country || '')?params.country!:'',device:['Desktop','Mobile','Tablet','Unknown'].includes(params.device || '')?params.device!:'',channel:(params.channel || '').slice(0,40)};
}
export async function dashboard(f:Filters) {
  const pool=db();const args=[f.days,f.source,f.country,f.device,f.channel];
  const grouped=async(expression:string,extra='',limit=30) => (await pool.query<MetricRow>(`SELECT ${expression} AS label, ${metrics} FROM fintiex_analytics WHERE ${range} ${extra} GROUP BY 1 ORDER BY views DESC, clicks DESC, label LIMIT ${limit}`,args)).rows;
  const [summary,previous,daily,realtime,coverage,options,pages,sources,channels,engines,referrers,campaigns,countries,regions,cities,devices,browsers,systems,languages,keywords,outbound] = await Promise.all([
    pool.query(`SELECT ${metrics},count(DISTINCT nullif(country,''))::int AS countries FROM fintiex_analytics WHERE ${range}`,args),
    pool.query(`SELECT ${metrics} FROM fintiex_analytics WHERE created_at >= ${start} - $1::int*interval '1 day' AND created_at < ${start} AND ${match}`,args),
    pool.query(`SELECT to_char(created_at AT TIME ZONE 'UTC','YYYY-MM-DD') AS day, ${metrics} FROM fintiex_analytics WHERE ${range} GROUP BY 1 ORDER BY 1`,args),
    pool.query(`SELECT count(DISTINCT visitor)::int AS visitors FROM fintiex_analytics WHERE created_at >= now()-interval '5 minutes' AND ${match}`.replaceAll('$2','$1').replaceAll('$3','$2').replaceAll('$4','$3').replaceAll('$5','$4'),args.slice(1)),
    pool.query(`SELECT count(*) FILTER(WHERE country<>'')::int AS geo, count(*) FILTER(WHERE device<>'Unknown')::int AS devices, count(*) FILTER(WHERE keyword<>'')::int AS keywords, count(*) FILTER(WHERE search_engine<>'' AND keyword='')::int AS hidden_keywords FROM fintiex_analytics WHERE ${range} AND kind='pageview'`,args),
    pool.query("SELECT array_agg(DISTINCT source ORDER BY source) AS sources,array_agg(DISTINCT country ORDER BY country) FILTER(WHERE country<>'') AS countries,array_agg(DISTINCT channel ORDER BY channel) AS channels FROM fintiex_analytics WHERE created_at >= now()-interval '90 days'"),
    grouped('path','',100),grouped('source'),grouped('channel'),grouped('search_engine',"AND search_engine<>''"),grouped("COALESCE(NULLIF(referrer,''),'Not supplied')"),grouped("source || ' / ' || medium || ' / ' || campaign", "AND campaign<>''"),grouped("COALESCE(NULLIF(country,''),'Unknown')"),grouped("CASE WHEN region='' THEN 'Unknown' ELSE region || ', ' || country END"),grouped("CASE WHEN city='' THEN 'Unknown' ELSE city || ', ' || country END"),grouped('device'),grouped('browser'),grouped('os'),grouped("COALESCE(NULLIF(language,''),'Unknown')"),grouped("keyword_type || ': ' || keyword","AND keyword<>''"),grouped('target',"AND kind='outbound'"),
  ]);
  return {summary:summary.rows[0],previous:previous.rows[0],daily:daily.rows,realtime:realtime.rows[0].visitors,coverage:coverage.rows[0],options:options.rows[0],pages,sources,channels,engines,referrers,campaigns,countries,regions,cities,devices,browsers,systems,languages,keywords,outbound};
}
export async function eventLog(f:Filters,page:number,kind:string) {
  const args=[f.days,f.source,f.country,f.device,f.channel,kind];
  const where=`${range} AND ($6::text='' OR kind=$6)`;
  const [events,count]=await Promise.all([
    db().query(`SELECT event_id,created_at,kind,path,source,medium,campaign,target,country,region,city,device,browser,os,language,referrer,channel,search_engine,keyword,keyword_type FROM fintiex_analytics WHERE ${where} ORDER BY created_at DESC,event_id DESC LIMIT 50 OFFSET $7`,[...args,(page-1)*50]),
    db().query(`SELECT count(*)::int AS total FROM fintiex_analytics WHERE ${where}`,args),
  ]);
  return {events:events.rows,total:count.rows[0].total as number};
}
