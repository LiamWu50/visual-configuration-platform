import{d as e,k as s,B as t,a1 as o}from"./index-c856fa2d.js";import{i as r}from"./img-a6d52b21.js";import{u as a}from"./index-40a19057.js";import{N as i}from"./Dropdown-4916c623.js";import{N as n}from"./Input-b2206fb9.js";import"./Popover-2c637d97.js";import"./Scrollbar-4c9b1e66.js";import"./VResizeObserver-89fb8bcf.js";import"./use-false-until-truthy-a6c36d8d.js";import"./cssr-640f7e1d.js";import"./format-length-2aad21f5.js";import"./use-merged-state-e84fa869.js";import"./next-frame-once-924ab492.js";import"./Icon-e851b32f.js";import"./ChevronRight-9fd15631.js";import"./create-9f3e5028.js";import"./fade-in-scale-up.cssr-29e156ac.js";import"./browser-18eb00fe.js";import"./is-browser-11820a37.js";import"./use-locale-19f8fa2b.js";import"./index-5871ef24.js";const l="_layers_1ys3a_34",m="_container_1ys3a_37",p="_layerItem_1ys3a_40",u="_imgCover_1ys3a_53";const c=e({name:"Layers",setup(){const e=s(0),t=s(0),r=s(!1),i=s(null),n=a().primitives,{menuOptions:l,typeHandler:m,handleProcess:p}=function(){const e={reName:e=>{e.isReName=!0}};return{menuOptions:[{label:"重命名",key:"reName"},{label:"复制",key:" copy"},{label:"粘贴",key:"paste"},{label:"删除",key:"delete"},{label:"锁定",key:"others1"},{label:"清空剪贴板",key:"others1"}],typeHandler:e,handleProcess:(s,t)=>{e[t](s)}}}();return{xRef:e,yRef:t,showDropdownRef:r,primitives:n,menuOptions:l,handleSelect:e=>{r.value=!1,p(i.value,e)},onClickoutside:()=>{r.value=!1},handleContextMenu:(s,a)=>{s.preventDefault(),i.value=a,r.value=!1,o().then((()=>{r.value=!0,e.value=s.clientX,t.value=s.clientY}))}}},render(){return t("div",{class:l},[t("div",{class:m},[(()=>this.primitives.map((e=>t("div",{class:p,onContextmenu:s=>this.handleContextMenu(s,e)},[t("div",{class:u},[t("img",{src:r},null)]),e.isReName?t(n,{value:e.name,"onUpdate:value":s=>e.name=s,autofocus:!0,onBlur:()=>e.isReName=!1,onKeyup:s=>"Enter"===s.key&&(e.isReName=!1),type:"text",placeholder:"请输入组件名称"},null):t("span",null,[e.name])]))))()]),t(i,{placement:"bottom-start",trigger:"manual",x:this.xRef,y:this.yRef,options:this.menuOptions,show:this.showDropdownRef,onSelect:this.handleSelect,onClickoutside:this.onClickoutside},null)])}});export{c as default};
//# sourceMappingURL=index-87e1aaf7.js.map
