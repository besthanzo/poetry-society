import{s as tt,u as Q,O as nt,n as rt,i as B,D as qe,a as ot,c as N,P as ze,p as ae,r as st,w as it}from"./@vue-BaFYB9fO.js";/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const z=typeof window!="undefined";function ct(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const S=Object.assign;function le(e,t){const n={};for(const r in t){const o=t[r];n[r]=L(o)?o.map(e):e(o)}return n}const F=()=>{},L=Array.isArray,at=/\/$/,lt=e=>e.replace(at,"");function ue(e,t,n="/"){let r,o={},l="",p="";const m=t.indexOf("#");let c=t.indexOf("?");return m<c&&m>=0&&(c=-1),c>-1&&(r=t.slice(0,c),l=t.slice(c+1,m>-1?m:t.length),o=e(l)),m>-1&&(r=r||t.slice(0,m),p=t.slice(m,t.length)),r=pt(r!=null?r:t,n),{fullPath:r+(l&&"?")+l+p,path:r,query:o,hash:p}}function ut(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ce(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ft(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&G(t.matched[r],n.matched[o])&&Ge(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function G(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ge(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ht(e[n],t[n]))return!1;return!0}function ht(e,t){return L(e)?be(e,t):L(t)?be(t,e):e===t}function be(e,t){return L(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function pt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let l=n.length-1,p,m;for(p=0;p<r.length;p++)if(m=r[p],m!==".")if(m==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+r.slice(p-(p===r.length?1:0)).join("/")}var X;(function(e){e.pop="pop",e.push="push"})(X||(X={}));var Y;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Y||(Y={}));function dt(e){if(!e)if(z){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),lt(e)}const mt=/^[^#]+#/;function gt(e,t){return e.replace(mt,"#")+t}function vt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const te=()=>({left:window.pageXOffset,top:window.pageYOffset});function yt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=vt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ke(e,t){return(history.state?history.state.position-t:-1)+e}const he=new Map;function Rt(e,t){he.set(e,t)}function Et(e){const t=he.get(e);return he.delete(e),t}let Pt=()=>location.protocol+"//"+location.host;function Ke(e,t){const{pathname:n,search:r,hash:o}=t,l=e.indexOf("#");if(l>-1){let m=o.includes(e.slice(l))?e.slice(l).length:1,c=o.slice(m);return c[0]!=="/"&&(c="/"+c),Ce(c,"")}return Ce(n,e)+r+o}function wt(e,t,n,r){let o=[],l=[],p=null;const m=({state:u})=>{const g=Ke(e,location),R=n.value,k=t.value;let b=0;if(u){if(n.value=g,t.value=u,p&&p===R){p=null;return}b=k?u.position-k.position:0}else r(g);o.forEach(E=>{E(n.value,R,{delta:b,type:X.pop,direction:b?b>0?Y.forward:Y.back:Y.unknown})})};function c(){p=n.value}function f(u){o.push(u);const g=()=>{const R=o.indexOf(u);R>-1&&o.splice(R,1)};return l.push(g),g}function s(){const{history:u}=window;u.state&&u.replaceState(S({},u.state,{scroll:te()}),"")}function a(){for(const u of l)u();l=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",s,{passive:!0}),{pauseListeners:c,listen:f,destroy:a}}function Ae(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?te():null}}function St(e){const{history:t,location:n}=window,r={value:Ke(e,n)},o={value:t.state};o.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,f,s){const a=e.indexOf("#"),u=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+c:Pt()+e+c;try{t[s?"replaceState":"pushState"](f,"",u),o.value=f}catch(g){n[s?"replace":"assign"](u)}}function p(c,f){const s=S({},t.state,Ae(o.value.back,c,o.value.forward,!0),f,{position:o.value.position});l(c,s,!0),r.value=c}function m(c,f){const s=S({},o.value,t.state,{forward:c,scroll:te()});l(s.current,s,!0);const a=S({},Ae(r.value,c,null),{position:s.position+1},f);l(c,a,!1),r.value=c}return{location:r,state:o,push:m,replace:p}}function Ct(e){e=dt(e);const t=St(e),n=wt(e,t.state,t.location,t.replace);function r(l,p=!0){p||n.pauseListeners(),history.go(l)}const o=S({location:"",base:e,go:r,createHref:gt.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function fn(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Ct(e)}function bt(e){return typeof e=="string"||e&&typeof e=="object"}function Ve(e){return typeof e=="string"||typeof e=="symbol"}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},De=Symbol("");var Oe;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Oe||(Oe={}));function K(e,t){return S(new Error,{type:e,[De]:!0},t)}function T(e,t){return e instanceof Error&&De in e&&(t==null||!!(e.type&t))}const _e="[^/]+?",kt={sensitive:!1,strict:!1,start:!0,end:!0},At=/[.+*?^${}()[\]/\\]/g;function Ot(e,t){const n=S({},kt,t),r=[];let o=n.start?"^":"";const l=[];for(const f of e){const s=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let a=0;a<f.length;a++){const u=f[a];let g=40+(n.sensitive?.25:0);if(u.type===0)a||(o+="/"),o+=u.value.replace(At,"\\$&"),g+=40;else if(u.type===1){const{value:R,repeatable:k,optional:b,regexp:E}=u;l.push({name:R,repeatable:k,optional:b});const w=E||_e;if(w!==_e){g+=10;try{new RegExp(`(${w})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${R}" (${w}): `+M.message)}}let _=k?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;a||(_=b&&f.length<2?`(?:/${_})`:"/"+_),b&&(_+="?"),o+=_,g+=20,b&&(g+=-8),k&&(g+=-20),w===".*"&&(g+=-50)}s.push(g)}r.push(s)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const p=new RegExp(o,n.sensitive?"":"i");function m(f){const s=f.match(p),a={};if(!s)return null;for(let u=1;u<s.length;u++){const g=s[u]||"",R=l[u-1];a[R.name]=g&&R.repeatable?g.split("/"):g}return a}function c(f){let s="",a=!1;for(const u of e){(!a||!s.endsWith("/"))&&(s+="/"),a=!1;for(const g of u)if(g.type===0)s+=g.value;else if(g.type===1){const{value:R,repeatable:k,optional:b}=g,E=R in f?f[R]:"";if(L(E)&&!k)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const w=L(E)?E.join("/"):E;if(!w)if(b)u.length<2&&(s.endsWith("/")?s=s.slice(0,-1):a=!0);else throw new Error(`Missing required param "${R}"`);s+=w}}return s||"/"}return{re:p,score:r,keys:l,parse:m,stringify:c}}function _t(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function xt(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const l=_t(r[n],o[n]);if(l)return l;n++}if(Math.abs(o.length-r.length)===1){if(xe(r))return 1;if(xe(o))return-1}return o.length-r.length}function xe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Mt={type:0,value:""},Lt=/[a-zA-Z0-9_]/;function Nt(e){if(!e)return[[]];if(e==="/")return[[Mt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const o=[];let l;function p(){l&&o.push(l),l=[]}let m=0,c,f="",s="";function a(){f&&(n===0?l.push({type:0,value:f}):n===1||n===2||n===3?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:f,regexp:s,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),f="")}function u(){f+=c}for(;m<e.length;){if(c=e[m++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(f&&a(),p()):c===":"?(a(),n=1):u();break;case 4:u(),n=r;break;case 1:c==="("?n=2:Lt.test(c)?u():(a(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&m--);break;case 2:c===")"?s[s.length-1]=="\\"?s=s.slice(0,-1)+c:n=3:s+=c;break;case 3:a(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&m--,s="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),a(),p(),o}function It(e,t,n){const r=Ot(Nt(e.path),n),o=S(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Tt(e,t){const n=[],r=new Map;t=Ne({strict:!1,end:!0,sensitive:!1},t);function o(s){return r.get(s)}function l(s,a,u){const g=!u,R=$t(s);R.aliasOf=u&&u.record;const k=Ne(t,s),b=[R];if("alias"in s){const _=typeof s.alias=="string"?[s.alias]:s.alias;for(const M of _)b.push(S({},R,{components:u?u.record.components:R.components,path:M,aliasOf:u?u.record:R}))}let E,w;for(const _ of b){const{path:M}=_;if(a&&M[0]!=="/"){const H=a.record.path,I=H[H.length-1]==="/"?"":"/";_.path=a.record.path+(M&&I+M)}if(E=It(_,a,k),u?u.alias.push(E):(w=w||E,w!==E&&w.alias.push(E),g&&s.name&&!Le(E)&&p(s.name)),R.children){const H=R.children;for(let I=0;I<H.length;I++)l(H[I],E,u&&u.children[I])}u=u||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&c(E)}return w?()=>{p(w)}:F}function p(s){if(Ve(s)){const a=r.get(s);a&&(r.delete(s),n.splice(n.indexOf(a),1),a.children.forEach(p),a.alias.forEach(p))}else{const a=n.indexOf(s);a>-1&&(n.splice(a,1),s.record.name&&r.delete(s.record.name),s.children.forEach(p),s.alias.forEach(p))}}function m(){return n}function c(s){let a=0;for(;a<n.length&&xt(s,n[a])>=0&&(s.record.path!==n[a].record.path||!Ue(s,n[a]));)a++;n.splice(a,0,s),s.record.name&&!Le(s)&&r.set(s.record.name,s)}function f(s,a){let u,g={},R,k;if("name"in s&&s.name){if(u=r.get(s.name),!u)throw K(1,{location:s});k=u.record.name,g=S(Me(a.params,u.keys.filter(w=>!w.optional).map(w=>w.name)),s.params&&Me(s.params,u.keys.map(w=>w.name))),R=u.stringify(g)}else if("path"in s)R=s.path,u=n.find(w=>w.re.test(R)),u&&(g=u.parse(R),k=u.record.name);else{if(u=a.name?r.get(a.name):n.find(w=>w.re.test(a.path)),!u)throw K(1,{location:s,currentLocation:a});k=u.record.name,g=S({},a.params,s.params),R=u.stringify(g)}const b=[];let E=u;for(;E;)b.unshift(E.record),E=E.parent;return{name:k,path:R,params:g,matched:b,meta:Ht(b)}}return e.forEach(s=>l(s)),{addRoute:l,resolve:f,removeRoute:p,getRoutes:m,getRecordMatcher:o}}function Me(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function $t(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:jt(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function jt(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Le(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ht(e){return e.reduce((t,n)=>S(t,n.meta),{})}function Ne(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ue(e,t){return t.children.some(n=>n===e||Ue(e,n))}const We=/#/g,Bt=/&/g,qt=/\//g,zt=/=/g,Gt=/\?/g,Qe=/\+/g,Kt=/%5B/g,Vt=/%5D/g,Fe=/%5E/g,Dt=/%60/g,Ye=/%7B/g,Ut=/%7C/g,Xe=/%7D/g,Wt=/%20/g;function me(e){return encodeURI(""+e).replace(Ut,"|").replace(Kt,"[").replace(Vt,"]")}function Qt(e){return me(e).replace(Ye,"{").replace(Xe,"}").replace(Fe,"^")}function pe(e){return me(e).replace(Qe,"%2B").replace(Wt,"+").replace(We,"%23").replace(Bt,"%26").replace(Dt,"`").replace(Ye,"{").replace(Xe,"}").replace(Fe,"^")}function Ft(e){return pe(e).replace(zt,"%3D")}function Yt(e){return me(e).replace(We,"%23").replace(Gt,"%3F")}function Xt(e){return e==null?"":Yt(e).replace(qt,"%2F")}function ee(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Zt(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const l=r[o].replace(Qe," "),p=l.indexOf("="),m=ee(p<0?l:l.slice(0,p)),c=p<0?null:ee(l.slice(p+1));if(m in t){let f=t[m];L(f)||(f=t[m]=[f]),f.push(c)}else t[m]=c}return t}function Ie(e){let t="";for(let n in e){const r=e[n];if(n=Ft(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(L(r)?r.map(l=>l&&pe(l)):[r&&pe(r)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function Jt(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=L(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const en=Symbol(""),Te=Symbol(""),ne=Symbol(""),ge=Symbol(""),de=Symbol("");function W(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function j(e,t,n,r,o){const l=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((p,m)=>{const c=a=>{a===!1?m(K(4,{from:n,to:t})):a instanceof Error?m(a):bt(a)?m(K(2,{from:t,to:a})):(l&&r.enterCallbacks[o]===l&&typeof a=="function"&&l.push(a),p())},f=e.call(r&&r.instances[o],t,n,c);let s=Promise.resolve(f);e.length<3&&(s=s.then(c)),s.catch(a=>m(a))})}function fe(e,t,n,r){const o=[];for(const l of e)for(const p in l.components){let m=l.components[p];if(!(t!=="beforeRouteEnter"&&!l.instances[p]))if(tn(m)){const f=(m.__vccOpts||m)[t];f&&o.push(j(f,n,r,l,p))}else{let c=m();o.push(()=>c.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${p}" at "${l.path}"`));const s=ct(f)?f.default:f;l.components[p]=s;const u=(s.__vccOpts||s)[t];return u&&j(u,n,r,l,p)()}))}}return o}function tn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function $e(e){const t=B(ne),n=B(ge),r=N(()=>t.resolve(Q(e.to))),o=N(()=>{const{matched:c}=r.value,{length:f}=c,s=c[f-1],a=n.matched;if(!s||!a.length)return-1;const u=a.findIndex(G.bind(null,s));if(u>-1)return u;const g=je(c[f-2]);return f>1&&je(s)===g&&a[a.length-1].path!==g?a.findIndex(G.bind(null,c[f-2])):u}),l=N(()=>o.value>-1&&sn(n.params,r.value.params)),p=N(()=>o.value>-1&&o.value===n.matched.length-1&&Ge(n.params,r.value.params));function m(c={}){return on(c)?t[Q(e.replace)?"replace":"push"](Q(e.to)).catch(F):Promise.resolve()}return{route:r,href:N(()=>r.value.href),isActive:l,isExactActive:p,navigate:m}}const nn=qe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$e,setup(e,{slots:t}){const n=ot($e(e)),{options:r}=B(ne),o=N(()=>({[He(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[He(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:ze("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},l)}}}),rn=nn;function on(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function sn(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!L(o)||o.length!==r.length||r.some((l,p)=>l!==o[p]))return!1}return!0}function je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const He=(e,t,n)=>e!=null?e:t!=null?t:n,cn=qe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=B(de),o=N(()=>e.route||r.value),l=B(Te,0),p=N(()=>{let f=Q(l);const{matched:s}=o.value;let a;for(;(a=s[f])&&!a.components;)f++;return f}),m=N(()=>o.value.matched[p.value]);ae(Te,N(()=>p.value+1)),ae(en,m),ae(de,o);const c=st();return it(()=>[c.value,m.value,e.name],([f,s,a],[u,g,R])=>{s&&(s.instances[a]=f,g&&g!==s&&f&&f===u&&(s.leaveGuards.size||(s.leaveGuards=g.leaveGuards),s.updateGuards.size||(s.updateGuards=g.updateGuards))),f&&s&&(!g||!G(s,g)||!u)&&(s.enterCallbacks[a]||[]).forEach(k=>k(f))},{flush:"post"}),()=>{const f=o.value,s=e.name,a=m.value,u=a&&a.components[s];if(!u)return Be(n.default,{Component:u,route:f});const g=a.props[s],R=g?g===!0?f.params:typeof g=="function"?g(f):g:null,b=ze(u,S({},R,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(a.instances[s]=null)},ref:c}));return Be(n.default,{Component:b,route:f})||b}}});function Be(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const an=cn;function hn(e){const t=Tt(e.routes,e),n=e.parseQuery||Zt,r=e.stringifyQuery||Ie,o=e.history,l=W(),p=W(),m=W(),c=tt($);let f=$;z&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const s=le.bind(null,i=>""+i),a=le.bind(null,Xt),u=le.bind(null,ee);function g(i,d){let h,v;return Ve(i)?(h=t.getRecordMatcher(i),v=d):v=i,t.addRoute(v,h)}function R(i){const d=t.getRecordMatcher(i);d&&t.removeRoute(d)}function k(){return t.getRoutes().map(i=>i.record)}function b(i){return!!t.getRecordMatcher(i)}function E(i,d){if(d=S({},d||c.value),typeof i=="string"){const y=ue(n,i,d.path),O=t.resolve({path:y.path},d),U=o.createHref(y.fullPath);return S(y,O,{params:u(O.params),hash:ee(y.hash),redirectedFrom:void 0,href:U})}let h;if("path"in i)h=S({},i,{path:ue(n,i.path,d.path).path});else{const y=S({},i.params);for(const O in y)y[O]==null&&delete y[O];h=S({},i,{params:a(y)}),d.params=a(d.params)}const v=t.resolve(h,d),C=i.hash||"";v.params=s(u(v.params));const A=ut(r,S({},i,{hash:Qt(C),path:v.path})),P=o.createHref(A);return S({fullPath:A,hash:C,query:r===Ie?Jt(i.query):i.query||{}},v,{redirectedFrom:void 0,href:P})}function w(i){return typeof i=="string"?ue(n,i,c.value.path):S({},i)}function _(i,d){if(f!==i)return K(8,{from:d,to:i})}function M(i){return V(i)}function H(i){return M(S(w(i),{replace:!0}))}function I(i){const d=i.matched[i.matched.length-1];if(d&&d.redirect){const{redirect:h}=d;let v=typeof h=="function"?h(i):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=w(v):{path:v},v.params={}),S({query:i.query,hash:i.hash,params:"path"in v?{}:i.params},v)}}function V(i,d){const h=f=E(i),v=c.value,C=i.state,A=i.force,P=i.replace===!0,y=I(h);if(y)return V(S(w(y),{state:typeof y=="object"?S({},C,y.state):C,force:A,replace:P}),d||h);const O=h;O.redirectedFrom=d;let U;return!A&&ft(r,v,h)&&(U=K(16,{to:O,from:v}),we(v,v,!0,!1)),(U?Promise.resolve(U):ye(O,v)).catch(x=>T(x)?T(x,2)?x:se(x):oe(x,O,v)).then(x=>{if(x){if(T(x,2))return V(S({replace:P},w(x.to),{state:typeof x.to=="object"?S({},C,x.to.state):C,force:A}),d||O)}else x=Ee(O,v,!0,P,C);return Re(O,v,x),x})}function Ze(i,d){const h=_(i,d);return h?Promise.reject(h):Promise.resolve()}function ve(i){const d=J.values().next().value;return d&&typeof d.runWithContext=="function"?d.runWithContext(i):i()}function ye(i,d){let h;const[v,C,A]=ln(i,d);h=fe(v.reverse(),"beforeRouteLeave",i,d);for(const y of v)y.leaveGuards.forEach(O=>{h.push(j(O,i,d))});const P=Ze.bind(null,i,d);return h.push(P),q(h).then(()=>{h=[];for(const y of l.list())h.push(j(y,i,d));return h.push(P),q(h)}).then(()=>{h=fe(C,"beforeRouteUpdate",i,d);for(const y of C)y.updateGuards.forEach(O=>{h.push(j(O,i,d))});return h.push(P),q(h)}).then(()=>{h=[];for(const y of A)if(y.beforeEnter)if(L(y.beforeEnter))for(const O of y.beforeEnter)h.push(j(O,i,d));else h.push(j(y.beforeEnter,i,d));return h.push(P),q(h)}).then(()=>(i.matched.forEach(y=>y.enterCallbacks={}),h=fe(A,"beforeRouteEnter",i,d),h.push(P),q(h))).then(()=>{h=[];for(const y of p.list())h.push(j(y,i,d));return h.push(P),q(h)}).catch(y=>T(y,8)?y:Promise.reject(y))}function Re(i,d,h){m.list().forEach(v=>ve(()=>v(i,d,h)))}function Ee(i,d,h,v,C){const A=_(i,d);if(A)return A;const P=d===$,y=z?history.state:{};h&&(v||P?o.replace(i.fullPath,S({scroll:P&&y&&y.scroll},C)):o.push(i.fullPath,C)),c.value=i,we(i,d,h,P),se()}let D;function Je(){D||(D=o.listen((i,d,h)=>{if(!Se.listening)return;const v=E(i),C=I(v);if(C){V(S(C,{replace:!0}),v).catch(F);return}f=v;const A=c.value;z&&Rt(ke(A.fullPath,h.delta),te()),ye(v,A).catch(P=>T(P,12)?P:T(P,2)?(V(P.to,v).then(y=>{T(y,20)&&!h.delta&&h.type===X.pop&&o.go(-1,!1)}).catch(F),Promise.reject()):(h.delta&&o.go(-h.delta,!1),oe(P,v,A))).then(P=>{P=P||Ee(v,A,!1),P&&(h.delta&&!T(P,8)?o.go(-h.delta,!1):h.type===X.pop&&T(P,20)&&o.go(-1,!1)),Re(v,A,P)}).catch(F)}))}let re=W(),Pe=W(),Z;function oe(i,d,h){se(i);const v=Pe.list();return v.length&&v.forEach(C=>C(i,d,h)),Promise.reject(i)}function et(){return Z&&c.value!==$?Promise.resolve():new Promise((i,d)=>{re.add([i,d])})}function se(i){return Z||(Z=!i,Je(),re.list().forEach(([d,h])=>i?h(i):d()),re.reset()),i}function we(i,d,h,v){const{scrollBehavior:C}=e;if(!z||!C)return Promise.resolve();const A=!h&&Et(ke(i.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return rt().then(()=>C(i,d,A)).then(P=>P&&yt(P)).catch(P=>oe(P,i,d))}const ie=i=>o.go(i);let ce;const J=new Set,Se={currentRoute:c,listening:!0,addRoute:g,removeRoute:R,hasRoute:b,getRoutes:k,resolve:E,options:e,push:M,replace:H,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:l.add,beforeResolve:p.add,afterEach:m.add,onError:Pe.add,isReady:et,install(i){const d=this;i.component("RouterLink",rn),i.component("RouterView",an),i.config.globalProperties.$router=d,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>Q(c)}),z&&!ce&&c.value===$&&(ce=!0,M(o.location).catch(C=>{}));const h={};for(const C in $)Object.defineProperty(h,C,{get:()=>c.value[C],enumerable:!0});i.provide(ne,d),i.provide(ge,nt(h)),i.provide(de,c);const v=i.unmount;J.add(i),i.unmount=function(){J.delete(i),J.size<1&&(f=$,D&&D(),D=null,c.value=$,ce=!1,Z=!1),v()}}};function q(i){return i.reduce((d,h)=>d.then(()=>ve(h)),Promise.resolve())}return Se}function ln(e,t){const n=[],r=[],o=[],l=Math.max(t.matched.length,e.matched.length);for(let p=0;p<l;p++){const m=t.matched[p];m&&(e.matched.find(f=>G(f,m))?r.push(m):n.push(m));const c=e.matched[p];c&&(t.matched.find(f=>G(f,c))||o.push(c))}return[n,r,o]}function pn(){return B(ne)}function dn(){return B(ge)}export{fn as a,pn as b,hn as c,T as i,dn as u};
