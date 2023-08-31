import{k as e,w as o,M as n,av as r,o as t,au as i,d,h as l,c as a,l as s,m as u,A as p,ae as c,T as f,aF as v,ar as h,aa as b,F as m,g as w,f as y,i as g,a6 as x,a7 as k,j as S,n as N,u as P,p as R,bL as C,ao as O}from"./index-3bc8ef7f.js";import{p as I,V as $,e as z,f as A,a as j,d as F,r as K,k as _,N as T,h as D}from"./Popover-e1544724.js";import{N as M}from"./Icon-95b94d25.js";import{C as L}from"./ChevronRight-921c415a.js";import{h as B,c as E}from"./create-9f3e5028.js";import{o as H,a as q,X as U}from"./Scrollbar-83522a92.js";import{f as G}from"./fade-in-scale-up.cssr-578b460c.js";import{u as V,c as W}from"./use-merged-state-68b20723.js";import{h as X}from"./VResizeObserver-3f6cdf1d.js";function J(e){return o=>{e.value=o?o.$el:null}}const Q=d({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return l("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Y=a("n-dropdown-menu"),Z=a("n-dropdown"),ee=a("n-dropdown-option");function oe(e,o){return"submenu"===e.type||void 0===e.type&&void 0!==e[o]}function ne(e){return"divider"===e.type}const re=d({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(n){const r=s(Z),{hoverKeyRef:t,keyboardKeyRef:i,lastToggledSubmenuKeyRef:d,pendingKeyPathRef:l,activeKeyPathRef:a,animatedRef:f,mergedShowRef:v,renderLabelRef:h,renderIconRef:b,labelFieldRef:m,childrenFieldRef:w,renderOptionRef:y,nodePropsRef:g,menuPropsRef:x}=r,k=s(ee,null),S=s(Y),N=s(I),P=u((()=>n.tmNode.rawNode)),R=u((()=>{const{value:e}=w;return oe(n.tmNode.rawNode,e)})),C=u((()=>{const{disabled:e}=n.tmNode;return e})),O=function(n,r,t){if(!r)return n;const i=e(n.value);let d=null;return o(n,(e=>{null!==d&&window.clearTimeout(d),!0===e?t&&!t.value?i.value=!0:d=window.setTimeout((()=>{i.value=!0}),r):i.value=!1})),i}(u((()=>{if(!R.value)return!1;const{key:e,disabled:o}=n.tmNode;if(o)return!1;const{value:r}=t,{value:a}=i,{value:s}=d,{value:u}=l;return null!==r?u.includes(e):null!==a?u.includes(e)&&u[u.length-1]!==e:null!==s&&u.includes(e)})),300,u((()=>null===i.value&&!f.value))),$=u((()=>!!(null==k?void 0:k.enteringSubmenuRef.value))),z=e(!1);function A(){const{parentKey:e,tmNode:o}=n;o.disabled||v.value&&(d.value=e,i.value=null,t.value=o.key)}return p(ee,{enteringSubmenuRef:z}),{labelField:m,renderLabel:h,renderIcon:b,siblingHasIcon:S.showIconRef,siblingHasSubmenu:S.hasSubmenuRef,menuProps:x,popoverBody:N,animated:f,mergedShowSubmenu:u((()=>O.value&&!$.value)),rawNode:P,hasSubmenu:R,pending:c((()=>{const{value:e}=l,{key:o}=n.tmNode;return e.includes(o)})),childActive:c((()=>{const{value:e}=a,{key:o}=n.tmNode,r=e.findIndex((e=>o===e));return-1!==r&&r<e.length-1})),active:c((()=>{const{value:e}=a,{key:o}=n.tmNode,r=e.findIndex((e=>o===e));return-1!==r&&r===e.length-1})),mergedDisabled:C,renderOption:y,nodeProps:g,handleClick:function(){const{value:e}=R,{tmNode:o}=n;v.value&&(e||o.disabled||(r.doSelect(o.key,o.rawNode),r.doUpdateShow(!1)))},handleMouseMove:function(){const{tmNode:e}=n;e.disabled||v.value&&t.value!==e.key&&A()},handleMouseEnter:A,handleMouseLeave:function(e){if(n.tmNode.disabled)return;if(!v.value)return;const{relatedTarget:o}=e;!o||B({target:o},"dropdownOption")||B({target:o},"scrollbarRail")||(t.value=null)},handleSubmenuBeforeEnter:function(){z.value=!0},handleSubmenuAfterEnter:function(){z.value=!1}}},render(){var e,o;const{animated:n,rawNode:r,mergedShowSubmenu:t,clsPrefix:i,siblingHasIcon:d,siblingHasSubmenu:a,renderLabel:s,renderIcon:u,renderOption:p,nodeProps:c,props:b,scrollable:m}=this;let w=null;if(t){const o=null===(e=this.menuProps)||void 0===e?void 0:e.call(this,r,r.children);w=l(le,Object.assign({},o,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const y={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},g=null==c?void 0:c(r),x=l("div",Object.assign({class:[`${i}-dropdown-option`,null==g?void 0:g.class],"data-dropdown-option":!0},g),l("div",v(y,b),[l("div",{class:[`${i}-dropdown-option-body__prefix`,d&&`${i}-dropdown-option-body__prefix--show-icon`]},[u?u(r):h(r.icon)]),l("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},s?s(r):h(null!==(o=r[this.labelField])&&void 0!==o?o:r.title)),l("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,a&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?l(M,null,{default:()=>l(L,null)}):null)]),this.hasSubmenu?l($,null,{default:()=>[l(z,null,{default:()=>l("div",{class:`${i}-dropdown-offset-container`},l(A,{show:this.mergedShowSubmenu,placement:this.placement,to:m&&this.popoverBody||void 0,teleportDisabled:!m},{default:()=>l("div",{class:`${i}-dropdown-menu-wrapper`},n?l(f,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>w}):w)}))})]}):null);return p?p({node:x,option:r}):x}}),te=d({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=s(Y),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:t,renderOptionRef:i}=s(Z);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:n,nodeProps:t,renderOption:i}},render(){var e;const{clsPrefix:o,hasSubmenu:n,showIcon:r,nodeProps:t,renderLabel:i,renderOption:d}=this,{rawNode:a}=this.tmNode,s=l("div",Object.assign({class:`${o}-dropdown-option`},null==t?void 0:t(a)),l("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},l("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},h(a.icon)),l("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(a):h(null!==(e=a.title)&&void 0!==e?e:a[this.labelField])),l("div",{class:[`${o}-dropdown-option-body__suffix`,n&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return d?d({node:s,option:a}):s}}),ie=d({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:n}=this,{children:r}=e;return l(m,null,l(te,{clsPrefix:n,tmNode:e,key:e.key}),null==r?void 0:r.map((e=>{const{rawNode:r}=e;return!1===r.show?null:ne(r)?l(Q,{clsPrefix:n,key:e.key}):e.isGroup?(b("dropdown","`group` node is not allowed to be put in `group` node."),null):l(re,{clsPrefix:n,tmNode:e,parentKey:o,key:e.key})})))}}),de=d({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return l("div",o,[null==e?void 0:e()])}}),le=d({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(o){const{renderIconRef:n,childrenFieldRef:r}=s(Z);p(Y,{showIconRef:u((()=>{const e=n.value;return o.tmNodes.some((o=>{var n;if(o.isGroup)return null===(n=o.children)||void 0===n?void 0:n.some((({rawNode:o})=>e?e(o):o.icon));const{rawNode:r}=o;return e?e(r):r.icon}))})),hasSubmenuRef:u((()=>{const{value:e}=r;return o.tmNodes.some((o=>{var n;if(o.isGroup)return null===(n=o.children)||void 0===n?void 0:n.some((({rawNode:o})=>oe(o,e)));const{rawNode:r}=o;return oe(r,e)}))}))});const t=e(null);return p(j,null),p(F,null),p(I,t),{bodyRef:t}},render(){const{parentKey:e,clsPrefix:o,scrollable:n}=this,r=this.tmNodes.map((r=>{const{rawNode:t}=r;return!1===t.show?null:function(e){return"render"===e.type}(t)?l(de,{tmNode:r,key:r.key}):ne(t)?l(Q,{clsPrefix:o,key:r.key}):function(e){return"group"===e.type}(t)?l(ie,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key}):l(re,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key,props:t.props,scrollable:n})}));return l("div",{class:[`${o}-dropdown-menu`,n&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},n?l(U,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?K({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),ae=w("dropdown-menu","\n transform-origin: var(--v-transform-origin);\n background-color: var(--n-color);\n border-radius: var(--n-border-radius);\n box-shadow: var(--n-box-shadow);\n position: relative;\n transition:\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n",[G(),w("dropdown-option","\n position: relative;\n ",[y("a","\n text-decoration: none;\n color: inherit;\n outline: none;\n ",[y("&::before",'\n content: "";\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ')]),w("dropdown-option-body","\n display: flex;\n cursor: pointer;\n position: relative;\n height: var(--n-option-height);\n line-height: var(--n-option-height);\n font-size: var(--n-font-size);\n color: var(--n-option-text-color);\n transition: color .3s var(--n-bezier);\n ",[y("&::before",'\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n left: 4px;\n right: 4px;\n transition: background-color .3s var(--n-bezier);\n border-radius: var(--n-border-radius);\n '),g("disabled",[x("pending","\n color: var(--n-option-text-color-hover);\n ",[k("prefix, suffix","\n color: var(--n-option-text-color-hover);\n "),y("&::before","background-color: var(--n-option-color-hover);")]),x("active","\n color: var(--n-option-text-color-active);\n ",[k("prefix, suffix","\n color: var(--n-option-text-color-active);\n "),y("&::before","background-color: var(--n-option-color-active);")]),x("child-active","\n color: var(--n-option-text-color-child-active);\n ",[k("prefix, suffix","\n color: var(--n-option-text-color-child-active);\n ")])]),x("disabled","\n cursor: not-allowed;\n opacity: var(--n-option-opacity-disabled);\n "),x("group","\n font-size: calc(var(--n-font-size) - 1px);\n color: var(--n-group-header-text-color);\n ",[k("prefix","\n width: calc(var(--n-option-prefix-width) / 2);\n ",[x("show-icon","\n width: calc(var(--n-option-icon-prefix-width) / 2);\n ")])]),k("prefix","\n width: var(--n-option-prefix-width);\n display: flex;\n justify-content: center;\n align-items: center;\n color: var(--n-prefix-color);\n transition: color .3s var(--n-bezier);\n z-index: 1;\n ",[x("show-icon","\n width: var(--n-option-icon-prefix-width);\n "),w("icon","\n font-size: var(--n-option-icon-size);\n ")]),k("label","\n white-space: nowrap;\n flex: 1;\n z-index: 1;\n "),k("suffix","\n box-sizing: border-box;\n flex-grow: 0;\n flex-shrink: 0;\n display: flex;\n justify-content: flex-end;\n align-items: center;\n min-width: var(--n-option-suffix-width);\n padding: 0 8px;\n transition: color .3s var(--n-bezier);\n color: var(--n-suffix-color);\n z-index: 1;\n ",[x("has-submenu","\n width: var(--n-option-icon-suffix-width);\n "),w("icon","\n font-size: var(--n-option-icon-size);\n ")]),w("dropdown-menu","pointer-events: all;")]),w("dropdown-offset-container","\n pointer-events: none;\n position: absolute;\n left: 0;\n right: 0;\n top: -4px;\n bottom: -4px;\n ")]),w("dropdown-divider","\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-divider-color);\n height: 1px;\n margin: 4px 0;\n "),w("dropdown-menu-wrapper","\n transform-origin: var(--v-transform-origin);\n width: fit-content;\n "),y(">",[w("scrollbar","\n height: inherit;\n max-height: inherit;\n ")]),g("scrollable","\n padding: var(--n-padding);\n "),x("scrollable",[k("content","\n padding: var(--n-padding);\n ")])]),se={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},ue=Object.keys(D),pe=d({name:"Dropdown",inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},D),se),P.props),setup(d){const l=e(!1),a=V(S(d,"show"),l),s=u((()=>{const{keyField:e,childrenField:o}=d;return E(d.options,{getKey:o=>o[e],getDisabled:e=>!0===e.disabled,getIgnored:e=>"divider"===e.type||"render"===e.type,getChildren:e=>e[o]})})),f=u((()=>s.value.treeNodes)),v=e(null),h=e(null),b=e(null),m=u((()=>{var e,o,n;return null!==(n=null!==(o=null!==(e=v.value)&&void 0!==e?e:h.value)&&void 0!==o?o:b.value)&&void 0!==n?n:null})),w=u((()=>s.value.getPath(m.value).keyPath)),y=u((()=>s.value.getPath(d.value).keyPath));!function(e={},d){const l=n({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:a,keyup:s}=e,u=e=>{switch(e.key){case"Control":l.ctrl=!0;break;case"Meta":l.command=!0,l.win=!0;break;case"Shift":l.shift=!0;break;case"Tab":l.tab=!0}void 0!==a&&Object.keys(a).forEach((o=>{if(o!==e.key)return;const n=a[o];if("function"==typeof n)n(e);else{const{stop:o=!1,prevent:r=!1}=n;o&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}}))},p=e=>{switch(e.key){case"Control":l.ctrl=!1;break;case"Meta":l.command=!1,l.win=!1;break;case"Shift":l.shift=!1;break;case"Tab":l.tab=!1}void 0!==s&&Object.keys(s).forEach((o=>{if(o!==e.key)return;const n=s[o];if("function"==typeof n)n(e);else{const{stop:o=!1,prevent:r=!1}=n;o&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}}))},c=()=>{(void 0===d||d.value)&&(q("keydown",document,u),q("keyup",document,p)),void 0!==d&&o(d,(e=>{e?(q("keydown",document,u),q("keyup",document,p)):(H("keydown",document,u),H("keyup",document,p))}))};X()?(r(c),t((()=>{(void 0===d||d.value)&&(H("keydown",document,u),H("keyup",document,p))}))):c(),i(l)}({keydown:{ArrowUp:{prevent:!0,handler:function(){j("up")}},ArrowRight:{prevent:!0,handler:function(){j("right")}},ArrowDown:{prevent:!0,handler:function(){j("down")}},ArrowLeft:{prevent:!0,handler:function(){j("left")}},Enter:{prevent:!0,handler:function(){const e=A();(null==e?void 0:e.isLeaf)&&a.value&&(I(e.key,e.rawNode),$(!1))}},Escape:function(){$(!1)}}},c((()=>d.keyboard&&a.value)));const{mergedClsPrefixRef:g,inlineThemeDisabled:x}=N(d),k=P("Dropdown","-dropdown",ae,C,d,g);function I(e,o){const{onSelect:n}=d;n&&W(n,e,o)}function $(e){const{"onUpdate:show":o,onUpdateShow:n}=d;o&&W(o,e),n&&W(n,e),l.value=e}function z(){v.value=null,h.value=null,b.value=null}function A(){var e;const{value:o}=s,{value:n}=m;return o&&null!==n&&null!==(e=o.getNode(n))&&void 0!==e?e:null}function j(e){const{value:o}=m,{value:{getFirstAvailableNode:n}}=s;let r=null;if(null===o){const e=n();null!==e&&(r=e.key)}else{const o=A();if(o){let n;switch(e){case"down":n=o.getNext();break;case"up":n=o.getPrev();break;case"right":n=o.getChild();break;case"left":n=o.getParent()}n&&(r=n.key)}}null!==r&&(v.value=null,h.value=r)}p(Z,{labelFieldRef:S(d,"labelField"),childrenFieldRef:S(d,"childrenField"),renderLabelRef:S(d,"renderLabel"),renderIconRef:S(d,"renderIcon"),hoverKeyRef:v,keyboardKeyRef:h,lastToggledSubmenuKeyRef:b,pendingKeyPathRef:w,activeKeyPathRef:y,animatedRef:S(d,"animated"),mergedShowRef:a,nodePropsRef:S(d,"nodeProps"),renderOptionRef:S(d,"renderOption"),menuPropsRef:S(d,"menuProps"),doSelect:I,doUpdateShow:$}),o(a,(e=>{d.animated||e||z()}));const F=u((()=>{const{size:e,inverted:o}=d,{common:{cubicBezierEaseInOut:n},self:r}=k.value,{padding:t,dividerColor:i,borderRadius:l,optionOpacityDisabled:a,[O("optionIconSuffixWidth",e)]:s,[O("optionSuffixWidth",e)]:u,[O("optionIconPrefixWidth",e)]:p,[O("optionPrefixWidth",e)]:c,[O("fontSize",e)]:f,[O("optionHeight",e)]:v,[O("optionIconSize",e)]:h}=r,b={"--n-bezier":n,"--n-font-size":f,"--n-padding":t,"--n-border-radius":l,"--n-option-height":v,"--n-option-prefix-width":c,"--n-option-icon-prefix-width":p,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":s,"--n-option-icon-size":h,"--n-divider-color":i,"--n-option-opacity-disabled":a};return o?(b["--n-color"]=r.colorInverted,b["--n-option-color-hover"]=r.optionColorHoverInverted,b["--n-option-color-active"]=r.optionColorActiveInverted,b["--n-option-text-color"]=r.optionTextColorInverted,b["--n-option-text-color-hover"]=r.optionTextColorHoverInverted,b["--n-option-text-color-active"]=r.optionTextColorActiveInverted,b["--n-option-text-color-child-active"]=r.optionTextColorChildActiveInverted,b["--n-prefix-color"]=r.prefixColorInverted,b["--n-suffix-color"]=r.suffixColorInverted,b["--n-group-header-text-color"]=r.groupHeaderTextColorInverted):(b["--n-color"]=r.color,b["--n-option-color-hover"]=r.optionColorHover,b["--n-option-color-active"]=r.optionColorActive,b["--n-option-text-color"]=r.optionTextColor,b["--n-option-text-color-hover"]=r.optionTextColorHover,b["--n-option-text-color-active"]=r.optionTextColorActive,b["--n-option-text-color-child-active"]=r.optionTextColorChildActive,b["--n-prefix-color"]=r.prefixColor,b["--n-suffix-color"]=r.suffixColor,b["--n-group-header-text-color"]=r.groupHeaderTextColor),b})),K=x?R("dropdown",u((()=>`${d.size[0]}${d.inverted?"i":""}`)),F,d):void 0;return{mergedClsPrefix:g,mergedTheme:k,tmNodes:f,mergedShow:a,handleAfterLeave:()=>{d.animated&&z()},doUpdateShow:$,cssVars:x?void 0:F,themeClass:null==K?void 0:K.themeClass,onRender:null==K?void 0:K.onRender}},render(){const{mergedTheme:e}=this,o={show:this.mergedShow,theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:(e,o,n,r,t)=>{var i;const{mergedClsPrefix:d,menuProps:a}=this;null===(i=this.onRender)||void 0===i||i.call(this);const s=(null==a?void 0:a(void 0,this.tmNodes.map((e=>e.rawNode))))||{},u={ref:J(o),class:[e,`${d}-dropdown`,this.themeClass],clsPrefix:d,tmNodes:this.tmNodes,style:[n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:t};return l(le,v(this.$attrs,u,s))},onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return l(T,Object.assign({},_(this.$props,ue),o),{trigger:()=>{var e,o;return null===(o=(e=this.$slots).default)||void 0===o?void 0:o.call(e)}})}});export{pe as N};
//# sourceMappingURL=Dropdown-76427f00.js.map