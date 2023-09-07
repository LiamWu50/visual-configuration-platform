import{g as e,a4 as a,a5 as l,f as r,i as o,d as n,u as t,m as i,n as s,a7 as d,p as u,h as p,am as c,aG as b,B as v,F as f}from"./index-08e4d1d8.js";import{I as h,T as m}from"./map-base-9f9b199e.js";import{i as g}from"./is-browser-11820a37.js";import{f as x}from"./VResizeObserver-abc53178.js";import{g as w,N as y}from"./GridItem-70858b27.js";import{a as S,d as k}from"./index-5871ef24.js";import{r as z,s as C,d as T,b as R,N as j,a as $}from"./RadioGroup-c4ee53a0.js";import{r as B}from"./use-merged-state-c77cbba2.js";import{N as G,a as U}from"./InputNumber-acef021b.js";import{N as _}from"./Input-f1d82203.js";const I=e("radio","\n line-height: var(--n-label-line-height);\n outline: none;\n position: relative;\n user-select: none;\n -webkit-user-select: none;\n display: inline-flex;\n align-items: flex-start;\n flex-wrap: nowrap;\n font-size: var(--n-font-size);\n word-break: break-word;\n",[a("checked",[l("dot","\n background-color: var(--n-color-active);\n ")]),l("dot-wrapper","\n position: relative;\n flex-shrink: 0;\n flex-grow: 0;\n width: var(--n-radio-size);\n "),e("radio-input","\n position: absolute;\n border: 0;\n border-radius: inherit;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n opacity: 0;\n z-index: 1;\n cursor: pointer;\n "),l("dot","\n position: absolute;\n top: 50%;\n left: 0;\n transform: translateY(-50%);\n height: var(--n-radio-size);\n width: var(--n-radio-size);\n background: var(--n-color);\n box-shadow: var(--n-box-shadow);\n border-radius: 50%;\n transition:\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n ",[r("&::before",'\n content: "";\n opacity: 0;\n position: absolute;\n left: 4px;\n top: 4px;\n height: calc(100% - 8px);\n width: calc(100% - 8px);\n border-radius: 50%;\n transform: scale(.8);\n background: var(--n-dot-color-active);\n transition: \n opacity .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n transform .3s var(--n-bezier);\n '),a("checked",{boxShadow:"var(--n-box-shadow-active)"},[r("&::before","\n opacity: 1;\n transform: scale(1);\n ")])]),l("label","\n color: var(--n-text-color);\n padding: var(--n-label-padding);\n font-weight: var(--n-label-font-weight);\n display: inline-block;\n transition: color .3s var(--n-bezier);\n "),o("disabled","\n cursor: pointer;\n ",[r("&:hover",[l("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),a("focus",[r("&:not(:active)",[l("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),a("disabled","\n cursor: not-allowed;\n ",[l("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[r("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),a("checked","\n opacity: 1;\n ")]),l("label",{color:"var(--n-text-color-disabled)"}),e("radio-input","\n cursor: not-allowed;\n ")])]),M=n({name:"Radio",props:Object.assign(Object.assign({},t.props),z),setup(e){const a=C(e),l=t("Radio","-radio",I,T,e,a.mergedClsPrefix),r=i((()=>{const{mergedSize:{value:e}}=a,{common:{cubicBezierEaseInOut:r},self:{boxShadow:o,boxShadowActive:n,boxShadowDisabled:t,boxShadowFocus:i,boxShadowHover:s,color:d,colorDisabled:u,colorActive:p,textColor:b,textColorDisabled:v,dotColorActive:f,dotColorDisabled:h,labelPadding:m,labelLineHeight:g,labelFontWeight:x,[c("fontSize",e)]:w,[c("radioSize",e)]:y}}=l.value;return{"--n-bezier":r,"--n-label-line-height":g,"--n-label-font-weight":x,"--n-box-shadow":o,"--n-box-shadow-active":n,"--n-box-shadow-disabled":t,"--n-box-shadow-focus":i,"--n-box-shadow-hover":s,"--n-color":d,"--n-color-active":p,"--n-color-disabled":u,"--n-dot-color-active":f,"--n-dot-color-disabled":h,"--n-font-size":w,"--n-radio-size":y,"--n-text-color":b,"--n-text-color-disabled":v,"--n-label-padding":m}})),{inlineThemeDisabled:o,mergedClsPrefixRef:n,mergedRtlRef:p}=s(e),b=d("Radio",p,n),v=o?u("radio",i((()=>a.mergedSize.value[0])),r,e):void 0;return Object.assign(a,{rtlEnabled:b,cssVars:o?void 0:r,themeClass:null==v?void 0:v.themeClass,onRender:null==v?void 0:v.onRender})},render(){const{$slots:e,mergedClsPrefix:a,onRender:l,label:r}=this;return null==l||l(),p("label",{class:[`${a}-radio`,this.themeClass,{[`${a}-radio--rtl`]:this.rtlEnabled,[`${a}-radio--disabled`]:this.mergedDisabled,[`${a}-radio--checked`]:this.renderSafeChecked,[`${a}-radio--focus`]:this.focus}],style:this.cssVars},p("input",{ref:"inputRef",type:"radio",class:`${a}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),p("div",{class:`${a}-radio__dot-wrapper`}," ",p("div",{class:[`${a}-radio__dot`,this.renderSafeChecked&&`${a}-radio__dot--checked`]})),B(e.default,(e=>e||r?p("div",{ref:"labelRef",class:`${a}-radio__label`},e||r):null)))}}),O={name:"Space",self:()=>b};let F;const D=()=>{if(!g)return!0;if(void 0===F){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const a=1===e.scrollHeight;return document.body.removeChild(e),F=a}return F},W=n({name:"Space",props:Object.assign(Object.assign({},t.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:l}=s(e),r=t("Space","-space",void 0,O,e,a),o=d("Space",l,a);return{useGap:D(),rtlEnabled:o,mergedClsPrefix:a,margin:i((()=>{const{size:a}=e;if(Array.isArray(a))return{horizontal:a[0],vertical:a[1]};if("number"==typeof a)return{horizontal:a,vertical:a};const{self:{[c("gap",a)]:l}}=r.value,{row:o,col:n}=S(l);return{horizontal:k(n),vertical:k(o)}}))}},render(){const{vertical:e,align:a,inline:l,justify:r,itemStyle:o,margin:n,wrap:t,mergedClsPrefix:i,rtlEnabled:s,useGap:d,wrapItem:u,internalUseGap:c}=this,b=x(w(this));if(!b.length)return null;const v=`${n.horizontal}px`,f=n.horizontal/2+"px",h=`${n.vertical}px`,m=n.vertical/2+"px",g=b.length-1,y=r.startsWith("space-");return p("div",{role:"none",class:[`${i}-space`,s&&`${i}-space--rtl`],style:{display:l?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(r)?"flex-"+r:r,flexWrap:!t||e?"nowrap":"wrap",marginTop:d||e?"":`-${m}`,marginBottom:d||e?"":`-${m}`,alignItems:a,gap:d?`${n.vertical}px ${n.horizontal}px`:""}},u||!d&&!c?b.map(((a,l)=>p("div",{role:"none",style:[o,{maxWidth:"100%"},d?"":e?{marginBottom:l!==g?h:""}:s?{marginLeft:y?"space-between"===r&&l===g?"":f:l!==g?v:"",marginRight:y?"space-between"===r&&0===l?"":f:"",paddingTop:m,paddingBottom:m}:{marginRight:y?"space-between"===r&&l===g?"":f:l!==g?v:"",marginLeft:y?"space-between"===r&&0===l?"":f:"",paddingTop:m,paddingBottom:m}]},a))):b)}}),E=[{label:"arcGisMapServer",value:h.arcGisMapServer},{label:"bingMap",value:h.bingMap},{label:"tileMapServer",value:h.tileMapServer},{label:"mapBox",value:h.mapBox},{label:"singleTile",value:h.singleTile},{label:"urlTemplate",value:h.urlTemplate},{label:"webMapService",value:h.webMapService},{label:"webMapTileService",value:h.webMapTileService}],N=[{label:"无地形",value:m.ellipsoidTerrain},{label:"自定义地形",value:m.cesiumTerrain},{label:"Cesium自带地形",value:m.worldTerrain}],P=({formModel:e,specialLabelOptions:a})=>({renderImageryForm:()=>v(y,{span:"12"},{default:()=>[v(G,{label:"影像类型",path:"imageryType"},{default:()=>[v(R,{value:e.value.imageryType,"onUpdate:value":a=>e.value.imageryType=a,options:E,placeholder:"请选择影像类型"},null)]})]}),renderTerrainForm:()=>v(y,{span:"12"},{default:()=>[v(G,{label:"地形类型",path:"terrainType"},{default:()=>[v(R,{value:e.value.terrainType,"onUpdate:value":a=>e.value.terrainType=a,options:N,placeholder:"请选择地形类型"},null)]})]}),renderFeatureForm:()=>v(f,null,[v(y,{span:"12"},{default:()=>[v(G,{label:"marker大小",path:"markerSize"},{default:()=>[v(U,{value:e.value.feature.markerSize,"onUpdate:value":a=>e.value.feature.markerSize=a,placeholder:"请输入marker大小",style:{width:"140px"}},null)]})]}),v(y,{span:"12"},{default:()=>[v(G,{label:"marker颜色",path:"markerColor"},{default:()=>[v(j,{value:e.value.feature.markerColor,"onUpdate:value":a=>e.value.feature.markerColor=a},null)]})]}),v(y,{span:"12"},{default:()=>[v(G,{label:"填充颜色",path:"fill"},{default:()=>[v(j,{value:e.value.feature.fill,"onUpdate:value":a=>e.value.feature.fill=a},null)]})]}),v(y,{span:"12"},{default:()=>[v(G,{label:"边框颜色",path:"stroke"},{default:()=>[v(j,{value:e.value.feature.stroke,"onUpdate:value":a=>e.value.feature.stroke=a},null)]})]}),v(y,{span:"12"},{default:()=>[v(G,{label:"边框宽度",path:"strokeWidth"},{default:()=>[v(U,{value:e.value.feature.strokeWidth,"onUpdate:value":a=>e.value.feature.strokeWidth=a,placeholder:"请输入边框宽度",style:{width:"140px"}},null)]})]}),v(y,{span:"12"},{default:()=>[v(G,{label:"是否贴地",path:"clampToGround"},{default:()=>[v($,{value:e.value.feature.clampToGround,"onUpdate:value":a=>e.value.feature.clampToGround=a},{default:()=>[v(W,null,{default:()=>[v(M,{label:"是",value:!0},null),v(M,{label:"否",value:!1},null)]})]})]})]})]),renderSpecialForm:()=>v(f,null,[v(y,{span:"12"},{default:()=>[v(G,{label:"图标在线地址",path:"icon"},{default:()=>[v(_,{value:e.value.special.icon,"onUpdate:value":a=>e.value.special.icon=a,placeholder:"输入图标在线地址"},null)]})]}),v(y,{span:"12"},{default:()=>[v(G,{label:"标签字段",path:"label"},{default:()=>[v(R,{value:e.value.special.label,"onUpdate:value":a=>e.value.special.label=a,placeholder:"请选择标签字段",options:a.value},null)]})]}),v(y,{span:"12"},{default:()=>[v(G,{label:"图标大小",path:"specialWidth"},{default:()=>[v(U,{value:e.value.special.width,"onUpdate:value":a=>e.value.special.width=a,placeholder:"请输入图标大小",style:{width:"120px"}},null)]})]})])}),A=Object.freeze(Object.defineProperty({__proto__:null,terrainTypeOptions:N,useFormRender:P},Symbol.toStringTag,{value:"Module"}));export{W as N,A as a,N as t,P as u};
//# sourceMappingURL=use-form-render-4d98723f.js.map
