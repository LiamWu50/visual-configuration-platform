const t=/^(\d|\.)+$/,e=/(\d|\.)+/;function r(r,{c:n=1,offset:c=0,attachPx:f=!0}={}){if("number"==typeof r){const t=(r+c)*n;return 0===t?"0":`${t}px`}if("string"==typeof r){if(t.test(r)){const t=(Number(r)+c)*n;return f?0===t?"0":`${t}px`:`${t}`}{const t=e.exec(r);return t?r.replace(e,String((Number(t[0])+c)*n)):r}}return r}export{r as f};
//# sourceMappingURL=format-length-l2rsThpR.js.map
