"use strict";(self.webpackChunkfrontend_app=self.webpackChunkfrontend_app||[]).push([[7693],{69173:(e,r,i)=>{i.d(r,{Z:()=>h,q:()=>c});var n=i(88949),t=i(32683),s=i(64182),a=i(47313);const l="styles_codeEditor__JJKQI";var o=i(56858),d=i(46417);const c=[n.RI.java(),n.RI.javascript(),n.RI.cpp(),n.RI.python(),n.RI.angular(),n.RI.html()],h=e=>{let{value:r,readOnly:i,highlightActiveLine:n,fragments:h,...x}=e;const u=(0,a.useMemo)((()=>{if(!h)return;const e=[];return h.forEach((r=>{for(let i=r.startRow+1;i<=r.endRow+1;i++)e.push(i)})),e}),[h]),g=(0,a.useMemo)((()=>{const e=[];return void 0!==h&&void 0!==u&&u.length>0&&h.length>0&&e.push((0,o.r)({lineNumber:u,lightColor:"#aca2ff33",darkColor:"#aca2ff40"})),e.concat(c)}),[h,u]);return(0,d.jsx)(s.ZP,{id:l,value:r,theme:t.A1,onChange:x.onChange,readOnly:i,basicSetup:{autocompletion:!0,highlightActiveLine:void 0===n||n},extensions:g})}},47693:(e,r,i)=>{i.r(r),i.d(r,{default:()=>ie});var n=i(14281),t=i(66713),s=i(7370),a=i(80041),l=i(96447),o=i(86372),d=i(61317),c=i(57794),h=i(91825),x=i(94380),u=i(49709),g=i(47131),m=i(9019),p=i(79536),v=i(62481),Z=i(9289),_=i(73428),f=i(75908),j=i(17592),y=i(90200),b=i(11053),P=i(99140),S=i(69173),L=i(31845),k=i(33099),I=i(80007),w=i(63408),C=i(47477),N=i(47313),T=i(75590),M=i(65537),R=i(58467),A=i(34634),F=i(90469),z=i(6517),E=i(67077),W=i(70501),O=i(1550),B=i(15103),V=i(88797),D=i(51405);const U="style_container__LPKRe",Y="style_searchWrapper__36w34",H="style_colSearchContainer__gZksT";var G=i(41835),q=i(5124),K=i(46417);const Q=()=>{const[e,r]=(0,N.useState)("name");return(0,K.jsxs)(W.Z,{className:U,children:[(0,K.jsxs)(p.Z,{className:Y,children:[(0,K.jsx)(q.Z,{onSearchClick:e=>{console.log(e)}}),(0,K.jsxs)(O.Z,{className:H,children:[(0,K.jsx)(B.Z,{id:"colSearch",children:"T\xecm ki\u1ebfm theo c\u1ed9t"}),(0,K.jsxs)(V.Z,{labelId:"colSearch",id:"colSearchSelect",value:e,onChange:(e,i)=>{r(e.target.value)},label:"T\xecm ki\u1ebfm theo c\u1ed9t",children:[(0,K.jsx)(D.Z,{value:"name",children:"T\xean"}),(0,K.jsx)(D.Z,{value:"emai",children:"Email"}),(0,K.jsx)(D.Z,{value:"role",children:"Ch\u1ee9c v\u1ee5"})]})]})]}),(0,K.jsx)(P.Z,{btnType:P.s.Primary,startIcon:(0,K.jsx)(G.Z,{sx:{color:"white"}}),sx:{marginLeft:"15px",marginBottom:"10px"},children:"Xu\u1ea5t d\u1eef li\u1ec7u"})]})},J={root:"styles_root__MO+p5",container:"styles_container__Fq+FF",mainContent:"styles_mainContent__ckKL3",cardWrapper:"styles_cardWrapper__8m9wb",cardTitleHeader:"styles_cardTitleHeader__YAXRA",reportOpenTimeWrapper:"styles_reportOpenTimeWrapper__WUCRb",submissionsQuantity:"styles_submissionsQuantity__PmdYC",codeLanguage:"styles_codeLanguage__O4zkC",labelTitle:"styles_labelTitle__Mf+71",similarityWrapper:"styles_similarityWrapper__0VnAB",formBody:"styles_formBody__oy8qi",drawerBody:"styles_drawerBody__DLOLr",drawerFieldContainer:"styles_drawerFieldContainer__Qjpdr",textEditor:"styles_textEditor__UNaT+",breadcumpWrapper:"styles_breadcumpWrapper__yPU0n",icArrow:"styles_icArrow__p6Q05",cursorPointer:"styles_cursorPointer__jt5h1"};var X=function(e){return e[e.SAME=0]="SAME",e[e.DIFFERENT=1]="DIFFERENT",e[e.NONE=2]="NONE",e}(X||{});const $=(0,j.ZP)("main",{shouldForwardProp:e=>"open"!==e})((e=>{let{theme:r,open:i}=e;return{flexGrow:1,padding:r.spacing(3),transition:r.transitions.create("margin",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.leavingScreen}),marginRight:-450,...i&&{transition:r.transitions.create("margin",{easing:r.transitions.easing.easeOut,duration:r.transitions.duration.enteringScreen}),marginRight:0},position:"relative"}})),ee=(0,j.ZP)(f.Z,{shouldForwardProp:e=>"open"!==e})((e=>{let{theme:r,open:i}=e;return{transition:r.transitions.create(["margin","width"],{easing:r.transitions.easing.sharp,duration:r.transitions.duration.leavingScreen}),...i&&{width:"calc(100% - ".concat(450,"px)"),transition:r.transitions.create(["margin","width"],{easing:r.transitions.easing.easeOut,duration:r.transitions.duration.enteringScreen}),marginRight:450}}})),re=(0,j.ZP)("div")((e=>{let{theme:r}=e;return{display:"flex",alignItems:"center",padding:r.spacing(0,1),...r.mixins.toolbar,justifyContent:"flex-start"}}));function ie(){var e,r,i,f,j,W,O,B,V,D,U,Y;const{t:H}=(0,T.$G)(),G=(0,R.s0)(),{submissionId:q}=(0,R.UO)(),ie=(0,M.v9)((e=>e.codePlagiarism)),{report:ne,filteredPairs:te,filterdFiles:se,clusters:ae}=ie,le=N.useMemo((()=>{const e=se.find((e=>e.id.toString()===q));if(!e)return;const r=ae.find((r=>r.cluster.some((r=>r.leftFile.id===e.id||r.rightFile.id===e.id))));return{...e,cluster:r}}),[se,q,ae]),oe=N.useMemo((()=>{const e=[...te].filter((e=>e.leftFile.id.toString()===(null===le||void 0===le?void 0:le.id.toString())||e.rightFile.id.toString()===(null===le||void 0===le?void 0:le.id.toString()))).map(((e,r)=>{var i;const n=e.leftFile.id===(null===le||void 0===le?void 0:le.id)?e.rightFile:e.leftFile,t=(0,A.b6)(n,te),s=ae.find((r=>r.cluster.some((r=>r.id===e.id)))),a=(null===le||void 0===le?void 0:le.cluster)&&(null===le||void 0===le||null===(i=le.cluster)||void 0===i?void 0:i.id)===(null===s||void 0===s?void 0:s.id)?X.SAME:s?X.DIFFERENT:X.NONE;return{id:t.id,orgUserId:t.extra.orgUserId,userFullName:t.extra.userFullName,labels:t.extra.labels,questionName:t.extra.questionName,examName:t.extra.examName,createdAt:t.extra.createdAt,similarity:e.similarity,cluster:{relation:a,id:null===s||void 0===s?void 0:s.id},actions:{pairId:e.id}}}));return e.sort(((e,r)=>r.similarity-e.similarity)),e}),[te,ae,le]),de=oe.length,ce=[{field:"orgUserId",headerName:"MSSV",width:100,renderCell:e=>(0,K.jsx)(I.Z,{children:e.value||H("code_plagiarism_not_updated")})},{field:"userFullName",headerName:"T\xean sinh vi\xean",width:150,renderCell:e=>(0,K.jsx)(I.Z,{children:e.value||H("code_plagiarism_not_updated")})},{field:"examName",headerName:"B\xe0i ki\u1ec3m tra",flex:1,renderCell:e=>(0,K.jsx)(I.Z,{children:e.value||H("code_plagiarism_not_updated")})},{field:"createdAt",headerName:"Ng\xe0y n\u1ed9p",flex:1,renderCell:e=>(0,K.jsx)(I.Z,{children:new Date(e.value).toLocaleString()||H("code_plagiarism_not_updated")})},{field:"similarity",headerName:"\u0110\u1ed9 t\u01b0\u01a1ng \u0111\u1ed3ng",flex:1,renderCell:e=>(0,K.jsx)(z.Z,{value:100*Number(e.value)||0})},{field:"cluster",headerName:"Nh\xf3m",align:"center",width:70,renderCell:e=>e.value.relation===X.SAME?(0,K.jsx)(u.Z,{title:"Thu\u1ed9c c\xf9ng nh\xf3m v\u1edbi b\xe0i n\u1ed9p n\xe0y",placement:"top",children:(0,K.jsx)(g.Z,{onClick:()=>{G(F._.lecturer.exam.code_plagiarism_detection_clusters_detail.replace(":clusterId",e.value.id))},children:(0,K.jsx)(h.Z,{})})}):e.value.relation===X.DIFFERENT?(0,K.jsx)(u.Z,{title:"Kh\xf4ng thu\u1ed9c c\xf9ng nh\xf3m v\u1edbi b\xe0i n\u1ed9p n\xe0y",placement:"top",children:(0,K.jsx)(g.Z,{onClick:()=>{G(F._.lecturer.exam.code_plagiarism_detection_clusters_detail.replace(":clusterId",e.value.id))},children:(0,K.jsx)(x.Z,{})})}):(0,K.jsx)(K.Fragment,{})},{field:"actions",headerName:"So s\xe1nh",flex:1,renderCell:e=>(0,K.jsx)(P.Z,{btnType:P.s.Text,onClick:()=>{G(F._.lecturer.exam.code_plagiarism_detection_pairs_detail.replace(":pairId",e.value.pairId))},endIcon:(0,K.jsx)(t.Z,{}),children:"So s\xe1nh"})}];ne&&(null===ne||void 0===ne||null===(e=ne.labels)||void 0===e?void 0:e.length)>0&&ce.splice(2,0,{field:"labels",headerName:"Nh\xe3n",width:70,renderCell:e=>(0,K.jsx)(I.Z,{children:e.value||H("code_plagiarism_not_updated")})});const he=N.useMemo((()=>[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95]),[]),xe=N.useMemo((()=>{const e=Array(he.length).fill(0);return se.forEach((r=>{for(let t=0;t<he.length;t++){var i,n;const s=(null===(i=r.fileScoring)||void 0===i||null===(n=i.similarityScore)||void 0===n?void 0:n.similarity)||0;100*s>=he[t]&&100*s<he[t]+5&&(e[t]+=1),95===he[t]&&100*s===100&&(e[t]+=1)}})),e}),[he,se]),ue=N.useRef(null),{height:ge}=(0,C.Z)({ref:ue});return(0,K.jsxs)(m.ZP,{className:J.root,children:[(0,K.jsx)(y.Z,{ref:ue}),(0,K.jsxs)(p.Z,{className:J.container,sx:{marginTop:"".concat(ge,"px")},children:[(0,K.jsx)(v.ZP,{}),(0,K.jsx)(ee,{position:"fixed",sx:{marginTop:"64px",backgroundColor:"white"},open:!1,children:(0,K.jsxs)(Z.Z,{children:[(0,K.jsxs)(p.Z,{id:J.breadcumpWrapper,children:[(0,K.jsx)(w.Z,{colorname:"--blue-500",className:J.cursorPointer,onClick:()=>G(F._.lecturer.exam.code_plagiarism_detection,{state:{report:ne}}),children:"T\u1ed5ng quan Ki\u1ec3m tra gian l\u1eadn"}),(0,K.jsx)(l.Z,{id:J.icArrow}),(0,K.jsx)(w.Z,{colorname:"--blue-500",className:J.cursorPointer,onClick:()=>G(F._.lecturer.exam.code_plagiarism_detection_submissions),children:"Danh s\xe1ch b\xe0i n\u1ed9p"}),(0,K.jsx)(l.Z,{id:J.icArrow}),(0,K.jsx)(w.Z,{colorname:"--blue-500",children:"Chi ti\u1ebft b\xe0i n\u1ed9p"})]}),(0,K.jsx)(g.Z,{color:"inherit","aria-label":"open drawer",edge:"end",sx:{display:"none"},children:(0,K.jsx)(d.Z,{color:"action"})})]})}),(0,K.jsxs)($,{open:!0,className:J.mainContent,children:[(0,K.jsx)(re,{}),(0,K.jsx)(_.Z,{children:(0,K.jsxs)(p.Z,{component:"form",className:J.formBody,autoComplete:"off",children:[(0,K.jsxs)(L.Z,{children:["B\xe0i n\u1ed9p c\u1ee7a ",null===le||void 0===le?void 0:le.extra.orgUserId," -"," ",null===le||void 0===le?void 0:le.extra.userFullName]}),(0,K.jsx)(I.Z,{children:"Th\xf4ng tin li\xean quan \u0111\u1ebfn b\xe0i n\u1ed9p hi\u1ec7n t\u1ea1i."}),(0,K.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,K.jsxs)(m.ZP,{item:!0,xs:12,md:8,children:[(0,K.jsx)(_.Z,{sx:{padding:"15px"},children:(0,K.jsxs)(m.ZP,{container:!0,spacing:1,children:[(0,K.jsx)(m.ZP,{item:!0,xs:12,children:(0,K.jsx)(k.Z,{children:"So s\xe1nh"})}),(0,K.jsx)(m.ZP,{item:!0,xs:12,children:(0,K.jsx)(I.Z,{children:"So s\xe1nh b\xe0i n\u1ed9p n\xe0y v\u1edbi c\xe1c b\xe0i n\u1ed9p kh\xe1c"})}),(0,K.jsx)(m.ZP,{item:!0,xs:12,children:(0,K.jsx)(Q,{})}),(0,K.jsx)(m.ZP,{item:!0,xs:12,children:(0,K.jsx)(b.Z,{dataList:oe,tableHeader:ce,onSelectData:(e,r)=>{},dataGridToolBar:{enableToolbar:!0},page:0,pageSize:10,totalElement:de,onPaginationModelChange:(e,r)=>{console.log(e)},showVerticalCellBorder:!0,getRowHeight:()=>"auto",onClickRow:e=>{G(F._.lecturer.exam.code_plagiarism_detection_submissions_detail.replace(":submissionId",e.id.toString()))},cellClickParamFields:["cluster","actions"]})})]})}),(0,K.jsx)(_.Z,{sx:{padding:"15px",marginTop:"15px"},children:(0,K.jsxs)(m.ZP,{container:!0,spacing:1,children:[(0,K.jsx)(m.ZP,{item:!0,xs:12,children:(0,K.jsxs)(k.Z,{children:["Code c\u1ee7a ",null!==(r=null===le||void 0===le||null===(i=le.extra)||void 0===i?void 0:i.orgUserId)&&void 0!==r?r:""," -"," ",null!==(f=null===le||void 0===le||null===(j=le.extra)||void 0===j?void 0:j.userFullName)&&void 0!==f?f:""]})}),(0,K.jsx)(m.ZP,{item:!0,xs:12,children:(0,K.jsx)(I.Z,{children:"Xem code c\u1ee7a b\xe0i n\u1ed9p n\xe0y."})}),(0,K.jsx)(m.ZP,{item:!0,xs:12,children:(0,K.jsx)(_.Z,{children:(0,K.jsx)(S.Z,{readOnly:!0,value:(null===le||void 0===le||null===(W=le.lines)||void 0===W?void 0:W.join("\n"))||""})})})]})})]}),(0,K.jsxs)(m.ZP,{item:!0,xs:12,md:4,children:[(0,K.jsx)(_.Z,{sx:{padding:"15px"},children:(0,K.jsxs)(m.ZP,{container:!0,spacing:1,children:[(0,K.jsx)(m.ZP,{item:!0,xs:12,children:(0,K.jsx)(k.Z,{children:"Th\xf4ng tin b\xe0i n\u1ed9p"})}),(0,K.jsx)(m.ZP,{item:!0,xs:12,children:(0,K.jsx)(u.Z,{title:"M\xe3 s\u1ed1 sinh vi\xean",placement:"top",children:(0,K.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center",gap:"10px",width:"fit-content"},children:[(0,K.jsx)(n.Z,{}),(0,K.jsx)(I.Z,{fontWeight:500,children:null===le||void 0===le||null===(O=le.extra)||void 0===O?void 0:O.orgUserId})]})})}),(0,K.jsx)(m.ZP,{item:!0,xs:12,children:(0,K.jsx)(u.Z,{title:"T\xean sinh vi\xean",placement:"top",children:(0,K.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center",gap:"10px",width:"fit-content"},children:[(0,K.jsx)(s.Z,{}),(0,K.jsx)(I.Z,{fontWeight:500,children:null===le||void 0===le||null===(B=le.extra)||void 0===B?void 0:B.userFullName})]})})}),(null===ne||void 0===ne?void 0:ne.labels)&&ne.labels.length>0&&(null===le||void 0===le||null===(V=le.extra)||void 0===V?void 0:V.labels)&&(null===le||void 0===le?void 0:le.extra.labels.length)>0&&(0,K.jsx)(m.ZP,{item:!0,xs:12,children:(0,K.jsx)(u.Z,{title:"Nh\xe3n",placement:"top",children:(0,K.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center",gap:"10px",width:"fit-content"},children:[(0,K.jsx)(o.Z,{}),(0,K.jsx)(I.Z,{fontWeight:500,children:null===le||void 0===le?void 0:le.extra.labels})]})})}),(0,K.jsx)(m.ZP,{item:!0,xs:12,children:(0,K.jsx)(u.Z,{title:"Ng\xe0y n\u1ed9p b\xe0i",placement:"top",children:(0,K.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center",gap:"10px",width:"fit-content"},children:[(0,K.jsx)(c.Z,{}),(0,K.jsx)(I.Z,{fontWeight:500,children:new Date((null===le||void 0===le||null===(D=le.extra)||void 0===D?void 0:D.createdAt)||"").toLocaleString()})]})})}),(0,K.jsx)(m.ZP,{item:!0,xs:12,children:(0,K.jsx)(u.Z,{title:"Ng\xf4n ng\u1eef l\u1eadp tr\xecnh",placement:"top",children:(0,K.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center",gap:"10px",width:"fit-content"},children:[(0,K.jsx)(a.Z,{}),(0,K.jsx)(I.Z,{fontWeight:500,children:(null===ne||void 0===ne?void 0:ne.language.name)||"Kh\xf4ng x\xe1c \u0111\u1ecbnh"})]})})})]})}),(0,K.jsx)(_.Z,{sx:{padding:"15px",marginTop:"15px"},children:(0,K.jsxs)(m.ZP,{container:!0,spacing:1,children:[(0,K.jsx)(m.ZP,{item:!0,xs:12,children:(0,K.jsx)(k.Z,{children:"\u0110\u1ed3 th\u1ecb t\u01b0\u01a1ng \u0111\u1ed3ng"})}),(0,K.jsx)(m.ZP,{item:!0,xs:12,children:(0,K.jsx)(I.Z,{children:"\u0110\u1ed9 t\u01b0\u01a1ng \u0111\u1ed3ng cao nh\u1ea5t c\u1ee7a b\xe0i n\u1ed9p n\xe0y (m\xe0u \u0111\u1ecf) so v\u1edbi \u0111\u1ed9 t\u01b0\u01a1ng \u0111\u1ed3ng cao nh\u1ea5t c\u1ee7a c\xe1c b\xe0i n\u1ed9p kh\xe1c."})}),(0,K.jsx)(m.ZP,{item:!0,xs:12,children:(0,K.jsx)(E.Z,{xAxisData:he,y:xe,field:E.W.SIMILARITY,currentValue:100*((null===le||void 0===le||null===(U=le.fileScoring)||void 0===U||null===(Y=U.similarityScore)||void 0===Y?void 0:Y.similarity)||0)})})]})})]})]})]})})]})]})]})}},6517:(e,r,i)=>{i.d(r,{Z:()=>l});var n=i(74922),t=i(79536),s=i(80007),a=i(46417);const l=e=>{const r=e.value>75?"danger":e.value>70?"warning":"success",i=e.value>75||e.value>70?"--white":"--eerie-black-00";return(0,a.jsx)(t.Z,{sx:{backgroundColor:"var(--white)",borderRadius:"20px",width:"100%"},children:(0,a.jsx)(n.Z,{determinate:!0,variant:"outlined",color:r,size:"sm",thickness:24,value:Number(e.value),sx:{"--LinearProgress-radius":"20px","--LinearProgress-thickness":"24px"},children:(0,a.jsx)(s.Z,{colorname:i,zIndex:1,children:"".concat(Math.round(Number(e.value)),"%")})})})}},67077:(e,r,i)=>{i.d(r,{W:()=>j,Z:()=>y});var n=i(79536),t=i(26568),s=i(38094),a=i(35765),l=i(32762),o=i(95603),d=i(89899),c=i(58956),h=i(47313),x=i(17592);const u=(0,x.ZP)("path")((e=>{let{theme:r,fill:i}=e;return{fill:i,stroke:r.palette.text.primary,shapeRendering:"crispEdges",strokeWidth:1}})),g=(0,x.ZP)("text")((e=>{let{theme:r}=e;return{stroke:"none",fill:r.palette.text.primary,shapeRendering:"crispEdges",fontSize:"14px"}}));var m=i(46417);const p=e=>{let{threshold:r,label:i,lineStyle:n,labelStyle:s,labelAlign:a}=e;const{left:l,top:o,width:d,height:c}=(0,t.z)(),x=l+d*(r/100);return(0,m.jsxs)(h.Fragment,{children:[(0,m.jsx)(u,{d:"M ".concat(x," ").concat(o," l 0 ").concat(c),fill:"none",...n}),(0,m.jsx)(g,{x:x,y:o-5,textAnchor:a,dominantBaseline:"text-after-edge",fontSize:"14px",...s,children:i})]})},v=e=>{let{label:r}=e;const{left:i,top:n,width:s,height:a}=(0,t.z)();return(0,m.jsxs)(h.Fragment,{children:[(0,m.jsx)(u,{d:"M ".concat(i," ").concat(n+a," l ").concat(s," 0"),fill:"none"}),[0,10,20,30,40,50,60,70,80,90,100].map(((e,r)=>{const t=i+s*(e/100);return(0,m.jsxs)(h.Fragment,{children:[(0,m.jsx)(u,{d:"M ".concat(t," ").concat(n+a," l 0 5"),fill:"none"}),(0,m.jsxs)(g,{x:t,y:n+a+10,textAnchor:"middle",dominantBaseline:"text-before-edge",fontSize:"12px",children:[e,"%"]})]},r)})),(0,m.jsx)(g,{x:i+s/2,y:n+a+30,textAnchor:"middle",dominantBaseline:"text-before-edge",fontSize:"14px",children:r})]})};var Z=i(75590),_=i(58467),f=i(90469);let j=function(e){return e.SIMILARITY="similarity",e.LONGEST_FRAGMENT="longestFragment",e.TOTAL_OVERLAP="totalOverlap",e}({});const y=e=>{let{xAxisData:r,y:i,threshold:h,currentValue:x,field:u=j.SIMILARITY}=e;const{t:g}=(0,Z.$G)(),y=(0,_.s0)(),b=e=>{const{left:i,width:n}=(0,t.z)(),a=r[e.ownerState.dataIndex]/100,l=(r[e.ownerState.dataIndex]+5)/100;if(u===j.SIMILARITY&&void 0!==h){const r=i+n*(h/100),t=e.style.x.animation.to+e.style.width.animation.to>r?"var(--blue-500)":"var(--blue-1)";return(0,m.jsx)(s.ZL,{...e,fill:t,cursor:"pointer",onClick:()=>{y(f._.lecturer.exam.code_plagiarism_detection_submissions+"?startSimilarity=".concat(a,"&endSimilarity=").concat(l))}})}if(u===j.SIMILARITY&&void 0===h&&void 0!==x){const r=i+n*(x/100);let t=e.style.x.animation.to+e.style.width.animation.to>r&&e.style.x.animation.to<r,o=t?"red":"var(--blue-500)";return 100===x?(t=e.style.x.animation.to+e.style.width.animation.to+1>r&&e.style.x.animation.to<r,o=t?"red":"var(--blue-500)",(0,m.jsx)(s.ZL,{...e,fill:o,onClick:()=>{y(f._.lecturer.exam.code_plagiarism_detection_submissions+"?startSimilarity=".concat(a,"&endSimilarity=").concat(l))}})):(0,m.jsx)(s.ZL,{...e,fill:o,onClick:()=>{y(f._.lecturer.exam.code_plagiarism_detection_submissions+"?startSimilarity=".concat(a,"&endSimilarity=").concat(l))}})}return(0,m.jsx)(s.ZL,{...e,fill:"var(--blue-500)",onClick:()=>{y(f._.lecturer.exam.code_plagiarism_detection_submissions+"?startSimilarity=".concat(a,"&endSimilarity=").concat(l))}})};return(0,m.jsx)(n.Z,{sx:{width:"100%",maxWidth:1e3},children:(0,m.jsxs)(c.D,{xAxis:[{scaleType:"band",data:r,valueFormatter:e=>"".concat(e,"%-").concat(e+5,"%")}],series:[{type:"bar",data:i,valueFormatter:e=>g("code_plagiarism_report_analyzed_submissions_count",{count:e||0})}],yAxis:[{label:g("code_plagiarism_submissions_count_title"),scaleType:"linear"}],height:400,sx:{[".".concat(a.x.left," .").concat(a.x.label)]:{transform:"translate(-10px, 0)"}},children:[(0,m.jsx)(l.E,{slots:{bar:e=>(0,m.jsx)(b,{...e})}}),(0,m.jsx)(d.N,{}),(0,m.jsx)(v,{label:u===j.SIMILARITY?g("code_plagiarism_similarity_title"):u===j.LONGEST_FRAGMENT?"\u0110o\u1ea1n t\u01b0\u01a1ng \u0111\u1ed3ng d\xe0i nh\u1ea5t":"Tr\xf9ng l\u1eb7p t\u1ed5ng c\u1ed9ng"}),u===j.SIMILARITY&&void 0!==h&&(0,m.jsx)(p,{threshold:h||0,label:g("code_plagiarism_threshold_title"),lineStyle:{stroke:"black"},labelStyle:{fontSize:"10"},labelAlign:"start"}),u===j.SIMILARITY&&void 0===h&&void 0!==x&&(0,m.jsx)(p,{threshold:x||0,label:"",lineStyle:{stroke:"black"},labelStyle:{fontSize:"10"},labelAlign:"start"}),(0,m.jsx)(o.a,{})]})})}},14281:(e,r,i)=>{var n=i(64836);r.Z=void 0;var t=n(i(45045)),s=i(46417);r.Z=(0,t.default)((0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"}),"AccountCircle")},7370:(e,r,i)=>{var n=i(64836);r.Z=void 0;var t=n(i(45045)),s=i(46417);r.Z=(0,t.default)((0,s.jsx)("path",{d:"M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2M9 12c.83 0 1.5.67 1.5 1.5S9.83 15 9 15s-1.5-.67-1.5-1.5S8.17 12 9 12m3 6H6v-.75c0-1 2-1.5 3-1.5s3 .5 3 1.5zm1-9h-2V4h2zm5 7.5h-4V15h4zm0-3h-4V12h4z"}),"Badge")},80041:(e,r,i)=>{var n=i(64836);r.Z=void 0;var t=n(i(45045)),s=i(46417);r.Z=(0,t.default)((0,s.jsx)("path",{d:"m19.17 12-4.58-4.59L16 6l6 6-3.59 3.59L17 14.17zM1.39 4.22l4.19 4.19L2 12l6 6 1.41-1.41L4.83 12 7 9.83l12.78 12.78 1.41-1.41L2.81 2.81z"}),"CodeOff")},86372:(e,r,i)=>{var n=i(64836);r.Z=void 0;var t=n(i(45045)),s=i(46417);r.Z=(0,t.default)([(0,s.jsx)("path",{d:"m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M13 20.01 4 11V4h7v-.01l9 9z"},"0"),(0,s.jsx)("circle",{cx:"6.5",cy:"6.5",r:"1.5"},"1")],"LocalOfferOutlined")},57794:(e,r,i)=>{var n=i(64836);r.Z=void 0;var t=n(i(45045)),s=i(46417);r.Z=(0,t.default)([(0,s.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,s.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"Schedule")},94380:(e,r,i)=>{var n=i(64836);r.Z=void 0;var t=n(i(45045)),s=i(46417);r.Z=(0,t.default)((0,s.jsx)("path",{d:"M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6M3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65"}),"Toll")},91825:(e,r,i)=>{var n=i(64836);r.Z=void 0;var t=n(i(45045)),s=i(46417);r.Z=(0,t.default)([(0,s.jsx)("path",{d:"M15 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6",opacity:".3"},"0"),(0,s.jsx)("path",{d:"M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6M3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12c0 3.73 2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65"},"1")],"TollTwoTone")},74922:(e,r,i)=>{i.d(r,{Z:()=>L});var n=i(30168),t=i(63366),s=i(87462),a=i(47313),l=i(94146),o=i(31179),d=i(8007),c=i(30686),h=i(48114),x=i(8362),u=i(19422);function g(e){return(0,u.d6)("MuiLinearProgress",e)}(0,u.sI)("MuiLinearProgress",["root","determinate","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","sizeSm","sizeMd","sizeLg","variantPlain","variantOutlined","variantSoft","variantSolid"]);var m,p,v=i(60985),Z=i(27810),_=i(46417);const f=["children","className","component","color","size","variant","thickness","determinate","value","style","slots","slotProps"];let j,y;const b=(0,c.F4)(j||(j=m||(m=(0,n.Z)(["\n  0% {\n    left: var(--_LinearProgress-progressInset);\n    width: var(--LinearProgress-progressMinWidth);\n  }\n\n  25% {\n    width: var(--LinearProgress-progressMaxWidth);\n  }\n\n  50% {\n    left: var(--_LinearProgress-progressLeft);\n    width: var(--LinearProgress-progressMinWidth);\n  }\n\n  75% {\n    width: var(--LinearProgress-progressMaxWidth);\n  }\n\n  100% {\n    left: var(--_LinearProgress-progressInset);\n    width: var(--LinearProgress-progressMinWidth);\n  }\n"])))),P=(0,h.Z)("div",{name:"JoyLinearProgress",slot:"Root",overridesResolver:(e,r)=>r.root})((e=>{let{ownerState:r,theme:i}=e;var n,t,a,l;return(0,s.Z)({"--LinearProgress-radius":"var(--LinearProgress-thickness)","--LinearProgress-progressThickness":"var(--LinearProgress-thickness)","--LinearProgress-progressRadius":"max(var(--LinearProgress-radius) - var(--_LinearProgress-padding), min(var(--_LinearProgress-padding) / 2, var(--LinearProgress-radius) / 2))"},"sm"===r.size&&{"--LinearProgress-thickness":"4px"},"md"===r.size&&{"--LinearProgress-thickness":"6px"},"lg"===r.size&&{"--LinearProgress-thickness":"8px"},r.thickness&&{"--LinearProgress-thickness":"".concat(r.thickness,"px")},!r.determinate&&{"--LinearProgress-progressMinWidth":"calc(var(--LinearProgress-percent) * 1% / 2)","--LinearProgress-progressMaxWidth":"calc(var(--LinearProgress-percent) * 1%)","--_LinearProgress-progressLeft":"calc(100% - var(--LinearProgress-progressMinWidth) - var(--_LinearProgress-progressInset))","--_LinearProgress-progressInset":"calc(var(--LinearProgress-thickness) / 2 - var(--LinearProgress-progressThickness) / 2)"},{minBlockSize:"var(--LinearProgress-thickness)",boxSizing:"border-box",borderRadius:"var(--LinearProgress-radius)",display:"flex",justifyContent:"center",alignItems:"center",flex:1,padding:"var(--_LinearProgress-padding)",position:"relative"},null==(n=i.variants[r.variant])?void 0:n[r.color],{"--_LinearProgress-padding":"max((var(--LinearProgress-thickness) - 2 * var(--variant-borderWidth, 0px) - var(--LinearProgress-progressThickness)) / 2, 0px)","&::before":{content:'""',display:"block",boxSizing:"inherit",blockSize:"var(--LinearProgress-progressThickness)",borderRadius:"var(--LinearProgress-progressRadius)",backgroundColor:"currentColor",color:"inherit",position:"absolute"}},"soft"===r.variant&&{backgroundColor:i.variants.soft.neutral.backgroundColor,color:null==(t=i.variants.solid)?void 0:t[r.color].backgroundColor},"solid"===r.variant&&{backgroundColor:null==(a=i.variants.softHover)?void 0:a[r.color].backgroundColor,color:null==(l=i.variants.solid)?void 0:l[r.color].backgroundColor})}),(e=>{let{ownerState:r}=e;return r.determinate?{"&::before":{left:"var(--_LinearProgress-padding)",inlineSize:"calc(var(--LinearProgress-percent) * 1% - 2 * var(--_LinearProgress-padding))"}}:(0,c.iv)(y||(y=p||(p=(0,n.Z)(["\n          &::before {\n            animation: ","\n              var(--LinearProgress-circulation, 2.5s ease-in-out 0s infinite normal none running);\n          }\n        "]))),b)}),(e=>{let{ownerState:r,theme:i}=e;const{borderRadius:n,height:t}=(0,Z.V)({theme:i,ownerState:r},["borderRadius","height"]);return(0,s.Z)({},void 0!==n&&{"--LinearProgress-radius":n},void 0!==t&&{"--LinearProgress-thickness":t})})),S=a.forwardRef((function(e,r){const i=(0,x.Z)({props:e,name:"JoyLinearProgress"}),{children:n,className:a,component:c,color:h="primary",size:u="md",variant:m="soft",thickness:p,determinate:Z=!1,value:j=(Z?0:25),style:y,slots:b={},slotProps:S={}}=i,L=(0,t.Z)(i,f),k=(0,s.Z)({},i,{component:c,color:h,size:u,variant:m,thickness:p,value:j,determinate:Z,instanceSize:e.size}),I=(e=>{const{determinate:r,color:i,variant:n,size:t}=e,s={root:["root",r&&"determinate",i&&"color".concat((0,o.Z)(i)),n&&"variant".concat((0,o.Z)(n)),t&&"size".concat((0,o.Z)(t))]};return(0,d.Z)(s,g,{})})(k),w=(0,s.Z)({},L,{component:c,slots:b,slotProps:S}),[C,N]=(0,v.Z)("root",{ref:r,className:(0,l.Z)(I.root,a),elementType:P,externalForwardedProps:w,ownerState:k,additionalProps:(0,s.Z)({as:c,role:"progressbar",style:(0,s.Z)({},{"--LinearProgress-percent":j},y)},"number"===typeof j&&Z&&{"aria-valuenow":Math.round(j)})});return(0,_.jsx)(C,(0,s.Z)({},N,{children:n}))})),L=S},27810:(e,r,i)=>{i.d(r,{V:()=>t});var n=i(87462);const t=(e,r)=>{let{theme:i,ownerState:t}=e,s={};return t.sx&&(!function e(r){"function"===typeof r?e(r(i)):Array.isArray(r)?r.forEach((r=>{"boolean"!==typeof r&&e(r)})):"object"===typeof r&&(s=(0,n.Z)({},s,r))}(t.sx),r.forEach((e=>{const r=s[e];var n;"string"===typeof r||"number"===typeof r?"borderRadius"===e?s[e]="number"===typeof r?"".concat(r,"px"):(null==(n=i.vars)?void 0:n.radius[r])||r:-1!==["p","padding","m","margin"].indexOf(e)&&"number"===typeof r?s[e]=i.spacing(r):s[e]=r:s[e]="function"===typeof r?r(i):void 0}))),s}}}]);