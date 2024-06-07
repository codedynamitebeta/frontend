(self.webpackChunkfrontend_app=self.webpackChunkfrontend_app||[]).push([[1965],{32501:(e,n,t)=>{"use strict";t.d(n,{Y:()=>x});var o=t(87462),r=t(63366),a=t(47313),i=t(22090),l=t(62756),s=t(71577),d=t(28334),c=t(35422),u=t(34816),p=t(17908),f=t(89116);function g(e){return"number"===typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}const m=["ArrowUp","ArrowDown","PageUp","PageDown"],v=[...m,"Home","End"];function h(e){return String(e?e.trim():e)}function Z(e){const{min:n,max:t,step:r,shiftMultiplier:i=10,defaultValue:Z,disabled:b=!1,error:S=!1,onBlur:I,onInputChange:P,onFocus:y,onChange:x,required:w=!1,readOnly:C=!1,value:M,inputRef:N,inputId:B}=e,D=(0,p.N)(),{current:E}=a.useRef(null!=M),k=a.useCallback((e=>{0}),[]),z=a.useRef(null),L=(0,s.Z)(z,N,k),j=(0,d.Z)(B),[R,A]=a.useState(!1),[O,F]=(0,c.Z)({controlled:M,default:Z,name:"NumberInput"}),[_,T]=a.useState(O?String(O):void 0);a.useEffect((()=>{!D&&b&&R&&(A(!1),null==I||I())}),[D,b,R,I]);const V=()=>(e,o)=>{let a;void 0===o?(a=o,T("")):(a=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MIN_SAFE_INTEGER,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Number.MAX_SAFE_INTEGER,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:NaN;if(Number.isNaN(o))return(0,f.Z)(e,n,t);const r=o||1,a=e%r,i=Math.sign(a);return Math.abs(a)>r/2?(0,f.Z)(e+i*(r-Math.abs(a)),n,t):(0,f.Z)(e-i*Math.abs(a),n,t)}(o,n,t,r),T(String(a))),F(a),g(a)?null==x||x(e,a):null==x||x(e,void 0)},q=e=>n=>{var t,o;if(!E&&null===n.target)throw new Error((0,l.Z)(17));if(null==D||null==(t=D.onChange)||t.call(D,n),null==(o=e.onInputChange)||o.call(e,n),n.defaultMuiPrevented||n.defaultPrevented)return;const r=h(n.currentTarget.value);""!==r&&"-"!==r||(T(r),F(void 0)),r.match(/^-?\d+?$/)&&(T(r),F(parseInt(r,10)))},H=e=>n=>{var t;if(null==(t=e.onBlur)||t.call(e,n),n.defaultMuiPrevented||n.defaultPrevented)return;const o=h(n.currentTarget.value);""===o||"-"===o?V()(n,void 0):V()(n,parseInt(o,10)),D&&D.onBlur&&D.onBlur(),A(!1)},U=e=>o=>{let a;if(g(O)){const n=o.shiftKey||"PageUp"===o.key||"PageDown"===o.key?i:1;a={up:O+(null!=r?r:1)*n,down:O-(null!=r?r:1)*n}[e]}else a={up:null!=n?n:0,down:null!=t?t:0}[e];V()(o,a)},G=e=>o=>{var r;if(null==(r=e.onKeyDown)||r.call(e,o),!o.defaultMuiPrevented&&!o.defaultPrevented&&!o.defaultPrevented){if(v.includes(o.key)&&o.preventDefault(),m.includes(o.key)){const e={ArrowUp:"up",ArrowDown:"down",PageUp:"up",PageDown:"down"}[o.key];U(e)(o)}"Home"===o.key&&g(t)&&V()(o,t),"End"===o.key&&g(n)&&V()(o,n)}},W=e=>{e.preventDefault(),z.current&&z.current.focus()},K={"aria-controls":j,tabIndex:-1},$=b||!!g(O)&&O>=(null!=t?t:Number.MAX_SAFE_INTEGER),X=b||!!g(O)&&O<=(null!=n?n:Number.MIN_SAFE_INTEGER);return{disabled:b,error:S,focused:R,formControlContext:D,getInputProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var r;const a={onBlur:I,onFocus:y,onChange:P},i=(0,o.Z)({},a,(0,u._)(e,["onClick"])),l=(0,o.Z)({},i,{onFocus:(s=i,e=>{var n,t;(null==(n=s.onFocus)||n.call(s,e),e.defaultMuiPrevented||e.defaultPrevented)||(D&&D.onFocus&&(null==D||null==(t=D.onFocus)||t.call(D)),A(!0))}),onChange:q((0,o.Z)({},i,{onInputChange:i.onChange})),onBlur:H(i),onKeyDown:G(i)});var s;const d=null!=(r=R?_:O)?r:"";return delete e.onInputChange,(0,o.Z)({type:"text",id:j,"aria-invalid":S||void 0,defaultValue:void 0,value:d,"aria-valuenow":d,"aria-valuetext":String(d),"aria-valuemin":n,"aria-valuemax":t,autoComplete:"off",autoCorrect:"off",spellCheck:"false",required:w,readOnly:C,"aria-disabled":b,disabled:b},e,{ref:L},l)},getIncrementButtonProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.Z)({},e,K,{disabled:$,"aria-disabled":$,onMouseDown:W,onClick:U("up")})},getDecrementButtonProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.Z)({},e,K,{disabled:X,"aria-disabled":X,onMouseDown:W,onClick:U("down")})},getRootProps:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,u._)(e,["onBlur","onInputChange","onFocus","onChange"]),r=(0,o.Z)({},t,(0,u._)(n));return(0,o.Z)({},n,r,{onClick:(a=r,e=>{var n;null==(n=a.onClick)||n.call(a,e),e.defaultMuiPrevented||e.defaultPrevented||z.current&&e.currentTarget===e.target&&z.current.focus()})});var a},required:w,value:R?_:O,isIncrementDisabled:$,isDecrementDisabled:X,inputValue:_}}var b=t(21921),S=t(65344),I=t(694),P=t(46417);const y=["className","defaultValue","disabled","endAdornment","error","id","max","min","onBlur","onInputChange","onFocus","onChange","placeholder","required","readOnly","shiftMultiplier","startAdornment","step","value","slotProps","slots"],x=a.forwardRef((function(e,n){var t,a,l,s;const{className:d,defaultValue:c,disabled:u,endAdornment:p,error:f,id:g,max:m,min:v,onBlur:h,onInputChange:x,onFocus:w,onChange:C,placeholder:M,required:N,readOnly:B=!1,shiftMultiplier:D,startAdornment:E,step:k,value:z,slotProps:L={},slots:j={}}=e,R=(0,r.Z)(e,y),{getRootProps:A,getInputProps:O,getIncrementButtonProps:F,getDecrementButtonProps:_,focused:T,error:V,disabled:q,formControlContext:H,isIncrementDisabled:U,isDecrementDisabled:G}=Z({min:v,max:m,step:k,shiftMultiplier:D,defaultValue:c,disabled:u,error:f,onFocus:w,onInputChange:x,onBlur:h,onChange:C,required:N,readOnly:B,value:z,inputId:g}),W=(0,o.Z)({},e,{disabled:q,error:V,focused:T,readOnly:B,formControlContext:H,isIncrementDisabled:U,isDecrementDisabled:G}),K=(e=>{const{disabled:n,error:t,focused:o,readOnly:r,formControlContext:a,isIncrementDisabled:l,isDecrementDisabled:s,startAdornment:d,endAdornment:c}=e,u={root:["root",n&&"disabled",t&&"error",o&&"focused",r&&"readOnly",Boolean(a)&&"formControl",Boolean(d)&&"adornedStart",Boolean(c)&&"adornedEnd"],input:["input",n&&"disabled",r&&"readOnly"],incrementButton:["incrementButton",l&&"disabled"],decrementButton:["decrementButton",s&&"disabled"]};return(0,b.Z)(u,(0,I.T)(i.l))})(W),$={placeholder:M},X=null!=(t=j.root)?t:"div",Y=(0,S.y)({elementType:X,getSlotProps:A,externalSlotProps:L.root,externalForwardedProps:R,additionalProps:{ref:n},ownerState:W,className:[K.root,d]}),J=null!=(a=j.input)?a:"input",Q=(0,S.y)({elementType:J,getSlotProps:e=>O((0,o.Z)({},$,e)),externalSlotProps:L.input,ownerState:W,className:K.input}),ee=null!=(l=j.incrementButton)?l:"button",ne=(0,S.y)({elementType:ee,getSlotProps:F,externalSlotProps:L.incrementButton,ownerState:W,className:K.incrementButton}),te=null!=(s=j.decrementButton)?s:"button",oe=(0,S.y)({elementType:te,getSlotProps:_,externalSlotProps:L.decrementButton,ownerState:W,className:K.decrementButton});return(0,P.jsxs)(X,(0,o.Z)({},Y,{children:[(0,P.jsx)(te,(0,o.Z)({},oe)),(0,P.jsx)(ee,(0,o.Z)({},ne)),E,(0,P.jsx)(J,(0,o.Z)({},Q)),p]}))}))},22090:(e,n,t)=>{"use strict";t.d(n,{S:()=>l,l:()=>i});var o=t(92311),r=t(75658);const a="NumberInput";function i(e){return(0,o.d)(a,e)}const l=(0,r.s)(a,["root","formControl","focused","disabled","readOnly","error","input","incrementButton","decrementButton","adornedStart","adornedEnd"])},54406:(e,n,t)=>{"use strict";var o=t(64836);n.Z=void 0;var r=o(t(45045)),a=t(46417);n.Z=(0,r.default)((0,a.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown")},81195:(e,n,t)=>{"use strict";var o=t(64836);n.Z=void 0;var r=o(t(45045)),a=t(46417);n.Z=(0,r.default)((0,a.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"}),"Cancel")},65954:(e,n,t)=>{"use strict";var o=t(64836);n.Z=void 0;var r=o(t(45045)),a=t(46417);n.Z=(0,r.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},47196:(e,n,t)=>{"use strict";var o=t(64836);n.Z=void 0;var r=o(t(45045)),a=t(46417);n.Z=(0,r.default)((0,a.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"InfoOutlined")},19545:(e,n,t)=>{"use strict";var o=t(64836);n.Z=void 0;var r=o(t(45045)),a=t(46417);n.Z=(0,r.default)((0,a.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2m0 16H5V7h14zm-5.5-6c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"Preview")},83121:(e,n,t)=>{"use strict";var o=t(64836);n.Z=void 0;var r=o(t(45045)),a=t(46417);n.Z=(0,r.default)((0,a.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save")},57983:(e,n,t)=>{"use strict";var o=t(64836);n.Z=void 0;var r=o(t(45045)),a=t(46417);n.Z=(0,r.default)((0,a.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},32703:(e,n,t)=>{"use strict";t.d(n,{Z:()=>P});var o=t(63366),r=t(87462),a=t(47313),i=t(91615),l=t(17677),s=t(21921),d=t(17592),c=t(77342),u=t(33223),p=t(1826),f=t(85281),g=t(15154),m=t(32298);function v(e){return(0,m.ZP)("MuiLoadingButton",e)}const h=(0,t(77430).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var Z=t(46417);const b=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],S=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(e=>"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e)(e)||"classes"===e,name:"MuiLoadingButton",slot:"Root",overridesResolver:(e,n)=>[n.root,n.startIconLoadingStart&&{["& .".concat(h.startIconLoadingStart)]:n.startIconLoadingStart},n.endIconLoadingEnd&&{["& .".concat(h.endIconLoadingEnd)]:n.endIconLoadingEnd}]})((e=>{let{ownerState:n,theme:t}=e;return(0,r.Z)({["& .".concat(h.startIconLoadingStart,", & .").concat(h.endIconLoadingEnd)]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},"center"===n.loadingPosition&&{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),["&.".concat(h.loading)]:{color:"transparent"}},"start"===n.loadingPosition&&n.fullWidth&&{["& .".concat(h.startIconLoadingStart,", & .").concat(h.endIconLoadingEnd)]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===n.loadingPosition&&n.fullWidth&&{["& .".concat(h.startIconLoadingStart,", & .").concat(h.endIconLoadingEnd)]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}})})),I=(0,d.ZP)("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.loadingIndicator,n["loadingIndicator".concat((0,i.Z)(t.loadingPosition))]]}})((e=>{let{theme:n,ownerState:t}=e;return(0,r.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{left:"small"===t.size?10:14},"start"===t.loadingPosition&&"text"===t.variant&&{left:6},"center"===t.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled},"end"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{right:"small"===t.size?10:14},"end"===t.loadingPosition&&"text"===t.variant&&{right:6},"start"===t.loadingPosition&&t.fullWidth&&{position:"relative",left:-10},"end"===t.loadingPosition&&t.fullWidth&&{position:"relative",right:-10})})),P=a.forwardRef((function(e,n){const t=a.useContext(p.Z),d=(0,g.Z)(t,e),u=(0,c.Z)({props:d,name:"MuiLoadingButton"}),{children:m,disabled:h=!1,id:P,loading:y=!1,loadingIndicator:x,loadingPosition:w="center",variant:C="text"}=u,M=(0,o.Z)(u,b),N=(0,l.Z)(P),B=null!=x?x:(0,Z.jsx)(f.Z,{"aria-labelledby":N,color:"inherit",size:16}),D=(0,r.Z)({},u,{disabled:h,loading:y,loadingIndicator:B,loadingPosition:w,variant:C}),E=(e=>{const{loading:n,loadingPosition:t,classes:o}=e,a={root:["root",n&&"loading"],startIcon:[n&&"startIconLoading".concat((0,i.Z)(t))],endIcon:[n&&"endIconLoading".concat((0,i.Z)(t))],loadingIndicator:["loadingIndicator",n&&"loadingIndicator".concat((0,i.Z)(t))]},l=(0,s.Z)(a,v,o);return(0,r.Z)({},o,l)})(D),k=y?(0,Z.jsx)(I,{className:E.loadingIndicator,ownerState:D,children:B}):null;return(0,Z.jsxs)(S,(0,r.Z)({disabled:h||y,id:N,ref:n},M,{variant:C,classes:E,ownerState:D,children:["end"===D.loadingPosition?m:k,"end"===D.loadingPosition?k:m]}))}))},4117:(e,n,t)=>{"use strict";t.d(n,{Z:()=>v});var o=t(63366),r=t(87462),a=t(47313),i=t(94146),l=t(21921),s=t(17592),d=t(77342),c=t(77430),u=t(32298);function p(e){return(0,u.ZP)("MuiDialogActions",e)}(0,c.Z)("MuiDialogActions",["root","spacing"]);var f=t(46417);const g=["className","disableSpacing"],m=(0,s.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,!t.disableSpacing&&n.spacing]}})((e=>{let{ownerState:n}=e;return(0,r.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!n.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),v=a.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiDialogActions"}),{className:a,disableSpacing:s=!1}=t,c=(0,o.Z)(t,g),u=(0,r.Z)({},t,{disableSpacing:s}),v=(e=>{const{classes:n,disableSpacing:t}=e,o={root:["root",!t&&"spacing"]};return(0,l.Z)(o,p,n)})(u);return(0,f.jsx)(m,(0,r.Z)({className:(0,i.Z)(v.root,a),ownerState:u,ref:n},c))}))},71263:(e,n,t)=>{"use strict";t.d(n,{Z:()=>Z});var o=t(87462),r=t(63366),a=t(47313),i=t(94146),l=t(21921),s=t(17592),d=t(77342),c=t(91615),u=t(77430),p=t(32298);function f(e){return(0,p.ZP)("MuiIcon",e)}(0,u.Z)("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var g=t(46417);const m=["baseClassName","className","color","component","fontSize"],v=(0,s.ZP)("span",{name:"MuiIcon",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,"inherit"!==t.color&&n["color".concat((0,c.Z)(t.color))],n["fontSize".concat((0,c.Z)(t.fontSize))]]}})((e=>{let{theme:n,ownerState:t}=e;return{userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,fontSize:{inherit:"inherit",small:n.typography.pxToRem(20),medium:n.typography.pxToRem(24),large:n.typography.pxToRem(36)}[t.fontSize],color:{primary:(n.vars||n).palette.primary.main,secondary:(n.vars||n).palette.secondary.main,info:(n.vars||n).palette.info.main,success:(n.vars||n).palette.success.main,warning:(n.vars||n).palette.warning.main,action:(n.vars||n).palette.action.active,error:(n.vars||n).palette.error.main,disabled:(n.vars||n).palette.action.disabled,inherit:void 0}[t.color]}})),h=a.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiIcon"}),{baseClassName:a="material-icons",className:s,color:u="inherit",component:p="span",fontSize:h="medium"}=t,Z=(0,r.Z)(t,m),b=(0,o.Z)({},t,{baseClassName:a,color:u,component:p,fontSize:h}),S=(e=>{const{color:n,fontSize:t,classes:o}=e,r={root:["root","inherit"!==n&&"color".concat((0,c.Z)(n)),"fontSize".concat((0,c.Z)(t))]};return(0,l.Z)(r,f,o)})(b);return(0,g.jsx)(v,(0,o.Z)({as:p,className:(0,i.Z)(a,"notranslate",S.root,s),ownerState:b,"aria-hidden":!0,ref:n},Z))}));h.muiName="Icon";const Z=h},15154:(e,n,t)=>{"use strict";var o=t(64836);n.Z=function e(n,t){const o=(0,r.default)({},t);return Object.keys(n).forEach((a=>{if(a.toString().match(/^(components|slots)$/))o[a]=(0,r.default)({},n[a],o[a]);else if(a.toString().match(/^(componentsProps|slotProps)$/)){const i=n[a]||{},l=t[a];o[a]={},l&&Object.keys(l)?i&&Object.keys(i)?(o[a]=(0,r.default)({},l),Object.keys(i).forEach((n=>{o[a][n]=e(i[n],l[n])}))):o[a]=l:o[a]=i}else void 0===o[a]&&(o[a]=n[a])})),o};var r=o(t(10434))},81127:(e,n,t)=>{"use strict";t.d(n,{u:()=>u});var o=t(87462),r=t(63366),a=t(47313),i=t(51405),l=t(74748),s=t(24179),d=t(46417);const c=["label","icon","showInMenu","onClick"],u=a.forwardRef(((e,n)=>{const{label:t,icon:u,showInMenu:p,onClick:f}=e,g=(0,r.Z)(e,c),m=(0,s.B)(),v=e=>{f&&f(e)};var h;return p?(0,d.jsxs)(i.Z,(0,o.Z)({ref:n},g,{onClick:f,children:[u&&(0,d.jsx)(l.Z,{children:u}),t]})):(0,d.jsx)(m.slots.baseIconButton,(0,o.Z)({ref:n,size:"small",role:"menuitem","aria-label":t},g,{onClick:v},null==(h=m.slotProps)?void 0:h.baseIconButton,{children:a.cloneElement(u,{fontSize:"small"})}))}))},10434:e=>{function n(){return e.exports=n=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,n.apply(this,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports}}]);