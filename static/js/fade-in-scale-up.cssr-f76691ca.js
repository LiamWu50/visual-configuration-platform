import{f as a,ap as i}from"./index-6455addc.js";const{cubicBezierEaseIn:n,cubicBezierEaseOut:r}=i;function t({transformOrigin:i="inherit",duration:t=".2s",enterScale:e=".9",originalTransform:o="",originalTransition:s=""}={}){return[a("&.fade-in-scale-up-transition-leave-active",{transformOrigin:i,transition:`opacity ${t} ${n}, transform ${t} ${n} ${s&&","+s}`}),a("&.fade-in-scale-up-transition-enter-active",{transformOrigin:i,transition:`opacity ${t} ${r}, transform ${t} ${r} ${s&&","+s}`}),a("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${o} scale(${e})`}),a("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${o} scale(1)`})]}export{t as f};
//# sourceMappingURL=fade-in-scale-up.cssr-f76691ca.js.map