import{a0 as Br,a1 as Vr,s as Te,d as m,i as N,r as Ee,a2 as Pe,t as Ue,a3 as be,a4 as Be,c as ze,u as Ve,g as Ke,a as Ye,a5 as at,A as Ut,h as I,j as Z,m as M,D as ot,v as ne,z as Bt,l as we,J as Me,b as E,a7 as Ht,a8 as rt,k as z,n as V,a9 as gt,w as de,e as W,x as _e,y as oe,q as je,aa as jt,ab as Wt,C as It,p as st,N as Ne,ac as Ft,ad as Kr,ae as Yr,af as qr,ag as Qr,ah as Jr,ai as Zr,B as $r}from"../chunks/scheduler.XQXgku_w.js";import{S as Le,i as he,t as b,a as S,g as le,c as pe,k as Mt,d as Y,m as q,b as Q,e as J,f as Ge,j as Hr}from"../chunks/index.Do-7mjWm.js";import{t as ea,r as ta,x as ra,w as mt,v as aa,y as Pt,A as ht,z as sa,H as Ct,Y as Gt,Z as Xt,F as _a,p as Dt,J as Oe,K as kt,l as oa,B as na,_ as At,N as ia,L as la,M as pa,O as qe,Q as ua,V as xt,R as Fe,S as pt,h as xe,$ as ma,a0 as lt,a1 as Ir,W as Mr,a2 as De,X as Rt,a3 as Aa,a4 as dt,a5 as ve,a6 as ft,g as yt,a7 as ca,e as Xe,a8 as Rr,a9 as wt,aa as Sa,P as zt,ab as ga,ac as Vt,ad as da,ae as wr,af as fa,ag as ya,ah as Ea,ai as _t,aj as ba,ak as va,D as Na,al as Ta,am as La,an as ha,ao as ke,ap as Kt,aq as Ca}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.C7E2gKJA.js";import{w as it,d as Da}from"../chunks/entry.DhycOZxz.js";import{h as Ce,p as ka}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as jr}from"../chunks/stores.B6UtgZDu.js";import{c as Oa}from"../chunks/checkRequiredProps.o_C_V3S5.js";function Ot(_,e,r,t){const a=(_-(isNaN(e)?0:e))%t;let s=Math.abs(a)*2>=t?_+Math.sign(a)*(t-Math.abs(a)):_-a;isNaN(e)?!isNaN(r)&&s>r&&(s=Math.floor(r/t)*t):s<e?s=e:!isNaN(r)&&s>r&&(s=e+Math.floor((r-e)/t)*t);const o=t.toString(),n=o.indexOf("."),i=n>=0?o.length-n:0;if(i>0){const l=Math.pow(10,i);s=Math.round(s*l)/l}return s}const xa={defaultValue:[],min:0,max:100,step:1,orientation:"horizontal",dir:"ltr",disabled:!1},{name:ct}=sa("slider"),Ua=_=>{const e={...xa,..._},r=ea(ta(e,"value","onValueChange","defaultValue")),{min:t,max:a,step:s,orientation:o,dir:n,disabled:i}=r,l=e.value??it(e.defaultValue),p=ra(l,e==null?void 0:e.onValueChange),u=mt(it(!1)),A=mt(it(0)),T=mt(it(null)),C=aa(["root"]),c=(v,f)=>{p.update(h=>{if(!h)return[v];if(h[f]===v)return h;const U=[...h],d=U[f]>v?-1:1;function D(){U[f]=U[f+d],U[f+d]=v;const $=R();$&&($[f+d].focus(),T.set({thumb:$[f+d],index:f+d}))}if(d===-1&&v<U[f-1])return D(),U;if(d===1&&v>U[f+1])return D(),U;const w=t.get(),K=a.get(),O=s.get();return U[f]=Ot(v,w,K,O),U})},R=()=>{const v=kt(C.root);return v?Array.from(v.querySelectorAll('[data-melt-part="thumb"]')).filter(f=>Dt(f)):null},F=Da([t,a],([v,f])=>h=>(h-v)/(f-v)*100),k=mt.derived([o,n],([v,f])=>v==="horizontal"?f==="rtl"?"rl":"lr":f==="rtl"?"tb":"bt"),H=Pt(ct(),{stores:[i,o,n],returned:([v,f,h])=>({dir:h,disabled:ht(v),"data-disabled":ht(v),"data-orientation":f,style:v?void 0:`touch-action: ${f==="horizontal"?"pan-y":"pan-x"}`,"data-melt-id":C.root})}),B=Pt(ct("range"),{stores:[p,k,F],returned:([v,f,h])=>{const U=v.length>1?h(Math.min(...v)??0):0,d=100-h(Math.max(...v)??0),D={position:"absolute"};switch(f){case"lr":{D.left=`${U}%`,D.right=`${d}%`;break}case"rl":{D.right=`${U}%`,D.left=`${d}%`;break}case"bt":{D.bottom=`${U}%`,D.top=`${d}%`;break}case"tb":{D.top=`${U}%`,D.bottom=`${d}%`;break}}return{style:Ct(D)}}}),x=Gt(ct("thumb"),{stores:[p,F,t,a,i,o,k],returned:([v,f,h,U,d,D,w])=>Array.from({length:v.length||1},(O,$)=>{A.get()<v.length&&A.update(P=>P+1);const y=v[$],X=`${f(y)}%`,G={position:"absolute"};switch(w){case"lr":{G.left=X,G.translate="-50% 0";break}case"rl":{G.right=X,G.translate="50% 0";break}case"bt":{G.bottom=X,G.translate="0 50%";break}case"tb":{G.top=X,G.translate="0 -50%";break}}return{role:"slider","aria-valuemin":h,"aria-valuemax":U,"aria-valuenow":y,"aria-disabled":ht(d),"aria-orientation":D,"data-melt-part":"thumb","data-value":y,style:Ct(G),tabindex:d?-1:0}}),action:v=>({destroy:_a(v,"keydown",h=>{if(i.get())return;const U=h.currentTarget;if(!Dt(U))return;const d=R();if(!(d!=null&&d.length))return;const D=d.indexOf(U);if(A.set(D),![Oe.ARROW_LEFT,Oe.ARROW_RIGHT,Oe.ARROW_UP,Oe.ARROW_DOWN,Oe.HOME,Oe.END].includes(h.key))return;h.preventDefault();const w=t.get(),K=a.get(),O=s.get(),$=p.get(),re=o.get(),y=k.get(),X=$[D];switch(h.key){case Oe.HOME:{c(w,D);break}case Oe.END:{c(K,D);break}case Oe.ARROW_LEFT:{if(re!=="horizontal")break;h.metaKey?c(y==="rl"?K:w,D):y==="rl"&&X<K?c(X+O,D):y==="lr"&&X>w&&c(X-O,D);break}case Oe.ARROW_RIGHT:{if(re!=="horizontal")break;h.metaKey?c(y==="rl"?w:K,D):y==="rl"&&X>w?c(X-O,D):y==="lr"&&X<K&&c(X+O,D);break}case Oe.ARROW_UP:{h.metaKey?c(y==="tb"?w:K,D):y==="tb"&&X>w?c(X-O,D):y!=="tb"&&X<K&&c(X+O,D);break}case Oe.ARROW_DOWN:{h.metaKey?c(y==="tb"?K:w,D):y==="tb"&&X<K?c(X+O,D):y!=="tb"&&X>w&&c(X-O,D);break}}})})}),L=Gt(ct("tick"),{stores:[p,t,a,s,k],returned:([v,f,h,U,d])=>{const D=h-f;let w=Math.ceil(D/U);return D%U==0&&w++,Array.from({length:w},(K,O)=>{const $=`${O*(U/(h-f))*100}%`,re=O===0,y=O===w-1,X=re?0:y?-100:-50,G={position:"absolute"};switch(d){case"lr":{G.left=$,G.translate=`${X}% 0`;break}case"rl":{G.right=$,G.translate=`${-X}% 0`;break}case"bt":{G.bottom=$,G.translate=`0 ${-X}%`;break}case"tb":{G.top=$,G.translate=`0 ${X}%`;break}}const P=f+O*U;return{"data-bounded":(v.length===1?P<=v[0]:v[0]<=P&&P<=v[v.length-1])?!0:void 0,"data-value":P,style:Ct(G)}})}});return Xt([H,t,a,i,o,k,s],([v,f,h,U,d,D,w])=>{if(!oa||U)return;const K=(G,P,ae,Ae)=>{const se=(G-ae)/(Ae-ae)*(h-f)+f;if(se<f)c(f,P);else if(se>h)c(h,P);else{const te=w,ee=f,ue=Math.floor((se-ee)/te),fe=ee+ue*te+te/2,ye=ee+(ue+1)*te+te/2,ge=se>=fe&&se<ye?(ue+1)*te+ee:ue*te+ee;ge<=h&&c(ge,P)}},O=G=>{const P=R();if(!P)return;P.forEach(se=>se.blur());const ae=P.map(se=>{if(d==="horizontal"){const{left:te,right:ee}=se.getBoundingClientRect();return Math.abs(G.clientX-(te+ee)/2)}else{const{top:te,bottom:ee}=se.getBoundingClientRect();return Math.abs(G.clientY-(te+ee)/2)}}),Ae=P[ae.indexOf(Math.min(...ae))],ie=P.indexOf(Ae);return{thumb:Ae,index:ie}},$=G=>{if(!u.get())return;G.preventDefault(),G.stopPropagation();const P=kt(v["data-melt-id"]),ae=T.get();if(!P||!ae)return;ae.thumb.focus();const{left:Ae,right:ie,top:se,bottom:te}=P.getBoundingClientRect();switch(D){case"lr":{K(G.clientX,ae.index,Ae,ie);break}case"rl":{K(G.clientX,ae.index,ie,Ae);break}case"bt":{K(G.clientY,ae.index,te,se);break}case"tb":{K(G.clientY,ae.index,se,te);break}}},re=G=>{if(G.button!==0)return;const P=kt(v["data-melt-id"]),ae=O(G);if(!ae||!P)return;const Ae=G.target;!Dt(Ae)||!P.contains(Ae)||(G.preventDefault(),T.set(ae),ae.thumb.focus(),u.set(!0),$(G))},y=()=>{u.set(!1)},X=na(At(document,"pointerdown",re),At(document,"pointerup",y),At(document,"pointerleave",y),At(document,"pointermove",$));return()=>{X()}}),Xt([s,t,a,p],function([f,h,U,d]){const D=K=>Ot(K,h,U,f)===K,w=K=>Ot(K,h,U,f);d.some(K=>!D(K))&&p.update(K=>K.map(w))}),{elements:{root:H,thumbs:x,range:B,ticks:L},states:{value:p},options:r}};function Wr(){return{NAME:"slider",PARTS:["root","input","range","thumb","tick"]}}function Ba(_){const{NAME:e,PARTS:r}=Wr(),t=ia(e,r),a={...Ua(la(_)),getAttrs:t};return Br(e,a),{...a,updateOption:pa(a.options)}}function Fr(){const{NAME:_}=Wr();return Vr(_)}const Ha=_=>({builder:_&4,ticks:_&8,thumbs:_&16}),Yt=_=>({builder:_[2],ticks:_[3],thumbs:_[4]}),Ia=_=>({builder:_&4,ticks:_&8,thumbs:_&16}),qt=_=>({builder:_[2],ticks:_[3],thumbs:_[4]});function Ma(_){let e,r,t,a;const s=_[19].default,o=ze(s,_,_[18],Yt);let n=[_[2],_[8]],i={};for(let l=0;l<n.length;l+=1)i=be(i,n[l]);return{c(){e=M("span"),o&&o.c(),this.h()},l(l){e=I(l,"SPAN",{});var p=Z(e);o&&o.l(p),p.forEach(m),this.h()},h(){at(e,i)},m(l,p){N(l,e,p),o&&o.m(e,null),_[20](e),r=!0,t||(a=Ut(_[2].action(e)),t=!0)},p(l,p){o&&o.p&&(!r||p&262172)&&Ve(o,s,l,l[18],r?Ye(s,l[18],p,Ha):Ke(l[18]),Yt),at(e,i=qe(n,[p&4&&l[2],p&256&&l[8]]))},i(l){r||(S(o,l),r=!0)},o(l){b(o,l),r=!1},d(l){l&&m(e),o&&o.d(l),_[20](null),t=!1,a()}}}function Ra(_){let e;const r=_[19].default,t=ze(r,_,_[18],qt);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,s){t&&t.m(a,s),e=!0},p(a,s){t&&t.p&&(!e||s&262172)&&Ve(t,r,a,a[18],e?Ye(r,a[18],s,Ia):Ke(a[18]),qt)},i(a){e||(S(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function wa(_){let e,r,t,a;const s=[Ra,Ma],o=[];function n(i,l){return i[1]?0:1}return e=n(_),r=o[e]=s[e](_),{c(){r.c(),t=Ee()},l(i){r.l(i),t=Ee()},m(i,l){o[e].m(i,l),N(i,t,l),a=!0},p(i,[l]){let p=e;e=n(i),e===p?o[e].p(i,l):(le(),b(o[p],1,1,()=>{o[p]=null}),pe(),r=o[e],r?r.p(i,l):(r=o[e]=s[e](i),r.c()),S(r,1),r.m(t.parentNode,t))},i(i){a||(S(r),a=!0)},o(i){b(r),a=!1},d(i){i&&m(t),o[e].d(i)}}}function ja(_,e,r){let t;const a=["disabled","min","max","step","orientation","dir","value","onValueChange","asChild","el"];let s=Pe(e,a),o,n,i,{$$slots:l={},$$scope:p}=e,{disabled:u=void 0}=e,{min:A=void 0}=e,{max:T=void 0}=e,{step:C=void 0}=e,{orientation:c=void 0}=e,{dir:R=void 0}=e,{value:F=void 0}=e,{onValueChange:k=void 0}=e,{asChild:H=!1}=e,{el:B=void 0}=e;const{elements:{root:x,ticks:L,thumbs:v},states:{value:f},updateOption:h,getAttrs:U}=Ba({disabled:u,dir:R,min:A,max:T,step:C,orientation:c,defaultValue:F,onValueChange:({next:w})=>(F!==w&&(k==null||k(w),r(9,F=w)),w)});Ue(_,x,w=>r(17,o=w)),Ue(_,L,w=>r(3,n=w)),Ue(_,v,w=>r(4,i=w));const d=U("root");function D(w){ot[w?"unshift":"push"](()=>{B=w,r(0,B)})}return _.$$set=w=>{e=be(be({},e),Be(w)),r(8,s=Pe(e,a)),"disabled"in w&&r(10,u=w.disabled),"min"in w&&r(11,A=w.min),"max"in w&&r(12,T=w.max),"step"in w&&r(13,C=w.step),"orientation"in w&&r(14,c=w.orientation),"dir"in w&&r(15,R=w.dir),"value"in w&&r(9,F=w.value),"onValueChange"in w&&r(16,k=w.onValueChange),"asChild"in w&&r(1,H=w.asChild),"el"in w&&r(0,B=w.el),"$$scope"in w&&r(18,p=w.$$scope)},_.$$.update=()=>{_.$$.dirty&512&&F!==void 0&&f.set(F),_.$$.dirty&1024&&h("disabled",u),_.$$.dirty&2048&&h("min",A),_.$$.dirty&4096&&h("max",T),_.$$.dirty&8192&&h("step",C),_.$$.dirty&16384&&h("orientation",c),_.$$.dirty&32768&&h("dir",R),_.$$.dirty&131072&&r(2,t=o),_.$$.dirty&4&&Object.assign(t,d)},[B,H,t,n,i,x,L,v,s,F,u,A,T,C,c,R,k,o,p,l,D]}let Wa=class extends Le{constructor(e){super(),he(this,e,ja,wa,Te,{disabled:10,min:11,max:12,step:13,orientation:14,dir:15,value:9,onValueChange:16,asChild:1,el:0})}};const Fa=_=>({builder:_&4}),Qt=_=>({builder:_[2]});function Pa(_){let e,r,t,a=[_[2],_[4]],s={};for(let o=0;o<a.length;o+=1)s=be(s,a[o]);return{c(){e=M("span"),this.h()},l(o){e=I(o,"SPAN",{}),Z(e).forEach(m),this.h()},h(){at(e,s)},m(o,n){N(o,e,n),_[8](e),r||(t=Ut(_[2].action(e)),r=!0)},p(o,n){at(e,s=qe(a,[n&4&&o[2],n&16&&o[4]]))},i:ne,o:ne,d(o){o&&m(e),_[8](null),r=!1,t()}}}function Ga(_){let e;const r=_[7].default,t=ze(r,_,_[6],Qt);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,s){t&&t.m(a,s),e=!0},p(a,s){t&&t.p&&(!e||s&68)&&Ve(t,r,a,a[6],e?Ye(r,a[6],s,Fa):Ke(a[6]),Qt)},i(a){e||(S(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function Xa(_){let e,r,t,a;const s=[Ga,Pa],o=[];function n(i,l){return i[1]?0:1}return e=n(_),r=o[e]=s[e](_),{c(){r.c(),t=Ee()},l(i){r.l(i),t=Ee()},m(i,l){o[e].m(i,l),N(i,t,l),a=!0},p(i,[l]){let p=e;e=n(i),e===p?o[e].p(i,l):(le(),b(o[p],1,1,()=>{o[p]=null}),pe(),r=o[e],r?r.p(i,l):(r=o[e]=s[e](i),r.c()),S(r,1),r.m(t.parentNode,t))},i(i){a||(S(r),a=!0)},o(i){b(r),a=!1},d(i){i&&m(t),o[e].d(i)}}}function za(_,e,r){let t;const a=["asChild","el"];let s=Pe(e,a),o,{$$slots:n={},$$scope:i}=e,{asChild:l=!1}=e,{el:p=void 0}=e;const{elements:{range:u},getAttrs:A}=Fr();Ue(_,u,c=>r(5,o=c));const T=A("range");function C(c){ot[c?"unshift":"push"](()=>{p=c,r(0,p)})}return _.$$set=c=>{e=be(be({},e),Be(c)),r(4,s=Pe(e,a)),"asChild"in c&&r(1,l=c.asChild),"el"in c&&r(0,p=c.el),"$$scope"in c&&r(6,i=c.$$scope)},_.$$.update=()=>{_.$$.dirty&32&&r(2,t=o),_.$$.dirty&4&&Object.assign(t,T)},[p,l,t,u,s,o,i,n,C]}class Va extends Le{constructor(e){super(),he(this,e,za,Xa,Te,{asChild:1,el:0})}}const Ka=_=>({builder:_&4}),Jt=_=>({builder:_[2]});function Ya(_){let e,r,t,a=[_[2],_[4]],s={};for(let o=0;o<a.length;o+=1)s=be(s,a[o]);return{c(){e=M("span"),this.h()},l(o){e=I(o,"SPAN",{}),Z(e).forEach(m),this.h()},h(){at(e,s)},m(o,n){N(o,e,n),_[8](e),r||(t=[Ut(_[2].action(e)),we(e,"m-keydown",_[3])],r=!0)},p(o,n){at(e,s=qe(a,[n&4&&o[2],n&16&&o[4]]))},i:ne,o:ne,d(o){o&&m(e),_[8](null),r=!1,Bt(t)}}}function qa(_){let e;const r=_[7].default,t=ze(r,_,_[6],Jt);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,s){t&&t.m(a,s),e=!0},p(a,s){t&&t.p&&(!e||s&68)&&Ve(t,r,a,a[6],e?Ye(r,a[6],s,Ka):Ke(a[6]),Jt)},i(a){e||(S(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function Qa(_){let e,r,t,a;const s=[qa,Ya],o=[];function n(i,l){return i[1]?0:1}return e=n(_),r=o[e]=s[e](_),{c(){r.c(),t=Ee()},l(i){r.l(i),t=Ee()},m(i,l){o[e].m(i,l),N(i,t,l),a=!0},p(i,[l]){let p=e;e=n(i),e===p?o[e].p(i,l):(le(),b(o[p],1,1,()=>{o[p]=null}),pe(),r=o[e],r?r.p(i,l):(r=o[e]=s[e](i),r.c()),S(r,1),r.m(t.parentNode,t))},i(i){a||(S(r),a=!0)},o(i){b(r),a=!1},d(i){i&&m(t),o[e].d(i)}}}function Ja(_,e,r){let t;const a=["asChild","el","thumb"];let s=Pe(e,a),{$$slots:o={},$$scope:n}=e,{asChild:i=!1}=e,{el:l=void 0}=e,{thumb:p}=e;const{getAttrs:u}=Fr(),A=ua(),T=u("thumb");function C(c){ot[c?"unshift":"push"](()=>{l=c,r(0,l)})}return _.$$set=c=>{e=be(be({},e),Be(c)),r(4,s=Pe(e,a)),"asChild"in c&&r(1,i=c.asChild),"el"in c&&r(0,l=c.el),"thumb"in c&&r(5,p=c.thumb),"$$scope"in c&&r(6,n=c.$$scope)},_.$$.update=()=>{_.$$.dirty&32&&r(2,t=p),_.$$.dirty&4&&Object.assign(t,T)},[l,i,t,A,s,p,n,o,C]}class Pr extends Le{constructor(e){super(),he(this,e,Ja,Qa,Te,{asChild:1,el:0,thumb:5})}}function Za(_){let e,r;const t=_[2].default,a=ze(t,_,_[1],null);return{c(){e=M("div"),a&&a.c(),this.h()},l(s){e=I(s,"DIV",{class:!0});var o=Z(e);a&&a.l(o),o.forEach(m),this.h()},h(){E(e,"class","contents"),Me(e,"print:hidden",_[0])},m(s,o){N(s,e,o),a&&a.m(e,null),r=!0},p(s,[o]){a&&a.p&&(!r||o&2)&&Ve(a,t,s,s[1],r?Ye(t,s[1],o,null):Ke(s[1]),null),(!r||o&1)&&Me(e,"print:hidden",s[0])},i(s){r||(S(a,s),r=!0)},o(s){b(a,s),r=!1},d(s){s&&m(e),a&&a.d(s)}}}function $a(_,e,r){let{$$slots:t={},$$scope:a}=e,{enabled:s=!0}=e;return _.$$set=o=>{"enabled"in o&&r(0,s=o.enabled),"$$scope"in o&&r(1,a=o.$$scope)},_.$$.update=()=>{_.$$.dirty&1&&r(0,s=xt(s))},[s,a,t]}class es extends Le{constructor(e){super(),he(this,e,$a,Za,Te,{enabled:0})}}function Zt(_,e,r){const t=_.slice();return t[5]=e[r],t}function $t(_){let e,r;return e=new Pr({props:{class:"block h-3 w-3 rounded-full border border-base-content bg-base-content shadow transition-colors active:outline-none ring-primary/50 active:ring-2 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 cursor-pointer"}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p:ne,i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function er(_){let e,r;return e=new Pr({props:{thumb:_[5],class:"block h-3 w-3 rounded-full border border-base-content bg-base-content shadow transition-colors active:outline-none ring-primary/50 active:ring-2 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 cursor-pointer"}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a&16&&(s.thumb=t[5]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function ts(_){let e,r,t,a,s;r=new Va({props:{class:"absolute h-full bg-base-content before:block before:absolute before:top-0 before:-left-1.5 before:w-2 before:h-1 before:bg-base-content after:block after:absolute after:top-0 after:-right-1 after:w-1 after:h-1 after:bg-base-content/20 after:-z-10 after:rounded-r-full"}});let o=xe(_[4]??[]),n=[];for(let p=0;p<o.length;p+=1)n[p]=er(Zt(_,o,p));const i=p=>b(n[p],1,1,()=>{n[p]=null});let l=null;return o.length||(l=$t()),{c(){e=M("span"),J(r.$$.fragment),t=V();for(let p=0;p<n.length;p+=1)n[p].c();a=Ee(),l&&l.c(),this.h()},l(p){e=I(p,"SPAN",{class:!0});var u=Z(e);Q(r.$$.fragment,u),u.forEach(m),t=z(p);for(let A=0;A<n.length;A+=1)n[A].l(p);a=Ee(),l&&l.l(p),this.h()},h(){E(e,"class","relative h-1 w-full grow rounded-l-full bg-base-300 cursor-pointer before:block before:absolute before:-top-4 before:-left-1.5 before:h-9 before:transparent before:z-0 before:w-[calc(100%+0.6rem)]")},m(p,u){N(p,e,u),q(r,e,null),N(p,t,u);for(let A=0;A<n.length;A+=1)n[A]&&n[A].m(p,u);N(p,a,u),l&&l.m(p,u),s=!0},p(p,u){if(u&16){o=xe(p[4]??[]);let A;for(A=0;A<o.length;A+=1){const T=Zt(p,o,A);n[A]?(n[A].p(T,u),S(n[A],1)):(n[A]=er(T),n[A].c(),S(n[A],1),n[A].m(a.parentNode,a))}for(le(),A=o.length;A<n.length;A+=1)i(A);pe(),!o.length&&l?l.p(p,u):o.length?l&&(le(),b(l,1,1,()=>{l=null}),pe()):(l=$t(),l.c(),S(l,1),l.m(a.parentNode,a))}},i(p){if(!s){S(r.$$.fragment,p);for(let u=0;u<o.length;u+=1)S(n[u]);s=!0}},o(p){b(r.$$.fragment,p),n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)b(n[u]);s=!1},d(p){p&&(m(e),m(t),m(a)),Y(r),rt(n,p),l&&l.d(p)}}}function rs(_){let e,r,t;const a=[{class:Fe("relative left-1.5 flex w-full touch-none select-none items-center",_[1])},_[2]];function s(n){_[3](n)}let o={$$slots:{default:[ts,({thumbs:n})=>({4:n}),({thumbs:n})=>n?16:0]},$$scope:{ctx:_}};for(let n=0;n<a.length;n+=1)o=be(o,a[n]);return _[0]!==void 0&&(o.value=_[0]),e=new Wa({props:o}),ot.push(()=>Mt(e,"value",s)),{c(){J(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){q(e,n,i),t=!0},p(n,[i]){const l=i&6?qe(a,[i&2&&{class:Fe("relative left-1.5 flex w-full touch-none select-none items-center",n[1])},i&4&&pt(n[2])]):{};i&272&&(l.$$scope={dirty:i,ctx:n}),!r&&i&1&&(r=!0,l.value=n[0],Ht(()=>r=!1)),e.$set(l)},i(n){t||(S(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){Y(e,n)}}}function as(_,e,r){const t=["class","value"];let a=Pe(e,t),{class:s=void 0}=e,{value:o=[0]}=e;function n(i){o=i,r(0,o)}return _.$$set=i=>{e=be(be({},e),Be(i)),r(2,a=Pe(e,t)),"class"in i&&r(1,s=i.class),"value"in i&&r(0,o=i.value)},[o,s,a,n]}class ss extends Le{constructor(e){super(),he(this,e,as,rs,Te,{class:1,value:0})}}function _s(_){let e,r,t,a,s,o,n,i=(_[7]?De(_[13][_[6]],_[11]):_[13][_[6]])+"",l,p,u,A,T,C,c;const R=[is,ns],F=[];function k(L,v){return L[8]?0:1}a=k(_),s=F[a]=R[a](_);function H(L){_[22](L)}let B={min:_[0],max:_[1],step:_[4],sizeClass:_[12]};_[9]!==void 0&&(B.value=_[9]),u=new ss({props:B}),ot.push(()=>Mt(u,"value",H));let x=_[2]&&tr(_);return{c(){e=M("div"),r=M("p"),t=M("span"),s.c(),o=V(),n=M("span"),l=oe(i),p=V(),J(u.$$.fragment),T=V(),x&&x.c(),this.h()},l(L){e=I(L,"DIV",{class:!0});var v=Z(e);r=I(v,"P",{class:!0});var f=Z(r);t=I(f,"SPAN",{class:!0});var h=Z(t);s.l(h),h.forEach(m),o=z(f),n=I(f,"SPAN",{class:!0});var U=Z(n);l=_e(U,i),U.forEach(m),f.forEach(m),p=z(v),Q(u.$$.fragment,v),T=z(v),x&&x.l(v),v.forEach(m),this.h()},h(){E(t,"class","font-medium"),E(n,"class","text-xs"),E(r,"class","pb-2 truncate text-xs"),E(e,"class",C=`relative ${_[12]} mt-2 mb-10 select-none`)},m(L,v){N(L,e,v),W(e,r),W(r,t),F[a].m(t,null),W(r,o),W(r,n),W(n,l),W(e,p),q(u,e,null),W(e,T),x&&x.m(e,null),c=!0},p(L,v){let f=a;a=k(L),a===f?F[a].p(L,v):(le(),b(F[f],1,1,()=>{F[f]=null}),pe(),s=F[a],s?s.p(L,v):(s=F[a]=R[a](L),s.c()),S(s,1),s.m(t,null)),(!c||v&10432)&&i!==(i=(L[7]?De(L[13][L[6]],L[11]):L[13][L[6]])+"")&&de(l,i);const h={};v&1&&(h.min=L[0]),v&2&&(h.max=L[1]),v&16&&(h.step=L[4]),v&4096&&(h.sizeClass=L[12]),!A&&v&512&&(A=!0,h.value=L[9],Ht(()=>A=!1)),u.$set(h),L[2]?x?x.p(L,v):(x=tr(L),x.c(),x.m(e,null)):x&&(x.d(1),x=null),(!c||v&4096&&C!==(C=`relative ${L[12]} mt-2 mb-10 select-none`))&&E(e,"class",C)},i(L){c||(S(s),S(u.$$.fragment,L),c=!0)},o(L){b(s),b(u.$$.fragment,L),c=!1},d(L){L&&m(e),F[a].d(),Y(u),x&&x.d()}}}function os(_){let e,r;return e=new Mr({props:{inputType:"Slider",error:_[10],width:"170",height:"36"}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a&1024&&(s.error=t[10]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function ns(_){let e,r;return{c(){e=oe(_[5]),r=oe(":")},l(t){e=_e(t,_[5]),r=_e(t,":")},m(t,a){N(t,e,a),N(t,r,a)},p(t,a){a&32&&de(e,t[5])},i:ne,o:ne,d(t){t&&(m(e),m(r))}}}function is(_){let e,r,t;return r=new Rt({props:{description:_[8],className:"mr-2"}}),{c(){e=oe(_[5]),J(r.$$.fragment)},l(a){e=_e(a,_[5]),Q(r.$$.fragment,a)},m(a,s){N(a,e,s),q(r,a,s),t=!0},p(a,s){(!t||s&32)&&de(e,a[5]);const o={};s&256&&(o.description=a[8]),r.$set(o)},i(a){t||(S(r.$$.fragment,a),t=!0)},o(a){b(r.$$.fragment,a),t=!1},d(a){a&&m(e),Y(r,a)}}}function tr(_){let e,r=(_[7]?De(_[0],_[11]):_[0])+"",t,a,s,o=(_[7]?De(_[1],_[11]):_[1])+"",n;return{c(){e=M("span"),t=oe(r),a=V(),s=M("span"),n=oe(o),this.h()},l(i){e=I(i,"SPAN",{class:!0});var l=Z(e);t=_e(l,r),l.forEach(m),a=z(i),s=I(i,"SPAN",{class:!0});var p=Z(s);n=_e(p,o),p.forEach(m),this.h()},h(){E(e,"class","absolute left-0 text-xs pt-1 -z-10"),E(s,"class","absolute -right-2.5 text-xs pt-1 -z-10")},m(i,l){N(i,e,l),W(e,t),N(i,a,l),N(i,s,l),W(s,n)},p(i,l){l&2177&&r!==(r=(i[7]?De(i[0],i[11]):i[0])+"")&&de(t,r),l&2178&&o!==(o=(i[7]?De(i[1],i[11]):i[1])+"")&&de(n,o)},d(i){i&&(m(e),m(a),m(s))}}}function ls(_){let e,r,t,a;const s=[os,_s],o=[];function n(i,l){return i[10].length>0?0:1}return e=n(_),r=o[e]=s[e](_),{c(){r.c(),t=Ee()},l(i){r.l(i),t=Ee()},m(i,l){o[e].m(i,l),N(i,t,l),a=!0},p(i,l){let p=e;e=n(i),e===p?o[e].p(i,l):(le(),b(o[p],1,1,()=>{o[p]=null}),pe(),r=o[e],r?r.p(i,l):(r=o[e]=s[e](i),r.c()),S(r,1),r.m(t.parentNode,t))},i(i){a||(S(r),a=!0)},o(i){b(r),a=!1},d(i){i&&m(t),o[e].d(i)}}}function ps(_){let e,r;return e=new es({props:{enabled:_[3],$$slots:{default:[ls]},$$scope:{ctx:_}}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,[a]){const s={};a&8&&(s.enabled=t[3]),a&268451831&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function us(_,e,r){var O,$,re;let t,a,s,o;const n=ma();Ue(_,n,y=>r(13,o=y));let{title:i}=e,{name:l}=e,{min:p=0}=e,{max:u=100}=e,{step:A=1}=e,{showMaxMin:T=!0}=e,{hideDuringPrint:C=!0}=e,{defaultValue:c}=e,{range:R=void 0}=e,F=[0],{fmt:k="num0"}=e,{size:H=""}=e,B,{description:x=void 0}=e,{data:L}=e,{maxColumn:v=void 0}=e,{minColumn:f=void 0}=e,h=[];function U(y,X){if(y=Aa(y),isNaN(y)){h.push(`${X} must be a number`);return}return y}function d(y,X){y>X&&h.push("min cannot be greater than max")}const D=y=>({small:"w-40",medium:"w-64",large:"w-96",full:"w-[calc(100%-0.6rem)]"})[y.toLowerCase()]||"w-40";if(L){try{lt(L,[],[R,c,f,v])}catch(y){h=[...h,y.message]}typeof c=="string"&&((O=L[0])!=null&&O[c])&&(F=[L[0][c]]),R&&(p=L.map(y=>y[R]).reduce((y,X)=>Math.min(y,X)),u=L.map(y=>y[R]).reduce((y,X)=>Math.max(y,X))),v&&(($=L[0])!=null&&$[v])&&(u=L[0][v]),f&&((re=L[0])!=null&&re[f])&&(p=L[0][f])}try{Oa({name:l})}catch(y){h.push(y.message)}const w=()=>{a>1e3&&A<s&&r(4,A=s)};function K(y){F=y,r(9,F),r(15,c),r(18,L),r(0,p),r(10,h),r(1,u)}return _.$$set=y=>{"title"in y&&r(5,i=y.title),"name"in y&&r(6,l=y.name),"min"in y&&r(0,p=y.min),"max"in y&&r(1,u=y.max),"step"in y&&r(4,A=y.step),"showMaxMin"in y&&r(2,T=y.showMaxMin),"hideDuringPrint"in y&&r(3,C=y.hideDuringPrint),"defaultValue"in y&&r(15,c=y.defaultValue),"range"in y&&r(16,R=y.range),"fmt"in y&&r(7,k=y.fmt),"size"in y&&r(17,H=y.size),"description"in y&&r(8,x=y.description),"data"in y&&r(18,L=y.data),"maxColumn"in y&&r(19,v=y.maxColumn),"minColumn"in y&&r(20,f=y.minColumn)},_.$$.update=()=>{_.$$.dirty&4&&r(2,T=xt(T)),_.$$.dirty&8&&r(3,C=xt(C)),_.$$.dirty&1&&p!==void 0&&r(0,p=U(p,"min")),_.$$.dirty&2&&u!==void 0&&r(1,u=U(u,"max")),_.$$.dirty&3&&u!==void 0&&p!==void 0&&d(p,u),_.$$.dirty&295939&&c!==void 0&&!L&&(r(15,c=U(c,"defaultValue")),c<p?h.push("defaultValue cannot be less than min"):c>u&&h.push("defaultValue cannot be greater than max"),r(9,F=[c])),_.$$.dirty&576&&gt(n,o[l]=F,o),_.$$.dirty&131072&&r(12,t=D(H)),_.$$.dirty&128&&(k?r(11,B=Ir(k,"number")):r(11,B=void 0)),_.$$.dirty&3&&r(21,a=u-p),_.$$.dirty&2097152&&(s=a/1e3),_.$$.dirty&2097152&&a>1e3&&w()},[p,u,T,C,A,i,l,k,x,F,h,B,t,o,n,c,R,H,L,v,f,a,K]}class ms extends Le{constructor(e){super(),he(this,e,us,ps,Te,{title:5,name:6,min:0,max:1,step:4,showMaxMin:2,hideDuringPrint:3,defaultValue:15,range:16,fmt:7,size:17,description:8,data:18,maxColumn:19,minColumn:20})}}function As(_){let e,r;const t=[_[4],{data:ve.isQuery(_[7])?Array.from(_[7]):_[7]}];let a={};for(let s=0;s<t.length;s+=1)a=be(a,t[s]);return e=new ms({props:a}),{c(){J(e.$$.fragment)},l(s){Q(e.$$.fragment,s)},m(s,o){q(e,s,o),r=!0},p(s,o){const n=o&144?qe(t,[o&16&&pt(s[4]),o&128&&{data:ve.isQuery(s[7])?Array.from(s[7]):s[7]}]):{};e.$set(n)},i(s){r||(S(e.$$.fragment,s),r=!0)},o(s){b(e.$$.fragment,s),r=!1},d(s){Y(e,s)}}}function rr(_){let e,r;return e=new ft({props:{emptyMessage:_[2],emptySet:_[1],chartType:ds,isInitial:_[3]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a&4&&(s.emptyMessage=t[2]),a&2&&(s.emptySet=t[1]),a&8&&(s.isInitial=t[3]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function cs(_){let e,r,t=!_[4].placeholder&&rr(_);return{c(){e=M("span"),t&&t.c(),this.h()},l(a){e=I(a,"SPAN",{slot:!0});var s=Z(e);t&&t.l(s),s.forEach(m),this.h()},h(){E(e,"slot","empty")},m(a,s){N(a,e,s),t&&t.m(e,null),r=!0},p(a,s){a[4].placeholder?t&&(le(),b(t,1,1,()=>{t=null}),pe()):t?(t.p(a,s),s&16&&S(t,1)):(t=rr(a),t.c(),S(t,1),t.m(e,null))},i(a){r||(S(t),r=!0)},o(a){b(t),r=!1},d(a){a&&m(e),t&&t.d()}}}function Ss(_){let e,r="Loading...";return{c(){e=M("span"),e.textContent=r,this.h()},l(t){e=I(t,"SPAN",{slot:!0,class:!0,"data-svelte-h":!0}),je(e)!=="svelte-exu0be"&&(e.textContent=r),this.h()},h(){E(e,"slot","skeleton"),E(e,"class","text-gray-500")},m(t,a){N(t,e,a)},p:ne,d(t){t&&m(e)}}}function gs(_){let e,r;return e=new dt({props:{data:_[0],$$slots:{skeleton:[Ss],empty:[cs],default:[As,({loaded:t})=>({7:t}),({loaded:t})=>t?128:0]},$$scope:{ctx:_}}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,[a]){const s={};a&1&&(s.data=t[0]),a&414&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}let ds="Slider";function fs(_,e,r){let t,{data:a}=e;const s=ve.isQuery(a)?a.hash:void 0;let o=(a==null?void 0:a.hash)===s,{emptySet:n=void 0}=e,{emptyMessage:i=void 0}=e;return _.$$set=l=>{r(6,e=be(be({},e),Be(l))),"data"in l&&r(0,a=l.data),"emptySet"in l&&r(1,n=l.emptySet),"emptyMessage"in l&&r(2,i=l.emptyMessage)},_.$$.update=()=>{_.$$.dirty&1&&r(3,o=(a==null?void 0:a.hash)===s),r(4,t=Object.fromEntries(Object.entries(e).filter(([,l])=>l!==void 0)))},e=Be(e),[a,n,i,o,t]}class ys extends Le{constructor(e){super(),he(this,e,fs,gs,Te,{data:0,emptySet:1,emptyMessage:2})}}function Es(_){let e,r,t;return{c(){e=M("span"),r=Wt("svg"),t=Wt("path"),this.h()},l(a){e=I(a,"SPAN",{"aria-expanded":!0,class:!0});var s=Z(e);r=jt(s,"svg",{viewBox:!0,width:!0,height:!0,class:!0});var o=Z(r);t=jt(o,"path",{fill:!0,"fill-rule":!0,d:!0}),Z(t).forEach(m),o.forEach(m),s.forEach(m),this.h()},h(){E(t,"fill",_[3]),E(t,"fill-rule","evenodd"),E(t,"d","M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"),E(r,"viewBox","0 0 16 16"),E(r,"width",_[1]),E(r,"height",_[1]),E(r,"class","svelte-lqleyo"),E(e,"aria-expanded",_[0]),E(e,"class","svelte-lqleyo")},m(a,s){N(a,e,s),W(e,r),W(r,t)},p(a,[s]){s&8&&E(t,"fill",a[3]),s&2&&E(r,"width",a[1]),s&2&&E(r,"height",a[1]),s&1&&E(e,"aria-expanded",a[0])},i:ne,o:ne,d(a){a&&m(e)}}}function bs(_,e,r){let t,a,s=ne,o=()=>(s(),s=It(t,u=>r(3,a=u)),t);_.$$.on_destroy.push(()=>s());const{resolveColor:n}=yt();let{toggled:i=!1}=e,{color:l="base-content"}=e,{size:p=10}=e;return _.$$set=u=>{"toggled"in u&&r(0,i=u.toggled),"color"in u&&r(4,l=u.color),"size"in u&&r(1,p=u.size)},_.$$.update=()=>{_.$$.dirty&16&&o(r(2,t=n(l)))},[i,p,t,a,l]}class Gr extends Le{constructor(e){super(),he(this,e,bs,Es,Te,{toggled:0,color:4,size:1})}}function ar(_,e,r){const t=_.slice();return t[2]=e[r],t}function sr(_){let e;return{c(){e=M("br"),this.h()},l(r){e=I(r,"BR",{_ignore:!0}),this.h()},h(){E(e,"_ignore",_[2])},m(r,t){N(r,e,t)},p:ne,d(r){r&&m(e)}}}function vs(_){let e,r=xe(_[0]),t=[];for(let a=0;a<r.length;a+=1)t[a]=sr(ar(_,r,a));return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=Ee()},l(a){for(let s=0;s<t.length;s+=1)t[s].l(a);e=Ee()},m(a,s){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(a,s);N(a,e,s)},p(a,[s]){if(s&1){r=xe(a[0]);let o;for(o=0;o<r.length;o+=1){const n=ar(a,r,o);t[o]?t[o].p(n,s):(t[o]=sr(n),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=r.length}},i:ne,o:ne,d(a){a&&m(e),rt(t,a)}}}function Ns(_,e,r){let{lines:t=1}=e,a=Array.from({length:t});return _.$$set=s=>{"lines"in s&&r(1,t=s.lines)},[a,t]}class Ts extends Le{constructor(e){super(),he(this,e,Ns,vs,Te,{lines:1})}}function _r(_,e,r){const t=_.slice();return t[12]=e[r],t[14]=r,t}function or(_,e,r){const t=_.slice();return t[15]=e[r],t[17]=r,t}function nr(_,e,r){const t=_.slice();return t[15]=e[r],t}function ir(_,e,r){const t=_.slice();return t[15]=e[r],t}function lr(_){let e,r=_[15].id+"",t,a,s,o;return{c(){e=M("th"),t=oe(r),this.h()},l(n){e=I(n,"TH",{class:!0,style:!0,evidencetype:!0,evidencetypefidelity:!0});var i=Z(e);t=_e(i,r),i.forEach(m),this.h()},h(){var n,i;E(e,"class",a="py-0 px-2 font-medium "+_[15].type+" svelte-ghf30y"),Ne(e,"width",_[6]+"%"),E(e,"evidencetype",s=((n=_[15].evidenceColumnType)==null?void 0:n.evidenceType)||"unavailable"),E(e,"evidencetypefidelity",o=((i=_[15].evidenceColumnType)==null?void 0:i.typeFidelity)||"unavailable")},m(n,i){N(n,e,i),W(e,t)},p(n,i){var l,p;i&8&&r!==(r=n[15].id+"")&&de(t,r),i&8&&a!==(a="py-0 px-2 font-medium "+n[15].type+" svelte-ghf30y")&&E(e,"class",a),i&64&&Ne(e,"width",n[6]+"%"),i&8&&s!==(s=((l=n[15].evidenceColumnType)==null?void 0:l.evidenceType)||"unavailable")&&E(e,"evidencetype",s),i&8&&o!==(o=((p=n[15].evidenceColumnType)==null?void 0:p.typeFidelity)||"unavailable")&&E(e,"evidencetypefidelity",o)},d(n){n&&m(e)}}}function pr(_){let e,r=_[15].type+"",t,a,s,o;return{c(){e=M("th"),t=oe(r),this.h()},l(n){e=I(n,"TH",{class:!0,style:!0,evidencetype:!0,evidencetypefidelity:!0});var i=Z(e);t=_e(i,r),i.forEach(m),this.h()},h(){var n,i;E(e,"class",a=_[15].type+" type-indicator text-base-content-muted font-normal py-0 px-2 svelte-ghf30y"),Ne(e,"width",_[6]+"%"),E(e,"evidencetype",s=((n=_[15].evidenceColumnType)==null?void 0:n.evidenceType)||"unavailable"),E(e,"evidencetypefidelity",o=((i=_[15].evidenceColumnType)==null?void 0:i.typeFidelity)||"unavailable")},m(n,i){N(n,e,i),W(e,t)},p(n,i){var l,p;i&8&&r!==(r=n[15].type+"")&&de(t,r),i&8&&a!==(a=n[15].type+" type-indicator text-base-content-muted font-normal py-0 px-2 svelte-ghf30y")&&E(e,"class",a),i&64&&Ne(e,"width",n[6]+"%"),i&8&&s!==(s=((l=n[15].evidenceColumnType)==null?void 0:l.evidenceType)||"unavailable")&&E(e,"evidencetype",s),i&8&&o!==(o=((p=n[15].evidenceColumnType)==null?void 0:p.typeFidelity)||"unavailable")&&E(e,"evidencetypefidelity",o)},d(n){n&&m(e)}}}function Ls(_){let e=(_[2]+_[14]+1).toLocaleString()+"",r;return{c(){r=oe(e)},l(t){r=_e(t,e)},m(t,a){N(t,r,a)},p(t,a){a&4&&e!==(e=(t[2]+t[14]+1).toLocaleString()+"")&&de(r,e)},d(t){t&&m(r)}}}function hs(_){let e=(_[2]+_[14]+1).toLocaleString()+"",r;return{c(){r=oe(e)},l(t){r=_e(t,e)},m(t,a){N(t,r,a)},p(t,a){a&4&&e!==(e=(t[2]+t[14]+1).toLocaleString()+"")&&de(r,e)},d(t){t&&m(r)}}}function Cs(_){let e,r=(_[12][_[15].id]||"Ø")+"",t;return{c(){e=M("td"),t=oe(r),this.h()},l(a){e=I(a,"TD",{class:!0,style:!0});var s=Z(e);t=_e(s,r),s.forEach(m),this.h()},h(){E(e,"class","other svelte-ghf30y"),Ne(e,"width",_[6]+"%")},m(a,s){N(a,e,s),W(e,t)},p(a,s){s&40&&r!==(r=(a[12][a[15].id]||"Ø")+"")&&de(t,r),s&64&&Ne(e,"width",a[6]+"%")},d(a){a&&m(e)}}}function Ds(_){let e,r,t=(_[12][_[15].id]??"Ø")+"",a,s;return{c(){e=M("td"),r=M("div"),a=oe(t),this.h()},l(o){e=I(o,"TD",{class:!0,style:!0,title:!0});var n=Z(e);r=I(n,"DIV",{class:!0});var i=Z(r);a=_e(i,t),i.forEach(m),n.forEach(m),this.h()},h(){E(r,"class","svelte-ghf30y"),E(e,"class","boolean svelte-ghf30y"),Ne(e,"width",_[6]+"%"),E(e,"title",s=_[12][_[15].id])},m(o,n){N(o,e,n),W(e,r),W(r,a)},p(o,n){n&40&&t!==(t=(o[12][o[15].id]??"Ø")+"")&&de(a,t),n&64&&Ne(e,"width",o[6]+"%"),n&40&&s!==(s=o[12][o[15].id])&&E(e,"title",s)},d(o){o&&m(e)}}}function ks(_){let e,r,t=(_[12][_[15].id]||"Ø")+"",a,s;return{c(){e=M("td"),r=M("div"),a=oe(t),this.h()},l(o){e=I(o,"TD",{class:!0,style:!0,title:!0});var n=Z(e);r=I(n,"DIV",{class:!0});var i=Z(r);a=_e(i,t),i.forEach(m),n.forEach(m),this.h()},h(){E(r,"class","svelte-ghf30y"),E(e,"class","string svelte-ghf30y"),Ne(e,"width",_[6]+"%"),E(e,"title",s=_[12][_[15].id])},m(o,n){N(o,e,n),W(e,r),W(r,a)},p(o,n){n&40&&t!==(t=(o[12][o[15].id]||"Ø")+"")&&de(a,t),n&64&&Ne(e,"width",o[6]+"%"),n&40&&s!==(s=o[12][o[15].id])&&E(e,"title",s)},d(o){o&&m(e)}}}function Os(_){let e,r,t=De(_[12][_[15].id],_[3][_[17]].format,_[3][_[17]].columnUnitSummary)+"",a,s;return{c(){e=M("td"),r=M("div"),a=oe(t),this.h()},l(o){e=I(o,"TD",{class:!0,style:!0,title:!0});var n=Z(e);r=I(n,"DIV",{class:!0});var i=Z(r);a=_e(i,t),i.forEach(m),n.forEach(m),this.h()},h(){E(r,"class","svelte-ghf30y"),E(e,"class","string svelte-ghf30y"),Ne(e,"width",_[6]+"%"),E(e,"title",s=De(_[12][_[15].id],_[3][_[17]].format,_[3][_[17]].columnUnitSummary))},m(o,n){N(o,e,n),W(e,r),W(r,a)},p(o,n){n&40&&t!==(t=De(o[12][o[15].id],o[3][o[17]].format,o[3][o[17]].columnUnitSummary)+"")&&de(a,t),n&64&&Ne(e,"width",o[6]+"%"),n&40&&s!==(s=De(o[12][o[15].id],o[3][o[17]].format,o[3][o[17]].columnUnitSummary))&&E(e,"title",s)},d(o){o&&m(e)}}}function xs(_){let e,r=De(_[12][_[15].id],_[3][_[17]].format,_[3][_[17]].columnUnitSummary)+"",t;return{c(){e=M("td"),t=oe(r),this.h()},l(a){e=I(a,"TD",{class:!0,style:!0});var s=Z(e);t=_e(s,r),s.forEach(m),this.h()},h(){E(e,"class","number svelte-ghf30y"),Ne(e,"width",_[6]+"%")},m(a,s){N(a,e,s),W(e,t)},p(a,s){s&40&&r!==(r=De(a[12][a[15].id],a[3][a[17]].format,a[3][a[17]].columnUnitSummary)+"")&&de(t,r),s&64&&Ne(e,"width",a[6]+"%")},d(a){a&&m(e)}}}function Us(_){let e,r="Ø",t,a;return{c(){e=M("td"),t=oe(r),this.h()},l(s){e=I(s,"TD",{class:!0,style:!0});var o=Z(e);t=_e(o,r),o.forEach(m),this.h()},h(){E(e,"class",a="text-base-content-muted "+_[3][_[17]].type+" svelte-ghf30y"),Ne(e,"width",_[6]+"%")},m(s,o){N(s,e,o),W(e,t)},p(s,o){o&8&&a!==(a="text-base-content-muted "+s[3][s[17]].type+" svelte-ghf30y")&&E(e,"class",a),o&64&&Ne(e,"width",s[6]+"%")},d(s){s&&m(e)}}}function ur(_){let e;function r(s,o){return s[12][s[15].id]==null?Us:s[3][s[17]].type==="number"?xs:s[3][s[17]].type==="date"?Os:s[3][s[17]].type==="string"?ks:s[3][s[17]].type==="boolean"?Ds:Cs}let t=r(_),a=t(_);return{c(){a.c(),e=Ee()},l(s){a.l(s),e=Ee()},m(s,o){a.m(s,o),N(s,e,o)},p(s,o){t===(t=r(s))&&a?a.p(s,o):(a.d(1),a=t(s),a&&(a.c(),a.m(e.parentNode,e)))},d(s){s&&m(e),a.d(s)}}}function mr(_){let e,r,t,a;function s(p,u){return p[14]===0?hs:Ls}let n=s(_)(_),i=xe(_[3]),l=[];for(let p=0;p<i.length;p+=1)l[p]=ur(or(_,i,p));return{c(){e=M("tr"),r=M("td"),n.c(),t=V();for(let p=0;p<l.length;p+=1)l[p].c();a=V(),this.h()},l(p){e=I(p,"TR",{});var u=Z(e);r=I(u,"TD",{class:!0,style:!0});var A=Z(r);n.l(A),A.forEach(m),t=z(u);for(let T=0;T<l.length;T+=1)l[T].l(u);a=z(u),u.forEach(m),this.h()},h(){E(r,"class","index text-base-content-muted svelte-ghf30y"),Ne(r,"width","10%")},m(p,u){N(p,e,u),W(e,r),n.m(r,null),W(e,t);for(let A=0;A<l.length;A+=1)l[A]&&l[A].m(e,null);W(e,a)},p(p,u){if(n.p(p,u),u&104){i=xe(p[3]);let A;for(A=0;A<i.length;A+=1){const T=or(p,i,A);l[A]?l[A].p(T,u):(l[A]=ur(T),l[A].c(),l[A].m(e,a))}for(;A<l.length;A+=1)l[A].d(1);l.length=i.length}},d(p){p&&m(e),n.d(),rt(l,p)}}}function Ar(_){let e,r,t,a,s=(_[2]+Ze).toLocaleString()+"",o,n,i=(_[4]+Ze).toLocaleString()+"",l,p,u;return{c(){e=M("div"),r=M("input"),t=V(),a=M("span"),o=oe(s),n=oe(" of "),l=oe(i),this.h()},l(A){e=I(A,"DIV",{class:!0});var T=Z(e);r=I(T,"INPUT",{type:!0,max:!0,step:!0,class:!0}),t=z(T),a=I(T,"SPAN",{class:!0});var C=Z(a);o=_e(C,s),n=_e(C," of "),l=_e(C,i),C.forEach(m),T.forEach(m),this.h()},h(){E(r,"type","range"),E(r,"max",_[4]),E(r,"step","1"),E(r,"class","slider bg-info/30 hover:bg-info/40 transition-colors svelte-ghf30y"),E(a,"class","text-xs svelte-ghf30y"),E(e,"class","pagination svelte-ghf30y")},m(A,T){N(A,e,T),W(e,r),Ft(r,_[2]),W(e,t),W(e,a),W(a,o),W(a,n),W(a,l),p||(u=[we(r,"change",_[9]),we(r,"input",_[9]),we(r,"input",_[7])],p=!0)},p(A,T){T&16&&E(r,"max",A[4]),T&4&&Ft(r,A[2]),T&4&&s!==(s=(A[2]+Ze).toLocaleString()+"")&&de(o,s),T&16&&i!==(i=(A[4]+Ze).toLocaleString()+"")&&de(l,i)},d(A){A&&m(e),p=!1,Bt(u)}}}function Bs(_){let e,r,t,a,s,o,n,i,l,p,u,A,T,C,c,R,F,k,H,B,x,L,v,f,h,U,d=xe(_[3]),D=[];for(let y=0;y<d.length;y+=1)D[y]=lr(ir(_,d,y));let w=xe(_[3]),K=[];for(let y=0;y<w.length;y+=1)K[y]=pr(nr(_,w,y));let O=xe(_[5]),$=[];for(let y=0;y<O.length;y+=1)$[y]=mr(_r(_,O,y));let re=_[4]>0&&Ar(_);return L=new ca({props:{class:"download-button",data:_[1],queryID:_[0],display:!0}}),{c(){e=M("div"),r=M("div"),t=M("table"),a=M("thead"),s=M("tr"),o=M("th"),n=V();for(let y=0;y<D.length;y+=1)D[y].c();i=V(),l=M("tr"),p=V(),u=M("tr"),A=M("th"),T=V();for(let y=0;y<K.length;y+=1)K[y].c();C=V(),c=M("tr"),R=V(),F=M("tbody");for(let y=0;y<$.length;y+=1)$[y].c();H=V(),re&&re.c(),B=V(),x=M("div"),J(L.$$.fragment),this.h()},l(y){e=I(y,"DIV",{class:!0});var X=Z(e);r=I(X,"DIV",{class:!0});var G=Z(r);t=I(G,"TABLE",{class:!0});var P=Z(t);a=I(P,"THEAD",{});var ae=Z(a);s=I(ae,"TR",{});var Ae=Z(s);o=I(Ae,"TH",{class:!0,style:!0}),Z(o).forEach(m),n=z(Ae);for(let ee=0;ee<D.length;ee+=1)D[ee].l(Ae);i=z(Ae),Ae.forEach(m),l=I(ae,"TR",{}),Z(l).forEach(m),p=z(ae),u=I(ae,"TR",{class:!0});var ie=Z(u);A=I(ie,"TH",{class:!0,style:!0}),Z(A).forEach(m),T=z(ie);for(let ee=0;ee<K.length;ee+=1)K[ee].l(ie);C=z(ie),ie.forEach(m),c=I(ae,"TR",{}),Z(c).forEach(m),ae.forEach(m),R=z(P),F=I(P,"TBODY",{});var se=Z(F);for(let ee=0;ee<$.length;ee+=1)$[ee].l(se);se.forEach(m),P.forEach(m),G.forEach(m),H=z(X),re&&re.l(X),B=z(X),x=I(X,"DIV",{class:!0});var te=Z(x);Q(L.$$.fragment,te),te.forEach(m),X.forEach(m),this.h()},h(){E(o,"class","py-0 px-2 font-medium index text-base-content-muted svelte-ghf30y"),Ne(o,"width","10%"),E(A,"class","py-0 px-2 index type-indicator text-base-content-muted font-normal svelte-ghf30y"),Ne(A,"width","10%"),E(u,"class","type-indicator svelte-ghf30y"),E(t,"class","text-xs svelte-ghf30y"),E(r,"class","scrollbox pretty-scrollbar svelte-ghf30y"),E(x,"class","footer svelte-ghf30y"),E(e,"class","results-pane py-1 svelte-ghf30y")},m(y,X){N(y,e,X),W(e,r),W(r,t),W(t,a),W(a,s),W(s,o),W(s,n);for(let G=0;G<D.length;G+=1)D[G]&&D[G].m(s,null);W(s,i),W(a,l),W(a,p),W(a,u),W(u,A),W(u,T);for(let G=0;G<K.length;G+=1)K[G]&&K[G].m(u,null);W(u,C),W(a,c),W(t,R),W(t,F);for(let G=0;G<$.length;G+=1)$[G]&&$[G].m(F,null);W(e,H),re&&re.m(e,null),W(e,B),W(e,x),q(L,x,null),f=!0,h||(U=we(F,"wheel",_[8]),h=!0)},p(y,[X]){if(X&72){d=xe(y[3]);let P;for(P=0;P<d.length;P+=1){const ae=ir(y,d,P);D[P]?D[P].p(ae,X):(D[P]=lr(ae),D[P].c(),D[P].m(s,i))}for(;P<D.length;P+=1)D[P].d(1);D.length=d.length}if(X&72){w=xe(y[3]);let P;for(P=0;P<w.length;P+=1){const ae=nr(y,w,P);K[P]?K[P].p(ae,X):(K[P]=pr(ae),K[P].c(),K[P].m(u,C))}for(;P<K.length;P+=1)K[P].d(1);K.length=w.length}if(X&108){O=xe(y[5]);let P;for(P=0;P<O.length;P+=1){const ae=_r(y,O,P);$[P]?$[P].p(ae,X):($[P]=mr(ae),$[P].c(),$[P].m(F,null))}for(;P<$.length;P+=1)$[P].d(1);$.length=O.length}y[4]>0?re?re.p(y,X):(re=Ar(y),re.c(),re.m(e,B)):re&&(re.d(1),re=null);const G={};X&2&&(G.data=y[1]),X&1&&(G.queryID=y[0]),L.$set(G)},i(y){f||(y&&(k||st(()=>{k=Hr(t,Rr,{}),k.start()})),S(L.$$.fragment,y),y&&st(()=>{f&&(v||(v=Ge(e,Xe,{},!0)),v.run(1))}),f=!0)},o(y){b(L.$$.fragment,y),y&&(v||(v=Ge(e,Xe,{},!1)),v.run(0)),f=!1},d(y){y&&m(e),rt(D,y),rt(K,y),rt($,y),re&&re.d(),Y(L),y&&v&&v.end(),h=!1,U()}}}let Ze=5;function Hs(_,e,r){let t,a,s,o,{queryID:n}=e,{data:i}=e,l=0,p;function u(){p=i.slice(l,l+Ze),r(5,o=p)}const A=Sa(c=>{r(2,l=Math.min(Math.max(0,l+Math.floor(c.deltaY/Math.abs(c.deltaY))),s)),u()},60);function T(c){if(Math.abs(c.deltaX)>=Math.abs(c.deltaY))return;const R=c.deltaY<0&&l===0,F=c.deltaY>0&&l===s;R||F||(c.preventDefault(),A(c))}function C(){l=Kr(this.value),r(2,l)}return _.$$set=c=>{"queryID"in c&&r(0,n=c.queryID),"data"in c&&r(1,i=c.data)},_.$$.update=()=>{_.$$.dirty&2&&r(3,t=wt(i,"array")),_.$$.dirty&8&&r(6,a=90/(t.length+1)),_.$$.dirty&2&&r(4,s=Math.max(i.length-Ze,0)),_.$$.dirty&6&&r(5,o=i.slice(l,l+Ze))},[n,i,l,t,s,o,a,u,T,C]}class Is extends Le{constructor(e){super(),he(this,e,Hs,Bs,Te,{queryID:0,data:1})}}const cr={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};function Ms(_){let e,r,t,a,s=zt.highlight(_[0],cr)+"",o;return{c(){e=M("pre"),r=oe("  "),t=M("code"),a=new qr(!1),o=oe(`
`),this.h()},l(n){e=I(n,"PRE",{class:!0});var i=Z(e);r=_e(i,"  "),t=I(i,"CODE",{class:!0});var l=Z(t);a=Yr(l,!1),l.forEach(m),o=_e(i,`
`),i.forEach(m),this.h()},h(){a.a=null,E(t,"class","language-sql svelte-re3fhx"),E(e,"class","text-xs max-h-56 overflow-auto pretty-scrollbar")},m(n,i){N(n,e,i),W(e,r),W(e,t),a.m(s,t),W(e,o)},p(n,[i]){i&1&&s!==(s=zt.highlight(n[0],cr)+"")&&a.p(s)},i:ne,o:ne,d(n){n&&m(e)}}}function Rs(_,e,r){let{code:t=""}=e;return _.$$set=a=>{"code"in a&&r(0,t=a.code)},[t]}class Xr extends Le{constructor(e){super(),he(this,e,Rs,Ms,Te,{code:0})}}function ws(_){let e,r="Compiled",t,a,s="Written",o,n;return{c(){e=M("button"),e.textContent=r,t=V(),a=M("button"),a.textContent=s,this.h()},l(i){e=I(i,"BUTTON",{class:!0,"data-svelte-h":!0}),je(e)!=="svelte-1vzm9jy"&&(e.textContent=r),t=z(i),a=I(i,"BUTTON",{class:!0,"data-svelte-h":!0}),je(a)!=="svelte-qu81ez"&&(a.textContent=s),this.h()},h(){E(e,"class","off svelte-ska6l4"),E(a,"class","text-info bg-info/10 border border-info svelte-ska6l4")},m(i,l){N(i,e,l),N(i,t,l),N(i,a,l),o||(n=we(e,"click",_[1]),o=!0)},p:ne,d(i){i&&(m(e),m(t),m(a)),o=!1,n()}}}function js(_){let e,r="Compiled",t,a,s="Written",o,n;return{c(){e=M("button"),e.textContent=r,t=V(),a=M("button"),a.textContent=s,this.h()},l(i){e=I(i,"BUTTON",{class:!0,"data-svelte-h":!0}),je(e)!=="svelte-wrfleh"&&(e.textContent=r),t=z(i),a=I(i,"BUTTON",{class:!0,"data-svelte-h":!0}),je(a)!=="svelte-v36xno"&&(a.textContent=s),this.h()},h(){E(e,"class","text-info bg-info/10 border border-info svelte-ska6l4"),E(a,"class","off svelte-ska6l4")},m(i,l){N(i,e,l),N(i,t,l),N(i,a,l),o||(n=we(a,"click",_[1]),o=!0)},p:ne,d(i){i&&(m(e),m(t),m(a)),o=!1,n()}}}function Ws(_){let e,r,t;function a(n,i){return n[0]?js:ws}let s=a(_),o=s(_);return{c(){e=M("div"),o.c(),this.h()},l(n){e=I(n,"DIV",{class:!0});var i=Z(e);o.l(i),i.forEach(m),this.h()},h(){E(e,"class","toggle svelte-ska6l4")},m(n,i){N(n,e,i),o.m(e,null),t=!0},p(n,[i]){s===(s=a(n))&&o?o.p(n,i):(o.d(1),o=s(n),o&&(o.c(),o.m(e,null)))},i(n){t||(n&&st(()=>{t&&(r||(r=Ge(e,Xe,{},!0)),r.run(1))}),t=!0)},o(n){n&&(r||(r=Ge(e,Xe,{},!1)),r.run(0)),t=!1},d(n){n&&m(e),o.d(),n&&r&&r.end()}}}function Fs(_,e,r){let{showCompiled:t}=e;const a=function(){r(0,t=!t)};return _.$$set=s=>{"showCompiled"in s&&r(0,t=s.showCompiled)},[t,a]}class Ps extends Le{constructor(e){super(),he(this,e,Fs,Ws,Te,{showCompiled:0})}}function Sr(_){let e,r,t,a,s,o,n,i,l,p,u,A,T,C,c,R,F;a=new Gr({props:{toggled:_[10]}});let k=_[10]&&_[4]&&gr(_),H=_[10]&&dr(_);const B=[Ys,Ks,Vs,zs],x=[];function L(f,h){return f[6]?0:f[8]?1:f[2].loading?2:3}u=L(_),A=x[u]=B[u](_);let v=_[8]>0&&!_[6]&&_[9]&&fr(_);return{c(){e=M("div"),r=M("div"),t=M("button"),J(a.$$.fragment),s=V(),o=oe(_[0]),n=V(),k&&k.c(),i=V(),H&&H.c(),l=V(),p=M("button"),A.c(),T=V(),v&&v.c(),this.h()},l(f){e=I(f,"DIV",{class:!0});var h=Z(e);r=I(h,"DIV",{class:!0});var U=Z(r);t=I(U,"BUTTON",{type:!0,"aria-label":!0,class:!0});var d=Z(t);Q(a.$$.fragment,d),s=z(d),o=_e(d,_[0]),d.forEach(m),n=z(U),k&&k.l(U),i=z(U),H&&H.l(U),U.forEach(m),l=z(h),p=I(h,"BUTTON",{type:!0,"aria-label":!0,class:!0});var D=Z(p);A.l(D),D.forEach(m),T=z(h),v&&v.l(h),h.forEach(m),this.h()},h(){E(t,"type","button"),E(t,"aria-label","show-sql"),E(t,"class","title svelte-1ursthx"),E(r,"class","container-a svelte-1ursthx"),E(p,"type","button"),E(p,"aria-label","view-query"),E(p,"class",Qr("status-bar")+" svelte-1ursthx"),Me(p,"error",_[6]),Me(p,"success",!_[6]),Me(p,"open",_[9]),Me(p,"closed",!_[9]),E(e,"class","scrollbox my-3 svelte-1ursthx")},m(f,h){N(f,e,h),W(e,r),W(r,t),q(a,t,null),W(t,s),W(t,o),W(r,n),k&&k.m(r,null),W(r,i),H&&H.m(r,null),W(e,l),W(e,p),x[u].m(p,null),W(e,T),v&&v.m(e,null),c=!0,R||(F=[we(t,"click",_[15]),we(p,"click",_[16])],R=!0)},p(f,h){const U={};h&1024&&(U.toggled=f[10]),a.$set(U),(!c||h&1)&&de(o,f[0]),f[10]&&f[4]?k?(k.p(f,h),h&1040&&S(k,1)):(k=gr(f),k.c(),S(k,1),k.m(r,i)):k&&(le(),b(k,1,1,()=>{k=null}),pe()),f[10]?H?(H.p(f,h),h&1024&&S(H,1)):(H=dr(f),H.c(),S(H,1),H.m(r,null)):H&&(le(),b(H,1,1,()=>{H=null}),pe());let d=u;u=L(f),u===d?x[u].p(f,h):(le(),b(x[d],1,1,()=>{x[d]=null}),pe(),A=x[u],A?A.p(f,h):(A=x[u]=B[u](f),A.c()),S(A,1),A.m(p,null)),(!c||h&64)&&Me(p,"error",f[6]),(!c||h&64)&&Me(p,"success",!f[6]),(!c||h&512)&&Me(p,"open",f[9]),(!c||h&512)&&Me(p,"closed",!f[9]),f[8]>0&&!f[6]&&f[9]?v?(v.p(f,h),h&832&&S(v,1)):(v=fr(f),v.c(),S(v,1),v.m(e,null)):v&&(le(),b(v,1,1,()=>{v=null}),pe())},i(f){c||(S(a.$$.fragment,f),S(k),S(H),S(A),S(v),f&&st(()=>{c&&(C||(C=Ge(e,Xe,{},!0)),C.run(1))}),c=!0)},o(f){b(a.$$.fragment,f),b(k),b(H),b(A),b(v),f&&(C||(C=Ge(e,Xe,{},!1)),C.run(0)),c=!1},d(f){f&&m(e),Y(a),k&&k.d(),H&&H.d(),x[u].d(),v&&v.d(),f&&C&&C.end(),R=!1,Bt(F)}}}function gr(_){let e,r,t;function a(o){_[20](o)}let s={};return _[5]!==void 0&&(s.showCompiled=_[5]),e=new Ps({props:s}),ot.push(()=>Mt(e,"showCompiled",a)),{c(){J(e.$$.fragment)},l(o){Q(e.$$.fragment,o)},m(o,n){q(e,o,n),t=!0},p(o,n){const i={};!r&&n&32&&(r=!0,i.showCompiled=o[5],Ht(()=>r=!1)),e.$set(i)},i(o){t||(S(e.$$.fragment,o),t=!0)},o(o){b(e.$$.fragment,o),t=!1},d(o){Y(e,o)}}}function dr(_){let e,r,t,a,s;const o=[Xs,Gs],n=[];function i(l,p){return l[5]?0:1}return r=i(_),t=n[r]=o[r](_),{c(){e=M("div"),t.c(),this.h()},l(l){e=I(l,"DIV",{class:!0});var p=Z(e);t.l(p),p.forEach(m),this.h()},h(){E(e,"class","code-container svelte-1ursthx")},m(l,p){N(l,e,p),n[r].m(e,null),s=!0},p(l,p){let u=r;r=i(l),r===u?n[r].p(l,p):(le(),b(n[u],1,1,()=>{n[u]=null}),pe(),t=n[r],t?t.p(l,p):(t=n[r]=o[r](l),t.c()),S(t,1),t.m(e,null))},i(l){s||(S(t),l&&st(()=>{s&&(a||(a=Ge(e,Xe,{},!0)),a.run(1))}),s=!0)},o(l){b(t),l&&(a||(a=Ge(e,Xe,{},!1)),a.run(0)),s=!1},d(l){l&&m(e),n[r].d(),l&&a&&a.end()}}}function Gs(_){let e,r;return e=new Xr({props:{code:_[3]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a&8&&(s.code=t[3]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Xs(_){let e,r;return e=new Xr({props:{code:_[1].originalText}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a&2&&(s.code=t[1].originalText),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function zs(_){let e;return{c(){e=oe("ran successfully but no data was returned")},l(r){e=_e(r,"ran successfully but no data was returned")},m(r,t){N(r,e,t)},p:ne,i:ne,o:ne,d(r){r&&m(e)}}}function Vs(_){let e;return{c(){e=oe("loading...")},l(r){e=_e(r,"loading...")},m(r,t){N(r,e,t)},p:ne,i:ne,o:ne,d(r){r&&m(e)}}}function Ks(_){let e,r,t=_[8].toLocaleString()+"",a,s,o=_[8]>1?"records":"record",n,i,l=_[7].toLocaleString()+"",p,u,A=_[7]>1?"properties":"property",T,C;return e=new Gr({props:{toggled:_[9],color:_[12].colors.info}}),{c(){J(e.$$.fragment),r=V(),a=oe(t),s=V(),n=oe(o),i=oe(" with "),p=oe(l),u=V(),T=oe(A)},l(c){Q(e.$$.fragment,c),r=z(c),a=_e(c,t),s=z(c),n=_e(c,o),i=_e(c," with "),p=_e(c,l),u=z(c),T=_e(c,A)},m(c,R){q(e,c,R),N(c,r,R),N(c,a,R),N(c,s,R),N(c,n,R),N(c,i,R),N(c,p,R),N(c,u,R),N(c,T,R),C=!0},p(c,R){const F={};R&512&&(F.toggled=c[9]),R&4096&&(F.color=c[12].colors.info),e.$set(F),(!C||R&256)&&t!==(t=c[8].toLocaleString()+"")&&de(a,t),(!C||R&256)&&o!==(o=c[8]>1?"records":"record")&&de(n,o),(!C||R&128)&&l!==(l=c[7].toLocaleString()+"")&&de(p,l),(!C||R&128)&&A!==(A=c[7]>1?"properties":"property")&&de(T,A)},i(c){C||(S(e.$$.fragment,c),C=!0)},o(c){b(e.$$.fragment,c),C=!1},d(c){c&&(m(r),m(a),m(s),m(n),m(i),m(p),m(u),m(T)),Y(e,c)}}}function Ys(_){let e=_[6].message+"",r;return{c(){r=oe(e)},l(t){r=_e(t,e)},m(t,a){N(t,r,a)},p(t,a){a&64&&e!==(e=t[6].message+"")&&de(r,e)},i:ne,o:ne,d(t){t&&m(r)}}}function fr(_){let e,r;return e=new Is({props:{data:_[1],queryID:_[0]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a&2&&(s.data=t[1]),a&1&&(s.queryID=t[0]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function qs(_){let e,r,t,a=_[11]&&Sr(_);return{c(){e=M("div"),a&&a.c(),this.h()},l(s){e=I(s,"DIV",{class:!0});var o=Z(e);a&&a.l(o),o.forEach(m),this.h()},h(){E(e,"class","over-container svelte-1ursthx")},m(s,o){N(s,e,o),a&&a.m(e,null),t=!0},p(s,[o]){s[11]?a?(a.p(s,o),o&2048&&S(a,1)):(a=Sr(s),a.c(),S(a,1),a.m(e,null)):a&&(le(),b(a,1,1,()=>{a=null}),pe())},i(s){t||(S(a),s&&(r||st(()=>{r=Hr(e,Rr,{}),r.start()})),t=!0)},o(s){b(a),t=!1},d(s){s&&m(e),a&&a.d()}}}function Qs(_,e,r){let t,a,s,o,n=ne,i=()=>(n(),n=It(c,U=>r(2,o=U)),c),l,p,u,A,T;Ue(_,jr,U=>r(19,u=U)),Ue(_,ga,U=>r(11,A=U)),_.$$.on_destroy.push(()=>n());let{queryID:C}=e,{queryResult:c}=e;i();let R=Vt("showSQL_".concat(C),!1);Ue(_,R,U=>r(10,p=U));let F=Vt(`showResults_${C}`);Ue(_,F,U=>r(9,l=U));const k=function(){gt(R,p=!p,p)},H=function(){!v&&o.length>0&&gt(F,l=!l,l)};let B,x,L=!0,v;const{theme:f}=yt();Ue(_,f,U=>r(12,T=U));function h(U){L=U,r(5,L)}return _.$$set=U=>{"queryID"in U&&r(0,C=U.queryID),"queryResult"in U&&i(r(1,c=U.queryResult))},_.$$.update=()=>{if(_.$$.dirty&524288&&r(18,t=u.data.evidencemeta.queries),_.$$.dirty&4&&(o?r(6,v=o.error):r(6,v=new Error("queryResult is undefined"))),_.$$.dirty&4&&r(8,a=(o==null?void 0:o.length)??0),_.$$.dirty&4&&r(7,s=o.columns.length??(o==null?void 0:o._evidenceColumnTypes.length)??0),_.$$.dirty&262145){let U=t==null?void 0:t.find(d=>d.id===C);U&&(r(3,B=U.inputQueryString),r(4,x=U.compiled&&U.compileError===void 0))}},[C,c,o,B,x,L,v,s,a,l,p,A,T,R,F,k,H,f,t,u,h]}class We extends Le{constructor(e){super(),he(this,e,Qs,qs,Te,{queryID:0,queryResult:1})}}function Js(_){let e,r;return e=new fa({props:{error:_[3]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a&8&&(s.error=t[3]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Zs(_){let e,r=De(_[2],_[4])+"",t,a,s,o=_[1]&&yr(_);return{c(){e=M("span"),t=oe(r),a=V(),o&&o.c(),this.h()},l(n){e=I(n,"SPAN",{style:!0});var i=Z(e);t=_e(i,r),a=z(i),o&&o.l(i),i.forEach(m),this.h()},h(){Ne(e,"color",_[5])},m(n,i){N(n,e,i),W(e,t),W(e,a),o&&o.m(e,null),s=!0},p(n,i){(!s||i&20)&&r!==(r=De(n[2],n[4])+"")&&de(t,r),n[1]?o?(o.p(n,i),i&2&&S(o,1)):(o=yr(n),o.c(),S(o,1),o.m(e,null)):o&&(le(),b(o,1,1,()=>{o=null}),pe()),(!s||i&32)&&Ne(e,"color",n[5])},i(n){s||(S(o),s=!0)},o(n){b(o),s=!1},d(n){n&&m(e),o&&o.d()}}}function $s(_){let e,r,t,a,s,o="Placeholder: no data currently referenced.";return{c(){e=M("span"),r=oe("["),t=oe(_[0]),a=oe("]"),s=M("span"),s.textContent=o,this.h()},l(n){e=I(n,"SPAN",{class:!0});var i=Z(e);r=_e(i,"["),t=_e(i,_[0]),a=_e(i,"]"),s=I(i,"SPAN",{class:!0,"data-svelte-h":!0}),je(s)!=="svelte-ddarzq"&&(s.textContent=o),i.forEach(m),this.h()},h(){E(s,"class","error-msg svelte-1mb9o01"),E(e,"class","placeholder svelte-1mb9o01")},m(n,i){N(n,e,i),W(e,r),W(e,t),W(e,a),W(e,s)},p(n,i){i&1&&de(t,n[0])},i:ne,o:ne,d(n){n&&m(e)}}}function yr(_){let e,r;return e=new Rt({props:{description:_[1]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a&2&&(s.description=t[1]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function e_(_){let e,r,t,a;const s=[$s,Zs,Js],o=[];function n(i,l){return i[0]?0:i[3]?2:1}return e=n(_),r=o[e]=s[e](_),{c(){r.c(),t=Ee()},l(i){r.l(i),t=Ee()},m(i,l){o[e].m(i,l),N(i,t,l),a=!0},p(i,[l]){let p=e;e=n(i),e===p?o[e].p(i,l):(le(),b(o[p],1,1,()=>{o[p]=null}),pe(),r=o[e],r?r.p(i,l):(r=o[e]=s[e](i),r.c()),S(r,1),r.m(t.parentNode,t))},i(i){a||(S(r),a=!0)},o(i){b(r),a=!1},d(i){i&&m(t),o[e].d(i)}}}function t_(_,e,r){let t,a,s=ne,o=()=>(s(),s=It(t,L=>r(15,a=L)),t);_.$$.on_destroy.push(()=>s());const{resolveColor:n}=yt();let{data:i=null}=e,{row:l=0}=e,{column:p=null}=e,{value:u=null}=e,{placeholder:A=null}=e,{description:T=void 0}=e,{fmt:C=void 0}=e,c,R,F,{color:k=void 0}=e,H="",{redNegatives:B=!1}=e,x;return _.$$set=L=>{"data"in L&&r(7,i=L.data),"row"in L&&r(10,l=L.row),"column"in L&&r(8,p=L.column),"value"in L&&r(11,u=L.value),"placeholder"in L&&r(0,A=L.placeholder),"description"in L&&r(1,T=L.description),"fmt"in L&&r(12,C=L.fmt),"color"in L&&r(13,k=L.color),"redNegatives"in L&&r(9,B=L.redNegatives)},_.$$.update=()=>{var L;if(_.$$.dirty&2304&&r(8,p=p??u),_.$$.dirty&21897)try{if(r(3,F=void 0),!A)if(i){if(typeof i=="string")throw Error(`Received: data=${i}, expected: data={${i}}`);if(Array.isArray(i)||r(7,i=[i]),isNaN(l))throw Error("row must be a number (row="+l+")");try{Object.keys(i[l])[0]}catch{throw Error("Row "+l+" does not exist in the dataset")}r(8,p=p??Object.keys(i[l])[0]),lt(i,[p]),r(14,x=wt(i,"array"));const v=x.filter(f=>{var h;return f.type==="date"&&!(((h=i[0])==null?void 0:h[f.id])instanceof Date)}).map(f=>f.id);for(let f=0;f<v.length;f++)r(7,i=da(i,v[f]));r(2,R=i[l][p]),r(14,x=x.filter(f=>f.id===p)),C?r(4,c=Ir(C,(L=x[0].format)==null?void 0:L.valueType)):r(4,c=x[0].format)}else throw Error("No data provided. If you referenced a query result, check that the name is correct.")}catch(v){if(r(3,F=v.message),console.error("\x1B[31m%s\x1B[0m",`Error in Value: ${F}`),wr)throw F}_.$$.dirty&2304&&u&&p&&console.warn('Both "value" and "column" were supplied as props to Value. "value" will be ignored.'),_.$$.dirty&8192&&o(r(6,t=n(k))),_.$$.dirty&512&&r(9,B=B==="true"||B===!0),_.$$.dirty&33284&&(B||a)&&(B&&R<0?r(5,H="rgb(220 38 38)"):a&&r(5,H=a))},[A,T,R,F,c,H,t,i,p,B,l,u,C,k,x,a]}class r_ extends Le{constructor(e){super(),he(this,e,t_,e_,Te,{data:7,row:10,column:8,value:11,placeholder:0,description:1,fmt:12,color:13,redNegatives:9})}}function a_(_){let e;const r=_[7].default,t=ze(r,_,_[8],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,s){t&&t.m(a,s),e=!0},p(a,s){t&&t.p&&(!e||s&256)&&Ve(t,r,a,a[8],e?Ye(r,a[8],s,null):Ke(a[8]),null)},i(a){e||(S(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function s_(_){let e,r;const t=[_[4],{data:ve.isQuery(_[11])?Array.from(_[11]):_[11]}];let a={$$slots:{default:[a_]},$$scope:{ctx:_}};for(let s=0;s<t.length;s+=1)a=be(a,t[s]);return e=new r_({props:a}),{c(){J(e.$$.fragment)},l(s){Q(e.$$.fragment,s)},m(s,o){q(e,s,o),r=!0},p(s,o){const n=o&2064?qe(t,[o&16&&pt(s[4]),o&2048&&{data:ve.isQuery(s[11])?Array.from(s[11]):s[11]}]):{};o&256&&(n.$$scope={dirty:o,ctx:s}),e.$set(n)},i(s){r||(S(e.$$.fragment,s),r=!0)},o(s){b(e.$$.fragment,s),r=!1},d(s){Y(e,s)}}}function Er(_){let e,r;return e=new ft({props:{emptyMessage:_[2],emptySet:_[1],chartType:i_,isInitial:_[3]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a&4&&(s.emptyMessage=t[2]),a&2&&(s.emptySet=t[1]),a&8&&(s.isInitial=t[3]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function __(_){let e,r,t=!_[4].placeholder&&Er(_);return{c(){e=M("span"),t&&t.c(),this.h()},l(a){e=I(a,"SPAN",{slot:!0});var s=Z(e);t&&t.l(s),s.forEach(m),this.h()},h(){E(e,"slot","empty")},m(a,s){N(a,e,s),t&&t.m(e,null),r=!0},p(a,s){a[4].placeholder?t&&(le(),b(t,1,1,()=>{t=null}),pe()):t?(t.p(a,s),s&16&&S(t,1)):(t=Er(a),t.c(),S(t,1),t.m(e,null))},i(a){r||(S(t),r=!0)},o(a){b(t),r=!1},d(a){a&&m(e),t&&t.d()}}}function o_(_){let e,r="Loading...";return{c(){e=M("span"),e.textContent=r,this.h()},l(t){e=I(t,"SPAN",{slot:!0,class:!0,"data-svelte-h":!0}),je(e)!=="svelte-89gxhc"&&(e.textContent=r),this.h()},h(){E(e,"slot","skeleton"),E(e,"class","text-base-content-muted")},m(t,a){N(t,e,a)},p:ne,d(t){t&&m(e)}}}function n_(_){let e,r;return e=new dt({props:{data:_[0],$$slots:{skeleton:[o_],empty:[__],default:[s_,({loaded:t})=>({11:t}),({loaded:t})=>t?2048:0]},$$scope:{ctx:_}}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,[a]){const s={};a&1&&(s.data=t[0]),a&2334&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}let i_="Value";function l_(_,e,r){let t,{$$slots:a={},$$scope:s}=e,{data:o}=e,{column:n}=e,{agg:i}=e;const l=ve.isQuery(o)?o.hash:void 0;let p=(o==null?void 0:o.hash)===l,{emptySet:u=void 0}=e,{emptyMessage:A=void 0}=e;return _.$$set=T=>{r(10,e=be(be({},e),Be(T))),"data"in T&&r(0,o=T.data),"column"in T&&r(5,n=T.column),"agg"in T&&r(6,i=T.agg),"emptySet"in T&&r(1,u=T.emptySet),"emptyMessage"in T&&r(2,A=T.emptyMessage),"$$scope"in T&&r(8,s=T.$$scope)},_.$$.update=()=>{_.$$.dirty&97&&i&&r(0,o=o.groupBy(void 0).agg({[i]:{col:n,as:n}})),_.$$.dirty&1&&r(3,p=(o==null?void 0:o.hash)===l),r(4,t=Object.fromEntries(Object.entries(e).filter(([,T])=>T!==void 0)))},e=Be(e),[o,u,A,p,t,n,i,a,s]}class ut extends Le{constructor(e){super(),he(this,e,l_,n_,Te,{data:0,column:5,agg:6,emptySet:1,emptyMessage:2})}}function p_(_){let e;const r=_[6].default,t=ze(r,_,_[7],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,s){t&&t.m(a,s),e=!0},p(a,s){t&&t.p&&(!e||s&128)&&Ve(t,r,a,a[7],e?Ye(r,a[7],s,null):Ke(a[7]),null)},i(a){e||(S(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function u_(_){let e,r;const t=[_[4],{data:ve.isQuery(_[10])?Array.from(_[10]):_[10]},{queryID:_[5]}];let a={$$slots:{default:[p_]},$$scope:{ctx:_}};for(let s=0;s<t.length;s+=1)a=be(a,t[s]);return e=new ya({props:a}),{c(){J(e.$$.fragment)},l(s){Q(e.$$.fragment,s)},m(s,o){q(e,s,o),r=!0},p(s,o){const n=o&1072?qe(t,[o&16&&pt(s[4]),o&1024&&{data:ve.isQuery(s[10])?Array.from(s[10]):s[10]},o&32&&{queryID:s[5]}]):{};o&128&&(n.$$scope={dirty:o,ctx:s}),e.$set(n)},i(s){r||(S(e.$$.fragment,s),r=!0)},o(s){b(e.$$.fragment,s),r=!1},d(s){Y(e,s)}}}function m_(_){let e,r;return e=new ft({props:{slot:"empty",emptyMessage:_[2],emptySet:_[1],chartType:_[4].chartType,isInitial:_[3]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a&4&&(s.emptyMessage=t[2]),a&2&&(s.emptySet=t[1]),a&16&&(s.chartType=t[4].chartType),a&8&&(s.isInitial=t[3]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function A_(_){let e,r;return e=new Ea({props:{slot:"error",title:S_,error:_[10].error.message}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a&1024&&(s.error=t[10].error.message),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function c_(_){let e,r;return e=new dt({props:{data:_[0],$$slots:{error:[A_,({loaded:t})=>({10:t}),({loaded:t})=>t?1024:0],empty:[m_],default:[u_,({loaded:t})=>({10:t}),({loaded:t})=>t?1024:0]},$$scope:{ctx:_}}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,[a]){const s={};a&1&&(s.data=t[0]),a&1182&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}let S_="Sparkline";function g_(_,e,r){let t,{$$slots:a={},$$scope:s}=e,{data:o}=e;const n=ve.isQuery(o)?o.hash:void 0;let i=(o==null?void 0:o.hash)===n,{emptySet:l=void 0}=e,{emptyMessage:p=void 0}=e,u=o==null?void 0:o.id;return _.$$set=A=>{r(9,e=be(be({},e),Be(A))),"data"in A&&r(0,o=A.data),"emptySet"in A&&r(1,l=A.emptySet),"emptyMessage"in A&&r(2,p=A.emptyMessage),"$$scope"in A&&r(7,s=A.$$scope)},_.$$.update=()=>{_.$$.dirty&1&&r(3,i=(o==null?void 0:o.hash)===n),r(4,t={...Object.fromEntries(Object.entries(e).filter(([,A])=>A!==void 0))})},e=Be(e),[o,l,p,i,t,u,a,s]}class d_ extends Le{constructor(e){super(),he(this,e,g_,c_,Te,{data:0,emptySet:1,emptyMessage:2})}}function f_(_){let e,r,t,a,s,o,n,i,l,p,u,A,T,C=_[23]&&br(_);const c=[b_,E_],R=[];function F(B,x){return B[22]?0:1}n=F(_),i=R[n]=c[n](_);let k=_[8]&&vr(_),H=_[7]&&Nr(_);return{c(){e=M("p"),r=oe(_[3]),t=V(),C&&C.c(),s=V(),o=M("div"),i.c(),l=V(),k&&k.c(),u=V(),H&&H.c(),A=Ee(),this.h()},l(B){e=I(B,"P",{class:!0});var x=Z(e);r=_e(x,_[3]),t=z(x),C&&C.l(x),x.forEach(m),s=z(B),o=I(B,"DIV",{class:!0});var L=Z(o);i.l(L),l=z(L),k&&k.l(L),L.forEach(m),u=z(B),H&&H.l(B),A=Ee(),this.h()},h(){E(e,"class",a=Fe("text-sm align-top leading-none",_[19])),E(o,"class",p=Fe("relative text-xl font-medium mt-1.5",_[20]))},m(B,x){N(B,e,x),W(e,r),W(e,t),C&&C.m(e,null),N(B,s,x),N(B,o,x),R[n].m(o,null),W(o,l),k&&k.m(o,null),N(B,u,x),H&&H.m(B,x),N(B,A,x),T=!0},p(B,x){(!T||x&8)&&de(r,B[3]),B[23]?C?(C.p(B,x),x&8388608&&S(C,1)):(C=br(B),C.c(),S(C,1),C.m(e,null)):C&&(le(),b(C,1,1,()=>{C=null}),pe()),(!T||x&524288&&a!==(a=Fe("text-sm align-top leading-none",B[19])))&&E(e,"class",a);let L=n;n=F(B),n===L?R[n].p(B,x):(le(),b(R[L],1,1,()=>{R[L]=null}),pe(),i=R[n],i?i.p(B,x):(i=R[n]=c[n](B),i.c()),S(i,1),i.m(o,l)),B[8]?k?(k.p(B,x),x&256&&S(k,1)):(k=vr(B),k.c(),S(k,1),k.m(o,null)):k&&(le(),b(k,1,1,()=>{k=null}),pe()),(!T||x&1048576&&p!==(p=Fe("relative text-xl font-medium mt-1.5",B[20])))&&E(o,"class",p),B[7]?H?(H.p(B,x),x&128&&S(H,1)):(H=Nr(B),H.c(),S(H,1),H.m(A.parentNode,A)):H&&(le(),b(H,1,1,()=>{H=null}),pe())},i(B){T||(S(C),S(i),S(k),S(H),T=!0)},o(B){b(C),b(i),b(k),b(H),T=!1},d(B){B&&(m(e),m(s),m(o),m(u),m(A)),C&&C.d(),R[n].d(),k&&k.d(),H&&H.d(B)}}}function y_(_){let e,r;return e=new Mr({props:{inputType:"BigValue",error:_[24],width:"148",height:"28"}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a&16777216&&(s.error=t[24]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function br(_){let e,r;return e=new Rt({props:{description:_[23],size:"3"}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a&8388608&&(s.description=t[23]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function E_(_){let e,r;return e=new ut({props:{data:_[0],column:_[6],fmt:_[13]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a&1&&(s.data=t[0]),a&64&&(s.column=t[6]),a&8192&&(s.fmt=t[13]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function b_(_){let e,r,t,a;return r=new ut({props:{data:_[0],column:_[6],fmt:_[13]}}),{c(){e=M("a"),J(r.$$.fragment),this.h()},l(s){e=I(s,"A",{class:!0,href:!0});var o=Z(e);Q(r.$$.fragment,o),o.forEach(m),this.h()},h(){E(e,"class","hover:bg-base-200"),E(e,"href",t=_t(_[22]))},m(s,o){N(s,e,o),q(r,e,null),a=!0},p(s,o){const n={};o&1&&(n.data=s[0]),o&64&&(n.column=s[6]),o&8192&&(n.fmt=s[13]),r.$set(n),(!a||o&4194304&&t!==(t=_t(s[22])))&&E(e,"href",t)},i(s){a||(S(r.$$.fragment,s),a=!0)},o(s){b(r.$$.fragment,s),a=!1},d(s){s&&m(e),Y(r)}}}function vr(_){let e,r;return e=new d_({props:{height:"15",data:_[0],dateCol:_[8],valueCol:_[6],type:_[9],interactive:"true",color:_[25],valueFmt:_[13]??_[10],dateFmt:_[11],yScale:_[2],connectGroup:_[12]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a&1&&(s.data=t[0]),a&256&&(s.dateCol=t[8]),a&64&&(s.valueCol=t[6]),a&512&&(s.type=t[9]),a&33554432&&(s.color=t[25]),a&9216&&(s.valueFmt=t[13]??t[10]),a&2048&&(s.dateFmt=t[11]),a&4&&(s.yScale=t[2]),a&4096&&(s.connectGroup=t[12]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Nr(_){let e,r,t,a;const s=[N_,v_],o=[];function n(i,l){return i[1]?0:1}return e=n(_),r=o[e]=s[e](_),{c(){r.c(),t=Ee()},l(i){r.l(i),t=Ee()},m(i,l){o[e].m(i,l),N(i,t,l),a=!0},p(i,l){let p=e;e=n(i),e===p?o[e].p(i,l):(le(),b(o[p],1,1,()=>{o[p]=null}),pe(),r=o[e],r?r.p(i,l):(r=o[e]=s[e](i),r.c()),S(r,1),r.m(t.parentNode,t))},i(i){a||(S(r),a=!0)},o(i){b(r),a=!1},d(i){i&&m(t),o[e].d(i)}}}function v_(_){let e,r,t,a,s,o,n;const i=[L_,T_],l=[];function p(u,A){return u[22]?0:1}return r=p(_),t=l[r]=i[r](_),{c(){e=M("p"),t.c(),a=V(),s=M("span"),o=oe(_[4]),this.h()},l(u){e=I(u,"P",{class:!0});var A=Z(e);t.l(A),a=z(A),s=I(A,"SPAN",{});var T=Z(s);o=_e(T,_[4]),T.forEach(m),A.forEach(m),this.h()},h(){E(e,"class","text-xs font-sans /60 pt-[0.5px]")},m(u,A){N(u,e,A),l[r].m(e,null),W(e,a),W(e,s),W(s,o),n=!0},p(u,A){let T=r;r=p(u),r===T?l[r].p(u,A):(le(),b(l[T],1,1,()=>{l[T]=null}),pe(),t=l[r],t?t.p(u,A):(t=l[r]=i[r](u),t.c()),S(t,1),t.m(e,a)),(!n||A&16)&&de(o,u[4])},i(u){n||(S(t),n=!0)},o(u){b(t),n=!1},d(u){u&&m(e),l[r].d()}}}function N_(_){let e,r,t,a;return r=new ba({props:{data:_[0],column:_[7],fmt:_[14],fontClass:"text-xs",symbolPosition:"left",neutralMin:_[15],neutralMax:_[16],text:_[4],downIsGood:_[5]}}),{c(){e=M("p"),J(r.$$.fragment),this.h()},l(s){e=I(s,"P",{class:!0});var o=Z(e);Q(r.$$.fragment,o),o.forEach(m),this.h()},h(){E(e,"class",t=Fe("text-xs font-sans mt-1",_[21]))},m(s,o){N(s,e,o),q(r,e,null),a=!0},p(s,o){const n={};o&1&&(n.data=s[0]),o&128&&(n.column=s[7]),o&16384&&(n.fmt=s[14]),o&32768&&(n.neutralMin=s[15]),o&65536&&(n.neutralMax=s[16]),o&16&&(n.text=s[4]),o&32&&(n.downIsGood=s[5]),r.$set(n),(!a||o&2097152&&t!==(t=Fe("text-xs font-sans mt-1",s[21])))&&E(e,"class",t)},i(s){a||(S(r.$$.fragment,s),a=!0)},o(s){b(r.$$.fragment,s),a=!1},d(s){s&&m(e),Y(r)}}}function T_(_){let e,r;return e=new ut({props:{data:_[0],column:_[7],fmt:_[14]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a&1&&(s.data=t[0]),a&128&&(s.column=t[7]),a&16384&&(s.fmt=t[14]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function L_(_){let e,r,t,a;return r=new ut({props:{data:_[0],column:_[7],fmt:_[14]}}),{c(){e=M("a"),J(r.$$.fragment),this.h()},l(s){e=I(s,"A",{class:!0,href:!0});var o=Z(e);Q(r.$$.fragment,o),o.forEach(m),this.h()},h(){E(e,"class","hover:bg-base-200"),E(e,"href",t=_t(_[22]))},m(s,o){N(s,e,o),q(r,e,null),a=!0},p(s,o){const n={};o&1&&(n.data=s[0]),o&128&&(n.column=s[7]),o&16384&&(n.fmt=s[14]),r.$set(n),(!a||o&4194304&&t!==(t=_t(s[22])))&&E(e,"href",t)},i(s){a||(S(r.$$.fragment,s),a=!0)},o(s){b(r.$$.fragment,s),a=!1},d(s){s&&m(e),Y(r)}}}function h_(_){let e,r,t,a,s;const o=[y_,f_],n=[];function i(l,p){return l[24].length>0?0:1}return r=i(_),t=n[r]=o[r](_),{c(){e=M("div"),t.c(),this.h()},l(l){e=I(l,"DIV",{class:!0,style:!0});var p=Z(e);t.l(p),p.forEach(m),this.h()},h(){E(e,"class","inline-block font-sans pt-2 pb-3 pl-0 mr-3 items-center align-top"),E(e,"style",a=`
        min-width: ${_[18]};
        max-width: ${_[17]};
		`)},m(l,p){N(l,e,p),n[r].m(e,null),s=!0},p(l,[p]){let u=r;r=i(l),r===u?n[r].p(l,p):(le(),b(n[u],1,1,()=>{n[u]=null}),pe(),t=n[r],t?t.p(l,p):(t=n[r]=o[r](l),t.c()),S(t,1),t.m(e,null)),(!s||p&393216&&a!==(a=`
        min-width: ${l[18]};
        max-width: ${l[17]};
		`))&&E(e,"style",a)},i(l){s||(S(t),s=!0)},o(l){b(t),s=!1},d(l){l&&m(e),n[r].d()}}}function C_(_,e,r){let t;const{resolveColor:a}=yt();let{data:s}=e,{value:o=null}=e,{comparison:n=null}=e,{comparisonDelta:i=!0}=e,{sparkline:l=null}=e,{sparklineType:p="line"}=e,{sparklineColor:u=void 0}=e,{sparklineValueFmt:A=void 0}=e,{sparklineDateFmt:T=void 0}=e,{sparklineYScale:C=!1}=e,{connectGroup:c=void 0}=e,{fmt:R=void 0}=e,{comparisonFmt:F=void 0}=e,{title:k=null}=e,{comparisonTitle:H=null}=e,{downIsGood:B=!1}=e,{neutralMin:x=0}=e,{neutralMax:L=0}=e,{maxWidth:v="none"}=e,{minWidth:f="18%"}=e,{titleClass:h=void 0}=e,{valueClass:U=void 0}=e,{comparisonClass:d=void 0}=e,{link:D=null}=e,{description:w=void 0}=e,K=[];return _.$$set=O=>{"data"in O&&r(0,s=O.data),"value"in O&&r(6,o=O.value),"comparison"in O&&r(7,n=O.comparison),"comparisonDelta"in O&&r(1,i=O.comparisonDelta),"sparkline"in O&&r(8,l=O.sparkline),"sparklineType"in O&&r(9,p=O.sparklineType),"sparklineColor"in O&&r(26,u=O.sparklineColor),"sparklineValueFmt"in O&&r(10,A=O.sparklineValueFmt),"sparklineDateFmt"in O&&r(11,T=O.sparklineDateFmt),"sparklineYScale"in O&&r(2,C=O.sparklineYScale),"connectGroup"in O&&r(12,c=O.connectGroup),"fmt"in O&&r(13,R=O.fmt),"comparisonFmt"in O&&r(14,F=O.comparisonFmt),"title"in O&&r(3,k=O.title),"comparisonTitle"in O&&r(4,H=O.comparisonTitle),"downIsGood"in O&&r(5,B=O.downIsGood),"neutralMin"in O&&r(15,x=O.neutralMin),"neutralMax"in O&&r(16,L=O.neutralMax),"maxWidth"in O&&r(17,v=O.maxWidth),"minWidth"in O&&r(18,f=O.minWidth),"titleClass"in O&&r(19,h=O.titleClass),"valueClass"in O&&r(20,U=O.valueClass),"comparisonClass"in O&&r(21,d=O.comparisonClass),"link"in O&&r(22,D=O.link),"description"in O&&r(23,w=O.description)},_.$$.update=()=>{if(_.$$.dirty&2&&r(1,i=i==="true"||i===!0),_.$$.dirty&67108864&&r(25,t=a(u)),_.$$.dirty&4&&r(2,C=C==="true"||C===!0),_.$$.dirty&32&&r(5,B=B==="true"||B===!0),_.$$.dirty&16777689)try{Array.isArray(s)||r(0,s=[s]),lt(s,[o]);let O=wt(s,"array"),$=O.find(re=>re.id===o);if(r(3,k=k??($?$.title:null)),n!==null){lt(s,[n]);let re=O.find(y=>y.id===n);r(4,H=H??(re?re.title:null))}l!==null&&lt(s,[l])}catch(O){if(r(24,K=[...K,O]),wr)throw K}},[s,i,C,k,H,B,o,n,l,p,A,T,c,R,F,x,L,v,f,h,U,d,D,w,K,t,u]}let D_=class extends Le{constructor(e){super(),he(this,e,C_,h_,Te,{data:0,value:6,comparison:7,comparisonDelta:1,sparkline:8,sparklineType:9,sparklineColor:26,sparklineValueFmt:10,sparklineDateFmt:11,sparklineYScale:2,connectGroup:12,fmt:13,comparisonFmt:14,title:3,comparisonTitle:4,downIsGood:5,neutralMin:15,neutralMax:16,maxWidth:17,minWidth:18,titleClass:19,valueClass:20,comparisonClass:21,link:22,description:23})}};function k_(_){let e;const r=_[6].default,t=ze(r,_,_[7],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,s){t&&t.m(a,s),e=!0},p(a,s){t&&t.p&&(!e||s&128)&&Ve(t,r,a,a[7],e?Ye(r,a[7],s,null):Ke(a[7]),null)},i(a){e||(S(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function O_(_){let e,r;const t=[_[4],{data:ve.isQuery(_[9])?Array.from(_[9]):_[9]}];let a={$$slots:{default:[k_]},$$scope:{ctx:_}};for(let s=0;s<t.length;s+=1)a=be(a,t[s]);return e=new D_({props:a}),{c(){J(e.$$.fragment)},l(s){Q(e.$$.fragment,s)},m(s,o){q(e,s,o),r=!0},p(s,o){const n=o&528?qe(t,[o&16&&pt(s[4]),o&512&&{data:ve.isQuery(s[9])?Array.from(s[9]):s[9]}]):{};o&128&&(n.$$scope={dirty:o,ctx:s}),e.$set(n)},i(s){r||(S(e.$$.fragment,s),r=!0)},o(s){b(e.$$.fragment,s),r=!1},d(s){Y(e,s)}}}function x_(_){let e,r,t,a;return r=new va({props:{error:_[9].error.message}}),{c(){e=M("div"),J(r.$$.fragment),this.h()},l(s){e=I(s,"DIV",{slot:!0,class:!0,style:!0});var o=Z(e);Q(r.$$.fragment,o),o.forEach(m),this.h()},h(){E(e,"slot","error"),E(e,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),E(e,"style",t=`
				min-width: ${_[5].minWidth};
				max-width: ${_[5].maxWidth};
		`)},m(s,o){N(s,e,o),q(r,e,null),a=!0},p(s,o){const n={};o&512&&(n.error=s[9].error.message),r.$set(n),(!a||o&32&&t!==(t=`
				min-width: ${s[5].minWidth};
				max-width: ${s[5].maxWidth};
		`))&&E(e,"style",t)},i(s){a||(S(r.$$.fragment,s),a=!0)},o(s){b(r.$$.fragment,s),a=!1},d(s){s&&m(e),Y(r)}}}function U_(_){let e,r,t,a;return r=new ft({props:{emptyMessage:_[2],emptySet:_[1],chartType:I_,isInitial:_[3]}}),{c(){e=M("div"),J(r.$$.fragment),this.h()},l(s){e=I(s,"DIV",{slot:!0,class:!0,style:!0});var o=Z(e);Q(r.$$.fragment,o),o.forEach(m),this.h()},h(){E(e,"slot","empty"),E(e,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),E(e,"style",t=`
				min-width: ${_[5].minWidth};
				max-width: ${_[5].maxWidth};
		`)},m(s,o){N(s,e,o),q(r,e,null),a=!0},p(s,o){const n={};o&4&&(n.emptyMessage=s[2]),o&2&&(n.emptySet=s[1]),o&8&&(n.isInitial=s[3]),r.$set(n),(!a||o&32&&t!==(t=`
				min-width: ${s[5].minWidth};
				max-width: ${s[5].maxWidth};
		`))&&E(e,"style",t)},i(s){a||(S(r.$$.fragment,s),a=!0)},o(s){b(r.$$.fragment,s),a=!1},d(s){s&&m(e),Y(r)}}}function B_(_){let e,r,t=(_[5].title??" ")+"",a,s,o,n,i;return o=new ut({props:{column:_[5].value,fmt:_[5].fmt,data:_[9]}}),{c(){e=M("div"),r=M("p"),a=oe(t),s=V(),J(o.$$.fragment),this.h()},l(l){e=I(l,"DIV",{class:!0,style:!0,slot:!0});var p=Z(e);r=I(p,"P",{class:!0});var u=Z(r);a=_e(u,t),u.forEach(m),s=z(p),Q(o.$$.fragment,p),p.forEach(m),this.h()},h(){E(r,"class","text-sm"),E(e,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),E(e,"style",n=`
			min-width: ${_[5].minWidth};
			max-width: ${_[5].maxWidth};
		`),E(e,"slot","skeleton")},m(l,p){N(l,e,p),W(e,r),W(r,a),W(e,s),q(o,e,null),i=!0},p(l,p){(!i||p&32)&&t!==(t=(l[5].title??" ")+"")&&de(a,t);const u={};p&32&&(u.column=l[5].value),p&32&&(u.fmt=l[5].fmt),p&512&&(u.data=l[9]),o.$set(u),(!i||p&32&&n!==(n=`
			min-width: ${l[5].minWidth};
			max-width: ${l[5].maxWidth};
		`))&&E(e,"style",n)},i(l){i||(S(o.$$.fragment,l),i=!0)},o(l){b(o.$$.fragment,l),i=!1},d(l){l&&m(e),Y(o)}}}function H_(_){let e,r;return e=new dt({props:{data:_[0],$$slots:{skeleton:[B_,({loaded:t})=>({9:t}),({loaded:t})=>t?512:0],empty:[U_],error:[x_,({loaded:t})=>({9:t}),({loaded:t})=>t?512:0],default:[O_,({loaded:t})=>({9:t}),({loaded:t})=>t?512:0]},$$scope:{ctx:_}}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,[a]){const s={};a&1&&(s.data=t[0]),a&702&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}let I_="Big Value";function M_(_,e,r){let t,{$$slots:a={},$$scope:s}=e,{data:o}=e;const n=ve.isQuery(o)?o.hash:void 0;let i=(o==null?void 0:o.hash)===n,{emptySet:l=void 0}=e,{emptyMessage:p=void 0}=e;return _.$$set=u=>{r(5,e=be(be({},e),Be(u))),"data"in u&&r(0,o=u.data),"emptySet"in u&&r(1,l=u.emptySet),"emptyMessage"in u&&r(2,p=u.emptyMessage),"$$scope"in u&&r(7,s=u.$$scope)},_.$$.update=()=>{_.$$.dirty&1&&r(3,i=(o==null?void 0:o.hash)===n),r(4,t=Object.fromEntries(Object.entries(e).filter(([,u])=>u!==void 0)))},e=Be(e),[o,l,p,i,t,e,a,s]}class St extends Le{constructor(e){super(),he(this,e,M_,H_,Te,{data:0,emptySet:1,emptyMessage:2})}}function R_(_){let e,r=me.title+"",t;return{c(){e=M("h1"),t=oe(r),this.h()},l(a){e=I(a,"H1",{class:!0});var s=Z(e);t=_e(s,r),s.forEach(m),this.h()},h(){E(e,"class","title")},m(a,s){N(a,e,s),W(e,t)},p:ne,d(a){a&&m(e)}}}function w_(_){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:ne,p:ne,d:ne}}function j_(_){let e,r,t,a,s;return document.title=e=me.title,{c(){r=V(),t=M("meta"),a=V(),s=M("meta"),this.h()},l(o){r=z(o),t=I(o,"META",{property:!0,content:!0}),a=z(o),s=I(o,"META",{name:!0,content:!0}),this.h()},h(){var o,n;E(t,"property","og:title"),E(t,"content",((o=me.og)==null?void 0:o.title)??me.title),E(s,"name","twitter:title"),E(s,"content",((n=me.og)==null?void 0:n.title)??me.title)},m(o,n){N(o,r,n),N(o,t,n),N(o,a,n),N(o,s,n)},p(o,n){n&0&&e!==(e=me.title)&&(document.title=e)},d(o){o&&(m(r),m(t),m(a),m(s))}}}function W_(_){var s,o;let e,r,t=(me.description||((s=me.og)==null?void 0:s.description))&&F_(),a=((o=me.og)==null?void 0:o.image)&&P_();return{c(){t&&t.c(),e=V(),a&&a.c(),r=Ee()},l(n){t&&t.l(n),e=z(n),a&&a.l(n),r=Ee()},m(n,i){t&&t.m(n,i),N(n,e,i),a&&a.m(n,i),N(n,r,i)},p(n,i){var l,p;(me.description||(l=me.og)!=null&&l.description)&&t.p(n,i),(p=me.og)!=null&&p.image&&a.p(n,i)},d(n){n&&(m(e),m(r)),t&&t.d(n),a&&a.d(n)}}}function F_(_){let e,r,t,a,s;return{c(){e=M("meta"),r=V(),t=M("meta"),a=V(),s=M("meta"),this.h()},l(o){e=I(o,"META",{name:!0,content:!0}),r=z(o),t=I(o,"META",{property:!0,content:!0}),a=z(o),s=I(o,"META",{name:!0,content:!0}),this.h()},h(){var o,n,i;E(e,"name","description"),E(e,"content",me.description??((o=me.og)==null?void 0:o.description)),E(t,"property","og:description"),E(t,"content",((n=me.og)==null?void 0:n.description)??me.description),E(s,"name","twitter:description"),E(s,"content",((i=me.og)==null?void 0:i.description)??me.description)},m(o,n){N(o,e,n),N(o,r,n),N(o,t,n),N(o,a,n),N(o,s,n)},p:ne,d(o){o&&(m(e),m(r),m(t),m(a),m(s))}}}function P_(_){let e,r,t;return{c(){e=M("meta"),r=V(),t=M("meta"),this.h()},l(a){e=I(a,"META",{property:!0,content:!0}),r=z(a),t=I(a,"META",{name:!0,content:!0}),this.h()},h(){var a,s;E(e,"property","og:image"),E(e,"content",_t((a=me.og)==null?void 0:a.image)),E(t,"name","twitter:image"),E(t,"content",_t((s=me.og)==null?void 0:s.image))},m(a,s){N(a,e,s),N(a,r,s),N(a,t,s)},p:ne,d(a){a&&(m(e),m(r),m(t))}}}function Tr(_){let e,r;return e=new We({props:{queryID:"startups",queryResult:_[0]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a[0]&1&&(s.queryResult=t[0]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Lr(_){let e,r;return e=new We({props:{queryID:"startup_overview",queryResult:_[1]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a[0]&2&&(s.queryResult=t[1]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function hr(_){let e,r;return e=new We({props:{queryID:"business_models",queryResult:_[2]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a[0]&4&&(s.queryResult=t[2]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Cr(_){let e,r;return e=new We({props:{queryID:"sectors",queryResult:_[3]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a[0]&8&&(s.queryResult=t[3]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Dr(_){let e,r;return e=new We({props:{queryID:"founding_year_overview",queryResult:_[4]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a[0]&16&&(s.queryResult=t[4]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function kr(_){let e,r;return e=new We({props:{queryID:"software_hardware_split",queryResult:_[5]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a[0]&32&&(s.queryResult=t[5]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Or(_){let e,r;return e=new We({props:{queryID:"startup_aggregate_data",queryResult:_[6]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a[0]&64&&(s.queryResult=t[6]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function xr(_){let e,r;return e=new We({props:{queryID:"max_employees",queryResult:_[7]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a[0]&128&&(s.queryResult=t[7]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Ur(_){let e,r;return e=new We({props:{queryID:"startup_overview_filtered",queryResult:_[8]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){q(e,t,a),r=!0},p(t,a){const s={};a[0]&256&&(s.queryResult=t[8]),e.$set(s)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function G_(_){let e,r,t,a,s,o,n,i,l,p,u,A,T,C,c,R,F,k,H,B,x,L,v,f,h,U;return e=new ke({props:{id:"brand_name",title:"Company"}}),t=new ke({props:{id:"turnover",title:"Turnover",fmt:"eur"}}),s=new ke({props:{id:"turnover_delta_percent",title:"YoY (%)",contentType:"delta",fmt:"percent"}}),n=new ke({props:{id:"profit",title:"Profit",fmt:"eur"}}),l=new ke({props:{id:"profit_delta_percent",title:"YoY (%)",contentType:"delta",fmt:"percent"}}),u=new ke({props:{id:"employees_gp",title:"Employees"}}),T=new ke({props:{id:"employees_gp_delta_percent",title:"YoY (%)",contentType:"delta",fmt:"percent"}}),c=new ke({props:{id:"total_budget_payments",title:"Total budget payments",fmt:"eur"}}),F=new ke({props:{id:"total_budget_payments_delta_percent",title:"YoY (%)",contentType:"delta",fmt:"percent"}}),H=new ke({props:{id:"personal_income_tax",title:"Personal income tax",fmt:"eur"}}),x=new ke({props:{id:"personal_income_tax_delta_percent",title:"YoY (%)",contentType:"delta",fmt:"percent"}}),v=new ke({props:{id:"social_security_payments",title:"Social security payments",fmt:"eur"}}),h=new ke({props:{id:"social_security_payments_delta_percent",title:"YoY (%)",contentType:"delta",fmt:"percent"}}),{c(){J(e.$$.fragment),r=V(),J(t.$$.fragment),a=V(),J(s.$$.fragment),o=V(),J(n.$$.fragment),i=V(),J(l.$$.fragment),p=V(),J(u.$$.fragment),A=V(),J(T.$$.fragment),C=V(),J(c.$$.fragment),R=V(),J(F.$$.fragment),k=V(),J(H.$$.fragment),B=V(),J(x.$$.fragment),L=V(),J(v.$$.fragment),f=V(),J(h.$$.fragment)},l(d){Q(e.$$.fragment,d),r=z(d),Q(t.$$.fragment,d),a=z(d),Q(s.$$.fragment,d),o=z(d),Q(n.$$.fragment,d),i=z(d),Q(l.$$.fragment,d),p=z(d),Q(u.$$.fragment,d),A=z(d),Q(T.$$.fragment,d),C=z(d),Q(c.$$.fragment,d),R=z(d),Q(F.$$.fragment,d),k=z(d),Q(H.$$.fragment,d),B=z(d),Q(x.$$.fragment,d),L=z(d),Q(v.$$.fragment,d),f=z(d),Q(h.$$.fragment,d)},m(d,D){q(e,d,D),N(d,r,D),q(t,d,D),N(d,a,D),q(s,d,D),N(d,o,D),q(n,d,D),N(d,i,D),q(l,d,D),N(d,p,D),q(u,d,D),N(d,A,D),q(T,d,D),N(d,C,D),q(c,d,D),N(d,R,D),q(F,d,D),N(d,k,D),q(H,d,D),N(d,B,D),q(x,d,D),N(d,L,D),q(v,d,D),N(d,f,D),q(h,d,D),U=!0},p:ne,i(d){U||(S(e.$$.fragment,d),S(t.$$.fragment,d),S(s.$$.fragment,d),S(n.$$.fragment,d),S(l.$$.fragment,d),S(u.$$.fragment,d),S(T.$$.fragment,d),S(c.$$.fragment,d),S(F.$$.fragment,d),S(H.$$.fragment,d),S(x.$$.fragment,d),S(v.$$.fragment,d),S(h.$$.fragment,d),U=!0)},o(d){b(e.$$.fragment,d),b(t.$$.fragment,d),b(s.$$.fragment,d),b(n.$$.fragment,d),b(l.$$.fragment,d),b(u.$$.fragment,d),b(T.$$.fragment,d),b(c.$$.fragment,d),b(F.$$.fragment,d),b(H.$$.fragment,d),b(x.$$.fragment,d),b(v.$$.fragment,d),b(h.$$.fragment,d),U=!1},d(d){d&&(m(r),m(a),m(o),m(i),m(p),m(A),m(C),m(R),m(k),m(B),m(L),m(f)),Y(e,d),Y(t,d),Y(s,d),Y(n,d),Y(l,d),Y(u,d),Y(T,d),Y(c,d),Y(F,d),Y(H,d),Y(x,d),Y(v,d),Y(h,d)}}}function X_(_){let e,r,t,a,s,o,n,i,l,p,u,A,T,C='<a href="#"></a>',c,R,F,k,H,B,x,L,v,f,h='<a href="#-1"></a>',U,d,D,w,K,O,$,re,y,X=typeof me<"u"&&me.title&&me.hide_title!==!0&&R_();function G(g,j){return typeof me<"u"&&me.title?j_:w_}let ae=G()(_),Ae=typeof me=="object"&&W_(),ie=_[0]&&Tr(_),se=_[1]&&Lr(_),te=_[2]&&hr(_),ee=_[3]&&Cr(_),ue=_[4]&&Dr(_),fe=_[5]&&kr(_),ye=_[6]&&Or(_);R=new St({props:{data:_[6],value:"total_turnover",title:"Turnover",fmt:"eur",comparison:"turnover_delta_percent",comparisonFmt:"pct1",comparisonTitle:"YoY"}}),k=new St({props:{data:_[6],value:"total_profit",title:"Profit",fmt:"eur",comparison:"profit_delta_percent",comparisonFmt:"pct1",comparisonTitle:"YoY"}}),B=new St({props:{data:_[6],value:"total_employees",title:"Employees",fmt:"number",comparison:"employees_delta_percent",comparisonFmt:"pct1",comparisonTitle:"YoY"}}),L=new St({props:{data:_[6],value:"total_budget_payments",title:"Total budget payments",fmt:"eur",comparison:"budget_payments_delta_percent",comparisonFmt:"pct1",comparisonTitle:"YoY"}}),d=new Ts({});let ge=_[7]&&xr(_);K=new ys({props:{title:"Minimum employees",name:"employees",size:"large",step:"5",data:_[7],min:"0",maxColumn:"maxColumn"}});let ce=_[8]&&Ur(_);return re=new Na({props:{data:_[8],rows:"50",compact:"true",wrapTitles:"true",$$slots:{default:[G_]},$$scope:{ctx:_}}}),{c(){X&&X.c(),e=V(),ae.c(),r=M("meta"),t=M("meta"),Ae&&Ae.c(),a=Ee(),s=V(),ie&&ie.c(),o=V(),se&&se.c(),n=V(),te&&te.c(),i=V(),ee&&ee.c(),l=V(),ue&&ue.c(),p=V(),fe&&fe.c(),u=V(),ye&&ye.c(),A=V(),T=M("h1"),T.innerHTML=C,c=V(),J(R.$$.fragment),F=V(),J(k.$$.fragment),H=V(),J(B.$$.fragment),x=V(),J(L.$$.fragment),v=V(),f=M("h1"),f.innerHTML=h,U=V(),J(d.$$.fragment),D=V(),ge&&ge.c(),w=V(),J(K.$$.fragment),O=V(),ce&&ce.c(),$=V(),J(re.$$.fragment),this.h()},l(g){X&&X.l(g),e=z(g);const j=Jr("svelte-2igo1p",document.head);ae.l(j),r=I(j,"META",{name:!0,content:!0}),t=I(j,"META",{name:!0,content:!0}),Ae&&Ae.l(j),a=Ee(),j.forEach(m),s=z(g),ie&&ie.l(g),o=z(g),se&&se.l(g),n=z(g),te&&te.l(g),i=z(g),ee&&ee.l(g),l=z(g),ue&&ue.l(g),p=z(g),fe&&fe.l(g),u=z(g),ye&&ye.l(g),A=z(g),T=I(g,"H1",{class:!0,id:!0,"data-svelte-h":!0}),je(T)!=="svelte-1kicl0x"&&(T.innerHTML=C),c=z(g),Q(R.$$.fragment,g),F=z(g),Q(k.$$.fragment,g),H=z(g),Q(B.$$.fragment,g),x=z(g),Q(L.$$.fragment,g),v=z(g),f=I(g,"H1",{class:!0,id:!0,"data-svelte-h":!0}),je(f)!=="svelte-1hzmxtk"&&(f.innerHTML=h),U=z(g),Q(d.$$.fragment,g),D=z(g),ge&&ge.l(g),w=z(g),Q(K.$$.fragment,g),O=z(g),ce&&ce.l(g),$=z(g),Q(re.$$.fragment,g),this.h()},h(){E(r,"name","twitter:card"),E(r,"content","summary_large_image"),E(t,"name","twitter:site"),E(t,"content","@evidence_dev"),E(T,"class","markdown"),E(T,"id",""),E(f,"class","markdown"),E(f,"id","-1")},m(g,j){X&&X.m(g,j),N(g,e,j),ae.m(document.head,null),W(document.head,r),W(document.head,t),Ae&&Ae.m(document.head,null),W(document.head,a),N(g,s,j),ie&&ie.m(g,j),N(g,o,j),se&&se.m(g,j),N(g,n,j),te&&te.m(g,j),N(g,i,j),ee&&ee.m(g,j),N(g,l,j),ue&&ue.m(g,j),N(g,p,j),fe&&fe.m(g,j),N(g,u,j),ye&&ye.m(g,j),N(g,A,j),N(g,T,j),N(g,c,j),q(R,g,j),N(g,F,j),q(k,g,j),N(g,H,j),q(B,g,j),N(g,x,j),q(L,g,j),N(g,v,j),N(g,f,j),N(g,U,j),q(d,g,j),N(g,D,j),ge&&ge.m(g,j),N(g,w,j),q(K,g,j),N(g,O,j),ce&&ce.m(g,j),N(g,$,j),q(re,g,j),y=!0},p(g,j){typeof me<"u"&&me.title&&me.hide_title!==!0&&X.p(g,j),ae.p(g,j),typeof me=="object"&&Ae.p(g,j),g[0]?ie?(ie.p(g,j),j[0]&1&&S(ie,1)):(ie=Tr(g),ie.c(),S(ie,1),ie.m(o.parentNode,o)):ie&&(le(),b(ie,1,1,()=>{ie=null}),pe()),g[1]?se?(se.p(g,j),j[0]&2&&S(se,1)):(se=Lr(g),se.c(),S(se,1),se.m(n.parentNode,n)):se&&(le(),b(se,1,1,()=>{se=null}),pe()),g[2]?te?(te.p(g,j),j[0]&4&&S(te,1)):(te=hr(g),te.c(),S(te,1),te.m(i.parentNode,i)):te&&(le(),b(te,1,1,()=>{te=null}),pe()),g[3]?ee?(ee.p(g,j),j[0]&8&&S(ee,1)):(ee=Cr(g),ee.c(),S(ee,1),ee.m(l.parentNode,l)):ee&&(le(),b(ee,1,1,()=>{ee=null}),pe()),g[4]?ue?(ue.p(g,j),j[0]&16&&S(ue,1)):(ue=Dr(g),ue.c(),S(ue,1),ue.m(p.parentNode,p)):ue&&(le(),b(ue,1,1,()=>{ue=null}),pe()),g[5]?fe?(fe.p(g,j),j[0]&32&&S(fe,1)):(fe=kr(g),fe.c(),S(fe,1),fe.m(u.parentNode,u)):fe&&(le(),b(fe,1,1,()=>{fe=null}),pe()),g[6]?ye?(ye.p(g,j),j[0]&64&&S(ye,1)):(ye=Or(g),ye.c(),S(ye,1),ye.m(A.parentNode,A)):ye&&(le(),b(ye,1,1,()=>{ye=null}),pe());const $e={};j[0]&64&&($e.data=g[6]),R.$set($e);const et={};j[0]&64&&(et.data=g[6]),k.$set(et);const tt={};j[0]&64&&(tt.data=g[6]),B.$set(tt);const He={};j[0]&64&&(He.data=g[6]),L.$set(He),g[7]?ge?(ge.p(g,j),j[0]&128&&S(ge,1)):(ge=xr(g),ge.c(),S(ge,1),ge.m(w.parentNode,w)):ge&&(le(),b(ge,1,1,()=>{ge=null}),pe());const Ie={};j[0]&128&&(Ie.data=g[7]),K.$set(Ie),g[8]?ce?(ce.p(g,j),j[0]&256&&S(ce,1)):(ce=Ur(g),ce.c(),S(ce,1),ce.m($.parentNode,$)):ce&&(le(),b(ce,1,1,()=>{ce=null}),pe());const Re={};j[0]&256&&(Re.data=g[8]),j[2]&16&&(Re.$$scope={dirty:j,ctx:g}),re.$set(Re)},i(g){y||(S(ie),S(se),S(te),S(ee),S(ue),S(fe),S(ye),S(R.$$.fragment,g),S(k.$$.fragment,g),S(B.$$.fragment,g),S(L.$$.fragment,g),S(d.$$.fragment,g),S(ge),S(K.$$.fragment,g),S(ce),S(re.$$.fragment,g),y=!0)},o(g){b(ie),b(se),b(te),b(ee),b(ue),b(fe),b(ye),b(R.$$.fragment,g),b(k.$$.fragment,g),b(B.$$.fragment,g),b(L.$$.fragment,g),b(d.$$.fragment,g),b(ge),b(K.$$.fragment,g),b(ce),b(re.$$.fragment,g),y=!1},d(g){g&&(m(e),m(s),m(o),m(n),m(i),m(l),m(p),m(u),m(A),m(T),m(c),m(F),m(H),m(x),m(v),m(f),m(U),m(D),m(w),m(O),m($)),X&&X.d(g),ae.d(g),m(r),m(t),Ae&&Ae.d(g),m(a),ie&&ie.d(g),se&&se.d(g),te&&te.d(g),ee&&ee.d(g),ue&&ue.d(g),fe&&fe.d(g),ye&&ye.d(g),Y(R,g),Y(k,g),Y(B,g),Y(L,g),Y(d,g),ge&&ge.d(g),Y(K,g),ce&&ce.d(g),Y(re,g)}}}const me={title:"Startin.lv startup database"};function z_(_,e,r){let t,a;Ue(_,jr,Se=>r(48,t=Se)),Ue(_,Kt,Se=>r(53,a=Se));let{data:s}=e,{data:o={},customFormattingSettings:n,__db:i,inputs:l}=s;gt(Kt,a="6666cd76f96956469e7be39d750cc7d9",a);let p=Ta(it(l));Zr(p.subscribe(Se=>r(11,l=Se))),Br(Ca,{getCustomFormats:()=>n.customFormats||[]});const u=(Se,zr)=>ka(i.query,Se,{query_name:zr});La(u),t.params,$r(()=>!0);let A={initialData:void 0,initialError:void 0},T=Ce`WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source`,C=`WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source`;o.startups_data&&(o.startups_data instanceof Error?A.initialError=o.startups_data:A.initialData=o.startups_data,o.startups_columns&&(A.knownColumns=o.startups_columns));let c,R=!1;const F=ve.createReactive({callback:Se=>{r(0,c=Se)},execFn:u},{id:"startups",...A});F(C,{noResolve:T,...A}),globalThis[Symbol.for("startups")]={get value(){return c}};let k={initialData:void 0,initialError:void 0},H=Ce`-- 1. solis: Datu transformācija no plata uz garu formātu (UNPIVOT)
