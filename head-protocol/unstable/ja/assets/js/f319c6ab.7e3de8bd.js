"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[8379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},40847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i="Known issues & limitations",s={unversionedId:"known-issues",id:"known-issues",title:"Known issues & limitations",description:"Please be aware of the following limitations before running hydra-node",source:"@site/docs/known-issues.md",sourceDirName:".",slug:"/known-issues",permalink:"/head-protocol/unstable/ja/docs/known-issues",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/docs/known-issues.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Haskell\u30d1\u30c3\u30b1\u30fc\u30b8",permalink:"/head-protocol/unstable/ja/docs/haskell_packages"}},l={},c=[{value:"Head protocol",id:"head-protocol",level:3},{value:"Layer-1/Layer-2",id:"layer-1layer-2",level:4},{value:"Networking",id:"networking",level:4},{value:"Authentication &amp; Authorization",id:"authentication--authorization",level:5},{value:"Fault tolerance",id:"fault-tolerance",level:5},{value:"hydra-node",id:"hydra-node",level:3},{value:"hydra-tui",id:"hydra-tui",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"known-issues--limitations"},"Known issues & limitations"),(0,r.kt)("p",null,"Please be aware of the following limitations before running hydra-node\non the Cardano ",(0,r.kt)("inlineCode",{parentName:"p"},"--mainnet"),"; as an incredibly technical project, Hydra\nin its current form requires an elevated level of understanding of the\nunderlying infrastructure. Without the expertise required to operate a\nhydra-node, users may put their funds at risk if they are unfamiliar\nwith the implementation and usage process."),(0,r.kt)("h3",{id:"head-protocol"},"Head protocol"),(0,r.kt)("h4",{id:"layer-1layer-2"},"Layer-1/Layer-2"),(0,r.kt)("p",null,"The current transaction size on mainnet is limited to 16KB, a limitation which has the following consequences:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The protocol can only handle a maximum number of participants in a\nHead (see ",(0,r.kt)("a",{parentName:"li",href:"/benchmarks/transaction-cost/#cost-of-collectcom-transaction"},"cost of collectcom\ntransaction"),"). Upon\nstartup, the ",(0,r.kt)("inlineCode",{parentName:"li"},"hydra-node")," will inform you of the current\nconfigured maximum when trying to configure too many peers.")),(0,r.kt)("p",null,"It's currently possible to be denied access to funds by other protocol\nparticipants at various stages in a Hydra Head because of the\ncomplexity or size of the UTxO being committed or created while the\nHead is open:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The head cannot be ",(0,r.kt)("em",{parentName:"li"},"finalized")," if holding more than ~60 assets\n(see ",(0,r.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/benchmarks/transaction-cost/#cost-of-fanout-transaction"},"cost of fanout\ntransaction"),"\nfor latest numbers), although it can be ",(0,r.kt)("em",{parentName:"li"},"closed")),(0,r.kt)("li",{parentName:"ul"},"Tokens minted and not burnt in an ",(0,r.kt)("em",{parentName:"li"},"open")," head will prevent it from being ",(0,r.kt)("em",{parentName:"li"},"finalized")),(0,r.kt)("li",{parentName:"ul"},"If one or more participants commit UTxO too large to be processed\ntogether in a ",(0,r.kt)("inlineCode",{parentName:"li"},"CollectCom")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Abort")," transaction, the Head will\nbe stuck in the ",(0,r.kt)("em",{parentName:"li"},"initialising")," stage"),(0,r.kt)("li",{parentName:"ul"},"Committing reference scripts from L1 to a Head is problematic and\nthe hydra-node will prevent this should a client try to do\nso. Note that a ",(0,r.kt)("inlineCode",{parentName:"li"},"Commit")," transaction could perfectly be crafted\noutside of the hydra-node and would therefore put the Head in an\nuncloseable state"),(0,r.kt)("li",{parentName:"ul"},"Using reference scripts on the L2 is non problematic as they will\nbe committed back on the L1 along with all the other UTxO")),(0,r.kt)("p",null,"There are couple of items in the roadmap around reducing the risk of losing funds in a Hydra Head:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/699"},"Always abortable Head")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/698"},"Limit size/complexity of UTxOs in the Head")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/370"},"Only sign closable snapshots"))),(0,r.kt)("h4",{id:"networking"},"Networking"),(0,r.kt)("h5",{id:"authentication--authorization"},"Authentication & Authorization"),(0,r.kt)("p",null,"The messages exchanged through the ",(0,r.kt)("em",{parentName:"p"},"Hydra Network")," layer between\nparticipants are authenticated: Each message is\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/727"},"signed")," using\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/glossary#signing-key"},"Hydra signing key")," of the emitting party which is identified by\nthe corresponding ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/glossary#verification-key"},"verification key"),". When a message with an unknown\nor incorrect signature is received, it is dropped and a notification\nis logged."),(0,r.kt)("p",null,"Messages are however not encrypted and therefore, if confidentiality is\nrequired, some external mechanism needs to be put in place to prevent\nother parties from observing the messages exchanged within a Head."),(0,r.kt)("h5",{id:"fault-tolerance"},"Fault tolerance"),(0,r.kt)("p",null,"The Hydra Head protocol guarantees safety of all (honest)\nparticipants' funds, but does not in itself guarantee liveness, hence\nall parties involved in a Hydra Head must be online and reactive for\nthe protocol to make progress."),(0,r.kt)("p",null,"This implies that, should one or several participants' hydra-node\nbecome ",(0,r.kt)("em",{parentName:"p"},"permanently")," unreachable from the others, through a crash, or\na network partition, no more transactions can happen in the Head and\nit must be closed. However, the ",(0,r.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/unstable/haddock/hydra-node/Hydra-Node-Network.html"},"Hydra network\nlayer"),"\nis tolerant to ",(0,r.kt)("em",{parentName:"p"},"transient")," disconnections and (non-Byzantine) crashes."),(0,r.kt)("h3",{id:"hydra-node"},"hydra-node"),(0,r.kt)("p",null,"Independently from the Head protocol itself, the way the hydra-node is\nimplemented has the following consequences:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There is a hard-coded limit on ",(0,r.kt)("strong",{parentName:"li"},"mainnet")," network where you can\nonly commit up to 100 ADA into the Hydra head. This is only a safety\nprecaution and is going to be increased as we gain more experience\nin running Hydra heads on the mainnet.")),(0,r.kt)("h3",{id:"hydra-tui"},"hydra-tui"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TUI crashes when user tries to post a new transaction without any UTXO remaining.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Recipient addresses to send money to in the TUI are inferred from\nthe current UTXO set. If a party does not commit a UTXO or consumes\nall its UTXO in a Head, it won't be able to send or receive anything\nanymore."))))}p.isMDXComponent=!0}}]);