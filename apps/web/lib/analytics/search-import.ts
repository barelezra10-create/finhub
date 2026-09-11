import type { SearchRow } from './search-reports';
export function parseSearchCsv(text:string):SearchRow[] {
  if(text.length>2000000) throw new Error('CSV is too large');
  const rows:string[][]=[];let row:string[]=[];let field='';let quoted=false;
  for(let i=0;i<text.length;i++) {
    const c=text[i];
    if(c==='"') {if(quoted && text[i+1]==='"'){field+='"';i++;}else quoted=!quoted;}
    else if(c===',' && !quoted){row.push(field);field='';}
    else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&text[i+1]==='\n')i++;row.push(field);if(row.some(v=>v.trim()))rows.push(row);row=[];field='';}
    else field+=c;
  }
  if(quoted) throw new Error('Unclosed CSV quote');
  row.push(field);if(row.some(v=>v.trim()))rows.push(row);
  const header=rows.shift()?.map(v=>v.replace(/^\uFEFF/,'').trim().toLowerCase()) || [];
  const index=(names:string[])=>header.findIndex(v=>names.includes(v));
  const qi=index(['top queries','query','queries','keyword','keywords']),ci=index(['clicks']),ii=index(['impressions']),pi=index(['position','average position','avg. position','avgimpressionposition']);
  if(qi<0||ci<0||ii<0||pi<0||rows.length>25000)throw new Error('Expected query, clicks, impressions, and position columns');
  const result=rows.map(r=>{
    const query=(r[qi]||'').trim().slice(0,500);const numeric=(i:number)=>r[i]?.trim()?Number(r[i]!.replace(/,/g,'')):NaN;
    const clicks=numeric(ci),impressions=numeric(ii),position=numeric(pi);
    if(!query||!Number.isSafeInteger(clicks)||!Number.isSafeInteger(impressions)||clicks<0||impressions<0||!Number.isFinite(position)||position<0)throw new Error('Invalid query metrics');
    return {query,clicks,impressions,position,ctr:impressions?clicks/impressions:0};
  });
  if(!result.length)throw new Error('CSV has no query rows');
  return result.sort((a,b)=>b.clicks-a.clicks || b.impressions-a.impressions);
}