WITH
source AS (
  SELECT
    *
  FROM (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
),
yearly_data AS (
  SELECT
    brand_name,
    slug,
    2024 AS year,
    turnover_2024 AS turnover,
    profit_2024 AS profit,
    employees_gp_2024 AS employees_gp,
    total_budget_payments_2024 AS total_budget_payments,
    personal_income_tax_2024 AS personal_income_tax,
    social_security_payments_2024 AS social_security_payments
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2023 AS year,
    turnover_2023,
    profit_2023,
    employees_gp_2023,
    total_budget_payments_2023,
    personal_income_tax_2023,
    social_security_payments_2023
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2022 AS year,
    turnover_2022,
    profit_2022,
    employees_gp_2022,
    total_budget_payments_2022,
    personal_income_tax_2022,
    social_security_payments_2022
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2021 AS year,
    turnover_2021,
    profit_2021,
    employees_gp_2021,
    total_budget_payments_2021,
    NULL,
    NULL
  FROM source
),
-- 2. solis: Pārveidojam datus, lai katra metrika būtu atsevišķa rinda
long_data AS (
    SELECT slug, year, 'turnover' as metric, turnover as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'profit' as metric, profit as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'employees_gp' as metric, employees_gp as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'total_budget_payments' as metric, total_budget_payments as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'personal_income_tax' as metric, personal_income_tax as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'social_security_payments' as metric, social_security_payments as value FROM yearly_data
),
-- 3. solis: Sarindojam katras metrikas ne-nulles vērtības pēc gada (dilstošā secībā)
ranked_data AS (
    SELECT
        slug,
        metric,
        value,
        year,
        ROW_NUMBER() OVER(PARTITION BY slug, metric ORDER BY year DESC) as rn
    FROM long_data
    WHERE value IS NOT NULL
),
-- 4. solis: Apvienojam jaunāko (N) un iepriekšējo (N-1) vērtību katrai metrikai
combined_data AS (
    SELECT
        slug,
        metric,
        MAX(CASE WHEN rn = 1 THEN value END) as current_value,
        MAX(CASE WHEN rn = 1 THEN year END) as current_year,
        MAX(CASE WHEN rn = 2 THEN value END) as previous_value,
        MAX(CASE WHEN rn = 2 THEN year END) as previous_year
    FROM ranked_data
    WHERE rn <= 2
    GROUP BY slug, metric
),
-- 5. solis: Pārveidojam datus atpakaļ uz platu formātu, kur katra metrika ir kolonna
final_pivot AS (
    SELECT
        slug,
        -- Turnover
        MAX(CASE WHEN metric = 'turnover' THEN current_value END) as turnover,
        MAX(CASE WHEN metric = 'turnover' THEN current_year END) as turnover_year,
        MAX(CASE WHEN metric = 'turnover' THEN previous_value END) as previous_turnover,
        MAX(CASE WHEN metric = 'turnover' THEN previous_year END) as previous_turnover_year,
        -- Profit
        MAX(CASE WHEN metric = 'profit' THEN current_value END) as profit,
        MAX(CASE WHEN metric = 'profit' THEN current_year END) as profit_year,
        MAX(CASE WHEN metric = 'profit' THEN previous_value END) as previous_profit,
        MAX(CASE WHEN metric = 'profit' THEN previous_year END) as previous_profit_year,
        -- Employees
        MAX(CASE WHEN metric = 'employees_gp' THEN current_value END) as employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN current_year END) as employees_gp_year,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_value END) as previous_employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_year END) as previous_employees_gp_year,
        -- Total Budget Payments
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_value END) as total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_year END) as total_budget_payments_year,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_value END) as previous_total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_year END) as previous_total_budget_payments_year,
        -- Personal Income Tax
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_value END) as personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_year END) as personal_income_tax_year,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_value END) as previous_personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_year END) as previous_personal_income_tax_year,
        -- Social Security Payments
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_value END) as social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_year END) as social_security_payments_year,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_value END) as previous_social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_year END) as previous_social_security_payments_year
    FROM combined_data
    GROUP BY slug
)
-- 6. solis: Pievienojam zīmola nosaukumu un aprēķinām DELTA procentos
SELECT
    s.brand_name,
    fp.*,
    CASE WHEN fp.turnover IS NOT NULL AND fp.previous_turnover IS NOT NULL AND fp.previous_turnover != 0 THEN (fp.turnover - fp.previous_turnover) * 100.0 / fp.previous_turnover ELSE NULL END AS turnover_delta_percent,
    CASE WHEN fp.profit IS NOT NULL AND fp.previous_profit IS NOT NULL AND fp.previous_profit != 0 THEN (fp.profit - fp.previous_profit) * 100.0 / fp.previous_profit ELSE NULL END AS profit_delta_percent,
    CASE WHEN fp.employees_gp IS NOT NULL AND fp.previous_employees_gp IS NOT NULL AND fp.previous_employees_gp != 0 THEN (fp.employees_gp - fp.previous_employees_gp) * 100.0 / fp.previous_employees_gp ELSE NULL END AS employees_gp_delta_percent,
    CASE WHEN fp.total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments != 0 THEN (fp.total_budget_payments - fp.previous_total_budget_payments) * 100.0 / fp.previous_total_budget_payments ELSE NULL END AS total_budget_payments_delta_percent,
    CASE WHEN fp.personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax != 0 THEN (fp.personal_income_tax - fp.previous_personal_income_tax) * 100.0 / fp.previous_personal_income_tax ELSE NULL END AS personal_income_tax_delta_percent,
    CASE WHEN fp.social_security_payments IS NOT NULL AND fp.previous_social_security_payments IS NOT NULL AND fp.previous_social_security_payments != 0 THEN (fp.social_security_payments - fp.previous_social_security_payments) * 100.0 / fp.previous_social_security_payments ELSE NULL END AS social_security_payments_delta_percent
