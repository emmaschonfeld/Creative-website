'use client';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, mn: number, mx: number) => Math.max(mn, Math.min(mx, v));
const ease = (t: number) => t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t;
const asset = (name: string) => `/Creative-website/${name}.png`;
const serif = "'Playfair Display',serif";
const gpu: CSSProperties = { willChange:'transform', backfaceVisibility:'hidden' };
function Nav() {
  const link: CSSProperties = {fontSize:11,letterSpacing:'0.16em',textTransform:'uppercase',color:'rgba(255,255,255,0.82)',fontWeight:500,textDecoration:'none'};
  return <nav aria-label="Main navigation" style={{position:'absolute',top:0,left:0,right:0,zIndex:50,padding:'22px clamp(16px,4vw,48px)',display:'flex',alignItems:'center',justifyContent:'space-between',gap:14}}>
    <div style={{display:'flex',gap:'clamp(8px,2.6vw,32px)',flexWrap:'wrap'}}>{['Markets','Portfolio','Research'].map(t=><a key={t} href="#wealth" style={link}>{t}</a>)}</div>
    <a href="#top" aria-label="Aurum Capital home" style={{flexShrink:0}}><svg width="28" height="28" viewBox="0 0 28 28" fill="white" stroke="white" aria-hidden="true"><rect x="4" y="10" width="5" height="12"/><path d="M6.5 6v4m0 12v3"/><rect x="11.5" y="6" width="5" height="10"/><path d="M14 2v4m0 10v4"/><rect x="19" y="13" width="5" height="9"/><path d="M21.5 9v4m0 9v4"/></svg></a>
    <div style={{display:'flex',gap:'clamp(8px,2.6vw,32px)',flexWrap:'wrap',justifyContent:'flex-end'}}>{['Insights','Wealth','Contact'].map(t=><a key={t} href="#wealth" style={link}>{t}</a>)}</div>
  </nav>;
}
function Dots() {return <div aria-hidden="true" style={{display:'flex',gap:7,marginTop:32}}>{[28,14,14,14].map((w,i)=><span key={i} style={{width:w,height:3,borderRadius:3,background:i===0?'rgba(255,255,255,0.9)':'rgba(255,255,255,0.32)'}}/>)}</div>;}
function Card({image,type,label,value,sublabel,mobile}:{image:string;type:'fund'|'stat'|'report';label?:string;value?:string;sublabel?:string;mobile:boolean}) {
  const badgeColor=type==='fund'?'rgba(120,230,150,0.9)':'rgba(255,200,80,0.9)';
  return <article style={{position:'relative',width:mobile?'calc((100vw - 68px) / 3)':148,height:mobile?132:180,borderRadius:16,overflow:'hidden',boxShadow:'0 8px 32px rgba(0,0,0,0.55)',flexShrink:0}}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={asset(image)} alt={image==='card1'?'Golden stairway to an arch':image==='card2'?'Infinite portal corridor':'Palm colonnade at sunset'} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
    <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(5,10,20,0.88) 0%, rgba(5,10,20,0.3) 50%, transparent 100%)'}}/>
    <div style={{position:'absolute',bottom:0,left:0,right:0,padding:12}}>{type==='stat'?<><div style={{fontFamily:serif,fontWeight:700,fontSize:30,color:'white',lineHeight:1}}>{value}</div><div style={{fontSize:9,color:'rgba(255,220,150,0.8)',letterSpacing:'0.14em',textTransform:'uppercase',marginTop:4}}>{sublabel}</div></>:<><div style={{display:'inline-flex',alignItems:'center',gap:4,background:'rgba(255,200,80,0.15)',border:'1px solid rgba(255,200,80,0.3)',borderRadius:6,padding:'3px 8px',marginBottom:6,fontSize:8,color:badgeColor}}><svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke={badgeColor} strokeWidth="1.2" aria-hidden="true"><path d={type==='fund'?'M1 6l2-3 2 2 2-4':'M1 4h6M4 1v6'}/></svg>{type==='fund'?'LIVE':'NEW'}</div><div style={{fontSize:10,color:'rgba(255,255,255,0.85)',letterSpacing:'0.08em',textTransform:'uppercase'}}>{label}</div></>}</div>
  </article>;
}
export default function PinkPortal() {
  const bgRef=useRef<HTMLDivElement>(null),glowRef=useRef<HTMLDivElement>(null),portalRef=useRef<HTMLDivElement>(null),cloudsRef=useRef<HTMLDivElement>(null),heroRef=useRef<HTMLDivElement>(null),ctaRef=useRef<HTMLDivElement>(null),ctaOverlay=useRef<HTMLDivElement>(null),cueRef=useRef<HTMLDivElement>(null);
  const target=useRef({x:0,y:0}),mouse=useRef({x:0,y:0});
  const [mobile,setMobile]=useState(false);
  useEffect(()=>{const query=window.matchMedia('(max-width: 850px)');const update=()=>setMobile(query.matches);update();query.addEventListener('change',update);return()=>query.removeEventListener('change',update);},[]);
  useEffect(()=>{const move=(e:MouseEvent)=>{target.current={x:(e.clientX/innerWidth)*2-1,y:(e.clientY/innerHeight)*2-1};};window.addEventListener('mousemove',move);return()=>window.removeEventListener('mousemove',move);},[]);
  useEffect(()=>{
    let frame=0;
    const tick=()=>{
      const sp=clamp(window.scrollY/Math.max(document.body.scrollHeight-innerHeight,1),0,1),ep=ease(sp);
      mouse.current.x=lerp(mouse.current.x,target.current.x,0.06);mouse.current.y=lerp(mouse.current.y,target.current.y,0.06);
      const rx=mouse.current.x,ry=mouse.current.y,scale=lerp(1,8,ep);
      if(bgRef.current)bgRef.current.style.transform=`scale(${lerp(1,1.22,sp)}) translate3d(${rx*8}px,${ry*8}px,0)`;
      if(glowRef.current){const s=glowRef.current.style;s.width=s.height=`${lerp(200,800,ep)}px`;s.opacity=String(lerp(0.35,0.9,clamp(sp/0.55,0,1))*(1-clamp((sp-0.55)/0.3,0,1)));}
      if(portalRef.current)portalRef.current.style.transform=`translate(-50%,-50%) scale(${scale}) translate3d(${rx*(5/Math.max(scale,1))}px,${ry*(5/Math.max(scale,1))}px,0)`;
      if(cloudsRef.current)cloudsRef.current.style.transform=`scale(${lerp(1,2.6,ep)}) translate3d(${rx*10}px,${lerp(0,420,ep)+ry*10}px,0)`;
      if(heroRef.current){heroRef.current.style.opacity=String(clamp(1-sp/0.28,0,1));heroRef.current.style.transform=`translateY(${sp*-40}px)`;}
      const o=clamp((sp-0.45)/0.3,0,1);
      if(ctaRef.current){ctaRef.current.style.opacity=String(o);ctaRef.current.style.transform=`scale(${lerp(0.6,1,clamp((sp-0.45)/0.55,0,1))})`;ctaRef.current.style.pointerEvents=o>0.05?'auto':'none';ctaRef.current.inert=o<=0.05;}
      if(ctaOverlay.current)ctaOverlay.current.style.opacity=String(clamp((sp-0.9)/0.1,0,1));
      if(cueRef.current)cueRef.current.style.opacity=String(clamp(1-sp/0.28,0,1));
      frame=requestAnimationFrame(tick);
    };frame=requestAnimationFrame(tick);return()=>cancelAnimationFrame(frame);
  },[]);
  return <main id="top" style={{height:'520vh',position:'relative'}}><div style={{position:'sticky',top:0,height:'100vh',overflow:'hidden',contain:'layout style paint'}}>
    <div ref={bgRef} style={{position:'absolute',inset:'-10%',zIndex:1,backgroundImage:`url(${asset('bg')})`,backgroundSize:'cover',backgroundPosition:'center 60%',...gpu}}/>
    <div style={{position:'absolute',inset:0,zIndex:2,pointerEvents:'none',background:'radial-gradient(ellipse 80% 70% at 50% 55%, transparent 25%, rgba(10,4,2,0.5) 100%)'}}/>
    <div ref={glowRef} style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',zIndex:2,width:200,height:200,borderRadius:'50%',background:'radial-gradient(circle, rgba(255,190,80,0.9) 0%, rgba(255,120,40,0.45) 40%, transparent 72%)',filter:'blur(22px)',willChange:'width,height,opacity',animation:'glow 2.8s ease-in-out infinite'}}/>
    <div ref={portalRef} style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%) scale(1)',zIndex:2,width:mobile?'110vw':'62vw',height:'98vh',transformOrigin:'center center',backgroundImage:`url(${asset('portal')})`,backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundPosition:'center',...gpu}}/>
    <div ref={cloudsRef} style={{position:'absolute',inset:'-8%',zIndex:3,backgroundImage:`url(${asset('clouds')})`,backgroundSize:'110% auto',backgroundPosition:'center bottom',...gpu}}/>
    <Nav/>
    <div ref={heroRef} style={{position:'absolute',inset:0,zIndex:10,display:'flex',flexDirection:mobile?'column':'row',alignItems:mobile?'flex-start':'flex-end',justifyContent:mobile?'flex-end':'space-between',gap:mobile?24:20,padding:mobile?'0 24px 78px':'0 52px 52px',willChange:'opacity,transform',pointerEvents:'none'}}>
      <div style={{position:'relative',maxWidth:480,animation:'fadeUp 1s ease 0.3s both'}}><div style={{position:'absolute',top:'-60%',left:'-40%',width:'180%',height:'220%',background:'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.22) 35%, rgba(0,0,0,0.06) 60%, transparent 75%)',zIndex:-1}}/><h1 style={{fontFamily:serif,fontWeight:700,fontSize:'clamp(48px,7vw,100px)',color:'white',lineHeight:0.9,letterSpacing:'-0.02em',margin:0,textShadow:'0 4px 40px rgba(255,130,40,0.35), 0 2px 16px rgba(0,0,0,0.7)'}}>GROW › <em style={{fontStyle:'italic',fontWeight:400}}>YOUR</em><br/>CAPITAL</h1><p style={{fontWeight:300,fontSize:'clamp(13px,1.3vw,15px)',color:'rgba(255,230,200,0.72)',lineHeight:1.7,maxWidth:340,marginTop:20}}>Precision-driven wealth management powered by AI analytics, institutional-grade research, and personalised portfolio strategy.</p><Dots/></div>
      <div style={{display:'flex',gap:10,alignItems:'flex-end',animation:'fadeUp 1s ease 0.5s both'}}><Card mobile={mobile} image="card1" type="fund" label="Global Equity Fund"/><Card mobile={mobile} image="card2" type="stat" value="$4.2B" sublabel="Assets Under Management"/><Card mobile={mobile} image="card3" type="report" label="Q2 Market Report"/></div>
    </div>
    <div ref={cueRef} style={{position:'absolute',bottom:28,left:'50%',display:'flex',flexDirection:'column',alignItems:'center',gap:7,animation:'fadeUp 1s ease 0.8s both, bob 2s ease-in-out 1.8s infinite',zIndex:10,pointerEvents:'none'}}><span style={{fontSize:9,letterSpacing:'0.26em',color:'rgba(255,200,140,0.5)'}}>EXPLORE</span><div style={{width:34,height:34,borderRadius:'50%',border:'1px solid rgba(255,180,80,0.35)',display:'grid',placeItems:'center'}}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="rgba(255,200,120,0.75)" strokeWidth="1.4" strokeLinecap="round"><path d="M2 4l4 4 4-4"/></svg></div></div>
    <div ref={ctaRef} style={{position:'absolute',inset:0,zIndex:20,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:24,opacity:0,transform:'scale(0.6)',pointerEvents:'none',willChange:'opacity,transform',isolation:'isolate'}}>
      <div ref={ctaOverlay} style={{position:'absolute',inset:0,zIndex:-1,pointerEvents:'none',background:'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(255,110,20,0.08) 0%, rgba(8,3,1,0.92) 70%)',opacity:0,willChange:'opacity'}}/>
      <p style={{fontSize:10,letterSpacing:'0.3em',textTransform:'uppercase',color:'rgba(255,200,120,0.6)',fontWeight:500,margin:'0 0 18px'}}>Your Future Starts Here</p><h2 style={{fontFamily:serif,fontWeight:700,fontSize:'clamp(40px,6.5vw,84px)',color:'white',margin:'0 0 26px',textAlign:'center',letterSpacing:'0.02em',lineHeight:1,textShadow:'0 2px 30px rgba(255,130,40,0.45)'}}>COMMAND<br/>YOUR WEALTH</h2><p style={{fontWeight:300,fontSize:'clamp(13px,1.4vw,16px)',color:'rgba(255,210,170,0.72)',maxWidth:420,textAlign:'center',lineHeight:1.75,margin:'0 0 44px'}}>Institutional strategies, transparent reporting, and real-time intelligence — built for investors who demand more.</p><a href="#top" style={{fontSize:10,letterSpacing:'0.22em',textTransform:'uppercase',color:'rgba(255,220,160,0.92)',textDecoration:'none',border:'1px solid rgba(255,180,80,0.38)',padding:'13px 34px',borderRadius:6,background:'rgba(255,140,40,0.09)',backdropFilter:'blur(10px)',display:'inline-flex',alignItems:'center',gap:10,fontWeight:500}}>Open Your Account<svg width="14" height="13" viewBox="0 0 14 13" fill="none" stroke="rgba(255,200,120,0.8)" strokeWidth="1.3" strokeLinecap="round" aria-hidden="true"><path d="M2 6.5h9M8 3l3.5 3.5L8 10"/></svg></a>
    </div>
  </div><div id="wealth" style={{position:'absolute',bottom:0}}/></main>;
}
