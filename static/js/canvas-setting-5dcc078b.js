import{d as t,C as e,m as s,w as a,B as r,J as o}from"./index-535d6e3f.js";import{l}from"./lodash-24f123f7.js";import{u as i}from"./index-2ddad873.js";import{_ as m,C as p,a as u}from"./CaretForwardOutline-a5df84b8.js";import{_ as n}from"./Form-f0ea9b81.js";import{_ as j}from"./Grid-45a2aa33.js";import{_ as d}from"./GridItem-09806815.js";import{_ as f,a as b}from"./InputNumber-5c5c764d.js";import{N as c}from"./Icon-372e21de.js";import"./use-merged-state-97e82467.js";import"./use-false-until-truthy-88b5840d.js";import"./ChevronRight-e87da67b.js";import"./keysOf-87f48e7b.js";import"./VResizeObserver-e81db95c.js";import"./is-browser-11820a37.js";import"./index-5871ef24.js";import"./browser-b0231edb.js";import"./format-length-2aad21f5.js";import"./Scrollbar-be91d4bc.js";import"./use-locale-9cd5235a.js";import"./Input-f34aa01d.js";import"./Button-0904e818.js";const h=t({name:"canvasSettings",setup(){const t=i(),{canvasStyle:h}=e(t),v=s((()=>h.value)),y=[{label:"W",type:"width"},{label:"H",type:"height"}];return a(v,(e=>l.debounce((()=>t.setCanvasStyle(e)),300))),()=>r(u,{defaultExpandedNames:"baseAttrs"},{default:()=>[r(m,{title:"画布样式",name:"baseAttrs"},{default:()=>{let t;return r(n,{size:"small",showLabel:!1},{default:()=>{return[r(j,{xGap:12,cols:2},(e=t=y.map((t=>r(d,null,{default:()=>[r(f,null,{default:()=>[r(b,{value:v.value[t.type],"onUpdate:value":e=>v.value[t.type]=e,max:9999,min:-9999,showButton:!1,precision:0,clearable:!0,placeholder:`请输入${t.label}`},{prefix:()=>t.label})]})]}))),"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!o(e)?t:{default:()=>[t]}))];var e}})}})],arrow:()=>r(c,{size:12},{default:()=>[r(p,null,null)]})})}});export{h as default};
//# sourceMappingURL=canvas-setting-5dcc078b.js.map
