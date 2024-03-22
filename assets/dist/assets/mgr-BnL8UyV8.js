function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/submissions-BrU6oAHO.js","assets/use-api-CABo2mPT.js","assets/vueform-bjGVKQ0y.js","assets/axios-Bo0ATomq.js","assets/moment-Cl4UOzQZ.js","assets/vue-CtCNMA3P.js","assets/popperjs-CBZXh9ac.js","assets/wnumb-BOjvQ4jq.js","assets/trix-ul_qCPMg.js","assets/nouislider-dfTmBPAg.js","assets/vueform-CiCkEoWT.css","assets/vue-toastification-BdZxUhs9.js","assets/ofetch-C3euP1G2.js","assets/destr-CVtkxrq9.js","assets/ufo-DbHr4xTX.js","assets/use-date-DVdoth2I.js","assets/vue-router-0XY2QSw6.js","assets/bootstrap-vue-next-DWmnrxyd.js","assets/codemirror-Dhbez0_B.js","assets/lezer-BmdiRFRL.js","assets/style-mod-Bc2inJdb.js","assets/w3c-keyname-Vcq4gwWv.js","assets/crelt-C8TCjufn.js","assets/vue-codemirror-DmWmgxNk.js","assets/view-DUW4gkyJ.js","assets/emails-BJxHqpAg.js","assets/view-DzbQOpdw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a6 as resolveComponent,o as openBlock,a as createElementBlock,l as createBaseVNode,x as toDisplayString,u as unref,i as createVNode,w as withCtx,F as Fragment,N as renderList,C as createTextVNode,d as defineComponent,r as ref,c as computed,b as onMounted,V as createSlots,v as mergeProps,G as useAttrs,h as renderSlot,m as normalizeProps,p as guardReactiveProps,y as watch,I as provide,g as createBlock,ad as Suspense,n as normalizeClass,q as createCommentVNode,H as inject,P as withModifiers,M as isRef,ae as withAsyncContext,$ as createApp}from"./vue-CtCNMA3P.js";import{u as useRouter,a as useRoute,c as createRouter,b as createWebHashHistory}from"./vue-router-0XY2QSw6.js";import{T as Td,w as wd,R as Ra,B as Bt,k as ka,U as Ut,O as Ou,m as md,t as tc,p as pc,a as Ud,C as Ca,b as wn,c as po,M as Mu,V as Vu,d as Ma,o as ou,W as Wi,v as vi,e as kn,f as mc,y as yc,_ as _c}from"./bootstrap-vue-next-DWmnrxyd.js";import{_ as _export_sfc,v as vueform}from"./vueform-bjGVKQ0y.js";import{s as src_default}from"./vue-toastification-BdZxUhs9.js";import{u as useLexicon,a as useGet,b as useDelete,c as useToastError,d as usePut,e as usePatch,f as usePost,t as toastOptions,v as vueFormConfig}from"./use-api-CABo2mPT.js";import{h as html,j as javascript}from"./codemirror-Dhbez0_B.js";import{T}from"./vue-codemirror-DmWmgxNk.js";import"./axios-Bo0ATomq.js";import"./moment-Cl4UOzQZ.js";import"./popperjs-CBZXh9ac.js";import"./wnumb-BOjvQ4jq.js";import"./trix-ul_qCPMg.js";import"./nouislider-dfTmBPAg.js";import"./ofetch-C3euP1G2.js";import"./destr-CVtkxrq9.js";import"./ufo-DbHr4xTX.js";import"./lezer-BmdiRFRL.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./crelt-C8TCjufn.js";const _hoisted_1$6={class:"overflow-auto vh-100 p-3"},_hoisted_2$5={class:"m-0"},_hoisted_3$4={class:"small text-secondary"},_hoisted_4$2={class:"main-wrapper"},_sfc_main$a={__name:"app",setup(o){const s=useLexicon,m=[{title:"models.form.title_many",route:"index"},{title:"models.submission.title_many",route:"submissions"},{title:"models.email.title_many",route:"emails"}];return(u,t)=>{const a=Td,r=wd,l=resolveComponent("RouterView");return openBlock(),createElementBlock("div",_hoisted_1$6,[createBaseVNode("h4",_hoisted_2$5,toDisplayString(unref(s)("menu_name")),1),createBaseVNode("div",_hoisted_3$4,toDisplayString(unref(s)("menu_desc")),1),createVNode(r,{tabs:"",class:"justify-content-between justify-content-md-start mt-3"},{default:withCtx(()=>[(openBlock(),createElementBlock(Fragment,null,renderList(m,(i,y)=>createVNode(a,{key:y,to:{name:i.route},"active-class":"active"},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(s)(i.title)),1)]),_:2},1032,["to"])),64))]),_:1}),createBaseVNode("div",_hoisted_4$2,[createVNode(l)])])}}},App=_export_sfc(_sfc_main$a,[["__scopeId","data-v-76f72b56"]]),scriptRel="modulepreload",assetsURL=function(o){return"/assets/components/mmx-forms/"+o},seen={},__vitePreload=function(s,m,u){let t=Promise.resolve();if(m&&m.length>0){const a=document.getElementsByTagName("link");t=Promise.all(m.map(r=>{if(r=assetsURL(r),r in seen)return;seen[r]=!0;const l=r.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(!!u)for(let _=a.length-1;_>=0;_--){const h=a[_];if(h.href===r&&(!l||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const n=document.createElement("link");if(n.rel=l?"stylesheet":scriptRel,l||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),l)return new Promise((_,h)=>{n.addEventListener("load",_),n.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})}))}return t.then(()=>s()).catch(a=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a})},_hoisted_1$5={class:"mmx-modal mmx-confirm"},_sfc_main$9=defineComponent({__name:"confirm",props:{...Ra.props,onOk:{type:Function,default:()=>{}},show:{type:Boolean,default:!0},title:{type:String,default:"components.delete.title"},centered:{type:Boolean,default:!1},okVariant:{type:String,default:"danger"},okTitle:{type:String,default:"actions.ok"},cancelTitle:{type:String,default:"actions.cancel"},teleportDisabled:{type:Boolean,default:!0}},setup(o,{expose:s}){const m=useLexicon,u=ref(),t=o,a=ref(!1),r=computed(()=>{const n={...useAttrs(),...t};return delete n.modelValue,delete n.show,n.onShown||(n.onShown=y),n});function l(){u.value.$emit("hide"),a.value=!1}function i(){l(),t.onOk()}function y(){const n=document.querySelector('.mmx-confirm button[name="ok"]');n&&n.focus()}return onMounted(()=>{t.show&&(a.value=!0)}),s({hide:l,ok:i}),(n,_)=>{const h=Bt;return openBlock(),createElementBlock("section",_hoisted_1$5,[createVNode(unref(Ra),mergeProps({ref_key:"modal",ref:u,"model-value":a.value},r.value,{title:unref(m)(o.title)}),createSlots({footer:withCtx(()=>[renderSlot(n.$slots,"footer",mergeProps({ref:"footer"},{hide:l}),()=>[createVNode(h,{name:"cancel",variant:t.cancelVariant,onClick:l},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(m)(o.cancelTitle)),1)]),_:1},8,["variant"]),createVNode(h,{name:"ok",variant:t.okVariant,onClick:i},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(m)(o.okTitle)),1)]),_:1},8,["variant"])])]),_:2},[renderList(Object.keys(n.$slots),x=>({name:x,fn:withCtx(V=>[renderSlot(n.$slots,x,normalizeProps(guardReactiveProps(V)))])}))]),1040,["model-value","title"])])}}});function useConfig(o){var m;const s=((m=window.MODx)==null?void 0:m.config)||{};return o in s?s[o]:void 0}const _hoisted_1$4={class:"mmx-table"},_hoisted_2$4=createBaseVNode("i",{class:"icon icon-times fa-fw"},null,-1),_hoisted_3$3={key:1,class:"icon icon-repeat fa-fw"},_hoisted_4$1=["innerHTML"],_sfc_main$8=defineComponent({__name:"table",props:{modelValue:{type:Number,default:null},url:{type:String,required:!0,default:""},fields:{type:Array,default(){return[]}},filters:{type:Object,default(){return{}}},updateKey:{type:String,default:""},primaryKey:{type:[String,Array],default:"id"},sort:{type:String,default:null},dir:{type:String,default:"asc"},limit:{type:Number,default:Number(useConfig("default_per_page"))||20},stacked:{type:String,default:void 0},responsive:{type:Boolean,default:!0},showEmpty:{type:Boolean,default:!0},headerActions:{type:Array,default(){return[]}},tableActions:{type:Array,default(){return[]}},rowClass:{type:Function,default(){return""}},tableClass:{type:[String,Array,Object],default:"mt-3 mt-md-0"},pageLimit:{type:Number,default:7},onLoad:{type:Function,default(o){return o}},emptyText:{type:String,default:"components.no_data"},emptyFilteredText:{type:String,default:"components.no_results"},deleteTitle:{type:String,default:"components.delete.title"},deleteText:{type:String,default:"components.delete.confirm"}},emits:["update:modelValue","update:sort","update:dir","update:limit","update:filters","delete"],setup(o,{expose:s,emit:m}){const u=m,t=o,a=useLexicon,r=ref(1),l=ref(t.sort),i=ref(t.dir),y=ref(t.limit),n=ref(t.filters),_=computed({get(){return t.modelValue===null?r.value:t.modelValue},set(e){r.value=Number(e),u("update:modelValue",e)}}),h=computed(()=>{const e=[...t.fields];return t.tableActions.length&&e.findIndex(d=>d.key==="actions")===-1&&e.push({key:"actions",label:"",class:"table-actions"}),e}),x=computed(()=>Object.keys(n.value).includes("query")),V=ref(!1),v=ref(0),N=ref([]),P=ref(!1),f=ref(!1),B=ref({}),R={item:B,visible:P,loading:f,deleteItem:w},L=computed(()=>({limit:t.limit,page:_.value,...O(!0)}));function c(e,d){l.value=e,i.value=d?"desc":"asc",C()}function g(e,d){if(!e.route)return;e.map||(e.map={},Array.isArray(t.primaryKey)?t.primaryKey.forEach(b=>{e.map[b]=b}):e.map[t.primaryKey]=t.primaryKey);const p={};for(const b of Object.keys(e.map)){const A=e.map[b];if(/\./.test(A)){const j=A.split(".");let z={...d};for(const F of j)z=z[F];p[b]=z}else p[b]=d[A]}return{...e.route,params:p}}function S(e,d=void 0){e.function&&typeof e.function=="function"&&(d?e.function(JSON.parse(JSON.stringify(d))):e.function())}function O(e=!1){const d={};return Object.keys(t.filters).forEach(p=>{t.filters[p]!==""&&t.filters[p]!==null&&(d[p]=typeof t.filters[p]=="object"&&!e?JSON.stringify(t.filters[p]):t.filters[p])}),l.value&&(d.sort=l.value,d.dir=i.value),e?JSON.parse(JSON.stringify(d)):new URLSearchParams(d).toString()}function D(e){P.value=!0,B.value=e}function E(){P.value=!1,B.value={}}async function w(){f.value=!0;const e=B.value;try{if(Array.isArray(t.primaryKey)){const d={};t.primaryKey.forEach(p=>{d[p]=e[p]}),await useDelete(t.url,d)}else e[t.primaryKey]?await useDelete(t.url+"/"+e[t.primaryKey]):await useDelete(t.url,e);P.value=!1,await C()}catch{}finally{f.value=!1}}s({getParams:O,page:_,sort:l,dir:i,loading:V,delete:D,refresh:C,items:N}),watch(_,()=>{C()}),watch(n,()=>{_.value!==1&&(_.value=1),C()},{deep:!0});async function C(){if(!V.value)try{V.value=!0;const e=t.onLoad(await useGet(t.url,L.value));N.value=e.rows||[],v.value=e.total||0}catch{}finally{V.value=!1}}C();const U=t.updateKey||t.url.split("/").join("-");return provide("refreshTable",e=>{U===e&&C()}),(e,d)=>{const p=Bt,b=Ut,A=Ou,j=md,z=tc,F=pc,M=ka,I=Ud,K=Ca,H=_sfc_main$9;return openBlock(),createElementBlock("section",_hoisted_1$4,[renderSlot(e.$slots,"header",{},()=>[createVNode(z,{class:"align-items-center mb-3"},{default:withCtx(()=>[createVNode(b,{md:"4"},{default:withCtx(()=>[renderSlot(e.$slots,"header-start",{},()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(o.headerActions,(k,$)=>(openBlock(),createBlock(p,{key:$,size:k.size||"md",variant:k.variant||"secondary",class:normalizeClass(k.class||($?"col-12 col-md-auto ms-md-2 mt-2 mt-md-0":"col-12 col-md-auto")),to:k.route,onClick:q=>S(k)},{default:withCtx(()=>[k.icon?(openBlock(),createElementBlock("i",{key:0,class:normalizeClass(`icon icon-${k.icon} fa-fw`)},null,2)):createCommentVNode("",!0),createTextVNode(" "+toDisplayString(k.title),1)]),_:2},1032,["size","variant","class","to","onClick"]))),128))])]),_:3}),createVNode(b,{md:"4"},{default:withCtx(()=>[renderSlot(e.$slots,"header-middle")]),_:3}),createVNode(b,{md:"4",class:"mt-2 mt-md-0"},{default:withCtx(()=>[renderSlot(e.$slots,"header-end",{},()=>[x.value?(openBlock(),createBlock(j,{key:0},{append:withCtx(()=>[createVNode(p,{disabled:!n.value.query,onClick:d[0]||(d[0]=k=>n.value.query=null)},{default:withCtx(()=>[_hoisted_2$4]),_:1},8,["disabled"])]),default:withCtx(()=>[createVNode(A,{modelValue:n.value.query,"onUpdate:modelValue":d[1]||(d[1]=k=>n.value.query=k),placeholder:unref(a)("components.query")},null,8,["modelValue","placeholder"])]),_:1})):createCommentVNode("",!0)])]),_:3})]),_:3})]),createVNode(M,{show:V.value,opacity:"0.25"},{default:withCtx(()=>[createVNode(F,{items:N.value,fields:h.value,class:normalizeClass(o.tableClass),"per-page":y.value,"sort-by":l.value,"sort-desc":i.value==="desc","empty-text":unref(a)(o.emptyText),"empty-filtered-text":unref(a)(o.emptyFilteredText),stacked:o.stacked,responsive:o.responsive,"show-empty":o.showEmpty,"sort-internal":!1,"tbody-tr-class":o.rowClass,onSorted:c},createSlots({"cell(actions)":withCtx(({item:k})=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(o.tableActions,($,q)=>(openBlock(),createElementBlock(Fragment,null,[typeof $.isActive!="function"||$.isActive(k)===!0?(openBlock(),createBlock(p,mergeProps({key:q,size:$.size||"sm",variant:$.variant||"secondary",class:$.class},$.route?{to:g($,k)}:{},{onClick:G=>S($,k)}),{default:withCtx(()=>[$.icon?(openBlock(),createElementBlock("i",{key:0,class:normalizeClass(`icon icon-${$.icon} fa-fw`)},null,2)):(openBlock(),createElementBlock(Fragment,{key:1},[createTextVNode(toDisplayString($.title),1)],64))]),_:2},1040,["size","variant","class","onClick"])):createCommentVNode("",!0)],64))),256))]),_:2},[renderList(Object.keys(e.$slots),k=>({name:k,fn:withCtx($=>[k!=="default"?renderSlot(e.$slots,k,normalizeProps(mergeProps({key:0},$))):createCommentVNode("",!0)])}))]),1032,["items","fields","class","per-page","sort-by","sort-desc","empty-text","empty-filtered-text","stacked","responsive","show-empty","tbody-tr-class"])]),_:3},8,["show"]),renderSlot(e.$slots,"footer",normalizeProps(guardReactiveProps({refresh:C,total:v.value,page:_.value,limit:o.limit,loading:V.value})),()=>[createVNode(z,{class:"mt-5 align-items-center justify-content-center justify-content-md-start","no-gutters":""},{default:withCtx(()=>[createVNode(b,{cols:"12",md:"auto",class:"d-flex justify-content-center"},{default:withCtx(()=>[renderSlot(e.$slots,"pagination",normalizeProps(guardReactiveProps({refresh:C,total:v.value,page:_.value,limit:o.limit,loading:V.value})),()=>[v.value>o.limit?(openBlock(),createBlock(I,{key:0,modelValue:_.value,"onUpdate:modelValue":d[2]||(d[2]=k=>_.value=k),"total-rows":v.value,"per-page":o.limit,limit:o.pageLimit,class:"mb-md-0 me-md-3"},null,8,["modelValue","total-rows","per-page","limit"])):createCommentVNode("",!0)])]),_:3}),createVNode(b,{cols:"12",md:"auto",class:"d-flex align-items-center justify-content-center gap-2"},{default:withCtx(()=>[renderSlot(e.$slots,"pagination-data",normalizeProps(guardReactiveProps({refresh:C,total:v.value,page:_.value,limit:o.limit,loading:V.value})),()=>[createVNode(p,{class:"border-0",onClick:d[3]||(d[3]=()=>C())},{default:withCtx(()=>[V.value?(openBlock(),createBlock(K,{key:0,small:!0})):(openBlock(),createElementBlock("i",_hoisted_3$3))]),_:1}),createTextVNode(" "+toDisplayString(unref(a)("components.records",{total:v.value},v.value)),1)])]),_:3})]),_:3})]),(openBlock(),createBlock(Suspense,null,{default:withCtx(()=>[renderSlot(e.$slots,"default")]),_:3})),renderSlot(e.$slots,"delete",normalizeProps(guardReactiveProps(R)),()=>[P.value?(openBlock(),createBlock(H,{key:0,title:o.deleteTitle,"on-ok":w,"ok-title":"actions.delete",onHidden:E},{default:withCtx(()=>[createVNode(M,{opacity:.5,show:f.value},{default:withCtx(()=>[createBaseVNode("div",{innerHTML:unref(a)(o.deleteText)},null,8,_hoisted_4$1)]),_:1},8,["show"])]),_:1},8,["title"])):createCommentVNode("",!0)])])}}}),url="mgr/forms",_sfc_main$7=defineComponent({__name:"index",setup(o){const s=useLexicon,m=ref(),u=computed(()=>[{route:{name:"index-create"},icon:"plus",title:s("actions.create")}]),t=computed(()=>[{key:"id",label:s("models.form.id"),sortable:!0},{key:"title",label:s("models.form.title"),sortable:!0},{key:"submissions_count",label:s("models.submission.title_many"),sortable:!0},{key:"emails_count",label:s("models.email.title_many"),sortable:!0}]),a=computed(()=>{var i;return[{route:{name:"index-id-edit"},icon:"edit",title:s("actions.edit")},{function:(i=m.value)==null?void 0:i.delete,icon:"times",title:s("actions.delete"),variant:"danger"}]}),r=ref({query:""});function l(i){if(i){const y=[];return i.active||y.push("inactive"),y}}return(i,y)=>{const n=resolveComponent("RouterView"),_=_sfc_main$8;return openBlock(),createBlock(_,{ref_key:"table",ref:m,url,"header-actions":unref(u),"table-actions":unref(a),fields:unref(t),filters:unref(r),"row-class":l,sort:"id",dir:"desc"},{default:withCtx(()=>[createVNode(n)]),_:1},8,["header-actions","table-actions","fields","filters"])}}}),_hoisted_1$3={class:"mmx-modal"},_hoisted_2$3=createBaseVNode("input",{type:"submit",class:"d-none"},null,-1),_sfc_main$6=defineComponent({__name:"modal",props:{...Ra.props,url:{type:String,default:""},modelValue:{type:Object,default(){return{}}},method:{type:String,default:"POST"},updateKey:{type:String,default:""},show:{type:Boolean,default:!0},okTitle:{type:String,default:"actions.submit"},cancelTitle:{type:String,default:"actions.cancel"},beforeSubmit:{type:Function,default(o){return o}},teleportDisabled:{type:Boolean,default:!0}},emits:["update:modelValue","after-submit"],setup(o,{expose:s,emit:m}){var L;const u=m,t=ref(),a=ref(),r=useRouter(),l=useRoute(),i=ref(!1),y=computed({get(){return n.modelValue},set(c){u("update:modelValue",c)}}),n=o,_=ref(!1),h=computed(()=>{const c={...useAttrs(),...n};return delete c.modelValue,delete c.show,delete c.url,delete c.method,delete c.beforeSubmit,c.onHidden||(c.onHidden=P),c.onShown||(c.onShown=f),c}),x=n.updateKey||((L=n.url)==null?void 0:L.split("/").join("-"));function V(){if(a.value&&a.value.$el){const c=a.value.$el.querySelector('[type="submit"]');c?c.click():c()}else v()}async function v(){if(n.url)try{const c=n.beforeSubmit(JSON.parse(JSON.stringify(y.value)));if(c)if(typeof c=="string")useToastError(c);else{i.value=!0;const g=n.method.toLowerCase(),S={put:usePut,patch:usePatch},D=await(g in S?S[g]:usePost)(n.url,c);u("after-submit",D),N(),R(x)}}catch{}finally{i.value=!1}}function N(){t.value.$emit("hide"),_.value=!1}function P(){const c=l.matched.findIndex(g=>g.name===l.name);c>0&&l.matched[c-1]?r.push({name:l.matched[c-1].name}):r.go(-1)}function f(){if(a.value&&a.value.$el){const c=a.value.$el.querySelector("input:not(:disabled)");c&&c.focus()}}function B(c){(c.metaKey||c.ctrlKey)&&c.code==="KeyS"&&(c.preventDefault(),V())}onMounted(()=>{n.show&&(_.value=!0)}),s({hide:N,submit:v,formSubmit:V});const R=inject("refreshTable")||function(c){};return(c,g)=>{const S=wn,O=ka,D=Bt;return openBlock(),createElementBlock("section",_hoisted_1$3,[createVNode(unref(Ra),mergeProps({ref_key:"modal",ref:t,modelValue:_.value,"onUpdate:modelValue":g[0]||(g[0]=E=>_.value=E)},h.value),createSlots({default:withCtx(()=>[createVNode(O,{opacity:.5,show:i.value},{default:withCtx(()=>[createVNode(S,{ref_key:"form",ref:a,onSubmit:withModifiers(v,["prevent"]),onKeydown:B},{default:withCtx(()=>[renderSlot(c.$slots,"form-fields",normalizeProps(guardReactiveProps({record:y.value,loading:i.value,hide:N,submit:v}))),_hoisted_2$3]),_:3},512)]),_:3},8,["show"])]),footer:withCtx(()=>[renderSlot(c.$slots,"footer",normalizeProps(guardReactiveProps({record:y.value,loading:i.value,hide:N,submit:v,formSubmit:V})),()=>[createVNode(D,{variant:n.cancelVariant,disabled:i.value,onClick:N},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(useLexicon)(o.cancelTitle)),1)]),_:1},8,["variant","disabled"]),o.url?(openBlock(),createBlock(D,{key:0,variant:n.okVariant,disabled:i.value,onClick:withModifiers(V,["prevent"])},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(useLexicon)(o.okTitle)),1)]),_:1},8,["variant","disabled"])):createCommentVNode("",!0)])]),_:2},[renderList(Object.keys(c.$slots),E=>({name:E,fn:withCtx(w=>[renderSlot(c.$slots,E,normalizeProps(guardReactiveProps({...w,record:y.value,loading:i.value,hide:N,submit:v,formSubmit:V})))])}))]),1040,["modelValue"])])}}}),_sfc_main$5=defineComponent({__name:"form-action",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(o,{emit:s}){const m=o,u=useLexicon,t=s,a=ref(),r=ref(),l=ref(),i=["reset","message","redirect"];m.modelValue?(a.value=m.modelValue.type,a.value==="message"?l.value=m.modelValue.value:r.value=m.modelValue.value):a.value="reset";function y(_){_.length>0?t("update:modelValue",{type:a,value:_}):t("update:modelValue",null)}function n(){t("update:modelValue",null)}return(_,h)=>{const x=po,V=Mu,v=Vu,N=Ma,P=Ou;return openBlock(),createElementBlock("div",null,[createVNode(v,{label:unref(u)("models.form.action"),description:unref(u)("models.form.action_desc")},{default:withCtx(()=>[createVNode(V,{modelValue:unref(a),"onUpdate:modelValue":h[0]||(h[0]=f=>isRef(a)?a.value=f:null),onChange:n},{default:withCtx(()=>[(openBlock(),createElementBlock(Fragment,null,renderList(i,f=>createVNode(x,{key:f,value:f},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(u)("models.form.actions."+f)),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["label","description"]),unref(a)==="reset"?(openBlock(),createBlock(N,{key:0},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(u)("models.form.actions.reset_desc")),1)]),_:1})):createCommentVNode("",!0),unref(a)==="redirect"?(openBlock(),createBlock(v,{key:1,description:unref(u)("models.form.actions.redirect_desc")},{default:withCtx(()=>[createVNode(P,{modelValue:unref(r),"onUpdate:modelValue":[h[1]||(h[1]=f=>isRef(r)?r.value=f:null),y],autofocus:"",required:""},null,8,["modelValue"])]),_:1},8,["description"])):createCommentVNode("",!0),unref(a)==="message"?(openBlock(),createBlock(v,{key:2,description:unref(u)("models.form.actions.message_desc")},{default:withCtx(()=>[createVNode(unref(T),{modelValue:unref(l),"onUpdate:modelValue":h[2]||(h[2]=f=>isRef(l)?l.value=f:null),extensions:[unref(html)()],style:{height:"200px"},autofocus:"",required:"",onChange:y},null,8,["modelValue","extensions"])]),_:1},8,["description"])):createCommentVNode("",!0)])}}}),_hoisted_1$2={class:"mmx-combo"},_hoisted_2$2=createBaseVNode("i",{class:"icon icon-caret-down fa-fw"},null,-1),_hoisted_3$2=["textContent"],_sfc_main$4=defineComponent({__name:"combo-box",props:{...Ou.props,modelValue:{type:[String,Number],default:""},url:{type:String,required:!0},valueField:{type:String,default:"id"},textField:{type:String,default:"title"},limit:{type:Number,default:10},sort:{type:String,default:null},dir:{type:String,default:"asc"},forceSelect:{type:Boolean,default:!1},emptyText:{type:String,default:"No results"},filterProps:{type:Object,default(){return{}}},formatValue:{type:Function,default:void 0},maxPages:{type:Number,default:5},onLoad:{type:Function,default(o){return o}},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","load","failure","change","select","reset","keydown"],setup(o,{expose:s,emit:m}){const u=m,t=o,a=ref(),r=ref([]),l=ref(""),i=ref(null),y=ref(!1),n=ref(""),_=ref(!1),h=ref(t.page||1),x=ref(0),V=ref(!1),v=computed({get(){return t.modelValue||null},set(e){u("update:modelValue",e)}}),N=computed(()=>({type:t.type,autofocus:t.autofocus,placeholder:t.placeholder,required:t.required,readonly:t.readonly,disabled:t.disabled}));watch(()=>t.filterProps,async e=>{const d=JSON.stringify(e);d!==n.value&&(n.value=d,t.lazy||(await f(""),v.value&&r.value.findIndex(p=>p[t.valueField]==v.value)===-1&&B()))}),watch(()=>t.lazy,e=>{e&&P()}),watch(v,e=>{t.skipWatchers||C(e)}),onMounted(()=>{n.value=JSON.stringify(t.filterProps),P()});async function P(){t.lazy||(await f(),v.value&&await C(v.value))}async function f(e=l.value){if(t.url&&!_.value){const d={...t.filterProps,query:e,limit:t.limit,sort:t.sort||t.textField,dir:t.dir,page:h.value,combo:!0};_.value=!0;try{const p=t.onLoad(await useGet(t.url,d));r.value=p.rows||[],x.value=p.total||0,u("load",r.value,x.value)}catch(p){u("failure",p)}finally{_.value=!1}}}function B(){h.value=1,v.value=null,l.value=""}function R(e){h.value=1;const d=r.value[e];if(d)return v.value=d[t.valueField],l.value=U(d),d}function L(e){e.stopPropagation(),S()?g():c()}function c(){y.value=!0,document.addEventListener("click",g,{once:!0})}function g(){y.value=!1,i.value=null}function S(){return y.value}async function O(e){e.length?(V.value=!0,v.value=null,await f(e),c(),V.value=!1):(B(),t.lazy||await f())}function D(e){u("change",e),e&&t.forceSelect&&!v.value&&r.value.length&&E(0)}function E(e,d){d&&a.value.$el.focus();const p=R(e);p&&p[t.valueField]!==v.value&&u("select",p)}function w(e){e.key==="ArrowDown"&&!S()&&r.value.length&&c(),e.key==="ArrowDown"&&(i.value===null||i.value<r.value.length-1)?i.value=i.value===null?0:i.value+1:i.value!==null&&e.key==="ArrowUp"&&(i.value=i.value===0?null:i.value-1),e.key==="Enter"&&(S()&&(e.stopPropagation(),e.preventDefault()),typeof i.value=="number"&&(E(i.value),g())),e.key==="Escape"&&S()&&(e.stopPropagation(),e.preventDefault(),g()),u("keydown",e)}async function C(e){if(!e)B();else{if(r.value.findIndex(p=>p[t.valueField]==e)===-1){const p={...t.filterProps,combo:!0};p[t.valueField]=e;const b=await useGet(t.url,p);b[t.valueField]==e&&r.value.push(b)}const d=r.value.findIndex(p=>p[t.valueField]==e);d!==-1&&E(d)}}function U(e){return t.formatValue?t.formatValue(e):e[t.textField]}return watch(h,()=>{f(v.value?"":l.value)}),s({total:x,page:h,limit:t.limit,options:r,externalValue:l}),(e,d)=>{const p=Bt,b=md,A=ou,j=Ud,z=Wi;return openBlock(),createElementBlock("div",_hoisted_1$2,[createVNode(b,null,{append:withCtx(()=>[renderSlot(e.$slots,"append",normalizeProps(guardReactiveProps({toggle:L,disabled:o.disabled,readonly:e.readonly,options:r.value})),()=>[createVNode(p,{disabled:!r.value.length||o.disabled||e.readonly,tabindex:"-1",onClick:withModifiers(L,["prevent"])},{default:withCtx(()=>[_hoisted_2$2]),_:1},8,["disabled"])])]),default:withCtx(()=>[createVNode(unref(Ou),mergeProps({ref_key:"input",ref:a,modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=F=>l.value=F)},N.value,{autocomplete:"off",onChange:D,onKeydown:w,"onUpdate:modelValue":O}),null,16,["modelValue"])]),_:3}),createBaseVNode("ul",{class:normalizeClass({"dropdown-menu mmx-combo-list":!0,show:y.value})},[r.value.length?(openBlock(),createElementBlock(Fragment,{key:1},[renderSlot(e.$slots,"list-header",normalizeProps(guardReactiveProps({hideDropdown:g,total:x.value}))),(openBlock(!0),createElementBlock(Fragment,null,renderList(r.value,(F,M)=>(openBlock(),createBlock(A,{key:F[o.valueField],class:normalizeClass({"mmx-combo-list-item":!0}),active:i.value===M,onClick:I=>E(M,I)},{default:withCtx(()=>[renderSlot(e.$slots,"default",normalizeProps(guardReactiveProps({item:F})),()=>[createTextVNode(toDisplayString(U(F)),1)])]),_:2},1032,["active","onClick"]))),128)),renderSlot(e.$slots,"list-footer",normalizeProps(guardReactiveProps({hideDropdown:g,total:x.value})),()=>[x.value>r.value.length?(openBlock(),createBlock(z,{key:0,class:"my-2",onClick:d[2]||(d[2]=F=>F.stopPropagation())},{default:withCtx(()=>[createVNode(j,{modelValue:h.value,"onUpdate:modelValue":d[1]||(d[1]=F=>h.value=F),"per-page":o.limit,limit:o.maxPages,"total-rows":x.value},null,8,["modelValue","per-page","limit","total-rows"])]),_:1})):createCommentVNode("",!0)])],64)):renderSlot(e.$slots,"no-results",normalizeProps(mergeProps({key:0},{hideDropdown:g,emptyText:o.emptyText})),()=>[createBaseVNode("li",{class:"alert alert-info m-0",onClick:g,textContent:toDisplayString(o.emptyText)},null,8,_hoisted_3$2)])],2)])}}}),_hoisted_1$1={key:0,class:"d-flex flex-column mb-2 gap-2"},_hoisted_2$1={class:"d-flex flex-column flex-md-row gap-1 gap-md-2"},_hoisted_3$1=createBaseVNode("i",{class:"icon icon-edit fa-fw"},null,-1),_hoisted_4=createBaseVNode("i",{class:"icon icon-times fa-fw"},null,-1),_hoisted_5=["innerHTML"],_sfc_main$3=defineComponent({__name:"form-emails",props:{modelValue:{type:Array,required:!0}},emits:["update:modelValue"],setup(o,{emit:s}){const m=o,u=useLexicon,t=s,a=ref([]),r=ref(!1),l=ref({}),i=ref(),y=ref();m.modelValue&&m.modelValue.length>0&&(a.value=m.modelValue);const n=computed(()=>l.value&&Object.keys(l.value).length&&l.value.to&&(l.value.to.includes("@")||l.value.to.includes("[[+"))&&l.value.subject);function _(){l.value={to:"",subject:"",chunk:0,idx:null},r.value=!0}function h(f){l.value={...a.value[f],idx:f},r.value=!0}function x(){if(n.value){const{idx:f}=l.value;delete l.value.idx,f===null?a.value.push(l.value):a.value[f]=l.value,P()}}function V(f){a.value.splice(f,1)}function v(f){f.code==="Escape"?(f.stopPropagation(),f.preventDefault(),P()):f.code==="Enter"&&(f.stopPropagation(),f.preventDefault(),x())}function N(){y.value&&y.value.$el.focus()}function P(){i.value?i.value.hide():r.value=!0}return watch(a,f=>{f.length>0?t("update:modelValue",f):t("update:modelValue",null)},{deep:!0}),onMounted(()=>{a.value.length||_()}),(f,B)=>{const R=Ut,L=tc,c=Bt,g=Ou,S=Vu,O=_sfc_main$4,D=vi,E=_sfc_main$6;return openBlock(),createElementBlock("div",null,[unref(a).length?(openBlock(),createElementBlock("div",_hoisted_1$1,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(a),(w,C)=>(openBlock(),createElementBlock("div",{key:C,class:"d-flex align-items-center"},[createVNode(L,{class:"w-100"},{default:withCtx(()=>[createVNode(R,{md:"4"},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(u)("models.form.emails.to"))+": "+toDisplayString(w.to),1)]),_:2},1024),createVNode(R,{md:"5"},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(u)("models.form.emails.subject"))+": "+toDisplayString(w.subject),1)]),_:2},1024),createVNode(R,{md:"3"},{default:withCtx(()=>[w.chunk?(openBlock(),createElementBlock(Fragment,{key:0},[createTextVNode(toDisplayString(unref(u)("models.form.emails.chunk"))+": #"+toDisplayString(w.chunk),1)],64)):createCommentVNode("",!0)]),_:2},1024)]),_:2},1024),createBaseVNode("div",_hoisted_2$1,[createVNode(c,{variant:"outline-secondary",size:"sm",onClick:()=>h(C)},{default:withCtx(()=>[_hoisted_3$1]),_:2},1032,["onClick"]),createVNode(c,{variant:"outline-danger",size:"sm",onClick:()=>V(C)},{default:withCtx(()=>[_hoisted_4]),_:2},1032,["onClick"])])]))),128))])):createCommentVNode("",!0),createVNode(c,{variant:"outline-secondary",size:"sm",onClick:_},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(u)("models.form.emails.add")),1)]),_:1}),unref(r)?(openBlock(),createBlock(E,{key:1,ref_key:"modal",ref:i,onKeydown:v,onShown:N,onHidden:B[3]||(B[3]=w=>r.value=!1)},{title:withCtx(()=>[createTextVNode(toDisplayString(unref(u)("models.form.emails.add")),1)]),footer:withCtx(({hide:w})=>[createVNode(c,{onClick:()=>w()},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(u)("actions.cancel")),1)]),_:2},1032,["onClick"]),createVNode(c,{variant:"primary",disabled:!unref(n),onClick:x},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(u)("actions.add")),1)]),_:1},8,["disabled"])]),default:withCtx(()=>[createVNode(S,{label:unref(u)("models.form.emails.to")},{default:withCtx(()=>[createVNode(g,{ref_key:"input",ref:y,modelValue:unref(l).to,"onUpdate:modelValue":B[0]||(B[0]=w=>unref(l).to=w),type:"email",autofocus:""},null,8,["modelValue"])]),_:1},8,["label"]),createVNode(S,{label:unref(u)("models.form.emails.subject")},{default:withCtx(()=>[createVNode(g,{modelValue:unref(l).subject,"onUpdate:modelValue":B[1]||(B[1]=w=>unref(l).subject=w)},null,8,["modelValue"])]),_:1},8,["label"]),createVNode(S,{label:unref(u)("models.form.emails.chunk")},{default:withCtx(()=>[createVNode(O,{modelValue:unref(l).chunk,"onUpdate:modelValue":B[2]||(B[2]=w=>unref(l).chunk=w),url:"mgr/elements/chunks","text-field":"name"},null,8,["modelValue"])]),_:1},8,["label"]),createVNode(D,{"model-value":!0,variant:"light"},{default:withCtx(()=>[createBaseVNode("div",{innerHTML:unref(u)("models.form.emails.desc")},null,8,_hoisted_5)]),_:1})]),_:1},512)):createCommentVNode("",!0)])}}}),_hoisted_1={class:"form-control p-0 overflow-hidden"},_hoisted_2={class:"vueform-app bg-light p-3 border rounded"},_hoisted_3=["innerHTML"],_sfc_main$2=defineComponent({__name:"form",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(__props,{expose:__expose,emit:__emit}){const props=__props,$t=useLexicon,emit=__emit,record=computed({get(){return props.modelValue},set(o){emit("update:modelValue",o)}}),canPreview=computed(()=>!!checkSchema(record.value));function checkSchema(values){try{const obj=eval("("+values.schema+")");if(obj)return obj}catch(o){return!1}}function verify(o){return checkSchema(o)?o:useLexicon("errors.form.schema")}const properties=computed(()=>{const o={disabled:!0},s=checkSchema(record.value);return s?"schema"in s?{...s,...o}:{...o,schema:s}:o});return __expose({verify}),(o,s)=>{const m=Ou,u=Vu,t=kn,a=mc,r=resolveComponent("Vueform"),l=yc,i=_sfc_main$3,y=_sfc_main$5;return openBlock(),createElementBlock("div",null,[createVNode(u,{label:unref($t)("models.form.title")},{default:withCtx(()=>[createVNode(m,{modelValue:unref(record).title,"onUpdate:modelValue":s[0]||(s[0]=n=>unref(record).title=n),required:""},null,8,["modelValue"])]),_:1},8,["label"]),createVNode(u,null,{default:withCtx(()=>[createVNode(t,{modelValue:unref(record).active,"onUpdate:modelValue":s[1]||(s[1]=n=>unref(record).active=n)},{default:withCtx(()=>[createTextVNode(toDisplayString(unref($t)("models.form.active")),1)]),_:1},8,["modelValue"])]),_:1}),createVNode(l,{"content-class":"pt-2"},{default:withCtx(()=>[createVNode(a,{title:unref($t)("models.form.schema")},{default:withCtx(()=>[createBaseVNode("div",_hoisted_1,[createVNode(unref(T),{modelValue:unref(record).schema,"onUpdate:modelValue":s[2]||(s[2]=n=>unref(record).schema=n),extensions:[unref(javascript)()],style:{height:"400px"}},null,8,["modelValue","extensions"])])]),_:1},8,["title"]),createVNode(a,{title:unref($t)("models.form.preview"),disabled:!unref(canPreview),lazy:""},{default:withCtx(()=>[createBaseVNode("div",_hoisted_2,[createVNode(r,normalizeProps(guardReactiveProps(unref(properties))),null,16)])]),_:1},8,["title","disabled"]),createVNode(a,{title:unref($t)("models.form.help")},{default:withCtx(()=>[createBaseVNode("div",{class:"bg-light p-3 border rounded",innerHTML:unref($t)("models.form.help_text")},null,8,_hoisted_3)]),_:1},8,["title"])]),_:1}),createVNode(u,{class:"mt-4"},{default:withCtx(()=>[createVNode(t,{modelValue:unref(record).email,"onUpdate:modelValue":s[3]||(s[3]=n=>unref(record).email=n)},{default:withCtx(()=>[createTextVNode(toDisplayString(unref($t)("models.form.email")),1)]),_:1},8,["modelValue"]),unref(record).email?(openBlock(),createBlock(i,{key:0,modelValue:unref(record).emails,"onUpdate:modelValue":s[4]||(s[4]=n=>unref(record).emails=n),class:"p-2 bg-light rounded"},null,8,["modelValue"])):createCommentVNode("",!0)]),_:1}),createVNode(y,{modelValue:unref(record).action,"onUpdate:modelValue":s[5]||(s[5]=n=>unref(record).action=n)},null,8,["modelValue"])])}}}),_sfc_main$1=defineComponent({__name:"create",setup(o){const s=ref(),m=ref({title:"",schema:"",active:!0}),u={url:"mgr/forms",beforeSubmit(t){var a;return(a=s.value)==null?void 0:a.verify(t)},title:useLexicon("models.form.title_one"),method:"put",size:"lg"};return(t,a)=>{const r=_sfc_main$2,l=_sfc_main$6;return openBlock(),createBlock(l,mergeProps({modelValue:unref(m),"onUpdate:modelValue":a[1]||(a[1]=i=>isRef(m)?m.value=i:null)},u),{"form-fields":withCtx(()=>[createVNode(r,{ref_key:"form",ref:s,modelValue:unref(m),"onUpdate:modelValue":a[0]||(a[0]=i=>isRef(m)?m.value=i:null)},null,8,["modelValue"])]),_:1},16,["modelValue"])}}});function useError(o){const s=useRouter();s&&s.push(o||"/")}const _sfc_main=defineComponent({__name:"edit",async setup(o){let s,m;const u=ref({}),t=ref(),a={url:"mgr/forms/"+useRoute().params.id,beforeSubmit(r){var l;return(l=t.value)==null?void 0:l.verify(r)},title:useLexicon("models.form.title_one"),updateKey:"mgr-forms",method:"patch",size:"lg"};try{u.value=([s,m]=withAsyncContext(()=>useGet(a.url)),s=await s,m(),s)}catch{useError()}return(r,l)=>{const i=_sfc_main$2,y=_sfc_main$6;return openBlock(),createBlock(y,mergeProps({modelValue:unref(u),"onUpdate:modelValue":l[1]||(l[1]=n=>isRef(u)?u.value=n:null)},a),{"form-fields":withCtx(()=>[createVNode(i,{ref_key:"form",ref:t,modelValue:unref(u),"onUpdate:modelValue":l[0]||(l[0]=n=>isRef(u)?u.value=n:null)},null,8,["modelValue"])]),_:1},16,["modelValue"])}}}),__pages_import_0__=()=>__vitePreload(()=>import("./submissions-BrU6oAHO.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])),__pages_import_1__=()=>__vitePreload(()=>import("./view-DUW4gkyJ.js"),__vite__mapDeps([24,16,5,1,2,3,4,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23])),__pages_import_5__=()=>__vitePreload(()=>import("./emails-BJxHqpAg.js"),__vite__mapDeps([25,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])),__pages_import_6__=()=>__vitePreload(()=>import("./view-DzbQOpdw.js"),__vite__mapDeps([26,17,5,16,1,2,3,4,6,7,8,9,10,11,12,13,14,18,19,20,21,22,23])),routes=[{name:"submissions",path:"/submissions",component:__pages_import_0__,children:[{name:"submissions-id-view",path:":id/view",component:__pages_import_1__,props:!0}],props:!0},{name:"index",path:"/",component:_sfc_main$7,children:[{name:"index-create",path:"create",component:_sfc_main$1,props:!0},{name:"index-id-edit",path:":id/edit",component:_sfc_main,props:!0}],props:!0},{name:"emails",path:"/emails",component:__pages_import_5__,children:[{name:"emails-id-view",path:":id/view",component:__pages_import_6__,props:!0}],props:!0}],router=createRouter({history:createWebHashHistory(),routes});document.addEventListener("DOMContentLoaded",()=>{createApp(App).use(router).use(_c()).use(src_default,toastOptions).use(vueform,vueFormConfig).mount("#mmx-forms-root")});export{_sfc_main$9 as _,_sfc_main$8 as a,_sfc_main$6 as b,useError as u};