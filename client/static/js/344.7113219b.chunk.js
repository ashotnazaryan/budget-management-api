"use strict";(self.webpackChunkbudget_management=self.webpackChunkbudget_management||[]).push([[344],{7344:function(t,e,n){n.r(e),n.d(e,{default:function(){return $}});var r=n(2791),o=n(7689),a=n(56),i=n(9439),d=n(9276),s=n(4102),l=n(8112),c=n(2385),u=n(4372),p=n(5814),h=n(7931),x=n(7195),f=n(1413),g=n(8870),m=n(1889),v=n(4721),Z=n(3400),b=n(2419),j=n(890),y=n(3967),C=n(9403),w=n(6581),R=n(184),B=function(t){var e=t.data,n=t.showPercentage,r=void 0===n||n,o=e.name,a=e.icon,i=e.amount,d=e.percentValue,s=void 0===d?"":d,l=(0,y.Z)().palette.primary,c=l.dark,u=l.light,p=l.contrastText;return(0,R.jsx)(g.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",background:function(){var t=parseInt(s);return"linear-gradient(to right, ".concat(c," 0%, ").concat(c," calc(").concat(t,"%), ").concat(u," calc(").concat(t,"%), ").concat(u," 100%)")}(),paddingX:{sm:2,xs:1},paddingY:{sm:2,xs:1},borderRadius:1,width:"100%",minHeight:40},children:(0,R.jsxs)(m.ZP,{container:!0,alignItems:"center",flexWrap:"nowrap",columnGap:1,children:[(0,R.jsx)(m.ZP,{item:!0,xs:"auto",display:"flex",children:a&&(0,R.jsx)(w.Z,{name:a,sx:{fontSize:24,color:p}})}),(0,R.jsx)(m.ZP,{item:!0,xs:7,display:"flex",children:(0,R.jsx)(j.Z,{noWrap:!0,color:p,children:o})}),(0,R.jsx)(m.ZP,{item:!0,xs:2,display:"flex",justifyContent:"flex-end",children:r&&(0,R.jsx)(j.Z,{noWrap:!0,color:p,children:s})}),(0,R.jsx)(m.ZP,{item:!0,xs:3,display:"flex",justifyContent:"flex-end",children:(0,R.jsx)(j.Z,{noWrap:!0,color:p,children:i})})]})})},S=n(4942),P=n(3366),T=n(7462),A=n(8182),k=n(4419),M=n(2065),O=n(4036),z=n(6934),W=n(1402),E=n(5878),F=n(1217);function G(t){return(0,F.Z)("MuiButtonGroup",t)}var H=(0,E.Z)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),N=n(1793),D=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],L=(0,z.ZP)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[(0,S.Z)({},"& .".concat(H.grouped),e.grouped),(0,S.Z)({},"& .".concat(H.grouped),e["grouped".concat((0,O.Z)(n.orientation))]),(0,S.Z)({},"& .".concat(H.grouped),e["grouped".concat((0,O.Z)(n.variant))]),(0,S.Z)({},"& .".concat(H.grouped),e["grouped".concat((0,O.Z)(n.variant)).concat((0,O.Z)(n.orientation))]),(0,S.Z)({},"& .".concat(H.grouped),e["grouped".concat((0,O.Z)(n.variant)).concat((0,O.Z)(n.color))]),e.root,e[n.variant],!0===n.disableElevation&&e.disableElevation,n.fullWidth&&e.fullWidth,"vertical"===n.orientation&&e.vertical]}})((function(t){var e=t.theme,n=t.ownerState;return(0,T.Z)({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius},"contained"===n.variant&&{boxShadow:(e.vars||e).shadows[2]},n.disableElevation&&{boxShadow:"none"},n.fullWidth&&{width:"100%"},"vertical"===n.orientation&&{flexDirection:"column"},(0,S.Z)({},"& .".concat(H.grouped),(0,T.Z)({minWidth:40,"&:not(:first-of-type)":(0,T.Z)({},"horizontal"===n.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===n.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===n.variant&&"horizontal"===n.orientation&&{marginLeft:-1},"outlined"===n.variant&&"vertical"===n.orientation&&{marginTop:-1}),"&:not(:last-of-type)":(0,T.Z)({},"horizontal"===n.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===n.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===n.variant&&"horizontal"===n.orientation&&(0,S.Z)({borderRight:e.vars?"1px solid rgba(".concat(e.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"&.".concat(H.disabled),{borderRight:"1px solid ".concat((e.vars||e).palette.action.disabled)}),"text"===n.variant&&"vertical"===n.orientation&&(0,S.Z)({borderBottom:e.vars?"1px solid rgba(".concat(e.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"&.".concat(H.disabled),{borderBottom:"1px solid ".concat((e.vars||e).palette.action.disabled)}),"text"===n.variant&&"inherit"!==n.color&&{borderColor:e.vars?"rgba(".concat(e.vars.palette[n.color].mainChannel," / 0.5)"):(0,M.Fq)(e.palette[n.color].main,.5)},"outlined"===n.variant&&"horizontal"===n.orientation&&{borderRightColor:"transparent"},"outlined"===n.variant&&"vertical"===n.orientation&&{borderBottomColor:"transparent"},"contained"===n.variant&&"horizontal"===n.orientation&&(0,S.Z)({borderRight:"1px solid ".concat((e.vars||e).palette.grey[400])},"&.".concat(H.disabled),{borderRight:"1px solid ".concat((e.vars||e).palette.action.disabled)}),"contained"===n.variant&&"vertical"===n.orientation&&(0,S.Z)({borderBottom:"1px solid ".concat((e.vars||e).palette.grey[400])},"&.".concat(H.disabled),{borderBottom:"1px solid ".concat((e.vars||e).palette.action.disabled)}),"contained"===n.variant&&"inherit"!==n.color&&{borderColor:(e.vars||e).palette[n.color].dark},{"&:hover":(0,T.Z)({},"outlined"===n.variant&&"horizontal"===n.orientation&&{borderRightColor:"currentColor"},"outlined"===n.variant&&"vertical"===n.orientation&&{borderBottomColor:"currentColor"})}),"&:hover":(0,T.Z)({},"contained"===n.variant&&{boxShadow:"none"})},"contained"===n.variant&&{boxShadow:"none"})))})),I=r.forwardRef((function(t,e){var n=(0,W.Z)({props:t,name:"MuiButtonGroup"}),o=n.children,a=n.className,i=n.color,d=void 0===i?"primary":i,s=n.component,l=void 0===s?"div":s,c=n.disabled,u=void 0!==c&&c,p=n.disableElevation,h=void 0!==p&&p,x=n.disableFocusRipple,f=void 0!==x&&x,g=n.disableRipple,m=void 0!==g&&g,v=n.fullWidth,Z=void 0!==v&&v,b=n.orientation,j=void 0===b?"horizontal":b,y=n.size,C=void 0===y?"medium":y,w=n.variant,B=void 0===w?"outlined":w,S=(0,P.Z)(n,D),M=(0,T.Z)({},n,{color:d,component:l,disabled:u,disableElevation:h,disableFocusRipple:f,disableRipple:m,fullWidth:Z,orientation:j,size:C,variant:B}),z=function(t){var e=t.classes,n=t.color,r=t.disabled,o=t.disableElevation,a=t.fullWidth,i=t.orientation,d=t.variant,s={root:["root",d,"vertical"===i&&"vertical",a&&"fullWidth",o&&"disableElevation"],grouped:["grouped","grouped".concat((0,O.Z)(i)),"grouped".concat((0,O.Z)(d)),"grouped".concat((0,O.Z)(d)).concat((0,O.Z)(i)),"grouped".concat((0,O.Z)(d)).concat((0,O.Z)(n)),r&&"disabled"]};return(0,k.Z)(s,G,e)}(M),E=r.useMemo((function(){return{className:z.grouped,color:d,disabled:u,disableElevation:h,disableFocusRipple:f,disableRipple:m,fullWidth:Z,size:C,variant:B}}),[d,u,h,f,m,Z,C,B,z.grouped]);return(0,R.jsx)(L,(0,T.Z)({as:l,role:"group",className:(0,A.Z)(z.root,a),ref:e,ownerState:M},S,{children:(0,R.jsx)(N.Z.Provider,{value:E,children:o})}))})),Y=n(1634),X=function(t){var e=t.selectedPeriod,n=t.onFilter,r=(0,y.Z)().palette.primary.dark,o=(0,s.$G)().t,a=[{period:c.pH.day,label:o("COMMON.DAY")},{period:c.pH.week,label:o("COMMON.WEEK")},{period:c.pH.month,label:o("COMMON.MONTH")},{period:c.pH.year,label:o("COMMON.YEAR")},{period:c.pH.allTime,label:o("COMMON.ALL_TIME")}];return(0,R.jsx)(g.Z,{display:"flex",justifyContent:"center",flexGrow:1,sx:{backgroundColor:r,borderRadius:1},children:(0,R.jsx)(I,{variant:"text",children:a.map((function(t){return function(t,r){return(0,R.jsx)(Y.Z,{"aria-label":"Period",variant:e===t?"contained":"text",color:"secondary",capitalize:!1,sx:{fontSize:{sm:13,xs:11},paddingX:1},onClick:function(){return n(t)},children:r},t)}(t.period,t.label)}))})})},V=function(t){var e=t.incomes,n=t.expenses,r=t.profit,o=t.transactions,a=t.period,i=t.onAddTransaction,d=t.onFilter,l=(0,y.Z)().palette.primary,c=l.main,u=l.dark,p=l.light,h=l.contrastText,x=(0,s.$G)().t;return(0,R.jsx)(g.Z,{sx:{backgroundColor:c,paddingX:2,paddingBottom:2,paddingTop:4,borderRadius:1},children:(0,R.jsxs)(m.ZP,{container:!0,children:[(0,R.jsx)(m.ZP,{item:!0,xs:12,children:(0,R.jsx)(j.Z,{noWrap:!0,color:h,fontSize:{sm:26,xs:22},sx:{textAlign:"center",marginBottom:4},children:x("DASHBOARD.SUMMARY")})}),(0,R.jsx)(m.ZP,{container:!0,display:"flex",justifyContent:"center",sx:{marginBottom:2},children:(0,R.jsx)(X,{selectedPeriod:a,onFilter:d})}),(0,R.jsxs)(m.ZP,{container:!0,flexWrap:"nowrap",sx:{backgroundColor:u,borderTopLeftRadius:function(t){return t.spacing(1)},borderTopRightRadius:function(t){return t.spacing(1)}},children:[(0,R.jsxs)(m.ZP,{item:!0,xs:6,display:"flex",flexDirection:"column",justifyContent:"center",paddingY:1,children:[(0,R.jsx)(j.Z,{noWrap:!0,color:h,fontSize:{sm:17,xs:14},sx:{textAlign:"center"},children:x("DASHBOARD.TOTAL_INCOME")}),(0,R.jsx)(j.Z,{noWrap:!0,color:h,fontSize:{sm:17,xs:14},sx:{textAlign:"center"},children:e})]}),(0,R.jsx)(v.Z,{orientation:"vertical",sx:{backgroundColor:p},flexItem:!0}),(0,R.jsxs)(m.ZP,{item:!0,xs:6,display:"flex",flexDirection:"column",justifyContent:"center",paddingY:1,children:[(0,R.jsx)(j.Z,{noWrap:!0,color:h,fontSize:{sm:17,xs:14},sx:{textAlign:"center"},children:x("DASHBOARD.TOTAL_EXPENSES")}),(0,R.jsx)(j.Z,{noWrap:!0,color:h,fontSize:{sm:17,xs:14},sx:{textAlign:"center"},children:n})]})]}),(0,R.jsx)(m.ZP,{item:!0,xs:12,children:(0,R.jsxs)(g.Z,{sx:{backgroundColor:p,paddingY:2,borderBottomLeftRadius:function(t){return t.spacing(1)},borderBottomRightRadius:function(t){return t.spacing(1)}},children:[(0,R.jsx)(j.Z,{noWrap:!0,color:h,fontSize:{sm:24,xs:20},sx:{textAlign:"center"},children:x("DASHBOARD.PROFIT")}),(0,R.jsx)(C.Z,{balance:r,positiveColor:h,fontSize:{sm:26,xs:22},sx:{textAlign:"center"}})]})}),(0,R.jsx)(m.ZP,{item:!0,display:"flex",justifyContent:"flex-end",xs:12,sx:{marginY:1},children:(0,R.jsx)(Z.Z,{"aria-label":"New transaction",onClick:i,children:(0,R.jsx)(b.Z,{sx:{color:h},fontSize:"large"})})}),(0,R.jsx)(m.ZP,{container:!0,item:!0,rowGap:2,children:o.map((function(t){return(0,R.jsx)(m.ZP,{item:!0,xs:12,children:(0,R.jsx)(B,{data:(e=t,(0,f.Z)((0,f.Z)({},e),{},{name:e.nameKey?x(e.nameKey):e.name}))})},t.categoryId);var e}))})]})})},_=function(){var t=a.G7,e=(0,o.s0)(),n=(0,l.CG)(h.Tc),f=n.incomes,g=n.expenses,m=n.profit,v=n.categoryExpenseTransactions,Z=n.categoryIncomeTransactions,b=n.status,j=n.activePeriodFilter,y=(0,l.TL)(),C=(0,s.$G)().t,w=r.useState(String(c.a9.expense)),B=(0,i.Z)(w,2),S=B[0],P=B[1],T=S===String(c.a9.expense)?v:Z;r.useEffect((function(){"idle"===b&&y((0,h.H2)(j))}),[y,b,j]);var A=function(){e("".concat(a.Z6.transactions.path,"/new"),{state:{categoryType:S}})},k=function(t){y((0,h.H2)(t)),y((0,h.IL)(t))};return(0,R.jsxs)(d.Z,{sx:{flexGrow:1,paddingY:1},children:[(0,R.jsx)(p.Z,{centered:!0,defaultValue:S,tabs:t,onChange:function(t,e){P(e)},sx:{marginBottom:3}}),"idle"===b?(0,R.jsx)(R.Fragment,{}):"loading"===b?(0,R.jsx)(u.Z,{type:"summary"}):"failed"===b?(0,R.jsx)(x.Z,{text:C("DASHBOARD.EMPTY_TEXT")}):(0,R.jsx)(V,{incomes:f,expenses:g,profit:m,transactions:T,period:j,onAddTransaction:A,onFilter:k})]})},$=function(){return(0,R.jsxs)(o.Z5,{children:[(0,R.jsx)(o.AW,{path:"/",element:(0,R.jsx)(_,{})}),(0,R.jsx)(o.AW,{path:"*",element:(0,R.jsx)(o.Fg,{to:a.Z6.dashboard.path,replace:!0})})]})}},7195:function(t,e,n){var r=n(1413),o=n(5987),a=(n(2791),n(8870)),i=n(3967),d=n(890),s=n(4102),l=n(184),c=["text"];e.Z=function(t){var e=t.text,n=(0,o.Z)(t,c),u=(0,i.Z)().palette.info.contrastText,p=(0,s.$G)().t,h=e||p("COMMON.NO_DATA");return(0,l.jsx)(a.Z,(0,r.Z)((0,r.Z)({display:"flex",justifyContent:"center"},n),{},{sx:(0,r.Z)({width:"100%"},n.sx),children:(0,l.jsx)(d.Z,{noWrap:!0,color:u,fontSize:{sm:18,xs:16},children:h})}))}},4372:function(t,e,n){var r=n(1413),o=n(5987),a=(n(2791),n(7047)),i=n(1889),d=n(184),s=["type"];e.Z=function(t){var e=t.type,n=(0,o.Z)(t,s),l="form"===e,c=function(){switch(e){case"list":default:return{firstBar:40,secondBar:40,thirdBar:40};case"form":return{firstBar:56,secondBar:56,thirdBar:56};case"summary":return{firstBar:30,secondBar:60,thirdBar:120};case"circular":return{firstBar:64,secondBar:64,thirdBar:64}}};return"circular"===e?(0,d.jsxs)(i.ZP,{container:!0,columnGap:4,rowGap:4,children:[(0,d.jsx)(i.ZP,{item:!0,width:100,display:"flex",justifyContent:"center",children:(0,d.jsx)(a.Z,(0,r.Z)((0,r.Z)({},n),{},{variant:"circular",height:c().firstBar,width:c().firstBar}))}),(0,d.jsx)(i.ZP,{item:!0,width:100,display:"flex",justifyContent:"center",children:(0,d.jsx)(a.Z,(0,r.Z)((0,r.Z)({},n),{},{variant:"circular",height:c().secondBar,width:c().secondBar}))}),(0,d.jsx)(i.ZP,{item:!0,width:100,display:"flex",justifyContent:"center",children:(0,d.jsx)(a.Z,(0,r.Z)((0,r.Z)({},n),{},{variant:"circular",height:c().thirdBar,width:c().firstBar}))})]}):(0,d.jsxs)(i.ZP,{container:!0,justifyContent:"center",rowGap:l?5:2,children:[(0,d.jsx)(i.ZP,{item:!0,xs:12,children:(0,d.jsx)(a.Z,(0,r.Z)((0,r.Z)({},n),{},{variant:"rounded",height:c().firstBar}))}),(0,d.jsx)(i.ZP,{item:!0,xs:12,children:(0,d.jsx)(a.Z,(0,r.Z)((0,r.Z)({},n),{},{variant:"rounded",animation:"wave",height:c().secondBar}))}),(0,d.jsx)(i.ZP,{item:!0,xs:12,children:(0,d.jsx)(a.Z,(0,r.Z)((0,r.Z)({},n),{},{variant:"rounded",height:c().thirdBar}))})]})}},5814:function(t,e,n){n.d(e,{Z:function(){return x}});var r=n(1413),o=n(9439),a=n(5987),i=n(2791),d=n(3896),s=n(4102),l=n(225),c=n(5228),u=(0,l.Z)(c.Z)({"&.MuiTabs-root":{}}),p=n(184),h=["tabs","defaultValue","onChange"],x=function(t){var e=t.tabs,n=t.defaultValue,l=void 0===n?"0":n,c=t.onChange,x=(0,a.Z)(t,h),f=(0,s.$G)().t,g=i.useState(l),m=(0,o.Z)(g,2),v=m[0],Z=m[1];return(0,p.jsx)(u,(0,r.Z)((0,r.Z)({},x),{},{value:v,onChange:function(t,e){Z(e),c(t,e)},children:e.map((function(t){var e=t.value,n=t.label;return(0,p.jsx)(d.Z,{value:e,label:f(n)},e)}))}))}},7047:function(t,e,n){n.d(e,{Z:function(){return k}});var r=n(168),o=n(3366),a=n(7462),i=n(2791),d=n(8182),s=n(2554),l=n(4419);function c(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function u(t){return parseFloat(t)}var p=n(2065),h=n(6934),x=n(1402),f=n(5878),g=n(1217);function m(t){return(0,g.Z)("MuiSkeleton",t)}(0,f.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v,Z,b,j,y,C,w,R,B=n(184),S=["animation","className","component","height","style","variant","width"],P=(0,s.F4)(y||(y=v||(v=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),T=(0,s.F4)(C||(C=Z||(Z=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),A=(0,h.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})((function(t){var e=t.theme,n=t.ownerState,r=c(e.shape.borderRadius)||"px",o=u(e.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,p.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(o).concat(r,"/").concat(Math.round(o/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(e.vars||e).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(t){return"pulse"===t.ownerState.animation&&(0,s.iv)(w||(w=b||(b=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),P)}),(function(t){var e=t.ownerState,n=t.theme;return"wave"===e.animation&&(0,s.iv)(R||(R=j||(j=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),T,(n.vars||n).palette.action.hover)})),k=i.forwardRef((function(t,e){var n=(0,x.Z)({props:t,name:"MuiSkeleton"}),r=n.animation,i=void 0===r?"pulse":r,s=n.className,c=n.component,u=void 0===c?"span":c,p=n.height,h=n.style,f=n.variant,g=void 0===f?"text":f,v=n.width,Z=(0,o.Z)(n,S),b=(0,a.Z)({},n,{animation:i,component:u,variant:g,hasChildren:Boolean(Z.children)}),j=function(t){var e=t.classes,n=t.variant,r=t.animation,o=t.hasChildren,a=t.width,i=t.height,d={root:["root",n,r,o&&"withChildren",o&&!a&&"fitContent",o&&!i&&"heightAuto"]};return(0,l.Z)(d,m,e)}(b);return(0,B.jsx)(A,(0,a.Z)({as:u,ref:e,className:(0,d.Z)(j.root,s),ownerState:b},Z,{style:(0,a.Z)({width:v,height:p},h)}))}))}}]);
//# sourceMappingURL=344.7113219b.chunk.js.map