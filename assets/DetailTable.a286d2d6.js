import{d as b,o as t,c as a,a as n,n as x,u as h,w as g,v as y,b as m,t as i,F as u,r as d}from"./index.90163d13.js";const p=["xlink:href"],S={__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:"w-6 h-6"},color:{type:String,default:"text-hint"},disable:{type:Boolean,default:!1},disableColor:{type:String,default:"text-load"},iconClass:{type:String,default:""}},setup(e){const r=e,o=b(()=>r.disable?r.disableColor:r.color);return(l,s)=>(t(),a("svg",{class:x([e.iconClass,e.size,h(o)])},[n("use",{"xlink:href":`#icon-${e.name}`},null,8,p)],2))}},v={class:"text-base"},D={__name:"BaseBtn",props:{height:{type:String,default:"h-10"},color:{type:String,default:"text-white"},rounded:{type:String,default:"rounded-full"},size:{type:String,default:"default"},label:{type:String,default:""},beforeIcon:{type:String,default:""},afterIcon:{type:String,default:""},type:{type:String,default:"primary"}},setup(e){const r=e,o=b(()=>({large:"px-6",default:"px-5",small:"px-3"})[r.size]),l=b(()=>({primary:"bg-teal-600 hover:bg-teal-800",secondary:"bg-sky-600 hover:bg-sky-800",error:"bg-rose-600 hover:bg-rose-800",default:"text-black hover:bg-neutral-400 hover:text-white",disable:"bg-neutral-400 text-neutral-700 pointer-events-none"})[r.type]);return(s,f)=>{const c=S;return t(),a("button",{class:x(["flex items-center",[e.height,h(o),h(l),e.rounded,e.color]])},[g(m(c,{size:"w-5 h-5",name:e.beforeIcon,class:"mr-2"},null,8,["name"]),[[y,e.beforeIcon]]),n("p",v,i(e.label),1),g(m(c,{size:"w-5 h-5",name:e.afterIcon,class:"ml-2"},null,8,["name"]),[[y,e.afterIcon]])],2)}}},k={class:"mt-10"},w={class:"text-3xl text-neutral-500"},I={class:"text-center"},z={class:"text-base"},_={__name:"DetailTable",props:{tableData:{type:Object,required:!0}},setup(e){return(r,o)=>(t(),a("div",k,[n("h1",w,i(e.tableData.title),1),n("table",I,[n("thead",null,[n("tr",null,[(t(!0),a(u,null,d(e.tableData.theadArr,(l,s)=>(t(),a("th",{key:s,class:"p-4 border-b border-solid border-neutral-300"},i(l),1))),128))])]),n("tbody",z,[(t(!0),a(u,null,d(e.tableData.list,(l,s)=>(t(),a("tr",{key:s},[(t(!0),a(u,null,d(l.item,(f,c)=>(t(),a("td",{key:c,class:"px-4 py-3 border-b border-solid border-neutral-300"},i(f),1))),128))]))),128))])])]))}};export{_,S as a,D as b};