"use strict";(self.webpackChunkfrontend_app=self.webpackChunkfrontend_app||[]).push([[6897],{83106:(e,r,a)=>{a.d(r,{Z:()=>c});var o=a(79536),n=a(82377),t=a(85833),i=a(75590);const s="styles_tableWrapper__zZ8q6";var l=a(46417);const c=e=>{const{loading:r=!1,dataList:a,tableHeader:c,onSelectData:d,visibleColumn:m,checkboxSelection:g,dataGridToolBar:p,pageSize:u,page:_,totalElement:h,onPaginationModelChange:v,columnGroupingModel:x,showVerticalCellBorder:f,customColumnMenu:Z,customFooter:b,onClickRow:y,columnHeaderHeight:w,cellClickParamFields:P,sx:S={},slots:C={},getCellClassName:j,getRowClassName:k,personalSx:L}=e,{t:N}=(0,i.$G)();return(0,l.jsx)(o.Z,{className:s,children:(0,l.jsx)(n._$,{loading:r,rows:a,columns:c,columnVisibilityModel:m,checkboxSelection:g,columnGroupingModel:x,initialState:{pagination:{paginationModel:{page:_,pageSize:u}}},showCellVerticalBorder:f,showColumnVerticalBorder:!1,rowCount:h,pageSizeOptions:[5,10,15,20],onRowSelectionModelChange:(e,r)=>{d(e,r)},onRowClick:y,density:"comfortable",getCellClassName:j,getRowClassName:k,disableColumnFilter:!0,disableColumnSelector:!0,disableRowSelectionOnClick:!0,experimentalFeatures:{columnGrouping:!0},slotProps:{toolbar:{printOptions:{disableToolbarButton:!0},csvOptions:{disableToolbarButton:!0}}},localeText:{MuiTablePagination:{labelDisplayedRows:e=>{let{from:r,to:a,count:o,page:n}=e;return N("common_table_from_to",{from:r,to:a,countText:o})},labelRowsPerPage:N("common_table_row_per_page")},footerRowSelected:e=>N("data_grid_selected_row",{selected:e}),toolbarDensity:N("data_grid_row_width"),toolbarDensityCompact:N("data_grid_row_width_compact"),toolbarDensityStandard:N("data_grid_row_width_standard"),toolbarDensityComfortable:N("data_grid_row_width_comfortable"),columnMenuSortAsc:N("data_grid_row_ascending"),columnMenuSortDesc:N("data_grid_row_descending"),columnMenuUnsort:N("data_grid_row_unsort")},slots:{toolbar:p&&p.enableToolbar?t.n:null,columnMenu:Z,footer:b,...C},sx:L?{...S}:{"& .MuiDataGrid-row:hover":{cursor:y?"pointer":"default"},"& .MuiDataGrid-columnHeaders":{backgroundColor:"var(--gray-10)"},...S},onCellClick:(e,r)=>{e.field&&null!==P&&void 0!==P&&P.includes(e.field)&&r.stopPropagation()},onPaginationModelChange:(e,r)=>{v(e,r)},getRowHeight:e.getRowHeight,columnHeaderHeight:w||56,"translation-key":["common_table_from_to","data_grid_row_width_compact","common_table_from_to","data_grid_row_width","data_grid_row_width_standard","data_grid_row_width_comfortable","data_grid_row_ascending","data_grid_row_descending","data_grid_selected_row"]})})}},5124:(e,r,a)=>{a.d(r,{Z:()=>w});var o=a(47313),n=a(57983),t=a(81195),i=a(1550),s=a(70501),l=a(49709),c=a(47131),d=a(31649),m=a(71263);const g="styles_gridContainer__PJ-uv",p="styles_formWrapper__IAM+P",u="styles_container__4T9+c",_="styles_inputField__f-Pmo",h="styles_button__lAwN0",v="styles_searchDivider__1NtG7";var x=a(9019),f=a(41727),Z=a(19536),b=a(75590),y=a(46417);const w=e=>{const{t:r}=(0,b.$G)(),{onSearchClick:a,placeHolder:w}=e,[P,S]=(0,o.useState)(!1),[C,j]=(0,o.useState)("");return(0,o.useEffect)((()=>{S(null!==C&&""!==C)}),[C]),(0,y.jsx)(x.ZP,{container:!0,className:g,style:{maxWidth:e.maxWidth?e.maxWidth:"600px"},children:(0,y.jsx)(x.ZP,{item:!0,xs:12,md:12,sm:12,lg:12,children:(0,y.jsx)(i.Z,{className:p,children:(0,y.jsx)(s.Z,{className:u,style:{width:"100%"},children:(0,y.jsx)(d.ZP,{className:_,placeholder:w||r("common_search"),onChange:e=>{j(e.target.value)},value:C,startAdornment:(0,y.jsxs)(f.Z,{position:"start",children:[(0,y.jsx)(l.Z,{title:r("search_bar_click"),arrow:!0,disableInteractive:!0,children:(0,y.jsx)(c.Z,{onClick:()=>{a(C)},children:(0,y.jsx)(n.Z,{})})}),(0,y.jsx)(Z.Z,{className:v,orientation:"vertical"})]}),endAdornment:(0,y.jsx)(f.Z,{position:"end",children:P?(0,y.jsx)(c.Z,{onClick:()=>{j(""),S(!1)},className:h,edge:"end",children:(0,y.jsx)(t.Z,{})}):(0,y.jsx)(c.Z,{className:h,disabled:!0,edge:"end",children:(0,y.jsx)(m.Z,{})})})})})})})})}},33099:(e,r,a)=>{a.d(r,{Z:()=>s});var o,n=a(30168),t=a(17592),i=a(61113);const s=(0,t.ZP)(i.Z)(o||(o=(0,n.Z)(['\n  font-family: "Montserrat";\n  font-style: ',";\n  font-weight: ",";\n  font-size: 22px;\n  line-height: 32px;\n  color: ",";\n  @media only screen and (max-width: 767px) {\n    font-size: 18px;\n  }\n"])),(e=>e.fontStyle||"normal"),(e=>e.fontWeight||600),(e=>"var(".concat(e.colorname||"--eerie-black-00",")")))},6517:(e,r,a)=>{a.d(r,{Z:()=>s});var o=a(74922),n=a(79536),t=a(80007),i=a(46417);const s=e=>{const r=e.value>75?"danger":e.value>70?"warning":"success",a=e.value>75||e.value>70?"--white":"--eerie-black-00";return(0,i.jsx)(n.Z,{sx:{backgroundColor:"var(--white)",borderRadius:"20px",width:"100%"},children:(0,i.jsx)(o.Z,{determinate:!0,variant:"outlined",color:r,size:"sm",thickness:24,value:Number(e.value),sx:{"--LinearProgress-radius":"20px","--LinearProgress-thickness":"24px"},children:(0,i.jsx)(t.Z,{colorname:a,zIndex:1,children:"".concat(Math.round(Number(e.value)),"%")})})})}},6897:(e,r,a)=>{a.r(r),a.d(r,{default:()=>G});var o=a(96447),n=a(61317),t=a(9019),i=a(79536),s=a(62481),l=a(9289),c=a(47131),d=a(73428),m=a(75908),g=a(17592),p=a(90200),u=a(31845),_=a(33099),h=a(80007),v=a(63408),x=a(47477),f=a(47313),Z=a(58467),b=a(2135),y=a(90469);const w={root:"styles_root__K4Mfx",container:"styles_container__o+OXs",mainContent:"styles_mainContent__M8THD",cardWrapper:"styles_cardWrapper__a1utu",cardTitleHeader:"styles_cardTitleHeader__H2Ql4",reportOpenTimeWrapper:"styles_reportOpenTimeWrapper__F-xnO",submissionsQuantity:"styles_submissionsQuantity__DsQjK",codeLanguage:"styles_codeLanguage__xrQX8",labelTitle:"styles_labelTitle__2CD4r",similarityWrapper:"styles_similarityWrapper__spGX7",formBody:"styles_formBody__DZ7At",drawerBody:"styles_drawerBody__CSRjA",drawerFieldContainer:"styles_drawerFieldContainer__-b4FJ",textEditor:"styles_textEditor__OOA2H",breadcumpWrapper:"styles_breadcumpWrapper__YQ1b+",icArrow:"styles_icArrow__0iY9y",cursorPointer:"styles_cursorPointer__MxW2L"};var P=a(83106),S=a(70501),C=a(1550),j=a(15103),k=a(88797),L=a(51405);const N="style_container__NOS2v",z="style_searchWrapper__wyVJs",M="style_colSearchContainer__HNMeY";var R=a(41835),T=a(5124),W=a(99140),H=a(46417);const I=()=>{const[e,r]=(0,f.useState)("name");return(0,H.jsxs)(S.Z,{className:N,children:[(0,H.jsxs)(i.Z,{className:z,children:[(0,H.jsx)(T.Z,{onSearchClick:e=>{console.log(e)}}),(0,H.jsxs)(C.Z,{className:M,children:[(0,H.jsx)(j.Z,{id:"colSearch",children:"T\xecm ki\u1ebfm theo c\u1ed9t"}),(0,H.jsxs)(k.Z,{labelId:"colSearch",id:"colSearchSelect",value:e,onChange:(e,a)=>{r(e.target.value)},label:"T\xecm ki\u1ebfm theo c\u1ed9t",children:[(0,H.jsx)(L.Z,{value:"name",children:"T\xean"}),(0,H.jsx)(L.Z,{value:"emai",children:"Email"}),(0,H.jsx)(L.Z,{value:"role",children:"Ch\u1ee9c v\u1ee5"})]})]})]}),(0,H.jsx)(W.Z,{btnType:W.s.Primary,startIcon:(0,H.jsx)(R.Z,{sx:{color:"white"}}),sx:{marginLeft:"15px",marginBottom:"10px"},children:"Xu\u1ea5t d\u1eef li\u1ec7u"})]})};var D=a(6517),A=a(75590);const B=(0,g.ZP)("main",{shouldForwardProp:e=>"open"!==e})((e=>{let{theme:r,open:a}=e;return{flexGrow:1,padding:r.spacing(3),transition:r.transitions.create("margin",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.leavingScreen}),marginRight:-450,...a&&{transition:r.transitions.create("margin",{easing:r.transitions.easing.easeOut,duration:r.transitions.duration.enteringScreen}),marginRight:0},position:"relative"}})),F=(0,g.ZP)(m.Z,{shouldForwardProp:e=>"open"!==e})((e=>{let{theme:r,open:a}=e;return{transition:r.transitions.create(["margin","width"],{easing:r.transitions.easing.sharp,duration:r.transitions.duration.leavingScreen}),...a&&{width:"calc(100% - ".concat(450,"px)"),transition:r.transitions.create(["margin","width"],{easing:r.transitions.easing.easeOut,duration:r.transitions.duration.enteringScreen}),marginRight:450}}})),O=(0,g.ZP)("div")((e=>{let{theme:r}=e;return{display:"flex",alignItems:"center",padding:r.spacing(0,1),...r.mixins.toolbar,justifyContent:"flex-start"}}));function G(){var e;const{t:r}=(0,A.$G)(),a=(0,Z.s0)(),[m]=(0,b.lr)(),g=m.get("questionId")||"0",S=(0,Z.TH)(),[C,j]=f.useState({pairs:(null===(e=S.state)||void 0===e?void 0:e.pairs)||[]}),k=[{field:"leftFile",headerName:r("code_plagiarism_left_file_title"),flex:1,renderCell:e=>{var a,o;return(0,H.jsx)(h.Z,{children:(null===(a=e.value)||void 0===a||null===(o=a.extra)||void 0===o?void 0:o.filename)||r("code_plagiarism_not_updated")})}},{field:"rightFile",headerName:r("code_plagiarism_right_file_title"),flex:1,renderCell:e=>{var a,o;return(0,H.jsx)(h.Z,{children:(null===(a=e.value)||void 0===a||null===(o=a.extra)||void 0===o?void 0:o.filename)||r("code_plagiarism_not_updated")})}},{field:"similarity",headerName:r("code_plagiarism_highest_similarity_title"),flex:1,renderCell:e=>(0,H.jsx)(D.Z,{value:100*Number(e.value)||0})},{field:"longestFragment",headerName:r("code_plagiarism_longest_fragment_title"),flex:1},{field:"totalOverlap",headerName:r("code_plagiarism_total_overlap_title"),flex:1}],L=f.useRef(null),{height:N}=(0,x.Z)({ref:L});return(0,H.jsxs)(t.ZP,{className:w.root,children:[(0,H.jsx)(p.Z,{ref:L}),(0,H.jsxs)(i.Z,{className:w.container,sx:{marginTop:"".concat(N,"px")},children:[(0,H.jsx)(s.ZP,{}),(0,H.jsx)(F,{position:"fixed",sx:{marginTop:"64px",backgroundColor:"white"},open:!1,children:(0,H.jsxs)(l.Z,{children:[(0,H.jsxs)(i.Z,{id:w.breadcumpWrapper,children:[(0,H.jsx)(v.Z,{colorname:"--blue-500",className:w.cursorPointer,onClick:()=>a(y._.lecturer.exam.submissions),children:"Danh s\xe1ch b\xe0i n\u1ed9p"}),(0,H.jsx)(o.Z,{id:w.icArrow}),(0,H.jsx)(v.Z,{colorname:"--blue-500",className:w.cursorPointer,onClick:()=>a(y._.lecturer.exam.code_plagiarism_detection),children:"T\u1ed5ng quan Ki\u1ec3m tra gian l\u1eadn"}),(0,H.jsx)(o.Z,{id:w.icArrow}),(0,H.jsx)(v.Z,{colorname:"--blue-500",children:"Danh s\xe1ch c\u1eb7p b\xe0i n\u1ed9p"})]}),(0,H.jsx)(c.Z,{color:"inherit","aria-label":"open drawer",edge:"end",sx:{display:"none"},children:(0,H.jsx)(n.Z,{color:"action"})})]})}),(0,H.jsxs)(B,{open:!0,className:w.mainContent,children:[(0,H.jsx)(O,{}),(0,H.jsx)(d.Z,{children:(0,H.jsxs)(i.Z,{component:"form",className:w.formBody,autoComplete:"off",children:[(0,H.jsx)(u.Z,{"translation-key":"code_plagiarism_file_pairs_list_title",children:r("code_plagiarism_file_pairs_list_title")}),(0,H.jsx)(_.Z,{children:"C\xe2u h\u1ecfi code 1 - B\xe0i ki\u1ec3m tra cu\u1ed1i k\u1ef3"}),(0,H.jsx)(h.Z,{"translation-key":"code_plagiarism_file_pairs_list_description",children:r("code_plagiarism_file_pairs_list_description")}),(0,H.jsxs)(t.ZP,{container:!0,spacing:1,children:[(0,H.jsx)(t.ZP,{item:!0,xs:12,children:(0,H.jsx)(I,{})}),(0,H.jsx)(t.ZP,{item:!0,xs:12,children:(0,H.jsx)(P.Z,{dataList:C.pairs||[],tableHeader:k,onSelectData:(e,r)=>{},dataGridToolBar:{enableToolbar:!0},page:0,pageSize:5,totalElement:100,onPaginationModelChange:(e,r)=>{console.log(e)},showVerticalCellBorder:!0,getRowHeight:()=>"auto",onClickRow:e=>{a(y._.lecturer.exam.code_plagiarism_detection_pairs_detail+"?questionId=".concat(g),{state:{data:e.row}})}})})]})]})})]})]})]})}},81195:(e,r,a)=>{var o=a(64836);r.Z=void 0;var n=o(a(45045)),t=a(46417);r.Z=(0,n.default)((0,t.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"}),"Cancel")},57983:(e,r,a)=>{var o=a(64836);r.Z=void 0;var n=o(a(45045)),t=a(46417);r.Z=(0,n.default)((0,t.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},41835:(e,r,a)=>{var o=a(64836);r.Z=void 0;var n=o(a(45045)),t=a(46417);r.Z=(0,n.default)((0,t.jsx)("path",{d:"m12 16.5 4-4h-3v-9h-2v9H8zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2"}),"SystemUpdateAlt")},74922:(e,r,a)=>{a.d(r,{Z:()=>C});var o=a(30168),n=a(63366),t=a(87462),i=a(47313),s=a(94146),l=a(88831),c=a(21921),d=a(30686),m=a(48114),g=a(8362),p=a(19422);function u(e){return(0,p.d6)("MuiLinearProgress",e)}(0,p.sI)("MuiLinearProgress",["root","determinate","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","sizeSm","sizeMd","sizeLg","variantPlain","variantOutlined","variantSoft","variantSolid"]);var _,h,v=a(60985),x=a(27810),f=a(46417);const Z=["children","className","component","color","size","variant","thickness","determinate","value","style","slots","slotProps"];let b,y;const w=(0,d.F4)(b||(b=_||(_=(0,o.Z)(["\n  0% {\n    left: var(--_LinearProgress-progressInset);\n    width: var(--LinearProgress-progressMinWidth);\n  }\n\n  25% {\n    width: var(--LinearProgress-progressMaxWidth);\n  }\n\n  50% {\n    left: var(--_LinearProgress-progressLeft);\n    width: var(--LinearProgress-progressMinWidth);\n  }\n\n  75% {\n    width: var(--LinearProgress-progressMaxWidth);\n  }\n\n  100% {\n    left: var(--_LinearProgress-progressInset);\n    width: var(--LinearProgress-progressMinWidth);\n  }\n"])))),P=(0,m.Z)("div",{name:"JoyLinearProgress",slot:"Root",overridesResolver:(e,r)=>r.root})((e=>{let{ownerState:r,theme:a}=e;var o,n,i,s;return(0,t.Z)({"--LinearProgress-radius":"var(--LinearProgress-thickness)","--LinearProgress-progressThickness":"var(--LinearProgress-thickness)","--LinearProgress-progressRadius":"max(var(--LinearProgress-radius) - var(--_LinearProgress-padding), min(var(--_LinearProgress-padding) / 2, var(--LinearProgress-radius) / 2))"},"sm"===r.size&&{"--LinearProgress-thickness":"4px"},"md"===r.size&&{"--LinearProgress-thickness":"6px"},"lg"===r.size&&{"--LinearProgress-thickness":"8px"},r.thickness&&{"--LinearProgress-thickness":"".concat(r.thickness,"px")},!r.determinate&&{"--LinearProgress-progressMinWidth":"calc(var(--LinearProgress-percent) * 1% / 2)","--LinearProgress-progressMaxWidth":"calc(var(--LinearProgress-percent) * 1%)","--_LinearProgress-progressLeft":"calc(100% - var(--LinearProgress-progressMinWidth) - var(--_LinearProgress-progressInset))","--_LinearProgress-progressInset":"calc(var(--LinearProgress-thickness) / 2 - var(--LinearProgress-progressThickness) / 2)"},{minBlockSize:"var(--LinearProgress-thickness)",boxSizing:"border-box",borderRadius:"var(--LinearProgress-radius)",display:"flex",justifyContent:"center",alignItems:"center",flex:1,padding:"var(--_LinearProgress-padding)",position:"relative"},null==(o=a.variants[r.variant])?void 0:o[r.color],{"--_LinearProgress-padding":"max((var(--LinearProgress-thickness) - 2 * var(--variant-borderWidth, 0px) - var(--LinearProgress-progressThickness)) / 2, 0px)","&::before":{content:'""',display:"block",boxSizing:"inherit",blockSize:"var(--LinearProgress-progressThickness)",borderRadius:"var(--LinearProgress-progressRadius)",backgroundColor:"currentColor",color:"inherit",position:"absolute"}},"soft"===r.variant&&{backgroundColor:a.variants.soft.neutral.backgroundColor,color:null==(n=a.variants.solid)?void 0:n[r.color].backgroundColor},"solid"===r.variant&&{backgroundColor:null==(i=a.variants.softHover)?void 0:i[r.color].backgroundColor,color:null==(s=a.variants.solid)?void 0:s[r.color].backgroundColor})}),(e=>{let{ownerState:r}=e;return r.determinate?{"&::before":{left:"var(--_LinearProgress-padding)",inlineSize:"calc(var(--LinearProgress-percent) * 1% - 2 * var(--_LinearProgress-padding))"}}:(0,d.iv)(y||(y=h||(h=(0,o.Z)(["\n          &::before {\n            animation: ","\n              var(--LinearProgress-circulation, 2.5s ease-in-out 0s infinite normal none running);\n          }\n        "]))),w)}),(e=>{let{ownerState:r,theme:a}=e;const{borderRadius:o,height:n}=(0,x.V)({theme:a,ownerState:r},["borderRadius","height"]);return(0,t.Z)({},void 0!==o&&{"--LinearProgress-radius":o},void 0!==n&&{"--LinearProgress-thickness":n})})),S=i.forwardRef((function(e,r){const a=(0,g.Z)({props:e,name:"JoyLinearProgress"}),{children:o,className:i,component:d,color:m="primary",size:p="md",variant:_="soft",thickness:h,determinate:x=!1,value:b=(x?0:25),style:y,slots:w={},slotProps:S={}}=a,C=(0,n.Z)(a,Z),j=(0,t.Z)({},a,{component:d,color:m,size:p,variant:_,thickness:h,value:b,determinate:x,instanceSize:e.size}),k=(e=>{const{determinate:r,color:a,variant:o,size:n}=e,t={root:["root",r&&"determinate",a&&"color".concat((0,l.Z)(a)),o&&"variant".concat((0,l.Z)(o)),n&&"size".concat((0,l.Z)(n))]};return(0,c.Z)(t,u,{})})(j),L=(0,t.Z)({},C,{component:d,slots:w,slotProps:S}),[N,z]=(0,v.Z)("root",{ref:r,className:(0,s.Z)(k.root,i),elementType:P,externalForwardedProps:L,ownerState:j,additionalProps:(0,t.Z)({as:d,role:"progressbar",style:(0,t.Z)({},{"--LinearProgress-percent":b},y)},"number"===typeof b&&x&&{"aria-valuenow":Math.round(b)})});return(0,f.jsx)(N,(0,t.Z)({},z,{children:o}))})),C=S},27810:(e,r,a)=>{a.d(r,{V:()=>n});var o=a(87462);const n=(e,r)=>{let{theme:a,ownerState:n}=e,t={};return n.sx&&(!function e(r){"function"===typeof r?e(r(a)):Array.isArray(r)?r.forEach((r=>{"boolean"!==typeof r&&e(r)})):"object"===typeof r&&(t=(0,o.Z)({},t,r))}(n.sx),r.forEach((e=>{const r=t[e];var o;"string"===typeof r||"number"===typeof r?"borderRadius"===e?t[e]="number"===typeof r?"".concat(r,"px"):(null==(o=a.vars)?void 0:o.radius[r])||r:-1!==["p","padding","m","margin"].indexOf(e)&&"number"===typeof r?t[e]=a.spacing(r):t[e]=r:t[e]="function"===typeof r?r(a):void 0}))),t}},71263:(e,r,a)=>{a.d(r,{Z:()=>x});var o=a(87462),n=a(63366),t=a(47313),i=a(94146),s=a(21921),l=a(17592),c=a(77342),d=a(91615),m=a(77430),g=a(32298);function p(e){return(0,g.ZP)("MuiIcon",e)}(0,m.Z)("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var u=a(46417);const _=["baseClassName","className","color","component","fontSize"],h=(0,l.ZP)("span",{name:"MuiIcon",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,"inherit"!==a.color&&r["color".concat((0,d.Z)(a.color))],r["fontSize".concat((0,d.Z)(a.fontSize))]]}})((e=>{let{theme:r,ownerState:a}=e;return{userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,fontSize:{inherit:"inherit",small:r.typography.pxToRem(20),medium:r.typography.pxToRem(24),large:r.typography.pxToRem(36)}[a.fontSize],color:{primary:(r.vars||r).palette.primary.main,secondary:(r.vars||r).palette.secondary.main,info:(r.vars||r).palette.info.main,success:(r.vars||r).palette.success.main,warning:(r.vars||r).palette.warning.main,action:(r.vars||r).palette.action.active,error:(r.vars||r).palette.error.main,disabled:(r.vars||r).palette.action.disabled,inherit:void 0}[a.color]}})),v=t.forwardRef((function(e,r){const a=(0,c.Z)({props:e,name:"MuiIcon"}),{baseClassName:t="material-icons",className:l,color:m="inherit",component:g="span",fontSize:v="medium"}=a,x=(0,n.Z)(a,_),f=(0,o.Z)({},a,{baseClassName:t,color:m,component:g,fontSize:v}),Z=(e=>{const{color:r,fontSize:a,classes:o}=e,n={root:["root","inherit"!==r&&"color".concat((0,d.Z)(r)),"fontSize".concat((0,d.Z)(a))]};return(0,s.Z)(n,p,o)})(f);return(0,u.jsx)(h,(0,o.Z)({as:g,className:(0,i.Z)(t,"notranslate",Z.root,l),ownerState:f,"aria-hidden":!0,ref:r},x))}));v.muiName="Icon";const x=v}}]);