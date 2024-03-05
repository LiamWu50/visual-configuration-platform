import{b as o,bj as e,b7 as t,c as n,z as r,k as a,l as i,j as d,ac as l,n as s,aX as u,g as b,a5 as c,a4 as p,f as v,i as h,d as g,u as f,A as m,a7 as x,m as C,p as R,h as S,a8 as z,b2 as k}from"./index-BRKk6EXp.js";import{u as w}from"./browser-Cc4LOUGR.js";import{u as B,c as y}from"./use-merged-state-BQx7kTR9.js";import{f as F}from"./VResizeObserver-4v6BLuM7.js";import{a as $}from"./GridItem-CR1WTjzB.js";const T={name:"Radio",common:o,self:o=>{const{borderColor:n,primaryColor:r,baseColor:a,textColorDisabled:i,inputColorDisabled:d,textColor2:l,opacityDisabled:s,borderRadius:u,fontSizeSmall:b,fontSizeMedium:c,fontSizeLarge:p,heightSmall:v,heightMedium:h,heightLarge:g,lineHeight:f}=o;return Object.assign(Object.assign({},e),{labelLineHeight:f,buttonHeightSmall:v,buttonHeightMedium:h,buttonHeightLarge:g,fontSizeSmall:b,fontSizeMedium:c,fontSizeLarge:p,boxShadow:`inset 0 0 0 1px ${n}`,boxShadowActive:`inset 0 0 0 1px ${r}`,boxShadowFocus:`inset 0 0 0 1px ${r}, 0 0 0 2px ${t(r,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${r}`,boxShadowDisabled:`inset 0 0 0 1px ${n}`,color:a,colorDisabled:d,colorActive:"#0000",textColor:l,textColorDisabled:i,dotColorActive:r,dotColorDisabled:n,buttonBorderColor:n,buttonBorderColorActive:r,buttonBorderColorHover:n,buttonColor:a,buttonColorActive:a,buttonTextColor:l,buttonTextColorActive:r,buttonTextColorHover:r,opacityDisabled:s,buttonBoxShadowFocus:`inset 0 0 0 1px ${r}, 0 0 0 2px ${t(r,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:u})}},A={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},D=n("n-radio-group");function H(o){r((()=>{void 0!==o.checkedValue&&u("radio","`checked-value` is deprecated, please use `checked` instead.")}));const e=w(o,{mergedSize(e){const{size:t}=o;if(void 0!==t)return t;if(p){const{mergedSizeRef:{value:o}}=p;if(void 0!==o)return o}return e?e.mergedSize.value:"medium"},mergedDisabled:e=>!!o.disabled||(!!(null==p?void 0:p.disabledRef.value)||!!(null==e?void 0:e.disabled.value))}),{mergedSizeRef:t,mergedDisabledRef:n}=e,b=a(null),c=a(null),p=i(D,null),v=a(o.defaultChecked),h=d(o,"checked"),g=B(h,v),f=l((()=>p?p.valueRef.value===o.value:g.value)),m=l((()=>{const{name:e}=o;return void 0!==e?e:p?p.nameRef.value:void 0})),x=a(!1);function C(){n.value||f.value||function(){if(p){const{doUpdateValue:e}=p,{value:t}=o;y(e,t)}else{const{onUpdateChecked:t,"onUpdate:checked":n}=o,{nTriggerFormInput:r,nTriggerFormChange:a}=e;t&&y(t,!0),n&&y(n,!0),r(),a(),v.value=!0}}()}return{mergedClsPrefix:p?p.mergedClsPrefixRef:s(o).mergedClsPrefixRef,inputRef:b,labelRef:c,mergedName:m,mergedDisabled:n,renderSafeChecked:f,focus:x,mergedSize:t,handleRadioInputChange:function(){C(),b.value&&(b.value.checked=f.value)},handleRadioInputBlur:function(){x.value=!1},handleRadioInputFocus:function(){x.value=!0}}}const V=b("radio-group","\n display: inline-block;\n font-size: var(--n-font-size);\n",[c("splitor","\n display: inline-block;\n vertical-align: bottom;\n width: 1px;\n transition:\n background-color .3s var(--n-bezier),\n opacity .3s var(--n-bezier);\n background: var(--n-button-border-color);\n ",[p("checked",{backgroundColor:"var(--n-button-border-color-active)"}),p("disabled",{opacity:"var(--n-opacity-disabled)"})]),p("button-group","\n white-space: nowrap;\n height: var(--n-height);\n line-height: var(--n-height);\n ",[b("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),c("splitor",{height:"var(--n-height)"})]),b("radio-button","\n vertical-align: bottom;\n outline: none;\n position: relative;\n user-select: none;\n -webkit-user-select: none;\n display: inline-block;\n box-sizing: border-box;\n padding-left: 14px;\n padding-right: 14px;\n white-space: nowrap;\n transition:\n background-color .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n border-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n background: var(--n-button-color);\n color: var(--n-button-text-color);\n border-top: 1px solid var(--n-button-border-color);\n border-bottom: 1px solid var(--n-button-border-color);\n ",[b("radio-input","\n pointer-events: none;\n position: absolute;\n border: 0;\n border-radius: inherit;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n opacity: 0;\n z-index: 1;\n "),c("state-border","\n z-index: 1;\n pointer-events: none;\n position: absolute;\n box-shadow: var(--n-button-box-shadow);\n transition: box-shadow .3s var(--n-bezier);\n left: -1px;\n bottom: -1px;\n right: -1px;\n top: -1px;\n "),v("&:first-child","\n border-top-left-radius: var(--n-button-border-radius);\n border-bottom-left-radius: var(--n-button-border-radius);\n border-left: 1px solid var(--n-button-border-color);\n ",[c("state-border","\n border-top-left-radius: var(--n-button-border-radius);\n border-bottom-left-radius: var(--n-button-border-radius);\n ")]),v("&:last-child","\n border-top-right-radius: var(--n-button-border-radius);\n border-bottom-right-radius: var(--n-button-border-radius);\n border-right: 1px solid var(--n-button-border-color);\n ",[c("state-border","\n border-top-right-radius: var(--n-button-border-radius);\n border-bottom-right-radius: var(--n-button-border-radius);\n ")]),h("disabled","\n cursor: pointer;\n ",[v("&:hover",[c("state-border","\n transition: box-shadow .3s var(--n-bezier);\n box-shadow: var(--n-button-box-shadow-hover);\n "),h("checked",{color:"var(--n-button-text-color-hover)"})]),p("focus",[v("&:not(:active)",[c("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),p("checked","\n background: var(--n-button-color-active);\n color: var(--n-button-text-color-active);\n border-color: var(--n-button-border-color-active);\n "),p("disabled","\n cursor: not-allowed;\n opacity: var(--n-opacity-disabled);\n ")])]);const _=g({name:"RadioGroup",props:Object.assign(Object.assign({},f.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),setup(o){const e=a(null),{mergedSizeRef:t,mergedDisabledRef:n,nTriggerFormChange:r,nTriggerFormInput:i,nTriggerFormBlur:l,nTriggerFormFocus:u}=w(o),{mergedClsPrefixRef:b,inlineThemeDisabled:c,mergedRtlRef:p}=s(o),v=f("Radio","-radio-group",V,T,o,b),h=a(o.defaultValue),g=d(o,"value"),S=B(g,h);m(D,{mergedClsPrefixRef:b,nameRef:d(o,"name"),valueRef:S,disabledRef:n,mergedSizeRef:t,doUpdateValue:function(e){const{onUpdateValue:t,"onUpdate:value":n}=o;t&&y(t,e),n&&y(n,e),h.value=e,r(),i()}});const z=x("Radio",p,b),F=C((()=>{const{value:o}=t,{common:{cubicBezierEaseInOut:e},self:{buttonBorderColor:n,buttonBorderColorActive:r,buttonBorderRadius:a,buttonBoxShadow:i,buttonBoxShadowFocus:d,buttonBoxShadowHover:l,buttonColor:s,buttonColorActive:u,buttonTextColor:b,buttonTextColorActive:c,buttonTextColorHover:p,opacityDisabled:h,[k("buttonHeight",o)]:g,[k("fontSize",o)]:f}}=v.value;return{"--n-font-size":f,"--n-bezier":e,"--n-button-border-color":n,"--n-button-border-color-active":r,"--n-button-border-radius":a,"--n-button-box-shadow":i,"--n-button-box-shadow-focus":d,"--n-button-box-shadow-hover":l,"--n-button-color":s,"--n-button-color-active":u,"--n-button-text-color":b,"--n-button-text-color-hover":p,"--n-button-text-color-active":c,"--n-height":g,"--n-opacity-disabled":h}})),$=c?R("radio-group",C((()=>t.value[0])),F,o):void 0;return{selfElRef:e,rtlEnabled:z,mergedClsPrefix:b,mergedValue:S,handleFocusout:function(o){const{value:t}=e;t&&(t.contains(o.relatedTarget)||l())},handleFocusin:function(o){const{value:t}=e;t&&(t.contains(o.relatedTarget)||u())},cssVars:c?void 0:F,themeClass:null==$?void 0:$.themeClass,onRender:null==$?void 0:$.onRender}},render(){var o;const{mergedValue:e,mergedClsPrefix:t,handleFocusin:n,handleFocusout:r}=this,{children:a,isButtonGroup:i}=function(o,e,t){var n;const r=[];let a=!1;for(let i=0;i<o.length;++i){const d=o[i],l=null===(n=d.type)||void 0===n?void 0:n.name;if("RadioButton"===l&&(a=!0),a&&"RadioButton"!==l){z("radio-group","`n-radio-group` in button mode only takes `n-radio-button` as children.");continue}const s=d.props;if("RadioButton"===l)if(0===i)r.push(d);else{const o=r[r.length-1].props,n=e===o.value,a=o.disabled,i=e===s.value,l=s.disabled,u=(n?2:0)+(a?0:1)<(i?2:0)+(l?0:1)?{[`${t}-radio-group__splitor--disabled`]:l,[`${t}-radio-group__splitor--checked`]:i}:{[`${t}-radio-group__splitor--disabled`]:a,[`${t}-radio-group__splitor--checked`]:n};r.push(S("div",{class:[`${t}-radio-group__splitor`,u]}),d)}else r.push(d)}return{children:r,isButtonGroup:a}}(F($(this)),e,t);return null===(o=this.onRender)||void 0===o||o.call(this),S("div",{onFocusin:n,onFocusout:r,ref:"selfElRef",class:[`${t}-radio-group`,this.rtlEnabled&&`${t}-radio-group--rtl`,this.themeClass,i&&`${t}-radio-group--button-group`],style:this.cssVars},a)}});export{_,T as a,A as r,H as s};
//# sourceMappingURL=RadioGroup-DXSTA16u.js.map
