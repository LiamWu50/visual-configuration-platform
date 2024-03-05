function e(e,t){return function(){return e.apply(t,arguments)}}const{toString:t}=Object.prototype,{getPrototypeOf:n}=Object,r=(e=>n=>{const r=t.call(n);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),o=e=>(e=e.toLowerCase(),t=>r(t)===e),s=e=>t=>typeof t===e,{isArray:i}=Array,a=s("undefined");const c=o("ArrayBuffer");const u=s("string"),l=s("function"),f=s("number"),d=e=>null!==e&&"object"==typeof e,p=e=>{if("object"!==r(e))return!1;const t=n(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},h=o("Date"),m=o("File"),y=o("Blob"),g=o("FileList"),b=o("URLSearchParams");function E(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),i(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function w(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const O="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,S=e=>!a(e)&&e!==O;const R=(e=>t=>e&&t instanceof e)("undefined"!=typeof Uint8Array&&n(Uint8Array)),A=o("HTMLFormElement"),T=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),j=o("RegExp"),N=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};E(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},v="abcdefghijklmnopqrstuvwxyz",C="0123456789",x={DIGIT:C,ALPHA:v,ALPHA_DIGIT:v+v.toUpperCase()+C};const P=o("AsyncFunction"),_={isArray:i,isArrayBuffer:c,isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&l(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||l(e.append)&&("formdata"===(t=r(e))||"object"===t&&l(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&c(e.buffer),t},isString:u,isNumber:f,isBoolean:e=>!0===e||!1===e,isObject:d,isPlainObject:p,isUndefined:a,isDate:h,isFile:m,isBlob:y,isRegExp:j,isFunction:l,isStream:e=>d(e)&&l(e.pipe),isURLSearchParams:b,isTypedArray:R,isFileList:g,forEach:E,merge:function e(){const{caseless:t}=S(this)&&this||{},n={},r=(r,o)=>{const s=t&&w(n,o)||o;p(n[s])&&p(r)?n[s]=e(n[s],r):p(r)?n[s]=e({},r):i(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&E(arguments[o],r);return n},extend:(t,n,r,{allOwnKeys:o}={})=>(E(n,((n,o)=>{r&&l(n)?t[o]=e(n,r):t[o]=n}),{allOwnKeys:o}),t),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,r,o)=>{let s,i,a;const c={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],o&&!o(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==r&&n(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:r,kindOfTest:o,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(i(e))return e;let t=e.length;if(!f(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:A,hasOwnProperty:T,hasOwnProp:T,reduceDescriptors:N,freezeMethods:e=>{N(e,((t,n)=>{if(l(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];l(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return i(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:w,global:O,isContextDefined:S,ALPHABET:x,generateString:(e=16,t=x.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&l(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(d(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=i(e)?[]:{};return E(e,((e,t)=>{const s=n(e,r+1);!a(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:P,isThenable:e=>e&&(d(e)||l(e))&&l(e.then)&&l(e.catch)};function F(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}_.inherits(F,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const U=F.prototype,B={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{B[e]={value:e}})),Object.defineProperties(F,B),Object.defineProperty(U,"isAxiosError",{value:!0}),F.from=(e,t,n,r,o,s)=>{const i=Object.create(U);return _.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),F.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};function L(e){return _.isPlainObject(e)||_.isArray(e)}function D(e){return _.endsWith(e,"[]")?e.slice(0,-2):e}function k(e,t,n){return e?e.concat(t).map((function(e,t){return e=D(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const q=_.toFlatObject(_,{},null,(function(e){return/^is[A-Z]/.test(e)}));function I(e,t,n){if(!_.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!_.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&_.isSpecCompliantForm(t);if(!_.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(_.isDate(e))return e.toISOString();if(!a&&_.isBlob(e))throw new F("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(e)||_.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(_.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(_.isArray(e)&&function(e){return _.isArray(e)&&!e.some(L)}(e)||(_.isFileList(e)||_.endsWith(n,"[]"))&&(a=_.toArray(e)))return n=D(n),a.forEach((function(e,r){!_.isUndefined(e)&&null!==e&&t.append(!0===i?k([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!L(e)||(t.append(k(o,n,s),c(e)),!1)}const l=[],f=Object.assign(q,{defaultVisitor:u,convertValue:c,isVisitable:L});if(!_.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!_.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),_.forEach(n,(function(n,s){!0===(!(_.isUndefined(n)||null===n)&&o.call(t,n,_.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t}function z(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function M(e,t){this._pairs=[],e&&I(e,this,t)}const H=M.prototype;function J(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function W(e,t,n){if(!t)return e;const r=n&&n.encode||J,o=n&&n.serialize;let s;if(s=o?o(t,n):_.isURLSearchParams(t)?t.toString():new M(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}H.append=function(e,t){this._pairs.push([e,t])},H.toString=function(e){const t=e?function(t){return e.call(this,t,z)}:z;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};class K{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){_.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}const V={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},G={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:M,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},$="undefined"!=typeof window&&"undefined"!=typeof document,X=(Q="undefined"!=typeof navigator&&navigator.product,$&&["ReactNative","NativeScript","NS"].indexOf(Q)<0);var Q;const Z="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,Y={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:$,hasStandardBrowserEnv:X,hasStandardBrowserWebWorkerEnv:Z},Symbol.toStringTag,{value:"Module"})),...G};function ee(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&_.isArray(r)?r.length:s,a)return _.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&_.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&_.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i}if(_.isFormData(e)&&_.isFunction(e.entries)){const n={};return _.forEachEntry(e,((e,r)=>{t(function(e){return _.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const te={transitional:V,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=_.isObject(e);o&&_.isHTMLForm(e)&&(e=new FormData(e));if(_.isFormData(e))return r?JSON.stringify(ee(e)):e;if(_.isArrayBuffer(e)||_.isBuffer(e)||_.isStream(e)||_.isFile(e)||_.isBlob(e))return e;if(_.isArrayBufferView(e))return e.buffer;if(_.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return I(e,new Y.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Y.isNode&&_.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=_.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return I(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(_.isString(e))try{return(t||JSON.parse)(e),_.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||te.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&_.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw F.from(o,F.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Y.classes.FormData,Blob:Y.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],(e=>{te.headers[e]={}}));const ne=te,re=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),oe=Symbol("internals");function se(e){return e&&String(e).trim().toLowerCase()}function ie(e){return!1===e||null==e?e:_.isArray(e)?e.map(ie):String(e)}function ae(e,t,n,r,o){return _.isFunction(r)?r.call(this,t,n):(o&&(t=n),_.isString(t)?_.isString(r)?-1!==t.indexOf(r):_.isRegExp(r)?r.test(t):void 0:void 0)}class ce{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=se(t);if(!o)throw new Error("header name must be a non-empty string");const s=_.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=ie(e))}const s=(e,t)=>_.forEach(e,((e,n)=>o(e,n,t)));return _.isPlainObject(e)||e instanceof this.constructor?s(e,t):_.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&re[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=se(e)){const n=_.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(_.isFunction(t))return t.call(this,e,n);if(_.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=se(e)){const n=_.findKey(this,e);return!(!n||void 0===this[n]||t&&!ae(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=se(e)){const o=_.findKey(n,e);!o||t&&!ae(0,n[o],o,t)||(delete n[o],r=!0)}}return _.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!ae(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return _.forEach(this,((r,o)=>{const s=_.findKey(n,o);if(s)return t[s]=ie(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=ie(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return _.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&_.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[oe]=this[oe]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=se(e);t[r]||(!function(e,t){const n=_.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return _.isArray(e)?e.forEach(r):r(e),this}}ce.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),_.reduceDescriptors(ce.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),_.freezeMethods(ce);const ue=ce;function le(e,t){const n=this||ne,r=t||n,o=ue.from(r.headers);let s=r.data;return _.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function fe(e){return!(!e||!e.__CANCEL__)}function de(e,t,n){F.call(this,null==e?"canceled":e,F.ERR_CANCELED,t,n),this.name="CanceledError"}_.inherits(de,F,{__CANCEL__:!0});const pe=Y.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];_.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),_.isString(r)&&i.push("path="+r),_.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function he(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const me=Y.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=_.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}();function ye(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const ge={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=ue.from(e.headers).normalize();let s,i,{responseType:a,withXSRFToken:c}=e;function u(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}if(_.isFormData(r))if(Y.hasStandardBrowserEnv||Y.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if(!1!==(i=o.getContentType())){const[e,...t]=i?i.split(";").map((e=>e.trim())).filter(Boolean):[];o.setContentType([e||"multipart/form-data",...t].join("; "))}let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const f=he(e.baseURL,e.url);function d(){if(!l)return;const r=ue.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new F("Request failed with status code "+n.status,[F.ERR_BAD_REQUEST,F.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),u()}),(function(e){n(e),u()}),{data:a&&"text"!==a&&"json"!==a?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),W(f,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(d)},l.onabort=function(){l&&(n(new F("Request aborted",F.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new F("Network Error",F.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||V;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new F(t,r.clarifyTimeoutError?F.ETIMEDOUT:F.ECONNABORTED,e,l)),l=null},Y.hasStandardBrowserEnv&&(c&&_.isFunction(c)&&(c=c(e)),c||!1!==c&&me(f))){const t=e.xsrfHeaderName&&e.xsrfCookieName&&pe.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in l&&_.forEach(o.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),_.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),a&&"json"!==a&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",ye(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",ye(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{l&&(n(!t||t.type?new de(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const p=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(f);p&&-1===Y.protocols.indexOf(p)?n(new F("Unsupported protocol "+p+":",F.ERR_BAD_REQUEST,e)):l.send(r||null)}))}};_.forEach(ge,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const be=e=>`- ${e}`,Ee=e=>_.isFunction(e)||null===e||!1===e,we=e=>{e=_.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Ee(n)&&(r=ge[(t=String(n)).toLowerCase()],void 0===r))throw new F(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new F("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(be).join("\n"):" "+be(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function Oe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new de(null,e)}function Se(e){Oe(e),e.headers=ue.from(e.headers),e.data=le.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return we(e.adapter||ne.adapter)(e).then((function(t){return Oe(e),t.data=le.call(e,e.transformResponse,t),t.headers=ue.from(t.headers),t}),(function(t){return fe(t)||(Oe(e),t&&t.response&&(t.response.data=le.call(e,e.transformResponse,t.response),t.response.headers=ue.from(t.response.headers))),Promise.reject(t)}))}const Re=e=>e instanceof ue?e.toJSON():e;function Ae(e,t){t=t||{};const n={};function r(e,t,n){return _.isPlainObject(e)&&_.isPlainObject(t)?_.merge.call({caseless:n},e,t):_.isPlainObject(t)?_.merge({},t):_.isArray(t)?t.slice():t}function o(e,t,n){return _.isUndefined(t)?_.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!_.isUndefined(t))return r(void 0,t)}function i(e,t){return _.isUndefined(t)?_.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Re(e),Re(t),!0)};return _.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);_.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Te="1.6.7",je={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{je[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Ne={};je.transitional=function(e,t,n){return(r,o,s)=>{if(!1===e)throw new F(function(e,t){return"[Axios v1.6.7] Transitional option '"+e+"'"+t+(n?". "+n:"")}(o," has been removed"+(t?" in "+t:"")),F.ERR_DEPRECATED);return t&&!Ne[o]&&(Ne[o]=!0),!e||e(r,o,s)}};const ve={assertOptions:function(e,t,n){if("object"!=typeof e)throw new F("options must be an object",F.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new F("option "+s+" must be "+n,F.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new F("Unknown option "+s,F.ERR_BAD_OPTION)}},validators:je},Ce=ve.validators;class xe{constructor(e){this.defaults=e,this.interceptors={request:new K,response:new K}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}throw n}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ae(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&ve.assertOptions(n,{silentJSONParsing:Ce.transitional(Ce.boolean),forcedJSONParsing:Ce.transitional(Ce.boolean),clarifyTimeoutError:Ce.transitional(Ce.boolean)},!1),null!=r&&(_.isFunction(r)?t.paramsSerializer={serialize:r}:ve.assertOptions(r,{encode:Ce.function,serialize:Ce.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&_.merge(o.common,o[t.method]);o&&_.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=ue.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Se.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(p){t.call(this,p);break}}try{u=Se.call(this,d)}catch(p){return Promise.reject(p)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return W(he((e=Ae(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}_.forEach(["delete","get","head","options"],(function(e){xe.prototype[e]=function(t,n){return this.request(Ae(n||{},{method:e,url:t,data:(n||{}).data}))}})),_.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Ae(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}xe.prototype[e]=t(),xe.prototype[e+"Form"]=t(!0)}));const Pe=xe;class _e{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new de(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new _e((function(t){e=t})),cancel:e}}}const Fe=_e;const Ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ue).forEach((([e,t])=>{Ue[t]=e}));const Be=Ue;const Le=function t(n){const r=new Pe(n),o=e(Pe.prototype.request,r);return _.extend(o,Pe.prototype,r,{allOwnKeys:!0}),_.extend(o,r,null,{allOwnKeys:!0}),o.create=function(e){return t(Ae(n,e))},o}(ne);Le.Axios=Pe,Le.CanceledError=de,Le.CancelToken=Fe,Le.isCancel=fe,Le.VERSION=Te,Le.toFormData=I,Le.AxiosError=F,Le.Cancel=Le.CanceledError,Le.all=function(e){return Promise.all(e)},Le.spread=function(e){return function(t){return e.apply(null,t)}},Le.isAxiosError=function(e){return _.isObject(e)&&!0===e.isAxiosError},Le.mergeConfig=Ae,Le.AxiosHeaders=ue,Le.formToJSON=e=>ee(_.isHTMLForm(e)?new FormData(e):e),Le.getAdapter=we,Le.HttpStatusCode=Be,Le.default=Le;export{Le as a};
//# sourceMappingURL=axios-X0xcXtXw.js.map