import{X as f,L as h}from"./vesp-Bp925PML.js";import{k as b}from"./vue-bootstrap-BxJOzva2.js";import{a as y}from"./vue-router-DIhyXLOA.js";import{E as w,x}from"./api-BTbQaFYe.js";import{d as g,z as k,ah as B,o as i,b as m,w as c,q as C,u as e,i as d,f as z,h as L}from"./vue-u_8eP0W0.js";import"./vueform-C51mNOCu.js";const N=["srcdoc"],V={style:{"white-space":"pre-line"},class:"p-2 border rounded bg-light"},E=g({__name:"view",async setup(v){let t,l;const o=k({}),p="mgr/emails/"+y().params.id,a=x;try{o.value=([t,l]=B(()=>w(p)),t=await t,l(),t)}catch{f()}function _({target:r}){var s;r.style.height=((s=r.contentWindow)==null?void 0:s.document.body.scrollHeight)+"px"}return(r,s)=>{const n=b,u=h;return i(),m(u,{title:e(o).subject,size:"lg","cancel-title":e(a)("actions.close")},{default:c(()=>[C(n,{label:e(a)("models.email.body")},{default:c(()=>[d("iframe",{class:"w-100 border-0",srcdoc:e(o).body,onLoad:_},null,40,N)]),_:1},8,["label"]),e(o).error?(i(),m(n,{key:0,label:e(a)("models.email.error")},{default:c(()=>[d("pre",V,z(e(o).error),1)]),_:1},8,["label"])):L("",!0)]),_:1},8,["title","cancel-title"])}}});export{E as default};