import{d as e,K as r,k as s,B as t,s as o,v as i}from"./index-d4772ea6.js";import l from"./chart-list-4af23294.js";import a from"./dashboard-header-e337a279.js";import m from"./map-list-23371daf.js";import d from"./three-list-5219f30c.js";import"./filters-c746433a.js";import"./Icon-9381191b.js";import"./format-length-2aad21f5.js";import"./list.module-934329e8.js";import"./Tabs-bf6ac4d6.js";import"./GridItem-f6f82f88.js";import"./index-5871ef24.js";import"./cssr-fe5abf98.js";import"./VResizeObserver-d7676a03.js";import"./use-merged-state-7905bfde.js";import"./Grid-65601eac.js";import"./is-browser-11820a37.js";import"./Button-6d1bdc0a.js";import"./browser-09ad06cc.js";import"./gis-banner-c5952553.js";const n={dark:"_dark_1vyer_22",container:"_container_1vyer_38","project-header":"_project-header_1vyer_38"},p=e({name:"draft",setup(){const e=r(),{source:t}=e.query;return{selectedModuleRef:s(t||"chart")}},render(){const e=this.selectedModuleRef;return t("div",{class:n.container},[t("div",{class:n["project-header"]},[t(a,{modelValue:this.selectedModuleRef,"onUpdate:modelValue":e=>this.selectedModuleRef=e},null)]),t("div",{class:n["project-content"]},[o(t(l,null,null),[[i,"chart"===e]]),o(t(m,null,null),[[i,"map"===e]]),o(t(d,null,null),[[i,"three"===e]])])])}});export{p as default};
//# sourceMappingURL=index-f3408a40.js.map
