import { ImageResponse } from 'next/og';
export const runtime = 'nodejs';
export const dynamic = 'force-static';
export const alt = 'Fintiex: Personal finance, leveled up.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function OpengraphImage() {
  return new ImageResponse(<div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:64,background:'#111111',color:'#FAFAF7',fontFamily:'sans-serif'}}>
    <div style={{display:'flex',alignItems:'center',gap:18,fontSize:32,fontWeight:700}}><span style={{display:'flex',background:'#D4FF3D',color:'#111111',padding:12,borderRadius:14}}>Fx</span><span>Fintiex</span></div>
    <div style={{display:'flex',flexDirection:'column',fontSize:86,fontWeight:700,lineHeight:1.1}}><span>Personal finance,</span><span style={{color:'#D4FF3D'}}>leveled up.</span></div>
    <div style={{display:'flex',fontSize:28,color:'#CCCCCC'}}>Compare products. Understand the terms. Run the numbers.</div>
    <div style={{display:'flex',fontSize:22,color:'#CCCCCC'}}>Savings · Mortgages · Credit cards · Calculators</div>
  </div>, size);
}
