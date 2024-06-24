import{a as M,k as G}from"./StateButton.DZ7aeYrv.js";import{y as X,A as J,B as K}from"./processData.Cl0pktrJ.js";import{R as Q,a5 as _}from"./scheduler.BkxtD9_b.js";function Y(t){var e=X(t),r=e%1;return e===e?r?e-r:e:0}function Z(t){return function(e,r,n){var s=Object(e);if(!J(e)){var i=M(r);e=G(e),r=function(c){return i(s[c],c,s)}}var a=t(e,r,n);return a>-1?s[i?e[a]:a]:void 0}}var N=Math.max;function tt(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var s=r==null?0:Y(r);return s<0&&(s=N(n+s,0)),K(t,M(e),s)}var et=Z(tt);const Kt=et;function nt(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const r=document.implementation.createHTMLDocument(),n=r.createElement("base"),s=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(s),e&&(n.href=e),s.href=t,s.href}const rt=(()=>{let t=0;const e=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${e()}${t}`)})();function d(t){const e=[];for(let r=0,n=t.length;r<n;r++)e.push(t[r]);return e}function b(t,e){const n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function st(t){const e=b(t,"border-left-width"),r=b(t,"border-right-width");return t.clientWidth+e+r}function it(t){const e=b(t,"border-top-width"),r=b(t,"border-bottom-width");return t.clientHeight+e+r}function V(t,e={}){const r=e.width||st(t),n=e.height||it(t);return{width:r,height:n}}function at(){let t,e;try{e=process}catch{}const r=e&&e.env?e.env.devicePixelRatio:null;return r&&(t=parseInt(r,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}const h=16384;function ct(t){(t.width>h||t.height>h)&&(t.width>h&&t.height>h?t.width>t.height?(t.height*=h/t.width,t.width=h):(t.width*=h/t.height,t.height=h):t.width>h?(t.height*=h/t.width,t.width=h):(t.width*=h/t.height,t.height=h))}function S(t){return new Promise((e,r)=>{const n=new Image;n.decode=()=>e(n),n.onload=()=>e(n),n.onerror=r,n.crossOrigin="anonymous",n.decoding="async",n.src=t})}async function ot(t){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function lt(t,e,r){const n="http://www.w3.org/2000/svg",s=document.createElementNS(n,"svg"),i=document.createElementNS(n,"foreignObject");return s.setAttribute("width",`${e}`),s.setAttribute("height",`${r}`),s.setAttribute("viewBox",`0 0 ${e} ${r}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),s.appendChild(i),i.appendChild(t),ot(s)}const f=(t,e)=>{if(t instanceof e)return!0;const r=Object.getPrototypeOf(t);return r===null?!1:r.constructor.name===e.name||f(r,e)};function ut(t){const e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}function ft(t){return d(t).map(e=>{const r=t.getPropertyValue(e),n=t.getPropertyPriority(e);return`${e}: ${r}${n?" !important":""};`}).join(" ")}function ht(t,e,r){const n=`.${t}:${e}`,s=r.cssText?ut(r):ft(r);return document.createTextNode(`${n}{${s}}`)}function L(t,e,r){const n=window.getComputedStyle(t,r),s=n.getPropertyValue("content");if(s===""||s==="none")return;const i=rt();try{e.className=`${e.className} ${i}`}catch{return}const a=document.createElement("style");a.appendChild(ht(i,r,n)),e.appendChild(a)}function gt(t,e){L(t,e,":before"),L(t,e,":after")}const F="application/font-woff",I="image/jpeg",dt={woff:F,woff2:F,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:I,jpeg:I,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function mt(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}function v(t){const e=mt(t).toLowerCase();return dt[e]||""}function pt(t){return t.split(/,/)[1]}function P(t){return t.search(/^(data:)/)!==-1}function O(t,e){return`data:${e};base64,${t}`}async function H(t,e,r){const n=await fetch(t,e);if(n.status===404)throw new Error(`Resource "${n.url}" not found`);const s=await n.blob();return new Promise((i,a)=>{const c=new FileReader;c.onerror=a,c.onloadend=()=>{try{i(r({res:n,result:c.result}))}catch(o){a(o)}},c.readAsDataURL(s)})}const C={};function yt(t,e,r){let n=t.replace(/\?.*/,"");return r&&(n=t),/ttf|otf|eot|woff2?/i.test(n)&&(n=n.replace(/.*\//,"")),e?`[${e}]${n}`:n}async function T(t,e,r){const n=yt(t,e,r.includeQueryParams);if(C[n]!=null)return C[n];r.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime());let s;try{const i=await H(t,r.fetchRequestInit,({res:a,result:c})=>(e||(e=a.headers.get("Content-Type")||""),pt(c)));s=O(i,e)}catch(i){s=r.imagePlaceholder||"";let a=`Failed to fetch resource: ${t}`;i&&(a=typeof i=="string"?i:i.message),a&&console.warn(a)}return C[n]=s,s}async function wt(t){const e=t.toDataURL();return e==="data:,"?t.cloneNode(!1):S(e)}async function bt(t,e){if(t.currentSrc){const i=document.createElement("canvas"),a=i.getContext("2d");i.width=t.clientWidth,i.height=t.clientHeight,a==null||a.drawImage(t,0,0,i.width,i.height);const c=i.toDataURL();return S(c)}const r=t.poster,n=v(r),s=await T(r,n,e);return S(s)}async function St(t){var e;try{if(!((e=t==null?void 0:t.contentDocument)===null||e===void 0)&&e.body)return await x(t.contentDocument.body,{},!0)}catch{}return t.cloneNode(!1)}async function xt(t,e){return f(t,HTMLCanvasElement)?wt(t):f(t,HTMLVideoElement)?bt(t,e):f(t,HTMLIFrameElement)?St(t):t.cloneNode(!1)}const $t=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SLOT";async function Et(t,e,r){var n,s;let i=[];return $t(t)&&t.assignedNodes?i=d(t.assignedNodes()):f(t,HTMLIFrameElement)&&(!((n=t.contentDocument)===null||n===void 0)&&n.body)?i=d(t.contentDocument.body.childNodes):i=d(((s=t.shadowRoot)!==null&&s!==void 0?s:t).childNodes),i.length===0||f(t,HTMLVideoElement)||await i.reduce((a,c)=>a.then(()=>x(c,r)).then(o=>{o&&e.appendChild(o)}),Promise.resolve()),e}function Rt(t,e){const r=e.style;if(!r)return;const n=window.getComputedStyle(t);n.cssText?(r.cssText=n.cssText,r.transformOrigin=n.transformOrigin):d(n).forEach(s=>{let i=n.getPropertyValue(s);s==="font-size"&&i.endsWith("px")&&(i=`${Math.floor(parseFloat(i.substring(0,i.length-2)))-.1}px`),f(t,HTMLIFrameElement)&&s==="display"&&i==="inline"&&(i="block"),s==="d"&&e.getAttribute("d")&&(i=`path(${e.getAttribute("d")})`),r.setProperty(s,i,n.getPropertyPriority(s))})}function Ct(t,e){f(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),f(t,HTMLInputElement)&&e.setAttribute("value",t.value)}function Pt(t,e){if(f(t,HTMLSelectElement)){const r=e,n=Array.from(r.children).find(s=>t.value===s.getAttribute("value"));n&&n.setAttribute("selected","")}}function vt(t,e){return f(e,Element)&&(Rt(t,e),gt(t,e),Ct(t,e),Pt(t,e)),e}async function Tt(t,e){const r=t.querySelectorAll?t.querySelectorAll("use"):[];if(r.length===0)return t;const n={};for(let i=0;i<r.length;i++){const c=r[i].getAttribute("xlink:href");if(c){const o=t.querySelector(c),l=document.querySelector(c);!o&&l&&!n[c]&&(n[c]=await x(l,e,!0))}}const s=Object.values(n);if(s.length){const i="http://www.w3.org/1999/xhtml",a=document.createElementNS(i,"svg");a.setAttribute("xmlns",i),a.style.position="absolute",a.style.width="0",a.style.height="0",a.style.overflow="hidden",a.style.display="none";const c=document.createElementNS(i,"defs");a.appendChild(c);for(let o=0;o<s.length;o++)c.appendChild(s[o]);t.appendChild(a)}return t}async function x(t,e,r){return!r&&e.filter&&!e.filter(t)?null:Promise.resolve(t).then(n=>xt(n,e)).then(n=>Et(t,n,e)).then(n=>vt(t,n)).then(n=>Tt(n,e))}const W=/url\((['"]?)([^'"]+?)\1\)/g,_t=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Lt=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Ft(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}function It(t){const e=[];return t.replace(W,(r,n,s)=>(e.push(s),r)),e.filter(r=>!P(r))}async function At(t,e,r,n,s){try{const i=r?nt(e,r):e,a=v(e);let c;if(s){const o=await s(i);c=O(o,a)}else c=await T(i,a,n);return t.replace(Ft(e),`$1${c}$3`)}catch{}return t}function Dt(t,{preferredFontFormat:e}){return e?t.replace(Lt,r=>{for(;;){const[n,,s]=_t.exec(r)||[];if(!s)return"";if(s===e)return`src: ${n};`}}):t}function j(t){return t.search(W)!==-1}async function q(t,e,r){if(!j(t))return t;const n=Dt(t,r);return It(n).reduce((i,a)=>i.then(c=>At(c,a,e,r)),Promise.resolve(n))}async function w(t,e,r){var n;const s=(n=e.style)===null||n===void 0?void 0:n.getPropertyValue(t);if(s){const i=await q(s,null,r);return e.style.setProperty(t,i,e.style.getPropertyPriority(t)),!0}return!1}async function kt(t,e){await w("background",t,e)||await w("background-image",t,e),await w("mask",t,e)||await w("mask-image",t,e)}async function Ut(t,e){const r=f(t,HTMLImageElement);if(!(r&&!P(t.src))&&!(f(t,SVGImageElement)&&!P(t.href.baseVal)))return;const n=r?t.src:t.href.baseVal,s=await T(n,v(n),e);await new Promise((i,a)=>{t.onload=i,t.onerror=a;const c=t;c.decode&&(c.decode=i),c.loading==="lazy"&&(c.loading="eager"),r?(t.srcset="",t.src=s):t.href.baseVal=s})}async function Mt(t,e){const n=d(t.childNodes).map(s=>B(s,e));await Promise.all(n).then(()=>t)}async function B(t,e){f(t,Element)&&(await kt(t,e),await Ut(t,e),await Mt(t,e))}function Vt(t,e){const{style:r}=t;e.backgroundColor&&(r.backgroundColor=e.backgroundColor),e.width&&(r.width=`${e.width}px`),e.height&&(r.height=`${e.height}px`);const n=e.style;return n!=null&&Object.keys(n).forEach(s=>{r[s]=n[s]}),t}const A={};async function D(t){let e=A[t];if(e!=null)return e;const n=await(await fetch(t)).text();return e={url:t,cssText:n},A[t]=e,e}async function k(t,e){let r=t.cssText;const n=/url\(["']?([^"')]+)["']?\)/g,i=(r.match(/url\([^)]+\)/g)||[]).map(async a=>{let c=a.replace(n,"$1");return c.startsWith("https://")||(c=new URL(c,t.url).href),H(c,e.fetchRequestInit,({result:o})=>(r=r.replace(a,`url(${o})`),[a,o]))});return Promise.all(i).then(()=>r)}function U(t){if(t==null)return[];const e=[],r=/(\/\*[\s\S]*?\*\/)/gi;let n=t.replace(r,"");const s=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const o=s.exec(n);if(o===null)break;e.push(o[0])}n=n.replace(s,"");const i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,a="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",c=new RegExp(a,"gi");for(;;){let o=i.exec(n);if(o===null){if(o=c.exec(n),o===null)break;i.lastIndex=c.lastIndex}else c.lastIndex=i.lastIndex;e.push(o[0])}return e}async function Ot(t,e){const r=[],n=[];return t.forEach(s=>{if("cssRules"in s)try{d(s.cssRules||[]).forEach((i,a)=>{if(i.type===CSSRule.IMPORT_RULE){let c=a+1;const o=i.href,l=D(o).then(u=>k(u,e)).then(u=>U(u).forEach(m=>{try{s.insertRule(m,m.startsWith("@import")?c+=1:s.cssRules.length)}catch(p){console.error("Error inserting rule from remote css",{rule:m,error:p})}})).catch(u=>{console.error("Error loading remote css",u.toString())});n.push(l)}})}catch(i){const a=t.find(c=>c.href==null)||document.styleSheets[0];s.href!=null&&n.push(D(s.href).then(c=>k(c,e)).then(c=>U(c).forEach(o=>{a.insertRule(o,s.cssRules.length)})).catch(c=>{console.error("Error loading remote stylesheet",c)})),console.error("Error inlining remote css file",i)}}),Promise.all(n).then(()=>(t.forEach(s=>{if("cssRules"in s)try{d(s.cssRules||[]).forEach(i=>{r.push(i)})}catch(i){console.error(`Error while reading CSS rules from ${s.href}`,i)}}),r))}function Ht(t){return t.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>j(e.style.getPropertyValue("src")))}async function Wt(t,e){if(t.ownerDocument==null)throw new Error("Provided element is not within a Document");const r=d(t.ownerDocument.styleSheets),n=await Ot(r,e);return Ht(n)}async function jt(t,e){const r=await Wt(t,e);return(await Promise.all(r.map(s=>{const i=s.parentStyleSheet?s.parentStyleSheet.href:null;return q(s.cssText,i,e)}))).join(`
`)}async function qt(t,e){const r=e.fontEmbedCSS!=null?e.fontEmbedCSS:e.skipFonts?null:await jt(t,e);if(r){const n=document.createElement("style"),s=document.createTextNode(r);n.appendChild(s),t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n)}}async function Bt(t,e={}){const{width:r,height:n}=V(t,e),s=await x(t,e,!0);return await qt(s,e),await B(s,e),Vt(s,e),await lt(s,r,n)}async function zt(t,e={}){const{width:r,height:n}=V(t,e),s=await Bt(t,e),i=await S(s),a=document.createElement("canvas"),c=a.getContext("2d"),o=e.pixelRatio||at(),l=e.canvasWidth||r,u=e.canvasHeight||n;return a.width=l*o,a.height=u*o,e.skipAutoScale||ct(a),a.style.width=`${l}`,a.style.height=`${u}`,e.backgroundColor&&(c.fillStyle=e.backgroundColor,c.fillRect(0,0,a.width,a.height)),c.drawImage(i,0,0,a.width,a.height),a}async function Qt(t,e={}){return(await zt(t,e)).toDataURL("image/jpeg",e.quality||1)}function z(t){const e=t-1;return e*e*e+1}function Yt(t,{delay:e=0,duration:r=400,easing:n=Q}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:r,easing:n,css:i=>`opacity: ${i*s}`}}function Zt(t,{delay:e=0,duration:r=400,easing:n=z,x:s=0,y:i=0,opacity:a=0}={}){const c=getComputedStyle(t),o=+c.opacity,l=c.transform==="none"?"":c.transform,u=o*(1-a),[m,p]=_(s),[$,E]=_(i);return{delay:e,duration:r,easing:n,css:(y,R)=>`
			transform: ${l} translate(${(1-y)*m}${p}, ${(1-y)*$}${E});
			opacity: ${o-u*R}`}}function Nt(t,{delay:e=0,duration:r=400,easing:n=z,axis:s="y"}={}){const i=getComputedStyle(t),a=+i.opacity,c=s==="y"?"height":"width",o=parseFloat(i[c]),l=s==="y"?["top","bottom"]:["left","right"],u=l.map(g=>`${g[0].toUpperCase()}${g.slice(1)}`),m=parseFloat(i[`padding${u[0]}`]),p=parseFloat(i[`padding${u[1]}`]),$=parseFloat(i[`margin${u[0]}`]),E=parseFloat(i[`margin${u[1]}`]),y=parseFloat(i[`border${u[0]}Width`]),R=parseFloat(i[`border${u[1]}Width`]);return{delay:e,duration:r,easing:n,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*a};${c}: ${g*o}px;padding-${l[0]}: ${g*m}px;padding-${l[1]}: ${g*p}px;margin-${l[0]}: ${g*$}px;margin-${l[1]}: ${g*E}px;border-${l[0]}-width: ${g*y}px;border-${l[1]}-width: ${g*R}px;`}}export{Yt as a,Zt as b,Y as c,tt as d,Kt as f,Nt as s,Qt as t};
