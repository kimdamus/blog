import{S as nt,i as pt,s as lt,D as ds,x as ot,y as rt,z as ct,A as ft,B as Ks,r as ut,p as it,C as kt,N as Qs,e as o,t as p,k,c as r,a as c,h as l,d as s,m as v,b as f,g as n,H as t,n as vt}from"../../chunks/index-1c92eaba.js";import{L as _t}from"../../chunks/LayoutDefault-03357c1b.js";import"../../chunks/conf-cbd2bb0f.js";import"../../chunks/preload-helper-e4860ae8.js";function mt(z){let u,h,x,d,i,E,L,B,$e,le,y,Oe,Y,Te,je,oe,b,Ws='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/some-link<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">svelte:</span>prefetch</span><span class="token punctuation">></span></span>Some link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></code>',re,w,Re,C,Se,Ie,ce,M,U,Ne,fe,P,Xe,$,qe,ze,ue,A,Be,Z,Ue,Fe,ie,O,Ys='<code class="language-markdown"><span class="token url">[<span class="token content">Some link</span>](<span class="token url">/some-link</span>)</span></code>',ke,D,Ge,T,Je,Ke,ve,j,F,Qe,_e,G,Ve,me,R,Zs='<code class="language-bash"><span class="token function">npm</span> i -D unist-util-visit</code>',de,J,We,Ee,S,gs=`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> visit <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'unist-util-visit'</span>

<span class="token comment">// ...</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// Attach "sveltekit:prefetch" to internal links</span>
  <span class="token keyword">return</span> <span class="token parameter">tree</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> pInnerLink <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(/|.)</span><span class="token regex-delimiter">/</span></span>
    <span class="token function">visit</span><span class="token punctuation">(</span>tree<span class="token punctuation">,</span> <span class="token string">'element'</span><span class="token punctuation">,</span> <span class="token parameter">node</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>tagName <span class="token operator">!==</span> <span class="token string">'a'</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>href<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>pInnerLink<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
      node<span class="token punctuation">.</span>properties<span class="token punctuation">[</span><span class="token string">'sveltekit:prefetch'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'sveltekit:prefetch'</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,he,_,Ye,g,Ze,ge,ee,es,ss,se,ts,as,te,ns,ps,ae,ls,os,ne,rs,cs,xe,K,fs,ye,I,Q,us,we,H,is,N,ks,vs,Pe,X,V,_s,Ae,W,pe,q,ms;return{c(){u=o("p"),h=p("\uC2A4\uBCA8\uD2B8\uD0B7\uACFC mdsvex \uC870\uD569\uC5D0\uC11C \uD504\uB9AC\uD398\uCE58(sveltekit:prefetch) \uC124\uC815\uD558\uB294 \uBC29\uBC95\uC744 \uC124\uBA85\uD569\uB2C8\uB2E4."),x=k(),d=o("h2"),i=o("a"),E=p("\uD504\uB9AC\uD398\uCE58\uB780"),L=k(),B=o("p"),$e=p(`\uD504\uB9AC\uD398\uCE58prefetch\uB294 \uC0AC\uC6A9\uC790\uAC00 \uB9C1\uD06C \uC704\uC5D0 \uB9C8\uC6B0\uC2A4\uB97C \uC62C\uB9AC\uAC70\uB098 \uBAA8\uBC14\uC77C \uAE30\uAE30\uC5D0\uC11C \uB9C1\uD06C\uB97C \uD130\uCE58\uD558\uB294 \uC21C\uAC04
\uD574\uB2F9 \uD398\uC774\uC9C0\uB97C \uB80C\uB354\uB9C1\uD558\uAE30 \uC704\uD574 \uD544\uC694\uD55C \uB370\uC774\uD130\uB97C \uBBF8\uB9AC \uBC1B\uC544\uC624\uB294 \uAC78 \uB9D0\uD569\uB2C8\uB2E4. \uD504\uB9AC\uD398\uCE58\uB97C \uC124\uC815\uD558\uBA74
\uB9C1\uD06C\uB97C \uD074\uB9AD\uD558\uC790\uB9C8\uC790 \uD398\uC774\uC9C0\uAC00 \uC804\uD658\uB418\uAE30 \uB54C\uBB38\uC5D0 \uC0AC\uC6A9\uC790\uAC00 \uCCB4\uAC10\uD558\uB294 \uD398\uC774\uC9C0 \uB85C\uB529 \uC9C0\uC5F0\uC774 \uAC70\uC758
\uC0AC\uB77C\uC9D1\uB2C8\uB2E4.`),le=k(),y=o("p"),Oe=p("\uC2A4\uBCA8\uD2B8\uD0B7\uC5D0\uC11C\uB294 \uB0B4\uBD80\uB9C1\uD06C\uC5D0 \uB300\uD574 "),Y=o("code"),Te=p("sveltekit:prefetch"),je=p(` \uC18D\uC131\uC744 \uB123\uC5B4\uC8FC\uBA74 \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uD504\uB9AC\uD398\uCE58\uAC00
\uC791\uB3D9\uD558\uAC8C \uB429\uB2C8\uB2E4.`),oe=k(),b=o("pre"),re=k(),w=o("p"),Re=p(`\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC2A4\uBCA8\uD2B8\uD0B7 \uACF5\uC2DD \uBB38\uC11C\uC758
`),C=o("a"),Se=p("\uD574\uB2F9 \uC139\uC158"),Ie=p("\uC744 \uCC38\uACE0\uD558\uC138\uC694."),ce=k(),M=o("h2"),U=o("a"),Ne=p("mdsvex \uD328\uD0A4\uC9C0"),fe=k(),P=o("p"),Xe=p("\uC2A4\uBCA8\uD2B8\uD0B7\uC5D0\uC11C MDX\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 \uBCF4\uD1B5 "),$=o("a"),qe=p("mdsvex \uD328\uD0A4\uC9C0"),ze=p("\uB97C \uC501\uB2C8\uB2E4."),ue=k(),A=o("p"),Be=p("\uD558\uC9C0\uB9CC mdsvex \uD328\uD0A4\uC9C0\uB85C \uB80C\uB354\uB9C1\uB41C \uD398\uC774\uC9C0\uC758 \uACBD\uC6B0 \uB9C1\uD06C\uC5D0 "),Z=o("code"),Ue=p("svelte:prefetch"),Fe=p(`\uAC00 \uC124\uC815\uB418\uC9C0 \uC54A\uB294\uB2E4\uB294
\uB2E8\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4.`),ie=k(),O=o("pre"),ke=k(),D=o("p"),Ge=p("\uB2E4\uD589\uD788 mdsvex\uB294 \uB0B4\uBD80\uC5D0\uC11C "),T=o("a"),Je=p("rehype \uD328\uD0A4\uC9C0"),Ke=p(`\uB97C
\uC0AC\uC6A9\uD558\uAE30 \uB54C\uBB38\uC5D0 rehype \uD50C\uB7EC\uADF8\uC778\uC744 \uC791\uC131\uD558\uBA74 \uB80C\uB354\uB9C1 \uACB0\uACFC\uB97C \uC6D0\uD558\uB294\uB300\uB85C \uBC14\uAFC0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`),ve=k(),j=o("h2"),F=o("a"),Qe=p("\uD50C\uB7EC\uADF8\uC778 \uB9CC\uB4E4\uAE30"),_e=k(),G=o("p"),Ve=p("\uD50C\uB7EC\uADF8\uC778 \uC81C\uC791\uC744 \uC704\uD574 \uD544\uC694\uD55C \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4."),me=k(),R=o("pre"),de=k(),J=o("p"),We=p("\uADF8 \uB2E4\uC74C, mdsvex \uC124\uC815\uC758 rehypePlugins \uBCC0\uC218\uC5D0 \uD50C\uB7EC\uADF8\uC778\uC744 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4."),Ee=k(),S=o("pre"),he=k(),_=o("p"),Ye=p("\uB9C8\uD06C\uB2E4\uC6B4\uC5D0\uC11C \uB80C\uB354\uB9C1\uB41C HTML\uC758 \uBAA8\uB4E0 \uC5D8\uB9AC\uBA3C\uD2B8 \uB178\uB4DC\uB97C \uBC29\uBB38("),g=o("code"),Ze=p("visit()"),ge=p(")\uD558\uBA70 \uD0DC\uADF8 \uC774\uB984\uC774 "),ee=o("code"),es=p("a"),ss=p(`\uC774\uBA74\uC11C
`),se=o("code"),ts=p("href"),as=p("\uC5D0 \uC801\uD78C \uC8FC\uC18C\uAC00 \uBE14\uB85C\uADF8 \uB0B4\uBD80 \uB9C1\uD06C\uC778 \uACBD\uC6B0 "),te=o("code"),ns=p("sveltekit:prefetch"),ps=p(` \uC18D\uC131\uC744 \uCD94\uAC00\uD558\uB3C4\uB85D
\uD588\uC2B5\uB2C8\uB2E4. \uB0B4\uBD80 \uB9C1\uD06C\uC778\uC9C0 \uD655\uC778\uD558\uB294 \uD328\uD134\uC774 \uC57D\uAC04 \uC5B4\uC124\uD504\uC9C0\uB9CC(\uC8FC\uC18C\uAC00 `),ae=o("code"),ls=p("/"),os=p("\uC73C\uB85C \uC2DC\uC791\uD558\uAC70\uB098 "),ne=o("code"),rs=p("."),cs=p(`\uC73C\uB85C
\uC2DC\uC791\uD558\uB294\uC9C0\uB9CC \uAC80\uC0AC), \uB2F9\uC7A5 \uC801\uC6A9\uD558\uAE30\uC5D0\uB294 \uD070 \uBB38\uC81C\uAC00 \uC5C6\uC5B4 \uBCF4\uC785\uB2C8\uB2E4.`),xe=k(),K=o("p"),fs=p("\uC774\uC81C \uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC758 \uB9C1\uD06C\uC5D0\uB3C4 \uD504\uB9AC\uD398\uCE58\uAC00 \uC801\uC6A9\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),ye=k(),I=o("h2"),Q=o("a"),us=p("\uB9C8\uCE58\uBA70"),we=k(),H=o("p"),is=p(`\uC774 \uAE00\uC5D0\uC11C \uC124\uBA85\uD55C \uCF54\uB4DC\uB294 \uC774 \uBE14\uB85C\uADF8\uC5D0\uB3C4 \uC801\uC6A9\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.
`),N=o("a"),ks=p("\uC18C\uC2A4 \uCF54\uB4DC"),vs=p("\uAC00 \uACF5\uAC1C\uB418\uC5B4 \uC788\uC73C\uB2C8 \uCC38\uACE0\uD574\uC8FC\uC138\uC694."),Pe=k(),X=o("h2"),V=o("a"),_s=p("\uAD00\uB828 \uAE00"),Ae=k(),W=o("ul"),pe=o("li"),q=o("a"),ms=p("\uC2A4\uBCA8\uD2B8\uD0B7\uC73C\uB85C \uBE14\uB85C\uADF8 \uB9CC\uB4E4\uAE30"),this.h()},l(e){u=r(e,"P",{});var a=c(u);h=l(a,"\uC2A4\uBCA8\uD2B8\uD0B7\uACFC mdsvex \uC870\uD569\uC5D0\uC11C \uD504\uB9AC\uD398\uCE58(sveltekit:prefetch) \uC124\uC815\uD558\uB294 \uBC29\uBC95\uC744 \uC124\uBA85\uD569\uB2C8\uB2E4."),a.forEach(s),x=v(e),d=r(e,"H2",{id:!0});var Es=c(d);i=r(Es,"A",{href:!0});var hs=c(i);E=l(hs,"\uD504\uB9AC\uD398\uCE58\uB780"),hs.forEach(s),Es.forEach(s),L=v(e),B=r(e,"P",{});var xs=c(B);$e=l(xs,`\uD504\uB9AC\uD398\uCE58prefetch\uB294 \uC0AC\uC6A9\uC790\uAC00 \uB9C1\uD06C \uC704\uC5D0 \uB9C8\uC6B0\uC2A4\uB97C \uC62C\uB9AC\uAC70\uB098 \uBAA8\uBC14\uC77C \uAE30\uAE30\uC5D0\uC11C \uB9C1\uD06C\uB97C \uD130\uCE58\uD558\uB294 \uC21C\uAC04
\uD574\uB2F9 \uD398\uC774\uC9C0\uB97C \uB80C\uB354\uB9C1\uD558\uAE30 \uC704\uD574 \uD544\uC694\uD55C \uB370\uC774\uD130\uB97C \uBBF8\uB9AC \uBC1B\uC544\uC624\uB294 \uAC78 \uB9D0\uD569\uB2C8\uB2E4. \uD504\uB9AC\uD398\uCE58\uB97C \uC124\uC815\uD558\uBA74
\uB9C1\uD06C\uB97C \uD074\uB9AD\uD558\uC790\uB9C8\uC790 \uD398\uC774\uC9C0\uAC00 \uC804\uD658\uB418\uAE30 \uB54C\uBB38\uC5D0 \uC0AC\uC6A9\uC790\uAC00 \uCCB4\uAC10\uD558\uB294 \uD398\uC774\uC9C0 \uB85C\uB529 \uC9C0\uC5F0\uC774 \uAC70\uC758
\uC0AC\uB77C\uC9D1\uB2C8\uB2E4.`),xs.forEach(s),le=v(e),y=r(e,"P",{});var De=c(y);Oe=l(De,"\uC2A4\uBCA8\uD2B8\uD0B7\uC5D0\uC11C\uB294 \uB0B4\uBD80\uB9C1\uD06C\uC5D0 \uB300\uD574 "),Y=r(De,"CODE",{});var ys=c(Y);Te=l(ys,"sveltekit:prefetch"),ys.forEach(s),je=l(De,` \uC18D\uC131\uC744 \uB123\uC5B4\uC8FC\uBA74 \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uD504\uB9AC\uD398\uCE58\uAC00
\uC791\uB3D9\uD558\uAC8C \uB429\uB2C8\uB2E4.`),De.forEach(s),oe=v(e),b=r(e,"PRE",{class:!0});var et=c(b);et.forEach(s),re=v(e),w=r(e,"P",{});var He=c(w);Re=l(He,`\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC2A4\uBCA8\uD2B8\uD0B7 \uACF5\uC2DD \uBB38\uC11C\uC758
`),C=r(He,"A",{href:!0,rel:!0});var ws=c(C);Se=l(ws,"\uD574\uB2F9 \uC139\uC158"),ws.forEach(s),Ie=l(He,"\uC744 \uCC38\uACE0\uD558\uC138\uC694."),He.forEach(s),ce=v(e),M=r(e,"H2",{id:!0});var Ps=c(M);U=r(Ps,"A",{href:!0});var As=c(U);Ne=l(As,"mdsvex \uD328\uD0A4\uC9C0"),As.forEach(s),Ps.forEach(s),fe=v(e),P=r(e,"P",{});var Le=c(P);Xe=l(Le,"\uC2A4\uBCA8\uD2B8\uD0B7\uC5D0\uC11C MDX\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 \uBCF4\uD1B5 "),$=r(Le,"A",{href:!0,rel:!0});var Ds=c($);qe=l(Ds,"mdsvex \uD328\uD0A4\uC9C0"),Ds.forEach(s),ze=l(Le,"\uB97C \uC501\uB2C8\uB2E4."),Le.forEach(s),ue=v(e),A=r(e,"P",{});var be=c(A);Be=l(be,"\uD558\uC9C0\uB9CC mdsvex \uD328\uD0A4\uC9C0\uB85C \uB80C\uB354\uB9C1\uB41C \uD398\uC774\uC9C0\uC758 \uACBD\uC6B0 \uB9C1\uD06C\uC5D0 "),Z=r(be,"CODE",{});var Hs=c(Z);Ue=l(Hs,"svelte:prefetch"),Hs.forEach(s),Fe=l(be,`\uAC00 \uC124\uC815\uB418\uC9C0 \uC54A\uB294\uB2E4\uB294
\uB2E8\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4.`),be.forEach(s),ie=v(e),O=r(e,"PRE",{class:!0});var st=c(O);st.forEach(s),ke=v(e),D=r(e,"P",{});var Ce=c(D);Ge=l(Ce,"\uB2E4\uD589\uD788 mdsvex\uB294 \uB0B4\uBD80\uC5D0\uC11C "),T=r(Ce,"A",{href:!0,rel:!0});var Ls=c(T);Je=l(Ls,"rehype \uD328\uD0A4\uC9C0"),Ls.forEach(s),Ke=l(Ce,`\uB97C
\uC0AC\uC6A9\uD558\uAE30 \uB54C\uBB38\uC5D0 rehype \uD50C\uB7EC\uADF8\uC778\uC744 \uC791\uC131\uD558\uBA74 \uB80C\uB354\uB9C1 \uACB0\uACFC\uB97C \uC6D0\uD558\uB294\uB300\uB85C \uBC14\uAFC0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`),Ce.forEach(s),ve=v(e),j=r(e,"H2",{id:!0});var bs=c(j);F=r(bs,"A",{href:!0});var Cs=c(F);Qe=l(Cs,"\uD50C\uB7EC\uADF8\uC778 \uB9CC\uB4E4\uAE30"),Cs.forEach(s),bs.forEach(s),_e=v(e),G=r(e,"P",{});var Ms=c(G);Ve=l(Ms,"\uD50C\uB7EC\uADF8\uC778 \uC81C\uC791\uC744 \uC704\uD574 \uD544\uC694\uD55C \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4."),Ms.forEach(s),me=v(e),R=r(e,"PRE",{class:!0});var tt=c(R);tt.forEach(s),de=v(e),J=r(e,"P",{});var $s=c(J);We=l($s,"\uADF8 \uB2E4\uC74C, mdsvex \uC124\uC815\uC758 rehypePlugins \uBCC0\uC218\uC5D0 \uD50C\uB7EC\uADF8\uC778\uC744 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4."),$s.forEach(s),Ee=v(e),S=r(e,"PRE",{class:!0});var at=c(S);at.forEach(s),he=v(e),_=r(e,"P",{});var m=c(_);Ye=l(m,"\uB9C8\uD06C\uB2E4\uC6B4\uC5D0\uC11C \uB80C\uB354\uB9C1\uB41C HTML\uC758 \uBAA8\uB4E0 \uC5D8\uB9AC\uBA3C\uD2B8 \uB178\uB4DC\uB97C \uBC29\uBB38("),g=r(m,"CODE",{});var Os=c(g);Ze=l(Os,"visit()"),Os.forEach(s),ge=l(m,")\uD558\uBA70 \uD0DC\uADF8 \uC774\uB984\uC774 "),ee=r(m,"CODE",{});var Ts=c(ee);es=l(Ts,"a"),Ts.forEach(s),ss=l(m,`\uC774\uBA74\uC11C
`),se=r(m,"CODE",{});var js=c(se);ts=l(js,"href"),js.forEach(s),as=l(m,"\uC5D0 \uC801\uD78C \uC8FC\uC18C\uAC00 \uBE14\uB85C\uADF8 \uB0B4\uBD80 \uB9C1\uD06C\uC778 \uACBD\uC6B0 "),te=r(m,"CODE",{});var Rs=c(te);ns=l(Rs,"sveltekit:prefetch"),Rs.forEach(s),ps=l(m,` \uC18D\uC131\uC744 \uCD94\uAC00\uD558\uB3C4\uB85D
\uD588\uC2B5\uB2C8\uB2E4. \uB0B4\uBD80 \uB9C1\uD06C\uC778\uC9C0 \uD655\uC778\uD558\uB294 \uD328\uD134\uC774 \uC57D\uAC04 \uC5B4\uC124\uD504\uC9C0\uB9CC(\uC8FC\uC18C\uAC00 `),ae=r(m,"CODE",{});var Ss=c(ae);ls=l(Ss,"/"),Ss.forEach(s),os=l(m,"\uC73C\uB85C \uC2DC\uC791\uD558\uAC70\uB098 "),ne=r(m,"CODE",{});var Is=c(ne);rs=l(Is,"."),Is.forEach(s),cs=l(m,`\uC73C\uB85C
\uC2DC\uC791\uD558\uB294\uC9C0\uB9CC \uAC80\uC0AC), \uB2F9\uC7A5 \uC801\uC6A9\uD558\uAE30\uC5D0\uB294 \uD070 \uBB38\uC81C\uAC00 \uC5C6\uC5B4 \uBCF4\uC785\uB2C8\uB2E4.`),m.forEach(s),xe=v(e),K=r(e,"P",{});var Ns=c(K);fs=l(Ns,"\uC774\uC81C \uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC758 \uB9C1\uD06C\uC5D0\uB3C4 \uD504\uB9AC\uD398\uCE58\uAC00 \uC801\uC6A9\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),Ns.forEach(s),ye=v(e),I=r(e,"H2",{id:!0});var Xs=c(I);Q=r(Xs,"A",{href:!0});var qs=c(Q);us=l(qs,"\uB9C8\uCE58\uBA70"),qs.forEach(s),Xs.forEach(s),we=v(e),H=r(e,"P",{});var Me=c(H);is=l(Me,`\uC774 \uAE00\uC5D0\uC11C \uC124\uBA85\uD55C \uCF54\uB4DC\uB294 \uC774 \uBE14\uB85C\uADF8\uC5D0\uB3C4 \uC801\uC6A9\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.
`),N=r(Me,"A",{href:!0,rel:!0});var zs=c(N);ks=l(zs,"\uC18C\uC2A4 \uCF54\uB4DC"),zs.forEach(s),vs=l(Me,"\uAC00 \uACF5\uAC1C\uB418\uC5B4 \uC788\uC73C\uB2C8 \uCC38\uACE0\uD574\uC8FC\uC138\uC694."),Me.forEach(s),Pe=v(e),X=r(e,"H2",{id:!0});var Bs=c(X);V=r(Bs,"A",{href:!0});var Us=c(V);_s=l(Us,"\uAD00\uB828 \uAE00"),Us.forEach(s),Bs.forEach(s),Ae=v(e),W=r(e,"UL",{});var Fs=c(W);pe=r(Fs,"LI",{});var Gs=c(pe);q=r(Gs,"A",{href:!0,"sveltekit:prefetch":!0});var Js=c(q);ms=l(Js,"\uC2A4\uBCA8\uD2B8\uD0B7\uC73C\uB85C \uBE14\uB85C\uADF8 \uB9CC\uB4E4\uAE30"),Js.forEach(s),Gs.forEach(s),Fs.forEach(s),this.h()},h(){f(i,"href","#\uD504\uB9AC\uD398\uCE58\uB780"),f(d,"id","\uD504\uB9AC\uD398\uCE58\uB780"),f(b,"class","language-svelte"),f(C,"href","https://kit.svelte.dev/docs/a-options#sveltekit-prefetch"),f(C,"rel","nofollow"),f(U,"href","#mdsvex-\uD328\uD0A4\uC9C0"),f(M,"id","mdsvex-\uD328\uD0A4\uC9C0"),f($,"href","https://mdsvex.pngwn.io/"),f($,"rel","nofollow"),f(O,"class","language-markdown"),f(T,"href","https://github.com/rehypejs/rehype"),f(T,"rel","nofollow"),f(F,"href","#\uD50C\uB7EC\uADF8\uC778-\uB9CC\uB4E4\uAE30"),f(j,"id","\uD50C\uB7EC\uADF8\uC778-\uB9CC\uB4E4\uAE30"),f(R,"class","language-bash"),f(S,"class","language-js"),f(Q,"href","#\uB9C8\uCE58\uBA70"),f(I,"id","\uB9C8\uCE58\uBA70"),f(N,"href","https://github.com/gongbughim/blog"),f(N,"rel","nofollow"),f(V,"href","#\uAD00\uB828-\uAE00"),f(X,"id","\uAD00\uB828-\uAE00"),f(q,"href","/posts/sveltekit-blog"),f(q,"sveltekit:prefetch","sveltekit:prefetch")},m(e,a){n(e,u,a),t(u,h),n(e,x,a),n(e,d,a),t(d,i),t(i,E),n(e,L,a),n(e,B,a),t(B,$e),n(e,le,a),n(e,y,a),t(y,Oe),t(y,Y),t(Y,Te),t(y,je),n(e,oe,a),n(e,b,a),b.innerHTML=Ws,n(e,re,a),n(e,w,a),t(w,Re),t(w,C),t(C,Se),t(w,Ie),n(e,ce,a),n(e,M,a),t(M,U),t(U,Ne),n(e,fe,a),n(e,P,a),t(P,Xe),t(P,$),t($,qe),t(P,ze),n(e,ue,a),n(e,A,a),t(A,Be),t(A,Z),t(Z,Ue),t(A,Fe),n(e,ie,a),n(e,O,a),O.innerHTML=Ys,n(e,ke,a),n(e,D,a),t(D,Ge),t(D,T),t(T,Je),t(D,Ke),n(e,ve,a),n(e,j,a),t(j,F),t(F,Qe),n(e,_e,a),n(e,G,a),t(G,Ve),n(e,me,a),n(e,R,a),R.innerHTML=Zs,n(e,de,a),n(e,J,a),t(J,We),n(e,Ee,a),n(e,S,a),S.innerHTML=gs,n(e,he,a),n(e,_,a),t(_,Ye),t(_,g),t(g,Ze),t(_,ge),t(_,ee),t(ee,es),t(_,ss),t(_,se),t(se,ts),t(_,as),t(_,te),t(te,ns),t(_,ps),t(_,ae),t(ae,ls),t(_,os),t(_,ne),t(ne,rs),t(_,cs),n(e,xe,a),n(e,K,a),t(K,fs),n(e,ye,a),n(e,I,a),t(I,Q),t(Q,us),n(e,we,a),n(e,H,a),t(H,is),t(H,N),t(N,ks),t(H,vs),n(e,Pe,a),n(e,X,a),t(X,V),t(V,_s),n(e,Ae,a),n(e,W,a),t(W,pe),t(pe,q),t(q,ms)},p:vt,d(e){e&&s(u),e&&s(x),e&&s(d),e&&s(L),e&&s(B),e&&s(le),e&&s(y),e&&s(oe),e&&s(b),e&&s(re),e&&s(w),e&&s(ce),e&&s(M),e&&s(fe),e&&s(P),e&&s(ue),e&&s(A),e&&s(ie),e&&s(O),e&&s(ke),e&&s(D),e&&s(ve),e&&s(j),e&&s(_e),e&&s(G),e&&s(me),e&&s(R),e&&s(de),e&&s(J),e&&s(Ee),e&&s(S),e&&s(he),e&&s(_),e&&s(xe),e&&s(K),e&&s(ye),e&&s(I),e&&s(we),e&&s(H),e&&s(Pe),e&&s(X),e&&s(Ae),e&&s(W)}}}function dt(z){let u,h;const x=[z[0],Vs];let d={$$slots:{default:[mt]},$$scope:{ctx:z}};for(let i=0;i<x.length;i+=1)d=ds(d,x[i]);return u=new _t({props:d}),{c(){ot(u.$$.fragment)},l(i){rt(u.$$.fragment,i)},m(i,E){ct(u,i,E),h=!0},p(i,[E]){const L=E&1?ft(x,[E&1&&Ks(i[0]),E&0&&Ks(Vs)]):{};E&2&&(L.$$scope={dirty:E,ctx:i}),u.$set(L)},i(i){h||(ut(u.$$.fragment,i),h=!0)},o(i){it(u.$$.fragment,i),h=!1},d(i){kt(u,i)}}}const Vs={title:"\uC2A4\uBCA8\uD2B8\uD0B7 mdsvex \uD504\uB9AC\uD398\uCE58 \uC124\uC815\uD558\uAE30",publishedAt:"2022-04-02",summary:"\uC2A4\uBCA8\uD2B8\uD0B7\uACFC mdsvex \uC870\uD569\uC5D0\uC11C \uD504\uB9AC\uD398\uCE58(sveltekit:prefetch) \uC124\uC815\uD558\uB294 \uBC29\uBC95"};function Et(z,u,h){return z.$$set=x=>{h(0,u=ds(ds({},u),Qs(x)))},u=Qs(u),[u]}class Pt extends nt{constructor(u){super();pt(this,u,Et,dt,lt,{})}}export{Pt as default,Vs as metadata};
