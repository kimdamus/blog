import{S as fa,i as ha,s as va,D as Hs,x as _a,y as ya,z as da,A as ma,B as aa,r as Ea,p as Ca,C as Sa,N as ta,e as c,t,k as f,c as o,a as l,h as p,d as s,m as h,b as r,g as u,H as a,n as Ha}from"../../chunks/index-40d1c8d0.js";import{L as ba}from"../../chunks/LayoutDefault-8f32cd80.js";import"../../chunks/conf-cbd2bb0f.js";import"../../chunks/preload-helper-e4860ae8.js";function La(G){let i,C,_,O,k,y,S,I,Rn,fn,U,Tn,hn,P,ea=`<code class="language-css"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-color-scheme</span><span class="token punctuation">:</span> dark<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">&#125;</span></code>`,vn,F,Mn,_n,A,J,Nn,yn,b,jn,x,qn,zn,dn,$,ca=`<code class="language-css"><span class="token selector">:root</span> <span class="token punctuation">&#123;</span>
  <span class="token property">--c-primary-hue</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">--c-secondary-hue</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-primary-hue<span class="token punctuation">)</span> + 120<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-tertiary-hue</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-primary-hue<span class="token punctuation">)</span> + 240<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-accent</span><span class="token punctuation">:</span> <span class="token function">lch</span><span class="token punctuation">(</span>50% 50 <span class="token function">var</span><span class="token punctuation">(</span>--c-secondary-hue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-accent-bg0</span><span class="token punctuation">:</span> <span class="token function">lch</span><span class="token punctuation">(</span>90% 20 <span class="token function">var</span><span class="token punctuation">(</span>--c-tertiary-hue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-accent-bg1</span><span class="token punctuation">:</span> <span class="token function">lch</span><span class="token punctuation">(</span>90% 20 <span class="token function">var</span><span class="token punctuation">(</span>--c-tertiary-hue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-fg</span><span class="token punctuation">:</span> <span class="token function">lch</span><span class="token punctuation">(</span>40% 10 <span class="token function">var</span><span class="token punctuation">(</span>--c-primary-hue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-bg</span><span class="token punctuation">:</span> <span class="token function">lch</span><span class="token punctuation">(</span>98% 5 <span class="token function">var</span><span class="token punctuation">(</span>--c-primary-hue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,mn,w,X,Bn,Gn,En,R,oa=`<code class="language-css"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-color-scheme</span><span class="token punctuation">:</span> dark<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">:root</span> <span class="token punctuation">&#123;</span>
    <span class="token property">--c-accent</span><span class="token punctuation">:</span> <span class="token function">lch</span><span class="token punctuation">(</span>50% 50 <span class="token function">var</span><span class="token punctuation">(</span>--c-secondary-hue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--c-accent-bg0</span><span class="token punctuation">:</span> <span class="token function">lch</span><span class="token punctuation">(</span>10% 20 <span class="token function">var</span><span class="token punctuation">(</span>--c-tertiary-hue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--c-accent-bg1</span><span class="token punctuation">:</span> <span class="token function">lch</span><span class="token punctuation">(</span>20% 20 <span class="token function">var</span><span class="token punctuation">(</span>--c-tertiary-hue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--c-fg</span><span class="token punctuation">:</span> <span class="token function">lch</span><span class="token punctuation">(</span>60% 10 <span class="token function">var</span><span class="token punctuation">(</span>--c-primary-hue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--c-bg</span><span class="token punctuation">:</span> <span class="token function">lch</span><span class="token punctuation">(</span>2% 5 <span class="token function">var</span><span class="token punctuation">(</span>--c-primary-hue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Cn,d,In,Y,Un,Fn,Z,Jn,Kn,g,Qn,Vn,Sn,T,K,Wn,Hn,v,nn,Xn,Yn,sn,Zn,gn,an,ns,ss,tn,as,ts,pn,ps,es,bn,m,en,cs,os,cn,ls,us,on,is,rs,Ln,M,la=`<code class="language-css"><span class="token atrule"><span class="token rule">@supports</span> <span class="token keyword">not</span> <span class="token punctuation">(</span><span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">lch</span><span class="token punctuation">(</span>0% 0 0 / 0.5<span class="token punctuation">)</span><span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token comment">/* LCH\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBE0C\uB77C\uC6B0\uC800\uC758 \uC0C9\uC0C1 \uD314\uB808\uD2B8 */</span>
  <span class="token selector">:root</span> <span class="token punctuation">&#123;</span>
    <span class="token property">--c-accent</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-secondary-hue<span class="token punctuation">)</span> 60% 40% / 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--c-accent-bg0</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-tertiary-hue<span class="token punctuation">)</span> 40% 80%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--c-accent-bg1</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-tertiary-hue<span class="token punctuation">)</span> 40% 70%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--c-fg</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-primary-hue<span class="token punctuation">)</span> 5% 35% / 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--c-bg</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-primary-hue<span class="token punctuation">)</span> 10% 95% / 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-color-scheme</span><span class="token punctuation">:</span> dark<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
    <span class="token comment">/* LCH\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBE0C\uB77C\uC6B0\uC800\uC758 \uB2E4\uD06C\uBAA8\uB4DC \uC0C9\uC0C1 \uD314\uB808\uD2B8 */</span>
    <span class="token selector">:root</span> <span class="token punctuation">&#123;</span>
      <span class="token property">--c-accent</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-secondary-hue<span class="token punctuation">)</span> 30% 60% / 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">--c-accent-bg0</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-tertiary-hue<span class="token punctuation">)</span> 80% 15%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">--c-accent-bg1</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-tertiary-hue<span class="token punctuation">)</span> 80% 20%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">--c-fg</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-primary-hue<span class="token punctuation">)</span> 10% 70% / 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">--c-bg</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-primary-hue<span class="token punctuation">)</span> 10% 5% / 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Dn,H,ln,ks,fs,un,hs,vs,On,N,Q,_s,Pn,L,ys,j,ds,ms,An,q,V,Es,xn,W,rn,z,Cs;return{c(){i=c("p"),C=t(`CSS \uBCC0\uC218\uC640 LCH \uBC0F HSL \uC0C9\uACF5\uAC04\uC744 \uC774\uC6A9\uD574\uC11C \uB2E4\uD06C\uBAA8\uB4DC\uB97C \uC27D\uAC8C \uC9C0\uC6D0\uD558\uB294 \uBC29\uBC95\uC744 \uC815\uB9AC\uD588\uC2B5\uB2C8\uB2E4.
`),_=c("a"),O=t("\uB3D9\uC801 \uCEEC\uB7EC \uD314\uB808\uD2B8"),k=t("\uC5D0\uC11C \uC774\uC5B4\uC9C0\uB294 \uB0B4\uC6A9\uC785\uB2C8\uB2E4."),y=f(),S=c("h2"),I=c("a"),Rn=t("\uBBF8\uB514\uC5B4\uCFFC\uB9AC"),fn=f(),U=c("p"),Tn=t("\uC0AC\uC6A9\uC790\uAC00 \uB2E4\uD06C\uBAA8\uB4DC\uB97C \uC120\uD638\uD558\uB294\uC9C0 \uC5EC\uBD80\uB97C \uC54C\uC544\uB0B4\uB294 \uBBF8\uB514\uC5B4\uCFFC\uB9AC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4."),hn=f(),P=c("pre"),vn=f(),F=c("p"),Mn=t("\uC704 \uBBF8\uB514\uC5B4\uCFFC\uB9AC \uBE14\uB7ED \uC548\uC5D0 \uB2E4\uD06C\uBAA8\uB4DC\uC5D0\uC11C \uC0AC\uC6A9\uD560 CSS\uB97C \uC801\uC5B4\uC8FC\uBA74 \uB2E4\uD06C\uBAA8\uB4DC\uB97C \uC27D\uAC8C \uC9C0\uC6D0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),_n=f(),A=c("h2"),J=c("a"),Nn=t("\uBCC0\uC218 \uC7AC\uC815\uC758"),yn=f(),b=c("p"),jn=t("\uC774 \uBE14\uB85C\uADF8\uB294 "),x=c("a"),qn=t("\uB3D9\uC801 \uCEEC\uB7EC \uD314\uB808\uD2B8"),zn=t(`\uC5D0\uC11C \uC124\uBA85\uD55C\uB300\uB85C CSS \uBCC0\uC218\uB97C
\uD65C\uC6A9\uD558\uC5EC \uC0C9\uC0C1 \uD314\uB808\uD2B8\uB97C \uC815\uC758\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.`),dn=f(),$=c("pre"),mn=f(),w=c("p"),X=c("code"),Bn=t("--c-primary-hue"),Gn=t(` \uBCC0\uC218\uB85C \uC0C9\uC870hue\uB9CC \uC815\uD574\uC8FC\uBA74 \uB098\uBA38\uC9C0 \uC0C9\uC0C1\uB4E4\uC774 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB429\uB2C8\uB2E4. \uD2B9\uD788
\uAE30\uBCF8 \uC0C9\uC870\uC640 \uC5B4\uC6B8\uB9AC\uB294 \uB2E4\uB978 \uC0C9\uC870\uB4E4\uC744 \uC5BB\uC5B4\uB0B4\uACE0, \uBA85\uB3C4\uC640 \uCC44\uB3C4\uB97C \uBC14\uAFD4\uC8FC\uAE30 \uC704\uD574\uC11C LCH \uC0C9\uACF5\uAC04\uC744 \uC4F0\uACE0
\uC788\uAE30 \uB54C\uBB38\uC5D0 \uB2E4\uD06C\uBAA8\uB4DC\uB97C \uC27D\uAC8C \uC9C0\uC6D0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0C9\uC870\uB294 \uC720\uC9C0\uD558\uBA74\uC11C \uAE00\uC790\uC0C9\uC758 \uBA85\uB3C4\uC640 \uBC30\uACBD\uC0C9\uC758
\uBA85\uB3C4\uB97C \uC5ED\uC804\uC2DC\uD0A4\uBA74 \uB418\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`),En=f(),R=c("pre"),Cn=f(),d=c("p"),In=t("\uC0C9\uC870\uB97C \uC815\uC758\uD558\uB294 \uBCC0\uC218\uB4E4("),Y=c("code"),Un=t("--c-primary-hue"),Fn=t(", "),Z=c("code"),Jn=t("--c-secondary-hue"),Kn=t(", "),g=c("code"),Qn=t("--c-tertiary-hue"),Vn=t(`)\uC740
\uADF8\uB300\uB85C \uB450\uACE0, \uC0C9\uC870\uB85C\uBD80\uD130 \uBA85\uB3C4\uC640 \uCC44\uB3C4\uB97C \uC870\uC808\uD558\uC5EC \uC2E4\uC81C \uC0C9\uC0C1\uC744 \uB9CC\uB4E4\uC5B4\uB0B4\uB294 \uBCC0\uC218\uB4E4\uB9CC \uC0C8\uB85C \uC815\uC758\uB97C
\uD588\uC2B5\uB2C8\uB2E4. \uBA85\uB3C4(L), \uBC1D\uAE30(C), \uC0C9\uC870(H) \uC911 \uBA85\uB3C4\uB9CC \uB4A4\uC9D1\uC5C8\uC2B5\uB2C8\uB2E4.`),Sn=f(),T=c("h2"),K=c("a"),Wn=t("LCH\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uB300\uD55C \uCC98\uB9AC"),Hn=f(),v=c("p"),nn=c("code"),Xn=t("lab()"),Yn=t(" \uC774\uB098 "),sn=c("code"),Zn=t("lch()"),gn=t(`\uB294 2022\uB144 4\uC6D4 \uAE30\uC900\uC73C\uB85C \uC544\uC9C1\uC740 \uC0AC\uD30C\uB9AC\uC5D0\uC11C\uB9CC \uC9C0\uC6D0\uC744 \uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C
`),an=c("code"),ns=t("@support"),ss=t(" \uBBF8\uB514\uC5B4\uCFFC\uB9AC\uB97C \uC774\uC6A9\uD574\uC11C "),tn=c("code"),as=t("lch()"),ts=t("\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uB300\uC548\uC73C\uB85C "),pn=c("code"),ps=t("hsl()"),es=t(`\uC744
\uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.`),bn=f(),m=c("p"),en=c("code"),cs=t("@support"),os=t("\uC640 "),cn=c("code"),ls=t("@media"),us=t("\uB97C \uC911\uCCA9\uD574\uC11C \uC4F0\uBA74 "),on=c("strong"),is=t("lch\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uACE0 \uB2E4\uD06C\uBAA8\uB4DC\uB97C \uC120\uD638\uD558\uB294 \uACBD\uC6B0"),rs=t(`\uC5D0
\uB300\uD55C CSS\uB97C \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`),Ln=f(),M=c("pre"),Dn=f(),H=c("p"),ln=c("code"),ks=t("lch()"),fs=t("\uC640 \uB2EC\uB9AC "),un=c("code"),hs=t("hsl()"),vs=t(`\uC740 \uAE30\uACC4\uC801\uC73C\uB85C \uBA85\uB3C4\uB9CC \uB4A4\uC9D1\uC5C8\uC744 \uB54C \uC608\uC05C \uC0C9\uC870\uD569\uC774 \uB098\uC624\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0
\uB208\uC73C\uB85C \uBCF4\uBA74\uC11C \uC218\uCE58\uB4E4\uC744 \uBBF8\uC138\uD558\uAC8C \uC870\uC815\uD588\uC2B5\uB2C8\uB2E4.`),On=f(),N=c("h2"),Q=c("a"),_s=t("\uB9C8\uCE58\uBA70"),Pn=f(),L=c("p"),ys=t(`\uC774 \uAE00\uC5D0\uC11C \uC124\uBA85\uD55C \uCF54\uB4DC\uB294 \uC774 \uBE14\uB85C\uADF8\uC5D0\uB3C4 \uC801\uC6A9\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.
`),j=c("a"),ds=t("\uC18C\uC2A4 \uCF54\uB4DC"),ms=t("\uAC00 \uACF5\uAC1C\uB418\uC5B4 \uC788\uC73C\uB2C8 \uCC38\uACE0\uD574\uC8FC\uC138\uC694."),An=f(),q=c("h2"),V=c("a"),Es=t("\uAD00\uB828 \uAE00"),xn=f(),W=c("ul"),rn=c("li"),z=c("a"),Cs=t("\uC2A4\uBCA8\uD2B8\uD0B7\uC73C\uB85C \uBE14\uB85C\uADF8 \uB9CC\uB4E4\uAE30"),this.h()},l(n){i=o(n,"P",{});var e=l(i);C=p(e,`CSS \uBCC0\uC218\uC640 LCH \uBC0F HSL \uC0C9\uACF5\uAC04\uC744 \uC774\uC6A9\uD574\uC11C \uB2E4\uD06C\uBAA8\uB4DC\uB97C \uC27D\uAC8C \uC9C0\uC6D0\uD558\uB294 \uBC29\uBC95\uC744 \uC815\uB9AC\uD588\uC2B5\uB2C8\uB2E4.
`),_=o(e,"A",{href:!0,"sveltekit:prefetch":!0});var bs=l(_);O=p(bs,"\uB3D9\uC801 \uCEEC\uB7EC \uD314\uB808\uD2B8"),bs.forEach(s),k=p(e,"\uC5D0\uC11C \uC774\uC5B4\uC9C0\uB294 \uB0B4\uC6A9\uC785\uB2C8\uB2E4."),e.forEach(s),y=h(n),S=o(n,"H2",{id:!0});var Ls=l(S);I=o(Ls,"A",{href:!0});var Ds=l(I);Rn=p(Ds,"\uBBF8\uB514\uC5B4\uCFFC\uB9AC"),Ds.forEach(s),Ls.forEach(s),fn=h(n),U=o(n,"P",{});var Os=l(U);Tn=p(Os,"\uC0AC\uC6A9\uC790\uAC00 \uB2E4\uD06C\uBAA8\uB4DC\uB97C \uC120\uD638\uD558\uB294\uC9C0 \uC5EC\uBD80\uB97C \uC54C\uC544\uB0B4\uB294 \uBBF8\uB514\uC5B4\uCFFC\uB9AC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4."),Os.forEach(s),hn=h(n),P=o(n,"PRE",{class:!0});var ua=l(P);ua.forEach(s),vn=h(n),F=o(n,"P",{});var Ps=l(F);Mn=p(Ps,"\uC704 \uBBF8\uB514\uC5B4\uCFFC\uB9AC \uBE14\uB7ED \uC548\uC5D0 \uB2E4\uD06C\uBAA8\uB4DC\uC5D0\uC11C \uC0AC\uC6A9\uD560 CSS\uB97C \uC801\uC5B4\uC8FC\uBA74 \uB2E4\uD06C\uBAA8\uB4DC\uB97C \uC27D\uAC8C \uC9C0\uC6D0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),Ps.forEach(s),_n=h(n),A=o(n,"H2",{id:!0});var As=l(A);J=o(As,"A",{href:!0});var xs=l(J);Nn=p(xs,"\uBCC0\uC218 \uC7AC\uC815\uC758"),xs.forEach(s),As.forEach(s),yn=h(n),b=o(n,"P",{});var $n=l(b);jn=p($n,"\uC774 \uBE14\uB85C\uADF8\uB294 "),x=o($n,"A",{href:!0,"sveltekit:prefetch":!0});var $s=l(x);qn=p($s,"\uB3D9\uC801 \uCEEC\uB7EC \uD314\uB808\uD2B8"),$s.forEach(s),zn=p($n,`\uC5D0\uC11C \uC124\uBA85\uD55C\uB300\uB85C CSS \uBCC0\uC218\uB97C
\uD65C\uC6A9\uD558\uC5EC \uC0C9\uC0C1 \uD314\uB808\uD2B8\uB97C \uC815\uC758\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.`),$n.forEach(s),dn=h(n),$=o(n,"PRE",{class:!0});var ia=l($);ia.forEach(s),mn=h(n),w=o(n,"P",{});var Ss=l(w);X=o(Ss,"CODE",{});var ws=l(X);Bn=p(ws,"--c-primary-hue"),ws.forEach(s),Gn=p(Ss,` \uBCC0\uC218\uB85C \uC0C9\uC870hue\uB9CC \uC815\uD574\uC8FC\uBA74 \uB098\uBA38\uC9C0 \uC0C9\uC0C1\uB4E4\uC774 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB429\uB2C8\uB2E4. \uD2B9\uD788
\uAE30\uBCF8 \uC0C9\uC870\uC640 \uC5B4\uC6B8\uB9AC\uB294 \uB2E4\uB978 \uC0C9\uC870\uB4E4\uC744 \uC5BB\uC5B4\uB0B4\uACE0, \uBA85\uB3C4\uC640 \uCC44\uB3C4\uB97C \uBC14\uAFD4\uC8FC\uAE30 \uC704\uD574\uC11C LCH \uC0C9\uACF5\uAC04\uC744 \uC4F0\uACE0
\uC788\uAE30 \uB54C\uBB38\uC5D0 \uB2E4\uD06C\uBAA8\uB4DC\uB97C \uC27D\uAC8C \uC9C0\uC6D0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0C9\uC870\uB294 \uC720\uC9C0\uD558\uBA74\uC11C \uAE00\uC790\uC0C9\uC758 \uBA85\uB3C4\uC640 \uBC30\uACBD\uC0C9\uC758
\uBA85\uB3C4\uB97C \uC5ED\uC804\uC2DC\uD0A4\uBA74 \uB418\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`),Ss.forEach(s),En=h(n),R=o(n,"PRE",{class:!0});var ra=l(R);ra.forEach(s),Cn=h(n),d=o(n,"P",{});var D=l(d);In=p(D,"\uC0C9\uC870\uB97C \uC815\uC758\uD558\uB294 \uBCC0\uC218\uB4E4("),Y=o(D,"CODE",{});var Rs=l(Y);Un=p(Rs,"--c-primary-hue"),Rs.forEach(s),Fn=p(D,", "),Z=o(D,"CODE",{});var Ts=l(Z);Jn=p(Ts,"--c-secondary-hue"),Ts.forEach(s),Kn=p(D,", "),g=o(D,"CODE",{});var Ms=l(g);Qn=p(Ms,"--c-tertiary-hue"),Ms.forEach(s),Vn=p(D,`)\uC740
\uADF8\uB300\uB85C \uB450\uACE0, \uC0C9\uC870\uB85C\uBD80\uD130 \uBA85\uB3C4\uC640 \uCC44\uB3C4\uB97C \uC870\uC808\uD558\uC5EC \uC2E4\uC81C \uC0C9\uC0C1\uC744 \uB9CC\uB4E4\uC5B4\uB0B4\uB294 \uBCC0\uC218\uB4E4\uB9CC \uC0C8\uB85C \uC815\uC758\uB97C
\uD588\uC2B5\uB2C8\uB2E4. \uBA85\uB3C4(L), \uBC1D\uAE30(C), \uC0C9\uC870(H) \uC911 \uBA85\uB3C4\uB9CC \uB4A4\uC9D1\uC5C8\uC2B5\uB2C8\uB2E4.`),D.forEach(s),Sn=h(n),T=o(n,"H2",{id:!0});var Ns=l(T);K=o(Ns,"A",{href:!0});var js=l(K);Wn=p(js,"LCH\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uB300\uD55C \uCC98\uB9AC"),js.forEach(s),Ns.forEach(s),Hn=h(n),v=o(n,"P",{});var E=l(v);nn=o(E,"CODE",{});var qs=l(nn);Xn=p(qs,"lab()"),qs.forEach(s),Yn=p(E," \uC774\uB098 "),sn=o(E,"CODE",{});var zs=l(sn);Zn=p(zs,"lch()"),zs.forEach(s),gn=p(E,`\uB294 2022\uB144 4\uC6D4 \uAE30\uC900\uC73C\uB85C \uC544\uC9C1\uC740 \uC0AC\uD30C\uB9AC\uC5D0\uC11C\uB9CC \uC9C0\uC6D0\uC744 \uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C
`),an=o(E,"CODE",{});var Bs=l(an);ns=p(Bs,"@support"),Bs.forEach(s),ss=p(E," \uBBF8\uB514\uC5B4\uCFFC\uB9AC\uB97C \uC774\uC6A9\uD574\uC11C "),tn=o(E,"CODE",{});var Gs=l(tn);as=p(Gs,"lch()"),Gs.forEach(s),ts=p(E,"\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uB300\uC548\uC73C\uB85C "),pn=o(E,"CODE",{});var Is=l(pn);ps=p(Is,"hsl()"),Is.forEach(s),es=p(E,`\uC744
\uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.`),E.forEach(s),bn=h(n),m=o(n,"P",{});var B=l(m);en=o(B,"CODE",{});var Us=l(en);cs=p(Us,"@support"),Us.forEach(s),os=p(B,"\uC640 "),cn=o(B,"CODE",{});var Fs=l(cn);ls=p(Fs,"@media"),Fs.forEach(s),us=p(B,"\uB97C \uC911\uCCA9\uD574\uC11C \uC4F0\uBA74 "),on=o(B,"STRONG",{});var Js=l(on);is=p(Js,"lch\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uACE0 \uB2E4\uD06C\uBAA8\uB4DC\uB97C \uC120\uD638\uD558\uB294 \uACBD\uC6B0"),Js.forEach(s),rs=p(B,`\uC5D0
\uB300\uD55C CSS\uB97C \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`),B.forEach(s),Ln=h(n),M=o(n,"PRE",{class:!0});var ka=l(M);ka.forEach(s),Dn=h(n),H=o(n,"P",{});var kn=l(H);ln=o(kn,"CODE",{});var Ks=l(ln);ks=p(Ks,"lch()"),Ks.forEach(s),fs=p(kn,"\uC640 \uB2EC\uB9AC "),un=o(kn,"CODE",{});var Qs=l(un);hs=p(Qs,"hsl()"),Qs.forEach(s),vs=p(kn,`\uC740 \uAE30\uACC4\uC801\uC73C\uB85C \uBA85\uB3C4\uB9CC \uB4A4\uC9D1\uC5C8\uC744 \uB54C \uC608\uC05C \uC0C9\uC870\uD569\uC774 \uB098\uC624\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0
\uB208\uC73C\uB85C \uBCF4\uBA74\uC11C \uC218\uCE58\uB4E4\uC744 \uBBF8\uC138\uD558\uAC8C \uC870\uC815\uD588\uC2B5\uB2C8\uB2E4.`),kn.forEach(s),On=h(n),N=o(n,"H2",{id:!0});var Vs=l(N);Q=o(Vs,"A",{href:!0});var Ws=l(Q);_s=p(Ws,"\uB9C8\uCE58\uBA70"),Ws.forEach(s),Vs.forEach(s),Pn=h(n),L=o(n,"P",{});var wn=l(L);ys=p(wn,`\uC774 \uAE00\uC5D0\uC11C \uC124\uBA85\uD55C \uCF54\uB4DC\uB294 \uC774 \uBE14\uB85C\uADF8\uC5D0\uB3C4 \uC801\uC6A9\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.
`),j=o(wn,"A",{href:!0,rel:!0});var Xs=l(j);ds=p(Xs,"\uC18C\uC2A4 \uCF54\uB4DC"),Xs.forEach(s),ms=p(wn,"\uAC00 \uACF5\uAC1C\uB418\uC5B4 \uC788\uC73C\uB2C8 \uCC38\uACE0\uD574\uC8FC\uC138\uC694."),wn.forEach(s),An=h(n),q=o(n,"H2",{id:!0});var Ys=l(q);V=o(Ys,"A",{href:!0});var Zs=l(V);Es=p(Zs,"\uAD00\uB828 \uAE00"),Zs.forEach(s),Ys.forEach(s),xn=h(n),W=o(n,"UL",{});var gs=l(W);rn=o(gs,"LI",{});var na=l(rn);z=o(na,"A",{href:!0,"sveltekit:prefetch":!0});var sa=l(z);Cs=p(sa,"\uC2A4\uBCA8\uD2B8\uD0B7\uC73C\uB85C \uBE14\uB85C\uADF8 \uB9CC\uB4E4\uAE30"),sa.forEach(s),na.forEach(s),gs.forEach(s),this.h()},h(){r(_,"href","/posts/dynamic-color-palette"),r(_,"sveltekit:prefetch","sveltekit:prefetch"),r(I,"href","#\uBBF8\uB514\uC5B4\uCFFC\uB9AC"),r(S,"id","\uBBF8\uB514\uC5B4\uCFFC\uB9AC"),r(P,"class","language-css"),r(J,"href","#\uBCC0\uC218-\uC7AC\uC815\uC758"),r(A,"id","\uBCC0\uC218-\uC7AC\uC815\uC758"),r(x,"href","/posts/dynamic-color-palette"),r(x,"sveltekit:prefetch","sveltekit:prefetch"),r($,"class","language-css"),r(R,"class","language-css"),r(K,"href","#lch\uB97C-\uC9C0\uC6D0\uD558\uC9C0-\uC54A\uB294-\uBE0C\uB77C\uC6B0\uC800\uC5D0-\uB300\uD55C-\uCC98\uB9AC"),r(T,"id","lch\uB97C-\uC9C0\uC6D0\uD558\uC9C0-\uC54A\uB294-\uBE0C\uB77C\uC6B0\uC800\uC5D0-\uB300\uD55C-\uCC98\uB9AC"),r(M,"class","language-css"),r(Q,"href","#\uB9C8\uCE58\uBA70"),r(N,"id","\uB9C8\uCE58\uBA70"),r(j,"href","https://github.com/gongbughim/blog"),r(j,"rel","nofollow"),r(V,"href","#\uAD00\uB828-\uAE00"),r(q,"id","\uAD00\uB828-\uAE00"),r(z,"href","/posts/sveltekit-blog"),r(z,"sveltekit:prefetch","sveltekit:prefetch")},m(n,e){u(n,i,e),a(i,C),a(i,_),a(_,O),a(i,k),u(n,y,e),u(n,S,e),a(S,I),a(I,Rn),u(n,fn,e),u(n,U,e),a(U,Tn),u(n,hn,e),u(n,P,e),P.innerHTML=ea,u(n,vn,e),u(n,F,e),a(F,Mn),u(n,_n,e),u(n,A,e),a(A,J),a(J,Nn),u(n,yn,e),u(n,b,e),a(b,jn),a(b,x),a(x,qn),a(b,zn),u(n,dn,e),u(n,$,e),$.innerHTML=ca,u(n,mn,e),u(n,w,e),a(w,X),a(X,Bn),a(w,Gn),u(n,En,e),u(n,R,e),R.innerHTML=oa,u(n,Cn,e),u(n,d,e),a(d,In),a(d,Y),a(Y,Un),a(d,Fn),a(d,Z),a(Z,Jn),a(d,Kn),a(d,g),a(g,Qn),a(d,Vn),u(n,Sn,e),u(n,T,e),a(T,K),a(K,Wn),u(n,Hn,e),u(n,v,e),a(v,nn),a(nn,Xn),a(v,Yn),a(v,sn),a(sn,Zn),a(v,gn),a(v,an),a(an,ns),a(v,ss),a(v,tn),a(tn,as),a(v,ts),a(v,pn),a(pn,ps),a(v,es),u(n,bn,e),u(n,m,e),a(m,en),a(en,cs),a(m,os),a(m,cn),a(cn,ls),a(m,us),a(m,on),a(on,is),a(m,rs),u(n,Ln,e),u(n,M,e),M.innerHTML=la,u(n,Dn,e),u(n,H,e),a(H,ln),a(ln,ks),a(H,fs),a(H,un),a(un,hs),a(H,vs),u(n,On,e),u(n,N,e),a(N,Q),a(Q,_s),u(n,Pn,e),u(n,L,e),a(L,ys),a(L,j),a(j,ds),a(L,ms),u(n,An,e),u(n,q,e),a(q,V),a(V,Es),u(n,xn,e),u(n,W,e),a(W,rn),a(rn,z),a(z,Cs)},p:Ha,d(n){n&&s(i),n&&s(y),n&&s(S),n&&s(fn),n&&s(U),n&&s(hn),n&&s(P),n&&s(vn),n&&s(F),n&&s(_n),n&&s(A),n&&s(yn),n&&s(b),n&&s(dn),n&&s($),n&&s(mn),n&&s(w),n&&s(En),n&&s(R),n&&s(Cn),n&&s(d),n&&s(Sn),n&&s(T),n&&s(Hn),n&&s(v),n&&s(bn),n&&s(m),n&&s(Ln),n&&s(M),n&&s(Dn),n&&s(H),n&&s(On),n&&s(N),n&&s(Pn),n&&s(L),n&&s(An),n&&s(q),n&&s(xn),n&&s(W)}}}function Da(G){let i,C;const _=[G[0],pa];let O={$$slots:{default:[La]},$$scope:{ctx:G}};for(let k=0;k<_.length;k+=1)O=Hs(O,_[k]);return i=new ba({props:O}),{c(){_a(i.$$.fragment)},l(k){ya(i.$$.fragment,k)},m(k,y){da(i,k,y),C=!0},p(k,[y]){const S=y&1?ma(_,[y&1&&aa(k[0]),y&0&&aa(pa)]):{};y&2&&(S.$$scope={dirty:y,ctx:k}),i.$set(S)},i(k){C||(Ea(i.$$.fragment,k),C=!0)},o(k){Ca(i.$$.fragment,k),C=!1},d(k){Sa(i,k)}}}const pa={title:"\uB2E4\uD06C\uBAA8\uB4DC \uC9C0\uC6D0\uD558\uAE30",publishedAt:"2022-04-16",summary:"\uBE14\uB85C\uADF8\uC5D0\uC11C \uB2E4\uD06C\uBAA8\uB4DC\uB97C \uC9C0\uC6D0\uD558\uB3C4\uB85D CSS\uB97C \uC218\uC815\uD558\uB294 \uBC29\uBC95"};function Oa(G,i,C){return G.$$set=_=>{C(0,i=Hs(Hs({},i),ta(_)))},i=ta(i),[i]}class wa extends fa{constructor(i){super();ha(this,i,Oa,Da,va,{})}}export{wa as default,pa as metadata};