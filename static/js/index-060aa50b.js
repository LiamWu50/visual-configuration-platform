import{d as t,ad as a,ae as r,af as e,al as i,z as l,B as n}from"./index-14d3c94d.js";import{i as s}from"./img-a6d52b21.js";import{a as o}from"./common-3e81c288.js";import{a as m,N as p,C as u}from"./CaretForwardOutline-723535b6.js";import{N as c}from"./Icon-25bf07ed.js";import"./use-merged-state-e2137842.js";import"./use-false-until-truthy-15067010.js";import"./ChevronRight-700b280f.js";const w={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},v=[e("path",{d:"M440.9 136.3a4 4 0 0 0 0-6.91L288.16 40.65a64.14 64.14 0 0 0-64.33 0L71.12 129.39a4 4 0 0 0 0 6.91L254 243.88a4 4 0 0 0 4.06 0z",fill:"currentColor"},null,-1),e("path",{d:"M54 163.51a4 4 0 0 0-6 3.49v173.89a48 48 0 0 0 23.84 41.39L234 479.51a4 4 0 0 0 6-3.46V274.3a4 4 0 0 0-2-3.46z",fill:"currentColor"},null,-1),e("path",{d:"M272 275v201a4 4 0 0 0 6 3.46l162.15-97.23A48 48 0 0 0 464 340.89V167a4 4 0 0 0-6-3.45l-184 108a4 4 0 0 0-2 3.45z",fill:"currentColor"},null,-1)],d=t({name:"Cube",render:function(t,e){return a(),r("svg",w,v)}}),f={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},h=[e("path",{d:"M272 41.69V188a4 4 0 0 0 4 4h146.31a2 2 0 0 0 1.42-3.41L275.41 40.27a2 2 0 0 0-3.41 1.42z",fill:"currentColor"},null,-1),e("path",{d:"M248 224a8 8 0 0 1-8-8V32H92a12 12 0 0 0-12 12v424a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V224zm104 160H160v-32h192zm0-80H160v-32h192z",fill:"currentColor"},null,-1)],g=t({name:"DocumentTextSharp",render:function(t,e){return a(),r("svg",f,h)}}),x={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},k=[e("path",{d:"M66.1 357a16 16 0 0 1-14.61-9.46A224 224 0 0 1 256 32a16 16 0 0 1 16 16v208a16 16 0 0 1-9.47 14.61l-189.9 84.95A15.93 15.93 0 0 1 66.1 357z",fill:"currentColor"},null,-1),e("path",{d:"M313.59 68.18A8 8 0 0 0 304 76v180a48.07 48.07 0 0 1-28.4 43.82L103.13 377a8 8 0 0 0-3.35 11.81a208.42 208.42 0 0 0 48.46 50.41A206.32 206.32 0 0 0 272 480c114.69 0 208-93.31 208-208c0-100.45-71.58-184.5-166.41-203.82z",fill:"currentColor"},null,-1)],C=t({name:"PieChart",render:function(t,e){return a(),r("svg",x,k)}}),z="_container_twq9o_1",_="_primitives_twq9o_7",j="_primitive_twq9o_7";const b=t({name:"Primitives",setup(){const{primitiveOptions:t,getPrimitiveOptions:a}=function(){const t=[{label:"基础组件",key:"basic",icon:o(d),primitives:[]},{label:"图表",key:"chart",icon:o(C),primitives:[]},{label:"文本",key:"text",icon:o(g),primitives:[]}],a=Object.keys(i).map((t=>new i[t]));return{primitiveOptions:t,getPrimitiveOptions:()=>{t.forEach((t=>{t.primitives=a.filter((a=>a.group===t.key))}))}}}(),r=t=>{const a=t.target;t.dataTransfer.setData("name",a.dataset.name)};l((()=>a()));const e=t=>t.primitives.map((t=>n("div",{key:t.id,class:j},[n("span",null,[t.name]),n("img",{src:s,draggable:!0,"data-name":t.cName},null)])));return()=>n("div",{class:z,onDragstart:r},[n(m,null,{default:()=>[t.map((t=>n(p,{title:t.label,name:t.key},{default:()=>[n("div",{class:_},[e(t)])]})))],arrow:()=>n(c,{size:12},{default:()=>[n(u,null,null)]})})])}});export{b as default};
//# sourceMappingURL=index-060aa50b.js.map
