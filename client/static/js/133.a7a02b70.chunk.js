(self.webpackChunkbudget_management=self.webpackChunkbudget_management||[]).push([[133],{8190:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return G}});var n=s(2791),l=s(7689),t=s(56),i=s(2385),a=s(9276),o=s(4518),c=s(4102),d=s(5900),u=s(6581),x=s(184),m=function(){var e=(0,c.$G)().t,r=(0,l.s0)();return(0,x.jsxs)(a.Z,{flexGrow:1,children:[(0,x.jsx)(d.Z,{text:e("INVOICES.PAGE_TITLE")}),(0,x.jsx)(a.Z,{sx:{display:"flex",justifyContent:"flex-end"},children:(0,x.jsx)(o.Z,{"aria-label":"New transfer",color:"secondary",variant:"contained",startIcon:(0,x.jsx)(u.Z,{name:i.Tu.receipt}),sx:{width:{sm:"auto",xs:"100%"},fontSize:14},onClick:function(){r("".concat(t.Z6.invoices.path,"/new"))},children:e("INVOICES.NEW_INVOICE")})})]})},h=s(9439),j=s(8870),v=s(1889),Z=s(3676),g=s(9372);Z.Zx.register({family:"SourceSansPro",fonts:[{src:"https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3aPw.ttf",fontWeight:400},{src:"https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rAkA.ttf",fontWeight:700}]});var f,y=Z.mM.create({page:{backgroundColor:"#E4E4E4",fontFamily:"SourceSansPro",padding:20},title:{fontSize:15,fontWeight:"bold",textAlign:"center"},heading:{paddingTop:10,display:"flex",flexDirection:"row",alignItems:"center"},label:{fontSize:12,fontWeight:"bold",marginRight:10},value:{fontSize:12},account:{fontSize:12,marginTop:30},sellerBuyer:{display:"flex",flexDirection:"row",alignItems:"flex-start",marginTop:40},seller:{flex:50},buyer:{flex:50}}),I=function(e){var r=e.data,s=(0,c.$G)().t;return(0,x.jsx)(Z.BB,{children:(0,x.jsxs)(Z.T3,{size:"A4",style:y.page,children:[(0,x.jsx)(Z.G7,{children:(0,x.jsx)(Z.xv,{style:y.title,children:r.title})}),(0,x.jsxs)(Z.G7,{style:y.heading,children:[(0,x.jsxs)(Z.xv,{style:y.label,children:[s("INVOICES.DOCUMENT.INVOICE_NO"),"."]}),(0,x.jsx)(Z.xv,{style:y.value,children:(0,g.D9)()})]}),(0,x.jsxs)(Z.G7,{style:y.heading,children:[(0,x.jsxs)(Z.xv,{style:y.label,children:[s("INVOICES.DOCUMENT.ISSUE_DATE"),":"]}),(0,x.jsx)(Z.xv,{style:y.value,children:(0,g.Ux)()})]}),(0,x.jsxs)(Z.G7,{style:y.heading,children:[(0,x.jsxs)(Z.xv,{style:y.label,children:[s("INVOICES.DOCUMENT.SALE_DATE"),":"]}),(0,x.jsx)(Z.xv,{style:y.value,children:(0,g.Vc)()})]}),(0,x.jsxs)(Z.G7,{style:y.heading,children:[(0,x.jsxs)(Z.xv,{style:y.label,children:[s("INVOICES.DOCUMENT.DUE_DATE"),":"]}),(0,x.jsx)(Z.xv,{style:y.value,children:(0,g.FW)(14)})]}),(0,x.jsxs)(Z.G7,{style:y.heading,children:[(0,x.jsxs)(Z.xv,{style:y.label,children:[s("INVOICES.DOCUMENT.PAYMENT_TYPE"),":"]}),(0,x.jsx)(Z.xv,{style:y.value,children:s("INVOICES.DOCUMENT.TRANSFER")})]}),(0,x.jsxs)(Z.G7,{style:y.sellerBuyer,children:[(0,x.jsxs)(Z.G7,{style:y.seller,children:[(0,x.jsxs)(Z.xv,{style:y.label,children:[s("INVOICES.DOCUMENT.SELLER"),":"]}),(0,x.jsxs)(Z.G7,{children:[(0,x.jsx)(Z.xv,{style:y.value,children:r.sellerName}),(0,x.jsx)(Z.xv,{style:y.value,children:r.sellerAddress}),(0,x.jsx)(Z.xv,{style:y.value,children:r.sellerLocation}),(0,x.jsx)(Z.xv,{style:y.value,children:r.sellerVatID}),(0,x.jsx)(Z.xv,{style:y.account,children:r.sellerAccount})]})]}),(0,x.jsxs)(Z.G7,{style:y.buyer,children:[(0,x.jsxs)(Z.xv,{style:y.label,children:[s("INVOICES.DOCUMENT.BUYER"),":"]}),(0,x.jsxs)(Z.G7,{children:[(0,x.jsx)(Z.xv,{style:y.value,children:r.buyerName}),(0,x.jsx)(Z.xv,{style:y.value,children:r.buyerAddress}),(0,x.jsx)(Z.xv,{style:y.value,children:r.buyerLocation}),(0,x.jsx)(Z.xv,{style:y.value,children:r.buyerVatID})]})]})]})]})})},p=s(1413),b=s(1134),O=s(5022),N=s(5523),C=s(9955),E=s(890),S=s(5527),M=s(3967),A=s(8112),V=s(7931),T=s(7497),P=s(1890),D=s(9078),W=function(e){var r=e.onSubmit,s=(0,c.$G)().t,l=(0,g.w8)(),a=(0,M.Z)().palette.info.contrastText,d=(0,A.CG)(V.vi).defaultCurrency.iso,u=t.a,m=t.Mf,j=n.useState(d),Z=(0,h.Z)(j,2),f=Z[0],y=Z[1],I=n.useState(!1),W=(0,h.Z)(I,2),q=W[0],L=W[1],B={title:"",salary:"",currencyIso:d,vatIncluded:!1,sellerName:"",sellerAddress:"",sellerLocation:"",sellerVatID:"",sellerAccount:"",buyerName:"",buyerAddress:"",buyerLocation:"",buyerVatID:""},G=(0,b.cI)({mode:"onBlur",reValidateMode:"onBlur",defaultValues:B}),w=G.setValue,R=G.handleSubmit,U=function(e){r(e)};return(0,x.jsx)(b.RV,(0,p.Z)((0,p.Z)({},G),{},{children:(0,x.jsx)("form",{onSubmit:R(U),children:(0,x.jsxs)(v.ZP,{container:!0,gap:3,children:[(0,x.jsx)(v.ZP,{item:!0,container:!0,children:(0,x.jsxs)(S.Z,{elevation:1,sx:{paddingX:3,paddingTop:2,paddingBottom:6,width:"100%"},children:[(0,x.jsx)(E.Z,{sx:{marginBottom:2},children:s("INVOICES.MAIN_INFO")}),(0,x.jsxs)(v.ZP,{item:!0,container:!0,gap:7,children:[(0,x.jsx)(v.ZP,{item:!0,xs:12,children:(0,x.jsx)(T.Z,{label:s("COMMON.TITLE"),name:i.W4.title,rules:{required:{value:!0,message:s(l.title.required.message)}}})}),(0,x.jsx)(v.ZP,{item:!0,xs:12,children:(0,x.jsx)(T.Z,{label:s("COMMON.SALARY"),type:"number",name:i.W4.salary,rules:{required:{value:!0,message:s(l.salary.required.message)},pattern:{value:u,message:s(l.salary.pattern.message)}}})}),(0,x.jsx)(v.ZP,{item:!0,xs:12,children:(0,x.jsx)(P.Z,{label:s("COMMON.CURRENCY"),name:i.W4.currencyIso,value:f||d,onChange:function(e){var r=e.target.value;w(i.W4.currencyIso,r),y(r)},rules:{required:{value:!0,message:s(l.currencyIso.required.message)}},children:m.map((function(e){var r=e.iso,s=e.name,n=e.nameKey,l=e.symbol;return(0,x.jsx)(O.Z,{value:r,children:(0,x.jsx)(D.Z,{currency:{iso:r,symbol:l,name:s,nameKey:n}})},r)}))})}),(0,x.jsx)(v.ZP,{item:!0,xs:12,children:(0,x.jsx)(N.Z,{control:(0,x.jsx)(C.Z,{checked:q,onChange:function(e,r){w(i.W4.vatIncluded,r),L(r)}}),label:(0,x.jsx)(E.Z,{color:a,children:s("INVOICES.INCLUDE_VAT")}),labelPlacement:"start",sx:{"&.MuiFormControlLabel-root":{margin:0}}})})]})]})}),(0,x.jsx)(v.ZP,{item:!0,container:!0,children:(0,x.jsxs)(S.Z,{elevation:1,sx:{paddingX:3,paddingTop:2,paddingBottom:7,width:"100%"},children:[(0,x.jsx)(E.Z,{sx:{marginBottom:2},children:s("INVOICES.SELLER_INFO")}),(0,x.jsxs)(v.ZP,{item:!0,container:!0,gap:7,children:[(0,x.jsx)(v.ZP,{item:!0,xs:12,children:(0,x.jsx)(T.Z,{label:s("COMMON.NAME"),name:i.W4.sellerName,rules:{required:{value:!0,message:s(l.sellerName.required.message)}}})}),(0,x.jsx)(v.ZP,{item:!0,xs:12,children:(0,x.jsx)(T.Z,{label:s("COMMON.ADDRESS"),name:i.W4.sellerAddress,rules:{required:{value:!0,message:s(l.sellerAddress.required.message)}}})}),(0,x.jsx)(v.ZP,{item:!0,xs:12,children:(0,x.jsx)(T.Z,{label:s("COMMON.LOCATION"),name:i.W4.sellerLocation,rules:{required:{value:!0,message:s(l.sellerLocation.required.message)}}})}),(0,x.jsx)(v.ZP,{item:!0,xs:12,children:(0,x.jsx)(T.Z,{label:s("COMMON.VAT_ID"),name:i.W4.sellerVatID,rules:{required:{value:!0,message:s(l.sellerVatID.required.message)}}})}),(0,x.jsx)(v.ZP,{item:!0,xs:12,children:(0,x.jsx)(T.Z,{label:s("COMMON.ACCOUNT"),name:i.W4.sellerAccount,rules:{required:{value:!0,message:s(l.sellerAccount.required.message)}}})})]})]})}),(0,x.jsx)(v.ZP,{item:!0,container:!0,children:(0,x.jsxs)(S.Z,{elevation:1,sx:{paddingX:3,paddingTop:2,paddingBottom:7,width:"100%"},children:[(0,x.jsx)(E.Z,{sx:{marginBottom:2},children:s("INVOICES.BUYER_INFO")}),(0,x.jsxs)(v.ZP,{item:!0,container:!0,gap:7,children:[(0,x.jsx)(v.ZP,{item:!0,xs:12,children:(0,x.jsx)(T.Z,{label:s("COMMON.NAME"),name:i.W4.buyerName,rules:{required:{value:!0,message:s(l.buyerName.required.message)}}})}),(0,x.jsx)(v.ZP,{item:!0,xs:12,children:(0,x.jsx)(T.Z,{label:s("COMMON.ADDRESS"),name:i.W4.buyerAddress,rules:{required:{value:!0,message:s(l.buyerAddress.required.message)}}})}),(0,x.jsx)(v.ZP,{item:!0,xs:12,children:(0,x.jsx)(T.Z,{label:s("COMMON.LOCATION"),name:i.W4.buyerLocation,rules:{required:{value:!0,message:s(l.buyerLocation.required.message)}}})}),(0,x.jsx)(v.ZP,{item:!0,xs:12,children:(0,x.jsx)(T.Z,{label:s("COMMON.VAT_ID"),name:i.W4.buyerVatID,rules:{required:{value:!0,message:s(l.buyerVatID.required.message)}}})})]})]})}),(0,x.jsx)(v.ZP,{item:!0,xs:12,children:(0,x.jsx)(o.Z,{"aria-label":"Save invoice",fullWidth:!0,type:"submit",variant:"contained",onClick:R(U),children:s("COMMON.PREVIEW")})})]})})}))},q=s(168),L=(0,s(225).Z)(Z.Z$)(f||(f=(0,q.Z)(["\n  min-height: calc(100vh - 100px);\n  width: 100%;\n"]))),B=function(e){e.mode;var r=(0,c.$G)().t,s=(0,l.s0)(),i=n.useState({}),a=(0,h.Z)(i,2),o=a[0],u=a[1],m=n.useCallback((function(){s("".concat(t.Z6.invoices.path))}),[s]);return(0,x.jsxs)(j.Z,{flexGrow:1,children:[(0,x.jsx)(d.Z,{withBackButton:!0,text:r("INVOICES.NEW_INVOICE"),onBackButtonClick:m}),(0,x.jsxs)(v.ZP,{container:!0,columnSpacing:3,rowSpacing:5,children:[(0,x.jsx)(v.ZP,{item:!0,xs:12,sm:6,children:(0,x.jsx)(W,{onSubmit:function(e){u(e)}})}),(0,x.jsx)(v.ZP,{item:!0,xs:12,sm:6,children:(0,x.jsx)(L,{children:(0,x.jsx)(I,{data:o})})})]})]})},G=function(){return(0,x.jsxs)(l.Z5,{children:[(0,x.jsx)(l.AW,{path:"/",element:(0,x.jsx)(m,{})}),(0,x.jsx)(l.AW,{path:"/new",element:(0,x.jsx)(B,{mode:i.df.create})}),(0,x.jsx)(l.AW,{path:"/view/:id",element:(0,x.jsx)(B,{mode:i.df.view})}),(0,x.jsx)(l.AW,{path:"/edit/:id",element:(0,x.jsx)(B,{mode:i.df.edit})}),(0,x.jsx)(l.AW,{path:"*",element:(0,x.jsx)(l.Fg,{to:t.Z6.invoices.path,replace:!0})})]})}},7497:function(e,r,s){"use strict";s.d(r,{Z:function(){return v}});var n,l=s(1413),t=s(5987),i=(s(2791),s(1134)),a=s(7071),o=s(8870),c=s(3967),d=s(168),u=s(225),x=s(3006),m=(0,u.Z)(x.Z)(n||(n=(0,d.Z)(["\n  &.MuiInputBase-input {\n    border-color: ",";\n    color: ",";\n  },\n  &.MuiOutlinedInput-root {\n    &.Mui-error {\n      & .MuiOutlinedInput-notchedOutline: {\n        border-color: ",",\n      }\n    }\n    border-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.error.main}),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.error.main})),h=s(184),j=["name","rules"],v=function(e){var r=e.name,s=e.rules,n=void 0===s?{}:s,d=(0,t.Z)(e,j),u=(0,c.Z)(),x=(0,i.Gc)(),v=x.control,Z=x.formState.errors;return(0,h.jsx)(i.Qr,{control:v,name:r,rules:n,render:function(e){var s=e.field,n=e.fieldState.error;return(0,h.jsxs)(o.Z,{position:"relative",children:[(0,h.jsx)(m,(0,l.Z)((0,l.Z)((0,l.Z)({fullWidth:!0},s),d),{},{theme:u,error:!!Z[r]})),Z[r]&&(0,h.jsx)(a.Z,{sx:{position:"absolute"},error:!0,children:null===n||void 0===n?void 0:n.message})]})}})}},1890:function(e,r,s){"use strict";var n=s(1413),l=s(5987),t=(s(2791),s(1134)),i=s(7198),a=s(7071),o=s(8870),c=s(4925),d=s(184),u=["name","label","rules","children"];r.Z=function(e){var r=e.name,s=e.label,x=e.rules,m=void 0===x?{}:x,h=e.children,j=(0,l.Z)(e,u),v=(0,t.Gc)(),Z=v.control,g=v.formState.errors;return(0,d.jsx)(t.Qr,{control:Z,name:r,rules:m,render:function(e){var l=e.field,t=e.fieldState.error;return(0,d.jsxs)(o.Z,{position:"relative",children:[(0,d.jsx)(c.Z,{children:s}),(0,d.jsx)(i.Z,(0,n.Z)((0,n.Z)((0,n.Z)({fullWidth:!0,variant:"outlined",error:!!g[r]},l),j),{},{children:h})),g[r]&&(0,d.jsx)(a.Z,{sx:{position:"absolute"},error:!0,children:null===t||void 0===t?void 0:t.message})]})}})}},2480:function(){}}]);
//# sourceMappingURL=133.a7a02b70.chunk.js.map