import{d as e,k as s,B as t,a3 as o}from"./index-04d4a0f2.js";import{i as r}from"./img-a6d52b21.js";import{u as i}from"./index-ee8d0830.js";import{N as a}from"./Dropdown-d3748224.js";import{N as n}from"./Input-6baecded.js";import"./Popover-53c68119.js";import"./Scrollbar-4376d6fa.js";import"./VResizeObserver-ca9dfda7.js";import"./use-false-until-truthy-efef55d7.js";import"./cssr-c3aa8d6b.js";import"./format-length-2aad21f5.js";import"./use-merged-state-97f77c3d.js";import"./Icon-ec492179.js";import"./ChevronRight-275969f8.js";import"./create-9f3e5028.js";import"./fade-in-scale-up.cssr-e001f0e4.js";import"./browser-755b95dd.js";import"./is-browser-11820a37.js";import"./use-locale-1dcc96bf.js";import"./index-5871ef24.js";const l="_layers_11jx1_38",m="_container_11jx1_41",p="_layerItem_11jx1_44",u="_imgCover_11jx1_57";const c=e({name:"Layers",setup(){const e=s(0),t=s(0),r=s(!1),a=s(null),n=i().primitives,{menuOptions:l,typeHandler:m,handleProcess:p}=function(){const e={reName:e=>{e.isReName=!0}};return{menuOptions:[{label:"重命名",key:"reName"},{label:"复制",key:" copy"},{label:"粘贴",key:"paste"},{label:"删除",key:"delete"},{label:"锁定",key:"others1"},{label:"清空剪贴板",key:"others1"}],typeHandler:e,handleProcess:(s,t)=>{e[t](s)}}}();return{xRef:e,yRef:t,showDropdownRef:r,primitives:n,menuOptions:l,handleSelect:e=>{r.value=!1,p(a.value,e)},onClickoutside:()=>{r.value=!1},handleContextMenu:(s,i)=>{s.preventDefault(),a.value=i,r.value=!1,o().then((()=>{r.value=!0,e.value=s.clientX,t.value=s.clientY}))}}},render(){return t("div",{class:l},[t("div",{class:m},[(()=>this.primitives.map((e=>t("div",{class:p,onContextmenu:s=>this.handleContextMenu(s,e)},[t("div",{class:u},[t("img",{src:r},null)]),e.isReName?t(n,{value:e.name,"onUpdate:value":s=>e.name=s,autofocus:!0,onBlur:()=>e.isReName=!1,onKeyup:s=>"Enter"===s.key&&(e.isReName=!1),type:"text",placeholder:"请输入组件名称"},null):t("span",null,[e.name])]))))()]),t(a,{placement:"bottom-start",trigger:"manual",x:this.xRef,y:this.yRef,options:this.menuOptions,show:this.showDropdownRef,onSelect:this.handleSelect,onClickoutside:this.onClickoutside},null)])}});export{c as default};
//# sourceMappingURL=index-f0c426c0.js.map