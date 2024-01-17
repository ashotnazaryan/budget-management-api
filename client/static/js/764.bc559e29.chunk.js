"use strict";(self.webpackChunkbudget_management=self.webpackChunkbudget_management||[]).push([[764],{5764:(t,e,o)=>{o.r(e),o.d(e,{default:()=>f});var r=o(2791),a=o(8870),i=o(1889),n=o(3967),d=o(5967),l=o(3623),s=o(8112),c=o(3394),p=o(7931),u=o(3013),h=o(56),g=o(5900),x=o(4372),b=o(7195),v=o(8153),m=o(184);d.kL.register(d.uw,d.f$,d.ZL,d.Dx,d.u,d.De);const f=()=>{const{t:t}=(0,c.$G)(),e=(0,s.TL)(),{palette:{info:{contrastText:o}}}=(0,n.Z)(),{incomes:d,expenses:f,profit:Z,status:C,activePeriodFilter:B}=(0,s.CG)(p.Tc),{isDarkTheme:y}=(0,s.CG)(p.vi),R="loading"===C,{fromDate:j,toDate:w}=(0,u.fO)(B),T=j.format(h.zT),O=w.format(h.zT),M=(0,u.SX)(d),k=(0,u.SX)(f),E=(0,u.SX)(Z),P=["".concat(T," - ").concat(O)],z=y?h.p0.dark.primary:h.p0.light.primary,S=y?h.p0.dark.secondary:h.p0.light.secondary,G=y?h.p0.dark.error:h.p0.light.error,N={responsive:!0,maintainAspectRatio:!1,color:o,scales:{x:{ticks:{color:o}},y:{ticks:{color:o}}},plugins:{legend:{position:"top"},title:{display:!1}}},H={labels:P,datasets:[{label:t("COMMON.INCOME"),data:[M],backgroundColor:z},{label:t("COMMON.EXPENSE"),data:[k],backgroundColor:S},{label:t("COMMON.PROFIT"),data:[E],backgroundColor:E>0?"#1a8cff":G}]};return r.useEffect((()=>{"idle"===C&&e((0,p.H2)(B))}),[e,C,B]),(0,m.jsxs)(a.Z,{display:"flex",flexDirection:"column",flexGrow:1,sx:{paddingBottom:3},children:[(0,m.jsx)(g.Z,{"data-testid":"page-title",text:t("CHARTS.PAGE_TITLE")}),(0,m.jsx)(v.Z,{transparentBackground:!0,selectedPeriod:B,onFilter:t=>{e((0,p.H2)(t)),e((0,p.IL)(t))},sx:{marginBottom:3,flexGrow:"unset"}}),R?(0,m.jsx)(x.Z,{type:"list",sx:{marginTop:2}}):"failed"===C?(0,m.jsx)(i.ZP,{item:!0,xs:12,children:(0,m.jsx)(b.Z,{text:t("CHARTS.EMPTY_TEXT")})}):(0,m.jsx)(a.Z,{display:"flex",flexDirection:"column",flexGrow:1,width:"100%",children:(0,m.jsx)(l.$Q,{options:N,data:H})})]})}},7195:(t,e,o)=>{o.d(e,{Z:()=>l});o(2791);var r=o(8870),a=o(3967),i=o(890),n=o(3394),d=o(184);const l=t=>{let{text:e,...o}=t;const{palette:{info:{contrastText:l}}}=(0,a.Z)(),{t:s}=(0,n.$G)(),c=e||s("COMMON.NO_DATA");return(0,d.jsx)(r.Z,{display:"flex",justifyContent:"center",...o,sx:{width:"100%",...o.sx},children:(0,d.jsx)(i.Z,{noWrap:!0,color:l,fontSize:{sm:18,xs:16},children:c})})}},8153:(t,e,o)=>{o.d(e,{Z:()=>w});var r=o(2791),a=o(8870),i=o(3366),n=o(7462),d=o(8182),l=o(4419),s=o(2065),c=o(4036),p=o(6934),u=o(1402),h=o(5878),g=o(1217);function x(t){return(0,g.Z)("MuiButtonGroup",t)}const b=(0,h.Z)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]);var v=o(1793),m=o(184);const f=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],Z=(0,p.ZP)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[{["& .".concat(b.grouped)]:e.grouped},{["& .".concat(b.grouped)]:e["grouped".concat((0,c.Z)(o.orientation))]},{["& .".concat(b.grouped)]:e["grouped".concat((0,c.Z)(o.variant))]},{["& .".concat(b.grouped)]:e["grouped".concat((0,c.Z)(o.variant)).concat((0,c.Z)(o.orientation))]},{["& .".concat(b.grouped)]:e["grouped".concat((0,c.Z)(o.variant)).concat((0,c.Z)(o.color))]},e.root,e[o.variant],!0===o.disableElevation&&e.disableElevation,o.fullWidth&&e.fullWidth,"vertical"===o.orientation&&e.vertical]}})((t=>{let{theme:e,ownerState:o}=t;return(0,n.Z)({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius},"contained"===o.variant&&{boxShadow:(e.vars||e).shadows[2]},o.disableElevation&&{boxShadow:"none"},o.fullWidth&&{width:"100%"},"vertical"===o.orientation&&{flexDirection:"column"},{["& .".concat(b.grouped)]:(0,n.Z)({minWidth:40,"&:not(:first-of-type)":(0,n.Z)({},"horizontal"===o.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===o.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===o.variant&&"horizontal"===o.orientation&&{marginLeft:-1},"outlined"===o.variant&&"vertical"===o.orientation&&{marginTop:-1}),"&:not(:last-of-type)":(0,n.Z)({},"horizontal"===o.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===o.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===o.variant&&"horizontal"===o.orientation&&{borderRight:e.vars?"1px solid rgba(".concat(e.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),["&.".concat(b.disabled)]:{borderRight:"1px solid ".concat((e.vars||e).palette.action.disabled)}},"text"===o.variant&&"vertical"===o.orientation&&{borderBottom:e.vars?"1px solid rgba(".concat(e.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),["&.".concat(b.disabled)]:{borderBottom:"1px solid ".concat((e.vars||e).palette.action.disabled)}},"text"===o.variant&&"inherit"!==o.color&&{borderColor:e.vars?"rgba(".concat(e.vars.palette[o.color].mainChannel," / 0.5)"):(0,s.Fq)(e.palette[o.color].main,.5)},"outlined"===o.variant&&"horizontal"===o.orientation&&{borderRightColor:"transparent"},"outlined"===o.variant&&"vertical"===o.orientation&&{borderBottomColor:"transparent"},"contained"===o.variant&&"horizontal"===o.orientation&&{borderRight:"1px solid ".concat((e.vars||e).palette.grey[400]),["&.".concat(b.disabled)]:{borderRight:"1px solid ".concat((e.vars||e).palette.action.disabled)}},"contained"===o.variant&&"vertical"===o.orientation&&{borderBottom:"1px solid ".concat((e.vars||e).palette.grey[400]),["&.".concat(b.disabled)]:{borderBottom:"1px solid ".concat((e.vars||e).palette.action.disabled)}},"contained"===o.variant&&"inherit"!==o.color&&{borderColor:(e.vars||e).palette[o.color].dark},{"&:hover":(0,n.Z)({},"outlined"===o.variant&&"horizontal"===o.orientation&&{borderRightColor:"currentColor"},"outlined"===o.variant&&"vertical"===o.orientation&&{borderBottomColor:"currentColor"})}),"&:hover":(0,n.Z)({},"contained"===o.variant&&{boxShadow:"none"})},"contained"===o.variant&&{boxShadow:"none"})})})),C=r.forwardRef((function(t,e){const o=(0,u.Z)({props:t,name:"MuiButtonGroup"}),{children:a,className:s,color:p="primary",component:h="div",disabled:g=!1,disableElevation:b=!1,disableFocusRipple:C=!1,disableRipple:B=!1,fullWidth:y=!1,orientation:R="horizontal",size:j="medium",variant:w="outlined"}=o,T=(0,i.Z)(o,f),O=(0,n.Z)({},o,{color:p,component:h,disabled:g,disableElevation:b,disableFocusRipple:C,disableRipple:B,fullWidth:y,orientation:R,size:j,variant:w}),M=(t=>{const{classes:e,color:o,disabled:r,disableElevation:a,fullWidth:i,orientation:n,variant:d}=t,s={root:["root",d,"vertical"===n&&"vertical",i&&"fullWidth",a&&"disableElevation"],grouped:["grouped","grouped".concat((0,c.Z)(n)),"grouped".concat((0,c.Z)(d)),"grouped".concat((0,c.Z)(d)).concat((0,c.Z)(n)),"grouped".concat((0,c.Z)(d)).concat((0,c.Z)(o)),r&&"disabled"]};return(0,l.Z)(s,x,e)})(O),k=r.useMemo((()=>({className:M.grouped,color:p,disabled:g,disableElevation:b,disableFocusRipple:C,disableRipple:B,fullWidth:y,size:j,variant:w})),[p,g,b,C,B,y,j,w,M.grouped]);return(0,m.jsx)(Z,(0,n.Z)({as:h,role:"group",className:(0,d.Z)(M.root,s),ref:e,ownerState:O},T,{children:(0,m.jsx)(v.Z.Provider,{value:k,children:a})}))}));var B=o(3967),y=o(3394),R=o(2385),j=o(1634);const w=t=>{let{selectedPeriod:e,transparentBackground:o=!1,onFilter:r,...i}=t;const{palette:{primary:{dark:n}}}=(0,B.Z)(),{t:d}=(0,y.$G)(),l=[{period:R.pH.day,label:d("COMMON.DAY")},{period:R.pH.week,label:d("COMMON.WEEK")},{period:R.pH.month,label:d("COMMON.MONTH")},{period:R.pH.year,label:d("COMMON.YEAR")},{period:R.pH.allTime,label:d("COMMON.ALL_TIME")}];return(0,m.jsx)(a.Z,{...i,sx:{...i.sx,backgroundColor:o?"transparent":n,borderRadius:1},display:"flex",justifyContent:"center",flexGrow:1,children:(0,m.jsx)(C,{variant:"text",children:l.map((t=>{let{period:o,label:a}=t;return((t,o)=>(0,m.jsx)(j.Z,{"aria-label":"Period-filter-".concat(o),variant:e===t?"contained":"text",color:"secondary",capitalize:!1,sx:{fontSize:{sm:13,xs:11},paddingX:1},onClick:()=>r(t),children:o},t))(o,a)}))})})}},4372:(t,e,o)=>{o.d(e,{Z:()=>n});o(2791);var r=o(7047),a=o(1889),i=o(184);const n=t=>{let{type:e,...o}=t;const n="form"===e,d=()=>{switch(e){case"list":default:return{firstBar:40,secondBar:40,thirdBar:40};case"form":return{firstBar:56,secondBar:56,thirdBar:56};case"summary":return{firstBar:30,secondBar:60,thirdBar:120};case"circular":return{firstBar:64,secondBar:64,thirdBar:64}}};return"circular"===e?(0,i.jsxs)(a.ZP,{container:!0,columnGap:4,rowGap:4,children:[(0,i.jsx)(a.ZP,{item:!0,width:100,display:"flex",justifyContent:"center",children:(0,i.jsx)(r.Z,{...o,variant:"circular",height:d().firstBar,width:d().firstBar})}),(0,i.jsx)(a.ZP,{item:!0,width:100,display:"flex",justifyContent:"center",children:(0,i.jsx)(r.Z,{...o,variant:"circular",height:d().secondBar,width:d().secondBar})}),(0,i.jsx)(a.ZP,{item:!0,width:100,display:"flex",justifyContent:"center",children:(0,i.jsx)(r.Z,{...o,variant:"circular",height:d().thirdBar,width:d().firstBar})})]}):(0,i.jsxs)(a.ZP,{container:!0,justifyContent:"center",rowGap:n?5:2,children:[(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(r.Z,{...o,variant:"rounded",height:d().firstBar})}),(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(r.Z,{...o,variant:"rounded",animation:"wave",height:d().secondBar})}),(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(r.Z,{...o,variant:"rounded",height:d().thirdBar})})]})}}}]);
//# sourceMappingURL=764.bc559e29.chunk.js.map