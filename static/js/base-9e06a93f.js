import{d as e,C as t,m as a,B as l,J as r}from"./index-d950d778.js";import{l as s}from"./lodash-ee082a55.js";import{u as o}from"./index-c4695976.js";import{N as u,C as i,a as p}from"./CaretForwardOutline-e1ef6f03.js";import{N as n}from"./Form-baf1ab73.js";import{N as m}from"./Grid-aba365ea.js";import{N as d}from"./GridItem-8eff380b.js";import{N as f,a as c}from"./InputNumber-5b7b2897.js";import{N as b}from"./Icon-f251d760.js";const v=e({name:"BaseAttrs",setup(e,{slots:v}){const y=o(),{curPrimitive:j}=t(y),h=a((()=>{var e;return null==(e=j.value)?void 0:e.style})),N=[{label:"X",type:"left"},{label:"Y",type:"top"},{label:"W",type:"width"},{label:"H",type:"height"}],x=s.debounce(((e,t)=>{var a;["top","left","width","height"].includes(e)&&(null==(a=j.value)||a.updateStyleByKey(e,t))}),300);return()=>l(p,{defaultExpandedNames:"baseAttrs"},{default:()=>{var e;return[l(u,{title:"基础样式",name:"baseAttrs"},{default:()=>{let e;return l(n,{size:"small",showLabel:!1},{default:()=>{return[l(m,{xGap:12,cols:2},(t=e=N.map((e=>l(d,null,{default:()=>[l(f,null,{default:()=>[l(c,{value:h.value[e.type],"onUpdate:value":t=>h.value[e.type]=t,onUpdateValue:t=>x(e.type,t),max:9999,min:-9999,showButton:!1,precision:0,clearable:!0,placeholder:`请输入${e.label}`},{prefix:()=>e.label})]})]}))),"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!r(t)?e:{default:()=>[e]}))];var t}})}}),null==(e=v.default)?void 0:e.call(v)]},arrow:()=>l(b,{size:12},{default:()=>[l(i,null,null)]})})}});export{v as B};
//# sourceMappingURL=base-9e06a93f.js.map