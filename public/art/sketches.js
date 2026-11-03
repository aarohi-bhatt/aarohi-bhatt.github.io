/* Generative sketches for aarohi-bhatt.github.io/art (p5.js, instance mode).
   Exposes window.ArtSketches.mount(element, key) -> p5 instance.
   Each instance has reseed() to grow a new version. */
(function(){
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
// Colors match the site: cream ground, zinc ink, a bold accent palette.
const THEME={bg:'#F4EFE8',ink:'#3f3f46',pal:['#e8664f','#2a9d8f','#f0b33c','#4659b3','#c8407a']};
const tok=()=>THEME;
const size=el=>Math.max(200,Math.round(el.clientWidth));
const SKETCHES={};

/* 0. Hall of Mirrors: one light ray, many reflections */
SKETCHES.mirrors=(p,el)=>{
  const BG=THEME.bg,LIGHT=['#e8664f','#e0a020','#2a9d8f','#3a7bd5','#7d4fc4','#c8407a'];
  let W,H,S,cx,cy,segs=[],circs=[],path=[],lens=[],total=0,drawn=0,buf,layout=0;
  const dims=()=>[Math.max(240,Math.round(el.clientWidth)),Math.max(200,Math.round(el.clientHeight))];
  const P=(x,y)=>({x:cx+x*S,y:cy+y*S});
  function addSeg(a,b){segs.push([a,b]);}
  function addPoly(n,r,rot,gap){for(let k=0;k<n;k++){const a0=rot+p.TWO_PI*k/n,a1=rot+p.TWO_PI*(k+1)/n;
    const A={x:Math.cos(a0)*r,y:Math.sin(a0)*r},B={x:Math.cos(a1)*r,y:Math.sin(a1)*r};
    const m=gap/2;addSeg(P(A.x+(B.x-A.x)*m,A.y+(B.y-A.y)*m),P(B.x+(A.x-B.x)*m,B.y+(A.y-B.y)*m));}}
  function build(){segs=[];circs=[];cx=W/2;cy=H/2;S=Math.min(W,H)/2;
    // the frame of the screen is always a mirror box
    const m=6;addSeg({x:m,y:m},{x:W-m,y:m});addSeg({x:W-m,y:m},{x:W-m,y:H-m});addSeg({x:W-m,y:H-m},{x:m,y:H-m});addSeg({x:m,y:H-m},{x:m,y:m});
    const n=p.random([5,6,7,8]),rot=p.random(p.TWO_PI);
    if(layout===0){ // broken polygon with a ring of round mirrors
      addPoly(n,0.62,rot,p.random(0.25,0.45));
      for(let k=0;k<n;k++){const a=rot+p.TWO_PI*(k+.5)/n;circs.push({...P(Math.cos(a)*0.3,Math.sin(a)*0.3),r:S*0.07});}
      circs.push({...P(0,0),r:S*0.09});
    }else if(layout===1){ // pinwheel blades
      for(let k=0;k<n;k++){const a=rot+p.TWO_PI*k/n,b=a+0.55;
        addSeg(P(Math.cos(a)*0.22,Math.sin(a)*0.22),P(Math.cos(b)*0.72,Math.sin(b)*0.72));}
      circs.push({...P(0,0),r:S*0.08});
    }else{ // nested polygons, counter-rotated
      addPoly(n,0.78,rot,0.3);addPoly(n,0.48,rot+p.PI/n,0.35);
      const sx=W/S/2-0.25;[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([a,b])=>{if(sx>0.85)circs.push({...P(a*sx,b*0.62),r:S*0.1});});
      circs.push({...P(0,0),r:S*0.06});
    }}
  function hit(o,d){let best=Infinity,nrm=null;
    for(const[a,b]of segs){const ex=b.x-a.x,ey=b.y-a.y,den=d.x*ey-d.y*ex;if(Math.abs(den)<1e-9)continue;
      const t=((a.x-o.x)*ey-(a.y-o.y)*ex)/den,u=((a.x-o.x)*d.y-(a.y-o.y)*d.x)/den;
      if(t>1e-3&&u>=0&&u<=1&&t<best){best=t;const L=Math.hypot(ex,ey);nrm={x:-ey/L,y:ex/L};}}
    for(const c of circs){const fx=o.x-c.x,fy=o.y-c.y,B=fx*d.x+fy*d.y,C=fx*fx+fy*fy-c.r*c.r,D=B*B-C;if(D<0||C<=0)continue;
      const sq=Math.sqrt(D);for(const t of[-B-sq])if(t>1e-3&&t<best){best=t;const hx=o.x+d.x*t,hy=o.y+d.y*t;nrm={x:(hx-c.x)/c.r,y:(hy-c.y)/c.r};break;}}
    return nrm?{t:best,n:nrm}:null;}
  function trace(){path=[];lens=[];total=0;
    let o={x:9,y:9},a=p.random(0.18,1.39),d={x:Math.cos(a),y:Math.sin(a)};path.push(o);
    for(let i=0;i<320;i++){const h=hit(o,d);if(!h)break;
      const q={x:o.x+d.x*h.t,y:o.y+d.y*h.t},nl=Math.hypot(h.n.x,h.n.y),nx=h.n.x/nl,ny=h.n.y/nl,dn=d.x*nx+d.y*ny;
      d={x:d.x-2*dn*nx,y:d.y-2*dn*ny};const dl=Math.hypot(d.x,d.y);d={x:d.x/dl,y:d.y/dl};
      if(q.x<0||q.y<0||q.x>W||q.y>H)break;
      lens.push(h.t);total+=h.t;path.push(q);o=q;}}
  p.reseed=()=>{[W,H]=dims();if(p.width!==W||p.height!==H)p.resizeCanvas(W,H);
    layout=(layout+1+Math.floor(p.random(2)))%3;build();trace();
    if(buf)buf.remove();buf=p.createGraphics(W,H);buf.pixelDensity(2);buf.background(BG);buf.strokeCap(p.SQUARE);
    drawn=reduce?total:0;p.loop();};
  p.setup=()=>{[W,H]=dims();p.createCanvas(W,H);p.pixelDensity(2);layout=Math.floor(p.random(3));p.reseed();};
  p.windowResized=()=>{const [w,h]=dims();if(w!==W||h!==H)p.reseed();};
  function strokeTo(from,to){ // draw path between arc-lengths from..to onto the buffer
    let acc=0;for(let i=0;i<lens.length;i++){const L=lens[i],s0=acc,s1=acc+L;acc=s1;
      if(s1<from||s0>to)continue;const a=path[i],b=path[i+1];
      const u0=Math.max(0,(from-s0)/L),u1=Math.min(1,(to-s0)/L);
      const x0=a.x+(b.x-a.x)*u0,y0=a.y+(b.y-a.y)*u0,x1=a.x+(b.x-a.x)*u1,y1=a.y+(b.y-a.y)*u1;
      const k=i/6,c=p.lerpColor(p.color(LIGHT[Math.floor(k)%6]),p.color(LIGHT[(Math.floor(k)+1)%6]),k%1);
      c.setAlpha(150);buf.stroke(c);buf.strokeWeight(1.2);buf.line(x0,y0,x1,y1);}}
  p.draw=()=>{const step=Math.max(total/3600,S*0.006);const prev=drawn;
    if(!reduce)drawn=Math.min(total,drawn+step);
    strokeTo(reduce?0:prev,drawn);
    p.image(buf,0,0);
    // mirrors
    p.stroke(63,63,70,200);p.strokeWeight(2);p.strokeCap(p.ROUND);
    for(const[a,b]of segs.slice(4))p.line(a.x,a.y,b.x,b.y);
    p.noFill();for(const c of circs)p.circle(c.x,c.y,c.r*2);
    p.noFill();p.stroke(63,63,70,60);p.strokeWeight(1);p.rect(6,6,W-12,H-12);
    // the photon
    if(drawn<total){let acc=0,hx=path[0].x,hy=path[0].y;
      for(let i=0;i<lens.length;i++){if(acc+lens[i]>=drawn){const u=(drawn-acc)/lens[i];hx=path[i].x+(path[i+1].x-path[i].x)*u;hy=path[i].y+(path[i+1].y-path[i].y)*u;break;}acc+=lens[i];}
      p.noStroke();p.fill(24,24,27,40);p.circle(hx,hy,14);p.fill(24,24,27);p.circle(hx,hy,5);}
    else p.noLoop();};
};

/* 1. Rangoli */
SKETCHES.rangoli=(p,el)=>{
  let rings=[],shown=0,t;
  p.reseed=()=>{t=tok();p.randomSeed(Date.now());rings=[];
    const n=p.random([8,10,12]);let r=0.06;
    while(r<0.47){const w=p.random(0.04,0.09);rings.push({n:p.random()<.5?n:n*2,r0:r,r1:Math.min(r+w,0.48),
      col:p.random(t.pal),kind:p.floor(p.random(3)),off:p.random()<.5?0:0.5});r+=w+p.random(0.005,0.02);}
    shown=reduce?rings.length:0;p.loop();};
  p.setup=()=>{p.createCanvas(size(el),size(el));p.pixelDensity(2);p.reseed();};
  p.windowResized=()=>{p.resizeCanvas(size(el),size(el));};
  p.draw=()=>{const S=p.width;p.background(t.bg);p.translate(S/2,S/2);
    if(shown<rings.length)shown+=0.04;
    rings.forEach((g,i)=>{const a=Math.min(1,shown-i);if(a<=0)return;
      const r0=g.r0*S,r1=r0+(g.r1*S-r0)*a;
      for(let k=0;k<g.n;k++){p.push();p.rotate(p.TWO_PI*(k+g.off)/g.n);
        p.fill(g.col);p.stroke(t.ink);p.strokeWeight(1);
        const hw=Math.sin(p.PI/g.n)*r1*0.9;
        if(g.kind===0){p.beginShape();p.vertex(0,r0);p.bezierVertex(hw,r0,hw*.8,r1*.85,0,r1);p.bezierVertex(-hw*.8,r1*.85,-hw,r0,0,r0);p.endShape();}
        else if(g.kind===1){p.circle(0,(r0+r1)/2,Math.min(r1-r0,hw*1.6));}
        else{p.triangle(-hw*.7,r0,hw*.7,r0,0,r1);}
        p.pop();}
      p.noFill();p.stroke(t.ink);p.strokeWeight(.6);p.circle(0,0,r0*2);});
    p.noStroke();p.fill(t.pal[3]);p.circle(0,0,S*0.07);p.fill(t.ink);p.circle(0,0,S*0.015);
    if(shown>=rings.length)p.noLoop();};
};

/* 3. Cube Field */
SKETCHES.cubes=(p,el)=>{
  // A landscape of isometric columns. Heights come from Perlin noise that
  // drifts across the grid, so rolling waves travel through the terrain.
  // Color follows height: valleys teal, middle ground green-gold, peaks saffron.
  const N=12,MAXH=5,RAMP=['#2a7f8f','#2a9d8f','#8fb36a','#f0b33c','#f39a2b'];
  let t,z=0,ox=0,oy=0;
  p.reseed=()=>{t=tok();p.noiseSeed(Math.floor(p.random(1e6)));ox=p.random(100);oy=p.random(100);if(reduce)p.redraw();};
  p.setup=()=>{p.createCanvas(size(el),size(el));p.pixelDensity(2);p.reseed();if(reduce)p.noLoop();};
  p.windowResized=()=>{p.resizeCanvas(size(el),size(el));if(reduce)p.redraw();};
  const ramp=v=>{const x=Math.max(0,Math.min(0.999,v))*(RAMP.length-1),i=Math.floor(x);
    return p.lerpColor(p.color(RAMP[i]),p.color(RAMP[i+1]),x-i);};
  p.draw=()=>{const S=p.width,s=S/(N*2.15),ink=p.color(t.ink);p.background(t.bg);
    if(!reduce)z+=0.0035;
    p.strokeJoin(p.ROUND);
    for(let gy=0;gy<N;gy++)for(let gx=0;gx<N;gx++){
      // sampling point slides diagonally over time, so the waves roll toward the viewer
      const v=p.noise(ox+gx*0.17-z,oy+gy*0.17-z*0.6,z*0.35);
      const e=Math.max(0,Math.min(1,(v-0.25)/0.5)); // spread noise over the full range
      const h=(0.35+e*MAXH)*s;
      const x=S/2+(gx-gy)*s,y=S*0.31+(gx+gy)*s/2-h, top=ramp(e); // columns rise from a fixed ground
      const left=p.lerpColor(top,ink,0.2),right=p.lerpColor(top,ink,0.38);
      p.stroke(p.lerpColor(top,ink,0.55));p.strokeWeight(0.7);
      p.fill(left);p.quad(x-s,y,x,y+s/2,x,y+s/2+h,x-s,y+h);
      p.fill(right);p.quad(x+s,y,x,y+s/2,x,y+s/2+h,x+s,y+h);
      p.fill(top);p.quad(x,y-s/2,x+s,y,x,y+s/2,x-s,y);
      // faint courses on the sides keep the stacked-block feel
      p.stroke(p.lerpColor(top,ink,0.45));p.strokeWeight(0.4);
      for(let k=1;k<h/s;k++){const yy=k*s;p.line(x-s,y+yy,x,y+s/2+yy);p.line(x,y+s/2+yy,x+s,y+yy);}
    }
  };
};

/* 4. Truchet Weave */
SKETCHES.truchet=(p,el)=>{
  let t,g=[],N=10;
  p.reseed=()=>{t=tok();N=p.random([8,10,12]);g=[];
    for(let i=0;i<N*N;i++){const o=p.random()<.5?0:1;g.push({o,a:o,c:p.random(t.pal)});}
    if(reduce)p.redraw();};
  p.setup=()=>{p.createCanvas(size(el),size(el));p.pixelDensity(2);p.reseed();if(reduce)p.noLoop();};
  p.windowResized=()=>{p.resizeCanvas(size(el),size(el));};
  p.draw=()=>{const S=p.width,w=S/N;p.background(t.bg);
    if(!reduce&&p.frameCount%20===0){const c=g[Math.floor(p.random(g.length))];c.o=1-c.o;}
    p.noFill();p.strokeCap(p.SQUARE);
    g.forEach((c,i)=>{c.a+=(c.o-c.a)*0.12;
      const x=(i%N)*w+w/2,y=Math.floor(i/N)*w+w/2;
      p.push();p.translate(x,y);p.rotate(c.a*p.HALF_PI);
      p.stroke(c.c);p.strokeWeight(w*0.28);
      p.arc(-w/2,-w/2,w,w,0,p.HALF_PI);p.arc(w/2,w/2,w,w,p.PI,p.PI+p.HALF_PI);
      p.stroke(t.ink);p.strokeWeight(0.7);
      for(const r of[w*0.72,w*1.28]){p.arc(-w/2,-w/2,r,r,0,p.HALF_PI);p.arc(w/2,w/2,r,r,p.PI,p.PI+p.HALF_PI);}
      p.pop();});
  };
};


window.ArtSketches={mount:(el,key)=>new p5(p=>SKETCHES[key](p,el),el)};
})();
