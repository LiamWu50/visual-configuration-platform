import{d as e,k as t,a0 as n,h as a,a1 as r,a2 as o,a3 as i,c as s,z as l,l as d,Y as b,a4 as c,m as p,a5 as f,F as v,N as u,a6 as h,a7 as g,a8 as x,g as m,O as y,f as w,P as z,i as $,n as R,u as C,w as S,A as P,j as T,p as A,a9 as W,s as L,aa as j,ab as B,ac as _,ad as k,v as N,B as E,H as O}from"./index-fe0af359.js";import{s as H}from"./index.module-bc849364.js";import F from"./style-settings-e9abfbce.js";import{A as I,g as V}from"./Add-325e4027.js";import{c as D,a as M,u as X,f as U,o as G}from"./cssr-b7c4dd6f.js";import{u as Y,b as q,V as J,c as K}from"./VResizeObserver-843f8938.js";import"./index-b19b26c5.js";const Q=M(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[M("&::-webkit-scrollbar",{width:0,height:0})]),Z=e({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=t(null);const a=n();Q.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:D,ssr:a});const r={scrollTo(...t){var n;null===(n=e.value)||void 0===n||n.scrollTo(...t)}};return Object.assign({selfRef:e,handleWheel:function(e){e.currentTarget.offsetWidth<e.currentTarget.scrollWidth&&0!==e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}},r)},render(){return a("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var ee=/\s/;var te=/^\s+/;function ne(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&ee.test(e.charAt(t)););return t}(e)+1).replace(te,""):e}var ae=NaN,re=/^[-+]0x[0-9a-f]+$/i,oe=/^0b[01]+$/i,ie=/^0o[0-7]+$/i,se=parseInt;function le(e){if("number"==typeof e)return e;if(r(e))return ae;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ne(e);var n=oe.test(e);return n||ie.test(e)?se(e.slice(2),n?2:8):re.test(e)?ae:+e}const de=function(){return i.Date.now()};var be="Expected a function",ce=Math.max,pe=Math.min;function fe(e,t,n){var a,r,i,s,l,d,b=0,c=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError(be);function v(t){var n=a,o=r;return a=r=void 0,b=t,s=e.apply(o,n)}function u(e){var n=e-d;return void 0===d||n>=t||n<0||p&&e-b>=i}function h(){var e=de();if(u(e))return g(e);l=setTimeout(h,function(e){var n=t-(e-d);return p?pe(n,i-(e-b)):n}(e))}function g(e){return l=void 0,f&&a?v(e):(a=r=void 0,s)}function x(){var e=de(),n=u(e);if(a=arguments,r=this,d=e,n){if(void 0===l)return function(e){return b=e,l=setTimeout(h,t),c?v(e):s}(d);if(p)return clearTimeout(l),l=setTimeout(h,t),v(d)}return void 0===l&&(l=setTimeout(h,t)),s}return t=le(t)||0,o(n)&&(c=!!n.leading,i=(p="maxWait"in n)?ce(le(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),x.cancel=function(){void 0!==l&&clearTimeout(l),b=0,a=d=r=l=void 0},x.flush=function(){return void 0===l?s:g(de())},x}function ve(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),fe(e,t,{leading:a,maxWait:t,trailing:r})}const ue=s("n-tabs"),he={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ge=e({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:he,setup(e){l((()=>{void 0!==e.label&&c("tab-pane","`label` is deprecated, please use `tab` instead.")}));const t=d(ue,null);return t||b("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return a("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),xe=e({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},x(he,["displayDirective"])),setup(e){const{mergedClsPrefixRef:t,valueRef:n,typeRef:a,closableRef:r,tabStyleRef:o,tabChangeIdRef:i,onBeforeLeaveRef:s,triggerRef:l,handleAdd:b,activateTab:c,handleClose:f}=d(ue);return{trigger:l,mergedClosable:p((()=>{if(e.internalAddable)return!1;const{closable:t}=e;return void 0===t?r.value:t})),style:o,clsPrefix:t,value:n,type:a,handleClose(t){t.stopPropagation(),e.disabled||f(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable)return void b();const{name:t}=e,a=++i.id;if(t!==n.value){const{value:r}=s;r?Promise.resolve(r(e.name,n.value)).then((e=>{e&&i.id===a&&c(t)})):c(t)}}}},render(){const{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:o,tab:i,value:s,mergedClosable:l,style:d,trigger:b,$slots:{default:c}}=this,p=null!=o?o:i;return a("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?a("div",{class:`${t}-tabs-tab-pad`}):null,a("div",Object.assign({key:n,"data-name":n,"data-disabled":!!r||void 0},f({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,l&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:"click"===b?this.activateTab:void 0,onMouseenter:"hover"===b?this.activateTab:void 0,style:e?void 0:d},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),a("span",{class:`${t}-tabs-tab__label`},e?a(v,null,a("div",{class:`${t}-tabs-tab__height-placeholder`}," "),a(u,{clsPrefix:t},{default:()=>a(I,null)})):c?c():"object"==typeof p?p:h(null!=p?p:n)),l&&"card"===this.type?a(g,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),me=m("tabs","\n box-sizing: border-box;\n width: 100%;\n display: flex;\n flex-direction: column;\n transition:\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n",[y("segment-type",[m("tabs-rail",[w("&.transition-disabled","color: red;",[m("tabs-tab","\n transition: none;\n ")])])]),y("top",[m("tab-pane","\n padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);\n ")]),y("left",[m("tab-pane","\n padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);\n ")]),y("left, right","\n flex-direction: row;\n ",[m("tabs-bar","\n width: 2px;\n right: 0;\n transition:\n top .2s var(--n-bezier),\n max-height .2s var(--n-bezier),\n background-color .3s var(--n-bezier);\n "),m("tabs-tab","\n padding: var(--n-tab-padding-vertical); \n ")]),y("right","\n flex-direction: row-reverse;\n ",[m("tab-pane","\n padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);\n "),m("tabs-bar","\n left: 0;\n ")]),y("bottom","\n flex-direction: column-reverse;\n justify-content: flex-end;\n ",[m("tab-pane","\n padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);\n "),m("tabs-bar","\n top: 0;\n ")]),m("tabs-rail","\n padding: 3px;\n border-radius: var(--n-tab-border-radius);\n width: 100%;\n background-color: var(--n-color-segment);\n transition: background-color .3s var(--n-bezier);\n display: flex;\n align-items: center;\n ",[m("tabs-tab-wrapper","\n flex-basis: 0;\n flex-grow: 1;\n display: flex;\n align-items: center;\n justify-content: center;\n ",[m("tabs-tab","\n overflow: hidden;\n border-radius: var(--n-tab-border-radius);\n width: 100%;\n display: flex;\n align-items: center;\n justify-content: center;\n ",[y("active","\n font-weight: var(--n-font-weight-strong);\n color: var(--n-tab-text-color-active);\n background-color: var(--n-tab-color-segment);\n box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);\n "),w("&:hover","\n color: var(--n-tab-text-color-hover);\n ")])])]),y("flex",[m("tabs-nav",{width:"100%"},[m("tabs-wrapper",{width:"100%"},[m("tabs-tab",{marginRight:0})])])]),m("tabs-nav","\n box-sizing: border-box;\n line-height: 1.5;\n display: flex;\n transition: border-color .3s var(--n-bezier);\n ",[z("prefix, suffix","\n display: flex;\n align-items: center;\n "),z("prefix","padding-right: 16px;"),z("suffix","padding-left: 16px;")]),y("top, bottom",[m("tabs-nav-scroll-wrapper",[w("&::before","\n top: 0;\n bottom: 0;\n left: 0;\n width: 20px;\n "),w("&::after","\n top: 0;\n bottom: 0;\n right: 0;\n width: 20px;\n "),y("shadow-start",[w("&::before","\n box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);\n ")]),y("shadow-end",[w("&::after","\n box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);\n ")])])]),y("left, right",[m("tabs-nav-scroll-wrapper",[w("&::before","\n top: 0;\n left: 0;\n right: 0;\n height: 20px;\n "),w("&::after","\n bottom: 0;\n left: 0;\n right: 0;\n height: 20px;\n "),y("shadow-start",[w("&::before","\n box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);\n ")]),y("shadow-end",[w("&::after","\n box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);\n ")])])]),m("tabs-nav-scroll-wrapper","\n flex: 1;\n position: relative;\n overflow: hidden;\n ",[m("tabs-nav-y-scroll","\n height: 100%;\n width: 100%;\n overflow-y: auto; \n scrollbar-width: none;\n ",[w("&::-webkit-scrollbar","\n width: 0;\n height: 0;\n ")]),w("&::before, &::after",'\n transition: box-shadow .3s var(--n-bezier);\n pointer-events: none;\n content: "";\n position: absolute;\n z-index: 1;\n ')]),m("tabs-nav-scroll-content","\n display: flex;\n position: relative;\n min-width: 100%;\n width: fit-content;\n box-sizing: border-box;\n "),m("tabs-wrapper","\n display: inline-flex;\n flex-wrap: nowrap;\n position: relative;\n "),m("tabs-tab-wrapper","\n display: flex;\n flex-wrap: nowrap;\n flex-shrink: 0;\n flex-grow: 0;\n "),m("tabs-tab","\n cursor: pointer;\n white-space: nowrap;\n flex-wrap: nowrap;\n display: inline-flex;\n align-items: center;\n color: var(--n-tab-text-color);\n font-size: var(--n-tab-font-size);\n background-clip: padding-box;\n padding: var(--n-tab-padding);\n transition:\n box-shadow .3s var(--n-bezier),\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ",[y("disabled",{cursor:"not-allowed"}),z("close","\n margin-left: 6px;\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n "),z("label","\n display: flex;\n align-items: center;\n ")]),m("tabs-bar","\n position: absolute;\n bottom: 0;\n height: 2px;\n border-radius: 1px;\n background-color: var(--n-bar-color);\n transition:\n left .2s var(--n-bezier),\n max-width .2s var(--n-bezier),\n background-color .3s var(--n-bezier);\n ",[w("&.transition-disabled","\n transition: none;\n "),y("disabled","\n background-color: var(--n-tab-text-color-disabled)\n ")]),m("tabs-pane-wrapper","\n position: relative;\n overflow: hidden;\n transition: max-height .2s var(--n-bezier);\n "),m("tab-pane","\n color: var(--n-pane-text-color);\n width: 100%;\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n opacity .2s var(--n-bezier);\n left: 0;\n right: 0;\n top: 0;\n ",[w("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active","\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n transform .2s var(--n-bezier),\n opacity .2s var(--n-bezier);\n "),w("&.next-transition-leave-active, &.prev-transition-leave-active","\n position: absolute;\n "),w("&.next-transition-enter-from, &.prev-transition-leave-to","\n transform: translateX(32px);\n opacity: 0;\n "),w("&.next-transition-leave-to, &.prev-transition-enter-from","\n transform: translateX(-32px);\n opacity: 0;\n "),w("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to","\n transform: translateX(0);\n opacity: 1;\n ")]),m("tabs-tab-pad","\n box-sizing: border-box;\n width: var(--n-tab-gap);\n flex-grow: 0;\n flex-shrink: 0;\n "),y("line-type, bar-type",[m("tabs-tab","\n font-weight: var(--n-tab-font-weight);\n box-sizing: border-box;\n vertical-align: bottom;\n ",[w("&:hover",{color:"var(--n-tab-text-color-hover)"}),y("active","\n color: var(--n-tab-text-color-active);\n font-weight: var(--n-tab-font-weight-active);\n "),y("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),m("tabs-nav",[y("line-type",[y("top",[z("prefix, suffix","\n border-bottom: 1px solid var(--n-tab-border-color);\n "),m("tabs-nav-scroll-content","\n border-bottom: 1px solid var(--n-tab-border-color);\n "),m("tabs-bar","\n bottom: -1px;\n ")]),y("left",[z("prefix, suffix","\n border-right: 1px solid var(--n-tab-border-color);\n "),m("tabs-nav-scroll-content","\n border-right: 1px solid var(--n-tab-border-color);\n "),m("tabs-bar","\n right: -1px;\n ")]),y("right",[z("prefix, suffix","\n border-left: 1px solid var(--n-tab-border-color);\n "),m("tabs-nav-scroll-content","\n border-left: 1px solid var(--n-tab-border-color);\n "),m("tabs-bar","\n left: -1px;\n ")]),y("bottom",[z("prefix, suffix","\n border-top: 1px solid var(--n-tab-border-color);\n "),m("tabs-nav-scroll-content","\n border-top: 1px solid var(--n-tab-border-color);\n "),m("tabs-bar","\n top: -1px;\n ")]),z("prefix, suffix","\n transition: border-color .3s var(--n-bezier);\n "),m("tabs-nav-scroll-content","\n transition: border-color .3s var(--n-bezier);\n "),m("tabs-bar","\n border-radius: 0;\n ")]),y("card-type",[z("prefix, suffix","\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),m("tabs-pad","\n flex-grow: 1;\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),m("tabs-tab-pad","\n transition: border-color .3s var(--n-bezier);\n "),m("tabs-tab","\n font-weight: var(--n-tab-font-weight);\n border: 1px solid var(--n-tab-border-color);\n background-color: var(--n-tab-color);\n box-sizing: border-box;\n position: relative;\n vertical-align: bottom;\n display: flex;\n justify-content: space-between;\n font-size: var(--n-tab-font-size);\n color: var(--n-tab-text-color);\n ",[y("addable","\n padding-left: 8px;\n padding-right: 8px;\n font-size: 16px;\n ",[z("height-placeholder","\n width: 0;\n font-size: var(--n-tab-font-size);\n "),$("disabled",[w("&:hover","\n color: var(--n-tab-text-color-hover);\n ")])]),y("closable","padding-right: 8px;"),y("active","\n background-color: #0000;\n font-weight: var(--n-tab-font-weight-active);\n color: var(--n-tab-text-color-active);\n "),y("disabled","color: var(--n-tab-text-color-disabled);")]),m("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),y("left, right",[m("tabs-wrapper","\n flex-direction: column;\n ",[m("tabs-tab-wrapper","\n flex-direction: column;\n ",[m("tabs-tab-pad","\n height: var(--n-tab-gap-vertical);\n width: 100%;\n ")])])]),y("top",[y("card-type",[m("tabs-tab","\n border-top-left-radius: var(--n-tab-border-radius);\n border-top-right-radius: var(--n-tab-border-radius);\n ",[y("active","\n border-bottom: 1px solid #0000;\n ")]),m("tabs-tab-pad","\n border-bottom: 1px solid var(--n-tab-border-color);\n ")])]),y("left",[y("card-type",[m("tabs-tab","\n border-top-left-radius: var(--n-tab-border-radius);\n border-bottom-left-radius: var(--n-tab-border-radius);\n ",[y("active","\n border-right: 1px solid #0000;\n ")]),m("tabs-tab-pad","\n border-right: 1px solid var(--n-tab-border-color);\n ")])]),y("right",[y("card-type",[m("tabs-tab","\n border-top-right-radius: var(--n-tab-border-radius);\n border-bottom-right-radius: var(--n-tab-border-radius);\n ",[y("active","\n border-left: 1px solid #0000;\n ")]),m("tabs-tab-pad","\n border-left: 1px solid var(--n-tab-border-color);\n ")])]),y("bottom",[y("card-type",[m("tabs-tab","\n border-bottom-left-radius: var(--n-tab-border-radius);\n border-bottom-right-radius: var(--n-tab-border-radius);\n ",[y("active","\n border-top: 1px solid #0000;\n ")]),m("tabs-tab-pad","\n border-top: 1px solid var(--n-tab-border-color);\n ")])])])]),ye=e({name:"Tabs",props:Object.assign(Object.assign({},C.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),setup(e,{slots:n}){var a,r,o,i;l((()=>{void 0!==e.labelSize&&c("tabs","`label-size` is deprecated, please use `size` instead."),void 0!==e.activeName&&c("tabs","`active-name` is deprecated, please use `value` instead."),void 0!==e.onActiveNameChange&&c("tabs","`on-active-name-change` is deprecated, please use `on-update:value` instead.")}));const{mergedClsPrefixRef:s,inlineThemeDisabled:d}=R(e),b=C("Tabs","-tabs",me,_,e,s),f=t(null),v=t(null),u=t(null),h=t(null),g=t(null),x=t(!0),m=t(!0),y=X(e,["labelSize","size"]),w=X(e,["activeName","value"]),z=t(null!==(r=null!==(a=w.value)&&void 0!==a?a:e.defaultValue)&&void 0!==r?r:n.default?null===(i=null===(o=U(n.default())[0])||void 0===o?void 0:o.props)||void 0===i?void 0:i.name:null),$=Y(w,z),L={id:0},j=p((()=>{if(e.justifyContent&&"card"!==e.type)return{display:"flex",justifyContent:e.justifyContent}}));function B(){var e;const{value:t}=$;if(null===t)return null;return null===(e=f.value)||void 0===e?void 0:e.querySelector(`[data-name="${t}"]`)}function N(e){const{value:t}=v;if(t)for(const n of e)t.style[n]=""}function E(){if("card"===e.type)return;const t=B();t&&function(t){if("card"===e.type)return;const{value:n}=v;if(n&&t){const a=`${s.value}-tabs-bar--disabled`,{barWidth:r,placement:o}=e;if("true"===t.dataset.disabled?n.classList.add(a):n.classList.remove(a),["top","bottom"].includes(o)){if(N(["top","maxHeight","height"]),"number"==typeof r&&t.offsetWidth>=r){const e=Math.floor((t.offsetWidth-r)/2)+t.offsetLeft;n.style.left=`${e}px`,n.style.maxWidth=`${r}px`}else n.style.left=`${t.offsetLeft}px`,n.style.maxWidth=`${t.offsetWidth}px`;n.style.width="8192px",n.offsetWidth}else{if(N(["left","maxWidth","width"]),"number"==typeof r&&t.offsetHeight>=r){const e=Math.floor((t.offsetHeight-r)/2)+t.offsetTop;n.style.top=`${e}px`,n.style.maxHeight=`${r}px`}else n.style.top=`${t.offsetTop}px`,n.style.maxHeight=`${t.offsetHeight}px`;n.style.height="8192px",n.offsetHeight}}}(t)}function O(e){var t;const n=null===(t=g.value)||void 0===t?void 0:t.$el;if(!n)return;const a=B();if(!a)return;const{scrollLeft:r,offsetWidth:o}=n,{offsetLeft:i,offsetWidth:s}=a;r>i?n.scrollTo({top:0,left:i,behavior:"smooth"}):i+s>r+o&&n.scrollTo({top:0,left:i+s-o,behavior:"smooth"})}S($,(()=>{L.id=0,E(),O()}));const H=t(null);let F=0,I=null;const D={value:[]},M=t("next");function q(){const{value:e}=v;if(!e)return;const t="transition-disabled";e.classList.add(t),E(),e.classList.remove(t)}let J=0;const Q=ve((function(t){var n;if(0===t.contentRect.width&&0===t.contentRect.height)return;if(J===t.contentRect.width)return;J=t.contentRect.width;const{type:a}=e;"line"!==a&&"bar"!==a||q(),"segment"!==a&&te(null===(n=g.value)||void 0===n?void 0:n.$el)}),64);S([()=>e.justifyContent,()=>e.size],(()=>{W((()=>{const{type:t}=e;"line"!==t&&"bar"!==t||q()}))}));const Z=t(!1);const ee=ve((function(e){var t;const{target:n,contentRect:{width:a}}=e,r=n.parentElement.offsetWidth;if(Z.value){const{value:e}=h;if(!e)return;r-a>e.$el.offsetWidth&&(Z.value=!1)}else r<a&&(Z.value=!0);te(null===(t=g.value)||void 0===t?void 0:t.$el)}),64);function te(t){if(!t)return;const{placement:n}=e;if("top"===n||"bottom"===n){const{scrollLeft:e,scrollWidth:n,offsetWidth:a}=t;x.value=e<=0,m.value=e+a>=n}else{const{scrollTop:e,scrollHeight:n,offsetHeight:a}=t;x.value=e<=0,m.value=e+a>=n}}const ne=ve((e=>{te(e.target)}),64);P(ue,{triggerRef:T(e,"trigger"),tabStyleRef:T(e,"tabStyle"),paneClassRef:T(e,"paneClass"),paneStyleRef:T(e,"paneStyle"),mergedClsPrefixRef:s,typeRef:T(e,"type"),closableRef:T(e,"closable"),valueRef:$,tabChangeIdRef:L,onBeforeLeaveRef:T(e,"onBeforeLeave"),activateTab:function(t){const n=$.value;let a="next";for(const e of D.value){if(e===n)break;if(e===t){a="prev";break}}M.value=a,function(t){const{onActiveNameChange:n,onUpdateValue:a,"onUpdate:value":r}=e;n&&K(n,t);a&&K(a,t);r&&K(r,t);z.value=t}(t)},handleClose:function(t){const{onClose:n}=e;n&&K(n,t)},handleAdd:function(){const{onAdd:t}=e;t&&t(),W((()=>{const e=B(),{value:t}=g;e&&t&&t.scrollTo({left:e.offsetLeft,top:0,behavior:"smooth"})}))}}),G((()=>{E(),O()})),l((()=>{const{value:e}=u;if(!e)return;const{value:t}=s,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,a=`${t}-tabs-nav-scroll-wrapper--shadow-end`;x.value?e.classList.remove(n):e.classList.add(n),m.value?e.classList.remove(a):e.classList.add(a)}));const ae=t(null);S($,(()=>{if("segment"===e.type){const e=ae.value;e&&W((()=>{e.classList.add("transition-disabled"),e.offsetWidth,e.classList.remove("transition-disabled")}))}}));const re={syncBarPosition:()=>{E()}},oe=p((()=>{const{value:t}=y,{type:n}=e,a=`${t}${{card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[n]}`,{self:{barColor:r,closeIconColor:o,closeIconColorHover:i,closeIconColorPressed:s,tabColor:l,tabBorderColor:d,paneTextColor:c,tabFontWeight:p,tabBorderRadius:f,tabFontWeightActive:v,colorSegment:u,fontWeightStrong:h,tabColorSegment:g,closeSize:x,closeIconSize:m,closeColorHover:w,closeColorPressed:z,closeBorderRadius:$,[k("panePadding",t)]:R,[k("tabPadding",a)]:C,[k("tabPaddingVertical",a)]:S,[k("tabGap",a)]:P,[k("tabGap",`${a}Vertical`)]:T,[k("tabTextColor",n)]:A,[k("tabTextColorActive",n)]:W,[k("tabTextColorHover",n)]:L,[k("tabTextColorDisabled",n)]:j,[k("tabFontSize",t)]:B},common:{cubicBezierEaseInOut:_}}=b.value;return{"--n-bezier":_,"--n-color-segment":u,"--n-bar-color":r,"--n-tab-font-size":B,"--n-tab-text-color":A,"--n-tab-text-color-active":W,"--n-tab-text-color-disabled":j,"--n-tab-text-color-hover":L,"--n-pane-text-color":c,"--n-tab-border-color":d,"--n-tab-border-radius":f,"--n-close-size":x,"--n-close-icon-size":m,"--n-close-color-hover":w,"--n-close-color-pressed":z,"--n-close-border-radius":$,"--n-close-icon-color":o,"--n-close-icon-color-hover":i,"--n-close-icon-color-pressed":s,"--n-tab-color":l,"--n-tab-font-weight":p,"--n-tab-font-weight-active":v,"--n-tab-padding":C,"--n-tab-padding-vertical":S,"--n-tab-gap":P,"--n-tab-gap-vertical":T,"--n-pane-padding-left":V(R,"left"),"--n-pane-padding-right":V(R,"right"),"--n-pane-padding-top":V(R,"top"),"--n-pane-padding-bottom":V(R,"bottom"),"--n-font-weight-strong":h,"--n-tab-color-segment":g}})),ie=d?A("tabs",p((()=>`${y.value[0]}${e.type[0]}`)),oe,e):void 0;return Object.assign({mergedClsPrefix:s,mergedValue:$,renderedNames:new Set,tabsRailElRef:ae,tabsPaneWrapperRef:H,tabsElRef:f,barElRef:v,addTabInstRef:h,xScrollInstRef:g,scrollWrapperElRef:u,addTabFixed:Z,tabWrapperStyle:j,handleNavResize:Q,mergedSize:y,handleScroll:ne,handleTabsResize:ee,cssVars:d?void 0:oe,themeClass:null==ie?void 0:ie.themeClass,animationDirection:M,renderNameListRef:D,onAnimationBeforeLeave:function(e){const t=H.value;if(t){F=e.getBoundingClientRect().height;const n=`${F}px`,a=()=>{t.style.height=n,t.style.maxHeight=n};I?(a(),I(),I=null):I=a}},onAnimationEnter:function(e){const t=H.value;if(t){const n=e.getBoundingClientRect().height,a=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(F,n)}px`};I?(I(),I=null,a()):I=a}},onAnimationAfterEnter:function(){const e=H.value;e&&(e.style.maxHeight="",e.style.height="")},onRender:null==ie?void 0:ie.onRender},re)},render(){const{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:o,mergedSize:i,renderNameListRef:s,onRender:l,paneWrapperClass:d,paneWrapperStyle:b,$slots:{default:c,prefix:p,suffix:f}}=this;null==l||l();const v=c?U(c()).filter((e=>!0===e.type.__TAB_PANE__)):[],u=c?U(c()).filter((e=>!0===e.type.__TAB__)):[],h=!u.length,g="card"===t,x="segment"===t,m=!g&&!x&&this.justifyContent;s.value=[];const y=()=>{const t=a("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},m?null:a("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),h?v.map(((e,t)=>(s.value.push(e.props.name),Re(a(xe,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:0!==t&&(!m||"center"===m||"start"===m||"end"===m)}),e.children?{default:e.children.tab}:void 0))))):u.map(((e,t)=>(s.value.push(e.props.name),Re(0===t||m?e:$e(e))))),!r&&o&&g?ze(o,0!==(h?v.length:u.length)):null,m?null:a("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return a("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},g&&o?a(J,{onResize:this.handleTabsResize},{default:()=>t}):t,g?a("div",{class:`${e}-tabs-pad`}):null,g?null:a("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},w=x?"top":n;return a("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${i}-size`,m&&`${e}-tabs--flex`,`${e}-tabs--${w}`],style:this.cssVars},a("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${w}`,`${e}-tabs-nav`]},q(p,(t=>t&&a("div",{class:`${e}-tabs-nav__prefix`},t))),x?a("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},h?v.map(((e,t)=>(s.value.push(e.props.name),a(xe,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:0!==t}),e.children?{default:e.children.tab}:void 0)))):u.map(((e,t)=>(s.value.push(e.props.name),0===t?e:$e(e))))):a(J,{onResize:this.handleNavResize},{default:()=>a("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(w)?a(Z,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:y}):a("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll},y()))}),r&&o&&g?ze(o,!0):null,q(f,(t=>t&&a("div",{class:`${e}-tabs-nav__suffix`},t)))),h&&(!this.animated||"top"!==w&&"bottom"!==w?we(v,this.mergedValue,this.renderedNames):a("div",{ref:"tabsPaneWrapperRef",style:b,class:[`${e}-tabs-pane-wrapper`,d]},we(v,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection))))}});function we(e,t,n,r,o,i,s){const l=[];return e.forEach((e=>{const{name:a,displayDirective:r,"display-directive":o}=e.props,i=e=>r===e||o===e,s=t===a;if(void 0!==e.key&&(e.key=a),s||i("show")||i("show:lazy")&&n.has(a)){n.has(a)||n.add(a);const t=!i("if");l.push(t?L(e,[[N,s]]):e)}})),s?a(j,{name:`${s}-transition`,onBeforeLeave:r,onEnter:o,onAfterEnter:i},{default:()=>l}):l}function ze(e,t){return a(xe,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:"object"==typeof e&&e.disabled})}function $e(e){const t=B(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Re(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const Ce=e({name:"Configuration",setup:()=>()=>E("div",{class:H.chart},[E(ye,{type:"segment","default-value":"style"},{default:()=>[E(ge,{name:"style",tab:"样式"},{default:()=>[E(F,null,null)]}),E(ge,{name:"data",tab:"数据"},{default:()=>[O("这是数据配置")]}),E(ge,{name:"event",tab:"事件"},{default:()=>[O("这是事件配置")]})]})])});export{Ce as default};
//# sourceMappingURL=index-08b28ad5.js.map
