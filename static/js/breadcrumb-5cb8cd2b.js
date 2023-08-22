import{g as e,f as r,a1 as n,a2 as t,d as o,n as a,u as i,A as s,j as l,m as c,p as d,h as m,c as u,al as v,k as h,y as p,am as b,l as f,ah as g,B as x,D as k}from"./index-c4b0f6b6.js";import{i as C}from"./Scrollbar-ad629143.js";import{d as _}from"./use-merged-state-1771f8fc.js";import{N as z}from"./Dropdown-a25db0a3.js";const y=e("breadcrumb","\n white-space: nowrap;\n cursor: default;\n line-height: var(--n-item-line-height);\n",[r("ul","\n list-style: none;\n padding: 0;\n margin: 0;\n "),r("a","\n color: inherit;\n text-decoration: inherit;\n "),e("breadcrumb-item","\n font-size: var(--n-font-size);\n transition: color .3s var(--n-bezier);\n display: inline-flex;\n align-items: center;\n ",[e("icon","\n font-size: 18px;\n vertical-align: -.2em;\n transition: color .3s var(--n-bezier);\n color: var(--n-item-text-color);\n "),r("&:not(:last-child)",[n("clickable",[t("link","\n cursor: pointer;\n ",[r("&:hover","\n background-color: var(--n-item-color-hover);\n "),r("&:active","\n background-color: var(--n-item-color-pressed); \n ")])])]),t("link","\n padding: 4px;\n border-radius: var(--n-item-border-radius);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n color: var(--n-item-text-color);\n position: relative;\n ",[r("&:hover","\n color: var(--n-item-text-color-hover);\n ",[e("icon","\n color: var(--n-item-text-color-hover);\n ")]),r("&:active","\n color: var(--n-item-text-color-pressed);\n ",[e("icon","\n color: var(--n-item-text-color-pressed);\n ")])]),t("separator","\n margin: 0 8px;\n color: var(--n-separator-color);\n transition: color .3s var(--n-bezier);\n user-select: none;\n -webkit-user-select: none;\n "),r("&:last-child",[t("link","\n font-weight: var(--n-font-weight-active);\n cursor: unset;\n color: var(--n-item-text-color-active);\n ",[e("icon","\n color: var(--n-item-text-color-active);\n ")]),t("separator","\n display: none;\n ")])])]),B=u("n-breadcrumb"),j=o({name:"Breadcrumb",props:Object.assign(Object.assign({},i.props),{separator:{type:String,default:"/"}}),setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=a(e),t=i("Breadcrumb","-breadcrumb",y,v,e,r);s(B,{separatorRef:l(e,"separator"),mergedClsPrefixRef:r});const o=c((()=>{const{common:{cubicBezierEaseInOut:e},self:{separatorColor:r,itemTextColor:n,itemTextColorHover:o,itemTextColorPressed:a,itemTextColorActive:i,fontSize:s,fontWeightActive:l,itemBorderRadius:c,itemColorHover:d,itemColorPressed:m,itemLineHeight:u}}=t.value;return{"--n-font-size":s,"--n-bezier":e,"--n-item-text-color":n,"--n-item-text-color-hover":o,"--n-item-text-color-pressed":a,"--n-item-text-color-active":i,"--n-separator-color":r,"--n-item-color-hover":d,"--n-item-color-pressed":m,"--n-item-border-radius":c,"--n-font-weight-active":l,"--n-item-line-height":u}})),m=n?d("breadcrumb",void 0,o,e):void 0;return{mergedClsPrefix:r,cssVars:n?void 0:o,themeClass:null==m?void 0:m.themeClass,onRender:null==m?void 0:m.onRender}},render(){var e;return null===(e=this.onRender)||void 0===e||e.call(this),m("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},m("ul",null,this.$slots))}}),w=o({name:"BreadcrumbItem",props:{separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},setup(e,{slots:r}){const n=f(B,null);if(!n)return g("breadcrumb","`n-breadcrumb-item` must be placed inside `n-breadcrumb`."),()=>null;const{separatorRef:t,mergedClsPrefixRef:o}=n,a=((e=(C?window:null))=>{const r=()=>{const{hash:r,host:n,hostname:t,href:o,origin:a,pathname:i,port:s,protocol:l,search:c}=(null==e?void 0:e.location)||{};return{hash:r,host:n,hostname:t,href:o,origin:a,pathname:i,port:s,protocol:l,search:c}},n=()=>{t.value=r()},t=h(r());return p((()=>{e&&(e.addEventListener("popstate",n),e.addEventListener("hashchange",n))})),b((()=>{e&&(e.removeEventListener("popstate",n),e.removeEventListener("hashchange",n))})),t})(),i=c((()=>e.href?"a":"span")),s=c((()=>a.value.href===e.href?"location":null));return()=>{const{value:n}=o;return m("li",{class:[`${n}-breadcrumb-item`,e.clickable&&`${n}-breadcrumb-item--clickable`]},m(i.value,{class:`${n}-breadcrumb-item__link`,"aria-current":s.value,href:e.href,onClick:e.onClick},r),m("span",{class:`${n}-breadcrumb-item__separator`,"aria-hidden":"true"},_(r.separator,(()=>{var r;return[null!==(r=e.separator)&&void 0!==r?r:t.value]}))))}}}),R={header:"_header_1vk38_1","header-left":"_header-left_1vk38_12",trigger:"_trigger_1vk38_17"},P=o({name:"Breadcrumb",setup:()=>({options:[{label:"操作 1",key:1},{label:"操作 2",key:2}]}),render(){return x(j,{style:"marginLeft: 12px"},{default:()=>[x(w,null,{default:()=>[k("草稿箱")]}),x(w,null,{default:()=>[x(z,{options:this.options},{default:()=>[x("div",{class:R.trigger},[k("测试大屏可视化系统")])]})]})]})}}),S=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));export{P as B,S as b,R as s};
//# sourceMappingURL=breadcrumb-5cb8cd2b.js.map
