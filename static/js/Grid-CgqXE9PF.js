import{v as e,m as t,k as s,o as r,d as i,n as o,ac as l,y as n,A as a,j as p,h as d,ah as u,aV as v}from"./index-BRKk6EXp.js";import{g as f,a as c,d as h}from"./GridItem-CR1WTjzB.js";import{i as m,V as S,f as y,b as g}from"./VResizeObserver-4v6BLuM7.js";import{i as w}from"./is-browser-eVsfXsd4.js";import{p as b}from"./index-BjvGp-Uo.js";function x(e,t){var s;if(null==e)return;const r=function(e){if("number"==typeof e)return{"":e.toString()};const t={};return e.split(/ +/).forEach((e=>{if(""===e)return;const[s,r]=e.split(":");void 0===r?t[""]=s:t[s]=r})),t}(e);if(void 0===t)return r[""];if("string"==typeof t)return null!==(s=r[t])&&void 0!==s?s:r[""];if(Array.isArray(t)){for(let e=t.length-1;e>=0;--e){const s=t[e];if(s in r)return r[s]}return r[""]}{let e,s=-1;return Object.keys(r).forEach((i=>{const o=Number(i);!Number.isNaN(o)&&t>=o&&o>=s&&(s=o,e=r[i])})),e}}const R={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};const G={};const E={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},C="__ssr__",N=i({name:"Grid",inheritAttrs:!1,props:{layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:24},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},setup(e){const{mergedClsPrefixRef:i,mergedBreakpointsRef:d}=o(e),u=/^\d+$/,v=s(void 0),c=function(e=R){if(!m)return t((()=>[]));if("function"!=typeof window.matchMedia)return t((()=>[]));const i=s({}),o=Object.keys(e),l=(e,t)=>{e.matches?i.value[t]=!0:i.value[t]=!1};return o.forEach((t=>{const s=e[t];let r,i;void 0===G[s]?(r=window.matchMedia(`(min-width: ${s}px)`),r.addEventListener?r.addEventListener("change",(e=>{i.forEach((s=>{s(e,t)}))})):r.addListener&&r.addListener((e=>{i.forEach((s=>{s(e,t)}))})),i=new Set,G[s]={mql:r,cbs:i}):(r=G[s].mql,i=G[s].cbs),i.add(l),r.matches&&i.forEach((e=>{e(r,t)}))})),r((()=>{o.forEach((t=>{const{cbs:s}=G[e[t]];s.has(l)&&s.delete(l)}))})),t((()=>{const{value:e}=i;return o.filter((t=>e[t]))}))}((null==d?void 0:d.value)||E),h=l((()=>!!e.itemResponsive||(!u.test(e.cols.toString())||(!u.test(e.xGap.toString())||!u.test(e.yGap.toString()))))),S=t((()=>{if(h.value)return"self"===e.responsive?v.value:c.value})),y=l((()=>{var t;return null!==(t=Number(x(e.cols.toString(),S.value)))&&void 0!==t?t:24})),N=l((()=>x(e.xGap.toString(),S.value))),_=l((()=>x(e.yGap.toString(),S.value))),j=e=>{v.value=e.contentRect.width},$=e=>{g(j,e)},A=s(!1),D=t((()=>{if("self"===e.responsive)return $})),O=s(!1),B=s();return n((()=>{const{value:e}=B;e&&e.hasAttribute(C)&&(e.removeAttribute(C),O.value=!0)})),a(f,{layoutShiftDisabledRef:p(e,"layoutShiftDisabled"),isSsrRef:O,itemStyleRef:p(e,"itemStyle"),xGapRef:N,overflowRef:A}),{isSsr:!w,contentEl:B,mergedClsPrefix:i,style:t((()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:b(e.xGap),rowGap:b(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${y.value}, minmax(0, 1fr))`,columnGap:b(N.value),rowGap:b(_.value)})),isResponsive:h,responsiveQuery:S,responsiveCols:y,handleResize:D,overflow:A}},render(){if(this.layoutShiftDisabled)return d("div",u({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const t=()=>{var t,s,r,i,o,l,n;this.overflow=!1;const a=y(c(this)),p=[],{collapsed:f,collapsedRows:m,responsiveCols:S,responsiveQuery:g}=this;a.forEach((t=>{var s,r,i,o,l;if(!0!==(null===(s=null==t?void 0:t.type)||void 0===s?void 0:s.__GRID_ITEM__))return;if(function(t){var s;const r=null===(s=t.dirs)||void 0===s?void 0:s.find((({dir:t})=>t===e));return!(!r||!1!==r.value)}(t)){const e=v(t);return e.props?e.props.privateShow=!1:e.props={privateShow:!1},void p.push({child:e,rawChildSpan:0})}t.dirs=(null===(r=t.dirs)||void 0===r?void 0:r.filter((({dir:t})=>t!==e)))||null,0===(null===(i=t.dirs)||void 0===i?void 0:i.length)&&(t.dirs=null);const n=v(t),a=Number(null!==(l=x(null===(o=n.props)||void 0===o?void 0:o.span,g))&&void 0!==l?l:h);0!==a&&p.push({child:n,rawChildSpan:a})}));let w=0;const b=null===(t=p[p.length-1])||void 0===t?void 0:t.child;if(null==b?void 0:b.props){const e=null===(s=b.props)||void 0===s?void 0:s.suffix;void 0!==e&&!1!==e&&(w=Number(null!==(i=x(null===(r=b.props)||void 0===r?void 0:r.span,g))&&void 0!==i?i:h),b.props.privateSpan=w,b.props.privateColStart=S+1-w,b.props.privateShow=null===(o=b.props.privateShow)||void 0===o||o)}let R=0,G=!1;for(const{child:e,rawChildSpan:d}of p){if(G&&(this.overflow=!0),!G){const t=Number(null!==(n=x(null===(l=e.props)||void 0===l?void 0:l.offset,g))&&void 0!==n?n:0),s=Math.min(d+t,S);if(e.props?(e.props.privateSpan=s,e.props.privateOffset=t):e.props={privateSpan:s,privateOffset:t},f){const e=R%S;s+e>S&&(R+=S-e),s+R+w>m*S?G=!0:R+=s}}G&&(e.props?!0!==e.props.privateShow&&(e.props.privateShow=!1):e.props={privateShow:!1})}return d("div",u({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[C]:this.isSsr||void 0},this.$attrs),p.map((({child:e})=>e)))};return this.isResponsive&&"self"===this.responsive?d(S,{onResize:this.handleResize},{default:t}):t()}});export{N as _};
//# sourceMappingURL=Grid-CgqXE9PF.js.map