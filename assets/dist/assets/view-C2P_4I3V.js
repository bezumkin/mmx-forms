import{X as n,L as l}from"./vesp-BMuZmI5b.js";import{_ as p}from"./mgr-f9uvnXdS.js";import{a as _}from"./vue-router-W9B0JM3c.js";import{E as d}from"./api-B3sin3sE.js";import{d as u,z as f,A as h,ah as v,o as b,b as w,w as x,h as g,p as y,u as s}from"./vue-CvOUwEcs.js";import"./vue-bootstrap-BLG-kXEW.js";import"./vueform-DtU5I7aZ.js";import"./common.config-dFZiOG50.js";const A={class:"vueform-app bg-light p-3 rounded"},R=u({__name:"view",async setup(B){let e,a;const t=f({}),r="mgr/submissions/"+_().params.id,c=h(()=>{var o;return((o=t.value)==null?void 0:o.form.title)||""});try{t.value=([e,a]=v(()=>d(r)),e=await e,a(),e)}catch{n()}return(o,C)=>{const m=p,i=l;return b(),w(i,{title:s(c),size:"lg","cancel-title":"actions.close"},{default:x(()=>[g("div",A,[y(m,{"model-value":s(t).values,schema:s(t).form.schema,disabled:"","disabled-fields":"",sync:""},null,8,["model-value","schema"])])]),_:1},8,["title"])}}});export{R as default};
