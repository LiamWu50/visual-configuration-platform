import{J as n,bc as r,F as u,w as a,m as t}from"./index-7badf4e4.js";function e(n,...r){if(!Array.isArray(n))return n(...r);n.forEach((n=>e(n,...r)))}function i(a){return a.some((a=>!n(a)||a.type!==r&&!(a.type===u&&!i(a.children))))?a:null}function o(n,r){return n&&i(n())||r()}function s(n,r,u){return n&&i(n(r))||u(r)}function c(n,r){return r(n&&i(n())||null)}function f(n,r,u){return u(n&&i(n(r))||null)}function l(n){return!(n&&i(n()))}function v(n,r){return a(n,(n=>{void 0!==n&&(r.value=n)})),t((()=>void 0===n.value?r.value:n.value))}export{s as a,f as b,e as c,o as d,l as i,c as r,v as u};
//# sourceMappingURL=use-merged-state-6af7ce19.js.map
