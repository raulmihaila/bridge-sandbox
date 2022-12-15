import{f as B,h as C,ad as F,g as y,o as i,d as c,e as d,N as u,F as K,l as L,a7 as T,p as v,ae as x,af as g,ag as N,ah as q,ai as z,aj as k,ak as A,al as w,am as R,z as I,i as S,k as O,c as P,b as U,t as $,m,an as W,_ as X,ao as G,X as H,ap as J,j as E,aq as Q,ar as Y,as as Z}from"./index.7e20fffb.js";var D=function(t){return function(a){return!t(a)}};const M={class:"flex flex-1"},ee=["aria-label","disabled","onKeyup","onClick"],ae={key:1},te={key:2,class:"tab-info"},le={key:3,class:"w-1 h-1 ml-2 rounded-full bg-accentLight"},se={class:"flex items-center justify-center"},ne=B({__name:"Tabs",props:{styles:{type:String,default:""},renderInactiveTabs:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},modelValue:{type:String,required:!0},contentStyles:{type:String,default:""}},emits:["update:modelValue"],setup(t,{emit:a}){const r=t,l=C([]),b=(e,o)=>{l.value=v(l.value,z(D(W(([n])=>n===e))),N(q([e,o])),x(()=>g(`Tab with duplicate ID created: '${e}'`)))},h=(e,o)=>{l.value=v(l.value,w(([n])=>n===e),k(n=>v(l.value,A(n,[e,o]))),x(()=>g(`Failed to update tab entry: ${e}`)))},_=e=>{l.value=v(l.value,w(([o])=>o===e),k(o=>v(l.value,R(o))),x(()=>g(`Failed to remove tab entry: ${e}`))),r.modelValue===e&&l.value.length>0&&f(l.value[0][0])};F("tabs-system",{renderInactive:y(()=>r.renderInactiveTabs),activeTabID:y(()=>r.modelValue),addTabEntry:b,updateTabEntry:h,removeTabEntry:_});const f=e=>{a("update:modelValue",e)};return(e,o)=>{const n=I("tippy");return i(),c("div",{class:u(["flex flex-1 h-full flex-nowrap",{"flex-col h-auto":!t.vertical}])},[d("div",{class:u(["relative tabs border-dividerLight",[t.vertical?"border-r":"border-b",t.styles]])},[d("div",M,[d("div",{class:u(["flex justify-between flex-1",{"flex-col":t.vertical}])},[d("div",{class:u(["flex",{"flex-col space-y-2 p-2":t.vertical}])},[(i(!0),c(K,null,L(l.value,([p,s],V)=>S((i(),c("button",{key:`tab-${V}`,class:u(["tab",[{active:t.modelValue===p},{vertical:t.vertical},{"opacity-75 !cursor-not-allowed":s.disabled}]]),"aria-label":s.label||"",disabled:s.disabled,role:"button",onKeyup:O(j=>f(p),["enter"]),onClick:j=>f(p)},[s.icon?(i(),P(U(s.icon),{key:0,class:"svg-icons"})):s.label?(i(),c("span",ae,$(s.label),1)):m("",!0),s.info&&s.info!=="null"?(i(),c("span",te,$(s.info),1)):m("",!0),s.indicator?(i(),c("span",le)):m("",!0)],42,ee)),[[n,{theme:"tooltip",placement:"left",content:t.vertical?s.label:null}]])),128))],2),d("div",se,[T(e.$slots,"actions",{},void 0,!0)])],2)])],2),d("div",{class:u(["w-full h-full contents",[{"!flex flex-col flex-1 overflow-y-auto":t.vertical},t.contentStyles]])},[T(e.$slots,"default",{},void 0,!0)],2)],2)}}});const ce=X(ne,[["__scopeId","data-v-7d501cdc"]]),oe={key:0,class:"flex flex-col flex-1"},re=B({__name:"Tab",props:{id:null,label:null,icon:{default:null},info:{default:null},indicator:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(t){const a=t,r=y(()=>({icon:a.icon&&typeof a.icon=="object"?Y(a.icon):a.icon,indicator:a.indicator,info:a.info,label:a.label,disabled:a.disabled})),{activeTabID:l,renderInactive:b,addTabEntry:h,updateTabEntry:_,removeTabEntry:f}=Z("tabs-system"),e=y(()=>l.value===a.id),o=y(()=>b.value?!0:e.value);return G(()=>{h(a.id,r.value)}),H(r,n=>{_(a.id,n)}),J(()=>{f(a.id)}),(n,p)=>E(o)?S((i(),c("div",oe,[T(n.$slots,"default")],512)),[[Q,E(e)]]):m("",!0)}});export{ce as _,re as a,D as n};
//# sourceMappingURL=Tab.vue_vue_type_script_setup_true_lang.997898e6.js.map
