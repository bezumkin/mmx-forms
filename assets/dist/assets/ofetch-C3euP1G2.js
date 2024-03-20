import{d as g}from"./destr-CVtkxrq9.js";import{w as T,a as q}from"./ufo-DbHr4xTX.js";class E extends Error{constructor(r,n){super(r,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function S(o){var c,a,e,u,f;const r=((c=o.error)==null?void 0:c.message)||((a=o.error)==null?void 0:a.toString())||"",n=((e=o.request)==null?void 0:e.method)||((u=o.options)==null?void 0:u.method)||"GET",i=((f=o.request)==null?void 0:f.url)||String(o.request)||"/",h=`[${n}] ${JSON.stringify(i)}`,p=o.response?`${o.response.status} ${o.response.statusText}`:"<no response>",y=`${h}: ${p}${r?` ${r}`:""}`,s=new E(y,o.error?{cause:o.error}:void 0);for(const t of["request","options","response"])Object.defineProperty(s,t,{get(){return o[t]}});for(const[t,d]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(s,t,{get(){return o.response&&o.response[d]}});return s}const R=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function m(o="GET"){return R.has(o.toUpperCase())}function j(o){if(o===void 0)return!1;const r=typeof o;return r==="string"||r==="number"||r==="boolean"||r===null?!0:r!=="object"?!1:Array.isArray(o)?!0:o.buffer?!1:o.constructor&&o.constructor.name==="Object"||typeof o.toJSON=="function"}const $=new Set(["image/svg","application/xml","application/xhtml","application/html"]),A=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function C(o=""){if(!o)return"json";const r=o.split(";").shift()||"";return A.test(r)?"json":$.has(r)||r.startsWith("text/")?"text":"blob"}function O(o,r,n=globalThis.Headers){const i={...r,...o};if(r!=null&&r.params&&(o!=null&&o.params)&&(i.params={...r==null?void 0:r.params,...o==null?void 0:o.params}),r!=null&&r.query&&(o!=null&&o.query)&&(i.query={...r==null?void 0:r.query,...o==null?void 0:o.query}),r!=null&&r.headers&&(o!=null&&o.headers)){i.headers=new n((r==null?void 0:r.headers)||{});for(const[h,p]of new n((o==null?void 0:o.headers)||{}))i.headers.set(h,p)}return i}const P=new Set([408,409,425,429,500,502,503,504]),k=new Set([101,204,205,304]);function l(o={}){const{fetch:r=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:i=globalThis.AbortController}=o;async function h(s){const c=s.error&&s.error.name==="AbortError"&&!s.options.timeout||!1;if(s.options.retry!==!1&&!c){let e;typeof s.options.retry=="number"?e=s.options.retry:e=m(s.options.method)?0:1;const u=s.response&&s.response.status||500;if(e>0&&(Array.isArray(s.options.retryStatusCodes)?s.options.retryStatusCodes.includes(u):P.has(u))){const f=s.options.retryDelay||0;return f>0&&await new Promise(t=>setTimeout(t,f)),p(s.request,{...s.options,retry:e-1,timeout:s.options.timeout})}}const a=S(s);throw Error.captureStackTrace&&Error.captureStackTrace(a,p),a}const p=async function(c,a={}){var f;const e={request:c,options:O(a,o.defaults,n),response:void 0,error:void 0};if(e.options.method=(f=e.options.method)==null?void 0:f.toUpperCase(),e.options.onRequest&&await e.options.onRequest(e),typeof e.request=="string"&&(e.options.baseURL&&(e.request=T(e.request,e.options.baseURL)),(e.options.query||e.options.params)&&(e.request=q(e.request,{...e.options.params,...e.options.query}))),e.options.body&&m(e.options.method)&&(j(e.options.body)?(e.options.body=typeof e.options.body=="string"?e.options.body:JSON.stringify(e.options.body),e.options.headers=new n(e.options.headers||{}),e.options.headers.has("content-type")||e.options.headers.set("content-type","application/json"),e.options.headers.has("accept")||e.options.headers.set("accept","application/json")):("pipeTo"in e.options.body&&typeof e.options.body.pipeTo=="function"||typeof e.options.body.pipe=="function")&&("duplex"in e.options||(e.options.duplex="half"))),!e.options.signal&&e.options.timeout){const t=new i;setTimeout(()=>t.abort(),e.options.timeout),e.options.signal=t.signal}try{e.response=await r(e.request,e.options)}catch(t){return e.error=t,e.options.onRequestError&&await e.options.onRequestError(e),await h(e)}if(e.response.body&&!k.has(e.response.status)&&e.options.method!=="HEAD"){const t=(e.options.parseResponse?"json":e.options.responseType)||C(e.response.headers.get("content-type")||"");switch(t){case"json":{const d=await e.response.text(),w=e.options.parseResponse||g;e.response._data=w(d);break}case"stream":{e.response._data=e.response.body;break}default:e.response._data=await e.response[t]()}}return e.options.onResponse&&await e.options.onResponse(e),!e.options.ignoreResponseError&&e.response.status>=400&&e.response.status<600?(e.options.onResponseError&&await e.options.onResponseError(e),await h(e)):e.response},y=async function(c,a){return(await p(c,a))._data};return y.raw=p,y.native=(...s)=>r(...s),y.create=(s={})=>l({...o,defaults:{...o.defaults,...s}}),y}const b=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),F=b.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),H=b.Headers,_=b.AbortController,U=l({fetch:F,Headers:H,AbortController:_});export{U as o};
