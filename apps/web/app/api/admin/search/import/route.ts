import {NextRequest,NextResponse} from 'next/server';
import {ADMIN_COOKIE,validSession} from '@/lib/analytics/auth';
import {parseSearchCsv} from '@/lib/analytics/search-import';
import {saveSearchReport,totalQueries} from '@/lib/analytics/search-reports';
export const runtime='nodejs';
export async function POST(request:NextRequest) {
  const origin=process.env.ANALYTICS_ORIGIN || 'https://www.fintiex.com';
  if(request.headers.get('origin')!==origin)return new NextResponse(null,{status:403});
  if(!await validSession(request.cookies.get(ADMIN_COOKIE)?.value))return new NextResponse(null,{status:401});
  const destination=(result:string)=>NextResponse.redirect(new URL(`/admin?tab=search&import=${result}`,origin),{status:303,headers:{'Cache-Control':'private, no-store'}});
  try {
    const reader=request.body?.getReader();if(!reader)return destination('error');const chunks:Uint8Array[]=[];let size=0;
    while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>2100000){await reader.cancel();return destination('error');}chunks.push(value);}
    const form=await new Response(Buffer.concat(chunks),{headers:{'Content-Type':request.headers.get('content-type') || ''}}).formData();
    const engine=String(form.get('engine')),start=String(form.get('start')),end=String(form.get('end')),file=form.get('file');
    if(!['google','bing'].includes(engine)||!/^\d{4}-\d{2}-\d{2}$/.test(start)||!/^\d{4}-\d{2}-\d{2}$/.test(end)||start>end||end>new Date().toISOString().slice(0,10)||!(file instanceof File))return destination('error');
    if(new Date(start).toISOString().slice(0,10)!==start||new Date(end).toISOString().slice(0,10)!==end)return destination('error');
    const rows=parseSearchCsv(await file.text());
    await saveSearchReport(engine,0,start,end,{rows,totals:totalQueries(rows),totalsScope:'reported queries'},'csv');
    return destination('success');
  } catch {return destination('error');}
}
