import{f as L,E as R,g as B,p as $,n as E,aj as M,d2 as x,ag as S,s as T,ai as j,h,b4 as D,bf as v,z as H,o as a,d as I,e as i,t as z,j as e,i as p,c as d,N as F,b9 as N,m,aV as w,x as V}from"./index.7e20fffb.js";import{u as K,a as O}from"./utils.5e8ef37f.js";import{s as P,h as W,c as A}from"./json.30c9622c.js";import{b as J,a as X,u as q}from"./lens-actions.82992768.js";import{K as G}from"./network.ce4fca93.js";import"./date.aba80cd9.js";import"./check-circle.99f1528b.js";import"./importers.19cba38b.js";import"./___vite-browser-external_commonjs-proxy.cf31c2f2.js";import"./TaskOption.fcf0a375.js";import"./Tab.vue_vue_type_script_setup_true_lang.997898e6.js";import"./helpers.35dc254f.js";import"./rotate-ccw.92c858cd.js";import"./json.ef80408e.js";import"./EnvInput.vue_vue_type_script_setup_true_lang.bee38390.js";const Q={class:"flex flex-col flex-1"},U={class:"sticky z-10 flex items-center justify-between flex-shrink-0 pl-4 overflow-x-auto border-b bg-primary border-dividerLight top-lowerSecondaryStickyFold"},Y={class:"font-semibold truncate text-secondaryLight"},Z={class:"flex"},be=L({__name:"XMLLensRenderer",props:{response:null},setup(t){const u=t,s=R(),{responseBodyText:l}=J(u.response),_=B(()=>$(u.response,j(G("type",["fail","success"])),M(x(o=>o.headers,T(o=>o.key.toLowerCase()==="content-type"),S(x(o=>o.value,P(";"),W,A)))),E(()=>"text/plain"))),{downloadIcon:C,downloadResponse:f}=X(_.value,l),{copyIcon:g,copyResponse:y}=q(l),b=h(null),n=h(!0);return K(b,l,D({extendedEditorConfig:{mode:"application/xml",readOnly:!0,lineWrapping:n},linter:null,completer:null,environmentHighlights:!0})),v("response.file.download",()=>f()),v("response.copy",()=>y()),(o,k)=>{const r=V,c=H("tippy");return a(),I("div",Q,[i("div",U,[i("label",Y,z(e(s)("response.body")),1),i("div",Z,[t.response.body?p((a(),d(r,{key:0,title:e(s)("state.linewrap"),class:F({"!text-accent":n.value}),icon:e(O),onClick:k[0]||(k[0]=N(ee=>n.value=!n.value,["prevent"]))},null,8,["title","class","icon"])),[[c,{theme:"tooltip"}]]):m("",!0),t.response.body?p((a(),d(r,{key:1,title:`${e(s)("action.download_file")} <kbd>${e(w)()}</kbd><kbd>J</kbd>`,icon:e(C),onClick:e(f)},null,8,["title","icon","onClick"])),[[c,{theme:"tooltip",allowHTML:!0}]]):m("",!0),t.response.body?p((a(),d(r,{key:2,title:`${e(s)("action.copy")} <kbd>${e(w)()}</kbd><kbd>.</kbd>`,icon:e(g),onClick:e(y)},null,8,["title","icon","onClick"])),[[c,{theme:"tooltip",allowHTML:!0}]]):m("",!0)])]),i("div",{ref_key:"xmlResponse",ref:b,class:"flex flex-col flex-1"},null,512)])}}});export{be as default};
//# sourceMappingURL=XMLLensRenderer.a6b16af8.js.map
