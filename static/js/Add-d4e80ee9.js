import{d as t,h as e}from"./index-199d089a.js";function r(t){return"string"==typeof t?t.endsWith("px")?Number(t.slice(0,t.length-2)):Number(t):t}function o(t){if(null!=t)return"number"==typeof t?`${t}px`:t.endsWith("px")?t:`${t}px`}function n(t,e){const r=t.trim().split(/\s+/g),o={top:r[0]};switch(r.length){case 1:o.right=r[0],o.bottom=r[0],o.left=r[0];break;case 2:o.right=r[1],o.left=r[1],o.bottom=r[0];break;case 3:o.right=r[1],o.bottom=r[2],o.left=r[1];break;case 4:o.right=r[1],o.bottom=r[2],o.left=r[3];break;default:throw new Error("[seemly/getMargin]:"+t+" is not a valid value.")}return void 0===e?o:o[e]}function i(t,e){const[r,o]=t.split(" ");return e?"row"===e?r:o:{row:r,col:o||r}}const s=t({name:"Add",render:()=>e("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))});export{s as A,i as a,r as d,n as g,o as p};