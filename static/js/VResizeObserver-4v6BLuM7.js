import{H as e,F as t,ar as n,as as r,d as i,y as o,o as s,au as a}from"./index-BRKk6EXp.js";let c=[];const u=new WeakMap;function h(){c.forEach((e=>e(...u.get(e)))),c=[]}function d(e,...t){u.set(e,t),c.includes(e)||1===c.push(e)&&requestAnimationFrame(h)}function l(r,i=!0,o=[]){return r.forEach((r=>{if(null!==r)if("object"==typeof r)if(Array.isArray(r))l(r,i,o);else if(r.type===t){if(null===r.children)return;Array.isArray(r.children)&&l(r.children,i,o)}else{if(r.type===n&&i)return;o.push(r)}else"string"!=typeof r&&"number"!=typeof r||o.push(e(String(r)))})),o}function f(){return null!==r()}const v="undefined"!=typeof window;var p,g,b=[],w="ResizeObserver loop completed with undelivered notifications.";(g=p||(p={})).BORDER_BOX="border-box",g.CONTENT_BOX="content-box",g.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box";var x,y=function(e){return Object.freeze(e)},E=function(){return function(e,t){this.inlineSize=e,this.blockSize=t,y(this)}}(),m=function(){function e(e,t,n,r){return this.x=e,this.y=t,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,y(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),z=function(e){return e instanceof SVGElement&&"getBBox"in e},T=function(e){if(z(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,o=i.offsetWidth,s=i.offsetHeight;return!(o||s||e.getClientRects().length)},S=function(e){var t;if(e instanceof Element)return!0;var n=null===(t=null==e?void 0:e.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},B="undefined"!=typeof window?window:{},R=new WeakMap,O=/auto|scroll/,k=/^tb|vertical/,C=/msie|trident/i.test(B.navigator&&B.navigator.userAgent),M=function(e){return parseFloat(e||"0")},N=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=!1),new E((n?t:e)||0,(n?e:t)||0)},A=y({devicePixelContentBoxSize:N(),borderBoxSize:N(),contentBoxSize:N(),contentRect:new m(0,0,0,0)}),H=function(e,t){if(void 0===t&&(t=!1),R.has(e)&&!t)return R.get(e);if(T(e))return R.set(e,A),A;var n=getComputedStyle(e),r=z(e)&&e.ownerSVGElement&&e.getBBox(),i=!C&&"border-box"===n.boxSizing,o=k.test(n.writingMode||""),s=!r&&O.test(n.overflowY||""),a=!r&&O.test(n.overflowX||""),c=r?0:M(n.paddingTop),u=r?0:M(n.paddingRight),h=r?0:M(n.paddingBottom),d=r?0:M(n.paddingLeft),l=r?0:M(n.borderTopWidth),f=r?0:M(n.borderRightWidth),v=r?0:M(n.borderBottomWidth),p=d+u,g=c+h,b=(r?0:M(n.borderLeftWidth))+f,w=l+v,x=a?e.offsetHeight-w-e.clientHeight:0,E=s?e.offsetWidth-b-e.clientWidth:0,S=i?p+b:0,B=i?g+w:0,H=r?r.width:M(n.width)-S-E,D=r?r.height:M(n.height)-B-x,F=H+p+E+b,P=D+g+x+w,W=y({devicePixelContentBoxSize:N(Math.round(H*devicePixelRatio),Math.round(D*devicePixelRatio),o),borderBoxSize:N(F,P,o),contentBoxSize:N(H,D,o),contentRect:new m(d,c,H,D)});return R.set(e,W),W},D=function(e,t,n){var r=H(e,n),i=r.borderBoxSize,o=r.contentBoxSize,s=r.devicePixelContentBoxSize;switch(t){case p.DEVICE_PIXEL_CONTENT_BOX:return s;case p.BORDER_BOX:return i;default:return o}},F=function(){return function(e){var t=H(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=y([t.borderBoxSize]),this.contentBoxSize=y([t.contentBoxSize]),this.devicePixelContentBoxSize=y([t.devicePixelContentBoxSize])}}(),P=function(e){if(T(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},W=function(){var e=1/0,t=[];b.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(t){var n=new F(t.target),i=P(t.target);r.push(n),t.lastReportedSize=D(t.target,t.observedBox),i<e&&(e=i)})),t.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=t;n<r.length;n++){(0,r[n])()}return e},_=function(e){b.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(n){n.isActive()&&(P(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))}))}))},I=function(){var e,t=0;for(_(t);b.some((function(e){return e.activeTargets.length>0}));)t=W(),_(t);return b.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:w}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=w),window.dispatchEvent(e)),t>0},L=[],V=function(e){if(!x){var t=0,n=document.createTextNode("");new MutationObserver((function(){return L.splice(0).forEach((function(e){return e()}))})).observe(n,{characterData:!0}),x=function(){n.textContent="".concat(t?t--:t++)}}L.push(e),x()},X=0,q={attributes:!0,characterData:!0,childList:!0,subtree:!0},j=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],G=function(e){return void 0===e&&(e=0),Date.now()+e},$=!1,J=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!$){$=!0;var n,r=G(e);n=function(){var n=!1;try{n=I()}finally{if($=!1,e=r-G(),!X)return;n?t.run(1e3):e>0?t.run(e):t.start()}},V((function(){requestAnimationFrame(n)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,q)};document.body?t():B.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),j.forEach((function(t){return B.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),j.forEach((function(t){return B.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),U=function(e){!X&&e>0&&J.start(),!(X+=e)&&J.stop()},Y=function(){function e(e,t){this.target=e,this.observedBox=t||p.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=D(this.target,this.observedBox,!0);return e=this.target,z(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),K=function(){return function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t}}(),Q=new WeakMap,Z=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},ee=function(){function e(){}return e.connect=function(e,t){var n=new K(e,t);Q.set(e,n)},e.observe=function(e,t,n){var r=Q.get(e),i=0===r.observationTargets.length;Z(r.observationTargets,t)<0&&(i&&b.push(r),r.observationTargets.push(new Y(t,n&&n.box)),U(1),J.schedule())},e.unobserve=function(e,t){var n=Q.get(e),r=Z(n.observationTargets,t),i=1===n.observationTargets.length;r>=0&&(i&&b.splice(b.indexOf(n),1),n.observationTargets.splice(r,1),U(-1))},e.disconnect=function(e){var t=this,n=Q.get(e);n.observationTargets.slice().forEach((function(n){return t.unobserve(e,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},e}(),te=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");ee.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!S(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");ee.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!S(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");ee.unobserve(this,e)},e.prototype.disconnect=function(){ee.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();const ne=new class{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new("undefined"!=typeof window&&window.ResizeObserver||te)(this.handleResize),this.elHandlersMap=new Map}handleResize(e){for(const t of e){const e=this.elHandlersMap.get(t.target);void 0!==e&&e(t)}}registerHandler(e,t){this.elHandlersMap.set(e,t),this.observer.observe(e)}unregisterHandler(e){this.elHandlersMap.has(e)&&(this.elHandlersMap.delete(e),this.observer.unobserve(e))}},re=i({name:"ResizeObserver",props:{onResize:Function},setup(e){let t=!1;const n=r().proxy;function i(t){const{onResize:n}=e;void 0!==n&&n(t)}o((()=>{const e=n.$el;void 0!==e&&(e.nextElementSibling!==e.nextSibling&&3===e.nodeType&&""!==e.nodeValue||null!==e.nextElementSibling&&(ne.registerHandler(e.nextElementSibling,i),t=!0))})),s((()=>{t&&ne.unregisterHandler(n.$el.nextElementSibling)}))},render(){return a(this.$slots,"default")}});export{re as V,d as b,l as f,f as h,v as i,ne as r};
//# sourceMappingURL=VResizeObserver-4v6BLuM7.js.map
