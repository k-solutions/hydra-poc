"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[1099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={slug:10,title:"10. Use Direct Connection to `cardano-node`\n",authors:[],tags:["Accepted"]},i=void 0,l={permalink:"/head-protocol/ja/adr/10",source:"@site/adr/2021-10-23_010-use-direct-chain.md",title:"10. Use Direct Connection to `cardano-node`\n",description:"Status",date:"2021-10-23T00:00:00.000Z",formattedDate:"2021\u5e7410\u670823\u65e5",tags:[{label:"Accepted",permalink:"/head-protocol/ja/adr/tags/accepted"}],readingTime:1,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"10",title:"10. Use Direct Connection to `cardano-node`\n",authors:[],tags:["Accepted"]},prevItem:{title:"9. Simplify Logging\n",permalink:"/head-protocol/ja/adr/9"},nextItem:{title:"11. Use cardano-api\n",permalink:"/head-protocol/ja/adr/11"}},c={authorsImageUrls:[]},p=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,"Accepted"),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On-Chain Validation is a critical part of the Hydra protocol, it requires both the ability to ",(0,r.kt)("em",{parentName:"li"},"submit")," transactions to the ",(0,r.kt)("em",{parentName:"li"},"Layer 1")," chain advancing the state of a Head, and ",(0,r.kt)("em",{parentName:"li"},"observing")," those transactions as the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/plutus"},"Plutus")," contracts are validated"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/plutus-apps"},"Plutus Application Framework"),' is expected to provide the necessary machinery to allow "Smart Contracts" applications to interact with the chain but it\'s still under active development and not ready for deployment on-chain'),(0,r.kt)("li",{parentName:"ul"},'We want to gather feedback as early as possible and deliver a fully functional Hydra Head node for early adopters to test on a "real" chain (testnet)'),(0,r.kt)("li",{parentName:"ul"},"Our experiment connecting directly to a Cardano node has been conclusive. We can:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Connect to a node using local protocols,"),(0,r.kt)("li",{parentName:"ul"},"Build and submit Head transactions triggering smart contracts validation, and"),(0,r.kt)("li",{parentName:"ul"},"Observe transactions using chain-sync protocol.")))),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Therefore")),(0,r.kt)("p",null,"For the time being, until ",(0,r.kt)("em",{parentName:"p"},"Plutus Application Framework")," is released, we will implement on-chain interaction of Hydra nodes ",(0,r.kt)("em",{parentName:"p"},"directly"),", connecting to a Cardano node through a ",(0,r.kt)("em",{parentName:"p"},"local socket"),"."),(0,r.kt)("h2",{id:"consequences"},"Consequences"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Limit Hydra dependencies to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/plutus"},"plutus")," repository"),(0,r.kt)("li",{parentName:"ul"},"Remove all PAB-related code as well as off-chain ",(0,r.kt)("inlineCode",{parentName:"li"},"Contract"),"s code and related dependencies")))}d.isMDXComponent=!0}}]);