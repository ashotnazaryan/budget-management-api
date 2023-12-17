"use strict";(self.webpackChunkbudget_management=self.webpackChunkbudget_management||[]).push([[75],{75:function(e,n,t){t.r(n),t.d(n,{default:function(){return W}});var r=t(2791),i=t(7689),a=t(56),o=t(2385),s=t(1413),c=t(9276),l=t(1889),u=t(3400),d=t(4102),x=t(8112),f=t(7931),m=t(4372),Z=t(5900),h=t(6581),j=t(7195),p=t(5527),v=t(890),C=t(3967),y=t(9403),g=t(184),b=function(e){var n=e.data,t=e.onClick,r=(0,C.Z)().palette.primary,i=r.main,a=r.contrastText,o=n.name,s=n.icon,c=n.balance;return(0,g.jsx)(p.Z,{elevation:1,sx:{paddingX:2,backgroundColor:i},children:(0,g.jsxs)(l.ZP,{container:!0,display:"flex",alignItems:"center",justifyContent:"space-between",flexGrow:1,columnSpacing:2,sx:{borderRadius:1,minHeight:40,cursor:"pointer"},onClick:function(){t&&t(n)},children:[(0,g.jsx)(l.ZP,{item:!0,xs:1,display:"flex",children:s&&(0,g.jsx)(h.Z,{name:s,sx:{fontSize:24,color:a}})}),(0,g.jsx)(l.ZP,{item:!0,xs:7,display:"flex",children:(0,g.jsx)(v.Z,{noWrap:!0,color:a,children:o})}),(0,g.jsx)(l.ZP,{item:!0,xs:4,display:"flex",justifyContent:"flex-end",children:(0,g.jsx)(y.Z,{balance:c,positiveColor:a,fontSize:{sm:16,xs:14}})})]})})},T=t(5987),S=t(1634),B=t(8870),w=["balance"],E=function(e){var n=e.balance,t=(0,T.Z)(e,w),r=(0,C.Z)().palette.info.contrastText,c=(0,i.s0)(),l=(0,d.$G)().t;return(0,g.jsxs)(B.Z,{sx:(0,s.Z)((0,s.Z)({},t.sx),{},{display:"flex",flexDirection:"column",paddingBottom:3,borderBottom:function(e){return"1px solid ".concat(e.palette.secondary.main)}}),children:[(0,g.jsxs)(B.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:3},children:[(0,g.jsx)(v.Z,{noWrap:!0,color:r,fontSize:18,sx:{marginRight:1},children:l("COMMON.BALANCE")}),(0,g.jsx)(y.Z,{balance:n,fontSize:18})]}),(0,g.jsxs)(B.Z,{sx:{display:"flex",flexDirection:{sm:"row",xs:"column"},alignItems:"center",justifyContent:"space-between",gap:3},children:[(0,g.jsx)(S.Z,{"aria-label":"New transfer",color:"secondary",variant:"contained",startIcon:(0,g.jsx)(h.Z,{name:o.Tu.currencyExchange}),sx:{width:{sm:"auto",xs:"100%"},fontSize:14},onClick:function(){c("".concat(a.Z6.transfers.path,"/new"))},children:l("TRANSFERS.NEW_TRANSFER")}),(0,g.jsx)(S.Z,{"aria-label":"Transfer history",color:"secondary",startIcon:(0,g.jsx)(h.Z,{name:o.Tu.history}),sx:{width:{sm:"auto",xs:"100%"},fontSize:14},onClick:function(){c("".concat(a.Z6.transfers.path))},children:l("TRANSFERS.TRANSFER_HISTORY")})]})]})},O=function(){var e=(0,x.TL)(),n=(0,x.CG)(f.bk),t=n.accounts,p=n.status,v=(0,x.CG)(f.Tc),C=v.balance,y=v.balanceStatus,T=(0,i.s0)(),S=(0,d.$G)().t;r.useEffect((function(){"idle"===p&&e((0,f.T8)())}),[e,p]);var B=function(e){var n=e.id,t=e.name;T("".concat(a.Z6.accounts.path,"/view/").concat(t),{state:{id:n}})};r.useEffect((function(){"idle"===y&&e((0,f.sb)())}),[e,y]);return(0,g.jsxs)(c.Z,{flexGrow:1,children:[(0,g.jsx)(E,{balance:C,sx:{marginTop:2,marginBottom:4}}),(0,g.jsx)(Z.Z,{text:S("ACCOUNTS.PAGE_TITLE"),sx:{marginBottom:4}}),(0,g.jsxs)(l.ZP,{container:!0,rowGap:2,sx:{marginTop:4},children:["loading"===p?(0,g.jsx)(l.ZP,{item:!0,xs:12,children:(0,g.jsx)(m.Z,{type:"list"})}):"failed"!==p&&"succeeded"!==p||null!==t&&void 0!==t&&t.length?(0,g.jsx)(g.Fragment,{children:t.map((function(e){return(0,g.jsx)(l.ZP,{item:!0,xs:12,children:(0,g.jsx)(b,{data:(n=e,(0,s.Z)((0,s.Z)({},n),{},{name:n.nameKey?S(n.nameKey):n.name})),onClick:B})},e.id);var n}))}):(0,g.jsx)(l.ZP,{item:!0,xs:12,children:(0,g.jsx)(j.Z,{text:S("ACCOUNTS.EMPTY_TEXT")})}),(0,g.jsx)(l.ZP,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",children:(0,g.jsx)(u.Z,{color:"primary",onClick:function(){T("".concat(a.Z6.accounts.path,"/new"))},sx:{alignSelf:"flex-end"},children:(0,g.jsx)(h.Z,{name:o.Tu.plus,sx:{fontSize:40}})})})]})]})},P=t(9439),N=t(1134),G=t(5022),A=t(9372),I=t(7497),k=t(7034),M=t(2581),q=t(1890),R=t(9525),D=t(8556),_=function(e){var n=e.mode,t=a.$V,c=a.Mf,u=a.SS,h=(0,i.s0)(),p=(0,i.TH)().state,C=(0,x.TL)(),y=(0,x.CG)(f.bk),b=y.getStatus,T=y.createEditStatus,w=y.deleteStatus,E=(0,x.CG)(f.XD),O=(0,x.CG)(f.rY),_=(0,x.CG)(f.vi).defaultCurrency.iso,W=(0,A.C3)(),z=(0,d.$G)().t,L=r.useState(!1),K=(0,P.Z)(L,2),F=K[0],U=K[1],V=r.useState(!1),Y=(0,P.Z)(V,2),$=Y[0],H=Y[1],X=r.useState(!1),Q=(0,P.Z)(X,2),J=Q[0],ee=Q[1],ne=r.useState(!1),te=(0,P.Z)(ne,2),re=te[0],ie=te[1],ae="loading"===T,oe="loading"===w,se=null===p||void 0===p?void 0:p.id,ce=null!==O&&void 0!==O&&O.nameKey?z(O.nameKey):(null===O||void 0===O?void 0:O.name)||"",le=n===o.df.create,ue=n===o.df.edit,de=n===o.df.view,xe=(0,A.pz)(n,z,b,"ACCOUNTS","NEW_ACCOUNT","EMPTY_TITLE",O),fe={balance:0,name:"",currencyIso:_},me=(0,N.cI)({mode:"onBlur",reValidateMode:"onBlur",defaultValues:fe}),Ze=me.setValue,he=me.handleSubmit,je=me.watch,pe=me.reset,ve=je(o.qt.currencyIso),Ce=function(e){var n=e.id;de||Ze(o.qt.icon,n,{shouldValidate:!0})},ye=function(e){var n=e.target.value;Ze(o.qt.currencyIso,n,{shouldValidate:!0})},ge=function(e){var n=(0,s.Z)((0,s.Z)({},e),{},{balance:Number(e.balance)});C(ue?(0,f.zx)([se,n]):(0,f.o1)(n)),U(!0)},be=r.useCallback((function(){O&&(Ze(o.qt.name,O.nameKey?z(O.nameKey):O.name),Ze(o.qt.icon,O.icon),Ze(o.qt.balance,(0,A.Co)(O.balance)),Ze(o.qt.currencyIso,O.currencyIso))}),[O,Ze,z]),Te=r.useCallback((function(){C((0,f.cj)())}),[C]),Se=r.useCallback((function(){h("".concat(a.Z6.accounts.path)),Te()}),[h,Te]);r.useEffect((function(){"succeeded"===T&&F&&(Se(),ee(!1)),"failed"===T&&F&&ee(!0)}),[Se,T,F]),r.useEffect((function(){"succeeded"===w&&$&&Se(),"failed"===w&&$&&(ee(!0),ie(!1))}),[Se,w,$]),r.useEffect((function(){se||C((0,f.P4)())}),[se,C]),r.useEffect((function(){se&&"idle"===b&&(ue||de)&&!$&&C((0,f.D0)(se))}),[se,ue,de,b,C,$]),r.useEffect((function(){be()}),[be]),r.useEffect((function(){return function(){Te()}}),[Te]);return(0,g.jsxs)(B.Z,{component:"form",display:"flex",flexDirection:"column",flexGrow:1,onSubmit:he(ge),children:[(0,g.jsx)(Z.Z,{withBackButton:!0,withEditButton:de&&!!O,withDeleteButton:ue&&!!O,withCancelButton:!de&&!!O,text:xe,onBackButtonClick:Se,onEditButtonClick:function(){ue||h("".concat(a.Z6.accounts.path,"/edit/").concat(ce),{state:{id:se}})},onDeleteButtonClick:function(){ie(!0)},onCancelButtonClick:function(){le?pe(fe):be(),ue?h("".concat(a.Z6.accounts.path,"/view/").concat(ce),{state:{id:se}}):h(a.Z6.accounts.path)}}),(0,g.jsx)(B.Z,{flexGrow:1,children:"loading"===b?(0,g.jsx)(m.Z,{type:"form"}):le||O&&se||"failed"!==b?(0,g.jsx)(N.RV,(0,s.Z)((0,s.Z)({},me),{},{children:(0,g.jsxs)(l.ZP,{container:!0,rowGap:7,children:[(0,g.jsx)(l.ZP,{item:!0,xs:12,children:(0,g.jsx)(I.Z,{InputProps:{readOnly:de},label:z("COMMON.NAME"),name:o.qt.name,rules:{required:{value:!0,message:z(W.name.required.message)}}})}),(0,g.jsx)(l.ZP,{item:!0,xs:12,children:(0,g.jsx)(I.Z,{InputProps:{readOnly:de},label:z("COMMON.BALANCE"),type:"number",name:o.qt.balance,rules:{required:{value:!0,message:z(W.balance.required.message)},pattern:{value:t,message:z(W.balance.pattern.message)}}})}),(0,g.jsx)(l.ZP,{item:!0,xs:12,children:(0,g.jsx)(q.Z,{inputProps:{readOnly:de},label:z("COMMON.CURRENCY"),name:o.qt.currencyIso,value:ve,onChange:ye,rules:{required:{value:!0,message:z(W.currencyIso.required.message)}},children:c.map((function(e){var n=e.iso,t=e.name,r=e.nameKey,i=e.symbol;return(0,g.jsxs)(G.Z,{value:n,children:[i," ",r?z(r):t]},n)}))})}),(0,g.jsx)(l.ZP,{item:!0,xs:12,children:(0,g.jsx)(D.Z,{name:o.qt.icon,label:z("COMMON.ICON"),rules:{required:{value:!0,message:z(W.icon.required.message)}},render:function(e){var n=e.field;return(0,g.jsx)(l.ZP,(0,s.Z)((0,s.Z)({container:!0},n),{},{columnGap:1,rowGap:3,sx:{marginTop:2},children:u.map((function(e){var t=e.name;return(0,g.jsx)(l.ZP,{item:!0,children:(0,g.jsx)(M.Z,{selected:n.value,id:t,icon:t,size:50,readonly:de,onClick:Ce})},t)}))}))}})})]})})):(0,g.jsx)(j.Z,{text:z("ACCOUNTS.EMPTY_TEXT_RENDER_CONTENT")})}),!de&&(0,g.jsx)(l.ZP,{container:!0,display:"flex",justifyContent:"flex-end",rowGap:2,columnGap:2,sx:{marginTop:4,marginBottom:4},children:(0,g.jsx)(l.ZP,{item:!0,sm:"auto",xs:12,children:(0,g.jsx)(S.Z,{"aria-label":"Save account",fullWidth:!0,type:"submit",variant:"contained",loading:ae,onClick:he(ge),children:z("COMMON.SAVE")})})}),(0,g.jsx)(k.Z,{type:"error",open:J,text:null!==E&&void 0!==E&&E.messageKey?z(E.messageKey):(null===E||void 0===E?void 0:E.message)||"",onClose:function(){ee(!1),H(!1)}}),(0,g.jsx)(R.Z,{fullWidth:!0,maxWidth:"xs",title:z("ACCOUNTS.DELETE_DIALOG_TITLE"),actionButtonText:z("COMMON.YES"),open:re,loading:oe,onClose:function(){ie(!1)},onAction:function(){C((0,f.tm)(se)),H(!0)},children:(0,g.jsx)(v.Z,{variant:"subtitle1",children:z("ACCOUNTS.DELETE_DIALOG_CONFIRM")})})]})},W=function(){return(0,g.jsxs)(i.Z5,{children:[(0,g.jsx)(i.AW,{path:"/",element:(0,g.jsx)(O,{})}),(0,g.jsx)(i.AW,{path:"/new",element:(0,g.jsx)(_,{mode:o.df.create})}),(0,g.jsx)(i.AW,{path:"/view/:id",element:(0,g.jsx)(_,{mode:o.df.view})}),(0,g.jsx)(i.AW,{path:"/edit/:id",element:(0,g.jsx)(_,{mode:o.df.edit})}),(0,g.jsx)(i.AW,{path:"*",element:(0,g.jsx)(i.Fg,{to:a.Z6.accounts.path,replace:!0})})]})}},7195:function(e,n,t){var r=t(1413),i=t(5987),a=(t(2791),t(8870)),o=t(3967),s=t(890),c=t(4102),l=t(184),u=["text"];n.Z=function(e){var n=e.text,t=(0,i.Z)(e,u),d=(0,o.Z)().palette.info.contrastText,x=(0,c.$G)().t,f=n||x("COMMON.NO_DATA");return(0,l.jsx)(a.Z,(0,r.Z)((0,r.Z)({display:"flex",justifyContent:"center"},t),{},{sx:(0,r.Z)({width:"100%"},t.sx),children:(0,l.jsx)(s.Z,{noWrap:!0,color:d,fontSize:{sm:18,xs:16},children:f})}))}},8556:function(e,n,t){t(2791);var r=t(1134),i=t(7071),a=t(4925),o=t(184);n.Z=function(e){var n=e.name,t=e.label,s=e.rules,c=void 0===s?{}:s,l=e.render,u=(0,r.Gc)(),d=u.control,x=u.formState.errors;return(0,o.jsx)(r.Qr,{control:d,name:n,rules:c,render:function(e){var r,s=e.field,c=e.fieldState;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z,{sx:{marginBottom:2},children:t}),l({field:s,fieldState:c}),x[n]&&(0,o.jsx)(i.Z,{error:!0,children:null===(r=c.error)||void 0===r?void 0:r.message})]})}})}},7497:function(e,n,t){t.d(n,{Z:function(){return h}});var r,i=t(1413),a=t(5987),o=(t(2791),t(1134)),s=t(7071),c=t(8870),l=t(3967),u=t(168),d=t(225),x=t(3006),f=(0,d.Z)(x.Z)(r||(r=(0,u.Z)(["\n  &.MuiInputBase-input {\n    border-color: ",";\n    color: ",";\n  },\n  &.MuiOutlinedInput-root {\n    &.Mui-error {\n      & .MuiOutlinedInput-notchedOutline: {\n        border-color: ",",\n      }\n    }\n    border-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.error.main}),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.error.main})),m=t(184),Z=["name","rules"],h=function(e){var n=e.name,t=e.rules,r=void 0===t?{}:t,u=(0,a.Z)(e,Z),d=(0,l.Z)(),x=(0,o.Gc)(),h=x.control,j=x.formState.errors;return(0,m.jsx)(o.Qr,{control:h,name:n,rules:r,render:function(e){var t=e.field,r=e.fieldState.error;return(0,m.jsxs)(c.Z,{position:"relative",children:[(0,m.jsx)(f,(0,i.Z)((0,i.Z)((0,i.Z)({fullWidth:!0},t),u),{},{theme:d,error:!!j[n]})),j[n]&&(0,m.jsx)(s.Z,{sx:{position:"absolute"},error:!0,children:null===r||void 0===r?void 0:r.message})]})}})}},1890:function(e,n,t){var r=t(1413),i=t(5987),a=(t(2791),t(1134)),o=t(7198),s=t(7071),c=t(8870),l=t(4925),u=t(184),d=["name","label","rules","children"];n.Z=function(e){var n=e.name,t=e.label,x=e.rules,f=void 0===x?{}:x,m=e.children,Z=(0,i.Z)(e,d),h=(0,a.Gc)(),j=h.control,p=h.formState.errors;return(0,u.jsx)(a.Qr,{control:j,name:n,rules:f,render:function(e){var i=e.field,a=e.fieldState.error;return(0,u.jsxs)(c.Z,{position:"relative",children:[(0,u.jsx)(l.Z,{children:t}),(0,u.jsx)(o.Z,(0,r.Z)((0,r.Z)((0,r.Z)({fullWidth:!0,variant:"outlined",error:!!p[n]},i),Z),{},{children:m})),p[n]&&(0,u.jsx)(s.Z,{sx:{position:"absolute"},error:!0,children:null===a||void 0===a?void 0:a.message})]})}})}},2581:function(e,n,t){t(2791);var r=t(8870),i=t(3967),a=t(6581),o=t(184);n.Z=function(e){var n=e.id,t=e.selected,s=e.icon,c=e.size,l=void 0===c?64:c,u=e.disabled,d=e.readonly,x=e.onClick,f=(0,i.Z)().palette,m=f.primary,Z=m.main,h=m.contrastText,j=f.action;return(0,o.jsx)(r.Z,{display:"flex",flexDirection:"column",alignItems:"center",width:l+20,children:(0,o.jsx)(r.Z,{onClick:function(e){return function(){d||x&&x({id:e})}}(n),sx:{backgroundColor:u?j.disabled:t===n?Z:"transparent",border:u?"none":"1px solid ".concat(Z),color:t===n?h:Z,height:l,width:l,borderRadius:"50%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:u||d?"default":"pointer"},children:(0,o.jsx)(a.Z,{name:s})})})}},4372:function(e,n,t){var r=t(1413),i=t(5987),a=(t(2791),t(7047)),o=t(1889),s=t(184),c=["type"];n.Z=function(e){var n=e.type,t=(0,i.Z)(e,c),l="form"===n,u=function(){switch(n){case"list":default:return{firstBar:40,secondBar:40,thirdBar:40};case"form":return{firstBar:56,secondBar:56,thirdBar:56};case"summary":return{firstBar:30,secondBar:60,thirdBar:120};case"circular":return{firstBar:64,secondBar:64,thirdBar:64}}};return"circular"===n?(0,s.jsxs)(o.ZP,{container:!0,columnGap:4,rowGap:4,children:[(0,s.jsx)(o.ZP,{item:!0,width:100,display:"flex",justifyContent:"center",children:(0,s.jsx)(a.Z,(0,r.Z)((0,r.Z)({},t),{},{variant:"circular",height:u().firstBar,width:u().firstBar}))}),(0,s.jsx)(o.ZP,{item:!0,width:100,display:"flex",justifyContent:"center",children:(0,s.jsx)(a.Z,(0,r.Z)((0,r.Z)({},t),{},{variant:"circular",height:u().secondBar,width:u().secondBar}))}),(0,s.jsx)(o.ZP,{item:!0,width:100,display:"flex",justifyContent:"center",children:(0,s.jsx)(a.Z,(0,r.Z)((0,r.Z)({},t),{},{variant:"circular",height:u().thirdBar,width:u().firstBar}))})]}):(0,s.jsxs)(o.ZP,{container:!0,justifyContent:"center",rowGap:l?5:2,children:[(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsx)(a.Z,(0,r.Z)((0,r.Z)({},t),{},{variant:"rounded",height:u().firstBar}))}),(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsx)(a.Z,(0,r.Z)((0,r.Z)({},t),{},{variant:"rounded",animation:"wave",height:u().secondBar}))}),(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsx)(a.Z,(0,r.Z)((0,r.Z)({},t),{},{variant:"rounded",height:u().thirdBar}))})]})}},7034:function(e,n,t){var r=t(1413),i=t(5987),a=(t(2791),t(9658)),o=t(3543),s=t(184),c=["open","text","type","onClose"];n.Z=function(e){var n=e.open,t=void 0!==n&&n,l=e.text,u=e.type,d=e.onClose,x=(0,i.Z)(e,c);return(0,s.jsx)(o.Z,(0,r.Z)((0,r.Z)({open:t,autoHideDuration:5e3,onClose:function(){d()}},x),{},{children:(0,s.jsx)(a.Z,{severity:u,children:l})}))}}}]);
//# sourceMappingURL=75.3ab9d512.chunk.js.map