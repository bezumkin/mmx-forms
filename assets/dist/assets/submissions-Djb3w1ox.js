import{_ as g,a as w}from"./mgr-CosKYh-j.js";import{u as x,f as C}from"./common.config-DgMOw7gP.js";import{u as V}from"./use-date-DVdoth2I.js";import{d as M,r as n,c as a,a6 as $,o as m,g as l,w as c,i as h,u as o,l as B,q as H}from"./vue-CQlTxiy5.js";import"./vue-router-YhpOq6q4.js";import"./bootstrap-vue-next-DySSWDks.js";import"./vueform-XI_to9XY.js";import"./axios-Cm0UX6qg.js";import"./moment-Cl4UOzQZ.js";import"./popperjs-CBZXh9ac.js";import"./wnumb-BOjvQ4jq.js";import"./trix-ul_qCPMg.js";import"./nouislider-dfTmBPAg.js";import"./vue-toastification-DLvkSref.js";import"./codemirror-BQUORstc.js";import"./lezer-BmdiRFRL.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./crelt-C8TCjufn.js";import"./vue-codemirror-Cc3EEBco.js";const L=["innerHTML"],u="mgr/submissions",Z=M({__name:"submissions",setup(N){const e=x,s=n(),d=a(()=>[{key:"id",label:e("models.submission.id"),sortable:!0},{key:"form.title",label:e("models.form.title_one"),sortable:!0},{key:"emails_count",label:e("models.email.title_many"),sortable:!0},{key:"submitted_at",label:e("models.submission.submitted_at"),sortable:!0,formatter:V}]),f=a(()=>{var t;return[{route:{name:"submissions-id-view"},icon:"eye",title:e("actions.view")},{function:_,icon:"sync",title:e("actions.generate")},{function:(t=s.value)==null?void 0:t.delete,icon:"times",title:e("actions.delete"),variant:"danger"}]}),p=n({query:""}),i=n(0);function _(t){i.value=t.id}async function b(){try{await C(u+"/"+i.value),s.value.refresh()}catch{}}return(t,r)=>{const v=$("RouterView"),y=g,k=w;return m(),l(k,{ref_key:"table",ref:s,url:u,"table-actions":o(f),fields:o(d),filters:o(p),sort:"id",dir:"desc"},{default:c(()=>[h(v),o(i)>0?(m(),l(y,{key:0,"ok-variant":"warning","on-ok":b,onHidden:r[0]||(r[0]=T=>i.value=0)},{default:c(()=>[B("div",{innerHTML:o(e)("models.submission.confirm_generate")},null,8,L)]),_:1})):H("",!0)]),_:1},8,["table-actions","fields","filters"])}}});export{Z as default};
