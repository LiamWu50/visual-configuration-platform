import{g as e,f as r,a4 as t,a5 as o,d as n,n as a,u as s,A as i,j as l,m as c,p as m,h as d,c as u,af as p,k as v,y as h,ag as b,l as f,a8 as g,B as x,H as j}from"./index-6455addc.js";import{i as C}from"./is-browser-11820a37.js";import{d as k}from"./use-merged-state-1589eac9.js";import{_ as z}from"./Dropdown-03ada580.js";import"./Popover-418c51b5.js";import"./Follower-46ec2e6b.js";import"./Scrollbar-d957449d.js";import"./VResizeObserver-24ff23d9.js";import"./use-false-until-truthy-4cf4cfa9.js";import"./cssr-67ce2f74.js";import"./format-length-2aad21f5.js";import"./use-compitable-0a064be2.js";import"./Icon-7030c950.js";import"./ChevronRight-8bf64fcd.js";import"./create-e88f5dcb.js";import"./fade-in-scale-up.cssr-f76691ca.js";const y=e("breadcrumb","\n white-space: nowrap;\n cursor: default;\n line-height: var(--n-item-line-height);\n",[r("ul","\n list-style: none;\n padding: 0;\n margin: 0;\n "),r("a","\n color: inherit;\n text-decoration: inherit;\n "),e("breadcrumb-item","\n font-size: var(--n-font-size);\n transition: color .3s var(--n-bezier);\n display: inline-flex;\n align-items: center;\n ",[e("icon","\n font-size: 18px;\n vertical-align: -.2em;\n transition: color .3s var(--n-bezier);\n color: var(--n-item-text-color);\n "),r("&:not(:last-child)",[t("clickable",[o("link","\n cursor: pointer;\n ",[r("&:hover","\n background-color: var(--n-item-color-hover);\n "),r("&:active","\n background-color: var(--n-item-color-pressed); \n ")])])]),o("link","\n padding: 4px;\n border-radius: var(--n-item-border-radius);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n color: var(--n-item-text-color);\n position: relative;\n ",[r("&:hover","\n color: var(--n-item-text-color-hover);\n ",[e("icon","\n color: var(--n-item-text-color-hover);\n ")]),r("&:active","\n color: var(--n-item-text-color-pressed);\n ",[e("icon","\n color: var(--n-item-text-color-pressed);\n ")])]),o("separator","\n margin: 0 8px;\n color: var(--n-separator-color);\n transition: color .3s var(--n-bezier);\n user-select: none;\n -webkit-user-select: none;\n "),r("&:last-child",[o("link","\n font-weight: var(--n-font-weight-active);\n cursor: unset;\n color: var(--n-item-text-color-active);\n ",[e("icon","\n color: var(--n-item-text-color-active);\n ")]),o("separator","\n display: none;\n ")])])]),w=u("n-breadcrumb"),R=n({name:"Breadcrumb",props:Object.assign(Object.assign({},s.props),{separator:{type:String,default:"/"}}),setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:t}=a(e),o=s("Breadcrumb","-breadcrumb",y,p,e,r);i(w,{separatorRef:l(e,"separator"),mergedClsPrefixRef:r});const n=c((()=>{const{common:{cubicBezierEaseInOut:e},self:{separatorColor:r,itemTextColor:t,itemTextColorHover:n,itemTextColorPressed:a,itemTextColorActive:s,fontSize:i,fontWeightActive:l,itemBorderRadius:c,itemColorHover:m,itemColorPressed:d,itemLineHeight:u}}=o.value;return{"--n-font-size":i,"--n-bezier":e,"--n-item-text-color":t,"--n-item-text-color-hover":n,"--n-item-text-color-pressed":a,"--n-item-text-color-active":s,"--n-separator-color":r,"--n-item-color-hover":m,"--n-item-color-pressed":d,"--n-item-border-radius":c,"--n-font-weight-active":l,"--n-item-line-height":u}})),d=t?m("breadcrumb",void 0,n,e):void 0;return{mergedClsPrefix:r,cssVars:t?void 0:n,themeClass:null==d?void 0:d.themeClass,onRender:null==d?void 0:d.onRender}},render(){var e;return null===(e=this.onRender)||void 0===e||e.call(this),d("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},d("ul",null,this.$slots))}}),B=n({name:"BreadcrumbItem",props:{separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},setup(e,{slots:r}){const t=f(w,null);if(!t)return g("breadcrumb","`n-breadcrumb-item` must be placed inside `n-breadcrumb`."),()=>null;const{separatorRef:o,mergedClsPrefixRef:n}=t,a=((e=(C?window:null))=>{const r=()=>{const{hash:r,host:t,hostname:o,href:n,origin:a,pathname:s,port:i,protocol:l,search:c}=(null==e?void 0:e.location)||{};return{hash:r,host:t,hostname:o,href:n,origin:a,pathname:s,port:i,protocol:l,search:c}},t=()=>{o.value=r()},o=v(r());return h((()=>{e&&(e.addEventListener("popstate",t),e.addEventListener("hashchange",t))})),b((()=>{e&&(e.removeEventListener("popstate",t),e.removeEventListener("hashchange",t))})),o})(),s=c((()=>e.href?"a":"span")),i=c((()=>a.value.href===e.href?"location":null));return()=>{const{value:t}=n;return d("li",{class:[`${t}-breadcrumb-item`,e.clickable&&`${t}-breadcrumb-item--clickable`]},d(s.value,{class:`${t}-breadcrumb-item__link`,"aria-current":i.value,href:e.href,onClick:e.onClick},r),d("span",{class:`${t}-breadcrumb-item__separator`,"aria-hidden":"true"},k(r.separator,(()=>{var r;return[null!==(r=e.separator)&&void 0!==r?r:o.value]}))))}}}),P=n({name:"Breadcrumb",setup:()=>({options:[{label:"操作 1",key:1},{label:"操作 2",key:2}]}),render(){const e={color:"hsla(var(--theme-color),0.9)",fontWeight:"bold"};return x(R,{style:"marginLeft: 12px"},{default:()=>[x(B,null,{default:()=>[j("草稿箱")]}),x(B,null,{default:()=>[x(z,{options:this.options},{default:()=>[x("div",{style:e},[j("测试大屏可视化系统")])]})]})]})}});export{P as default};
//# sourceMappingURL=breadcrumb-b53973ad.js.map
