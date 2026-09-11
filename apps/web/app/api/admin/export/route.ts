import {NextRequest,NextResponse} from 'next/server';
import {ADMIN_COOKIE,validSession} from '@/lib/analytics/auth';
import {eventLog,parseFilters} from '@/lib/analytics/dashboard';
export const runtime='nodejs';
export async function GET(request:NextRequest) {
  if(!await validSession(request.cookies.get(ADMIN_COOKIE)?.value))return new NextResponse(null,{status:401,headers:{'Cache-Control':'no-store'}});
  const params=Object.fromEntries(request.nextUrl.searchParams);const f=parseFilters(params);const page=Math.max(1,Math.min(2000,Math.floor(Number(params.page)||1)));
  const kind=['pageview','outbound'].includes(params.kind || '')?params.kind!:'';
  const log=await eventLog(f,page,kind);
  const fields=['created_at','kind','path','source','channel','search_engine','referrer','medium','campaign','country','region','city','device','browser','os','language','keyword','keyword_type','target'];
  const cell=(value:unknown)=>{let s=value instanceof Date?value.toISOString():String(value??'');if(/^[=+@\-\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"';};
  const csv=[fields.join(','),...log.events.map(row=>fields.map(k=>cell(row[k])).join(','))].join('\r\n');
  return new NextResponse(csv,{headers:{'Content-Type':'text/csv; charset=utf-8','Content-Disposition':`attachment; filename="fintiex-activity-page-${page}.csv"`,'Cache-Control':'private, no-store'}});
}
