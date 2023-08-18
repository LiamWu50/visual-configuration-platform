import{v as e,m as t,k as r,o as s,c as l,d as i,l as a,h as o,I as n,n as p,J as u,y as d,A as f,j as v,K as c,M as m,O as h,B as y,P as S}from"./index-6cb66bfc.js";import{l as b}from"./lodash-141f76e2.js";import{u as g}from"./index-a354472f.js";import{N as w,C as x,a as $}from"./CaretForwardOutline-0e357931.js";import{N as R}from"./Form-6bf5c629.js";import{i as G,V as N,f as C}from"./VResizeObserver-44d0f14b.js";import{i as j,b as E}from"./Scrollbar-ae2a5d2f.js";import{g as _,N as B,a as O}from"./InputNumber-66efcc82.js";import{p as A}from"./index-5871ef24.js";import{N as D}from"./Icon-5dd8a9e0.js";function I(e,t){var r;if(null==e)return;const s=function(e){if("number"==typeof e)return{"":e.toString()};const t={};return e.split(/ +/).forEach((e=>{if(""===e)return;const[r,s]=e.split(":");void 0===s?t[""]=r:t[r]=s})),t}(e);if(void 0===t)return s[""];if("string"==typeof t)return null!==(r=s[t])&&void 0!==r?r:s[""];if(Array.isArray(t)){for(let e=t.length-1;e>=0;--e){const r=t[e];if(r in s)return s[r]}return s[""]}{let e,r=-1;return Object.keys(s).forEach((l=>{const i=Number(l);!Number.isNaN(i)&&t>=i&&i>=r&&(r=i,e=s[l])})),e}}const L={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};const P={};const z=l("n-grid"),M=1,k=i({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:{span:{type:[Number,String],default:M},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},setup(){const{isSsrRef:e,xGapRef:r,itemStyleRef:s,overflowRef:l,layoutShiftDisabledRef:i}=a(z),o=n();return{overflow:l,itemStyle:s,layoutShiftDisabled:i,mergedXGap:t((()=>A(r.value||0))),deriveStyle:()=>{e.value;const{privateSpan:t=M,privateShow:s=!0,privateColStart:l,privateOffset:i=0}=o.vnode.props,{value:a}=r,n=A(a||0);return{display:s?"":"none",gridColumn:`${null!=l?l:`span ${t}`} / span ${t}`,marginLeft:i?`calc((100% - (${t} - 1) * ${n}) / ${t} * ${i} + ${n} * ${i})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:e,offset:t,mergedXGap:r}=this;return o("div",{style:{gridColumn:`span ${e} / span ${e}`,marginLeft:t?`calc((100% - (${e} - 1) * ${r}) / ${e} * ${t} + ${r} * ${t})`:""}},this.$slots)}return o("div",{style:[this.itemStyle,this.deriveStyle()]},null===(t=(e=this.$slots).default)||void 0===t?void 0:t.call(e,{overflow:this.overflow}))}}),T={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},F="__ssr__",K=i({name:"Grid",inheritAttrs:!1,props:{layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:24},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},setup(e){const{mergedClsPrefixRef:l,mergedBreakpointsRef:i}=p(e),a=/^\d+$/,o=r(void 0),n=function(e=L){if(!G)return t((()=>[]));if("function"!=typeof window.matchMedia)return t((()=>[]));const l=r({}),i=Object.keys(e),a=(e,t)=>{e.matches?l.value[t]=!0:l.value[t]=!1};return i.forEach((t=>{const r=e[t];let s,l;void 0===P[r]?(s=window.matchMedia(`(min-width: ${r}px)`),s.addEventListener?s.addEventListener("change",(e=>{l.forEach((r=>{r(e,t)}))})):s.addListener&&s.addListener((e=>{l.forEach((r=>{r(e,t)}))})),l=new Set,P[r]={mql:s,cbs:l}):(s=P[r].mql,l=P[r].cbs),l.add(a),s.matches&&l.forEach((e=>{e(s,t)}))})),s((()=>{i.forEach((t=>{const{cbs:r}=P[e[t]];r.has(a)&&r.delete(a)}))})),t((()=>{const{value:e}=l;return i.filter((t=>e[t]))}))}((null==i?void 0:i.value)||T),c=u((()=>!!e.itemResponsive||(!a.test(e.cols.toString())||(!a.test(e.xGap.toString())||!a.test(e.yGap.toString()))))),m=t((()=>{if(c.value)return"self"===e.responsive?o.value:n.value})),h=u((()=>{var t;return null!==(t=Number(I(e.cols.toString(),m.value)))&&void 0!==t?t:24})),y=u((()=>I(e.xGap.toString(),m.value))),S=u((()=>I(e.yGap.toString(),m.value))),b=e=>{o.value=e.contentRect.width},g=e=>{E(b,e)},w=r(!1),x=t((()=>{if("self"===e.responsive)return g})),$=r(!1),R=r();return d((()=>{const{value:e}=R;e&&e.hasAttribute(F)&&(e.removeAttribute(F),$.value=!0)})),f(z,{layoutShiftDisabledRef:v(e,"layoutShiftDisabled"),isSsrRef:$,itemStyleRef:v(e,"itemStyle"),xGapRef:y,overflowRef:w}),{isSsr:!j,contentEl:R,mergedClsPrefix:l,style:t((()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:A(e.xGap),rowGap:A(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${h.value}, minmax(0, 1fr))`,columnGap:A(y.value),rowGap:A(S.value)})),isResponsive:c,responsiveQuery:m,responsiveCols:h,handleResize:x,overflow:w}},render(){if(this.layoutShiftDisabled)return o("div",c({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const t=()=>{var t,r,s,l,i,a,n;this.overflow=!1;const p=C(_(this)),u=[],{collapsed:d,collapsedRows:f,responsiveCols:v,responsiveQuery:h}=this;p.forEach((t=>{var r,s,l,i;if(!0!==(null===(r=null==t?void 0:t.type)||void 0===r?void 0:r.__GRID_ITEM__))return;if(function(t){var r;const s=null===(r=t.dirs)||void 0===r?void 0:r.find((({dir:t})=>t===e));return!(!s||!1!==s.value)}(t)){const e=m(t);return e.props?e.props.privateShow=!1:e.props={privateShow:!1},void u.push({child:e,rawChildSpan:0})}t.dirs=(null===(s=t.dirs)||void 0===s?void 0:s.filter((({dir:t})=>t!==e)))||null;const a=m(t),o=Number(null!==(i=I(null===(l=a.props)||void 0===l?void 0:l.span,h))&&void 0!==i?i:1);0!==o&&u.push({child:a,rawChildSpan:o})}));let y=0;const S=null===(t=u[u.length-1])||void 0===t?void 0:t.child;if(null==S?void 0:S.props){const e=null===(r=S.props)||void 0===r?void 0:r.suffix;void 0!==e&&!1!==e&&(y=null!==(l=null===(s=S.props)||void 0===s?void 0:s.span)&&void 0!==l?l:1,S.props.privateSpan=y,S.props.privateColStart=v+1-y,S.props.privateShow=null===(i=S.props.privateShow)||void 0===i||i)}let b=0,g=!1;for(const{child:e,rawChildSpan:o}of u){if(g&&(this.overflow=!0),!g){const t=Number(null!==(n=I(null===(a=e.props)||void 0===a?void 0:a.offset,h))&&void 0!==n?n:0),r=Math.min(o+t,v);if(e.props?(e.props.privateSpan=r,e.props.privateOffset=t):e.props={privateSpan:r,privateOffset:t},d){const e=b%v;r+e>v&&(b+=v-e),r+b+y>f*v?g=!0:b+=r}}g&&(e.props?!0!==e.props.privateShow&&(e.props.privateShow=!1):e.props={privateShow:!1})}return o("div",c({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[F]:this.isSsr||void 0},this.$attrs),u.map((({child:e})=>e)))};return this.isResponsive&&"self"===this.responsive?o(N,{onResize:this.handleResize},{default:t}):t()}});const V=i({name:"BaseAttrs",setup(e,{slots:r}){const s=g(),{curPrimitive:l}=h(s),i=t((()=>{var e;return null==(e=l.value)?void 0:e.style})),a=[{label:"左边距",type:"left"},{label:"上边距",type:"top"},{label:"宽度",type:"width"},{label:"高度",type:"height"}],o=b.debounce(((e,t)=>{var r;["top","left","width","height"].includes(e)&&(null==(r=l.value)||r.updateStyleByKey(e,t))}),300);return()=>y($,{defaultExpandedNames:"baseAttrs"},{default:()=>{var e;return[y(w,{title:"基础样式",name:"baseAttrs"},{default:()=>{let e;return y(R,{size:"small",labelPlacement:"left",labelAlign:"left",showLabel:!1},{default:()=>{return[y(K,{xGap:12,cols:2},(t=e=a.map((e=>y(k,null,{default:()=>[y(B,null,{default:()=>[y(O,{value:i.value[e.type],"onUpdate:value":t=>i.value[e.type]=t,onUpdateValue:t=>o(e.type,t),max:9999,min:-9999,showButton:!1,precision:0,clearable:!0,placeholder:`请输入${e.label}`},{prefix:e.label})]})]}))),"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!S(t)?e:{default:()=>[e]}))];var t}})}}),null==(e=r.default)?void 0:e.call(r)]},arrow:()=>y(D,{size:12},{default:()=>[y(x,null,null)]})})}});export{V as B};
//# sourceMappingURL=base-attrs-fe87178d.js.map
