"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[9168],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),h=r,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},63709:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_label:"Managed Hydra Head",sidebar_position:3},i="Managed Hydra Head",s={unversionedId:"managed/index",id:"managed/index",title:"Managed Hydra Head",description:"This document is a work in progress",source:"@site/topologies/managed/index.mdx",sourceDirName:"managed",slug:"/managed/",permalink:"/head-protocol/ja/topologies/managed/",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/topologies/managed/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Managed Hydra Head",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"\u57fa\u672c\u7684\u306aHydra Head",permalink:"/head-protocol/ja/topologies/basic/"},next:{title:"\u30b9\u30bf\u30fc\u578b\u30d8\u30c3\u30c9\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",permalink:"/head-protocol/ja/topologies/star-shaped/"}},l={},d=[],p={toc:d},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"managed-hydra-head"},"Managed Hydra Head"),(0,r.kt)("p",null,"\ud83d\udee0\ufe0f This document is a work in progress"),(0,r.kt)("p",null,"This document describes the ",(0,r.kt)("em",{parentName:"p"},"Managed Hydra Head")," topology, which also could be paraphrased as ",(0,r.kt)("em",{parentName:"p"},"Hydra as a Service"),"."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:a(32740).Z,alt:"Managed Hydra Head",height:400})),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"../basic"},"basic")," hydra head setup requires each participant to host an instance of a ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-node"),". This is very similar to the normal operation of ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node"),'s on the cardano network. In contrast to such a "full node", there exist "light node" setups where users can access the blockchain via a hosted API - light wallets are one example of this.'),(0,r.kt)("p",null,"In this topology, clients will not be required to run ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-node"),"s themselves, but access to a ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-node")," would be provided by some ",(0,r.kt)("em",{parentName:"p"},"Service Provider"),". In fact, client applications like light wallets would not even need to know about the existence of individual ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-node")," instances, but more importantly the logical ",(0,r.kt)("em",{parentName:"p"},"Hydra Heads")," would be made available via an API."),(0,r.kt)("p",null,"The picture above shows three different Hydra Heads, two pairwise ones (yellow and green) and a multi-party Hydra Head (blue). Clients A, B and C access their Heads using the service provider, while client D is still self-hosted."),(0,r.kt)("p",null,"For this setup to be viable, it is important that the ",(0,r.kt)("em",{parentName:"p"},"Hydra keys")," remain on the client-side and the ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-node")," is mere infrastructure - it does not take custody of a users funds!"),(0,r.kt)("p",null,"As a consequence of this, the client needs to be online for any progress to happen in a Hydra Head. While this is a bit awkward in multi-party Hydra Heads - they stall if a lightweight, mobile client is not reacting for a time, it matches pretty well the ",(0,r.kt)("em",{parentName:"p"},"two-party Hydra Head")," setup. There, a transaction is only complete of both parties have been online to send/receive and hence acknowledged it."),(0,r.kt)("p",null,"An example use case for two-party Hydra Heads are plain old payment channels between two ",(0,r.kt)("a",{parentName:"p",href:"../../use-cases/payments/pay-per-use-api"},"machines")," or ",(0,r.kt)("a",{parentName:"p",href:"../../use-cases/payments/inter-wallet-payments"},"individuals")," (especially if multiple such channels are logically connected like in the Lighning network)."),(0,r.kt)("p",null,"While access to Hydra Heads is provided by the Service Provider, this does not centralize the system. A client could always close a head & recover funds with an alternative provider or even using a transaction created out-of-band (e.g. by the client application using another service to submit the transaction)."))}u.isMDXComponent=!0},32740:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/managed-hydra-head-2203fcc5a3e69632cdd273a1c1acef21.jpg"}}]);