import{d as e,k as i,C as t,y as s,B as r,h as a,I as n}from"./index-BRKk6EXp.js";import{e as o,S as l,b as d}from"./index-DDekmmIk.js";import{u as m}from"./index-BJ5hlcPD.js";import"./index-DTzfzobO.js";import"./index-Cpr7J-RH.js";import"./map-base-CuBYy-bs.js";import"./use-cesium-source-loader-D1jOYCqB.js";import"./index-B2aN6fJe.js";import"./axios-X0xcXtXw.js";const v="_container_rqniq_38",c="_content_rqniq_38",p="_primitive_rqniq_41",u=e({name:"chart",setup(){var e,r;const a=i(),n=m(),{chartForPreview:l,canvasScene:v}=t(n),c=["width","height","top","left"],p=null==(e=l.value)?void 0:e.canvasStyle,u={width:`${null==p?void 0:p.width}px`,height:`${null==p?void 0:p.height}px`};return s((()=>{a.value.setEditorScene(v.value)})),{sceneRef:a,getBoundBoxStyle:o,containerStyle:u,primitives:null==(r=l.value)?void 0:r.primitives,getPrimitiveStyle:e=>d(e,c)}},render(){var e;return r("div",{class:v,style:this.containerStyle},[r(l,{ref:"sceneRef"},null),null==(e=this.primitives)?void 0:e.map((e=>r("div",{class:c,style:this.getBoundBoxStyle(e.style)},[a(n(e.cName),{id:`primitive${e.id}`,class:p,style:this.getPrimitiveStyle(e.style),dataSource:e})])))])}});export{u as default};
//# sourceMappingURL=index-B7rETxwL.js.map
