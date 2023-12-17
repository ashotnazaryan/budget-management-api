"use strict";(self.webpackChunkbudget_management=self.webpackChunkbudget_management||[]).push([[646],{9658:function(n,t,e){e.d(t,{Z:function(){return P}});var o=e(4942),r=e(3366),i=e(7462),a=e(2791),s=e(8182),l=e(4419),c=e(2065),u=e(6934),d=e(1402),v=e(4036),f=e(5527),h=e(5878),p=e(1217);function m(n){return(0,p.Z)("MuiAlert",n)}var g=(0,h.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Z=e(3400),C=e(9201),w=e(184),b=(0,C.Z)((0,w.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),x=(0,C.Z)((0,w.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),k=(0,C.Z)((0,w.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),S=(0,C.Z)((0,w.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),y=(0,C.Z)((0,w.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),M=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],E=(0,u.ZP)(f.Z,{name:"MuiAlert",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],t["".concat(e.variant).concat((0,v.Z)(e.color||e.severity))]]}})((function(n){var t=n.theme,e=n.ownerState,r="light"===t.palette.mode?c._j:c.$n,a="light"===t.palette.mode?c.$n:c._j,s=e.color||e.severity;return(0,i.Z)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},s&&"standard"===e.variant&&(0,o.Z)({color:t.vars?t.vars.palette.Alert["".concat(s,"Color")]:r(t.palette[s].light,.6),backgroundColor:t.vars?t.vars.palette.Alert["".concat(s,"StandardBg")]:a(t.palette[s].light,.9)},"& .".concat(g.icon),t.vars?{color:t.vars.palette.Alert["".concat(s,"IconColor")]}:{color:t.palette[s].main}),s&&"outlined"===e.variant&&(0,o.Z)({color:t.vars?t.vars.palette.Alert["".concat(s,"Color")]:r(t.palette[s].light,.6),border:"1px solid ".concat((t.vars||t).palette[s].light)},"& .".concat(g.icon),t.vars?{color:t.vars.palette.Alert["".concat(s,"IconColor")]}:{color:t.palette[s].main}),s&&"filled"===e.variant&&(0,i.Z)({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert["".concat(s,"FilledColor")],backgroundColor:t.vars.palette.Alert["".concat(s,"FilledBg")]}:{backgroundColor:"dark"===t.palette.mode?t.palette[s].dark:t.palette[s].main,color:t.palette.getContrastText(t.palette[s].main)}))})),L=(0,u.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(n,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),R=(0,u.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(n,t){return t.message}})({padding:"8px 0",minWidth:0,overflow:"auto"}),A=(0,u.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(n,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),j={success:(0,w.jsx)(b,{fontSize:"inherit"}),warning:(0,w.jsx)(x,{fontSize:"inherit"}),error:(0,w.jsx)(k,{fontSize:"inherit"}),info:(0,w.jsx)(S,{fontSize:"inherit"})},P=a.forwardRef((function(n,t){var e,o,a,c,u,f,h=(0,d.Z)({props:n,name:"MuiAlert"}),p=h.action,g=h.children,C=h.className,b=h.closeText,x=void 0===b?"Close":b,k=h.color,S=h.components,P=void 0===S?{}:S,z=h.componentsProps,O=void 0===z?{}:z,T=h.icon,B=h.iconMapping,N=void 0===B?j:B,I=h.onClose,W=h.role,F=void 0===W?"alert":W,H=h.severity,D=void 0===H?"success":H,X=h.slotProps,_=void 0===X?{}:X,V=h.slots,q=void 0===V?{}:V,G=h.variant,$=void 0===G?"standard":G,K=(0,r.Z)(h,M),Y=(0,i.Z)({},h,{color:k,severity:D,variant:$}),J=function(n){var t=n.variant,e=n.color,o=n.severity,r=n.classes,i={root:["root","".concat(t).concat((0,v.Z)(e||o)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return(0,l.Z)(i,m,r)}(Y),Q=null!=(e=null!=(o=q.closeButton)?o:P.CloseButton)?e:Z.Z,U=null!=(a=null!=(c=q.closeIcon)?c:P.CloseIcon)?a:y,nn=null!=(u=_.closeButton)?u:O.closeButton,tn=null!=(f=_.closeIcon)?f:O.closeIcon;return(0,w.jsxs)(E,(0,i.Z)({role:F,elevation:0,ownerState:Y,className:(0,s.Z)(J.root,C),ref:t},K,{children:[!1!==T?(0,w.jsx)(L,{ownerState:Y,className:J.icon,children:T||N[D]||j[D]}):null,(0,w.jsx)(R,{ownerState:Y,className:J.message,children:g}),null!=p?(0,w.jsx)(A,{ownerState:Y,className:J.action,children:p}):null,null==p&&I?(0,w.jsx)(A,{ownerState:Y,className:J.action,children:(0,w.jsx)(Q,(0,i.Z)({size:"small","aria-label":x,title:x,color:"inherit",onClick:I},nn,{children:(0,w.jsx)(U,(0,i.Z)({fontSize:"small"},tn))}))}):null]}))}))},7047:function(n,t,e){e.d(t,{Z:function(){return j}});var o=e(168),r=e(3366),i=e(7462),a=e(2791),s=e(8182),l=e(2554),c=e(4419);function u(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function d(n){return parseFloat(n)}var v=e(2065),f=e(6934),h=e(1402),p=e(5878),m=e(1217);function g(n){return(0,m.Z)("MuiSkeleton",n)}(0,p.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var Z,C,w,b,x,k,S,y,M=e(184),E=["animation","className","component","height","style","variant","width"],L=(0,l.F4)(x||(x=Z||(Z=(0,o.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),R=(0,l.F4)(k||(k=C||(C=(0,o.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),A=(0,f.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((function(n){var t=n.theme,e=n.ownerState,o=u(t.shape.borderRadius)||"px",r=d(t.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,v.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(r).concat(o,"/").concat(Math.round(r/.6*10)/10).concat(o),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,l.iv)(S||(S=w||(w=(0,o.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),L)}),(function(n){var t=n.ownerState,e=n.theme;return"wave"===t.animation&&(0,l.iv)(y||(y=b||(b=(0,o.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),R,(e.vars||e).palette.action.hover)})),j=a.forwardRef((function(n,t){var e=(0,h.Z)({props:n,name:"MuiSkeleton"}),o=e.animation,a=void 0===o?"pulse":o,l=e.className,u=e.component,d=void 0===u?"span":u,v=e.height,f=e.style,p=e.variant,m=void 0===p?"text":p,Z=e.width,C=(0,r.Z)(e,E),w=(0,i.Z)({},e,{animation:a,component:d,variant:m,hasChildren:Boolean(C.children)}),b=function(n){var t=n.classes,e=n.variant,o=n.animation,r=n.hasChildren,i=n.width,a=n.height,s={root:["root",e,o,r&&"withChildren",r&&!i&&"fitContent",r&&!a&&"heightAuto"]};return(0,c.Z)(s,g,t)}(w);return(0,M.jsx)(A,(0,i.Z)({as:d,ref:t,className:(0,s.Z)(b.root,l),ownerState:w},C,{style:(0,i.Z)({width:Z,height:v},f)}))}))},3543:function(n,t,e){e.d(t,{Z:function(){return I}});var o=e(9439),r=e(4942),i=e(3366),a=e(7462),s=e(2791),l=e(4419),c=e(9732),u=e(7563),d=e(8956),v=e(9723),f=e(184);function h(n){return n.substring(2).toLowerCase()}var p=function(n){var t=n.children,e=n.disableReactTree,o=void 0!==e&&e,r=n.mouseEvent,i=void 0===r?"onClick":r,a=n.onClickAway,l=n.touchEvent,c=void 0===l?"onTouchEnd":l,p=s.useRef(!1),m=s.useRef(null),g=s.useRef(!1),Z=s.useRef(!1);s.useEffect((function(){return setTimeout((function(){g.current=!0}),0),function(){g.current=!1}}),[]);var C=(0,u.Z)(t.ref,m),w=(0,d.Z)((function(n){var t=Z.current;Z.current=!1;var e=(0,v.Z)(m.current);!g.current||!m.current||"clientX"in n&&function(n,t){return t.documentElement.clientWidth<n.clientX||t.documentElement.clientHeight<n.clientY}(n,e)||(p.current?p.current=!1:(n.composedPath?n.composedPath().indexOf(m.current)>-1:!e.documentElement.contains(n.target)||m.current.contains(n.target))||!o&&t||a(n))})),b=function(n){return function(e){Z.current=!0;var o=t.props[n];o&&o(e)}},x={ref:C};return!1!==c&&(x[c]=b(c)),s.useEffect((function(){if(!1!==c){var n=h(c),t=(0,v.Z)(m.current),e=function(){p.current=!0};return t.addEventListener(n,w),t.addEventListener("touchmove",e),function(){t.removeEventListener(n,w),t.removeEventListener("touchmove",e)}}}),[w,c]),!1!==i&&(x[i]=b(i)),s.useEffect((function(){if(!1!==i){var n=h(i),t=(0,v.Z)(m.current);return t.addEventListener(n,w),function(){t.removeEventListener(n,w)}}}),[w,i]),(0,f.jsx)(s.Fragment,{children:s.cloneElement(t,x)})},m=e(2086);var g=e(6934),Z=e(3967),C=e(1402),w=e(4036),b=e(3208),x=e(8182),k=e(2065),S=e(5527),y=e(5878),M=e(1217);function E(n){return(0,M.Z)("MuiSnackbarContent",n)}(0,y.Z)("MuiSnackbarContent",["root","message","action"]);var L=["action","className","message","role"],R=(0,g.ZP)(S.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:function(n,t){return t.root}})((function(n){var t=n.theme,e="light"===t.palette.mode?.8:.98,o=(0,k._4)(t.palette.background.default,e);return(0,a.Z)({},t.typography.body2,(0,r.Z)({color:t.vars?t.vars.palette.SnackbarContent.color:t.palette.getContrastText(o),backgroundColor:t.vars?t.vars.palette.SnackbarContent.bg:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,flexGrow:1},t.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288}))})),A=(0,g.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:function(n,t){return t.message}})({padding:"8px 0"}),j=(0,g.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:function(n,t){return t.action}})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),P=s.forwardRef((function(n,t){var e=(0,C.Z)({props:n,name:"MuiSnackbarContent"}),o=e.action,r=e.className,s=e.message,c=e.role,u=void 0===c?"alert":c,d=(0,i.Z)(e,L),v=e,h=function(n){var t=n.classes;return(0,l.Z)({root:["root"],action:["action"],message:["message"]},E,t)}(v);return(0,f.jsxs)(R,(0,a.Z)({role:u,square:!0,elevation:6,className:(0,x.Z)(h.root,r),ownerState:v,ref:t},d,{children:[(0,f.jsx)(A,{className:h.message,ownerState:v,children:s}),o?(0,f.jsx)(j,{className:h.action,ownerState:v,children:o}):null]}))}));function z(n){return(0,M.Z)("MuiSnackbar",n)}(0,y.Z)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);var O=["onEnter","onExited"],T=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],B=(0,g.ZP)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t["anchorOrigin".concat((0,w.Z)(e.anchorOrigin.vertical)).concat((0,w.Z)(e.anchorOrigin.horizontal))]]}})((function(n){var t=n.theme,e=n.ownerState;return(0,a.Z)({zIndex:(t.vars||t).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===e.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===e.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===e.anchorOrigin.horizontal&&{justifyContent:"flex-end"},(0,r.Z)({},t.breakpoints.up("sm"),(0,a.Z)({},"top"===e.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===e.anchorOrigin.horizontal&&{left:"50%",right:"auto",transform:"translateX(-50%)"},"left"===e.anchorOrigin.horizontal&&{left:24,right:"auto"},"right"===e.anchorOrigin.horizontal&&{right:24,left:"auto"})))})),N=s.forwardRef((function(n,t){var e=(0,C.Z)({props:n,name:"MuiSnackbar"}),r=(0,Z.Z)(),u={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},v=e.action,h=e.anchorOrigin,g=void 0===h?{vertical:"bottom",horizontal:"left"}:h,x=g.vertical,k=g.horizontal,S=e.autoHideDuration,y=void 0===S?null:S,M=e.children,E=e.className,L=e.ClickAwayListenerProps,R=e.ContentProps,A=e.disableWindowBlurListener,j=void 0!==A&&A,N=e.message,I=e.open,W=e.TransitionComponent,F=void 0===W?b.Z:W,H=e.transitionDuration,D=void 0===H?u:H,X=e.TransitionProps,_=void 0===X?{}:X,V=_.onEnter,q=_.onExited,G=(0,i.Z)(e.TransitionProps,O),$=(0,i.Z)(e,T),K=(0,a.Z)({},e,{anchorOrigin:{vertical:x,horizontal:k},autoHideDuration:y,disableWindowBlurListener:j,TransitionComponent:F,transitionDuration:D}),Y=function(n){var t=n.classes,e=n.anchorOrigin,o={root:["root","anchorOrigin".concat((0,w.Z)(e.vertical)).concat((0,w.Z)(e.horizontal))]};return(0,l.Z)(o,z,t)}(K),J=function(n){var t=n.autoHideDuration,e=void 0===t?null:t,o=n.disableWindowBlurListener,r=void 0!==o&&o,i=n.onClose,l=n.open,c=n.resumeHideDuration,u=s.useRef();s.useEffect((function(){if(l)return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)};function n(n){n.defaultPrevented||"Escape"!==n.key&&"Esc"!==n.key||null==i||i(n,"escapeKeyDown")}}),[l,i]);var v=(0,d.Z)((function(n,t){null==i||i(n,t)})),f=(0,d.Z)((function(n){i&&null!=n&&(clearTimeout(u.current),u.current=setTimeout((function(){v(null,"timeout")}),n))}));s.useEffect((function(){return l&&f(e),function(){clearTimeout(u.current)}}),[l,e,f]);var h=function(){clearTimeout(u.current)},p=s.useCallback((function(){null!=e&&f(null!=c?c:.5*e)}),[e,c,f]),g=function(n){return function(t){var e=n.onBlur;null==e||e(t),p()}},Z=function(n){return function(t){var e=n.onFocus;null==e||e(t),h()}},C=function(n){return function(t){var e=n.onMouseEnter;null==e||e(t),h()}},w=function(n){return function(t){var e=n.onMouseLeave;null==e||e(t),p()}};return s.useEffect((function(){if(!r&&l)return window.addEventListener("focus",p),window.addEventListener("blur",h),function(){window.removeEventListener("focus",p),window.removeEventListener("blur",h)}}),[r,p,l]),{getRootProps:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,m.Z)(n),o=(0,a.Z)({},e,t);return(0,a.Z)({role:"presentation"},o,{onBlur:g(o),onFocus:Z(o),onMouseEnter:C(o),onMouseLeave:w(o)})},onClickAway:function(n){null==i||i(n,"clickaway")}}}((0,a.Z)({},K)),Q=J.getRootProps,U=J.onClickAway,nn=s.useState(!0),tn=(0,o.Z)(nn,2),en=tn[0],on=tn[1],rn=(0,c.Z)({elementType:B,getSlotProps:Q,externalForwardedProps:$,ownerState:K,additionalProps:{ref:t},className:[Y.root,E]});return!I&&en?null:(0,f.jsx)(p,(0,a.Z)({onClickAway:U},L,{children:(0,f.jsx)(B,(0,a.Z)({},rn,{children:(0,f.jsx)(F,(0,a.Z)({appear:!0,in:I,timeout:D,direction:"top"===x?"down":"up",onEnter:function(n,t){on(!1),V&&V(n,t)},onExited:function(n){on(!0),q&&q(n)}},G,{children:M||(0,f.jsx)(P,(0,a.Z)({message:N,action:v},R))}))}))}))})),I=N}}]);
//# sourceMappingURL=646.a0cab2be.chunk.js.map