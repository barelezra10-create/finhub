import {NextRequest,NextResponse} from 'next/server';
import {ADMIN_COOKIE,validSession} from '@/lib/analytics/auth';
import {parseConversionCsv,saveConversions} from '@/lib/analytics/conversions';
export const runtime='nodejs';
export async function POST(request:NextRequest) {
  const origin=process.env.ANALYTICS_ORIGIN || 'https://www.fintiex.com';
  if(request.headers.get('origin')!==origin)return new NextResponse(null,{status:403});
  if(!await validSession(request.cookies.get(ADMIN_COOKIE)?.value))return new NextResponse(null,{status:401});
  const destination=(result:string)=>NextResponse.redirect(new URL(`/admin?tab=conversions&import=${result}`,origin),{status:303,headers:{'Cache-Control':'private, no-store'}});
  try {
    const reader=request.body?.getReader();if(!reader)return destination('error');const chunks:Uint8Array[]=[];let size=0;
    while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>1100000){await reader.cancel();return destination('error');}chunks.push(value);}
    const form=await new Response(Buffer.concat(chunks),{headers:{'Content-Type':request.headers.get('content-type') || ''}}).formData();
    const file=form.get('file');
    if(!(file instanceof File))return destination('error');
    await saveConversions(parseConversionCsv(await file.text()));
    return destination('success');
  } catch {return destination('error');}
}
