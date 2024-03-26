function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/submissions-Djb3w1ox.js","assets/common.config-DgMOw7gP.js","assets/vueform-XI_to9XY.js","assets/axios-Cm0UX6qg.js","assets/moment-Cl4UOzQZ.js","assets/vue-CQlTxiy5.js","assets/popperjs-CBZXh9ac.js","assets/wnumb-BOjvQ4jq.js","assets/trix-ul_qCPMg.js","assets/nouislider-dfTmBPAg.js","assets/vueform-CiCkEoWT.css","assets/vue-toastification-DLvkSref.js","assets/use-date-DVdoth2I.js","assets/vue-router-YhpOq6q4.js","assets/bootstrap-vue-next-DySSWDks.js","assets/codemirror-BQUORstc.js","assets/lezer-BmdiRFRL.js","assets/style-mod-Bc2inJdb.js","assets/w3c-keyname-Vcq4gwWv.js","assets/crelt-C8TCjufn.js","assets/vue-codemirror-Cc3EEBco.js","assets/view-BsLZ9ARZ.js","assets/emails-C6MdGd5i.js","assets/view-DqUkcLEG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a6 as resolveComponent,o as openBlock,a as createElementBlock,l as createBaseVNode,x as toDisplayString,u as unref,i as createVNode,w as withCtx,F as Fragment,O as renderList,D as createTextVNode,d as defineComponent,r as ref,c as computed,b as onMounted,W as createSlots,v as mergeProps,H as useAttrs,h as renderSlot,m as normalizeProps,p as guardReactiveProps,y as watch,J as provide,g as createBlock,ad as Suspense,n as normalizeClass,q as createCommentVNode,I as inject,Q as withModifiers,N as isRef,ae as withAsyncContext,$ as createApp}from"./vue-CQlTxiy5.js";import{u as useRouter,a as useRoute,c as createRouter,b as createWebHashHistory}from"./vue-router-YhpOq6q4.js";import{T as Td,w as wd,R as Ra,B as Bt,k as ka,U as Ut,O as Ou,m as md,t as tc,p as pc,a as Ud,C as Ca,b as wn,o as ou,W as Wi,c as po,M as Mu,V as Vu,d as Ma,e as kn,v as vi,f as mc,y as yc,_ as _c}from"./bootstrap-vue-next-DySSWDks.js";import{_ as _export_sfc,v as vueform}from"./vueform-XI_to9XY.js";import{s as src_default}from"./vue-toastification-DLvkSref.js";import{u as useLexicon,a as useGet,b as useDelete,c as useToastError,d as usePut,e as usePatch,f as usePost,g as getApiUrl,t as toastOptions,v as vueFormConfig}from"./common.config-DgMOw7gP.js";import{h as html,j as javascript}from"./codemirror-BQUORstc.js";import{T}from"./vue-codemirror-Cc3EEBco.js";import"./axios-Cm0UX6qg.js";import"./moment-Cl4UOzQZ.js";import"./popperjs-CBZXh9ac.js";import"./wnumb-BOjvQ4jq.js";import"./trix-ul_qCPMg.js";import"./nouislider-dfTmBPAg.js";import"./lezer-BmdiRFRL.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./crelt-C8TCjufn.js";const _hoisted_1$7={class:"overflow-auto vh-100 p-3"},_hoisted_2$5={class:"m-0"},_hoisted_3$4={class:"small text-secondary"},_hoisted_4$3={class:"main-wrapper"},_sfc_main$b={__name:"app",setup(s){const d=useLexicon,m=[{title:"models.form.title_many",route:"index"},{title:"models.submission.title_many",route:"submissions"},{title:"models.email.title_many",route:"emails"}];return(i,e)=>{const n=Td,o=wd,l=resolveComponent("RouterView");return openBlock(),createElementBlock("div",_hoisted_1$7,[createBaseVNode("h4",_hoisted_2$5,toDisplayString(unref(d)("menu_name")),1),createBaseVNode("div",_hoisted_3$4,toDisplayString(unref(d)("menu_desc")),1),createVNode(o,{tabs:"",class:"justify-content-between justify-content-md-start mt-3"},{default:withCtx(()=>[(openBlock(),createElementBlock(Fragment,null,renderList(m,(a,p)=>createVNode(n,{key:p,to:{name:a.route},"active-class":"active"},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(d)(a.title)),1)]),_:2},1032,["to"])),64))]),_:1}),createBaseVNode("div",_hoisted_4$3,[createVNode(l)])])}}},App=_export_sfc(_sfc_main$b,[["__scopeId","data-v-76f72b56"]]),scriptRel="modulepreload",assetsURL=function(s){return"/assets/components/mmx-forms/"+s},seen={},__vitePreload=function(d,m,i){let e=Promise.resolve();if(m&&m.length>0){const n=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.all(m.map(a=>{if(a=assetsURL(a),a in seen)return;seen[a]=!0;const p=a.endsWith(".css"),r=p?'[rel="stylesheet"]':"";if(!!i)for(let v=n.length-1;v>=0;v--){const g=n[v];if(g.href===a&&(!p||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${r}`))return;const h=document.createElement("link");if(h.rel=p?"stylesheet":scriptRel,p||(h.as="script",h.crossOrigin=""),h.href=a,l&&h.setAttribute("nonce",l),document.head.appendChild(h),p)return new Promise((v,g)=>{h.addEventListener("load",v),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})}))}return e.then(()=>d()).catch(n=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=n,window.dispatchEvent(o),!o.defaultPrevented)throw n})},_hoisted_1$6={class:"mmx-modal mmx-confirm"},_sfc_main$a=defineComponent({__name:"confirm",props:{...Ra.props,onOk:{type:Function,default:()=>{}},show:{type:Boolean,default:!0},title:{type:String,default:"components.delete.title"},centered:{type:Boolean,default:!1},okVariant:{type:String,default:"danger"},okTitle:{type:String,default:"actions.ok"},cancelTitle:{type:String,default:"actions.cancel"},teleportDisabled:{type:Boolean,default:!0}},setup(s,{expose:d}){const m=useLexicon,i=ref(),e=s,n=ref(!1),o=computed(()=>{const r={...useAttrs(),...e};return delete r.modelValue,delete r.show,r.onShown||(r.onShown=p),r});function l(){i.value.$emit("hide"),n.value=!1}function a(){l(),e.onOk()}function p(){const r=document.querySelector('.mmx-confirm button[name="ok"]');r&&r.focus()}return onMounted(()=>{e.show&&(n.value=!0)}),d({hide:l,ok:a}),(r,x)=>{const h=Bt;return openBlock(),createElementBlock("section",_hoisted_1$6,[createVNode(unref(Ra),mergeProps({ref_key:"modal",ref:i,"model-value":n.value},o.value,{title:unref(m)(s.title)}),createSlots({footer:withCtx(()=>[renderSlot(r.$slots,"footer",mergeProps({ref:"footer"},{hide:l}),()=>[createVNode(h,{name:"cancel",variant:e.cancelVariant,onClick:l},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(m)(s.cancelTitle)),1)]),_:1},8,["variant"]),createVNode(h,{name:"ok",variant:e.okVariant,onClick:a},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(m)(s.okTitle)),1)]),_:1},8,["variant"])])]),_:2},[renderList(Object.keys(r.$slots),v=>({name:v,fn:withCtx(g=>[renderSlot(r.$slots,v,normalizeProps(guardReactiveProps(g)))])}))]),1040,["model-value","title"])])}}});function useConfig(s){var m;const d=((m=window.MODx)==null?void 0:m.config)||{};return s in d?d[s]:void 0}const _hoisted_1$5={class:"mmx-table"},_hoisted_2$4=createBaseVNode("i",{class:"icon icon-times fa-fw"},null,-1),_hoisted_3$3={key:1,class:"icon icon-repeat fa-fw"},_hoisted_4$2=["innerHTML"],_sfc_main$9=defineComponent({__name:"table",props:{modelValue:{type:Number,default:null},url:{type:String,required:!0,default:""},fields:{type:Array,default(){return[]}},filters:{type:Object,default(){return{}}},updateKey:{type:String,default:""},primaryKey:{type:[String,Array],default:"id"},sort:{type:String,default:null},dir:{type:String,default:"asc"},limit:{type:Number,default:Number(useConfig("default_per_page"))||20},stacked:{type:String,default:void 0},responsive:{type:Boolean,default:!0},showEmpty:{type:Boolean,default:!0},headerActions:{type:Array,default(){return[]}},tableActions:{type:Array,default(){return[]}},rowClass:{type:Function,default(){return""}},tableClass:{type:[String,Array,Object],default:"mt-3 mt-md-0"},pageLimit:{type:Number,default:7},onLoad:{type:Function,default(s){return s}},emptyText:{type:String,default:"components.no_data"},emptyFilteredText:{type:String,default:"components.no_results"},deleteTitle:{type:String,default:"components.delete.title"},deleteText:{type:String,default:"components.delete.confirm"}},emits:["update:modelValue","update:sort","update:dir","update:limit","update:filters","delete"],setup(s,{expose:d,emit:m}){const i=m,e=s,n=useLexicon,o=ref(1),l=ref(e.sort),a=ref(e.dir),p=ref(e.limit),r=ref(e.filters),x=computed({get(){return e.modelValue===null?o.value:e.modelValue},set(t){o.value=Number(t),i("update:modelValue",t)}}),h=computed(()=>{const t=[...e.fields];return e.tableActions.length&&t.findIndex(c=>c.key==="actions")===-1&&t.push({key:"actions",label:"",class:"table-actions"}),t}),v=computed(()=>Object.keys(r.value).includes("query")),g=ref(!1),k=ref(0),B=ref([]),N=ref(!1),y=ref(!1),w=ref({}),f={item:w,visible:N,loading:y,deleteItem:A},E=computed(()=>({limit:e.limit,page:x.value,...O(!0)}));function u(t,c){l.value=t,a.value=c?"desc":"asc",V()}function C(t,c){if(!t.route)return;t.map||(t.map={},Array.isArray(e.primaryKey)?e.primaryKey.forEach($=>{t.map[$]=$}):t.map[e.primaryKey]=e.primaryKey);const _={};for(const $ of Object.keys(t.map)){const z=t.map[$];if(/\./.test(z)){const j=z.split(".");let U={...c};for(const F of j)U=U[F];_[$]=U}else _[$]=c[z]}return{...t.route,params:_}}function S(t,c=void 0){t.function&&typeof t.function=="function"&&(c?t.function(JSON.parse(JSON.stringify(c))):t.function())}function O(t=!1){const c={};return Object.keys(e.filters).forEach(_=>{e.filters[_]!==""&&e.filters[_]!==null&&(c[_]=typeof e.filters[_]=="object"&&!t?JSON.stringify(e.filters[_]):e.filters[_])}),l.value&&(c.sort=l.value,c.dir=a.value),t?JSON.parse(JSON.stringify(c)):new URLSearchParams(c).toString()}function L(t){N.value=!0,w.value=t}function D(){N.value=!1,w.value={}}async function A(){y.value=!0;const t=w.value;try{if(Array.isArray(e.primaryKey)){const c={};e.primaryKey.forEach(_=>{c[_]=t[_]}),await useDelete(e.url,c)}else t[e.primaryKey]?await useDelete(e.url+"/"+t[e.primaryKey]):await useDelete(e.url,t);N.value=!1,await V()}catch{}finally{y.value=!1}}d({getParams:O,page:x,sort:l,dir:a,loading:g,delete:L,refresh:V,items:B}),watch(x,()=>{V()}),watch(r,()=>{x.value!==1&&(x.value=1),V()},{deep:!0});async function V(){if(!g.value)try{g.value=!0;const t=e.onLoad(await useGet(e.url,E.value));B.value=t.rows||[],k.value=t.total||0}catch{}finally{g.value=!1}}V();const R=e.updateKey||e.url.split("/").join("-");return provide("refreshTable",t=>{R===t&&V()}),(t,c)=>{const _=Bt,$=Ut,z=Ou,j=md,U=tc,F=pc,M=ka,q=Ud,K=Ca,H=_sfc_main$a;return openBlock(),createElementBlock("section",_hoisted_1$5,[renderSlot(t.$slots,"header",{},()=>[createVNode(U,{class:"align-items-center mb-3"},{default:withCtx(()=>[createVNode($,{md:"4"},{default:withCtx(()=>[renderSlot(t.$slots,"header-start",{},()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(s.headerActions,(b,P)=>(openBlock(),createBlock(_,{key:P,size:b.size||"md",variant:b.variant||"secondary",class:normalizeClass(b.class||(P?"col-12 col-md-auto ms-md-2 mt-2 mt-md-0":"col-12 col-md-auto")),to:b.route,onClick:I=>S(b)},{default:withCtx(()=>[b.icon?(openBlock(),createElementBlock("i",{key:0,class:normalizeClass(`icon icon-${b.icon} fa-fw`)},null,2)):createCommentVNode("",!0),createTextVNode(" "+toDisplayString(b.title),1)]),_:2},1032,["size","variant","class","to","onClick"]))),128))])]),_:3}),createVNode($,{md:"4"},{default:withCtx(()=>[renderSlot(t.$slots,"header-middle")]),_:3}),createVNode($,{md:"4",class:"mt-2 mt-md-0"},{default:withCtx(()=>[renderSlot(t.$slots,"header-end",{},()=>[v.value?(openBlock(),createBlock(j,{key:0},{append:withCtx(()=>[createVNode(_,{disabled:!r.value.query,onClick:c[0]||(c[0]=b=>r.value.query=null)},{default:withCtx(()=>[_hoisted_2$4]),_:1},8,["disabled"])]),default:withCtx(()=>[createVNode(z,{modelValue:r.value.query,"onUpdate:modelValue":c[1]||(c[1]=b=>r.value.query=b),placeholder:unref(n)("components.query")},null,8,["modelValue","placeholder"])]),_:1})):createCommentVNode("",!0)])]),_:3})]),_:3})]),createVNode(M,{show:g.value,opacity:"0.25"},{default:withCtx(()=>[createVNode(F,{items:B.value,fields:h.value,class:normalizeClass(s.tableClass),"per-page":p.value,"sort-by":l.value,"sort-desc":a.value==="desc","empty-text":unref(n)(s.emptyText),"empty-filtered-text":unref(n)(s.emptyFilteredText),stacked:s.stacked,responsive:s.responsive,"show-empty":s.showEmpty,"sort-internal":!1,"tbody-tr-class":s.rowClass,onSorted:u},createSlots({"cell(actions)":withCtx(({item:b})=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(s.tableActions,(P,I)=>(openBlock(),createElementBlock(Fragment,null,[typeof P.isActive!="function"||P.isActive(b)===!0?(openBlock(),createBlock(_,mergeProps({key:I,size:P.size||"sm",variant:P.variant||"secondary",class:P.class},P.route?{to:C(P,b)}:{},{onClick:G=>S(P,b)}),{default:withCtx(()=>[P.icon?(openBlock(),createElementBlock("i",{key:0,class:normalizeClass(`icon icon-${P.icon} fa-fw`)},null,2)):(openBlock(),createElementBlock(Fragment,{key:1},[createTextVNode(toDisplayString(P.title),1)],64))]),_:2},1040,["size","variant","class","onClick"])):createCommentVNode("",!0)],64))),256))]),_:2},[renderList(Object.keys(t.$slots),b=>({name:b,fn:withCtx(P=>[b!=="default"?renderSlot(t.$slots,b,normalizeProps(mergeProps({key:0},P))):createCommentVNode("",!0)])}))]),1032,["items","fields","class","per-page","sort-by","sort-desc","empty-text","empty-filtered-text","stacked","responsive","show-empty","tbody-tr-class"])]),_:3},8,["show"]),renderSlot(t.$slots,"footer",normalizeProps(guardReactiveProps({refresh:V,total:k.value,page:x.value,limit:s.limit,loading:g.value})),()=>[createVNode(U,{class:"mt-5 align-items-center justify-content-center justify-content-md-start","no-gutters":""},{default:withCtx(()=>[createVNode($,{cols:"12",md:"auto",class:"d-flex justify-content-center"},{default:withCtx(()=>[renderSlot(t.$slots,"pagination",normalizeProps(guardReactiveProps({refresh:V,total:k.value,page:x.value,limit:s.limit,loading:g.value})),()=>[k.value>s.limit?(openBlock(),createBlock(q,{key:0,modelValue:x.value,"onUpdate:modelValue":c[2]||(c[2]=b=>x.value=b),"total-rows":k.value,"per-page":s.limit,limit:s.pageLimit,class:"mb-md-0 me-md-3"},null,8,["modelValue","total-rows","per-page","limit"])):createCommentVNode("",!0)])]),_:3}),createVNode($,{cols:"12",md:"auto",class:"d-flex align-items-center justify-content-center gap-2"},{default:withCtx(()=>[renderSlot(t.$slots,"pagination-data",normalizeProps(guardReactiveProps({refresh:V,total:k.value,page:x.value,limit:s.limit,loading:g.value})),()=>[createVNode(_,{class:"border-0",onClick:c[3]||(c[3]=()=>V())},{default:withCtx(()=>[g.value?(openBlock(),createBlock(K,{key:0,small:!0})):(openBlock(),createElementBlock("i",_hoisted_3$3))]),_:1}),createTextVNode(" "+toDisplayString(unref(n)("components.records",{total:k.value},k.value)),1)])]),_:3})]),_:3})]),(openBlock(),createBlock(Suspense,null,{default:withCtx(()=>[renderSlot(t.$slots,"default")]),_:3})),renderSlot(t.$slots,"delete",normalizeProps(guardReactiveProps(f)),()=>[N.value?(openBlock(),createBlock(H,{key:0,title:s.deleteTitle,"on-ok":A,"ok-title":"actions.delete",onHidden:D},{default:withCtx(()=>[createVNode(M,{opacity:.5,show:y.value},{default:withCtx(()=>[createBaseVNode("div",{innerHTML:unref(n)(s.deleteText)},null,8,_hoisted_4$2)]),_:1},8,["show"])]),_:1},8,["title"])):createCommentVNode("",!0)])])}}}),url="mgr/forms",_sfc_main$8=defineComponent({__name:"index",setup(s){const d=useLexicon,m=ref(),i=computed(()=>[{route:{name:"index-create"},icon:"plus",title:d("actions.create")}]),e=computed(()=>[{key:"id",label:d("models.form.id"),sortable:!0},{key:"title",label:d("models.form.title"),sortable:!0},{key:"submissions_count",label:d("models.submission.title_many"),sortable:!0},{key:"emails_count",label:d("models.email.title_many"),sortable:!0}]),n=computed(()=>{var a;return[{route:{name:"index-id-edit"},icon:"edit",title:d("actions.edit")},{function:(a=m.value)==null?void 0:a.delete,icon:"times",title:d("actions.delete"),variant:"danger"}]}),o=ref({query:""});function l(a){if(a){const p=[];return a.active||p.push("inactive"),p}}return(a,p)=>{const r=resolveComponent("RouterView"),x=_sfc_main$9;return openBlock(),createBlock(x,{ref_key:"table",ref:m,url,"header-actions":unref(i),"table-actions":unref(n),fields:unref(e),filters:unref(o),"row-class":l,sort:"id",dir:"desc"},{default:withCtx(()=>[createVNode(r)]),_:1},8,["header-actions","table-actions","fields","filters"])}}}),_hoisted_1$4={class:"mmx-modal"},_hoisted_2$3=createBaseVNode("input",{type:"submit",class:"d-none"},null,-1),_sfc_main$7=defineComponent({__name:"modal",props:{...Ra.props,url:{type:String,default:""},modelValue:{type:Object,default(){return{}}},method:{type:String,default:"POST"},updateKey:{type:String,default:""},show:{type:Boolean,default:!0},okTitle:{type:String,default:"actions.submit"},cancelTitle:{type:String,default:"actions.cancel"},beforeSubmit:{type:Function,default(s){return s}},teleportDisabled:{type:Boolean,default:!0}},emits:["update:modelValue","after-submit"],setup(s,{expose:d,emit:m}){var E;const i=m,e=ref(),n=ref(),o=useRouter(),l=useRoute(),a=ref(!1),p=computed({get(){return r.modelValue},set(u){i("update:modelValue",u)}}),r=s,x=ref(!1),h=computed(()=>{const u={...useAttrs(),...r};return delete u.modelValue,delete u.show,delete u.url,delete u.method,delete u.beforeSubmit,u.onHidden||(u.onHidden=N),u.onShown||(u.onShown=y),u}),v=r.updateKey||((E=r.url)==null?void 0:E.split("/").join("-"));function g(){if(n.value&&n.value.$el){const u=n.value.$el.querySelector('[type="submit"]');u?u.click():u()}else k()}async function k(){if(r.url)try{const u=r.beforeSubmit(JSON.parse(JSON.stringify(p.value)));if(u)if(typeof u=="string")useToastError(u);else{a.value=!0;const C=r.method.toLowerCase(),S={put:usePut,patch:usePatch},L=await(C in S?S[C]:usePost)(r.url,u);i("after-submit",L),B(),f(v)}}catch{}finally{a.value=!1}}function B(){e.value.$emit("hide"),x.value=!1}function N(){const u=l.matched.findIndex(C=>C.name===l.name);u>0&&l.matched[u-1]?o.push({name:l.matched[u-1].name}):o.go(-1)}function y(){if(n.value&&n.value.$el){const u=n.value.$el.querySelector("input:not(:disabled)");u&&u.focus()}}function w(u){(u.metaKey||u.ctrlKey)&&u.code==="KeyS"&&(u.preventDefault(),g())}onMounted(()=>{r.show&&(x.value=!0)}),d({hide:B,submit:k,formSubmit:g});const f=inject("refreshTable")||function(u){};return(u,C)=>{const S=wn,O=ka,L=Bt;return openBlock(),createElementBlock("section",_hoisted_1$4,[createVNode(unref(Ra),mergeProps({ref_key:"modal",ref:e,modelValue:x.value,"onUpdate:modelValue":C[0]||(C[0]=D=>x.value=D)},h.value),createSlots({default:withCtx(()=>[createVNode(O,{opacity:.5,show:a.value},{default:withCtx(()=>[createVNode(S,{ref_key:"form",ref:n,onSubmit:withModifiers(k,["prevent"]),onKeydown:w},{default:withCtx(()=>[renderSlot(u.$slots,"form-fields",normalizeProps(guardReactiveProps({record:p.value,loading:a.value,hide:B,submit:k}))),_hoisted_2$3]),_:3},512)]),_:3},8,["show"])]),footer:withCtx(()=>[renderSlot(u.$slots,"footer",normalizeProps(guardReactiveProps({record:p.value,loading:a.value,hide:B,submit:k,formSubmit:g})),()=>[createVNode(L,{variant:r.cancelVariant,disabled:a.value,onClick:B},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(useLexicon)(s.cancelTitle)),1)]),_:1},8,["variant","disabled"]),s.url?(openBlock(),createBlock(L,{key:0,variant:r.okVariant,disabled:a.value,onClick:withModifiers(g,["prevent"])},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(useLexicon)(s.okTitle)),1)]),_:1},8,["variant","disabled"])):createCommentVNode("",!0)])]),_:2},[renderList(Object.keys(u.$slots),D=>({name:D,fn:withCtx(A=>[renderSlot(u.$slots,D,normalizeProps(guardReactiveProps({...A,record:p.value,loading:a.value,hide:B,submit:k,formSubmit:g})))])}))]),1040,["modelValue"])])}}}),_hoisted_1$3={class:"mmx-combo"},_hoisted_2$2=createBaseVNode("i",{class:"icon icon-caret-down fa-fw"},null,-1),_hoisted_3$2=["textContent"],_sfc_main$6=defineComponent({__name:"combo-box",props:{...Ou.props,modelValue:{type:[String,Number],default:""},url:{type:String,required:!0},valueField:{type:String,default:"id"},textField:{type:String,default:"title"},limit:{type:Number,default:10},sort:{type:String,default:null},dir:{type:String,default:"asc"},forceSelect:{type:Boolean,default:!1},emptyText:{type:String,default:"No results"},filterProps:{type:Object,default(){return{}}},formatValue:{type:Function,default:void 0},maxPages:{type:Number,default:5},onLoad:{type:Function,default(s){return s}},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","load","failure","change","select","reset","keydown"],setup(s,{expose:d,emit:m}){const i=m,e=s,n=ref(),o=ref([]),l=ref(""),a=ref(null),p=ref(!1),r=ref(""),x=ref(!1),h=ref(e.page||1),v=ref(0),g=ref(!1),k=computed({get(){return e.modelValue||null},set(t){i("update:modelValue",t)}}),B=computed(()=>({type:e.type,autofocus:e.autofocus,placeholder:e.placeholder,required:e.required,readonly:e.readonly,disabled:e.disabled}));watch(()=>e.filterProps,async t=>{const c=JSON.stringify(t);c!==r.value&&(r.value=c,e.lazy||(await y(""),k.value&&o.value.findIndex(_=>_[e.valueField]==k.value)===-1&&w()))}),watch(()=>e.lazy,t=>{t&&N()}),watch(k,t=>{e.skipWatchers||V(t)}),onMounted(()=>{r.value=JSON.stringify(e.filterProps),N()});async function N(){e.lazy||(await y(),k.value&&await V(k.value))}async function y(t=l.value){if(e.url&&!x.value){const c={...e.filterProps,query:t,limit:e.limit,sort:e.sort||e.textField,dir:e.dir,page:h.value,combo:!0};x.value=!0;try{const _=e.onLoad(await useGet(e.url,c));o.value=_.rows||[],v.value=_.total||0,i("load",o.value,v.value)}catch(_){i("failure",_)}finally{x.value=!1}}}function w(){h.value=1,k.value=null,l.value=""}function f(t){h.value=1;const c=o.value[t];if(c)return k.value=c[e.valueField],l.value=R(c),c}function E(t){t.stopPropagation(),S()?C():u()}function u(){p.value=!0,document.addEventListener("click",C,{once:!0})}function C(){p.value=!1,a.value=null}function S(){return p.value}async function O(t){t.length?(g.value=!0,k.value=null,await y(t),u(),g.value=!1):(w(),e.lazy||await y())}function L(t){i("change",t),t&&e.forceSelect&&!k.value&&o.value.length&&D(0)}function D(t,c){c&&n.value.$el.focus();const _=f(t);_&&_[e.valueField]!==k.value&&i("select",_)}function A(t){t.key==="ArrowDown"&&!S()&&o.value.length&&u(),t.key==="ArrowDown"&&(a.value===null||a.value<o.value.length-1)?a.value=a.value===null?0:a.value+1:a.value!==null&&t.key==="ArrowUp"&&(a.value=a.value===0?null:a.value-1),t.key==="Enter"&&(S()&&(t.stopPropagation(),t.preventDefault()),typeof a.value=="number"&&(D(a.value),C())),t.key==="Escape"&&S()&&(t.stopPropagation(),t.preventDefault(),C()),i("keydown",t)}async function V(t){if(!t)w();else{if(o.value.findIndex(_=>_[e.valueField]==t)===-1){const _={...e.filterProps,combo:!0};_[e.valueField]=t;const $=await useGet(e.url,_);$[e.valueField]==t&&o.value.push($)}const c=o.value.findIndex(_=>_[e.valueField]==t);c!==-1&&D(c)}}function R(t){return e.formatValue?e.formatValue(t):t[e.textField]}return watch(h,()=>{y(k.value?"":l.value)}),d({total:v,page:h,limit:e.limit,options:o,externalValue:l}),(t,c)=>{const _=Bt,$=md,z=ou,j=Ud,U=Wi;return openBlock(),createElementBlock("div",_hoisted_1$3,[createVNode($,null,{append:withCtx(()=>[renderSlot(t.$slots,"append",normalizeProps(guardReactiveProps({toggle:E,disabled:s.disabled,readonly:t.readonly,options:o.value})),()=>[createVNode(_,{disabled:!o.value.length||s.disabled||t.readonly,tabindex:"-1",onClick:withModifiers(E,["prevent"])},{default:withCtx(()=>[_hoisted_2$2]),_:1},8,["disabled"])])]),default:withCtx(()=>[createVNode(unref(Ou),mergeProps({ref_key:"input",ref:n,modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=F=>l.value=F)},B.value,{autocomplete:"off",onChange:L,onKeydown:A,"onUpdate:modelValue":O}),null,16,["modelValue"])]),_:3}),createBaseVNode("ul",{class:normalizeClass({"dropdown-menu mmx-combo-list":!0,show:p.value})},[o.value.length?(openBlock(),createElementBlock(Fragment,{key:1},[renderSlot(t.$slots,"list-header",normalizeProps(guardReactiveProps({hideDropdown:C,total:v.value}))),(openBlock(!0),createElementBlock(Fragment,null,renderList(o.value,(F,M)=>(openBlock(),createBlock(z,{key:F[s.valueField],class:normalizeClass({"mmx-combo-list-item":!0}),active:a.value===M,onClick:q=>D(M,q)},{default:withCtx(()=>[renderSlot(t.$slots,"default",normalizeProps(guardReactiveProps({item:F})),()=>[createTextVNode(toDisplayString(R(F)),1)])]),_:2},1032,["active","onClick"]))),128)),renderSlot(t.$slots,"list-footer",normalizeProps(guardReactiveProps({hideDropdown:C,total:v.value})),()=>[v.value>o.value.length?(openBlock(),createBlock(U,{key:0,class:"my-2",onClick:c[2]||(c[2]=F=>F.stopPropagation())},{default:withCtx(()=>[createVNode(j,{modelValue:h.value,"onUpdate:modelValue":c[1]||(c[1]=F=>h.value=F),"per-page":s.limit,limit:s.maxPages,"total-rows":v.value},null,8,["modelValue","per-page","limit","total-rows"])]),_:1})):createCommentVNode("",!0)])],64)):renderSlot(t.$slots,"no-results",normalizeProps(mergeProps({key:0},{hideDropdown:C,emptyText:s.emptyText})),()=>[createBaseVNode("li",{class:"alert alert-info m-0",onClick:C,textContent:toDisplayString(s.emptyText)},null,8,_hoisted_3$2)])],2)])}}}),_hoisted_1$2={key:0,class:"small text-secondary"},_sfc_main$5=defineComponent({__name:"form-action",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(s,{emit:d}){const m=s,i=useLexicon,e=d,n=ref(),o=ref(),l=ref(),a=ref(),p=["reset","message","redirect","snippet"];m.modelValue?(n.value=m.modelValue.type,n.value==="message"?l.value=m.modelValue.value:n.value==="redirect"?o.value=m.modelValue.value:a.value=m.modelValue.value):n.value="reset";function r(h){h?e("update:modelValue",{type:n,value:h}):e("update:modelValue",null)}function x(){e("update:modelValue",null)}return(h,v)=>{const g=po,k=Mu,B=Vu,N=Ma,y=Ou,w=_sfc_main$6;return openBlock(),createElementBlock("div",null,[createVNode(B,{label:unref(i)("models.form.action"),description:unref(i)("models.form.action_desc")},{default:withCtx(()=>[createVNode(k,{modelValue:unref(n),"onUpdate:modelValue":v[0]||(v[0]=f=>isRef(n)?n.value=f:null),onChange:x},{default:withCtx(()=>[(openBlock(),createElementBlock(Fragment,null,renderList(p,f=>createVNode(g,{key:f,value:f},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(i)("models.form.actions."+f)),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["label","description"]),unref(n)==="reset"?(openBlock(),createBlock(N,{key:0},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(i)("models.form.actions.reset_desc")),1)]),_:1})):unref(n)==="redirect"?(openBlock(),createBlock(B,{key:1,description:unref(i)("models.form.actions.redirect_desc")},{default:withCtx(()=>[createVNode(y,{modelValue:unref(o),"onUpdate:modelValue":[v[1]||(v[1]=f=>isRef(o)?o.value=f:null),r],autofocus:"",required:""},null,8,["modelValue"])]),_:1},8,["description"])):unref(n)==="message"?(openBlock(),createBlock(B,{key:2,description:unref(i)("models.form.actions.message_desc")},{default:withCtx(()=>[createVNode(unref(T),{modelValue:unref(l),"onUpdate:modelValue":v[2]||(v[2]=f=>isRef(l)?l.value=f:null),extensions:[unref(html)()],style:{height:"200px"},autofocus:"",required:"",onChange:r},null,8,["modelValue","extensions"])]),_:1},8,["description"])):unref(n)==="snippet"?(openBlock(),createBlock(B,{key:3,description:unref(i)("models.form.actions.snippet_desc")},{default:withCtx(()=>[createVNode(w,{modelValue:unref(a),"onUpdate:modelValue":[v[3]||(v[3]=f=>isRef(a)?a.value=f:null),r],url:"mgr/elements/snippets","text-field":"name",autofocus:"",required:""},{default:withCtx(({item:f})=>{var E;return[(E=f.category)!=null&&E.id?(openBlock(),createElementBlock("div",_hoisted_1$2,toDisplayString(f.category.category)+" /",1)):createCommentVNode("",!0),createTextVNode(" "+toDisplayString(f.name),1)]}),_:1},8,["modelValue"])]),_:1},8,["description"])):createCommentVNode("",!0)])}}}),_hoisted_1$1={key:0,class:"d-flex flex-column mb-2 gap-2"},_hoisted_2$1={class:"d-flex flex-column flex-md-row gap-1 gap-md-2"},_hoisted_3$1=createBaseVNode("i",{class:"icon icon-edit fa-fw"},null,-1),_hoisted_4$1=createBaseVNode("i",{class:"icon icon-times fa-fw"},null,-1),_hoisted_5={key:0,class:"small text-secondary"},_hoisted_6=["innerHTML"],_sfc_main$4=defineComponent({__name:"form-emails",props:{modelValue:{type:Array,required:!0}},emits:["update:modelValue"],setup(s,{emit:d}){const m=s,i=useLexicon,e=d,n=ref([]),o=ref(!1),l=ref({}),a=ref(),p=ref();m.modelValue&&m.modelValue.length>0&&(n.value=m.modelValue);const r=computed(()=>l.value&&Object.keys(l.value).length&&l.value.to&&(l.value.to.includes("@")||l.value.to.includes("[[+"))&&l.value.subject);function x(){l.value={to:"",subject:"",chunk:0,skip_files:!1,idx:null},o.value=!0}function h(y){l.value={...n.value[y],idx:y},o.value=!0}function v(){if(r.value){const{idx:y}=l.value;delete l.value.idx,y===null?n.value.push(l.value):n.value[y]=l.value,N()}}function g(y){n.value.splice(y,1)}function k(y){y.code==="Escape"?(y.stopPropagation(),y.preventDefault(),N()):y.code==="Enter"&&(y.stopPropagation(),y.preventDefault(),v())}function B(){p.value&&p.value.$el.focus()}function N(){a.value?a.value.hide():o.value=!0}return watch(n,y=>{y.length>0?e("update:modelValue",y):e("update:modelValue",null)},{deep:!0}),onMounted(()=>{n.value.length||x()}),(y,w)=>{const f=Ut,E=tc,u=Bt,C=Ou,S=Vu,O=_sfc_main$6,L=kn,D=vi,A=_sfc_main$7;return openBlock(),createElementBlock("div",null,[unref(n).length?(openBlock(),createElementBlock("div",_hoisted_1$1,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(n),(V,R)=>(openBlock(),createElementBlock("div",{key:R,class:"d-flex align-items-center"},[createVNode(E,{class:"w-100"},{default:withCtx(()=>[createVNode(f,{md:"4"},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(i)("models.form.emails.to"))+": "+toDisplayString(V.to),1)]),_:2},1024),createVNode(f,{md:"5"},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(i)("models.form.emails.subject"))+": "+toDisplayString(V.subject),1)]),_:2},1024),createVNode(f,{md:"3"},{default:withCtx(()=>[V.chunk?(openBlock(),createElementBlock(Fragment,{key:0},[createTextVNode(toDisplayString(unref(i)("models.form.emails.chunk"))+": #"+toDisplayString(V.chunk),1)],64)):createCommentVNode("",!0)]),_:2},1024)]),_:2},1024),createBaseVNode("div",_hoisted_2$1,[createVNode(u,{variant:"outline-secondary",size:"sm",onClick:()=>h(R)},{default:withCtx(()=>[_hoisted_3$1]),_:2},1032,["onClick"]),createVNode(u,{variant:"outline-danger",size:"sm",onClick:()=>g(R)},{default:withCtx(()=>[_hoisted_4$1]),_:2},1032,["onClick"])])]))),128))])):createCommentVNode("",!0),createVNode(u,{variant:"outline-secondary",size:"sm",onClick:x},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(i)("models.form.emails.add")),1)]),_:1}),unref(o)?(openBlock(),createBlock(A,{key:1,ref_key:"modal",ref:a,onKeydown:k,onShown:B,onHidden:w[4]||(w[4]=V=>o.value=!1)},{title:withCtx(()=>[createTextVNode(toDisplayString(unref(i)("models.form.emails.add")),1)]),footer:withCtx(({hide:V})=>[createVNode(u,{onClick:()=>V()},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(i)("actions.cancel")),1)]),_:2},1032,["onClick"]),createVNode(u,{variant:"primary",disabled:!unref(r),onClick:v},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(i)("actions.add")),1)]),_:1},8,["disabled"])]),default:withCtx(()=>[createVNode(S,{label:unref(i)("models.form.emails.to")},{default:withCtx(()=>[createVNode(C,{ref_key:"input",ref:p,modelValue:unref(l).to,"onUpdate:modelValue":w[0]||(w[0]=V=>unref(l).to=V),type:"email",autofocus:""},null,8,["modelValue"])]),_:1},8,["label"]),createVNode(S,{label:unref(i)("models.form.emails.subject")},{default:withCtx(()=>[createVNode(C,{modelValue:unref(l).subject,"onUpdate:modelValue":w[1]||(w[1]=V=>unref(l).subject=V)},null,8,["modelValue"])]),_:1},8,["label"]),createVNode(S,{label:unref(i)("models.form.emails.chunk")},{default:withCtx(()=>[createVNode(O,{modelValue:unref(l).chunk,"onUpdate:modelValue":w[2]||(w[2]=V=>unref(l).chunk=V),url:"mgr/elements/chunks","text-field":"name"},{default:withCtx(({item:V})=>{var R;return[(R=V.category)!=null&&R.id?(openBlock(),createElementBlock("div",_hoisted_5,toDisplayString(V.category.category)+" /",1)):createCommentVNode("",!0),createTextVNode(" "+toDisplayString(V.name),1)]}),_:1},8,["modelValue"])]),_:1},8,["label"]),createVNode(S,null,{default:withCtx(()=>[createVNode(L,{modelValue:unref(l).skip_files,"onUpdate:modelValue":w[3]||(w[3]=V=>unref(l).skip_files=V)},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(i)("models.form.emails.skip_files")),1)]),_:1},8,["modelValue"])]),_:1}),createVNode(D,{"model-value":!0,variant:"light"},{default:withCtx(()=>[createBaseVNode("div",{innerHTML:unref(i)("models.form.emails.desc")},null,8,_hoisted_6)]),_:1})]),_:1},512)):createCommentVNode("",!0)])}}});function useCheckSchema(values){try{const obj=eval("("+values.schema+")");if(obj)return obj}catch(s){return!1}}const _sfc_main$3=defineComponent({__name:"vueform",props:{modelValue:{type:Object,default:()=>{}},schema:{type:String,required:!0},disabled:{type:Boolean,default:!1},disabledFields:{type:Boolean,default:!1},sync:{type:Boolean,default:!1}},setup(s){const d=s,m=computed(()=>{const n={...d};delete n.disabledFields;const o=useCheckSchema({schema:d.schema});if(o)if("schema"in o){const l=e(o.schema);return{...o,...n,schema:l}}else{const l=e(o);return{...n,schema:l}}return{...n,schema:{}}}),i=getApiUrl();function e(n){const o={};for(const l in n)if(typeof n[l]=="object"){const a=n[l];"type"in a&&(d.disabledFields&&(a.disabled=!0),["file","multifile"].includes(a.type)&&(a.url=i+"mgr/file/",a.previewUrl=i+"mgr/image/")),o[l]="schema"in a?{...a,schema:e(a.schema)}:{...a}}return o}return(n,o)=>{const l=resolveComponent("Vueform",!0);return openBlock(),createBlock(l,normalizeProps(guardReactiveProps(unref(m))),null,16)}}}),_hoisted_1={class:"form-control p-0 overflow-hidden"},_hoisted_2={class:"vueform-app bg-light p-3 border rounded"},_hoisted_3=["innerHTML"],_hoisted_4={key:0,class:"small text-secondary"},_sfc_main$2=defineComponent({__name:"form",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(s,{expose:d,emit:m}){const i=s,e=useLexicon,n=m,o=computed({get(){return i.modelValue},set(p){n("update:modelValue",p)}}),l=computed(()=>!!useCheckSchema(o.value));function a(p){return useCheckSchema(p)?p:useLexicon("errors.form.schema")}return d({verify:a}),(p,r)=>{const x=Ou,h=Vu,v=kn,g=mc,k=_sfc_main$3,B=yc,N=_sfc_main$6,y=_sfc_main$4,w=_sfc_main$5;return openBlock(),createElementBlock("div",null,[createVNode(h,{label:unref(e)("models.form.title")},{default:withCtx(()=>[createVNode(x,{modelValue:unref(o).title,"onUpdate:modelValue":r[0]||(r[0]=f=>unref(o).title=f),required:""},null,8,["modelValue"])]),_:1},8,["label"]),createVNode(h,null,{default:withCtx(()=>[createVNode(v,{modelValue:unref(o).active,"onUpdate:modelValue":r[1]||(r[1]=f=>unref(o).active=f)},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(e)("models.form.active")),1)]),_:1},8,["modelValue"])]),_:1}),createVNode(B,{"content-class":"pt-2 mb-3"},{default:withCtx(()=>[createVNode(g,{title:unref(e)("models.form.schema")},{default:withCtx(()=>[createBaseVNode("div",_hoisted_1,[createVNode(unref(T),{modelValue:unref(o).schema,"onUpdate:modelValue":r[2]||(r[2]=f=>unref(o).schema=f),extensions:[unref(javascript)()],style:{height:"400px"}},null,8,["modelValue","extensions"])])]),_:1},8,["title"]),createVNode(g,{title:unref(e)("models.form.preview"),disabled:!unref(l),lazy:""},{default:withCtx(()=>[createBaseVNode("div",_hoisted_2,[createVNode(k,{schema:unref(o).schema,disabled:""},null,8,["schema"])])]),_:1},8,["title","disabled"]),createVNode(g,{title:unref(e)("models.form.help")},{default:withCtx(()=>[createBaseVNode("div",{class:"bg-light p-3 border rounded",innerHTML:unref(e)("models.form.help_text")},null,8,_hoisted_3)]),_:1},8,["title"])]),_:1}),createVNode(h,{label:unref(e)("models.form.prepare_snippet"),description:unref(e)("models.form.prepare_snippet_desc")},{default:withCtx(()=>[createVNode(N,{modelValue:unref(o).prepare_id,"onUpdate:modelValue":r[3]||(r[3]=f=>unref(o).prepare_id=f),url:"mgr/elements/snippets","text-field":"name"},{default:withCtx(({item:f})=>{var E;return[(E=f.category)!=null&&E.id?(openBlock(),createElementBlock("div",_hoisted_4,toDisplayString(f.category.category)+" /",1)):createCommentVNode("",!0),createTextVNode(" "+toDisplayString(f.name),1)]}),_:1},8,["modelValue"])]),_:1},8,["label","description"]),createVNode(h,null,{default:withCtx(()=>[createVNode(v,{modelValue:unref(o).email,"onUpdate:modelValue":r[4]||(r[4]=f=>unref(o).email=f)},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(e)("models.form.email")),1)]),_:1},8,["modelValue"]),unref(o).email?(openBlock(),createBlock(y,{key:0,modelValue:unref(o).emails,"onUpdate:modelValue":r[5]||(r[5]=f=>unref(o).emails=f),class:"p-2 bg-light rounded"},null,8,["modelValue"])):createCommentVNode("",!0)]),_:1}),createVNode(w,{modelValue:unref(o).action,"onUpdate:modelValue":r[6]||(r[6]=f=>unref(o).action=f)},null,8,["modelValue"])])}}}),_sfc_main$1=defineComponent({__name:"create",setup(s){const d=ref(),m=ref({title:"",schema:"",active:!0,prepare_id:null,emails:null,action:null}),i={url:"mgr/forms",beforeSubmit(e){var n;return(n=d.value)==null?void 0:n.verify(e)},title:useLexicon("models.form.title_one"),method:"put",size:"lg"};return(e,n)=>{const o=_sfc_main$2,l=_sfc_main$7;return openBlock(),createBlock(l,mergeProps({modelValue:unref(m),"onUpdate:modelValue":n[1]||(n[1]=a=>isRef(m)?m.value=a:null)},i),{"form-fields":withCtx(()=>[createVNode(o,{ref_key:"form",ref:d,modelValue:unref(m),"onUpdate:modelValue":n[0]||(n[0]=a=>isRef(m)?m.value=a:null)},null,8,["modelValue"])]),_:1},16,["modelValue"])}}});function useError(s){const d=useRouter();d&&d.push(s||"/")}const _sfc_main=defineComponent({__name:"edit",async setup(s){let d,m;const i=ref({}),e=ref(),n={url:"mgr/forms/"+useRoute().params.id,beforeSubmit(o){var l;return(l=e.value)==null?void 0:l.verify(o)},title:useLexicon("models.form.title_one"),updateKey:"mgr-forms",method:"patch",size:"lg"};try{i.value=([d,m]=withAsyncContext(()=>useGet(n.url)),d=await d,m(),d)}catch{useError()}return(o,l)=>{const a=_sfc_main$2,p=_sfc_main$7;return openBlock(),createBlock(p,mergeProps({modelValue:unref(i),"onUpdate:modelValue":l[1]||(l[1]=r=>isRef(i)?i.value=r:null)},n),{"form-fields":withCtx(()=>[createVNode(a,{ref_key:"form",ref:e,modelValue:unref(i),"onUpdate:modelValue":l[0]||(l[0]=r=>isRef(i)?i.value=r:null)},null,8,["modelValue"])]),_:1},16,["modelValue"])}}}),__pages_import_0__=()=>__vitePreload(()=>import("./submissions-Djb3w1ox.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])),__pages_import_1__=()=>__vitePreload(()=>import("./view-BsLZ9ARZ.js"),__vite__mapDeps([21,13,5,1,2,3,4,6,7,8,9,10,11,14,15,16,17,18,19,20])),__pages_import_5__=()=>__vitePreload(()=>import("./emails-C6MdGd5i.js"),__vite__mapDeps([22,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])),__pages_import_6__=()=>__vitePreload(()=>import("./view-DqUkcLEG.js"),__vite__mapDeps([23,14,5,13,1,2,3,4,6,7,8,9,10,11,15,16,17,18,19,20])),routes=[{name:"submissions",path:"/submissions",component:__pages_import_0__,children:[{name:"submissions-id-view",path:":id/view",component:__pages_import_1__,props:!0}],props:!0},{name:"index",path:"/",component:_sfc_main$8,children:[{name:"index-create",path:"create",component:_sfc_main$1,props:!0},{name:"index-id-edit",path:":id/edit",component:_sfc_main,props:!0}],props:!0},{name:"emails",path:"/emails",component:__pages_import_5__,children:[{name:"emails-id-view",path:":id/view",component:__pages_import_6__,props:!0}],props:!0}],router=createRouter({history:createWebHashHistory(),routes});document.addEventListener("DOMContentLoaded",()=>{createApp(App).use(router).use(_c()).use(src_default,toastOptions).use(vueform,vueFormConfig).mount("#mmx-forms-root")});export{_sfc_main$a as _,_sfc_main$9 as a,_sfc_main$3 as b,_sfc_main$7 as c,useError as u};
