import {db} from './db';
export type Conversion={network:string;conversion_id:string;occurred_at:string;offer:string;status:'submitted'|'approved'|'paid'|'rejected';revenue:number;currency:string};
export function parseConversionCsv(text:string):Conversion[]{
 if(text.length>1000000)throw new Error('File too large');
 const lines=text.replace(/^\uFEFF/,'').trim().split(/\r?\n/);
 const expected='network,conversion_id,occurred_at,offer,status,revenue,currency';
 if(lines.shift()?.trim()!==expected||lines.length>5000||!lines.length)throw new Error('Invalid header or row count');
 const seen=new Set<string>();
 return lines.map(line=>{
  const [network,id,date,offer,status,amount,currency,...extra]=line.split(',').map(s=>s.trim());
  if(extra.length||![network,id,offer].every(v=>v&&/^[a-zA-Z0-9_.:-]{1,100}$/.test(v))||!/^(submitted|approved|paid|rejected)$/.test(status||'')||!/^\d{4}-\d{2}-\d{2}$/.test(date||'')||!/^\d{1,9}(\.\d{1,2})?$/.test(amount||'')||!/^[A-Z]{3}$/.test(currency||''))throw new Error('Invalid row');
  if(new Date(date!).toISOString().slice(0,10)!==date||date!>new Date().toISOString().slice(0,10))throw new Error('Invalid date');
  const key=network+'\0'+id;if(seen.has(key))throw new Error('Duplicate conversion ID');seen.add(key);
  if(status==='rejected'&&Number(amount)!==0)throw new Error('Rejected conversions must have zero commission');
  return {network:network!,conversion_id:id!,occurred_at:date!,offer:offer!,status:status as Conversion['status'],revenue:Number(amount),currency:currency!};
 });
}
export async function saveConversions(rows:Conversion[]){
 const client=await db().connect();
 try{await client.query('BEGIN');for(const r of rows)await client.query(`INSERT INTO fintiex_conversions(network,conversion_id,occurred_at,offer,status,revenue,currency) VALUES($1,$2,$3,$4,$5,$6,$7) ON CONFLICT(network,conversion_id) DO UPDATE SET occurred_at=excluded.occurred_at,offer=excluded.offer,status=excluded.status,revenue=excluded.revenue,currency=excluded.currency,imported_at=now()`,[r.network,r.conversion_id,r.occurred_at,r.offer,r.status,r.revenue,r.currency]);await client.query('COMMIT');}catch(e){await client.query('ROLLBACK');throw e;}finally{client.release();}
}
export async function conversionReport(days:number){return (await db().query(`SELECT network,offer,currency,count(*)::int AS applications,count(*) FILTER(WHERE status IN ('approved','paid'))::int AS approved,count(*) FILTER(WHERE status='paid')::int AS paid,count(*) FILTER(WHERE status='rejected')::int AS rejected,coalesce(sum(revenue) FILTER(WHERE status='approved'),0)::text AS approved_commission,coalesce(sum(revenue) FILTER(WHERE status='paid'),0)::text AS paid_commission FROM fintiex_conversions WHERE occurred_at >= (now() AT TIME ZONE 'UTC')::date - ($1::int-1) AND occurred_at <= (now() AT TIME ZONE 'UTC')::date GROUP BY network,offer,currency ORDER BY applications DESC LIMIT 200`,[days])).rows;}
