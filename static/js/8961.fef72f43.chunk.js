"use strict";(self.webpackChunkfrontend_app=self.webpackChunkfrontend_app||[]).push([[8961],{78961:(e,r,i)=>{i.r(r),i.d(r,{default:()=>D});var a=i(96447),s=i(61317),n=i(9019),t=i(79536),o=i(62481),l=i(9289),d=i(47131),c=i(73428),g=i(95861),u=i(65280),m=i(75908),p=i(17592),h=i(90200),v=i(11053),x=i(31845),_=i(80007),f=i(63408),P=i(47477),Z=i(47313),b=i(75590),y=i(65537),L=i(58467),j=i(90469),k=i(6517),w=i(70501),C=i(1550),S=i(15103),N=i(88797),T=i(51405);const W="style_container__Vdkox",z="style_searchWrapper__24got",I="style_colSearchContainer__E8TRM";var M=i(41835),R=i(5124),F=i(99140),B=i(46417);const H=()=>{const[e,r]=(0,Z.useState)("name");return(0,B.jsxs)(w.Z,{className:W,children:[(0,B.jsxs)(t.Z,{className:z,children:[(0,B.jsx)(R.Z,{onSearchClick:e=>{console.log(e)}}),(0,B.jsxs)(C.Z,{className:I,children:[(0,B.jsx)(S.Z,{id:"colSearch",children:"T\xecm ki\u1ebfm theo c\u1ed9t"}),(0,B.jsxs)(N.Z,{labelId:"colSearch",id:"colSearchSelect",value:e,onChange:(e,i)=>{r(e.target.value)},label:"T\xecm ki\u1ebfm theo c\u1ed9t",children:[(0,B.jsx)(T.Z,{value:"name",children:"T\xean"}),(0,B.jsx)(T.Z,{value:"emai",children:"Email"}),(0,B.jsx)(T.Z,{value:"role",children:"Ch\u1ee9c v\u1ee5"})]})]})]}),(0,B.jsx)(F.Z,{btnType:F.s.Primary,startIcon:(0,B.jsx)(M.Z,{sx:{color:"white"}}),sx:{marginLeft:"15px",marginBottom:"10px"},children:"Xu\u1ea5t d\u1eef li\u1ec7u"})]})},A={root:"styles_root__W0BvQ",container:"styles_container__1GBHH",mainContent:"styles_mainContent__ky5qU",cardWrapper:"styles_cardWrapper__nWBsh",cardTitleHeader:"styles_cardTitleHeader__HR4m-",reportOpenTimeWrapper:"styles_reportOpenTimeWrapper__1AUmy",submissionsQuantity:"styles_submissionsQuantity__EdHW6",codeLanguage:"styles_codeLanguage__htR+B",labelTitle:"styles_labelTitle__dHHpS",similarityWrapper:"styles_similarityWrapper__Ys8vz",formBody:"styles_formBody__shK22",drawerBody:"styles_drawerBody__bJiLJ",drawerFieldContainer:"styles_drawerFieldContainer__1Q46C",textEditor:"styles_textEditor__6PwVT",breadcumpWrapper:"styles_breadcumpWrapper__2RYnC",icArrow:"styles_icArrow__ujFwG",cursorPointer:"styles_cursorPointer__nYy2k"},O=(0,p.ZP)("main",{shouldForwardProp:e=>"open"!==e})((e=>{let{theme:r,open:i}=e;return{flexGrow:1,padding:r.spacing(3),transition:r.transitions.create("margin",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.leavingScreen}),marginRight:-450,...i&&{transition:r.transitions.create("margin",{easing:r.transitions.easing.easeOut,duration:r.transitions.duration.enteringScreen}),marginRight:0},position:"relative"}})),E=(0,p.ZP)(m.Z,{shouldForwardProp:e=>"open"!==e})((e=>{let{theme:r,open:i}=e;return{transition:r.transitions.create(["margin","width"],{easing:r.transitions.easing.sharp,duration:r.transitions.duration.leavingScreen}),...i&&{width:"calc(100% - ".concat(450,"px)"),transition:r.transitions.create(["margin","width"],{easing:r.transitions.easing.easeOut,duration:r.transitions.duration.enteringScreen}),marginRight:450}}})),U=(0,p.ZP)("div")((e=>{let{theme:r}=e;return{display:"flex",alignItems:"center",padding:r.spacing(0,1),...r.mixins.toolbar,justifyContent:"flex-start"}}));function D(){var e;const{t:r}=(0,b.$G)(),i=(0,L.s0)(),{clusterId:m}=(0,L.UO)(),[p,w]=Z.useState(0),C=(0,y.v9)((e=>e.codePlagiarism)),{clusters:S,report:N}=C,T=Z.useMemo((()=>S.find((e=>e.id===Number(m)))),[S,m]),W=Z.useMemo((()=>{if(!T)return[];return T.submissions.map(((e,r)=>{var i,a;return{id:e.id.toString(),userId:e.extra.userId,orgUserId:e.extra.orgUserId,userFullName:e.extra.userFullName,labels:e.extra.labels,questionName:e.extra.questionName,examName:e.extra.examName,createdAt:e.extra.createdAt,highestSimilarity:(null===e||void 0===e||null===(i=e.fileScoring)||void 0===i||null===(a=i.similarityScore)||void 0===a?void 0:a.similarity)||0,lines:(null===e||void 0===e?void 0:e.lineCount)||0}})).sort(((e,r)=>r.highestSimilarity-e.highestSimilarity))}),[T]),z=[{field:"orgUserId",headerName:"MSSV",width:120,renderCell:e=>(0,B.jsx)(_.Z,{children:e.value||r("code_plagiarism_not_updated")})},{field:"userFullName",headerName:"T\xean sinh vi\xean",flex:1,renderCell:e=>(0,B.jsx)(_.Z,{children:e.value||r("code_plagiarism_not_updated")})},{field:"examName",headerName:"B\xe0i ki\u1ec3m tra",flex:1,renderCell:e=>(0,B.jsx)(_.Z,{children:e.value||r("code_plagiarism_not_updated")})},{field:"createdAt",headerName:"Ng\xe0y n\u1ed9p",flex:1,renderCell:e=>(0,B.jsx)(_.Z,{children:new Date(e.value).toLocaleString()||r("code_plagiarism_not_updated")})},{field:"highestSimilarity",headerName:"\u0110\u1ed9 t\u01b0\u01a1ng \u0111\u1ed3ng cao nh\u1ea5t",flex:1,renderCell:e=>(0,B.jsx)(k.Z,{value:100*Number(e.value)||0})},{field:"lines",headerName:"S\u1ed1 d\xf2ng",flex:1,renderCell:e=>(0,B.jsx)(_.Z,{children:e.value||r("code_plagiarism_not_updated")})}];N&&(null===N||void 0===N||null===(e=N.labels)||void 0===e?void 0:e.length)>0&&z.splice(2,0,{field:"labels",headerName:"Nh\xe3n",width:150,renderCell:e=>(0,B.jsx)(_.Z,{children:e.value||r("code_plagiarism_not_updated")})});const I=Z.useMemo((()=>{if(!T)return[];return T.cluster.map(((e,r)=>({id:e.id,leftFile:e.leftFile,rightFile:e.rightFile,similarity:e.similarity,longestFragment:e.longestFragment,totalOverlap:e.totalOverlap}))).sort(((e,r)=>r.similarity-e.similarity))}),[T]),M=[{field:"leftFile",headerName:"M\xe3 s\u1ed1 sinh vi\xean tr\xe1i",flex:1,renderCell:e=>{var i,a;return(0,B.jsx)(_.Z,{children:(null===(i=e.value)||void 0===i||null===(a=i.extra)||void 0===a?void 0:a.orgUserId)||r("code_plagiarism_not_updated")})}},{field:"rightFile",headerName:"M\xe3 s\u1ed1 sinh vi\xean ph\u1ea3i",flex:1,renderCell:e=>{var i,a;return(0,B.jsx)(_.Z,{children:(null===(i=e.value)||void 0===i||null===(a=i.extra)||void 0===a?void 0:a.orgUserId)||r("code_plagiarism_not_updated")})}},{field:"similarity",headerName:r("code_plagiarism_similarity_title"),flex:1,renderCell:e=>(0,B.jsx)(k.Z,{value:100*Number(e.value)||0})},{field:"longestFragment",headerName:r("code_plagiarism_longest_fragment_title"),flex:1},{field:"totalOverlap",headerName:r("code_plagiarism_total_overlap_title"),flex:1}],R=0===p?W.length:I.length,F=Z.useRef(null),{height:D}=(0,P.Z)({ref:F});return(0,B.jsxs)(n.ZP,{className:A.root,children:[(0,B.jsx)(h.Z,{ref:F}),(0,B.jsxs)(t.Z,{className:A.container,sx:{marginTop:"".concat(D,"px")},children:[(0,B.jsx)(o.ZP,{}),(0,B.jsx)(E,{position:"fixed",sx:{marginTop:"64px",backgroundColor:"white"},open:!1,children:(0,B.jsxs)(l.Z,{children:[(0,B.jsxs)(t.Z,{id:A.breadcumpWrapper,children:[(0,B.jsx)(f.Z,{colorname:"--blue-500",className:A.cursorPointer,onClick:()=>i(j._.lecturer.exam.code_plagiarism_detection,{state:{report:N}}),children:"T\u1ed5ng quan Ki\u1ec3m tra gian l\u1eadn"}),(0,B.jsx)(a.Z,{id:A.icArrow}),(0,B.jsx)(f.Z,{colorname:"--blue-500",className:A.cursorPointer,onClick:()=>i(j._.lecturer.exam.code_plagiarism_detection_clusters),children:"Danh s\xe1ch chia nh\xf3m"}),(0,B.jsx)(a.Z,{id:A.icArrow}),(0,B.jsx)(f.Z,{colorname:"--blue-500",children:"Chi ti\u1ebft nh\xf3m b\xe0i n\u1ed9p"})]}),(0,B.jsx)(d.Z,{color:"inherit","aria-label":"open drawer",edge:"end",sx:{display:"none"},children:(0,B.jsx)(s.Z,{color:"action"})})]})}),(0,B.jsxs)(O,{open:!0,className:A.mainContent,children:[(0,B.jsx)(U,{}),(0,B.jsx)(c.Z,{children:(0,B.jsxs)(t.Z,{component:"form",className:A.formBody,autoComplete:"off",children:[(0,B.jsx)(x.Z,{"translation-key":"code_plagiarism_file_pairs_list_title",children:"Nh\xf3m 1"}),(0,B.jsx)(_.Z,{children:"Th\xf4ng tin li\xean quan \u0111\u1ebfn nh\xf3m hi\u1ec7n t\u1ea1i."}),(0,B.jsx)(c.Z,{sx:{padding:"15px"},children:(0,B.jsxs)(n.ZP,{container:!0,spacing:1,children:[(0,B.jsx)(n.ZP,{item:!0,xs:12,children:(0,B.jsx)(H,{})}),(0,B.jsx)(n.ZP,{item:!0,xs:12,children:(0,B.jsxs)(g.Z,{value:p,onChange:(e,r)=>{w(r)},"aria-label":"tabIndex",children:[(0,B.jsx)(u.Z,{iconPosition:"start",label:"Danh s\xe1ch b\xe0i n\u1ed9p"}),(0,B.jsx)(u.Z,{iconPosition:"start",label:"Danh s\xe1ch c\u1eb7p b\xe0i n\u1ed9p"})]})}),(0,B.jsx)(n.ZP,{item:!0,xs:12,children:(0,B.jsx)(v.Z,{dataList:0===p?W:I,tableHeader:0===p?z:M,onSelectData:(e,r)=>{},dataGridToolBar:{enableToolbar:!0},page:0,pageSize:15,totalElement:R,onPaginationModelChange:(e,r)=>{console.log(e)},showVerticalCellBorder:!0,getRowHeight:()=>"auto",onClickRow:e=>{const r=0===p?j._.lecturer.exam.code_plagiarism_detection_submissions_detail.replace(":submissionId",e.row.id):j._.lecturer.exam.code_plagiarism_detection_pairs_detail.replace(":pairId",e.row.id);i(r)}})})]})})]})})]})]})]})}},6517:(e,r,i)=>{i.d(r,{Z:()=>o});var a=i(74922),s=i(79536),n=i(80007),t=i(46417);const o=e=>{const r=e.value>75?"danger":e.value>70?"warning":"success",i=e.value>75||e.value>70?"--white":"--eerie-black-00";return(0,t.jsx)(s.Z,{sx:{backgroundColor:"var(--white)",borderRadius:"20px",width:"100%"},children:(0,t.jsx)(a.Z,{determinate:!0,variant:"outlined",color:r,size:"sm",thickness:24,value:Number(e.value),sx:{"--LinearProgress-radius":"20px","--LinearProgress-thickness":"24px"},children:(0,t.jsx)(n.Z,{colorname:i,zIndex:1,children:"".concat(Math.round(Number(e.value)),"%")})})})}},74922:(e,r,i)=>{i.d(r,{Z:()=>k});var a=i(30168),s=i(63366),n=i(87462),t=i(47313),o=i(94146),l=i(31179),d=i(8007),c=i(30686),g=i(48114),u=i(8362),m=i(19422);function p(e){return(0,m.d6)("MuiLinearProgress",e)}(0,m.sI)("MuiLinearProgress",["root","determinate","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","sizeSm","sizeMd","sizeLg","variantPlain","variantOutlined","variantSoft","variantSolid"]);var h,v,x=i(60985),_=i(27810),f=i(46417);const P=["children","className","component","color","size","variant","thickness","determinate","value","style","slots","slotProps"];let Z,b;const y=(0,c.F4)(Z||(Z=h||(h=(0,a.Z)(["\n  0% {\n    left: var(--_LinearProgress-progressInset);\n    width: var(--LinearProgress-progressMinWidth);\n  }\n\n  25% {\n    width: var(--LinearProgress-progressMaxWidth);\n  }\n\n  50% {\n    left: var(--_LinearProgress-progressLeft);\n    width: var(--LinearProgress-progressMinWidth);\n  }\n\n  75% {\n    width: var(--LinearProgress-progressMaxWidth);\n  }\n\n  100% {\n    left: var(--_LinearProgress-progressInset);\n    width: var(--LinearProgress-progressMinWidth);\n  }\n"])))),L=(0,g.Z)("div",{name:"JoyLinearProgress",slot:"Root",overridesResolver:(e,r)=>r.root})((e=>{let{ownerState:r,theme:i}=e;var a,s,t,o;return(0,n.Z)({"--LinearProgress-radius":"var(--LinearProgress-thickness)","--LinearProgress-progressThickness":"var(--LinearProgress-thickness)","--LinearProgress-progressRadius":"max(var(--LinearProgress-radius) - var(--_LinearProgress-padding), min(var(--_LinearProgress-padding) / 2, var(--LinearProgress-radius) / 2))"},"sm"===r.size&&{"--LinearProgress-thickness":"4px"},"md"===r.size&&{"--LinearProgress-thickness":"6px"},"lg"===r.size&&{"--LinearProgress-thickness":"8px"},r.thickness&&{"--LinearProgress-thickness":"".concat(r.thickness,"px")},!r.determinate&&{"--LinearProgress-progressMinWidth":"calc(var(--LinearProgress-percent) * 1% / 2)","--LinearProgress-progressMaxWidth":"calc(var(--LinearProgress-percent) * 1%)","--_LinearProgress-progressLeft":"calc(100% - var(--LinearProgress-progressMinWidth) - var(--_LinearProgress-progressInset))","--_LinearProgress-progressInset":"calc(var(--LinearProgress-thickness) / 2 - var(--LinearProgress-progressThickness) / 2)"},{minBlockSize:"var(--LinearProgress-thickness)",boxSizing:"border-box",borderRadius:"var(--LinearProgress-radius)",display:"flex",justifyContent:"center",alignItems:"center",flex:1,padding:"var(--_LinearProgress-padding)",position:"relative"},null==(a=i.variants[r.variant])?void 0:a[r.color],{"--_LinearProgress-padding":"max((var(--LinearProgress-thickness) - 2 * var(--variant-borderWidth, 0px) - var(--LinearProgress-progressThickness)) / 2, 0px)","&::before":{content:'""',display:"block",boxSizing:"inherit",blockSize:"var(--LinearProgress-progressThickness)",borderRadius:"var(--LinearProgress-progressRadius)",backgroundColor:"currentColor",color:"inherit",position:"absolute"}},"soft"===r.variant&&{backgroundColor:i.variants.soft.neutral.backgroundColor,color:null==(s=i.variants.solid)?void 0:s[r.color].backgroundColor},"solid"===r.variant&&{backgroundColor:null==(t=i.variants.softHover)?void 0:t[r.color].backgroundColor,color:null==(o=i.variants.solid)?void 0:o[r.color].backgroundColor})}),(e=>{let{ownerState:r}=e;return r.determinate?{"&::before":{left:"var(--_LinearProgress-padding)",inlineSize:"calc(var(--LinearProgress-percent) * 1% - 2 * var(--_LinearProgress-padding))"}}:(0,c.iv)(b||(b=v||(v=(0,a.Z)(["\n          &::before {\n            animation: ","\n              var(--LinearProgress-circulation, 2.5s ease-in-out 0s infinite normal none running);\n          }\n        "]))),y)}),(e=>{let{ownerState:r,theme:i}=e;const{borderRadius:a,height:s}=(0,_.V)({theme:i,ownerState:r},["borderRadius","height"]);return(0,n.Z)({},void 0!==a&&{"--LinearProgress-radius":a},void 0!==s&&{"--LinearProgress-thickness":s})})),j=t.forwardRef((function(e,r){const i=(0,u.Z)({props:e,name:"JoyLinearProgress"}),{children:a,className:t,component:c,color:g="primary",size:m="md",variant:h="soft",thickness:v,determinate:_=!1,value:Z=(_?0:25),style:b,slots:y={},slotProps:j={}}=i,k=(0,s.Z)(i,P),w=(0,n.Z)({},i,{component:c,color:g,size:m,variant:h,thickness:v,value:Z,determinate:_,instanceSize:e.size}),C=(e=>{const{determinate:r,color:i,variant:a,size:s}=e,n={root:["root",r&&"determinate",i&&"color".concat((0,l.Z)(i)),a&&"variant".concat((0,l.Z)(a)),s&&"size".concat((0,l.Z)(s))]};return(0,d.Z)(n,p,{})})(w),S=(0,n.Z)({},k,{component:c,slots:y,slotProps:j}),[N,T]=(0,x.Z)("root",{ref:r,className:(0,o.Z)(C.root,t),elementType:L,externalForwardedProps:S,ownerState:w,additionalProps:(0,n.Z)({as:c,role:"progressbar",style:(0,n.Z)({},{"--LinearProgress-percent":Z},b)},"number"===typeof Z&&_&&{"aria-valuenow":Math.round(Z)})});return(0,f.jsx)(N,(0,n.Z)({},T,{children:a}))})),k=j},27810:(e,r,i)=>{i.d(r,{V:()=>s});var a=i(87462);const s=(e,r)=>{let{theme:i,ownerState:s}=e,n={};return s.sx&&(!function e(r){"function"===typeof r?e(r(i)):Array.isArray(r)?r.forEach((r=>{"boolean"!==typeof r&&e(r)})):"object"===typeof r&&(n=(0,a.Z)({},n,r))}(s.sx),r.forEach((e=>{const r=n[e];var a;"string"===typeof r||"number"===typeof r?"borderRadius"===e?n[e]="number"===typeof r?"".concat(r,"px"):(null==(a=i.vars)?void 0:a.radius[r])||r:-1!==["p","padding","m","margin"].indexOf(e)&&"number"===typeof r?n[e]=i.spacing(r):n[e]=r:n[e]="function"===typeof r?r(i):void 0}))),n}}}]);