FROM
    final_pivot fp
JOIN
    (SELECT DISTINCT slug, brand_name FROM source) s ON fp.slug = s.slug
ORDER BY
    fp.slug`,B=`-- 1. solis: Datu transformācija no plata uz garu formātu (UNPIVOT)
WITH
source AS (
  SELECT
    *
  FROM (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
),
yearly_data AS (
  SELECT
    brand_name,
    slug,
    2024 AS year,
    turnover_2024 AS turnover,
    profit_2024 AS profit,
    employees_gp_2024 AS employees_gp,
    total_budget_payments_2024 AS total_budget_payments,
    personal_income_tax_2024 AS personal_income_tax,
    social_security_payments_2024 AS social_security_payments
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2023 AS year,
    turnover_2023,
    profit_2023,
    employees_gp_2023,
    total_budget_payments_2023,
    personal_income_tax_2023,
    social_security_payments_2023
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2022 AS year,
    turnover_2022,
    profit_2022,
    employees_gp_2022,
    total_budget_payments_2022,
    personal_income_tax_2022,
    social_security_payments_2022
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2021 AS year,
    turnover_2021,
    profit_2021,
    employees_gp_2021,
    total_budget_payments_2021,
    NULL,
    NULL
  FROM source
),
-- 2. solis: Pārveidojam datus, lai katra metrika būtu atsevišķa rinda
long_data AS (
    SELECT slug, year, 'turnover' as metric, turnover as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'profit' as metric, profit as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'employees_gp' as metric, employees_gp as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'total_budget_payments' as metric, total_budget_payments as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'personal_income_tax' as metric, personal_income_tax as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'social_security_payments' as metric, social_security_payments as value FROM yearly_data
),
-- 3. solis: Sarindojam katras metrikas ne-nulles vērtības pēc gada (dilstošā secībā)
ranked_data AS (
    SELECT
        slug,
        metric,
        value,
        year,
        ROW_NUMBER() OVER(PARTITION BY slug, metric ORDER BY year DESC) as rn
    FROM long_data
    WHERE value IS NOT NULL
),
-- 4. solis: Apvienojam jaunāko (N) un iepriekšējo (N-1) vērtību katrai metrikai
combined_data AS (
    SELECT
        slug,
        metric,
        MAX(CASE WHEN rn = 1 THEN value END) as current_value,
        MAX(CASE WHEN rn = 1 THEN year END) as current_year,
        MAX(CASE WHEN rn = 2 THEN value END) as previous_value,
        MAX(CASE WHEN rn = 2 THEN year END) as previous_year
    FROM ranked_data
    WHERE rn <= 2
    GROUP BY slug, metric
),
-- 5. solis: Pārveidojam datus atpakaļ uz platu formātu, kur katra metrika ir kolonna
final_pivot AS (
    SELECT
        slug,
        -- Turnover
        MAX(CASE WHEN metric = 'turnover' THEN current_value END) as turnover,
        MAX(CASE WHEN metric = 'turnover' THEN current_year END) as turnover_year,
        MAX(CASE WHEN metric = 'turnover' THEN previous_value END) as previous_turnover,
        MAX(CASE WHEN metric = 'turnover' THEN previous_year END) as previous_turnover_year,
        -- Profit
        MAX(CASE WHEN metric = 'profit' THEN current_value END) as profit,
        MAX(CASE WHEN metric = 'profit' THEN current_year END) as profit_year,
        MAX(CASE WHEN metric = 'profit' THEN previous_value END) as previous_profit,
        MAX(CASE WHEN metric = 'profit' THEN previous_year END) as previous_profit_year,
        -- Employees
        MAX(CASE WHEN metric = 'employees_gp' THEN current_value END) as employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN current_year END) as employees_gp_year,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_value END) as previous_employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_year END) as previous_employees_gp_year,
        -- Total Budget Payments
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_value END) as total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_year END) as total_budget_payments_year,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_value END) as previous_total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_year END) as previous_total_budget_payments_year,
        -- Personal Income Tax
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_value END) as personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_year END) as personal_income_tax_year,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_value END) as previous_personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_year END) as previous_personal_income_tax_year,
        -- Social Security Payments
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_value END) as social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_year END) as social_security_payments_year,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_value END) as previous_social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_year END) as previous_social_security_payments_year
    FROM combined_data
    GROUP BY slug
)
-- 6. solis: Pievienojam zīmola nosaukumu un aprēķinām DELTA procentos
SELECT
    s.brand_name,
    fp.*,
    CASE WHEN fp.turnover IS NOT NULL AND fp.previous_turnover IS NOT NULL AND fp.previous_turnover != 0 THEN (fp.turnover - fp.previous_turnover) * 100.0 / fp.previous_turnover ELSE NULL END AS turnover_delta_percent,
    CASE WHEN fp.profit IS NOT NULL AND fp.previous_profit IS NOT NULL AND fp.previous_profit != 0 THEN (fp.profit - fp.previous_profit) * 100.0 / fp.previous_profit ELSE NULL END AS profit_delta_percent,
    CASE WHEN fp.employees_gp IS NOT NULL AND fp.previous_employees_gp IS NOT NULL AND fp.previous_employees_gp != 0 THEN (fp.employees_gp - fp.previous_employees_gp) * 100.0 / fp.previous_employees_gp ELSE NULL END AS employees_gp_delta_percent,
    CASE WHEN fp.total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments != 0 THEN (fp.total_budget_payments - fp.previous_total_budget_payments) * 100.0 / fp.previous_total_budget_payments ELSE NULL END AS total_budget_payments_delta_percent,
    CASE WHEN fp.personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax != 0 THEN (fp.personal_income_tax - fp.previous_personal_income_tax) * 100.0 / fp.previous_personal_income_tax ELSE NULL END AS personal_income_tax_delta_percent,
    CASE WHEN fp.social_security_payments IS NOT NULL AND fp.previous_social_security_payments IS NOT NULL AND fp.previous_social_security_payments != 0 THEN (fp.social_security_payments - fp.previous_social_security_payments) * 100.0 / fp.previous_social_security_payments ELSE NULL END AS social_security_payments_delta_percent
