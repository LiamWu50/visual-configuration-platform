import{d as e,k as s,B as t,a2 as o}from"./index-3cd7dc97.js";import{i as r}from"./img-a6d52b21.js";import{u as i}from"./index-f51b4d46.js";import{N as n}from"./Dropdown-b58406c7.js";import{N as a}from"./Input-4e1751fa.js";import"./Popover-21699324.js";import"./Scrollbar-6689edd4.js";import"./VResizeObserver-8b1bf323.js";import"./use-false-until-truthy-3115d52e.js";import"./cssr-6ed7e34d.js";import"./format-length-2aad21f5.js";import"./use-merged-state-8674fce7.js";import"./next-frame-once-924ab492.js";import"./Icon-d5643831.js";import"./ChevronRight-d2c00602.js";import"./create-9f3e5028.js";import"./fade-in-scale-up.cssr-7c6262a2.js";import"./browser-a5866652.js";import"./is-browser-11820a37.js";import"./use-locale-bce72a0c.js";import"./index-5871ef24.js";const l="_layers_h1c2o_1",m="_container_h1c2o_4",p="_layerItem_h1c2o_7",u="_imgCover_h1c2o_20";const c=e({name:"Layers",setup(){const e=s(0),t=s(0),r=s(!1),n=s(null),a=i().primitives,{menuOptions:l,typeHandler:m,handleProcess:p}=function(){const e={reName:e=>{e.isReName=!0}};return{menuOptions:[{label:"重命名",key:"reName"},{label:"复制",key:" copy"},{label:"粘贴",key:"paste"},{label:"删除",key:"delete"},{label:"锁定",key:"others1"},{label:"清空剪贴板",key:"others1"}],typeHandler:e,handleProcess:(s,t)=>{e[t](s)}}}();return{xRef:e,yRef:t,showDropdownRef:r,primitives:a,menuOptions:l,handleSelect:e=>{r.value=!1,p(n.value,e)},onClickoutside:()=>{r.value=!1},handleContextMenu:(s,i)=>{s.preventDefault(),n.value=i,r.value=!1,o().then((()=>{r.value=!0,e.value=s.clientX,t.value=s.clientY}))}}},render(){return t("div",{class:l},[t("div",{class:m},[(()=>this.primitives.map((e=>t("div",{class:p,onContextmenu:s=>this.handleContextMenu(s,e)},[t("div",{class:u},[t("img",{src:r},null)]),e.isReName?t(a,{value:e.name,"onUpdate:value":s=>e.name=s,autofocus:!0,onBlur:()=>e.isReName=!1,onKeyup:s=>"Enter"===s.key&&(e.isReName=!1),type:"text",placeholder:"请输入组件名称"},null):t("span",null,[e.name])]))))()]),t(n,{placement:"bottom-start",trigger:"manual",x:this.xRef,y:this.yRef,options:this.menuOptions,show:this.showDropdownRef,onSelect:this.handleSelect,onClickoutside:this.onClickoutside},null)])}});export{c as default};
//# sourceMappingURL=index-13659bad.js.map
