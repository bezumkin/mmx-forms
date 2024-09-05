import{d as defineComponent,z as ref,A as computed,g as resolveComponent,o as openBlock,b as createBlock,w as withCtx,u as unref,c as createElementBlock,m as mergeProps,ac as isRef,K as Transition,y as createApp}from"./vue-u_8eP0W0.js";import{v as vueform}from"./vueform-C51mNOCu.js";import{x,P,a as e,e as e$1,t}from"./api-BTbQaFYe.js";import{v as vueFormConfig}from"./common.config-H0rnQkZd.js";const _hoisted_1=["innerHTML"],_sfc_main=defineComponent({__name:"app",props:{id:{type:String,required:!0},schema:{type:Object,default(){return{}}},locale:{type:String,default:"en"}},setup(__props){const props=__props,record=ref({}),loading=ref(!1),form=ref(),formKey=ref(props.id),msgSuccess=x("success.form.submitted"),msgAction=ref(),properties=computed(()=>{const o={endpoint:!1,formKey:formKey.value,locale:props.locale,loading,onSubmit};return"schema"in props.schema?{...props.schema,...o}:{...o,schema:props.schema}});async function onSubmit(){loading.value=!0;try{const data=await P("web/forms/"+formKey.value,record.value);if(form.value.reset(),data.id&&(formKey.value=data.id),data.action)if(data.action.type==="message"&&data.action.value){const re=/<script>(.*?)<\/script>/gs,matches=re.exec(data.action.value);if(matches){msgAction.value=data.action.value.replace(matches[0],"");try{eval(matches[1])}catch(o){console.error(o)}}else msgAction.value=data.action.value}else data.action.type==="redirect"?window.location=data.action.value:data.action.type==="reset"&&data.action.value&&e(data.action.value);else msgSuccess.length>0&&e(msgSuccess)}catch(o){}finally{loading.value=!1}}return(o,a)=>{const s=resolveComponent("Vueform");return openBlock(),createBlock(Transition,{mode:"out-in",name:"fade"},{default:withCtx(()=>[unref(msgAction)?(openBlock(),createElementBlock("div",{key:0,innerHTML:unref(msgAction)},null,8,_hoisted_1)):(openBlock(),createBlock(s,mergeProps({key:1,ref_key:"form",ref:form,modelValue:unref(record),"onUpdate:modelValue":a[0]||(a[0]=r=>isRef(record)?record.value=r:null)},unref(properties)),null,16,["modelValue"]))]),_:1})}}});t("mmx-forms");document.addEventListener("DOMContentLoaded",()=>{const o=window.mmxForms.locale||"en";window.mmxForms.forms.forEach(a=>{createApp(_sfc_main,{id:a.id,schema:a.schema,locale:o}).use(vueform,vueFormConfig).use(e$1()).mount("#mmx-forms-"+a.id)})});
