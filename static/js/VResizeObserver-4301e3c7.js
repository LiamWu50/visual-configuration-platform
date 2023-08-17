import{d as e,b0 as t,y as n,o as r,aF as i}from"./index-7badf4e4.js";var o,s,a=[],c="ResizeObserver loop completed with undelivered notifications.";(s=o||(o={})).BORDER_BOX="border-box",s.CONTENT_BOX="content-box",s.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box";var u,h=function(e){return Object.freeze(e)},d=function(e,t){this.inlineSize=e,this.blockSize=t,h(this)},l=function(){function e(e,t,n,r){return this.x=e,this.y=t,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,h(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),f=function(e){return e instanceof SVGElement&&"getBBox"in e},v=function(e){if(f(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,o=i.offsetWidth,s=i.offsetHeight;return!(o||s||e.getClientRects().length)},p=function(e){var t;if(e instanceof Element)return!0;var n=null===(t=null==e?void 0:e.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},g="undefined"!=typeof window?window:{},b=new WeakMap,w=/auto|scroll/,x=/^tb|vertical/,E=/msie|trident/i.test(g.navigator&&g.navigator.userAgent),m=function(e){return parseFloat(e||"0")},z=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=!1),new d((n?t:e)||0,(n?e:t)||0)},T=h({devicePixelContentBoxSize:z(),borderBoxSize:z(),contentBoxSize:z(),contentRect:new l(0,0,0,0)}),y=function(e,t){if(void 0===t&&(t=!1),b.has(e)&&!t)return b.get(e);if(v(e))return b.set(e,T),T;var n=getComputedStyle(e),r=f(e)&&e.ownerSVGElement&&e.getBBox(),i=!E&&"border-box"===n.boxSizing,o=x.test(n.writingMode||""),s=!r&&w.test(n.overflowY||""),a=!r&&w.test(n.overflowX||""),c=r?0:m(n.paddingTop),u=r?0:m(n.paddingRight),d=r?0:m(n.paddingBottom),p=r?0:m(n.paddingLeft),g=r?0:m(n.borderTopWidth),y=r?0:m(n.borderRightWidth),S=r?0:m(n.borderBottomWidth),B=p+u,R=c+d,O=(r?0:m(n.borderLeftWidth))+y,C=g+S,k=a?e.offsetHeight-C-e.clientHeight:0,M=s?e.offsetWidth-O-e.clientWidth:0,N=i?B+O:0,D=i?R+C:0,H=r?r.width:m(n.width)-N-M,F=r?r.height:m(n.height)-D-k,P=H+B+M+O,_=F+R+k+C,I=h({devicePixelContentBoxSize:z(Math.round(H*devicePixelRatio),Math.round(F*devicePixelRatio),o),borderBoxSize:z(P,_,o),contentBoxSize:z(H,F,o),contentRect:new l(p,c,H,F)});return b.set(e,I),I},S=function(e,t,n){var r=y(e,n),i=r.borderBoxSize,s=r.contentBoxSize,a=r.devicePixelContentBoxSize;switch(t){case o.DEVICE_PIXEL_CONTENT_BOX:return a;case o.BORDER_BOX:return i;default:return s}},B=function(e){var t=y(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=h([t.borderBoxSize]),this.contentBoxSize=h([t.contentBoxSize]),this.devicePixelContentBoxSize=h([t.devicePixelContentBoxSize])},R=function(e){if(v(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},O=function(){var e=1/0,t=[];a.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(t){var n=new B(t.target),i=R(t.target);r.push(n),t.lastReportedSize=S(t.target,t.observedBox),i<e&&(e=i)})),t.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=t;n<r.length;n++){(0,r[n])()}return e},C=function(e){a.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(n){n.isActive()&&(R(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))}))}))},k=function(){var e,t=0;for(C(t);a.some((function(e){return e.activeTargets.length>0}));)t=O(),C(t);return a.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:c}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=c),window.dispatchEvent(e)),t>0},M=[],N=function(e){if(!u){var t=0,n=document.createTextNode("");new MutationObserver((function(){return M.splice(0).forEach((function(e){return e()}))})).observe(n,{characterData:!0}),u=function(){n.textContent="".concat(t?t--:t++)}}M.push(e),u()},D=0,H={attributes:!0,characterData:!0,childList:!0,subtree:!0},F=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],P=function(e){return void 0===e&&(e=0),Date.now()+e},_=!1,I=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!_){_=!0;var n,r=P(e);n=function(){var n=!1;try{n=k()}finally{if(_=!1,e=r-P(),!D)return;n?t.run(1e3):e>0?t.run(e):t.start()}},N((function(){requestAnimationFrame(n)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,H)};document.body?t():g.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),F.forEach((function(t){return g.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),F.forEach((function(t){return g.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),L=function(e){!D&&e>0&&I.start(),!(D+=e)&&I.stop()},V=function(){function e(e,t){this.target=e,this.observedBox=t||o.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=S(this.target,this.observedBox,!0);return e=this.target,f(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),W=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},X=new WeakMap,A=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},q=function(){function e(){}return e.connect=function(e,t){var n=new W(e,t);X.set(e,n)},e.observe=function(e,t,n){var r=X.get(e),i=0===r.observationTargets.length;A(r.observationTargets,t)<0&&(i&&a.push(r),r.observationTargets.push(new V(t,n&&n.box)),L(1),I.schedule())},e.unobserve=function(e,t){var n=X.get(e),r=A(n.observationTargets,t),i=1===n.observationTargets.length;r>=0&&(i&&a.splice(a.indexOf(n),1),n.observationTargets.splice(r,1),L(-1))},e.disconnect=function(e){var t=this,n=X.get(e);n.observationTargets.slice().forEach((function(n){return t.unobserve(e,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},e}(),G=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");q.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!p(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");q.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!p(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");q.unobserve(this,e)},e.prototype.disconnect=function(){q.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();const $=new class{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new("undefined"!=typeof window&&window.ResizeObserver||G)(this.handleResize),this.elHandlersMap=new Map}handleResize(e){for(const t of e){const e=this.elHandlersMap.get(t.target);void 0!==e&&e(t)}}registerHandler(e,t){this.elHandlersMap.set(e,t),this.observer.observe(e)}unregisterHandler(e){this.elHandlersMap.has(e)&&(this.elHandlersMap.delete(e),this.observer.unobserve(e))}},j=e({name:"ResizeObserver",props:{onResize:Function},setup(e){let i=!1;const o=t().proxy;function s(t){const{onResize:n}=e;void 0!==n&&n(t)}n((()=>{const e=o.$el;void 0!==e&&(e.nextElementSibling!==e.nextSibling&&3===e.nodeType&&""!==e.nodeValue||null!==e.nextElementSibling&&($.registerHandler(e.nextElementSibling,s),i=!0))})),r((()=>{i&&$.unregisterHandler(o.$el.nextElementSibling)}))},render(){return i(this.$slots,"default")}});export{j as V,$ as r};
//# sourceMappingURL=VResizeObserver-4301e3c7.js.map
