(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1548:function(e,t,l){Promise.resolve().then(l.bind(l,652))},652:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return i}});var s=l(7437),r=l(2265);l(5250);var a=function(e){let{movie:t}=e;return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"card",style:{width:"15rem"},children:[(0,s.jsx)("img",{className:"card-img-top",src:t.Poster,style:{height:"18rem"}}),(0,s.jsx)("div",{className:"card-body",style:{height:"6rem"},children:(0,s.jsxs)("h5",{className:"card-title text-center",children:[t.Title," (",t.Year,")"]})})]})})},i=function(e){let{movies:t}=e,[l,i]=(0,r.useState)(t.Search||[]),[n,c]=(0,r.useState)(""),[o,h]=(0,r.useState)("");(0,r.useEffect)(()=>{d()},[t,n,o]);let d=()=>{let e=[...t.Search];if(n){let[t,l]=n.split("-").map(e=>parseInt(e.trim(),10));e=e.filter(e=>{let s=parseInt(e.Year,10);return s>=t&&s<=l})}switch(o){case"Alpha":e.sort((e,t)=>e.Title.localeCompare(t.Title));break;case"Reverse Alpha":e.sort((e,t)=>t.Title.localeCompare(e.Title))}i(e)};return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"d-flex justify-content-between mb-3",children:[(0,s.jsxs)("select",{onChange:e=>c(e.target.value),className:"form-select","aria-label":"Filter by year range",style:{width:"20rem"},children:[(0,s.jsx)("option",{value:"",children:"Filter by Year Range"}),"                   ",(0,s.jsx)("option",{value:"0000 - 2024",children:"All"}),(0,s.jsx)("option",{value:"1980 - 1990",children:"1990 - 2000"}),(0,s.jsx)("option",{value:"1990 - 2000",children:"1990 - 2000"}),(0,s.jsx)("option",{value:"2000 - 2010",children:"2000 - 2010"}),(0,s.jsx)("option",{value:"2010 - 2020",children:"2010 - 2020"})]}),(0,s.jsxs)("select",{onChange:e=>h(e.target.value),className:"form-select","aria-label":"Sort movies",style:{width:"20rem"},children:[(0,s.jsx)("option",{value:"",children:"Sort By"}),"                                 ",(0,s.jsx)("option",{value:"Alpha",children:"A - Z"}),(0,s.jsx)("option",{value:"Reverse Alpha",children:"Z - A"})]})]}),(0,s.jsx)("div",{className:"d-flex flex-wrap gap-4",children:l.map(e=>(0,s.jsx)(a,{movie:e},e.imdbID))})]})}}},function(e){e.O(0,[250,971,69,744],function(){return e(e.s=1548)}),_N_E=e.O()}]);