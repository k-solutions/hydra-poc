"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},48037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={slug:22,title:"22. Test High-level Properties using Model-Based Testing\n",authors:[],tags:["Accepted"]},i=void 0,l={permalink:"/head-protocol/unstable/adr/22",source:"@site/adr/2022-12-06_022-model-based-testing.md",title:"22. Test High-level Properties using Model-Based Testing\n",description:"Status",date:"2022-12-06T00:00:00.000Z",formattedDate:"December 6, 2022",tags:[{label:"Accepted",permalink:"/head-protocol/unstable/adr/tags/accepted"}],readingTime:1.805,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"22",title:"22. Test High-level Properties using Model-Based Testing\n",authors:[],tags:["Accepted"]},prevItem:{title:"21. Bounded transaction validity on Hydra protocol transactions\n",permalink:"/head-protocol/unstable/adr/21"},nextItem:{title:"23. Local chain state in chain layer\n",permalink:"/head-protocol/unstable/adr/23"}},s={authorsImageUrls:[]},c=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,"Accepted"),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have been experimenting with ",(0,r.kt)("a",{parentName:"li",href:"https://hackage.org/packages/quickcheck-dynamic"},"quickcheck-dynamic")," for a while, leading to the implementation of basic ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/blob/master/hydra-node/test/Hydra/ModelSpec.hs"},"Model-Based tests")," for the Hydra Head Protocol"),(0,r.kt)("li",{parentName:"ul"},"These tests fill a gap in our testing strategy, between ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/blob/master/hydra-node/test/Hydra/BehaviorSpec.hs"},"BehaviorSpec"),' tests which test a "network" of nodes but only at the level of the off-chain Head logic, and ',(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/blob/master/hydra-cluster/test/Test/EndToEndSpec.hs"},"EndToEndSpec")," tests which test a full blown network of nodes interconnected through real network connections and to a real cardano-node:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The former are fast but do not test the complete lifecycle of a Head. Furthermore, they are only unit tests so do not provide coverage into various corner cases that could arise in practice"),(0,r.kt)("li",{parentName:"ul"},"The latter exercise the full lifecycle but are very slow and brittle"))),(0,r.kt)("li",{parentName:"ul"},"Because they run in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/io-sim"},"io-sim"),", those Model-based tests are fast and robust as they don't depend on system interactions. Moreover, decoupling the ",(0,r.kt)("em",{parentName:"li"},"System-under-Test")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"IO"),' makes it easy to simulate an environment that deviates from the "happy path" such as delays from the network, filesystem errors, or even adversarial behaviour from the node, or the chain.')),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We will maintain and evolve the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/blob/master/hydra-node/test/Hydra/Model.hs"},"Model")," over time to cover more features"),(0,r.kt)("li",{parentName:"ul"},"Key properties of the whole system should be written-down as proper ",(0,r.kt)("inlineCode",{parentName:"li"},"DynamicLogic")," properties and thoroughly tested using quickcheck-dynamic. This includes but is not limited to:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Liveness of the Head"),(0,r.kt)("li",{parentName:"ul"},"Consistency of the Head"),(0,r.kt)("li",{parentName:"ul"},"Soundness of Chain"),(0,r.kt)("li",{parentName:"ul"},"Completeness of Chain")))),(0,r.kt)("h2",{id:"consequences"},"Consequences"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We need to ensure the Model covers the full lifecycle of a Hydra Head network which at the time of writing this ADR is not the case"),(0,r.kt)("li",{parentName:"ul"},"There cannot be ",(0,r.kt)("em",{parentName:"li"},"One Model to Rule Them All")," so we should refrain from defining different ",(0,r.kt)("inlineCode",{parentName:"li"},"StateModel")," or different ",(0,r.kt)("inlineCode",{parentName:"li"},"RunModel")," depending on what needs to be tested"),(0,r.kt)("li",{parentName:"ul"},"In particular, testing against adversarial conditions will certainly require defining different instances of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Network")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Chain")," components, for example:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("em",{parentName:"li"},"Active Adversary")," that fully the controls the protocol and the parties,"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("em",{parentName:"li"},"Network Adversary")," that can delay and or drop messages,"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("em",{parentName:"li"},"Faulty Filesystem")," that can causes exceptions when reading or writing files,"),(0,r.kt)("li",{parentName:"ul"},"...")))))}p.isMDXComponent=!0}}]);