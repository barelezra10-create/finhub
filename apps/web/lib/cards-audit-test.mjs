import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
const code=ts.transpileModule(fs.readFileSync('lib/cards.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
const cards=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
const read=slug=>JSON.parse(fs.readFileSync(`data/cards/${slug}.json`,'utf8'));
assert.equal(cards.formatAnnualFee(null),'Check issuer');assert.equal(cards.formatFeePct(null),'Check issuer');assert.equal(cards.formatAnnualFee(0),'$0');
const unknown=read('wells-fargo-active-cash-student');assert.ok(!cards.cardCategories(unknown).includes('no-annual-fee'));assert.equal(cards.topRewardRate(unknown),'Check issuer');
assert.equal(read('chase-sapphire-reserve').annual_fee,795);assert.equal(read('amex-platinum').annual_fee,895);assert.equal(read('bilt-mastercard').availability,'retired');
const spend={groceries:500,dining:200,travel:150,gas:150,other:1000};
assert.equal(cards.yearlyRewardsValue(read('citi-double-cash'),spend),480);
assert.equal(cards.yearlyRewardsValue(read('capital-one-quicksilver-student'),spend),360);
const calculator=fs.readFileSync('app/calculators/rewards-optimizer/calculator.tsx','utf8');assert.ok(!calculator.includes('"us-supermarkets": groceries'));assert.ok(!calculator.includes('flights: travel'));
for(const file of fs.readdirSync('data/cards')){const c=JSON.parse(fs.readFileSync('data/cards/'+file,'utf8'));assert.equal(c.rating,null);assert.equal(c.credit_score_required,null);if(c.annual_fee!==null){assert.ok(c.source_url?.startsWith('https://'));assert.ok(c.source_checked);assert.ok(c.verified_fields.includes('annual_fee'));}}
console.log('PASS: unknown pricing, zero-fee distinction, retired offers, corrected fees, source records and single-count reward calculations');
