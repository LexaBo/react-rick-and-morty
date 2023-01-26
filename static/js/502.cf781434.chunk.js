"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[502],{9699:function(e,a,r){r(2791);var n=r(184);a.Z=function(){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"auto"},width:"200",height:"200",display:"block",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100",children:(0,n.jsx)("circle",{cx:"50",cy:"50",r:"35",fill:"none",stroke:"#00b6cd",strokeDasharray:"164.93361431346415 56.97787143782138",strokeWidth:"10",children:(0,n.jsx)("animateTransform",{attributeName:"transform",dur:"1s",keyTimes:"0;1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"})})})}},7900:function(e,a,r){r.d(a,{Z:function(){return t}});var n=r(184),t=function(){return(0,n.jsx)("h5",{className:"nothing-found-title",children:"Nothing found"})}},6502:function(e,a,r){r.r(a),r.d(a,{default:function(){return _}});var n=r(6907),t=r(2791),i=r(5705),s=r(2051),c=r(4553),l=r(8660),o=r(184),u=function(){var e=(0,l.T)();return(0,o.jsx)(i.J9,{initialValues:{name:"",status:"",gender:""},onSubmit:function(a,r){(0,r.setSubmitting)(!1),e((0,s.xY)(a.name)),e((0,s.tw)(a.status)),e((0,s.cZ)(a.gender)),e((0,c.x5)(1))},children:(0,o.jsxs)(i.l0,{className:"filters-form",children:[(0,o.jsx)("label",{className:"filters-form__label",htmlFor:"characterName",children:"name"}),(0,o.jsx)(i.gN,{className:"filters-form__field filters-form__field_text",id:"characterName",name:"name"}),(0,o.jsx)("label",{className:"filters-form__label",htmlFor:"characterStatus",children:"status"}),(0,o.jsxs)(i.gN,{className:"filters-form__field",id:"characterStatus",as:"select",name:"status",children:[(0,o.jsx)("option",{value:"",children:"all"}),(0,o.jsx)("option",{value:"alive",children:"alive"}),(0,o.jsx)("option",{value:"dead",children:"dead"}),(0,o.jsx)("option",{value:"unknown",children:"unknown"})]}),(0,o.jsx)("label",{className:"filters-form__label",htmlFor:"characterGender",children:"gender"}),(0,o.jsxs)(i.gN,{className:"filters-form__field",id:"characterGender",as:"select",name:"gender",children:[(0,o.jsx)("option",{value:"",children:"all"}),(0,o.jsx)("option",{value:"female",children:"female"}),(0,o.jsx)("option",{value:"male",children:"male"}),(0,o.jsx)("option",{value:"genderless",children:"genderless"}),(0,o.jsx)("option",{value:"unknown",children:"unknown"})]}),(0,o.jsx)("button",{className:"filters-form__btn",type:"submit",children:"Search"})]})})},m=r(8683),d=r(1087),h=r(7087),f=function(e){var a=e.name,r=e.image,n=e.id,t="character/".concat(n);return(0,o.jsx)("li",{className:"character-item",children:(0,o.jsxs)(d.rU,{to:t,relative:"path",className:"character-item__link",children:[(0,o.jsx)("div",{className:"character-item__image-wr",children:(0,o.jsx)(h.LazyLoadImage,{alt:"character",className:"character-item__image",src:r,effect:"blur"})}),(0,o.jsx)("div",{className:"character-item__text-container",children:(0,o.jsx)("h3",{className:"character-item__name",children:a})})]})})},x=r(7900),j=r(9699),g=r(3637),v=function(){var e=(0,l.C)((function(e){return e.characters.characters})),a=(0,l.C)((function(e){return e.characters.page})),r=(0,l.C)((function(e){return e.characters.charactersLoadingStatus})),n=(0,l.C)((function(e){return e.characters.count})),i=(0,l.C)((function(e){return e.characters.itemPerPage})),s=(0,l.C)((function(e){return e.filters.filtersName})),u=(0,l.C)((function(e){return e.filters.filtersStatus})),d=(0,l.C)((function(e){return e.filters.filtersGender})),h=(0,l.T)();(0,t.useEffect)((function(){h((0,c.Em)({page:a,nameFilter:s,filtersStatus:u,filtersGender:d}))}),[a,s,u,d]);var v;return"loading"===r?(0,o.jsx)(j.Z,{}):"error"===r?(0,o.jsx)(x.Z,{}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("ul",{className:"characters-list",children:(v=e,0===v.length?(0,o.jsx)(x.Z,{}):v.map((function(e){var a={name:e.name,image:e.image,id:e.id};return(0,o.jsx)(f,(0,m.Z)({},a),e.id)})))}),(0,o.jsx)(g.Z,{itemClass:"page-item",linkClass:"page-link",hideNavigation:!0,activePage:a,itemsCountPerPage:i,totalItemsCount:n,pageRangeDisplayed:5,onChange:function(e){h((0,c.x5)(e))}})]})};function _(){return(0,o.jsxs)(n.B6,{children:[(0,o.jsxs)(n.ql,{children:[(0,o.jsx)("meta",{name:"main",content:"Rick and Morty information"}),(0,o.jsx)("title",{children:"Rick and Morty"})]}),(0,o.jsx)("div",{className:"main-page",children:(0,o.jsxs)("div",{className:"main-page__columns",children:[(0,o.jsx)("div",{className:"main-page__column",children:(0,o.jsx)(u,{})}),(0,o.jsx)("div",{className:"main-page__column",children:(0,o.jsx)(v,{})})]})})]})}},8660:function(e,a,r){r.d(a,{C:function(){return i},T:function(){return t}});var n=r(9434),t=function(){return(0,n.I0)()},i=n.v9}}]);
//# sourceMappingURL=502.cf781434.chunk.js.map