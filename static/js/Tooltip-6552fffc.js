import{d as e,n as s,u as o,k as r,m as t,h as i,e as p}from"./index-6455addc.js";import{_ as a,p as n}from"./Popover-418c51b5.js";const l=e({name:"Tooltip",props:Object.assign(Object.assign({},n),o.props),__popover__:!0,setup(e){const{mergedClsPrefixRef:i}=s(e),a=o("Tooltip","-tooltip",void 0,p,e,i),n=r(null),l={syncPosition(){n.value.syncPosition()},setShow(e){n.value.setShow(e)}};return Object.assign(Object.assign({},l),{popoverRef:n,mergedTheme:a,popoverThemeOverrides:t((()=>a.value.self))})},render(){const{mergedTheme:e,internalExtraClass:s}=this;return i(a,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:s.concat("tooltip"),ref:"popoverRef"}),this.$slots)}});export{l as _};
//# sourceMappingURL=Tooltip-6552fffc.js.map