"use strict";(self.webpackChunkfrontend_app=self.webpackChunkfrontend_app||[]).push([[8521],{91084:(e,t,r)=>{var n=r(64836);t.Z=void 0;var i=n(r(45045)),o=r(46417);t.Z=(0,i.default)((0,o.jsx)("path",{d:"M9.01 14H2v2h7.01v3L13 15l-3.99-4zm5.98-1v-3H22V8h-7.01V5L11 9z"}),"CompareArrows")},84752:(e,t,r)=>{var n=r(64836);t.Z=void 0;var i=n(r(45045)),o=r(46417);t.Z=(0,i.default)((0,o.jsx)("path",{d:"M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7zm1.5 14h-6v-2h6zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2z"}),"Difference")},82705:(e,t,r)=>{var n=r(64836);t.Z=void 0;var i=n(r(45045)),o=r(46417);t.Z=(0,i.default)((0,o.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2zm-1 7h5.5L14 6.5z"}),"FileCopy")},86426:(e,t,r)=>{var n=r(64836);t.Z=void 0;var i=n(r(45045)),o=r(46417);t.Z=(0,i.default)((0,o.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11zM8 21V7h6v5h5v9z"}),"FileCopyOutlined")},53512:(e,t,r)=>{var n=r(64836);t.Z=void 0;var i=n(r(45045)),o=r(46417);t.Z=(0,i.default)((0,o.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zM6 20V4h7v5h5v11z"}),"InsertDriveFileOutlined")},2214:(e,t,r)=>{var n=r(64836);t.Z=void 0;var i=n(r(45045)),o=r(46417);t.Z=(0,i.default)([(0,o.jsx)("ellipse",{cx:"12",cy:"12",rx:"3",ry:"5.74"},"0"),(0,o.jsx)("path",{d:"M9.04 16.87c-.33.08-.68.13-1.04.13-2.76 0-5-2.24-5-5s2.24-5 5-5c.36 0 .71.05 1.04.13.39-.56.88-1.12 1.49-1.63C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7c.9 0 1.75-.19 2.53-.5-.61-.51-1.1-1.07-1.49-1.63M16 5c-.9 0-1.75.19-2.53.5.61.51 1.1 1.07 1.49 1.63.33-.08.68-.13 1.04-.13 2.76 0 5 2.24 5 5s-2.24 5-5 5c-.36 0-.71-.05-1.04-.13-.39.56-.88 1.12-1.49 1.63.78.31 1.63.5 2.53.5 3.86 0 7-3.14 7-7s-3.14-7-7-7"},"1")],"JoinInner")},86372:(e,t,r)=>{var n=r(64836);t.Z=void 0;var i=n(r(45045)),o=r(46417);t.Z=(0,i.default)([(0,o.jsx)("path",{d:"m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M13 20.01 4 11V4h7v-.01l9 9z"},"0"),(0,o.jsx)("circle",{cx:"6.5",cy:"6.5",r:"1.5"},"1")],"LocalOfferOutlined")},66938:(e,t,r)=>{r.d(t,{Z:()=>Re});var n=r(87462),i=r(63366),o=r(47313),s=r(64182),a=r(22740),l=r(46417),c={modified:{doc:""},original:{doc:""}},h=(0,o.createContext)(c);function f(e,t){return(0,n.Z)({},e,t,{modified:(0,n.Z)({},e.modified,t.modified),original:(0,n.Z)({},e.original,t.original)})}var d=()=>(0,o.useContext)(h),u=e=>{var{children:t,theme:r}=e,[i,s]=(0,o.useReducer)(f,(0,n.Z)({},c,{theme:r}));return(0,o.useEffect)((()=>s({theme:r})),[r]),(0,l.jsx)(h.Provider,{value:(0,n.Z)({},i,{dispatch:s}),children:t})},m=["extensions","value","selection","onChange"],g=e=>{var{extensions:t=[],value:r,selection:l,onChange:c}=e,h=(0,i.Z)(e,m),{theme:f,dispatch:u}=d(),g=(0,s.Lh)((0,n.Z)({},h,{theme:f})),p=a.tk.updateListener.of((e=>{if(e.docChanged&&"function"===typeof c){var t=e.state.doc.toString();c(t,e)}}));return(0,o.useEffect)((()=>u({original:{doc:r,selection:l,extensions:[p,...g,...t]},originalExtension:{onChange:c,option:h,extension:[t,p]}})),[e]),null};g.displayName="CodeMirrorMerge.Original";var p=["extensions","value","selection","onChange"],v=e=>{var{extensions:t=[],value:r,selection:l,onChange:c}=e,h=(0,i.Z)(e,p),{theme:f,dispatch:u}=d(),m=(0,s.Lh)((0,n.Z)({},h,{theme:f})),g=a.tk.updateListener.of((e=>{if(e.docChanged&&"function"===typeof c){var t=e.state.doc.toString();c(t,e)}}));return(0,o.useEffect)((()=>u({modified:{doc:r,selection:l,extensions:[g,...m,...t]},modifiedExtension:{onChange:c,option:h,extension:[g,t]}})),[e]),null};v.displayName="CodeMirrorMerge.Modified";var A=r(89933),b=r(28335);r(92649),r(86536);class C{constructor(e,t,r,n){this.fromA=e,this.toA=t,this.fromB=r,this.toB=n}offset(e,t){return new C(this.fromA+e,this.toA+e,this.fromB+t,this.toB+t)}}function x(e,t,r,n,i,o){if(e==n)return[];let s=O(e,t,r,n,i,o),a=D(e,t+s,r,n,i+s,o),l=(r-=a)-(t+=s),c=(o-=a)-(i+=s);if(!l||!c)return[new C(t,r,i,o)];if(l>c){let s=e.slice(t,r).indexOf(n.slice(i,o));if(s>-1)return[new C(t,t+s,i,i),new C(t+s+c,r,o,o)]}else if(c>l){let s=n.slice(i,o).indexOf(e.slice(t,r));if(s>-1)return[new C(t,t,i,i+s),new C(r,r,i+s+l,o)]}if(1==l||1==c)return[new C(t,r,i,o)];let h=E(e,t,r,n,i,o);if(h){let[s,a,l]=h;return x(e,t,s,n,i,a).concat(x(e,s+l,r,n,a+l,o))}return function(e,t,r,n,i,o){let s=r-t,a=o-i;if(B<1e9&&Math.min(s,a)>16*B)return Math.min(s,a)>64*B?[new C(t,r,i,o)]:R(e,t,r,n,i,o);let l=Math.ceil((s+a)/2);k.reset(l),M.reset(l);let c=(r,o)=>e.charCodeAt(t+r)==n.charCodeAt(i+o),h=(t,i)=>e.charCodeAt(r-t-1)==n.charCodeAt(o-i-1),f=(s-a)%2!=0?M:null,d=f?null:k;for(let u=0;u<l;u++){if(u>B)return R(e,t,r,n,i,o);let m=k.advance(u,s,a,l,f,!1,c)||M.advance(u,s,a,l,d,!0,h);if(m)return L(e,t,r,t+m[0],n,i,o,i+m[1])}return[new C(t,r,i,o)]}(e,t,r,n,i,o)}let B=1e9;class w{constructor(){this.vec=[]}reset(e){this.len=e<<1;for(let t=0;t<this.len;t++)this.vec[t]=-1;this.vec[e+1]=0,this.start=this.end=0}advance(e,t,r,n,i,o,s){for(let a=-e+this.start;a<=e-this.end;a+=2){let l=n+a,c=a==-e||a!=e&&this.vec[l-1]<this.vec[l+1]?this.vec[l+1]:this.vec[l-1]+1,h=c-a;for(;c<t&&h<r&&s(c,h);)c++,h++;if(this.vec[l]=c,c>t)this.end+=2;else if(h>r)this.start+=2;else if(i){let e=n+(t-r)-a;if(e>=0&&e<this.len&&-1!=i.vec[e])if(o){let r=i.vec[e];if(r>=t-c)return[r,n+r-e]}else{if(c>=t-i.vec[e])return[c,h]}}}return null}}const k=new w,M=new w;function L(e,t,r,n,i,o,s,a){let l=!1;return P(e,n)||++n!=r||(l=!0),P(i,a)||++a!=s||(l=!0),l?[new C(t,r,o,s)]:x(e,t,n,i,o,a).concat(x(e,n,r,i,a,s))}function Z(e,t){let r=1,n=Math.min(e,t);for(;r<n;)r<<=1;return r}function O(e,t,r,n,i,o){if(t==r||t==o||e.charCodeAt(t)!=n.charCodeAt(i))return 0;let s=Z(r-t,o-i);for(let a=t,l=i;;){let i=a+s,c=l+s;if(i>r||c>o||e.slice(a,i)!=n.slice(l,c)){if(1==s)return a-t-(P(e,a)?0:1);s>>=1}else{if(i==r||c==o)return i-t;a=i,l=c}}}function D(e,t,r,n,i,o){if(t==r||i==o||e.charCodeAt(r-1)!=n.charCodeAt(o-1))return 0;let s=Z(r-t,o-i);for(let a=r,l=o;;){let o=a-s,c=l-s;if(o<t||c<i||e.slice(o,a)!=n.slice(c,l)){if(1==s)return r-a-(P(e,a)?0:1);s>>=1}else{if(o==t||c==i)return r-o;a=o,l=c}}}function y(e,t,r,n,i,o,s,a){let l=n.slice(i,o),c=null;for(;;){if(c||s<a)return c;for(let a=t+s;;){P(e,a)||a++;let h=a+s;if(P(e,h)||(h+=h==a+1?1:-1),h>=r)break;let f=e.slice(a,h),d=-1;for(;-1!=(d=l.indexOf(f,d+1));){let s=O(e,h,r,n,i+d+f.length,o),l=D(e,t,a,n,i,i+d),u=f.length+s+l;(!c||c[2]<u)&&(c=[a-l,i+d-l,u])}a=h}if(a<0)return c;s>>=1}}function E(e,t,r,n,i,o){let s=r-t,a=o-i;if(s<a){let s=E(n,i,o,e,t,r);return s&&[s[1],s[0],s[2]]}return s<4||2*a<s?null:y(e,t,r,n,i,o,Math.floor(s/4),-1)}function R(e,t,r,n,i,o){let s,a=r-t,l=o-i;if(a<l){let l=y(n,i,o,e,t,r,Math.floor(a/6),50);s=l&&[l[1],l[0],l[2]]}else s=y(e,t,r,n,i,o,Math.floor(l/6),50);if(!s)return[new C(t,r,i,o)];let[c,h,f]=s;return x(e,t,c,n,i,h).concat(x(e,c+f,r,n,h+f,o))}function V(e,t){for(let r=1;r<e.length;r++){let n=e[r-1],i=e[r];n.toA>i.fromA-t&&n.toB>i.fromB-t&&(e[r-1]=new C(n.fromA,i.toA,n.fromB,i.toB),e.splice(r--,1))}}let N;try{N=new RegExp("[\\p{Alphabetic}\\p{Number}]","u")}catch(Ve){}function S(e){return e>48&&e<58||e>64&&e<91||e>96&&e<123}function T(e,t){if(t==e.length)return 0;let r=e.charCodeAt(t);return r<192?S(r)?1:0:N?U(r)&&t!=e.length-1?N.test(e.slice(t,t+2))?2:0:N.test(String.fromCharCode(r))?1:0:0}function H(e,t){if(!t)return 0;let r=e.charCodeAt(t-1);return r<192?S(r)?1:0:N?F(r)&&1!=t?N.test(e.slice(t-2,t))?2:0:N.test(String.fromCharCode(r))?1:0:0}function z(e,t,r){if(t==e.length||!H(e,t))return t;for(let n=t,i=t+r;;){let r=T(e,n);if(!r)return n;if(n+=r,n>i)return t}}function G(e,t,r){if(!t||!T(e,t))return t;for(let n=t,i=t-r;;){let r=H(e,n);if(!r)return n;if(n-=r,n<i)return t}}function j(e,t,r){for(let n=t,i=t-r;;){let r=n?e.charCodeAt(n-1):10;if(10==r)return n;if(n--,n<i||32!=r&&9!=r)return t}}const U=e=>e>=55296&&e<=56319,F=e=>e>=56320&&e<=57343;function P(e,t){return!t||t==e.length||!U(e.charCodeAt(t-1))||!F(e.charCodeAt(t))}function _(e,t,r){var n;return B=(null!==(n=null===r||void 0===r?void 0:r.scanLimit)&&void 0!==n?n:1e9)>>1,function(e,t,r){for(;;){V(r,1);let n=!1;for(let i=0;i<r.length;i++){let o,s,a=r[i];(o=O(e,a.fromA,a.toA,t,a.fromB,a.toB))&&(a=r[i]=new C(a.fromA+o,a.toA,a.fromB+o,a.toB)),(s=D(e,a.fromA,a.toA,t,a.fromB,a.toB))&&(a=r[i]=new C(a.fromA,a.toA-s,a.fromB,a.toB-s));let l=a.toA-a.fromA,c=a.toB-a.fromB;if(l&&c)continue;let h=a.fromA-(i?r[i-1].toA:0),f=(i<r.length-1?r[i+1].fromA:e.length)-a.toA;if(!h||!f)continue;let d=l?e.slice(a.fromA,a.toA):t.slice(a.fromB,a.toB);h<=d.length&&e.slice(a.fromA-h,a.fromA)==d.slice(d.length-h)?(r[i]=new C(a.fromA-h,a.toA-h,a.fromB-h,a.toB-h),n=!0):f<=d.length&&e.slice(a.toA,a.toA+f)==d.slice(0,f)&&(r[i]=new C(a.fromA+f,a.toA+f,a.fromB+f,a.toB+f),n=!0)}if(!n)break}return r}(e,t,x(e,0,e.length,t,0,t.length))}function I(e,t,r){return function(e,t,r){for(let n=0,i=0;i<e.length;i++){let o=e[i],s=o.toA-o.fromA,a=o.toB-o.fromB;if(s&&a||s>3||a>3){let l=i==e.length-1?t.length:e[i+1].fromA,c=o.fromA-n,h=l-o.toA,f=G(t,o.fromA,Math.min(c,5)),d=z(t,o.toA,Math.min(h,5)),u=o.fromA-f,m=d-o.toA;if(!s||!a){let h,g,p=Math.max(s,a),[v,A,b]=s?[t,o.fromA,o.toA]:[r,o.fromB,o.toB];u&&m?(p>u&&t.slice(f,o.fromA)==v.slice(b-u,b)?(o=e[i]=new C(f,f+s,o.fromB-u,o.toB-u),f=o.fromA,d=z(t,o.toA,Math.min(l-o.toA,5))):p>m&&t.slice(o.toA,d)==v.slice(A,A+m)&&(o=e[i]=new C(d-s,d,o.fromB+m,o.toB+m),d=o.toA,f=G(t,o.fromA,Math.min(o.fromA-n,5))),u=o.fromA-f,m=d-o.toA):u||m||!(g=o.fromA-(h=j(t,o.fromA,c)))||t.slice(h,o.fromA)!=v.slice(b-g,b)||(o=e[i]=new C(h,h+s,o.fromB-g,o.toB-g))}(u||m)&&(o=e[i]=new C(o.fromA-u,o.toA+m,o.fromB-u,o.toB+m)),n=o.toA}}return V(e,3),e}(_(e,t,r),e,t)}const Q=A.r$.define({combine:e=>e[0]}),q=A.Py.define(),X=A.QQ.define({create:e=>null,update(e,t){for(let r of t.effects)r.is(q)&&(e=r.value);return e}});class J{constructor(e,t,r,n,i){this.changes=e,this.fromA=t,this.toA=r,this.fromB=n,this.toB=i}offset(e,t){return e||t?new J(this.changes,this.fromA+e,this.toA+e,this.fromB+t,this.toB+t):this}get endA(){return Math.max(this.fromA,this.toA-1)}get endB(){return Math.max(this.fromB,this.toB-1)}static build(e,t,r){return $(I(e.toString(),t.toString(),r),e,t,0,0)}static updateA(e,t,r,n,i){return re(te(e,n,!0,r.length),e,t,r,i)}static updateB(e,t,r,n,i){return re(te(e,n,!1,t.length),e,t,r,i)}}function W(e,t,r,n){let i=r.lineAt(e),o=n.lineAt(t);return i.to==e&&o.to==t&&e<r.length&&t<n.length?[e+1,t+1]:[i.from,o.from]}function Y(e,t,r,n){let i=r.lineAt(e),o=n.lineAt(t);return i.from==e&&o.from==t?[e,t]:[i.to+1,o.to+1]}function $(e,t,r,n,i){let o=[];for(let s=0;s<e.length;s++){let a=e[s],[l,c]=W(a.fromA+n,a.fromB+i,t,r),[h,f]=Y(a.toA+n,a.toB+i,t,r),d=[a.offset(-l+n,-c+i)];for(;s<e.length-1;){let o=e[s+1],[a,u]=W(o.fromA+n,o.fromB+i,t,r);if(a>h+1&&u>f+1)break;d.push(o.offset(-l+n,-c+i)),[h,f]=Y(o.toA+n,o.toB+i,t,r),s++}o.push(new J(d,l,Math.max(l,h),c,Math.max(c,f)))}return o}const K=1e3;function ee(e,t,r,n){let i=0,o=e.length;for(;;){if(i==o){let n=0,o=0;i&&({toA:n,toB:o}=e[i-1]);let s=t-(r?n:o);return[n+s,o+s]}let s=i+o>>1,a=e[s],[l,c]=r?[a.fromA,a.toA]:[a.fromB,a.toB];if(l>t)o=s;else{if(!(c<=t))return n?[a.fromA,a.fromB]:[a.toA,a.toB];i=s+1}}}function te(e,t,r,n){let i=[];return t.iterChangedRanges(((o,s,a,l)=>{let c=0,h=r?t.length:n,f=0,d=r?n:t.length;o>K&&([c,f]=ee(e,o-K,r,!0)),s<t.length-K&&([h,d]=ee(e,s+K,r,!1));let u,m=l-a-(s-o),[g,p]=r?[m,0]:[0,m];i.length&&(u=i[i.length-1]).toA>=c?i[i.length-1]={fromA:u.fromA,fromB:u.fromB,toA:h,toB:d,diffA:u.diffA+g,diffB:u.diffB+p}:i.push({fromA:c,toA:h,fromB:f,toB:d,diffA:g,diffB:p})})),i}function re(e,t,r,n,i){if(!e.length)return t;let o=[];for(let s=0,a=0,l=0,c=0;;s++){let h=s==e.length?null:e[s],f=h?h.fromA+a:r.length,d=h?h.fromB+l:n.length;for(;c<t.length;){let e=t[c];if(e.toA+a>f||e.toB+l>d)break;o.push(e.offset(a,l)),c++}if(!h)break;let u=h.toA+a+h.diffA,m=h.toB+l+h.diffB,g=I(r.sliceString(f,u),n.sliceString(d,m),i);for(let e of $(g,r,n,f,d))o.push(e);for(a+=h.diffA,l+=h.diffB;c<t.length;){let e=t[c];if(e.fromA+a>u&&e.fromB+l>m)break;c++}}return o}const ne=a.lg.fromClass(class{constructor(e){({deco:this.deco,gutter:this.gutter}=fe(e))}update(e){var t,r;(e.docChanged||e.viewportChanged||(t=e.startState,r=e.state,t.field(X,!1)!=r.field(X,!1))||function(e,t){return e.facet(Q)!=t.facet(Q)}(e.startState,e.state))&&({deco:this.deco,gutter:this.gutter}=fe(e.view))}},{decorations:e=>e.deco}),ie=A.Wl.low((0,a.v5)({class:"cm-changeGutter",markers:e=>{var t;return(null===(t=e.plugin(ne))||void 0===t?void 0:t.gutter)||A.Xs.empty}}));const oe=a.p.line({class:"cm-changedLine"}),se=a.p.mark({class:"cm-changedText"}),ae=a.p.mark({tagName:"ins",class:"cm-insertedLine"}),le=a.p.mark({tagName:"del",class:"cm-deletedLine"}),ce=new class extends a.SJ{constructor(){super(...arguments),this.elementClass="cm-changedLineGutter"}};function he(e,t,r,n,i,o){let s=r?e.fromA:e.fromB,a=r?e.toA:e.toB,l=0;if(s!=a){i.add(s,s,oe),i.add(s,a,r?le:ae),o&&o.add(s,s,ce);for(let c=t.iterRange(s,a-1),h=s;!c.next().done;){if(c.lineBreak){h++,i.add(h,h,oe),o&&o.add(h,h,ce);continue}let t=h+c.value.length;if(n)for(;l<e.changes.length;){let n=e.changes[l],o=s+(r?n.fromA:n.fromB),a=s+(r?n.toA:n.toB),c=Math.max(h,o),f=Math.min(t,a);if(c<f&&i.add(c,f,se),!(a<t))break;l++}h=t}}}function fe(e){let t=e.state.field(X),{side:r,highlightChanges:n,markGutter:i}=e.state.facet(Q),o="a"==r,s=new A.f_,a=i?new A.f_:null,{from:l,to:c}=e.viewport;for(let h of t){if((o?h.fromA:h.fromB)>=c)break;(o?h.toA:h.toB)>l&&he(h,e.state.doc,o,n,s,a)}return{deco:s.finish(),gutter:a&&a.finish()}}class de extends a.l9{constructor(e){super(),this.height=e}eq(e){return this.height==e.height}toDOM(){let e=document.createElement("div");return e.className="cm-mergeSpacer",e.style.height=this.height+"px",e}updateDOM(e){return e.style.height=this.height+"px",!0}get estimatedHeight(){return this.height}ignoreEvent(){return!1}}const ue=A.Py.define({map:(e,t)=>e.map(t)}),me=A.QQ.define({create:()=>a.p.none,update:(e,t)=>{for(let r of t.effects)if(r.is(ue))return r.value;return e.map(t.changes)},provide:e=>a.tk.decorations.from(e)}),ge=.01;const pe=A.Py.define({map:(e,t)=>t.mapPos(e)});class ve extends a.l9{constructor(e){super(),this.lines=e}eq(e){return this.lines==e.lines}toDOM(e){let t=document.createElement("div");return t.className="cm-collapsedLines",t.textContent="\u299a "+e.state.phrase("$ unchanged lines",this.lines)+" \u299a",t.addEventListener("click",(t=>{let r=e.posAtDOM(t.target);e.dispatch({effects:pe.of(r)});let{side:n,sibling:i}=e.state.facet(Q);i&&i().dispatch({effects:pe.of(Ae(r,e.state.field(X),"a"==n))})})),t}ignoreEvent(e){return e instanceof MouseEvent}get estimatedHeight(){return 27}}function Ae(e,t,r){let n=0,i=0;for(let o=0;;o++){let s=o<t.length?t[o]:null;if(!s||(r?s.fromA:s.fromB)>=e)return i+(e-n);[n,i]=r?[s.toA,s.toB]:[s.toB,s.toA]}}const be=A.QQ.define({create:e=>a.p.none,update(e,t){e=e.map(t.changes);for(let r of t.effects)r.is(pe)&&(e=e.update({filter:e=>e!=r.value}));return e},provide:e=>a.tk.decorations.from(e)});function Ce(e){let{margin:t=3,minSize:r=4}=e;return be.init((e=>function(e,t,r){let n=new A.f_,i="a"==e.facet(Q).side,o=e.field(X),s=1;for(let l=0;;l++){let c=l<o.length?o[l]:null,h=l?s+t:1,f=c?e.doc.lineAt(i?c.fromA:c.fromB).number-1-t:e.doc.lines,d=f-h+1;if(d>=r&&n.add(e.doc.line(h).from,e.doc.line(f).to,a.p.replace({widget:new ve(d),block:!0})),!c)break;s=e.doc.lineAt(Math.min(e.doc.length,i?c.toA:c.toB)).number}return n.finish()}(e,t,r)))}const xe=a.tk.styleModule.of(new b.V({".cm-mergeView":{overflowY:"auto"},".cm-mergeViewEditors":{display:"flex",alignItems:"stretch"},".cm-mergeViewEditor":{flexGrow:1,flexBasis:0,overflow:"hidden"},".cm-merge-revert":{width:"1.6em",flexGrow:0,flexShrink:0,position:"relative"},".cm-merge-revert button":{position:"absolute",display:"block",width:"100%",boxSizing:"border-box",textAlign:"center",background:"none",border:"none",font:"inherit",cursor:"pointer"}})),Be=a.tk.baseTheme({".cm-mergeView & .cm-scroller, .cm-mergeView &":{height:"auto !important",overflowY:"visible !important"},"&.cm-merge-a .cm-changedLine, .cm-deletedChunk":{backgroundColor:"rgba(160, 128, 100, .08)"},"&.cm-merge-b .cm-changedLine":{backgroundColor:"rgba(100, 160, 128, .08)"},"&light.cm-merge-a .cm-changedText, &light .cm-deletedChunk .cm-deletedText":{background:"linear-gradient(#ee443366, #ee443366) bottom/100% 2px no-repeat"},"&dark.cm-merge-a .cm-changedText, &dark .cm-deletedChunk .cm-deletedText":{background:"linear-gradient(#ffaa9966, #ffaa9966) bottom/100% 2px no-repeat"},"&light.cm-merge-b .cm-changedText":{background:"linear-gradient(#22bb2266, #22bb2266) bottom/100% 2px no-repeat"},"&dark.cm-merge-b .cm-changedText":{background:"linear-gradient(#88ff8866, #88ff8866) bottom/100% 2px no-repeat"},".cm-insertedLine, .cm-deletedLine":{textDecoration:"none"},".cm-deletedChunk":{paddingLeft:"6px","& .cm-chunkButtons":{position:"absolute",insetInlineEnd:"5px"},"& button":{border:"none",cursor:"pointer",color:"white",margin:"0 2px",borderRadius:"3px","&[name=accept]":{background:"#2a2"},"&[name=reject]":{background:"#d43"}}},".cm-collapsedLines":{padding:"5px 5px 5px 10px",cursor:"pointer"},"&light .cm-collapsedLines":{color:"#444",background:"linear-gradient(to bottom, transparent 0, #f3f3f3 30%, #f3f3f3 70%, transparent 100%)"},"&dark .cm-collapsedLines":{color:"#ddd",background:"linear-gradient(to bottom, transparent 0, #222 30%, #222 70%, transparent 100%)"},".cm-changeGutter":{width:"3px",paddingLeft:"1px"},"&light.cm-merge-a .cm-changedLineGutter, &light .cm-deletedLineGutter":{background:"#e43"},"&dark.cm-merge-a .cm-changedLineGutter, &dark .cm-deletedLineGutter":{background:"#fa9"},"&light.cm-merge-b .cm-changedLineGutter":{background:"#2b2"},"&dark.cm-merge-b .cm-changedLineGutter":{background:"#8f8"}}),we=new A.F6,ke=new A.F6;class Me{constructor(e){this.revertDOM=null,this.revertToA=!1,this.revertToLeft=!1,this.measuring=-1,this.diffConf=e.diffConfig;let t=[A.Wl.low(ne),Be,xe,me,a.tk.updateListener.of((e=>{this.measuring<0&&(e.heightChanged||e.viewportChanged)&&!e.transactions.some((e=>e.effects.some((e=>e.is(ue)))))&&this.measure()}))],r=[Q.of({side:"a",sibling:()=>this.b,highlightChanges:!1!==e.highlightChanges,markGutter:!1!==e.gutter})];!1!==e.gutter&&r.push(ie);let n=A.yy.create({doc:e.a.doc,selection:e.a.selection,extensions:[e.a.extensions||[],a.tk.editorAttributes.of({class:"cm-merge-a"}),ke.of(r),t]}),i=[Q.of({side:"b",sibling:()=>this.a,highlightChanges:!1!==e.highlightChanges,markGutter:!1!==e.gutter})];!1!==e.gutter&&i.push(ie);let o=A.yy.create({doc:e.b.doc,selection:e.b.selection,extensions:[e.b.extensions||[],a.tk.editorAttributes.of({class:"cm-merge-b"}),ke.of(i),t]});this.chunks=J.build(n.doc,o.doc,this.diffConf);let s=[X.init((()=>this.chunks)),we.of(e.collapseUnchanged?Ce(e.collapseUnchanged):[])];n=n.update({effects:A.Py.appendConfig.of(s)}).state,o=o.update({effects:A.Py.appendConfig.of(s)}).state,this.dom=document.createElement("div"),this.dom.className="cm-mergeView",this.editorDOM=this.dom.appendChild(document.createElement("div")),this.editorDOM.className="cm-mergeViewEditors";let l=e.orientation||"a-b",c=document.createElement("div");c.className="cm-mergeViewEditor";let h=document.createElement("div");h.className="cm-mergeViewEditor",this.editorDOM.appendChild("a-b"==l?c:h),this.editorDOM.appendChild("a-b"==l?h:c),this.a=new a.tk({state:n,parent:c,root:e.root,dispatchTransactions:e=>this.dispatch(e,this.a)}),this.b=new a.tk({state:o,parent:h,root:e.root,dispatchTransactions:e=>this.dispatch(e,this.b)}),this.setupRevertControls(!!e.revertControls,"b-to-a"==e.revertControls,e.renderRevertControl),e.parent&&e.parent.appendChild(this.dom),this.scheduleMeasure()}dispatch(e,t){if(e.some((e=>e.docChanged))){let r=e[e.length-1],n=e.reduce(((e,t)=>e.compose(t.changes)),A.as.empty(e[0].startState.doc.length));this.chunks=t==this.a?J.updateA(this.chunks,r.newDoc,this.b.state.doc,n,this.diffConf):J.updateB(this.chunks,this.a.state.doc,r.newDoc,n,this.diffConf),t.update([...e,r.state.update({effects:q.of(this.chunks)})]);let i=t==this.a?this.b:this.a;i.update([i.state.update({effects:q.of(this.chunks)})]),this.scheduleMeasure()}else t.update(e)}reconfigure(e){if("diffConfig"in e&&(this.diffConf=e.diffConfig),"orientation"in e){let t="b-a"!=e.orientation;if(t!=(this.editorDOM.firstChild==this.a.dom.parentNode)){let e=this.a.dom.parentNode,r=this.b.dom.parentNode;e.remove(),r.remove(),this.editorDOM.insertBefore(t?e:r,this.editorDOM.firstChild),this.editorDOM.appendChild(t?r:e),this.revertToLeft=!this.revertToLeft,this.revertDOM&&(this.revertDOM.textContent="")}}if("revertControls"in e||"renderRevertControl"in e){let t=!!this.revertDOM,r=this.revertToA,n=this.renderRevert;"revertControls"in e&&(t=!!e.revertControls,r="b-to-a"==e.revertControls),"renderRevertControl"in e&&(n=e.renderRevertControl),this.setupRevertControls(t,r,n)}let t="highlightChanges"in e,r="gutter"in e,n="collapseUnchanged"in e;if(t||r||n){let i=[],o=[];if(t||r){let n=this.a.state.facet(Q),s=r?!1!==e.gutter:n.markGutter,a=t?!1!==e.highlightChanges:n.highlightChanges;i.push(ke.reconfigure([Q.of({side:"a",sibling:()=>this.b,highlightChanges:a,markGutter:s}),s?ie:[]])),o.push(ke.reconfigure([Q.of({side:"b",sibling:()=>this.a,highlightChanges:a,markGutter:s}),s?ie:[]]))}if(n){let t=we.reconfigure(e.collapseUnchanged?Ce(e.collapseUnchanged):[]);i.push(t),o.push(t)}this.a.dispatch({effects:i}),this.b.dispatch({effects:o})}this.scheduleMeasure()}setupRevertControls(e,t,r){this.revertToA=t,this.revertToLeft=this.revertToA==(this.editorDOM.firstChild==this.a.dom.parentNode),this.renderRevert=r,!e&&this.revertDOM?(this.revertDOM.remove(),this.revertDOM=null):e&&!this.revertDOM?(this.revertDOM=this.editorDOM.insertBefore(document.createElement("div"),this.editorDOM.firstChild.nextSibling),this.revertDOM.addEventListener("mousedown",(e=>this.revertClicked(e))),this.revertDOM.className="cm-merge-revert"):this.revertDOM&&(this.revertDOM.textContent="")}scheduleMeasure(){if(this.measuring<0){let e=this.dom.ownerDocument.defaultView||window;this.measuring=e.requestAnimationFrame((()=>{this.measuring=-1,this.measure()}))}}measure(){!function(e,t,r){let n=new A.f_,i=new A.f_,o=e.state.field(me).iter(),s=t.state.field(me).iter(),l=0,c=0,h=0,f=0;for(let g=0;;g++){let d=g<r.length?r[g]:null;if(l<(d?d.fromA:e.state.doc.length)){let r=e.lineBlockAt(l).top+h-(t.lineBlockAt(c).top+f);r<-.01?(h-=r,n.add(l,l,a.p.widget({widget:new de(-r),block:!0,side:-1}))):r>ge&&(f+=r,i.add(c,c,a.p.widget({widget:new de(r),block:!0,side:-1})))}if(!d)break;for(l=d.toA,c=d.toB;o.value&&o.from<l;)h-=o.value.spec.widget.height,o.next();for(;s.value&&s.from<c;)f-=s.value.spec.widget.height,s.next()}for(;o.value;)h-=o.value.spec.widget.height,o.next();for(;s.value;)f-=s.value.spec.widget.height,s.next();let d=e.contentHeight+h-(t.contentHeight+f);d<ge?n.add(e.state.doc.length,e.state.doc.length,a.p.widget({widget:new de(-d),block:!0,side:1})):d>ge&&i.add(t.state.doc.length,t.state.doc.length,a.p.widget({widget:new de(d),block:!0,side:1}));let u=n.finish(),m=i.finish();A.Xs.eq([u],[e.state.field(me)])||e.dispatch({effects:ue.of(u)}),A.Xs.eq([m],[t.state.field(me)])||t.dispatch({effects:ue.of(m)})}(this.a,this.b,this.chunks),this.revertDOM&&this.updateRevertButtons()}updateRevertButtons(){let e=this.revertDOM,t=e.firstChild,r=this.a.viewport,n=this.b.viewport;for(let i=0;i<this.chunks.length;i++){let o=this.chunks[i];if(o.fromA>r.to||o.fromB>n.to)break;if(o.fromA<r.from||o.fromB<n.from)continue;let s=this.a.lineBlockAt(o.fromA).top+"px";for(;t&&+t.dataset.chunk<i;)t=Le(t);t&&t.dataset.chunk==String(i)?(t.style.top!=s&&(t.style.top=s),t=t.nextSibling):e.insertBefore(this.renderRevertButton(s,i),t)}for(;t;)t=Le(t)}renderRevertButton(e,t){let r;if(this.renderRevert)r=this.renderRevert();else{r=document.createElement("button");let e=this.a.state.phrase("Revert this chunk");r.setAttribute("aria-label",e),r.setAttribute("title",e),r.textContent=this.revertToLeft?"\u21dc":"\u21dd"}return r.style.top=e,r.setAttribute("data-chunk",String(t)),r}revertClicked(e){let t,r=e.target;for(;r&&r.parentNode!=this.revertDOM;)r=r.parentNode;if(r&&(t=this.chunks[r.dataset.chunk])){let[r,n,i,o,s,a]=this.revertToA?[this.b,this.a,t.fromB,t.toB,t.fromA,t.toA]:[this.a,this.b,t.fromA,t.toA,t.fromB,t.toB],l=r.state.sliceDoc(i,Math.max(i,o-1));i!=o&&a<=n.state.doc.length&&(l+=r.state.lineBreak),n.dispatch({changes:{from:s,to:Math.min(n.state.doc.length,a),insert:l},userEvent:"revert"}),e.preventDefault()}}destroy(){this.a.destroy(),this.b.destroy(),this.measuring>-1&&(this.dom.ownerDocument.defaultView||window).cancelAnimationFrame(this.measuring),this.dom.remove()}}function Le(e){let t=e.nextSibling;return e.remove(),t}a.l9;var Ze=["className","children","orientation","revertControls","highlightChanges","gutter","collapseUnchanged","destroyRerender","renderRevertControl"],Oe=["modified","modifiedExtension","original","originalExtension","theme","dispatch"],De=o.forwardRef(((e,t)=>{var{className:r,children:a,orientation:c,revertControls:h,highlightChanges:f,gutter:u,collapseUnchanged:m,destroyRerender:g=!0,renderRevertControl:p}=e,v=(0,i.Z)(e,Ze),A=d(),{modified:b,modifiedExtension:C,original:x,originalExtension:B,theme:w,dispatch:k}=A,M=(0,i.Z)(A,Oe),L=(0,o.useRef)(null),Z=(0,o.useRef)(),O={orientation:c,revertControls:h,highlightChanges:f,gutter:u,collapseUnchanged:m,renderRevertControl:p};(0,o.useImperativeHandle)(t,(()=>({container:L.current,view:Z.current,modified:b,original:x,config:(0,n.Z)({a:x,b:b,parent:L.current},O)})),[L,Z,b,x,O]),(0,o.useEffect)((()=>{!Z.current&&L.current&&(Z.current=new Me((0,n.Z)({a:(0,n.Z)({},x,{extensions:[...(null==B?void 0:B.extension)||[],...(0,s.Lh)((0,n.Z)({},null==B?void 0:B.option,{theme:w}))]}),b:(0,n.Z)({},b,{extensions:[...(null==C?void 0:C.extension)||[],...(0,s.Lh)((0,n.Z)({},null==C?void 0:C.option,{theme:w}))]}),parent:L.current},O)))}),[Z,L]),(0,o.useEffect)((()=>{if(x&&x.doc&&Z.current){var e,t,r=null==(e=Z.current)?void 0:e.a.state.doc.toString();if(r!==x.doc)null==(t=Z.current)||t.a.dispatch({changes:{from:0,to:r.length,insert:x.doc||""}})}if(b&&b.doc&&Z.current){var i,o,a=null==(i=Z.current)?void 0:i.b.state.doc.toString();if(a!==b.doc)null==(o=Z.current)||o.b.dispatch({changes:{from:0,to:a.length,insert:b.doc||""}})}if(g&&Z.current){var l=Z.current.a.state.selection.ranges[0].from,c=Z.current.b.state.selection.ranges[0].from;Z.current.destroy(),Z.current=new Me((0,n.Z)({a:(0,n.Z)({},x,{extensions:[...(null==B?void 0:B.extension)||[],...(0,s.Lh)((0,n.Z)({},null==B?void 0:B.option,{theme:w}))]}),b:(0,n.Z)({},b,{extensions:[...(null==C?void 0:C.extension)||[],...(0,s.Lh)((0,n.Z)({},null==C?void 0:C.option,{theme:w}))]}),parent:L.current},O)),l&&(Z.current.a.focus(),Z.current.a.dispatch({selection:{anchor:l,head:l}})),c&&(Z.current.b.focus(),Z.current.b.dispatch({selection:{anchor:c,head:c}}))}}),[Z,w,L.current,x,b,B,C,g]),(0,o.useEffect)((()=>()=>Z.current&&Z.current.destroy()),[]),(0,o.useEffect)((()=>{if(Z.current){var e={};M.orientation!==c&&(e.orientation=c),M.revertControls!==h&&(e.revertControls=h),M.highlightChanges!==f&&(e.highlightChanges=f),M.gutter!==u&&(e.gutter=u),M.collapseUnchanged!==m&&(e.collapseUnchanged=m),M.renderRevertControl!==p&&(e.collapseUnchanged=m),Object.keys(e).length&&k&&Z.current&&(Z.current.reconfigure((0,n.Z)({},e)),k((0,n.Z)({},e)))}}),[k,Z,c,h,f,u,m,p]);return(0,l.jsx)("div",(0,n.Z)({ref:L,className:"cm-merge-theme"+(r?" "+r:"")},v,{children:a}))}));De.displayName="CodeMirrorMerge.Internal";var ye=["theme"],Ee=o.forwardRef(((e,t)=>{var{theme:r}=e,o=(0,i.Z)(e,ye);return(0,l.jsx)(u,{theme:r,children:(0,l.jsx)(De,(0,n.Z)({},o,{ref:t}))})}));Ee.Original=g,Ee.Modified=v,Ee.displayName="CodeMirrorMerge";const Re=Ee}}]);