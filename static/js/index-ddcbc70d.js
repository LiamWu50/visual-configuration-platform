var e=Object.defineProperty,t=(t,l,o)=>(((t,l,o)=>{l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[l]=o})(t,"symbol"!=typeof l?l+"":l,o),o);import{P as l,k as o,d as n,m as i,B as r,M as a,z as s,s as c,v as u,C as d,y as h,Q as p,R as v,D as m,S as f,w as g,I as y,U as b,V as S,W as w,x as A,F as C,X as x,Y as R,Z as N,$ as E,a0 as B,O as k,a1 as D,J as L,h as M,a2 as O}from"./index-ed1b8c5c.js";import{c as X,m as P,d as Y,a as I,g as U,S as j,b as T,e as Q}from"./index-be510f7a.js";import{u as V}from"./index-9354a9ca.js";import{l as G}from"./lodash-de681003.js";import{u as F}from"./index-f7732053.js";import"./index-e5622c65.js";import"./map-base-54533b47.js";import"./use-cesium-source-loader-d1771db6.js";import"./index-b9a6024d.js";import"./axios-743c2fba.js";const _=l("areaSelect",(()=>{const e=o(null),t=o([]),l=o(!1);return{groupStyle:e,selectedPrimitives:t,areaSelectVisible:l,clearPrimitives:()=>{t.value=[]},setAreaSelectOptions:(l,o)=>{e.value=l,t.value=o},setAreaSelectVisible:e=>{l.value=e}}})),q="_areaSelect_lm1me_38",K=n({name:"AreaSelect",props:{options:{type:Object,default:()=>{}}},setup:e=>({style:i((()=>({left:e.options.start.x+"px",top:e.options.start.y+"px",width:e.options.width+"px",height:e.options.height+"px"})))}),render(){return r("div",{style:this.style,class:q},null)}});const z=new class{constructor(){t(this,"events",{})}on(e,t){this.events[e]||(this.events[e]=[]),this.events[e].includes(t)||this.events[e].push(t)}off(e,t){const l=this.events[e];l&&(this.events[e]=l.filter((e=>e!==t)))}emit(e,t){const l=this.events[e];if(l&&l.length>0)for(const o of l)o(t)}once(e,t){const l=o=>{t(o),this.off(e,l)};this.on(e,l)}},W="_markLine_1bccj_38",H="_line_1bccj_42",Z="_xline_1bccj_48",J="_yline_1bccj_53",$=n({name:"AuxiliaryLine",setup(){const e=V(),t=o([]),l=["xt","xc","xb","yl","yc","yr"],n=o(3),i=a({xt:!1,xc:!1,xb:!1,yl:!1,yc:!1,yr:!1}),d=e=>{t.value.push(e)},h=()=>{Object.keys(i).forEach((e=>{i[e]=!1}))},p=(l,o)=>{const{primitives:n}=e,i=e.curPrimitive;if(!i)return;const{top:r,left:a,right:s,bottom:c}=X(i.style),u=(s-a)/2,d=(c-r)/2;h(),n.forEach((e=>{if(e==i)return;const n=X(e.style),{top:h,left:p,bottom:f,right:g}=n,y=(g-p)/2,b=(f-h)/2,S={top:[{isNearly:m(r,h),lineNode:t.value[0],line:"xt",dragShift:h,lineShift:h},{isNearly:m(c,h),lineNode:t.value[0],line:"xt",dragShift:h-(c-r||0),lineShift:h},{isNearly:m((r||0)+d,h+b),lineNode:t.value[1],line:"xc",dragShift:h+b-d,lineShift:h+b},{isNearly:m(r,f),lineNode:t.value[2],line:"xb",dragShift:f,lineShift:f},{isNearly:m(c,f),lineNode:t.value[2],line:"xb",dragShift:f-(c-r||0),lineShift:f}],left:[{isNearly:m(a,p),lineNode:t.value[3],line:"yl",dragShift:p,lineShift:p},{isNearly:m(s,p),lineNode:t.value[3],line:"yl",dragShift:p-(s-a||0),lineShift:p},{isNearly:m((a||0)+u,p+y),lineNode:t.value[4],line:"yc",dragShift:p+y-u,lineShift:p+y},{isNearly:m(a,g),lineNode:t.value[5],line:"yr",dragShift:g,lineShift:g},{isNearly:m(s,g),lineNode:t.value[5],line:"yr",dragShift:g-(s-a||0),lineShift:g}]},w=[];Object.keys(S).forEach((e=>{S[e].forEach((t=>{t.isNearly&&(i.updateStyleByKey(e,t.dragShift),t.lineNode.style[e]=`${t.lineShift}px`,w.push(t.line))}))})),v(w,l,o)}))},v=(e,t,l)=>{l?e.includes("yr")?i.yr=!0:e.includes("yc")?i.yc=!0:e.includes("yl")&&(i.yl=!0):e.includes("yl")?i.yl=!0:e.includes("yc")?i.yc=!0:e.includes("yr")&&(i.yr=!0),t?e.includes("xb")?i.xb=!0:e.includes("xc")?i.xc=!0:e.includes("xt")&&(i.xt=!0):e.includes("xt")?i.xt=!0:e.includes("xc")?i.xc=!0:e.includes("xb")&&(i.xb=!0)},m=(e,t)=>Math.abs(e-t)<=n.value;return s((()=>{z.on("move",(({isDownward:e,isRightward:t})=>{p(e,t)})),z.on("unmove",(()=>{h()})),p(!1,!1)})),()=>r("div",{class:W},[l.map((e=>c(r("div",{key:e,ref:d,class:`${H} ${e.includes("x")?Z:J}`},null),[[u,i[e]]])))])}});function ee(){const e=V(),{editorScale:t}=d(e);return{transByCurScale:e=>100*e/t.value,transAbsByCurScale:e=>100*Math.abs(e)/t.value}}const te="_boundBox_55foi_38",le="_active_55foi_46",oe="_point_55foi_52";const ne=n({name:"BoundBox",props:{primitive:{type:Object,default:()=>{}},pStyle:{type:Object,default:()=>{}},index:{required:!0,type:Number,default:0}},emits:["closeContextmenu"],setup(e,{slots:t,emit:l}){const n=V(),a=_(),{curPrimitive:s}=d(n),{areaSelectVisible:c}=d(a),{transByCurScale:u}=ee(),{curRef:p,cursors:v,angleToCursor:m,drawPoints:f,pointStyle:g}=function(){const e=o(null),t=o({});return{curRef:e,cursors:t,angleToCursor:[{start:338,end:23,cursor:"nw"},{start:23,end:68,cursor:"n"},{start:68,end:113,cursor:"ne"},{start:113,end:158,cursor:"e"},{start:158,end:203,cursor:"se"},{start:203,end:248,cursor:"s"},{start:248,end:293,cursor:"sw"},{start:293,end:338,cursor:"w"}],drawPoints:{lt:0,t:45,rt:90,r:135,rb:180,b:225,lb:270,l:315},pointStyle:(e,l)=>{const{width:o=0,height:n=0}=l,i=e.includes("t"),r=e.includes("b"),a=e.includes("l"),s=e.includes("r");let c=a?0:o,u=i?0:n;return!i&&!r||a||s?i||r||!a&&!s||(c=a?0:o,u=Math.floor(n/2)):(c=o/2,u=i?0:n),{marginLeft:"-4px",marginTop:"-4px",left:`${c}px`,top:`${u}px`,cursor:t.value[e]}}}}(),y=()=>{const e={};let t=-1;for(const l in f){const o=P(f[l]);for(let n=0;n<m.length;n++){t=(t+1)%m.length;const n=m[t];if(o<23||o>=338){e[l]="nw-resize";break}if(n.start<=o&&o<n.end){e[l]=n.cursor+"-resize";break}}}return e},b=t=>{if(t.stopPropagation(),t.preventDefault(),c.value)return;n.setClickPrimitiveStatus(!0),n.setCurPrimitive(e.primitive),v.value=y();const l=e.pStyle,o=t.clientY,i=t.clientX,r=l.top||0,a=l.left||0,s=t=>{const l=t.clientX,n=t.clientY,s=u(t.clientY-o)+r,c=u(t.clientX-i)+a;e.primitive.updateStyle({top:G.ceil(s),left:G.ceil(c)});const d=n-o>0,h=l-i>0;z.emit("move",{isDownward:d,isRightward:h})},d=()=>{z.emit("unmove"),document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",d)};h((()=>{s.value&&(v.value=y())}));const S=e=>{e.stopPropagation(),e.preventDefault(),l("closeContextmenu")},w=i((()=>{var t;return(null==(t=s.value)?void 0:t.id)===e.primitive.id})),A=()=>Object.keys(f).map((t=>r("div",{key:t,class:oe,style:g(t,e.pStyle),onMousedown:l=>((t,l)=>{l.stopPropagation(),l.preventDefault();const{pStyle:o}=e,{height:n=0,width:i=0,top:r=0,left:a=0}=o,s=l.clientX,c=l.clientY,d=e=>{const l=e.clientX,d=e.clientY-c,h=l-s,p=/t/.test(t),v=/b/.test(t),m=/l/.test(t),f=/r/.test(t),g=n+u(p?-d:v?d:0),y=i+u(m?-h:f?h:0);Object.assign(o,{height:Math.max(g,0),width:Math.max(y,0),left:a+(m?h:0),top:r+(p?d:0)})},h=()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",h)})(t,l)},null)));return()=>{var e;return r("div",{ref:p,class:[te,w.value&&le],onClick:S,onMousedown:b},[w.value?A():null,null==(e=t.default)?void 0:e.call(t)])}}}),ie="_contextmenu_sanc5_38";const re=()=>{const e=a({top:o(0),left:o(0),copyData:o(null)}),t=V(),{curPrimitive:l}=d(t),{handleCompose:n,handleDecompose:i}=function(){const e=V(),t=_(),{curPrimitive:l}=d(e),{groupStyle:o,selectedPrimitives:n}=d(t);return{handleCompose:()=>{const l=[],i=n.value,r=document.querySelector("#editor").getBoundingClientRect();i.forEach((e=>{var t;if("Group"===e.cName){const o={...e.style};null==(t=e.childPrimitives)||t.forEach((e=>{Y(e,r,o),l.push(e)}))}else l.push(e)}));const a=n.value,s=new p;s.childPrimitives=l,s.style={...o.value},I(s),e.addPrimitive(s),e.setCurPrimitive(s),e.batchDeletePrimitive(a),t.setAreaSelectVisible(!1),t.clearPrimitives()},handleDecompose:()=>{var t,o;const n={...null==(t=l.value)?void 0:t.style},i=null==(o=l.value)?void 0:o.childPrimitives,r=document.querySelector("#editor"),a=null==r?void 0:r.getBoundingClientRect();e.deleteCurPrimitive(),i.forEach((t=>{Y(t,a,n),e.addPrimitive(t)}))}}}();return{menuState:e,operations:{handleCopy:()=>{const t=G.cloneDeep(l.value);t.id=v.createId(),e.copyData=t,window.$message.success("复制成功！")},handlePaste:()=>{if(!e.copyData)return void window.$message.warning("请选择组件！");const l=e.copyData;l.style.top=e.top,l.style.left=e.left,t.addPrimitive(l)},handleClearCanvas:()=>{t.clear()},handelDelete:()=>{t.deleteCurPrimitive(),window.$message.success("删除成功！")},handleUp:()=>{t.upCurComponent()},handleDown:()=>{t.downCurComponent()},handleTop:()=>{t.moveCurPrimitiveByIndex(1)},handleBottom:()=>{t.moveCurPrimitiveByIndex(-1)},handleCreateGroup:()=>{n()},handleDeleteGroup:()=>{i()}}}},ae=n({name:"ContextMenu",setup(e,{expose:t}){const{menuState:l,operations:n}=re(),s=V(),h=_(),{areaSelectVisible:p}=d(h),v=a({visible:o(!1),contextType:o(""),contextOptions:o([])}),g=()=>{s.setClickPrimitiveStatus(!0)},y=[{label:"复制",handler:n.handleCopy},{label:"粘贴",handler:n.handlePaste},{label:"删除",handler:n.handelDelete},{label:"置顶",handler:n.handleUp},{label:"置底",handler:n.handleDown},{label:"上移",handler:n.handleTop},{label:"下移",handler:n.handleBottom}],b=[{label:"组合",handler:n.handleCreateGroup},{label:"删除",handler:n.handleDeleteGroup}],S=[{label:"粘贴",handler:n.handlePaste},{label:"清空画布",handler:n.handleClearCanvas}],w=()=>{p.value?v.contextOptions=[...b]:"Editor"===v.contextType?v.contextOptions=[...S]:(v.contextOptions=[...y],"Group"===v.contextType&&v.contextOptions.unshift({label:"解除分组",handler:n.handleDeleteGroup}))},A=i((()=>({top:`${l.top}px`,left:`${l.left}px`})));return t({show:({top:e,left:t,contextType:o})=>{l.top=e,l.left=t,v.contextType=o,w(),v.visible=!0},close:()=>{v.visible=!1}}),()=>r(f,{to:"body"},{default:()=>[c(r("div",{class:ie,style:A.value},[r("ul",{onMouseup:g,onMousedown:e=>e.stopPropagation()},[v.contextOptions.map((e=>r("li",{onClick:()=>{e.handler(),v.visible=!1}},[e.label,m(" "),e.disabled])))])]),[[u,v.visible]])]})}});function se(){const e=a({lastX:0,lastY:0,isSpaceDown:o(!1),isMouseDown:o(!1)}),t=o(null),l=o(null),n=o(null),i=o(null),r=o(null),{groupState:s,onDrawGroupBoundry:c}=function(){const e=V(),{transByCurScale:t,transAbsByCurScale:l}=ee(),o=_(),{primitives:n}=d(e),i=a({editorX:0,editorY:0,start:{x:0,y:0},width:0,height:0}),r=()=>{i.width=0,i.height=0,o.setAreaSelectVisible(!1),o.setAreaSelectOptions(null,[])},s=()=>{const e=c();if(e.length<=1)return void r();let t=1/0,l=1/0,n=-1/0,a=-1/0;e.forEach((e=>{var o;let r={};"Group"===e.cName?null==(o=e.childPrimitives)||o.forEach((e=>{const o=document.getElementById(`primitive${e.id}`).getBoundingClientRect();r.left=o.left-i.editorX,r.top=o.top-i.editorY,r.right=o.right-i.editorX,r.bottom=o.bottom-i.editorY,r.left<l&&(l=r.left),r.top<t&&(t=r.top),r.right>n&&(n=r.right),r.bottom>a&&(a=r.bottom)})):r=U(e.style),r.left<l&&(l=r.left),r.top<t&&(t=r.top),r.right>n&&(n=r.right),r.bottom>a&&(a=r.bottom)})),i.start.x=l,i.start.y=t,i.width=n-l,i.height=a-t;const s={left:l,top:t,width:i.width,height:i.height};o.setAreaSelectOptions(s,e)},c=()=>{const{x:e,y:t}=i.start;return n.value.filter((l=>{const{left:o,top:n,width:r,height:a}=l.style;if(e<=o&&t<=n&&o+r<=e+i.width&&n+a<=t+i.height)return l}))};return{groupState:i,onDrawGroupBoundry:e=>{r();const n=document.getElementById("editor").getBoundingClientRect(),a=e.clientX,c=e.clientY;i.editorX=n.x,i.editorY=n.y,i.start.x=t(a-i.editorX),i.start.y=t(c-i.editorY),o.setAreaSelectVisible(!0);const u=e=>{i.width=l(e.clientX-a),i.height=l(e.clientY-c),e.clientX<a&&(i.start.x=l(e.clientX-i.editorX)),e.clientY<c&&(i.start.y=l(e.clientY-i.editorY))},d=e=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d),e.clientX!=a||e.clientY!=c?s():r()};document.addEventListener("mousemove",u),document.addEventListener("mouseup",d)}}}(),u=V(),{curPrimitive:p,primitives:v,editorScale:m}=d(u),f=e=>{if(!e||!e.parentNode)return;const t=e.parentNode;if(!t.getAttribute)return;const l=t.getAttribute("data-context");return l||f(t)},y=l=>{var o;if(!e.isMouseDown)return;const n=l.clientX-e.lastX,i=l.clientY-e.lastY;null==(o=t.value)||o.scrollBy(-n,-i),e.lastX=l.clientX,e.lastY=l.clientY},{space:b}=F({passive:!1,onEventFired(e){"Space"===e.code&&"keydown"===e.type&&e.preventDefault()}});return g(b,(t=>{e.isSpaceDown=t,l.value.style.cursor=t?"pointer":"default",t?document.addEventListener("mousemove",y):document.removeEventListener("mousemove",y)})),h((()=>{const e=r.value.getBoundingClientRect();t.value.scrollLeft=e.width/2-100,t.value.scrollTop=e.height/2-160})),{groupState:s,editorScale:m,contextMenuRef:n,primitives:v,screenRef:t,editorRef:l,sketchRulerRef:i,editorContaineRef:r,handleMouseUp:t=>{var l;u.isClickPrimitive||u.setCurPrimitive(null),2!==t.button&&(null==(l=n.value)||l.close()),e.isMouseDown=!1},handleMouseDown:t=>{0===t.button&&(e.isMouseDown=!0,e.isSpaceDown?(e.lastX=t.clientX,e.lastY=t.clientY):(u.setClickPrimitiveStatus(!1),p||t.preventDefault(),c(t)))},handleMouseWheel:e=>{var t;if(e.ctrlKey||e.metaKey){e.preventDefault();let l=m.value;if(e.wheelDelta>=0&&l<200)return l+=5,void u.setEditorScale(l);e.wheelDelta<0&&l>10&&(l-=5,u.setEditorScale(l)),null==(t=i.value)||t.handleResizeRuler()}},handleMouseScroll:()=>{var e;null==(e=i.value)||e.handleResizeRuler()},handleShowContextMenu:e=>{var t;if(e.stopPropagation(),e.preventDefault(),!e.target)return;const l=e.clientY,o=e.clientX,i=f(e.target);null==(t=n.value)||t.show({top:l,left:o,contextType:i})}}}const ce={dark:"_dark_12hl5_22",screen:"_screen_12hl5_38",container:"_container_12hl5_49",editor:"_editor_12hl5_54",primitive:"_primitive_12hl5_65"};
/*!vue3-sketch-ruler v1.3.62022年11月Fri Nov 04 2022 18:18:02 GMT+0800 (中国标准时间)制作*/
var ue=(e,t)=>{const l=e.__vccOpts||e;for(const[o,n]of t)l[o]=n;return l};const de=n({name:"LineRuler",props:{scale:Number,thick:Number,palette:Object,index:Number,start:Number,vertical:Boolean,value:Number,isShowReferLine:Boolean},emits:["onMouseDown","onRelease","onRemove"],setup(e,{emit:t}){const l=o(0),n=o(!0);h((()=>{l.value=e.value}));const r=i((()=>{const t=(l.value-e.start)*e.scale;(e=>{n.value=e>=0})(t);const o=t+"px";return e.vertical?{top:o}:{left:o}})),a=i((()=>{var t;const l=`1px solid ${null==(t=e.palette)?void 0:t.lineColor}`,o=e.vertical?{borderTop:l}:{borderLeft:l};return{cursor:e.isShowReferLine?e.vertical?"ns-resize":"ew-resize":"none",...o}})),s=i((()=>e.vertical?{left:e.thick+"px"}:{top:e.thick+"px"}));return{startValue:l,showLine:n,offset:r,borderCursor:a,actionStyle:s,handleDown:o=>{const n=e.vertical?o.clientY:o.clientX,i=l.value;t("onMouseDown");const r=t=>{const o=e.vertical?t.clientY:t.clientX,r=Math.round(i+(o-n)/e.scale);l.value=r},a=()=>{t("onRelease",l.value,e.index),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",a)},handleRemove:()=>{t("onRemove",e.index)}}}}),he={class:"value"};var pe=ue(de,[["render",function(e,t,l,o,n,i){return c((b(),S("div",{class:"line",style:A([e.offset,e.borderCursor]),onMousedown:t[1]||(t[1]=(...t)=>e.handleDown&&e.handleDown(...t))},[w("div",{class:"action",style:A(e.actionStyle)},[w("span",{class:"del",onClick:t[0]||(t[0]=(...t)=>e.handleRemove&&e.handleRemove(...t))},"×"),w("span",he,R(e.startValue),1)],4)],36)),[[u,e.showLine]])}],["__scopeId","data-v-5dea28d6"]]);const ve=n({name:"CanvasRuler",props:{showIndicator:Boolean,valueNum:Number,scale:Number,ratio:Number,palette:Object,vertical:Boolean,start:Number,width:Number,height:Number,selectStart:Number,selectLength:Number},emits:["onAddLine","update:showIndicator","update:valueNum"],setup(e,{emit:t}){const l=a({canvasContext:null});let n=1;const i=o(null);h((()=>{n=e.ratio||window.devicePixelRatio||1,r(),s(n),c(n)}));const r=()=>{l.canvasContext=i.value&&i.value.getContext("2d")},s=t=>{if(i.value){i.value.width=e.width*t,i.value.height=e.height*t;const o=l.canvasContext;o&&(o.font=12*t+'px -apple-system,\n                "Helvetica Neue", ".SFNSText-Regular",\n                "SF UI Text", Arial, "PingFang SC", "Hiragino Sans GB",\n                "Microsoft YaHei", "WenQuanYi Zen Hei", sans-serif',o.lineWidth=1,o.textBaseline="middle")}},c=t=>{const o={scale:e.scale,width:e.width,height:e.height,palette:e.palette,ratio:t};l.canvasContext&&((e,t,l,o,n,i)=>{const{scale:r,width:a,height:s,ratio:c,palette:u}=n,{bgColor:d,fontColor:h,shadowColor:p,longfgColor:v,shortfgColor:m}=u;if(e.scale(c,c),e.clearRect(0,0,a,s),e.fillStyle=d,e.fillRect(0,0,a,s),o){const n=(l-t)*r,c=o*r;e.fillStyle=p,i?e.fillRect(n,0,c,3*s/8):e.fillRect(0,n,3*a/8,c)}const f=(e=>e<=.25?40:e<=.5?20:e<=1?10:e<=2?5:e<=4?2:1)(r),g=f*r,y=10*f,b=y*r,S=Math.floor(t/f)*f,w=Math.floor(t/y)*y,A=(S-t)/f*g,C=(w-t)/y*b,x=t+Math.ceil((i?a:s)/r);e.beginPath(),e.fillStyle=h,e.strokeStyle=v;for(let R=w,N=0;R<x;R+=y,N++){const t=C+N*b+.5;i?e.moveTo(t,0):e.moveTo(0,t),e.save(),i?e.translate(t,.4*s):e.translate(.4*a,t),i||e.rotate(-Math.PI/2),e.scale(.83/c,.83/c),e.fillText(R.toString(),4*c,7*c),e.restore(),i?e.lineTo(t,9*s/16):e.lineTo(9*a/16,t)}e.stroke(),e.closePath(),e.beginPath(),e.strokeStyle=m;for(let R=S,N=0;R<x;R+=f,N++){const t=A+N*g+.5;i?e.moveTo(t,0):e.moveTo(0,t),R%y!=0&&(i?e.lineTo(t,1*s/4):e.lineTo(1*a/4,t))}e.stroke(),e.closePath(),e.setTransform(1,0,0,1,0,0)})(l.canvasContext,e.start,e.selectStart,e.selectLength,o,!e.vertical)};g((()=>e.start),(()=>c(n))),g([()=>e.width,()=>e.height],(()=>{s(n),c(n)}));return{handle:(l,o)=>{const n=e.vertical?l.offsetY:l.offsetX,i=(r=n,a=e.start,s=e.scale,Math.round(a+r/s));var r,a,s;switch(o){case"click":t("onAddLine",i);break;case"enter":t("update:valueNum",i),t("update:showIndicator",!0);break;default:t("update:valueNum",i)}},canvas:i}}});const me=n({name:"RulerWrapper",components:{CanvasRuler:ue(ve,[["render",function(e,t,l,o,n,i){return b(),S("canvas",{ref:"canvas",class:"ruler",onClick:t[0]||(t[0]=t=>e.handle(t,"click")),onMouseenter:t[1]||(t[1]=t=>e.handle(t,"enter")),onMousemove:t[2]||(t[2]=t=>e.handle(t,"move")),onMouseleave:t[3]||(t[3]=t=>e.$emit("update:showIndicator",!1))},null,544)}]]),RulerLine:pe},props:{scale:Number,ratio:Number,thick:Number,palette:Object,vertical:{type:Boolean,default:!0},width:{type:Number,default:200},height:{type:Number,default:200},start:{type:Number,default:0},lines:{type:Array,default:()=>[]},selectStart:{type:Number},selectLength:{type:Number},isShowReferLine:{type:Boolean}},setup(e){const t=o(!1),l=o(0),n=i((()=>e.vertical?"v-container":"h-container")),r=i((()=>{const t={width:`calc(100% - ${e.thick}px)`,height:`${e.thick+1}px`,left:`${e.thick}px`},l={width:`${e.thick&&e.thick+1}px`,height:`calc(100% - ${e.thick}px)`,top:`${e.thick}px`};return e.vertical?l:t})),a=i((()=>{var t;const o=(l.value-e.start)*e.scale;let n="top",i="borderLeft";return n=e.vertical?"top":"left",i=e.vertical?"borderBottom":"borderLeft",{[n]:o+"px",[i]:`1px solid ${null==(t=e.palette)?void 0:t.lineColor}`}})),s=t=>{e.lines.splice(t,1)};return{showIndicator:t,valueNum:l,rwClassName:n,rwStyle:r,indicatorStyle:a,handleNewLine:t=>{e.lines.push(t)},handleLineRelease:(t,l)=>{const o=t-e.start,n=(e.vertical?e.height:e.width)/e.scale;o<0||o>n?s(l):e.lines[l]=t},handleLineRemove:s}}}),fe={class:"lines"},ge={class:"value"};const ye=n({name:"SketchRule",components:{RulerWrapper:ue(me,[["render",function(e,t,l,o,n,i){const a=y("CanvasRuler"),s=y("RulerLine");return b(),S("div",{class:N(e.rwClassName),style:A(e.rwStyle)},[r(a,{vertical:e.vertical,scale:e.scale,width:e.width,height:e.height,start:e.start,ratio:e.ratio,"select-start":e.selectStart,"select-length":e.selectLength,palette:e.palette,valueNum:e.valueNum,"onUpdate:valueNum":t[0]||(t[0]=t=>e.valueNum=t),showIndicator:e.showIndicator,"onUpdate:showIndicator":t[1]||(t[1]=t=>e.showIndicator=t),onOnAddLine:e.handleNewLine},null,8,["vertical","scale","width","height","start","ratio","select-start","select-length","palette","valueNum","showIndicator","onOnAddLine"]),c(w("div",fe,[(b(!0),S(C,null,x(e.lines,((t,l)=>(b(),E(s,{key:t+l,index:l,value:t>>0,scale:e.scale,start:e.start,thick:e.thick,palette:e.palette,vertical:e.vertical,"is-show-refer-line":e.isShowReferLine,onOnRemove:e.handleLineRemove,onOnRelease:e.handleLineRelease},null,8,["index","value","scale","start","thick","palette","vertical","is-show-refer-line","onOnRemove","onOnRelease"])))),128))],512),[[u,e.isShowReferLine]]),c(w("div",{class:"indicator",style:A(e.indicatorStyle)},[w("div",ge,R(e.valueNum),1)],4),[[u,e.showIndicator]])],6)}],["__scopeId","data-v-b6c23352"]])},props:{eyeIcon:{type:String},closeEyeIcon:{type:String},scale:{type:Number,default:1},ratio:{type:Number},thick:{type:Number,default:16},palette:Object,startX:{type:Number},startY:{type:Number,default:0},width:{type:Number,default:200},height:{type:Number,default:200},shadow:{type:Object,default:()=>({x:0,y:0,width:0,height:0})},lines:{type:Object,default:()=>({h:[],v:[]})},isShowReferLine:{type:Boolean,default:!0}},emits:["onCornerClick"],setup(e,{emit:t}){let l=o(!0);l.value=e.isShowReferLine;const n=i((()=>{const t=function e(t,l){return Object.keys(t).forEach((o=>{o&&t.hasOwnProperty(o)&&("object"==typeof l.key?t[o]=e(t[o],l[o]):l.hasOwnProperty(o)&&(t[o]=l[o]))})),t}({bgColor:"rgba(225,225,225, 0)",longfgColor:"#BABBBC",shortfgColor:"#C8CDD0",fontColor:"#7D8694",shadowColor:"#E8E8E8",lineColor:"#EB5648",borderColor:"#DADADC",cornerActiveColor:"rgb(235, 86, 72, 0.6)",menu:{bgColor:"#fff",dividerColor:"#DBDBDB",listItem:{textColor:"#415058",hoverTextColor:"#298DF8",disabledTextColor:"rgba(65, 80, 88, 0.4)",bgColor:"#fff",hoverBgColor:"#F2F2F2"}}},e.palette||{});return t})),r=i((()=>({backgroundImage:l.value?`url(${e.eyeIcon||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAopJREFUOE/FlE9IVEEcx7+/N9ouds1Mu0QUSFZYdIgoUqQoKPBQHsKozpXE7jbTO/U8xLJvn6usBHWQ6hBFXupSkQeVbh0KJEPp0sH+eLGTsKs77xcj78m0ax0E8cHjzZv5zef3/c33xxA24KENYGJzoEEQbNNaN4Zh2OQ4znwYhr9c1/39vwrXVDo0NNS0tLR0GYB5D64BmAMwzMyvlFKz1es10Hw+f4mZ7wHYBeA9gNdENFepVOaEEM3M3OI4Thczn41gt6WUgQ3+C+r7/h0AWQD3mXnYqPA8L9nQ0HCemduIaFpKOWoAhUJhT6VSuQXgOjP3K6W8GLwKzeVyp4jonR0QBEErM48w8zFLyayUsjX+z+VyHhHdZebTSqkxM78CHRgYOKS1/ghgVErZY214RkQ7ADyRUj72ff8qgCtmXUrZGcf5vv8CwEUhxOF0Ov1pBRpla5dSdseBhUJhpznH6tIsZb1KqacW+BGArUaUXX63UuplHJTNZjuEEONSyhozfd/n6mQ1RkXZL2itz7mu+80EDA4ONi8vL/8AcM2UbikyR2BU9cSmmTU70YqKIAj2hWFo2uenlHK/BRg3Y2aeNO5GyU8S0ZbFxcUuz/NKEXAGQKPjOCcymcyX1dIi8DSAiWQyeaavr68cbSgCuBknYubnQoj+TCYzUywWE6VS6S2ADsdx2gxw1X3L7SNENMbMnwE8qK+vf5NKpRaMaeVyeW8ikfiaSqW+R7BuZr5BRMe11p2u607U9Gk8kc/ntzPzQwCmExYATDLzVBiGE0KIowAOADDf3QA+aK2VDaxRajto3K+rq+tl5nYAzQBamHmeiOYBTGmtR6ph/1Rqg9c73pz7dD1qN0TpHyNQRCUDJXrAAAAAAElFTkSuQmCC"})`:`url(${e.closeEyeIcon||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAjtJREFUOE/NlD9oFEEUxn9v9ghC0hpRUogIAUmniGAT/5Q2FrETPSNRJILg7RwimI0ox85eQFCEBGIUO1PYpFM0jSConQoBEZGgGPsgl+w+2eM2bC57SopAFqYZ3v7m+977ZoQt+GQLmGxPaBiGgYiMWWvXBHZUGoZhH3BERPYC+4F+4Keq/urt7b1RLpf/ZEBVHa9Wq0HWyg3QKIoGVPU8cA7wgK/pUtXPQJ8xZk+pVBpuNBqXUoUiEvi+P56fzTpo6+SbwHNg1lo7WzTITGEKXFlZeeB53tVCpa3CK8AFa+1cBgvD8LKIXAQOJkkyICJDeYVBEJS6u7s/qeoLa+1o+l9TqXNuBLhmjDlbqVQ+5ICjInIfOBPH8W9jzGCR5YmJiRNxHM+papgqzqDvgSlr7VTernPuO3An3c9bBt74vv+yrdaKyLDv+/1Sq9UGPc97nY9EVuycU2AQOA7cAm4Dr4D5TvVxHB9rKo2iaEFVp621Ln96FEUngaOqGmSxabVqsh3a2h+x1h5qQjNrae/yE4+iaCwDJkky73neTuBZe129Xk+H+BS4l7ZqLVIZ2BhzuFKpvMsDVXXWGPMxFdAedOfcKeCRqj7MYrUhpz09PfXl5eXrectFWXXODQHpOq2qd/95o/JXr6ura3J1dXU6SZIfwKKIHAD2tVYMPBGRx77vN10UXtO85fTkmZmZHUtLSzUR2QXsBhaAL6r6DXhbrVYXi1yss59GqOgub/bN3Z7v6X/tb9Zmp/q/kN8s+lJb8oEAAAAASUVORK5CYII="})`,width:e.thick+"px",height:e.thick+"px",borderRight:`1px solid ${n.value.borderColor}`,borderBottom:`1px solid ${n.value.borderColor}`})));return g([()=>e.isShowReferLine],(()=>{l.value=e.isShowReferLine})),{showReferLine:l,paletteCpu:n,cornerStyle:r,onCornerClick:e=>{l.value=!l.value,t("onCornerClick",l.value)}}}}),be={id:"mb-ruler",class:"style-ruler mb-ruler"};var Se=ue(ye,[["render",function(e,t,l,o,n,i){const a=y("RulerWrapper");return b(),S("div",be,[r(a,{vertical:!1,width:e.width,height:e.thick,"is-show-refer-line":e.showReferLine,thick:e.thick,ratio:e.ratio,start:e.startX,lines:e.lines.h,"select-start":e.shadow.x,"select-length":e.shadow.width,scale:e.scale,palette:e.paletteCpu},null,8,["width","height","is-show-refer-line","thick","ratio","start","lines","select-start","select-length","scale","palette"]),r(a,{vertical:!0,width:e.thick,height:e.height,"is-show-refer-line":e.showReferLine,thick:e.thick,ratio:e.ratio,start:e.startY,lines:e.lines.v,"select-start":e.shadow.y,"select-length":e.shadow.height,scale:e.scale,palette:e.paletteCpu},null,8,["width","height","is-show-refer-line","thick","ratio","start","lines","select-start","select-length","scale","palette"]),w("a",{class:"corner",style:A(e.cornerStyle),onClick:t[0]||(t[0]=(...t)=>e.onCornerClick&&e.onCornerClick(...t))},null,4)])}]]);const we="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAA7ElEQVQ4je3SvS5EURSG4ccMmXYUQ0hoRoErEXMJ4iaE6GVqYlTojWugEf8/LZdApRLKCcVZh5PJOScTjUjmTb5irb3X2t/eezHkXzGHHTzhI/SIbTSLiio5uSrauMIbVtAIreId19iKvaVU0MUJJkr2TeIURwWmvtnEGWoRj+MAL3jGPuqxVsM5NspOfcVMxKO4xS6mQh3c+LnqbNQ08hquh5uUVjjIMoJLLGdyh1hLg+z9F3Cciedx39fwE3exltLFYp7Dflq4GMDhwFQlb9jBdGhPMjKF41L25T0sSX7zITQW7nq/cTjkj/gC6vIqCPem75wAAAAASUVORK5CYII=",Ae="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABEUlEQVQ4jdXTu0oDQRiG4ccDBqw8YAIWWkgaBcHeYrG1iQRyARbegdjnAhRLRUEQjHoLIoh4QBRRFCvRWo2Fhb1FJjAGlqSIYF5YZv+Z4eX7d2foJO6RtFM4izfM/XtpgvcwTuAB3+F5xGqYb5luHARBXTqAfsygrNZFGT3NZF2o4BjFKGkjORxhLwRIZQVnyIS6GCWdxwYGw1oGp1hOk+XwgfFQ9+IWO1HSRVyENRhDFSN1SfwNlvCJ3VAXMI0FXOMQm3hFFs/4Qh6juNTQ/xT2ozqPq/B+glKQvuA82lfBZFrbMYUgiklCqqQVQSN9uMGaWktZrONJ+t9vyhC2g6CKLQz7ffjbRmfd/bt2Cv+WH7FAOwOy5F6RAAAAAElFTkSuQmCC",Ce="_sketchRule_1m2qx_38",xe=n({name:"SketchRuler",setup(){const e=a({thick:16,startX:o(0),startY:o(0),lines:a({h:[],v:[]})}),t=V(),l=B(),{editorScale:n}=d(t),{transByCurScale:r}=ee(),s=i((()=>{const e=document.getElementById("screen");return{width:null==e?void 0:e.clientWidth,height:null==e?void 0:e.clientHeight}})),c=i((()=>l.darkTheme?{bgColor:"#18181c",longfgColor:"#4d4d4d",shortfgColor:"#4d4d4d",fontColor:"#4d4d4d",shadowColor:"#18181c",borderColor:"#18181c",cornerActiveColor:"#18181c"}:{bgColor:"#fff",longfgColor:"#cbcbcb",shortfgColor:"#cbcbcb",fontColor:"#ababab",shadowColor:"#fff",borderColor:"#e2e2e2",cornerActiveColor:"blue"}));return{...k(e),editorScale:n,containerRect:s,handleResizeRuler:()=>{var t,l;const o=null==(t=document.querySelector("#screen"))?void 0:t.getBoundingClientRect(),n=null==(l=document.querySelector("#editor"))?void 0:l.getBoundingClientRect();e.startX=r(o.left+e.thick-n.left),e.startY=r(o.top+e.thick-n.top)},paletteStyle:c,eyeIcon:we,closeEyeIcon:Ae}},render(){var e,t;return r(Se,{class:Ce,thick:this.thick,eyeIcon:we,closeEyeIcon:Ae,scale:this.editorScale/100,width:null==(e=this.containerRect)?void 0:e.width,height:null==(t=this.containerRect)?void 0:t.height,startX:this.startX,startY:this.startY,lines:this.lines,cornerActive:!0},null)}});const Re=n({name:"Editor",setup(){const e=o(),t=o(!1),l=_(),{areaSelectVisible:n}=d(l),r=["width","height","top","left"],{groupState:a,editorScale:s,contextMenuRef:c,...u}=se(),h=i((()=>({transform:`scale(${s.value/100})`})));return D((()=>t.value=!0)),{...u,sceneRef:e,groupState:a,editorStyle:h,rulerVisible:t,setEditorScene:t=>{e.value.setEditorScene(t)},contextMenuRef:c,getPrimitiveStyle:e=>T(e,r),areaSelectVisible:n,handleCloseContextMenu:()=>{var e;null==(e=c.value)||e.close()}}},render(){const e=e=>M(y(e.cName),{id:`primitive${e.id}`,class:ce.primitive,style:this.getPrimitiveStyle(e.style),"data-context":e.cName,dataSource:e});return r(C,null,[r("div",{id:"screen",ref:"screenRef",class:ce.screen,onWheel:this.handleMouseWheel,onScroll:this.handleMouseScroll},[r("div",{id:"editorContainer",ref:"editorContaineRef",class:ce.container},[r("div",{id:"editor",ref:"editorRef","data-context":"Editor",class:ce.editor,style:this.editorStyle,onMousedown:this.handleMouseDown,onMouseup:this.handleMouseUp,onContextmenu:this.handleShowContextMenu},[c(r(K,{options:this.groupState},null),[[u,this.areaSelectVisible]]),r($,null,null),r(ae,{ref:"contextMenuRef"},null),r(j,{ref:"sceneRef",class:ce.scene},null),(()=>this.primitives.map(((t,l)=>{let o;return r(ne,{index:l,style:Q(t.style),primitive:t,pStyle:t.style,onCloseContextmenu:this.handleCloseContextMenu},"function"==typeof(n=o=e(t))||"[object Object]"===Object.prototype.toString.call(n)&&!L(n)?o:{default:()=>[o]});var n})))()])])]),this.rulerVisible?r(xe,{ref:"sketchRulerRef"},null):null])}}),Ne="_container_12igw_38",Ee=n({name:"Container",components:{Editor:Re},setup(){const e=o(),{...t}=(()=>{const e=V(),{transByCurScale:t}=ee();return{handleDrop:l=>{l.preventDefault(),l.stopPropagation();const o=l.dataTransfer.getData("name"),n=document.querySelector("#editor").getBoundingClientRect(),i=new O[o],r={top:G.ceil(t(l.clientY-n.y)),left:G.ceil(t(l.clientX-n.x))};i.updateStyle(r),e.addPrimitive(i)},handleDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleMouseDown:e=>{e.stopPropagation()},handleMouseUp:()=>{}}})();return{editorRef:e,...t,setEditorScene:t=>{e.value.setEditorScene(t)}}},render(){return r(C,null,[r("div",{class:Ne,onDrop:this.handleDrop,onDragover:this.handleDragOver,onMousedown:this.handleMouseDown,onMouseup:this.handleMouseUp},[r(Re,{ref:"editorRef"},null)])])}});export{Ee as default};
//# sourceMappingURL=index-ddcbc70d.js.map
