"use strict";(self.webpackChunkbudget_management=self.webpackChunkbudget_management||[]).push([[291],{1291:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var i=t(2791),r=t(7689),o=t(5980),a=t(2385),l=t(1413),c=t(9439),s=t(9276),u=t(1889),d=t(4102),x=t(8112),f=t(7931),Z=t(5814),m=t(4372),h=t(5900),p=t(8692),j=t(7195),v=t(184),C=function(){var e=o.G7,n=(0,x.TL)(),t=(0,x.CG)(f.uY),C=t.categories,g=t.status,y=(0,r.s0)(),B=(0,d.$G)().t,E=i.useState(String(a.a9.expense)),k=(0,c.Z)(E,2),T=k[0],b=k[1],w={id:"",name:"New category",nameKey:"CATEGORIES.NEW_CATEGORY",icon:a.Tu.plus,type:Number(T)};i.useEffect((function(){"idle"!==g&&"failed"!==g||n((0,f.CP)())}),[n,g]);var G=function(e){var n=e.id,t=e.name;y("".concat(o.Z6.categories.path,"/view/").concat(t),{state:{id:n}})},S=function(){y("".concat(o.Z6.categories.path,"/new"),{state:{categoryType:T}})},O=function(e){return(0,l.Z)((0,l.Z)({},e),{},{name:e.nameKey?B(e.nameKey):e.name})};return(0,v.jsxs)(s.Z,{flexGrow:1,children:[(0,v.jsx)(h.Z,{text:B("CATEGORIES.PAGE_TITLE")}),(0,v.jsx)(Z.Z,{centered:!0,defaultValue:T,tabs:e,onChange:function(e,n){b(n)},sx:{marginBottom:3}}),"loading"===g||"succeeded"!==g?(0,v.jsx)(m.Z,{type:"circular",sx:{marginTop:1}}):null!==C&&void 0!==C&&C.length?(0,v.jsxs)(u.ZP,{container:!0,columnGap:4,rowGap:4,sx:{marginTop:4},children:[C.filter((function(e){var n=e.type;return String(n)===T})).map((function(e){return(0,v.jsx)(u.ZP,{item:!0,children:(0,v.jsx)(p.Z,{data:O(e),onItemClick:G})},e.id)})),(0,v.jsx)(u.ZP,{item:!0,children:(0,v.jsx)(p.Z,{data:O(w),onItemClick:S})})]}):(0,v.jsx)(j.Z,{text:B("CATEGORIES.EMPTY_TEXT")})]})},g=t(1134),y=t(8870),B=t(890),E=t(7071),k=t(3967),T=t(7233),b=t(1634),w=t(7497),G=t(7034),S=t(2581),O=t(3137),I=t(9525),P=function(e){var n=e.mode,t=o.G7,s=o.Qr,Z=(0,r.s0)(),p=(0,r.TH)().state,C=(0,x.TL)(),P=(0,x.CG)(f.uY),A=P.status,M=P.deleteStatus,V=P.currentStatus,R=(0,x.CG)(f.Qk),D=(0,x.CG)(f.$_),N=(0,k.Z)().palette.info.contrastText,_=(0,T.VU)(),q=(0,d.$G)().t,W=i.useState(!1),z=(0,c.Z)(W,2),Y=z[0],K=z[1],L=i.useState(!1),Q=(0,c.Z)(L,2),$=Q[0],F=Q[1],H=i.useState(!1),X=(0,c.Z)(H,2),U=X[0],J=X[1],ee=i.useState(!1),ne=(0,c.Z)(ee,2),te=ne[0],ie=ne[1],re="loading"===A,oe="loading"===M,ae=null===p||void 0===p?void 0:p.id,le=null!==D&&void 0!==D&&D.nameKey?q(D.nameKey):(null===D||void 0===D?void 0:D.name)||"",ce=null===p||void 0===p?void 0:p.categoryType,se=n===a.df.create,ue=n===a.df.edit,de=n===a.df.view,xe={type:String(ce),name:""},fe=(0,g.cI)({mode:"onBlur",reValidateMode:"onBlur",defaultValues:xe}),Ze=fe.setValue,me=fe.handleSubmit,he=fe.control,pe=fe.watch,je=fe.reset,ve=Number(pe(a.Vq.type)),Ce=function(e){var n=e.id;de||Ze(a.Vq.icon,n,{shouldValidate:!0})},ge=function(e){var n=Number(e);Ze(a.Vq.type,n,{shouldValidate:!0})},ye=function(e){C(ue?(0,f.ht)([ae,e]):(0,f.k4)(e)),K(!0)},Be=i.useCallback((function(){D&&(Ze(a.Vq.type,String(D.type)),Ze(a.Vq.name,D.nameKey?q(D.nameKey):D.name),Ze(a.Vq.icon,D.icon))}),[D,Ze,q]),Ee=i.useCallback((function(){C((0,f.oG)())}),[C]),ke=i.useCallback((function(){Z("".concat(o.Z6.categories.path)),Ee()}),[Z,Ee]);i.useEffect((function(){"succeeded"===A&&Y&&(ke(),J(!1)),"failed"===A&&Y&&J(!0)}),[ke,A,Y]),i.useEffect((function(){"succeeded"===M&&$&&ke(),"failed"===M&&$&&(J(!0),ie(!1))}),[ke,M,$]),i.useEffect((function(){ae&&"idle"===V&&(ue||de)&&!$&&C((0,f.n3)(ae))}),[ae,ue,de,V,C,$]),i.useEffect((function(){Be()}),[Be]),i.useEffect((function(){return function(){Ee()}}),[Ee]);return(0,v.jsxs)(y.Z,{component:"form",display:"flex",flexDirection:"column",flexGrow:1,onSubmit:me(ye),children:[(0,v.jsx)(h.Z,{withBackButton:!0,withEditButton:de&&!!D,withDeleteButton:ue&&!!D,withCancelButton:!de&&!!D,text:se?q("CATEGORIES.NEW_CATEGORY"):D&&(ue||de)?le:"loading"!==V?q("CATEGORIES.EMPTY_TITLE"):"",onBackButtonClick:ke,onEditButtonClick:function(){ue||Z("".concat(o.Z6.categories.path,"/edit/").concat(le),{state:{id:ae}})},onDeleteButtonClick:function(){ie(!0)},onCancelButtonClick:function(){se?je(xe):Be(),ue?Z("".concat(o.Z6.categories.path,"/view/").concat(le),{state:{id:ae}}):Z(o.Z6.categories.path)}}),(0,v.jsx)(y.Z,{flexGrow:1,children:"loading"===V?(0,v.jsx)(m.Z,{type:"form"}):se||D&&ae?(0,v.jsx)(g.RV,(0,l.Z)((0,l.Z)({},fe),{},{children:(0,v.jsxs)(u.ZP,{container:!0,rowGap:5,children:[(0,v.jsx)(u.ZP,{item:!0,xs:12,children:(0,v.jsx)(w.Z,{InputProps:{readOnly:de},label:q("COMMON.NAME"),name:a.Vq.name,rules:{required:{value:!0,message:q(_.name.required.message)}}})}),(0,v.jsxs)(u.ZP,{item:!0,xs:12,children:[(0,v.jsx)(B.Z,{color:N,sx:{marginY:1},children:q("COMMON.TYPE")}),(0,v.jsx)(O.Z,{readonly:de,name:a.Vq.type,rules:{required:{value:!0,message:q(_.type.required.message)}},options:(0,T.hf)(t,q),labelColor:N,value:ve,onRadioChange:ge})]}),(0,v.jsxs)(u.ZP,{item:!0,xs:12,children:[(0,v.jsx)(B.Z,{color:N,sx:{marginY:1},children:q("COMMON.ICON")}),(0,v.jsx)(g.Qr,{control:he,name:a.Vq.icon,rules:{required:!0},render:function(e){var n=e.field,t=e.fieldState.error;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.ZP,(0,l.Z)((0,l.Z)({container:!0},n),{},{columnGap:1,rowGap:3,sx:{marginTop:2},children:s.map((function(e){var t=e.name;return(0,v.jsx)(u.ZP,{item:!0,children:(0,v.jsx)(S.Z,{selected:n.value,id:t,icon:t,size:50,readonly:de,onClick:Ce})},t)}))})),t&&(0,v.jsx)(E.Z,{error:!0,children:q(_.icon[t.type].message)})]})}})]})]})})):(0,v.jsx)(j.Z,{text:q("CATEGORIES.EMPTY_TEXT_RENDER_CONTENT")})}),!de&&(0,v.jsx)(u.ZP,{container:!0,display:"flex",justifyContent:"flex-end",rowGap:2,columnGap:2,sx:{marginTop:4},children:(0,v.jsx)(u.ZP,{item:!0,sm:"auto",xs:12,children:(0,v.jsx)(b.Z,{"aria-label":"Save category",fullWidth:!0,type:"submit",variant:"contained",loading:re,onClick:me(ye),children:q("COMMON.SAVE")})})}),(0,v.jsx)(G.Z,{type:"error",text:null!==R&&void 0!==R&&R.messageKey?q(R.messageKey):(null===R||void 0===R?void 0:R.message)||"",open:U,onClose:function(){J(!1),F(!1)}}),(0,v.jsx)(I.Z,{fullWidth:!0,maxWidth:"xs",title:q("CATEGORIES.DELETE_DIALOG_TITLE"),actionButtonText:q("COMMON.YES"),open:te,loading:oe,onClose:function(){ie(!1)},onAction:function(){C((0,f.uu)(ae)),F(!0)},children:(0,v.jsx)(B.Z,{variant:"subtitle1",children:q("CATEGORIES.DELETE_DIALOG_CONFIRM")})})]})},A=function(){return(0,v.jsxs)(r.Z5,{children:[(0,v.jsx)(r.AW,{path:"/",element:(0,v.jsx)(C,{})}),(0,v.jsx)(r.AW,{path:"/new",element:(0,v.jsx)(P,{mode:a.df.create})}),(0,v.jsx)(r.AW,{path:"/view/:id",element:(0,v.jsx)(P,{mode:a.df.view})}),(0,v.jsx)(r.AW,{path:"/edit/:id",element:(0,v.jsx)(P,{mode:a.df.edit})}),(0,v.jsx)(r.AW,{path:"*",element:(0,v.jsx)(r.Fg,{to:o.Z6.categories.path,replace:!0})})]})}},8692:function(e,n,t){var i=t(1413),r=t(5987),o=(t(2791),t(8870)),a=t(890),l=t(3967),c=t(2385),s=t(6581),u=t(184),d=["data","selected","disabled","readonly","onItemClick"];n.Z=function(e){var n=e.data,t=e.selected,x=e.disabled,f=e.readonly,Z=e.onItemClick,m=(0,r.Z)(e,d),h=(0,l.Z)().palette,p=h.primary,j=h.secondary,v=h.info,C=h.action,g=n.id,y=n.name,B=n.icon,E=n.type===c.a9.income?p.main:j.main;return(0,u.jsxs)(o.Z,{display:"flex",flexDirection:"column",alignItems:"center",width:100,children:[(0,u.jsx)(o.Z,(0,i.Z)((0,i.Z)({},m),{},{onClick:function(){f||Z&&Z(n)},sx:(0,i.Z)((0,i.Z)({},m.sx),{},{backgroundColor:x?C.disabled:t===g?E:"transparent",border:x?"none":"1px solid ".concat(E),color:t===g?p.contrastText:E,height:64,width:64,borderRadius:"50%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:x||f?"default":"pointer"}),children:(0,u.jsx)(s.Z,{name:B})})),(0,u.jsx)(a.Z,{color:v.contrastText,sx:{width:"100%",textAlign:"center",marginTop:1,fontSize:13},children:y})]})}},7195:function(e,n,t){t(2791);var i=t(8870),r=t(3967),o=t(890),a=t(184);n.Z=function(e){var n=e.text,t=void 0===n?"No data is available":n,l=(0,r.Z)().palette.info.contrastText;return(0,a.jsx)(i.Z,{display:"flex",justifyContent:"center",children:(0,a.jsx)(o.Z,{noWrap:!0,color:l,fontSize:{sm:18,xs:16},children:t})})}},7497:function(e,n,t){t.d(n,{Z:function(){return h}});var i,r=t(1413),o=t(5987),a=(t(2791),t(1134)),l=t(7071),c=t(8870),s=t(3967),u=t(168),d=t(225),x=t(3006),f=(0,d.Z)(x.Z)(i||(i=(0,u.Z)(["\n  &.MuiInputBase-input {\n    border-color: ",";\n    color: ",";\n  },\n  &.MuiOutlinedInput-root {\n    &.Mui-error {\n      & .MuiOutlinedInput-notchedOutline: {\n        border-color: ",",\n      }\n    }\n    border-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.error.main}),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.error.main})),Z=t(184),m=["name","rules"],h=function(e){var n=e.name,t=e.rules,i=void 0===t?{}:t,u=(0,o.Z)(e,m),d=(0,s.Z)(),x=(0,a.Gc)(),h=x.control,p=x.formState.errors;return(0,Z.jsx)(a.Qr,{control:h,name:n,rules:i,render:function(e){var t=e.field,i=e.fieldState.error;return(0,Z.jsxs)(c.Z,{position:"relative",children:[(0,Z.jsx)(f,(0,r.Z)((0,r.Z)((0,r.Z)({fullWidth:!0},t),u),{},{theme:d,error:!!p[n]})),p[n]&&(0,Z.jsx)(l.Z,{sx:{position:"absolute"},error:!0,children:null===i||void 0===i?void 0:i.message})]})}})}},3137:function(e,n,t){var i=t(1413),r=t(5987),o=(t(2791),t(1134)),a=t(765),l=t(1419),c=t(7071),s=t(8870),u=t(5523),d=t(890),x=t(184),f=["name","options","labelColor","rules","disabled","readonly","onRadioChange"];n.Z=function(e){var n=e.name,t=e.options,Z=e.labelColor,m=e.rules,h=void 0===m?{}:m,p=e.disabled,j=e.readonly,v=e.onRadioChange,C=(0,r.Z)(e,f),g=(0,o.Gc)(),y=g.control,B=g.formState.errors,E=function(e){j&&e.preventDefault()},k=function(e){if(!j&&!p&&v){var n=e.target.value;v(n)}};return(0,x.jsx)(o.Qr,{control:y,name:n,rules:h,render:function(e){var r=e.field,o=e.fieldState.error;return(0,x.jsxs)(s.Z,{position:"relative",children:[(0,x.jsx)(a.Z,(0,i.Z)((0,i.Z)((0,i.Z)({row:!0},C),r),{},{value:r.value,onClick:E,children:t.map((function(e){var n=e.label,t=e.value;return(0,x.jsx)(u.Z,{value:t,label:(0,x.jsx)(d.Z,{color:Z,children:n}),control:(0,x.jsx)(l.Z,{disabled:p,checked:r.value===t,onChange:k,value:t})},t)}))})),B[n]&&(0,x.jsx)(c.Z,{sx:{position:"absolute"},error:!0,children:null===o||void 0===o?void 0:o.message})]})}})}},6581:function(e,n,t){var i=t(1413),r=t(5987),o=(t(2791),t(5980)),a=t(2385),l=t(184),c=["name","fontSize"];n.Z=function(e){var n=e.name,t=void 0===n?a.Tu.default:n,s=e.fontSize,u=void 0===s?"large":s,d=(0,r.Z)(e,c),x=o.QI[t];return(0,l.jsx)(x,(0,i.Z)((0,i.Z)({},d),{},{fontSize:u,sx:(0,i.Z)({},d.sx)}))}},2581:function(e,n,t){t(2791);var i=t(8870),r=t(3967),o=t(6581),a=t(184);n.Z=function(e){var n=e.id,t=e.selected,l=e.icon,c=e.size,s=void 0===c?64:c,u=e.disabled,d=e.readonly,x=e.onClick,f=(0,r.Z)().palette,Z=f.primary,m=Z.main,h=Z.contrastText,p=f.action;return(0,a.jsx)(i.Z,{display:"flex",flexDirection:"column",alignItems:"center",width:s+20,children:(0,a.jsx)(i.Z,{onClick:function(e){return function(){d||x&&x({id:e})}}(n),sx:{backgroundColor:u?p.disabled:t===n?m:"transparent",border:u?"none":"1px solid ".concat(m),color:t===n?h:m,height:s,width:s,borderRadius:"50%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:u||d?"default":"pointer"},children:(0,a.jsx)(o.Z,{name:l})})})}},5900:function(e,n,t){t.d(n,{Z:function(){return j}});var i=t(1413),r=t(5987),o=(t(2791),t(890)),a=t(8870),l=t(3967),c=t(6459),s=t(3400),u=t(2385),d=t(6581),x=t(184),f=function(e){var n=Object.assign({},((0,c.Z)(e),e));return(0,x.jsx)(s.Z,(0,i.Z)((0,i.Z)({},n),{},{color:"primary",size:"small",sx:(0,i.Z)({},n.sx),onClick:n.onClick,children:(0,x.jsx)(d.Z,{name:u.Tu.arrowBack})}))},Z=function(e){var n=Object.assign({},((0,c.Z)(e),e));return(0,x.jsx)(s.Z,(0,i.Z)((0,i.Z)({},n),{},{color:"primary",size:"small",sx:(0,i.Z)({},n.sx),onClick:n.onClick,children:(0,x.jsx)(d.Z,{name:u.Tu.edit})}))},m=function(e){var n=Object.assign({},((0,c.Z)(e),e));return(0,x.jsx)(s.Z,(0,i.Z)((0,i.Z)({},n),{},{color:"secondary",size:"small",sx:(0,i.Z)({},n.sx),onClick:n.onClick,children:(0,x.jsx)(d.Z,{name:u.Tu.delete})}))},h=function(e){var n=Object.assign({},((0,c.Z)(e),e));return(0,x.jsx)(s.Z,(0,i.Z)((0,i.Z)({},n),{},{color:"secondary",size:"small",sx:(0,i.Z)({},n.sx),onClick:n.onClick,children:(0,x.jsx)(d.Z,{name:u.Tu.cancel})}))},p=["text","withBackButton","withEditButton","withDeleteButton","withCancelButton","onBackButtonClick","onEditButtonClick","onDeleteButtonClick","onCancelButtonClick"],j=function(e){var n=e.text,t=e.withBackButton,c=void 0!==t&&t,s=e.withEditButton,u=void 0!==s&&s,d=e.withDeleteButton,j=void 0!==d&&d,v=e.withCancelButton,C=void 0!==v&&v,g=e.onBackButtonClick,y=e.onEditButtonClick,B=e.onDeleteButtonClick,E=e.onCancelButtonClick,k=(0,r.Z)(e,p),T=(0,l.Z)().palette.info.contrastText;return(0,x.jsxs)(a.Z,(0,i.Z)((0,i.Z)({display:"flex",alignItems:"center"},k),{},{sx:(0,i.Z)((0,i.Z)({},k.sx),{},{marginTop:2,marginBottom:5}),children:[c&&(0,x.jsx)(f,{onClick:function(){g&&g()}}),(0,x.jsx)(o.Z,{color:T,sx:{width:"100%",textAlign:"center",fontSize:{sm:22,xs:18},fontWeight:"bold"},children:n}),u&&(0,x.jsx)(Z,{onClick:function(){y&&y()}}),j&&(0,x.jsx)(m,{onClick:function(){B&&B()}}),C&&(0,x.jsx)(h,{onClick:function(){E&&E()}})]}))}},4372:function(e,n,t){var i=t(1413),r=t(5987),o=(t(2791),t(7047)),a=t(1889),l=t(184),c=["type"];n.Z=function(e){var n=e.type,t=(0,r.Z)(e,c),s="form"===n,u=function(){switch(n){case"list":default:return{firstBar:40,secondBar:40,thirdBar:40};case"form":return{firstBar:56,secondBar:56,thirdBar:56};case"summary":return{firstBar:30,secondBar:60,thirdBar:120};case"circular":return{firstBar:64,secondBar:64,thirdBar:64}}};return"circular"===n?(0,l.jsxs)(a.ZP,{container:!0,columnGap:4,children:[(0,l.jsx)(a.ZP,{item:!0,width:100,display:"flex",justifyContent:"center",children:(0,l.jsx)(o.Z,(0,i.Z)((0,i.Z)({},t),{},{variant:"circular",height:u().firstBar,width:u().firstBar}))}),(0,l.jsx)(a.ZP,{item:!0,width:100,display:"flex",justifyContent:"center",children:(0,l.jsx)(o.Z,(0,i.Z)((0,i.Z)({},t),{},{variant:"circular",height:u().secondBar,width:u().secondBar}))}),(0,l.jsx)(a.ZP,{item:!0,width:100,display:"flex",justifyContent:"center",children:(0,l.jsx)(o.Z,(0,i.Z)((0,i.Z)({},t),{},{variant:"circular",height:u().thirdBar,width:u().firstBar}))})]}):(0,l.jsxs)(a.ZP,{container:!0,justifyContent:"center",rowGap:s?5:2,children:[(0,l.jsx)(a.ZP,{item:!0,xs:12,children:(0,l.jsx)(o.Z,(0,i.Z)((0,i.Z)({},t),{},{variant:"rounded",height:u().firstBar}))}),(0,l.jsx)(a.ZP,{item:!0,xs:12,children:(0,l.jsx)(o.Z,(0,i.Z)((0,i.Z)({},t),{},{variant:"rounded",animation:"wave",height:u().secondBar}))}),(0,l.jsx)(a.ZP,{item:!0,xs:12,children:(0,l.jsx)(o.Z,(0,i.Z)((0,i.Z)({},t),{},{variant:"rounded",height:u().thirdBar}))})]})}},7034:function(e,n,t){var i=t(1413),r=t(5987),o=(t(2791),t(9658)),a=t(3543),l=t(184),c=["open","text","type","onClose"];n.Z=function(e){var n=e.open,t=void 0!==n&&n,s=e.text,u=e.type,d=e.onClose,x=(0,r.Z)(e,c);return(0,l.jsx)(a.Z,(0,i.Z)((0,i.Z)({open:t,autoHideDuration:5e3,onClose:function(){d()}},x),{},{children:(0,l.jsx)(o.Z,{severity:u,children:s})}))}},5814:function(e,n,t){t.d(n,{Z:function(){return Z}});var i=t(1413),r=t(9439),o=t(5987),a=t(2791),l=t(3896),c=t(4102),s=t(225),u=t(5228),d=(0,s.Z)(u.Z)({"&.MuiTabs-root":{}}),x=t(184),f=["tabs","defaultValue","onChange"],Z=function(e){var n=e.tabs,t=e.defaultValue,s=void 0===t?"0":t,u=e.onChange,Z=(0,o.Z)(e,f),m=(0,c.$G)().t,h=a.useState(s),p=(0,r.Z)(h,2),j=p[0],v=p[1];return(0,x.jsx)(d,(0,i.Z)((0,i.Z)({},Z),{},{value:j,onChange:function(e,n){v(n),u(e,n)},children:n.map((function(e){var n=e.value,t=e.label;return(0,x.jsx)(l.Z,{value:n,label:m(t)},n)}))}))}}}]);
//# sourceMappingURL=291.d50c8862.chunk.js.map