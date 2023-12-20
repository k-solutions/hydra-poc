"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[2602],{3905:(t,e,r)=>{r.d(e,{Zo:()=>g,kt:()=>h});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),m=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},g=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,g=o(t,["components","mdxType","originalType","parentName"]),d=m(r),k=n,h=d["".concat(p,".").concat(k)]||d[k]||c[k]||i;return r?a.createElement(h,l(l({ref:e},g),{},{components:r})):a.createElement(h,l({ref:e},g))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:n,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},59741:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_label:"Plutus Merkle-Tree Benchmarks",sidebar_position:3},l="Plutus Merkle-Tree Contract",o={unversionedId:"mt-benchmarks",id:"mt-benchmarks",title:"Plutus Merkle-Tree Contract",description:"Cost of on-chain Merkle-Tree",source:"@site/benchmarks/mt-benchmarks.md",sourceDirName:".",slug:"/mt-benchmarks",permalink:"/head-protocol/fr/benchmarks/mt-benchmarks",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Plutus Merkle-Tree Benchmarks",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Benchmarks",permalink:"/head-protocol/fr/benchmarks/"},next:{title:"Transactions Costs",permalink:"/head-protocol/fr/benchmarks/transaction-cost"}},p={},m=[{value:"Cost of on-chain Merkle-Tree",id:"cost-of-on-chain-merkle-tree",level:2}],g={toc:m},d="wrapper";function c(t){let{components:e,...r}=t;return(0,n.kt)(d,(0,a.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"plutus-merkle-tree-contract"},"Plutus Merkle-Tree Contract"),(0,n.kt)("h2",{id:"cost-of-on-chain-merkle-tree"},"Cost of on-chain Merkle-Tree"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% member max mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% member max cpu"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% builder max mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% builder max cpu"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.49"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.60"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.14")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.61"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.16"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.17"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.44")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.78"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.25"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.66"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.82")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.90"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.32"),(0,n.kt)("td",{parentName:"tr",align:"right"},"23.71"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12.33")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"20"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.02"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.38"),(0,n.kt)("td",{parentName:"tr",align:"right"},"88.31"),(0,n.kt)("td",{parentName:"tr",align:"right"},"46.54")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"50"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.18"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.46"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"100"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.30"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.52"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.56"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.67"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1000"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.68"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.73"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10000"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4.09"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.94"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00")))))}c.isMDXComponent=!0}}]);