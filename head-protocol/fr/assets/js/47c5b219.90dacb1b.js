"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[8946],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},22770:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},i="Lightning Network Payments",s={unversionedId:"payments/lighting-network-like-payments/index",id:"payments/lighting-network-like-payments/index",title:"Lightning Network Payments",description:"We are in the process of restructuring the payments category to create a more user-focused roadmap for various application scenarios.",source:"@site/use-cases/payments/lighting-network-like-payments/index.md",sourceDirName:"payments/lighting-network-like-payments",slug:"/payments/lighting-network-like-payments/",permalink:"/head-protocol/fr/use-cases/payments/lighting-network-like-payments/",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/use-cases/payments/lighting-network-like-payments/index.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Pay-per-use API",permalink:"/head-protocol/fr/use-cases/payments/pay-per-use-api/"},next:{title:"Poker Game",permalink:"/head-protocol/fr/use-cases/other/poker-game/"}},l={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lightning-network-payments"},"Lightning Network Payments"),(0,o.kt)("p",null,"We are in the process of restructuring the payments category to create a more user-focused roadmap for various application scenarios."),(0,o.kt)("p",null,"In this particular scenario, we aim to leverage the trust built within a large Staking Pool Operator (SPO) and its extensive user base. We propose the formation of a Multihead Hydra Network consisting of 6-8 nodes. This network will facilitate Lightning Network-style direct payment transactions, each secured by Hash Time Locked Contracts (HTLCs) to ensure successful user fund refunds in case of routing failures."),(0,o.kt)("p",null,"Furthermore, this cluster can connect to different Base Network Clusters on the edge nodes, creating a Directed Acyclic Graph (DAG). This foundation will serve as the basis for a Lightning-like network, offering improved efficiency compared to existing payment channel solutions. Users staking with the involved SPO will have access to direct payments through this foundation network."),(0,o.kt)("p",null,'To manage routing within this network, Oracle nodes will play a crucial role. They will explore the formed DAG and the pool of incoming payment requests (referred to as "Invoices" in the context of the Lightning Network, although this naming may be confusing). These Oracle nodes will compete to find the shortest paths within the DAG to process the payments efficiently.'),(0,o.kt)("p",null,"From a technical perspective, the network's base layer will resemble the network in the ",(0,o.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/topologies/delegated-head/"},"Delegated Head Network scenario"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pros:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Faster transaction speeds"),(0,o.kt)("li",{parentName:"ul"},"Lower transaction costs"),(0,o.kt)("li",{parentName:"ul"},"Reduced load on Layer 1 (L1) blockchain")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cons:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lack of trust and consensus on the L1"),(0,o.kt)("li",{parentName:"ul"},"Possibility of transaction reversal (if no available route is found)")))}m.isMDXComponent=!0}}]);