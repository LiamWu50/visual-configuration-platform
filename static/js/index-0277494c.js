import{d as e,K as r,k as s,B as t,s as o,v as i}from"./index-37de66d9.js";import l from"./chart-list-78e0a50d.js";import a from"./dashboard-header-0abe72b5.js";import m from"./map-list-092fa013.js";import d from"./three-list-a29573bb.js";import"./filters-dc142258.js";import"./Icon-3b615114.js";import"./format-length-2aad21f5.js";import"./list.module-934329e8.js";import"./Tabs-156f943d.js";import"./GridItem-f2fcfcd0.js";import"./index-5871ef24.js";import"./cssr-7a8dcbae.js";import"./VResizeObserver-43b44ee5.js";import"./use-merged-state-e114ac4f.js";import"./Grid-39fdf7ee.js";import"./is-browser-11820a37.js";import"./Button-a2368394.js";import"./browser-c2c97a99.js";import"./gis-banner-c5952553.js";const n={dark:"_dark_1vyer_22",container:"_container_1vyer_38","project-header":"_project-header_1vyer_38"},p=e({name:"draft",setup(){const e=r(),{source:t}=e.query;return{selectedModuleRef:s(t||"chart")}},render(){const e=this.selectedModuleRef;return t("div",{class:n.container},[t("div",{class:n["project-header"]},[t(a,{modelValue:this.selectedModuleRef,"onUpdate:modelValue":e=>this.selectedModuleRef=e},null)]),t("div",{class:n["project-content"]},[o(t(l,null,null),[[i,"chart"===e]]),o(t(m,null,null),[[i,"map"===e]]),o(t(d,null,null),[[i,"three"===e]])])])}});export{p as default};
//# sourceMappingURL=index-0277494c.js.map
