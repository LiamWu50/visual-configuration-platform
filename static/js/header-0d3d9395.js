import{d as e,U as r,V as s,W as t,ae as o,C as a,B as n,D as i}from"./index-ed1b8c5c.js";import{u as l}from"./index-9354a9ca.js";import{u as m}from"./index-283fda26.js";import{u}from"./index-65c8fa2e.js";import p from"./breadcrumb-6633f5bd.js";import{s as c,R as v}from"./resize-box-4df333af.js";import d from"./nav-menu-bd33cde0.js";import{_ as f}from"./Tooltip-f8af7131.js";import{_ as j}from"./Button-b081e221.js";import{N as w}from"./Icon-232b2420.js";import"./is-browser-11820a37.js";import"./use-merged-state-88a1707c.js";import"./Dropdown-7459329c.js";import"./Popover-7fcfdf56.js";import"./Scrollbar-baabe80b.js";import"./VResizeObserver-e7b62a76.js";import"./use-false-until-truthy-41df4814.js";import"./cssr-820232d8.js";import"./format-length-2aad21f5.js";import"./ChevronRight-d528638d.js";import"./create-9f3e5028.js";import"./fade-in-scale-up.cssr-07eacee5.js";import"./common-e5f8d873.js";import"./browser-c2d310fd.js";const h={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},g=[t("path",{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z",fill:"currentColor"},null,-1)],x=e({name:"PlayArrowRound",render:function(e,t){return r(),s("svg",h,g)}});const S=e({name:"TheHeader",props:{stage:{type:String,default:""}},setup(e){const{handlePreview:r}=function(e){const r=o(),s=l(),{canvasStyle:t,primitives:n,canvasScene:i}=a(s),p=u(),c=m(),v={chart:function(){const e={primitives:n.value,canvasStyle:t.value,canvasScene:i.value};p.saveChartForPreview(e)},map:function(){var e;const r=null==(e=c.cesiumSourceLoader)?void 0:e.getTypeDataSource();p.saveMapForPreview(r)},three:function(){}};return{handlePreview:()=>{(0,v[e])();const{href:s}=r.resolve({name:"preview",query:{stage:e}});window.open(s,"_blank")}}}(e.stage);return{handlePreview:r}},render(){return n("div",{class:c.header},[n("div",{class:c.left},[n(d,null,null),n(p,null,null)]),n("div",null,null),n("div",{class:c.right},[n("div",{class:c.preview},[n(f,{trigger:"hover"},{default:()=>[i("预览")],trigger:()=>n(j,{size:"small",quaternary:!0,onClick:this.handlePreview},{default:()=>[n(w,{size:"26"},{default:()=>[n(x,null,null)]})]})})]),"chart"===this.stage?n(v,null,null):null])])}});export{S as default};
//# sourceMappingURL=header-0d3d9395.js.map