FROM
    final_pivot fp
JOIN
    (SELECT DISTINCT slug, brand_name FROM source) s ON fp.slug = s.slug
ORDER BY
    fp.slug`;o.startup_overview_data&&(o.startup_overview_data instanceof Error?k.initialError=o.startup_overview_data:k.initialData=o.startup_overview_data,o.startup_overview_columns&&(k.knownColumns=o.startup_overview_columns));let x,L=!1;const v=ve.createReactive({callback:Se=>{r(1,x=Se)},execFn:u},{id:"startup_overview",...k});v(B,{noResolve:H,...k}),globalThis[Symbol.for("startup_overview")]={get value(){return x}};let f={initialData:void 0,initialError:void 0},h=Ce`WITH all_business_models AS (
  SELECT
    UNNEST(business_models) AS business_model
  FROM
    (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
)
SELECT
  DISTINCT business_model
FROM
  all_business_models`,U=`WITH all_business_models AS (
  SELECT
    UNNEST(business_models) AS business_model
  FROM
    (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
)
SELECT
  DISTINCT business_model
FROM
  all_business_models`;o.business_models_data&&(o.business_models_data instanceof Error?f.initialError=o.business_models_data:f.initialData=o.business_models_data,o.business_models_columns&&(f.knownColumns=o.business_models_columns));let d,D=!1;const w=ve.createReactive({callback:Se=>{r(2,d=Se)},execFn:u},{id:"business_models",...f});w(U,{noResolve:h,...f}),globalThis[Symbol.for("business_models")]={get value(){return d}};let K={initialData:void 0,initialError:void 0},O=Ce`WITH all_sectors AS (
  SELECT
    UNNEST(sectors) AS sector
  FROM
    (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
)
SELECT
  DISTINCT sector
FROM
  all_sectors`,$=`WITH all_sectors AS (
  SELECT
    UNNEST(sectors) AS sector
  FROM
    (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
)
SELECT
  DISTINCT sector
FROM
  all_sectors`;o.sectors_data&&(o.sectors_data instanceof Error?K.initialError=o.sectors_data:K.initialData=o.sectors_data,o.sectors_columns&&(K.knownColumns=o.sectors_columns));let re,y=!1;const X=ve.createReactive({callback:Se=>{r(3,re=Se)},execFn:u},{id:"sectors",...K});X($,{noResolve:O,...K}),globalThis[Symbol.for("sectors")]={get value(){return re}};let G={initialData:void 0,initialError:void 0},P=Ce`SELECT
  founded_year,
  COUNT(*) AS startup_count
FROM
  (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
WHERE
  founded_year IS NOT NULL
  AND founded_year < 2025
GROUP BY
  founded_year
ORDER BY
  founded_year ASC`,ae=`SELECT
  founded_year,
  COUNT(*) AS startup_count
FROM
  (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
WHERE
  founded_year IS NOT NULL
  AND founded_year < 2025
GROUP BY
  founded_year
ORDER BY
  founded_year ASC`;o.founding_year_overview_data&&(o.founding_year_overview_data instanceof Error?G.initialError=o.founding_year_overview_data:G.initialData=o.founding_year_overview_data,o.founding_year_overview_columns&&(G.knownColumns=o.founding_year_overview_columns));let Ae,ie=!1;const se=ve.createReactive({callback:Se=>{r(4,Ae=Se)},execFn:u},{id:"founding_year_overview",...G});se(ae,{noResolve:P,...G}),globalThis[Symbol.for("founding_year_overview")]={get value(){return Ae}};let te={initialData:void 0,initialError:void 0},ee=Ce`SELECT
  business_models,
  COUNT(*) AS startup_count
FROM
  (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
GROUP BY
  business_models`,ue=`SELECT
  business_models,
  COUNT(*) AS startup_count
FROM
  (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
GROUP BY
  business_models`;o.software_hardware_split_data&&(o.software_hardware_split_data instanceof Error?te.initialError=o.software_hardware_split_data:te.initialData=o.software_hardware_split_data,o.software_hardware_split_columns&&(te.knownColumns=o.software_hardware_split_columns));let fe,ye=!1;const ge=ve.createReactive({callback:Se=>{r(5,fe=Se)},execFn:u},{id:"software_hardware_split",...te});ge(ue,{noResolve:ee,...te}),globalThis[Symbol.for("software_hardware_split")]={get value(){return fe}};let ce={initialData:void 0,initialError:void 0},g=Ce`WITH data AS (
  SELECT
    COUNT(*) AS total_startups,
    SUM(turnover_2023) AS total_turnover,
    SUM(profit_2023) AS total_profit,
    SUM(employees_gp_2023) AS total_employees,
    SUM(total_budget_payments_2023) AS total_budget_payments,

    -- 2022 values for reference
    SUM(turnover_2022) AS total_turnover_2022,
    SUM(profit_2022) AS total_profit_2022,
    SUM(employees_gp_2022) AS total_employees_2022,
    SUM(total_budget_payments_2022) AS total_budget_payments_2022
  FROM
    (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
)
SELECT
  total_startups,
  total_turnover,
  total_profit,
  total_employees,
  total_budget_payments,

   (total_turnover - total_turnover_2022) / total_turnover_2022 AS turnover_delta_percent,
  (total_profit - total_profit_2022) / total_profit_2022 AS profit_delta_percent,
  (total_employees - total_employees_2022) / total_employees_2022 AS employees_delta_percent,
  (total_budget_payments - total_budget_payments_2022) / total_budget_payments_2022 AS budget_payments_delta_percent
FROM
  data`,j=`WITH data AS (
  SELECT
    COUNT(*) AS total_startups,
    SUM(turnover_2023) AS total_turnover,
    SUM(profit_2023) AS total_profit,
    SUM(employees_gp_2023) AS total_employees,
    SUM(total_budget_payments_2023) AS total_budget_payments,

    -- 2022 values for reference
    SUM(turnover_2022) AS total_turnover_2022,
    SUM(profit_2022) AS total_profit_2022,
    SUM(employees_gp_2022) AS total_employees_2022,
    SUM(total_budget_payments_2022) AS total_budget_payments_2022
  FROM
    (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
)
SELECT
  total_startups,
  total_turnover,
  total_profit,
  total_employees,
  total_budget_payments,

   (total_turnover - total_turnover_2022) / total_turnover_2022 AS turnover_delta_percent,
  (total_profit - total_profit_2022) / total_profit_2022 AS profit_delta_percent,
  (total_employees - total_employees_2022) / total_employees_2022 AS employees_delta_percent,
  (total_budget_payments - total_budget_payments_2022) / total_budget_payments_2022 AS budget_payments_delta_percent
FROM
  data`;o.startup_aggregate_data_data&&(o.startup_aggregate_data_data instanceof Error?ce.initialError=o.startup_aggregate_data_data:ce.initialData=o.startup_aggregate_data_data,o.startup_aggregate_data_columns&&(ce.knownColumns=o.startup_aggregate_data_columns));let $e,et=!1;const tt=ve.createReactive({callback:Se=>{r(6,$e=Se)},execFn:u},{id:"startup_aggregate_data",...ce});tt(j,{noResolve:g,...ce}),globalThis[Symbol.for("startup_aggregate_data")]={get value(){return $e}};let He={initialData:void 0,initialError:void 0},Ie=Ce`SELECT
  MAX(employees_gp) AS maxColumn
FROM
  (-- 1. solis: Datu transformācija no plata uz garu formātu (UNPIVOT)
WITH
source AS (
  SELECT
    *
  FROM (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
),
yearly_data AS (
  SELECT
    brand_name,
    slug,
    2024 AS year,
    turnover_2024 AS turnover,
    profit_2024 AS profit,
    employees_gp_2024 AS employees_gp,
    total_budget_payments_2024 AS total_budget_payments,
    personal_income_tax_2024 AS personal_income_tax,
    social_security_payments_2024 AS social_security_payments
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2023 AS year,
    turnover_2023,
    profit_2023,
    employees_gp_2023,
    total_budget_payments_2023,
    personal_income_tax_2023,
    social_security_payments_2023
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2022 AS year,
    turnover_2022,
    profit_2022,
    employees_gp_2022,
    total_budget_payments_2022,
    personal_income_tax_2022,
    social_security_payments_2022
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2021 AS year,
    turnover_2021,
    profit_2021,
    employees_gp_2021,
    total_budget_payments_2021,
    NULL,
    NULL
  FROM source
),
-- 2. solis: Pārveidojam datus, lai katra metrika būtu atsevišķa rinda
long_data AS (
    SELECT slug, year, 'turnover' as metric, turnover as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'profit' as metric, profit as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'employees_gp' as metric, employees_gp as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'total_budget_payments' as metric, total_budget_payments as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'personal_income_tax' as metric, personal_income_tax as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'social_security_payments' as metric, social_security_payments as value FROM yearly_data
),
-- 3. solis: Sarindojam katras metrikas ne-nulles vērtības pēc gada (dilstošā secībā)
ranked_data AS (
    SELECT
        slug,
        metric,
        value,
        year,
        ROW_NUMBER() OVER(PARTITION BY slug, metric ORDER BY year DESC) as rn
    FROM long_data
    WHERE value IS NOT NULL
),
-- 4. solis: Apvienojam jaunāko (N) un iepriekšējo (N-1) vērtību katrai metrikai
combined_data AS (
    SELECT
        slug,
        metric,
        MAX(CASE WHEN rn = 1 THEN value END) as current_value,
        MAX(CASE WHEN rn = 1 THEN year END) as current_year,
        MAX(CASE WHEN rn = 2 THEN value END) as previous_value,
        MAX(CASE WHEN rn = 2 THEN year END) as previous_year
    FROM ranked_data
    WHERE rn <= 2
    GROUP BY slug, metric
),
-- 5. solis: Pārveidojam datus atpakaļ uz platu formātu, kur katra metrika ir kolonna
final_pivot AS (
    SELECT
        slug,
        -- Turnover
        MAX(CASE WHEN metric = 'turnover' THEN current_value END) as turnover,
        MAX(CASE WHEN metric = 'turnover' THEN current_year END) as turnover_year,
        MAX(CASE WHEN metric = 'turnover' THEN previous_value END) as previous_turnover,
        MAX(CASE WHEN metric = 'turnover' THEN previous_year END) as previous_turnover_year,
        -- Profit
        MAX(CASE WHEN metric = 'profit' THEN current_value END) as profit,
        MAX(CASE WHEN metric = 'profit' THEN current_year END) as profit_year,
        MAX(CASE WHEN metric = 'profit' THEN previous_value END) as previous_profit,
        MAX(CASE WHEN metric = 'profit' THEN previous_year END) as previous_profit_year,
        -- Employees
        MAX(CASE WHEN metric = 'employees_gp' THEN current_value END) as employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN current_year END) as employees_gp_year,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_value END) as previous_employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_year END) as previous_employees_gp_year,
        -- Total Budget Payments
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_value END) as total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_year END) as total_budget_payments_year,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_value END) as previous_total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_year END) as previous_total_budget_payments_year,
        -- Personal Income Tax
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_value END) as personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_year END) as personal_income_tax_year,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_value END) as previous_personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_year END) as previous_personal_income_tax_year,
        -- Social Security Payments
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_value END) as social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_year END) as social_security_payments_year,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_value END) as previous_social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_year END) as previous_social_security_payments_year
    FROM combined_data
    GROUP BY slug
)
-- 6. solis: Pievienojam zīmola nosaukumu un aprēķinām DELTA procentos
SELECT
    s.brand_name,
    fp.*,
    CASE WHEN fp.turnover IS NOT NULL AND fp.previous_turnover IS NOT NULL AND fp.previous_turnover != 0 THEN (fp.turnover - fp.previous_turnover) * 100.0 / fp.previous_turnover ELSE NULL END AS turnover_delta_percent,
    CASE WHEN fp.profit IS NOT NULL AND fp.previous_profit IS NOT NULL AND fp.previous_profit != 0 THEN (fp.profit - fp.previous_profit) * 100.0 / fp.previous_profit ELSE NULL END AS profit_delta_percent,
    CASE WHEN fp.employees_gp IS NOT NULL AND fp.previous_employees_gp IS NOT NULL AND fp.previous_employees_gp != 0 THEN (fp.employees_gp - fp.previous_employees_gp) * 100.0 / fp.previous_employees_gp ELSE NULL END AS employees_gp_delta_percent,
    CASE WHEN fp.total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments != 0 THEN (fp.total_budget_payments - fp.previous_total_budget_payments) * 100.0 / fp.previous_total_budget_payments ELSE NULL END AS total_budget_payments_delta_percent,
    CASE WHEN fp.personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax != 0 THEN (fp.personal_income_tax - fp.previous_personal_income_tax) * 100.0 / fp.previous_personal_income_tax ELSE NULL END AS personal_income_tax_delta_percent,
    CASE WHEN fp.social_security_payments IS NOT NULL AND fp.previous_social_security_payments IS NOT NULL AND fp.previous_social_security_payments != 0 THEN (fp.social_security_payments - fp.previous_social_security_payments) * 100.0 / fp.previous_social_security_payments ELSE NULL END AS social_security_payments_delta_percent
