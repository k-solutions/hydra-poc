"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,k=p["".concat(d,".").concat(u)]||p[u]||c[u]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_label:"End-to-End Benchmarks",sidebar_position:4},o="End-To-End Benchmark Results",i={unversionedId:"end-to-end-benchmarks",id:"end-to-end-benchmarks",title:"End-To-End Benchmark Results",description:"This page is intended to collect the latest end-to-end benchmarks  results produced by Hydra's Continuous Integration system from  the latest master code.",source:"@site/benchmarks/end-to-end-benchmarks.md",sourceDirName:".",slug:"/end-to-end-benchmarks",permalink:"/head-protocol/unstable/benchmarks/end-to-end-benchmarks",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"End-to-End Benchmarks",sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Transactions Costs",permalink:"/head-protocol/unstable/benchmarks/transaction-cost"},next:{title:"Profiling Hydra scripts",permalink:"/head-protocol/unstable/benchmarks/profiling"}},d={},m=[{value:"Baseline Scenario",id:"baseline-scenario",level:2},{value:"Baseline Scenario",id:"baseline-scenario-1",level:2}],s={toc:m},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"end-to-end-benchmark-results"},"End-To-End Benchmark Results"),(0,r.kt)("p",null,"This page is intended to collect the latest end-to-end benchmarks  results produced by Hydra's Continuous Integration system from  the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," code."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please take those results with a grain of  salt as they are currently produced from very limited cloud VMs and not controlled  hardware. Instead of focusing on the ",(0,r.kt)("em",{parentName:"p"},"absolute")," results, the emphasis  should be on relative results, eg. how the timings for a scenario  evolve as the code changes.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Generated at"),"  2023-12-19 04:10:25.929788685 UTC"),(0,r.kt)("h2",{id:"baseline-scenario"},"Baseline Scenario"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number of nodes"),(0,r.kt)("th",{parentName:"tr",align:null},"3"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Number of txs")),(0,r.kt)("td",{parentName:"tr",align:null},"9000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Avg. Confirmation Time (ms)")),(0,r.kt)("td",{parentName:"tr",align:null},"22.805959011")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"P99")),(0,r.kt)("td",{parentName:"tr",align:null},"114.18943839ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"P95")),(0,r.kt)("td",{parentName:"tr",align:null},"31.423876449999984ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"P50")),(0,r.kt)("td",{parentName:"tr",align:null},"19.9773445ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Number of Invalid txs")),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("h2",{id:"baseline-scenario-1"},"Baseline Scenario"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number of nodes"),(0,r.kt)("th",{parentName:"tr",align:null},"1"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Number of txs")),(0,r.kt)("td",{parentName:"tr",align:null},"3000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Avg. Confirmation Time (ms)")),(0,r.kt)("td",{parentName:"tr",align:null},"3.802035306")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"P99")),(0,r.kt)("td",{parentName:"tr",align:null},"5.11679983999999ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"P95")),(0,r.kt)("td",{parentName:"tr",align:null},"4.41730695ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"P50")),(0,r.kt)("td",{parentName:"tr",align:null},"3.7200819999999997ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Number of Invalid txs")),(0,r.kt)("td",{parentName:"tr",align:null},"0")))))}c.isMDXComponent=!0}}]);