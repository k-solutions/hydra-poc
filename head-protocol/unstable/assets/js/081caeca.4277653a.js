"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[7698],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,u=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(u,i(i({ref:t},h),{},{components:a})):n.createElement(u,i({ref:t},h))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},62555:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={},i="Handling Rollbacks",l={unversionedId:"rollbacks/index",id:"rollbacks/index",title:"Handling Rollbacks",description:"Rollbacks are an integral part of the behaviour of the Cardano chain: Any application built on top of Cardano and synchronizing its behaviour with the chain must be prepared to occasionally observe such rollbacks and Hydra is no exception.",source:"@site/core-concepts/rollbacks/index.md",sourceDirName:"rollbacks",slug:"/rollbacks/",permalink:"/head-protocol/unstable/core-concepts/rollbacks/",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/core-concepts/rollbacks/index.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"API Behavior",permalink:"/head-protocol/unstable/core-concepts/behavior"},next:{title:"Specification",permalink:"/head-protocol/unstable/core-concepts/specification"}},s={},c=[{value:"What are rollbacks really?",id:"what-are-rollbacks-really",level:2},{value:"How do they impact Hydra Node?",id:"how-do-they-impact-hydra-node",level:2},{value:"How do we handle them?",id:"how-do-we-handle-them",level:2}],h={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"handling-rollbacks"},"Handling Rollbacks"),(0,o.kt)("p",null,"Rollbacks are an integral part of the behaviour of the Cardano chain: Any application built on top of Cardano and synchronizing its behaviour with the chain must be prepared to occasionally observe such ",(0,o.kt)("em",{parentName:"p"},"rollbacks")," and Hydra is no exception."),(0,o.kt)("p",null,"This short document explains what rollbacks are and where they come from, and how Hydra Heads handle them."),(0,o.kt)("h2",{id:"what-are-rollbacks-really"},"What are rollbacks really?"),(0,o.kt)("p",null,"Rollbacks happen on the Cardano chain, or any other truly decentralised blockchain for that matter, because it is essentially  ",(0,o.kt)("em",{parentName:"p"},"asynchronous")," in nature, eg. each node has its own view of the state of chain which it updates by communicating with other nodes, exchanging messages about known blocks, and this process takes time. New blocks are produced, which may be valid or invalid, and the state of the chain is ",(0,o.kt)("em",{parentName:"p"},"eventually consistent"),", all nodes agreeing on the state of the chain only after some number of blocks have been processed."),(0,o.kt)("p",null,"Actually, ",(0,o.kt)("em",{parentName:"p"},"Rollbacks")," is a misnomer and we should rather talk about ",(0,o.kt)("em",{parentName:"p"},"forks"),". Let's see what this means from the perspective of three nodes running a Hydra Head. The following picture represents each node's view of the Layer 1 chain."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(33350).Z,width:"4939",height:"3239"})),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"immutable part")," is guaranteed to be identical on all nodes, being ",(0,o.kt)("inlineCode",{parentName:"p"},"k")," blocks in the past from current ",(0,o.kt)("em",{parentName:"p"},"tip")," (on the mainnet ",(0,o.kt)("inlineCode",{parentName:"p"},"k")," is 2160). Here, node 2 receives a new block that's identical node 1 but node 3 receives a different block. Eventually, as node 3's chain is shorter than the other's it will be superseded by a longer one hence ",(0,o.kt)("em",{parentName:"p"},"rolled back"),"."),(0,o.kt)("p",null,"What happens for the node's ",(0,o.kt)("em",{parentName:"p"},"Direct Chain")," observer is detailed in the following picture:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4273).Z,width:"4939",height:"3239"})),(0,o.kt)("p",null,"When new blocks are available, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChainSync")," client receives a ",(0,o.kt)("inlineCode",{parentName:"p"},"RollForward")," message with each new block. When a fork happens, it will first receive a ",(0,o.kt)("inlineCode",{parentName:"p"},"RollBackward")," message with a ",(0,o.kt)("em",{parentName:"p"},"point"),", which identifies the slot and block hash at which point the chain has been rolled back (abstracted as a single number in the figure), then resume receiving new blocks through ",(0,o.kt)("inlineCode",{parentName:"p"},"RollForward")," messages."),(0,o.kt)("h2",{id:"how-do-they-impact-hydra-node"},"How do they impact Hydra Node?"),(0,o.kt)("p",null,"Rollbacks are problematic because, when a transaction is observed on-chain, it potentially changes the state of the Head, first by ",(0,o.kt)("em",{parentName:"p"},"Initialising")," it, then collecting the ",(0,o.kt)("em",{parentName:"p"},"Commits"),", opening the head through the ",(0,o.kt)("em",{parentName:"p"},"CollectCom")," transaction and ultimately ",(0,o.kt)("em",{parentName:"p"},"Closing")," it and ",(0,o.kt)("em",{parentName:"p"},"Fanoutting")," the Head's final UTxO."),(0,o.kt)("p",null,"The following picture illustrates the issue of a rollback leading to potentially conflicting ",(0,o.kt)("inlineCode",{parentName:"p"},"Commit"),"  transactions:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(58666).Z,width:"4939",height:"3239"})),(0,o.kt)("p",null,"If the Head does not properly handle the rollback, then it risks being in an inconsistent state w.r.t other nodes taking part in the Head. It is thus important that a rollback observed at the level of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Direct")," chain component be propagated to the ",(0,o.kt)("inlineCode",{parentName:"p"},"HeadLogic")," in order for the latter to reset its state to be consistent with whatever happened on layer 1."),(0,o.kt)("p",null,"The consequences of a rollback on the Head's state are different depending at which point the Head is rolled back:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If the rollback happens before or after the Head is open, eg. before the ",(0,o.kt)("inlineCode",{parentName:"li"},"CollectCom")," transaction or after the ",(0,o.kt)("inlineCode",{parentName:"li"},"Close"),", then things are relatively straightforward: We can just reset the Head's state to the point it was before the rolled back transaction was observed,"),(0,o.kt)("li",{parentName:"ol"},"If it happens while the Head is open, eg. the ",(0,o.kt)("inlineCode",{parentName:"li"},"CollectCom")," transaction is rolled back, it's much more problematic because the node has already started exchanging messages with its peers and its state no longer depends only on the chain.")),(0,o.kt)("h2",{id:"how-do-we-handle-them"},"How do we handle them?"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udee0 Hydra currently handles rollback gracefully in simple cases, eg. case 1 above, and does not try to do anything clever when a ",(0,o.kt)("inlineCode",{parentName:"p"},"CollectCom")," happens which can lead easily to a Head becoming stale: Because one node is desynchronised from other nodes (it has observed a rollback of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Collectcom")," transaction, reset its state before that, thus lost track of everything that happened while the Head was open), it will be necessary to close the head.")),(0,o.kt)("p",null,"Rollbacks handling has been partially deactivated in hydra by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/master/docs/adr/2023-04-26_023-single-state.md"},"ADR-23"),". This section shall be updated with a more appropriate and detailed rollback handling with issue ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/185"},"#185"),"."))}d.isMDXComponent=!0},33350:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rollbacks-1-6f82628f5596e94e392e900079056ec0.jpg"},4273:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rollbacks-2-7ecc9b20cb887261db87180040fe79ba.jpg"},58666:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rollbacks-3-9b053577585720457d34d61f6243a5fe.jpg"}}]);