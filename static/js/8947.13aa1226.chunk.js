(self.webpackChunkfrontend_app=self.webpackChunkfrontend_app||[]).push([[8947],{18708:(e,t,s)=>{"use strict";s.d(t,{J:()=>i});let a=0,n=(new Date).toISOString().replace(/T.*$/,"");i(),i();function i(){return String(a++)}},80240:(e,t,s)=>{"use strict";s.d(t,{Z:()=>x});var a=s(2e3),n=s(10306),i=s(61682),o=s(14298),r=s(49709),l=s(79536),c=s(99221),d=s(80007),u=s(38476),m=s(18796),v=s(63521),p=s(23885),h=s(47313),g=s(46417);function x(e){let{events:t,handleDateSelect:s,editable:r}=e;const[l,c]=(0,h.useState)((()=>p.ZP.language));return(0,h.useEffect)((()=>{c(p.ZP.language)}),[p.ZP.language]),(0,g.jsx)("div",{className:"demo-app",children:(0,g.jsx)("div",{className:"demo-app-main",children:(0,g.jsx)(i.Z,{plugins:[a.Z,o.Z,n.ZP],headerToolbar:{right:"prev,next today",left:"title"},initialView:"dayGridMonth",editable:r||!1,selectable:!0,selectMirror:!0,dayMaxEvents:!0,select:s,eventContent:y,eventClick:function(){},events:t,locale:"en"===l?v.Z:m.Z})})})}function y(e){return(0,g.jsx)(r.Z,{title:e.event.title,placement:"top-start",children:(0,g.jsxs)(l.Z,{sx:{padding:"5px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis","@media (max-width: 600px)":{fontSize:"10px",padding:"3px"}},children:[(0,g.jsx)(u.Z,{sx:{fontSize:"12px","@media (max-width: 600px)":{fontSize:"10px"}},children:e.timeText}),(0,g.jsx)(c.Z,{sx:{color:"white",textWrap:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontSize:"13px","@media (max-width: 600px)":{fontSize:"11px"}},children:e.event.title}),(0,g.jsx)(d.Z,{sx:{fontSize:"12px",color:"grey","@media (max-width: 600px)":{fontSize:"10px"}},children:e.event.extendedProps.description||"No description"})]})})}},96743:(e,t,s)=>{"use strict";s.d(t,{Z:()=>g});var a=s(79536),n=s(66212),i=s(1550),o=s(15103),r=s(51405),l=s(49914),c=s(88797),d=s(47313);const u="styles_container__Lu+Ak",m="styles_formWrapperContainer__9YqpE",v="styles_selectedChip__dhVt2";var p=s(46417);const h={PaperProps:{style:{maxHeight:224}}},g=e=>{const[t,s]=(0,d.useState)(e.filterList);return(0,p.jsx)("div",{className:u,children:(0,p.jsxs)(i.Z,{className:m,children:[(0,p.jsx)(o.Z,{id:"multipleChipLabel",children:e.label}),(0,p.jsx)(c.Z,{style:{backgroundColor:e.backgroundColor||"white"},id:"multipleChip",labelId:"demo-multipleChipLabel-chip-label",multiple:!0,value:t,onChange:t=>{const{target:{value:a}}=t;s("string"===typeof a?a.split(","):a),e.onFilterListChangeHandler("string"===typeof a?a.split(","):a)},input:(0,p.jsx)(l.Z,{id:"selectMultipleChip",label:e.label}),renderValue:e=>(0,p.jsx)(a.Z,{className:v,children:e.map((e=>(0,p.jsx)(n.Z,{label:e},e)))}),MenuProps:h,fullWidth:!0,readOnly:e.readOnly,children:e.defaultChipList.map((e=>(0,p.jsx)(r.Z,{value:e,children:e},e)))})]})})}},38707:(e,t,s)=>{"use strict";s.d(t,{Z:()=>y});var a=s(94425),n=s(50494),i=s(79536),o=s(65033),r=s(48310),l=s(67216),c=s(89840),d=s(74748),u=s(83213),m=s(47313),v=s(65537),p=s(58467),h=s(6294);const g={sideBar:"styles_sideBar__z5Ask",boxContainer:"styles_boxContainer__bUcnn",item:"styles_item__wkRw1",itemIcon:"styles_itemIcon__n4sFn",childItem:"styles_childItem__LMhub",agentText:"styles_agentText__gIL6y",TitleContainer:"styles_TitleContainer__RwY0K"};var x=s(46417);function y(e){const t=(0,p.s0)(),s=(0,v.I0)(),y=(0,p.TH)().pathname,[S,f]=(0,m.useState)(e.sideBarItem),[_,b]=(0,m.useState)(null);(0,m.useEffect)((()=>{f(e.sideBarItem)}),[e.sideBarItem]),(0,m.useEffect)((()=>{S.forEach(((e,t)=>{var a;if(e.children)e.children.forEach(((e,a)=>{if(e.link.includes(y))return s((0,h.h)({parentIndex:t,childIndex:a})),void b(t)}));else if(null!==(a=e.link)&&void 0!==a&&a.includes(y))return void s((0,h.h)({parentIndex:t,childIndex:-1}))}))}),[y]);const I=(0,v.v9)((e=>e.selected));return(0,x.jsx)(i.Z,{className:g.boxContainer,children:(0,x.jsx)(i.Z,{className:g.sideBar,children:(0,x.jsx)(r.Z,{children:S.map(((i,v)=>(0,x.jsxs)(m.Fragment,{children:[(0,x.jsx)(l.ZP,{disablePadding:!0,children:(0,x.jsxs)(c.Z,{onClick:()=>((a,n,i)=>{void 0===n.children&&(s((0,h.h)({parentIndex:a,childIndex:-1})),t(n.link)),_===a?b(null):(b(a),f(e.sideBarItem),0===i.length&&(f((e=>e.map(((e,t)=>t===a?{...e}:e)))),n&&n.link&&t(n.link)))})(v,i,i.children||[]),className:g.item,selected:I.parentIndex===v&&-1===I.childIndex,children:[(0,x.jsx)(d.Z,{children:i.icon}),(0,x.jsx)(u.Z,{"translation-key":i["translation-key"]?i["translation-key"]:"none",primary:i.name,className:g.itemText}),i.children&&(_===v?(0,x.jsx)(a.Z,{}):(0,x.jsx)(n.Z,{}))]})}),i.children&&(0,x.jsx)(o.Z,{in:_===v,timeout:"auto",unmountOnExit:!0,children:(0,x.jsx)(r.Z,{component:"div",disablePadding:!0,children:i.children.map(((e,a)=>(0,x.jsx)(c.Z,{onClick:()=>((e,a)=>{s((0,h.h)({parentIndex:e,childIndex:a})),t(S[e].children[a].link)})(v,a),className:g.childItem,selected:I.parentIndex===v&&I.childIndex===a,children:(0,x.jsx)(u.Z,{secondary:e.name})},a)))})})]},v)))})})})}},32952:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});s(47313);var a=s(79536),n=s(6306),i=s(54045),o=s(99249),r=s(75975),l=s(78925),c=s(46417);function d(e){let{files:t=[],treeView:s=!0}=e;const d=async e=>{if(void 0===e)return;const s=t.find((t=>t.id===e));if(s)if(s.downloadUrl){const e=await fetch(s.downloadUrl),t=await e.blob();(0,l.saveAs)(t,s.name)}else console.error("File not found")};return(0,c.jsx)(a.Z,{sx:{flexGrow:1},children:s?(0,c.jsx)(o.L,{"aria-label":"file system navigator",defaultCollapseIcon:(0,c.jsx)(n.Z,{}),defaultExpandIcon:(0,c.jsx)(i.Z,{}),children:0!==t.length&&(0,c.jsx)(r.k,{nodeId:"root",label:"Files",children:t.map(((e,t)=>(0,c.jsx)("div",{className:"thumbnail",children:(0,c.jsx)("a",{href:e.downloadUrl,style:{display:"block",wordBreak:"break-word",whiteSpace:"normal"},onClick:t=>{t.preventDefault(),d(e.id)},children:e.name},e.id)},t)))})}):(0,c.jsx)("div",{className:"thumbnail",children:t.map(((e,t)=>(0,c.jsx)("a",{href:e.downloadUrl,style:{display:"block",wordBreak:"break-word",whiteSpace:"normal"},onClick:t=>{t.preventDefault(),d(e.id)},children:e.name},e.id)))})})}},33060:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a,n=s(30168),i=s(17592),o=s(61113);const r=(0,i.ZP)(o.Z)(a||(a=(0,n.Z)(['\n  font-family: "Montserrat";\n  font-style: ',";\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: -0.03em;\n  color: ",";\n  @media only screen and (max-width: 767px) {\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(e=>e.fontStyle||"normal"),(e=>"var(".concat(e.colorname||"--eerie-black",")")),(e=>e.fontSizeMobile||"22px"),(e=>e.$lineHeightMobile||"32px"))},19425:(e,t,s)=>{"use strict";s.d(t,{Q:()=>a,u:()=>n});let a=function(e){return e.assignment="Assignments",e.file="Files",e.url="URLs",e.exam="Quizzes",e}({}),n=function(e){return e[e.notSubmitted=1]="notSubmitted",e[e.submitted=2]="submitted",e}({})},83789:(e,t,s)=>{"use strict";s.d(t,{_:()=>f,Z:()=>_});var a=s(2119);const n={container:"styles_container__89t5M",accordionContainer:"styles_accordionContainer__l4KO7",announcementSubject:"styles_announcementSubject__Vfj0V","MuiInputBase-root":"styles_MuiInputBase-root__+yGDr",imageResource:"styles_imageResource__p65z5",titleContainer:"styles_titleContainer__8T9rn",title:"styles_title__ZOMam"};var i=s(52769),o=s(41872),r=s(98492),l=s(79536),c=s(47313),d=s(80007),u=s(99140),m=s(92556),v=s(58467),p=s(90469),h=s(75590),g=s(10658),x=s.n(g),y=s(35607),S=s(46417);let f=function(e){return e.assignment="assignment",e.exam="exam",e}({});const _=e=>{let{resourceTitle:t,resourceEndedDate:s,courseId:g,examId:_,intro:b,type:I}=e;const{t:Z}=(0,h.$G)(),C=(0,v.s0)();I=I||f.assignment;const[j,U]=(0,c.useState)(!1);return(0,S.jsx)(l.Z,{className:n.container,children:(0,S.jsxs)(i.Z,{expanded:j,className:n.accordionContainer,children:[(0,S.jsxs)(r.Z,{className:n.accordionDetails,onClick:()=>{U(!0)},children:[(0,S.jsxs)(l.Z,{className:n.titleContainer,children:[(0,S.jsx)("img",{src:I==f.assignment?y.Z.course.assignmentIcon:y.Z.course.quizIcon,className:n.imageResource,alt:"assignment"}),(0,S.jsx)(d.Z,{children:t})]}),(0,S.jsxs)(d.Z,{"translation-key":"course_assignment_deadline",children:[Z("course_assignment_deadline"),": ",x()(s).format("hh:mm DD/MM/YYYY")]})]}),(0,S.jsx)(o.Z,{children:(0,S.jsx)(m.Z,{value:b,readOnly:!0})}),(0,S.jsxs)(a.Z,{children:[(0,S.jsx)(u.Z,{btnType:u.s.Text,onClick:()=>{U(!1)},"translation-key":"common_cancel",children:Z("common_cancel")}),(0,S.jsx)(u.Z,{btnType:u.s.Primary,onClick:()=>{I===f.assignment?C(p._.lecturer.assignment.detail.replace(":courseId",null!==g&&void 0!==g?g:"").replace(":assignmentId",null!==_&&void 0!==_?_:"")):C(p._.lecturer.exam.detail.replace(":courseId",null!==g&&void 0!==g?g:"").replace(":examId",null!==_&&void 0!==_?_:""))},"translation-key":"course_assignment_detail",children:Z("course_assignment_detail")})]})]})})}},15067:(e,t,s)=>{"use strict";s.d(t,{N:()=>l});var a=s(35662),n=s(66010),i=s(74776),o=s.n(i);const r="https://api.codedynamite.click";class l{static async getCourses(e){let{search:t="",courseType:s=[],pageNo:i=0,pageSize:l=10}=e;try{const e=await a.Z.get("".concat(r).concat(n.b.COURSE.COURSE.DEFAULT),{params:{search:t,courseType:s,pageNo:i,pageSize:l},paramsSerializer:e=>o().stringify(e,{arrayFormat:"repeat"})});if(200===e.status)return Promise.resolve(e.data)}catch(h){var c,d,u,m,v,p;return console.error("Failed to fetch courses",h),Promise.reject({code:(null===(c=h.response)||void 0===c||null===(d=c.data)||void 0===d?void 0:d.code)||503,status:(null===(u=h.response)||void 0===u||null===(m=u.data)||void 0===m?void 0:m.status)||"Service Unavailable",message:(null===(v=h.response)||void 0===v||null===(p=v.data)||void 0===p?void 0:p.message)||h.message})}}static async getSectionsByCourseId(e){try{const t=await a.Z.get("".concat(r).concat(n.b.COURSE.COURSE.SECTION,"/").concat(e));if(200===t.status)return t.data}catch(d){var t,s,i,o,l,c;return console.error("Failed to fetch sections by course id",d),Promise.reject({code:(null===(t=d.response)||void 0===t||null===(s=t.data)||void 0===s?void 0:s.code)||503,status:(null===(i=d.response)||void 0===i||null===(o=i.data)||void 0===o?void 0:o.status)||"Service Unavailable",message:(null===(l=d.response)||void 0===l||null===(c=l.data)||void 0===c?void 0:c.message)||d.message})}}}},6968:(e,t,s)=>{"use strict";s.d(t,{_:()=>o});var a=s(35662),n=s(66010);const i="https://api.codedynamite.click";class o{static async getCourseTypes(){try{const e=await a.Z.get("".concat(i).concat(n.b.COURSE.COURSE_TYPE.DEFAULT),{});if(200===e.status)return Promise.resolve(e.data)}catch(c){var e,t,s,o,r,l;return console.error("Failed to fetch course types",c),Promise.reject({code:(null===(e=c.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.code)||503,status:(null===(s=c.response)||void 0===s||null===(o=s.data)||void 0===o?void 0:o.status)||"Service Unavailable",message:(null===(r=c.response)||void 0===r||null===(l=r.data)||void 0===l?void 0:l.message)||c.message})}}static async getCourseTypeById(e){try{const t=await a.Z.get("".concat(i).concat(n.b.COURSE.COURSE_TYPE.GET_BY_ORGANIZATION_ID).replace(":id",e));if(200===t.status)return t.data}catch(d){var t,s,o,r,l,c;return console.error("Failed to fetch course type by organization id",d),Promise.reject({code:(null===(t=d.response)||void 0===t||null===(s=t.data)||void 0===s?void 0:s.code)||503,status:(null===(o=d.response)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.status)||"Service Unavailable",message:(null===(l=d.response)||void 0===l||null===(c=l.data)||void 0===c?void 0:c.message)||d.message})}}}},4094:(e,t,s)=>{"use strict";s.d(t,{E:()=>l});var a=s(35662),n=s(66010),i=s(74776),o=s.n(i);const r="https://api.codedynamite.click";class l{static async getUserByCourseId(e,t){let{search:s="",pageNo:i=0,pageSize:o=10}=t;try{const t=await a.Z.get("".concat(r).concat(n.b.COURSE.COURSE_USER.GET_USER_BY_COURSE_ID.replace(":id",e)),{params:{search:s,pageNo:i,pageSize:o}});if(200===t.status)return Promise.resolve(t.data)}catch(p){var l,c,d,u,m,v;return console.error("Failed to fetch course user",p),Promise.reject({code:(null===(l=p.response)||void 0===l||null===(c=l.data)||void 0===c?void 0:c.code)||503,status:(null===(d=p.response)||void 0===d||null===(u=d.data)||void 0===u?void 0:u.status)||"Service Unavailable",message:(null===(m=p.response)||void 0===m||null===(v=m.data)||void 0===v?void 0:v.message)||p.message})}}static async countStudentByCourseId(e){try{const t=await a.Z.get("".concat(r).concat(n.b.COURSE.COURSE_USER.COUNT_STUDENT_BY_COURSE_ID.replace(":id",e)));if(200===t.status)return Promise.resolve(t.data)}catch(d){var t,s,i,o,l,c;return console.error("Failed to fetch course user",d),Promise.reject({code:(null===(t=d.response)||void 0===t||null===(s=t.data)||void 0===s?void 0:s.code)||503,status:(null===(i=d.response)||void 0===i||null===(o=i.data)||void 0===o?void 0:o.status)||"Service Unavailable",message:(null===(l=d.response)||void 0===l||null===(c=l.data)||void 0===c?void 0:c.message)||d.message})}}static async getAllCourseByUserId(e,t){let{search:s="",courseType:i=[],pageNo:l=0,pageSize:c=10}=t;try{const t=await a.Z.get("".concat(r).concat(n.b.COURSE.COURSE_USER.GET_ALL_COURSE_BY_USER_ID.replace(":id",e)),{params:{search:s,courseType:i,pageNo:l,pageSize:c},paramsSerializer:e=>o().stringify(e,{arrayFormat:"repeat"})});if(200===t.status)return Promise.resolve(t.data)}catch(g){var d,u,m,v,p,h;return console.error("Failed to fetch course user",g),Promise.reject({code:(null===(d=g.response)||void 0===d||null===(u=d.data)||void 0===u?void 0:u.code)||503,status:(null===(m=g.response)||void 0===m||null===(v=m.data)||void 0===v?void 0:v.status)||"Service Unavailable",message:(null===(p=g.response)||void 0===p||null===(h=p.data)||void 0===h?void 0:h.message)||g.message})}}}},33256:(e,t,s)=>{"use strict";s.d(t,{J:()=>o});var a=s(35662),n=s(66010);const i="https://api.codedynamite.click";class o{static async getSubmissionAssignmentById(e,t){try{const s=await a.Z.get("".concat(i).concat(n.b.COURSE.SUBMISSION_ASSIGNMENT.GET_BY_USER_ID_ASSIGNMENT_ID),{params:{userId:e,assignmentId:t}});if(200===s.status)return s.data}catch(u){var s,o,r,l,c,d;return console.error("Failed to fetch submission assignment by id",u),Promise.reject({code:(null===(s=u.response)||void 0===s||null===(o=s.data)||void 0===o?void 0:o.code)||503,status:(null===(r=u.response)||void 0===r||null===(l=r.data)||void 0===l?void 0:l.status)||"Service Unavailable",message:(null===(c=u.response)||void 0===c||null===(d=c.data)||void 0===d?void 0:d.message)||u.message})}}static async getSubmissionAssignmentByAssignmentId(e){try{const t=await a.Z.get("".concat(i).concat(n.b.COURSE.SUBMISSION_ASSIGNMENT.DEFAULT),{params:{assignmentId:e}});if(200===t.status)return t.data}catch(d){var t,s,o,r,l,c;return console.error("Failed to fetch submission assignment by id",d),Promise.reject({code:(null===(t=d.response)||void 0===t||null===(s=t.data)||void 0===s?void 0:s.code)||503,status:(null===(o=d.response)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.status)||"Service Unavailable",message:(null===(l=d.response)||void 0===l||null===(c=l.data)||void 0===c?void 0:c.message)||d.message})}}static async countSubmissionToGrade(e){try{const t=await a.Z.get("".concat(i).concat(n.b.COURSE.SUBMISSION_ASSIGNMENT.COUNT_TO_GRADE),{params:{assignmentId:e}});if(200===t.status)return t.data}catch(d){var t,s,o,r,l,c;return console.error("Failed to fetch submission assignment by id",d),Promise.reject({code:(null===(t=d.response)||void 0===t||null===(s=t.data)||void 0===s?void 0:s.code)||503,status:(null===(o=d.response)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.status)||"Service Unavailable",message:(null===(l=d.response)||void 0===l||null===(c=l.data)||void 0===c?void 0:c.message)||d.message})}}static async countAllSubmission(e){try{const t=await a.Z.get("".concat(i).concat(n.b.COURSE.SUBMISSION_ASSIGNMENT.COUNT_ALL),{params:{assignmentId:e}});if(200===t.status)return t.data}catch(d){var t,s,o,r,l,c;return console.error("Failed to fetch submission assignment by id",d),Promise.reject({code:(null===(t=d.response)||void 0===t||null===(s=t.data)||void 0===s?void 0:s.code)||503,status:(null===(o=d.response)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.status)||"Service Unavailable",message:(null===(l=d.response)||void 0===l||null===(c=l.data)||void 0===c?void 0:c.message)||d.message})}}}},71538:(e,t,s)=>{"use strict";s.d(t,{m:()=>a});const a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en";if(e<0)return"0h 0m 0s";const s=Math.floor(e/31536e6),a=Math.floor(e%31536e6/2592e6),n=Math.floor(e%2592e6/864e5),i=Math.floor(e%864e5/36e5),o=Math.floor(e%36e5/6e4),r=Math.floor(e%6e4/1e3);let l="";return"vi"===t?(s>0&&(l+="".concat(s," n\u0103m ")),a>0&&(l+="".concat(a," th\xe1ng ")),n>0&&(l+="".concat(n," ng\xe0y ")),i>0&&(l+="".concat(i," gi\u1edd ")),o>0&&(l+="".concat(o," ph\xfat ")),l+="".concat(r," gi\xe2y ")):(s>0&&(l+="".concat(s," ").concat(s>1?"years":"year")),a>0&&(l+="".concat(a," ").concat(a>1?"months":"month")),n>0&&(l+="".concat(n," ").concat(n>1?"days":"day")),i>0&&(l+="".concat(i," ").concat(i>1?"hrs":"hr")),o>0&&(l+="".concat(o," ").concat(o>1?"mins":"min")),l+="".concat(r," secs")),l.trim()}},24654:()=>{}}]);