import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ADMIN_COOKIE, validSession } from "@/lib/analytics/auth";
import { report, activity } from "@/lib/analytics/db";
import "./analytics.css";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {title:"Traffic analytics | Fintiex admin",robots:{index:false,follow:false}};
const number = (n: number) => n.toLocaleString("en-US");
type Row = {label:string;views?:number;visitors?:number;clicks?:number};
function Table({title,rows,clicks=false}: {title:string;rows:Row[];clicks?:boolean}) {
  return <section className="analytics-panel"><h2>{title}</h2>{!rows.length ? <p className="analytics-empty">No activity recorded in this period.</p> : <div className="analytics-scroll"><table><thead><tr><th>{title === 'Top pages' ? 'Page' : 'Name'}</th>{!clicks && <><th>Views</th><th>Daily visitors*</th></>}<th>{clicks ? 'Clicks' : 'Outbound clicks'}</th></tr></thead><tbody>{rows.map(row=><tr key={row.label}><td>{row.label}</td>{!clicks && <><td>{number(row.views || 0)}</td><td>{number(row.visitors || 0)}</td></>}<td>{row.clicks === undefined ? '—' : number(row.clicks)}</td></tr>)}</tbody></table></div>}</section>;
}
export default async function Admin({searchParams}: {searchParams:Promise<{days?:string;page?:string;kind?:string;source?:string}>}) {
  if (!await validSession((await cookies()).get(ADMIN_COOKIE)?.value)) redirect('/admin/login');
  const params = await searchParams;
  const raw = Number(params.days || 30);
  const days = [1,7,30,90].includes(raw) ? raw : 30;
  const page = Math.min(2000,Math.max(1,Math.floor(Number(params.page) || 1)));
  const kind = ['pageview','outbound'].includes(params.kind || '') ? params.kind! : '';
  const source = (params.source || '').trim().slice(0,200);
  const logUrl = (n: number) => `/admin?${new URLSearchParams({days:String(days),page:String(n),kind,source})}#activity`;
  let data: Awaited<ReturnType<typeof report>> | undefined;
  let log: Awaited<ReturnType<typeof activity>> | undefined;
  try { [data,log] = await Promise.all([report(days),activity(days,page,kind,source)]); } catch { /* Render a truthful setup state, never fabricated zeros. */ }
  const daily = Array.from({length:days},(_,index)=>{
    const date = new Date(); date.setUTCDate(date.getUTCDate()-(days-1-index));
    const day = date.toISOString().slice(0,10);
    return data?.daily.find(row=>row.day===day) || {day,views:0,visitors:0};
  });
  const maximum = Math.max(1,...daily.map(row=>row.views));
  return <div className="analytics"><header className="analytics-heading"><div><p className="analytics-eyebrow">FINTIEX / ADMIN</p><h1>Traffic & page performance</h1><p>See what readers visit and how they find you.</p></div><div className="analytics-account"><span className="analytics-status">{process.env.ANALYTICS_ENABLED === 'true' ? 'Tracking enabled' : 'Tracking paused'}</span><form action="/api/admin/logout" method="post"><button type="submit" className="analytics-signout">Sign out</button></form></div></header>
    <nav className="analytics-period" aria-label="Reporting period">{[1,7,30,90].map(n=><Link key={n} aria-current={days===n?'page':undefined} href={`/admin?days=${n}`}>{n===1?'Today':`${n} days`}</Link>)}<span>UTC · includes today · refresh to update</span></nav>
    {!data ? <section className="analytics-panel"><h2>Analytics storage is not available</h2><p>Connect the analytics database and apply its schema before collecting traffic. No visitor total is available yet.</p></section> : <>
      <div className="analytics-stats">{[['Page views',data.summary.views],['Daily visitors*',data.summary.visitors],['Outbound clicks',data.summary.clicks]].map(([label,value])=><section className="analytics-panel" key={label}><p>{label}</p><strong>{number(Number(value))}</strong></section>)}</div>
      <section className="analytics-panel"><h2>Daily traffic</h2><p className="analytics-muted">Page views by day</p><div className="analytics-chart" role="img" aria-label={daily.map(r=>`${r.day}: ${r.views} views`).join('; ')}>{daily.map(row=><div key={row.day} title={`${row.day}: ${number(row.views)} views, ${number(row.visitors)} daily visitors`} style={{height:`${Math.max(1,row.views/maximum*100)}%`}} />)}</div><div className="analytics-chart-labels"><span>{daily[0].day}</span><span>{daily[daily.length-1].day}</span></div><details><summary>View daily numbers</summary><div className="analytics-scroll"><table><thead><tr><th>Date (UTC)</th><th>Views</th><th>Daily visitors*</th></tr></thead><tbody>{daily.map(row=><tr key={row.day}><td>{row.day}</td><td>{row.views}</td><td>{row.visitors}</td></tr>)}</tbody></table></div></details></section>
      <Table title="Top pages" rows={data.pages}/><div className="analytics-grid"><Table title="Traffic sources" rows={data.sources}/><Table title="Campaigns" rows={data.campaigns}/></div><Table title="Outbound destinations" rows={data.outbound} clicks/>
      <section className="analytics-panel" id="activity"><h2>Click & visit log</h2><p className="analytics-muted">The source behind each recorded visit and outbound click. Newest first.</p><form className="analytics-filters" action="/admin#activity"><input type="hidden" name="days" value={days}/><label>Activity<select name="kind" defaultValue={kind}><option value="">All activity</option><option value="pageview">Page views</option><option value="outbound">Outbound clicks</option></select></label><label>Traffic source<input name="source" placeholder="All sources" defaultValue={source} maxLength={200} list="traffic-sources"/><datalist id="traffic-sources">{data.sources.map(row=><option key={row.label} value={row.label}/>)}</datalist></label><button type="submit">Filter log</button><Link href={`/admin?days=${days}#activity`}>Clear</Link></form>
      {!log?.events.length ? <p className="analytics-empty">No matching activity in this period.</p> : <div className="analytics-scroll"><table className="analytics-activity"><thead><tr><th>Time (UTC)</th><th>Activity</th><th>Page</th><th>Destination</th><th>Traffic source</th><th>Medium</th><th>Campaign</th></tr></thead><tbody>{log.events.map(event=><tr key={event.event_id}><td>{new Date(event.created_at).toISOString().slice(0,19).replace('T',' ')}</td><td><span className={`analytics-event ${event.kind}`}>{event.kind === 'outbound' ? 'Outbound click' : 'Page view'}</span></td><td>{event.path}</td><td>{event.target || '—'}</td><td>{event.source}</td><td>{event.medium || '—'}</td><td>{event.campaign || '—'}</td></tr>)}</tbody></table></div>}
      <nav className="analytics-pagination" aria-label="Activity pages"><span>{number(log?.total || 0)} matching events · Page {page}</span>{page>1 && <Link href={logUrl(page-1)}>← Newer</Link>}{page*50 < (log?.total || 0) && page<2000 && <Link href={logUrl(page+1)}>Older →</Link>}</nav></section>
    </>}
    <section className="analytics-notes"><h2>Reading these numbers</h2><p>* Daily visitors are estimates based on a daily rotating identifier. Over several days, this is the sum of daily unique visitors, not unique people across the entire period. Shared networks can undercount; changing networks can overcount.</p><p>Sources use campaign tags when available, otherwise the referring website. Direct / unknown includes typed URLs, bookmarks, and referrals browsers hide. Outbound clicks measure interest, not completed applications or sales. Known bots, admin pages, Do Not Track, and Global Privacy Control are excluded; undetected bots may remain.</p><p>No analytics cookies, raw IP addresses, full referrer URLs, or calculator inputs are stored. Reports begin at installation. Records older than 90 days are removed automatically.</p><p>Campaign example: <code>https://www.fintiex.com/savings?utm_source=newsletter&utm_medium=email&utm_campaign=weekly_rates</code></p></section>
  </div>;
}
