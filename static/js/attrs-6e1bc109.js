import{d as e,C as t,k as l,w as a,B as r,F as o}from"./index-6455addc.js";import{B as s}from"./base-7a4a323b.js";import{u as i}from"./index-a3baa113.js";import{_ as p}from"./CaretForwardOutline-b4058629.js";import{_ as m}from"./Form-740fa478.js";import{_ as n}from"./InputNumber-dff9829e.js";import{_ as u}from"./Input-1d15226d.js";import{_ as f}from"./Grid-4396063a.js";import{_ as d}from"./GridItem-5e02a8f1.js";import{_ as c}from"./Select-9a1690ad.js";import"./lodash-8ac534c0.js";import"./Icon-7030c950.js";import"./format-length-2aad21f5.js";import"./use-merged-state-1589eac9.js";import"./use-false-until-truthy-4cf4cfa9.js";import"./ChevronRight-8bf64fcd.js";import"./keysOf-87f48e7b.js";import"./browser-5c6ff8c6.js";import"./is-browser-11820a37.js";import"./Scrollbar-d957449d.js";import"./VResizeObserver-24ff23d9.js";import"./use-locale-ee5189cf.js";import"./Button-d54f8193.js";import"./index-5871ef24.js";import"./fade-in-scale-up.cssr-f76691ca.js";import"./use-compitable-0a064be2.js";import"./cssr-67ce2f74.js";import"./Popover-418c51b5.js";import"./Follower-46ec2e6b.js";import"./create-e88f5dcb.js";const j=e({name:"BasicTextAttrs",setup(){const e=i(),{curPrimitive:r}=t(e),o=l({text:"",color:"#FFFFFF",fontSize:12,fontWeight:400,textAlign:"left"});return a(o,(e=>{r.value.textOptions=e}),{deep:!0}),{formValue:o,alignOptions:[{label:"左对齐",value:"left"},{label:"居中",value:"center"},{label:"右对齐",value:"right"}]}},render(){const{formValue:e,alignOptions:t}=this;return r(s,null,{default:()=>r(o,null,[r(p,{title:"信息",name:"infoAttrs"},{default:()=>r(m,{size:"small",labelPlacement:"left",labelAlign:"left"},{default:()=>[r(n,{label:"文字"},{default:()=>[r(u,{value:e.text,"onUpdate:value":t=>e.text=t,placeholder:"请输入",clearable:!0},null)]})]})}),r(p,{title:"样式",name:"styleAttrs"},{default:()=>r(m,{size:"small",labelPlacement:"left",labelAlign:"left"},{default:()=>[r(n,{label:" 样式"},{default:()=>[r(f,{xGap:12,yGap:6,cols:2},{default:()=>[r(d,null,{default:()=>[r(u,{value:e.color,"onUpdate:value":t=>e.color=t,clearable:!0,placeholder:"请输入"},{prefix:()=>"颜色"})]}),r(d,null,{default:()=>[r(u,{value:e.fontSize,"onUpdate:value":t=>e.fontSize=t,clearable:!0,placeholder:"请输入"},{prefix:()=>"大小"})]}),r(d,null,{default:()=>[r(u,{value:e.fontWeight,"onUpdate:value":t=>e.fontWeight=t,clearable:!0,placeholder:"请输入"},{prefix:()=>"粗细"})]}),r(d,null,{default:()=>[r(c,{value:e.textAlign,"onUpdate:value":t=>e.textAlign=t,placeholder:"Select",options:t},null)]})]})]})]})})])})}});export{j as default};
//# sourceMappingURL=attrs-6e1bc109.js.map
