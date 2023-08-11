import{k as e,d as t,H as n,y as o,m as r,B as s,Y as i,s as l,v as a,K as u,A as c,h as d,ad as p,I as m,ae as v,F as f}from"./index-eab422c6.js";import{u as h}from"./index-616a5bd5.js";import{l as g}from"./lodash-fb1b9e8d.js";import{u as y}from"./use-message-c525f025.js";const x="_boundBox_c2v03_1",w="_active_c2v03_8",b="_point_c2v03_13";const C=t({name:"BoundBox",props:{primitive:{type:Object,default:()=>{}},pStyle:{type:Object,default:()=>{}},index:{required:!0,type:Number,default:0}},emits:["closeContextmenu"],setup(t,{slots:i,emit:l}){const a=h(),{curPrimitive:u}=n(a),{curRef:c,cursors:d,angleToCursor:p,drawPoints:m}={curRef:e(null),cursors:e({}),angleToCursor:[{start:338,end:23,cursor:"nw"},{start:23,end:68,cursor:"n"},{start:68,end:113,cursor:"ne"},{start:113,end:158,cursor:"e"},{start:158,end:203,cursor:"se"},{start:203,end:248,cursor:"s"},{start:248,end:293,cursor:"sw"},{start:293,end:338,cursor:"w"}],drawPoints:{lt:0,t:45,rt:90,r:135,rb:180,b:225,lb:270,l:315}},v=e=>{const{width:n=0,height:o=0}=t.pStyle,r=e.includes("t"),s=e.includes("b"),i=e.includes("l"),l=e.includes("r");let a=i?0:n,u=r?0:o;return!r&&!s||i||l?r||s||!i&&!l||(a=i?0:n,u=Math.floor(o/2)):(a=n/2,u=r?0:o),{marginLeft:"-4px",marginTop:"-4px",left:`${a}px`,top:`${u}px`,cursor:d.value[e]}},f=()=>{const e={};let t=-1;for(const n in m){const o=(m[n]+360)%360;for(let r=0;r<p.length;r++){t=(t+1)%p.length;const r=p[t];if(o<23||o>=338){e[n]="nw-resize";break}if(r.start<=o&&o<r.end){e[n]=r.cursor+"-resize";break}}}return e},y=e=>{e.stopPropagation(),e.preventDefault(),a.setClickPrimitiveStatus(!0),a.setCurPrimitive(t.primitive),d.value=f();const n=t.pStyle,o=e.clientY,r=e.clientX,s=n.top||0,i=n.left||0,l=e=>{const n={top:g.ceil(e.clientY-o+s),left:g.ceil(e.clientX-r+i)};t.primitive.updateStyle(n)},u=()=>{document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",u)};document.addEventListener("mousemove",l),document.addEventListener("mouseup",u)};o((()=>{u.value&&(d.value=f())}));const C=e=>{e.stopPropagation(),e.preventDefault(),l("closeContextmenu")},P=r((()=>{var e;return(null==(e=u.value)?void 0:e.id)===t.primitive.id})),_=()=>Object.keys(m).map((e=>s("div",{key:e,class:b,style:v(e),onMousedown:n=>((e,n)=>{n.stopPropagation(),n.preventDefault();const{pStyle:o}=t,{height:r=0,width:s=0,top:i=0,left:l=0}=o,a=n.clientX,u=n.clientY,c=t=>{const n=t.clientX,c=t.clientY-u,d=n-a,p=/t/.test(e),m=/b/.test(e),v=/l/.test(e),f=/r/.test(e),h=r+(p?-c:m?c:0),g=s+(v?-d:f?d:0);Object.assign(o,{height:Math.max(h,0),width:Math.max(g,0),left:l+(v?d:0),top:i+(p?c:0)})},d=()=>{document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",c),document.addEventListener("mouseup",d)})(e,n)},null)));return()=>{var e;return s("div",{ref:c,class:[x,P.value&&w],onClick:C,onMousedown:y},[P.value?_():null,null==(e=i.default)?void 0:e.call(i)])}}}),P="_contextmenu_1ltzl_1",_=t({name:"ContextMenu",setup(t,{expose:o}){const c=y(),d=h(),{curPrimitive:p}=n(d),m=i({visible:e(!1),top:e(0),left:e(0),copyData:e(null)}),v=()=>{d.setClickPrimitiveStatus(!0)},f=()=>{if(!m.copyData)return void c.warning("请选择组件！");const e=m.copyData;e.style.top=m.top,e.style.left=m.left,d.addPrimitive(e)},x={"复制":()=>{const e=g.cloneDeep(p.value);e.id=u.createId(),m.copyData=e,c.success("复制成功！")},"粘贴":f,"删除":()=>{d.deleteCurPrimitive(),c.success("删除成功！")},"置顶":()=>{d.upCurComponent()},"置底":()=>{d.downCurComponent()},"上移":()=>{d.moveCurPrimitiveByIndex(1)},"下移":()=>{d.moveCurPrimitiveByIndex(-1)}},w=r((()=>p.value?x:{"粘贴":f}));return o({show:({top:e,left:t})=>{m.top=e,m.left=t,m.visible=!0},close:()=>{m.visible=!1}}),()=>l(s("div",{class:P,style:{top:`${m.top}px`,left:`${m.left}px`}},[s("ul",{onMouseup:v},[Object.entries(w.value).map((([e,t])=>s("li",{onClick:t},[e])))])]),[[a,m.visible]])}}),D=t({name:"Grid",render:()=>s("svg",{style:{position:"absolute",top:0,left:0},width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg"},[s("defs",null,[s("pattern",{id:"smallGrid",width:"7.236328125",height:"7.236328125",patternUnits:"userSpaceOnUse"},[s("path",{d:"M 7.236328125 0 L 0 0 0 7.236328125",fill:"none",stroke:"rgba(207, 207, 207, 0.3)","stroke-width":"1"},null)]),s("pattern",{id:"grid",width:"36.181640625",height:"36.181640625",patternUnits:"userSpaceOnUse"},[s("rect",{width:"36.181640625",height:"36.181640625",fill:"url(#smallGrid)"},null),s("path",{d:"M 36.181640625 0 L 0 0 0 36.181640625",fill:"none",stroke:"rgba(186, 186, 186, 0.5)","stroke-width":"1"},null)])]),s("rect",{width:"100%",height:"100%",fill:"url(#grid)"},null)])}),M="_editor_1iuos_1",S="_primitive_1iuos_8";const j=t({name:"Editor",components:{Grid:D,ContextMenu:_},setup(){const t=h(),n=t.primitives,o=e(null),r=e(null);c("RULER_KEY",r);const i=e=>{t.setClickPrimitiveStatus(!1)},l=e=>{var n;t.isClickPrimitive||t.setCurPrimitive(null),2!=e.button&&(null==(n=o.value)||n.close())},a=e=>{var t;if(e.stopPropagation(),e.preventDefault(),!e.target)return;let n=e.target,r=e.offsetY,s=e.offsetX;for(;n instanceof SVGElement;)n=n.parentNode;for(;"editor"!==n.id;)s+=n.offsetLeft,r+=n.offsetTop,n=n.parentNode;null==(t=o.value)||t.show({top:r,left:s})},u=()=>{var e;null==(e=o.value)||e.close()},{getBoundBoxStyle:v}={getBoundBoxStyle:e=>{const t={};for(const[n,o]of Object.entries(e))o&&(t[n]=o+"px");return t},getPrimitiveStyle:e=>{const t={};for(const[n,o]of Object.entries(e))o&&(t[n]=o+"px");return t}},f=()=>n.map(((e,t)=>{let n;return s(C,{index:t,style:v(e.style),primitive:e,pStyle:e.style,onCloseContextmenu:u},"function"==typeof(o=n=d(p(e.cName),{id:"primitive"+e.id,class:S,dataSource:e}))||"[object Object]"===Object.prototype.toString.call(o)&&!m(o)?n:{default:()=>[n]});var o}));return()=>s("div",{id:"editor",class:M,onMousedown:i,onMouseup:l,onContextmenu:a},[s(D,null,null),s(_,{ref:o},null),f()])}}),k="_container_79xjy_1",E=t({name:"Container",components:{Editor:j},setup(){const{...e}=(()=>{const e=h();return{handleDrop:t=>{t.preventDefault(),t.stopPropagation();const n=t.dataTransfer.getData("name"),o=document.querySelector("#editor").getBoundingClientRect(),r=new v[n],s={top:g.ceil(t.clientY-o.y),left:g.ceil(t.clientX-o.x)};r.updateStyle(s),e.addPrimitive(r)},handleDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleMouseDown:e=>{e.stopPropagation()},handleMouseUp:()=>{}}})();return{...e}},render(){return s(f,null,[s("div",{class:k,onDrop:this.handleDrop,onDragover:this.handleDragOver,onMousedown:this.handleMouseDown,onMouseup:this.handleMouseUp},[s(j,null,null)])])}});export{E as default};
//# sourceMappingURL=index-661971b3.js.map
