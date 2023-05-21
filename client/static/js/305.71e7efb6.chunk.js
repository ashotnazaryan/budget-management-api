"use strict";(self.webpackChunkbudget_management=self.webpackChunkbudget_management||[]).push([[305],{3305:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var a=t(2791),r=t(7689),i=t(5980),o=t(2385),s=t(1413),l=t(1889),c=t(9276),d=t(4102),u=t(8112),x=t(7931),m=t(4372),f=t(5900),Z=t(7195),h=t(5527),j=t(890),p=t(3967),v=t(6606),y=t(6581),C=t(184),g=function(e){var n=e.data,t=e.onClick,a=(0,p.Z)().palette,r=a.primary,s=r.main,c=r.contrastText,d=a.error,u=n.name,x=n.icon,m=n.accountName,f=n.accountIcon,Z=n.createdAt,g=n.amount,T=n.type,A=(0,v.Z)(Z).format(i.zT);return(0,C.jsx)(h.Z,{elevation:1,sx:{paddingX:2,backgroundColor:s},onClick:function(){t&&t(n)},children:(0,C.jsxs)(l.ZP,{container:!0,columnSpacing:2,alignItems:"center",sx:{minHeight:40,cursor:"pointer"},children:[(0,C.jsx)(l.ZP,{item:!0,xs:1,display:"flex",children:x&&(0,C.jsx)(y.Z,{name:x,sx:{color:c,fontSize:{sm:22,xs:18}}})}),(0,C.jsx)(l.ZP,{item:!0,xs:3,children:(0,C.jsx)(j.Z,{noWrap:!0,color:c,children:u})}),(0,C.jsx)(l.ZP,{item:!0,xs:2,display:"flex",justifyContent:"flex-end",children:(0,C.jsx)(j.Z,{noWrap:!0,color:T===o.a9.expense?d.main:c,children:g})}),(0,C.jsx)(l.ZP,{item:!0,xs:2,display:"flex",justifyContent:"flex-end",children:(0,C.jsx)(j.Z,{noWrap:!0,color:c,children:m})}),(0,C.jsx)(l.ZP,{item:!0,xs:1,display:"flex",children:f&&(0,C.jsx)(y.Z,{name:f,color:"primary",sx:{fontSize:{sm:22,xs:18},color:c}})}),(0,C.jsx)(l.ZP,{item:!0,xs:3,display:"flex",justifyContent:"flex-end",children:(0,C.jsx)(j.Z,{noWrap:!0,color:c,children:A})})]})})},T=function(){var e=(0,u.TL)(),n=(0,u.CG)(x.Bt),t=n.transactions,o=n.status,h=(0,r.s0)(),j=(0,d.$G)().t;a.useEffect((function(){"idle"===o&&e((0,x.f1)())}),[e,o]);var p=function(e){var n=e.id,t=e.name;h("".concat(i.Z6.transactions.path,"/view/").concat(t),{state:{id:n}})};return(0,C.jsxs)(c.Z,{flexGrow:1,children:[(0,C.jsx)(f.Z,{text:j("TRANSACTIONS.PAGE_TITLE")}),(0,C.jsx)(l.ZP,{container:!0,rowGap:2,children:"loading"===o?(0,C.jsx)(l.ZP,{item:!0,xs:12,children:(0,C.jsx)(m.Z,{type:"list"})}):"failed"!==o&&"succeeded"!==o||null!==t&&void 0!==t&&t.length?(0,C.jsx)(C.Fragment,{children:t.map((function(e){return(0,C.jsx)(l.ZP,{item:!0,xs:12,children:(0,C.jsx)(g,{data:(n=e,(0,s.Z)((0,s.Z)({},n),{},{name:n.nameKey?j(n.nameKey):n.name,accountName:n.accountNameKey?j(n.accountNameKey):n.accountName})),onClick:p})},e.id);var n}))}):(0,C.jsx)(l.ZP,{item:!0,xs:12,children:(0,C.jsx)(Z.Z,{text:j("TRANSACTIONS.EMPTY_TEXT")})})})]})},A=t(9439),N=t(1134),V=t(8870),S=t(7071),O=t(5022),E=t(7233),I=t(7497),b=t(1634),P=t(7034),G=t(8692),w=t(645),M=t(1890),k=t(7730),B=t(9525),R=t(7559),W=function(e){var n=e.mode,t=i.a,c=i.G7,h=(0,u.TL)(),y=(0,r.s0)(),g=(0,r.TH)().state,T=(0,u.CG)(x.uY).categories,W=(0,u.CG)(x.Jp),_=(0,u.CG)(x.Bt),D=_.status,K=_.currentStatus,L=_.deleteStatus,q=(0,u.CG)(x.w2),Y=(0,u.CG)(x.bk).accounts,F=(0,u.CG)(x.en),z=(0,u.CG)(x.vi).defaultAccount,Q=void 0===z?"":z,X=(0,u.CG)(x.yR),H=(0,p.Z)().palette.info.contrastText,U=(0,E.Lt)(),$=(0,d.$G)().t,J=a.useState(!1),ee=(0,A.Z)(J,2),ne=ee[0],te=ee[1],ae=a.useState(!1),re=(0,A.Z)(ae,2),ie=re[0],oe=re[1],se=a.useState(!1),le=(0,A.Z)(se,2),ce=le[0],de=le[1],ue=a.useState(!1),xe=(0,A.Z)(ue,2),me=xe[0],fe=xe[1],Ze="loading"===D,he="loading"===L,je=null===g||void 0===g?void 0:g.id,pe=null!==X&&void 0!==X&&X.nameKey?$(X.nameKey):(null===X||void 0===X?void 0:X.name)||"",ve=(null===g||void 0===g?void 0:g.categoryType)||o.a9.expense,ye=n===o.df.create,Ce=n===o.df.edit,ge=n===o.df.view,Te={amount:"",categoryId:"",accountId:Q||"",type:String(ve),createdAt:ye?(0,v.Z)().format():void 0,note:""},Ae=(0,N.cI)({mode:"onBlur",reValidateMode:"onBlur",defaultValues:Te}),Ne=Ae.setValue,Ve=Ae.handleSubmit,Se=Ae.control,Oe=Ae.watch,Ee=Ae.reset,Ie=Oe(o.Vn.type),be=Oe(o.Vn.accountId),Pe=Oe(o.Vn.createdAt),Ge=function(e){var n=Number(e);Ne(o.Vn.type,n,{shouldValidate:!0}),Ne(o.Vn.categoryId,Te.categoryId),Ne(o.Vn.icon,Te.icon),Ne(o.Vn.name,Te.name)},we=function(e){var n=e.id,t=e.name,a=e.nameKey,r=e.icon;ge||(Ne(o.Vn.categoryId,n,{shouldValidate:!0}),Ne(o.Vn.icon,r),Ne(o.Vn.name,t,{shouldValidate:!0}),Ne("nameKey",a))},Me=function(e){Ne(o.Vn.accountId,e.target.value,{shouldValidate:!0})},ke=function(e){Ne(o.Vn.createdAt,e.format(),{shouldValidate:!0})},Be=function(e){var n=(0,s.Z)((0,s.Z)({},e),{},{amount:Number(e.amount),type:Number(e.type),createdAt:(0,v.Z)(e.createdAt).toDate()});h(Ce?(0,x.vF)([je,n]):(0,x.dT)(n)),te(!0)},Re=a.useCallback((function(){X&&(Ne(o.Vn.categoryId,X.categoryId),Ne(o.Vn.accountId,X.accountId),Ne(o.Vn.icon,X.icon),Ne(o.Vn.amount,(0,E.Co)(X.amount)),Ne(o.Vn.type,String(X.type)),Ne(o.Vn.createdAt,X.createdAt),Ne(o.Vn.note,X.note),Ne("name",X.name))}),[X,Ne]),We=a.useCallback((function(){h((0,x.Se)())}),[h]),_e=a.useCallback((function(){y("".concat(ye?i.Z6.dashboard.path:i.Z6.transactions.path)),We()}),[y,We,ye]);a.useEffect((function(){"idle"===W&&h((0,x.CP)()),"idle"===F&&h((0,x.T8)())}),[h,W,F]),a.useEffect((function(){"succeeded"===D&&ne&&(_e(),de(!1),h((0,x.T8)())),"failed"===D&&ne&&de(!0)}),[h,_e,D,ne]),a.useEffect((function(){"succeeded"===L&&ie&&_e(),"failed"===L&&ie&&(de(!0),fe(!1))}),[_e,L,ie]),a.useEffect((function(){!je||"idle"!==K||ye||ie||h((0,x.fo)(je))}),[je,ye,K,h,ie]),a.useEffect((function(){Ne(o.Vn.accountId,Q)}),[Ne,Q]),a.useEffect((function(){Re()}),[Re]),a.useEffect((function(){return function(){We()}}),[We]);return(0,C.jsxs)(V.Z,{component:"form",display:"flex",flexDirection:"column",flexGrow:1,onSubmit:Ve(Be),children:[(0,C.jsx)(f.Z,{withBackButton:!0,withEditButton:ge&&!!X,withDeleteButton:Ce&&!!X,withCancelButton:!ge&&!!X,text:ye?$("TRANSACTIONS.NEW_TRANSACTION"):X&&(Ce||ge)?pe:"loading"!==K?$("TRANSACTIONS.EMPTY_TITLE"):"",onBackButtonClick:_e,onEditButtonClick:function(){Ce||y("".concat(i.Z6.transactions.path,"/edit/").concat(pe),{state:{id:je}})},onDeleteButtonClick:function(){fe(!0)},onCancelButtonClick:function(){ye?Ee(Te):Re(),ye?y(i.Z6.dashboard.path):y("".concat(i.Z6.transactions.path,"/view/").concat(pe),{state:{id:je}})}}),(0,C.jsx)(V.Z,{flexGrow:1,children:"loading"===K?(0,C.jsx)(m.Z,{type:"form"}):ye||X&&je?(0,C.jsx)(N.RV,(0,s.Z)((0,s.Z)({},Ae),{},{children:(0,C.jsxs)(l.ZP,{container:!0,rowGap:7,children:[(0,C.jsxs)(l.ZP,{item:!0,xs:12,children:[(0,C.jsx)(j.Z,{color:H,children:$("COMMON.TYPE")}),(0,C.jsx)(k.Z,{readonly:ge,name:o.Vn.type,rules:{required:{value:!0,message:$(U.type.required.message)}},options:(0,E.hf)(c,$),labelColor:H,value:Ie,onRadioChange:Ge})]}),(0,C.jsx)(l.ZP,{item:!0,xs:12,children:(0,C.jsx)(I.Z,{InputProps:{readOnly:ge},label:$("COMMON.AMOUNT"),type:"number",name:o.Vn.amount,rules:{required:{value:!0,message:$(U.amount.required.message)},pattern:{value:t,message:$(U.amount.pattern.message)}}})}),(0,C.jsx)(l.ZP,{item:!0,xs:12,children:(0,C.jsx)(M.Z,{inputProps:{readOnly:ge},label:$("COMMON.ACCOUNT"),name:o.Vn.accountId,value:Y.length?be||Q:"",onChange:Me,rules:{required:{value:!0,message:$(U.accountId.required.message)}},renderValue:function(e){return(0,C.jsx)(j.Z,{children:(0,E.ut)(e,Y,$)})},children:Y.map((function(e){return(0,C.jsx)(O.Z,{value:e.id,sx:{display:"flex",justifyContent:"space-between"},children:(0,C.jsx)(R.Z,{data:e})},e.id)}))})}),(0,C.jsx)(l.ZP,{item:!0,xs:12,children:(0,C.jsx)(w.Z,{readOnly:ge,name:o.Vn.createdAt,label:$("COMMON.DATE"),value:(0,v.Z)(Pe).isValid()?(0,v.Z)(Pe):null,maxDate:(0,v.Z)(),rules:{required:!0,validate:{maxDate:function(e){return Promise.resolve((0,v.Z)(e)<=(0,v.Z)()||$(U.createdAt.max.message))}}},onChange:ke,sx:{width:"100%"}})}),(0,C.jsx)(l.ZP,{item:!0,xs:12,children:(0,C.jsx)(I.Z,{inputProps:{readOnly:ge},label:$("COMMON.NOTE"),name:o.Vn.note})}),(0,C.jsxs)(l.ZP,{item:!0,xs:12,children:[(0,C.jsx)(j.Z,{color:H,sx:{marginY:1},children:$("COMMON.CATEGORY")}),(0,C.jsx)(N.Qr,{control:Se,name:o.Vn.categoryId,rules:{required:!0},render:function(e){var n=e.field,t=e.fieldState.error;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.ZP,(0,s.Z)((0,s.Z)({container:!0},n),{},{columnGap:4,rowGap:4,children:T.filter((function(e){return e.type===Number(Ie)})).map((function(e){return(0,C.jsx)(l.ZP,{item:!0,children:(0,C.jsx)(G.Z,{data:(t=e,(0,s.Z)((0,s.Z)({},t),{},{name:t.nameKey?$(t.nameKey):t.name})),selected:n.value,readonly:ge,onItemClick:we})},e.id);var t}))})),t&&(0,C.jsx)(S.Z,{error:!0,children:$(U.categoryId[t.type].message)})]})}})]})]})})):(0,C.jsx)(Z.Z,{text:$("TRANSACTIONS.EMPTY_TEXT_RENDER_CONTENT")})}),!ge&&(0,C.jsx)(l.ZP,{container:!0,display:"flex",justifyContent:"flex-end",rowGap:2,columnGap:2,sx:{marginTop:4},children:(0,C.jsx)(l.ZP,{item:!0,sm:"auto",xs:12,children:(0,C.jsx)(b.Z,{"aria-label":"Save transaction",fullWidth:!0,type:"submit",variant:"contained",loading:Ze,onClick:Ve(Be),children:$("COMMON.SAVE")})})}),(0,C.jsx)(P.Z,{type:"error",open:ce,text:null!==q&&void 0!==q&&q.messageKey?$(q.messageKey):(null===q||void 0===q?void 0:q.message)||"",onClose:function(){de(!1),oe(!1)}}),(0,C.jsx)(B.Z,{fullWidth:!0,maxWidth:"xs",title:$("TRANSACTIONS.DELETE_DIALOG_TITLE"),actionButtonText:$("COMMON.YES"),open:me,loading:he,onClose:function(){fe(!1)},onAction:function(){h((0,x.Ks)(je)),oe(!0)},children:(0,C.jsx)(j.Z,{variant:"subtitle1",children:$("TRANSACTIONS.DELETE_DIALOG_CONFIRM")})})]})},_=function(){return(0,C.jsxs)(r.Z5,{children:[(0,C.jsx)(r.AW,{path:"/",element:(0,C.jsx)(T,{})}),(0,C.jsx)(r.AW,{path:"/new",element:(0,C.jsx)(W,{mode:o.df.create})}),(0,C.jsx)(r.AW,{path:"/view/:id",element:(0,C.jsx)(W,{mode:o.df.view})}),(0,C.jsx)(r.AW,{path:"/edit/:id",element:(0,C.jsx)(W,{mode:o.df.edit})}),(0,C.jsx)(r.AW,{path:"*",element:(0,C.jsx)(r.Fg,{to:i.Z6.accounts.path,replace:!0})})]})}},645:function(e,n,t){var a=t(1413),r=t(5987),i=(t(2791),t(1134)),o=t(8870),s=t(4925),l=t(7071),c=t(9617),d=t(1652),u=t(7792),x=t(5866),m=t(184),f=["name","label","rules"];n.Z=function(e){var n=e.name,t=e.label,Z=e.rules,h=void 0===Z?{}:Z,j=(0,r.Z)(e,f),p=(0,i.Gc)(),v=p.control,y=p.formState.errors;return(0,m.jsx)(d._,{dateAdapter:u.y,children:(0,m.jsx)(x.C,{sx:{paddingTop:2,overflow:"initial"},components:["DatePicker"],children:(0,m.jsx)(i.Qr,{control:v,name:n,rules:h,render:function(e){var r=e.field,i=e.fieldState.error;return(0,m.jsxs)(o.Z,{position:"relative",children:[(0,m.jsx)(s.Z,{children:t}),(0,m.jsx)(c.M,(0,a.Z)((0,a.Z)({},r),j)),y[n]&&(0,m.jsx)(l.Z,{sx:{position:"absolute"},error:!0,children:null===i||void 0===i?void 0:i.message})]})}})})})}},1890:function(e,n,t){var a=t(1413),r=t(5987),i=(t(2791),t(1134)),o=t(7198),s=t(7071),l=t(8870),c=t(4925),d=t(184),u=["name","label","rules","children"];n.Z=function(e){var n=e.name,t=e.label,x=e.rules,m=void 0===x?{}:x,f=e.children,Z=(0,r.Z)(e,u),h=(0,i.Gc)(),j=h.control,p=h.formState.errors;return(0,d.jsx)(i.Qr,{control:j,name:n,rules:m,render:function(e){var r=e.field,i=e.fieldState.error;return(0,d.jsxs)(l.Z,{position:"relative",children:[(0,d.jsx)(c.Z,{children:t}),(0,d.jsx)(o.Z,(0,a.Z)((0,a.Z)((0,a.Z)({fullWidth:!0,variant:"outlined",error:!!p[n]},r),Z),{},{children:f})),p[n]&&(0,d.jsx)(s.Z,{sx:{position:"absolute"},error:!0,children:null===i||void 0===i?void 0:i.message})]})}})}}}]);
//# sourceMappingURL=305.71e7efb6.chunk.js.map