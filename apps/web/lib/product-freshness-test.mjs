import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import ts from 'typescript';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

// Execute real loaders and the server component without a Next server or database.
const root=process.cwd(), nativeRequire=createRequire(path.join(root,'package.json')), cache=new Map();
function load(file){
  if(cache.has(file))return cache.get(file).exports;
  if(file.endsWith('.json'))return JSON.parse(fs.readFileSync(file,'utf8'));
  const mod={exports:{}};cache.set(file,mod);
  const localRequire=id=>{
    if(id==='server-only')return {};
    if(id.startsWith('@/')||id.startsWith('.')){
      const base=id.startsWith('@/')?path.join(root,id.slice(2)):path.resolve(path.dirname(file),id);
      const target=[base,base+'.ts',base+'.tsx'].find(p=>fs.existsSync(p)&&fs.statSync(p).isFile());
      if(!target)throw new Error(`Cannot resolve ${id}`);
      return load(target);
    }
    return nativeRequire(id);
  };
  const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText;
  new Function('require','module','exports',code)(localRequire,mod,mod.exports);
  return mod.exports;
}
const {reviewDue,buildReviewQueue,auditCategories}=load(path.join(root,'lib/product-freshness.ts'));
const now=new Date('2026-09-24T23:59:59Z');
assert.equal(reviewDue('2026-09-24',30,now).due,'2026-10-24');
assert.equal(reviewDue('2026-09-17',7,now).status,'due-today');
assert.equal(reviewDue('2026-09-16',7,now).daysOverdue,1);
assert.equal(reviewDue('2026-08-25',30,now).status,'due-today');
for(const value of [undefined,'','2026-02-30','2026-9-1','bad','2026-09-25'])assert.equal(reviewDue(value,30,now).status,'needs-check');
assert.equal(reviewDue('2028-02-29',30,new Date('2028-03-01T00:00:00Z')).due,'2028-03-30');
assert.equal(reviewDue('2026-12-31',7,new Date('2027-01-07T00:00:00Z')).status,'due-today');
const {loadAuditProducts}=load(path.join(root,'lib/product-audit-server.ts'));
const products=loadAuditProducts();
assert.equal(new Set(products.map(p=>p.id)).size,products.length);
for(const category of Object.keys(auditCategories))assert.ok(products.some(p=>p.category===category),category);
assert.equal(products.filter(p=>['auto','home','brokerages','personal'].includes(p.category)&&p.availability!=='unavailable').length,34);
for(const p of products){assert.ok(p.href.startsWith('/'));assert.ok(p.source?.startsWith('https://'));}
for(const id of ['personal-marcus-personal-loan','life-haven-life','student-discover-student-loans'])assert.equal(products.find(p=>p.id===id).availability,'unavailable');
const fixture=[{id:'recent',category:'personal',name:'A',checked:'2026-09-24'},{id:'closed-overdue',category:'savings',name:'B',checked:'2026-01-01',availability:'closed'},{id:'missing',category:'cards',name:'C'}];
assert.deepEqual(buildReviewQueue(fixture,now).map(p=>p.id),['missing','closed-overdue','recent']);
const before=JSON.stringify(products);buildReviewQueue(products,now);assert.equal(JSON.stringify(products),before);
const {OfferAuditPanel}=load(path.join(root,'app/admin/offer-audit-panel.tsx'));
const html=renderToStaticMarkup(React.createElement(OfferAuditPanel));
assert.equal((html.match(/<tr>/g)||[]).length,products.length+1);
const brokerHtml=renderToStaticMarkup(React.createElement(OfferAuditPanel,{category:'brokerages'}));
assert.equal((brokerHtml.match(/<tr>/g)||[]).length,8);
const invalidHtml=renderToStaticMarkup(React.createElement(OfferAuditPanel,{category:'__proto__',status:'constructor'}));
assert.equal((invalidHtml.match(/<tr>/g)||[]).length,products.length+1);
for(const status of ['needs-check','overdue','due-today','scheduled']){
 const filtered=renderToStaticMarkup(React.createElement(OfferAuditPanel,{status}));
 const count=buildReviewQueue(products).filter(p=>p.status===status).length;
 assert.equal((filtered.match(/<tr>/g)||[]).length,count?count+1:0);
}
const {cleanTag}=load(path.join(root,'lib/analytics/core.ts'));
for(const p of products.filter(p=>['auto','home','brokerages','personal'].includes(p.category))){
 const tag=p.href.split('/').filter(Boolean).join('-');assert.equal(cleanTag(tag),tag);
}
if(process.env.AUDIT_PREVIEW_PATH){
 fs.writeFileSync(process.env.AUDIT_PREVIEW_PATH,`<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{margin:0;font-family:Arial,sans-serif}*{box-sizing:border-box}${fs.readFileSync('app/admin/analytics.css','utf8')}</style></head><body><main class="analytics analytics-full">${html}</main></body></html>`);
}
console.log(`PASS: UTC due boundaries, invalid/future dates, leap/year transitions, ${products.length} records across 8 categories, retired products, priority sorting, filters, server rendering, unchanged source dates and valid offer tags.`);
