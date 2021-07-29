(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{12:function(e,t,a){},15:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(13),s=a.n(c),r=(a(36),a(3)),i=a(6),o=(a(37),a(23)),d=a.n(o),j=a(22),h=a.n(j),m=a(21),b=a.n(m),u=a(24),f=a.n(u),p=a(19),O=a.n(p),x=a(0);function g(e){return Object(x.jsxs)("div",{className:"Nav",children:[Object(x.jsx)("h1",{style:{color:"white"},children:"CV Maker"}),Object(x.jsxs)("span",{className:"end",children:[Object(x.jsx)("button",{className:"icon-button",onClick:e.clearHandler,title:"Clear All CV Data",children:Object(x.jsx)(O.a,{})}),Object(x.jsxs)("label",{htmlFor:"file-upload",className:"icon-button",title:"Load CV Data",children:[Object(x.jsx)("input",{type:"file",name:"file-ipload",id:"file-upload",accept:".json",onChange:function(t){return e.handleJSONUpload(t.target.files[0])}}),Object(x.jsx)(b.a,{})]}),Object(x.jsx)("button",{className:"icon-button",onClick:e.downloadHandler,title:"Download CV Data",children:Object(x.jsx)(h.a,{})}),Object(x.jsx)("button",{className:"icon-button",onClick:e.printHandler,title:"Print CV",children:Object(x.jsx)(d.a,{})}),Object(x.jsx)("a",{className:"icon-button",href:"https://github.com/danmenjivar",target:"_blank",title:"Checkout My GitHub",children:Object(x.jsx)(f.a,{})})]})]})}a(12),a(44);function N(e){var t=e.personalInfo;return Object(x.jsxs)("div",{className:"Background",children:[Object(x.jsx)("h1",{children:"Personal Info"}),Object(x.jsxs)("form",{id:"personalInfo",children:[Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"firstName",placeholder:"First Name",value:t.firstName,onChange:e.handleChange}),Object(x.jsx)("label",{className:"form_label",htmlFor:"firstName",children:"First Name"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"lastName",placeholder:"Last Name",value:t.lastName,onChange:e.handleChange}),Object(x.jsx)("label",{className:"form_label",htmlFor:"lastName",children:"Last Name"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"streetAddress",placeholder:"123 A St.",value:t.streetAddress,onChange:e.handleChange}),Object(x.jsx)("label",{className:"form_label",htmlFor:"streetAddress",children:"Street Address"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"city",placeholder:"City",value:t.city,onChange:e.handleChange}),Object(x.jsx)("label",{className:"form_label",htmlFor:"city",children:"City"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"state",placeholder:"State",value:t.state,onChange:e.handleChange}),Object(x.jsx)("label",{className:"form_label",htmlFor:"state",children:"State"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"zipCode",placeholder:"Zip Code",value:t.zipCode,onChange:e.handleChange}),Object(x.jsx)("label",{className:"form_label",htmlFor:"zipCode",children:"Zip Code"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"email",name:"email",placeholder:"example@mail.com",value:t.email,onChange:e.handleChange}),Object(x.jsx)("label",{className:"form_label",htmlFor:"email",children:"Email"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"tel",name:"phone",placeholder:"123-456-7890",value:t.phone,onChange:e.handleChange}),Object(x.jsx)("label",{className:"form_label",htmlFor:"phone",children:"Phone"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"linkedIn",placeholder:"LinkedIn",value:t.linkedIn,onChange:e.handleChange}),Object(x.jsx)("label",{className:"form_label",htmlFor:"linkedIn",children:"LinkedIn"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"github",placeholder:"GitHub",value:t.github,onChange:e.handleChange}),Object(x.jsx)("label",{className:"form_label",htmlFor:"github",children:"GitHub"})]})]})]})}a(15);var v=a(5),C=a.n(v);function y(e){var t=e.edInfo,a="edInfo#"+e.id;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"btn-container-header",children:[Object(x.jsx)("h3",{children:"Educational Experience"}),e.deleteHandler&&Object(x.jsx)("button",{className:"del-btn",onClick:function(){return e.deleteHandler(e.id)},children:Object(x.jsx)(C.a,{})})]}),Object(x.jsxs)("form",{id:a,children:[Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"schoolName",value:t.schoolName,onChange:e.handleChange,placeholder:"School Name"}),Object(x.jsx)("label",{className:"form_label",htmlFor:"schoolName",children:"Name of School"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"degreeOfStudy",value:t.degreeOfStudy,onChange:e.handleChange,placeholder:"Degree"}),Object(x.jsx)("label",{className:"form_label",htmlFor:"degreeOfStudy",children:"Degree"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"date",name:"gradDate",value:t.gradDate,onChange:e.handleChange,placeholder:"Graduation Date"}),Object(x.jsx)("label",{className:"form_label",htmlFor:"gradDate",children:"Graduation Date"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"city",value:t.city,onChange:e.handleChange,placeholder:"City"}),Object(x.jsx)("label",{className:"form_label",htmlFor:"city",children:"City"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"state",value:t.state,onChange:e.handleChange,placeholder:"State"}),Object(x.jsx)("label",{className:"form_label",htmlFor:"state",children:"State"})]}),Object(x.jsx)("div",{className:"form_group",children:Object(x.jsx)("textarea",{type:"text",name:"relStudy",value:t.relStudy,onChange:e.handleChange,spellCheck:"true",placeholder:"Relevant coursework/thesis/honors/awards (optional)"})})]})]})}var _=a(7),I=a.n(_),k=a(8),S=a.n(k);function E(e){var t=e.edChildren,a=e.setEdChildren,n=function(e){var n=t.filter((function(t){return t.id!==e}));a(n)};return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Education"}),t.map((function(t){return Object(x.jsx)(y,{id:t.id,deleteHandler:n,handleChange:e.handleChange,edInfo:t},t.key)})),Object(x.jsx)("div",{className:"btn-container",children:Object(x.jsxs)("button",{className:"add-btn",onClick:function(e){var n=I()();a([].concat(Object(r.a)(t),[{key:n,id:n,schoolName:"",degreeOfStudy:"",gradDate:"",city:"",state:"",relStudy:""}]))},children:[Object(x.jsx)(S.a,{})," Educational Experience"]})})]})}var T=a(18),D=a.n(T);function F(e){var t=e.empInfo,a="empInfo#"+e.id;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"btn-container-header",children:[Object(x.jsx)("h3",{children:"Practical Employment Experience"}),Object(x.jsx)("button",{className:"del-btn",onClick:function(){return e.deleteHandler(e.id)},children:Object(x.jsx)(C.a,{})})]}),Object(x.jsxs)("form",{id:a,children:[Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"companyName",value:t.companyName,onChange:e.handleChange,placeholder:"Company Name"}),Object(x.jsx)("label",{className:"form_label",htmlFor:"companyName",children:"Name of Company"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"positionTitle",value:t.positionTitle,onChange:e.handleChange,placeholder:"Position Title"}),Object(x.jsx)("label",{className:"form_label",htmlFor:"positionTitle",children:"Position Title"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"date",name:"startDate",value:t.startDate,onChange:e.handleChange,placeholder:"From"}),Object(x.jsx)("label",{className:"form_label",htmlFor:"startDate",children:"Start Date"})]}),Object(x.jsxs)("div",{className:"switch_form",children:[Object(x.jsxs)("div",{children:["Is this your ",Object(x.jsx)("em",{children:"Current"})," Position?"]}),Object(x.jsx)(D.a,{checked:t.isCurrentPosition,onChange:function(){return e.switchHandler(e.id,"isCurrentPosition")},uncheckedIcon:!1,checkedIcon:!1,onColor:"#11998e"})]}),!t.isCurrentPosition&&Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"date",name:"endDate",value:t.endDate,onChange:e.handleChange,placeholder:"To"}),Object(x.jsx)("label",{className:"form_label",htmlFor:"endDate",children:"End Date"})]}),Object(x.jsxs)("div",{className:"switch_form",children:[Object(x.jsx)("div",{children:"Is this position remote?"}),Object(x.jsx)(D.a,{checked:t.isRemote,onChange:function(){return e.switchHandler(e.id,"isRemote")},uncheckedIcon:!1,checkedIcon:!1,onColor:"#11998e"})]}),!t.isRemote&&Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"city",value:t.city,onChange:e.handleChange,placeholder:"City"}),Object(x.jsx)("label",{className:"form_label",htmlFor:"city",children:"City"})]}),!t.isRemote&&Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"state",value:t.state,onChange:e.handleChange,placeholder:"State"}),Object(x.jsx)("label",{className:"form_label",htmlFor:"state",children:"State"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("textarea",{type:"text",name:"resp",value:t.resp,onChange:e.handleChange,spellCheck:"true",placeholder:"Main activities and responsibilities"}),Object(x.jsx)("label",{className:"form_label",htmlFor:"resp"})]})]})]})}function A(e){var t=e.empChildren,a=e.setEmpChildren,n=function(e){var n=t.filter((function(t){return t.id!==e}));a(n)},l=function(e,n){var l=Object(r.a)(t),c=l.findIndex((function(t){return t.id===e})),s=l[c][n];l[c][n]=!s,a(l)};return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Employment"}),t.map((function(t){return Object(x.jsx)(F,{id:t.id,deleteHandler:n,switchHandler:l,handleChange:e.handleChange,empInfo:t},t.key)})),Object(x.jsx)("div",{className:"btn-container",children:Object(x.jsxs)("button",{onClick:function(e){var n=I()();a([].concat(Object(r.a)(t),[{key:n,id:n,companyName:"",positionTitle:"",startDate:"",endDate:"",isCurrentPosition:!1,isRemote:!1,city:"",state:"",resp:""}]))},className:"add-btn",children:[Object(x.jsx)(S.a,{})," Employment Experience"]})})]})}function P(e){var t="proj#"+e.id;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"btn-container-header",children:[Object(x.jsx)("h3",{children:"Personal Project"}),Object(x.jsx)("button",{className:"del-btn",onClick:function(){return e.deleteHandler(e.id)},children:Object(x.jsx)(C.a,{})})]}),Object(x.jsxs)("form",{id:t,children:[Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"title",onChange:e.handleChange,placeholder:"Project Title",value:e.projInfo.title}),Object(x.jsx)("label",{className:"form_label",htmlFor:"title",children:"Project Title"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"year",onChange:e.handleChange,placeholder:"Year",value:e.projInfo.year}),Object(x.jsx)("label",{className:"form_label",htmlFor:"year",children:"Year"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"desc",onChange:e.handleChange,placeholder:"Brief Description",value:e.projInfo.desc}),Object(x.jsx)("label",{className:"form_label",htmlFor:"desc",children:"Brief Description"})]}),Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"etc",onChange:e.handleChange,placeholder:"Relevant Tech/Tools:",value:e.projInfo.etc}),Object(x.jsx)("label",{className:"form_label",htmlFor:"etc",children:"Relevant Tech/Tools:"})]})]})]})}function w(e){var t="lang#"+e.id;return Object(x.jsxs)("div",{className:"btn-container-header",children:[Object(x.jsx)("form",{id:t,children:Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"name",onChange:e.handleChange,placeholder:"PLACEHOLDER",value:e.langName}),Object(x.jsx)("label",{className:"form_label",htmlFor:"name",children:"Language Name"})]})}),Object(x.jsx)("button",{className:"del-btn",onClick:function(){return e.deleteHandler(e.id)},children:Object(x.jsx)(C.a,{})})]})}function H(e){var t="tool#"+e.id;return Object(x.jsxs)("div",{className:"btn-container",children:[Object(x.jsx)("form",{id:t,children:Object(x.jsxs)("div",{className:"form_group",children:[Object(x.jsx)("input",{className:"form_field",type:"text",name:"name",onChange:e.handleChange,placeholder:"PLACEHOLDER",value:e.toolName}),Object(x.jsx)("label",{className:"form_label",htmlFor:"name",children:"Technology Name"})]})}),Object(x.jsx)("button",{className:"del-btn",onClick:function(){return e.deleteHandler(e.id)},children:Object(x.jsx)(C.a,{})})]})}function R(e){var t=e.projs,a=e.langs,n=e.tools,l=e.setProjs,c=e.setLangs,s=e.setTools,i=function(e){var a=t.filter((function(t){return t.id!==e}));l(a)},o=function(e){var t=a.filter((function(t){return t.id!==e}));c(t)},d=function(e){var t=n.filter((function(t){return t.id!==e}));s(t)};return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Technical Experience"}),Object(x.jsxs)("div",{className:"tri-btn-container",children:[Object(x.jsxs)("button",{className:"add-btn",onClick:function(e){var a=I()();l([].concat(Object(r.a)(t),[{key:a,id:a,title:"",year:"",desc:"",etc:""}]))},children:[Object(x.jsx)(S.a,{})," Project"]}),Object(x.jsxs)("button",{className:"add-btn",onClick:function(e){var t=I()();c([].concat(Object(r.a)(a),[{key:t,id:t,name:""}]))},children:[Object(x.jsx)(S.a,{})," Language"]}),Object(x.jsxs)("button",{className:"add-btn",onClick:function(e){var t=I()();s([].concat(Object(r.a)(n),[{key:t,id:t,name:""}]))},children:[Object(x.jsx)(S.a,{})," Technology"]})]}),e.projs.map((function(t){return Object(x.jsx)(P,{handleChange:e.handleChange,id:t.id,deleteHandler:i,projInfo:t},t.key)})),e.langs.map((function(t){return Object(x.jsx)(w,{handleChange:e.handleChange,id:t.id,deleteHandler:o,langName:t.name},t.key)})),e.tools.map((function(t){return Object(x.jsx)(H,{handleChange:e.handleChange,id:t.id,deleteHandler:d,toolName:t.name},t.key)}))]})}var L=a(25),M=a(26),X=a(30),Y=a(29),J=(a(47),a(64)),G=a(65),z=function(e){Object(X.a)(a,e);var t=Object(Y.a)(a);function a(){return Object(L.a)(this,a),t.apply(this,arguments)}return Object(M.a)(a,[{key:"render",value:function(){var e=this.props.personal,t=this.props.edInfo,a=this.props.expInfo,n=this.props.techInfo;function l(e){if(!/\d{4}-\d{2}-\d{2}/.test(e))return"MXY, XX, XYYZ";var t=e.split("-"),a=Object(i.a)(t,3),n=a[0],l=a[1],c=a[2],s=/^0/g;l=l.replaceAll(s,""),c=c.replaceAll(s,"");return"".concat(function(e){switch(e){case"1":return"January";case"2":return"February";case"3":return"March";case"4":return"April";case"5":return"May";case"6":return"June";case"7":return"July";case"8":return"August";case"9":return"September";case"10":return"October";case"11":return"November";case"12":return"December";default:return"BAD_MONTH"}}(l)," ").concat(c,", ").concat(n)}return Object(x.jsxs)("div",{className:"CVPreview",children:[Object(x.jsxs)("h1",{style:{color:"black"},children:[e.firstName.length>0?e.firstName:"FIRST_NAME"," ",e.lastName.length>0?e.lastName:"LAST_NAME"]}),Object(x.jsxs)("div",{className:"socials",children:[Object(x.jsx)(J.a,{}),"@",e.linkedIn.length>0?e.linkedIn:"_USERNAME"," \u2022 ",Object(x.jsx)(G.a,{}),"@",e.github.length>0?e.github:"_USERNAME"]}),Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{className:"personal",children:[e.streetAddress.length>0?e.streetAddress:"STREET_ADDRESS"," \u2022 ",e.city.length>0?e.city:"CITY",", ",e.state.length>0?e.state:"ST"," ",e.zipCode.length>0?e.zipCode:"XXXXX"," \u2022 ",e.email.length>0?e.email:"EMAIL@HOST.COM"," \u2022 ",e.phone.length>0?e.phone:"(XYZ) XXX-XYYZ"]}),t.length>0&&Object(x.jsx)("h2",{children:"Education"}),t.map((function(e){return Object(x.jsxs)("div",{className:"grid",children:[Object(x.jsx)("div",{className:"row1-col1",children:e.schoolName.length>0?e.schoolName:"SCHOOL_NAME"}),Object(x.jsxs)("div",{className:"row1-col2",children:[e.city.length>0?e.city:"CITY",","," ",e.state.length>0?e.state:"ST"]}),Object(x.jsx)("div",{className:"row2-col1",children:e.degreeOfStudy.length>0?e.degreeOfStudy:"DEGREE_NAME"}),Object(x.jsx)("div",{className:"row2-col2",children:l(e.gradDate)}),Object(x.jsx)("div",{className:"row3",children:e.relStudy.length>0?e.relStudy:"REL_STUDY"})]},e.key)})),a.length>0&&Object(x.jsx)("h2",{children:"Employment"}),a.map((function(e){return Object(x.jsxs)("div",{className:"grid",children:[Object(x.jsx)("div",{className:"row1-col1",children:e.companyName.length>0?e.companyName:"COMPANY_NAME"}),Object(x.jsx)("div",{className:"row1-col2",children:e.isRemote?"Remote":(e.city.length>0?e.city:"CITY")+", "+(e.state.length>0?e.state:"ST")}),Object(x.jsx)("div",{className:"row2-col1",children:e.positionTitle.length>0?e.positionTitle:"POSITION_TITLE"}),Object(x.jsxs)("div",{className:"row2-col2",children:[l(e.startDate),"\u2013",e.isCurrentPosition?"Present":l(e.endDate)]}),Object(x.jsx)("div",{className:"row3",children:e.resp.length>0?e.resp:"RESPONSIBILITIES"})]},e.key)})),(n.projs.length>0||n.langs.length>0||n.tools.length>0)&&Object(x.jsx)("h2",{children:"Technical Experience"}),n.projs.length>0&&Object(x.jsx)("h3",{children:"Personal Projects"}),n.projs.map((function(e){return Object(x.jsxs)("div",{className:"justify-left",children:[" \u2022 ",Object(x.jsx)("span",{className:"elemTitle",children:e.title.length>0?e.title:"PROJ_TITLE"})," ","(",e.year.length>0?e.year:"XYYZ",")."," ",e.desc.length>0?e.desc:"PROJ_DESC","."," ",e.etc.length>0?e.etc:"LANG/TOOLS","."]},e.key)})),Object(x.jsxs)("div",{className:"justify-left",children:[n.langs.length>0&&Object(x.jsx)("span",{className:"elemTitle",children:"Languages: "}),n.langs.map((function(e,t){return Object(x.jsxs)("span",{children:[e.name.length>0?e.name:"LANG_NAME",n.langs.length===t+1?".":", "]},e.key)}))]}),Object(x.jsxs)("div",{className:"justify-left",children:[n.tools.length>0&&Object(x.jsx)("span",{className:"elemTitle",children:"Technologies: "}),n.tools.map((function(e,t){return Object(x.jsxs)("span",{children:[e.name.length>0?e.name:"TECH_NAME",n.tools.length===t+1?".":", "]},e.key)}))]})]})}}]),a}(n.Component),B=(a(48),a(27)),V=a(28),Z=a.n(V);var U=function(){var e=Object(n.useState)({firstName:"",lastName:"",streetAddress:"",city:"",state:"",zipCode:"",email:"",phone:"",linkedIn:"",github:""}),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),s=Object(i.a)(c,2),o=s[0],d=s[1],j=Object(n.useState)([]),h=Object(i.a)(j,2),m=h[0],b=h[1],u=Object(n.useState)([]),f=Object(i.a)(u,2),p=f[0],O=f[1],v=Object(n.useState)([]),C=Object(i.a)(v,2),y=C[0],_=C[1],I=Object(n.useState)([]),k=Object(i.a)(I,2),S=k[0],T=k[1],D=Object(n.useRef)(),F=Object(B.useReactToPrint)({content:function(){return D.current}}),P=function(e){var t=e.target.form.id.split("#"),a=Object(i.a)(t,2),n=a[0],l=a[1],c=e.target.name,s=e.target.value;switch(n){case"personalInfo":w(c,s);break;case"edInfo":H(l,c,s);break;case"empInfo":L(l,c,s);break;case"proj":M(l,c,s);break;case"lang":X(l,c,s);break;case"tool":Y(l,c,s)}},w=function(e,t){var n=Object.assign({},a);n[e]=t,l(n)},H=function(e,t,a){var n=Object(r.a)(o),l=n.findIndex((function(t){return t.id===e}));n[l][t]=a,d(n)},L=function(e,t,a){var n=Object(r.a)(m),l=n.findIndex((function(t){return t.id===e}));n[l][t]=a,b(n)},M=function(e,t,a){var n=Object(r.a)(p),l=n.findIndex((function(t){return t.id===e}));n[l][t]=a,O(n)},X=function(e,t,a){var n=Object(r.a)(y),l=n.findIndex((function(t){return t.id===e}));n[l][t]=a,_(n)},Y=function(e,t,a){var n=Object(r.a)(S),l=n.findIndex((function(t){return t.id===e}));n[l][t]=a,T(n)},J=function(e){var t=JSON.parse(e);t.cv_version?(l(t.personal),d(t.ed),b(t.emp),O(t.projs),T(t.tools),_(t.langs)):console.error("Invalid File Type")};return Object(n.useEffect)((function(){var e=localStorage.getItem("cvData");J(e)}),[]),Object(n.useEffect)((function(){var e={cv_version:"0.1",personal:a,ed:o,emp:m,projs:p,langs:y,tools:S},t=JSON.stringify(e);localStorage.setItem("cvData",t)}),[a,o,m,p,y,S]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(g,{downloadHandler:function(){var e={cv_version:"0.1",personal:a,ed:o,emp:m,projs:p,langs:y,tools:S},t=new Blob([JSON.stringify(e)],{type:"application/json;charset=utf-8"}),n="cv-data-".concat(new Date,".json");Z.a.saveAs(t,n)},printHandler:F,handleJSONUpload:function(e){var t=new FileReader;t.onload=function(e){var t=e.target.result;J(t)},t.readAsText(e)},clearHandler:function(){l({firstName:"",lastName:"",streetAddress:"",city:"",state:"",zipCode:"",email:"",phone:"",linkedIn:"",github:""}),d([]),b([]),O([]),T([]),_([])}}),Object(x.jsxs)("div",{className:"Form",children:[Object(x.jsx)(N,{handleChange:P,personalInfo:a}),Object(x.jsx)(E,{handleChange:P,edChildren:o,setEdChildren:d}),Object(x.jsx)(A,{handleChange:P,empChildren:m,setEmpChildren:b}),Object(x.jsx)(R,{handleChange:P,projs:p,setProjs:O,langs:y,setLangs:_,tools:S,setTools:T})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Preview"}),Object(x.jsx)(z,{ref:D,className:"column",personal:a,edInfo:o,expInfo:m,techInfo:{projs:p,langs:y,tools:S}})]})]})};s.a.render(Object(x.jsx)(l.a.StrictMode,{children:Object(x.jsx)(U,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.86e5d3dc.chunk.js.map