FROM
    final_pivot fp
JOIN
    (SELECT DISTINCT slug, brand_name FROM source) s ON fp.slug = s.slug
ORDER BY
    fp.slug)`,Re=`SELECT
  MAX(employees_gp) AS maxColumn
FROM
  (-- 1. solis: Datu transformācija no plata uz garu formātu (UNPIVOT)
WITH
source AS (
  SELECT
    *
  FROM (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
),
yearly_data AS (
  SELECT
    brand_name,
    slug,
    2024 AS year,
    turnover_2024 AS turnover,
    profit_2024 AS profit,
    employees_gp_2024 AS employees_gp,
    total_budget_payments_2024 AS total_budget_payments,
    personal_income_tax_2024 AS personal_income_tax,
    social_security_payments_2024 AS social_security_payments
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2023 AS year,
    turnover_2023,
    profit_2023,
    employees_gp_2023,
    total_budget_payments_2023,
    personal_income_tax_2023,
    social_security_payments_2023
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2022 AS year,
    turnover_2022,
    profit_2022,
    employees_gp_2022,
    total_budget_payments_2022,
    personal_income_tax_2022,
    social_security_payments_2022
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2021 AS year,
    turnover_2021,
    profit_2021,
    employees_gp_2021,
    total_budget_payments_2021,
    NULL,
    NULL
  FROM source
),
-- 2. solis: Pārveidojam datus, lai katra metrika būtu atsevišķa rinda
long_data AS (
    SELECT slug, year, 'turnover' as metric, turnover as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'profit' as metric, profit as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'employees_gp' as metric, employees_gp as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'total_budget_payments' as metric, total_budget_payments as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'personal_income_tax' as metric, personal_income_tax as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'social_security_payments' as metric, social_security_payments as value FROM yearly_data
),
-- 3. solis: Sarindojam katras metrikas ne-nulles vērtības pēc gada (dilstošā secībā)
ranked_data AS (
    SELECT
        slug,
        metric,
        value,
        year,
        ROW_NUMBER() OVER(PARTITION BY slug, metric ORDER BY year DESC) as rn
    FROM long_data
    WHERE value IS NOT NULL
),
-- 4. solis: Apvienojam jaunāko (N) un iepriekšējo (N-1) vērtību katrai metrikai
combined_data AS (
    SELECT
        slug,
        metric,
        MAX(CASE WHEN rn = 1 THEN value END) as current_value,
        MAX(CASE WHEN rn = 1 THEN year END) as current_year,
        MAX(CASE WHEN rn = 2 THEN value END) as previous_value,
        MAX(CASE WHEN rn = 2 THEN year END) as previous_year
    FROM ranked_data
    WHERE rn <= 2
    GROUP BY slug, metric
),
-- 5. solis: Pārveidojam datus atpakaļ uz platu formātu, kur katra metrika ir kolonna
final_pivot AS (
    SELECT
        slug,
        -- Turnover
        MAX(CASE WHEN metric = 'turnover' THEN current_value END) as turnover,
        MAX(CASE WHEN metric = 'turnover' THEN current_year END) as turnover_year,
        MAX(CASE WHEN metric = 'turnover' THEN previous_value END) as previous_turnover,
        MAX(CASE WHEN metric = 'turnover' THEN previous_year END) as previous_turnover_year,
        -- Profit
        MAX(CASE WHEN metric = 'profit' THEN current_value END) as profit,
        MAX(CASE WHEN metric = 'profit' THEN current_year END) as profit_year,
        MAX(CASE WHEN metric = 'profit' THEN previous_value END) as previous_profit,
        MAX(CASE WHEN metric = 'profit' THEN previous_year END) as previous_profit_year,
        -- Employees
        MAX(CASE WHEN metric = 'employees_gp' THEN current_value END) as employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN current_year END) as employees_gp_year,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_value END) as previous_employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_year END) as previous_employees_gp_year,
        -- Total Budget Payments
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_value END) as total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_year END) as total_budget_payments_year,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_value END) as previous_total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_year END) as previous_total_budget_payments_year,
        -- Personal Income Tax
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_value END) as personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_year END) as personal_income_tax_year,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_value END) as previous_personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_year END) as previous_personal_income_tax_year,
        -- Social Security Payments
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_value END) as social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_year END) as social_security_payments_year,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_value END) as previous_social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_year END) as previous_social_security_payments_year
    FROM combined_data
    GROUP BY slug
)
-- 6. solis: Pievienojam zīmola nosaukumu un aprēķinām DELTA procentos
SELECT
    s.brand_name,
    fp.*,
    CASE WHEN fp.turnover IS NOT NULL AND fp.previous_turnover IS NOT NULL AND fp.previous_turnover != 0 THEN (fp.turnover - fp.previous_turnover) * 100.0 / fp.previous_turnover ELSE NULL END AS turnover_delta_percent,
    CASE WHEN fp.profit IS NOT NULL AND fp.previous_profit IS NOT NULL AND fp.previous_profit != 0 THEN (fp.profit - fp.previous_profit) * 100.0 / fp.previous_profit ELSE NULL END AS profit_delta_percent,
    CASE WHEN fp.employees_gp IS NOT NULL AND fp.previous_employees_gp IS NOT NULL AND fp.previous_employees_gp != 0 THEN (fp.employees_gp - fp.previous_employees_gp) * 100.0 / fp.previous_employees_gp ELSE NULL END AS employees_gp_delta_percent,
    CASE WHEN fp.total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments != 0 THEN (fp.total_budget_payments - fp.previous_total_budget_payments) * 100.0 / fp.previous_total_budget_payments ELSE NULL END AS total_budget_payments_delta_percent,
    CASE WHEN fp.personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax != 0 THEN (fp.personal_income_tax - fp.previous_personal_income_tax) * 100.0 / fp.previous_personal_income_tax ELSE NULL END AS personal_income_tax_delta_percent,
    CASE WHEN fp.social_security_payments IS NOT NULL AND fp.previous_social_security_payments IS NOT NULL AND fp.previous_social_security_payments != 0 THEN (fp.social_security_payments - fp.previous_social_security_payments) * 100.0 / fp.previous_social_security_payments ELSE NULL END AS social_security_payments_delta_percent
