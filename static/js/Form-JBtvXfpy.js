import{g as e,a4 as n,f as t,d as o,n as i,u as a,k as r,A as s,h as l,b3 as d}from"./index-BRKk6EXp.js";import{f,b as u}from"./InputNumber-BDnRq0dK.js";import{k as c}from"./keysOf-EaamNI3c.js";const m=e("form",[n("inline","\n width: 100%;\n display: inline-flex;\n align-items: flex-start;\n align-content: space-around;\n ",[e("form-item",{width:"auto",marginRight:"18px"},[t("&:last-child",{marginRight:0})])])]);var h=function(e,n,t,o){return new(t||(t=Promise))((function(i,a){function r(e){try{l(o.next(e))}catch(n){a(n)}}function s(e){try{l(o.throw(e))}catch(n){a(n)}}function l(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,s)}l((o=o.apply(e,n||[])).next())}))};const g=o({name:"Form",props:Object.assign(Object.assign({},a.props),{inline:Boolean,labelWidth:[Number,String],labelAlign:String,labelPlacement:{type:String,default:"top"},model:{type:Object,default:()=>{}},rules:Object,disabled:Boolean,size:String,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:!0},onSubmit:{type:Function,default:e=>{e.preventDefault()}},showLabel:{type:Boolean,default:void 0},validateMessages:Object}),setup(e){const{mergedClsPrefixRef:n}=i(e);a("Form","-form",m,d,e,n);const t={},o=r(void 0);s(f,{props:e,maxChildLabelWidthRef:o,deriveMaxChildLabelWidth:e=>{const n=o.value;(void 0===n||e>=n)&&(o.value=e)}}),s(u,{formItems:t});const l={validate:function(e,n=(()=>!0)){return h(this,void 0,void 0,(function*(){return yield new Promise(((o,i)=>{const a=[];for(const e of c(t)){const o=t[e];for(const e of o)e.path&&a.push(e.internalValidate(null,n))}Promise.all(a).then((n=>{const t=n.some((e=>!e.valid)),a=[],r=[];n.forEach((e=>{var n,t;(null===(n=e.errors)||void 0===n?void 0:n.length)&&a.push(e.errors),(null===(t=e.warnings)||void 0===t?void 0:t.length)&&r.push(e.warnings)})),e&&e(a.length?a:void 0,{warnings:r.length?r:void 0}),t?i(a.length?a:void 0):o({warnings:r.length?r:void 0})}))}))}))},restoreValidation:function(){for(const e of c(t)){const n=t[e];for(const e of n)e.restoreValidation()}}};return Object.assign(l,{mergedClsPrefix:n})},render(){const{mergedClsPrefix:e}=this;return l("form",{class:[`${e}-form`,this.inline&&`${e}-form--inline`],onSubmit:this.onSubmit},this.$slots)}});export{g as _};
//# sourceMappingURL=Form-JBtvXfpy.js.map
