import{t as e,r as t,h as o,d as n,u as i,c as r,a as l,b as a,e as s,f as u,g as c,i as d,j as h,k as f,w as v,o as p,l as g,m as w,n as m,p as C,q as b,s as x,T as O,F as L,N as S,v as z,x as k,y as P,z as M,A as I,B as y}from"./index-199d089a.js";import{i as A,f as R,o as T,a as j}from"./Scrollbar-9e89a537.js";import{f as E,L as D,z as H,b as Z}from"./Popover-a2c08414.js";import{u as B}from"./use-locale-3b5f5143.js";import{N as $}from"./Tooltip-c4e9758c.js";import"./VResizeObserver-57954024.js";import"./cssr-8f866f02.js";const V=""+new URL("../png/image-404-3e7d0cac.png",import.meta.url).href;var W;const N=(W={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},function(e){return null==W?void 0:W[e]});var U=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Y=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var X=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var F=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var q="\\ud800-\\udfff",G="\\u2700-\\u27bf",J="a-z\\xdf-\\xf6\\xf8-\\xff",_="A-Z\\xc0-\\xd6\\xd8-\\xde",K="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Q="["+K+"]",ee="\\d+",te="["+G+"]",oe="["+J+"]",ne="[^"+q+K+ee+G+J+_+"]",ie="(?:\\ud83c[\\udde6-\\uddff]){2}",re="[\\ud800-\\udbff][\\udc00-\\udfff]",le="["+_+"]",ae="(?:"+oe+"|"+ne+")",se="(?:"+le+"|"+ne+")",ue="(?:['’](?:d|ll|m|re|s|t|ve))?",ce="(?:['’](?:D|LL|M|RE|S|T|VE))?",de="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",he="[\\ufe0e\\ufe0f]?",fe=he+de+("(?:\\u200d(?:"+["[^"+q+"]",ie,re].join("|")+")"+he+de+")*"),ve="(?:"+[te,ie,re].join("|")+")"+fe,pe=RegExp([le+"?"+oe+"+"+ue+"(?="+[Q,le,"$"].join("|")+")",se+"+"+ce+"(?="+[Q,le+ae,"$"].join("|")+")",le+"?"+ae+"+"+ue,le+"+"+ce,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ee,ve].join("|"),"g");function ge(t,o,n){return t=e(t),void 0===(o=n?void 0:o)?function(e){return F.test(e)}(t)?function(e){return e.match(pe)||[]}(t):function(e){return e.match(X)||[]}(t):t.match(o)||[]}var we,me=RegExp("['’]","g");const Ce=(we=function(e,t,o){return e+(o?"-":"")+t.toLowerCase()},function(t){return function(e,t,o,n){var i=-1,r=null==e?0:e.length;for(n&&r&&(o=e[++i]);++i<r;)o=t(o,e[i],i,e);return o}(ge(function(t){return(t=e(t))&&t.replace(U,N).replace(Y,"")}(t).replace(me,"")),we,"")}),be=t("rotateClockwise",o("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",fill:"currentColor"}),o("path",{d:"M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",fill:"currentColor"}))),xe=t("rotateClockwise",o("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",fill:"currentColor"}),o("path",{d:"M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",fill:"currentColor"}))),Oe=t("zoomIn",o("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",fill:"currentColor"}),o("path",{d:"M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",fill:"currentColor"}))),Le=t("zoomOut",o("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",fill:"currentColor"}),o("path",{d:"M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",fill:"currentColor"}))),Se=n({name:"ResizeSmall",render:()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},o("g",{fill:"none"},o("path",{d:"M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",fill:"currentColor"})))}),ze=A&&"loading"in document.createElement("img"),ke=new WeakMap,Pe=new WeakMap,Me=new WeakMap,Ie=(e,t,o)=>{if(!e)return()=>{};const n=((e={})=>{var t;const{root:o=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):null!==(t=e.threshold)&&void 0!==t?t:"0"}`,options:Object.assign(Object.assign({},e),{root:("string"==typeof o?document.querySelector(o):o)||document.documentElement})}})(t),{root:i}=n.options;let r;const l=ke.get(i);let a,s;l?r=l:(r=new Map,ke.set(i,r)),r.has(n.hash)?(s=r.get(n.hash),s[1].has(e)||(a=s[0],s[1].add(e),a.observe(e))):(a=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=Pe.get(e.target),o=Me.get(e.target);t&&t(),o&&(o.value=!0)}}))}),n.options),a.observe(e),s=[a,new Set([e])],r.set(n.hash,s));let u=!1;const c=()=>{u||(Pe.delete(e),Me.delete(e),u=!0,s[1].has(e)&&(s[0].unobserve(e),s[1].delete(e)),s[1].size<=0&&r.delete(n.hash),r.size||ke.delete(i))};return Pe.set(e,c),Me.set(e,o),c},ye=Object.assign(Object.assign({},i.props),{showToolbar:{type:Boolean,default:!0},showToolbarTooltip:Boolean}),Ae=r("n-image");const Re=l({name:"Image",common:a,peers:{Tooltip:s},self:function(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}}),Te=o("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",fill:"currentColor"})),je=o("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",fill:"currentColor"})),Ee=o("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",fill:"currentColor"})),De=u([u("body >",[c("image-container","position: fixed;")]),c("image-preview-container","\n position: fixed;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n display: flex;\n "),c("image-preview-overlay","\n z-index: -1;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n background: rgba(0, 0, 0, .3);\n ",[R()]),c("image-preview-toolbar","\n z-index: 1;\n position: absolute;\n left: 50%;\n transform: translateX(-50%);\n border-radius: var(--n-toolbar-border-radius);\n height: 48px;\n bottom: 40px;\n padding: 0 12px;\n background: var(--n-toolbar-color);\n box-shadow: var(--n-toolbar-box-shadow);\n color: var(--n-toolbar-icon-color);\n transition: color .3s var(--n-bezier);\n display: flex;\n align-items: center;\n ",[c("base-icon","\n padding: 0 8px;\n font-size: 28px;\n cursor: pointer;\n "),R()]),c("image-preview-wrapper","\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n display: flex;\n pointer-events: none;\n ",[E()]),c("image-preview","\n user-select: none;\n -webkit-user-select: none;\n pointer-events: all;\n margin: auto;\n max-height: calc(100vh - 32px);\n max-width: calc(100vw - 32px);\n transition: transform .3s var(--n-bezier);\n "),c("image","\n display: inline-flex;\n max-height: 100%;\n max-width: 100%;\n ",[d("preview-disabled","\n cursor: pointer;\n "),u("img","\n border-radius: inherit;\n ")])]),He=n({name:"ImagePreview",props:Object.assign(Object.assign({},ye),{onNext:Function,onPrev:Function,clsPrefix:{type:String,required:!0}}),setup(e){const t=i("Image","-image",De,Re,e,h(e,"clsPrefix"));let n=null;const r=f(null),l=f(null),a=f(void 0),s=f(!1),u=f(!1),{localeRef:c}=B("Image");function d(t){var o,n;switch(t.key){case" ":t.preventDefault();break;case"ArrowLeft":null===(o=e.onPrev)||void 0===o||o.call(e);break;case"ArrowRight":null===(n=e.onNext)||void 0===n||n.call(e);break;case"Escape":X()}}v(s,(e=>{e?j("keydown",document,d):T("keydown",document,d)})),p((()=>{T("keydown",document,d)}));let x=0,O=0,L=0,S=0,z=0,P=0,M=0,I=0,y=!1;function A(e){const{clientX:t,clientY:o}=e;L=t-x,S=o-O,Z(Y)}function R(e){const{value:t}=r;if(!t)return{offsetX:0,offsetY:0};const o=t.getBoundingClientRect(),{moveVerticalDirection:n,moveHorizontalDirection:i,deltaHorizontal:l,deltaVertical:a}=e||{};let s=0,u=0;return s=o.width<=window.innerWidth?0:o.left>0?(o.width-window.innerWidth)/2:o.right<window.innerWidth?-(o.width-window.innerWidth)/2:"horizontalRight"===i?Math.min((o.width-window.innerWidth)/2,z-(null!=l?l:0)):Math.max(-(o.width-window.innerWidth)/2,z-(null!=l?l:0)),u=o.height<=window.innerHeight?0:o.top>0?(o.height-window.innerHeight)/2:o.bottom<window.innerHeight?-(o.height-window.innerHeight)/2:"verticalBottom"===n?Math.min((o.height-window.innerHeight)/2,P-(null!=a?a:0)):Math.max(-(o.height-window.innerHeight)/2,P-(null!=a?a:0)),{offsetX:s,offsetY:u}}function E(e){T("mousemove",document,A),T("mouseup",document,E);const{clientX:t,clientY:o}=e;y=!1;const n=function(e){const{mouseUpClientX:t,mouseUpClientY:o,mouseDownClientX:n,mouseDownClientY:i}=e,r=n-t,l=i-o;return{moveVerticalDirection:"vertical"+(l>0?"Top":"Bottom"),moveHorizontalDirection:"horizontal"+(r>0?"Left":"Right"),deltaHorizontal:r,deltaVertical:l}}({mouseUpClientX:t,mouseUpClientY:o,mouseDownClientX:M,mouseDownClientY:I}),i=R(n);L=i.offsetX,S=i.offsetY,Y()}const D=g(Ae,null);let H=0,V=1,W=0;function N(){V=1,H=0}function U(){const{value:e}=r;if(!e)return 1;const{innerWidth:t,innerHeight:o}=window,n=e.naturalHeight/(o-32),i=e.naturalWidth/(t-32);return n<1&&i<1?1:Math.max(n,i)}function Y(e=!0){var t;const{value:o}=r;if(!o)return;const{style:n}=o,i=k(null===(t=null==D?void 0:D.previewedImgPropsRef.value)||void 0===t?void 0:t.style);let l="";if("string"==typeof i)l=i+";";else for(const r in i)l+=`${Ce(r)}: ${i[r]};`;const a=`transform-origin: center; transform: translateX(${L}px) translateY(${S}px) rotate(${W}deg) scale(${V});`;n.cssText=y?l+"cursor: grabbing; transition: none;"+a:l+"cursor: grab;"+a+(e?"":"transition: none;"),e||o.offsetHeight}function X(){s.value=!s.value,u.value=!0}const F={setPreviewSrc:e=>{a.value=e},setThumbnailEl:e=>{n=e},toggleShow:X};const q=w((()=>{const{common:{cubicBezierEaseInOut:e},self:{toolbarIconColor:o,toolbarBorderRadius:n,toolbarBoxShadow:i,toolbarColor:r}}=t.value;return{"--n-bezier":e,"--n-toolbar-icon-color":o,"--n-toolbar-color":r,"--n-toolbar-border-radius":n,"--n-toolbar-box-shadow":i}})),{inlineThemeDisabled:G}=m(),J=G?C("image-preview",void 0,q,e):void 0;return Object.assign({previewRef:r,previewWrapperRef:l,previewSrc:a,show:s,appear:b(),displayed:u,previewedImgProps:null==D?void 0:D.previewedImgPropsRef,handleWheel(e){e.preventDefault()},handlePreviewMousedown:function(e){var t,o;if(null===(o=null===(t=null==D?void 0:D.previewedImgPropsRef.value)||void 0===t?void 0:t.onMousedown)||void 0===o||o.call(t,e),0!==e.button)return;const{clientX:n,clientY:i}=e;y=!0,x=n-L,O=i-S,z=L,P=S,M=n,I=i,Y(),j("mousemove",document,A),j("mouseup",document,E)},handlePreviewDblclick:function(e){var t,o;null===(o=null===(t=null==D?void 0:D.previewedImgPropsRef.value)||void 0===t?void 0:t.onDblclick)||void 0===o||o.call(t,e);const n=U();V=V===n?1:n,Y()},syncTransformOrigin:function(){const{value:e}=l;if(!n||!e)return;const{style:t}=e,o=n.getBoundingClientRect(),i=o.left+o.width/2,r=o.top+o.height/2;t.transformOrigin=`${i}px ${r}px`},handleAfterLeave:()=>{N(),W=0,u.value=!1},handleDragStart:e=>{var t,o;null===(o=null===(t=null==D?void 0:D.previewedImgPropsRef.value)||void 0===t?void 0:t.onDragstart)||void 0===o||o.call(t,e),e.preventDefault()},zoomIn:function(){const e=function(){const{value:e}=r;if(!e)return 1;const{innerWidth:t,innerHeight:o}=window,n=Math.max(1,e.naturalHeight/(o-32)),i=Math.max(1,e.naturalWidth/(t-32));return Math.max(3,2*n,2*i)}();V<e&&(H+=1,V=Math.min(e,Math.pow(1.5,H)),Y())},zoomOut:function(){if(V>.5){const e=V;H-=1,V=Math.max(.5,Math.pow(1.5,H));const t=e-V;Y(!1);const o=R();V+=t,Y(!1),V-=t,L=o.offsetX,S=o.offsetY,Y()}},rotateCounterclockwise:function(){W-=90,Y()},rotateClockwise:function(){W+=90,Y()},handleSwitchPrev:function(){var t;N(),W=0,null===(t=e.onPrev)||void 0===t||t.call(e)},handleSwitchNext:function(){var t;N(),W=0,null===(t=e.onNext)||void 0===t||t.call(e)},withTooltip:function(n,i){if(e.showToolbarTooltip){const{value:e}=t;return o($,{to:!1,theme:e.peers.Tooltip,themeOverrides:e.peerOverrides.Tooltip,keepAliveOnHover:!1},{default:()=>c.value[i],trigger:()=>n})}return n},resizeToOrignalImageSize:function(){V=U(),H=Math.ceil(Math.log(V)/Math.log(1.5)),L=0,S=0,Y()},cssVars:G?void 0:q,themeClass:null==J?void 0:J.themeClass,onRender:null==J?void 0:J.onRender},F)},render(){var e,t;const{clsPrefix:n}=this;return o(L,null,null===(t=(e=this.$slots).default)||void 0===t?void 0:t.call(e),o(D,{show:this.show},{default:()=>{var e;return this.show||this.displayed?(null===(e=this.onRender)||void 0===e||e.call(this),x(o("div",{class:[`${n}-image-preview-container`,this.themeClass],style:this.cssVars,onWheel:this.handleWheel},o(O,{name:"fade-in-transition",appear:this.appear},{default:()=>this.show?o("div",{class:`${n}-image-preview-overlay`,onClick:this.toggleShow}):null}),this.showToolbar?o(O,{name:"fade-in-transition",appear:this.appear},{default:()=>{if(!this.show)return null;const{withTooltip:e}=this;return o("div",{class:`${n}-image-preview-toolbar`},this.onPrev?o(L,null,e(o(S,{clsPrefix:n,onClick:this.handleSwitchPrev},{default:()=>Te}),"tipPrevious"),e(o(S,{clsPrefix:n,onClick:this.handleSwitchNext},{default:()=>je}),"tipNext")):null,e(o(S,{clsPrefix:n,onClick:this.rotateCounterclockwise},{default:()=>o(xe,null)}),"tipCounterclockwise"),e(o(S,{clsPrefix:n,onClick:this.rotateClockwise},{default:()=>o(be,null)}),"tipClockwise"),e(o(S,{clsPrefix:n,onClick:this.resizeToOrignalImageSize},{default:()=>o(Se,null)}),"tipOriginalSize"),e(o(S,{clsPrefix:n,onClick:this.zoomOut},{default:()=>o(Le,null)}),"tipZoomOut"),e(o(S,{clsPrefix:n,onClick:this.zoomIn},{default:()=>o(Oe,null)}),"tipZoomIn"),e(o(S,{clsPrefix:n,onClick:this.toggleShow},{default:()=>Ee}),"tipClose"))}}):null,o(O,{name:"fade-in-scale-up-transition",onAfterLeave:this.handleAfterLeave,appear:this.appear,onEnter:this.syncTransformOrigin,onBeforeLeave:this.syncTransformOrigin},{default:()=>{const{previewedImgProps:e={}}=this;return x(o("div",{class:`${n}-image-preview-wrapper`,ref:"previewWrapperRef"},o("img",Object.assign({},e,{draggable:!1,onMousedown:this.handlePreviewMousedown,onDblclick:this.handlePreviewDblclick,class:[`${n}-image-preview`,e.class],key:this.previewSrc,src:this.previewSrc,ref:"previewRef",onDragstart:this.handleDragStart}))),[[z,this.show]])}})),[[H,{enabled:this.show}]])):null}}))}}),Ze=r("n-image-group"),Be=n({name:"Image",props:Object.assign({alt:String,height:[String,Number],imgProps:Object,previewedImgProps:Object,lazy:Boolean,intersectionObserverOptions:Object,objectFit:{type:String,default:"fill"},previewSrc:String,fallbackSrc:String,width:[String,Number],src:String,previewDisabled:Boolean,loadDescription:String,onError:Function,onLoad:Function},ye),inheritAttrs:!1,setup(e){const t=f(null),o=f(!1),n=f(null),i=g(Ze,null),{mergedClsPrefixRef:r}=i||m(e),l={click:()=>{if(e.previewDisabled||o.value)return;const r=e.previewSrc||e.src;if(i)return i.setPreviewSrc(r),i.setThumbnailEl(t.value),void i.toggleShow();const{value:l}=n;l&&(l.setPreviewSrc(r),l.setThumbnailEl(t.value),l.toggleShow())}},a=f(!e.lazy);P((()=>{var e;null===(e=t.value)||void 0===e||e.setAttribute("data-group-id",(null==i?void 0:i.groupId)||"")})),P((()=>{if(e.lazy&&e.intersectionObserverOptions){let o;const n=M((()=>{null==o||o(),o=void 0,o=Ie(t.value,e.intersectionObserverOptions,a)}));p((()=>{n(),null==o||o()}))}})),M((()=>{var t;e.src,null===(t=e.imgProps)||void 0===t||t.src,o.value=!1}));const s=f(!1);return I(Ae,{previewedImgPropsRef:h(e,"previewedImgProps")}),Object.assign({mergedClsPrefix:r,groupId:null==i?void 0:i.groupId,previewInstRef:n,imageRef:t,showError:o,shouldStartLoading:a,loaded:s,mergedOnClick:t=>{var o,n;l.click(),null===(n=null===(o=e.imgProps)||void 0===o?void 0:o.onClick)||void 0===n||n.call(o,t)},mergedOnError:t=>{if(!a.value)return;o.value=!0;const{onError:n,imgProps:{onError:i}={}}=e;null==n||n(t),null==i||i(t)},mergedOnLoad:t=>{const{onLoad:o,imgProps:{onLoad:n}={}}=e;null==o||o(t),null==n||n(t),s.value=!0}},l)},render(){var e,t;const{mergedClsPrefix:n,imgProps:i={},loaded:r,$attrs:l,lazy:a}=this,s=null===(t=(e=this.$slots).placeholder)||void 0===t?void 0:t.call(e),u=this.src||i.src,c=o("img",Object.assign(Object.assign({},i),{ref:"imageRef",width:this.width||i.width,height:this.height||i.height,src:this.showError?this.fallbackSrc:a&&this.intersectionObserverOptions?this.shouldStartLoading?u:void 0:u,alt:this.alt||i.alt,"aria-label":this.alt||i.alt,onClick:this.mergedOnClick,onError:this.mergedOnError,onLoad:this.mergedOnLoad,loading:ze&&a&&!this.intersectionObserverOptions?"lazy":"eager",style:[i.style||"",s&&!r?{height:"0",width:"0",visibility:"hidden"}:"",{objectFit:this.objectFit}],"data-error":this.showError,"data-preview-src":this.previewSrc||this.src}));return o("div",Object.assign({},l,{role:"none",class:[l.class,`${n}-image`,(this.previewDisabled||this.showError)&&`${n}-image--preview-disabled`]}),this.groupId?c:o(He,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:n,ref:"previewInstRef",showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},{default:()=>c}),!r&&s)}}),$e=n({name:"BasicImage",props:{dataSource:{type:Object,default:()=>({})}},setup:e=>()=>y(Be,{previewDisabled:!0,src:e.dataSource.dataset,fallbackSrc:V,width:e.dataSource.width,height:e.dataSource.height},null)});export{$e as default};