FROM
    final_pivot fp
JOIN
    (SELECT DISTINCT slug, brand_name FROM source) s ON fp.slug = s.slug
ORDER BY
    fp.slug)`;o.max_employees_data&&(o.max_employees_data instanceof Error?He.initialError=o.max_employees_data:He.initialData=o.max_employees_data,o.max_employees_columns&&(He.knownColumns=o.max_employees_columns));let Et,bt=!1;const vt=ve.createReactive({callback:Se=>{r(7,Et=Se)},execFn:u},{id:"max_employees",...He});vt(Re,{noResolve:Ie,...He}),globalThis[Symbol.for("max_employees")]={get value(){return Et}};let Qe={initialData:void 0,initialError:void 0},Je=Ce`SELECT
  *
FROM
  (-- 1. solis: Datu transformācija no plata uz garu formātu (UNPIVOT)
WITH
source AS (
  SELECT
    *
  FROM (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
),
yearly_data AS (
  SELECT
    brand_name,
    slug,
    2024 AS year,
    turnover_2024 AS turnover,
    profit_2024 AS profit,
    employees_gp_2024 AS employees_gp,
    total_budget_payments_2024 AS total_budget_payments,
    personal_income_tax_2024 AS personal_income_tax,
    social_security_payments_2024 AS social_security_payments
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2023 AS year,
    turnover_2023,
    profit_2023,
    employees_gp_2023,
    total_budget_payments_2023,
    personal_income_tax_2023,
    social_security_payments_2023
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2022 AS year,
    turnover_2022,
    profit_2022,
    employees_gp_2022,
    total_budget_payments_2022,
    personal_income_tax_2022,
    social_security_payments_2022
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2021 AS year,
    turnover_2021,
    profit_2021,
    employees_gp_2021,
    total_budget_payments_2021,
    NULL,
    NULL
  FROM source
),
-- 2. solis: Pārveidojam datus, lai katra metrika būtu atsevišķa rinda
long_data AS (
    SELECT slug, year, 'turnover' as metric, turnover as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'profit' as metric, profit as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'employees_gp' as metric, employees_gp as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'total_budget_payments' as metric, total_budget_payments as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'personal_income_tax' as metric, personal_income_tax as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'social_security_payments' as metric, social_security_payments as value FROM yearly_data
),
-- 3. solis: Sarindojam katras metrikas ne-nulles vērtības pēc gada (dilstošā secībā)
ranked_data AS (
    SELECT
        slug,
        metric,
        value,
        year,
        ROW_NUMBER() OVER(PARTITION BY slug, metric ORDER BY year DESC) as rn
    FROM long_data
    WHERE value IS NOT NULL
),
-- 4. solis: Apvienojam jaunāko (N) un iepriekšējo (N-1) vērtību katrai metrikai
combined_data AS (
    SELECT
        slug,
        metric,
        MAX(CASE WHEN rn = 1 THEN value END) as current_value,
        MAX(CASE WHEN rn = 1 THEN year END) as current_year,
        MAX(CASE WHEN rn = 2 THEN value END) as previous_value,
        MAX(CASE WHEN rn = 2 THEN year END) as previous_year
    FROM ranked_data
    WHERE rn <= 2
    GROUP BY slug, metric
),
-- 5. solis: Pārveidojam datus atpakaļ uz platu formātu, kur katra metrika ir kolonna
final_pivot AS (
    SELECT
        slug,
        -- Turnover
        MAX(CASE WHEN metric = 'turnover' THEN current_value END) as turnover,
        MAX(CASE WHEN metric = 'turnover' THEN current_year END) as turnover_year,
        MAX(CASE WHEN metric = 'turnover' THEN previous_value END) as previous_turnover,
        MAX(CASE WHEN metric = 'turnover' THEN previous_year END) as previous_turnover_year,
        -- Profit
        MAX(CASE WHEN metric = 'profit' THEN current_value END) as profit,
        MAX(CASE WHEN metric = 'profit' THEN current_year END) as profit_year,
        MAX(CASE WHEN metric = 'profit' THEN previous_value END) as previous_profit,
        MAX(CASE WHEN metric = 'profit' THEN previous_year END) as previous_profit_year,
        -- Employees
        MAX(CASE WHEN metric = 'employees_gp' THEN current_value END) as employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN current_year END) as employees_gp_year,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_value END) as previous_employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_year END) as previous_employees_gp_year,
        -- Total Budget Payments
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_value END) as total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_year END) as total_budget_payments_year,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_value END) as previous_total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_year END) as previous_total_budget_payments_year,
        -- Personal Income Tax
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_value END) as personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_year END) as personal_income_tax_year,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_value END) as previous_personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_year END) as previous_personal_income_tax_year,
        -- Social Security Payments
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_value END) as social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_year END) as social_security_payments_year,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_value END) as previous_social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_year END) as previous_social_security_payments_year
    FROM combined_data
    GROUP BY slug
)
-- 6. solis: Pievienojam zīmola nosaukumu un aprēķinām DELTA procentos
SELECT
    s.brand_name,
    fp.*,
    CASE WHEN fp.turnover IS NOT NULL AND fp.previous_turnover IS NOT NULL AND fp.previous_turnover != 0 THEN (fp.turnover - fp.previous_turnover) * 100.0 / fp.previous_turnover ELSE NULL END AS turnover_delta_percent,
    CASE WHEN fp.profit IS NOT NULL AND fp.previous_profit IS NOT NULL AND fp.previous_profit != 0 THEN (fp.profit - fp.previous_profit) * 100.0 / fp.previous_profit ELSE NULL END AS profit_delta_percent,
    CASE WHEN fp.employees_gp IS NOT NULL AND fp.previous_employees_gp IS NOT NULL AND fp.previous_employees_gp != 0 THEN (fp.employees_gp - fp.previous_employees_gp) * 100.0 / fp.previous_employees_gp ELSE NULL END AS employees_gp_delta_percent,
    CASE WHEN fp.total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments != 0 THEN (fp.total_budget_payments - fp.previous_total_budget_payments) * 100.0 / fp.previous_total_budget_payments ELSE NULL END AS total_budget_payments_delta_percent,
    CASE WHEN fp.personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax != 0 THEN (fp.personal_income_tax - fp.previous_personal_income_tax) * 100.0 / fp.previous_personal_income_tax ELSE NULL END AS personal_income_tax_delta_percent,
    CASE WHEN fp.social_security_payments IS NOT NULL AND fp.previous_social_security_payments IS NOT NULL AND fp.previous_social_security_payments != 0 THEN (fp.social_security_payments - fp.previous_social_security_payments) * 100.0 / fp.previous_social_security_payments ELSE NULL END AS social_security_payments_delta_percent
FROM
    final_pivot fp
JOIN
    (SELECT DISTINCT slug, brand_name FROM source) s ON fp.slug = s.slug
ORDER BY
    fp.slug)
WHERE
  employees_gp >= ${l.employees}`,nt=`SELECT
  *
