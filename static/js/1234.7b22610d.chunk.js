"use strict";(self.webpackChunkfrontend_app=self.webpackChunkfrontend_app||[]).push([[1234],{45791:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(89087),r=t(24858),i=t(46417);const o=e=>{const{value:n,onChange:t,options:o,borderRadius:s,height:l,fontFamily:d,fontSize:c,fontWeight:u}=e;return(0,i.jsx)(a.Z,{value:n,onChange:(e,n)=>t(n),sx:{borderRadius:s||"12px",height:l||"38px",fontFamily:d||"Roboto,sans-serif",fontSize:c||"14px",fontWeight:u||"400"},children:o.map((e=>(0,i.jsx)(r.Z,{value:e.value,children:e.label},e.value)))})}},28259:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ne});var a=t(9019),r=t(47825),i=t(79536),o=t(61113),s=t(89840),l=t(65033),d=t(42832),c=t(19536),u=t(44758),m=t(83213),p=t(90200),_=t(92556),h=t(80007),x=t(99221),v=t(47313),g=t(58467);const f="styles_root__5EdnR",y="styles_pageTitle__IlU4t",Z="styles_container__-tP7E",b="styles_tabWrapper__Ik2yD",j="styles_formBody__51KHQ",q="styles_breadCump__-642c",C="styles_textEditor__J+zHj";var k=t(93714),P=t(6306),I=t(90469),S=t(47477),w=t(75590),R=t(23885),z=t(75627),B=t(82098),F=t(21933),N=t(62563),D=t(33060),W=t(65339),H=t(26581),E=t(3347),V=t(91603),T=t(52002),M=t(35659),O=t(27013),L=t(8479),Q=t(90182),A=t(45791),J=t(24858),K=t(89087),X=t(28538),G=t(65537),U=t(49132),Y=t(33117),$=t(46417);const ee=[{type:"all",description:""},{type:"archive",description:".7z .bdoc .cdoc .ddoc .gtar .tgz .gz .gzip .hqx .rar .sit .tar .zip"},{type:"document",description:".doc .docx .epub .gdoc .odt .ott .oth .pdf .rtf"},{type:"image",description:".ai .bmp .gdraw .gif .ico .jpe .jpeg .jpg .pct .pic .pict .png .svg .svgz .tif .tiff"},{type:"video",description:".3gp .avi .dv .dif .flv .f4v .fmp4 .mov .movie .mp4 .m4v .mpeg .mpe .mpg .ogv .qt .rmvb .rv .ts .webm .wmv .asf"},{type:"audio",description:".aac .aif .aiff .aifc .au .flac .m3u .mp3 .m4a .oga .ogg .ra .ram .rm .wav .wma"}],ne=e=>{var n,t,ne,te,ae;const{t:re,i18n:ie}=(0,w.$G)(),[oe,se]=(0,v.useState)("editor"),[le,de]=(0,v.useState)(!0),[ce,ue]=(0,v.useState)(!0),[me,pe]=(0,v.useState)(!0),[_e,he]=(0,v.useState)("0"),[xe,ve]=(0,v.useState)(0),[ge,fe]=(0,v.useState)((()=>R.ZP.language)),[ye,Ze]=(0,v.useState)(0),[be,je]=(0,v.useState)([]),[qe,Ce]=(0,v.useState)(!1),[ke,Pe]=(0,v.useState)(!1),[Ie,Se]=(0,v.useState)(O.N.Error),[we,Re]=(0,v.useState)(""),ze=(0,g.s0)(),Be=(0,v.useRef)(null);let{height:Fe}=(0,S.Z)({ref:Be});e.insideCrumb&&(Fe=0);const Ne=(0,g.UO)(),De=(0,v.useMemo)((()=>F.Ry().shape({questionName:F.Z_().required(re("question_name_required")).trim(),questionDescription:F.Z_().required(re("question_description_required")).trim("").test("isQuillEmpty",re("question_description_required"),(e=>!(0,H.Z)(e))),defaultScore:F.Z_().required(re("question_default_score_required")).test("is-decimal","Invalid number, default score must be a number greater than or equal 0",(e=>(0,E.K)(e))).transform((e=>e.replace(",","."))),generalDescription:F.Z_().trim(""),responseFormat:F.Z_().required(re("response_format_required")),responseRequired:F.Z_().required(re("response_required")),responseFieldLines:F.Z_().required(re("response_field_lines_required")),attachments:F.Z_().required(re("attachments_required")),attachmentsRequired:F.Z_().required(re("attachments_required")),graderInfo:F.Z_(),graderInfoFormat:F.Rx(),responseTemplate:F.Z_(),responseTemplateFormat:F.Rx(),fileTypesList:F.IX().when("attachments",((e,n)=>{let[t]=e;return 0!==Number(t)?n.required(re("file_types_required")):n.notRequired()})),minWord:F.Rx().required(re("min_word_required")).typeError(re("invalid_type",{name:re("essay_min_word"),type:re("type_number")})).min(-1,re("min_word_invalid")).integer(re("min_word_invalid")),maxWord:F.Rx().required(re("max_word_required")).typeError(re("invalid_type",{name:re("essay_max_word"),type:re("type_number")})).min(-1,re("max_word_invalid")).integer(re("max_word_invalid")),maxBytes:F.Z_().required(re("max_bytes_required")).typeError(re("invalid_type",{name:re("question_management_default_score"),type:re("type_number")}))})),[re]),{control:We,handleSubmit:He,watch:Ee,formState:{errors:Ve},trigger:Te,setValue:Me}=(0,z.cI)({resolver:(0,N.X)(De),defaultValues:{questionName:"",questionDescription:"",defaultScore:"0",generalDescription:"",responseFormat:"editor",responseRequired:"0",responseFieldLines:"10",attachments:"0",attachmentsRequired:"0",graderInfo:"",responseTemplate:"",fileTypesList:[],minWord:-1,maxWord:-1,maxBytes:"1000"}});console.log(Ve);const Oe=Ee("responseFormat"),Le=Ee("responseRequired"),Qe=Ee("attachments"),Ae=Ee("fileTypesList"),Je=(0,g.TH)(),Ke=null===(n=Je.state)||void 0===n?void 0:n.courseId,Xe=null===(t=Je.state)||void 0===t?void 0:t.isQuestionBank,Ge=(null===(ne=Je.state)||void 0===ne||ne.categoryName,(0,g.UO)().categoryId),Ue=(0,G.v9)(Y.HF),Ye=(0,G.I0)(),$e=async e=>{try{const n=await W.a.getQuestionsByQuestionId(e);Ye((0,U.HM)(n))}catch(n){console.log(n)}};(0,v.useEffect)((()=>{ie.language!==ge&&null!==Ve&&void 0!==Ve&&Ve.questionName&&(console.log("triggered"),Te(),fe(ie.language))}),[ie.language]),(0,v.useEffect)((()=>{se(Oe),"no_online"===Oe&&0===xe&&Me("attachments","1")}),[Oe]),(0,v.useEffect)((()=>{he(Le)}),[Le]),(0,v.useEffect)((()=>{ve(Number(Qe))}),[Qe]),(0,v.useEffect)((()=>{je(Ae||[])}),[Ae]);const en=[{value:"editor",label:re("HTML_editor")},{value:"plain",label:re("plain_text")},{value:"no_online",label:re("no_online_text")}],nn=[{value:"1",label:re("require_enter_text")},{value:"0",label:re("optional_enter_text")}],tn=[{value:"2",label:re("response_field_lines",{lines:2})},{value:"3",label:re("response_field_lines",{lines:3})},{value:"5",label:re("response_field_lines",{lines:5})},{value:"10",label:re("response_field_lines",{lines:10})},{value:"15",label:re("response_field_lines",{lines:15})},{value:"20",label:re("response_field_lines",{lines:20})},{value:"25",label:re("response_field_lines",{lines:25})},{value:"30",label:re("response_field_lines",{lines:30})},{value:"35",label:re("response_field_lines",{lines:35})},{value:"40",label:re("response_field_lines",{lines:40})}],an=[{value:"0",label:re("no_attachments")},{value:"1",label:re("num_attachment",{num:1})},{value:"2",label:re("num_attachment",{num:2})},{value:"3",label:re("num_attachment",{num:3})},{value:"-1",label:re("unlimited_attachment")}],rn=[{value:"0",label:re("attachments_are_optional")},{value:"1",label:re("num_attachment",{num:1})},{value:"2",label:re("num_attachment",{num:2})},{value:"3",label:re("num_attachment",{num:3})}],on=[{value:"10",label:"10 KB"},{value:"50",label:"50 KB"},{value:"100",label:"100 KB"},{value:"500",label:"500 KB"},{value:"1000",label:"1 MB"},{value:"2000",label:"2 MB"},{value:"5000",label:"5 MB"},{value:"10000",label:"10 MB"},{value:"20000",label:"20 MB"},{value:"40000",label:"40 MB"}];return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Q.q,{children:(0,$.jsx)("title",{children:"Create essay question"})}),(0,$.jsxs)(a.ZP,{className:f,children:[(0,$.jsx)(p.Z,{ref:Be}),(0,$.jsxs)(r.Z,{style:{marginTop:"".concat(Fe,"px")},className:Z,children:[(0,$.jsx)(i.Z,{className:b,children:e.insideCrumb?(0,$.jsxs)(h.Z,{className:q,colorname:"--gray-50",fontWeight:"600",children:[(0,$.jsx)("span",{onClick:()=>ze("/lecturer/question-bank-management"),"translation-key":"common_question_bank",children:R.ZP.format(re("common_question_bank"),"firstUppercase")})," ","> ",(0,$.jsx)("span",{onClick:()=>ze("/lecturer/question-bank-management/".concat(Ne.categoryId)),children:"H\u1ecdc OOP"})," ","> ",(0,$.jsx)("span",{children:"T\u1ea1o c\xe2u h\u1ecfi"})]}):(0,$.jsxs)(h.Z,{className:q,colorname:"--gray-50",fontWeight:"600",children:[(0,$.jsx)("span",{"translation-key":"common_course_management",onClick:()=>ze(I._.lecturer.course.management),children:re("common_course_management")})," ","> ",(0,$.jsx)("span",{onClick:()=>ze(I._.lecturer.course.information.replace(":courseId","1")),children:e.courseName})," ","> ",(0,$.jsx)("span",{onClick:()=>ze(I._.lecturer.course.assignment),children:"Xem b\xe0i t\u1eadp"})," ","> ",(0,$.jsx)("span",{onClick:()=>ze(I._.lecturer.exam.create),"translation-key":"course_lecturer_assignment_create_exam",children:re("course_lecturer_assignment_create_exam")})," ","> ",(0,$.jsx)("span",{"translation-key":"question_management_create_question",children:re("question_management_create_question")})]})}),(0,$.jsx)("form",{onSubmit:He((async e=>{Ce(!0);const n={...e},t={organizationId:Ue.organization.organizationId,createdBy:Ue.userId,updatedBy:Ue.userId,difficulty:"EASY",name:n.questionName,questionText:n.questionDescription,generalFeedback:null===n||void 0===n?void 0:n.generalDescription,defaultMark:Number(null===n||void 0===n?void 0:n.defaultScore),qType:"ESSAY",questionBankCategoryId:Xe?Ge:void 0,responseFormat:n.responseFormat,responseRequired:Number(n.responseRequired),responseFieldLines:Number(n.responseFieldLines),attachments:Number(n.attachments),attachmentsRequired:Number(n.attachmentsRequired),graderInfo:n.graderInfo,responseTemplate:n.responseTemplate,minWordLimit:null===n||void 0===n?void 0:n.minWord,maxWordLimit:null===n||void 0===n?void 0:n.maxWord,maxBytes:Number(n.maxBytes),fileTypesList:n.fileTypesList?n.fileTypesList.join(",").toString():"all"};console.log(t),W.a.createEssayQuestion(t).then((e=>{console.log(e),Xe||$e(e.questionId),Se(O.N.Success),Re(re("question_management_create_question_success",{questionType:re("common_question_type_multi_choice")}))})).catch((e=>{console.log(e),Se(O.N.Error),Re(re("question_management_create_question_failed",{questionType:re("common_question_type_multi_choice")}))})).finally((()=>{Ce(!1),Pe(!0),ze(Xe?I._.lecturer.question_bank.detail.replace(":categoryId",null!==Ge&&void 0!==Ge?Ge:""):I._.lecturer.exam.create.replace(":courseId",Ke))}))}),(()=>Ze((e=>e+1)))),children:(0,$.jsxs)(i.Z,{className:j,children:[(0,$.jsxs)(o.Z,{className:y,"translation-key":["common_add","common_question_type_with_question_truefalse"],children:[re("common_add")," ",re("common_question_type_with_question_essay").toLocaleLowerCase()]}),(0,$.jsx)(a.ZP,{item:!0,xs:12,md:12,children:(0,$.jsxs)(a.ZP,{container:!0,spacing:3,children:[(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(z.Qr,{defaultValue:"",control:We,name:"questionName",rules:{required:!0},render:e=>{var n;let{field:{ref:t,...a}}=e;return(0,$.jsx)(V.Z,{error:Boolean(null===Ve||void 0===Ve?void 0:Ve.questionName),errorMessage:null===(n=Ve.questionName)||void 0===n?void 0:n.message,title:"".concat(re("exam_management_create_question_name")),type:"text",placeholder:re("exam_management_create_question_name"),titleRequired:!0,"translation-key":"exam_management_create_question_name",inputRef:t,...a})}})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(z.Qr,{defaultValue:"0",control:We,name:"defaultScore",render:e=>{var n;let{field:{ref:t,...a}}=e;return(0,$.jsx)(V.Z,{titleRequired:!0,error:Boolean(null===Ve||void 0===Ve?void 0:Ve.defaultScore),errorMessage:null===(n=Ve.defaultScore)||void 0===n?void 0:n.message,title:"".concat(re("question_management_default_score")),type:"text",placeholder:re("question_management_default_score"),required:!0,"translation-key":["question_management_default_score","question_default_score_description"],tooltipDescription:re("question_default_score_description"),...a,inputRef:t})}})})]})}),(0,$.jsx)(a.ZP,{item:!0,xs:12,md:12,children:(0,$.jsxs)(a.ZP,{container:!0,spacing:3,children:[(0,$.jsxs)(a.ZP,{item:!0,xs:6,md:6,children:[(0,$.jsx)(M.Z,{"translation-key":"exam_management_create_question_description",title:"".concat(re("exam_management_create_question_description")," "),titleRequired:!0}),(0,$.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,$.jsx)(a.ZP,{item:!0,xs:12,md:12,className:C,children:(0,$.jsx)(z.Qr,{defaultValue:"",control:We,name:"questionDescription",render:e=>{let{field:{ref:n,...t}}=e;return(0,$.jsx)(_.Z,{title:re("exam_management_create_question_description"),openDialog:!0,roundedBorder:!0,error:Boolean(null===Ve||void 0===Ve?void 0:Ve.questionDescription),placeholder:"".concat(re("question_management_enter_question_description"),"..."),required:!0,"translation-key":"question_management_enter_question_description",...t,submitCount:ye})}})}),(0,$.jsx)(a.ZP,{item:!0,xs:12,md:12,children:(0,$.jsx)($.Fragment,{})}),(0,$.jsx)(a.ZP,{item:!0,xs:12,md:12,children:(0,$.jsx)($.Fragment,{})}),(0,$.jsx)(a.ZP,{item:!0,xs:12,md:12,children:Boolean(null===Ve||void 0===Ve?void 0:Ve.questionDescription)&&(0,$.jsx)(B.Z,{children:null===(te=Ve.questionDescription)||void 0===te?void 0:te.message})})]})]}),(0,$.jsxs)(a.ZP,{item:!0,xs:6,md:6,children:[(0,$.jsx)(M.Z,{"translation-key":"question_management_general_comment",title:"".concat(re("question_management_general_comment")," "),optional:!0}),(0,$.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,$.jsx)(a.ZP,{item:!0,xs:12,md:12,className:C,children:(0,$.jsx)(z.Qr,{defaultValue:"",control:We,name:"generalDescription",render:e=>{let{field:n}=e;return(0,$.jsx)(_.Z,{title:re("question_management_general_comment"),openDialog:!0,error:Boolean(null===Ve||void 0===Ve?void 0:Ve.generalDescription),roundedBorder:!0,placeholder:"".concat(re("question_management_enter_general_comment"),"..."),"translation-key":"question_management_enter_general_comment",...n})}})}),(0,$.jsx)(a.ZP,{item:!0,xs:12,md:12,children:(0,$.jsx)($.Fragment,{})}),(0,$.jsx)(a.ZP,{item:!0,xs:12,md:12}),(0,$.jsx)(a.ZP,{item:!0,xs:12,md:12,children:Boolean(null===Ve||void 0===Ve?void 0:Ve.generalDescription)&&(0,$.jsx)(B.Z,{marginBottom:"10px",children:null===(ae=Ve.generalDescription)||void 0===ae?void 0:ae.message})})]})]})]})}),(0,$.jsxs)("div",{children:[(0,$.jsx)(s.Z,{onClick:()=>de(!le),sx:{paddingX:0},children:(0,$.jsxs)(a.ZP,{container:!0,alignItems:"center",columns:12,children:[(0,$.jsx)(a.ZP,{item:!0,xs:12,md:3,children:(0,$.jsx)(D.Z,{sx:{display:"inline"},"translation-key":"question_essay_response",children:re("question_essay_response")})}),(0,$.jsx)(a.ZP,{item:!0,xs:12,md:9,display:"flex",alignItems:"center",children:le?(0,$.jsx)(k.Z,{}):(0,$.jsx)(P.Z,{})})]})}),(0,$.jsx)(l.Z,{in:le,timeout:"auto",unmountOnExit:!0,children:(0,$.jsxs)(d.Z,{spacing:{xs:4},useFlexGap:!0,children:[(0,$.jsx)(c.Z,{}),(0,$.jsxs)(a.ZP,{container:!0,spacing:3,children:[(0,$.jsxs)(a.ZP,{item:!0,xs:12,md:6,children:[(0,$.jsx)(M.Z,{"translation-key":"question_essay_response_format",title:"".concat(re("question_essay_response_format")," ")}),(0,$.jsx)(z.Qr,{name:"responseFormat",control:We,defaultValue:"editor",render:e=>{let{field:{onChange:n,value:t}}=e;return(0,$.jsx)(A.Z,{value:t,onChange:n,options:en})}})]}),"no_online"!==oe&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(a.ZP,{item:!0,xs:12,md:6,children:[(0,$.jsx)(M.Z,{"translation-key":"question_essay_response_require",title:"".concat(re("question_essay_response_require")," ")}),(0,$.jsx)(z.Qr,{name:"responseRequired",control:We,defaultValue:"1",render:e=>{let{field:{onChange:n,value:t}}=e;return(0,$.jsx)(A.Z,{value:t,onChange:n,options:nn})}})]}),(0,$.jsxs)(a.ZP,{item:!0,xs:12,md:6,children:[(0,$.jsx)(M.Z,{"translation-key":"question_essay_response_field_lines",title:"".concat(re("question_essay_response_field_lines")," ")}),(0,$.jsx)(z.Qr,{defaultValue:"10",control:We,name:"responseFieldLines",render:e=>{let{field:{onChange:n,value:t}}=e;return(0,$.jsx)(A.Z,{value:t,onChange:n,options:tn})}})]}),1===Number(_e)&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,$.jsx)(z.Qr,{defaultValue:-1,control:We,name:"minWord",render:e=>{var n;let{field:{ref:t,...a}}=e;return(0,$.jsx)(V.Z,{error:Boolean(null===Ve||void 0===Ve?void 0:Ve.minWord),errorMessage:null===(n=Ve.minWord)||void 0===n?void 0:n.message,title:"".concat(re("essay_min_word")," *"),type:"text",placeholder:re("essay_enter_min_word"),required:!0,"translation-key":"essay_min_word",...a,inputRef:t})}})}),(0,$.jsx)(a.ZP,{item:!0,xs:12,md:6}),(0,$.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,$.jsx)(z.Qr,{defaultValue:-1,control:We,name:"maxWord",render:e=>{var n;let{field:{ref:t,...a}}=e;return(0,$.jsx)(V.Z,{error:Boolean(null===Ve||void 0===Ve?void 0:Ve.maxWord),errorMessage:null===(n=Ve.maxWord)||void 0===n?void 0:n.message,title:"".concat(re("essay_max_word")," *"),type:"text",placeholder:re("essay_enter_max_word"),required:!0,"translation-key":["essay_max_word","essay_max_word"],...a,inputRef:t})}})})]})]}),(0,$.jsx)(a.ZP,{item:!0,xs:12,md:12,children:(0,$.jsx)(x.Z,{"translation-key":"question_attachments_setting",children:re("question_attachments_setting")})}),(0,$.jsxs)(a.ZP,{item:!0,xs:12,md:6,children:[(0,$.jsx)(M.Z,{"translation-key":"question_essay_attachment",title:re("question_essay_attachment")}),(0,$.jsx)(z.Qr,{defaultValue:"no_online"===oe?"1":"0",control:We,name:"attachments",render:e=>{let{field:{onChange:n,value:t}}=e;return(0,$.jsx)(A.Z,{value:t,onChange:e=>{"no_online"===oe&&"0"===t&&(t="1"),n(e)},options:an})}})]}),("no_online"===oe||0!==xe)&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(a.ZP,{item:!0,xs:12,md:6,children:[(0,$.jsx)(M.Z,{"translation-key":"question_require_attachments",title:re("question_require_attachments")}),(0,$.jsx)(z.Qr,{defaultValue:"0",control:We,name:"attachmentsRequired",render:e=>{let{field:{onChange:n,value:t}}=e;return(0,$.jsx)(A.Z,{value:t,onChange:n,options:rn})}})]}),(0,$.jsxs)(a.ZP,{item:!0,xs:12,md:6,children:[(0,$.jsx)(M.Z,{"translation-key":"question_attachment_file_type",title:re("question_attachment_file_type")}),(0,$.jsx)(z.Qr,{defaultValue:[],name:"fileTypesList",control:We,render:e=>{let{field:{onChange:n,value:t}}=e;return(0,$.jsx)(K.Z,{sx:{height:"38px",borderRadius:"12px"},value:t,multiple:!0,onChange:(e,t)=>n(t),renderValue:e=>(0,$.jsx)(i.Z,{sx:{display:"flex",gap:"0.25rem"},children:e.map((e=>(0,$.jsx)(X.Z,{variant:"soft",color:"primary",children:e.value})))}),slotProps:{listbox:{style:{minWidth:"0px"}}},placeholder:re("question_attachment_file_type"),children:be.includes("all")?(0,$.jsxs)(J.Z,{value:ee[0].type,children:[(0,$.jsx)(u.Z,{checked:be.indexOf(ee[0].type)>-1}),(0,$.jsx)(m.Z,{primary:re("file_type_".concat(ee[0].type)),secondary:ee[0].description})]}):ee.map((e=>(0,$.jsxs)(J.Z,{value:e.type,children:[(0,$.jsx)(u.Z,{checked:be.indexOf(e.type)>-1}),(0,$.jsx)(m.Z,{primary:re("file_type_".concat(e.type)),secondary:e.description,sx:{overflowWrap:"break-word",wordWrap:"break-word",maxWidth:"400px"}})]},e.type)))})}})]}),(0,$.jsxs)(a.ZP,{item:!0,xs:12,md:6,children:[(0,$.jsx)(M.Z,{"translation-key":"max_byte_title",title:re("max_byte_title")}),(0,$.jsx)(z.Qr,{defaultValue:"1000",control:We,name:"maxBytes",render:e=>{let{field:{onChange:n,value:t}}=e;return(0,$.jsx)(A.Z,{value:t,onChange:n,options:on})}})]})]})]}),(0,$.jsx)(c.Z,{})]})})]}),(0,$.jsxs)("div",{children:[(0,$.jsx)(s.Z,{onClick:()=>ue(!ce),sx:{paddingX:0},children:(0,$.jsxs)(a.ZP,{container:!0,alignItems:"center",columns:12,children:[(0,$.jsx)(a.ZP,{item:!0,xs:12,md:3,children:(0,$.jsx)(D.Z,{sx:{display:"inline"},"translation-key":"question_essay_response_template",children:re("question_essay_response_template")})}),(0,$.jsx)(a.ZP,{item:!0,xs:12,md:9,display:"flex",alignItems:"center",children:ce?(0,$.jsx)(k.Z,{}):(0,$.jsx)(P.Z,{})})]})}),(0,$.jsx)(l.Z,{in:ce,timeout:"auto",unmountOnExit:!0,children:(0,$.jsxs)(d.Z,{spacing:{xs:4},useFlexGap:!0,children:[(0,$.jsx)(c.Z,{}),(0,$.jsxs)(a.ZP,{container:!0,spacing:1,columns:12,children:[(0,$.jsxs)(a.ZP,{item:!0,xs:12,md:12,className:C,children:[(0,$.jsx)(M.Z,{optional:!0,"translation-key":"question_response_template",title:re("question_response_template")}),(0,$.jsx)(z.Qr,{defaultValue:"",control:We,name:"responseTemplate",render:e=>{let{field:n}=e;return(0,$.jsx)(_.Z,{title:re("question_response_template"),roundedBorder:!0,openDialog:!0,error:Boolean(null===Ve||void 0===Ve?void 0:Ve.responseTemplate),placeholder:"".concat(re("question_enter_response_template"),"..."),required:!0,"translation-key":"question_enter_response_template",...n})}})]}),(0,$.jsx)(a.ZP,{item:!0,xs:12,md:3,children:(0,$.jsx)($.Fragment,{})}),(0,$.jsx)(a.ZP,{item:!0,xs:12,md:9})]}),(0,$.jsx)(c.Z,{})]})})]}),(0,$.jsxs)("div",{children:[(0,$.jsx)(s.Z,{onClick:()=>pe(!me),sx:{paddingX:0},children:(0,$.jsxs)(a.ZP,{container:!0,alignItems:"center",columns:12,children:[(0,$.jsx)(a.ZP,{item:!0,xs:12,md:3,children:(0,$.jsx)(D.Z,{sx:{display:"inline"},"translation-key":"question_essay_grader_info",children:re("question_essay_grader_info")})}),(0,$.jsx)(a.ZP,{item:!0,xs:12,md:9,display:"flex",alignItems:"center",children:me?(0,$.jsx)(k.Z,{}):(0,$.jsx)(P.Z,{})})]})}),(0,$.jsx)(l.Z,{in:me,timeout:"auto",unmountOnExit:!0,children:(0,$.jsxs)(d.Z,{spacing:{xs:4},useFlexGap:!0,children:[(0,$.jsx)(c.Z,{}),(0,$.jsxs)(a.ZP,{container:!0,spacing:1,columns:12,children:[(0,$.jsxs)(a.ZP,{item:!0,xs:12,md:12,className:C,children:[(0,$.jsx)(M.Z,{optional:!0,"translation-key":"question_essay_grader_info",title:re("question_essay_grader_info")})," ",(0,$.jsx)(z.Qr,{defaultValue:"",control:We,name:"graderInfo",render:e=>{let{field:n}=e;return(0,$.jsx)(_.Z,{roundedBorder:!0,openDialog:!0,error:Boolean(null===Ve||void 0===Ve?void 0:Ve.graderInfo),placeholder:"".concat(re("question_essay_enter_grader_info"),"..."),required:!0,"translation-key":"question_essay_enter_grader_info",...n,title:re("question_essay_grader_info")})}})]}),(0,$.jsx)(a.ZP,{item:!0,xs:12,md:3,children:(0,$.jsx)($.Fragment,{})})]}),(0,$.jsx)(c.Z,{})]})})]}),(0,$.jsxs)(d.Z,{spacing:{xs:2},direction:"row",justifyContent:"center",children:[(0,$.jsx)(L.Z,{loading:qe,variant:"solid",type:"submit","translation-key":"question_management_create_question",children:re("question_management_create_question")}),(0,$.jsx)(L.Z,{variant:"outlined","translation-key":"common_cancel",children:re("common_cancel")})]})]})}),(0,$.jsx)(O.Z,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:ke,setOpen:Pe,type:Ie,content:we})]}),(0,$.jsx)(T.Z,{})]})]})}},28538:(e,n,t)=>{t.d(n,{Z:()=>I});var a=t(63366),r=t(87462),i=t(47313),o=t(94146),s=t(21921),l=t(1527),d=t(88831),c=t(28334),u=t(8362),m=t(48114),p=t(15047),_=t(27810),h=t(19422);function x(e){return(0,h.d6)("MuiChip",e)}const v=(0,h.sI)("MuiChip",["root","clickable","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","disabled","endDecorator","focusVisible","label","labelSm","labelMd","labelLg","sizeSm","sizeMd","sizeLg","startDecorator","variantPlain","variantSolid","variantSoft","variantOutlined"]),g=i.createContext({disabled:void 0,variant:void 0,color:void 0});var f=t(60985),y=t(46417);const Z=["children","className","color","onClick","disabled","size","variant","startDecorator","endDecorator","component","slots","slotProps"],b=(0,m.Z)("div",{name:"JoyChip",slot:"Root",overridesResolver:(e,n)=>n.root})((e=>{let{theme:n,ownerState:t}=e;var a,i,o;const s=null==(a=n.variants[t.variant])?void 0:a[t.color],{borderRadius:l}=(0,_.V)({theme:n,ownerState:t},["borderRadius"]);return[(0,r.Z)({"--Chip-decoratorChildOffset":"min(calc(var(--Chip-paddingInline) - (var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2), var(--Chip-paddingInline))","--Chip-decoratorChildRadius":"max(var(--_Chip-radius) - var(--variant-borderWidth, 0px) - var(--_Chip-paddingBlock), min(var(--_Chip-paddingBlock) + var(--variant-borderWidth, 0px), var(--_Chip-radius) / 2))","--Chip-deleteRadius":"var(--Chip-decoratorChildRadius)","--Chip-deleteSize":"var(--Chip-decoratorChildHeight)","--Avatar-radius":"var(--Chip-decoratorChildRadius)","--Avatar-size":"var(--Chip-decoratorChildHeight)","--Icon-margin":"initial","--Icon-color":"currentColor","--unstable_actionRadius":"var(--_Chip-radius)"},"sm"===t.size&&{"--Chip-paddingInline":"0.375rem","--Chip-decoratorChildHeight":"calc(var(--_Chip-minHeight) - 2 * var(--variant-borderWidth))","--Icon-fontSize":n.vars.fontSize.sm,"--_Chip-minHeight":"var(--Chip-minHeight, 1.25rem)",gap:"3px"},"md"===t.size&&{"--Chip-paddingInline":"0.5rem","--Chip-decoratorChildHeight":"calc(var(--_Chip-minHeight) - 0.25rem - 2 * var(--variant-borderWidth))","--Icon-fontSize":n.vars.fontSize.md,"--_Chip-minHeight":"var(--Chip-minHeight, 1.5rem)",gap:"0.25rem"},"lg"===t.size&&{"--Chip-paddingInline":"0.75rem","--Chip-decoratorChildHeight":"calc(var(--_Chip-minHeight) - 0.375rem - 2 * var(--variant-borderWidth))","--Icon-fontSize":n.vars.fontSize.lg,"--_Chip-minHeight":"var(--Chip-minHeight, 1.75rem)",gap:"0.375rem"},{"--_Chip-radius":"var(--Chip-radius, 1.5rem)","--_Chip-paddingBlock":"max((var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2, 0px)",minHeight:"var(--_Chip-minHeight)",maxWidth:"max-content",paddingInline:"var(--Chip-paddingInline)",borderRadius:"var(--_Chip-radius)",position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap",textDecoration:"none",verticalAlign:"middle",boxSizing:"border-box"},n.typography["body-".concat({sm:"xs",md:"sm",lg:"md"}[t.size])],{fontWeight:n.vars.fontWeight.md,["&.".concat(v.disabled)]:{color:null==(i=n.variants["".concat(t.variant,"Disabled")])||null==(i=i[t.color])?void 0:i.color}}),...t.clickable?[{"--variant-borderWidth":"0px",color:null==s?void 0:s.color}]:[(0,r.Z)({backgroundColor:n.vars.palette.background.surface},s,{["&.".concat(v.disabled)]:null==(o=n.variants["".concat(t.variant,"Disabled")])?void 0:o[t.color]})],void 0!==l&&{"--_Chip-radius":l}]})),j=(0,m.Z)("span",{name:"JoyChip",slot:"Label",overridesResolver:(e,n)=>n.label})((e=>{let{ownerState:n}=e;return(0,r.Z)({display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",order:1,minInlineSize:0,flexGrow:1},n.clickable&&{zIndex:1,pointerEvents:"none"})})),q=(0,m.Z)("button",{name:"JoyChip",slot:"Action",overridesResolver:(e,n)=>n.action})((e=>{let{theme:n,ownerState:t}=e;var a,i,o,s;return[{"--Icon-color":"neutral"!==t.color||"solid"===t.variant?"currentColor":n.vars.palette.text.icon,position:"absolute",zIndex:0,top:0,left:0,bottom:0,right:0,width:"100%",border:"none",cursor:"pointer",padding:"initial",margin:"initial",backgroundColor:"initial",textDecoration:"none",borderRadius:"inherit",[n.focus.selector]:n.focus.default},(0,r.Z)({backgroundColor:n.vars.palette.background.surface},null==(a=n.variants[t.variant])?void 0:a[t.color]),{"&:hover":{"@media (hover: hover)":null==(i=n.variants["".concat(t.variant,"Hover")])?void 0:i[t.color]}},{"&:active":null==(o=n.variants["".concat(t.variant,"Active")])?void 0:o[t.color]},{["&.".concat(v.disabled)]:null==(s=n.variants["".concat(t.variant,"Disabled")])?void 0:s[t.color]}]})),C=(0,m.Z)("span",{name:"JoyChip",slot:"StartDecorator",overridesResolver:(e,n)=>n.startDecorator})({"--Avatar-marginInlineStart":"calc(var(--Chip-decoratorChildOffset) * -1)","--IconButton-margin":"0 calc(-1 * var(--Chip-paddingInline) / 3) 0 calc(var(--Chip-decoratorChildOffset) * -1)","--Icon-margin":"0 0 0 calc(var(--Chip-paddingInline) / -4)",display:"inherit",order:0,zIndex:1,pointerEvents:"none"}),k=(0,m.Z)("span",{name:"JoyChip",slot:"EndDecorator",overridesResolver:(e,n)=>n.endDecorator})({"--IconButton-margin":"0 calc(var(--Chip-decoratorChildOffset) * -1) 0 calc(-1 * var(--Chip-paddingInline) / 3)","--Icon-margin":"0 calc(var(--Chip-paddingInline) / -4) 0 0",display:"inherit",order:2,zIndex:1,pointerEvents:"none"}),P=i.forwardRef((function(e,n){const t=(0,u.Z)({props:e,name:"JoyChip"}),{children:m,className:_,color:h="neutral",onClick:v,disabled:P=!1,size:I="md",variant:S="soft",startDecorator:w,endDecorator:R,component:z,slots:B={},slotProps:F={}}=t,N=(0,a.Z)(t,Z),D=!!v||!!F.action,W=(0,r.Z)({},t,{disabled:P,size:I,color:h,variant:S,clickable:D,focusVisible:!1}),H="function"===typeof F.action?F.action(W):F.action,E=i.useRef(null),{focusVisible:V,getRootProps:T}=(0,l.U)((0,r.Z)({},H,{disabled:P,rootRef:E}));W.focusVisible=V;const M=(e=>{const{disabled:n,size:t,color:a,clickable:r,variant:i,focusVisible:o}=e,l={root:["root",n&&"disabled",a&&"color".concat((0,d.Z)(a)),t&&"size".concat((0,d.Z)(t)),i&&"variant".concat((0,d.Z)(i)),r&&"clickable"],action:["action",n&&"disabled",o&&"focusVisible"],label:["label",t&&"label".concat((0,d.Z)(t))],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return(0,s.Z)(l,x,{})})(W),O=(0,r.Z)({},N,{component:z,slots:B,slotProps:F}),[L,Q]=(0,f.Z)("root",{ref:n,className:(0,o.Z)(M.root,_),elementType:b,externalForwardedProps:O,ownerState:W}),[A,J]=(0,f.Z)("label",{className:M.label,elementType:j,externalForwardedProps:O,ownerState:W}),K=(0,c.Z)(J.id),[X,G]=(0,f.Z)("action",{className:M.action,elementType:q,externalForwardedProps:O,ownerState:W,getSlotProps:T,additionalProps:{"aria-labelledby":K,as:null==H?void 0:H.component,onClick:v}}),[U,Y]=(0,f.Z)("startDecorator",{className:M.startDecorator,elementType:C,externalForwardedProps:O,ownerState:W}),[$,ee]=(0,f.Z)("endDecorator",{className:M.endDecorator,elementType:k,externalForwardedProps:O,ownerState:W}),ne=i.useMemo((()=>({disabled:P})),[P]);return(0,y.jsx)(g.Provider,{value:ne,children:(0,y.jsx)(p.Yb,{variant:S,color:h,children:(0,y.jsxs)(L,(0,r.Z)({},Q,{children:[D&&(0,y.jsx)(X,(0,r.Z)({},G)),(0,y.jsx)(A,(0,r.Z)({},J,{id:K,children:m})),w&&(0,y.jsx)(U,(0,r.Z)({},Y,{children:w})),R&&(0,y.jsx)($,(0,r.Z)({},ee,{children:R}))]}))})})})),I=P},27810:(e,n,t)=>{t.d(n,{V:()=>r});var a=t(87462);const r=(e,n)=>{let{theme:t,ownerState:r}=e,i={};return r.sx&&(!function e(n){"function"===typeof n?e(n(t)):Array.isArray(n)?n.forEach((n=>{"boolean"!==typeof n&&e(n)})):"object"===typeof n&&(i=(0,a.Z)({},i,n))}(r.sx),n.forEach((e=>{const n=i[e];var a;"string"===typeof n||"number"===typeof n?"borderRadius"===e?i[e]="number"===typeof n?"".concat(n,"px"):(null==(a=t.vars)?void 0:a.radius[n])||n:-1!==["p","padding","m","margin"].indexOf(e)&&"number"===typeof n?i[e]=t.spacing(n):i[e]=n:i[e]="function"===typeof n?n(t):void 0}))),i}},44758:(e,n,t)=>{t.d(n,{Z:()=>P});var a=t(63366),r=t(87462),i=t(47313),o=t(94146),s=t(21921),l=t(17551),d=t(97423),c=t(54750),u=t(46417);const m=(0,c.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),p=(0,c.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),_=(0,c.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var h=t(91615),x=t(77342),v=t(17592),g=t(77430),f=t(32298);function y(e){return(0,f.ZP)("MuiCheckbox",e)}const Z=(0,g.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),b=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],j=(0,v.ZP)(d.Z,{shouldForwardProp:e=>(0,v.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.indeterminate&&n.indeterminate,n["size".concat((0,h.Z)(t.size))],"default"!==t.color&&n["color".concat((0,h.Z)(t.color))]]}})((e=>{let{theme:n,ownerState:t}=e;return(0,r.Z)({color:(n.vars||n).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===t.color?n.vars.palette.action.activeChannel:n.vars.palette[t.color].mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.Fq)("default"===t.color?n.palette.action.active:n.palette[t.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{["&.".concat(Z.checked,", &.").concat(Z.indeterminate)]:{color:(n.vars||n).palette[t.color].main},["&.".concat(Z.disabled)]:{color:(n.vars||n).palette.action.disabled}})})),q=(0,u.jsx)(p,{}),C=(0,u.jsx)(m,{}),k=(0,u.jsx)(_,{}),P=i.forwardRef((function(e,n){var t,l;const d=(0,x.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=q,color:m="primary",icon:p=C,indeterminate:_=!1,indeterminateIcon:v=k,inputProps:g,size:f="medium",className:Z}=d,P=(0,a.Z)(d,b),I=_?v:p,S=_?v:c,w=(0,r.Z)({},d,{color:m,indeterminate:_,size:f}),R=(e=>{const{classes:n,indeterminate:t,color:a,size:i}=e,o={root:["root",t&&"indeterminate","color".concat((0,h.Z)(a)),"size".concat((0,h.Z)(i))]},l=(0,s.Z)(o,y,n);return(0,r.Z)({},n,l)})(w);return(0,u.jsx)(j,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":_},g),icon:i.cloneElement(I,{fontSize:null!=(t=I.props.fontSize)?t:f}),checkedIcon:i.cloneElement(S,{fontSize:null!=(l=S.props.fontSize)?l:f}),ownerState:w,ref:n,className:(0,o.Z)(R.root,Z)},P,{classes:R}))}))},97423:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(63366),r=t(87462),i=t(47313),o=t(94146),s=t(21921),l=t(91615),d=t(17592),c=t(53800),u=t(99008),m=t(38743),p=t(77430),_=t(32298);function h(e){return(0,_.ZP)("PrivateSwitchBase",e)}(0,p.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var x=t(46417);const v=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],g=(0,d.ZP)(m.Z)((e=>{let{ownerState:n}=e;return(0,r.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),f=(0,d.ZP)("input",{shouldForwardProp:d.FO})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),y=i.forwardRef((function(e,n){const{autoFocus:t,checked:i,checkedIcon:d,className:m,defaultChecked:p,disabled:_,disableFocusRipple:y=!1,edge:Z=!1,icon:b,id:j,inputProps:q,inputRef:C,name:k,onBlur:P,onChange:I,onFocus:S,readOnly:w,required:R=!1,tabIndex:z,type:B,value:F}=e,N=(0,a.Z)(e,v),[D,W]=(0,c.Z)({controlled:i,default:Boolean(p),name:"SwitchBase",state:"checked"}),H=(0,u.Z)();let E=_;H&&"undefined"===typeof E&&(E=H.disabled);const V="checkbox"===B||"radio"===B,T=(0,r.Z)({},e,{checked:D,disabled:E,disableFocusRipple:y,edge:Z}),M=(e=>{const{classes:n,checked:t,disabled:a,edge:r}=e,i={root:["root",t&&"checked",a&&"disabled",r&&"edge".concat((0,l.Z)(r))],input:["input"]};return(0,s.Z)(i,h,n)})(T);return(0,x.jsxs)(g,(0,r.Z)({component:"span",className:(0,o.Z)(M.root,m),centerRipple:!0,focusRipple:!y,disabled:E,tabIndex:null,role:void 0,onFocus:e=>{S&&S(e),H&&H.onFocus&&H.onFocus(e)},onBlur:e=>{P&&P(e),H&&H.onBlur&&H.onBlur(e)},ownerState:T,ref:n},N,{children:[(0,x.jsx)(f,(0,r.Z)({autoFocus:t,checked:i,defaultChecked:p,className:M.input,disabled:E,id:V?j:void 0,name:k,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const n=e.target.checked;W(n),I&&I(e,n)},readOnly:w,ref:C,required:R,ownerState:T,tabIndex:z,type:B},"checkbox"===B&&void 0===F?{}:{value:F},q)),D?d:b]}))}))}}]);