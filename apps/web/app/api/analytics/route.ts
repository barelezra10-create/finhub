import { NextRequest, NextResponse } from "next/server";
import { BOT, cleanPath, cleanTag, externalHost, visitorHash } from "@/lib/analytics/core";
import { acquisition } from "@/lib/analytics/dimensions";
import { enrich } from "@/lib/analytics/enrichment";
import { db } from "@/lib/analytics/db";

export const runtime = "nodejs";
const empty = () => new NextResponse(null, { status: 204, headers: { "Cache-Control": "no-store" } });
export async function POST(request: NextRequest) {
  if (process.env.ANALYTICS_ENABLED !== "true") return empty();
  const expected = process.env.ANALYTICS_ORIGIN || "https://www.fintiex.com";
  const ua = request.headers.get("user-agent") || "";
  if (!ua || BOT.test(ua) || request.headers.get("dnt") === "1" || request.headers.get("sec-gpc") === "1") return empty();
  if (request.headers.get("origin") !== expected || request.headers.get("sec-fetch-site") !== "same-origin") return new NextResponse(null, {status:403});
  if (!request.headers.get("content-type")?.startsWith("application/json")) return new NextResponse(null, {status:415});
  try {
    const reader = request.body?.getReader();
    if (!reader) return new NextResponse(null, {status:400});
    const chunks: Uint8Array[] = []; let length = 0;
    while (true) {
      const {done,value} = await reader.read(); if (done) break;
      length += value.length;
      if (length > 2048) { await reader.cancel(); return new NextResponse(null,{status:413}); }
      chunks.push(value);
    }
    const data = JSON.parse(Buffer.concat(chunks).toString());
    const path = cleanPath(data.path);
    if (!path || typeof data.id !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(data.id) || !['pageview','outbound'].includes(data.kind)) return new NextResponse(null,{status:400});
    const target = externalHost(data.target);
    if (data.kind === 'outbound' && !target) return new NextResponse(null,{status:400});
    const ip = request.headers.get("x-real-ip");
    if (!ip) return empty(); // Never group unidentified requests into a fake visitor.
    const visitor = visitorHash(ip, ua);
    const pool = db();
    // Bound per-client volume; analytics is advisory and cannot prove a human visit.
    const count = await pool.query("SELECT count(*)::int AS n FROM fintiex_analytics WHERE visitor=$1 AND created_at > now()-interval '1 minute'", [visitor]);
    if (count.rows[0].n >= 60) return new NextResponse(null,{status:429});
    const a = acquisition(data);
    const e = await enrich(ip,ua,request.headers.get('accept-language') || '',data.deviceHint);
    await pool.query("INSERT INTO fintiex_analytics(event_id,kind,visitor,path,source,medium,campaign,target,country,region,city,device,browser,os,language,referrer,channel,search_engine,keyword,keyword_type,offer,placement) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22) ON CONFLICT DO NOTHING", [data.id,data.kind,visitor,path,a.source,a.medium,cleanTag(data.campaign),target,e.country,e.region,e.city,e.device,e.browser,e.os,e.language,a.referrer,a.channel,a.search_engine,a.keyword,a.keyword_type,data.kind==='outbound'?cleanTag(data.offer):'',data.kind==='outbound'?cleanTag(data.placement):'']);
    return empty();
  } catch (error) {
    if (error instanceof SyntaxError || error instanceof TypeError) return new NextResponse(null,{status:400});
    console.error("Analytics write unavailable");
    return new NextResponse(null,{status:503});
  }
}
