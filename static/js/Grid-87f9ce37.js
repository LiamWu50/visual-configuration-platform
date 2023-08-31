import{v as e,m as t,k as r,o as s,c as i,d as o,l as a,h as l,b5 as n,n as p,ae as d,y as u,A as f,j as v,aF as c,aE as h}from"./index-65f825f2.js";import{p as m}from"./index-5871ef24.js";import{i as S,V as y,f as g,b}from"./VResizeObserver-719076b1.js";import{i as w}from"./is-browser-11820a37.js";import{g as $}from"./Add-b4a68fb4.js";function R(e,t){var r;if(null==e)return;const s=function(e){if("number"==typeof e)return{"":e.toString()};const t={};return e.split(/ +/).forEach((e=>{if(""===e)return;const[r,s]=e.split(":");void 0===s?t[""]=r:t[r]=s})),t}(e);if(void 0===t)return s[""];if("string"==typeof t)return null!==(r=s[t])&&void 0!==r?r:s[""];if(Array.isArray(t)){for(let e=t.length-1;e>=0;--e){const r=t[e];if(r in s)return s[r]}return s[""]}{let e,r=-1;return Object.keys(s).forEach((i=>{const o=Number(i);!Number.isNaN(o)&&t>=o&&o>=r&&(r=o,e=s[i])})),e}}const x={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};const G={};const N=i("n-grid"),C=1,E=o({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:{span:{type:[Number,String],default:C},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},setup(){const{isSsrRef:e,xGapRef:r,itemStyleRef:s,overflowRef:i,layoutShiftDisabledRef:o}=a(N),l=n();return{overflow:i,itemStyle:s,layoutShiftDisabled:o,mergedXGap:t((()=>m(r.value||0))),deriveStyle:()=>{e.value;const{privateSpan:t=C,privateShow:s=!0,privateColStart:i,privateOffset:o=0}=l.vnode.props,{value:a}=r,n=m(a||0);return{display:s?"":"none",gridColumn:`${null!=i?i:`span ${t}`} / span ${t}`,marginLeft:o?`calc((100% - (${t} - 1) * ${n}) / ${t} * ${o} + ${n} * ${o})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:e,offset:t,mergedXGap:r}=this;return l("div",{style:{gridColumn:`span ${e} / span ${e}`,marginLeft:t?`calc((100% - (${e} - 1) * ${r}) / ${e} * ${t} + ${r} * ${t})`:""}},this.$slots)}return l("div",{style:[this.itemStyle,this.deriveStyle()]},null===(t=(e=this.$slots).default)||void 0===t?void 0:t.call(e,{overflow:this.overflow}))}}),_={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},D="__ssr__",j=o({name:"Grid",inheritAttrs:!1,props:{layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:24},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},setup(e){const{mergedClsPrefixRef:i,mergedBreakpointsRef:o}=p(e),a=/^\d+$/,l=r(void 0),n=function(e=x){if(!S)return t((()=>[]));if("function"!=typeof window.matchMedia)return t((()=>[]));const i=r({}),o=Object.keys(e),a=(e,t)=>{e.matches?i.value[t]=!0:i.value[t]=!1};return o.forEach((t=>{const r=e[t];let s,i;void 0===G[r]?(s=window.matchMedia(`(min-width: ${r}px)`),s.addEventListener?s.addEventListener("change",(e=>{i.forEach((r=>{r(e,t)}))})):s.addListener&&s.addListener((e=>{i.forEach((r=>{r(e,t)}))})),i=new Set,G[r]={mql:s,cbs:i}):(s=G[r].mql,i=G[r].cbs),i.add(a),s.matches&&i.forEach((e=>{e(s,t)}))})),s((()=>{o.forEach((t=>{const{cbs:r}=G[e[t]];r.has(a)&&r.delete(a)}))})),t((()=>{const{value:e}=i;return o.filter((t=>e[t]))}))}((null==o?void 0:o.value)||_),c=d((()=>!!e.itemResponsive||(!a.test(e.cols.toString())||(!a.test(e.xGap.toString())||!a.test(e.yGap.toString()))))),h=t((()=>{if(c.value)return"self"===e.responsive?l.value:n.value})),y=d((()=>{var t;return null!==(t=Number(R(e.cols.toString(),h.value)))&&void 0!==t?t:24})),g=d((()=>R(e.xGap.toString(),h.value))),$=d((()=>R(e.yGap.toString(),h.value))),C=e=>{l.value=e.contentRect.width},E=e=>{b(C,e)},j=r(!1),O=t((()=>{if("self"===e.responsive)return E})),A=r(!1),B=r();return u((()=>{const{value:e}=B;e&&e.hasAttribute(D)&&(e.removeAttribute(D),A.value=!0)})),f(N,{layoutShiftDisabledRef:v(e,"layoutShiftDisabled"),isSsrRef:A,itemStyleRef:v(e,"itemStyle"),xGapRef:g,overflowRef:j}),{isSsr:!w,contentEl:B,mergedClsPrefix:i,style:t((()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:m(e.xGap),rowGap:m(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${y.value}, minmax(0, 1fr))`,columnGap:m(g.value),rowGap:m($.value)})),isResponsive:c,responsiveQuery:h,responsiveCols:y,handleResize:O,overflow:j}},render(){if(this.layoutShiftDisabled)return l("div",c({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const t=()=>{var t,r,s,i,o,a,n;this.overflow=!1;const p=g($(this)),d=[],{collapsed:u,collapsedRows:f,responsiveCols:v,responsiveQuery:m}=this;p.forEach((t=>{var r,s,i,o;if(!0!==(null===(r=null==t?void 0:t.type)||void 0===r?void 0:r.__GRID_ITEM__))return;if(function(t){var r;const s=null===(r=t.dirs)||void 0===r?void 0:r.find((({dir:t})=>t===e));return!(!s||!1!==s.value)}(t)){const e=h(t);return e.props?e.props.privateShow=!1:e.props={privateShow:!1},void d.push({child:e,rawChildSpan:0})}t.dirs=(null===(s=t.dirs)||void 0===s?void 0:s.filter((({dir:t})=>t!==e)))||null;const a=h(t),l=Number(null!==(o=R(null===(i=a.props)||void 0===i?void 0:i.span,m))&&void 0!==o?o:1);0!==l&&d.push({child:a,rawChildSpan:l})}));let S=0;const y=null===(t=d[d.length-1])||void 0===t?void 0:t.child;if(null==y?void 0:y.props){const e=null===(r=y.props)||void 0===r?void 0:r.suffix;void 0!==e&&!1!==e&&(S=null!==(i=null===(s=y.props)||void 0===s?void 0:s.span)&&void 0!==i?i:1,y.props.privateSpan=S,y.props.privateColStart=v+1-S,y.props.privateShow=null===(o=y.props.privateShow)||void 0===o||o)}let b=0,w=!1;for(const{child:e,rawChildSpan:l}of d){if(w&&(this.overflow=!0),!w){const t=Number(null!==(n=R(null===(a=e.props)||void 0===a?void 0:a.offset,m))&&void 0!==n?n:0),r=Math.min(l+t,v);if(e.props?(e.props.privateSpan=r,e.props.privateOffset=t):e.props={privateSpan:r,privateOffset:t},u){const e=b%v;r+e>v&&(b+=v-e),r+b+S>f*v?w=!0:b+=r}}w&&(e.props?!0!==e.props.privateShow&&(e.props.privateShow=!1):e.props={privateShow:!1})}return l("div",c({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[D]:this.isSsr||void 0},this.$attrs),d.map((({child:e})=>e)))};return this.isResponsive&&"self"===this.responsive?l(y,{onResize:this.handleResize},{default:t}):t()}});export{j as N,E as a};
//# sourceMappingURL=Grid-87f9ce37.js.map
