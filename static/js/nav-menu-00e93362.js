import{d as e,ac as r,ad as t,ae as o,B as l,h as n}from"./index-6cb66bfc.js";import{N as s}from"./Button-d6771d5b.js";import{u as i}from"./use-message-7bf3fcb7.js";import{N as a}from"./Icon-5dd8a9e0.js";import{N as u}from"./Dropdown-7f7fcd54.js";import"./browser-78d4eab5.js";import"./Scrollbar-ae2a5d2f.js";import"./VResizeObserver-44d0f14b.js";import"./use-merged-state-34322b47.js";import"./use-false-until-truthy-60c38266.js";import"./Popover-b47163d2.js";import"./cssr-7ce9b561.js";import"./create-9f3e5028.js";const m={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},d=[o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M244 400L100 256l144-144"},null,-1),o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M120 256h292"},null,-1)],p=e({name:"ArrowBack",render:function(e,o){return r(),t("svg",m,d)}}),k={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},c=[o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 152h336"},null,-1),o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 256h336"},null,-1),o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 360h336"},null,-1)],w=e({name:"Menu",render:function(e,o){return r(),t("svg",k,c)}}),f=[{label:"返回",key:"return",icon:(h=p,()=>n(a,null,{default:()=>n(h)}))},{type:"divider",key:"d1"},{label:"文件",key:"file"},{label:"编辑",key:"edit"},{label:"图层",key:"layer",children:[{label:"图层1",key:"layer1"},{label:"图层2",key:"layer2"}]}];var h;const j=e({name:"NavMenu",setup(){const e=i(),r=r=>{e.info(String(r))};return()=>l(u,{options:f,placement:"bottom-start",trigger:"click",onSelect:r},{default:()=>[l(s,{text:!0},{default:()=>[l(a,{size:20},{default:()=>[l(w,null,null)]})]})]})}});export{j as default};
//# sourceMappingURL=nav-menu-00e93362.js.map
