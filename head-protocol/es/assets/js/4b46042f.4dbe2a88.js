"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[7442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=i,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={slug:26,title:"26. Stateless transaction observaion & construction\n",authors:[],tags:["Draft"]},l=void 0,o={permalink:"/head-protocol/es/adr/26",source:"@site/adr/2023-09-08_026-stateless-observation-construction.md",title:"26. Stateless transaction observaion & construction\n",description:"Status",date:"2023-09-08T00:00:00.000Z",formattedDate:"8 de septiembre de 2023",tags:[{label:"Draft",permalink:"/head-protocol/es/adr/tags/draft"}],readingTime:3.74,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"26",title:"26. Stateless transaction observaion & construction\n",authors:[],tags:["Draft"]},prevItem:{title:"25. Event-sourced, resource-based API\n",permalink:"/head-protocol/es/adr/25"},nextItem:{title:"27. Network failures model\n",permalink:"/head-protocol/es/adr/27"}},p={authorsImageUrls:[]},d=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Changes internal to Direct chain layer",id:"changes-internal-to-direct-chain-layer",level:3},{value:"Chain interface changes",id:"chain-interface-changes",level:3},{value:"Consequences",id:"consequences",level:2}],s={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Draft"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/adr/18"},"ADR 18")," merged both ",(0,i.kt)("inlineCode",{parentName:"p"},"headState")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"chainState")," into one single\nstate in the Hydra node, giving the chain layer a way to ",(0,i.kt)("em",{parentName:"p"},"fetch")," and update\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"chainState")," when observing a chain event.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/adr/23"},"ADR 23")," outlined the need for a local chain state in the chain layer\nagain to correctly handle correct observation of multiple relevant\ntransactions and the resulting ",(0,i.kt)("inlineCode",{parentName:"p"},"chainState")," updates.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainStateType tx"),' for our "actual" Cardano chain layer is currently:'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},"data ChainStateAt = ChainStateAt\n  { chainState :: ChainState\n  , recordedAt :: Maybe ChainPoint\n  }\n\ndata ChainState\n  = Idle\n  | Initial InitialState\n  | Open OpenState\n  | Closed ClosedState\n")),(0,i.kt)("p",{parentName:"li"},"where ",(0,i.kt)("inlineCode",{parentName:"p"},"InitialState"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenState")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ClosedState")," hold elaborate information\nabout the currently tracked Hydra head.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We face ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/529"},"difficulties")," to\nprovide sufficient user feedback when an ",(0,i.kt)("inlineCode",{parentName:"p"},"initTx")," was observed but (for\nexample) keys do not match our expectation."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Core problem is, that ",(0,i.kt)("inlineCode",{parentName:"li"},"observeInit"),' is required to take a decision whether\nit wants to "adopt" the Head by returning an ',(0,i.kt)("inlineCode",{parentName:"li"},"InitialState")," or not."),(0,i.kt)("li",{parentName:"ul"},"This makes it impossible to provide user feedback through the ",(0,i.kt)("inlineCode",{parentName:"li"},"HeadLogic"),"\nand ",(0,i.kt)("inlineCode",{parentName:"li"},"API")," layers."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We want to build a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/696"},"Hydra head\nexplorer"),", which should\nbe able to keep track and discover Hydra heads and their state changes even\nwhen the heads were initialized before starting the explorer."))),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We supersede ",(0,i.kt)("a",{parentName:"li",href:"/adr/18"},"ADR 18")," with the current ADR.")),(0,i.kt)("h3",{id:"changes-internal-to-direct-chain-layer"},"Changes internal to Direct chain layer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Introduce a ",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedTx")," type that has its inputs resolved. Where a normal\n",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," will only contain ",(0,i.kt)("inlineCode",{parentName:"p"},"TxIn")," information of its inputs, a ",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedTx")," also\nincludes the ",(0,i.kt)("inlineCode",{parentName:"p"},"TxOut")," for each input.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainSyncHandler")," signature to ",(0,i.kt)("inlineCode",{parentName:"p"},"onRollForward :: BlockHeader -> [ResolvedTx] -> m ()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change observing function signature to ",(0,i.kt)("inlineCode",{parentName:"p"},"observeSomeTx :: ChainContext ->\nResolvedTx -> Maybe (OnChainTx Tx)"),". Notably there is no ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainState"),"\ninvolved.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Do not guard observation by ",(0,i.kt)("inlineCode",{parentName:"p"},"HeadId")," in the chain layer and instead do it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"HeadLogic")," layer.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Define a ",(0,i.kt)("inlineCode",{parentName:"p"},"SpendableUTxO")," type that is a ",(0,i.kt)("inlineCode",{parentName:"p"},"UTxO")," with potentially needed datums included."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"TBD: instead we could decide to use inline datums and rely on ",(0,i.kt)("inlineCode",{parentName:"li"},"UTxO")," containing them"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change transaction creation functions ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"commit"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"abort"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"collect"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"close"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"contest")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fanout")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"Hydra.Direct.Chain.State")," to\ntake ",(0,i.kt)("inlineCode",{parentName:"p"},"SpendableUTxO")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"HeadId"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"HeadParameters")," as needed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Extend ",(0,i.kt)("inlineCode",{parentName:"p"},"IsChainState")," type class to enforce that it can be updated by\nconcurrent transactions ",(0,i.kt)("inlineCode",{parentName:"p"},"update :: ChainStateType tx -> [tx] -> ChainStateType tx"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'While this is not strictly needed "outside" of the chain layer, it will have\nus not fall into the same pit again.'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainStateAt")," to only hold a ",(0,i.kt)("inlineCode",{parentName:"p"},"spendableUTxO")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"recordedAt"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Update the ",(0,i.kt)("inlineCode",{parentName:"p"},"LocalChainState")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"onRollForward")," by using ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," and pushing\na new ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainStateAt")," generically."))),(0,i.kt)("p",null,"TBD:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Impact on generators")),(0,i.kt)("h3",{id:"chain-interface-changes"},"Chain interface changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"HeadId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"HeadParameters")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"PostChainTx"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"HeadId")," to all ",(0,i.kt)("inlineCode",{parentName:"p"},"OnChainTx")," constructors.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Extend ",(0,i.kt)("inlineCode",{parentName:"p"},"OnInitTx")," with observed chain participants."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"TBD: How are ",(0,i.kt)("em",{parentName:"li"},"cardano")," verification keys generically represented in ",(0,i.kt)("inlineCode",{parentName:"li"},"HeadLogic"),"?"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Extend ",(0,i.kt)("inlineCode",{parentName:"p"},"OnContestTx")," with new deadline and a list of contesters.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Move off-chain checks for what makes a "proper head" to ',(0,i.kt)("inlineCode",{parentName:"p"},"HeadLogic")))),(0,i.kt)("p",null,"TBD:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Merge ",(0,i.kt)("inlineCode",{parentName:"li"},"HeadSeed")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"HeadId"),"? How to abstract?")),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All logic is kept in the logic layer and no protocol decisions (i.e. whether\nto adopt or ignore a head initialization) are taken in the chain layer."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"HeadLogic")," gets informed of any proper ",(0,i.kt)("inlineCode",{parentName:"li"},"initTx")," and can log that it is\nignored and for what reason."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'The transaction observation and construction functions can be moved into a\ndedicated package that is cardano-specific, but not requires special state\nknowledge of the "direct chain following" and can be re-used as a library.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All transaction observation functions used by ",(0,i.kt)("inlineCode",{parentName:"p"},"observeSomeTx")," will need to be\nable to identify a Hydra Head transaction from only the ",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedTx")," and the\n",(0,i.kt)("inlineCode",{parentName:"p"},"ChainContext"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Any ",(0,i.kt)("inlineCode",{parentName:"p"},"Chain Tx")," implementation wanting to re-use existing transaction\nobservation functions must be able to resolve transaction inputs (against some\nledger state) and produce ",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedTx"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A chain-following implementation (as ",(0,i.kt)("inlineCode",{parentName:"li"},"Hydra.Chain.Direct"),") can keep previous\ntransactions around."),(0,i.kt)("li",{parentName:"ul"},'A chain indexer on "interesting" protocol addresses can be used to\nefficiently query most inputs.'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We can get rid of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hydra.Chain.Direct.State")," glue code altogether.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"While this does not directly supersede ",(0,i.kt)("a",{parentName:"p",href:"/adr/23"},"ADR23"),", it paves the way to\nremove ",(0,i.kt)("inlineCode",{parentName:"p"},"LocalChainState")," again as the ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainStateAt")," is now combinable from\nmultiple transactions (see ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," above) and we can keep the state (again)\nonly in the ",(0,i.kt)("inlineCode",{parentName:"p"},"HeadState")," aggregate. Note that this would shift the rollback\nhandling back into the logic layer."))))}m.isMDXComponent=!0}}]);