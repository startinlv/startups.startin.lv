import{L as ps,s as me,d as m,i as y,r as ae,P as ce,t as Oe,Q as se,R as Ie,c as be,u as Ee,g as he,a as ve,v as le,a6 as Te,A as Qe,h as M,j as q,m as G,D as Je,a4 as cs,a5 as xs,p as St,z as kt,l as Xe,J as dt,b as T,B as $t,a8 as p_,e as X,x as pe,k as K,y as ue,n as Y,a9 as Jt,aa as ks,o as bs,ab as Gt,w as ke,S as dr,N as Z,ac as P_,a7 as z_,ad as er,C as jt,ae as vt,q as ft,af as Kt,ag as Yt,ah as H_,ai as V_,aj as W_,ak as K_,E as Mt,al as Y_,I as q_,am as X_}from"../chunks/scheduler.CjfVxIaG.js";import{S as ge,i as de,t as g,a as S,g as _e,c as oe,f as yt,h as u_,j as gs,k as Ft,d as F,m as P,b as z,e as H}from"../chunks/index.BJx3svFZ.js";import{t as tr,B as A_,G as S_,w as ns,F as m_,_ as Q_,$ as J_,v as It,a0 as us,a1 as Z_,N as Xt,l as sr,H as c_,K as rr,L as is,a2 as $_,n as Es,O as rt,a3 as eo,a4 as fr,a5 as to,a6 as so,p as Ts,J as Qs,a7 as yr,Q as Js,a8 as hs,S as _r,R as or,U as nr,x as Re,a9 as ro,V as g_,X as Et,aa as ao,ab as ds,ac as _o,ad as Us,ae as d_,af as Cs,ag as oo,ah as no,ai as io,aj as lo,ak as po,al as uo,y as we,A as pt,I as Ns,am as Ao,an as f_,ao as So,ap as br,h as $e,u as y_,o as b_,aq as E_,ar as mo,as as co,at as go,Y as ir,au as Ds,av as fo,Z as fs,aw as yo,ax as As,ay as h_,az as ot,aA as bo,aB as Bs,aC as Ve,aD as ws,g as es,aE as lr,e as Tt,aF as v_,aG as Eo,aH as pr,P as Er,aI as ho,aJ as hr,aK as Ss,aL as vo,aM as Lo,aN as ur,aO as Ar,aP as L_,aQ as To,f as ko,aR as Co,aS as Do,aT as T_,aU as Oo,aV as xo,aW as Uo,aX as Zt,aY as No,aZ as Bo,D as wo,a_ as Io,a$ as Ro,b0 as jo,b1 as lt,b2 as vr,b3 as Mo}from"../chunks/VennDiagram.svelte_svelte_type_style_lang._nHd0h8W.js";import{w as qt,d as Lt}from"../chunks/entry.CUxGhRlW.js";import{h as Lr,c as Go,B as Fo,a as Ue,p as Po}from"../chunks/button.CO-j3U8A.js";import{p as Sr}from"../chunks/stores.MLapBShf.js";import{r as zo}from"../chunks/scroll.DwUa1uNN.js";import{c as k_}from"../chunks/checkRequiredProps.o_C_V3S5.js";const Ho=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,ar=(a,e={serializeStrings:!0})=>a==null?"null":typeof a=="string"?e.serializeStrings!==!1?`'${a.replaceAll("'","''")}'`:a:typeof a=="number"||typeof a=="bigint"||typeof a=="boolean"?String(a):a instanceof Date?`'${a.toISOString()}'::TIMESTAMP_MS`:Array.isArray(a)?`[${a.map(s=>ar(s,e)).join(", ")}]`:JSON.stringify(a);function Zs(a,e,s,t){const r=(a-(isNaN(e)?0:e))%t;let _=Math.abs(r)*2>=t?a+Math.sign(r)*(t-Math.abs(r)):a-r;isNaN(e)?!isNaN(s)&&_>s&&(_=Math.floor(s/t)*t):_<e?_=e:!isNaN(s)&&_>s&&(_=e+Math.floor((s-e)/t)*t);const o=t.toString(),i=o.indexOf("."),n=i>=0?o.length-i:0;if(n>0){const l=Math.pow(10,n);_=Math.round(_*l)/l}return _}const Vo={positioning:{placement:"bottom"},arrowSize:8,defaultOpen:!1,disableFocusTrap:!1,closeOnEscape:!0,preventScroll:!1,onOpenChange:void 0,closeOnOutsideClick:!0,portal:void 0,forceVisible:!1,openFocus:void 0,closeFocus:void 0,onOutsideClick:void 0},{name:os}=c_("popover"),Wo=["trigger","content"];function Ko(a){const e={...Vo,...a},s=tr(A_(e,"open","ids")),{positioning:t,arrowSize:r,disableFocusTrap:_,preventScroll:o,closeOnEscape:i,closeOnOutsideClick:n,portal:l,forceVisible:p,openFocus:u,closeFocus:A,onOutsideClick:d}=s,b=e.open??qt(e.defaultOpen),c=S_(b,e==null?void 0:e.onOpenChange),h=ns.writable(null),N=tr({...m_(Wo),...e.ids});Q_(()=>{h.set(document.getElementById(N.trigger.get()))});function v(){c.set(!1);const E=document.getElementById(N.trigger.get());Lr({prop:A.get(),defaultEl:E})}const I=J_({open:c,activeTrigger:h,forceVisible:p}),U=It(os("content"),{stores:[I,l,N.content],returned:([E,L,k])=>({hidden:E&&sr?void 0:!0,tabindex:-1,style:Xt({display:E?void 0:"none"}),id:k,"data-state":E?"open":"closed","data-portal":Z_(L)}),action:E=>{let L=Es;const k=us([I,h,t,_,i,n,l],([W,j,$,ie,R,ee,re])=>{L(),!(!W||!j)&&ps().then(()=>{L(),L=eo(E,{anchorElement:j,open:c,options:{floating:$,focusTrap:ie?null:{returnFocusOnDeactivate:!1,clickOutsideDeactivates:ee,allowOutsideClick:!0,escapeDeactivates:R},modal:{shouldCloseOnInteractOutside:w,onClose:v,open:W,closeOnInteractOutside:ee},escapeKeydown:R?{handler:()=>{v()}}:null,portal:fr(E,re)}}).destroy})});return{destroy(){k(),L()}}}});function B(E){c.update(L=>!L),E&&E!==h.get()&&h.set(E)}function w(E){var W;if((W=d.get())==null||W(E),E.defaultPrevented)return!1;const L=E.target,k=document.getElementById(N.trigger.get());return!(k&&to(L)&&(L===k||k.contains(L)))}const D=It(os("trigger"),{stores:[I,N.content,N.trigger],returned:([E,L,k])=>({role:"button","aria-haspopup":"dialog","aria-expanded":E?"true":"false","data-state":Tr(E),"aria-controls":L,id:k}),action:E=>({destroy:rr(is(E,"click",()=>{B(E)}),is(E,"keydown",k=>{k.key!==rt.ENTER&&k.key!==rt.SPACE||(k.preventDefault(),B(E))}))})}),O=It(os("overlay"),{stores:[I],returned:([E])=>({hidden:E?void 0:!0,tabindex:-1,style:Xt({display:E?void 0:"none"}),"aria-hidden":"true","data-state":Tr(E)}),action:E=>{let L=Es,k=Es,W=Es;if(i.get()){const j=$_(E,{handler:()=>{v()}});j&&j.destroy&&(L=j.destroy)}return k=us([l],([j])=>{if(W(),j===null)return;const $=fr(E,j);$!==null&&(W=so(E,$).destroy)}),{destroy(){L(),k(),W()}}}}),x=It(os("arrow"),{stores:r,returned:E=>({"data-arrow":!0,style:Xt({position:"absolute",width:`var(--arrow-size, ${E}px)`,height:`var(--arrow-size, ${E}px)`})})}),C=It(os("close"),{returned:()=>({type:"button"}),action:E=>({destroy:rr(is(E,"click",k=>{k.defaultPrevented||v()}),is(E,"keydown",k=>{k.defaultPrevented||k.key!==rt.ENTER&&k.key!==rt.SPACE||(k.preventDefault(),B())}))})});return us([c,h,o],([E,L,k])=>{if(!sr)return;const W=[];if(E){L||ps().then(()=>{const $=document.getElementById(N.trigger.get());Ts($)&&h.set($)}),k&&W.push(zo());const j=L??document.getElementById(N.trigger.get());Lr({prop:u.get(),defaultEl:j})}return()=>{W.forEach(j=>j())}}),{ids:N,elements:{trigger:D,content:U,arrow:x,close:C,overlay:O},states:{open:c},options:s}}function Tr(a){return a?"open":"closed"}const Yo={defaultValue:[],min:0,max:100,step:1,orientation:"horizontal",dir:"ltr",disabled:!1},{name:vs}=c_("slider"),qo=a=>{const e={...Yo,...a},s=tr(A_(e,"value","onValueChange","defaultValue")),{min:t,max:r,step:_,orientation:o,dir:i,disabled:n}=s,l=e.value??qt(e.defaultValue),p=S_(l,e==null?void 0:e.onValueChange),u=ns(qt(!1)),A=ns(qt(0)),d=ns(qt(null)),b=m_(["root"]),c=(D,O)=>{p.update(x=>{if(!x)return[D];if(x[O]===D)return x;const C=[...x],E=C[O]>D?-1:1;function L(){C[O]=C[O+E],C[O+E]=D;const $=h();$&&($[O+E].focus(),d.set({thumb:$[O+E],index:O+E}))}if(E===-1&&D<C[O-1])return L(),C;if(E===1&&D>C[O+1])return L(),C;const k=t.get(),W=r.get(),j=_.get();return C[O]=Zs(D,k,W,j),C})},h=()=>{const D=Js(b.root);return D?Array.from(D.querySelectorAll('[data-melt-part="thumb"]')).filter(O=>Ts(O)):null},N=Lt([t,r],([D,O])=>x=>(x-D)/(O-D)*100),v=ns.derived([o,i],([D,O])=>D==="horizontal"?O==="rtl"?"rl":"lr":O==="rtl"?"tb":"bt"),I=It(vs(),{stores:[n,o,i],returned:([D,O,x])=>({dir:x,disabled:Qs(D),"data-disabled":Qs(D),"data-orientation":O,style:D?void 0:`touch-action: ${O==="horizontal"?"pan-y":"pan-x"}`,"data-melt-id":b.root})}),U=It(vs("range"),{stores:[p,v,N],returned:([D,O,x])=>{const C=D.length>1?x(Math.min(...D)??0):0,E=100-x(Math.max(...D)??0),L={position:"absolute"};switch(O){case"lr":{L.left=`${C}%`,L.right=`${E}%`;break}case"rl":{L.right=`${C}%`,L.left=`${E}%`;break}case"bt":{L.bottom=`${C}%`,L.top=`${E}%`;break}case"tb":{L.top=`${C}%`,L.bottom=`${E}%`;break}}return{style:Xt(L)}}}),B=yr(vs("thumb"),{stores:[p,N,t,r,n,o,v],returned:([D,O,x,C,E,L,k])=>Array.from({length:D.length||1},(j,$)=>{A.get()<D.length&&A.update(te=>te+1);const R=D[$],ee=`${O(R)}%`,re={position:"absolute"};switch(k){case"lr":{re.left=ee,re.translate="-50% 0";break}case"rl":{re.right=ee,re.translate="50% 0";break}case"bt":{re.bottom=ee,re.translate="0 50%";break}case"tb":{re.top=ee,re.translate="0 -50%";break}}return{role:"slider","aria-valuemin":x,"aria-valuemax":C,"aria-valuenow":R,"aria-disabled":Qs(E),"aria-orientation":L,"data-melt-part":"thumb","data-value":R,style:Xt(re),tabindex:E?-1:0}}),action:D=>({destroy:is(D,"keydown",x=>{if(n.get())return;const C=x.currentTarget;if(!Ts(C))return;const E=h();if(!(E!=null&&E.length))return;const L=E.indexOf(C);if(A.set(L),![rt.ARROW_LEFT,rt.ARROW_RIGHT,rt.ARROW_UP,rt.ARROW_DOWN,rt.HOME,rt.END].includes(x.key))return;x.preventDefault();const k=t.get(),W=r.get(),j=_.get(),$=p.get(),ie=o.get(),R=v.get(),ee=$[L];switch(x.key){case rt.HOME:{c(k,L);break}case rt.END:{c(W,L);break}case rt.ARROW_LEFT:{if(ie!=="horizontal")break;x.metaKey?c(R==="rl"?W:k,L):R==="rl"&&ee<W?c(ee+j,L):R==="lr"&&ee>k&&c(ee-j,L);break}case rt.ARROW_RIGHT:{if(ie!=="horizontal")break;x.metaKey?c(R==="rl"?k:W,L):R==="rl"&&ee>k?c(ee-j,L):R==="lr"&&ee<W&&c(ee+j,L);break}case rt.ARROW_UP:{x.metaKey?c(R==="tb"?k:W,L):R==="tb"&&ee>k?c(ee-j,L):R!=="tb"&&ee<W&&c(ee+j,L);break}case rt.ARROW_DOWN:{x.metaKey?c(R==="tb"?W:k,L):R==="tb"&&ee<W?c(ee+j,L):R!=="tb"&&ee>k&&c(ee-j,L);break}}})})}),w=yr(vs("tick"),{stores:[p,t,r,_,v],returned:([D,O,x,C,E])=>{const L=x-O;let k=Math.ceil(L/C);return L%C==0&&k++,Array.from({length:k},(W,j)=>{const $=`${j*(C/(x-O))*100}%`,ie=j===0,R=j===k-1,ee=ie?0:R?-100:-50,re={position:"absolute"};switch(E){case"lr":{re.left=$,re.translate=`${ee}% 0`;break}case"rl":{re.right=$,re.translate=`${-ee}% 0`;break}case"bt":{re.bottom=$,re.translate=`0 ${-ee}%`;break}case"tb":{re.top=$,re.translate=`0 ${ee}%`;break}}const te=O+j*C;return{"data-bounded":(D.length===1?te<=D[0]:D[0]<=te&&te<=D[D.length-1])?!0:void 0,"data-value":te,style:Xt(re)}})}});return us([I,t,r,n,o,v,_],([D,O,x,C,E,L,k])=>{if(!sr||C)return;const W=(re,te,Se,Ce)=>{const Ne=(re-Se)/(Ce-Se)*(x-O)+O;if(Ne<O)c(O,te);else if(Ne>x)c(x,te);else{const ne=k,ye=O,et=Math.floor((Ne-ye)/ne),_t=ye+et*ne+ne/2,st=ye+(et+1)*ne+ne/2,nt=Ne>=_t&&Ne<st?(et+1)*ne+ye:et*ne+ye;nt<=x&&c(nt,te)}},j=re=>{const te=h();if(!te)return;te.forEach(Ne=>Ne.blur());const Se=te.map(Ne=>{if(E==="horizontal"){const{left:ne,right:ye}=Ne.getBoundingClientRect();return Math.abs(re.clientX-(ne+ye)/2)}else{const{top:ne,bottom:ye}=Ne.getBoundingClientRect();return Math.abs(re.clientY-(ne+ye)/2)}}),Ce=te[Se.indexOf(Math.min(...Se))],J=te.indexOf(Ce);return{thumb:Ce,index:J}},$=re=>{if(!u.get())return;re.preventDefault(),re.stopPropagation();const te=Js(D["data-melt-id"]),Se=d.get();if(!te||!Se)return;Se.thumb.focus();const{left:Ce,right:J,top:Ne,bottom:ne}=te.getBoundingClientRect();switch(L){case"lr":{W(re.clientX,Se.index,Ce,J);break}case"rl":{W(re.clientX,Se.index,J,Ce);break}case"bt":{W(re.clientY,Se.index,ne,Ne);break}case"tb":{W(re.clientY,Se.index,Ne,ne);break}}},ie=re=>{if(re.button!==0)return;const te=Js(D["data-melt-id"]),Se=j(re);if(!Se||!te)return;const Ce=re.target;!Ts(Ce)||!te.contains(Ce)||(re.preventDefault(),d.set(Se),Se.thumb.focus(),u.set(!0),$(re))},R=()=>{u.set(!1)},ee=rr(hs(document,"pointerdown",ie),hs(document,"pointerup",R),hs(document,"pointerleave",R),hs(document,"pointermove",$));return()=>{ee()}}),us([_,t,r,p],function([O,x,C,E]){const L=W=>Zs(W,x,C,O)===W,k=W=>Zs(W,x,C,O);E.some(W=>!L(W))&&p.update(W=>W.map(k))}),{elements:{root:I,thumbs:B,range:U,ticks:w},states:{value:p},options:s}};function Xo(){return{NAME:"separator",PARTS:["root"]}}function Qo(a){const{NAME:e,PARTS:s}=Xo(),t=_r(e,s),r={...Go(or(a)),getAttrs:t};return{...r,updateOption:nr(r.options)}}const Jo=a=>({builder:a&4}),kr=a=>({builder:a[2]});function Zo(a){let e,s,t,r=[a[2],a[4]],_={};for(let o=0;o<r.length;o+=1)_=se(_,r[o]);return{c(){e=G("div"),this.h()},l(o){e=M(o,"DIV",{}),q(e).forEach(m),this.h()},h(){Te(e,_)},m(o,i){y(o,e,i),a[10](e),s||(t=Qe(a[2].action(e)),s=!0)},p(o,i){Te(e,_=Re(r,[i&4&&o[2],i&16&&o[4]]))},i:le,o:le,d(o){o&&m(e),a[10](null),s=!1,t()}}}function $o(a){let e;const s=a[9].default,t=be(s,a,a[8],kr);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&260)&&Ee(t,s,r,r[8],e?ve(s,r[8],_,Jo):he(r[8]),kr)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function en(a){let e,s,t,r;const _=[$o,Zo],o=[];function i(n,l){return n[1]?0:1}return e=i(a),s=o[e]=_[e](a),{c(){s.c(),t=ae()},l(n){s.l(n),t=ae()},m(n,l){o[e].m(n,l),y(n,t,l),r=!0},p(n,[l]){let p=e;e=i(n),e===p?o[e].p(n,l):(_e(),g(o[p],1,1,()=>{o[p]=null}),oe(),s=o[e],s?s.p(n,l):(s=o[e]=_[e](n),s.c()),S(s,1),s.m(t.parentNode,t))},i(n){r||(S(s),r=!0)},o(n){g(s),r=!1},d(n){n&&m(t),o[e].d(n)}}}function tn(a,e,s){let t;const r=["orientation","decorative","asChild","el"];let _=ce(e,r),o,{$$slots:i={},$$scope:n}=e,{orientation:l="horizontal"}=e,{decorative:p=!0}=e,{asChild:u=!1}=e,{el:A=void 0}=e;const{elements:{root:d},updateOption:b,getAttrs:c}=Qo({orientation:l,decorative:p});Oe(a,d,v=>s(7,o=v));const h=c("root");function N(v){Je[v?"unshift":"push"](()=>{A=v,s(0,A)})}return a.$$set=v=>{e=se(se({},e),Ie(v)),s(4,_=ce(e,r)),"orientation"in v&&s(5,l=v.orientation),"decorative"in v&&s(6,p=v.decorative),"asChild"in v&&s(1,u=v.asChild),"el"in v&&s(0,A=v.el),"$$scope"in v&&s(8,n=v.$$scope)},a.$$.update=()=>{a.$$.dirty&32&&b("orientation",l),a.$$.dirty&64&&b("decorative",p),a.$$.dirty&128&&s(2,t=o),a.$$.dirty&4&&Object.assign(t,h)},[A,u,t,d,_,l,p,o,n,i,N]}let sn=class extends ge{constructor(e){super(),de(this,e,tn,en,me,{orientation:5,decorative:6,asChild:1,el:0})}};function C_(){return{NAME:"popover",PARTS:["arrow","close","content","trigger"]}}function rn(a){const{NAME:e,PARTS:s}=C_(),t=_r(e,s),r={...Ko({positioning:{placement:"bottom",gutter:0},...or(a),forceVisible:!0}),getAttrs:t};return cs(e,r),{...r,updateOption:nr(r.options)}}function mr(){const{NAME:a}=C_();return xs(a)}function an(a){const s={...{side:"bottom",align:"center"},...a},{options:{positioning:t}}=mr();ro(t)(s)}const _n=a=>({ids:a&1}),Cr=a=>({ids:a[0]});function on(a){let e;const s=a[13].default,t=be(s,a,a[12],Cr);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,[_]){t&&t.p&&(!e||_&4097)&&Ee(t,s,r,r[12],e?ve(s,r[12],_,_n):he(r[12]),Cr)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function nn(a,e,s){let t,{$$slots:r={},$$scope:_}=e,{disableFocusTrap:o=void 0}=e,{closeOnEscape:i=void 0}=e,{closeOnOutsideClick:n=void 0}=e,{preventScroll:l=void 0}=e,{portal:p=void 0}=e,{open:u=void 0}=e,{onOpenChange:A=void 0}=e,{openFocus:d=void 0}=e,{closeFocus:b=void 0}=e,{onOutsideClick:c=void 0}=e;const{updateOption:h,states:{open:N},ids:v}=rn({disableFocusTrap:o,closeOnEscape:i,closeOnOutsideClick:n,preventScroll:l,portal:p,defaultOpen:u,openFocus:d,closeFocus:b,onOutsideClick:c,onOpenChange:({next:U})=>(u!==U&&(A==null||A(U),s(2,u=U)),U),positioning:{gutter:0,offset:{mainAxis:1}}}),I=Lt([v.content,v.trigger],([U,B])=>({content:U,trigger:B}));return Oe(a,I,U=>s(0,t=U)),a.$$set=U=>{"disableFocusTrap"in U&&s(3,o=U.disableFocusTrap),"closeOnEscape"in U&&s(4,i=U.closeOnEscape),"closeOnOutsideClick"in U&&s(5,n=U.closeOnOutsideClick),"preventScroll"in U&&s(6,l=U.preventScroll),"portal"in U&&s(7,p=U.portal),"open"in U&&s(2,u=U.open),"onOpenChange"in U&&s(8,A=U.onOpenChange),"openFocus"in U&&s(9,d=U.openFocus),"closeFocus"in U&&s(10,b=U.closeFocus),"onOutsideClick"in U&&s(11,c=U.onOutsideClick),"$$scope"in U&&s(12,_=U.$$scope)},a.$$.update=()=>{a.$$.dirty&4&&u!==void 0&&N.set(u),a.$$.dirty&8&&h("disableFocusTrap",o),a.$$.dirty&16&&h("closeOnEscape",i),a.$$.dirty&32&&h("closeOnOutsideClick",n),a.$$.dirty&64&&h("preventScroll",l),a.$$.dirty&128&&h("portal",p),a.$$.dirty&512&&h("openFocus",d),a.$$.dirty&1024&&h("closeFocus",b),a.$$.dirty&2048&&h("onOutsideClick",c)},[t,I,u,o,i,n,l,p,A,d,b,c,_,r]}class ln extends ge{constructor(e){super(),de(this,e,nn,on,me,{disableFocusTrap:3,closeOnEscape:4,closeOnOutsideClick:5,preventScroll:6,portal:7,open:2,onOpenChange:8,openFocus:9,closeFocus:10,onOutsideClick:11})}}const pn=a=>({builder:a[0]&256}),Dr=a=>({builder:a[8]}),un=a=>({builder:a[0]&256}),Or=a=>({builder:a[8]}),An=a=>({builder:a[0]&256}),xr=a=>({builder:a[8]}),Sn=a=>({builder:a[0]&256}),Ur=a=>({builder:a[8]}),mn=a=>({builder:a[0]&256}),Nr=a=>({builder:a[8]}),cn=a=>({builder:a[0]&256}),Br=a=>({builder:a[8]});function gn(a){let e,s,t,r;const _=a[27].default,o=be(_,a,a[26],Dr);let i=[a[8],a[12]],n={};for(let l=0;l<i.length;l+=1)n=se(n,i[l]);return{c(){e=G("div"),o&&o.c(),this.h()},l(l){e=M(l,"DIV",{});var p=q(e);o&&o.l(p),p.forEach(m),this.h()},h(){Te(e,n)},m(l,p){y(l,e,p),o&&o.m(e,null),a[32](e),s=!0,t||(r=Qe(a[8].action(e)),t=!0)},p(l,p){o&&o.p&&(!s||p[0]&67109120)&&Ee(o,_,l,l[26],s?ve(_,l[26],p,pn):he(l[26]),Dr),Te(e,n=Re(i,[p[0]&256&&l[8],p[0]&4096&&l[12]]))},i(l){s||(S(o,l),s=!0)},o(l){g(o,l),s=!1},d(l){l&&m(e),o&&o.d(l),a[32](null),t=!1,r()}}}function dn(a){let e,s,t,r,_;const o=a[27].default,i=be(o,a,a[26],Or);let n=[a[8],a[12]],l={};for(let p=0;p<n.length;p+=1)l=se(l,n[p]);return{c(){e=G("div"),i&&i.c(),this.h()},l(p){e=M(p,"DIV",{});var u=q(e);i&&i.l(u),u.forEach(m),this.h()},h(){Te(e,l)},m(p,u){y(p,e,u),i&&i.m(e,null),a[31](e),t=!0,r||(_=Qe(a[8].action(e)),r=!0)},p(p,u){a=p,i&&i.p&&(!t||u[0]&67109120)&&Ee(i,o,a,a[26],t?ve(o,a[26],u,un):he(a[26]),Or),Te(e,l=Re(n,[u[0]&256&&a[8],u[0]&4096&&a[12]]))},i(p){t||(S(i,p),s&&s.end(1),t=!0)},o(p){g(i,p),p&&(s=u_(e,a[5],a[6])),t=!1},d(p){p&&m(e),i&&i.d(p),a[31](null),p&&s&&s.end(),r=!1,_()}}}function fn(a){let e,s,t,r,_;const o=a[27].default,i=be(o,a,a[26],xr);let n=[a[8],a[12]],l={};for(let p=0;p<n.length;p+=1)l=se(l,n[p]);return{c(){e=G("div"),i&&i.c(),this.h()},l(p){e=M(p,"DIV",{});var u=q(e);i&&i.l(u),u.forEach(m),this.h()},h(){Te(e,l)},m(p,u){y(p,e,u),i&&i.m(e,null),a[30](e),t=!0,r||(_=Qe(a[8].action(e)),r=!0)},p(p,u){a=p,i&&i.p&&(!t||u[0]&67109120)&&Ee(i,o,a,a[26],t?ve(o,a[26],u,An):he(a[26]),xr),Te(e,l=Re(n,[u[0]&256&&a[8],u[0]&4096&&a[12]]))},i(p){t||(S(i,p),p&&(s||St(()=>{s=gs(e,a[3],a[4]),s.start()})),t=!0)},o(p){g(i,p),t=!1},d(p){p&&m(e),i&&i.d(p),a[30](null),r=!1,_()}}}function yn(a){let e,s,t,r,_,o;const i=a[27].default,n=be(i,a,a[26],Ur);let l=[a[8],a[12]],p={};for(let u=0;u<l.length;u+=1)p=se(p,l[u]);return{c(){e=G("div"),n&&n.c(),this.h()},l(u){e=M(u,"DIV",{});var A=q(e);n&&n.l(A),A.forEach(m),this.h()},h(){Te(e,p)},m(u,A){y(u,e,A),n&&n.m(e,null),a[29](e),r=!0,_||(o=Qe(a[8].action(e)),_=!0)},p(u,A){a=u,n&&n.p&&(!r||A[0]&67109120)&&Ee(n,i,a,a[26],r?ve(i,a[26],A,Sn):he(a[26]),Ur),Te(e,p=Re(l,[A[0]&256&&a[8],A[0]&4096&&a[12]]))},i(u){r||(S(n,u),u&&St(()=>{r&&(t&&t.end(1),s=gs(e,a[3],a[4]),s.start())}),r=!0)},o(u){g(n,u),s&&s.invalidate(),u&&(t=u_(e,a[5],a[6])),r=!1},d(u){u&&m(e),n&&n.d(u),a[29](null),u&&t&&t.end(),_=!1,o()}}}function bn(a){let e,s,t,r,_;const o=a[27].default,i=be(o,a,a[26],Nr);let n=[a[8],a[12]],l={};for(let p=0;p<n.length;p+=1)l=se(l,n[p]);return{c(){e=G("div"),i&&i.c(),this.h()},l(p){e=M(p,"DIV",{});var u=q(e);i&&i.l(u),u.forEach(m),this.h()},h(){Te(e,l)},m(p,u){y(p,e,u),i&&i.m(e,null),a[28](e),t=!0,r||(_=Qe(a[8].action(e)),r=!0)},p(p,u){a=p,i&&i.p&&(!t||u[0]&67109120)&&Ee(i,o,a,a[26],t?ve(o,a[26],u,mn):he(a[26]),Nr),Te(e,l=Re(n,[u[0]&256&&a[8],u[0]&4096&&a[12]]))},i(p){t||(S(i,p),p&&St(()=>{t&&(s||(s=yt(e,a[1],a[2],!0)),s.run(1))}),t=!0)},o(p){g(i,p),p&&(s||(s=yt(e,a[1],a[2],!1)),s.run(0)),t=!1},d(p){p&&m(e),i&&i.d(p),a[28](null),p&&s&&s.end(),r=!1,_()}}}function En(a){let e;const s=a[27].default,t=be(s,a,a[26],Br);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_[0]&67109120)&&Ee(t,s,r,r[26],e?ve(s,r[26],_,cn):he(r[26]),Br)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function hn(a){let e,s,t,r;const _=[En,bn,yn,fn,dn,gn],o=[];function i(n,l){return n[7]&&n[9]?0:n[1]&&n[9]?1:n[3]&&n[5]&&n[9]?2:n[3]&&n[9]?3:n[5]&&n[9]?4:n[9]?5:-1}return~(e=i(a))&&(s=o[e]=_[e](a)),{c(){s&&s.c(),t=ae()},l(n){s&&s.l(n),t=ae()},m(n,l){~e&&o[e].m(n,l),y(n,t,l),r=!0},p(n,l){let p=e;e=i(n),e===p?~e&&o[e].p(n,l):(s&&(_e(),g(o[p],1,1,()=>{o[p]=null}),oe()),~e?(s=o[e],s?s.p(n,l):(s=o[e]=_[e](n),s.c()),S(s,1),s.m(t.parentNode,t)):s=null)},i(n){r||(S(s),r=!0)},o(n){g(s),r=!1},d(n){n&&m(t),~e&&o[e].d(n)}}}function vn(a,e,s){let t;const r=["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","id","side","align","sideOffset","alignOffset","collisionPadding","avoidCollisions","collisionBoundary","sameWidth","fitViewport","strategy","overlap","el"];let _=ce(e,r),o,i,{$$slots:n={},$$scope:l}=e,{transition:p=void 0}=e,{transitionConfig:u=void 0}=e,{inTransition:A=void 0}=e,{inTransitionConfig:d=void 0}=e,{outTransition:b=void 0}=e,{outTransitionConfig:c=void 0}=e,{asChild:h=!1}=e,{id:N=void 0}=e,{side:v="bottom"}=e,{align:I="center"}=e,{sideOffset:U=0}=e,{alignOffset:B=0}=e,{collisionPadding:w=8}=e,{avoidCollisions:D=!0}=e,{collisionBoundary:O=void 0}=e,{sameWidth:x=!1}=e,{fitViewport:C=!1}=e,{strategy:E="absolute"}=e,{overlap:L=!1}=e,{el:k=void 0}=e;const{elements:{content:W},states:{open:j},ids:$,getAttrs:ie}=mr();Oe(a,W,J=>s(25,i=J)),Oe(a,j,J=>s(9,o=J));const R=ie("content");function ee(J){Je[J?"unshift":"push"](()=>{k=J,s(0,k)})}function re(J){Je[J?"unshift":"push"](()=>{k=J,s(0,k)})}function te(J){Je[J?"unshift":"push"](()=>{k=J,s(0,k)})}function Se(J){Je[J?"unshift":"push"](()=>{k=J,s(0,k)})}function Ce(J){Je[J?"unshift":"push"](()=>{k=J,s(0,k)})}return a.$$set=J=>{e=se(se({},e),Ie(J)),s(12,_=ce(e,r)),"transition"in J&&s(1,p=J.transition),"transitionConfig"in J&&s(2,u=J.transitionConfig),"inTransition"in J&&s(3,A=J.inTransition),"inTransitionConfig"in J&&s(4,d=J.inTransitionConfig),"outTransition"in J&&s(5,b=J.outTransition),"outTransitionConfig"in J&&s(6,c=J.outTransitionConfig),"asChild"in J&&s(7,h=J.asChild),"id"in J&&s(13,N=J.id),"side"in J&&s(14,v=J.side),"align"in J&&s(15,I=J.align),"sideOffset"in J&&s(16,U=J.sideOffset),"alignOffset"in J&&s(17,B=J.alignOffset),"collisionPadding"in J&&s(18,w=J.collisionPadding),"avoidCollisions"in J&&s(19,D=J.avoidCollisions),"collisionBoundary"in J&&s(20,O=J.collisionBoundary),"sameWidth"in J&&s(21,x=J.sameWidth),"fitViewport"in J&&s(22,C=J.fitViewport),"strategy"in J&&s(23,E=J.strategy),"overlap"in J&&s(24,L=J.overlap),"el"in J&&s(0,k=J.el),"$$scope"in J&&s(26,l=J.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&8192&&N&&$.content.set(N),a.$$.dirty[0]&33554432&&s(8,t=i),a.$$.dirty[0]&256&&Object.assign(t,R),a.$$.dirty[0]&33538560&&o&&an({side:v,align:I,sideOffset:U,alignOffset:B,collisionPadding:w,avoidCollisions:D,collisionBoundary:O,sameWidth:x,fitViewport:C,strategy:E,overlap:L})},[k,p,u,A,d,b,c,h,t,o,W,j,_,N,v,I,U,B,w,D,O,x,C,E,L,i,l,n,ee,re,te,Se,Ce]}let Ln=class extends ge{constructor(e){super(),de(this,e,vn,hn,me,{transition:1,transitionConfig:2,inTransition:3,inTransitionConfig:4,outTransition:5,outTransitionConfig:6,asChild:7,id:13,side:14,align:15,sideOffset:16,alignOffset:17,collisionPadding:18,avoidCollisions:19,collisionBoundary:20,sameWidth:21,fitViewport:22,strategy:23,overlap:24,el:0},null,[-1,-1])}};const Tn=a=>({builder:a&4}),wr=a=>({builder:a[2]}),kn=a=>({builder:a&4}),Ir=a=>({builder:a[2]});function Cn(a){let e,s,t,r;const _=a[12].default,o=be(_,a,a[11],wr);let i=[a[2],{type:"button"},a[6]],n={};for(let l=0;l<i.length;l+=1)n=se(n,i[l]);return{c(){e=G("button"),o&&o.c(),this.h()},l(l){e=M(l,"BUTTON",{type:!0});var p=q(e);o&&o.l(p),p.forEach(m),this.h()},h(){Te(e,n)},m(l,p){y(l,e,p),o&&o.m(e,null),e.autofocus&&e.focus(),a[13](e),s=!0,t||(r=[Qe(a[2].action(e)),Xe(e,"m-click",a[5]),Xe(e,"m-keydown",a[5])],t=!0)},p(l,p){o&&o.p&&(!s||p&2052)&&Ee(o,_,l,l[11],s?ve(_,l[11],p,Tn):he(l[11]),wr),Te(e,n=Re(i,[p&4&&l[2],{type:"button"},p&64&&l[6]]))},i(l){s||(S(o,l),s=!0)},o(l){g(o,l),s=!1},d(l){l&&m(e),o&&o.d(l),a[13](null),t=!1,kt(r)}}}function Dn(a){let e;const s=a[12].default,t=be(s,a,a[11],Ir);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&2052)&&Ee(t,s,r,r[11],e?ve(s,r[11],_,kn):he(r[11]),Ir)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function On(a){let e,s,t,r;const _=[Dn,Cn],o=[];function i(n,l){return n[1]?0:1}return e=i(a),s=o[e]=_[e](a),{c(){s.c(),t=ae()},l(n){s.l(n),t=ae()},m(n,l){o[e].m(n,l),y(n,t,l),r=!0},p(n,[l]){let p=e;e=i(n),e===p?o[e].p(n,l):(_e(),g(o[p],1,1,()=>{o[p]=null}),oe(),s=o[e],s?s.p(n,l):(s=o[e]=_[e](n),s.c()),S(s,1),s.m(t.parentNode,t))},i(n){r||(S(s),r=!0)},o(n){g(s),r=!1},d(n){n&&m(t),o[e].d(n)}}}function xn(a,e,s){let t,r;const _=["asChild","id","el"];let o=ce(e,_),i,n,{$$slots:l={},$$scope:p}=e,{asChild:u=!1}=e,{id:A=void 0}=e,{el:d=void 0}=e;const{elements:{trigger:b},states:{open:c},ids:h,getAttrs:N}=mr();Oe(a,b,B=>s(9,i=B)),Oe(a,c,B=>s(10,n=B));const v=g_(),I=N("trigger");function U(B){Je[B?"unshift":"push"](()=>{d=B,s(0,d)})}return a.$$set=B=>{e=se(se({},e),Ie(B)),s(6,o=ce(e,_)),"asChild"in B&&s(1,u=B.asChild),"id"in B&&s(7,A=B.id),"el"in B&&s(0,d=B.el),"$$scope"in B&&s(11,p=B.$$scope)},a.$$.update=()=>{a.$$.dirty&128&&A&&h.trigger.set(A),a.$$.dirty&1024&&s(8,t={...I,"aria-controls":n?h.content:void 0}),a.$$.dirty&512&&s(2,r=i),a.$$.dirty&260&&Object.assign(r,t)},[d,u,r,b,c,v,o,A,t,i,n,p,l,U]}class Un extends ge{constructor(e){super(),de(this,e,xn,On,me,{asChild:1,id:7,el:0})}}function D_(){return{NAME:"slider",PARTS:["root","input","range","thumb","tick"]}}function Nn(a){const{NAME:e,PARTS:s}=D_(),t=_r(e,s),r={...qo(or(a)),getAttrs:t};return cs(e,r),{...r,updateOption:nr(r.options)}}function O_(){const{NAME:a}=D_();return xs(a)}const Bn=a=>({builder:a&4,ticks:a&8,thumbs:a&16}),Rr=a=>({builder:a[2],ticks:a[3],thumbs:a[4]}),wn=a=>({builder:a&4,ticks:a&8,thumbs:a&16}),jr=a=>({builder:a[2],ticks:a[3],thumbs:a[4]});function In(a){let e,s,t,r;const _=a[19].default,o=be(_,a,a[18],Rr);let i=[a[2],a[8]],n={};for(let l=0;l<i.length;l+=1)n=se(n,i[l]);return{c(){e=G("span"),o&&o.c(),this.h()},l(l){e=M(l,"SPAN",{});var p=q(e);o&&o.l(p),p.forEach(m),this.h()},h(){Te(e,n)},m(l,p){y(l,e,p),o&&o.m(e,null),a[20](e),s=!0,t||(r=Qe(a[2].action(e)),t=!0)},p(l,p){o&&o.p&&(!s||p&262172)&&Ee(o,_,l,l[18],s?ve(_,l[18],p,Bn):he(l[18]),Rr),Te(e,n=Re(i,[p&4&&l[2],p&256&&l[8]]))},i(l){s||(S(o,l),s=!0)},o(l){g(o,l),s=!1},d(l){l&&m(e),o&&o.d(l),a[20](null),t=!1,r()}}}function Rn(a){let e;const s=a[19].default,t=be(s,a,a[18],jr);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&262172)&&Ee(t,s,r,r[18],e?ve(s,r[18],_,wn):he(r[18]),jr)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function jn(a){let e,s,t,r;const _=[Rn,In],o=[];function i(n,l){return n[1]?0:1}return e=i(a),s=o[e]=_[e](a),{c(){s.c(),t=ae()},l(n){s.l(n),t=ae()},m(n,l){o[e].m(n,l),y(n,t,l),r=!0},p(n,[l]){let p=e;e=i(n),e===p?o[e].p(n,l):(_e(),g(o[p],1,1,()=>{o[p]=null}),oe(),s=o[e],s?s.p(n,l):(s=o[e]=_[e](n),s.c()),S(s,1),s.m(t.parentNode,t))},i(n){r||(S(s),r=!0)},o(n){g(s),r=!1},d(n){n&&m(t),o[e].d(n)}}}function Mn(a,e,s){let t;const r=["disabled","min","max","step","orientation","dir","value","onValueChange","asChild","el"];let _=ce(e,r),o,i,n,{$$slots:l={},$$scope:p}=e,{disabled:u=void 0}=e,{min:A=void 0}=e,{max:d=void 0}=e,{step:b=void 0}=e,{orientation:c=void 0}=e,{dir:h=void 0}=e,{value:N=void 0}=e,{onValueChange:v=void 0}=e,{asChild:I=!1}=e,{el:U=void 0}=e;const{elements:{root:B,ticks:w,thumbs:D},states:{value:O},updateOption:x,getAttrs:C}=Nn({disabled:u,dir:h,min:A,max:d,step:b,orientation:c,defaultValue:N,onValueChange:({next:k})=>(N!==k&&(v==null||v(k),s(9,N=k)),k)});Oe(a,B,k=>s(17,o=k)),Oe(a,w,k=>s(3,i=k)),Oe(a,D,k=>s(4,n=k));const E=C("root");function L(k){Je[k?"unshift":"push"](()=>{U=k,s(0,U)})}return a.$$set=k=>{e=se(se({},e),Ie(k)),s(8,_=ce(e,r)),"disabled"in k&&s(10,u=k.disabled),"min"in k&&s(11,A=k.min),"max"in k&&s(12,d=k.max),"step"in k&&s(13,b=k.step),"orientation"in k&&s(14,c=k.orientation),"dir"in k&&s(15,h=k.dir),"value"in k&&s(9,N=k.value),"onValueChange"in k&&s(16,v=k.onValueChange),"asChild"in k&&s(1,I=k.asChild),"el"in k&&s(0,U=k.el),"$$scope"in k&&s(18,p=k.$$scope)},a.$$.update=()=>{a.$$.dirty&512&&N!==void 0&&O.set(N),a.$$.dirty&1024&&x("disabled",u),a.$$.dirty&2048&&x("min",A),a.$$.dirty&4096&&x("max",d),a.$$.dirty&8192&&x("step",b),a.$$.dirty&16384&&x("orientation",c),a.$$.dirty&32768&&x("dir",h),a.$$.dirty&131072&&s(2,t=o),a.$$.dirty&4&&Object.assign(t,E)},[U,I,t,i,n,B,w,D,_,N,u,A,d,b,c,h,v,o,p,l,L]}let Gn=class extends ge{constructor(e){super(),de(this,e,Mn,jn,me,{disabled:10,min:11,max:12,step:13,orientation:14,dir:15,value:9,onValueChange:16,asChild:1,el:0})}};const Fn=a=>({builder:a&4}),Mr=a=>({builder:a[2]});function Pn(a){let e,s,t,r=[a[2],a[4]],_={};for(let o=0;o<r.length;o+=1)_=se(_,r[o]);return{c(){e=G("span"),this.h()},l(o){e=M(o,"SPAN",{}),q(e).forEach(m),this.h()},h(){Te(e,_)},m(o,i){y(o,e,i),a[8](e),s||(t=Qe(a[2].action(e)),s=!0)},p(o,i){Te(e,_=Re(r,[i&4&&o[2],i&16&&o[4]]))},i:le,o:le,d(o){o&&m(e),a[8](null),s=!1,t()}}}function zn(a){let e;const s=a[7].default,t=be(s,a,a[6],Mr);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&68)&&Ee(t,s,r,r[6],e?ve(s,r[6],_,Fn):he(r[6]),Mr)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function Hn(a){let e,s,t,r;const _=[zn,Pn],o=[];function i(n,l){return n[1]?0:1}return e=i(a),s=o[e]=_[e](a),{c(){s.c(),t=ae()},l(n){s.l(n),t=ae()},m(n,l){o[e].m(n,l),y(n,t,l),r=!0},p(n,[l]){let p=e;e=i(n),e===p?o[e].p(n,l):(_e(),g(o[p],1,1,()=>{o[p]=null}),oe(),s=o[e],s?s.p(n,l):(s=o[e]=_[e](n),s.c()),S(s,1),s.m(t.parentNode,t))},i(n){r||(S(s),r=!0)},o(n){g(s),r=!1},d(n){n&&m(t),o[e].d(n)}}}function Vn(a,e,s){let t;const r=["asChild","el"];let _=ce(e,r),o,{$$slots:i={},$$scope:n}=e,{asChild:l=!1}=e,{el:p=void 0}=e;const{elements:{range:u},getAttrs:A}=O_();Oe(a,u,c=>s(5,o=c));const d=A("range");function b(c){Je[c?"unshift":"push"](()=>{p=c,s(0,p)})}return a.$$set=c=>{e=se(se({},e),Ie(c)),s(4,_=ce(e,r)),"asChild"in c&&s(1,l=c.asChild),"el"in c&&s(0,p=c.el),"$$scope"in c&&s(6,n=c.$$scope)},a.$$.update=()=>{a.$$.dirty&32&&s(2,t=o),a.$$.dirty&4&&Object.assign(t,d)},[p,l,t,u,_,o,n,i,b]}class Wn extends ge{constructor(e){super(),de(this,e,Vn,Hn,me,{asChild:1,el:0})}}const Kn=a=>({builder:a&4}),Gr=a=>({builder:a[2]});function Yn(a){let e,s,t,r=[a[2],a[4]],_={};for(let o=0;o<r.length;o+=1)_=se(_,r[o]);return{c(){e=G("span"),this.h()},l(o){e=M(o,"SPAN",{}),q(e).forEach(m),this.h()},h(){Te(e,_)},m(o,i){y(o,e,i),a[8](e),s||(t=[Qe(a[2].action(e)),Xe(e,"m-keydown",a[3])],s=!0)},p(o,i){Te(e,_=Re(r,[i&4&&o[2],i&16&&o[4]]))},i:le,o:le,d(o){o&&m(e),a[8](null),s=!1,kt(t)}}}function qn(a){let e;const s=a[7].default,t=be(s,a,a[6],Gr);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&68)&&Ee(t,s,r,r[6],e?ve(s,r[6],_,Kn):he(r[6]),Gr)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function Xn(a){let e,s,t,r;const _=[qn,Yn],o=[];function i(n,l){return n[1]?0:1}return e=i(a),s=o[e]=_[e](a),{c(){s.c(),t=ae()},l(n){s.l(n),t=ae()},m(n,l){o[e].m(n,l),y(n,t,l),r=!0},p(n,[l]){let p=e;e=i(n),e===p?o[e].p(n,l):(_e(),g(o[p],1,1,()=>{o[p]=null}),oe(),s=o[e],s?s.p(n,l):(s=o[e]=_[e](n),s.c()),S(s,1),s.m(t.parentNode,t))},i(n){r||(S(s),r=!0)},o(n){g(s),r=!1},d(n){n&&m(t),o[e].d(n)}}}function Qn(a,e,s){let t;const r=["asChild","el","thumb"];let _=ce(e,r),{$$slots:o={},$$scope:i}=e,{asChild:n=!1}=e,{el:l=void 0}=e,{thumb:p}=e;const{getAttrs:u}=O_(),A=g_(),d=u("thumb");function b(c){Je[c?"unshift":"push"](()=>{l=c,s(0,l)})}return a.$$set=c=>{e=se(se({},e),Ie(c)),s(4,_=ce(e,r)),"asChild"in c&&s(1,n=c.asChild),"el"in c&&s(0,l=c.el),"thumb"in c&&s(5,p=c.thumb),"$$scope"in c&&s(6,i=c.$$scope)},a.$$.update=()=>{a.$$.dirty&32&&s(2,t=p),a.$$.dirty&4&&Object.assign(t,d)},[l,n,t,A,_,p,i,o,b]}class x_ extends ge{constructor(e){super(),de(this,e,Qn,Xn,me,{asChild:1,el:0,thumb:5})}}function Jn(a){let e,s;const t=a[2].default,r=be(t,a,a[1],null);return{c(){e=G("div"),r&&r.c(),this.h()},l(_){e=M(_,"DIV",{class:!0});var o=q(e);r&&r.l(o),o.forEach(m),this.h()},h(){T(e,"class","contents"),dt(e,"print:hidden",a[0])},m(_,o){y(_,e,o),r&&r.m(e,null),s=!0},p(_,[o]){r&&r.p&&(!s||o&2)&&Ee(r,t,_,_[1],s?ve(t,_[1],o,null):he(_[1]),null),(!s||o&1)&&dt(e,"print:hidden",_[0])},i(_){s||(S(r,_),s=!0)},o(_){g(r,_),s=!1},d(_){_&&m(e),r&&r.d(_)}}}function Zn(a,e,s){let{$$slots:t={},$$scope:r}=e,{enabled:_=!0}=e;return a.$$set=o=>{"enabled"in o&&s(0,_=o.enabled),"$$scope"in o&&s(1,r=o.$$scope)},a.$$.update=()=>{a.$$.dirty&1&&s(0,_=Et(_))},[_,r,t]}class U_ extends ge{constructor(e){super(),de(this,e,Zn,Jn,me,{enabled:0})}}const N_=Symbol("EVIDENCE_DROPDOWN_CTX");let $n=0;function ei(a,e,s){let{value:t}=e,{valueLabel:r=t}=e,{idx:_=-1}=e,{__auto:o=!1}=e;o||(_=$n++);const i=xs(N_);return $t(()=>i.registerOption({value:t,label:r,idx:_,__auto:o})),a.$$set=n=>{"value"in n&&s(1,t=n.value),"valueLabel"in n&&s(2,r=n.valueLabel),"idx"in n&&s(0,_=n.idx),"__auto"in n&&s(3,o=n.__auto)},[_,t,r,o]}class ti extends ge{constructor(e){super(),de(this,e,ei,null,me,{value:1,valueLabel:2,idx:0,__auto:3})}}function si(a){return Object.keys(a).reduce((e,s)=>a[s]===void 0?e:e+`${s}:${a[s]};`,"")}const ri={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};function Os(a,e,s,t){const r=Array.isArray(e)?e:[e];return r.forEach(_=>a.addEventListener(_,s,t)),()=>{r.forEach(_=>a.removeEventListener(_,s,t))}}function B_(...a){return(...e)=>{for(const s of a)typeof s=="function"&&s(...e)}}const ai=a=>a&4,_i=a=>({}),Fr=a=>({...a[2]}),oi=a=>a&4,ni=a=>({}),Pr=a=>({...a[2]});function ii(a){let e,s,t=(a[0]??"")+"",r,_,o,i,n,l=[a[6]],p={};for(let c=0;c<l.length;c+=1)p=se(p,l[c]);const u=a[18].default,A=be(u,a,a[17],Fr);let d=[a[5],a[7]],b={};for(let c=0;c<d.length;c+=1)b=se(b,d[c]);return{c(){e=G("div"),s=G("label"),r=ue(t),_=Y(),A&&A.c(),this.h()},l(c){e=M(c,"DIV",{});var h=q(e);s=M(h,"LABEL",{});var N=q(s);r=pe(N,t),N.forEach(m),_=K(h),A&&A.l(h),h.forEach(m),this.h()},h(){Te(s,p),Te(e,b)},m(c,h){y(c,e,h),X(e,s),X(s,r),X(e,_),A&&A.m(e,null),o=!0,i||(n=Qe(a[4].call(null,e)),i=!0)},p(c,h){(!o||h&1)&&t!==(t=(c[0]??"")+"")&&p_(r,t,p.contenteditable),A&&A.p&&(!o||h&131076)&&Ee(A,u,c,c[17],ai(h)||!o?he(c[17]):ve(u,c[17],h,_i),Fr),Te(e,b=Re(d,[c[5],h&128&&c[7]]))},i(c){o||(S(A,c),o=!0)},o(c){g(A,c),o=!1},d(c){c&&m(e),A&&A.d(c),i=!1,n()}}}function li(a){let e;const s=a[18].default,t=be(s,a,a[17],Pr);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&131076)&&Ee(t,s,r,r[17],oi(_)||!e?he(r[17]):ve(s,r[17],_,ni),Pr)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function pi(a){let e,s,t,r;const _=[li,ii],o=[];function i(n,l){return n[1]?0:1}return e=i(a),s=o[e]=_[e](a),{c(){s.c(),t=ae()},l(n){s.l(n),t=ae()},m(n,l){o[e].m(n,l),y(n,t,l),r=!0},p(n,[l]){let p=e;e=i(n),e===p?o[e].p(n,l):(_e(),g(o[p],1,1,()=>{o[p]=null}),oe(),s=o[e],s?s.p(n,l):(s=o[e]=_[e](n),s.c()),S(s,1),s.m(t.parentNode,t))},i(n){r||(S(s),r=!0)},o(n){g(s),r=!1},d(n){n&&m(t),o[e].d(n)}}}function ui(a,e,s){let t;const r=["label","shouldFilter","filter","value","onValueChange","loop","onKeydown","state","ids","asChild"];let _=ce(e,r),o,{$$slots:i={},$$scope:n}=e,{label:l=void 0}=e,{shouldFilter:p=!0}=e,{filter:u=void 0}=e,{value:A=void 0}=e,{onValueChange:d=void 0}=e,{loop:b=void 0}=e,{onKeydown:c=void 0}=e,{state:h=void 0}=e,{ids:N=void 0}=e,{asChild:v=!1}=e;const{commandEl:I,handleRootKeydown:U,ids:B,state:w}=ao({label:l,shouldFilter:p,filter:u,value:A,onValueChange:k=>{k!==A&&(s(8,A=k),d==null||d(k))},loop:b,state:h,ids:N});Oe(a,w,k=>s(16,o=k));function D(k){k&&k!==o.value&&Jt(w,o.value=k,o)}function O(k){return I.set(k),{destroy:B_(Os(k,"keydown",E))}}const x={role:"application",id:B.root,"data-cmdk-root":""},C={"data-cmdk-label":"",for:B.input,id:B.label,style:si(ri)};function E(k){c==null||c(k),!k.defaultPrevented&&U(k)}const L={action:O,attrs:x};return a.$$set=k=>{e=se(se({},e),Ie(k)),s(7,_=ce(e,r)),"label"in k&&s(0,l=k.label),"shouldFilter"in k&&s(9,p=k.shouldFilter),"filter"in k&&s(10,u=k.filter),"value"in k&&s(8,A=k.value),"onValueChange"in k&&s(11,d=k.onValueChange),"loop"in k&&s(12,b=k.loop),"onKeydown"in k&&s(13,c=k.onKeydown),"state"in k&&s(14,h=k.state),"ids"in k&&s(15,N=k.ids),"asChild"in k&&s(1,v=k.asChild),"$$scope"in k&&s(17,n=k.$$scope)},a.$$.update=()=>{a.$$.dirty&256&&D(A),a.$$.dirty&65536&&s(2,t={root:L,label:{attrs:C},stateStore:w,state:o})},[l,v,t,w,O,x,C,_,A,p,u,d,b,c,h,N,o,n,i]}let Ai=class extends ge{constructor(e){super(),de(this,e,ui,pi,me,{label:0,shouldFilter:9,filter:10,value:8,onValueChange:11,loop:12,onKeydown:13,state:14,ids:15,asChild:1})}};const Si=a=>({}),zr=a=>({attrs:a[4]});function Hr(a){let e,s,t,r;const _=[ci,mi],o=[];function i(n,l){return n[0]?0:1}return e=i(a),s=o[e]=_[e](a),{c(){s.c(),t=ae()},l(n){s.l(n),t=ae()},m(n,l){o[e].m(n,l),y(n,t,l),r=!0},p(n,l){let p=e;e=i(n),e===p?o[e].p(n,l):(_e(),g(o[p],1,1,()=>{o[p]=null}),oe(),s=o[e],s?s.p(n,l):(s=o[e]=_[e](n),s.c()),S(s,1),s.m(t.parentNode,t))},i(n){r||(S(s),r=!0)},o(n){g(s),r=!1},d(n){n&&m(t),o[e].d(n)}}}function mi(a){let e,s;const t=a[8].default,r=be(t,a,a[7],null);let _=[a[4],a[5]],o={};for(let i=0;i<_.length;i+=1)o=se(o,_[i]);return{c(){e=G("div"),r&&r.c(),this.h()},l(i){e=M(i,"DIV",{});var n=q(e);r&&r.l(n),n.forEach(m),this.h()},h(){Te(e,o)},m(i,n){y(i,e,n),r&&r.m(e,null),s=!0},p(i,n){r&&r.p&&(!s||n&128)&&Ee(r,t,i,i[7],s?ve(t,i[7],n,null):he(i[7]),null),Te(e,o=Re(_,[i[4],n&32&&i[5]]))},i(i){s||(S(r,i),s=!0)},o(i){g(r,i),s=!1},d(i){i&&m(e),r&&r.d(i)}}}function ci(a){let e;const s=a[8].default,t=be(s,a,a[7],zr);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&128)&&Ee(t,s,r,r[7],e?ve(s,r[7],_,Si):he(r[7]),zr)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function gi(a){let e,s,t=!a[1]&&a[2]&&Hr(a);return{c(){t&&t.c(),e=ae()},l(r){t&&t.l(r),e=ae()},m(r,_){t&&t.m(r,_),y(r,e,_),s=!0},p(r,[_]){!r[1]&&r[2]?t?(t.p(r,_),_&6&&S(t,1)):(t=Hr(r),t.c(),S(t,1),t.m(e.parentNode,e)):t&&(_e(),g(t,1,1,()=>{t=null}),oe())},i(r){s||(S(t),s=!0)},o(r){g(t),s=!1},d(r){r&&m(e),t&&t.d(r)}}}function di(a,e,s){let t;const r=["asChild"];let _=ce(e,r),o,{$$slots:i={},$$scope:n}=e,{asChild:l=!1}=e,p=!0;$t(()=>{s(1,p=!1)});const u=ds();Oe(a,u,d=>s(6,o=d));const A={"data-cmdk-empty":"",role:"presentation"};return a.$$set=d=>{e=se(se({},e),Ie(d)),s(5,_=ce(e,r)),"asChild"in d&&s(0,l=d.asChild),"$$scope"in d&&s(7,n=d.$$scope)},a.$$.update=()=>{a.$$.dirty&64&&s(2,t=o.filtered.count===0)},[l,p,t,u,A,_,o,n,i]}class fi extends ge{constructor(e){super(),de(this,e,di,gi,me,{asChild:0})}}const yi=a=>({container:a&32,group:a&16}),Vr=a=>({container:a[5],group:a[4],heading:{attrs:a[8]}}),bi=a=>({container:a&32,group:a&16}),Wr=a=>({container:a[5],group:a[4],heading:{attrs:a[8]}});function Ei(a){let e,s,t,r,_,o,i=a[0]&&Kr(a);const n=a[14].default,l=be(n,a,a[13],Vr);let p=[a[2]],u={};for(let b=0;b<p.length;b+=1)u=se(u,p[b]);let A=[a[3],a[9]],d={};for(let b=0;b<A.length;b+=1)d=se(d,A[b]);return{c(){e=G("div"),i&&i.c(),s=Y(),t=G("div"),l&&l.c(),this.h()},l(b){e=M(b,"DIV",{});var c=q(e);i&&i.l(c),s=K(c),t=M(c,"DIV",{});var h=q(t);l&&l.l(h),h.forEach(m),c.forEach(m),this.h()},h(){Te(t,u),Te(e,d)},m(b,c){y(b,e,c),i&&i.m(e,null),X(e,s),X(e,t),l&&l.m(t,null),r=!0,_||(o=Qe(a[7].call(null,e)),_=!0)},p(b,c){b[0]?i?i.p(b,c):(i=Kr(b),i.c(),i.m(e,s)):i&&(i.d(1),i=null),l&&l.p&&(!r||c&8240)&&Ee(l,n,b,b[13],r?ve(n,b[13],c,yi):he(b[13]),Vr),Te(t,u=Re(p,[c&4&&b[2]])),Te(e,d=Re(A,[c&8&&b[3],c&512&&b[9]]))},i(b){r||(S(l,b),r=!0)},o(b){g(l,b),r=!1},d(b){b&&m(e),i&&i.d(),l&&l.d(b),_=!1,o()}}}function hi(a){let e;const s=a[14].default,t=be(s,a,a[13],Wr);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&8240)&&Ee(t,s,r,r[13],e?ve(s,r[13],_,bi):he(r[13]),Wr)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function Kr(a){let e,s,t=[a[8]],r={};for(let _=0;_<t.length;_+=1)r=se(r,t[_]);return{c(){e=G("div"),s=ue(a[0]),this.h()},l(_){e=M(_,"DIV",{});var o=q(e);s=pe(o,a[0]),o.forEach(m),this.h()},h(){Te(e,r)},m(_,o){y(_,e,o),X(e,s)},p(_,o){o&1&&p_(s,_[0],r.contenteditable)},d(_){_&&m(e)}}}function vi(a){let e,s,t,r;const _=[hi,Ei],o=[];function i(n,l){return n[1]?0:1}return e=i(a),s=o[e]=_[e](a),{c(){s.c(),t=ae()},l(n){s.l(n),t=ae()},m(n,l){o[e].m(n,l),y(n,t,l),r=!0},p(n,[l]){let p=e;e=i(n),e===p?o[e].p(n,l):(_e(),g(o[p],1,1,()=>{o[p]=null}),oe(),s=o[e],s?s.p(n,l):(s=o[e]=_[e](n),s.c()),S(s,1),s.m(t.parentNode,t))},i(n){r||(S(s),r=!0)},o(n){g(s),r=!1},d(n){n&&m(t),o[e].d(n)}}}function Li(a,e,s){let t,r,_,o;const i=["heading","value","alwaysRender","asChild"];let n=ce(e,i),l,{$$slots:p={},$$scope:u}=e,{heading:A=void 0}=e,{value:d=""}=e,{alwaysRender:b=!1}=e,{asChild:c=!1}=e;const{id:h}=_o(b),N=Us(),v=ds(),I=d_(),U=Lt(v,D=>b||N.filter()===!1||!D.search?!0:D.filtered.groups.has(h));Oe(a,U,D=>s(12,l=D)),$t(()=>N.group(h));function B(D){if(d){N.value(h,d),D.setAttribute(Cs,d);return}A?s(10,d=A.trim().toLowerCase()):D.textContent&&s(10,d=D.textContent.trim().toLowerCase()),N.value(h,d),D.setAttribute(Cs,d)}const w={"data-cmdk-group-heading":"","aria-hidden":!0,id:I};return a.$$set=D=>{e=se(se({},e),Ie(D)),s(9,n=ce(e,i)),"heading"in D&&s(0,A=D.heading),"value"in D&&s(10,d=D.value),"alwaysRender"in D&&s(11,b=D.alwaysRender),"asChild"in D&&s(1,c=D.asChild),"$$scope"in D&&s(13,u=D.$$scope)},a.$$.update=()=>{a.$$.dirty&5120&&s(3,t={"data-cmdk-group":"",role:"presentation",hidden:l?void 0:!0,"data-value":d}),a.$$.dirty&1&&s(2,r={"data-cmdk-group-items":"",role:"group","aria-labelledby":A?I:void 0}),a.$$.dirty&8&&s(5,_={action:B,attrs:t}),a.$$.dirty&4&&s(4,o={attrs:r})},[A,c,r,t,o,_,U,B,w,n,d,b,l,u,p]}class Ti extends ge{constructor(e){super(),de(this,e,Li,vi,me,{heading:0,value:10,alwaysRender:11,asChild:1})}}function ki(a){return new Promise(e=>setTimeout(e,a))}const Ci=a=>({attrs:a&8}),Yr=a=>({action:a[6],attrs:a[3]});function Di(a){let e,s,t,r=[a[3],a[7]],_={};for(let o=0;o<r.length;o+=1)_=se(_,r[o]);return{c(){e=G("input"),this.h()},l(o){e=M(o,"INPUT",{}),this.h()},h(){Te(e,_)},m(o,i){y(o,e,i),e.autofocus&&e.focus(),a[16](e),ks(e,a[0]),s||(t=[Xe(e,"input",a[17]),Qe(a[6].call(null,e)),Xe(e,"input",a[12]),Xe(e,"focus",a[13]),Xe(e,"blur",a[14]),Xe(e,"change",a[15])],s=!0)},p(o,i){Te(e,_=Re(r,[i&8&&o[3],i&128&&o[7]])),i&1&&e.value!==o[0]&&ks(e,o[0])},i:le,o:le,d(o){o&&m(e),a[16](null),s=!1,kt(t)}}}function Oi(a){let e;const s=a[11].default,t=be(s,a,a[10],Yr);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&1032)&&Ee(t,s,r,r[10],e?ve(s,r[10],_,Ci):he(r[10]),Yr)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function xi(a){let e,s,t,r;const _=[Oi,Di],o=[];function i(n,l){return n[2]?0:1}return e=i(a),s=o[e]=_[e](a),{c(){s.c(),t=ae()},l(n){s.l(n),t=ae()},m(n,l){o[e].m(n,l),y(n,t,l),r=!0},p(n,[l]){let p=e;e=i(n),e===p?o[e].p(n,l):(_e(),g(o[p],1,1,()=>{o[p]=null}),oe(),s=o[e],s?s.p(n,l):(s=o[e]=_[e](n),s.c()),S(s,1),s.m(t.parentNode,t))},i(n){r||(S(s),r=!0)},o(n){g(s),r=!1},d(n){n&&m(t),o[e].d(n)}}}function Ui(a,e,s){const t=["autofocus","value","asChild","el"];let r=ce(e,t),_,o,{$$slots:i={},$$scope:n}=e;const{ids:l,commandEl:p}=Us(),u=ds(),A=Lt(u,L=>L.search);Oe(a,A,L=>s(18,o=L));const d=Lt(u,L=>L.value);let{autofocus:b=void 0}=e,{value:c=o}=e,{asChild:h=!1}=e,{el:N=void 0}=e;const v=Lt([d,p],([L,k])=>{if(!no)return;const W=k==null?void 0:k.querySelector(`${io}[${Cs}="${L}"]`);return W==null?void 0:W.getAttribute("id")});Oe(a,v,L=>s(9,_=L));function I(L){u.updateState("search",L)}function U(L){return b&&ki(10).then(()=>L.focus()),{destroy:Os(L,"change",W=>{oo(W.target)&&u.updateState("search",W.target.value)})}}let B;function w(L){bs.call(this,a,L)}function D(L){bs.call(this,a,L)}function O(L){bs.call(this,a,L)}function x(L){bs.call(this,a,L)}function C(L){Je[L?"unshift":"push"](()=>{N=L,s(1,N)})}function E(){c=this.value,s(0,c)}return a.$$set=L=>{e=se(se({},e),Ie(L)),s(7,r=ce(e,t)),"autofocus"in L&&s(8,b=L.autofocus),"value"in L&&s(0,c=L.value),"asChild"in L&&s(2,h=L.asChild),"el"in L&&s(1,N=L.el),"$$scope"in L&&s(10,n=L.$$scope)},a.$$.update=()=>{a.$$.dirty&1&&I(c),a.$$.dirty&512&&s(3,B={type:"text","data-cmdk-input":"",autocomplete:"off",autocorrect:"off",spellcheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":l.list,"aria-labelledby":l.label,"aria-activedescendant":_??void 0,id:l.input})},[c,N,h,B,A,v,U,r,b,_,n,i,w,D,O,x,C,E]}class Ni extends ge{constructor(e){super(),de(this,e,Ui,xi,me,{autofocus:8,value:0,asChild:2,el:1})}}const Bi=a=>({attrs:a&4}),qr=a=>({action:a[6],attrs:a[2]}),wi=a=>({attrs:a&4}),Xr=a=>({action:a[6],attrs:a[2]});function Qr(a){let e,s,t,r;const _=[Ri,Ii],o=[];function i(n,l){return n[0]?0:1}return e=i(a),s=o[e]=_[e](a),{c(){s.c(),t=ae()},l(n){s.l(n),t=ae()},m(n,l){o[e].m(n,l),y(n,t,l),r=!0},p(n,l){let p=e;e=i(n),e===p?o[e].p(n,l):(_e(),g(o[p],1,1,()=>{o[p]=null}),oe(),s=o[e],s?s.p(n,l):(s=o[e]=_[e](n),s.c()),S(s,1),s.m(t.parentNode,t))},i(n){r||(S(s),r=!0)},o(n){g(s),r=!1},d(n){n&&m(t),o[e].d(n)}}}function Ii(a){let e,s,t,r;const _=a[15].default,o=be(_,a,a[14],qr);let i=[a[2],a[7]],n={};for(let l=0;l<i.length;l+=1)n=se(n,i[l]);return{c(){e=G("div"),o&&o.c(),this.h()},l(l){e=M(l,"DIV",{});var p=q(e);o&&o.l(p),p.forEach(m),this.h()},h(){Te(e,n)},m(l,p){y(l,e,p),o&&o.m(e,null),s=!0,t||(r=Qe(a[6].call(null,e)),t=!0)},p(l,p){o&&o.p&&(!s||p&16388)&&Ee(o,_,l,l[14],s?ve(_,l[14],p,Bi):he(l[14]),qr),Te(e,n=Re(i,[p&4&&l[2],p&128&&l[7]]))},i(l){s||(S(o,l),s=!0)},o(l){g(o,l),s=!1},d(l){l&&m(e),o&&o.d(l),t=!1,r()}}}function Ri(a){let e;const s=a[15].default,t=be(s,a,a[14],Xr);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&16388)&&Ee(t,s,r,r[14],e?ve(s,r[14],_,wi):he(r[14]),Xr)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function ji(a){let e,s,t=(a[3]||a[1])&&Qr(a);return{c(){t&&t.c(),e=ae()},l(r){t&&t.l(r),e=ae()},m(r,_){t&&t.m(r,_),y(r,e,_),s=!0},p(r,[_]){r[3]||r[1]?t?(t.p(r,_),_&10&&S(t,1)):(t=Qr(r),t.c(),S(t,1),t.m(e.parentNode,e)):t&&(_e(),g(t,1,1,()=>{t=null}),oe())},i(r){s||(S(t),s=!0)},o(r){g(t),s=!1},d(r){r&&m(e),t&&t.d(r)}}}function Mi(a,e,s){let t;const r=["disabled","value","onSelect","alwaysRender","asChild","id"];let _=ce(e,r),o,i,{$$slots:n={},$$scope:l}=e,{disabled:p=!1}=e,{value:u=""}=e,{onSelect:A=void 0}=e,{alwaysRender:d=!1}=e,{asChild:b=!1}=e,{id:c=d_()}=e;const h=lo(),N=Us(),v=ds(),I=d??(h==null?void 0:h.alwaysRender),U=Lt(v,C=>{if(I||N.filter()===!1||!C.search)return!0;const E=C.filtered.items.get(c);return po(E)?!1:E>0});Oe(a,U,C=>s(3,i=C));let B=!0;$t(()=>(s(1,B=!1),N.item(c,h==null?void 0:h.id)));const w=Lt(v,C=>C.value===u);Oe(a,w,C=>s(13,o=C));function D(C){!u&&C.textContent&&s(8,u=C.textContent.trim().toLowerCase()),N.value(c,u),C.setAttribute(Cs,u);const E=B_(Os(C,"pointermove",()=>{p||x()}),Os(C,"click",()=>{p||O()}));return{destroy(){E()}}}function O(){x(),A==null||A(u)}function x(){v.updateState("value",u,!0)}return a.$$set=C=>{e=se(se({},e),Ie(C)),s(7,_=ce(e,r)),"disabled"in C&&s(9,p=C.disabled),"value"in C&&s(8,u=C.value),"onSelect"in C&&s(10,A=C.onSelect),"alwaysRender"in C&&s(11,d=C.alwaysRender),"asChild"in C&&s(0,b=C.asChild),"id"in C&&s(12,c=C.id),"$$scope"in C&&s(14,l=C.$$scope)},a.$$.update=()=>{a.$$.dirty&13056&&s(2,t={"aria-disabled":p?!0:void 0,"aria-selected":o?!0:void 0,"data-disabled":p?!0:void 0,"data-selected":o?!0:void 0,"data-cmdk-item":"","data-value":u,role:"option",id:c})},[b,B,t,i,U,w,D,_,u,p,A,d,c,o,l,n]}class Gi extends ge{constructor(e){super(),de(this,e,Mi,ji,me,{disabled:9,value:8,onSelect:10,alwaysRender:11,asChild:0,id:12})}}const Fi=a=>({}),Jr=a=>({list:a[7],sizer:a[8]});function Pi(a){let e,s,t=a[2].search==="",r,_,o,i=Zr(a),n=[a[6]],l={};for(let A=0;A<n.length;A+=1)l=se(l,n[A]);let p=[a[5],a[9]],u={};for(let A=0;A<p.length;A+=1)u=se(u,p[A]);return{c(){e=G("div"),s=G("div"),i.c(),this.h()},l(A){e=M(A,"DIV",{});var d=q(e);s=M(d,"DIV",{});var b=q(s);i.l(b),b.forEach(m),d.forEach(m),this.h()},h(){Te(s,l),Te(e,u)},m(A,d){y(A,e,d),X(e,s),i.m(s,null),a[12](e),r=!0,_||(o=Qe(a[4].call(null,s)),_=!0)},p(A,d){d&4&&me(t,t=A[2].search==="")?(_e(),g(i,1,1,le),oe(),i=Zr(A),i.c(),S(i,1),i.m(s,null)):i.p(A,d),Te(e,u=Re(p,[A[5],d&512&&A[9]]))},i(A){r||(S(i),r=!0)},o(A){g(i),r=!1},d(A){A&&m(e),i.d(A),a[12](null),_=!1,o()}}}function zi(a){let e=a[2].search==="",s,t,r=$r(a);return{c(){r.c(),s=ae()},l(_){r.l(_),s=ae()},m(_,o){r.m(_,o),y(_,s,o),t=!0},p(_,o){o&4&&me(e,e=_[2].search==="")?(_e(),g(r,1,1,le),oe(),r=$r(_),r.c(),S(r,1),r.m(s.parentNode,s)):r.p(_,o)},i(_){t||(S(r),t=!0)},o(_){g(r),t=!1},d(_){_&&m(s),r.d(_)}}}function Zr(a){let e;const s=a[11].default,t=be(s,a,a[10],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&1024)&&Ee(t,s,r,r[10],e?ve(s,r[10],_,null):he(r[10]),null)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function $r(a){let e;const s=a[11].default,t=be(s,a,a[10],Jr);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&1024)&&Ee(t,s,r,r[10],e?ve(s,r[10],_,Fi):he(r[10]),Jr)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function Hi(a){let e,s,t,r;const _=[zi,Pi],o=[];function i(n,l){return n[1]?0:1}return e=i(a),s=o[e]=_[e](a),{c(){s.c(),t=ae()},l(n){s.l(n),t=ae()},m(n,l){o[e].m(n,l),y(n,t,l),r=!0},p(n,[l]){let p=e;e=i(n),e===p?o[e].p(n,l):(_e(),g(o[p],1,1,()=>{o[p]=null}),oe(),s=o[e],s?s.p(n,l):(s=o[e]=_[e](n),s.c()),S(s,1),s.m(t.parentNode,t))},i(n){r||(S(s),r=!0)},o(n){g(s),r=!1},d(n){n&&m(t),o[e].d(n)}}}function Vi(a,e,s){const t=["el","asChild"];let r=ce(e,t),_,{$$slots:o={},$$scope:i}=e;const{ids:n}=Us(),l=ds();Oe(a,l,v=>s(2,_=v));let{el:p=void 0}=e,{asChild:u=!1}=e;function A(v){let I;const U=v.closest("[data-cmdk-list]");if(!uo(U))return;const B=new ResizeObserver(()=>{I=requestAnimationFrame(()=>{const w=v.offsetHeight;U.style.setProperty("--cmdk-list-height",w.toFixed(1)+"px")})});return B.observe(v),{destroy(){cancelAnimationFrame(I),B.unobserve(v)}}}const d={"data-cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:n.list,"aria-labelledby":n.input},b={"data-cmdk-list-sizer":""},c={attrs:d},h={attrs:b,action:A};function N(v){Je[v?"unshift":"push"](()=>{p=v,s(0,p)})}return a.$$set=v=>{e=se(se({},e),Ie(v)),s(9,r=ce(e,t)),"el"in v&&s(0,p=v.el),"asChild"in v&&s(1,u=v.asChild),"$$scope"in v&&s(10,i=v.$$scope)},[p,u,_,l,A,d,b,c,h,r,i,o,N]}class Wi extends ge{constructor(e){super(),de(this,e,Vi,Hi,me,{el:0,asChild:1})}}function Ki(a){let e;const s=a[3].default,t=be(s,a,a[5],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&32)&&Ee(t,s,r,r[5],e?ve(s,r[5],_,null):he(r[5]),null)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function Yi(a){let e,s,t;const r=[{class:we("flex h-full w-full flex-col overflow-hidden rounded-md bg-base-100",a[1])},a[2]];function _(i){a[4](i)}let o={$$slots:{default:[Ki]},$$scope:{ctx:a}};for(let i=0;i<r.length;i+=1)o=se(o,r[i]);return a[0]!==void 0&&(o.value=a[0]),e=new Ai({props:o}),Je.push(()=>Ft(e,"value",_)),{c(){H(e.$$.fragment)},l(i){z(e.$$.fragment,i)},m(i,n){P(e,i,n),t=!0},p(i,[n]){const l=n&6?Re(r,[n&2&&{class:we("flex h-full w-full flex-col overflow-hidden rounded-md bg-base-100",i[1])},n&4&&pt(i[2])]):{};n&32&&(l.$$scope={dirty:n,ctx:i}),!s&&n&1&&(s=!0,l.value=i[0],Gt(()=>s=!1)),e.$set(l)},i(i){t||(S(e.$$.fragment,i),t=!0)},o(i){g(e.$$.fragment,i),t=!1},d(i){F(e,i)}}}function qi(a,e,s){const t=["value","class"];let r=ce(e,t),{$$slots:_={},$$scope:o}=e,{value:i=void 0}=e,{class:n=void 0}=e;function l(p){i=p,s(0,i)}return a.$$set=p=>{e=se(se({},e),Ie(p)),s(2,r=ce(e,t)),"value"in p&&s(0,i=p.value),"class"in p&&s(1,n=p.class),"$$scope"in p&&s(5,o=p.$$scope)},[i,n,r,_,l,o]}class Xi extends ge{constructor(e){super(),de(this,e,qi,Yi,me,{value:0,class:1})}}function Qi(a){let e;const s=a[2].default,t=be(s,a,a[3],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&8)&&Ee(t,s,r,r[3],e?ve(s,r[3],_,null):he(r[3]),null)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function Ji(a){let e,s;const t=[{class:we("py-6 text-center text-sm",a[0])},a[1]];let r={$$slots:{default:[Qi]},$$scope:{ctx:a}};for(let _=0;_<t.length;_+=1)r=se(r,t[_]);return e=new fi({props:r}),{c(){H(e.$$.fragment)},l(_){z(e.$$.fragment,_)},m(_,o){P(e,_,o),s=!0},p(_,[o]){const i=o&3?Re(t,[o&1&&{class:we("py-6 text-center text-sm",_[0])},o&2&&pt(_[1])]):{};o&8&&(i.$$scope={dirty:o,ctx:_}),e.$set(i)},i(_){s||(S(e.$$.fragment,_),s=!0)},o(_){g(e.$$.fragment,_),s=!1},d(_){F(e,_)}}}function Zi(a,e,s){const t=["class"];let r=ce(e,t),{$$slots:_={},$$scope:o}=e,{class:i=void 0}=e;return a.$$set=n=>{e=se(se({},e),Ie(n)),s(1,r=ce(e,t)),"class"in n&&s(0,i=n.class),"$$scope"in n&&s(3,o=n.$$scope)},[i,r,_,o]}class $i extends ge{constructor(e){super(),de(this,e,Zi,Ji,me,{class:0})}}function el(a){let e;const s=a[2].default,t=be(s,a,a[3],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&8)&&Ee(t,s,r,r[3],e?ve(s,r[3],_,null):he(r[3]),null)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function tl(a){let e,s;const t=[{class:we("text-foreground overflow-hidden p-1 [&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:py-1.5 [&_[data-cmdk-group-heading]]:text-xs [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-base-content-muted",a[0])},a[1]];let r={$$slots:{default:[el]},$$scope:{ctx:a}};for(let _=0;_<t.length;_+=1)r=se(r,t[_]);return e=new Ti({props:r}),{c(){H(e.$$.fragment)},l(_){z(e.$$.fragment,_)},m(_,o){P(e,_,o),s=!0},p(_,[o]){const i=o&3?Re(t,[o&1&&{class:we("text-foreground overflow-hidden p-1 [&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:py-1.5 [&_[data-cmdk-group-heading]]:text-xs [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-base-content-muted",_[0])},o&2&&pt(_[1])]):{};o&8&&(i.$$scope={dirty:o,ctx:_}),e.$set(i)},i(_){s||(S(e.$$.fragment,_),s=!0)},o(_){g(e.$$.fragment,_),s=!1},d(_){F(e,_)}}}function sl(a,e,s){const t=["class"];let r=ce(e,t),{$$slots:_={},$$scope:o}=e,{class:i=void 0}=e;return a.$$set=n=>{e=se(se({},e),Ie(n)),s(1,r=ce(e,t)),"class"in n&&s(0,i=n.class),"$$scope"in n&&s(3,o=n.$$scope)},[i,r,_,o]}class rl extends ge{constructor(e){super(),de(this,e,sl,tl,me,{class:0})}}function al(a){let e;const s=a[2].default,t=be(s,a,a[3],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&8)&&Ee(t,s,r,r[3],e?ve(s,r[3],_,null):he(r[3]),null)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function _l(a){let e,s;const t=[{class:we("relative flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-none aria-selected:bg-base-200 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a[0])},a[1]];let r={$$slots:{default:[al]},$$scope:{ctx:a}};for(let _=0;_<t.length;_+=1)r=se(r,t[_]);return e=new Gi({props:r}),{c(){H(e.$$.fragment)},l(_){z(e.$$.fragment,_)},m(_,o){P(e,_,o),s=!0},p(_,[o]){const i=o&3?Re(t,[o&1&&{class:we("relative flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-none aria-selected:bg-base-200 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",_[0])},o&2&&pt(_[1])]):{};o&8&&(i.$$scope={dirty:o,ctx:_}),e.$set(i)},i(_){s||(S(e.$$.fragment,_),s=!0)},o(_){g(e.$$.fragment,_),s=!1},d(_){F(e,_)}}}function ol(a,e,s){const t=["class"];let r=ce(e,t),{$$slots:_={},$$scope:o}=e,{class:i=void 0}=e;return a.$$set=n=>{e=se(se({},e),Ie(n)),s(1,r=ce(e,t)),"class"in n&&s(0,i=n.class),"$$scope"in n&&s(3,o=n.$$scope)},[i,r,_,o]}class cr extends ge{constructor(e){super(),de(this,e,ol,_l,me,{class:0})}}function nl(a){let e,s,t,r,_,o;s=new Ns({props:{src:Ao,class:"mr-2 h-4 w-4 shrink-0 text-base-content-muted"}});const i=[{class:we("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-base-content-muted disabled:cursor-not-allowed disabled:opacity-50",a[1])},a[2]];function n(p){a[3](p)}let l={};for(let p=0;p<i.length;p+=1)l=se(l,i[p]);return a[0]!==void 0&&(l.value=a[0]),r=new Ni({props:l}),Je.push(()=>Ft(r,"value",n)),{c(){e=G("div"),H(s.$$.fragment),t=Y(),H(r.$$.fragment),this.h()},l(p){e=M(p,"DIV",{class:!0,"data-cmdk-input-wrapper":!0});var u=q(e);z(s.$$.fragment,u),t=K(u),z(r.$$.fragment,u),u.forEach(m),this.h()},h(){T(e,"class","flex items-center border-b border-base-300 px-3"),T(e,"data-cmdk-input-wrapper","")},m(p,u){y(p,e,u),P(s,e,null),X(e,t),P(r,e,null),o=!0},p(p,[u]){const A=u&6?Re(i,[u&2&&{class:we("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-base-content-muted disabled:cursor-not-allowed disabled:opacity-50",p[1])},u&4&&pt(p[2])]):{};!_&&u&1&&(_=!0,A.value=p[0],Gt(()=>_=!1)),r.$set(A)},i(p){o||(S(s.$$.fragment,p),S(r.$$.fragment,p),o=!0)},o(p){g(s.$$.fragment,p),g(r.$$.fragment,p),o=!1},d(p){p&&m(e),F(s),F(r)}}}function il(a,e,s){const t=["class","value"];let r=ce(e,t),{class:_=void 0}=e,{value:o=""}=e;function i(n){o=n,s(0,o)}return a.$$set=n=>{e=se(se({},e),Ie(n)),s(2,r=ce(e,t)),"class"in n&&s(1,_=n.class),"value"in n&&s(0,o=n.value)},[o,_,r,i]}class ll extends ge{constructor(e){super(),de(this,e,il,nl,me,{class:1,value:0})}}function pl(a){let e;const s=a[2].default,t=be(s,a,a[3],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&8)&&Ee(t,s,r,r[3],e?ve(s,r[3],_,null):he(r[3]),null)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function ul(a){let e,s;const t=[{class:we("max-h-[300px] overflow-y-auto overflow-x-hidden",a[0])},a[1]];let r={$$slots:{default:[pl]},$$scope:{ctx:a}};for(let _=0;_<t.length;_+=1)r=se(r,t[_]);return e=new Wi({props:r}),{c(){H(e.$$.fragment)},l(_){z(e.$$.fragment,_)},m(_,o){P(e,_,o),s=!0},p(_,[o]){const i=o&3?Re(t,[o&1&&{class:we("max-h-[300px] overflow-y-auto overflow-x-hidden",_[0])},o&2&&pt(_[1])]):{};o&8&&(i.$$scope={dirty:o,ctx:_}),e.$set(i)},i(_){s||(S(e.$$.fragment,_),s=!0)},o(_){g(e.$$.fragment,_),s=!1},d(_){F(e,_)}}}function Al(a,e,s){const t=["class"];let r=ce(e,t),{$$slots:_={},$$scope:o}=e,{class:i=void 0}=e;return a.$$set=n=>{e=se(se({},e),Ie(n)),s(1,r=ce(e,t)),"class"in n&&s(0,i=n.class),"$$scope"in n&&s(3,o=n.$$scope)},[i,r,_,o]}class Sl extends ge{constructor(e){super(),de(this,e,Al,ul,me,{class:0})}}function ml(a){let e,s,t;return s=new Ns({props:{src:f_,class:we("h-4 w-4",a[2]?"":"text-transparent")}}),{c(){e=G("div"),H(s.$$.fragment),this.h()},l(r){e=M(r,"DIV",{class:!0});var _=q(e);z(s.$$.fragment,_),_.forEach(m),this.h()},h(){T(e,"class","mr-2 flex h-4 w-4 items-center justify-center")},m(r,_){y(r,e,_),P(s,e,null),t=!0},p(r,_){const o={};_&4&&(o.class=we("h-4 w-4",r[2]?"":"text-transparent")),s.$set(o)},i(r){t||(S(s.$$.fragment,r),t=!0)},o(r){g(s.$$.fragment,r),t=!1},d(r){r&&m(e),F(s)}}}function cl(a){let e,s,t,r;return s=new Ns({props:{src:f_,class:we("h-4 w-4")}}),{c(){e=G("div"),H(s.$$.fragment),this.h()},l(_){e=M(_,"DIV",{class:!0});var o=q(e);z(s.$$.fragment,o),o.forEach(m),this.h()},h(){T(e,"class",t=we("mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-base-content",a[2]?"bg-base-content text-base-100":"opacity-50 [&_svg]:invisible"))},m(_,o){y(_,e,o),P(s,e,null),r=!0},p(_,o){(!r||o&4&&t!==(t=we("mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-base-content",_[2]?"bg-base-content text-base-100":"opacity-50 [&_svg]:invisible")))&&T(e,"class",t)},i(_){r||(S(s.$$.fragment,_),r=!0)},o(_){g(s.$$.fragment,_),r=!1},d(_){_&&m(e),F(s)}}}function gl(a){let e,s,t,r,_,o;const i=[cl,ml],n=[];function l(p,u){return p[4]?0:1}return e=l(a),s=n[e]=i[e](a),{c(){s.c(),t=Y(),r=G("span"),_=ue(a[1]),this.h()},l(p){s.l(p),t=K(p),r=M(p,"SPAN",{class:!0});var u=q(r);_=pe(u,a[1]),u.forEach(m),this.h()},h(){T(r,"class","line-clamp-4")},m(p,u){n[e].m(p,u),y(p,t,u),y(p,r,u),X(r,_),o=!0},p(p,u){let A=e;e=l(p),e===A?n[e].p(p,u):(_e(),g(n[A],1,1,()=>{n[A]=null}),oe(),s=n[e],s?s.p(p,u):(s=n[e]=i[e](p),s.c()),S(s,1),s.m(t.parentNode,t)),(!o||u&2)&&ke(_,p[1])},i(p){o||(S(s),o=!0)},o(p){g(s),o=!1},d(p){p&&(m(t),m(r)),n[e].d(p)}}}function dl(a){let e,s;return e=new cr({props:{value:String(a[1]),onSelect:a[5],$$slots:{default:[gl]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,[r]){const _={};r&2&&(_.value=String(t[1])),r&11&&(_.onSelect=t[5]),r&86&&(_.$$scope={dirty:r,ctx:t}),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function fl(a,e,s){let{value:t}=e,{valueLabel:r=t}=e,{active:_=!1}=e,{handleSelect:o}=e,{multiple:i}=e;const n=()=>o({value:t,label:r});return a.$$set=l=>{"value"in l&&s(0,t=l.value),"valueLabel"in l&&s(1,r=l.valueLabel),"active"in l&&s(2,_=l.active),"handleSelect"in l&&s(3,o=l.handleSelect),"multiple"in l&&s(4,i=l.multiple)},[t,r,_,o,i,n]}class w_ extends ge{constructor(e){super(),de(this,e,fl,dl,me,{value:0,valueLabel:1,active:2,handleSelect:3,multiple:4})}}function yl(a){let e;const s=a[6].default,t=be(s,a,a[7],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&128)&&Ee(t,s,r,r[7],e?ve(s,r[7],_,null):he(r[7]),null)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function bl(a){let e,s;const t=[{transition:a[1]},{transitionConfig:a[2]},{align:a[3]},{sideOffset:a[4]},a[5],{class:we("z-50 w-72 rounded-md border border-base-300 p-4 shadow-md outline-none bg-base-100",a[0])}];let r={$$slots:{default:[yl]},$$scope:{ctx:a}};for(let _=0;_<t.length;_+=1)r=se(r,t[_]);return e=new Ln({props:r}),{c(){H(e.$$.fragment)},l(_){z(e.$$.fragment,_)},m(_,o){P(e,_,o),s=!0},p(_,[o]){const i=o&63?Re(t,[o&2&&{transition:_[1]},o&4&&{transitionConfig:_[2]},o&8&&{align:_[3]},o&16&&{sideOffset:_[4]},o&32&&pt(_[5]),o&1&&{class:we("z-50 w-72 rounded-md border border-base-300 p-4 shadow-md outline-none bg-base-100",_[0])}]):{};o&128&&(i.$$scope={dirty:o,ctx:_}),e.$set(i)},i(_){s||(S(e.$$.fragment,_),s=!0)},o(_){g(e.$$.fragment,_),s=!1},d(_){F(e,_)}}}function El(a,e,s){const t=["class","transition","transitionConfig","align","sideOffset"];let r=ce(e,t),{$$slots:_={},$$scope:o}=e,{class:i=void 0}=e,{transition:n=So}=e,{transitionConfig:l=void 0}=e,{align:p="center"}=e,{sideOffset:u=4}=e;return a.$$set=A=>{e=se(se({},e),Ie(A)),s(5,r=ce(e,t)),"class"in A&&s(0,i=A.class),"transition"in A&&s(1,n=A.transition),"transitionConfig"in A&&s(2,l=A.transitionConfig),"align"in A&&s(3,p=A.align),"sideOffset"in A&&s(4,u=A.sideOffset),"$$scope"in A&&s(7,o=A.$$scope)},[i,n,l,p,u,r,_,o]}class hl extends ge{constructor(e){super(),de(this,e,El,bl,me,{class:0,transition:1,transitionConfig:2,align:3,sideOffset:4})}}const vl=ln,Ll=Un;function Tl(a){let e,s;const t=[{class:we("shrink-0 bg-base-300",a[1]==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",a[0])},{orientation:a[1]},{decorative:a[2]},a[3]];let r={};for(let _=0;_<t.length;_+=1)r=se(r,t[_]);return e=new sn({props:r}),{c(){H(e.$$.fragment)},l(_){z(e.$$.fragment,_)},m(_,o){P(e,_,o),s=!0},p(_,[o]){const i=o&15?Re(t,[o&3&&{class:we("shrink-0 bg-base-300",_[1]==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",_[0])},o&2&&{orientation:_[1]},o&4&&{decorative:_[2]},o&8&&pt(_[3])]):{};e.$set(i)},i(_){s||(S(e.$$.fragment,_),s=!0)},o(_){g(e.$$.fragment,_),s=!1},d(_){F(e,_)}}}function kl(a,e,s){const t=["class","orientation","decorative"];let r=ce(e,t),{class:_=void 0}=e,{orientation:o="horizontal"}=e,{decorative:i=void 0}=e;return a.$$set=n=>{e=se(se({},e),Ie(n)),s(3,r=ce(e,t)),"class"in n&&s(0,_=n.class),"orientation"in n&&s(1,o=n.orientation),"decorative"in n&&s(2,i=n.decorative)},[_,o,i,r]}class I_ extends ge{constructor(e){super(),de(this,e,kl,Tl,me,{class:0,orientation:1,decorative:2})}}function $s(a){let e,s,t;const r=a[5].default,_=be(r,a,a[4],null);let o=[{href:a[1]},{class:s=we(br({variant:a[2],className:a[0]}))},a[3]],i={};for(let n=0;n<o.length;n+=1)i=se(i,o[n]);return{c(){e=G(a[1]?"a":"span"),_&&_.c(),this.h()},l(n){e=M(n,((a[1]?"a":"span")||"null").toUpperCase(),{href:!0,class:!0});var l=q(e);_&&_.l(l),l.forEach(m),this.h()},h(){dr(a[1]?"a":"span")(e,i)},m(n,l){y(n,e,l),_&&_.m(e,null),t=!0},p(n,l){_&&_.p&&(!t||l&16)&&Ee(_,r,n,n[4],t?ve(r,n[4],l,null):he(n[4]),null),dr(n[1]?"a":"span")(e,i=Re(o,[(!t||l&2)&&{href:n[1]},(!t||l&5&&s!==(s=we(br({variant:n[2],className:n[0]}))))&&{class:s},l&8&&n[3]]))},i(n){t||(S(_,n),t=!0)},o(n){g(_,n),t=!1},d(n){n&&m(e),_&&_.d(n)}}}function Cl(a){let e=a[1]?"a":"span",s,t,r=(a[1]?"a":"span")&&$s(a);return{c(){r&&r.c(),s=ae()},l(_){r&&r.l(_),s=ae()},m(_,o){r&&r.m(_,o),y(_,s,o),t=!0},p(_,[o]){_[1],e?me(e,_[1]?"a":"span")?(r.d(1),r=$s(_),e=_[1]?"a":"span",r.c(),r.m(s.parentNode,s)):r.p(_,o):(r=$s(_),e=_[1]?"a":"span",r.c(),r.m(s.parentNode,s))},i(_){t||(S(r,_),t=!0)},o(_){g(r,_),t=!1},d(_){_&&m(s),r&&r.d(_)}}}function Dl(a,e,s){const t=["class","href","variant"];let r=ce(e,t),{$$slots:_={},$$scope:o}=e,{class:i=void 0}=e,{href:n=void 0}=e,{variant:l="default"}=e;return a.$$set=p=>{e=se(se({},e),Ie(p)),s(3,r=ce(e,t)),"class"in p&&s(0,i=p.class),"href"in p&&s(1,n=p.href),"variant"in p&&s(2,l=p.variant),"$$scope"in p&&s(4,o=p.$$scope)},[i,n,l,r,o,_]}class gr extends ge{constructor(e){super(),de(this,e,Dl,Cl,me,{class:0,href:1,variant:2})}}function ea(a,e,s){const t=a.slice();return t[22]=e[s],t}const Ol=a=>({item:a&16}),ta=a=>({item:a[22].data});function xl(a){let e;return{c(){e=ue("Missing template")},l(s){e=pe(s,"Missing template")},m(s,t){y(s,e,t)},d(s){s&&m(e)}}}function sa(a,e){let s,t,r;const _=e[14].default,o=be(_,e,e[13],ta),i=o||xl();return{key:a,first:null,c(){s=G("div"),i&&i.c(),t=Y(),this.h()},l(n){s=M(n,"DIV",{class:!0});var l=q(s);i&&i.l(l),t=K(l),l.forEach(m),this.h()},h(){T(s,"class","row svelte-1youqmj"),this.first=s},m(n,l){y(n,s,l),i&&i.m(s,null),X(s,t),r=!0},p(n,l){e=n,o&&o.p&&(!r||l&8208)&&Ee(o,_,e,e[13],r?ve(_,e[13],l,Ol):he(e[13]),ta)},i(n){r||(S(i,n),r=!0)},o(n){g(i,n),r=!1},d(n){n&&m(s),i&&i.d(n)}}}function Ul(a){let e,s,t=[],r=new Map,_,o,i,n,l=$e(a[4]);const p=u=>u[22].index;for(let u=0;u<l.length;u+=1){let A=ea(a,l,u),d=p(A);r.set(d,t[u]=sa(d,A))}return{c(){e=G("div"),s=G("div");for(let u=0;u<t.length;u+=1)t[u].c();this.h()},l(u){e=M(u,"DIV",{style:!0,class:!0});var A=q(e);s=M(A,"DIV",{class:!0,style:!0});var d=q(s);for(let b=0;b<t.length;b+=1)t[b].l(d);d.forEach(m),A.forEach(m),this.h()},h(){T(s,"class","contents svelte-1youqmj"),Z(s,"padding-top",a[5]+"px"),Z(s,"padding-bottom",a[6]+"px"),Z(e,"height",a[0]),T(e,"class","viewport svelte-1youqmj"),St(()=>a[17].call(e))},m(u,A){y(u,e,A),X(e,s);for(let d=0;d<t.length;d+=1)t[d]&&t[d].m(s,null);a[15](s),a[16](e),_=P_(e,a[17].bind(e)),o=!0,i||(n=Xe(e,"scroll",a[7]),i=!0)},p(u,[A]){A&8208&&(l=$e(u[4]),_e(),t=y_(t,A,p,1,u,l,r,s,b_,sa,null,ea),oe()),(!o||A&32)&&Z(s,"padding-top",u[5]+"px"),(!o||A&64)&&Z(s,"padding-bottom",u[6]+"px"),(!o||A&1)&&Z(e,"height",u[0])},i(u){if(!o){for(let A=0;A<l.length;A+=1)S(t[A]);o=!0}},o(u){for(let A=0;A<t.length;A+=1)g(t[A]);o=!1},d(u){u&&m(e);for(let A=0;A<t.length;A+=1)t[A].d();a[15](null),a[16](null),_(),i=!1,n()}}}function Nl(a,e,s){let{$$slots:t={},$$scope:r}=e,{items:_}=e,{height:o="100%"}=e,{itemHeight:i=void 0}=e,{start:n=0}=e,{end:l=0}=e,p=[],u,A,d,b=0,c,h,N=0,v=0,I;async function U(x,C,E){const{scrollTop:L}=A;if(await ps(),!h)return;let k=N-L,W=n;for(;k<C&&W<x.length;){let $=u[W-n];if(!$){if(s(9,l=W+1),await ps(),!h)return;$=u[W-n]}const ie=p[W]=E||($==null?void 0:$.offsetHeight)||Number.MAX_SAFE_INTEGER;k+=ie,W+=1}s(9,l=W);const j=x.length-l;I=(N+k)/l,s(6,v=j*I),p.length=x.length}async function B(){var W,j;const{scrollTop:x}=A,C=n;for(let $=0;$<u.length;$+=1)p[n+$]=i||((W=u[$])==null?void 0:W.offsetHeight)||Number.MAX_SAFE_INTEGER;let E=0,L=0;for(;E<_.length;){const $=p[E]||I;if(L+$>x){s(8,n=E),s(5,N=L);break}L+=$,E+=1}for(;E<_.length&&(L+=p[E]||I,E+=1,!(L>x+b)););s(9,l=E);const k=_.length-l;for(I=L/l;E<_.length;)p[E++]=I;if(s(6,v=k*I),n<C){await ps();let $=0,ie=0;for(let ee=n;ee<C;ee+=1)u[ee-n]&&($+=p[ee],ie+=i||((j=u[ee-n])==null?void 0:j.offsetHeight)||Number.MAX_SAFE_INTEGER);const R=ie-$;A.scrollTo(0,x+R)}}$t(()=>(u=d.getElementsByClassName("row"),s(12,h=!0),()=>s(12,h=!1)));function w(x){Je[x?"unshift":"push"](()=>{d=x,s(3,d)})}function D(x){Je[x?"unshift":"push"](()=>{A=x,s(2,A)})}function O(){b=this.offsetHeight,s(1,b)}return a.$$set=x=>{"items"in x&&s(10,_=x.items),"height"in x&&s(0,o=x.height),"itemHeight"in x&&s(11,i=x.itemHeight),"start"in x&&s(8,n=x.start),"end"in x&&s(9,l=x.end),"$$scope"in x&&s(13,r=x.$$scope)},a.$$.update=()=>{a.$$.dirty&1792&&s(4,c=_.slice(n,l).map((x,C)=>({index:C+n,data:x}))),a.$$.dirty&7170&&h&&U(_,b,i)},[o,b,A,d,c,N,v,B,n,l,_,i,h,r,t,w,D,O]}class Bl extends ge{constructor(e){super(),de(this,e,Nl,Ul,me,{items:10,height:0,itemHeight:11,start:8,end:9})}}const{Boolean:R_}=Ho;function ra(a,e,s){const t=a.slice();return t[58]=e[s],t[60]=s,t}function aa(a,e,s){const t=a.slice();return t[58]=e[s],t}function _a(a,e,s){const t=a.slice();return t[58]=e[s],t}function oa(a,e){let s,t,r;return t=new ti({props:{value:e[58][e[6]]??e[58].value,valueLabel:e[58][e[7]]??e[58].label,idx:ca(e[58]),__auto:!0}}),{key:a,first:null,c(){s=ae(),H(t.$$.fragment),this.h()},l(_){s=ae(),z(t.$$.fragment,_),this.h()},h(){this.first=s},m(_,o){y(_,s,o),P(t,_,o),r=!0},p(_,o){e=_;const i={};o[0]&4160&&(i.value=e[58][e[6]]??e[58].value),o[0]&4224&&(i.valueLabel=e[58][e[7]]??e[58].label),o[0]&4096&&(i.idx=ca(e[58])),t.$set(i)},i(_){r||(S(t.$$.fragment,_),r=!0)},o(_){g(t.$$.fragment,_),r=!1},d(_){_&&m(s),F(t,_)}}}function wl(a){let e,s,t;function r(o){a[40](o)}let _={$$slots:{default:[s2]},$$scope:{ctx:a}};return a[8]!==void 0&&(_.open=a[8]),e=new vl({props:_}),Je.push(()=>Ft(e,"open",r)),{c(){H(e.$$.fragment)},l(o){z(e.$$.fragment,o)},m(o,i){P(e,o,i),t=!0},p(o,i){const n={};i[0]&49981|i[1]&1024&&(n.$$scope={dirty:i,ctx:o}),!s&&i[0]&256&&(s=!0,n.open=o[8],Gt(()=>s=!1)),e.$set(n)},i(o){t||(S(e.$$.fragment,o),t=!0)},o(o){g(e.$$.fragment,o),t=!1},d(o){F(e,o)}}}function Il(a){let e,s;return e=new ir({props:{inputType:"Dropdown",error:a[10],height:"32",width:"140"}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&1024&&(_.error=t[10]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Rl(a){let e=(a[3]??Ds(a[4]))+"",s,t,r,_,o=a[5]&&na(a);return{c(){s=ue(e),t=Y(),o&&o.c(),r=ae()},l(i){s=pe(i,e),t=K(i),o&&o.l(i),r=ae()},m(i,n){y(i,s,n),y(i,t,n),o&&o.m(i,n),y(i,r,n),_=!0},p(i,n){(!_||n[0]&24)&&e!==(e=(i[3]??Ds(i[4]))+"")&&ke(s,e),i[5]?o?(o.p(i,n),n[0]&32&&S(o,1)):(o=na(i),o.c(),S(o,1),o.m(r.parentNode,r)):o&&(_e(),g(o,1,1,()=>{o=null}),oe())},i(i){_||(S(o),_=!0)},o(i){g(o),_=!1},d(i){i&&(m(s),m(t),m(r)),o&&o.d(i)}}}function jl(a){let e=a[14][0].label+"",s;return{c(){s=ue(e)},l(t){s=pe(t,e)},m(t,r){y(t,s,r)},p(t,r){r[0]&16384&&e!==(e=t[14][0].label+"")&&ke(s,e)},i:le,o:le,d(t){t&&m(s)}}}function Ml(a){let e,s,t,r,_,o=a[5]&&ia(a),i=a[14].length>0&&la(a);return{c(){e=ue(a[3]),s=Y(),o&&o.c(),t=Y(),i&&i.c(),r=ae()},l(n){e=pe(n,a[3]),s=K(n),o&&o.l(n),t=K(n),i&&i.l(n),r=ae()},m(n,l){y(n,e,l),y(n,s,l),o&&o.m(n,l),y(n,t,l),i&&i.m(n,l),y(n,r,l),_=!0},p(n,l){(!_||l[0]&8)&&ke(e,n[3]),n[5]?o?(o.p(n,l),l[0]&32&&S(o,1)):(o=ia(n),o.c(),S(o,1),o.m(t.parentNode,t)):o&&(_e(),g(o,1,1,()=>{o=null}),oe()),n[14].length>0?i?(i.p(n,l),l[0]&16384&&S(i,1)):(i=la(n),i.c(),S(i,1),i.m(r.parentNode,r)):i&&(_e(),g(i,1,1,()=>{i=null}),oe())},i(n){_||(S(o),S(i),_=!0)},o(n){g(o),g(i),_=!1},d(n){n&&(m(e),m(s),m(t),m(r)),o&&o.d(n),i&&i.d(n)}}}function na(a){let e,s;return e=new fs({props:{description:a[5],className:"pl-1"}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&32&&(_.description=t[5]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function ia(a){let e,s;return e=new fs({props:{description:a[5],className:"pl-1"}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&32&&(_.description=t[5]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function la(a){let e,s,t=a[14][0].label+"",r,_;return e=new I_({props:{orientation:"vertical",class:"mx-2 h-4"}}),{c(){H(e.$$.fragment),s=Y(),r=ue(t)},l(o){z(e.$$.fragment,o),s=K(o),r=pe(o,t)},m(o,i){P(e,o,i),y(o,s,i),y(o,r,i),_=!0},p(o,i){(!_||i[0]&16384)&&t!==(t=o[14][0].label+"")&&ke(r,t)},i(o){_||(S(e.$$.fragment,o),_=!0)},o(o){g(e.$$.fragment,o),_=!1},d(o){o&&(m(s),m(r)),F(e,o)}}}function pa(a){let e,s,t,r,_,o,i,n;e=new I_({props:{orientation:"vertical",class:"mx-2 h-4"}}),t=new gr({props:{variant:"default",class:"rounded-xs px-1 font-normal sm:hidden",$$slots:{default:[Gl]},$$scope:{ctx:a}}});const l=[Pl,Fl],p=[];function u(A,d){return A[14].length>3?0:1}return o=u(a),i=p[o]=l[o](a),{c(){H(e.$$.fragment),s=Y(),H(t.$$.fragment),r=Y(),_=G("div"),i.c(),this.h()},l(A){z(e.$$.fragment,A),s=K(A),z(t.$$.fragment,A),r=K(A),_=M(A,"DIV",{class:!0});var d=q(_);i.l(d),d.forEach(m),this.h()},h(){T(_,"class","hidden space-x-1 sm:flex")},m(A,d){P(e,A,d),y(A,s,d),P(t,A,d),y(A,r,d),y(A,_,d),p[o].m(_,null),n=!0},p(A,d){const b={};d[0]&16384|d[1]&1024&&(b.$$scope={dirty:d,ctx:A}),t.$set(b);let c=o;o=u(A),o===c?p[o].p(A,d):(_e(),g(p[c],1,1,()=>{p[c]=null}),oe(),i=p[o],i?i.p(A,d):(i=p[o]=l[o](A),i.c()),S(i,1),i.m(_,null))},i(A){n||(S(e.$$.fragment,A),S(t.$$.fragment,A),S(i),n=!0)},o(A){g(e.$$.fragment,A),g(t.$$.fragment,A),g(i),n=!1},d(A){A&&(m(s),m(r),m(_)),F(e,A),F(t,A),p[o].d()}}}function Gl(a){let e=a[14].length+"",s;return{c(){s=ue(e)},l(t){s=pe(t,e)},m(t,r){y(t,s,r)},p(t,r){r[0]&16384&&e!==(e=t[14].length+"")&&ke(s,e)},d(t){t&&m(s)}}}function Fl(a){let e,s,t=$e(a[14]),r=[];for(let o=0;o<t.length;o+=1)r[o]=ua(aa(a,t,o));const _=o=>g(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=ae()},l(o){for(let i=0;i<r.length;i+=1)r[i].l(o);e=ae()},m(o,i){for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(o,i);y(o,e,i),s=!0},p(o,i){if(i[0]&16384){t=$e(o[14]);let n;for(n=0;n<t.length;n+=1){const l=aa(o,t,n);r[n]?(r[n].p(l,i),S(r[n],1)):(r[n]=ua(l),r[n].c(),S(r[n],1),r[n].m(e.parentNode,e))}for(_e(),n=t.length;n<r.length;n+=1)_(n);oe()}},i(o){if(!s){for(let i=0;i<t.length;i+=1)S(r[i]);s=!0}},o(o){r=r.filter(R_);for(let i=0;i<r.length;i+=1)g(r[i]);s=!1},d(o){o&&m(e),vt(r,o)}}}function Pl(a){let e,s;return e=new gr({props:{variant:"default",class:"rounded-xs px-1 font-normal",$$slots:{default:[Hl]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&16384|r[1]&1024&&(_.$$scope={dirty:r,ctx:t}),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function zl(a){let e=a[58].label+"",s,t;return{c(){s=ue(e),t=Y()},l(r){s=pe(r,e),t=K(r)},m(r,_){y(r,s,_),y(r,t,_)},p(r,_){_[0]&16384&&e!==(e=r[58].label+"")&&ke(s,e)},d(r){r&&(m(s),m(t))}}}function ua(a){let e,s;return e=new gr({props:{variant:"default",class:"rounded-xs px-1 font-normal",$$slots:{default:[zl]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&16384|r[1]&1024&&(_.$$scope={dirty:r,ctx:t}),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Hl(a){let e=a[14].length+"",s,t;return{c(){s=ue(e),t=ue(" Selected")},l(r){s=pe(r,e),t=pe(r," Selected")},m(r,_){y(r,s,_),y(r,t,_)},p(r,_){_[0]&16384&&e!==(e=r[14].length+"")&&ke(s,e)},d(r){r&&(m(s),m(t))}}}function Vl(a){let e,s,t,r,_,o,i;const n=[Ml,jl,Rl],l=[];function p(A,d){return A[3]&&!A[0]?0:A[14].length>0&&!A[0]?1:2}e=p(a),s=l[e]=n[e](a),r=new Ns({props:{src:fo,class:"ml-2 h-4 w-4"}});let u=a[14].length>0&&a[0]&&pa(a);return{c(){s.c(),t=Y(),H(r.$$.fragment),_=Y(),u&&u.c(),o=ae()},l(A){s.l(A),t=K(A),z(r.$$.fragment,A),_=K(A),u&&u.l(A),o=ae()},m(A,d){l[e].m(A,d),y(A,t,d),P(r,A,d),y(A,_,d),u&&u.m(A,d),y(A,o,d),i=!0},p(A,d){let b=e;e=p(A),e===b?l[e].p(A,d):(_e(),g(l[b],1,1,()=>{l[b]=null}),oe(),s=l[e],s?s.p(A,d):(s=l[e]=n[e](A),s.c()),S(s,1),s.m(t.parentNode,t)),A[14].length>0&&A[0]?u?(u.p(A,d),d[0]&16385&&S(u,1)):(u=pa(A),u.c(),S(u,1),u.m(o.parentNode,o)):u&&(_e(),g(u,1,1,()=>{u=null}),oe())},i(A){i||(S(s),S(r.$$.fragment,A),S(u),i=!0)},o(A){g(s),g(r.$$.fragment,A),g(u),i=!1},d(A){A&&(m(t),m(_),m(o)),l[e].d(A),F(r,A),u&&u.d(A)}}}function Wl(a){let e,s;return e=new Fo({props:{builders:[a[61]],variant:"outline",role:"combobox",size:"sm",class:"min-w-5 h-8 border border-base-300","aria-label":a[3]??Ds(a[4]),$$slots:{default:[Vl]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[1]&1073741824&&(_.builders=[t[61]]),r[0]&24&&(_["aria-label"]=t[3]??Ds(t[4])),r[0]&16441|r[1]&1024&&(_.$$scope={dirty:r,ctx:t}),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Kl(a){let e;return{c(){e=ue("No results found.")},l(s){e=pe(s,"No results found.")},m(s,t){y(s,e,t)},d(s){s&&m(e)}}}function Yl(a){let e,s;return e=new Bl({props:{height:`${j_*32}px`,items:a[15],$$slots:{default:[Xl,({item:t})=>({58:t}),({item:t})=>[0,t?134217728:0]]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&32768&&(_.items=t[15]),r[0]&16641|r[1]&134218752&&(_.$$scope={dirty:r,ctx:t}),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function ql(a){let e,s,t=$e(a[15]),r=[];for(let o=0;o<t.length;o+=1)r[o]=Aa(ra(a,t,o));const _=o=>g(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=ae()},l(o){for(let i=0;i<r.length;i+=1)r[i].l(o);e=ae()},m(o,i){for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(o,i);y(o,e,i),s=!0},p(o,i){if(i[0]&4243713){t=$e(o[15]);let n;for(n=0;n<t.length;n+=1){const l=ra(o,t,n);r[n]?(r[n].p(l,i),S(r[n],1)):(r[n]=Aa(l),r[n].c(),S(r[n],1),r[n].m(e.parentNode,e))}for(_e(),n=t.length;n<r.length;n+=1)_(n);oe()}},i(o){if(!s){for(let i=0;i<t.length;i+=1)S(r[i]);s=!0}},o(o){r=r.filter(R_);for(let i=0;i<r.length;i+=1)g(r[i]);s=!1},d(o){o&&m(e),vt(r,o)}}}function Xl(a){var r,_;let e,s;function t(...o){return a[39](a[58],...o)}return e=new w_({props:{value:(r=a[58])==null?void 0:r.value,valueLabel:(_=a[58])==null?void 0:_.label,handleSelect:a[38],multiple:a[0],active:a[14].some(t)}}),{c(){H(e.$$.fragment)},l(o){z(e.$$.fragment,o)},m(o,i){P(e,o,i),s=!0},p(o,i){var l,p;a=o;const n={};i[1]&134217728&&(n.value=(l=a[58])==null?void 0:l.value),i[1]&134217728&&(n.valueLabel=(p=a[58])==null?void 0:p.label),i[0]&257&&(n.handleSelect=a[38]),i[0]&1&&(n.multiple=a[0]),i[0]&16384|i[1]&134217728&&(n.active=a[14].some(t)),e.$set(n)},i(o){s||(S(e.$$.fragment,o),s=!0)},o(o){g(e.$$.fragment,o),s=!1},d(o){F(e,o)}}}function Aa(a){let e,s;function t(...r){return a[37](a[58],...r)}return e=new w_({props:{id:a[60],value:a[58].value,valueLabel:a[58].label,handleSelect:a[36],multiple:a[0],active:a[14].some(t)}}),{c(){H(e.$$.fragment)},l(r){z(e.$$.fragment,r)},m(r,_){P(e,r,_),s=!0},p(r,_){a=r;const o={};_[0]&32768&&(o.value=a[58].value),_[0]&32768&&(o.valueLabel=a[58].label),_[0]&257&&(o.handleSelect=a[36]),_[0]&1&&(o.multiple=a[0]),_[0]&49152&&(o.active=a[14].some(t)),e.$set(o)},i(r){s||(S(e.$$.fragment,r),s=!0)},o(r){g(e.$$.fragment,r),s=!1},d(r){F(e,r)}}}function Ql(a){let e,s,t,r;const _=[ql,Yl],o=[];function i(n,l){return n[15].length<=j_?0:1}return e=i(a),s=o[e]=_[e](a),{c(){s.c(),t=ae()},l(n){s.l(n),t=ae()},m(n,l){o[e].m(n,l),y(n,t,l),r=!0},p(n,l){let p=e;e=i(n),e===p?o[e].p(n,l):(_e(),g(o[p],1,1,()=>{o[p]=null}),oe(),s=o[e],s?s.p(n,l):(s=o[e]=_[e](n),s.c()),S(s,1),s.m(t.parentNode,t))},i(n){r||(S(s),r=!0)},o(n){g(s),r=!1},d(n){n&&m(t),o[e].d(n)}}}function Sa(a){let e,s,t,r,_,o=!a[2]&&ma(a);return r=new cr({props:{disabled:a[14].length===0,class:"justify-center text-center",onSelect:a[21],$$slots:{default:[Zl]},$$scope:{ctx:a}}}),{c(){o&&o.c(),e=Y(),s=G("div"),t=Y(),H(r.$$.fragment),this.h()},l(i){o&&o.l(i),e=K(i),s=M(i,"DIV",{class:!0}),q(s).forEach(m),t=K(i),z(r.$$.fragment,i),this.h()},h(){T(s,"class","-mx-1 h-px bg-base-300")},m(i,n){o&&o.m(i,n),y(i,e,n),y(i,s,n),y(i,t,n),P(r,i,n),_=!0},p(i,n){i[2]?o&&(_e(),g(o,1,1,()=>{o=null}),oe()):o?(o.p(i,n),n[0]&4&&S(o,1)):(o=ma(i),o.c(),S(o,1),o.m(e.parentNode,e));const l={};n[0]&16384&&(l.disabled=i[14].length===0),n[1]&1024&&(l.$$scope={dirty:n,ctx:i}),r.$set(l)},i(i){_||(S(o),S(r.$$.fragment,i),_=!0)},o(i){g(o),g(r.$$.fragment,i),_=!1},d(i){i&&(m(e),m(s),m(t)),o&&o.d(i),F(r,i)}}}function ma(a){let e,s,t,r;return t=new cr({props:{class:"justify-center text-center",onSelect:a[20],$$slots:{default:[Jl]},$$scope:{ctx:a}}}),{c(){e=G("div"),s=Y(),H(t.$$.fragment),this.h()},l(_){e=M(_,"DIV",{class:!0}),q(e).forEach(m),s=K(_),z(t.$$.fragment,_),this.h()},h(){T(e,"class","-mx-1 h-px bg-base-300")},m(_,o){y(_,e,o),y(_,s,o),P(t,_,o),r=!0},p(_,o){const i={};o[1]&1024&&(i.$$scope={dirty:o,ctx:_}),t.$set(i)},i(_){r||(S(t.$$.fragment,_),r=!0)},o(_){g(t.$$.fragment,_),r=!1},d(_){_&&(m(e),m(s)),F(t,_)}}}function Jl(a){let e;return{c(){e=ue("Select all")},l(s){e=pe(s,"Select all")},m(s,t){y(s,e,t)},d(s){s&&m(e)}}}function Zl(a){let e;return{c(){e=ue("Clear selection")},l(s){e=pe(s,"Clear selection")},m(s,t){y(s,e,t)},d(s){s&&m(e)}}}function $l(a){let e,s,t,r,_,o;e=new $i({props:{$$slots:{default:[Kl]},$$scope:{ctx:a}}}),t=new rl({props:{$$slots:{default:[Ql]},$$scope:{ctx:a}}});let i=a[0]&&Sa(a);return{c(){H(e.$$.fragment),s=Y(),H(t.$$.fragment),r=Y(),i&&i.c(),_=ae()},l(n){z(e.$$.fragment,n),s=K(n),z(t.$$.fragment,n),r=K(n),i&&i.l(n),_=ae()},m(n,l){P(e,n,l),y(n,s,l),P(t,n,l),y(n,r,l),i&&i.m(n,l),y(n,_,l),o=!0},p(n,l){const p={};l[1]&1024&&(p.$$scope={dirty:l,ctx:n}),e.$set(p);const u={};l[0]&49409|l[1]&1024&&(u.$$scope={dirty:l,ctx:n}),t.$set(u),n[0]?i?(i.p(n,l),l[0]&1&&S(i,1)):(i=Sa(n),i.c(),S(i,1),i.m(_.parentNode,_)):i&&(_e(),g(i,1,1,()=>{i=null}),oe())},i(n){o||(S(e.$$.fragment,n),S(t.$$.fragment,n),S(i),o=!0)},o(n){g(e.$$.fragment,n),g(t.$$.fragment,n),g(i),o=!1},d(n){n&&(m(s),m(r),m(_)),F(e,n),F(t,n),i&&i.d(n)}}}function e2(a){let e,s,t,r,_;function o(n){a[35](n)}let i={placeholder:a[3]};return a[9]!==void 0&&(i.value=a[9]),e=new ll({props:i}),Je.push(()=>Ft(e,"value",o)),r=new Sl({props:{$$slots:{default:[$l]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment),t=Y(),H(r.$$.fragment)},l(n){z(e.$$.fragment,n),t=K(n),z(r.$$.fragment,n)},m(n,l){P(e,n,l),y(n,t,l),P(r,n,l),_=!0},p(n,l){const p={};l[0]&8&&(p.placeholder=n[3]),!s&&l[0]&512&&(s=!0,p.value=n[9],Gt(()=>s=!1)),e.$set(p);const u={};l[0]&49413|l[1]&1024&&(u.$$scope={dirty:l,ctx:n}),r.$set(u)},i(n){_||(S(e.$$.fragment,n),S(r.$$.fragment,n),_=!0)},o(n){g(e.$$.fragment,n),g(r.$$.fragment,n),_=!1},d(n){n&&m(t),F(e,n),F(r,n)}}}function t2(a){let e,s;return e=new Xi({props:{shouldFilter:!1,$$slots:{default:[e2]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&49933|r[1]&1024&&(_.$$scope={dirty:r,ctx:t}),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function s2(a){let e,s,t,r;return e=new Ll({props:{asChild:!0,$$slots:{default:[Wl,({builder:_})=>({61:_}),({builder:_})=>[0,_?1073741824:0]]},$$scope:{ctx:a}}}),t=new hl({props:{class:"w-[200px] p-0",align:"start",side:"bottom",$$slots:{default:[t2]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment),s=Y(),H(t.$$.fragment)},l(_){z(e.$$.fragment,_),s=K(_),z(t.$$.fragment,_)},m(_,o){P(e,_,o),y(_,s,o),P(t,_,o),r=!0},p(_,o){const i={};o[0]&16441|o[1]&1073742848&&(i.$$scope={dirty:o,ctx:_}),e.$set(i);const n={};o[0]&49933|o[1]&1024&&(n.$$scope={dirty:o,ctx:_}),t.$set(n)},i(_){r||(S(e.$$.fragment,_),S(t.$$.fragment,_),r=!0)},o(_){g(e.$$.fragment,_),g(t.$$.fragment,_),r=!1},d(_){_&&m(s),F(e,_),F(t,_)}}}function r2(a){let e,s,t,r;const _=[Il,wl],o=[];function i(n,l){return n[10].length>0?0:1}return s=i(a),t=o[s]=_[s](a),{c(){e=G("div"),t.c(),this.h()},l(n){e=M(n,"DIV",{class:!0});var l=q(e);t.l(l),l.forEach(m),this.h()},h(){T(e,"class","mt-2 mb-4 ml-0 mr-2 inline-block")},m(n,l){y(n,e,l),o[s].m(e,null),r=!0},p(n,l){let p=s;s=i(n),s===p?o[s].p(n,l):(_e(),g(o[p],1,1,()=>{o[p]=null}),oe(),t=o[s],t?t.p(n,l):(t=o[s]=_[s](n),t.c()),S(t,1),t.m(e,null))},i(n){r||(S(t),r=!0)},o(n){g(t),r=!1},d(n){n&&m(e),o[s].d()}}}function a2(a){let e,s=[],t=new Map,r,_,o;const i=a[34].default,n=be(i,a,a[41],null);let l=$e(a[12]);const p=u=>{var A,d;return`${(A=u[58].label)==null?void 0:A.toString()} ${(d=u[58].value)==null?void 0:d.toString()}`};for(let u=0;u<l.length;u+=1){let A=_a(a,l,u),d=p(A);t.set(d,s[u]=oa(d,A))}return _=new U_({props:{enabled:a[1],$$slots:{default:[r2]},$$scope:{ctx:a}}}),{c(){n&&n.c(),e=Y();for(let u=0;u<s.length;u+=1)s[u].c();r=Y(),H(_.$$.fragment)},l(u){n&&n.l(u),e=K(u);for(let A=0;A<s.length;A+=1)s[A].l(u);r=K(u),z(_.$$.fragment,u)},m(u,A){n&&n.m(u,A),y(u,e,A);for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(u,A);y(u,r,A),P(_,u,A),o=!0},p(u,A){n&&n.p&&(!o||A[1]&1024)&&Ee(n,i,u,u[41],o?ve(i,u[41],A,null):he(u[41]),null),A[0]&4288&&(l=$e(u[12]),_e(),s=y_(s,A,p,1,u,l,t,r.parentNode,b_,oa,r,_a),oe());const d={};A[0]&2&&(d.enabled=u[1]),A[0]&51005|A[1]&1024&&(d.$$scope={dirty:A,ctx:u}),_.$set(d)},i(u){if(!o){S(n,u);for(let A=0;A<l.length;A+=1)S(s[A]);S(_.$$.fragment,u),o=!0}},o(u){g(n,u);for(let A=0;A<s.length;A+=1)g(s[A]);g(_.$$.fragment,u),o=!1},d(u){u&&(m(e),m(r)),n&&n.d(u);for(let A=0;A<s.length;A+=1)s[A].d(u);F(_,u)}}}const j_=5;function ca(a){return"similarity"in a?a.similarity*-1:a.ordinal??0}function _2(a,e,s){var We;let t,r,_=le,o=()=>(_(),_=jt(t,Q=>s(31,r=Q)),t),i,n=le,l=()=>(n(),n=jt(Le,Q=>s(32,i=Q)),Le),p,u,A,d,b;Oe(a,Sr,Q=>s(45,d=Q)),a.$$.on_destroy.push(()=>_()),a.$$.on_destroy.push(()=>n());let{$$slots:c={},$$scope:h}=e;const N=z_(c),v=E_();Oe(a,v,Q=>s(44,u=Q));let{title:I=void 0}=e,{name:U}=e,{multiple:B=!1}=e,{hideDuringPrint:w=!0}=e,{disableSelectAll:D=!1}=e,{defaultValue:O=[]}=e,{noDefault:x=!1}=e,{selectAllByDefault:C=!1}=e,{description:E=void 0}=e,{value:L="value",data:k,label:W=L,order:j=void 0,where:$=void 0}=e;const{results:ie,update:R}=mo({value:L,data:k,label:W,order:j,where:$},`Dropdown-${U}`,(We=d==null?void 0:d.data)==null?void 0:We.data[`Dropdown-${U}_data`]);Oe(a,ie,Q=>s(33,A=Q));let ee=!!k;const re=U in u&&"rawValues"in u[U]&&Array.isArray(u[U].rawValues)?u[U].rawValues:[],te=co({multiselect:B,defaultValues:Array.isArray(O)?O:[O],initialOptions:re,noDefault:x,selectAllByDefault:Et(C)}),{addOptions:Se,removeOptions:Ce,options:J,selectedOptions:Ne,selectAll:ne,deselectAll:ye,toggleSelected:et,pauseSorting:_t,resumeSorting:st,forceSort:nt,destroy:tt}=te;Oe(a,J,Q=>s(15,b=Q)),Oe(a,Ne,Q=>s(14,p=Q)),er(tt);const it=Q=>{JSON.stringify(Q)!==JSON.stringify(u[U])&&Jt(v,u[U]=Q,u)};let bt=[],ut=p.length>0;er(Ne.subscribe(Q=>{if(ut||(ut=Q.length>0),Q&&ut){const Ae=Q;B?it({label:Ae.map(Fe=>Fe.label).join(", "),value:Ae.length?`(${Ae.map(Fe=>ar(Fe.value))})`:"(select null where 0)",rawValues:Ae}):Ae.length?Ae.length&&it({label:Ae[0].label,value:ar(Ae[0].value,{serializeStrings:!1}),rawValues:Ae}):it({label:"",value:null,rawValues:[]})}})),cs(N_,{registerOption:Q=>(Se(Q),()=>{Ce(Q)})});let Ze,je="",xe=0,Le;const Pe=go(()=>{if(xe++,je&&ee){const Q=xe,Ae=t.search(je,"label");Ae.hash!==(Le==null?void 0:Le.hash)&&yo(()=>{Q===xe&&(l(s(13,Le=Ae)),nt())},Ae.fetch())}else l(s(13,Le=t??k))});let De=[];L||(k?De.push('Missing required prop: "value".'):N.default||De.push('Dropdown requires either "value" and "data" props or <DropdownOption />.')),k&&typeof k!="object"&&(typeof k=="string"?De.push(`'${k}' is not a recognized query result. Data should be provided in the format: data = {'${k.replace("data.","")}'}`):De.push(`'${k}' is not a recognized query result. Data should be an object. e.g data = {QueryName}`));try{k_({name:U})}catch(Q){De.push(Q.message)}let ze=!1;function Ke(Q){je=Q,s(9,je)}const Me=({value:Q,label:Ae})=>{et({value:Q,label:Ae}),B||s(8,Ze=!1)},Ge=(Q,Ae)=>Ae.value===Q.value&&Ae.label===Q.label,He=({value:Q,label:Ae})=>{et({value:Q,label:Ae}),B||s(8,Ze=!1)},Ye=(Q,Ae)=>Ae.value===Q.value&&Ae.label===Q.label;function qe(Q){Ze=Q,s(8,Ze)}return a.$$set=Q=>{"title"in Q&&s(3,I=Q.title),"name"in Q&&s(4,U=Q.name),"multiple"in Q&&s(0,B=Q.multiple),"hideDuringPrint"in Q&&s(1,w=Q.hideDuringPrint),"disableSelectAll"in Q&&s(2,D=Q.disableSelectAll),"defaultValue"in Q&&s(25,O=Q.defaultValue),"noDefault"in Q&&s(23,x=Q.noDefault),"selectAllByDefault"in Q&&s(24,C=Q.selectAllByDefault),"description"in Q&&s(5,E=Q.description),"value"in Q&&s(6,L=Q.value),"data"in Q&&s(26,k=Q.data),"label"in Q&&s(7,W=Q.label),"order"in Q&&s(27,j=Q.order),"where"in Q&&s(28,$=Q.where),"$$scope"in Q&&s(41,h=Q.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&1&&s(0,B=Et(B)),a.$$.dirty[0]&2&&s(1,w=Et(w)),a.$$.dirty[0]&4&&s(2,D=Et(D)),a.$$.dirty[0]&8388608&&s(23,x=Et(x)),a.$$.dirty[0]&16777216&&s(24,C=Et(C)),a.$$.dirty[0]&469762240&&R({value:L,data:k,label:W,order:j,where:$}),a.$$.dirty[1]&4&&s(29,{hasQuery:ee,query:t}=A,ee,o(s(11,t))),a.$$.dirty[0]&2048&&t&&t.fetch(),a.$$.dirty[0]&67111424&&Pe(),a.$$.dirty[0]&256&&(Ze?_t():st()),a.$$.dirty[1]&2&&i!=null&&i.dataLoaded&&s(12,bt=i),a.$$.dirty[0]&1610613760|a.$$.dirty[1]&1&&r!=null&&r.error&&ee&&!ze&&(s(10,De=[...De,r.error]),s(30,ze=!0))},[B,w,D,I,U,E,L,W,Ze,je,De,t,bt,Le,p,b,v,ie,J,Ne,ne,ye,et,x,C,O,k,j,$,ee,ze,r,i,A,c,Ke,Me,Ge,He,Ye,qe,h]}class o2 extends ge{constructor(e){super(),de(this,e,_2,a2,me,{title:3,name:4,multiple:0,hideDuringPrint:1,disableSelectAll:2,defaultValue:25,noDefault:23,selectAllByDefault:24,description:5,value:6,data:26,label:7,order:27,where:28},null,[-1,-1,-1])}}function ga(a,e,s){const t=a.slice();return t[5]=e[s],t}function da(a){let e,s;return e=new x_({props:{class:"block h-3 w-3 rounded-full border border-base-content bg-base-content shadow transition-colors active:outline-none ring-primary/50 active:ring-2 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 cursor-pointer"}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p:le,i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function fa(a){let e,s;return e=new x_({props:{thumb:a[5],class:"block h-3 w-3 rounded-full border border-base-content bg-base-content shadow transition-colors active:outline-none ring-primary/50 active:ring-2 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 cursor-pointer"}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r&16&&(_.thumb=t[5]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function n2(a){let e,s,t,r,_;s=new Wn({props:{class:"absolute h-full bg-base-content before:block before:absolute before:top-0 before:-left-1.5 before:w-2 before:h-1 before:bg-base-content after:block after:absolute after:top-0 after:-right-1 after:w-1 after:h-1 after:bg-base-content/20 after:-z-10 after:rounded-r-full"}});let o=$e(a[4]??[]),i=[];for(let p=0;p<o.length;p+=1)i[p]=fa(ga(a,o,p));const n=p=>g(i[p],1,1,()=>{i[p]=null});let l=null;return o.length||(l=da()),{c(){e=G("span"),H(s.$$.fragment),t=Y();for(let p=0;p<i.length;p+=1)i[p].c();r=ae(),l&&l.c(),this.h()},l(p){e=M(p,"SPAN",{class:!0});var u=q(e);z(s.$$.fragment,u),u.forEach(m),t=K(p);for(let A=0;A<i.length;A+=1)i[A].l(p);r=ae(),l&&l.l(p),this.h()},h(){T(e,"class","relative h-1 w-full grow rounded-l-full bg-base-300 cursor-pointer before:block before:absolute before:-top-4 before:-left-1.5 before:h-9 before:transparent before:z-0 before:w-[calc(100%+0.6rem)]")},m(p,u){y(p,e,u),P(s,e,null),y(p,t,u);for(let A=0;A<i.length;A+=1)i[A]&&i[A].m(p,u);y(p,r,u),l&&l.m(p,u),_=!0},p(p,u){if(u&16){o=$e(p[4]??[]);let A;for(A=0;A<o.length;A+=1){const d=ga(p,o,A);i[A]?(i[A].p(d,u),S(i[A],1)):(i[A]=fa(d),i[A].c(),S(i[A],1),i[A].m(r.parentNode,r))}for(_e(),A=o.length;A<i.length;A+=1)n(A);oe(),!o.length&&l?l.p(p,u):o.length?l&&(_e(),g(l,1,1,()=>{l=null}),oe()):(l=da(),l.c(),S(l,1),l.m(r.parentNode,r))}},i(p){if(!_){S(s.$$.fragment,p);for(let u=0;u<o.length;u+=1)S(i[u]);_=!0}},o(p){g(s.$$.fragment,p),i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)g(i[u]);_=!1},d(p){p&&(m(e),m(t),m(r)),F(s),vt(i,p),l&&l.d(p)}}}function i2(a){let e,s,t;const r=[{class:we("relative left-1.5 flex w-full touch-none select-none items-center",a[1])},a[2]];function _(i){a[3](i)}let o={$$slots:{default:[n2,({thumbs:i})=>({4:i}),({thumbs:i})=>i?16:0]},$$scope:{ctx:a}};for(let i=0;i<r.length;i+=1)o=se(o,r[i]);return a[0]!==void 0&&(o.value=a[0]),e=new Gn({props:o}),Je.push(()=>Ft(e,"value",_)),{c(){H(e.$$.fragment)},l(i){z(e.$$.fragment,i)},m(i,n){P(e,i,n),t=!0},p(i,[n]){const l=n&6?Re(r,[n&2&&{class:we("relative left-1.5 flex w-full touch-none select-none items-center",i[1])},n&4&&pt(i[2])]):{};n&272&&(l.$$scope={dirty:n,ctx:i}),!s&&n&1&&(s=!0,l.value=i[0],Gt(()=>s=!1)),e.$set(l)},i(i){t||(S(e.$$.fragment,i),t=!0)},o(i){g(e.$$.fragment,i),t=!1},d(i){F(e,i)}}}function l2(a,e,s){const t=["class","value"];let r=ce(e,t),{class:_=void 0}=e,{value:o=[0]}=e;function i(n){o=n,s(0,o)}return a.$$set=n=>{e=se(se({},e),Ie(n)),s(2,r=ce(e,t)),"class"in n&&s(1,_=n.class),"value"in n&&s(0,o=n.value)},[o,_,r,i]}class p2 extends ge{constructor(e){super(),de(this,e,l2,i2,me,{class:1,value:0})}}function u2(a){let e,s,t,r,_,o,i,n=(a[7]?ot(a[13][a[6]],a[11]):a[13][a[6]])+"",l,p,u,A,d,b,c;const h=[m2,S2],N=[];function v(w,D){return w[8]?0:1}r=v(a),_=N[r]=h[r](a);function I(w){a[22](w)}let U={min:a[0],max:a[1],step:a[4],sizeClass:a[12]};a[9]!==void 0&&(U.value=a[9]),u=new p2({props:U}),Je.push(()=>Ft(u,"value",I));let B=a[2]&&ya(a);return{c(){e=G("div"),s=G("p"),t=G("span"),_.c(),o=Y(),i=G("span"),l=ue(n),p=Y(),H(u.$$.fragment),d=Y(),B&&B.c(),this.h()},l(w){e=M(w,"DIV",{class:!0});var D=q(e);s=M(D,"P",{class:!0});var O=q(s);t=M(O,"SPAN",{class:!0});var x=q(t);_.l(x),x.forEach(m),o=K(O),i=M(O,"SPAN",{class:!0});var C=q(i);l=pe(C,n),C.forEach(m),O.forEach(m),p=K(D),z(u.$$.fragment,D),d=K(D),B&&B.l(D),D.forEach(m),this.h()},h(){T(t,"class","font-medium"),T(i,"class","text-xs"),T(s,"class","pb-2 truncate text-xs"),T(e,"class",b=`relative ${a[12]} mt-2 mb-10 select-none`)},m(w,D){y(w,e,D),X(e,s),X(s,t),N[r].m(t,null),X(s,o),X(s,i),X(i,l),X(e,p),P(u,e,null),X(e,d),B&&B.m(e,null),c=!0},p(w,D){let O=r;r=v(w),r===O?N[r].p(w,D):(_e(),g(N[O],1,1,()=>{N[O]=null}),oe(),_=N[r],_?_.p(w,D):(_=N[r]=h[r](w),_.c()),S(_,1),_.m(t,null)),(!c||D&10432)&&n!==(n=(w[7]?ot(w[13][w[6]],w[11]):w[13][w[6]])+"")&&ke(l,n);const x={};D&1&&(x.min=w[0]),D&2&&(x.max=w[1]),D&16&&(x.step=w[4]),D&4096&&(x.sizeClass=w[12]),!A&&D&512&&(A=!0,x.value=w[9],Gt(()=>A=!1)),u.$set(x),w[2]?B?B.p(w,D):(B=ya(w),B.c(),B.m(e,null)):B&&(B.d(1),B=null),(!c||D&4096&&b!==(b=`relative ${w[12]} mt-2 mb-10 select-none`))&&T(e,"class",b)},i(w){c||(S(_),S(u.$$.fragment,w),c=!0)},o(w){g(_),g(u.$$.fragment,w),c=!1},d(w){w&&m(e),N[r].d(),F(u),B&&B.d()}}}function A2(a){let e,s;return e=new ir({props:{inputType:"Slider",error:a[10],width:"170",height:"36"}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r&1024&&(_.error=t[10]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function S2(a){let e,s;return{c(){e=ue(a[5]),s=ue(":")},l(t){e=pe(t,a[5]),s=pe(t,":")},m(t,r){y(t,e,r),y(t,s,r)},p(t,r){r&32&&ke(e,t[5])},i:le,o:le,d(t){t&&(m(e),m(s))}}}function m2(a){let e,s,t;return s=new fs({props:{description:a[8],className:"mr-2"}}),{c(){e=ue(a[5]),H(s.$$.fragment)},l(r){e=pe(r,a[5]),z(s.$$.fragment,r)},m(r,_){y(r,e,_),P(s,r,_),t=!0},p(r,_){(!t||_&32)&&ke(e,r[5]);const o={};_&256&&(o.description=r[8]),s.$set(o)},i(r){t||(S(s.$$.fragment,r),t=!0)},o(r){g(s.$$.fragment,r),t=!1},d(r){r&&m(e),F(s,r)}}}function ya(a){let e,s=(a[7]?ot(a[0],a[11]):a[0])+"",t,r,_,o=(a[7]?ot(a[1],a[11]):a[1])+"",i;return{c(){e=G("span"),t=ue(s),r=Y(),_=G("span"),i=ue(o),this.h()},l(n){e=M(n,"SPAN",{class:!0});var l=q(e);t=pe(l,s),l.forEach(m),r=K(n),_=M(n,"SPAN",{class:!0});var p=q(_);i=pe(p,o),p.forEach(m),this.h()},h(){T(e,"class","absolute left-0 text-xs pt-1 -z-10"),T(_,"class","absolute -right-2.5 text-xs pt-1 -z-10")},m(n,l){y(n,e,l),X(e,t),y(n,r,l),y(n,_,l),X(_,i)},p(n,l){l&2177&&s!==(s=(n[7]?ot(n[0],n[11]):n[0])+"")&&ke(t,s),l&2178&&o!==(o=(n[7]?ot(n[1],n[11]):n[1])+"")&&ke(i,o)},d(n){n&&(m(e),m(r),m(_))}}}function c2(a){let e,s,t,r;const _=[A2,u2],o=[];function i(n,l){return n[10].length>0?0:1}return e=i(a),s=o[e]=_[e](a),{c(){s.c(),t=ae()},l(n){s.l(n),t=ae()},m(n,l){o[e].m(n,l),y(n,t,l),r=!0},p(n,l){let p=e;e=i(n),e===p?o[e].p(n,l):(_e(),g(o[p],1,1,()=>{o[p]=null}),oe(),s=o[e],s?s.p(n,l):(s=o[e]=_[e](n),s.c()),S(s,1),s.m(t.parentNode,t))},i(n){r||(S(s),r=!0)},o(n){g(s),r=!1},d(n){n&&m(t),o[e].d(n)}}}function g2(a){let e,s;return e=new U_({props:{enabled:a[3],$$slots:{default:[c2]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,[r]){const _={};r&8&&(_.enabled=t[3]),r&268451831&&(_.$$scope={dirty:r,ctx:t}),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function d2(a,e,s){var j,$,ie;let t,r,_,o;const i=E_();Oe(a,i,R=>s(13,o=R));let{title:n}=e,{name:l}=e,{min:p=0}=e,{max:u=100}=e,{step:A=1}=e,{showMaxMin:d=!0}=e,{hideDuringPrint:b=!0}=e,{defaultValue:c}=e,{range:h=void 0}=e,N=[0],{fmt:v="num0"}=e,{size:I=""}=e,U,{description:B=void 0}=e,{data:w}=e,{maxColumn:D=void 0}=e,{minColumn:O=void 0}=e,x=[];function C(R,ee){if(R=bo(R),isNaN(R)){x.push(`${ee} must be a number`);return}return R}function E(R,ee){R>ee&&x.push("min cannot be greater than max")}const L=R=>({small:"w-40",medium:"w-64",large:"w-96",full:"w-[calc(100%-0.6rem)]"})[R.toLowerCase()]||"w-40";if(w){try{As(w,[],[h,c,O,D])}catch(R){x=[...x,R.message]}typeof c=="string"&&((j=w[0])!=null&&j[c])&&(N=[w[0][c]]),h&&(p=w.map(R=>R[h]).reduce((R,ee)=>Math.min(R,ee)),u=w.map(R=>R[h]).reduce((R,ee)=>Math.max(R,ee))),D&&(($=w[0])!=null&&$[D])&&(u=w[0][D]),O&&((ie=w[0])!=null&&ie[O])&&(p=w[0][O])}try{k_({name:l})}catch(R){x.push(R.message)}const k=()=>{r>1e3&&A<_&&s(4,A=_)};function W(R){N=R,s(9,N),s(15,c),s(18,w),s(0,p),s(10,x),s(1,u)}return a.$$set=R=>{"title"in R&&s(5,n=R.title),"name"in R&&s(6,l=R.name),"min"in R&&s(0,p=R.min),"max"in R&&s(1,u=R.max),"step"in R&&s(4,A=R.step),"showMaxMin"in R&&s(2,d=R.showMaxMin),"hideDuringPrint"in R&&s(3,b=R.hideDuringPrint),"defaultValue"in R&&s(15,c=R.defaultValue),"range"in R&&s(16,h=R.range),"fmt"in R&&s(7,v=R.fmt),"size"in R&&s(17,I=R.size),"description"in R&&s(8,B=R.description),"data"in R&&s(18,w=R.data),"maxColumn"in R&&s(19,D=R.maxColumn),"minColumn"in R&&s(20,O=R.minColumn)},a.$$.update=()=>{a.$$.dirty&4&&s(2,d=Et(d)),a.$$.dirty&8&&s(3,b=Et(b)),a.$$.dirty&1&&p!==void 0&&s(0,p=C(p,"min")),a.$$.dirty&2&&u!==void 0&&s(1,u=C(u,"max")),a.$$.dirty&3&&u!==void 0&&p!==void 0&&E(p,u),a.$$.dirty&295939&&c!==void 0&&!w&&(s(15,c=C(c,"defaultValue")),c<p?x.push("defaultValue cannot be less than min"):c>u&&x.push("defaultValue cannot be greater than max"),s(9,N=[c])),a.$$.dirty&576&&Jt(i,o[l]=N,o),a.$$.dirty&131072&&s(12,t=L(I)),a.$$.dirty&128&&(v?s(11,U=h_(v,"number")):s(11,U=void 0)),a.$$.dirty&3&&s(21,r=u-p),a.$$.dirty&2097152&&(_=r/1e3),a.$$.dirty&2097152&&r>1e3&&k()},[p,u,d,b,A,n,l,v,B,N,x,U,t,o,i,c,h,I,w,D,O,r,W]}class f2 extends ge{constructor(e){super(),de(this,e,d2,g2,me,{title:5,name:6,min:0,max:1,step:4,showMaxMin:2,hideDuringPrint:3,defaultValue:15,range:16,fmt:7,size:17,description:8,data:18,maxColumn:19,minColumn:20})}}function y2(a){let e,s;const t=[a[4],{data:Ve.isQuery(a[7])?Array.from(a[7]):a[7]}];let r={};for(let _=0;_<t.length;_+=1)r=se(r,t[_]);return e=new f2({props:r}),{c(){H(e.$$.fragment)},l(_){z(e.$$.fragment,_)},m(_,o){P(e,_,o),s=!0},p(_,o){const i=o&144?Re(t,[o&16&&pt(_[4]),o&128&&{data:Ve.isQuery(_[7])?Array.from(_[7]):_[7]}]):{};e.$set(i)},i(_){s||(S(e.$$.fragment,_),s=!0)},o(_){g(e.$$.fragment,_),s=!1},d(_){F(e,_)}}}function ba(a){let e,s;return e=new ws({props:{emptyMessage:a[2],emptySet:a[1],chartType:v2,isInitial:a[3]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r&4&&(_.emptyMessage=t[2]),r&2&&(_.emptySet=t[1]),r&8&&(_.isInitial=t[3]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function b2(a){let e,s,t=!a[4].placeholder&&ba(a);return{c(){e=G("span"),t&&t.c(),this.h()},l(r){e=M(r,"SPAN",{slot:!0});var _=q(e);t&&t.l(_),_.forEach(m),this.h()},h(){T(e,"slot","empty")},m(r,_){y(r,e,_),t&&t.m(e,null),s=!0},p(r,_){r[4].placeholder?t&&(_e(),g(t,1,1,()=>{t=null}),oe()):t?(t.p(r,_),_&16&&S(t,1)):(t=ba(r),t.c(),S(t,1),t.m(e,null))},i(r){s||(S(t),s=!0)},o(r){g(t),s=!1},d(r){r&&m(e),t&&t.d()}}}function E2(a){let e,s="Loading...";return{c(){e=G("span"),e.textContent=s,this.h()},l(t){e=M(t,"SPAN",{slot:!0,class:!0,"data-svelte-h":!0}),ft(e)!=="svelte-exu0be"&&(e.textContent=s),this.h()},h(){T(e,"slot","skeleton"),T(e,"class","text-gray-500")},m(t,r){y(t,e,r)},p:le,d(t){t&&m(e)}}}function h2(a){let e,s;return e=new Bs({props:{data:a[0],$$slots:{skeleton:[E2],empty:[b2],default:[y2,({loaded:t})=>({7:t}),({loaded:t})=>t?128:0]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,[r]){const _={};r&1&&(_.data=t[0]),r&414&&(_.$$scope={dirty:r,ctx:t}),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}let v2="Slider";function L2(a,e,s){let t,{data:r}=e;const _=Ve.isQuery(r)?r.hash:void 0;let o=(r==null?void 0:r.hash)===_,{emptySet:i=void 0}=e,{emptyMessage:n=void 0}=e;return a.$$set=l=>{s(6,e=se(se({},e),Ie(l))),"data"in l&&s(0,r=l.data),"emptySet"in l&&s(1,i=l.emptySet),"emptyMessage"in l&&s(2,n=l.emptyMessage)},a.$$.update=()=>{a.$$.dirty&1&&s(3,o=(r==null?void 0:r.hash)===_),s(4,t=Object.fromEntries(Object.entries(e).filter(([,l])=>l!==void 0)))},e=Ie(e),[r,i,n,o,t]}class T2 extends ge{constructor(e){super(),de(this,e,L2,h2,me,{data:0,emptySet:1,emptyMessage:2})}}function k2(a){let e,s,t;const r=a[5].default,_=be(r,a,a[4],null);return{c(){e=G("div"),_&&_.c(),this.h()},l(o){e=M(o,"DIV",{class:!0});var i=q(e);_&&_.l(i),i.forEach(m),this.h()},h(){T(e,"class",s="grid "+a[2][a[0]]+" "+a[3][a[1]])},m(o,i){y(o,e,i),_&&_.m(e,null),t=!0},p(o,[i]){_&&_.p&&(!t||i&16)&&Ee(_,r,o,o[4],t?ve(r,o[4],i,null):he(o[4]),null),(!t||i&3&&s!==(s="grid "+o[2][o[0]]+" "+o[3][o[1]]))&&T(e,"class",s)},i(o){t||(S(_,o),t=!0)},o(o){g(_,o),t=!1},d(o){o&&m(e),_&&_.d(o)}}}function C2(a,e,s){let{$$slots:t={},$$scope:r}=e,{cols:_=2}=e,{gapSize:o="md"}=e;const i=Object.freeze({1:"grid-cols-1",2:"grid-cols-1 sm:grid-cols-2",3:"grid-cols-1 sm:grid-cols-2 md:grid-cols-3",4:"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",5:"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",6:"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"}),n=Object.freeze({none:"gap-0",sm:"gap-2",md:"gap-4",lg:"gap-8"}),l=Object.freeze({none:0,sm:8,md:16,lg:32});let p=`grid-${Date.now()}-${Math.round(Math.random()*1e3)}`,u=l[o];return cs("gridConfig",{gridId:p,cols:_,gapWidth:u}),a.$$set=A=>{"cols"in A&&s(0,_=A.cols),"gapSize"in A&&s(1,o=A.gapSize),"$$scope"in A&&s(4,r=A.$$scope)},[_,o,i,n,r,t]}class D2 extends ge{constructor(e){super(),de(this,e,C2,k2,me,{cols:0,gapSize:1})}}function O2(a){let e,s,t;return{c(){e=G("span"),s=Yt("svg"),t=Yt("path"),this.h()},l(r){e=M(r,"SPAN",{"aria-expanded":!0,class:!0});var _=q(e);s=Kt(_,"svg",{viewBox:!0,width:!0,height:!0,class:!0});var o=q(s);t=Kt(o,"path",{fill:!0,"fill-rule":!0,d:!0}),q(t).forEach(m),o.forEach(m),_.forEach(m),this.h()},h(){T(t,"fill",a[3]),T(t,"fill-rule","evenodd"),T(t,"d","M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"),T(s,"viewBox","0 0 16 16"),T(s,"width",a[1]),T(s,"height",a[1]),T(s,"class","svelte-lqleyo"),T(e,"aria-expanded",a[0]),T(e,"class","svelte-lqleyo")},m(r,_){y(r,e,_),X(e,s),X(s,t)},p(r,[_]){_&8&&T(t,"fill",r[3]),_&2&&T(s,"width",r[1]),_&2&&T(s,"height",r[1]),_&1&&T(e,"aria-expanded",r[0])},i:le,o:le,d(r){r&&m(e)}}}function x2(a,e,s){let t,r,_=le,o=()=>(_(),_=jt(t,u=>s(3,r=u)),t);a.$$.on_destroy.push(()=>_());const{resolveColor:i}=es();let{toggled:n=!1}=e,{color:l="base-content"}=e,{size:p=10}=e;return a.$$set=u=>{"toggled"in u&&s(0,n=u.toggled),"color"in u&&s(4,l=u.color),"size"in u&&s(1,p=u.size)},a.$$.update=()=>{a.$$.dirty&16&&o(s(2,t=i(l)))},[n,p,t,r,l]}class M_ extends ge{constructor(e){super(),de(this,e,x2,O2,me,{toggled:0,color:4,size:1})}}function Ea(a,e,s){const t=a.slice();return t[2]=e[s],t}function ha(a){let e;return{c(){e=G("br"),this.h()},l(s){e=M(s,"BR",{_ignore:!0}),this.h()},h(){T(e,"_ignore",a[2])},m(s,t){y(s,e,t)},p:le,d(s){s&&m(e)}}}function U2(a){let e,s=$e(a[0]),t=[];for(let r=0;r<s.length;r+=1)t[r]=ha(Ea(a,s,r));return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=ae()},l(r){for(let _=0;_<t.length;_+=1)t[_].l(r);e=ae()},m(r,_){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,_);y(r,e,_)},p(r,[_]){if(_&1){s=$e(r[0]);let o;for(o=0;o<s.length;o+=1){const i=Ea(r,s,o);t[o]?t[o].p(i,_):(t[o]=ha(i),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=s.length}},i:le,o:le,d(r){r&&m(e),vt(t,r)}}}function N2(a,e,s){let{lines:t=1}=e,r=Array.from({length:t});return a.$$set=_=>{"lines"in _&&s(1,t=_.lines)},[r,t]}class B2 extends ge{constructor(e){super(),de(this,e,N2,U2,me,{lines:1})}}function va(a,e,s){const t=a.slice();return t[12]=e[s],t[14]=s,t}function La(a,e,s){const t=a.slice();return t[15]=e[s],t[17]=s,t}function Ta(a,e,s){const t=a.slice();return t[15]=e[s],t}function ka(a,e,s){const t=a.slice();return t[15]=e[s],t}function Ca(a){let e,s=a[15].id+"",t,r,_,o;return{c(){e=G("th"),t=ue(s),this.h()},l(i){e=M(i,"TH",{class:!0,style:!0,evidencetype:!0,evidencetypefidelity:!0});var n=q(e);t=pe(n,s),n.forEach(m),this.h()},h(){var i,n;T(e,"class",r="py-0 px-2 font-medium "+a[15].type+" svelte-ghf30y"),Z(e,"width",a[6]+"%"),T(e,"evidencetype",_=((i=a[15].evidenceColumnType)==null?void 0:i.evidenceType)||"unavailable"),T(e,"evidencetypefidelity",o=((n=a[15].evidenceColumnType)==null?void 0:n.typeFidelity)||"unavailable")},m(i,n){y(i,e,n),X(e,t)},p(i,n){var l,p;n&8&&s!==(s=i[15].id+"")&&ke(t,s),n&8&&r!==(r="py-0 px-2 font-medium "+i[15].type+" svelte-ghf30y")&&T(e,"class",r),n&64&&Z(e,"width",i[6]+"%"),n&8&&_!==(_=((l=i[15].evidenceColumnType)==null?void 0:l.evidenceType)||"unavailable")&&T(e,"evidencetype",_),n&8&&o!==(o=((p=i[15].evidenceColumnType)==null?void 0:p.typeFidelity)||"unavailable")&&T(e,"evidencetypefidelity",o)},d(i){i&&m(e)}}}function Da(a){let e,s=a[15].type+"",t,r,_,o;return{c(){e=G("th"),t=ue(s),this.h()},l(i){e=M(i,"TH",{class:!0,style:!0,evidencetype:!0,evidencetypefidelity:!0});var n=q(e);t=pe(n,s),n.forEach(m),this.h()},h(){var i,n;T(e,"class",r=a[15].type+" type-indicator text-base-content-muted font-normal py-0 px-2 svelte-ghf30y"),Z(e,"width",a[6]+"%"),T(e,"evidencetype",_=((i=a[15].evidenceColumnType)==null?void 0:i.evidenceType)||"unavailable"),T(e,"evidencetypefidelity",o=((n=a[15].evidenceColumnType)==null?void 0:n.typeFidelity)||"unavailable")},m(i,n){y(i,e,n),X(e,t)},p(i,n){var l,p;n&8&&s!==(s=i[15].type+"")&&ke(t,s),n&8&&r!==(r=i[15].type+" type-indicator text-base-content-muted font-normal py-0 px-2 svelte-ghf30y")&&T(e,"class",r),n&64&&Z(e,"width",i[6]+"%"),n&8&&_!==(_=((l=i[15].evidenceColumnType)==null?void 0:l.evidenceType)||"unavailable")&&T(e,"evidencetype",_),n&8&&o!==(o=((p=i[15].evidenceColumnType)==null?void 0:p.typeFidelity)||"unavailable")&&T(e,"evidencetypefidelity",o)},d(i){i&&m(e)}}}function w2(a){let e=(a[2]+a[14]+1).toLocaleString()+"",s;return{c(){s=ue(e)},l(t){s=pe(t,e)},m(t,r){y(t,s,r)},p(t,r){r&4&&e!==(e=(t[2]+t[14]+1).toLocaleString()+"")&&ke(s,e)},d(t){t&&m(s)}}}function I2(a){let e=(a[2]+a[14]+1).toLocaleString()+"",s;return{c(){s=ue(e)},l(t){s=pe(t,e)},m(t,r){y(t,s,r)},p(t,r){r&4&&e!==(e=(t[2]+t[14]+1).toLocaleString()+"")&&ke(s,e)},d(t){t&&m(s)}}}function R2(a){let e,s=(a[12][a[15].id]||"Ø")+"",t;return{c(){e=G("td"),t=ue(s),this.h()},l(r){e=M(r,"TD",{class:!0,style:!0});var _=q(e);t=pe(_,s),_.forEach(m),this.h()},h(){T(e,"class","other svelte-ghf30y"),Z(e,"width",a[6]+"%")},m(r,_){y(r,e,_),X(e,t)},p(r,_){_&40&&s!==(s=(r[12][r[15].id]||"Ø")+"")&&ke(t,s),_&64&&Z(e,"width",r[6]+"%")},d(r){r&&m(e)}}}function j2(a){let e,s,t=(a[12][a[15].id]??"Ø")+"",r,_;return{c(){e=G("td"),s=G("div"),r=ue(t),this.h()},l(o){e=M(o,"TD",{class:!0,style:!0,title:!0});var i=q(e);s=M(i,"DIV",{class:!0});var n=q(s);r=pe(n,t),n.forEach(m),i.forEach(m),this.h()},h(){T(s,"class","svelte-ghf30y"),T(e,"class","boolean svelte-ghf30y"),Z(e,"width",a[6]+"%"),T(e,"title",_=a[12][a[15].id])},m(o,i){y(o,e,i),X(e,s),X(s,r)},p(o,i){i&40&&t!==(t=(o[12][o[15].id]??"Ø")+"")&&ke(r,t),i&64&&Z(e,"width",o[6]+"%"),i&40&&_!==(_=o[12][o[15].id])&&T(e,"title",_)},d(o){o&&m(e)}}}function M2(a){let e,s,t=(a[12][a[15].id]||"Ø")+"",r,_;return{c(){e=G("td"),s=G("div"),r=ue(t),this.h()},l(o){e=M(o,"TD",{class:!0,style:!0,title:!0});var i=q(e);s=M(i,"DIV",{class:!0});var n=q(s);r=pe(n,t),n.forEach(m),i.forEach(m),this.h()},h(){T(s,"class","svelte-ghf30y"),T(e,"class","string svelte-ghf30y"),Z(e,"width",a[6]+"%"),T(e,"title",_=a[12][a[15].id])},m(o,i){y(o,e,i),X(e,s),X(s,r)},p(o,i){i&40&&t!==(t=(o[12][o[15].id]||"Ø")+"")&&ke(r,t),i&64&&Z(e,"width",o[6]+"%"),i&40&&_!==(_=o[12][o[15].id])&&T(e,"title",_)},d(o){o&&m(e)}}}function G2(a){let e,s,t=ot(a[12][a[15].id],a[3][a[17]].format,a[3][a[17]].columnUnitSummary)+"",r,_;return{c(){e=G("td"),s=G("div"),r=ue(t),this.h()},l(o){e=M(o,"TD",{class:!0,style:!0,title:!0});var i=q(e);s=M(i,"DIV",{class:!0});var n=q(s);r=pe(n,t),n.forEach(m),i.forEach(m),this.h()},h(){T(s,"class","svelte-ghf30y"),T(e,"class","string svelte-ghf30y"),Z(e,"width",a[6]+"%"),T(e,"title",_=ot(a[12][a[15].id],a[3][a[17]].format,a[3][a[17]].columnUnitSummary))},m(o,i){y(o,e,i),X(e,s),X(s,r)},p(o,i){i&40&&t!==(t=ot(o[12][o[15].id],o[3][o[17]].format,o[3][o[17]].columnUnitSummary)+"")&&ke(r,t),i&64&&Z(e,"width",o[6]+"%"),i&40&&_!==(_=ot(o[12][o[15].id],o[3][o[17]].format,o[3][o[17]].columnUnitSummary))&&T(e,"title",_)},d(o){o&&m(e)}}}function F2(a){let e,s=ot(a[12][a[15].id],a[3][a[17]].format,a[3][a[17]].columnUnitSummary)+"",t;return{c(){e=G("td"),t=ue(s),this.h()},l(r){e=M(r,"TD",{class:!0,style:!0});var _=q(e);t=pe(_,s),_.forEach(m),this.h()},h(){T(e,"class","number svelte-ghf30y"),Z(e,"width",a[6]+"%")},m(r,_){y(r,e,_),X(e,t)},p(r,_){_&40&&s!==(s=ot(r[12][r[15].id],r[3][r[17]].format,r[3][r[17]].columnUnitSummary)+"")&&ke(t,s),_&64&&Z(e,"width",r[6]+"%")},d(r){r&&m(e)}}}function P2(a){let e,s="Ø",t,r;return{c(){e=G("td"),t=ue(s),this.h()},l(_){e=M(_,"TD",{class:!0,style:!0});var o=q(e);t=pe(o,s),o.forEach(m),this.h()},h(){T(e,"class",r="text-base-content-muted "+a[3][a[17]].type+" svelte-ghf30y"),Z(e,"width",a[6]+"%")},m(_,o){y(_,e,o),X(e,t)},p(_,o){o&8&&r!==(r="text-base-content-muted "+_[3][_[17]].type+" svelte-ghf30y")&&T(e,"class",r),o&64&&Z(e,"width",_[6]+"%")},d(_){_&&m(e)}}}function Oa(a){let e;function s(_,o){return _[12][_[15].id]==null?P2:_[3][_[17]].type==="number"?F2:_[3][_[17]].type==="date"?G2:_[3][_[17]].type==="string"?M2:_[3][_[17]].type==="boolean"?j2:R2}let t=s(a),r=t(a);return{c(){r.c(),e=ae()},l(_){r.l(_),e=ae()},m(_,o){r.m(_,o),y(_,e,o)},p(_,o){t===(t=s(_))&&r?r.p(_,o):(r.d(1),r=t(_),r&&(r.c(),r.m(e.parentNode,e)))},d(_){_&&m(e),r.d(_)}}}function xa(a){let e,s,t,r;function _(p,u){return p[14]===0?I2:w2}let i=_(a)(a),n=$e(a[3]),l=[];for(let p=0;p<n.length;p+=1)l[p]=Oa(La(a,n,p));return{c(){e=G("tr"),s=G("td"),i.c(),t=Y();for(let p=0;p<l.length;p+=1)l[p].c();r=Y(),this.h()},l(p){e=M(p,"TR",{});var u=q(e);s=M(u,"TD",{class:!0,style:!0});var A=q(s);i.l(A),A.forEach(m),t=K(u);for(let d=0;d<l.length;d+=1)l[d].l(u);r=K(u),u.forEach(m),this.h()},h(){T(s,"class","index text-base-content-muted svelte-ghf30y"),Z(s,"width","10%")},m(p,u){y(p,e,u),X(e,s),i.m(s,null),X(e,t);for(let A=0;A<l.length;A+=1)l[A]&&l[A].m(e,null);X(e,r)},p(p,u){if(i.p(p,u),u&104){n=$e(p[3]);let A;for(A=0;A<n.length;A+=1){const d=La(p,n,A);l[A]?l[A].p(d,u):(l[A]=Oa(d),l[A].c(),l[A].m(e,r))}for(;A<l.length;A+=1)l[A].d(1);l.length=n.length}},d(p){p&&m(e),i.d(),vt(l,p)}}}function Ua(a){let e,s,t,r,_=(a[2]+Rt).toLocaleString()+"",o,i,n=(a[4]+Rt).toLocaleString()+"",l,p,u;return{c(){e=G("div"),s=G("input"),t=Y(),r=G("span"),o=ue(_),i=ue(" of "),l=ue(n),this.h()},l(A){e=M(A,"DIV",{class:!0});var d=q(e);s=M(d,"INPUT",{type:!0,max:!0,step:!0,class:!0}),t=K(d),r=M(d,"SPAN",{class:!0});var b=q(r);o=pe(b,_),i=pe(b," of "),l=pe(b,n),b.forEach(m),d.forEach(m),this.h()},h(){T(s,"type","range"),T(s,"max",a[4]),T(s,"step","1"),T(s,"class","slider bg-info/30 hover:bg-info/40 transition-colors svelte-ghf30y"),T(r,"class","text-xs svelte-ghf30y"),T(e,"class","pagination svelte-ghf30y")},m(A,d){y(A,e,d),X(e,s),ks(s,a[2]),X(e,t),X(e,r),X(r,o),X(r,i),X(r,l),p||(u=[Xe(s,"change",a[9]),Xe(s,"input",a[9]),Xe(s,"input",a[7])],p=!0)},p(A,d){d&16&&T(s,"max",A[4]),d&4&&ks(s,A[2]),d&4&&_!==(_=(A[2]+Rt).toLocaleString()+"")&&ke(o,_),d&16&&n!==(n=(A[4]+Rt).toLocaleString()+"")&&ke(l,n)},d(A){A&&m(e),p=!1,kt(u)}}}function z2(a){let e,s,t,r,_,o,i,n,l,p,u,A,d,b,c,h,N,v,I,U,B,w,D,O,x,C,E=$e(a[3]),L=[];for(let R=0;R<E.length;R+=1)L[R]=Ca(ka(a,E,R));let k=$e(a[3]),W=[];for(let R=0;R<k.length;R+=1)W[R]=Da(Ta(a,k,R));let j=$e(a[5]),$=[];for(let R=0;R<j.length;R+=1)$[R]=xa(va(a,j,R));let ie=a[4]>0&&Ua(a);return w=new lr({props:{class:"download-button",data:a[1],queryID:a[0],display:!0}}),{c(){e=G("div"),s=G("div"),t=G("table"),r=G("thead"),_=G("tr"),o=G("th"),i=Y();for(let R=0;R<L.length;R+=1)L[R].c();n=Y(),l=G("tr"),p=Y(),u=G("tr"),A=G("th"),d=Y();for(let R=0;R<W.length;R+=1)W[R].c();b=Y(),c=G("tr"),h=Y(),N=G("tbody");for(let R=0;R<$.length;R+=1)$[R].c();I=Y(),ie&&ie.c(),U=Y(),B=G("div"),H(w.$$.fragment),this.h()},l(R){e=M(R,"DIV",{class:!0});var ee=q(e);s=M(ee,"DIV",{class:!0});var re=q(s);t=M(re,"TABLE",{class:!0});var te=q(t);r=M(te,"THEAD",{});var Se=q(r);_=M(Se,"TR",{});var Ce=q(_);o=M(Ce,"TH",{class:!0,style:!0}),q(o).forEach(m),i=K(Ce);for(let ye=0;ye<L.length;ye+=1)L[ye].l(Ce);n=K(Ce),Ce.forEach(m),l=M(Se,"TR",{}),q(l).forEach(m),p=K(Se),u=M(Se,"TR",{class:!0});var J=q(u);A=M(J,"TH",{class:!0,style:!0}),q(A).forEach(m),d=K(J);for(let ye=0;ye<W.length;ye+=1)W[ye].l(J);b=K(J),J.forEach(m),c=M(Se,"TR",{}),q(c).forEach(m),Se.forEach(m),h=K(te),N=M(te,"TBODY",{});var Ne=q(N);for(let ye=0;ye<$.length;ye+=1)$[ye].l(Ne);Ne.forEach(m),te.forEach(m),re.forEach(m),I=K(ee),ie&&ie.l(ee),U=K(ee),B=M(ee,"DIV",{class:!0});var ne=q(B);z(w.$$.fragment,ne),ne.forEach(m),ee.forEach(m),this.h()},h(){T(o,"class","py-0 px-2 font-medium index text-base-content-muted svelte-ghf30y"),Z(o,"width","10%"),T(A,"class","py-0 px-2 index type-indicator text-base-content-muted font-normal svelte-ghf30y"),Z(A,"width","10%"),T(u,"class","type-indicator svelte-ghf30y"),T(t,"class","text-xs svelte-ghf30y"),T(s,"class","scrollbox pretty-scrollbar svelte-ghf30y"),T(B,"class","footer svelte-ghf30y"),T(e,"class","results-pane py-1 svelte-ghf30y")},m(R,ee){y(R,e,ee),X(e,s),X(s,t),X(t,r),X(r,_),X(_,o),X(_,i);for(let re=0;re<L.length;re+=1)L[re]&&L[re].m(_,null);X(_,n),X(r,l),X(r,p),X(r,u),X(u,A),X(u,d);for(let re=0;re<W.length;re+=1)W[re]&&W[re].m(u,null);X(u,b),X(r,c),X(t,h),X(t,N);for(let re=0;re<$.length;re+=1)$[re]&&$[re].m(N,null);X(e,I),ie&&ie.m(e,null),X(e,U),X(e,B),P(w,B,null),O=!0,x||(C=Xe(N,"wheel",a[8]),x=!0)},p(R,[ee]){if(ee&72){E=$e(R[3]);let te;for(te=0;te<E.length;te+=1){const Se=ka(R,E,te);L[te]?L[te].p(Se,ee):(L[te]=Ca(Se),L[te].c(),L[te].m(_,n))}for(;te<L.length;te+=1)L[te].d(1);L.length=E.length}if(ee&72){k=$e(R[3]);let te;for(te=0;te<k.length;te+=1){const Se=Ta(R,k,te);W[te]?W[te].p(Se,ee):(W[te]=Da(Se),W[te].c(),W[te].m(u,b))}for(;te<W.length;te+=1)W[te].d(1);W.length=k.length}if(ee&108){j=$e(R[5]);let te;for(te=0;te<j.length;te+=1){const Se=va(R,j,te);$[te]?$[te].p(Se,ee):($[te]=xa(Se),$[te].c(),$[te].m(N,null))}for(;te<$.length;te+=1)$[te].d(1);$.length=j.length}R[4]>0?ie?ie.p(R,ee):(ie=Ua(R),ie.c(),ie.m(e,U)):ie&&(ie.d(1),ie=null);const re={};ee&2&&(re.data=R[1]),ee&1&&(re.queryID=R[0]),w.$set(re)},i(R){O||(R&&(v||St(()=>{v=gs(t,v_,{}),v.start()})),S(w.$$.fragment,R),R&&St(()=>{O&&(D||(D=yt(e,Tt,{},!0)),D.run(1))}),O=!0)},o(R){g(w.$$.fragment,R),R&&(D||(D=yt(e,Tt,{},!1)),D.run(0)),O=!1},d(R){R&&m(e),vt(L,R),vt(W,R),vt($,R),ie&&ie.d(),F(w),R&&D&&D.end(),x=!1,C()}}}let Rt=5;function H2(a,e,s){let t,r,_,o,{queryID:i}=e,{data:n}=e,l=0,p;function u(){p=n.slice(l,l+Rt),s(5,o=p)}const A=Eo(c=>{s(2,l=Math.min(Math.max(0,l+Math.floor(c.deltaY/Math.abs(c.deltaY))),_)),u()},60);function d(c){if(Math.abs(c.deltaX)>=Math.abs(c.deltaY))return;const h=c.deltaY<0&&l===0,N=c.deltaY>0&&l===_;h||N||(c.preventDefault(),A(c))}function b(){l=H_(this.value),s(2,l)}return a.$$set=c=>{"queryID"in c&&s(0,i=c.queryID),"data"in c&&s(1,n=c.data)},a.$$.update=()=>{a.$$.dirty&2&&s(3,t=pr(n,"array")),a.$$.dirty&8&&s(6,r=90/(t.length+1)),a.$$.dirty&2&&s(4,_=Math.max(n.length-Rt,0)),a.$$.dirty&6&&s(5,o=n.slice(l,l+Rt))},[i,n,l,t,_,o,r,u,d,b]}class V2 extends ge{constructor(e){super(),de(this,e,H2,z2,me,{queryID:0,data:1})}}const Na={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};function W2(a){let e,s,t,r,_=Er.highlight(a[0],Na)+"",o;return{c(){e=G("pre"),s=ue("  "),t=G("code"),r=new W_(!1),o=ue(`
`),this.h()},l(i){e=M(i,"PRE",{class:!0});var n=q(e);s=pe(n,"  "),t=M(n,"CODE",{class:!0});var l=q(t);r=V_(l,!1),l.forEach(m),o=pe(n,`
`),n.forEach(m),this.h()},h(){r.a=null,T(t,"class","language-sql svelte-re3fhx"),T(e,"class","text-xs max-h-56 overflow-auto pretty-scrollbar")},m(i,n){y(i,e,n),X(e,s),X(e,t),r.m(_,t),X(e,o)},p(i,[n]){n&1&&_!==(_=Er.highlight(i[0],Na)+"")&&r.p(_)},i:le,o:le,d(i){i&&m(e)}}}function K2(a,e,s){let{code:t=""}=e;return a.$$set=r=>{"code"in r&&s(0,t=r.code)},[t]}class G_ extends ge{constructor(e){super(),de(this,e,K2,W2,me,{code:0})}}function Y2(a){let e,s="Compiled",t,r,_="Written",o,i;return{c(){e=G("button"),e.textContent=s,t=Y(),r=G("button"),r.textContent=_,this.h()},l(n){e=M(n,"BUTTON",{class:!0,"data-svelte-h":!0}),ft(e)!=="svelte-1vzm9jy"&&(e.textContent=s),t=K(n),r=M(n,"BUTTON",{class:!0,"data-svelte-h":!0}),ft(r)!=="svelte-qu81ez"&&(r.textContent=_),this.h()},h(){T(e,"class","off svelte-ska6l4"),T(r,"class","text-info bg-info/10 border border-info svelte-ska6l4")},m(n,l){y(n,e,l),y(n,t,l),y(n,r,l),o||(i=Xe(e,"click",a[1]),o=!0)},p:le,d(n){n&&(m(e),m(t),m(r)),o=!1,i()}}}function q2(a){let e,s="Compiled",t,r,_="Written",o,i;return{c(){e=G("button"),e.textContent=s,t=Y(),r=G("button"),r.textContent=_,this.h()},l(n){e=M(n,"BUTTON",{class:!0,"data-svelte-h":!0}),ft(e)!=="svelte-wrfleh"&&(e.textContent=s),t=K(n),r=M(n,"BUTTON",{class:!0,"data-svelte-h":!0}),ft(r)!=="svelte-v36xno"&&(r.textContent=_),this.h()},h(){T(e,"class","text-info bg-info/10 border border-info svelte-ska6l4"),T(r,"class","off svelte-ska6l4")},m(n,l){y(n,e,l),y(n,t,l),y(n,r,l),o||(i=Xe(r,"click",a[1]),o=!0)},p:le,d(n){n&&(m(e),m(t),m(r)),o=!1,i()}}}function X2(a){let e,s,t;function r(i,n){return i[0]?q2:Y2}let _=r(a),o=_(a);return{c(){e=G("div"),o.c(),this.h()},l(i){e=M(i,"DIV",{class:!0});var n=q(e);o.l(n),n.forEach(m),this.h()},h(){T(e,"class","toggle svelte-ska6l4")},m(i,n){y(i,e,n),o.m(e,null),t=!0},p(i,[n]){_===(_=r(i))&&o?o.p(i,n):(o.d(1),o=_(i),o&&(o.c(),o.m(e,null)))},i(i){t||(i&&St(()=>{t&&(s||(s=yt(e,Tt,{},!0)),s.run(1))}),t=!0)},o(i){i&&(s||(s=yt(e,Tt,{},!1)),s.run(0)),t=!1},d(i){i&&m(e),o.d(),i&&s&&s.end()}}}function Q2(a,e,s){let{showCompiled:t}=e;const r=function(){s(0,t=!t)};return a.$$set=_=>{"showCompiled"in _&&s(0,t=_.showCompiled)},[t,r]}class J2 extends ge{constructor(e){super(),de(this,e,Q2,X2,me,{showCompiled:0})}}function Ba(a){let e,s,t,r,_,o,i,n,l,p,u,A,d,b,c,h,N;r=new M_({props:{toggled:a[10]}});let v=a[10]&&a[4]&&wa(a),I=a[10]&&Ia(a);const U=[rp,sp,tp,ep],B=[];function w(O,x){return O[6]?0:O[8]?1:O[2].loading?2:3}u=w(a),A=B[u]=U[u](a);let D=a[8]>0&&!a[6]&&a[9]&&Ra(a);return{c(){e=G("div"),s=G("div"),t=G("button"),H(r.$$.fragment),_=Y(),o=ue(a[0]),i=Y(),v&&v.c(),n=Y(),I&&I.c(),l=Y(),p=G("button"),A.c(),d=Y(),D&&D.c(),this.h()},l(O){e=M(O,"DIV",{class:!0});var x=q(e);s=M(x,"DIV",{class:!0});var C=q(s);t=M(C,"BUTTON",{type:!0,"aria-label":!0,class:!0});var E=q(t);z(r.$$.fragment,E),_=K(E),o=pe(E,a[0]),E.forEach(m),i=K(C),v&&v.l(C),n=K(C),I&&I.l(C),C.forEach(m),l=K(x),p=M(x,"BUTTON",{type:!0,"aria-label":!0,class:!0});var L=q(p);A.l(L),L.forEach(m),d=K(x),D&&D.l(x),x.forEach(m),this.h()},h(){T(t,"type","button"),T(t,"aria-label","show-sql"),T(t,"class","title svelte-1ursthx"),T(s,"class","container-a svelte-1ursthx"),T(p,"type","button"),T(p,"aria-label","view-query"),T(p,"class",K_("status-bar")+" svelte-1ursthx"),dt(p,"error",a[6]),dt(p,"success",!a[6]),dt(p,"open",a[9]),dt(p,"closed",!a[9]),T(e,"class","scrollbox my-3 svelte-1ursthx")},m(O,x){y(O,e,x),X(e,s),X(s,t),P(r,t,null),X(t,_),X(t,o),X(s,i),v&&v.m(s,null),X(s,n),I&&I.m(s,null),X(e,l),X(e,p),B[u].m(p,null),X(e,d),D&&D.m(e,null),c=!0,h||(N=[Xe(t,"click",a[15]),Xe(p,"click",a[16])],h=!0)},p(O,x){const C={};x&1024&&(C.toggled=O[10]),r.$set(C),(!c||x&1)&&ke(o,O[0]),O[10]&&O[4]?v?(v.p(O,x),x&1040&&S(v,1)):(v=wa(O),v.c(),S(v,1),v.m(s,n)):v&&(_e(),g(v,1,1,()=>{v=null}),oe()),O[10]?I?(I.p(O,x),x&1024&&S(I,1)):(I=Ia(O),I.c(),S(I,1),I.m(s,null)):I&&(_e(),g(I,1,1,()=>{I=null}),oe());let E=u;u=w(O),u===E?B[u].p(O,x):(_e(),g(B[E],1,1,()=>{B[E]=null}),oe(),A=B[u],A?A.p(O,x):(A=B[u]=U[u](O),A.c()),S(A,1),A.m(p,null)),(!c||x&64)&&dt(p,"error",O[6]),(!c||x&64)&&dt(p,"success",!O[6]),(!c||x&512)&&dt(p,"open",O[9]),(!c||x&512)&&dt(p,"closed",!O[9]),O[8]>0&&!O[6]&&O[9]?D?(D.p(O,x),x&832&&S(D,1)):(D=Ra(O),D.c(),S(D,1),D.m(e,null)):D&&(_e(),g(D,1,1,()=>{D=null}),oe())},i(O){c||(S(r.$$.fragment,O),S(v),S(I),S(A),S(D),O&&St(()=>{c&&(b||(b=yt(e,Tt,{},!0)),b.run(1))}),c=!0)},o(O){g(r.$$.fragment,O),g(v),g(I),g(A),g(D),O&&(b||(b=yt(e,Tt,{},!1)),b.run(0)),c=!1},d(O){O&&m(e),F(r),v&&v.d(),I&&I.d(),B[u].d(),D&&D.d(),O&&b&&b.end(),h=!1,kt(N)}}}function wa(a){let e,s,t;function r(o){a[20](o)}let _={};return a[5]!==void 0&&(_.showCompiled=a[5]),e=new J2({props:_}),Je.push(()=>Ft(e,"showCompiled",r)),{c(){H(e.$$.fragment)},l(o){z(e.$$.fragment,o)},m(o,i){P(e,o,i),t=!0},p(o,i){const n={};!s&&i&32&&(s=!0,n.showCompiled=o[5],Gt(()=>s=!1)),e.$set(n)},i(o){t||(S(e.$$.fragment,o),t=!0)},o(o){g(e.$$.fragment,o),t=!1},d(o){F(e,o)}}}function Ia(a){let e,s,t,r,_;const o=[$2,Z2],i=[];function n(l,p){return l[5]?0:1}return s=n(a),t=i[s]=o[s](a),{c(){e=G("div"),t.c(),this.h()},l(l){e=M(l,"DIV",{class:!0});var p=q(e);t.l(p),p.forEach(m),this.h()},h(){T(e,"class","code-container svelte-1ursthx")},m(l,p){y(l,e,p),i[s].m(e,null),_=!0},p(l,p){let u=s;s=n(l),s===u?i[s].p(l,p):(_e(),g(i[u],1,1,()=>{i[u]=null}),oe(),t=i[s],t?t.p(l,p):(t=i[s]=o[s](l),t.c()),S(t,1),t.m(e,null))},i(l){_||(S(t),l&&St(()=>{_&&(r||(r=yt(e,Tt,{},!0)),r.run(1))}),_=!0)},o(l){g(t),l&&(r||(r=yt(e,Tt,{},!1)),r.run(0)),_=!1},d(l){l&&m(e),i[s].d(),l&&r&&r.end()}}}function Z2(a){let e,s;return e=new G_({props:{code:a[3]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r&8&&(_.code=t[3]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function $2(a){let e,s;return e=new G_({props:{code:a[1].originalText}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r&2&&(_.code=t[1].originalText),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function ep(a){let e;return{c(){e=ue("ran successfully but no data was returned")},l(s){e=pe(s,"ran successfully but no data was returned")},m(s,t){y(s,e,t)},p:le,i:le,o:le,d(s){s&&m(e)}}}function tp(a){let e;return{c(){e=ue("loading...")},l(s){e=pe(s,"loading...")},m(s,t){y(s,e,t)},p:le,i:le,o:le,d(s){s&&m(e)}}}function sp(a){let e,s,t=a[8].toLocaleString()+"",r,_,o=a[8]>1?"records":"record",i,n,l=a[7].toLocaleString()+"",p,u,A=a[7]>1?"properties":"property",d,b;return e=new M_({props:{toggled:a[9],color:a[12].colors.info}}),{c(){H(e.$$.fragment),s=Y(),r=ue(t),_=Y(),i=ue(o),n=ue(" with "),p=ue(l),u=Y(),d=ue(A)},l(c){z(e.$$.fragment,c),s=K(c),r=pe(c,t),_=K(c),i=pe(c,o),n=pe(c," with "),p=pe(c,l),u=K(c),d=pe(c,A)},m(c,h){P(e,c,h),y(c,s,h),y(c,r,h),y(c,_,h),y(c,i,h),y(c,n,h),y(c,p,h),y(c,u,h),y(c,d,h),b=!0},p(c,h){const N={};h&512&&(N.toggled=c[9]),h&4096&&(N.color=c[12].colors.info),e.$set(N),(!b||h&256)&&t!==(t=c[8].toLocaleString()+"")&&ke(r,t),(!b||h&256)&&o!==(o=c[8]>1?"records":"record")&&ke(i,o),(!b||h&128)&&l!==(l=c[7].toLocaleString()+"")&&ke(p,l),(!b||h&128)&&A!==(A=c[7]>1?"properties":"property")&&ke(d,A)},i(c){b||(S(e.$$.fragment,c),b=!0)},o(c){g(e.$$.fragment,c),b=!1},d(c){c&&(m(s),m(r),m(_),m(i),m(n),m(p),m(u),m(d)),F(e,c)}}}function rp(a){let e=a[6].message+"",s;return{c(){s=ue(e)},l(t){s=pe(t,e)},m(t,r){y(t,s,r)},p(t,r){r&64&&e!==(e=t[6].message+"")&&ke(s,e)},i:le,o:le,d(t){t&&m(s)}}}function Ra(a){let e,s;return e=new V2({props:{data:a[1],queryID:a[0]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r&2&&(_.data=t[1]),r&1&&(_.queryID=t[0]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function ap(a){let e,s,t,r=a[11]&&Ba(a);return{c(){e=G("div"),r&&r.c(),this.h()},l(_){e=M(_,"DIV",{class:!0});var o=q(e);r&&r.l(o),o.forEach(m),this.h()},h(){T(e,"class","over-container svelte-1ursthx")},m(_,o){y(_,e,o),r&&r.m(e,null),t=!0},p(_,[o]){_[11]?r?(r.p(_,o),o&2048&&S(r,1)):(r=Ba(_),r.c(),S(r,1),r.m(e,null)):r&&(_e(),g(r,1,1,()=>{r=null}),oe())},i(_){t||(S(r),_&&(s||St(()=>{s=gs(e,v_,{}),s.start()})),t=!0)},o(_){g(r),t=!1},d(_){_&&m(e),r&&r.d()}}}function _p(a,e,s){let t,r,_,o,i=le,n=()=>(i(),i=jt(c,C=>s(2,o=C)),c),l,p,u,A,d;Oe(a,Sr,C=>s(19,u=C)),Oe(a,ho,C=>s(11,A=C)),a.$$.on_destroy.push(()=>i());let{queryID:b}=e,{queryResult:c}=e;n();let h=hr("showSQL_".concat(b),!1);Oe(a,h,C=>s(10,p=C));let N=hr(`showResults_${b}`);Oe(a,N,C=>s(9,l=C));const v=function(){Jt(h,p=!p,p)},I=function(){!D&&o.length>0&&Jt(N,l=!l,l)};let U,B,w=!0,D;const{theme:O}=es();Oe(a,O,C=>s(12,d=C));function x(C){w=C,s(5,w)}return a.$$set=C=>{"queryID"in C&&s(0,b=C.queryID),"queryResult"in C&&n(s(1,c=C.queryResult))},a.$$.update=()=>{if(a.$$.dirty&524288&&s(18,t=u.data.evidencemeta.queries),a.$$.dirty&4&&(o?s(6,D=o.error):s(6,D=new Error("queryResult is undefined"))),a.$$.dirty&4&&s(8,r=(o==null?void 0:o.length)??0),a.$$.dirty&4&&s(7,_=o.columns.length??(o==null?void 0:o._evidenceColumnTypes.length)??0),a.$$.dirty&262145){let C=t==null?void 0:t.find(E=>E.id===b);C&&(s(3,U=C.inputQueryString),s(4,B=C.compiled&&C.compileError===void 0))}},[b,c,o,U,B,w,D,_,r,l,p,A,d,h,N,v,I,O,t,u,x]}class at extends ge{constructor(e){super(),de(this,e,_p,ap,me,{queryID:0,queryResult:1})}}const Qt=Symbol.for("__evidence-chart-window-debug__"),op=(a,e)=>{window[Qt]||(window[Qt]={}),window[Qt][a]=e},np=a=>{window[Qt]||(window[Qt]={}),delete window[Qt][a]},Wt=500,ip=(a,e)=>{var b;const s=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)&&a.clientWidth*3*a.clientHeight*3>16777215;Ss("light",Ar),Ss("dark",L_);let t;const r=()=>{t=ur(a,e.theme,{renderer:s?"svg":e.renderer??"canvas"})};r(),op(t.id,t),e.connectGroup&&(t.group=e.connectGroup,vo(e.connectGroup));const _=()=>{if(e.seriesColors){const c=t.getOption();if(!c)return;const h={...c};for(const N of Object.keys(e.seriesColors)){const v=c.series.findIndex(I=>I.name===N);v!==-1&&(h.series[v]={...h.series[v],itemStyle:{...h.series[v].itemStyle,color:e.seriesColors[N]}})}t.setOption(h)}},o=()=>{e.echartsOptions&&t.setOption({...e.echartsOptions})},i=()=>{let c=[];if(e.seriesOptions){const h=e.config.series.reduce((N,{evidenceSeriesType:v},I)=>((v==="reference_line"||v==="reference_area"||v==="reference_point")&&N.push(I),N),[]);for(let N=0;N<e.config.series.length;N++)h.includes(N)?c.push({}):c.push({...e.seriesOptions});t.setOption({series:c})}};t.setOption({...e.config,animationDuration:Wt,animationDurationUpdate:Wt}),_(),o(),i();const n=e.dispatch;t.on("click",function(c){n("click",c)});const l=a.parentElement,p=Lo(()=>{t.resize({animation:{duration:Wt}}),A()},100);let u;window.ResizeObserver&&l?(u=new ResizeObserver(p),u.observe(l)):window.addEventListener("resize",p);const A=()=>{if(e.showAllXAxisLabels){const c=t.getOption();if(!c)return;const h=new Set(c.series.flatMap(I=>{var U;return(U=I.data)==null?void 0:U.map(B=>B[0])})),N=4/5,v=(a==null?void 0:a.clientWidth)??0;if(!e.swapXY){const I={xAxis:{axisLabel:{interval:0,overflow:e.xAxisLabelOverflow,width:v*N/h.size}}};t.setOption(I)}}},d=c=>{c.theme!==e.theme&&(t.dispose(),e=c,r()),e=c,t.setOption({...e.config,animationDuration:Wt,animationDurationUpdate:Wt},!0),_(),o(),i(),t.resize({animation:{duration:Wt}}),A()};return p(),window[b=Symbol.for("chart renders")]??(window[b]=0),window[Symbol.for("chart renders")]++,{update(c){window[Symbol.for("chart renders")]++,d(c)},destroy(){u?u.unobserve(l):window.removeEventListener("resize",p),t.dispose(),np(t.id)}}},lp=(a,e)=>{Ss("light",Ar),Ss("dark",L_),console.log("echartsCanvasDownloadAction",e.theme);const s=ur(a,e.theme,{renderer:"canvas"});e.config.animation=!1,s.setOption(e.config);const t=()=>{if(e.seriesColors){const l=s.getOption();if(!l)return;const p={...l};for(const u of Object.keys(e.seriesColors)){const A=l.series.findIndex(d=>d.name===u);A!==-1&&(p.series[A]={...p.series[A],itemStyle:{...p.series[A].itemStyle,color:e.seriesColors[u]}})}s.setOption(p)}},r=()=>{e.echartsOptions&&s.setOption({...e.echartsOptions})},_=()=>{let l=[];if(e.seriesOptions){const p=e.config.series.reduce((u,{evidenceSeriesType:A},d)=>((A==="reference_line"||A==="reference_area"||A==="reference_point")&&u.push(d),u),[]);for(let u=0;u<e.config.series.length;u++)p.includes(u)?l.push({}):l.push({...e.seriesOptions});s.setOption({series:l})}};r(),t(),_();let o=s.getConnectedDataURL({type:"png",pixelRatio:3,backgroundColor:e.backgroundColor,excludeComponents:["toolbox"]});const i=new Date,n=new Date(i.getTime()-i.getTimezoneOffset()*6e4).toISOString().slice(0,19).replaceAll(":","-");return To(o,(e.evidenceChartTitle??e.queryID??"evidence-chart")+`_${n}.png`),s.dispose(),{destroy(){s.dispose()}}},ms=(a,e)=>{Ss("evidence-light",Ar);const{config:s,ratio:t,echartsOptions:r,seriesOptions:_,seriesColors:o,isMap:i,extraHeight:n,width:l}=e;let p={renderer:"canvas"};i&&(p.height=l*.5+n,a&&a.parentNode&&(a.style.height=p.height+"px",a.parentNode.style.height=p.height+"px"));const u=ur(a,"evidence-light",p);s.animation=!1,u.setOption(s),r&&u.setOption(r);const A=()=>{if(o){const h=u.getOption();if(!h)return;const N={...h};for(const v of Object.keys(o)){const I=h.series.findIndex(U=>U.name===v);I!==-1&&(N.series[I]={...N.series[I],itemStyle:{...N.series[I].itemStyle,color:o[v]}})}u.setOption(N)}},d=()=>{r&&u.setOption({...r})},b=()=>{let h=[];if(_){const N=s.series.reduce((v,{evidenceSeriesType:I},U)=>((I==="reference_line"||I==="reference_area"||I==="reference_point")&&v.push(U),v),[]);for(let v=0;v<s.series.length;v++)N.includes(v)?h.push({}):h.push({..._});u.setOption({series:h})}};d(),A(),b();let c=u.getConnectedDataURL({type:"jpeg",pixelRatio:t,backgroundColor:"#fff",excludeComponents:["toolbox"]});a.innerHTML=`<img src=${c} width="100%" style="
        position: absolute; 
        top: 0;
        user-select: all;
        -webkit-user-select: all;
        -moz-user-select: all;
        -ms-user-select: all;
    " />`,e.config.animation=!0};function pp(a){let e;function s(_,o){return _[9]?Sp:Ap}let t=s(a),r=t(a);return{c(){r.c(),e=ae()},l(_){r.l(_),e=ae()},m(_,o){r.m(_,o),y(_,e,o)},p(_,o){t===(t=s(_))&&r?r.p(_,o):(r.d(1),r=t(_),r&&(r.c(),r.m(e.parentNode,e)))},d(_){_&&m(e),r.d(_)}}}function up(a){let e,s,t,r;return{c(){e=G("div"),this.h()},l(_){e=M(_,"DIV",{class:!0,style:!0}),q(e).forEach(m),this.h()},h(){T(e,"class","chart"),Z(e,"height",a[1]),Z(e,"width",a[2]),Z(e,"margin-left","0"),Z(e,"margin-top","15px"),Z(e,"margin-bottom","10px"),Z(e,"overflow","visible"),Z(e,"break-inside","avoid")},m(_,o){y(_,e,o),t||(r=Qe(s=ms.call(null,e,{config:a[0],ratio:2,echartsOptions:a[5],seriesOptions:a[6],seriesColors:a[13]})),t=!0)},p(_,o){o&2&&Z(e,"height",_[1]),o&4&&Z(e,"width",_[2]),s&&Mt(s.update)&&o&8289&&s.update.call(null,{config:_[0],ratio:2,echartsOptions:_[5],seriesOptions:_[6],seriesColors:_[13]})},d(_){_&&m(e),t=!1,r()}}}function Ap(a){let e,s,t,r,_,o,i;return{c(){e=G("div"),t=Y(),r=G("div"),this.h()},l(n){e=M(n,"DIV",{class:!0,style:!0}),q(e).forEach(m),t=K(n),r=M(n,"DIV",{class:!0,style:!0}),q(r).forEach(m),this.h()},h(){T(e,"class","chart md:hidden"),Z(e,"height",a[1]),Z(e,"width","650px"),Z(e,"margin-left","0"),Z(e,"margin-top","15px"),Z(e,"margin-bottom","10px"),Z(e,"overflow","visible"),Z(e,"break-inside","avoid"),T(r,"class","chart hidden md:block"),Z(r,"height",a[1]),Z(r,"width","841px"),Z(r,"margin-left","0"),Z(r,"margin-top","15px"),Z(r,"margin-bottom","10px"),Z(r,"overflow","visible"),Z(r,"break-inside","avoid")},m(n,l){y(n,e,l),y(n,t,l),y(n,r,l),o||(i=[Qe(s=ms.call(null,e,{config:a[0],ratio:4,echartsOptions:a[5],seriesOptions:a[6],seriesColors:a[13],isMap:a[7],extraHeight:a[8],width:650})),Qe(_=ms.call(null,r,{config:a[0],ratio:4,echartsOptions:a[5],seriesOptions:a[6],seriesColors:a[13],isMap:a[7],extraHeight:a[8],width:841}))],o=!0)},p(n,l){l&2&&Z(e,"height",n[1]),s&&Mt(s.update)&&l&8673&&s.update.call(null,{config:n[0],ratio:4,echartsOptions:n[5],seriesOptions:n[6],seriesColors:n[13],isMap:n[7],extraHeight:n[8],width:650}),l&2&&Z(r,"height",n[1]),_&&Mt(_.update)&&l&8673&&_.update.call(null,{config:n[0],ratio:4,echartsOptions:n[5],seriesOptions:n[6],seriesColors:n[13],isMap:n[7],extraHeight:n[8],width:841})},d(n){n&&(m(e),m(t),m(r)),o=!1,kt(i)}}}function Sp(a){let e,s,t,r,_,o,i;return{c(){e=G("div"),t=Y(),r=G("div"),this.h()},l(n){e=M(n,"DIV",{class:!0,style:!0}),q(e).forEach(m),t=K(n),r=M(n,"DIV",{class:!0,style:!0}),q(r).forEach(m),this.h()},h(){T(e,"class","chart md:hidden"),Z(e,"height",a[1]),Z(e,"width",a[11]+"px"),Z(e,"margin-left","0"),Z(e,"margin-top","15px"),Z(e,"margin-bottom","10px"),Z(e,"overflow","visible"),Z(e,"break-inside","avoid"),T(r,"class","chart hidden md:block"),Z(r,"height",a[1]),Z(r,"width",a[10]+"px"),Z(r,"margin-left","0"),Z(r,"margin-top","15px"),Z(r,"margin-bottom","10px"),Z(r,"overflow","visible"),Z(r,"break-inside","avoid")},m(n,l){y(n,e,l),y(n,t,l),y(n,r,l),o||(i=[Qe(s=ms.call(null,e,{config:a[0],ratio:4,echartsOptions:a[5],seriesOptions:a[6],seriesColors:a[13],isMap:a[7],extraHeight:a[8],width:a[11]})),Qe(_=ms.call(null,r,{config:a[0],ratio:4,echartsOptions:a[5],seriesOptions:a[6],seriesColors:a[13],isMap:a[7],extraHeight:a[8],width:a[10]}))],o=!0)},p(n,l){l&2&&Z(e,"height",n[1]),l&2048&&Z(e,"width",n[11]+"px"),s&&Mt(s.update)&&l&10721&&s.update.call(null,{config:n[0],ratio:4,echartsOptions:n[5],seriesOptions:n[6],seriesColors:n[13],isMap:n[7],extraHeight:n[8],width:n[11]}),l&2&&Z(r,"height",n[1]),l&1024&&Z(r,"width",n[10]+"px"),_&&Mt(_.update)&&l&9697&&_.update.call(null,{config:n[0],ratio:4,echartsOptions:n[5],seriesOptions:n[6],seriesColors:n[13],isMap:n[7],extraHeight:n[8],width:n[10]})},d(n){n&&(m(e),m(t),m(r)),o=!1,kt(i)}}}function mp(a){let e;function s(_,o){if(_[3])return up;if(_[4])return pp}let t=s(a),r=t&&t(a);return{c(){r&&r.c(),e=ae()},l(_){r&&r.l(_),e=ae()},m(_,o){r&&r.m(_,o),y(_,e,o)},p(_,[o]){t===(t=s(_))&&r?r.p(_,o):(r&&r.d(1),r=t&&t(_),r&&(r.c(),r.m(e.parentNode,e)))},i:le,o:le,d(_){_&&m(e),r&&r.d(_)}}}function cp(a,e,s){let t,r,_,o,i,n,l=le,p=()=>(l(),l=jt(t,C=>s(13,n=C)),t);a.$$.on_destroy.push(()=>l());const{resolveColorsObject:u}=es();let{config:A=void 0}=e,{height:d="291px"}=e,{width:b="100%"}=e,{copying:c=!1}=e,{printing:h=!1}=e,{echartsOptions:N=void 0}=e,{seriesOptions:v=void 0}=e,{seriesColors:I=void 0}=e,{isMap:U=!1}=e,{extraHeight:B=void 0}=e,w=!1,D,O;const x=xs("gridConfig");return x&&(w=!0,{cols:D,gapWidth:O}=x),a.$$set=C=>{"config"in C&&s(0,A=C.config),"height"in C&&s(1,d=C.height),"width"in C&&s(2,b=C.width),"copying"in C&&s(3,c=C.copying),"printing"in C&&s(4,h=C.printing),"echartsOptions"in C&&s(5,N=C.echartsOptions),"seriesOptions"in C&&s(6,v=C.seriesOptions),"seriesColors"in C&&s(14,I=C.seriesColors),"isMap"in C&&s(7,U=C.isMap),"extraHeight"in C&&s(8,B=C.extraHeight)},a.$$.update=()=>{a.$$.dirty&16384&&p(s(12,t=u(I))),a.$$.dirty&32768&&s(18,r=Math.min(Number(D),2)),a.$$.dirty&327680&&s(11,_=(650-Number(O)*(r-1))/r),a.$$.dirty&32768&&s(17,o=Math.min(Number(D),3)),a.$$.dirty&196608&&s(10,i=(841-Number(O)*(o-1))/o)},[A,d,b,c,h,N,v,U,B,w,i,_,t,n,I,D,O,o,r]}class gp extends ge{constructor(e){super(),de(this,e,cp,mp,me,{config:0,height:1,width:2,copying:3,printing:4,echartsOptions:5,seriesOptions:6,seriesColors:14,isMap:7,extraHeight:8})}}function dp(a){let e,s,t="Loading...",r,_,o;return{c(){e=G("div"),s=G("span"),s.textContent=t,r=Y(),_=G("div"),this.h()},l(i){e=M(i,"DIV",{role:!0,class:!0});var n=q(e);s=M(n,"SPAN",{class:!0,"data-svelte-h":!0}),ft(s)!=="svelte-1wtojot"&&(s.textContent=t),r=K(n),_=M(n,"DIV",{class:!0,style:!0}),q(_).forEach(m),n.forEach(m),this.h()},h(){T(s,"class","sr-only"),T(_,"class","bg-base-100 rounded-md max-w-[100%]"),Z(_,"height",a[0]),Z(_,"margin-top","15px"),Z(_,"margin-bottom","31px"),T(e,"role","status"),T(e,"class","animate-pulse")},m(i,n){y(i,e,n),X(e,s),X(e,r),X(e,_)},p(i,[n]){n&1&&Z(_,"height",i[0])},i(i){i&&(o||St(()=>{o=gs(e,ko,{}),o.start()}))},o:le,d(i){i&&m(e)}}}function fp(a,e,s){let{height:t="231px"}=e;return a.$$set=r=>{"height"in r&&s(0,t=r.height)},[t]}class yp extends ge{constructor(e){super(),de(this,e,fp,dp,me,{height:0})}}function ja(a){let e,s,t,r;const _=[Ep,bp],o=[];function i(n,l){return 1}return e=i(),s=o[e]=_[e](a),{c(){s.c(),t=ae()},l(n){s.l(n),t=ae()},m(n,l){o[e].m(n,l),y(n,t,l),r=!0},p(n,l){s.p(n,l)},i(n){r||(S(s),r=!0)},o(n){g(s),r=!1},d(n){n&&m(t),o[e].d(n)}}}function bp(a){let e,s,t,r;return{c(){e=G("div"),this.h()},l(_){e=M(_,"DIV",{class:!0,style:!0}),q(e).forEach(m),this.h()},h(){T(e,"class","chart svelte-db4qxn"),Z(e,"height",a[3]),Z(e,"width",a[4]),Z(e,"overflow","visible"),Z(e,"display",a[15]?"none":"inherit")},m(_,o){y(_,e,o),t||(r=Qe(s=ip.call(null,e,{config:a[0],...a[25],echartsOptions:a[9],seriesOptions:a[10],dispatch:a[24],renderer:a[6],connectGroup:a[12],xAxisLabelOverflow:a[13],seriesColors:a[19],theme:a[20]})),t=!0)},p(_,o){o[0]&8&&Z(e,"height",_[3]),o[0]&16&&Z(e,"width",_[4]),o[0]&32768&&Z(e,"display",_[15]?"none":"inherit"),s&&Mt(s.update)&&o[0]&35141185&&s.update.call(null,{config:_[0],..._[25],echartsOptions:_[9],seriesOptions:_[10],dispatch:_[24],renderer:_[6],connectGroup:_[12],xAxisLabelOverflow:_[13],seriesColors:_[19],theme:_[20]})},i:le,o:le,d(_){_&&m(e),t=!1,r()}}}function Ep(a){let e,s;return e=new yp({props:{height:a[3]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&8&&(_.height=t[3]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Ma(a){let e,s,t,r=a[8]&&Ga(a),_=a[5]&&a[7]&&Fa(a);return{c(){e=G("div"),r&&r.c(),s=Y(),_&&_.c(),this.h()},l(o){e=M(o,"DIV",{class:!0});var i=q(e);r&&r.l(i),s=K(i),_&&_.l(i),i.forEach(m),this.h()},h(){T(e,"class","chart-footer svelte-db4qxn")},m(o,i){y(o,e,i),r&&r.m(e,null),X(e,s),_&&_.m(e,null),t=!0},p(o,i){o[8]?r?(r.p(o,i),i[0]&256&&S(r,1)):(r=Ga(o),r.c(),S(r,1),r.m(e,s)):r&&(_e(),g(r,1,1,()=>{r=null}),oe()),o[5]&&o[7]?_?(_.p(o,i),i[0]&160&&S(_,1)):(_=Fa(o),_.c(),S(_,1),_.m(e,null)):_&&(_e(),g(_,1,1,()=>{_=null}),oe())},i(o){t||(S(r),S(_),t=!0)},o(o){g(r),g(_),t=!1},d(o){o&&m(e),r&&r.d(),_&&_.d()}}}function Ga(a){let e,s;return e=new lr({props:{text:"Save Image",class:"download-button",downloadData:a[32],display:a[17],queryID:a[1],$$slots:{default:[hp]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&16384&&(_.downloadData=t[32]),r[0]&131072&&(_.display=t[17]),r[0]&2&&(_.queryID=t[1]),r[1]&32&&(_.$$scope={dirty:r,ctx:t}),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function hp(a){let e,s,t,r;return{c(){e=Yt("svg"),s=Yt("rect"),t=Yt("circle"),r=Yt("path"),this.h()},l(_){e=Kt(_,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var o=q(e);s=Kt(o,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0}),q(s).forEach(m),t=Kt(o,"circle",{cx:!0,cy:!0,r:!0}),q(t).forEach(m),r=Kt(o,"path",{d:!0}),q(r).forEach(m),o.forEach(m),this.h()},h(){T(s,"x","3"),T(s,"y","3"),T(s,"width","18"),T(s,"height","18"),T(s,"rx","2"),T(t,"cx","8.5"),T(t,"cy","8.5"),T(t,"r","1.5"),T(r,"d","M20.4 14.5L16 10 4 20"),T(e,"xmlns","http://www.w3.org/2000/svg"),T(e,"width","12"),T(e,"height","12"),T(e,"viewBox","0 0 24 24"),T(e,"fill","none"),T(e,"stroke","#000"),T(e,"stroke-width","2"),T(e,"stroke-linecap","round"),T(e,"stroke-linejoin","round")},m(_,o){y(_,e,o),X(e,s),X(e,t),X(e,r)},p:le,d(_){_&&m(e)}}}function Fa(a){let e,s;return e=new lr({props:{text:"Download Data",data:a[5],queryID:a[1],class:"download-button",display:a[17]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&32&&(_.data=t[5]),r[0]&2&&(_.queryID=t[1]),r[0]&131072&&(_.display=t[17]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Pa(a){let e,s;return e=new Co({props:{source:JSON.stringify(a[0],void 0,3),copyToClipboard:!0,$$slots:{default:[vp]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&1&&(_.source=JSON.stringify(t[0],void 0,3)),r[0]&1|r[1]&32&&(_.$$scope={dirty:r,ctx:t}),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function vp(a){let e=JSON.stringify(a[0],void 0,3)+"",s;return{c(){s=ue(e)},l(t){s=pe(t,e)},m(t,r){y(t,s,r)},p(t,r){r[0]&1&&e!==(e=JSON.stringify(t[0],void 0,3)+"")&&ke(s,e)},d(t){t&&m(s)}}}function za(a){let e,s,t,r;return{c(){e=G("div"),this.h()},l(_){e=M(_,"DIV",{class:!0,style:!0}),q(e).forEach(m),this.h()},h(){T(e,"class","chart svelte-db4qxn"),Z(e,"display","none"),Z(e,"visibility","visible"),Z(e,"height",a[3]),Z(e,"width","666px"),Z(e,"margin-left","0"),Z(e,"margin-top","15px"),Z(e,"margin-bottom","15px"),Z(e,"overflow","visible")},m(_,o){y(_,e,o),t||(r=Qe(s=lp.call(null,e,{config:a[0],...a[25],echartsOptions:a[9],seriesOptions:a[10],seriesColors:a[19],queryID:a[1],evidenceChartTitle:a[2],theme:a[20],backgroundColor:a[21].colors["base-100"]})),t=!0)},p(_,o){o[0]&8&&Z(e,"height",_[3]),s&&Mt(s.update)&&o[0]&37225991&&s.update.call(null,{config:_[0],..._[25],echartsOptions:_[9],seriesOptions:_[10],seriesColors:_[19],queryID:_[1],evidenceChartTitle:_[2],theme:_[20],backgroundColor:_[21].colors["base-100"]})},d(_){_&&m(e),t=!1,r()}}}function Lp(a){let e,s,t,r,_,o,i,n,l,p,u=!a[16]&&ja(a);t=new gp({props:{config:a[0],height:a[3],width:a[4],copying:a[15],printing:a[16],echartsOptions:a[9],seriesOptions:a[10],seriesColors:a[18]}});let A=(a[7]||a[8])&&Ma(a),d=a[11]&&!a[16]&&Pa(a),b=a[14]&&za(a);return{c(){e=G("div"),u&&u.c(),s=Y(),H(t.$$.fragment),r=Y(),A&&A.c(),_=Y(),d&&d.c(),o=Y(),b&&b.c(),i=ae(),this.h()},l(c){e=M(c,"DIV",{role:!0,class:!0});var h=q(e);u&&u.l(h),s=K(h),z(t.$$.fragment,h),r=K(h),A&&A.l(h),_=K(h),d&&d.l(h),h.forEach(m),o=K(c),b&&b.l(c),i=ae(),this.h()},h(){T(e,"role","none"),T(e,"class","chart-container mt-2 mb-3 svelte-db4qxn")},m(c,h){y(c,e,h),u&&u.m(e,null),X(e,s),P(t,e,null),X(e,r),A&&A.m(e,null),X(e,_),d&&d.m(e,null),y(c,o,h),b&&b.m(c,h),y(c,i,h),n=!0,l||(p=[Xe(window,"copy",a[27]),Xe(window,"beforeprint",a[28]),Xe(window,"afterprint",a[29]),Xe(window,"export-beforeprint",a[30]),Xe(window,"export-afterprint",a[31]),Xe(e,"mouseenter",a[33]),Xe(e,"mouseleave",a[34])],l=!0)},p(c,h){c[16]?u&&(_e(),g(u,1,1,()=>{u=null}),oe()):u?(u.p(c,h),h[0]&65536&&S(u,1)):(u=ja(c),u.c(),S(u,1),u.m(e,s));const N={};h[0]&1&&(N.config=c[0]),h[0]&8&&(N.height=c[3]),h[0]&16&&(N.width=c[4]),h[0]&32768&&(N.copying=c[15]),h[0]&65536&&(N.printing=c[16]),h[0]&512&&(N.echartsOptions=c[9]),h[0]&1024&&(N.seriesOptions=c[10]),h[0]&262144&&(N.seriesColors=c[18]),t.$set(N),c[7]||c[8]?A?(A.p(c,h),h[0]&384&&S(A,1)):(A=Ma(c),A.c(),S(A,1),A.m(e,_)):A&&(_e(),g(A,1,1,()=>{A=null}),oe()),c[11]&&!c[16]?d?(d.p(c,h),h[0]&67584&&S(d,1)):(d=Pa(c),d.c(),S(d,1),d.m(e,null)):d&&(_e(),g(d,1,1,()=>{d=null}),oe()),c[14]?b?b.p(c,h):(b=za(c),b.c(),b.m(i.parentNode,i)):b&&(b.d(1),b=null)},i(c){n||(S(u),S(t.$$.fragment,c),S(A),S(d),n=!0)},o(c){g(u),g(t.$$.fragment,c),g(A),g(d),n=!1},d(c){c&&(m(e),m(o),m(i)),u&&u.d(),F(t),A&&A.d(),d&&d.d(),b&&b.d(c),l=!1,kt(p)}}}function Tp(a,e,s){let t;const r=["config","queryID","evidenceChartTitle","height","width","data","renderer","downloadableData","downloadableImage","echartsOptions","seriesOptions","printEchartsConfig","seriesColors","connectGroup","xAxisLabelOverflow"];let _=ce(e,r),o,i=le,n=()=>(i(),i=jt(t,ne=>s(19,o=ne)),t),l,p;a.$$.on_destroy.push(()=>i());const{activeAppearance:u,theme:A,resolveColorsObject:d}=es();Oe(a,u,ne=>s(20,l=ne)),Oe(a,A,ne=>s(21,p=ne));let{config:b=void 0}=e,{queryID:c=void 0}=e,{evidenceChartTitle:h=void 0}=e,{height:N="291px"}=e,{width:v="100%"}=e,{data:I}=e,{renderer:U=void 0}=e,{downloadableData:B=void 0}=e,{downloadableImage:w=void 0}=e,{echartsOptions:D=void 0}=e,{seriesOptions:O=void 0}=e,{printEchartsConfig:x}=e,{seriesColors:C=void 0}=e,{connectGroup:E=void 0}=e,{xAxisLabelOverflow:L=void 0}=e;const k=Y_();let W=!1,j=!1,$=!1,ie=!1;const R=()=>{s(15,j=!0),q_(),setTimeout(()=>{s(15,j=!1)},0)},ee=()=>s(16,$=!0),re=()=>s(16,$=!1),te=()=>s(16,$=!0),Se=()=>s(16,$=!1),Ce=()=>{s(14,W=!0),setTimeout(()=>{s(14,W=!1)},0)},J=()=>s(17,ie=!0),Ne=()=>s(17,ie=!1);return a.$$set=ne=>{e=se(se({},e),Ie(ne)),s(25,_=ce(e,r)),"config"in ne&&s(0,b=ne.config),"queryID"in ne&&s(1,c=ne.queryID),"evidenceChartTitle"in ne&&s(2,h=ne.evidenceChartTitle),"height"in ne&&s(3,N=ne.height),"width"in ne&&s(4,v=ne.width),"data"in ne&&s(5,I=ne.data),"renderer"in ne&&s(6,U=ne.renderer),"downloadableData"in ne&&s(7,B=ne.downloadableData),"downloadableImage"in ne&&s(8,w=ne.downloadableImage),"echartsOptions"in ne&&s(9,D=ne.echartsOptions),"seriesOptions"in ne&&s(10,O=ne.seriesOptions),"printEchartsConfig"in ne&&s(11,x=ne.printEchartsConfig),"seriesColors"in ne&&s(26,C=ne.seriesColors),"connectGroup"in ne&&s(12,E=ne.connectGroup),"xAxisLabelOverflow"in ne&&s(13,L=ne.xAxisLabelOverflow)},a.$$.update=()=>{a.$$.dirty[0]&67108864&&n(s(18,t=d(C)))},[b,c,h,N,v,I,U,B,w,D,O,x,E,L,W,j,$,ie,t,o,l,p,u,A,k,_,C,R,ee,re,te,Se,Ce,J,Ne]}class ls extends ge{constructor(e){super(),de(this,e,Tp,Lp,me,{config:0,queryID:1,evidenceChartTitle:2,height:3,width:4,data:5,renderer:6,downloadableData:7,downloadableImage:8,echartsOptions:9,seriesOptions:10,printEchartsConfig:11,seriesColors:26,connectGroup:12,xAxisLabelOverflow:13},null,[-1,-1])}}function kp(a){let e,s;return e=new Oo({props:{error:a[3]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r&8&&(_.error=t[3]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Cp(a){let e,s=ot(a[2],a[4])+"",t,r,_,o=a[1]&&Ha(a);return{c(){e=G("span"),t=ue(s),r=Y(),o&&o.c(),this.h()},l(i){e=M(i,"SPAN",{style:!0});var n=q(e);t=pe(n,s),r=K(n),o&&o.l(n),n.forEach(m),this.h()},h(){Z(e,"color",a[5])},m(i,n){y(i,e,n),X(e,t),X(e,r),o&&o.m(e,null),_=!0},p(i,n){(!_||n&20)&&s!==(s=ot(i[2],i[4])+"")&&ke(t,s),i[1]?o?(o.p(i,n),n&2&&S(o,1)):(o=Ha(i),o.c(),S(o,1),o.m(e,null)):o&&(_e(),g(o,1,1,()=>{o=null}),oe()),(!_||n&32)&&Z(e,"color",i[5])},i(i){_||(S(o),_=!0)},o(i){g(o),_=!1},d(i){i&&m(e),o&&o.d()}}}function Dp(a){let e,s,t,r,_,o="Placeholder: no data currently referenced.";return{c(){e=G("span"),s=ue("["),t=ue(a[0]),r=ue("]"),_=G("span"),_.textContent=o,this.h()},l(i){e=M(i,"SPAN",{class:!0});var n=q(e);s=pe(n,"["),t=pe(n,a[0]),r=pe(n,"]"),_=M(n,"SPAN",{class:!0,"data-svelte-h":!0}),ft(_)!=="svelte-ddarzq"&&(_.textContent=o),n.forEach(m),this.h()},h(){T(_,"class","error-msg svelte-1mb9o01"),T(e,"class","placeholder svelte-1mb9o01")},m(i,n){y(i,e,n),X(e,s),X(e,t),X(e,r),X(e,_)},p(i,n){n&1&&ke(t,i[0])},i:le,o:le,d(i){i&&m(e)}}}function Ha(a){let e,s;return e=new fs({props:{description:a[1]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r&2&&(_.description=t[1]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Op(a){let e,s,t,r;const _=[Dp,Cp,kp],o=[];function i(n,l){return n[0]?0:n[3]?2:1}return e=i(a),s=o[e]=_[e](a),{c(){s.c(),t=ae()},l(n){s.l(n),t=ae()},m(n,l){o[e].m(n,l),y(n,t,l),r=!0},p(n,[l]){let p=e;e=i(n),e===p?o[e].p(n,l):(_e(),g(o[p],1,1,()=>{o[p]=null}),oe(),s=o[e],s?s.p(n,l):(s=o[e]=_[e](n),s.c()),S(s,1),s.m(t.parentNode,t))},i(n){r||(S(s),r=!0)},o(n){g(s),r=!1},d(n){n&&m(t),o[e].d(n)}}}function xp(a,e,s){let t,r,_=le,o=()=>(_(),_=jt(t,w=>s(15,r=w)),t);a.$$.on_destroy.push(()=>_());const{resolveColor:i}=es();let{data:n=null}=e,{row:l=0}=e,{column:p=null}=e,{value:u=null}=e,{placeholder:A=null}=e,{description:d=void 0}=e,{fmt:b=void 0}=e,c,h,N,{color:v=void 0}=e,I="",{redNegatives:U=!1}=e,B;return a.$$set=w=>{"data"in w&&s(7,n=w.data),"row"in w&&s(10,l=w.row),"column"in w&&s(8,p=w.column),"value"in w&&s(11,u=w.value),"placeholder"in w&&s(0,A=w.placeholder),"description"in w&&s(1,d=w.description),"fmt"in w&&s(12,b=w.fmt),"color"in w&&s(13,v=w.color),"redNegatives"in w&&s(9,U=w.redNegatives)},a.$$.update=()=>{var w;if(a.$$.dirty&2304&&s(8,p=p??u),a.$$.dirty&21897)try{if(s(3,N=void 0),!A)if(n){if(typeof n=="string")throw Error(`Received: data=${n}, expected: data={${n}}`);if(Array.isArray(n)||s(7,n=[n]),isNaN(l))throw Error("row must be a number (row="+l+")");try{Object.keys(n[l])[0]}catch{throw Error("Row "+l+" does not exist in the dataset")}s(8,p=p??Object.keys(n[l])[0]),As(n,[p]),s(14,B=pr(n,"array"));const D=B.filter(O=>{var x;return O.type==="date"&&!(((x=n[0])==null?void 0:x[O.id])instanceof Date)}).map(O=>O.id);for(let O=0;O<D.length;O++)s(7,n=Do(n,D[O]));s(2,h=n[l][p]),s(14,B=B.filter(O=>O.id===p)),b?s(4,c=h_(b,(w=B[0].format)==null?void 0:w.valueType)):s(4,c=B[0].format)}else throw Error("No data provided. If you referenced a query result, check that the name is correct.")}catch(D){if(s(3,N=D.message),console.error("\x1B[31m%s\x1B[0m",`Error in Value: ${N}`),T_)throw N}a.$$.dirty&2304&&u&&p&&console.warn('Both "value" and "column" were supplied as props to Value. "value" will be ignored.'),a.$$.dirty&8192&&o(s(6,t=i(v))),a.$$.dirty&512&&s(9,U=U==="true"||U===!0),a.$$.dirty&33284&&(U||r)&&(U&&h<0?s(5,I="rgb(220 38 38)"):r&&s(5,I=r))},[A,d,h,N,c,I,t,n,p,U,l,u,b,v,B,r]}class Up extends ge{constructor(e){super(),de(this,e,xp,Op,me,{data:7,row:10,column:8,value:11,placeholder:0,description:1,fmt:12,color:13,redNegatives:9})}}function Np(a){let e;const s=a[7].default,t=be(s,a,a[8],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&256)&&Ee(t,s,r,r[8],e?ve(s,r[8],_,null):he(r[8]),null)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function Bp(a){let e,s;const t=[a[4],{data:Ve.isQuery(a[11])?Array.from(a[11]):a[11]}];let r={$$slots:{default:[Np]},$$scope:{ctx:a}};for(let _=0;_<t.length;_+=1)r=se(r,t[_]);return e=new Up({props:r}),{c(){H(e.$$.fragment)},l(_){z(e.$$.fragment,_)},m(_,o){P(e,_,o),s=!0},p(_,o){const i=o&2064?Re(t,[o&16&&pt(_[4]),o&2048&&{data:Ve.isQuery(_[11])?Array.from(_[11]):_[11]}]):{};o&256&&(i.$$scope={dirty:o,ctx:_}),e.$set(i)},i(_){s||(S(e.$$.fragment,_),s=!0)},o(_){g(e.$$.fragment,_),s=!1},d(_){F(e,_)}}}function Va(a){let e,s;return e=new ws({props:{emptyMessage:a[2],emptySet:a[1],chartType:jp,isInitial:a[3]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r&4&&(_.emptyMessage=t[2]),r&2&&(_.emptySet=t[1]),r&8&&(_.isInitial=t[3]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function wp(a){let e,s,t=!a[4].placeholder&&Va(a);return{c(){e=G("span"),t&&t.c(),this.h()},l(r){e=M(r,"SPAN",{slot:!0});var _=q(e);t&&t.l(_),_.forEach(m),this.h()},h(){T(e,"slot","empty")},m(r,_){y(r,e,_),t&&t.m(e,null),s=!0},p(r,_){r[4].placeholder?t&&(_e(),g(t,1,1,()=>{t=null}),oe()):t?(t.p(r,_),_&16&&S(t,1)):(t=Va(r),t.c(),S(t,1),t.m(e,null))},i(r){s||(S(t),s=!0)},o(r){g(t),s=!1},d(r){r&&m(e),t&&t.d()}}}function Ip(a){let e,s="Loading...";return{c(){e=G("span"),e.textContent=s,this.h()},l(t){e=M(t,"SPAN",{slot:!0,class:!0,"data-svelte-h":!0}),ft(e)!=="svelte-89gxhc"&&(e.textContent=s),this.h()},h(){T(e,"slot","skeleton"),T(e,"class","text-base-content-muted")},m(t,r){y(t,e,r)},p:le,d(t){t&&m(e)}}}function Rp(a){let e,s;return e=new Bs({props:{data:a[0],$$slots:{skeleton:[Ip],empty:[wp],default:[Bp,({loaded:t})=>({11:t}),({loaded:t})=>t?2048:0]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,[r]){const _={};r&1&&(_.data=t[0]),r&2334&&(_.$$scope={dirty:r,ctx:t}),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}let jp="Value";function Mp(a,e,s){let t,{$$slots:r={},$$scope:_}=e,{data:o}=e,{column:i}=e,{agg:n}=e;const l=Ve.isQuery(o)?o.hash:void 0;let p=(o==null?void 0:o.hash)===l,{emptySet:u=void 0}=e,{emptyMessage:A=void 0}=e;return a.$$set=d=>{s(10,e=se(se({},e),Ie(d))),"data"in d&&s(0,o=d.data),"column"in d&&s(5,i=d.column),"agg"in d&&s(6,n=d.agg),"emptySet"in d&&s(1,u=d.emptySet),"emptyMessage"in d&&s(2,A=d.emptyMessage),"$$scope"in d&&s(8,_=d.$$scope)},a.$$.update=()=>{a.$$.dirty&97&&n&&s(0,o=o.groupBy(void 0).agg({[n]:{col:i,as:i}})),a.$$.dirty&1&&s(3,p=(o==null?void 0:o.hash)===l),s(4,t=Object.fromEntries(Object.entries(e).filter(([,d])=>d!==void 0)))},e=Ie(e),[o,u,A,p,t,i,n,r,_]}class ys extends ge{constructor(e){super(),de(this,e,Mp,Rp,me,{data:0,column:5,agg:6,emptySet:1,emptyMessage:2})}}function Gp(a){let e;const s=a[6].default,t=be(s,a,a[7],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&128)&&Ee(t,s,r,r[7],e?ve(s,r[7],_,null):he(r[7]),null)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function Fp(a){let e,s;const t=[a[4],{data:Ve.isQuery(a[10])?Array.from(a[10]):a[10]},{queryID:a[5]}];let r={$$slots:{default:[Gp]},$$scope:{ctx:a}};for(let _=0;_<t.length;_+=1)r=se(r,t[_]);return e=new xo({props:r}),{c(){H(e.$$.fragment)},l(_){z(e.$$.fragment,_)},m(_,o){P(e,_,o),s=!0},p(_,o){const i=o&1072?Re(t,[o&16&&pt(_[4]),o&1024&&{data:Ve.isQuery(_[10])?Array.from(_[10]):_[10]},o&32&&{queryID:_[5]}]):{};o&128&&(i.$$scope={dirty:o,ctx:_}),e.$set(i)},i(_){s||(S(e.$$.fragment,_),s=!0)},o(_){g(e.$$.fragment,_),s=!1},d(_){F(e,_)}}}function Pp(a){let e,s;return e=new ws({props:{slot:"empty",emptyMessage:a[2],emptySet:a[1],chartType:a[4].chartType,isInitial:a[3]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r&4&&(_.emptyMessage=t[2]),r&2&&(_.emptySet=t[1]),r&16&&(_.chartType=t[4].chartType),r&8&&(_.isInitial=t[3]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function zp(a){let e,s;return e=new Uo({props:{slot:"error",title:Vp,error:a[10].error.message}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r&1024&&(_.error=t[10].error.message),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Hp(a){let e,s;return e=new Bs({props:{data:a[0],$$slots:{error:[zp,({loaded:t})=>({10:t}),({loaded:t})=>t?1024:0],empty:[Pp],default:[Fp,({loaded:t})=>({10:t}),({loaded:t})=>t?1024:0]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,[r]){const _={};r&1&&(_.data=t[0]),r&1182&&(_.$$scope={dirty:r,ctx:t}),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}let Vp="Sparkline";function Wp(a,e,s){let t,{$$slots:r={},$$scope:_}=e,{data:o}=e;const i=Ve.isQuery(o)?o.hash:void 0;let n=(o==null?void 0:o.hash)===i,{emptySet:l=void 0}=e,{emptyMessage:p=void 0}=e,u=o==null?void 0:o.id;return a.$$set=A=>{s(9,e=se(se({},e),Ie(A))),"data"in A&&s(0,o=A.data),"emptySet"in A&&s(1,l=A.emptySet),"emptyMessage"in A&&s(2,p=A.emptyMessage),"$$scope"in A&&s(7,_=A.$$scope)},a.$$.update=()=>{a.$$.dirty&1&&s(3,n=(o==null?void 0:o.hash)===i),s(4,t={...Object.fromEntries(Object.entries(e).filter(([,A])=>A!==void 0))})},e=Ie(e),[o,l,p,n,t,u,r,_]}class Kp extends ge{constructor(e){super(),de(this,e,Wp,Hp,me,{data:0,emptySet:1,emptyMessage:2})}}function Yp(a){let e,s,t,r,_,o,i,n,l,p,u,A,d,b=a[23]&&Wa(a);const c=[Qp,Xp],h=[];function N(U,B){return U[22]?0:1}i=N(a),n=h[i]=c[i](a);let v=a[8]&&Ka(a),I=a[7]&&Ya(a);return{c(){e=G("p"),s=ue(a[3]),t=Y(),b&&b.c(),_=Y(),o=G("div"),n.c(),l=Y(),v&&v.c(),u=Y(),I&&I.c(),A=ae(),this.h()},l(U){e=M(U,"P",{class:!0});var B=q(e);s=pe(B,a[3]),t=K(B),b&&b.l(B),B.forEach(m),_=K(U),o=M(U,"DIV",{class:!0});var w=q(o);n.l(w),l=K(w),v&&v.l(w),w.forEach(m),u=K(U),I&&I.l(U),A=ae(),this.h()},h(){T(e,"class",r=we("text-sm align-top leading-none",a[19])),T(o,"class",p=we("relative text-xl font-medium mt-1.5",a[20]))},m(U,B){y(U,e,B),X(e,s),X(e,t),b&&b.m(e,null),y(U,_,B),y(U,o,B),h[i].m(o,null),X(o,l),v&&v.m(o,null),y(U,u,B),I&&I.m(U,B),y(U,A,B),d=!0},p(U,B){(!d||B&8)&&ke(s,U[3]),U[23]?b?(b.p(U,B),B&8388608&&S(b,1)):(b=Wa(U),b.c(),S(b,1),b.m(e,null)):b&&(_e(),g(b,1,1,()=>{b=null}),oe()),(!d||B&524288&&r!==(r=we("text-sm align-top leading-none",U[19])))&&T(e,"class",r);let w=i;i=N(U),i===w?h[i].p(U,B):(_e(),g(h[w],1,1,()=>{h[w]=null}),oe(),n=h[i],n?n.p(U,B):(n=h[i]=c[i](U),n.c()),S(n,1),n.m(o,l)),U[8]?v?(v.p(U,B),B&256&&S(v,1)):(v=Ka(U),v.c(),S(v,1),v.m(o,null)):v&&(_e(),g(v,1,1,()=>{v=null}),oe()),(!d||B&1048576&&p!==(p=we("relative text-xl font-medium mt-1.5",U[20])))&&T(o,"class",p),U[7]?I?(I.p(U,B),B&128&&S(I,1)):(I=Ya(U),I.c(),S(I,1),I.m(A.parentNode,A)):I&&(_e(),g(I,1,1,()=>{I=null}),oe())},i(U){d||(S(b),S(n),S(v),S(I),d=!0)},o(U){g(b),g(n),g(v),g(I),d=!1},d(U){U&&(m(e),m(_),m(o),m(u),m(A)),b&&b.d(),h[i].d(),v&&v.d(),I&&I.d(U)}}}function qp(a){let e,s;return e=new ir({props:{inputType:"BigValue",error:a[24],width:"148",height:"28"}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r&16777216&&(_.error=t[24]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Wa(a){let e,s;return e=new fs({props:{description:a[23],size:"3"}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r&8388608&&(_.description=t[23]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Xp(a){let e,s;return e=new ys({props:{data:a[0],column:a[6],fmt:a[13]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r&1&&(_.data=t[0]),r&64&&(_.column=t[6]),r&8192&&(_.fmt=t[13]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Qp(a){let e,s,t,r;return s=new ys({props:{data:a[0],column:a[6],fmt:a[13]}}),{c(){e=G("a"),H(s.$$.fragment),this.h()},l(_){e=M(_,"A",{class:!0,href:!0});var o=q(e);z(s.$$.fragment,o),o.forEach(m),this.h()},h(){T(e,"class","hover:bg-base-200"),T(e,"href",t=Zt(a[22]))},m(_,o){y(_,e,o),P(s,e,null),r=!0},p(_,o){const i={};o&1&&(i.data=_[0]),o&64&&(i.column=_[6]),o&8192&&(i.fmt=_[13]),s.$set(i),(!r||o&4194304&&t!==(t=Zt(_[22])))&&T(e,"href",t)},i(_){r||(S(s.$$.fragment,_),r=!0)},o(_){g(s.$$.fragment,_),r=!1},d(_){_&&m(e),F(s)}}}function Ka(a){let e,s;return e=new Kp({props:{height:"15",data:a[0],dateCol:a[8],valueCol:a[6],type:a[9],interactive:"true",color:a[25],valueFmt:a[13]??a[10],dateFmt:a[11],yScale:a[2],connectGroup:a[12]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r&1&&(_.data=t[0]),r&256&&(_.dateCol=t[8]),r&64&&(_.valueCol=t[6]),r&512&&(_.type=t[9]),r&33554432&&(_.color=t[25]),r&9216&&(_.valueFmt=t[13]??t[10]),r&2048&&(_.dateFmt=t[11]),r&4&&(_.yScale=t[2]),r&4096&&(_.connectGroup=t[12]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Ya(a){let e,s,t,r;const _=[Zp,Jp],o=[];function i(n,l){return n[1]?0:1}return e=i(a),s=o[e]=_[e](a),{c(){s.c(),t=ae()},l(n){s.l(n),t=ae()},m(n,l){o[e].m(n,l),y(n,t,l),r=!0},p(n,l){let p=e;e=i(n),e===p?o[e].p(n,l):(_e(),g(o[p],1,1,()=>{o[p]=null}),oe(),s=o[e],s?s.p(n,l):(s=o[e]=_[e](n),s.c()),S(s,1),s.m(t.parentNode,t))},i(n){r||(S(s),r=!0)},o(n){g(s),r=!1},d(n){n&&m(t),o[e].d(n)}}}function Jp(a){let e,s,t,r,_,o,i;const n=[eu,$p],l=[];function p(u,A){return u[22]?0:1}return s=p(a),t=l[s]=n[s](a),{c(){e=G("p"),t.c(),r=Y(),_=G("span"),o=ue(a[4]),this.h()},l(u){e=M(u,"P",{class:!0});var A=q(e);t.l(A),r=K(A),_=M(A,"SPAN",{});var d=q(_);o=pe(d,a[4]),d.forEach(m),A.forEach(m),this.h()},h(){T(e,"class","text-xs font-sans /60 pt-[0.5px]")},m(u,A){y(u,e,A),l[s].m(e,null),X(e,r),X(e,_),X(_,o),i=!0},p(u,A){let d=s;s=p(u),s===d?l[s].p(u,A):(_e(),g(l[d],1,1,()=>{l[d]=null}),oe(),t=l[s],t?t.p(u,A):(t=l[s]=n[s](u),t.c()),S(t,1),t.m(e,r)),(!i||A&16)&&ke(o,u[4])},i(u){i||(S(t),i=!0)},o(u){g(t),i=!1},d(u){u&&m(e),l[s].d()}}}function Zp(a){let e,s,t,r;return s=new No({props:{data:a[0],column:a[7],fmt:a[14],fontClass:"text-xs",symbolPosition:"left",neutralMin:a[15],neutralMax:a[16],text:a[4],downIsGood:a[5]}}),{c(){e=G("p"),H(s.$$.fragment),this.h()},l(_){e=M(_,"P",{class:!0});var o=q(e);z(s.$$.fragment,o),o.forEach(m),this.h()},h(){T(e,"class",t=we("text-xs font-sans mt-1",a[21]))},m(_,o){y(_,e,o),P(s,e,null),r=!0},p(_,o){const i={};o&1&&(i.data=_[0]),o&128&&(i.column=_[7]),o&16384&&(i.fmt=_[14]),o&32768&&(i.neutralMin=_[15]),o&65536&&(i.neutralMax=_[16]),o&16&&(i.text=_[4]),o&32&&(i.downIsGood=_[5]),s.$set(i),(!r||o&2097152&&t!==(t=we("text-xs font-sans mt-1",_[21])))&&T(e,"class",t)},i(_){r||(S(s.$$.fragment,_),r=!0)},o(_){g(s.$$.fragment,_),r=!1},d(_){_&&m(e),F(s)}}}function $p(a){let e,s;return e=new ys({props:{data:a[0],column:a[7],fmt:a[14]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r&1&&(_.data=t[0]),r&128&&(_.column=t[7]),r&16384&&(_.fmt=t[14]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function eu(a){let e,s,t,r;return s=new ys({props:{data:a[0],column:a[7],fmt:a[14]}}),{c(){e=G("a"),H(s.$$.fragment),this.h()},l(_){e=M(_,"A",{class:!0,href:!0});var o=q(e);z(s.$$.fragment,o),o.forEach(m),this.h()},h(){T(e,"class","hover:bg-base-200"),T(e,"href",t=Zt(a[22]))},m(_,o){y(_,e,o),P(s,e,null),r=!0},p(_,o){const i={};o&1&&(i.data=_[0]),o&128&&(i.column=_[7]),o&16384&&(i.fmt=_[14]),s.$set(i),(!r||o&4194304&&t!==(t=Zt(_[22])))&&T(e,"href",t)},i(_){r||(S(s.$$.fragment,_),r=!0)},o(_){g(s.$$.fragment,_),r=!1},d(_){_&&m(e),F(s)}}}function tu(a){let e,s,t,r,_;const o=[qp,Yp],i=[];function n(l,p){return l[24].length>0?0:1}return s=n(a),t=i[s]=o[s](a),{c(){e=G("div"),t.c(),this.h()},l(l){e=M(l,"DIV",{class:!0,style:!0});var p=q(e);t.l(p),p.forEach(m),this.h()},h(){T(e,"class","inline-block font-sans pt-2 pb-3 pl-0 mr-3 items-center align-top"),T(e,"style",r=`
        min-width: ${a[18]};
        max-width: ${a[17]};
		`)},m(l,p){y(l,e,p),i[s].m(e,null),_=!0},p(l,[p]){let u=s;s=n(l),s===u?i[s].p(l,p):(_e(),g(i[u],1,1,()=>{i[u]=null}),oe(),t=i[s],t?t.p(l,p):(t=i[s]=o[s](l),t.c()),S(t,1),t.m(e,null)),(!_||p&393216&&r!==(r=`
        min-width: ${l[18]};
        max-width: ${l[17]};
		`))&&T(e,"style",r)},i(l){_||(S(t),_=!0)},o(l){g(t),_=!1},d(l){l&&m(e),i[s].d()}}}function su(a,e,s){let t;const{resolveColor:r}=es();let{data:_}=e,{value:o=null}=e,{comparison:i=null}=e,{comparisonDelta:n=!0}=e,{sparkline:l=null}=e,{sparklineType:p="line"}=e,{sparklineColor:u=void 0}=e,{sparklineValueFmt:A=void 0}=e,{sparklineDateFmt:d=void 0}=e,{sparklineYScale:b=!1}=e,{connectGroup:c=void 0}=e,{fmt:h=void 0}=e,{comparisonFmt:N=void 0}=e,{title:v=null}=e,{comparisonTitle:I=null}=e,{downIsGood:U=!1}=e,{neutralMin:B=0}=e,{neutralMax:w=0}=e,{maxWidth:D="none"}=e,{minWidth:O="18%"}=e,{titleClass:x=void 0}=e,{valueClass:C=void 0}=e,{comparisonClass:E=void 0}=e,{link:L=null}=e,{description:k=void 0}=e,W=[];return a.$$set=j=>{"data"in j&&s(0,_=j.data),"value"in j&&s(6,o=j.value),"comparison"in j&&s(7,i=j.comparison),"comparisonDelta"in j&&s(1,n=j.comparisonDelta),"sparkline"in j&&s(8,l=j.sparkline),"sparklineType"in j&&s(9,p=j.sparklineType),"sparklineColor"in j&&s(26,u=j.sparklineColor),"sparklineValueFmt"in j&&s(10,A=j.sparklineValueFmt),"sparklineDateFmt"in j&&s(11,d=j.sparklineDateFmt),"sparklineYScale"in j&&s(2,b=j.sparklineYScale),"connectGroup"in j&&s(12,c=j.connectGroup),"fmt"in j&&s(13,h=j.fmt),"comparisonFmt"in j&&s(14,N=j.comparisonFmt),"title"in j&&s(3,v=j.title),"comparisonTitle"in j&&s(4,I=j.comparisonTitle),"downIsGood"in j&&s(5,U=j.downIsGood),"neutralMin"in j&&s(15,B=j.neutralMin),"neutralMax"in j&&s(16,w=j.neutralMax),"maxWidth"in j&&s(17,D=j.maxWidth),"minWidth"in j&&s(18,O=j.minWidth),"titleClass"in j&&s(19,x=j.titleClass),"valueClass"in j&&s(20,C=j.valueClass),"comparisonClass"in j&&s(21,E=j.comparisonClass),"link"in j&&s(22,L=j.link),"description"in j&&s(23,k=j.description)},a.$$.update=()=>{if(a.$$.dirty&2&&s(1,n=n==="true"||n===!0),a.$$.dirty&67108864&&s(25,t=r(u)),a.$$.dirty&4&&s(2,b=b==="true"||b===!0),a.$$.dirty&32&&s(5,U=U==="true"||U===!0),a.$$.dirty&16777689)try{Array.isArray(_)||s(0,_=[_]),As(_,[o]);let j=pr(_,"array"),$=j.find(ie=>ie.id===o);if(s(3,v=v??($?$.title:null)),i!==null){As(_,[i]);let ie=j.find(R=>R.id===i);s(4,I=I??(ie?ie.title:null))}l!==null&&As(_,[l])}catch(j){if(s(24,W=[...W,j]),T_)throw W}},[_,n,b,v,I,U,o,i,l,p,A,d,c,h,N,B,w,D,O,x,C,E,L,k,W,t,u]}let ru=class extends ge{constructor(e){super(),de(this,e,su,tu,me,{data:0,value:6,comparison:7,comparisonDelta:1,sparkline:8,sparklineType:9,sparklineColor:26,sparklineValueFmt:10,sparklineDateFmt:11,sparklineYScale:2,connectGroup:12,fmt:13,comparisonFmt:14,title:3,comparisonTitle:4,downIsGood:5,neutralMin:15,neutralMax:16,maxWidth:17,minWidth:18,titleClass:19,valueClass:20,comparisonClass:21,link:22,description:23})}};function au(a){let e;const s=a[6].default,t=be(s,a,a[7],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,_){t&&t.m(r,_),e=!0},p(r,_){t&&t.p&&(!e||_&128)&&Ee(t,s,r,r[7],e?ve(s,r[7],_,null):he(r[7]),null)},i(r){e||(S(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function _u(a){let e,s;const t=[a[4],{data:Ve.isQuery(a[9])?Array.from(a[9]):a[9]}];let r={$$slots:{default:[au]},$$scope:{ctx:a}};for(let _=0;_<t.length;_+=1)r=se(r,t[_]);return e=new ru({props:r}),{c(){H(e.$$.fragment)},l(_){z(e.$$.fragment,_)},m(_,o){P(e,_,o),s=!0},p(_,o){const i=o&528?Re(t,[o&16&&pt(_[4]),o&512&&{data:Ve.isQuery(_[9])?Array.from(_[9]):_[9]}]):{};o&128&&(i.$$scope={dirty:o,ctx:_}),e.$set(i)},i(_){s||(S(e.$$.fragment,_),s=!0)},o(_){g(e.$$.fragment,_),s=!1},d(_){F(e,_)}}}function ou(a){let e,s,t,r;return s=new Bo({props:{error:a[9].error.message}}),{c(){e=G("div"),H(s.$$.fragment),this.h()},l(_){e=M(_,"DIV",{slot:!0,class:!0,style:!0});var o=q(e);z(s.$$.fragment,o),o.forEach(m),this.h()},h(){T(e,"slot","error"),T(e,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),T(e,"style",t=`
				min-width: ${a[5].minWidth};
				max-width: ${a[5].maxWidth};
		`)},m(_,o){y(_,e,o),P(s,e,null),r=!0},p(_,o){const i={};o&512&&(i.error=_[9].error.message),s.$set(i),(!r||o&32&&t!==(t=`
				min-width: ${_[5].minWidth};
				max-width: ${_[5].maxWidth};
		`))&&T(e,"style",t)},i(_){r||(S(s.$$.fragment,_),r=!0)},o(_){g(s.$$.fragment,_),r=!1},d(_){_&&m(e),F(s)}}}function nu(a){let e,s,t,r;return s=new ws({props:{emptyMessage:a[2],emptySet:a[1],chartType:pu,isInitial:a[3]}}),{c(){e=G("div"),H(s.$$.fragment),this.h()},l(_){e=M(_,"DIV",{slot:!0,class:!0,style:!0});var o=q(e);z(s.$$.fragment,o),o.forEach(m),this.h()},h(){T(e,"slot","empty"),T(e,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),T(e,"style",t=`
				min-width: ${a[5].minWidth};
				max-width: ${a[5].maxWidth};
		`)},m(_,o){y(_,e,o),P(s,e,null),r=!0},p(_,o){const i={};o&4&&(i.emptyMessage=_[2]),o&2&&(i.emptySet=_[1]),o&8&&(i.isInitial=_[3]),s.$set(i),(!r||o&32&&t!==(t=`
				min-width: ${_[5].minWidth};
				max-width: ${_[5].maxWidth};
		`))&&T(e,"style",t)},i(_){r||(S(s.$$.fragment,_),r=!0)},o(_){g(s.$$.fragment,_),r=!1},d(_){_&&m(e),F(s)}}}function iu(a){let e,s,t=(a[5].title??" ")+"",r,_,o,i,n;return o=new ys({props:{column:a[5].value,fmt:a[5].fmt,data:a[9]}}),{c(){e=G("div"),s=G("p"),r=ue(t),_=Y(),H(o.$$.fragment),this.h()},l(l){e=M(l,"DIV",{class:!0,style:!0,slot:!0});var p=q(e);s=M(p,"P",{class:!0});var u=q(s);r=pe(u,t),u.forEach(m),_=K(p),z(o.$$.fragment,p),p.forEach(m),this.h()},h(){T(s,"class","text-sm"),T(e,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),T(e,"style",i=`
			min-width: ${a[5].minWidth};
			max-width: ${a[5].maxWidth};
		`),T(e,"slot","skeleton")},m(l,p){y(l,e,p),X(e,s),X(s,r),X(e,_),P(o,e,null),n=!0},p(l,p){(!n||p&32)&&t!==(t=(l[5].title??" ")+"")&&ke(r,t);const u={};p&32&&(u.column=l[5].value),p&32&&(u.fmt=l[5].fmt),p&512&&(u.data=l[9]),o.$set(u),(!n||p&32&&i!==(i=`
			min-width: ${l[5].minWidth};
			max-width: ${l[5].maxWidth};
		`))&&T(e,"style",i)},i(l){n||(S(o.$$.fragment,l),n=!0)},o(l){g(o.$$.fragment,l),n=!1},d(l){l&&m(e),F(o)}}}function lu(a){let e,s;return e=new Bs({props:{data:a[0],$$slots:{skeleton:[iu,({loaded:t})=>({9:t}),({loaded:t})=>t?512:0],empty:[nu],error:[ou,({loaded:t})=>({9:t}),({loaded:t})=>t?512:0],default:[_u,({loaded:t})=>({9:t}),({loaded:t})=>t?512:0]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,[r]){const _={};r&1&&(_.data=t[0]),r&702&&(_.$$scope={dirty:r,ctx:t}),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}let pu="Big Value";function uu(a,e,s){let t,{$$slots:r={},$$scope:_}=e,{data:o}=e;const i=Ve.isQuery(o)?o.hash:void 0;let n=(o==null?void 0:o.hash)===i,{emptySet:l=void 0}=e,{emptyMessage:p=void 0}=e;return a.$$set=u=>{s(5,e=se(se({},e),Ie(u))),"data"in u&&s(0,o=u.data),"emptySet"in u&&s(1,l=u.emptySet),"emptyMessage"in u&&s(2,p=u.emptyMessage),"$$scope"in u&&s(7,_=u.$$scope)},a.$$.update=()=>{a.$$.dirty&1&&s(3,n=(o==null?void 0:o.hash)===i),s(4,t=Object.fromEntries(Object.entries(e).filter(([,u])=>u!==void 0)))},e=Ie(e),[o,l,p,n,t,e,r,_]}class Ls extends ge{constructor(e){super(),de(this,e,uu,lu,me,{data:0,emptySet:1,emptyMessage:2})}}function Au(a){let e,s=Be.title+"",t;return{c(){e=G("h1"),t=ue(s),this.h()},l(r){e=M(r,"H1",{class:!0});var _=q(e);t=pe(_,s),_.forEach(m),this.h()},h(){T(e,"class","title")},m(r,_){y(r,e,_),X(e,t)},p:le,d(r){r&&m(e)}}}function Su(a){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:le,p:le,d:le}}function mu(a){let e,s,t,r,_;return document.title=e=Be.title,{c(){s=Y(),t=G("meta"),r=Y(),_=G("meta"),this.h()},l(o){s=K(o),t=M(o,"META",{property:!0,content:!0}),r=K(o),_=M(o,"META",{name:!0,content:!0}),this.h()},h(){var o,i;T(t,"property","og:title"),T(t,"content",((o=Be.og)==null?void 0:o.title)??Be.title),T(_,"name","twitter:title"),T(_,"content",((i=Be.og)==null?void 0:i.title)??Be.title)},m(o,i){y(o,s,i),y(o,t,i),y(o,r,i),y(o,_,i)},p(o,i){i&0&&e!==(e=Be.title)&&(document.title=e)},d(o){o&&(m(s),m(t),m(r),m(_))}}}function cu(a){var _,o;let e,s,t=(Be.description||((_=Be.og)==null?void 0:_.description))&&gu(),r=((o=Be.og)==null?void 0:o.image)&&du();return{c(){t&&t.c(),e=Y(),r&&r.c(),s=ae()},l(i){t&&t.l(i),e=K(i),r&&r.l(i),s=ae()},m(i,n){t&&t.m(i,n),y(i,e,n),r&&r.m(i,n),y(i,s,n)},p(i,n){var l,p;(Be.description||(l=Be.og)!=null&&l.description)&&t.p(i,n),(p=Be.og)!=null&&p.image&&r.p(i,n)},d(i){i&&(m(e),m(s)),t&&t.d(i),r&&r.d(i)}}}function gu(a){let e,s,t,r,_;return{c(){e=G("meta"),s=Y(),t=G("meta"),r=Y(),_=G("meta"),this.h()},l(o){e=M(o,"META",{name:!0,content:!0}),s=K(o),t=M(o,"META",{property:!0,content:!0}),r=K(o),_=M(o,"META",{name:!0,content:!0}),this.h()},h(){var o,i,n;T(e,"name","description"),T(e,"content",Be.description??((o=Be.og)==null?void 0:o.description)),T(t,"property","og:description"),T(t,"content",((i=Be.og)==null?void 0:i.description)??Be.description),T(_,"name","twitter:description"),T(_,"content",((n=Be.og)==null?void 0:n.description)??Be.description)},m(o,i){y(o,e,i),y(o,s,i),y(o,t,i),y(o,r,i),y(o,_,i)},p:le,d(o){o&&(m(e),m(s),m(t),m(r),m(_))}}}function du(a){let e,s,t;return{c(){e=G("meta"),s=Y(),t=G("meta"),this.h()},l(r){e=M(r,"META",{property:!0,content:!0}),s=K(r),t=M(r,"META",{name:!0,content:!0}),this.h()},h(){var r,_;T(e,"property","og:image"),T(e,"content",Zt((r=Be.og)==null?void 0:r.image)),T(t,"name","twitter:image"),T(t,"content",Zt((_=Be.og)==null?void 0:_.image))},m(r,_){y(r,e,_),y(r,s,_),y(r,t,_)},p:le,d(r){r&&(m(e),m(s),m(t))}}}function qa(a){let e,s;return e=new at({props:{queryID:"startups",queryResult:a[0]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&1&&(_.queryResult=t[0]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Xa(a){let e,s;return e=new at({props:{queryID:"startup_overview",queryResult:a[1]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&2&&(_.queryResult=t[1]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Qa(a){let e,s;return e=new at({props:{queryID:"business_models",queryResult:a[2]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&4&&(_.queryResult=t[2]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Ja(a){let e,s;return e=new at({props:{queryID:"sectors",queryResult:a[3]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&8&&(_.queryResult=t[3]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Za(a){let e,s;return e=new at({props:{queryID:"founding_year_overview",queryResult:a[4]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&16&&(_.queryResult=t[4]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function $a(a){let e,s;return e=new at({props:{queryID:"software_hardware_split",queryResult:a[5]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&32&&(_.queryResult=t[5]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function e_(a){let e,s;return e=new at({props:{queryID:"startup_aggregate_data",queryResult:a[6]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&64&&(_.queryResult=t[6]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function t_(a){let e,s;return e=new at({props:{queryID:"startups_by_business_model",queryResult:a[7]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&128&&(_.queryResult=t[7]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function s_(a){let e,s;return e=new at({props:{queryID:"startups_by_sector",queryResult:a[8]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&256&&(_.queryResult=t[8]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function r_(a){let e,s;return e=new at({props:{queryID:"ai_startups",queryResult:a[9]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&512&&(_.queryResult=t[9]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function a_(a){let e,s;return e=new at({props:{queryID:"marketplace_startups",queryResult:a[10]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&1024&&(_.queryResult=t[10]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function __(a){let e,s;return e=new at({props:{queryID:"startups_by_10_biggest_sectors",queryResult:a[11]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&2048&&(_.queryResult=t[11]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function o_(a){let e,s;return e=new at({props:{queryID:"startups_by_hardware_software",queryResult:a[12]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&4096&&(_.queryResult=t[12]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function fu(a){let e,s,t,r,_,o,i,n;return e=new ls({props:{config:{title:{text:"Business models",left:"center",textStyle:{fontSize:20,lineHeight:40}},tooltip:{formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:["30%","60%"],data:[...a[7]]}]}}}),t=new ls({props:{config:{title:{text:"Hardware vs Software",left:"center",textStyle:{fontSize:20,lineHeight:40}},tooltip:{formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:["30%","60%"],data:[...a[12]]}]}}}),_=new ls({props:{config:{title:{text:"Marketplace startups",left:"center",textStyle:{fontSize:20,lineHeight:40}},tooltip:{formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:["30%","60%"],data:[...a[10]]}]}}}),i=new ls({props:{config:{title:{text:"AI startups",left:"center",textStyle:{fontSize:20,lineHeight:40}},tooltip:{formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:["30%","60%"],data:[...a[9]]}]}}}),{c(){H(e.$$.fragment),s=Y(),H(t.$$.fragment),r=Y(),H(_.$$.fragment),o=Y(),H(i.$$.fragment)},l(l){z(e.$$.fragment,l),s=K(l),z(t.$$.fragment,l),r=K(l),z(_.$$.fragment,l),o=K(l),z(i.$$.fragment,l)},m(l,p){P(e,l,p),y(l,s,p),P(t,l,p),y(l,r,p),P(_,l,p),y(l,o,p),P(i,l,p),n=!0},p(l,p){const u={};p[0]&128&&(u.config={title:{text:"Business models",left:"center",textStyle:{fontSize:20,lineHeight:40}},tooltip:{formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:["30%","60%"],data:[...l[7]]}]}),e.$set(u);const A={};p[0]&4096&&(A.config={title:{text:"Hardware vs Software",left:"center",textStyle:{fontSize:20,lineHeight:40}},tooltip:{formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:["30%","60%"],data:[...l[12]]}]}),t.$set(A);const d={};p[0]&1024&&(d.config={title:{text:"Marketplace startups",left:"center",textStyle:{fontSize:20,lineHeight:40}},tooltip:{formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:["30%","60%"],data:[...l[10]]}]}),_.$set(d);const b={};p[0]&512&&(b.config={title:{text:"AI startups",left:"center",textStyle:{fontSize:20,lineHeight:40}},tooltip:{formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:["30%","60%"],data:[...l[9]]}]}),i.$set(b)},i(l){n||(S(e.$$.fragment,l),S(t.$$.fragment,l),S(_.$$.fragment,l),S(i.$$.fragment,l),n=!0)},o(l){g(e.$$.fragment,l),g(t.$$.fragment,l),g(_.$$.fragment,l),g(i.$$.fragment,l),n=!1},d(l){l&&(m(s),m(r),m(o)),F(e,l),F(t,l),F(_,l),F(i,l)}}}function n_(a){let e,s;return e=new at({props:{queryID:"dropdown_years",queryResult:a[13]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&8192&&(_.queryResult=t[13]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function i_(a){let e,s;return e=new at({props:{queryID:"max_employees",queryResult:a[14]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&16384&&(_.queryResult=t[14]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function l_(a){let e,s;return e=new at({props:{queryID:"startup_overview_filtered",queryResult:a[15]}}),{c(){H(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){P(e,t,r),s=!0},p(t,r){const _={};r[0]&32768&&(_.queryResult=t[15]),e.$set(_)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function yu(a){let e,s,t,r,_,o,i,n,l,p,u,A,d,b,c,h,N,v,I,U,B,w,D,O,x,C;return e=new lt({props:{id:"brand_name",title:"Company"}}),t=new lt({props:{id:"turnover",title:"Turnover",fmt:"eur"}}),_=new lt({props:{id:"turnover_delta_percent",title:"YoY (%)",contentType:"delta",fmt:"percent"}}),i=new lt({props:{id:"profit",title:"Profit",fmt:"eur"}}),l=new lt({props:{id:"profit_delta_percent",title:"YoY (%)",contentType:"delta",fmt:"percent"}}),u=new lt({props:{id:"employees_gp",title:"Employees"}}),d=new lt({props:{id:"employees_gp_delta_percent",title:"YoY (%)",contentType:"delta",fmt:"percent"}}),c=new lt({props:{id:"total_budget_payments",title:"Total budget payments",fmt:"eur"}}),N=new lt({props:{id:"total_budget_payments_delta_percent",title:"YoY (%)",contentType:"delta",fmt:"percent"}}),I=new lt({props:{id:"personal_income_tax",title:"Personal income tax",fmt:"eur"}}),B=new lt({props:{id:"personal_income_tax_delta_percent",title:"YoY (%)",contentType:"delta",fmt:"percent"}}),D=new lt({props:{id:"social_security_payments",title:"Social security payments",fmt:"eur"}}),x=new lt({props:{id:"social_security_payments_delta_percent",title:"YoY (%)",contentType:"delta",fmt:"percent"}}),{c(){H(e.$$.fragment),s=Y(),H(t.$$.fragment),r=Y(),H(_.$$.fragment),o=Y(),H(i.$$.fragment),n=Y(),H(l.$$.fragment),p=Y(),H(u.$$.fragment),A=Y(),H(d.$$.fragment),b=Y(),H(c.$$.fragment),h=Y(),H(N.$$.fragment),v=Y(),H(I.$$.fragment),U=Y(),H(B.$$.fragment),w=Y(),H(D.$$.fragment),O=Y(),H(x.$$.fragment)},l(E){z(e.$$.fragment,E),s=K(E),z(t.$$.fragment,E),r=K(E),z(_.$$.fragment,E),o=K(E),z(i.$$.fragment,E),n=K(E),z(l.$$.fragment,E),p=K(E),z(u.$$.fragment,E),A=K(E),z(d.$$.fragment,E),b=K(E),z(c.$$.fragment,E),h=K(E),z(N.$$.fragment,E),v=K(E),z(I.$$.fragment,E),U=K(E),z(B.$$.fragment,E),w=K(E),z(D.$$.fragment,E),O=K(E),z(x.$$.fragment,E)},m(E,L){P(e,E,L),y(E,s,L),P(t,E,L),y(E,r,L),P(_,E,L),y(E,o,L),P(i,E,L),y(E,n,L),P(l,E,L),y(E,p,L),P(u,E,L),y(E,A,L),P(d,E,L),y(E,b,L),P(c,E,L),y(E,h,L),P(N,E,L),y(E,v,L),P(I,E,L),y(E,U,L),P(B,E,L),y(E,w,L),P(D,E,L),y(E,O,L),P(x,E,L),C=!0},p:le,i(E){C||(S(e.$$.fragment,E),S(t.$$.fragment,E),S(_.$$.fragment,E),S(i.$$.fragment,E),S(l.$$.fragment,E),S(u.$$.fragment,E),S(d.$$.fragment,E),S(c.$$.fragment,E),S(N.$$.fragment,E),S(I.$$.fragment,E),S(B.$$.fragment,E),S(D.$$.fragment,E),S(x.$$.fragment,E),C=!0)},o(E){g(e.$$.fragment,E),g(t.$$.fragment,E),g(_.$$.fragment,E),g(i.$$.fragment,E),g(l.$$.fragment,E),g(u.$$.fragment,E),g(d.$$.fragment,E),g(c.$$.fragment,E),g(N.$$.fragment,E),g(I.$$.fragment,E),g(B.$$.fragment,E),g(D.$$.fragment,E),g(x.$$.fragment,E),C=!1},d(E){E&&(m(s),m(r),m(o),m(n),m(p),m(A),m(b),m(h),m(v),m(U),m(w),m(O)),F(e,E),F(t,E),F(_,E),F(i,E),F(l,E),F(u,E),F(d,E),F(c,E),F(N,E),F(I,E),F(B,E),F(D,E),F(x,E)}}}function bu(a){let e,s,t,r,_,o,i,n,l,p,u,A,d,b,c,h,N,v,I,U='<a href="#"></a>',B,w,D,O,x,C,E,L,k,W,j='<a href="#-1"></a>',$,ie,R,ee,re,te,Se,Ce,J,Ne,ne,ye,et,_t,st,nt,tt=typeof Be<"u"&&Be.title&&Be.hide_title!==!0&&Au();function it(f,V){return typeof Be<"u"&&Be.title?mu:Su}let ut=it()(a),Ze=typeof Be=="object"&&cu(),je=a[0]&&qa(a),xe=a[1]&&Xa(a),Le=a[2]&&Qa(a),Pe=a[3]&&Ja(a),De=a[4]&&Za(a),ze=a[5]&&$a(a),Ke=a[6]&&e_(a),Me=a[7]&&t_(a),Ge=a[8]&&s_(a),He=a[9]&&r_(a),Ye=a[10]&&a_(a),qe=a[11]&&__(a),We=a[12]&&o_(a);w=new Ls({props:{data:a[6],value:"total_turnover",title:"Turnover",fmt:"eur",comparison:"turnover_delta_percent",comparisonFmt:"pct1",comparisonTitle:"YoY"}}),O=new Ls({props:{data:a[6],value:"total_profit",title:"Profit",fmt:"eur",comparison:"profit_delta_percent",comparisonFmt:"pct1",comparisonTitle:"YoY"}}),C=new Ls({props:{data:a[6],value:"total_employees",title:"Employees",fmt:"number",comparison:"employees_delta_percent",comparisonFmt:"pct1",comparisonTitle:"YoY"}}),L=new Ls({props:{data:a[6],value:"total_budget_payments",title:"Total budget payments",fmt:"eur",comparison:"budget_payments_delta_percent",comparisonFmt:"pct1",comparisonTitle:"YoY"}}),ie=new ls({props:{config:{title:{text:"Sector overview",left:"center",textStyle:{fontSize:20,lineHeight:40}},tooltip:{formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:["30%","60%"],data:[...a[11]]}]}}}),ee=new D2({props:{cols:"2",gapSize:"none",$$slots:{default:[fu]},$$scope:{ctx:a}}}),te=new B2({});let Q=a[13]&&n_(a);J=new o2({props:{data:a[13],name:"dropdown_years",value:"year",title:"Selected year"}});let Ae=a[14]&&i_(a);ye=new T2({props:{title:"Employees",name:"employees",size:"large",step:"5",data:a[14],min:"0",maxColumn:"maxColumn"}});let Fe=a[15]&&l_(a);return st=new wo({props:{data:a[15],rows:"50",compact:"true",wrapTitles:"true",$$slots:{default:[yu]},$$scope:{ctx:a}}}),{c(){tt&&tt.c(),e=Y(),ut.c(),s=G("meta"),t=G("meta"),Ze&&Ze.c(),r=ae(),_=Y(),je&&je.c(),o=Y(),xe&&xe.c(),i=Y(),Le&&Le.c(),n=Y(),Pe&&Pe.c(),l=Y(),De&&De.c(),p=Y(),ze&&ze.c(),u=Y(),Ke&&Ke.c(),A=Y(),Me&&Me.c(),d=Y(),Ge&&Ge.c(),b=Y(),He&&He.c(),c=Y(),Ye&&Ye.c(),h=Y(),qe&&qe.c(),N=Y(),We&&We.c(),v=Y(),I=G("h1"),I.innerHTML=U,B=Y(),H(w.$$.fragment),D=Y(),H(O.$$.fragment),x=Y(),H(C.$$.fragment),E=Y(),H(L.$$.fragment),k=Y(),W=G("h1"),W.innerHTML=j,$=Y(),H(ie.$$.fragment),R=Y(),H(ee.$$.fragment),re=Y(),H(te.$$.fragment),Se=Y(),Q&&Q.c(),Ce=Y(),H(J.$$.fragment),Ne=Y(),Ae&&Ae.c(),ne=Y(),H(ye.$$.fragment),et=Y(),Fe&&Fe.c(),_t=Y(),H(st.$$.fragment),this.h()},l(f){tt&&tt.l(f),e=K(f);const V=X_("svelte-2igo1p",document.head);ut.l(V),s=M(V,"META",{name:!0,content:!0}),t=M(V,"META",{name:!0,content:!0}),Ze&&Ze.l(V),r=ae(),V.forEach(m),_=K(f),je&&je.l(f),o=K(f),xe&&xe.l(f),i=K(f),Le&&Le.l(f),n=K(f),Pe&&Pe.l(f),l=K(f),De&&De.l(f),p=K(f),ze&&ze.l(f),u=K(f),Ke&&Ke.l(f),A=K(f),Me&&Me.l(f),d=K(f),Ge&&Ge.l(f),b=K(f),He&&He.l(f),c=K(f),Ye&&Ye.l(f),h=K(f),qe&&qe.l(f),N=K(f),We&&We.l(f),v=K(f),I=M(f,"H1",{class:!0,id:!0,"data-svelte-h":!0}),ft(I)!=="svelte-1kicl0x"&&(I.innerHTML=U),B=K(f),z(w.$$.fragment,f),D=K(f),z(O.$$.fragment,f),x=K(f),z(C.$$.fragment,f),E=K(f),z(L.$$.fragment,f),k=K(f),W=M(f,"H1",{class:!0,id:!0,"data-svelte-h":!0}),ft(W)!=="svelte-1hzmxtk"&&(W.innerHTML=j),$=K(f),z(ie.$$.fragment,f),R=K(f),z(ee.$$.fragment,f),re=K(f),z(te.$$.fragment,f),Se=K(f),Q&&Q.l(f),Ce=K(f),z(J.$$.fragment,f),Ne=K(f),Ae&&Ae.l(f),ne=K(f),z(ye.$$.fragment,f),et=K(f),Fe&&Fe.l(f),_t=K(f),z(st.$$.fragment,f),this.h()},h(){T(s,"name","twitter:card"),T(s,"content","summary_large_image"),T(t,"name","twitter:site"),T(t,"content","@evidence_dev"),T(I,"class","markdown"),T(I,"id",""),T(W,"class","markdown"),T(W,"id","-1")},m(f,V){tt&&tt.m(f,V),y(f,e,V),ut.m(document.head,null),X(document.head,s),X(document.head,t),Ze&&Ze.m(document.head,null),X(document.head,r),y(f,_,V),je&&je.m(f,V),y(f,o,V),xe&&xe.m(f,V),y(f,i,V),Le&&Le.m(f,V),y(f,n,V),Pe&&Pe.m(f,V),y(f,l,V),De&&De.m(f,V),y(f,p,V),ze&&ze.m(f,V),y(f,u,V),Ke&&Ke.m(f,V),y(f,A,V),Me&&Me.m(f,V),y(f,d,V),Ge&&Ge.m(f,V),y(f,b,V),He&&He.m(f,V),y(f,c,V),Ye&&Ye.m(f,V),y(f,h,V),qe&&qe.m(f,V),y(f,N,V),We&&We.m(f,V),y(f,v,V),y(f,I,V),y(f,B,V),P(w,f,V),y(f,D,V),P(O,f,V),y(f,x,V),P(C,f,V),y(f,E,V),P(L,f,V),y(f,k,V),y(f,W,V),y(f,$,V),P(ie,f,V),y(f,R,V),P(ee,f,V),y(f,re,V),P(te,f,V),y(f,Se,V),Q&&Q.m(f,V),y(f,Ce,V),P(J,f,V),y(f,Ne,V),Ae&&Ae.m(f,V),y(f,ne,V),P(ye,f,V),y(f,et,V),Fe&&Fe.m(f,V),y(f,_t,V),P(st,f,V),nt=!0},p(f,V){typeof Be<"u"&&Be.title&&Be.hide_title!==!0&&tt.p(f,V),ut.p(f,V),typeof Be=="object"&&Ze.p(f,V),f[0]?je?(je.p(f,V),V[0]&1&&S(je,1)):(je=qa(f),je.c(),S(je,1),je.m(o.parentNode,o)):je&&(_e(),g(je,1,1,()=>{je=null}),oe()),f[1]?xe?(xe.p(f,V),V[0]&2&&S(xe,1)):(xe=Xa(f),xe.c(),S(xe,1),xe.m(i.parentNode,i)):xe&&(_e(),g(xe,1,1,()=>{xe=null}),oe()),f[2]?Le?(Le.p(f,V),V[0]&4&&S(Le,1)):(Le=Qa(f),Le.c(),S(Le,1),Le.m(n.parentNode,n)):Le&&(_e(),g(Le,1,1,()=>{Le=null}),oe()),f[3]?Pe?(Pe.p(f,V),V[0]&8&&S(Pe,1)):(Pe=Ja(f),Pe.c(),S(Pe,1),Pe.m(l.parentNode,l)):Pe&&(_e(),g(Pe,1,1,()=>{Pe=null}),oe()),f[4]?De?(De.p(f,V),V[0]&16&&S(De,1)):(De=Za(f),De.c(),S(De,1),De.m(p.parentNode,p)):De&&(_e(),g(De,1,1,()=>{De=null}),oe()),f[5]?ze?(ze.p(f,V),V[0]&32&&S(ze,1)):(ze=$a(f),ze.c(),S(ze,1),ze.m(u.parentNode,u)):ze&&(_e(),g(ze,1,1,()=>{ze=null}),oe()),f[6]?Ke?(Ke.p(f,V),V[0]&64&&S(Ke,1)):(Ke=e_(f),Ke.c(),S(Ke,1),Ke.m(A.parentNode,A)):Ke&&(_e(),g(Ke,1,1,()=>{Ke=null}),oe()),f[7]?Me?(Me.p(f,V),V[0]&128&&S(Me,1)):(Me=t_(f),Me.c(),S(Me,1),Me.m(d.parentNode,d)):Me&&(_e(),g(Me,1,1,()=>{Me=null}),oe()),f[8]?Ge?(Ge.p(f,V),V[0]&256&&S(Ge,1)):(Ge=s_(f),Ge.c(),S(Ge,1),Ge.m(b.parentNode,b)):Ge&&(_e(),g(Ge,1,1,()=>{Ge=null}),oe()),f[9]?He?(He.p(f,V),V[0]&512&&S(He,1)):(He=r_(f),He.c(),S(He,1),He.m(c.parentNode,c)):He&&(_e(),g(He,1,1,()=>{He=null}),oe()),f[10]?Ye?(Ye.p(f,V),V[0]&1024&&S(Ye,1)):(Ye=a_(f),Ye.c(),S(Ye,1),Ye.m(h.parentNode,h)):Ye&&(_e(),g(Ye,1,1,()=>{Ye=null}),oe()),f[11]?qe?(qe.p(f,V),V[0]&2048&&S(qe,1)):(qe=__(f),qe.c(),S(qe,1),qe.m(N.parentNode,N)):qe&&(_e(),g(qe,1,1,()=>{qe=null}),oe()),f[12]?We?(We.p(f,V),V[0]&4096&&S(We,1)):(We=o_(f),We.c(),S(We,1),We.m(v.parentNode,v)):We&&(_e(),g(We,1,1,()=>{We=null}),oe());const Pt={};V[0]&64&&(Pt.data=f[6]),w.$set(Pt);const mt={};V[0]&64&&(mt.data=f[6]),O.$set(mt);const ct={};V[0]&64&&(ct.data=f[6]),C.$set(ct);const ht={};V[0]&64&&(ht.data=f[6]),L.$set(ht);const zt={};V[0]&2048&&(zt.config={title:{text:"Sector overview",left:"center",textStyle:{fontSize:20,lineHeight:40}},tooltip:{formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:["30%","60%"],data:[...f[11]]}]}),ie.$set(zt);const Ht={};V[0]&5760|V[3]&32768&&(Ht.$$scope={dirty:V,ctx:f}),ee.$set(Ht),f[13]?Q?(Q.p(f,V),V[0]&8192&&S(Q,1)):(Q=n_(f),Q.c(),S(Q,1),Q.m(Ce.parentNode,Ce)):Q&&(_e(),g(Q,1,1,()=>{Q=null}),oe());const Vt={};V[0]&8192&&(Vt.data=f[13]),J.$set(Vt),f[14]?Ae?(Ae.p(f,V),V[0]&16384&&S(Ae,1)):(Ae=i_(f),Ae.c(),S(Ae,1),Ae.m(ne.parentNode,ne)):Ae&&(_e(),g(Ae,1,1,()=>{Ae=null}),oe());const gt={};V[0]&16384&&(gt.data=f[14]),ye.$set(gt),f[15]?Fe?(Fe.p(f,V),V[0]&32768&&S(Fe,1)):(Fe=l_(f),Fe.c(),S(Fe,1),Fe.m(_t.parentNode,_t)):Fe&&(_e(),g(Fe,1,1,()=>{Fe=null}),oe());const At={};V[0]&32768&&(At.data=f[15]),V[3]&32768&&(At.$$scope={dirty:V,ctx:f}),st.$set(At)},i(f){nt||(S(je),S(xe),S(Le),S(Pe),S(De),S(ze),S(Ke),S(Me),S(Ge),S(He),S(Ye),S(qe),S(We),S(w.$$.fragment,f),S(O.$$.fragment,f),S(C.$$.fragment,f),S(L.$$.fragment,f),S(ie.$$.fragment,f),S(ee.$$.fragment,f),S(te.$$.fragment,f),S(Q),S(J.$$.fragment,f),S(Ae),S(ye.$$.fragment,f),S(Fe),S(st.$$.fragment,f),nt=!0)},o(f){g(je),g(xe),g(Le),g(Pe),g(De),g(ze),g(Ke),g(Me),g(Ge),g(He),g(Ye),g(qe),g(We),g(w.$$.fragment,f),g(O.$$.fragment,f),g(C.$$.fragment,f),g(L.$$.fragment,f),g(ie.$$.fragment,f),g(ee.$$.fragment,f),g(te.$$.fragment,f),g(Q),g(J.$$.fragment,f),g(Ae),g(ye.$$.fragment,f),g(Fe),g(st.$$.fragment,f),nt=!1},d(f){f&&(m(e),m(_),m(o),m(i),m(n),m(l),m(p),m(u),m(A),m(d),m(b),m(c),m(h),m(N),m(v),m(I),m(B),m(D),m(x),m(E),m(k),m(W),m($),m(R),m(re),m(Se),m(Ce),m(Ne),m(ne),m(et),m(_t)),tt&&tt.d(f),ut.d(f),m(s),m(t),Ze&&Ze.d(f),m(r),je&&je.d(f),xe&&xe.d(f),Le&&Le.d(f),Pe&&Pe.d(f),De&&De.d(f),ze&&ze.d(f),Ke&&Ke.d(f),Me&&Me.d(f),Ge&&Ge.d(f),He&&He.d(f),Ye&&Ye.d(f),qe&&qe.d(f),We&&We.d(f),F(w,f),F(O,f),F(C,f),F(L,f),F(ie,f),F(ee,f),F(te,f),Q&&Q.d(f),F(J,f),Ae&&Ae.d(f),F(ye,f),Fe&&Fe.d(f),F(st,f)}}}const Be={title:"Startin.lv startup database"};function Eu(a,e,s){let t,r;Oe(a,Sr,fe=>s(83,t=fe)),Oe(a,vr,fe=>s(88,r=fe));let{data:_}=e,{data:o={},customFormattingSettings:i,__db:n,inputs:l}=_;Jt(vr,r="6666cd76f96956469e7be39d750cc7d9",r);let p=Io(qt(l));er(p.subscribe(fe=>s(18,l=fe))),cs(Mo,{getCustomFormats:()=>i.customFormats||[]});const u=(fe,F_)=>Po(n.query,fe,{query_name:F_});Ro(u),t.params,$t(()=>!0);let A={initialData:void 0,initialError:void 0},d=Ue`WITH
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
SELECT * FROM enriched_source`,b=`WITH
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
SELECT * FROM enriched_source`;o.startups_data&&(o.startups_data instanceof Error?A.initialError=o.startups_data:A.initialData=o.startups_data,o.startups_columns&&(A.knownColumns=o.startups_columns));let c,h=!1;const N=Ve.createReactive({callback:fe=>{s(0,c=fe)},execFn:u},{id:"startups",...A});N(b,{noResolve:d,...A}),globalThis[Symbol.for("startups")]={get value(){return c}};let v={initialData:void 0,initialError:void 0},I=Ue`-- 1. solis: Datu transformācija no plata uz garu formātu (UNPIVOT)
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
-- 2. solis: LAG funkcijas pielietošana, lai iegūtu iepriekšējā gada datus
lagged_data AS (
  SELECT
    *,
    LAG(turnover) OVER w AS previous_turnover,
    LAG(profit) OVER w AS previous_profit,
    LAG(employees_gp) OVER w AS previous_employees_gp,
    LAG(total_budget_payments) OVER w AS previous_total_budget_payments,
    LAG(personal_income_tax) OVER w AS previous_personal_income_tax,
    LAG(social_security_payments) OVER w AS previous_social_security_payments
  FROM
    yearly_data
  WINDOW w AS (PARTITION BY slug ORDER BY year)
),
-- 3. solis: Gala rezultāta atlase un DELTA (starpības) aprēķināšana procentos
processed_data AS (
  SELECT
    brand_name,
    slug,
    year,
    turnover,
    profit,
    employees_gp,
    total_budget_payments,
    personal_income_tax,
    social_security_payments,
    CASE
      WHEN turnover IS NOT NULL AND previous_turnover IS NOT NULL AND previous_turnover != 0
      THEN (turnover - previous_turnover) * 100.0 / previous_turnover
      ELSE NULL
    END AS turnover_delta_percent,
    CASE
      WHEN profit IS NOT NULL AND previous_profit IS NOT NULL AND previous_profit != 0
      THEN (profit - previous_profit) * 100.0 / previous_profit
      ELSE NULL
    END AS profit_delta_percent,
    CASE
      WHEN employees_gp IS NOT NULL AND previous_employees_gp IS NOT NULL AND previous_employees_gp != 0
      THEN (employees_gp - previous_employees_gp) * 100.0 / previous_employees_gp
      ELSE NULL
    END AS employees_gp_delta_percent,
    CASE
      WHEN total_budget_payments IS NOT NULL AND previous_total_budget_payments IS NOT NULL AND previous_total_budget_payments != 0
      THEN (total_budget_payments - previous_total_budget_payments) * 100.0 / previous_total_budget_payments
      ELSE NULL
    END AS total_budget_payments_delta_percent,
    CASE
      WHEN personal_income_tax IS NOT NULL AND previous_personal_income_tax IS NOT NULL AND previous_personal_income_tax != 0
      THEN (personal_income_tax - previous_personal_income_tax) * 100.0 / previous_personal_income_tax
      ELSE NULL
    END AS personal_income_tax_delta_percent,
    CASE
      WHEN social_security_payments IS NOT NULL AND previous_social_security_payments IS NOT NULL AND previous_social_security_payments != 0
      THEN (social_security_payments - previous_social_security_payments) * 100.0 / previous_social_security_payments
      ELSE NULL
    END AS social_security_payments_delta_percent
  FROM
    lagged_data
)
SELECT
  *
FROM
  processed_data
ORDER BY
  slug,
  year DESC`,U=`-- 1. solis: Datu transformācija no plata uz garu formātu (UNPIVOT)
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
-- 2. solis: LAG funkcijas pielietošana, lai iegūtu iepriekšējā gada datus
lagged_data AS (
  SELECT
    *,
    LAG(turnover) OVER w AS previous_turnover,
    LAG(profit) OVER w AS previous_profit,
    LAG(employees_gp) OVER w AS previous_employees_gp,
    LAG(total_budget_payments) OVER w AS previous_total_budget_payments,
    LAG(personal_income_tax) OVER w AS previous_personal_income_tax,
    LAG(social_security_payments) OVER w AS previous_social_security_payments
  FROM
    yearly_data
  WINDOW w AS (PARTITION BY slug ORDER BY year)
),
-- 3. solis: Gala rezultāta atlase un DELTA (starpības) aprēķināšana procentos
processed_data AS (
  SELECT
    brand_name,
    slug,
    year,
    turnover,
    profit,
    employees_gp,
    total_budget_payments,
    personal_income_tax,
    social_security_payments,
    CASE
      WHEN turnover IS NOT NULL AND previous_turnover IS NOT NULL AND previous_turnover != 0
      THEN (turnover - previous_turnover) * 100.0 / previous_turnover
      ELSE NULL
    END AS turnover_delta_percent,
    CASE
      WHEN profit IS NOT NULL AND previous_profit IS NOT NULL AND previous_profit != 0
      THEN (profit - previous_profit) * 100.0 / previous_profit
      ELSE NULL
    END AS profit_delta_percent,
    CASE
      WHEN employees_gp IS NOT NULL AND previous_employees_gp IS NOT NULL AND previous_employees_gp != 0
      THEN (employees_gp - previous_employees_gp) * 100.0 / previous_employees_gp
      ELSE NULL
    END AS employees_gp_delta_percent,
    CASE
      WHEN total_budget_payments IS NOT NULL AND previous_total_budget_payments IS NOT NULL AND previous_total_budget_payments != 0
      THEN (total_budget_payments - previous_total_budget_payments) * 100.0 / previous_total_budget_payments
      ELSE NULL
    END AS total_budget_payments_delta_percent,
    CASE
      WHEN personal_income_tax IS NOT NULL AND previous_personal_income_tax IS NOT NULL AND previous_personal_income_tax != 0
      THEN (personal_income_tax - previous_personal_income_tax) * 100.0 / previous_personal_income_tax
      ELSE NULL
    END AS personal_income_tax_delta_percent,
    CASE
      WHEN social_security_payments IS NOT NULL AND previous_social_security_payments IS NOT NULL AND previous_social_security_payments != 0
      THEN (social_security_payments - previous_social_security_payments) * 100.0 / previous_social_security_payments
      ELSE NULL
    END AS social_security_payments_delta_percent
  FROM
    lagged_data
)
SELECT
  *
FROM
  processed_data
ORDER BY
  slug,
  year DESC`;o.startup_overview_data&&(o.startup_overview_data instanceof Error?v.initialError=o.startup_overview_data:v.initialData=o.startup_overview_data,o.startup_overview_columns&&(v.knownColumns=o.startup_overview_columns));let B,w=!1;const D=Ve.createReactive({callback:fe=>{s(1,B=fe)},execFn:u},{id:"startup_overview",...v});D(U,{noResolve:I,...v}),globalThis[Symbol.for("startup_overview")]={get value(){return B}};let O={initialData:void 0,initialError:void 0},x=Ue`WITH all_business_models AS (
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
  all_business_models`,C=`WITH all_business_models AS (
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
  all_business_models`;o.business_models_data&&(o.business_models_data instanceof Error?O.initialError=o.business_models_data:O.initialData=o.business_models_data,o.business_models_columns&&(O.knownColumns=o.business_models_columns));let E,L=!1;const k=Ve.createReactive({callback:fe=>{s(2,E=fe)},execFn:u},{id:"business_models",...O});k(C,{noResolve:x,...O}),globalThis[Symbol.for("business_models")]={get value(){return E}};let W={initialData:void 0,initialError:void 0},j=Ue`WITH all_sectors AS (
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
  all_sectors`;o.sectors_data&&(o.sectors_data instanceof Error?W.initialError=o.sectors_data:W.initialData=o.sectors_data,o.sectors_columns&&(W.knownColumns=o.sectors_columns));let ie,R=!1;const ee=Ve.createReactive({callback:fe=>{s(3,ie=fe)},execFn:u},{id:"sectors",...W});ee($,{noResolve:j,...W}),globalThis[Symbol.for("sectors")]={get value(){return ie}};let re={initialData:void 0,initialError:void 0},te=Ue`SELECT
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
  founded_year ASC`,Se=`SELECT
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
  founded_year ASC`;o.founding_year_overview_data&&(o.founding_year_overview_data instanceof Error?re.initialError=o.founding_year_overview_data:re.initialData=o.founding_year_overview_data,o.founding_year_overview_columns&&(re.knownColumns=o.founding_year_overview_columns));let Ce,J=!1;const Ne=Ve.createReactive({callback:fe=>{s(4,Ce=fe)},execFn:u},{id:"founding_year_overview",...re});Ne(Se,{noResolve:te,...re}),globalThis[Symbol.for("founding_year_overview")]={get value(){return Ce}};let ne={initialData:void 0,initialError:void 0},ye=Ue`SELECT
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
  business_models`,et=`SELECT
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
  business_models`;o.software_hardware_split_data&&(o.software_hardware_split_data instanceof Error?ne.initialError=o.software_hardware_split_data:ne.initialData=o.software_hardware_split_data,o.software_hardware_split_columns&&(ne.knownColumns=o.software_hardware_split_columns));let _t,st=!1;const nt=Ve.createReactive({callback:fe=>{s(5,_t=fe)},execFn:u},{id:"software_hardware_split",...ne});nt(et,{noResolve:ye,...ne}),globalThis[Symbol.for("software_hardware_split")]={get value(){return _t}};let tt={initialData:void 0,initialError:void 0},it=Ue`WITH data AS (
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
  data`,bt=`WITH data AS (
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
  data`;o.startup_aggregate_data_data&&(o.startup_aggregate_data_data instanceof Error?tt.initialError=o.startup_aggregate_data_data:tt.initialData=o.startup_aggregate_data_data,o.startup_aggregate_data_columns&&(tt.knownColumns=o.startup_aggregate_data_columns));let ut,Ze=!1;const je=Ve.createReactive({callback:fe=>{s(6,ut=fe)},execFn:u},{id:"startup_aggregate_data",...tt});je(bt,{noResolve:it,...tt}),globalThis[Symbol.for("startup_aggregate_data")]={get value(){return ut}};let xe={initialData:void 0,initialError:void 0},Le=Ue`SELECT
  CASE
    WHEN list_contains(business_models, 'B2B2C') THEN 'B2B2C'
    WHEN list_contains(business_models, 'B2B') THEN 'B2B'
    WHEN list_contains(business_models, 'B2C') THEN 'B2C'
    ELSE 'Other'
  END AS name,
  COUNT(*) AS value
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
  CASE
    WHEN list_contains(business_models, 'B2B2C') THEN 'B2B2C'
    WHEN list_contains(business_models, 'B2B') THEN 'B2B'
    WHEN list_contains(business_models, 'B2C') THEN 'B2C'
    ELSE 'Other'
  END
ORDER BY
  value DESC`,Pe=`SELECT
  CASE
    WHEN list_contains(business_models, 'B2B2C') THEN 'B2B2C'
    WHEN list_contains(business_models, 'B2B') THEN 'B2B'
    WHEN list_contains(business_models, 'B2C') THEN 'B2C'
    ELSE 'Other'
  END AS name,
  COUNT(*) AS value
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
  CASE
    WHEN list_contains(business_models, 'B2B2C') THEN 'B2B2C'
    WHEN list_contains(business_models, 'B2B') THEN 'B2B'
    WHEN list_contains(business_models, 'B2C') THEN 'B2C'
    ELSE 'Other'
  END
ORDER BY
  value DESC`;o.startups_by_business_model_data&&(o.startups_by_business_model_data instanceof Error?xe.initialError=o.startups_by_business_model_data:xe.initialData=o.startups_by_business_model_data,o.startups_by_business_model_columns&&(xe.knownColumns=o.startups_by_business_model_columns));let De,ze=!1;const Ke=Ve.createReactive({callback:fe=>{s(7,De=fe)},execFn:u},{id:"startups_by_business_model",...xe});Ke(Pe,{noResolve:Le,...xe}),globalThis[Symbol.for("startups_by_business_model")]={get value(){return De}};let Me={initialData:void 0,initialError:void 0},Ge=Ue`SELECT
  sectors AS name,
  COUNT(*) AS value
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
  sectors
ORDER BY
  value DESC`,He=`SELECT
  sectors AS name,
  COUNT(*) AS value
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
  sectors
ORDER BY
  value DESC`;o.startups_by_sector_data&&(o.startups_by_sector_data instanceof Error?Me.initialError=o.startups_by_sector_data:Me.initialData=o.startups_by_sector_data,o.startups_by_sector_columns&&(Me.knownColumns=o.startups_by_sector_columns));let Ye,qe=!1;const We=Ve.createReactive({callback:fe=>{s(8,Ye=fe)},execFn:u},{id:"startups_by_sector",...Me});We(He,{noResolve:Ge,...Me}),globalThis[Symbol.for("startups_by_sector")]={get value(){return Ye}};let Q={initialData:void 0,initialError:void 0},Ae=Ue`SELECT
  'AI' AS name,
  COUNT(*) AS value
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
  is_ai
UNION ALL
SELECT
  'Non-AI' AS name,
  COUNT(*) AS value
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
  NOT is_ai`,Fe=`SELECT
  'AI' AS name,
  COUNT(*) AS value
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
  is_ai
UNION ALL
SELECT
  'Non-AI' AS name,
  COUNT(*) AS value
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
  NOT is_ai`;o.ai_startups_data&&(o.ai_startups_data instanceof Error?Q.initialError=o.ai_startups_data:Q.initialData=o.ai_startups_data,o.ai_startups_columns&&(Q.knownColumns=o.ai_startups_columns));let f,V=!1;const Pt=Ve.createReactive({callback:fe=>{s(9,f=fe)},execFn:u},{id:"ai_startups",...Q});Pt(Fe,{noResolve:Ae,...Q}),globalThis[Symbol.for("ai_startups")]={get value(){return f}};let mt={initialData:void 0,initialError:void 0},ct=Ue`SELECT
  'Marketplace' AS name,
  COUNT(*) AS value
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
  is_marketplace
UNION ALL
SELECT
  'Non-Marketplace' AS name,
  COUNT(*) AS value
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
  NOT is_marketplace`,ht=`SELECT
  'Marketplace' AS name,
  COUNT(*) AS value
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
  is_marketplace
UNION ALL
SELECT
  'Non-Marketplace' AS name,
  COUNT(*) AS value
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
  NOT is_marketplace`;o.marketplace_startups_data&&(o.marketplace_startups_data instanceof Error?mt.initialError=o.marketplace_startups_data:mt.initialData=o.marketplace_startups_data,o.marketplace_startups_columns&&(mt.knownColumns=o.marketplace_startups_columns));let zt,Ht=!1;const Vt=Ve.createReactive({callback:fe=>{s(10,zt=fe)},execFn:u},{id:"marketplace_startups",...mt});Vt(ht,{noResolve:ct,...mt}),globalThis[Symbol.for("marketplace_startups")]={get value(){return zt}};let gt={initialData:void 0,initialError:void 0},At=Ue`WITH sector_counts AS (
  SELECT
    sector,
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
SELECT * FROM enriched_source),
    UNNEST(sectors) AS t(sector)
  GROUP BY
    sector
),
ranked_sectors AS (
  SELECT
    sector,
    startup_count,
    ROW_NUMBER() OVER (ORDER BY startup_count DESC) AS rank
  FROM
    sector_counts
)
SELECT
  sector AS name,
  startup_count AS value
FROM
  ranked_sectors
-- WHERE
--   rank <= 10
ORDER BY
  startup_count DESC`,ts=`WITH sector_counts AS (
  SELECT
    sector,
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
SELECT * FROM enriched_source),
    UNNEST(sectors) AS t(sector)
  GROUP BY
    sector
),
ranked_sectors AS (
  SELECT
    sector,
    startup_count,
    ROW_NUMBER() OVER (ORDER BY startup_count DESC) AS rank
  FROM
    sector_counts
)
SELECT
  sector AS name,
  startup_count AS value
FROM
  ranked_sectors
-- WHERE
--   rank <= 10
ORDER BY
  startup_count DESC`;o.startups_by_10_biggest_sectors_data&&(o.startups_by_10_biggest_sectors_data instanceof Error?gt.initialError=o.startups_by_10_biggest_sectors_data:gt.initialData=o.startups_by_10_biggest_sectors_data,o.startups_by_10_biggest_sectors_columns&&(gt.knownColumns=o.startups_by_10_biggest_sectors_columns));let Is,Rs=!1;const js=Ve.createReactive({callback:fe=>{s(11,Is=fe)},execFn:u},{id:"startups_by_10_biggest_sectors",...gt});js(ts,{noResolve:At,...gt}),globalThis[Symbol.for("startups_by_10_biggest_sectors")]={get value(){return Is}};let Ct={initialData:void 0,initialError:void 0},Dt=Ue`SELECT
  CASE
    WHEN list_contains(software_hardware_tags, 'Hardware') AND list_contains(software_hardware_tags, 'Software') THEN 'Both'
    WHEN list_contains(software_hardware_tags, 'Hardware') THEN 'Hardware'
    WHEN list_contains(software_hardware_tags, 'Software') THEN 'Software'
    ELSE 'Unknown'
  END AS name,
  COUNT(*) AS value
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
  CASE
    WHEN list_contains(software_hardware_tags, 'Hardware') AND list_contains(software_hardware_tags, 'Software') THEN 'Both'
    WHEN list_contains(software_hardware_tags, 'Hardware') THEN 'Hardware'
    WHEN list_contains(software_hardware_tags, 'Software') THEN 'Software'
    ELSE 'Unknown'
  END
ORDER BY
  value DESC`,ss=`SELECT
  CASE
    WHEN list_contains(software_hardware_tags, 'Hardware') AND list_contains(software_hardware_tags, 'Software') THEN 'Both'
    WHEN list_contains(software_hardware_tags, 'Hardware') THEN 'Hardware'
    WHEN list_contains(software_hardware_tags, 'Software') THEN 'Software'
    ELSE 'Unknown'
  END AS name,
  COUNT(*) AS value
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
  CASE
    WHEN list_contains(software_hardware_tags, 'Hardware') AND list_contains(software_hardware_tags, 'Software') THEN 'Both'
    WHEN list_contains(software_hardware_tags, 'Hardware') THEN 'Hardware'
    WHEN list_contains(software_hardware_tags, 'Software') THEN 'Software'
    ELSE 'Unknown'
  END
ORDER BY
  value DESC`;o.startups_by_hardware_software_data&&(o.startups_by_hardware_software_data instanceof Error?Ct.initialError=o.startups_by_hardware_software_data:Ct.initialData=o.startups_by_hardware_software_data,o.startups_by_hardware_software_columns&&(Ct.knownColumns=o.startups_by_hardware_software_columns));let Ms,Gs=!1;const Fs=Ve.createReactive({callback:fe=>{s(12,Ms=fe)},execFn:u},{id:"startups_by_hardware_software",...Ct});Fs(ss,{noResolve:Dt,...Ct}),globalThis[Symbol.for("startups_by_hardware_software")]={get value(){return Ms}};let Ot={initialData:void 0,initialError:void 0},xt=Ue`SELECT DISTINCT
  year
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
-- 2. solis: LAG funkcijas pielietošana, lai iegūtu iepriekšējā gada datus
lagged_data AS (
  SELECT
    *,
    LAG(turnover) OVER w AS previous_turnover,
    LAG(profit) OVER w AS previous_profit,
    LAG(employees_gp) OVER w AS previous_employees_gp,
    LAG(total_budget_payments) OVER w AS previous_total_budget_payments,
    LAG(personal_income_tax) OVER w AS previous_personal_income_tax,
    LAG(social_security_payments) OVER w AS previous_social_security_payments
  FROM
    yearly_data
  WINDOW w AS (PARTITION BY slug ORDER BY year)
),
-- 3. solis: Gala rezultāta atlase un DELTA (starpības) aprēķināšana procentos
processed_data AS (
  SELECT
    brand_name,
    slug,
    year,
    turnover,
    profit,
    employees_gp,
    total_budget_payments,
    personal_income_tax,
    social_security_payments,
    CASE
      WHEN turnover IS NOT NULL AND previous_turnover IS NOT NULL AND previous_turnover != 0
      THEN (turnover - previous_turnover) * 100.0 / previous_turnover
      ELSE NULL
    END AS turnover_delta_percent,
    CASE
      WHEN profit IS NOT NULL AND previous_profit IS NOT NULL AND previous_profit != 0
      THEN (profit - previous_profit) * 100.0 / previous_profit
      ELSE NULL
    END AS profit_delta_percent,
    CASE
      WHEN employees_gp IS NOT NULL AND previous_employees_gp IS NOT NULL AND previous_employees_gp != 0
      THEN (employees_gp - previous_employees_gp) * 100.0 / previous_employees_gp
      ELSE NULL
    END AS employees_gp_delta_percent,
    CASE
      WHEN total_budget_payments IS NOT NULL AND previous_total_budget_payments IS NOT NULL AND previous_total_budget_payments != 0
      THEN (total_budget_payments - previous_total_budget_payments) * 100.0 / previous_total_budget_payments
      ELSE NULL
    END AS total_budget_payments_delta_percent,
    CASE
      WHEN personal_income_tax IS NOT NULL AND previous_personal_income_tax IS NOT NULL AND previous_personal_income_tax != 0
      THEN (personal_income_tax - previous_personal_income_tax) * 100.0 / previous_personal_income_tax
      ELSE NULL
    END AS personal_income_tax_delta_percent,
    CASE
      WHEN social_security_payments IS NOT NULL AND previous_social_security_payments IS NOT NULL AND previous_social_security_payments != 0
      THEN (social_security_payments - previous_social_security_payments) * 100.0 / previous_social_security_payments
      ELSE NULL
    END AS social_security_payments_delta_percent
  FROM
    lagged_data
)
SELECT
  *
FROM
  processed_data
ORDER BY
  slug,
  year DESC)
WHERE
  year >= 2022
ORDER BY
  year DESC`,rs=`SELECT DISTINCT
  year
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
-- 2. solis: LAG funkcijas pielietošana, lai iegūtu iepriekšējā gada datus
lagged_data AS (
  SELECT
    *,
    LAG(turnover) OVER w AS previous_turnover,
    LAG(profit) OVER w AS previous_profit,
    LAG(employees_gp) OVER w AS previous_employees_gp,
    LAG(total_budget_payments) OVER w AS previous_total_budget_payments,
    LAG(personal_income_tax) OVER w AS previous_personal_income_tax,
    LAG(social_security_payments) OVER w AS previous_social_security_payments
  FROM
    yearly_data
  WINDOW w AS (PARTITION BY slug ORDER BY year)
),
-- 3. solis: Gala rezultāta atlase un DELTA (starpības) aprēķināšana procentos
processed_data AS (
  SELECT
    brand_name,
    slug,
    year,
    turnover,
    profit,
    employees_gp,
    total_budget_payments,
    personal_income_tax,
    social_security_payments,
    CASE
      WHEN turnover IS NOT NULL AND previous_turnover IS NOT NULL AND previous_turnover != 0
      THEN (turnover - previous_turnover) * 100.0 / previous_turnover
      ELSE NULL
    END AS turnover_delta_percent,
    CASE
      WHEN profit IS NOT NULL AND previous_profit IS NOT NULL AND previous_profit != 0
      THEN (profit - previous_profit) * 100.0 / previous_profit
      ELSE NULL
    END AS profit_delta_percent,
    CASE
      WHEN employees_gp IS NOT NULL AND previous_employees_gp IS NOT NULL AND previous_employees_gp != 0
      THEN (employees_gp - previous_employees_gp) * 100.0 / previous_employees_gp
      ELSE NULL
    END AS employees_gp_delta_percent,
    CASE
      WHEN total_budget_payments IS NOT NULL AND previous_total_budget_payments IS NOT NULL AND previous_total_budget_payments != 0
      THEN (total_budget_payments - previous_total_budget_payments) * 100.0 / previous_total_budget_payments
      ELSE NULL
    END AS total_budget_payments_delta_percent,
    CASE
      WHEN personal_income_tax IS NOT NULL AND previous_personal_income_tax IS NOT NULL AND previous_personal_income_tax != 0
      THEN (personal_income_tax - previous_personal_income_tax) * 100.0 / previous_personal_income_tax
      ELSE NULL
    END AS personal_income_tax_delta_percent,
    CASE
      WHEN social_security_payments IS NOT NULL AND previous_social_security_payments IS NOT NULL AND previous_social_security_payments != 0
      THEN (social_security_payments - previous_social_security_payments) * 100.0 / previous_social_security_payments
      ELSE NULL
    END AS social_security_payments_delta_percent
  FROM
    lagged_data
)
SELECT
  *
FROM
  processed_data
ORDER BY
  slug,
  year DESC)
WHERE
  year >= 2022
ORDER BY
  year DESC`;o.dropdown_years_data&&(o.dropdown_years_data instanceof Error?Ot.initialError=o.dropdown_years_data:Ot.initialData=o.dropdown_years_data,o.dropdown_years_columns&&(Ot.knownColumns=o.dropdown_years_columns));let Ps,zs=!1;const Hs=Ve.createReactive({callback:fe=>{s(13,Ps=fe)},execFn:u},{id:"dropdown_years",...Ot});Hs(rs,{noResolve:xt,...Ot}),globalThis[Symbol.for("dropdown_years")]={get value(){return Ps}};let Ut={initialData:void 0,initialError:void 0},Nt=Ue`SELECT
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
-- 2. solis: LAG funkcijas pielietošana, lai iegūtu iepriekšējā gada datus
lagged_data AS (
  SELECT
    *,
    LAG(turnover) OVER w AS previous_turnover,
    LAG(profit) OVER w AS previous_profit,
    LAG(employees_gp) OVER w AS previous_employees_gp,
    LAG(total_budget_payments) OVER w AS previous_total_budget_payments,
    LAG(personal_income_tax) OVER w AS previous_personal_income_tax,
    LAG(social_security_payments) OVER w AS previous_social_security_payments
  FROM
    yearly_data
  WINDOW w AS (PARTITION BY slug ORDER BY year)
),
-- 3. solis: Gala rezultāta atlase un DELTA (starpības) aprēķināšana procentos
processed_data AS (
  SELECT
    brand_name,
    slug,
    year,
    turnover,
    profit,
    employees_gp,
    total_budget_payments,
    personal_income_tax,
    social_security_payments,
    CASE
      WHEN turnover IS NOT NULL AND previous_turnover IS NOT NULL AND previous_turnover != 0
      THEN (turnover - previous_turnover) * 100.0 / previous_turnover
      ELSE NULL
    END AS turnover_delta_percent,
    CASE
      WHEN profit IS NOT NULL AND previous_profit IS NOT NULL AND previous_profit != 0
      THEN (profit - previous_profit) * 100.0 / previous_profit
      ELSE NULL
    END AS profit_delta_percent,
    CASE
      WHEN employees_gp IS NOT NULL AND previous_employees_gp IS NOT NULL AND previous_employees_gp != 0
      THEN (employees_gp - previous_employees_gp) * 100.0 / previous_employees_gp
      ELSE NULL
    END AS employees_gp_delta_percent,
    CASE
      WHEN total_budget_payments IS NOT NULL AND previous_total_budget_payments IS NOT NULL AND previous_total_budget_payments != 0
      THEN (total_budget_payments - previous_total_budget_payments) * 100.0 / previous_total_budget_payments
      ELSE NULL
    END AS total_budget_payments_delta_percent,
    CASE
      WHEN personal_income_tax IS NOT NULL AND previous_personal_income_tax IS NOT NULL AND previous_personal_income_tax != 0
      THEN (personal_income_tax - previous_personal_income_tax) * 100.0 / previous_personal_income_tax
      ELSE NULL
    END AS personal_income_tax_delta_percent,
    CASE
      WHEN social_security_payments IS NOT NULL AND previous_social_security_payments IS NOT NULL AND previous_social_security_payments != 0
      THEN (social_security_payments - previous_social_security_payments) * 100.0 / previous_social_security_payments
      ELSE NULL
    END AS social_security_payments_delta_percent
  FROM
    lagged_data
)
SELECT
  *
FROM
  processed_data
ORDER BY
  slug,
  year DESC)
WHERE
  year = ${l.dropdown_years.value}`,as=`SELECT
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
-- 2. solis: LAG funkcijas pielietošana, lai iegūtu iepriekšējā gada datus
lagged_data AS (
  SELECT
    *,
    LAG(turnover) OVER w AS previous_turnover,
    LAG(profit) OVER w AS previous_profit,
    LAG(employees_gp) OVER w AS previous_employees_gp,
    LAG(total_budget_payments) OVER w AS previous_total_budget_payments,
    LAG(personal_income_tax) OVER w AS previous_personal_income_tax,
    LAG(social_security_payments) OVER w AS previous_social_security_payments
  FROM
    yearly_data
  WINDOW w AS (PARTITION BY slug ORDER BY year)
),
-- 3. solis: Gala rezultāta atlase un DELTA (starpības) aprēķināšana procentos
processed_data AS (
  SELECT
    brand_name,
    slug,
    year,
    turnover,
    profit,
    employees_gp,
    total_budget_payments,
    personal_income_tax,
    social_security_payments,
    CASE
      WHEN turnover IS NOT NULL AND previous_turnover IS NOT NULL AND previous_turnover != 0
      THEN (turnover - previous_turnover) * 100.0 / previous_turnover
      ELSE NULL
    END AS turnover_delta_percent,
    CASE
      WHEN profit IS NOT NULL AND previous_profit IS NOT NULL AND previous_profit != 0
      THEN (profit - previous_profit) * 100.0 / previous_profit
      ELSE NULL
    END AS profit_delta_percent,
    CASE
      WHEN employees_gp IS NOT NULL AND previous_employees_gp IS NOT NULL AND previous_employees_gp != 0
      THEN (employees_gp - previous_employees_gp) * 100.0 / previous_employees_gp
      ELSE NULL
    END AS employees_gp_delta_percent,
    CASE
      WHEN total_budget_payments IS NOT NULL AND previous_total_budget_payments IS NOT NULL AND previous_total_budget_payments != 0
      THEN (total_budget_payments - previous_total_budget_payments) * 100.0 / previous_total_budget_payments
      ELSE NULL
    END AS total_budget_payments_delta_percent,
    CASE
      WHEN personal_income_tax IS NOT NULL AND previous_personal_income_tax IS NOT NULL AND previous_personal_income_tax != 0
      THEN (personal_income_tax - previous_personal_income_tax) * 100.0 / previous_personal_income_tax
      ELSE NULL
    END AS personal_income_tax_delta_percent,
    CASE
      WHEN social_security_payments IS NOT NULL AND previous_social_security_payments IS NOT NULL AND previous_social_security_payments != 0
      THEN (social_security_payments - previous_social_security_payments) * 100.0 / previous_social_security_payments
      ELSE NULL
    END AS social_security_payments_delta_percent
  FROM
    lagged_data
)
SELECT
  *
FROM
  processed_data
ORDER BY
  slug,
  year DESC)
WHERE
  year = ${l.dropdown_years.value}`;o.max_employees_data&&(o.max_employees_data instanceof Error?Ut.initialError=o.max_employees_data:Ut.initialData=o.max_employees_data,o.max_employees_columns&&(Ut.knownColumns=o.max_employees_columns));let Vs,Ws=!1;const Ks=Ve.createReactive({callback:fe=>{s(14,Vs=fe)},execFn:u},{id:"max_employees",...Ut});Ks(as,{noResolve:Nt,...Ut}),globalThis[Symbol.for("max_employees")]={get value(){return Vs}};let Bt={initialData:void 0,initialError:void 0},wt=Ue`SELECT
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
-- 2. solis: LAG funkcijas pielietošana, lai iegūtu iepriekšējā gada datus
lagged_data AS (
  SELECT
    *,
    LAG(turnover) OVER w AS previous_turnover,
    LAG(profit) OVER w AS previous_profit,
    LAG(employees_gp) OVER w AS previous_employees_gp,
    LAG(total_budget_payments) OVER w AS previous_total_budget_payments,
    LAG(personal_income_tax) OVER w AS previous_personal_income_tax,
    LAG(social_security_payments) OVER w AS previous_social_security_payments
  FROM
    yearly_data
  WINDOW w AS (PARTITION BY slug ORDER BY year)
),
-- 3. solis: Gala rezultāta atlase un DELTA (starpības) aprēķināšana procentos
processed_data AS (
  SELECT
    brand_name,
    slug,
    year,
    turnover,
    profit,
    employees_gp,
    total_budget_payments,
    personal_income_tax,
    social_security_payments,
    CASE
      WHEN turnover IS NOT NULL AND previous_turnover IS NOT NULL AND previous_turnover != 0
      THEN (turnover - previous_turnover) * 100.0 / previous_turnover
      ELSE NULL
    END AS turnover_delta_percent,
    CASE
      WHEN profit IS NOT NULL AND previous_profit IS NOT NULL AND previous_profit != 0
      THEN (profit - previous_profit) * 100.0 / previous_profit
      ELSE NULL
    END AS profit_delta_percent,
    CASE
      WHEN employees_gp IS NOT NULL AND previous_employees_gp IS NOT NULL AND previous_employees_gp != 0
      THEN (employees_gp - previous_employees_gp) * 100.0 / previous_employees_gp
      ELSE NULL
    END AS employees_gp_delta_percent,
    CASE
      WHEN total_budget_payments IS NOT NULL AND previous_total_budget_payments IS NOT NULL AND previous_total_budget_payments != 0
      THEN (total_budget_payments - previous_total_budget_payments) * 100.0 / previous_total_budget_payments
      ELSE NULL
    END AS total_budget_payments_delta_percent,
    CASE
      WHEN personal_income_tax IS NOT NULL AND previous_personal_income_tax IS NOT NULL AND previous_personal_income_tax != 0
      THEN (personal_income_tax - previous_personal_income_tax) * 100.0 / previous_personal_income_tax
      ELSE NULL
    END AS personal_income_tax_delta_percent,
    CASE
      WHEN social_security_payments IS NOT NULL AND previous_social_security_payments IS NOT NULL AND previous_social_security_payments != 0
      THEN (social_security_payments - previous_social_security_payments) * 100.0 / previous_social_security_payments
      ELSE NULL
    END AS social_security_payments_delta_percent
  FROM
    lagged_data
)
SELECT
  *
FROM
  processed_data
ORDER BY
  slug,
  year DESC)
WHERE
  year = ${l.dropdown_years.value}
  AND employees_gp >= ${l.employees}`,_s=`SELECT
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
-- 2. solis: LAG funkcijas pielietošana, lai iegūtu iepriekšējā gada datus
lagged_data AS (
  SELECT
    *,
    LAG(turnover) OVER w AS previous_turnover,
    LAG(profit) OVER w AS previous_profit,
    LAG(employees_gp) OVER w AS previous_employees_gp,
    LAG(total_budget_payments) OVER w AS previous_total_budget_payments,
    LAG(personal_income_tax) OVER w AS previous_personal_income_tax,
    LAG(social_security_payments) OVER w AS previous_social_security_payments
  FROM
    yearly_data
  WINDOW w AS (PARTITION BY slug ORDER BY year)
),
-- 3. solis: Gala rezultāta atlase un DELTA (starpības) aprēķināšana procentos
processed_data AS (
  SELECT
    brand_name,
    slug,
    year,
    turnover,
    profit,
    employees_gp,
    total_budget_payments,
    personal_income_tax,
    social_security_payments,
    CASE
      WHEN turnover IS NOT NULL AND previous_turnover IS NOT NULL AND previous_turnover != 0
      THEN (turnover - previous_turnover) * 100.0 / previous_turnover
      ELSE NULL
    END AS turnover_delta_percent,
    CASE
      WHEN profit IS NOT NULL AND previous_profit IS NOT NULL AND previous_profit != 0
      THEN (profit - previous_profit) * 100.0 / previous_profit
      ELSE NULL
    END AS profit_delta_percent,
    CASE
      WHEN employees_gp IS NOT NULL AND previous_employees_gp IS NOT NULL AND previous_employees_gp != 0
      THEN (employees_gp - previous_employees_gp) * 100.0 / previous_employees_gp
      ELSE NULL
    END AS employees_gp_delta_percent,
    CASE
      WHEN total_budget_payments IS NOT NULL AND previous_total_budget_payments IS NOT NULL AND previous_total_budget_payments != 0
      THEN (total_budget_payments - previous_total_budget_payments) * 100.0 / previous_total_budget_payments
      ELSE NULL
    END AS total_budget_payments_delta_percent,
    CASE
      WHEN personal_income_tax IS NOT NULL AND previous_personal_income_tax IS NOT NULL AND previous_personal_income_tax != 0
      THEN (personal_income_tax - previous_personal_income_tax) * 100.0 / previous_personal_income_tax
      ELSE NULL
    END AS personal_income_tax_delta_percent,
    CASE
      WHEN social_security_payments IS NOT NULL AND previous_social_security_payments IS NOT NULL AND previous_social_security_payments != 0
      THEN (social_security_payments - previous_social_security_payments) * 100.0 / previous_social_security_payments
      ELSE NULL
    END AS social_security_payments_delta_percent
  FROM
    lagged_data
)
SELECT
  *
FROM
  processed_data
ORDER BY
  slug,
  year DESC)
WHERE
  year = ${l.dropdown_years.value}
  AND employees_gp >= ${l.employees}`;o.startup_overview_filtered_data&&(o.startup_overview_filtered_data instanceof Error?Bt.initialError=o.startup_overview_filtered_data:Bt.initialData=o.startup_overview_filtered_data,o.startup_overview_filtered_columns&&(Bt.knownColumns=o.startup_overview_filtered_columns));let Ys,qs=!1;const Xs=Ve.createReactive({callback:fe=>{s(15,Ys=fe)},execFn:u},{id:"startup_overview_filtered",...Bt});return Xs(_s,{noResolve:wt,...Bt}),globalThis[Symbol.for("startup_overview_filtered")]={get value(){return Ys}},a.$$set=fe=>{"data"in fe&&s(16,_=fe.data)},a.$$.update=()=>{a.$$.dirty[0]&65536&&s(17,{data:o={},customFormattingSettings:i,__db:n}=_,o),a.$$.dirty[0]&131072&&jo.set(Object.keys(o).length>0),a.$$.dirty[2]&2097152&&t.params,a.$$.dirty[0]&7864320&&(d||!h?d||(N(b,{noResolve:d,...A}),s(22,h=!0)):N(b,{noResolve:d})),a.$$.dirty[0]&125829120&&(I||!w?I||(D(U,{noResolve:I,...v}),s(26,w=!0)):D(U,{noResolve:I})),a.$$.dirty[0]&2013265920&&(x||!L?x||(k(C,{noResolve:x,...O}),s(30,L=!0)):k(C,{noResolve:x})),a.$$.dirty[1]&15&&(j||!R?j||(ee($,{noResolve:j,...W}),s(34,R=!0)):ee($,{noResolve:j})),a.$$.dirty[1]&240&&(te||!J?te||(Ne(Se,{noResolve:te,...re}),s(38,J=!0)):Ne(Se,{noResolve:te})),a.$$.dirty[1]&3840&&(ye||!st?ye||(nt(et,{noResolve:ye,...ne}),s(42,st=!0)):nt(et,{noResolve:ye})),a.$$.dirty[1]&61440&&(it||!Ze?it||(je(bt,{noResolve:it,...tt}),s(46,Ze=!0)):je(bt,{noResolve:it})),a.$$.dirty[1]&983040&&(Le||!ze?Le||(Ke(Pe,{noResolve:Le,...xe}),s(50,ze=!0)):Ke(Pe,{noResolve:Le})),a.$$.dirty[1]&15728640&&(Ge||!qe?Ge||(We(He,{noResolve:Ge,...Me}),s(54,qe=!0)):We(He,{noResolve:Ge})),a.$$.dirty[1]&251658240&&(Ae||!V?Ae||(Pt(Fe,{noResolve:Ae,...Q}),s(58,V=!0)):Pt(Fe,{noResolve:Ae})),a.$$.dirty[1]&1879048192|a.$$.dirty[2]&1&&(ct||!Ht?ct||(Vt(ht,{noResolve:ct,...mt}),s(62,Ht=!0)):Vt(ht,{noResolve:ct})),a.$$.dirty[2]&30&&(At||!Rs?At||(js(ts,{noResolve:At,...gt}),s(66,Rs=!0)):js(ts,{noResolve:At})),a.$$.dirty[2]&480&&(Dt||!Gs?Dt||(Fs(ss,{noResolve:Dt,...Ct}),s(70,Gs=!0)):Fs(ss,{noResolve:Dt})),a.$$.dirty[2]&7680&&(xt||!zs?xt||(Hs(rs,{noResolve:xt,...Ot}),s(74,zs=!0)):Hs(rs,{noResolve:xt})),a.$$.dirty[0]&262144&&s(76,Nt=Ue`SELECT
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
-- 2. solis: LAG funkcijas pielietošana, lai iegūtu iepriekšējā gada datus
lagged_data AS (
  SELECT
    *,
    LAG(turnover) OVER w AS previous_turnover,
    LAG(profit) OVER w AS previous_profit,
    LAG(employees_gp) OVER w AS previous_employees_gp,
    LAG(total_budget_payments) OVER w AS previous_total_budget_payments,
    LAG(personal_income_tax) OVER w AS previous_personal_income_tax,
    LAG(social_security_payments) OVER w AS previous_social_security_payments
  FROM
    yearly_data
  WINDOW w AS (PARTITION BY slug ORDER BY year)
),
-- 3. solis: Gala rezultāta atlase un DELTA (starpības) aprēķināšana procentos
processed_data AS (
  SELECT
    brand_name,
    slug,
    year,
    turnover,
    profit,
    employees_gp,
    total_budget_payments,
    personal_income_tax,
    social_security_payments,
    CASE
      WHEN turnover IS NOT NULL AND previous_turnover IS NOT NULL AND previous_turnover != 0
      THEN (turnover - previous_turnover) * 100.0 / previous_turnover
      ELSE NULL
    END AS turnover_delta_percent,
    CASE
      WHEN profit IS NOT NULL AND previous_profit IS NOT NULL AND previous_profit != 0
      THEN (profit - previous_profit) * 100.0 / previous_profit
      ELSE NULL
    END AS profit_delta_percent,
    CASE
      WHEN employees_gp IS NOT NULL AND previous_employees_gp IS NOT NULL AND previous_employees_gp != 0
      THEN (employees_gp - previous_employees_gp) * 100.0 / previous_employees_gp
      ELSE NULL
    END AS employees_gp_delta_percent,
    CASE
      WHEN total_budget_payments IS NOT NULL AND previous_total_budget_payments IS NOT NULL AND previous_total_budget_payments != 0
      THEN (total_budget_payments - previous_total_budget_payments) * 100.0 / previous_total_budget_payments
      ELSE NULL
    END AS total_budget_payments_delta_percent,
    CASE
      WHEN personal_income_tax IS NOT NULL AND previous_personal_income_tax IS NOT NULL AND previous_personal_income_tax != 0
      THEN (personal_income_tax - previous_personal_income_tax) * 100.0 / previous_personal_income_tax
      ELSE NULL
    END AS personal_income_tax_delta_percent,
    CASE
      WHEN social_security_payments IS NOT NULL AND previous_social_security_payments IS NOT NULL AND previous_social_security_payments != 0
      THEN (social_security_payments - previous_social_security_payments) * 100.0 / previous_social_security_payments
      ELSE NULL
    END AS social_security_payments_delta_percent
  FROM
    lagged_data
)
SELECT
  *
FROM
  processed_data
ORDER BY
  slug,
  year DESC)
WHERE
  year = ${l.dropdown_years.value}`),a.$$.dirty[0]&262144&&s(77,as=`SELECT
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
-- 2. solis: LAG funkcijas pielietošana, lai iegūtu iepriekšējā gada datus
lagged_data AS (
  SELECT
    *,
    LAG(turnover) OVER w AS previous_turnover,
    LAG(profit) OVER w AS previous_profit,
    LAG(employees_gp) OVER w AS previous_employees_gp,
    LAG(total_budget_payments) OVER w AS previous_total_budget_payments,
    LAG(personal_income_tax) OVER w AS previous_personal_income_tax,
    LAG(social_security_payments) OVER w AS previous_social_security_payments
  FROM
    yearly_data
  WINDOW w AS (PARTITION BY slug ORDER BY year)
),
-- 3. solis: Gala rezultāta atlase un DELTA (starpības) aprēķināšana procentos
processed_data AS (
  SELECT
    brand_name,
    slug,
    year,
    turnover,
    profit,
    employees_gp,
    total_budget_payments,
    personal_income_tax,
    social_security_payments,
    CASE
      WHEN turnover IS NOT NULL AND previous_turnover IS NOT NULL AND previous_turnover != 0
      THEN (turnover - previous_turnover) * 100.0 / previous_turnover
      ELSE NULL
    END AS turnover_delta_percent,
    CASE
      WHEN profit IS NOT NULL AND previous_profit IS NOT NULL AND previous_profit != 0
      THEN (profit - previous_profit) * 100.0 / previous_profit
      ELSE NULL
    END AS profit_delta_percent,
    CASE
      WHEN employees_gp IS NOT NULL AND previous_employees_gp IS NOT NULL AND previous_employees_gp != 0
      THEN (employees_gp - previous_employees_gp) * 100.0 / previous_employees_gp
      ELSE NULL
    END AS employees_gp_delta_percent,
    CASE
      WHEN total_budget_payments IS NOT NULL AND previous_total_budget_payments IS NOT NULL AND previous_total_budget_payments != 0
      THEN (total_budget_payments - previous_total_budget_payments) * 100.0 / previous_total_budget_payments
      ELSE NULL
    END AS total_budget_payments_delta_percent,
    CASE
      WHEN personal_income_tax IS NOT NULL AND previous_personal_income_tax IS NOT NULL AND previous_personal_income_tax != 0
      THEN (personal_income_tax - previous_personal_income_tax) * 100.0 / previous_personal_income_tax
      ELSE NULL
    END AS personal_income_tax_delta_percent,
    CASE
      WHEN social_security_payments IS NOT NULL AND previous_social_security_payments IS NOT NULL AND previous_social_security_payments != 0
      THEN (social_security_payments - previous_social_security_payments) * 100.0 / previous_social_security_payments
      ELSE NULL
    END AS social_security_payments_delta_percent
  FROM
    lagged_data
)
SELECT
  *
FROM
  processed_data
ORDER BY
  slug,
  year DESC)
WHERE
  year = ${l.dropdown_years.value}`),a.$$.dirty[2]&122880&&(Nt||!Ws?Nt||(Ks(as,{noResolve:Nt,...Ut}),s(78,Ws=!0)):Ks(as,{noResolve:Nt})),a.$$.dirty[0]&262144&&s(80,wt=Ue`SELECT
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
-- 2. solis: LAG funkcijas pielietošana, lai iegūtu iepriekšējā gada datus
lagged_data AS (
  SELECT
    *,
    LAG(turnover) OVER w AS previous_turnover,
    LAG(profit) OVER w AS previous_profit,
    LAG(employees_gp) OVER w AS previous_employees_gp,
    LAG(total_budget_payments) OVER w AS previous_total_budget_payments,
    LAG(personal_income_tax) OVER w AS previous_personal_income_tax,
    LAG(social_security_payments) OVER w AS previous_social_security_payments
  FROM
    yearly_data
  WINDOW w AS (PARTITION BY slug ORDER BY year)
),
-- 3. solis: Gala rezultāta atlase un DELTA (starpības) aprēķināšana procentos
processed_data AS (
  SELECT
    brand_name,
    slug,
    year,
    turnover,
    profit,
    employees_gp,
    total_budget_payments,
    personal_income_tax,
    social_security_payments,
    CASE
      WHEN turnover IS NOT NULL AND previous_turnover IS NOT NULL AND previous_turnover != 0
      THEN (turnover - previous_turnover) * 100.0 / previous_turnover
      ELSE NULL
    END AS turnover_delta_percent,
    CASE
      WHEN profit IS NOT NULL AND previous_profit IS NOT NULL AND previous_profit != 0
      THEN (profit - previous_profit) * 100.0 / previous_profit
      ELSE NULL
    END AS profit_delta_percent,
    CASE
      WHEN employees_gp IS NOT NULL AND previous_employees_gp IS NOT NULL AND previous_employees_gp != 0
      THEN (employees_gp - previous_employees_gp) * 100.0 / previous_employees_gp
      ELSE NULL
    END AS employees_gp_delta_percent,
    CASE
      WHEN total_budget_payments IS NOT NULL AND previous_total_budget_payments IS NOT NULL AND previous_total_budget_payments != 0
      THEN (total_budget_payments - previous_total_budget_payments) * 100.0 / previous_total_budget_payments
      ELSE NULL
    END AS total_budget_payments_delta_percent,
    CASE
      WHEN personal_income_tax IS NOT NULL AND previous_personal_income_tax IS NOT NULL AND previous_personal_income_tax != 0
      THEN (personal_income_tax - previous_personal_income_tax) * 100.0 / previous_personal_income_tax
      ELSE NULL
    END AS personal_income_tax_delta_percent,
    CASE
      WHEN social_security_payments IS NOT NULL AND previous_social_security_payments IS NOT NULL AND previous_social_security_payments != 0
      THEN (social_security_payments - previous_social_security_payments) * 100.0 / previous_social_security_payments
      ELSE NULL
    END AS social_security_payments_delta_percent
  FROM
    lagged_data
)
SELECT
  *
FROM
  processed_data
ORDER BY
  slug,
  year DESC)
WHERE
  year = ${l.dropdown_years.value}
  AND employees_gp >= ${l.employees}`),a.$$.dirty[0]&262144&&s(81,_s=`SELECT
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
-- 2. solis: LAG funkcijas pielietošana, lai iegūtu iepriekšējā gada datus
lagged_data AS (
  SELECT
    *,
    LAG(turnover) OVER w AS previous_turnover,
    LAG(profit) OVER w AS previous_profit,
    LAG(employees_gp) OVER w AS previous_employees_gp,
    LAG(total_budget_payments) OVER w AS previous_total_budget_payments,
    LAG(personal_income_tax) OVER w AS previous_personal_income_tax,
    LAG(social_security_payments) OVER w AS previous_social_security_payments
  FROM
    yearly_data
  WINDOW w AS (PARTITION BY slug ORDER BY year)
),
-- 3. solis: Gala rezultāta atlase un DELTA (starpības) aprēķināšana procentos
processed_data AS (
  SELECT
    brand_name,
    slug,
    year,
    turnover,
    profit,
    employees_gp,
    total_budget_payments,
    personal_income_tax,
    social_security_payments,
    CASE
      WHEN turnover IS NOT NULL AND previous_turnover IS NOT NULL AND previous_turnover != 0
      THEN (turnover - previous_turnover) * 100.0 / previous_turnover
      ELSE NULL
    END AS turnover_delta_percent,
    CASE
      WHEN profit IS NOT NULL AND previous_profit IS NOT NULL AND previous_profit != 0
      THEN (profit - previous_profit) * 100.0 / previous_profit
      ELSE NULL
    END AS profit_delta_percent,
    CASE
      WHEN employees_gp IS NOT NULL AND previous_employees_gp IS NOT NULL AND previous_employees_gp != 0
      THEN (employees_gp - previous_employees_gp) * 100.0 / previous_employees_gp
      ELSE NULL
    END AS employees_gp_delta_percent,
    CASE
      WHEN total_budget_payments IS NOT NULL AND previous_total_budget_payments IS NOT NULL AND previous_total_budget_payments != 0
      THEN (total_budget_payments - previous_total_budget_payments) * 100.0 / previous_total_budget_payments
      ELSE NULL
    END AS total_budget_payments_delta_percent,
    CASE
      WHEN personal_income_tax IS NOT NULL AND previous_personal_income_tax IS NOT NULL AND previous_personal_income_tax != 0
      THEN (personal_income_tax - previous_personal_income_tax) * 100.0 / previous_personal_income_tax
      ELSE NULL
    END AS personal_income_tax_delta_percent,
    CASE
      WHEN social_security_payments IS NOT NULL AND previous_social_security_payments IS NOT NULL AND previous_social_security_payments != 0
      THEN (social_security_payments - previous_social_security_payments) * 100.0 / previous_social_security_payments
      ELSE NULL
    END AS social_security_payments_delta_percent
  FROM
    lagged_data
)
SELECT
  *
FROM
  processed_data
ORDER BY
  slug,
  year DESC)
WHERE
  year = ${l.dropdown_years.value}
  AND employees_gp >= ${l.employees}`),a.$$.dirty[2]&1966080&&(wt||!qs?wt||(Xs(_s,{noResolve:wt,...Bt}),s(82,qs=!0)):Xs(_s,{noResolve:wt}))},s(20,d=Ue`WITH
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
SELECT * FROM enriched_source`),s(21,b=`WITH
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
SELECT * FROM enriched_source`),s(24,I=Ue`-- 1. solis: Datu transformācija no plata uz garu formātu (UNPIVOT)
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
-- 2. solis: LAG funkcijas pielietošana, lai iegūtu iepriekšējā gada datus
lagged_data AS (
  SELECT
    *,
    LAG(turnover) OVER w AS previous_turnover,
    LAG(profit) OVER w AS previous_profit,
    LAG(employees_gp) OVER w AS previous_employees_gp,
    LAG(total_budget_payments) OVER w AS previous_total_budget_payments,
    LAG(personal_income_tax) OVER w AS previous_personal_income_tax,
    LAG(social_security_payments) OVER w AS previous_social_security_payments
  FROM
    yearly_data
  WINDOW w AS (PARTITION BY slug ORDER BY year)
),
-- 3. solis: Gala rezultāta atlase un DELTA (starpības) aprēķināšana procentos
processed_data AS (
  SELECT
    brand_name,
    slug,
    year,
    turnover,
    profit,
    employees_gp,
    total_budget_payments,
    personal_income_tax,
    social_security_payments,
    CASE
      WHEN turnover IS NOT NULL AND previous_turnover IS NOT NULL AND previous_turnover != 0
      THEN (turnover - previous_turnover) * 100.0 / previous_turnover
      ELSE NULL
    END AS turnover_delta_percent,
    CASE
      WHEN profit IS NOT NULL AND previous_profit IS NOT NULL AND previous_profit != 0
      THEN (profit - previous_profit) * 100.0 / previous_profit
      ELSE NULL
    END AS profit_delta_percent,
    CASE
      WHEN employees_gp IS NOT NULL AND previous_employees_gp IS NOT NULL AND previous_employees_gp != 0
      THEN (employees_gp - previous_employees_gp) * 100.0 / previous_employees_gp
      ELSE NULL
    END AS employees_gp_delta_percent,
    CASE
      WHEN total_budget_payments IS NOT NULL AND previous_total_budget_payments IS NOT NULL AND previous_total_budget_payments != 0
      THEN (total_budget_payments - previous_total_budget_payments) * 100.0 / previous_total_budget_payments
      ELSE NULL
    END AS total_budget_payments_delta_percent,
    CASE
      WHEN personal_income_tax IS NOT NULL AND previous_personal_income_tax IS NOT NULL AND previous_personal_income_tax != 0
      THEN (personal_income_tax - previous_personal_income_tax) * 100.0 / previous_personal_income_tax
      ELSE NULL
    END AS personal_income_tax_delta_percent,
    CASE
      WHEN social_security_payments IS NOT NULL AND previous_social_security_payments IS NOT NULL AND previous_social_security_payments != 0
      THEN (social_security_payments - previous_social_security_payments) * 100.0 / previous_social_security_payments
      ELSE NULL
    END AS social_security_payments_delta_percent
  FROM
    lagged_data
)
SELECT
  *
FROM
  processed_data
ORDER BY
  slug,
  year DESC`),s(25,U=`-- 1. solis: Datu transformācija no plata uz garu formātu (UNPIVOT)
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
-- 2. solis: LAG funkcijas pielietošana, lai iegūtu iepriekšējā gada datus
lagged_data AS (
  SELECT
    *,
    LAG(turnover) OVER w AS previous_turnover,
    LAG(profit) OVER w AS previous_profit,
    LAG(employees_gp) OVER w AS previous_employees_gp,
    LAG(total_budget_payments) OVER w AS previous_total_budget_payments,
    LAG(personal_income_tax) OVER w AS previous_personal_income_tax,
    LAG(social_security_payments) OVER w AS previous_social_security_payments
  FROM
    yearly_data
  WINDOW w AS (PARTITION BY slug ORDER BY year)
),
-- 3. solis: Gala rezultāta atlase un DELTA (starpības) aprēķināšana procentos
processed_data AS (
  SELECT
    brand_name,
    slug,
    year,
    turnover,
    profit,
    employees_gp,
    total_budget_payments,
    personal_income_tax,
    social_security_payments,
    CASE
      WHEN turnover IS NOT NULL AND previous_turnover IS NOT NULL AND previous_turnover != 0
      THEN (turnover - previous_turnover) * 100.0 / previous_turnover
      ELSE NULL
    END AS turnover_delta_percent,
    CASE
      WHEN profit IS NOT NULL AND previous_profit IS NOT NULL AND previous_profit != 0
      THEN (profit - previous_profit) * 100.0 / previous_profit
      ELSE NULL
    END AS profit_delta_percent,
    CASE
      WHEN employees_gp IS NOT NULL AND previous_employees_gp IS NOT NULL AND previous_employees_gp != 0
      THEN (employees_gp - previous_employees_gp) * 100.0 / previous_employees_gp
      ELSE NULL
    END AS employees_gp_delta_percent,
    CASE
      WHEN total_budget_payments IS NOT NULL AND previous_total_budget_payments IS NOT NULL AND previous_total_budget_payments != 0
      THEN (total_budget_payments - previous_total_budget_payments) * 100.0 / previous_total_budget_payments
      ELSE NULL
    END AS total_budget_payments_delta_percent,
    CASE
      WHEN personal_income_tax IS NOT NULL AND previous_personal_income_tax IS NOT NULL AND previous_personal_income_tax != 0
      THEN (personal_income_tax - previous_personal_income_tax) * 100.0 / previous_personal_income_tax
      ELSE NULL
    END AS personal_income_tax_delta_percent,
    CASE
      WHEN social_security_payments IS NOT NULL AND previous_social_security_payments IS NOT NULL AND previous_social_security_payments != 0
      THEN (social_security_payments - previous_social_security_payments) * 100.0 / previous_social_security_payments
      ELSE NULL
    END AS social_security_payments_delta_percent
  FROM
    lagged_data
)
SELECT
  *
FROM
  processed_data
ORDER BY
  slug,
  year DESC`),s(28,x=Ue`WITH all_business_models AS (
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
  all_business_models`),s(29,C=`WITH all_business_models AS (
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
  all_business_models`),s(32,j=Ue`WITH all_sectors AS (
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
  all_sectors`),s(33,$=`WITH all_sectors AS (
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
  all_sectors`),s(36,te=Ue`SELECT
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
  founded_year ASC`),s(37,Se=`SELECT
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
  founded_year ASC`),s(40,ye=Ue`SELECT
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
  business_models`),s(41,et=`SELECT
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
  business_models`),s(44,it=Ue`WITH data AS (
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
  data`),s(45,bt=`WITH data AS (
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
  data`),s(48,Le=Ue`SELECT
  CASE
    WHEN list_contains(business_models, 'B2B2C') THEN 'B2B2C'
    WHEN list_contains(business_models, 'B2B') THEN 'B2B'
    WHEN list_contains(business_models, 'B2C') THEN 'B2C'
    ELSE 'Other'
  END AS name,
  COUNT(*) AS value
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
  CASE
    WHEN list_contains(business_models, 'B2B2C') THEN 'B2B2C'
    WHEN list_contains(business_models, 'B2B') THEN 'B2B'
    WHEN list_contains(business_models, 'B2C') THEN 'B2C'
    ELSE 'Other'
  END
ORDER BY
  value DESC`),s(49,Pe=`SELECT
  CASE
    WHEN list_contains(business_models, 'B2B2C') THEN 'B2B2C'
    WHEN list_contains(business_models, 'B2B') THEN 'B2B'
    WHEN list_contains(business_models, 'B2C') THEN 'B2C'
    ELSE 'Other'
  END AS name,
  COUNT(*) AS value
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
  CASE
    WHEN list_contains(business_models, 'B2B2C') THEN 'B2B2C'
    WHEN list_contains(business_models, 'B2B') THEN 'B2B'
    WHEN list_contains(business_models, 'B2C') THEN 'B2C'
    ELSE 'Other'
  END
ORDER BY
  value DESC`),s(52,Ge=Ue`SELECT
  sectors AS name,
  COUNT(*) AS value
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
  sectors
ORDER BY
  value DESC`),s(53,He=`SELECT
  sectors AS name,
  COUNT(*) AS value
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
  sectors
ORDER BY
  value DESC`),s(56,Ae=Ue`SELECT
  'AI' AS name,
  COUNT(*) AS value
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
  is_ai
UNION ALL
SELECT
  'Non-AI' AS name,
  COUNT(*) AS value
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
  NOT is_ai`),s(57,Fe=`SELECT
  'AI' AS name,
  COUNT(*) AS value
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
  is_ai
UNION ALL
SELECT
  'Non-AI' AS name,
  COUNT(*) AS value
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
  NOT is_ai`),s(60,ct=Ue`SELECT
  'Marketplace' AS name,
  COUNT(*) AS value
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
  is_marketplace
UNION ALL
SELECT
  'Non-Marketplace' AS name,
  COUNT(*) AS value
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
  NOT is_marketplace`),s(61,ht=`SELECT
  'Marketplace' AS name,
  COUNT(*) AS value
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
  is_marketplace
UNION ALL
SELECT
  'Non-Marketplace' AS name,
  COUNT(*) AS value
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
  NOT is_marketplace`),s(64,At=Ue`WITH sector_counts AS (
  SELECT
    sector,
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
SELECT * FROM enriched_source),
    UNNEST(sectors) AS t(sector)
  GROUP BY
    sector
),
ranked_sectors AS (
  SELECT
    sector,
    startup_count,
    ROW_NUMBER() OVER (ORDER BY startup_count DESC) AS rank
  FROM
    sector_counts
)
SELECT
  sector AS name,
  startup_count AS value
FROM
  ranked_sectors
-- WHERE
--   rank <= 10
ORDER BY
  startup_count DESC`),s(65,ts=`WITH sector_counts AS (
  SELECT
    sector,
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
SELECT * FROM enriched_source),
    UNNEST(sectors) AS t(sector)
  GROUP BY
    sector
),
ranked_sectors AS (
  SELECT
    sector,
    startup_count,
    ROW_NUMBER() OVER (ORDER BY startup_count DESC) AS rank
  FROM
    sector_counts
)
SELECT
  sector AS name,
  startup_count AS value
FROM
  ranked_sectors
-- WHERE
--   rank <= 10
ORDER BY
  startup_count DESC`),s(68,Dt=Ue`SELECT
  CASE
    WHEN list_contains(software_hardware_tags, 'Hardware') AND list_contains(software_hardware_tags, 'Software') THEN 'Both'
    WHEN list_contains(software_hardware_tags, 'Hardware') THEN 'Hardware'
    WHEN list_contains(software_hardware_tags, 'Software') THEN 'Software'
    ELSE 'Unknown'
  END AS name,
  COUNT(*) AS value
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
  CASE
    WHEN list_contains(software_hardware_tags, 'Hardware') AND list_contains(software_hardware_tags, 'Software') THEN 'Both'
    WHEN list_contains(software_hardware_tags, 'Hardware') THEN 'Hardware'
    WHEN list_contains(software_hardware_tags, 'Software') THEN 'Software'
    ELSE 'Unknown'
  END
ORDER BY
  value DESC`),s(69,ss=`SELECT
  CASE
    WHEN list_contains(software_hardware_tags, 'Hardware') AND list_contains(software_hardware_tags, 'Software') THEN 'Both'
    WHEN list_contains(software_hardware_tags, 'Hardware') THEN 'Hardware'
    WHEN list_contains(software_hardware_tags, 'Software') THEN 'Software'
    ELSE 'Unknown'
  END AS name,
  COUNT(*) AS value
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
  CASE
    WHEN list_contains(software_hardware_tags, 'Hardware') AND list_contains(software_hardware_tags, 'Software') THEN 'Both'
    WHEN list_contains(software_hardware_tags, 'Hardware') THEN 'Hardware'
    WHEN list_contains(software_hardware_tags, 'Software') THEN 'Software'
    ELSE 'Unknown'
  END
ORDER BY
  value DESC`),s(72,xt=Ue`SELECT DISTINCT
  year
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
-- 2. solis: LAG funkcijas pielietošana, lai iegūtu iepriekšējā gada datus
lagged_data AS (
  SELECT
    *,
    LAG(turnover) OVER w AS previous_turnover,
    LAG(profit) OVER w AS previous_profit,
    LAG(employees_gp) OVER w AS previous_employees_gp,
    LAG(total_budget_payments) OVER w AS previous_total_budget_payments,
    LAG(personal_income_tax) OVER w AS previous_personal_income_tax,
    LAG(social_security_payments) OVER w AS previous_social_security_payments
  FROM
    yearly_data
  WINDOW w AS (PARTITION BY slug ORDER BY year)
),
-- 3. solis: Gala rezultāta atlase un DELTA (starpības) aprēķināšana procentos
processed_data AS (
  SELECT
    brand_name,
    slug,
    year,
    turnover,
    profit,
    employees_gp,
    total_budget_payments,
    personal_income_tax,
    social_security_payments,
    CASE
      WHEN turnover IS NOT NULL AND previous_turnover IS NOT NULL AND previous_turnover != 0
      THEN (turnover - previous_turnover) * 100.0 / previous_turnover
      ELSE NULL
    END AS turnover_delta_percent,
    CASE
      WHEN profit IS NOT NULL AND previous_profit IS NOT NULL AND previous_profit != 0
      THEN (profit - previous_profit) * 100.0 / previous_profit
      ELSE NULL
    END AS profit_delta_percent,
    CASE
      WHEN employees_gp IS NOT NULL AND previous_employees_gp IS NOT NULL AND previous_employees_gp != 0
      THEN (employees_gp - previous_employees_gp) * 100.0 / previous_employees_gp
      ELSE NULL
    END AS employees_gp_delta_percent,
    CASE
      WHEN total_budget_payments IS NOT NULL AND previous_total_budget_payments IS NOT NULL AND previous_total_budget_payments != 0
      THEN (total_budget_payments - previous_total_budget_payments) * 100.0 / previous_total_budget_payments
      ELSE NULL
    END AS total_budget_payments_delta_percent,
    CASE
      WHEN personal_income_tax IS NOT NULL AND previous_personal_income_tax IS NOT NULL AND previous_personal_income_tax != 0
      THEN (personal_income_tax - previous_personal_income_tax) * 100.0 / previous_personal_income_tax
      ELSE NULL
    END AS personal_income_tax_delta_percent,
    CASE
      WHEN social_security_payments IS NOT NULL AND previous_social_security_payments IS NOT NULL AND previous_social_security_payments != 0
      THEN (social_security_payments - previous_social_security_payments) * 100.0 / previous_social_security_payments
      ELSE NULL
    END AS social_security_payments_delta_percent
  FROM
    lagged_data
)
SELECT
  *
FROM
  processed_data
ORDER BY
  slug,
  year DESC)
WHERE
  year >= 2022
ORDER BY
  year DESC`),s(73,rs=`SELECT DISTINCT
  year
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
-- 2. solis: LAG funkcijas pielietošana, lai iegūtu iepriekšējā gada datus
lagged_data AS (
  SELECT
    *,
    LAG(turnover) OVER w AS previous_turnover,
    LAG(profit) OVER w AS previous_profit,
    LAG(employees_gp) OVER w AS previous_employees_gp,
    LAG(total_budget_payments) OVER w AS previous_total_budget_payments,
    LAG(personal_income_tax) OVER w AS previous_personal_income_tax,
    LAG(social_security_payments) OVER w AS previous_social_security_payments
  FROM
    yearly_data
  WINDOW w AS (PARTITION BY slug ORDER BY year)
),
-- 3. solis: Gala rezultāta atlase un DELTA (starpības) aprēķināšana procentos
processed_data AS (
  SELECT
    brand_name,
    slug,
    year,
    turnover,
    profit,
    employees_gp,
    total_budget_payments,
    personal_income_tax,
    social_security_payments,
    CASE
      WHEN turnover IS NOT NULL AND previous_turnover IS NOT NULL AND previous_turnover != 0
      THEN (turnover - previous_turnover) * 100.0 / previous_turnover
      ELSE NULL
    END AS turnover_delta_percent,
    CASE
      WHEN profit IS NOT NULL AND previous_profit IS NOT NULL AND previous_profit != 0
      THEN (profit - previous_profit) * 100.0 / previous_profit
      ELSE NULL
    END AS profit_delta_percent,
    CASE
      WHEN employees_gp IS NOT NULL AND previous_employees_gp IS NOT NULL AND previous_employees_gp != 0
      THEN (employees_gp - previous_employees_gp) * 100.0 / previous_employees_gp
      ELSE NULL
    END AS employees_gp_delta_percent,
    CASE
      WHEN total_budget_payments IS NOT NULL AND previous_total_budget_payments IS NOT NULL AND previous_total_budget_payments != 0
      THEN (total_budget_payments - previous_total_budget_payments) * 100.0 / previous_total_budget_payments
      ELSE NULL
    END AS total_budget_payments_delta_percent,
    CASE
      WHEN personal_income_tax IS NOT NULL AND previous_personal_income_tax IS NOT NULL AND previous_personal_income_tax != 0
      THEN (personal_income_tax - previous_personal_income_tax) * 100.0 / previous_personal_income_tax
      ELSE NULL
    END AS personal_income_tax_delta_percent,
    CASE
      WHEN social_security_payments IS NOT NULL AND previous_social_security_payments IS NOT NULL AND previous_social_security_payments != 0
      THEN (social_security_payments - previous_social_security_payments) * 100.0 / previous_social_security_payments
      ELSE NULL
    END AS social_security_payments_delta_percent
  FROM
    lagged_data
)
SELECT
  *
FROM
  processed_data
ORDER BY
  slug,
  year DESC)
WHERE
  year >= 2022
ORDER BY
  year DESC`),[c,B,E,ie,Ce,_t,ut,De,Ye,f,zt,Is,Ms,Ps,Vs,Ys,_,o,l,A,d,b,h,v,I,U,w,O,x,C,L,W,j,$,R,re,te,Se,J,ne,ye,et,st,tt,it,bt,Ze,xe,Le,Pe,ze,Me,Ge,He,qe,Q,Ae,Fe,V,mt,ct,ht,Ht,gt,At,ts,Rs,Ct,Dt,ss,Gs,Ot,xt,rs,zs,Ut,Nt,as,Ws,Bt,wt,_s,qs,t]}class Iu extends ge{constructor(e){super(),de(this,e,Eu,bu,me,{data:16},null,[-1,-1,-1,-1])}}export{Iu as component};
