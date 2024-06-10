"use strict";(self.webpackChunkfrontend_app=self.webpackChunkfrontend_app||[]).push([[6030],{71087:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(63994),i=t(45148),s=t(61179),a=t(79536),r=t(46417);function d(e,n){const t=("abc"===n?"a":"A").charCodeAt(0);if(e<26)return String.fromCharCode(t+e);return String.fromCharCode(t+Math.floor(e/26)-1)+String.fromCharCode(t+e%26)}const c=e=>{const{values:n,size:t,variant:c,color:l,orientation:u,fontSize:x,fontWeight:m,fontFamily:h,onChange:p,value:_,numbering:g,overlay:f,disabled:j}=e;return(0,r.jsx)(o.Z,{orientation:u,size:t,variant:c,value:_,children:(0,r.jsx)(a.Z,{sx:{display:"flex",flexDirection:"column",gap:2,"& > div":{p:1,borderRadius:"12px",display:"flex"}},children:null===n||void 0===n?void 0:n.map(((e,n)=>f?(0,r.jsx)(i.Z,{variant:"outlined",children:(0,r.jsx)(s.Z,{disabled:j,overlay:!0,checkedIcon:g&&(0,r.jsx)(a.Z,{sx:{width:"inherit",height:"inherit",backgroundColor:"#e2ecf5"},borderRadius:"1000px",border:"2px solid #0b6bcb",display:"flex",justifyContent:"center",alignItems:"center",padding:"5px",fontWeight:"500",children:(0,r.jsx)(a.Z,{children:"n123"!==g?d(n,g):n+1})}),uncheckedIcon:g&&(0,r.jsx)("span",{children:"n123"!==g?d(n,g):n+1}),value:e.value,label:e.label,onChange:e=>p(e.target.value),color:l,sx:{"& .MuiRadio-label":{fontFamily:h||"Montserrat",fontSize:x||"14px",fontWeight:m||"400"}}})},n):(0,r.jsx)(s.Z,{disabled:j,checked:0===n,checkedIcon:g&&(0,r.jsx)(a.Z,{sx:{width:"inherit",height:"inherit",backgroundColor:"#e2ecf5"},borderRadius:"1000px",border:"2px solid #0b6bcb",display:"flex",justifyContent:"center",alignItems:"center",padding:"5px",fontWeight:"500",children:(0,r.jsx)(a.Z,{children:"n123"!==g?d(n,g):n+1})}),uncheckedIcon:g&&(0,r.jsx)("span",{children:"n123"!==g?d(n,g):n+1}),value:e.value,label:e.label,onChange:e=>p(e.target.value),color:l,sx:{"& .MuiRadio-label":{fontFamily:h||"Montserrat",fontSize:x||"14px",fontWeight:m||"400"}}},n)))})})}},96030:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Y});var o=t(89790),i=t(54045),s=t(61317),a=t(9019),r=t(79536),d=t(62481),c=t(42832),l=t(84488),u=t(19536),x=t(46923),m=t(16783),h=t(19860),p=t(90200),_=t(31845),g=t(99221),f=t(38556),j=t(47313),Z=t(58467),v=t(2135),y=t(90469),q=t(43750),b=t(75590),w=t(38037),C=t(80007),S=t(15305),I=t(46417);const P=e=>{const{questionEssayQuestion:n,questionIndex:t,questionSubmitContent:o}=e,{t:i}=(0,b.$G)();return(0,I.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,I.jsx)(a.ZP,{item:!0,xs:12,md:12,children:(0,I.jsx)(c.Z,{direction:"row",justifyContent:"space-between",children:(0,I.jsx)(w.Z,{children:"".concat(i("common_question")," ").concat(t+1)})})}),(0,I.jsx)(a.ZP,{item:!0,xs:12,md:12,children:(0,I.jsxs)(c.Z,{direction:"row",spacing:2,children:[(0,I.jsx)(r.Z,{sx:{backgroundColor:o&&""!==o.content?"#e6eaf7":"#FDF6EA"},borderRadius:1,padding:".35rem 1rem",children:(0,I.jsx)(C.Z,{fontSize:"12px",color:"#212121",children:o&&""!==o.content?i("common_answered"):i("common_not_answered")})}),(0,I.jsx)(r.Z,{sx:{backgroundColor:"#f5f5f5"},borderRadius:1,padding:".35rem 1rem",children:(0,I.jsxs)(C.Z,{fontSize:"12px",color:"#212121",children:[i("common_score_can_achieve"),": ",n.question.defaultMark]})})]})}),(0,I.jsx)(a.ZP,{item:!0,xs:12,children:(0,I.jsx)(u.Z,{})}),(0,I.jsx)(a.ZP,{item:!0,xs:12,md:12,children:(0,I.jsxs)(r.Z,{children:[(0,I.jsx)(C.Z,{sx:{padding:0,height:"fit-content"},className:"ql-editor",fontSize:"1rem",textAlign:"left",fontWeight:"400",color:"#212121",lineHeight:"1.5",dangerouslySetInnerHTML:{__html:n.question.questionText}}),(0,I.jsx)(C.Z,{fontSize:".875rem",textAlign:"left",fontWeight:"600",color:"#212121",children:i("common_answer")}),"editor"===n.responseFormat&&(0,I.jsx)(C.Z,{sx:{minHeight:"200px",border:"1px solid #e0e0e0",borderRadius:"12px",padding:"10px"},className:"ql-editor",fontSize:"1rem",textAlign:"left",fontWeight:"400",color:"#212121",lineHeight:"1.5",dangerouslySetInnerHTML:{__html:null===o||void 0===o?void 0:o.content}}),"plain"===n.responseFormat&&(0,I.jsx)(S.Z,{defaultValue:null===o||void 0===o?void 0:o.content,minRows:"10",maxRows:n.responseFieldLines})]})})]})};var k=t(71087),M=t(45148),z=t(94182);const T=e=>{var n;const{t:t}=(0,b.$G)(),{questionIndex:o,questionMultiChoice:i,questionSubmitContent:s}=e,d=null===(n=i.question.answers)||void 0===n?void 0:n.map((e=>({value:e.id,label:e.answer})));return(0,I.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,I.jsx)(a.ZP,{item:!0,xs:12,md:12,children:(0,I.jsx)(c.Z,{direction:"row",justifyContent:"space-between",children:(0,I.jsx)(w.Z,{children:"".concat(t("common_question")," ").concat(o+1)})})}),(0,I.jsx)(a.ZP,{item:!0,xs:12,md:12,children:(0,I.jsxs)(c.Z,{direction:"row",spacing:2,children:[(0,I.jsx)(r.Z,{sx:{backgroundColor:s&&""!==s.content?"#e6eaf7":"#FDF6EA"},borderRadius:1,padding:".35rem 1rem",children:(0,I.jsx)(C.Z,{fontSize:"12px",color:"#212121",children:s&&""!==s.content?t("common_answered"):t("common_not_answered")})}),(0,I.jsx)(r.Z,{sx:{backgroundColor:"#f5f5f5"},borderRadius:1,padding:".35rem 1rem",children:(0,I.jsxs)(C.Z,{fontSize:"12px",color:"#212121",children:[t("common_score_can_achieve"),": ",i.question.defaultMark]})})]})}),(0,I.jsx)(a.ZP,{item:!0,xs:12,children:(0,I.jsx)(u.Z,{})}),(0,I.jsxs)(a.ZP,{item:!0,xs:12,md:12,children:[(0,I.jsx)(C.Z,{sx:{padding:0,height:"fit-content"},className:"ql-editor",fontSize:"1rem",textAlign:"left",fontWeight:"400",color:"#212121",lineHeight:"1.5",dangerouslySetInnerHTML:{__html:i.question.questionText}}),Boolean(i.showStandardInstructions)&&(0,I.jsx)(C.Z,{fontSize:".875rem",textAlign:"left",fontWeight:"600",color:"#212121",children:"\n            ".concat(i.single?t("course_management_exam_preview_multichoice"):t("course_management_exam_preview_multichoice_multiple"),":")}),Boolean(i.single)?(0,I.jsx)(k.Z,{color:"primary",value:null===s||void 0===s?void 0:s.content,onChange:()=>{},disabled:!0,values:d,orientation:"vertical",size:"md",numbering:i.answerNumbering,fontSize:".8rem",fontWeight:"400",overlay:!0}):(0,I.jsx)(r.Z,{sx:{display:"flex",flexDirection:"column",gap:2,"& > div":{p:1,borderRadius:"12px",display:"flex"}},children:null===d||void 0===d?void 0:d.map((e=>(0,I.jsx)(M.Z,{variant:"outlined",children:(0,I.jsx)(z.Z,{disabled:!0,onChange:()=>{},value:e.value,checked:null===s||void 0===s?void 0:s.content.includes(e.value),size:"sm",overlay:!0,label:(0,I.jsx)(C.Z,{textAlign:"center",fontSize:".8rem",fontWeight:"400",children:e.label})})},e.value)))})]})]})},R=e=>{const{t:n}=(0,b.$G)(),{questionShortAnswer:t,questionSubmitContent:o,questionIndex:i}=e;return(0,I.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,I.jsx)(a.ZP,{item:!0,xs:12,md:12,children:(0,I.jsx)(c.Z,{direction:"row",justifyContent:"space-between",children:(0,I.jsx)(w.Z,{children:"".concat(n("common_question")," ").concat(i+1)})})}),(0,I.jsx)(a.ZP,{item:!0,xs:12,md:12,children:(0,I.jsxs)(c.Z,{direction:"row",spacing:2,children:[(0,I.jsx)(r.Z,{sx:{backgroundColor:o&&""!==o.content?"#e6eaf7":"#FDF6EA"},borderRadius:1,padding:".35rem 1rem",children:(0,I.jsx)(C.Z,{fontSize:"12px",color:"#212121",children:o&&""!==o.content?n("common_answered"):n("common_not_answered")})}),(0,I.jsx)(r.Z,{sx:{backgroundColor:"#f5f5f5"},borderRadius:1,padding:".35rem 1rem",children:(0,I.jsxs)(C.Z,{fontSize:"12px",color:"#212121",children:[n("common_score_can_achieve"),": ",t.question.defaultMark]})})]})}),(0,I.jsx)(a.ZP,{item:!0,xs:12,children:(0,I.jsx)(u.Z,{})}),(0,I.jsxs)(a.ZP,{item:!0,xs:12,md:12,children:[(0,I.jsx)(C.Z,{sx:{padding:0,height:"fit-content"},className:"ql-editor",fontSize:"1rem",textAlign:"left",fontWeight:"400",color:"#212121",lineHeight:"1.5",dangerouslySetInnerHTML:{__html:t.question.questionText}}),(0,I.jsx)(C.Z,{fontSize:".875rem",textAlign:"left",fontWeight:"600",color:"#212121",children:n("common_answer")}),(0,I.jsx)(S.Z,{sx:{"& .MuiTextarea-textarea.Mui-disabled":{color:"#212121"},marginBottom:1,backgroundColor:""!==(null===o||void 0===o?void 0:o.content)?"":"#feeded"},defaultValue:null===o||void 0===o?void 0:o.content,minRows:1,maxRows:1,disabled:!0})]})]})},E=e=>{const{questionIndex:n,questionSubmitContent:t,questionTrueFalse:o}=e,{t:i}=(0,b.$G)(),s=[{value:"true",label:i("common_true")},{value:"false",label:i("common_false")}];return(0,I.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,I.jsx)(a.ZP,{item:!0,xs:12,md:12,children:(0,I.jsx)(c.Z,{direction:"row",justifyContent:"space-between",children:(0,I.jsx)(w.Z,{children:"".concat(i("common_question")," ").concat(n+1)})})}),(0,I.jsx)(a.ZP,{item:!0,xs:12,md:12,children:(0,I.jsxs)(c.Z,{direction:"row",spacing:2,children:[(0,I.jsx)(r.Z,{sx:{backgroundColor:t&&""!==t.content?"#e6eaf7":"#FDF6EA"},borderRadius:1,padding:".35rem 1rem",children:(0,I.jsx)(C.Z,{fontSize:"12px",color:"#212121",children:t&&""!==t.content?i("common_answered"):i("common_not_answered")})}),(0,I.jsx)(r.Z,{sx:{backgroundColor:"#f5f5f5"},borderRadius:1,padding:".35rem 1rem",children:(0,I.jsxs)(C.Z,{fontSize:"12px",color:"#212121",children:[i("common_score_can_achieve"),": ",o.question.defaultMark]})})]})}),(0,I.jsx)(a.ZP,{item:!0,xs:12,children:(0,I.jsx)(u.Z,{})}),(0,I.jsxs)(a.ZP,{item:!0,xs:12,md:12,children:[(0,I.jsx)(C.Z,{sx:{padding:0,height:"fit-content"},className:"ql-editor",fontSize:"1rem",textAlign:"left",fontWeight:"400",color:"#212121",lineHeight:"1.5",dangerouslySetInnerHTML:{__html:o.question.questionText}}),Boolean(o.showStandardInstructions)&&(0,I.jsx)(C.Z,{fontSize:".875rem",textAlign:"left",fontWeight:"600",color:"#212121",children:i("course_management_exam_preview_multichoice")}),(0,I.jsx)(k.Z,{color:"primary",onChange:()=>{},value:null===t||void 0===t?void 0:t.content,values:s,orientation:"vertical",size:"md",fontSize:".8rem",fontWeight:"400",overlay:!0,disabled:!0})]})]})},F={root:"styles_root__uMQ80",container:"styles_container__3thOK",mainContent:"styles_mainContent__mpiVk",formBody:"styles_formBody__uxQiI",drawerBody:"styles_drawerBody__rPCTP",drawerFieldContainer:"styles_drawerFieldContainer__oJuj0",drawerTextTitle:"styles_drawerTextTitle__LjM7a",textEditor:"styles_textEditor__Lss7-",breadcumpWrapper:"styles_breadcumpWrapper__t4XoC",icArrow:"styles_icArrow__rKg44",cursorPointer:"styles_cursorPointer__0SJn1"};var A=t(47477),W=t(74512),D=t(66565),H=t(35659),B=t(91861),N=t(45831);const Q="styles_boxTextTitle__02u18",L="styles_boxTextContent__U6p0t",V=e=>{const{textTitle:n,textContent:t,icon:o}=e;return(0,I.jsxs)(r.Z,{sx:{borderRadius:"5px",border:"1px solid #E1E1E1",padding:"10px 20px 10px 20px",display:"flex",flexDirection:"row",alignItems:"flex-end",justifyContent:"space-between"},children:[o,(0,I.jsxs)(r.Z,{sx:{marginLeft:"5px"},children:[(0,I.jsx)(C.Z,{className:Q,children:n}),(0,I.jsx)(C.Z,{className:L,children:t})]})]})};var G=t(48646),O=t(21426),U=t(65339),$=t(62968),J=t(90182);const K=370;function Y(){const{t:e}=(0,b.$G)(),{width:n}=(0,f.Z)(),t=(0,Z.UO)().examId,w=(0,Z.UO)().courseId,C=(0,Z.UO)().submissionId,S=(0,Z.s0)(),[k]=(0,v.lr)(),M=(0,h.Z)(),z=parseInt(k.get("page")||"0"),Q=k.get("showall"),[L,Y]=j.useState(!0),[X,ee]=j.useState(1),[ne,te]=j.useState([]),[oe,ie]=j.useState(void 0),[se,ae]=j.useState(void 0),[re,de]=j.useState(new Date),[ce,le]=j.useState(new Date),[ue,xe]=j.useState(!0),[me,he]=j.useState({days:0,hours:0,minutes:0,seconds:0});j.useEffect((()=>{Y(!(n<1080))}),[n]);const pe=j.useRef(null),{height:_e}=(0,A.Z)({ref:pe});j.useEffect((()=>{t&&(W.O.getExamById(t).then((e=>{console.log("Get exam data"),ie(e)})).catch((e=>{console.error(e)})),W.O.getExamQuestionById(t,null).then((e=>{console.log("Get exam questions");const n={questionCommands:e.questions.map((e=>({questionId:e.id,qtype:e.qtype})))};U.a.getQuestionDetail(n).then((e=>{console.log("Get question detail");const n=e.questionResponses.map((e=>({data:e.qtypeEssayQuestion?e.qtypeEssayQuestion:e.qtypeShortAnswerQuestion?e.qtypeShortAnswerQuestion:e.qtypeMultichoiceQuestion?e.qtypeMultichoiceQuestion:e.qtypeTrueFalseQuestion?e.qtypeTrueFalseQuestion:e.qtypeCodeQuestion})));te(n)})).catch((e=>{console.error(e)})).finally((()=>{}))})).catch((e=>{xe(!1),console.error(e)})).finally((()=>{xe(!1)})),void 0!==C&&W.O.getExamSubmissionById(C).then((e=>{console.log("Get exam submission data"),ae(e);const n=new Date(e.startTime),t=new Date(e.submitTime),o=t.getTime()-n.getTime(),i=Math.floor(o/864e5),s=Math.floor(o%864e5/36e5),a=Math.round(o%864e5%36e5/6e4),r=Math.round(o%864e5%36e5%6e4/1e3);de(n),le(t),he({days:i,hours:s,minutes:a,seconds:r})})).catch((e=>{console.error(e)})).finally((()=>{})))}),[]);const[ge,fe]=j.useState(n<1080?"temporary":"permanent");j.useEffect((()=>{fe(n<1080?"temporary":"persistent")}),[n]);const je=[e("common_january"),e("common_february"),e("common_march"),e("common_april"),e("common_may"),e("common_june"),e("common_july"),e("common_august"),e("common_september"),e("common_october"),e("common_november"),e("common_december")],Ze=[e("common_sunday"),e("common_monday"),e("common_tuesday"),e("common_wednesday"),e("common_thursday"),e("common_friday"),e("common_saturday")];return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(J.q,{children:(0,I.jsx)("title",{children:"".concat(e("exam_review_attempt_title")," | ").concat(null===oe||void 0===oe?void 0:oe.name)})}),(0,I.jsxs)(a.ZP,{className:F.root,children:[(0,I.jsx)(p.Z,{ref:pe}),(0,I.jsxs)(r.Z,{className:F.container,style:{marginTop:"".concat(_e,"px")},children:[(0,I.jsx)(d.ZP,{}),(0,I.jsx)(d.ZP,{}),(0,I.jsx)(D.Z,{onClick:()=>{Y(!0)},sx:{...L&&{display:"none"},position:"fixed",top:"".concat(_e+10,"px"),right:0,height:"44px",width:"49px"},size:"sm",endDecorator:(0,I.jsx)(s.Z,{color:"action"}),variant:"soft"}),(0,I.jsxs)(r.Z,{className:F.formBody,width:"100%",children:[(0,I.jsx)(_.Z,{fontWeight:"500",children:null===oe||void 0===oe?void 0:oe.name}),(0,I.jsx)(D.Z,{onClick:()=>{w&&t&&S(y._.student.exam.detail.replace(":courseId",w).replace(":examId",t))},startDecorator:(0,I.jsx)(o.Z,{fontSize:"small"}),color:"neutral",variant:"soft",size:"md",sx:{width:"fit-content"},children:e("common_back")}),(0,I.jsx)(c.Z,{direction:"row",spacing:1,children:ue?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(l.Z,{variant:"rectangular",width:200,height:50}),(0,I.jsx)(l.Z,{variant:"rectangular",width:200,height:50}),(0,I.jsx)(l.Z,{variant:"rectangular",width:200,height:50})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(V,{textTitle:e("exam_review_started_on"),textContent:e("common_show_time",{weekDay:Ze[re.getDay()],day:re.getDate(),month:je[re.getMonth()],year:re.getFullYear(),time:"".concat(re.getHours()<10?"0".concat(re.getHours()):re.getHours(),":").concat(re.getMinutes()<10?"0".concat(re.getMinutes()):re.getMinutes())}),icon:(0,I.jsx)(N.Z,{sx:{fontSize:"15px",marginBottom:"3px"}})}),(0,I.jsx)(V,{textTitle:e("exam_review_completed_on"),textContent:e("common_show_time",{weekDay:Ze[ce.getDay()],day:ce.getDate(),month:je[ce.getMonth()],year:ce.getFullYear(),time:"".concat(ce.getHours()<10?"0".concat(ce.getHours()):ce.getHours(),":").concat(ce.getMinutes()<10?"0".concat(ce.getMinutes()):ce.getMinutes())}),icon:(0,I.jsx)(G.Z,{sx:{fontSize:"15px",marginBottom:"3px"}})}),(0,I.jsx)(V,{textTitle:e("exam_review_time_taken"),textContent:me.days>0?e("common_show_time_no_date_no_day",{hour:e("hour",{count:me.hours}),min:e("min",{count:me.minutes}),sec:e("sec",{count:me.seconds})}):me.minutes>0?e("common_show_time_no_date_no_hour",{min:e("min",{count:me.minutes}),sec:e("sec",{count:me.seconds})}):e("common_show_time_no_date_no_min",{sec:e("sec",{count:me.seconds})}),icon:(0,I.jsx)(O.Z,{sx:{fontSize:"15px",marginBottom:"3px"}})})]})}),(0,I.jsxs)(r.Z,{sx:{borderRadius:"5px",border:"1px solid #E1E1E1",padding:"20px"},children:["0"!==Q?(0,I.jsx)(a.ZP,{container:!0,spacing:7,children:ne.map(((e,n)=>(0,I.jsxs)(j.Fragment,{children:[(0,I.jsx)(a.ZP,{item:!0,xs:12,id:(0,$.Z)(e.data.question.id),children:e.data.question.qtype===q.Z.essay.code?(0,I.jsx)(P,{questionIndex:n,questionEssayQuestion:e.data,questionSubmitContent:null===se||void 0===se?void 0:se.questionSubmissionResponses.find((n=>n.questionId===e.data.question.id))}):e.data.question.qtype===q.Z.short_answer.code?(0,I.jsx)(R,{questionIndex:n,questionShortAnswer:e.data,questionSubmitContent:null===se||void 0===se?void 0:se.questionSubmissionResponses.find((n=>n.questionId===e.data.question.id))}):e.data.question.qtype===q.Z.multiple_choice.code?(0,I.jsx)(T,{questionIndex:n,questionMultiChoice:e.data,questionSubmitContent:null===se||void 0===se?void 0:se.questionSubmissionResponses.find((n=>n.questionId===e.data.question.id))}):e.data.question.qtype===q.Z.true_false.code?(0,I.jsx)(E,{questionIndex:n,questionTrueFalse:e.data,questionSubmitContent:null===se||void 0===se?void 0:se.questionSubmissionResponses.find((n=>n.questionId===e.data.question.id))}):null}),(0,I.jsx)(a.ZP,{item:!0,xs:12,display:"flex",justifyContent:"center",children:(0,I.jsx)(u.Z,{sx:{width:"100px"}})})]},n)))}):ne[z].data.question.qtype===q.Z.essay.code?(0,I.jsx)(P,{questionIndex:z,questionEssayQuestion:ne[z].data,questionSubmitContent:null===se||void 0===se?void 0:se.questionSubmissionResponses.find((e=>e.questionId===ne[z].data.question.id))}):ne[z].data.question.qtype===q.Z.short_answer.code?(0,I.jsx)(R,{questionIndex:z,questionShortAnswer:ne[z].data,questionSubmitContent:null===se||void 0===se?void 0:se.questionSubmissionResponses.find((e=>e.questionId===ne[z].data.question.id))}):ne[z].data.question.qtype===q.Z.multiple_choice.code?(0,I.jsx)(T,{questionIndex:z,questionMultiChoice:ne[z].data,questionSubmitContent:null===se||void 0===se?void 0:se.questionSubmissionResponses.find((e=>e.questionId===ne[z].data.question.id))}):ne[z].data.question.qtype===q.Z.true_false.code?(0,I.jsx)(E,{questionIndex:z,questionTrueFalse:ne[z].data,questionSubmitContent:null===se||void 0===se?void 0:se.questionSubmissionResponses.find((e=>e.questionId===ne[z].data.question.id))}):null,"0"!==Q?(0,I.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,I.jsx)(a.ZP,{item:!0,xs:6}),(0,I.jsx)(a.ZP,{item:!0,xs:6,sx:{display:"flex",justifyContent:"flex-end"},children:(0,I.jsx)(D.Z,{onClick:()=>{w&&t&&S(y._.student.exam.detail.replace(":courseId",w).replace(":examId",t))},children:e("exam_finish_review")})})]}):(0,I.jsxs)(a.ZP,{container:!0,spacing:1,sx:{marginTop:"10px"},children:[(0,I.jsx)(a.ZP,{item:!0,xs:6,children:0!==z&&(0,I.jsx)(v.rU,{to:{pathname:y._.student.exam.review,search:"?showall=0&page=".concat(z-1)},children:(0,I.jsx)(D.Z,{variant:"soft",children:e("course_management_exam_preview_prev_page")})})}),(0,I.jsx)(a.ZP,{item:!0,xs:6,sx:{display:"flex",justifyContent:"flex-end"},children:z!==ne.length-1?(0,I.jsx)(v.rU,{to:{pathname:y._.student.exam.review,search:"?showall=0&page=".concat(z+1)},children:(0,I.jsx)(D.Z,{children:e("course_management_exam_preview_next_page")})}):(0,I.jsx)(D.Z,{onClick:()=>{S(y._.student.exam.detail)},"translation-key":"exam_finish_review",children:e("exam_finish_review")})})]})]})]}),(0,I.jsxs)(x.ZP,{sx:{display:L?"block":"none",width:K,flexShrink:0,"& .MuiDrawer-paper":{borderTop:"1px solid #E1E1E1",borderRadius:"12px 0px",width:K,top:"".concat(_e+10,"px ")}},variant:ge,anchor:"right",open:L,children:[(0,I.jsx)(r.Z,{sx:{display:"flex",justifyContent:"flex-end",padding:1},children:(0,I.jsx)(B.ZP,{onClick:()=>{Y(!1)},variant:"soft",children:"rtl"===M.direction?(0,I.jsx)(o.Z,{}):(0,I.jsx)(i.Z,{})})}),(0,I.jsx)(r.Z,{className:F.drawerBody,children:(0,I.jsxs)(r.Z,{className:F.drawerFieldContainer,children:[(0,I.jsx)(a.ZP,{container:!0,maxHeight:"80dvh",overflow:"auto",rowSpacing:3,children:(0,I.jsxs)(a.ZP,{item:!0,xs:12,children:[(0,I.jsx)(g.Z,{className:F.drawerTextTitle,children:e("take_exam_question_navigation_title")}),(0,I.jsx)(H.Z,{title:e("take_exam_question_name"),fontSize:"13px",fontWeight:"500"}),(0,I.jsx)(m.Z,{placeholder:e("exam_enter_question_index"),size:"small",type:"number",fullWidth:!0,sx:{marginBottom:"10px"},value:X,InputProps:{inputProps:{min:1,max:ne.length}},onChange:e=>{var n=parseInt(e.target.value,10);const o=ne.length;if(n>o&&(n=o),n<1&&(n=1),ee(n),void 0!==n||null!==n||isNaN(n))if("0"===Q)w&&t&&C&&n-1>=0&&S("".concat(y._.student.exam.review.replace(":courseId",w).replace(":examId",t).replace(":submissionId",C),"?showall=0&page=").concat(n-1));else if(ne[n-1]){const e=(0,$.Z)(ne[n-1].data.question.id),t=document.getElementById(e);null===t||void 0===t||t.scrollIntoView({behavior:"smooth"})}}})]})}),(0,I.jsx)(a.ZP,{container:!0,spacing:1,className:F.pageNavigationDrawer,children:ne.map(((e,n)=>(0,I.jsx)(a.ZP,{item:!0,children:(0,I.jsx)(D.Z,{variant:"outlined",sx:{borderRadius:"1000px",width:"40px",height:"40px"},onClick:()=>{if("0"===Q)w&&t&&C&&S("".concat(y._.student.exam.review.replace(":courseId",w).replace(":examId",t).replace(":submissionId",C),"?showall=0&page=").concat(n));else{const n=(0,$.Z)(e.data.question.id),t=document.getElementById(n);null===t||void 0===t||t.scrollIntoView({behavior:"smooth"})}},children:n+1})},n)))}),(0,I.jsxs)(a.ZP,{container:!0,spacing:2,sx:{marginTop:"10px"},children:[(0,I.jsx)(a.ZP,{item:!0,xs:12,justifyContent:"center",display:"flex",children:(0,I.jsx)(D.Z,{fullWidth:!0,variant:"soft",onClick:()=>{w&&t&&C&&S("".concat("0"!==Q?"".concat(y._.student.exam.review.replace(":courseId",w).replace(":examId",t).replace(":submissionId",C),"?showall=0"):y._.student.exam.review.replace(":courseId",w).replace(":examId",t).replace(":submissionId",C)))},children:e(Q?"exam_view_multiple_page":"exam_view_one_page")})}),(0,I.jsx)(a.ZP,{item:!0,xs:12,justifyContent:"center",display:"flex",children:(0,I.jsx)(D.Z,{fullWidth:!0,onClick:()=>{w&&t&&S(y._.student.exam.detail.replace(":courseId",w).replace(":examId",t))},"translation-key":"exam_finish_review",children:e("exam_finish_review")})})]})]})})]})]})]})]})}},62968:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(37222);function i(e){const n=Array.from((0,o.Z)(e));return btoa(String.fromCharCode.apply(null,n)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}},21426:(e,n,t)=>{var o=t(64836);n.Z=void 0;var i=o(t(45045)),s=t(46417);n.Z=(0,i.default)((0,s.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72"}),"AccessTimeRounded")},48646:(e,n,t)=>{var o=t(64836);n.Z=void 0;var i=o(t(45045)),s=t(46417);n.Z=(0,i.default)((0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.88-11.71L10 14.17l-1.88-1.88a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0"}),"CheckCircleOutlineRounded")},45831:(e,n,t)=>{var o=t(64836);n.Z=void 0;var i=o(t(45045)),s=t(46417);n.Z=(0,i.default)((0,s.jsx)("path",{d:"M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 15c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"}),"DateRangeRounded")}}]);