FROM
  (-- 1. solis: Datu transformācija no plata uz garu formātu (UNPIVOT)
WITH
source AS (
  SELECT
    *
  FROM (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
),
yearly_data AS (
  SELECT
    brand_name,
    slug,
    2024 AS year,
    turnover_2024 AS turnover,
    profit_2024 AS profit,
    employees_gp_2024 AS employees_gp,
    total_budget_payments_2024 AS total_budget_payments,
    personal_income_tax_2024 AS personal_income_tax,
    social_security_payments_2024 AS social_security_payments
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2023 AS year,
    turnover_2023,
    profit_2023,
    employees_gp_2023,
    total_budget_payments_2023,
    personal_income_tax_2023,
    social_security_payments_2023
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2022 AS year,
    turnover_2022,
    profit_2022,
    employees_gp_2022,
    total_budget_payments_2022,
    personal_income_tax_2022,
    social_security_payments_2022
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2021 AS year,
    turnover_2021,
    profit_2021,
    employees_gp_2021,
    total_budget_payments_2021,
    NULL,
    NULL
  FROM source
),
-- 2. solis: Pārveidojam datus, lai katra metrika būtu atsevišķa rinda
long_data AS (
    SELECT slug, year, 'turnover' as metric, turnover as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'profit' as metric, profit as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'employees_gp' as metric, employees_gp as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'total_budget_payments' as metric, total_budget_payments as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'personal_income_tax' as metric, personal_income_tax as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'social_security_payments' as metric, social_security_payments as value FROM yearly_data
),
-- 3. solis: Sarindojam katras metrikas ne-nulles vērtības pēc gada (dilstošā secībā)
ranked_data AS (
    SELECT
        slug,
        metric,
        value,
        year,
        ROW_NUMBER() OVER(PARTITION BY slug, metric ORDER BY year DESC) as rn
    FROM long_data
    WHERE value IS NOT NULL
),
-- 4. solis: Apvienojam jaunāko (N) un iepriekšējo (N-1) vērtību katrai metrikai
combined_data AS (
    SELECT
        slug,
        metric,
        MAX(CASE WHEN rn = 1 THEN value END) as current_value,
        MAX(CASE WHEN rn = 1 THEN year END) as current_year,
        MAX(CASE WHEN rn = 2 THEN value END) as previous_value,
        MAX(CASE WHEN rn = 2 THEN year END) as previous_year
    FROM ranked_data
    WHERE rn <= 2
    GROUP BY slug, metric
),
-- 5. solis: Pārveidojam datus atpakaļ uz platu formātu, kur katra metrika ir kolonna
final_pivot AS (
    SELECT
        slug,
        -- Turnover
        MAX(CASE WHEN metric = 'turnover' THEN current_value END) as turnover,
        MAX(CASE WHEN metric = 'turnover' THEN current_year END) as turnover_year,
        MAX(CASE WHEN metric = 'turnover' THEN previous_value END) as previous_turnover,
        MAX(CASE WHEN metric = 'turnover' THEN previous_year END) as previous_turnover_year,
        -- Profit
        MAX(CASE WHEN metric = 'profit' THEN current_value END) as profit,
        MAX(CASE WHEN metric = 'profit' THEN current_year END) as profit_year,
        MAX(CASE WHEN metric = 'profit' THEN previous_value END) as previous_profit,
        MAX(CASE WHEN metric = 'profit' THEN previous_year END) as previous_profit_year,
        -- Employees
        MAX(CASE WHEN metric = 'employees_gp' THEN current_value END) as employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN current_year END) as employees_gp_year,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_value END) as previous_employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_year END) as previous_employees_gp_year,
        -- Total Budget Payments
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_value END) as total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_year END) as total_budget_payments_year,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_value END) as previous_total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_year END) as previous_total_budget_payments_year,
        -- Personal Income Tax
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_value END) as personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_year END) as personal_income_tax_year,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_value END) as previous_personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_year END) as previous_personal_income_tax_year,
        -- Social Security Payments
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_value END) as social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_year END) as social_security_payments_year,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_value END) as previous_social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_year END) as previous_social_security_payments_year
    FROM combined_data
    GROUP BY slug
)
-- 6. solis: Pievienojam zīmola nosaukumu un aprēķinām DELTA procentos
SELECT
    s.brand_name,
    fp.*,
    CASE WHEN fp.turnover IS NOT NULL AND fp.previous_turnover IS NOT NULL AND fp.previous_turnover != 0 THEN (fp.turnover - fp.previous_turnover) * 100.0 / fp.previous_turnover ELSE NULL END AS turnover_delta_percent,
    CASE WHEN fp.profit IS NOT NULL AND fp.previous_profit IS NOT NULL AND fp.previous_profit != 0 THEN (fp.profit - fp.previous_profit) * 100.0 / fp.previous_profit ELSE NULL END AS profit_delta_percent,
    CASE WHEN fp.employees_gp IS NOT NULL AND fp.previous_employees_gp IS NOT NULL AND fp.previous_employees_gp != 0 THEN (fp.employees_gp - fp.previous_employees_gp) * 100.0 / fp.previous_employees_gp ELSE NULL END AS employees_gp_delta_percent,
    CASE WHEN fp.total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments != 0 THEN (fp.total_budget_payments - fp.previous_total_budget_payments) * 100.0 / fp.previous_total_budget_payments ELSE NULL END AS total_budget_payments_delta_percent,
    CASE WHEN fp.personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax != 0 THEN (fp.personal_income_tax - fp.previous_personal_income_tax) * 100.0 / fp.previous_personal_income_tax ELSE NULL END AS personal_income_tax_delta_percent,
    CASE WHEN fp.social_security_payments IS NOT NULL AND fp.previous_social_security_payments IS NOT NULL AND fp.previous_social_security_payments != 0 THEN (fp.social_security_payments - fp.previous_social_security_payments) * 100.0 / fp.previous_social_security_payments ELSE NULL END AS social_security_payments_delta_percent
FROM
    final_pivot fp
JOIN
    (SELECT DISTINCT slug, brand_name FROM source) s ON fp.slug = s.slug
ORDER BY
    fp.slug)
WHERE
  employees_gp >= ${l.employees}`;o.startup_overview_filtered_data&&(o.startup_overview_filtered_data instanceof Error?Qe.initialError=o.startup_overview_filtered_data:Qe.initialData=o.startup_overview_filtered_data,o.startup_overview_filtered_columns&&(Qe.knownColumns=o.startup_overview_filtered_columns));let Nt,Tt=!1;const Lt=ve.createReactive({callback:Se=>{r(8,Nt=Se)},execFn:u},{id:"startup_overview_filtered",...Qe});return Lt(nt,{noResolve:Je,...Qe}),globalThis[Symbol.for("startup_overview_filtered")]={get value(){return Nt}},_.$$set=Se=>{"data"in Se&&r(9,s=Se.data)},_.$$.update=()=>{_.$$.dirty[0]&512&&r(10,{data:o={},customFormattingSettings:n,__db:i}=s,o),_.$$.dirty[0]&1024&&ha.set(Object.keys(o).length>0),_.$$.dirty[1]&131072&&t.params,_.$$.dirty[0]&61440&&(T||!R?T||(F(C,{noResolve:T,...A}),r(15,R=!0)):F(C,{noResolve:T})),_.$$.dirty[0]&983040&&(H||!L?H||(v(B,{noResolve:H,...k}),r(19,L=!0)):v(B,{noResolve:H})),_.$$.dirty[0]&15728640&&(h||!D?h||(w(U,{noResolve:h,...f}),r(23,D=!0)):w(U,{noResolve:h})),_.$$.dirty[0]&251658240&&(O||!y?O||(X($,{noResolve:O,...K}),r(27,y=!0)):X($,{noResolve:O})),_.$$.dirty[0]&1879048192|_.$$.dirty[1]&1&&(P||!ie?P||(se(ae,{noResolve:P,...G}),r(31,ie=!0)):se(ae,{noResolve:P})),_.$$.dirty[1]&30&&(ee||!ye?ee||(ge(ue,{noResolve:ee,...te}),r(35,ye=!0)):ge(ue,{noResolve:ee})),_.$$.dirty[1]&480&&(g||!et?g||(tt(j,{noResolve:g,...ce}),r(39,et=!0)):tt(j,{noResolve:g})),_.$$.dirty[1]&7680&&(Ie||!bt?Ie||(vt(Re,{noResolve:Ie,...He}),r(43,bt=!0)):vt(Re,{noResolve:Ie})),_.$$.dirty[0]&2048&&r(45,Je=Ce`SELECT
  *
FROM
  (-- 1. solis: Datu transformācija no plata uz garu formātu (UNPIVOT)
WITH
source AS (
  SELECT
    *
  FROM (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
),
yearly_data AS (
  SELECT
    brand_name,
    slug,
    2024 AS year,
    turnover_2024 AS turnover,
    profit_2024 AS profit,
    employees_gp_2024 AS employees_gp,
    total_budget_payments_2024 AS total_budget_payments,
    personal_income_tax_2024 AS personal_income_tax,
    social_security_payments_2024 AS social_security_payments
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2023 AS year,
    turnover_2023,
    profit_2023,
    employees_gp_2023,
    total_budget_payments_2023,
    personal_income_tax_2023,
    social_security_payments_2023
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2022 AS year,
    turnover_2022,
    profit_2022,
    employees_gp_2022,
    total_budget_payments_2022,
    personal_income_tax_2022,
    social_security_payments_2022
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2021 AS year,
    turnover_2021,
    profit_2021,
    employees_gp_2021,
    total_budget_payments_2021,
    NULL,
    NULL
  FROM source
),
-- 2. solis: Pārveidojam datus, lai katra metrika būtu atsevišķa rinda
long_data AS (
    SELECT slug, year, 'turnover' as metric, turnover as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'profit' as metric, profit as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'employees_gp' as metric, employees_gp as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'total_budget_payments' as metric, total_budget_payments as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'personal_income_tax' as metric, personal_income_tax as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'social_security_payments' as metric, social_security_payments as value FROM yearly_data
),
-- 3. solis: Sarindojam katras metrikas ne-nulles vērtības pēc gada (dilstošā secībā)
ranked_data AS (
    SELECT
        slug,
        metric,
        value,
        year,
        ROW_NUMBER() OVER(PARTITION BY slug, metric ORDER BY year DESC) as rn
    FROM long_data
    WHERE value IS NOT NULL
),
-- 4. solis: Apvienojam jaunāko (N) un iepriekšējo (N-1) vērtību katrai metrikai
combined_data AS (
    SELECT
        slug,
        metric,
        MAX(CASE WHEN rn = 1 THEN value END) as current_value,
        MAX(CASE WHEN rn = 1 THEN year END) as current_year,
        MAX(CASE WHEN rn = 2 THEN value END) as previous_value,
        MAX(CASE WHEN rn = 2 THEN year END) as previous_year
    FROM ranked_data
    WHERE rn <= 2
    GROUP BY slug, metric
),
-- 5. solis: Pārveidojam datus atpakaļ uz platu formātu, kur katra metrika ir kolonna
final_pivot AS (
    SELECT
        slug,
        -- Turnover
        MAX(CASE WHEN metric = 'turnover' THEN current_value END) as turnover,
        MAX(CASE WHEN metric = 'turnover' THEN current_year END) as turnover_year,
        MAX(CASE WHEN metric = 'turnover' THEN previous_value END) as previous_turnover,
        MAX(CASE WHEN metric = 'turnover' THEN previous_year END) as previous_turnover_year,
        -- Profit
        MAX(CASE WHEN metric = 'profit' THEN current_value END) as profit,
        MAX(CASE WHEN metric = 'profit' THEN current_year END) as profit_year,
        MAX(CASE WHEN metric = 'profit' THEN previous_value END) as previous_profit,
        MAX(CASE WHEN metric = 'profit' THEN previous_year END) as previous_profit_year,
        -- Employees
        MAX(CASE WHEN metric = 'employees_gp' THEN current_value END) as employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN current_year END) as employees_gp_year,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_value END) as previous_employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_year END) as previous_employees_gp_year,
        -- Total Budget Payments
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_value END) as total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_year END) as total_budget_payments_year,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_value END) as previous_total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_year END) as previous_total_budget_payments_year,
        -- Personal Income Tax
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_value END) as personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_year END) as personal_income_tax_year,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_value END) as previous_personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_year END) as previous_personal_income_tax_year,
        -- Social Security Payments
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_value END) as social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_year END) as social_security_payments_year,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_value END) as previous_social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_year END) as previous_social_security_payments_year
    FROM combined_data
    GROUP BY slug
)
-- 6. solis: Pievienojam zīmola nosaukumu un aprēķinām DELTA procentos
SELECT
    s.brand_name,
    fp.*,
    CASE WHEN fp.turnover IS NOT NULL AND fp.previous_turnover IS NOT NULL AND fp.previous_turnover != 0 THEN (fp.turnover - fp.previous_turnover) * 100.0 / fp.previous_turnover ELSE NULL END AS turnover_delta_percent,
    CASE WHEN fp.profit IS NOT NULL AND fp.previous_profit IS NOT NULL AND fp.previous_profit != 0 THEN (fp.profit - fp.previous_profit) * 100.0 / fp.previous_profit ELSE NULL END AS profit_delta_percent,
    CASE WHEN fp.employees_gp IS NOT NULL AND fp.previous_employees_gp IS NOT NULL AND fp.previous_employees_gp != 0 THEN (fp.employees_gp - fp.previous_employees_gp) * 100.0 / fp.previous_employees_gp ELSE NULL END AS employees_gp_delta_percent,
    CASE WHEN fp.total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments != 0 THEN (fp.total_budget_payments - fp.previous_total_budget_payments) * 100.0 / fp.previous_total_budget_payments ELSE NULL END AS total_budget_payments_delta_percent,
    CASE WHEN fp.personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax != 0 THEN (fp.personal_income_tax - fp.previous_personal_income_tax) * 100.0 / fp.previous_personal_income_tax ELSE NULL END AS personal_income_tax_delta_percent,
    CASE WHEN fp.social_security_payments IS NOT NULL AND fp.previous_social_security_payments IS NOT NULL AND fp.previous_social_security_payments != 0 THEN (fp.social_security_payments - fp.previous_social_security_payments) * 100.0 / fp.previous_social_security_payments ELSE NULL END AS social_security_payments_delta_percent
FROM
    final_pivot fp
JOIN
    (SELECT DISTINCT slug, brand_name FROM source) s ON fp.slug = s.slug
ORDER BY
    fp.slug)
WHERE
  employees_gp >= ${l.employees}`),_.$$.dirty[0]&2048&&r(46,nt=`SELECT
  *
FROM
  (-- 1. solis: Datu transformācija no plata uz garu formātu (UNPIVOT)
WITH
source AS (
  SELECT
    *
  FROM (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
),
yearly_data AS (
  SELECT
    brand_name,
    slug,
    2024 AS year,
    turnover_2024 AS turnover,
    profit_2024 AS profit,
    employees_gp_2024 AS employees_gp,
    total_budget_payments_2024 AS total_budget_payments,
    personal_income_tax_2024 AS personal_income_tax,
    social_security_payments_2024 AS social_security_payments
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2023 AS year,
    turnover_2023,
    profit_2023,
    employees_gp_2023,
    total_budget_payments_2023,
    personal_income_tax_2023,
    social_security_payments_2023
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2022 AS year,
    turnover_2022,
    profit_2022,
    employees_gp_2022,
    total_budget_payments_2022,
    personal_income_tax_2022,
    social_security_payments_2022
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2021 AS year,
    turnover_2021,
    profit_2021,
    employees_gp_2021,
    total_budget_payments_2021,
    NULL,
    NULL
  FROM source
),
-- 2. solis: Pārveidojam datus, lai katra metrika būtu atsevišķa rinda
long_data AS (
    SELECT slug, year, 'turnover' as metric, turnover as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'profit' as metric, profit as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'employees_gp' as metric, employees_gp as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'total_budget_payments' as metric, total_budget_payments as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'personal_income_tax' as metric, personal_income_tax as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'social_security_payments' as metric, social_security_payments as value FROM yearly_data
),
-- 3. solis: Sarindojam katras metrikas ne-nulles vērtības pēc gada (dilstošā secībā)
ranked_data AS (
    SELECT
        slug,
        metric,
        value,
        year,
        ROW_NUMBER() OVER(PARTITION BY slug, metric ORDER BY year DESC) as rn
    FROM long_data
    WHERE value IS NOT NULL
),
-- 4. solis: Apvienojam jaunāko (N) un iepriekšējo (N-1) vērtību katrai metrikai
combined_data AS (
    SELECT
        slug,
        metric,
        MAX(CASE WHEN rn = 1 THEN value END) as current_value,
        MAX(CASE WHEN rn = 1 THEN year END) as current_year,
        MAX(CASE WHEN rn = 2 THEN value END) as previous_value,
        MAX(CASE WHEN rn = 2 THEN year END) as previous_year
    FROM ranked_data
    WHERE rn <= 2
    GROUP BY slug, metric
),
-- 5. solis: Pārveidojam datus atpakaļ uz platu formātu, kur katra metrika ir kolonna
final_pivot AS (
    SELECT
        slug,
        -- Turnover
        MAX(CASE WHEN metric = 'turnover' THEN current_value END) as turnover,
        MAX(CASE WHEN metric = 'turnover' THEN current_year END) as turnover_year,
        MAX(CASE WHEN metric = 'turnover' THEN previous_value END) as previous_turnover,
        MAX(CASE WHEN metric = 'turnover' THEN previous_year END) as previous_turnover_year,
        -- Profit
        MAX(CASE WHEN metric = 'profit' THEN current_value END) as profit,
        MAX(CASE WHEN metric = 'profit' THEN current_year END) as profit_year,
        MAX(CASE WHEN metric = 'profit' THEN previous_value END) as previous_profit,
        MAX(CASE WHEN metric = 'profit' THEN previous_year END) as previous_profit_year,
        -- Employees
        MAX(CASE WHEN metric = 'employees_gp' THEN current_value END) as employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN current_year END) as employees_gp_year,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_value END) as previous_employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_year END) as previous_employees_gp_year,
        -- Total Budget Payments
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_value END) as total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_year END) as total_budget_payments_year,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_value END) as previous_total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_year END) as previous_total_budget_payments_year,
        -- Personal Income Tax
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_value END) as personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_year END) as personal_income_tax_year,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_value END) as previous_personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_year END) as previous_personal_income_tax_year,
        -- Social Security Payments
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_value END) as social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_year END) as social_security_payments_year,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_value END) as previous_social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_year END) as previous_social_security_payments_year
    FROM combined_data
    GROUP BY slug
)
-- 6. solis: Pievienojam zīmola nosaukumu un aprēķinām DELTA procentos
SELECT
    s.brand_name,
    fp.*,
    CASE WHEN fp.turnover IS NOT NULL AND fp.previous_turnover IS NOT NULL AND fp.previous_turnover != 0 THEN (fp.turnover - fp.previous_turnover) * 100.0 / fp.previous_turnover ELSE NULL END AS turnover_delta_percent,
    CASE WHEN fp.profit IS NOT NULL AND fp.previous_profit IS NOT NULL AND fp.previous_profit != 0 THEN (fp.profit - fp.previous_profit) * 100.0 / fp.previous_profit ELSE NULL END AS profit_delta_percent,
    CASE WHEN fp.employees_gp IS NOT NULL AND fp.previous_employees_gp IS NOT NULL AND fp.previous_employees_gp != 0 THEN (fp.employees_gp - fp.previous_employees_gp) * 100.0 / fp.previous_employees_gp ELSE NULL END AS employees_gp_delta_percent,
    CASE WHEN fp.total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments != 0 THEN (fp.total_budget_payments - fp.previous_total_budget_payments) * 100.0 / fp.previous_total_budget_payments ELSE NULL END AS total_budget_payments_delta_percent,
    CASE WHEN fp.personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax != 0 THEN (fp.personal_income_tax - fp.previous_personal_income_tax) * 100.0 / fp.previous_personal_income_tax ELSE NULL END AS personal_income_tax_delta_percent,
    CASE WHEN fp.social_security_payments IS NOT NULL AND fp.previous_social_security_payments IS NOT NULL AND fp.previous_social_security_payments != 0 THEN (fp.social_security_payments - fp.previous_social_security_payments) * 100.0 / fp.previous_social_security_payments ELSE NULL END AS social_security_payments_delta_percent
FROM
    final_pivot fp
JOIN
    (SELECT DISTINCT slug, brand_name FROM source) s ON fp.slug = s.slug
ORDER BY
    fp.slug)
WHERE
  employees_gp >= ${l.employees}`),_.$$.dirty[1]&122880&&(Je||!Tt?Je||(Lt(nt,{noResolve:Je,...Qe}),r(47,Tt=!0)):Lt(nt,{noResolve:Je}))},r(13,T=Ce`WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source`),r(14,C=`WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source`),r(17,H=Ce`-- 1. solis: Datu transformācija no plata uz garu formātu (UNPIVOT)
WITH
source AS (
  SELECT
    *
  FROM (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
),
yearly_data AS (
  SELECT
    brand_name,
    slug,
    2024 AS year,
    turnover_2024 AS turnover,
    profit_2024 AS profit,
    employees_gp_2024 AS employees_gp,
    total_budget_payments_2024 AS total_budget_payments,
    personal_income_tax_2024 AS personal_income_tax,
    social_security_payments_2024 AS social_security_payments
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2023 AS year,
    turnover_2023,
    profit_2023,
    employees_gp_2023,
    total_budget_payments_2023,
    personal_income_tax_2023,
    social_security_payments_2023
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2022 AS year,
    turnover_2022,
    profit_2022,
    employees_gp_2022,
    total_budget_payments_2022,
    personal_income_tax_2022,
    social_security_payments_2022
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2021 AS year,
    turnover_2021,
    profit_2021,
    employees_gp_2021,
    total_budget_payments_2021,
    NULL,
    NULL
  FROM source
),
-- 2. solis: Pārveidojam datus, lai katra metrika būtu atsevišķa rinda
long_data AS (
    SELECT slug, year, 'turnover' as metric, turnover as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'profit' as metric, profit as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'employees_gp' as metric, employees_gp as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'total_budget_payments' as metric, total_budget_payments as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'personal_income_tax' as metric, personal_income_tax as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'social_security_payments' as metric, social_security_payments as value FROM yearly_data
),
-- 3. solis: Sarindojam katras metrikas ne-nulles vērtības pēc gada (dilstošā secībā)
ranked_data AS (
    SELECT
        slug,
        metric,
        value,
        year,
        ROW_NUMBER() OVER(PARTITION BY slug, metric ORDER BY year DESC) as rn
    FROM long_data
    WHERE value IS NOT NULL
),
-- 4. solis: Apvienojam jaunāko (N) un iepriekšējo (N-1) vērtību katrai metrikai
combined_data AS (
    SELECT
        slug,
        metric,
        MAX(CASE WHEN rn = 1 THEN value END) as current_value,
        MAX(CASE WHEN rn = 1 THEN year END) as current_year,
        MAX(CASE WHEN rn = 2 THEN value END) as previous_value,
        MAX(CASE WHEN rn = 2 THEN year END) as previous_year
    FROM ranked_data
    WHERE rn <= 2
    GROUP BY slug, metric
),
-- 5. solis: Pārveidojam datus atpakaļ uz platu formātu, kur katra metrika ir kolonna
final_pivot AS (
    SELECT
        slug,
        -- Turnover
        MAX(CASE WHEN metric = 'turnover' THEN current_value END) as turnover,
        MAX(CASE WHEN metric = 'turnover' THEN current_year END) as turnover_year,
        MAX(CASE WHEN metric = 'turnover' THEN previous_value END) as previous_turnover,
        MAX(CASE WHEN metric = 'turnover' THEN previous_year END) as previous_turnover_year,
        -- Profit
        MAX(CASE WHEN metric = 'profit' THEN current_value END) as profit,
        MAX(CASE WHEN metric = 'profit' THEN current_year END) as profit_year,
        MAX(CASE WHEN metric = 'profit' THEN previous_value END) as previous_profit,
        MAX(CASE WHEN metric = 'profit' THEN previous_year END) as previous_profit_year,
        -- Employees
        MAX(CASE WHEN metric = 'employees_gp' THEN current_value END) as employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN current_year END) as employees_gp_year,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_value END) as previous_employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_year END) as previous_employees_gp_year,
        -- Total Budget Payments
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_value END) as total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_year END) as total_budget_payments_year,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_value END) as previous_total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_year END) as previous_total_budget_payments_year,
        -- Personal Income Tax
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_value END) as personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_year END) as personal_income_tax_year,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_value END) as previous_personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_year END) as previous_personal_income_tax_year,
        -- Social Security Payments
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_value END) as social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_year END) as social_security_payments_year,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_value END) as previous_social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_year END) as previous_social_security_payments_year
    FROM combined_data
    GROUP BY slug
)
-- 6. solis: Pievienojam zīmola nosaukumu un aprēķinām DELTA procentos
SELECT
    s.brand_name,
    fp.*,
    CASE WHEN fp.turnover IS NOT NULL AND fp.previous_turnover IS NOT NULL AND fp.previous_turnover != 0 THEN (fp.turnover - fp.previous_turnover) * 100.0 / fp.previous_turnover ELSE NULL END AS turnover_delta_percent,
    CASE WHEN fp.profit IS NOT NULL AND fp.previous_profit IS NOT NULL AND fp.previous_profit != 0 THEN (fp.profit - fp.previous_profit) * 100.0 / fp.previous_profit ELSE NULL END AS profit_delta_percent,
    CASE WHEN fp.employees_gp IS NOT NULL AND fp.previous_employees_gp IS NOT NULL AND fp.previous_employees_gp != 0 THEN (fp.employees_gp - fp.previous_employees_gp) * 100.0 / fp.previous_employees_gp ELSE NULL END AS employees_gp_delta_percent,
    CASE WHEN fp.total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments != 0 THEN (fp.total_budget_payments - fp.previous_total_budget_payments) * 100.0 / fp.previous_total_budget_payments ELSE NULL END AS total_budget_payments_delta_percent,
    CASE WHEN fp.personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax != 0 THEN (fp.personal_income_tax - fp.previous_personal_income_tax) * 100.0 / fp.previous_personal_income_tax ELSE NULL END AS personal_income_tax_delta_percent,
    CASE WHEN fp.social_security_payments IS NOT NULL AND fp.previous_social_security_payments IS NOT NULL AND fp.previous_social_security_payments != 0 THEN (fp.social_security_payments - fp.previous_social_security_payments) * 100.0 / fp.previous_social_security_payments ELSE NULL END AS social_security_payments_delta_percent
FROM
    final_pivot fp
JOIN
    (SELECT DISTINCT slug, brand_name FROM source) s ON fp.slug = s.slug
ORDER BY
    fp.slug`),r(18,B=`-- 1. solis: Datu transformācija no plata uz garu formātu (UNPIVOT)
