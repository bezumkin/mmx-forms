import{X as n,L as l}from"./vesp-Bp925PML.js";import{_ as p}from"./mgr-DillfSKf.js";import{a as _}from"./vue-router-DIhyXLOA.js";import{E as d}from"./api-BTbQaFYe.js";import{d as u,z as f,A as h,ah as v,o as b,b as w,w as x,i as g,q as y,u as s}from"./vue-u_8eP0W0.js";import"./vue-bootstrap-BxJOzva2.js";import"./vueform-C51mNOCu.js";import"./common.config-H0rnQkZd.js";const A={class:"vueform-app bg-light p-3 rounded"},E=u({__name:"view",async setup(B){let e,a;const t=f({}),r="mgr/submissions/"+_().params.id,c=h(()=>{var o;return((o=t.value)==null?void 0:o.form.title)||""});try{t.value=([e,a]=v(()=>d(r)),e=await e,a(),e)}catch{n()}return(o,C)=>{const m=p,i=l;return b(),w(i,{title:s(c),size:"lg","cancel-title":"actions.close"},{default:x(()=>[g("div",A,[y(m,{"model-value":s(t).values,schema:s(t).form.schema,disabled:"","disabled-fields":"",sync:""},null,8,["model-value","schema"])])]),_:1},8,["title"])}}});export{E as default};