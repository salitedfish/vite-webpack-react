var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,a=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,c=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&a(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&a(e,r,t[r]);return e},i=(e,o)=>t(e,r(o));import{R as l,a as p,r as d,c as u,b as m,d as f,e as h,t as E,f as _,P as y,H as g,g as b}from"./vendor.109bd55a.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const P={},O=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`./${e}`)in P)return;P[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},x=[{path:"/",exact:!0,render:()=>l.createElement(p,{to:"/home"})},{path:"/home",component:d.exports.lazy((()=>O((()=>import("./App_chain33Test.73612769.js")),["assets/App_chain33Test.73612769.js","assets/vendor.109bd55a.js"]))),routes:[{path:"/home",exact:!0,render:()=>l.createElement(p,{to:"/home/homeA"})},{path:"/home/homeA",exact:!0,component:d.exports.lazy((()=>O((()=>import("./index.5ad98e47.js")),["assets/index.5ad98e47.js","assets/vendor.109bd55a.js"])))},{path:"/home/homeB",exact:!0,component:d.exports.lazy((()=>O((()=>import("./index.0aec1e86.js")),["assets/index.0aec1e86.js","assets/vendor.109bd55a.js"])))}]},{path:"/login",exact:!0,component:d.exports.lazy((()=>O((()=>import("./index.21b624ef.js")),["assets/index.21b624ef.js","assets/vendor.109bd55a.js"])))}],A={loginStatus:"未登录"},T=m(u({loginReducer:function(e=A,t){switch(t.type){case!0:return i(c({},e),{loginStatus:"已登录"});case!1:return i(c({},e),{loginStatus:"未登录"});default:return e}}}),f(h(E)));console.log({}.VITE_APP_TEXT),console.log("production"),console.log({}.VITE_REACT_APP_TEXT),console.log({BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0}),_.render(l.createElement(d.exports.Suspense,{fallback:"loading"},l.createElement(y,{store:T},l.createElement(g,null,b(x)))),document.getElementById("root"));
//# sourceMappingURL=index.2520bb6c.js.map