WITH
source AS (
  SELECT
    *
  FROM (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
),
yearly_data AS (
  SELECT
    brand_name,
    slug,
    2024 AS year,
    turnover_2024 AS turnover,
    profit_2024 AS profit,
    employees_gp_2024 AS employees_gp,
    total_budget_payments_2024 AS total_budget_payments,
    personal_income_tax_2024 AS personal_income_tax,
    social_security_payments_2024 AS social_security_payments
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2023 AS year,
    turnover_2023,
    profit_2023,
    employees_gp_2023,
    total_budget_payments_2023,
    personal_income_tax_2023,
    social_security_payments_2023
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2022 AS year,
    turnover_2022,
    profit_2022,
    employees_gp_2022,
    total_budget_payments_2022,
    personal_income_tax_2022,
    social_security_payments_2022
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2021 AS year,
    turnover_2021,
    profit_2021,
    employees_gp_2021,
    total_budget_payments_2021,
    NULL,
    NULL
  FROM source
),
-- 2. solis: Pārveidojam datus, lai katra metrika būtu atsevišķa rinda
long_data AS (
    SELECT slug, year, 'turnover' as metric, turnover as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'profit' as metric, profit as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'employees_gp' as metric, employees_gp as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'total_budget_payments' as metric, total_budget_payments as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'personal_income_tax' as metric, personal_income_tax as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'social_security_payments' as metric, social_security_payments as value FROM yearly_data
),
-- 3. solis: Sarindojam katras metrikas ne-nulles vērtības pēc gada (dilstošā secībā)
ranked_data AS (
    SELECT
        slug,
        metric,
        value,
        year,
        ROW_NUMBER() OVER(PARTITION BY slug, metric ORDER BY year DESC) as rn
    FROM long_data
    WHERE value IS NOT NULL
),
-- 4. solis: Apvienojam jaunāko (N) un iepriekšējo (N-1) vērtību katrai metrikai
combined_data AS (
    SELECT
        slug,
        metric,
        MAX(CASE WHEN rn = 1 THEN value END) as current_value,
        MAX(CASE WHEN rn = 1 THEN year END) as current_year,
        MAX(CASE WHEN rn = 2 THEN value END) as previous_value,
        MAX(CASE WHEN rn = 2 THEN year END) as previous_year
    FROM ranked_data
    WHERE rn <= 2
    GROUP BY slug, metric
),
-- 5. solis: Pārveidojam datus atpakaļ uz platu formātu, kur katra metrika ir kolonna
final_pivot AS (
    SELECT
        slug,
        -- Turnover
        MAX(CASE WHEN metric = 'turnover' THEN current_value END) as turnover,
        MAX(CASE WHEN metric = 'turnover' THEN current_year END) as turnover_year,
        MAX(CASE WHEN metric = 'turnover' THEN previous_value END) as previous_turnover,
        MAX(CASE WHEN metric = 'turnover' THEN previous_year END) as previous_turnover_year,
        -- Profit
        MAX(CASE WHEN metric = 'profit' THEN current_value END) as profit,
        MAX(CASE WHEN metric = 'profit' THEN current_year END) as profit_year,
        MAX(CASE WHEN metric = 'profit' THEN previous_value END) as previous_profit,
        MAX(CASE WHEN metric = 'profit' THEN previous_year END) as previous_profit_year,
        -- Employees
        MAX(CASE WHEN metric = 'employees_gp' THEN current_value END) as employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN current_year END) as employees_gp_year,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_value END) as previous_employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_year END) as previous_employees_gp_year,
        -- Total Budget Payments
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_value END) as total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_year END) as total_budget_payments_year,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_value END) as previous_total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_year END) as previous_total_budget_payments_year,
        -- Personal Income Tax
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_value END) as personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_year END) as personal_income_tax_year,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_value END) as previous_personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_year END) as previous_personal_income_tax_year,
        -- Social Security Payments
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_value END) as social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_year END) as social_security_payments_year,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_value END) as previous_social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_year END) as previous_social_security_payments_year
    FROM combined_data
    GROUP BY slug
)
-- 6. solis: Pievienojam zīmola nosaukumu un aprēķinām DELTA procentos
SELECT
    s.brand_name,
    fp.*,
    CASE WHEN fp.turnover IS NOT NULL AND fp.previous_turnover IS NOT NULL AND fp.previous_turnover != 0 THEN (fp.turnover - fp.previous_turnover) * 100.0 / fp.previous_turnover ELSE NULL END AS turnover_delta_percent,
    CASE WHEN fp.profit IS NOT NULL AND fp.previous_profit IS NOT NULL AND fp.previous_profit != 0 THEN (fp.profit - fp.previous_profit) * 100.0 / fp.previous_profit ELSE NULL END AS profit_delta_percent,
    CASE WHEN fp.employees_gp IS NOT NULL AND fp.previous_employees_gp IS NOT NULL AND fp.previous_employees_gp != 0 THEN (fp.employees_gp - fp.previous_employees_gp) * 100.0 / fp.previous_employees_gp ELSE NULL END AS employees_gp_delta_percent,
    CASE WHEN fp.total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments != 0 THEN (fp.total_budget_payments - fp.previous_total_budget_payments) * 100.0 / fp.previous_total_budget_payments ELSE NULL END AS total_budget_payments_delta_percent,
    CASE WHEN fp.personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax != 0 THEN (fp.personal_income_tax - fp.previous_personal_income_tax) * 100.0 / fp.previous_personal_income_tax ELSE NULL END AS personal_income_tax_delta_percent,
    CASE WHEN fp.social_security_payments IS NOT NULL AND fp.previous_social_security_payments IS NOT NULL AND fp.previous_social_security_payments != 0 THEN (fp.social_security_payments - fp.previous_social_security_payments) * 100.0 / fp.previous_social_security_payments ELSE NULL END AS social_security_payments_delta_percent
FROM
    final_pivot fp
JOIN
    (SELECT DISTINCT slug, brand_name FROM source) s ON fp.slug = s.slug
ORDER BY
    fp.slug`),r(21,h=Ce`WITH all_business_models AS (
  SELECT
    UNNEST(business_models) AS business_model
  FROM
    (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
)
SELECT
  DISTINCT business_model
FROM
  all_business_models`),r(22,U=`WITH all_business_models AS (
  SELECT
    UNNEST(business_models) AS business_model
  FROM
    (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
)
SELECT
  DISTINCT business_model
FROM
  all_business_models`),r(25,O=Ce`WITH all_sectors AS (
  SELECT
    UNNEST(sectors) AS sector
  FROM
    (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
)
SELECT
  DISTINCT sector
FROM
  all_sectors`),r(26,$=`WITH all_sectors AS (
  SELECT
    UNNEST(sectors) AS sector
  FROM
    (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
)
SELECT
  DISTINCT sector
FROM
  all_sectors`),r(29,P=Ce`SELECT
  founded_year,
  COUNT(*) AS startup_count
FROM
  (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
WHERE
  founded_year IS NOT NULL
  AND founded_year < 2025
GROUP BY
  founded_year
ORDER BY
  founded_year ASC`),r(30,ae=`SELECT
  founded_year,
  COUNT(*) AS startup_count
FROM
  (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
WHERE
  founded_year IS NOT NULL
  AND founded_year < 2025
GROUP BY
  founded_year
ORDER BY
  founded_year ASC`),r(33,ee=Ce`SELECT
  business_models,
  COUNT(*) AS startup_count
FROM
  (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
GROUP BY
  business_models`),r(34,ue=`SELECT
  business_models,
  COUNT(*) AS startup_count
FROM
  (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
GROUP BY
  business_models`),r(37,g=Ce`WITH data AS (
  SELECT
    COUNT(*) AS total_startups,
    SUM(turnover_2023) AS total_turnover,
    SUM(profit_2023) AS total_profit,
    SUM(employees_gp_2023) AS total_employees,
    SUM(total_budget_payments_2023) AS total_budget_payments,

    -- 2022 values for reference
    SUM(turnover_2022) AS total_turnover_2022,
    SUM(profit_2022) AS total_profit_2022,
    SUM(employees_gp_2022) AS total_employees_2022,
    SUM(total_budget_payments_2022) AS total_budget_payments_2022
  FROM
    (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
)
SELECT
  total_startups,
  total_turnover,
  total_profit,
  total_employees,
  total_budget_payments,

   (total_turnover - total_turnover_2022) / total_turnover_2022 AS turnover_delta_percent,
  (total_profit - total_profit_2022) / total_profit_2022 AS profit_delta_percent,
  (total_employees - total_employees_2022) / total_employees_2022 AS employees_delta_percent,
  (total_budget_payments - total_budget_payments_2022) / total_budget_payments_2022 AS budget_payments_delta_percent
FROM
  data`),r(38,j=`WITH data AS (
  SELECT
    COUNT(*) AS total_startups,
    SUM(turnover_2023) AS total_turnover,
    SUM(profit_2023) AS total_profit,
    SUM(employees_gp_2023) AS total_employees,
    SUM(total_budget_payments_2023) AS total_budget_payments,

    -- 2022 values for reference
    SUM(turnover_2022) AS total_turnover_2022,
    SUM(profit_2022) AS total_profit_2022,
    SUM(employees_gp_2022) AS total_employees_2022,
    SUM(total_budget_payments_2022) AS total_budget_payments_2022
  FROM
    (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
)
SELECT
  total_startups,
  total_turnover,
  total_profit,
  total_employees,
  total_budget_payments,

   (total_turnover - total_turnover_2022) / total_turnover_2022 AS turnover_delta_percent,
  (total_profit - total_profit_2022) / total_profit_2022 AS profit_delta_percent,
  (total_employees - total_employees_2022) / total_employees_2022 AS employees_delta_percent,
  (total_budget_payments - total_budget_payments_2022) / total_budget_payments_2022 AS budget_payments_delta_percent
FROM
  data`),r(41,Ie=Ce`SELECT
  MAX(employees_gp) AS maxColumn
FROM
  (-- 1. solis: Datu transformācija no plata uz garu formātu (UNPIVOT)
WITH
source AS (
  SELECT
    *
  FROM (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
),
yearly_data AS (
  SELECT
    brand_name,
    slug,
    2024 AS year,
    turnover_2024 AS turnover,
    profit_2024 AS profit,
    employees_gp_2024 AS employees_gp,
    total_budget_payments_2024 AS total_budget_payments,
    personal_income_tax_2024 AS personal_income_tax,
    social_security_payments_2024 AS social_security_payments
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2023 AS year,
    turnover_2023,
    profit_2023,
    employees_gp_2023,
    total_budget_payments_2023,
    personal_income_tax_2023,
    social_security_payments_2023
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2022 AS year,
    turnover_2022,
    profit_2022,
    employees_gp_2022,
    total_budget_payments_2022,
    personal_income_tax_2022,
    social_security_payments_2022
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2021 AS year,
    turnover_2021,
    profit_2021,
    employees_gp_2021,
    total_budget_payments_2021,
    NULL,
    NULL
  FROM source
),
-- 2. solis: Pārveidojam datus, lai katra metrika būtu atsevišķa rinda
long_data AS (
    SELECT slug, year, 'turnover' as metric, turnover as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'profit' as metric, profit as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'employees_gp' as metric, employees_gp as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'total_budget_payments' as metric, total_budget_payments as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'personal_income_tax' as metric, personal_income_tax as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'social_security_payments' as metric, social_security_payments as value FROM yearly_data
),
-- 3. solis: Sarindojam katras metrikas ne-nulles vērtības pēc gada (dilstošā secībā)
ranked_data AS (
    SELECT
        slug,
        metric,
        value,
        year,
        ROW_NUMBER() OVER(PARTITION BY slug, metric ORDER BY year DESC) as rn
    FROM long_data
    WHERE value IS NOT NULL
),
-- 4. solis: Apvienojam jaunāko (N) un iepriekšējo (N-1) vērtību katrai metrikai
combined_data AS (
    SELECT
        slug,
        metric,
        MAX(CASE WHEN rn = 1 THEN value END) as current_value,
        MAX(CASE WHEN rn = 1 THEN year END) as current_year,
        MAX(CASE WHEN rn = 2 THEN value END) as previous_value,
        MAX(CASE WHEN rn = 2 THEN year END) as previous_year
    FROM ranked_data
    WHERE rn <= 2
    GROUP BY slug, metric
),
-- 5. solis: Pārveidojam datus atpakaļ uz platu formātu, kur katra metrika ir kolonna
final_pivot AS (
    SELECT
        slug,
        -- Turnover
        MAX(CASE WHEN metric = 'turnover' THEN current_value END) as turnover,
        MAX(CASE WHEN metric = 'turnover' THEN current_year END) as turnover_year,
        MAX(CASE WHEN metric = 'turnover' THEN previous_value END) as previous_turnover,
        MAX(CASE WHEN metric = 'turnover' THEN previous_year END) as previous_turnover_year,
        -- Profit
        MAX(CASE WHEN metric = 'profit' THEN current_value END) as profit,
        MAX(CASE WHEN metric = 'profit' THEN current_year END) as profit_year,
        MAX(CASE WHEN metric = 'profit' THEN previous_value END) as previous_profit,
        MAX(CASE WHEN metric = 'profit' THEN previous_year END) as previous_profit_year,
        -- Employees
        MAX(CASE WHEN metric = 'employees_gp' THEN current_value END) as employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN current_year END) as employees_gp_year,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_value END) as previous_employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_year END) as previous_employees_gp_year,
        -- Total Budget Payments
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_value END) as total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_year END) as total_budget_payments_year,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_value END) as previous_total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_year END) as previous_total_budget_payments_year,
        -- Personal Income Tax
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_value END) as personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_year END) as personal_income_tax_year,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_value END) as previous_personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_year END) as previous_personal_income_tax_year,
        -- Social Security Payments
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_value END) as social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_year END) as social_security_payments_year,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_value END) as previous_social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_year END) as previous_social_security_payments_year
    FROM combined_data
    GROUP BY slug
)
-- 6. solis: Pievienojam zīmola nosaukumu un aprēķinām DELTA procentos
SELECT
    s.brand_name,
    fp.*,
    CASE WHEN fp.turnover IS NOT NULL AND fp.previous_turnover IS NOT NULL AND fp.previous_turnover != 0 THEN (fp.turnover - fp.previous_turnover) * 100.0 / fp.previous_turnover ELSE NULL END AS turnover_delta_percent,
    CASE WHEN fp.profit IS NOT NULL AND fp.previous_profit IS NOT NULL AND fp.previous_profit != 0 THEN (fp.profit - fp.previous_profit) * 100.0 / fp.previous_profit ELSE NULL END AS profit_delta_percent,
    CASE WHEN fp.employees_gp IS NOT NULL AND fp.previous_employees_gp IS NOT NULL AND fp.previous_employees_gp != 0 THEN (fp.employees_gp - fp.previous_employees_gp) * 100.0 / fp.previous_employees_gp ELSE NULL END AS employees_gp_delta_percent,
    CASE WHEN fp.total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments != 0 THEN (fp.total_budget_payments - fp.previous_total_budget_payments) * 100.0 / fp.previous_total_budget_payments ELSE NULL END AS total_budget_payments_delta_percent,
    CASE WHEN fp.personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax != 0 THEN (fp.personal_income_tax - fp.previous_personal_income_tax) * 100.0 / fp.previous_personal_income_tax ELSE NULL END AS personal_income_tax_delta_percent,
    CASE WHEN fp.social_security_payments IS NOT NULL AND fp.previous_social_security_payments IS NOT NULL AND fp.previous_social_security_payments != 0 THEN (fp.social_security_payments - fp.previous_social_security_payments) * 100.0 / fp.previous_social_security_payments ELSE NULL END AS social_security_payments_delta_percent
FROM
    final_pivot fp
JOIN
    (SELECT DISTINCT slug, brand_name FROM source) s ON fp.slug = s.slug
ORDER BY
    fp.slug)`),r(42,Re=`SELECT
  MAX(employees_gp) AS maxColumn
FROM
  (-- 1. solis: Datu transformācija no plata uz garu formātu (UNPIVOT)
WITH
source AS (
  SELECT
    *
  FROM (WITH
  -- 1. solis: Izejas datu atlase un kolonnu pārdēvēšana
  input_source AS (
    SELECT
      "Reģistrācijas numurs" AS registration_number,
      "Brand Name" AS brand_name,
      "Website" AS website,
      "Linkedin" AS linkedin,
      "Description" AS description,
      "Logo" AS logo,
      "General Email" AS general_email,
      "Founder's Names" AS founders_names,
      "Sector" AS sectors,
      "Business Model" AS business_models,
      "Software / Hardware" AS software_hardware_tags,
      "Lursoft URL" AS lursoft_url,
      "SIA Nosaukums" AS company_name,
      "VAT number" AS vat_number,
      "Founded Year" AS founded_year,
      "pilseta" AS city,
      "Number of shareholders" AS shareholder_count,
      "Number of legal entity sharholders" AS legal_entity_shareholder_count,
      "Number of female shareholders" AS female_shareholder_count,
      "Average age of shareholders" AS shareholder_average_age,
      "Latvian owned share %" AS latvian_ownership_percent,
      "Foreign owned share %" AS foreign_ownership_percent,
      "Apgrozījums 2024" AS turnover_2024,
      "Peļņa 2024" AS profit_2024,
      "Darbinieku skaits GP 2024" AS employees_gp_2024,
      "Kopējie maksājumi valsts kopbudžetā 2024" AS total_budget_payments_2024,
      "Iedzīvotāju ienākuma nodoklis 2024" AS personal_income_tax_2024,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2024" AS social_security_payments_2024,
      "Apgrozījums 2023" AS turnover_2023,
      "Peļņa 2023" AS profit_2023,
      "Darbinieku skaits GP 2023" AS employees_gp_2023,
      "Kopējie maksājumi valsts kopbudžetā 2023" AS total_budget_payments_2023,
      "Iedzīvotāju ienākuma nodoklis 2023" AS personal_income_tax_2023,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2023" AS social_security_payments_2023,
      "Apgrozījums 2022" AS turnover_2022,
      "Peļņa 2022" AS profit_2022,
      "Darbinieku skaits GP 2022" AS employees_gp_2022,
      "Kopējie maksājumi valsts kopbudžetā 2022" AS total_budget_payments_2022,
      "Iedzīvotāju ienākuma nodoklis 2022" AS personal_income_tax_2022,
      "Valsts sociālās apdrošināšanas obligātās iemaksas 2022" AS social_security_payments_2022,
      "Apgrozījums 2021" AS turnover_2021,
      "Peļņa 2021" AS profit_2021,
      "Darbinieku skaits GP 2021" AS employees_gp_2021,
      "Kopējie maksājumi valsts kopbudžetā 2021" AS total_budget_payments_2021
    FROM
      startin.database_source
  ),
  -- 2. solis: Datu tīrīšana un transformācija
  transformed_source AS (
    SELECT
      brand_name,
      website,
      linkedin,
      description,
      logo,
      general_email,
      founders_names,
      lursoft_url,
      company_name,
      vat_number,
      city,
      founded_year,
      
      CAST(CAST(registration_number AS BIGINT) AS VARCHAR) AS registration_number,

      list_transform(string_split_regex(sectors, '[,&/]'), x -> trim(x)) AS sectors,
      list_transform(string_split(business_models, ','), x -> trim(x)) AS business_models,
      list_transform(string_split(software_hardware_tags, ','), x -> trim(x)) AS software_hardware_tags,

      CAST(shareholder_average_age AS INTEGER) AS shareholder_average_age,
      shareholder_count,
      legal_entity_shareholder_count,
      female_shareholder_count,
      latvian_ownership_percent,
      foreign_ownership_percent,

      CAST(regexp_replace(turnover_2024, ',', '', 'g') AS DOUBLE) AS turnover_2024,
      CAST(regexp_replace(profit_2024, ',', '', 'g') AS DOUBLE) AS profit_2024,
      CAST(regexp_replace(employees_gp_2024, ',', '', 'g') AS DOUBLE) AS employees_gp_2024,
      CAST(regexp_replace(total_budget_payments_2024, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2024,
      CAST(regexp_replace(personal_income_tax_2024, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2024,
      CAST(regexp_replace(social_security_payments_2024, ',', '', 'g') AS DOUBLE) AS social_security_payments_2024,
      
      CAST(regexp_replace(turnover_2023, ',', '', 'g') AS DOUBLE) AS turnover_2023,
      CAST(regexp_replace(profit_2023, ',', '', 'g') AS DOUBLE) AS profit_2023,
      CAST(regexp_replace(employees_gp_2023, ',', '', 'g') AS DOUBLE) AS employees_gp_2023,
      CAST(regexp_replace(total_budget_payments_2023, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2023,
      CAST(regexp_replace(personal_income_tax_2023, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2023,
      CAST(regexp_replace(social_security_payments_2023, ',', '', 'g') AS DOUBLE) AS social_security_payments_2023,

      CAST(regexp_replace(turnover_2022, ',', '', 'g') AS DOUBLE) AS turnover_2022,
      CAST(regexp_replace(profit_2022, ',', '', 'g') AS DOUBLE) AS profit_2022,
      CAST(regexp_replace(employees_gp_2022, ',', '', 'g') AS DOUBLE) AS employees_gp_2022,
      CAST(regexp_replace(total_budget_payments_2022, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2022,
      CAST(regexp_replace(personal_income_tax_2022, ',', '', 'g') AS DOUBLE) AS personal_income_tax_2022,
      CAST(regexp_replace(social_security_payments_2022, ',', '', 'g') AS DOUBLE) AS social_security_payments_2022,

      CAST(regexp_replace(turnover_2021, ',', '', 'g') AS DOUBLE) AS turnover_2021,
      CAST(regexp_replace(profit_2021, ',', '', 'g') AS DOUBLE) AS profit_2021,
      CAST(regexp_replace(employees_gp_2021, ',', '', 'g') AS DOUBLE) AS employees_gp_2021,
      CAST(regexp_replace(total_budget_payments_2021, ',', '', 'g') AS DOUBLE) AS total_budget_payments_2021
    FROM
      input_source
),
-- 3. solis: Datu bagātināšana ar jauniem laukiem
enriched_source AS (
  SELECT
    trim(regexp_replace(lower(brand_name), '[^a-z0-9]+', '-', 'g'), '-') AS slug,
    list_contains(sectors, 'AI') AS is_ai,
    list_contains(business_models, 'Marketplace') AS is_marketplace,
    list_contains(business_models, 'B2G') AS is_government,
    list_filter(sectors, x -> x != 'AI') AS sectors,
    list_filter(business_models, x -> x != 'Marketplace' AND x != 'B2G') AS business_models,
    * EXCLUDE(business_models, sectors)
  FROM
    transformed_source
)
SELECT * FROM enriched_source)
),
yearly_data AS (
  SELECT
    brand_name,
    slug,
    2024 AS year,
    turnover_2024 AS turnover,
    profit_2024 AS profit,
    employees_gp_2024 AS employees_gp,
    total_budget_payments_2024 AS total_budget_payments,
    personal_income_tax_2024 AS personal_income_tax,
    social_security_payments_2024 AS social_security_payments
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2023 AS year,
    turnover_2023,
    profit_2023,
    employees_gp_2023,
    total_budget_payments_2023,
    personal_income_tax_2023,
    social_security_payments_2023
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2022 AS year,
    turnover_2022,
    profit_2022,
    employees_gp_2022,
    total_budget_payments_2022,
    personal_income_tax_2022,
    social_security_payments_2022
  FROM source
  UNION ALL
  SELECT
    brand_name,
    slug,
    2021 AS year,
    turnover_2021,
    profit_2021,
    employees_gp_2021,
    total_budget_payments_2021,
    NULL,
    NULL
  FROM source
),
-- 2. solis: Pārveidojam datus, lai katra metrika būtu atsevišķa rinda
long_data AS (
    SELECT slug, year, 'turnover' as metric, turnover as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'profit' as metric, profit as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'employees_gp' as metric, employees_gp as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'total_budget_payments' as metric, total_budget_payments as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'personal_income_tax' as metric, personal_income_tax as value FROM yearly_data
    UNION ALL
    SELECT slug, year, 'social_security_payments' as metric, social_security_payments as value FROM yearly_data
),
-- 3. solis: Sarindojam katras metrikas ne-nulles vērtības pēc gada (dilstošā secībā)
ranked_data AS (
    SELECT
        slug,
        metric,
        value,
        year,
        ROW_NUMBER() OVER(PARTITION BY slug, metric ORDER BY year DESC) as rn
    FROM long_data
    WHERE value IS NOT NULL
),
-- 4. solis: Apvienojam jaunāko (N) un iepriekšējo (N-1) vērtību katrai metrikai
combined_data AS (
    SELECT
        slug,
        metric,
        MAX(CASE WHEN rn = 1 THEN value END) as current_value,
        MAX(CASE WHEN rn = 1 THEN year END) as current_year,
        MAX(CASE WHEN rn = 2 THEN value END) as previous_value,
        MAX(CASE WHEN rn = 2 THEN year END) as previous_year
    FROM ranked_data
    WHERE rn <= 2
    GROUP BY slug, metric
),
-- 5. solis: Pārveidojam datus atpakaļ uz platu formātu, kur katra metrika ir kolonna
final_pivot AS (
    SELECT
        slug,
        -- Turnover
        MAX(CASE WHEN metric = 'turnover' THEN current_value END) as turnover,
        MAX(CASE WHEN metric = 'turnover' THEN current_year END) as turnover_year,
        MAX(CASE WHEN metric = 'turnover' THEN previous_value END) as previous_turnover,
        MAX(CASE WHEN metric = 'turnover' THEN previous_year END) as previous_turnover_year,
        -- Profit
        MAX(CASE WHEN metric = 'profit' THEN current_value END) as profit,
        MAX(CASE WHEN metric = 'profit' THEN current_year END) as profit_year,
        MAX(CASE WHEN metric = 'profit' THEN previous_value END) as previous_profit,
        MAX(CASE WHEN metric = 'profit' THEN previous_year END) as previous_profit_year,
        -- Employees
        MAX(CASE WHEN metric = 'employees_gp' THEN current_value END) as employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN current_year END) as employees_gp_year,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_value END) as previous_employees_gp,
        MAX(CASE WHEN metric = 'employees_gp' THEN previous_year END) as previous_employees_gp_year,
        -- Total Budget Payments
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_value END) as total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN current_year END) as total_budget_payments_year,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_value END) as previous_total_budget_payments,
        MAX(CASE WHEN metric = 'total_budget_payments' THEN previous_year END) as previous_total_budget_payments_year,
        -- Personal Income Tax
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_value END) as personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN current_year END) as personal_income_tax_year,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_value END) as previous_personal_income_tax,
        MAX(CASE WHEN metric = 'personal_income_tax' THEN previous_year END) as previous_personal_income_tax_year,
        -- Social Security Payments
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_value END) as social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN current_year END) as social_security_payments_year,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_value END) as previous_social_security_payments,
        MAX(CASE WHEN metric = 'social_security_payments' THEN previous_year END) as previous_social_security_payments_year
    FROM combined_data
    GROUP BY slug
)
-- 6. solis: Pievienojam zīmola nosaukumu un aprēķinām DELTA procentos
SELECT
    s.brand_name,
    fp.*,
    CASE WHEN fp.turnover IS NOT NULL AND fp.previous_turnover IS NOT NULL AND fp.previous_turnover != 0 THEN (fp.turnover - fp.previous_turnover) * 100.0 / fp.previous_turnover ELSE NULL END AS turnover_delta_percent,
    CASE WHEN fp.profit IS NOT NULL AND fp.previous_profit IS NOT NULL AND fp.previous_profit != 0 THEN (fp.profit - fp.previous_profit) * 100.0 / fp.previous_profit ELSE NULL END AS profit_delta_percent,
    CASE WHEN fp.employees_gp IS NOT NULL AND fp.previous_employees_gp IS NOT NULL AND fp.previous_employees_gp != 0 THEN (fp.employees_gp - fp.previous_employees_gp) * 100.0 / fp.previous_employees_gp ELSE NULL END AS employees_gp_delta_percent,
    CASE WHEN fp.total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments IS NOT NULL AND fp.previous_total_budget_payments != 0 THEN (fp.total_budget_payments - fp.previous_total_budget_payments) * 100.0 / fp.previous_total_budget_payments ELSE NULL END AS total_budget_payments_delta_percent,
    CASE WHEN fp.personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax IS NOT NULL AND fp.previous_personal_income_tax != 0 THEN (fp.personal_income_tax - fp.previous_personal_income_tax) * 100.0 / fp.previous_personal_income_tax ELSE NULL END AS personal_income_tax_delta_percent,
    CASE WHEN fp.social_security_payments IS NOT NULL AND fp.previous_social_security_payments IS NOT NULL AND fp.previous_social_security_payments != 0 THEN (fp.social_security_payments - fp.previous_social_security_payments) * 100.0 / fp.previous_social_security_payments ELSE NULL END AS social_security_payments_delta_percent
FROM
    final_pivot fp
JOIN
    (SELECT DISTINCT slug, brand_name FROM source) s ON fp.slug = s.slug
ORDER BY
    fp.slug)`),[c,x,d,re,Ae,fe,$e,Et,Nt,s,o,l,A,T,C,R,k,H,B,L,f,h,U,D,K,O,$,y,G,P,ae,ie,te,ee,ue,ye,ce,g,j,et,He,Ie,Re,bt,Qe,Je,nt,Tt,t]}class to extends Le{constructor(e){super(),he(this,e,z_,X_,Te,{data:9},null,[-1,-1,-1])}}export{to as component};
