"use strict";(self.webpackChunkbudget_management=self.webpackChunkbudget_management||[]).push([[569],{569:(t,e,r)=>{r.r(e),r.d(e,{default:()=>Z});var i=r(2791),n=r(3623),s=r(5967),a=r(8870),l=r(1889),d=r(890),c=r(3967),o=r(8112),x=r(3394),h=r(7931),u=r(56),f=r(5900),j=r(4372),m=r(7195),p=r(184);s.kL.register(s.qi,s.u,s.De);const Z=()=>{const{t:t}=(0,x.$G)(),e=(0,o.TL)(),{report:{reports:r,limit:s,total:Z},status:g}=(0,o.CG)(h.uP),{palette:{info:{contrastText:B},error:y}}=(0,c.Z)(),T=Z>s&&s?y.main:B,v=r.map((e=>{var r;const i=(null===(r=u.gg.find((t=>{let{index:r}=t;return r===e.month})))||void 0===r?void 0:r.nameKey)||"";return t(i)})),w=r.map((t=>{let{value:e}=t;return e})),P="loading"===g,C={labels:v,datasets:[{label:t("COMMON.AMOUNT"),data:w,backgroundColor:u.qd,borderWidth:1}]},O={responsive:!0,aspectRatio:1.7,color:B,plugins:{legend:{display:!0,maxWidth:50,labels:{usePointStyle:!0}}}};return i.useEffect((()=>{"idle"===g&&e((0,h.QL)())}),[e,g]),(0,p.jsxs)(a.Z,{display:"flex",flexDirection:"column",flexGrow:1,children:[(0,p.jsx)(f.Z,{"data-testid":"page-title",text:t("REPORTS.PAGE_TITLE")}),P?(0,p.jsx)(j.Z,{type:"list"}):"failed"!==g&&"succeeded"!==g||null!==r&&void 0!==r&&r.length?(0,p.jsxs)(a.Z,{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%",children:[(0,p.jsx)(n.$I,{data:C,options:O}),(0,p.jsxs)(d.Z,{color:T,sx:{textAlign:"center",marginTop:3},children:[t("COMMON.TOTAL"),": ",Z]}),s&&(0,p.jsxs)(d.Z,{color:B,sx:{textAlign:"center",marginTop:3},children:[t("COMMON.LIMIT"),": ",s]})]}):(0,p.jsx)(l.ZP,{item:!0,xs:12,children:(0,p.jsx)(m.Z,{text:t("REPORTS.EMPTY_TEXT")})})]})}},7195:(t,e,r)=>{r.d(e,{Z:()=>d});r(2791);var i=r(8870),n=r(3967),s=r(890),a=r(3394),l=r(184);const d=t=>{let{text:e,...r}=t;const{palette:{info:{contrastText:d}}}=(0,n.Z)(),{t:c}=(0,a.$G)(),o=e||c("COMMON.NO_DATA");return(0,l.jsx)(i.Z,{display:"flex",justifyContent:"center",...r,sx:{width:"100%",...r.sx},children:(0,l.jsx)(s.Z,{noWrap:!0,color:d,fontSize:{sm:18,xs:16},children:o})})}},4372:(t,e,r)=>{r.d(e,{Z:()=>a});r(2791);var i=r(7047),n=r(1889),s=r(184);const a=t=>{let{type:e,...r}=t;const a="form"===e,l=()=>{switch(e){case"list":default:return{firstBar:40,secondBar:40,thirdBar:40};case"form":return{firstBar:56,secondBar:56,thirdBar:56};case"summary":return{firstBar:30,secondBar:60,thirdBar:120};case"circular":return{firstBar:64,secondBar:64,thirdBar:64}}};return"circular"===e?(0,s.jsxs)(n.ZP,{container:!0,columnGap:4,rowGap:4,children:[(0,s.jsx)(n.ZP,{item:!0,width:100,display:"flex",justifyContent:"center",children:(0,s.jsx)(i.Z,{...r,variant:"circular",height:l().firstBar,width:l().firstBar})}),(0,s.jsx)(n.ZP,{item:!0,width:100,display:"flex",justifyContent:"center",children:(0,s.jsx)(i.Z,{...r,variant:"circular",height:l().secondBar,width:l().secondBar})}),(0,s.jsx)(n.ZP,{item:!0,width:100,display:"flex",justifyContent:"center",children:(0,s.jsx)(i.Z,{...r,variant:"circular",height:l().thirdBar,width:l().firstBar})})]}):(0,s.jsxs)(n.ZP,{container:!0,justifyContent:"center",rowGap:a?5:2,children:[(0,s.jsx)(n.ZP,{item:!0,xs:12,children:(0,s.jsx)(i.Z,{...r,variant:"rounded",height:l().firstBar})}),(0,s.jsx)(n.ZP,{item:!0,xs:12,children:(0,s.jsx)(i.Z,{...r,variant:"rounded",animation:"wave",height:l().secondBar})}),(0,s.jsx)(n.ZP,{item:!0,xs:12,children:(0,s.jsx)(i.Z,{...r,variant:"rounded",height:l().thirdBar})})]})}}}]);
//# sourceMappingURL=569.68a32583.chunk.js.map