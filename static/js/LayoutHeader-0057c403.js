import{a as o,b as e,b8 as r,b9 as l,c as t,g as n,a1 as s,d as a,u as i,k as d,n as c,A as b,m as u,p as h,h as v}from"./index-7bb835e0.js";import{u as C,N as p}from"./Scrollbar-eb16fdf0.js";const m=o({name:"Layout",common:e,peers:{Scrollbar:r},self:o=>{const{baseColor:e,textColor2:r,bodyColor:t,cardColor:n,dividerColor:s,actionColor:a,scrollbarColor:i,scrollbarColorHover:d,invertedColor:c}=o;return{textColor:r,textColorInverted:"#FFF",color:t,colorEmbedded:a,headerColor:n,headerColorInverted:c,footerColor:a,footerColorInverted:c,headerBorderColor:s,headerBorderColorInverted:c,footerBorderColor:s,footerBorderColorInverted:c,siderBorderColor:s,siderBorderColorInverted:c,siderColor:n,siderColorInverted:c,siderToggleButtonBorder:`1px solid ${s}`,siderToggleButtonColor:e,siderToggleButtonIconColor:r,siderToggleButtonIconColorInverted:r,siderToggleBarColor:l(t,i),siderToggleBarColorHover:l(t,d),__invertScrollbar:"true"}}}),f=t("n-layout-sider"),g={type:String,default:"static"},y=n("layout","\n color: var(--n-text-color);\n background-color: var(--n-color);\n box-sizing: border-box;\n position: relative;\n z-index: auto;\n flex: auto;\n overflow: hidden;\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n",[n("layout-scroll-container","\n overflow-x: hidden;\n box-sizing: border-box;\n height: 100%;\n "),s("absolute-positioned","\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ")]),x={embedded:Boolean,position:g,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},S=t("n-layout");function B(o){return a({name:o?"LayoutContent":"Layout",props:Object.assign(Object.assign({},i.props),x),setup(o){const e=d(null),r=d(null),{mergedClsPrefixRef:l,inlineThemeDisabled:t}=c(o),n=i("Layout","-layout",y,m,o,l);b(S,o);let s=0,a=0;C((()=>{if(o.nativeScrollbar){const o=e.value;o&&(o.scrollTop=a,o.scrollLeft=s)}}));const v={scrollTo:function(l,t){if(o.nativeScrollbar){const{value:o}=e;o&&(void 0===t?o.scrollTo(l):o.scrollTo(l,t))}else{const{value:o}=r;o&&o.scrollTo(l,t)}}},p=u((()=>{const{common:{cubicBezierEaseInOut:e},self:r}=n.value;return{"--n-bezier":e,"--n-color":o.embedded?r.colorEmbedded:r.color,"--n-text-color":r.textColor}})),f=t?h("layout",u((()=>o.embedded?"e":"")),p,o):void 0;return Object.assign({mergedClsPrefix:l,scrollableElRef:e,scrollbarInstRef:r,hasSiderStyle:{display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},mergedTheme:n,handleNativeElScroll:e=>{var r;const l=e.target;s=l.scrollLeft,a=l.scrollTop,null===(r=o.onScroll)||void 0===r||r.call(o,e)},cssVars:t?void 0:p,themeClass:null==f?void 0:f.themeClass,onRender:null==f?void 0:f.onRender},v)},render(){var e;const{mergedClsPrefix:r,hasSider:l}=this;null===(e=this.onRender)||void 0===e||e.call(this);const t=l?this.hasSiderStyle:void 0,n=[this.themeClass,o&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return v("div",{class:n,style:this.cssVars},this.nativeScrollbar?v("div",{ref:"scrollableElRef",class:`${r}-layout-scroll-container`,style:[this.contentStyle,t],onScroll:this.handleNativeElScroll},this.$slots):v(p,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,t]}),this.$slots))}})}const I=B(!1),T=B(!0),z=n("layout-header","\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n box-sizing: border-box;\n width: 100%;\n background-color: var(--n-color);\n color: var(--n-text-color);\n",[s("absolute-positioned","\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n "),s("bordered","\n border-bottom: solid 1px var(--n-border-color);\n ")]),$={position:g,inverted:Boolean,bordered:{type:Boolean,default:!1}},O=a({name:"LayoutHeader",props:Object.assign(Object.assign({},i.props),$),setup(o){const{mergedClsPrefixRef:e,inlineThemeDisabled:r}=c(o),l=i("Layout","-layout-header",z,m,o,e),t=u((()=>{const{common:{cubicBezierEaseInOut:e},self:r}=l.value,t={"--n-bezier":e};return o.inverted?(t["--n-color"]=r.headerColorInverted,t["--n-text-color"]=r.textColorInverted,t["--n-border-color"]=r.headerBorderColorInverted):(t["--n-color"]=r.headerColor,t["--n-text-color"]=r.textColor,t["--n-border-color"]=r.headerBorderColor),t})),n=r?h("layout-header",u((()=>o.inverted?"a":"b")),t,o):void 0;return{mergedClsPrefix:e,cssVars:r?void 0:t,themeClass:null==n?void 0:n.themeClass,onRender:null==n?void 0:n.onRender}},render(){var o;const{mergedClsPrefix:e}=this;return null===(o=this.onRender)||void 0===o||o.call(this),v("div",{class:[`${e}-layout-header`,this.themeClass,this.position&&`${e}-layout-header--${this.position}-positioned`,this.bordered&&`${e}-layout-header--bordered`],style:this.cssVars},this.$slots)}});export{O as N,T as a,I as b,f as c,m as d,S as l,g as p};
//# sourceMappingURL=LayoutHeader-0057c403.js.map
