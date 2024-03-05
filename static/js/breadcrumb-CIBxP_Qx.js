import{g as e,f as r,a4 as t,a5 as n,d as o,n as a,u as s,A as i,j as l,m as c,p as m,h as d,c as u,af as p,k as h,y as v,ag as b,l as f,a8 as g,B as x,H as j}from"./index-BRKk6EXp.js";import{i as k}from"./is-browser-eVsfXsd4.js";import{d as C}from"./use-merged-state-BQx7kTR9.js";import{_ as z}from"./Dropdown-x6QrgcCA.js";import"./Popover-BQcZDIlw.js";import"./Follower-Dpv7d4DZ.js";import"./Scrollbar-Bnq5LiN6.js";import"./VResizeObserver-4v6BLuM7.js";import"./use-false-until-truthy-0hCE6N4L.js";import"./cssr-JAuNjITs.js";import"./format-length-l2rsThpR.js";import"./use-compitable-cf-8Oy4d.js";import"./Icon-2BIKD0e-.js";import"./ChevronRight-B8VW0T50.js";import"./happens-in-DeVOemtc.js";import"./fade-in-scale-up.cssr-CpsUdMeZ.js";import"./create-Bgokupfi.js";const y=e("breadcrumb","\n white-space: nowrap;\n cursor: default;\n line-height: var(--n-item-line-height);\n",[r("ul","\n list-style: none;\n padding: 0;\n margin: 0;\n "),r("a","\n color: inherit;\n text-decoration: inherit;\n "),e("breadcrumb-item","\n font-size: var(--n-font-size);\n transition: color .3s var(--n-bezier);\n display: inline-flex;\n align-items: center;\n ",[e("icon","\n font-size: 18px;\n vertical-align: -.2em;\n transition: color .3s var(--n-bezier);\n color: var(--n-item-text-color);\n "),r("&:not(:last-child)",[t("clickable",[n("link","\n cursor: pointer;\n ",[r("&:hover","\n background-color: var(--n-item-color-hover);\n "),r("&:active","\n background-color: var(--n-item-color-pressed); \n ")])])]),n("link","\n padding: 4px;\n border-radius: var(--n-item-border-radius);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n color: var(--n-item-text-color);\n position: relative;\n ",[r("&:hover","\n color: var(--n-item-text-color-hover);\n ",[e("icon","\n color: var(--n-item-text-color-hover);\n ")]),r("&:active","\n color: var(--n-item-text-color-pressed);\n ",[e("icon","\n color: var(--n-item-text-color-pressed);\n ")])]),n("separator","\n margin: 0 8px;\n color: var(--n-separator-color);\n transition: color .3s var(--n-bezier);\n user-select: none;\n -webkit-user-select: none;\n "),r("&:last-child",[n("link","\n font-weight: var(--n-font-weight-active);\n cursor: unset;\n color: var(--n-item-text-color-active);\n ",[e("icon","\n color: var(--n-item-text-color-active);\n ")]),n("separator","\n display: none;\n ")])])]),w=u("n-breadcrumb"),R=o({name:"Breadcrumb",props:Object.assign(Object.assign({},s.props),{separator:{type:String,default:"/"}}),setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:t}=a(e),n=s("Breadcrumb","-breadcrumb",y,p,e,r);i(w,{separatorRef:l(e,"separator"),mergedClsPrefixRef:r});const o=c((()=>{const{common:{cubicBezierEaseInOut:e},self:{separatorColor:r,itemTextColor:t,itemTextColorHover:o,itemTextColorPressed:a,itemTextColorActive:s,fontSize:i,fontWeightActive:l,itemBorderRadius:c,itemColorHover:m,itemColorPressed:d,itemLineHeight:u}}=n.value;return{"--n-font-size":i,"--n-bezier":e,"--n-item-text-color":t,"--n-item-text-color-hover":o,"--n-item-text-color-pressed":a,"--n-item-text-color-active":s,"--n-separator-color":r,"--n-item-color-hover":m,"--n-item-color-pressed":d,"--n-item-border-radius":c,"--n-font-weight-active":l,"--n-item-line-height":u}})),d=t?m("breadcrumb",void 0,o,e):void 0;return{mergedClsPrefix:r,cssVars:t?void 0:o,themeClass:null==d?void 0:d.themeClass,onRender:null==d?void 0:d.onRender}},render(){var e;return null===(e=this.onRender)||void 0===e||e.call(this),d("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},d("ul",null,this.$slots))}}),B=o({name:"BreadcrumbItem",props:{separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},setup(e,{slots:r}){const t=f(w,null);if(!t)return g("breadcrumb","`n-breadcrumb-item` must be placed inside `n-breadcrumb`."),()=>null;const{separatorRef:n,mergedClsPrefixRef:o}=t,a=((e=(k?window:null))=>{const r=()=>{const{hash:r,host:t,hostname:n,href:o,origin:a,pathname:s,port:i,protocol:l,search:c}=(null==e?void 0:e.location)||{};return{hash:r,host:t,hostname:n,href:o,origin:a,pathname:s,port:i,protocol:l,search:c}},t=()=>{n.value=r()},n=h(r());return v((()=>{e&&(e.addEventListener("popstate",t),e.addEventListener("hashchange",t))})),b((()=>{e&&(e.removeEventListener("popstate",t),e.removeEventListener("hashchange",t))})),n})(),s=c((()=>e.href?"a":"span")),i=c((()=>a.value.href===e.href?"location":null));return()=>{const{value:t}=o;return d("li",{class:[`${t}-breadcrumb-item`,e.clickable&&`${t}-breadcrumb-item--clickable`]},d(s.value,{class:`${t}-breadcrumb-item__link`,"aria-current":i.value,href:e.href,onClick:e.onClick},r),d("span",{class:`${t}-breadcrumb-item__separator`,"aria-hidden":"true"},C(r.separator,(()=>{var r;return[null!==(r=e.separator)&&void 0!==r?r:n.value]}))))}}}),P=o({name:"Breadcrumb",setup:()=>({options:[{label:"操作 1",key:1},{label:"操作 2",key:2}]}),render(){const e={color:"hsla(var(--theme-color),0.9)",fontWeight:"bold"};return x(R,{style:"marginLeft: 12px"},{default:()=>[x(B,null,{default:()=>[j("草稿箱")]}),x(B,null,{default:()=>[x(z,{options:this.options},{default:()=>[x("div",{style:e},[j("测试大屏可视化系统")])]})]})]})}});export{P as default};
//# sourceMappingURL=breadcrumb-CIBxP_Qx.js.map