import{d as e,k as s,A as i,y as o,B as t}from"./index-3bc8ef7f.js";import{R as r,v as n}from"./index-86bd4326.js";import"./use-form-render-a3826c25.js";import"./is-browser-11820a37.js";import"./VResizeObserver-3f6cdf1d.js";import"./get-slot-a0e67e91.js";import"./index-5871ef24.js";import"./RadioGroup-211a74c4.js";import"./Scrollbar-83522a92.js";import"./Input-48890063.js";import"./browser-620a5bd1.js";import"./use-merged-state-68b20723.js";import"./use-locale-64a5d7bc.js";import"./fade-in-scale-up.cssr-578b460c.js";import"./Popover-e1544724.js";import"./use-false-until-truthy-c730f668.js";import"./cssr-1f94c997.js";import"./format-length-2aad21f5.js";import"./next-frame-once-924ab492.js";import"./Button-49cc1443.js";import"./Tag-3f9e1e03.js";import"./create-9f3e5028.js";import"./InputNumber-35c7ded9.js";import"./Add-3b1c4ad7.js";import"./source-modal-9a42d1d3.js";import"./keysOf-87f48e7b.js";import"./Form-8525ab44.js";import"./Dropdown-76427f00.js";import"./Icon-95b94d25.js";import"./ChevronRight-921c415a.js";const a=new class{get initViewer(){return this._initViewer}_initViewer(e){Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNjBjYTQwMy05NjRhLTRiZmQtOWU2ZC02YTIzMTZjY2UyYzYiLCJpZCI6MTk2NjAsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzU5NjI3Mjh9.3-9slXLcFxuR4iDzyigEGKkCfTEiUvC06DSJ3Q2xEP0";const s=this.getInitOptions(),i=new Cesium.Viewer(e,s);i.cesiumWidget.creditContainer.style.display="none",i.scene.globe.baseColor=new Cesium.Color(0,0,0,0),i.scene.skyBox.show=!1,i.scene.sun.show=!1,i.scene.moon.show=!1,i.scene.skyAtmosphere.show=!1,i.scene.globe.show=!0,i.scene.globe.depthTestAgainstTerrain=!0,i.scene.postProcessStages.fxaa.enabled=!0;const o=i.cesiumWidget;if(o.supportsImageRenderingPixelated=Cesium.FeatureDetection.supportsImageRenderingPixelated(),o.forceResize=!0,i.scene.backgroundColor=new Cesium.Color(0,0,0,0),i.scene.debugShowFramesPerSecond=!0,Cesium.FeatureDetection.supportsImageRenderingPixelated()){let e=window.devicePixelRatio;for(;e>=2;)e/=2;i.resolutionScale=e}return i}getInitOptions(){return{imageryProvider:new Cesium.MapboxImageryProvider({mapId:"mapbox.satellite",accessToken:"pk.eyJ1IjoibGlhbS13dSIsImEiOiJjbGd2eXFldXowNm1jM2txcDZremhpcHFyIn0.Ae9INWez6cZRKQoZKf5K1Q"}),geocoder:!1,homeButton:!1,sceneModePicker:!1,baseLayerPicker:!1,navigationHelpButton:!1,animation:!1,timeline:!1,fullscreenButton:!1,shadows:!0,infoBox:!1,CreditsDisplay:!1,shouldAnimate:!0,selectionIndicator:!1,orderIndependentTranslucency:!1,contextOptions:{webgl:{alpha:!0}}}}},m="_map_p8poj_34",p="_container_p8poj_39",l=e({name:"CesiumMap",setup(){const e=s(!1),l=s(null);return i(n,l),o((()=>{l.value=a.initViewer("mapContainer"),e.value=!0})),()=>t("div",{class:m},[e.value?t(r,null,null):null,t("div",{id:"mapContainer",class:p},null)])}});export{l as default};
//# sourceMappingURL=index-827330b7.js.map
