function A(){}const dt=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function U(){return Object.create(null)}function S(t){t.forEach(Z)}function G(t){return typeof t=="function"}function It(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ht(t){return Object.keys(t).length===0}function mt(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Wt(t,e,n){t.$$.on_destroy.push(mt(e,n))}function Gt(t,e,n,i){if(t){const r=tt(t,e,n,i);return t[0](r)}}function tt(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function Jt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function Kt(t,e,n,i,r,o){if(r){const s=tt(e,n,i,o);t.p(s,r)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ut(t){return t??""}const et=typeof window<"u";let pt=et?()=>window.performance.now():()=>Date.now(),J=et?t=>requestAnimationFrame(t):A;const k=new Set;function nt(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&J(nt)}function yt(t){let e;return k.size===0&&J(nt),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let z=!1;function gt(){z=!0}function $t(){z=!1}function xt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function wt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:xt(1,r,d=>e[n[d]].claim_order,l))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const o=[],s=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<o.length&&s[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(s[c],f)}}function bt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=st("style");return Et(it(t),e),e.sheet}function Et(t,e){return bt(t.head||t,e),e.sheet}function kt(t,e){if(z){for(wt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Vt(t,e,n){z&&!n?kt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function rt(t){t.parentNode&&t.parentNode.removeChild(t)}function Xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function st(t){return document.createElement(t)}function K(t){return document.createTextNode(t)}function Yt(){return K(" ")}function Zt(){return K("")}function te(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ee(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function ne(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ie(t,e,n){const i=new Set;for(let r=0;r<t.length;r+=1)t[r].checked&&i.add(t[r].__value);return n||i.delete(e),Array.from(i)}function re(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Nt(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ot(t,e,n,i,r=!1){At(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function St(t,e,n,i){return ot(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function se(t,e,n){return St(t,e,n,st)}function Ct(t,e){return ot(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>K(e),!0)}function oe(t){return Ct(t," ")}function ce(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function le(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ue(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function Dt(t){for(const e of t.options)if(!e.disabled)return e}function ae(t){const e=t.querySelector(":checked")||Dt(t);return e&&e.__value}function fe(t,e,n){t.classList[n?"add":"remove"](e)}function ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function de(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function _e(t,e){return new t(e)}const R=new Map;let L=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:vt(e),rules:{}};return R.set(t,n),n}function Ot(t,e,n,i,r,o,s,u=0){const c=16.666/i;let l=`{
`;for(let p=0;p<=1;p+=c){const g=e+(n-e)*o(p);l+=p*100+`%{${s(g,1-g)}}
`}const f=l+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Mt(f)}_${u}`,d=it(t),{stylesheet:h,rules:m}=R.get(d)||jt(d,t);m[a]||(m[a]=!0,h.insertRule(`@keyframes ${a} ${f}`,h.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${i}ms linear ${r}ms 1 both`,L+=1,a}function V(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),L-=r,L||Pt())}function Pt(){J(()=>{L||(R.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&rt(e)}),R.clear())})}let O;function j(t){O=t}function B(){if(!O)throw new Error("Function called outside component initialization");return O}function he(t){B().$$.on_mount.push(t)}function me(t){B().$$.after_update.push(t)}function pe(t){B().$$.on_destroy.push(t)}function ye(){const t=B();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=ct(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}const E=[],X=[];let N=[];const I=[],lt=Promise.resolve();let W=!1;function ut(){W||(W=!0,lt.then(at))}function ge(){return ut(),lt}function q(t){N.push(t)}function $e(t){I.push(t)}const F=new Set;let v=0;function at(){if(v!==0)return;const t=O;do{try{for(;v<E.length;){const e=E[v];v++,j(e),Tt(e.$$)}}catch(e){throw E.length=0,v=0,e}for(j(null),E.length=0,v=0;X.length;)X.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];F.has(n)||(F.add(n),n())}N.length=0}while(E.length);for(;I.length;)I.pop()();W=!1,F.clear(),j(t)}function Tt(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}function Rt(t){const e=[],n=[];N.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),N=e}let M;function Lt(){return M||(M=Promise.resolve(),M.then(()=>{M=null})),M}function Y(t,e,n){t.dispatchEvent(ct(`${e?"intro":"outro"}${n}`))}const T=new Set;let w;function xe(){w={r:0,c:[],p:w}}function we(){w.r||S(w.c),w=w.p}function ft(t,e){t&&t.i&&(T.delete(t),t.i(e))}function qt(t,e,n,i){if(t&&t.o){if(T.has(t))return;T.add(t),w.c.push(()=>{T.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const zt={duration:0};function be(t,e,n){const i={direction:"in"};let r=e(t,n,i),o=!1,s,u,c=0;function l(){s&&V(t,s)}function f(){const{delay:d=0,duration:h=300,easing:m=dt,tick:y=A,css:p}=r||zt;p&&(s=Ot(t,0,1,h,d,m,p,c++)),y(0,1);const g=pt()+d,C=g+h;u&&u.abort(),o=!0,q(()=>Y(t,!0,"start")),u=yt(b=>{if(o){if(b>=C)return y(1,0),Y(t,!0,"end"),l(),o=!1;if(b>=g){const D=m((b-g)/h);y(D,1-D)}}return o})}let a=!1;return{start(){a||(a=!0,V(t),G(r)?(r=r(i),Lt().then(f)):f())},invalidate(){a=!1},end(){o&&(l(),o=!1)}}}function ve(t,e){t.d(1),e.delete(t.key)}function Ee(t,e){qt(t,1,1,()=>{e.delete(t.key)})}function ke(t,e,n,i,r,o,s,u,c,l,f,a){let d=t.length,h=o.length,m=d;const y={};for(;m--;)y[t[m].key]=m;const p=[],g=new Map,C=new Map,b=[];for(m=h;m--;){const _=a(r,o,m),$=n(_);let x=s.get($);x?i&&b.push(()=>x.p(_,e)):(x=l($,_),x.c()),g.set($,p[m]=x),$ in y&&C.set($,Math.abs(m-y[$]))}const D=new Set,Q=new Set;function H(_){ft(_,1),_.m(u,f),s.set(_.key,_),f=_.first,h--}for(;d&&h;){const _=p[h-1],$=t[d-1],x=_.key,P=$.key;_===$?(f=_.first,d--,h--):g.has(P)?!s.has(x)||D.has(x)?H(_):Q.has(P)?d--:C.get(x)>C.get(P)?(Q.add(x),H(_)):(D.add(P),d--):(c($,s),d--)}for(;d--;){const _=t[d];g.has(_.key)||c(_,s)}for(;h;)H(p[h-1]);return S(b),p}function Ne(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ae(t){t&&t.c()}function Se(t,e){t&&t.l(e)}function Bt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||q(()=>{const s=t.$$.on_mount.map(Z).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...s):S(s),t.$$.on_mount=[]}),o.forEach(q)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(Rt(n.after_update),S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(t,e){t.$$.dirty[0]===-1&&(E.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ce(t,e,n,i,r,o,s,u=[-1]){const c=O;j(t);const l=t.$$={fragment:null,ctx:[],props:o,update:A,not_equal:r,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:U(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,d,...h)=>{const m=h.length?h[0]:d;return l.ctx&&r(l.ctx[a],l.ctx[a]=m)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](m),f&&Ft(t,a)),d}):[],l.update(),f=!0,S(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){gt();const a=Nt(e.target);l.fragment&&l.fragment.l(a),a.forEach(rt)}else l.fragment&&l.fragment.c();e.intro&&ft(t.$$.fragment),Bt(t,e.target,e.anchor,e.customElement),$t(),at()}j(c)}class De{$destroy(){Ht(this,1),this.$destroy=A}$on(e,n){if(!G(n))return A;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{G as $,Bt as A,Ht as B,Gt as C,kt as D,Kt as E,Qt as F,Jt as G,A as H,Wt as I,Ut as J,Xt as K,ke as L,ve as M,fe as N,te as O,ee as P,Ee as Q,Ne as R,De as S,de as T,$e as U,q as V,re as W,ue as X,be as Y,S as Z,ae as _,Yt as a,pe as a0,ie as a1,dt as a2,ye as a3,Vt as b,oe as c,qt as d,Zt as e,we as f,ft as g,rt as h,Ce as i,me as j,st as k,se as l,Nt as m,ne as n,he as o,le as p,K as q,Ct as r,It as s,ge as t,ce as u,xe as v,X as w,_e as x,Ae as y,Se as z};
