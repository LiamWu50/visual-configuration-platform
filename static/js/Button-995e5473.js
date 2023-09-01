import{g as o,d as e,aR as r,j as n,k as t,o as a,a1 as i,h as l,f as s,b5 as d,bF as c,c as u,a4 as b,a5 as h,i as p,ah as v,u as f,z as y,ac as x,l as g,m,n as w,a7 as C,p as $,aa as z,an as k,ao as B,ak as S,b6 as P,am as T,aP as H}from"./index-a31aa7e3.js";import{i as R,u as j}from"./browser-521eee57.js";import{i as O}from"./is-browser-11820a37.js";import{r as D,i as E,c as F}from"./use-merged-state-afb08848.js";function _(o){return o.replace(/#|\(|\)|,|\s/g,"_")}const I=o("base-wave","\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n"),q=e({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(o){r("-base-wave",I,n(o,"clsPrefix"));const e=t(null),l=t(!1);let s=null;return a((()=>{null!==s&&window.clearTimeout(s)})),{active:l,selfRef:e,play(){null!==s&&(window.clearTimeout(s),l.value=!1,s=null),i((()=>{var o;null===(o=e.value)||void 0===o||o.offsetHeight,l.value=!0,s=window.setTimeout((()=>{l.value=!1,s=null}),1e3)}))}}},render(){const{clsPrefix:o}=this;return l("div",{ref:"selfRef","aria-hidden":!0,class:[`${o}-base-wave`,this.active&&`${o}-base-wave--active`]})}}),{cubicBezierEaseInOut:K}=d;function N(o){return c(o,[255,255,255,.16])}function G(o){return c(o,[0,0,0,.12])}const M=u("n-button-group"),Q=s([o("button","\n margin: 0;\n font-weight: var(--n-font-weight);\n line-height: 1;\n font-family: inherit;\n padding: var(--n-padding);\n height: var(--n-height);\n font-size: var(--n-font-size);\n border-radius: var(--n-border-radius);\n color: var(--n-text-color);\n background-color: var(--n-color);\n width: var(--n-width);\n white-space: nowrap;\n outline: none;\n position: relative;\n z-index: auto;\n border: none;\n display: inline-flex;\n flex-wrap: nowrap;\n flex-shrink: 0;\n align-items: center;\n justify-content: center;\n user-select: none;\n -webkit-user-select: none;\n text-align: center;\n cursor: pointer;\n text-decoration: none;\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ",[b("color",[h("border",{borderColor:"var(--n-border-color)"}),b("disabled",[h("border",{borderColor:"var(--n-border-color-disabled)"})]),p("disabled",[s("&:focus",[h("state-border",{borderColor:"var(--n-border-color-focus)"})]),s("&:hover",[h("state-border",{borderColor:"var(--n-border-color-hover)"})]),s("&:active",[h("state-border",{borderColor:"var(--n-border-color-pressed)"})]),b("pressed",[h("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),b("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[h("border",{border:"var(--n-border-disabled)"})]),p("disabled",[s("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[h("state-border",{border:"var(--n-border-focus)"})]),s("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[h("state-border",{border:"var(--n-border-hover)"})]),s("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[h("state-border",{border:"var(--n-border-pressed)"})]),b("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[h("state-border",{border:"var(--n-border-pressed)"})])]),b("loading","cursor: wait;"),o("base-wave","\n pointer-events: none;\n top: 0;\n right: 0;\n bottom: 0;\n left: 0;\n animation-iteration-count: 1;\n animation-duration: var(--n-ripple-duration);\n animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);\n ",[b("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),O&&"MozBoxSizing"in document.createElement("div").style?s("&::moz-focus-inner",{border:0}):null,h("border, state-border","\n position: absolute;\n left: 0;\n top: 0;\n right: 0;\n bottom: 0;\n border-radius: inherit;\n transition: border-color .3s var(--n-bezier);\n pointer-events: none;\n "),h("border",{border:"var(--n-border)"}),h("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),h("icon","\n margin: var(--n-icon-margin);\n margin-left: 0;\n height: var(--n-icon-size);\n width: var(--n-icon-size);\n max-width: var(--n-icon-size);\n font-size: var(--n-icon-size);\n position: relative;\n flex-shrink: 0;\n ",[o("icon-slot","\n height: var(--n-icon-size);\n width: var(--n-icon-size);\n position: absolute;\n left: 0;\n top: 50%;\n transform: translateY(-50%);\n display: flex;\n align-items: center;\n justify-content: center;\n ",[v({top:"50%",originalTransform:"translateY(-50%)"})]),function({duration:o=".2s",delay:e=".1s"}={}){return[s("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),s("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from","\n opacity: 0!important;\n margin-left: 0!important;\n margin-right: 0!important;\n "),s("&.fade-in-width-expand-transition-leave-active",`\n overflow: hidden;\n transition:\n opacity ${o} ${K},\n max-width ${o} ${K} ${e},\n margin-left ${o} ${K} ${e},\n margin-right ${o} ${K} ${e};\n `),s("&.fade-in-width-expand-transition-enter-active",`\n overflow: hidden;\n transition:\n opacity ${o} ${K} ${e},\n max-width ${o} ${K},\n margin-left ${o} ${K},\n margin-right ${o} ${K};\n `)]}()]),h("content","\n display: flex;\n align-items: center;\n flex-wrap: nowrap;\n min-width: 0;\n ",[s("~",[h("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),b("block","\n display: flex;\n width: 100%;\n "),b("dashed",[h("border, state-border",{borderStyle:"dashed !important"})]),b("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),s("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),s("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),V=e({name:"Button",props:Object.assign(Object.assign({},f.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!R}}),setup(o){y((()=>{const{dashed:e,ghost:r,text:n,secondary:t,tertiary:a,quaternary:i}=o;(e||r||n)&&(t||a||i)&&S("button","`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaterary` props.")}));const e=t(null),r=t(null),n=t(!1),a=x((()=>!o.quaternary&&!o.tertiary&&!o.secondary&&!o.text&&(!o.color||o.ghost||o.dashed)&&o.bordered)),i=g(M,{}),{mergedSizeRef:l}=j({},{defaultSize:"medium",mergedSize:e=>{const{size:r}=o;if(r)return r;const{size:n}=i;if(n)return n;const{mergedSize:t}=e||{};return t?t.value:"medium"}}),s=m((()=>o.focusable&&!o.disabled)),{inlineThemeDisabled:d,mergedClsPrefixRef:c,mergedRtlRef:u}=w(o),b=f("Button","-button",Q,P,o,c),h=C("Button",u,c),p=m((()=>{const e=b.value,{common:{cubicBezierEaseInOut:r,cubicBezierEaseOut:n},self:t}=e,{rippleDuration:a,opacityDisabled:i,fontWeight:s,fontWeightStrong:d}=t,c=l.value,{dashed:u,type:h,ghost:p,text:v,color:f,round:y,circle:x,textColor:g,secondary:m,tertiary:w,quaternary:C,strong:$}=o,z={"font-weight":$?d:s};let k={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const B="tertiary"===h,S="default"===h,P=B?"default":h;if(v){const o=g||f;k={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":o||t[T("textColorText",P)],"--n-text-color-hover":o?N(o):t[T("textColorTextHover",P)],"--n-text-color-pressed":o?G(o):t[T("textColorTextPressed",P)],"--n-text-color-focus":o?N(o):t[T("textColorTextHover",P)],"--n-text-color-disabled":o||t[T("textColorTextDisabled",P)]}}else if(p||u){const o=g||f;k={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":f||t[T("rippleColor",P)],"--n-text-color":o||t[T("textColorGhost",P)],"--n-text-color-hover":o?N(o):t[T("textColorGhostHover",P)],"--n-text-color-pressed":o?G(o):t[T("textColorGhostPressed",P)],"--n-text-color-focus":o?N(o):t[T("textColorGhostHover",P)],"--n-text-color-disabled":o||t[T("textColorGhostDisabled",P)]}}else if(m){const o=S?t.textColor:B?t.textColorTertiary:t[T("color",P)],e=f||o,r="default"!==h&&"tertiary"!==h;k={"--n-color":r?H(e,{alpha:Number(t.colorOpacitySecondary)}):t.colorSecondary,"--n-color-hover":r?H(e,{alpha:Number(t.colorOpacitySecondaryHover)}):t.colorSecondaryHover,"--n-color-pressed":r?H(e,{alpha:Number(t.colorOpacitySecondaryPressed)}):t.colorSecondaryPressed,"--n-color-focus":r?H(e,{alpha:Number(t.colorOpacitySecondaryHover)}):t.colorSecondaryHover,"--n-color-disabled":t.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":e,"--n-text-color-hover":e,"--n-text-color-pressed":e,"--n-text-color-focus":e,"--n-text-color-disabled":e}}else if(w||C){const o=S?t.textColor:B?t.textColorTertiary:t[T("color",P)],e=f||o;w?(k["--n-color"]=t.colorTertiary,k["--n-color-hover"]=t.colorTertiaryHover,k["--n-color-pressed"]=t.colorTertiaryPressed,k["--n-color-focus"]=t.colorSecondaryHover,k["--n-color-disabled"]=t.colorTertiary):(k["--n-color"]=t.colorQuaternary,k["--n-color-hover"]=t.colorQuaternaryHover,k["--n-color-pressed"]=t.colorQuaternaryPressed,k["--n-color-focus"]=t.colorQuaternaryHover,k["--n-color-disabled"]=t.colorQuaternary),k["--n-ripple-color"]="#0000",k["--n-text-color"]=e,k["--n-text-color-hover"]=e,k["--n-text-color-pressed"]=e,k["--n-text-color-focus"]=e,k["--n-text-color-disabled"]=e}else k={"--n-color":f||t[T("color",P)],"--n-color-hover":f?N(f):t[T("colorHover",P)],"--n-color-pressed":f?G(f):t[T("colorPressed",P)],"--n-color-focus":f?N(f):t[T("colorFocus",P)],"--n-color-disabled":f||t[T("colorDisabled",P)],"--n-ripple-color":f||t[T("rippleColor",P)],"--n-text-color":g||(f?t.textColorPrimary:B?t.textColorTertiary:t[T("textColor",P)]),"--n-text-color-hover":g||(f?t.textColorHoverPrimary:t[T("textColorHover",P)]),"--n-text-color-pressed":g||(f?t.textColorPressedPrimary:t[T("textColorPressed",P)]),"--n-text-color-focus":g||(f?t.textColorFocusPrimary:t[T("textColorFocus",P)]),"--n-text-color-disabled":g||(f?t.textColorDisabledPrimary:t[T("textColorDisabled",P)])};let R={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};R=v?{"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:{"--n-border":t[T("border",P)],"--n-border-hover":t[T("borderHover",P)],"--n-border-pressed":t[T("borderPressed",P)],"--n-border-focus":t[T("borderFocus",P)],"--n-border-disabled":t[T("borderDisabled",P)]};const{[T("height",c)]:j,[T("fontSize",c)]:O,[T("padding",c)]:D,[T("paddingRound",c)]:E,[T("iconSize",c)]:F,[T("borderRadius",c)]:_,[T("iconMargin",c)]:I,waveOpacity:q}=t,K={"--n-width":x&&!v?j:"initial","--n-height":v?"initial":j,"--n-font-size":O,"--n-padding":x||v?"initial":y?E:D,"--n-icon-size":F,"--n-icon-margin":I,"--n-border-radius":v?"initial":x||y?j:_};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":r,"--n-bezier-ease-out":n,"--n-ripple-duration":a,"--n-opacity-disabled":i,"--n-wave-opacity":q},z),k),R),K)})),v=d?$("button",m((()=>{let e="";const{dashed:r,type:n,ghost:t,text:a,color:i,round:s,circle:d,textColor:c,secondary:u,tertiary:b,quaternary:h,strong:p}=o;r&&(e+="a"),t&&(e+="b"),a&&(e+="c"),s&&(e+="d"),d&&(e+="e"),u&&(e+="f"),b&&(e+="g"),h&&(e+="h"),p&&(e+="i"),i&&(e+="j"+_(i)),c&&(e+="k"+_(c));const{value:v}=l;return e+="l"+v[0],e+="m"+n[0],e})),p,o):void 0;return{selfElRef:e,waveElRef:r,mergedClsPrefix:c,mergedFocusable:s,mergedSize:l,showBorder:a,enterPressed:n,rtlEnabled:h,handleMousedown:r=>{var n;s.value||r.preventDefault(),o.nativeFocusBehavior||(r.preventDefault(),o.disabled||s.value&&(null===(n=e.value)||void 0===n||n.focus({preventScroll:!0})))},handleKeydown:e=>{if("Enter"===e.key){if(!o.keyboard||o.loading)return void e.preventDefault();n.value=!0}},handleBlur:()=>{n.value=!1},handleKeyup:e=>{if("Enter"===e.key){if(!o.keyboard)return;n.value=!1}},handleClick:e=>{var n;if(!o.disabled&&!o.loading){const{onClick:t}=o;t&&F(t,e),o.text||null===(n=r.value)||void 0===n||n.play()}},customColorCssVars:m((()=>{const{color:e}=o;if(!e)return null;const r=N(e);return{"--n-border-color":e,"--n-border-color-hover":r,"--n-border-color-pressed":G(e),"--n-border-color-focus":r,"--n-border-color-disabled":e}})),cssVars:d?void 0:p,themeClass:null==v?void 0:v.themeClass,onRender:null==v?void 0:v.onRender}},render(){const{mergedClsPrefix:o,tag:e,onRender:r}=this;null==r||r();const n=D(this.$slots.default,(e=>e&&l("span",{class:`${o}-button__content`},e)));return l(e,{ref:"selfElRef",class:[this.themeClass,`${o}-button`,`${o}-button--${this.type}-type`,`${o}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${o}-button--rtl`,this.disabled&&`${o}-button--disabled`,this.block&&`${o}-button--block`,this.enterPressed&&`${o}-button--pressed`,!this.text&&this.dashed&&`${o}-button--dashed`,this.color&&`${o}-button--color`,this.secondary&&`${o}-button--secondary`,this.loading&&`${o}-button--loading`,this.ghost&&`${o}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},"right"===this.iconPlacement&&n,l(z,{width:!0},{default:()=>D(this.$slots.icon,(e=>(this.loading||this.renderIcon||e)&&l("span",{class:`${o}-button__icon`,style:{margin:E(this.$slots.default)?"0":""}},l(k,null,{default:()=>this.loading?l(B,{clsPrefix:o,key:"loading",class:`${o}-icon-slot`,strokeWidth:20}):l("div",{key:"icon",class:`${o}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():e)}))))}),"left"===this.iconPlacement&&n,this.text?null:l(q,{ref:"waveElRef",clsPrefix:o}),this.showBorder?l("div",{"aria-hidden":!0,class:`${o}-button__border`,style:this.customColorCssVars}):null,this.showBorder?l("div",{"aria-hidden":!0,class:`${o}-button__state-border`,style:this.customColorCssVars}):null)}}),W=V,Y=V;export{W as N,Y as X,_ as c};
//# sourceMappingURL=Button-995e5473.js.map
