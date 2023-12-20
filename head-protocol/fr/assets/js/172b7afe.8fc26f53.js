"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[3707],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,c=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(c,i(i({ref:t},h),{},{components:a})):n.createElement(c,i({ref:t},h))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},34257:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"October 2023",slug:"2023-10",authors:["abailly","ch1bo"],tags:["monthly"]},i=void 0,s={permalink:"/head-protocol/fr/monthly/2023-10",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/monthly/2023-10-monthly.md",source:"@site/monthly/2023-10-monthly.md",title:"October 2023",description:"This report summarizes the work on Hydra since September 2023. It serves as",date:"2023-11-06T13:44:16.000Z",formattedDate:"6 novembre 2023",tags:[{label:"monthly",permalink:"/head-protocol/fr/monthly/tags/monthly"}],readingTime:6.535,hasTruncateMarker:!1,authors:[{name:"Arnaud Bailly",title:"Lead Architect",url:"https://github.com/abailly-iohk",imageURL:"https://github.com/abailly-iohk.png",key:"abailly"},{name:"Sebastian Nagel",title:"Software Engineering Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"October 2023",slug:"2023-10",authors:["abailly","ch1bo"],tags:["monthly"]},prevItem:{title:"November 2023",permalink:"/head-protocol/fr/monthly/2023-11"},nextItem:{title:"September 2023",permalink:"/head-protocol/fr/monthly/2023-09"}},l={authorsImageUrls:[void 0,void 0]},p=[{value:"Roadmap",id:"roadmap",level:2},{value:"Release 0.13.0",id:"release-0130",level:4},{value:"Notable updates",id:"notable-updates",level:4},{value:"Hydra development",id:"hydra-development",level:2},{value:"Network resilience to node crash",id:"network-resilience-to-node-crash",level:4},{value:"Hydra Poll DApp",id:"hydra-poll-dapp",level:4},{value:"Upgrade to GHC 9.6 &amp; Brick 1.10",id:"upgrade-to-ghc-96--brick-110",level:4},{value:"Community update",id:"community-update",level:2},{value:"Hypix",id:"hypix",level:3},{value:"Kupo x Hydra",id:"kupo-x-hydra",level:3},{value:"Offline-mode Hydra node",id:"offline-mode-hydra-node",level:3},{value:"Voting on Hydra",id:"voting-on-hydra",level:3},{value:"ZK Snarks on Hydra",id:"zk-snarks-on-hydra",level:3},{value:"Conclusion",id:"conclusion",level:2}],h={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This report summarizes the work on Hydra since September 2023. It serves as\npreparation for the monthly review meeting (see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1pJMRp0YsszJenUvDmknm3wq9yyUE1CDRSYijjILrkHo"},"slides")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1U4yZhliGykxF3BddAAXb4RD417UvsQWB"},"recording"),"), where the team updates project stakeholders on recent\ndevelopments to gather their feedback on proposed plans."),(0,r.kt)("h2",{id:"roadmap"},"Roadmap"),(0,r.kt)("p",null,"This month, the team released version 0.13.0, and updated the project\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/input-output-hk/projects/21/views/7"},"roadmap")," to include\nthe next planned version 0.14.0:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The roadmap with features and ideas",src:a(83033).Z,width:"6642",height:"2881"})," ",(0,r.kt)("small",null,(0,r.kt)("center",null,"The latest roadmap with features and ideas"))),(0,r.kt)("h4",{id:"release-0130"},"Release 0.13.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Implemented security fixes to Hydra on-chain scripts, all of which are only exploitable by other head participants (not any attacker)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added support for (externally) committing inline datums")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Improved stability by querying the ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node")," at the tip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Improved state persistence")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/releases/tag/0.13.0"},"full release notes")," and a list of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/milestone/13?closed=1"},"delivered features"),"."))),(0,r.kt)("h4",{id:"notable-updates"},"Notable updates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Moved the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/188"},"network resilience\n#188")," issue out of version 0.13.0 to\nallow for a quick release of the security fixes. This feature has been split\nin two parts, both of which are completed and will soon be included in the 0.14.0 release.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A new user submitted a feature idea about supporting extended keys ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/1141"},"#1141"),". Initially\nurgent, it's no longer a priority and requires further clarification.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Although not part of Hydra version 0.14.0, the team completed the integration of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/1078"},"Hydra\nsupport in Kupo #1078"),",\nwhich can already be used with Kupo version\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CardanoSolutions/kupo/releases/tag/v2.7"},"2.7.0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Implemented a new ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/1110"},"Hydra Poll DApp"),"\nfeature, which is an example to be demonstrated at the Cardano Summit 2023.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Realized ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/1096"},"stateless chain observation\n#1096")," as a dedicated\nfeature, which will add a ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-chain-observer")," tool and simplify upcoming\nfeature implementation related to layer 1 transactions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Created a feature idea item to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/1092"},"migrate all validators to Aiken\n#1092"),". This was moved\nto 1.0.0 though, as it would require a complete re-audit of the scripts and\nand there is no urgent requirement for performance improvements at this stage."))),(0,r.kt)("h2",{id:"hydra-development"},"Hydra development"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2023-09-30..2023-10-31"},"Issues and pull requests closed since the last\nreport")),(0,r.kt)("p",null,"This month, the team worked on the following:"),(0,r.kt)("h4",{id:"network-resilience-to-node-crash"},"Network resilience to node crash"),(0,r.kt)("p",null,"Last month, the team worked on making the Hydra network resilient to\ntransient network connectivity failure (see\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/188"},"#188"),"). However, this\nwas just one aspect of the larger effort to improve the overall stability and\nreliability of the network. By completing\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/1079"},"#1079"),", the team also\nmade the network resilient to arbitrary node failures, which is a much\nmore likely event to happen should the network run for a significant\namount of time."),(0,r.kt)("p",null,"Hydra nodes now persist the network messages they ",(0,r.kt)("em",{parentName:"p"},"send")," to peers and\ntogether with the already present acknowledgment mechanism, this means\na node recovering from a crash can resend messages which were not\nreceived by their peers."),(0,r.kt)("h4",{id:"hydra-poll-dapp"},"Hydra Poll DApp"),(0,r.kt)("p",null,"As the Hydra team seeks to adhere more to the principles of\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Eating_your_own_dog_food"},"dogfooding"),",\nwe wanted to upgrade our basic Hydraw application to something more\ninteractive. We, therefore, built a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/1110"},"poll\nDApp")," with the\ngoal of demonstrating how one can build an application living entirely\nin the frontend that can interact directly with a hydra-node, using\nits websockets-based API. This application was also showcased at the\n",(0,r.kt)("a",{parentName:"p",href:"https://summit.cardano.org/"},"Cardano Summit 2023"),", where the Hydra\nteam delivered a masterclass."),(0,r.kt)("h4",{id:"upgrade-to-ghc-96--brick-110"},"Upgrade to GHC 9.6 & Brick 1.10"),(0,r.kt)("p",null,"This month, we were able to update our compiler toolchain from GHC 9.2.8 to\n9.6.3. This also required us to upgrade the hydra-tui from Brick 0.73 to 1.10\nto stay compatible with the new version of the mtl."),(0,r.kt)("p",null,"The update to Brick necessitated a complete rewrite of the hydra-tui which\ngreatly simplifies the application logic, using Brick's new elm architecture\nstyle combined with microlens-mtl."),(0,r.kt)("h2",{id:"community-update"},"Community update"),(0,r.kt)("p",null,"This month, the monthly review meeting was almost completely covered by\ndemonstrations from the various teams working on and with Hydra. Don't miss out\non the demonstrations of the various community contributions and make sure to\nalso view the ",(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1U4yZhliGykxF3BddAAXb4RD417UvsQWB"},"recording"),"."),(0,r.kt)("h3",{id:"hypix"},"Hypix"),(0,r.kt)("p",null,"Hypix is a continuation of the 'Hydraw' demonstration the team used throughout\ndevelopment. The project is spear-headed by Trym Bruset and will integrate CIP-68\nNFTs with instant transaction processing in a Hydra head to realize\ncollaboratively created art pieces. The project is progressing great with an\nopen beta available soon."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hypix user interface",src:a(58369).Z,width:"2048",height:"1073"})," ",(0,r.kt)("small",null,(0,r.kt)("center",null,"The Hypix user interface"))),(0,r.kt)("h3",{id:"kupo-x-hydra"},"Kupo x Hydra"),(0,r.kt)("p",null,"Indexers of chain data, like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CardanoSolutions/kupo"},"Kupo"),",\nare useful to enable lightweight decentralized applications like Hypix. As the\napplication state of Hypix, for example, is not only on the Cardano layer 1, but\nalso in the Hydra head, Kupo was enhanced to run 'in front of' a ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-node")," and\nprovide the same API for UTXOs indexed from a Hydra head. This was a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CardanoSolutions/kupo/pull/117"},"joint\neffort")," between\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KtorZ"},"@KtorZ"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/v0d1ch"},"@v0d1ch")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ch1bo"},"@ch1bo")," and has been ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CardanoSolutions/kupo/releases/tag/v2.7"},"released in version 2.7 of\nKupo"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Kupo indexing data",src:a(34402).Z,width:"1576",height:"699"})," ",(0,r.kt)("small",null,(0,r.kt)("center",null,"Kupo indexing a Hydra head"))),(0,r.kt)("h3",{id:"offline-mode-hydra-node"},"Offline-mode Hydra node"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://projectcatalyst.io/funds/10/f10-development-and-infrastructure/sundae-labs-hydra-ledger-only-mode"},"Ledger-only\nmode"),"\nfor Hydra was one of the Catalyst Fund10 projects that got funded and\nwork is underway to make it an integral part of Hydra software\ncomponents. A ",(0,r.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/unstable/adr/28.%20Offline%20mode"},"new\nADR"),"\nhas been proposed which details the rationale behind this new feature\nand an overview of what it brings and what impacts it will have on the\nhydra-node."),(0,r.kt)("p",null,"Moreover, this implementation is\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/1118"},"underway")," and\nshould be part of the next release. This will enable running a single\nhydra-node as a kind of 'ledger-as-a-service', priming it with some\nUTXOs and allowing clients to submit and validate transactions without\nany relationship to layer 1."),(0,r.kt)("h3",{id:"voting-on-hydra"},"Voting on Hydra"),(0,r.kt)("p",null,"The\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cardano-foundation/hydra-voting-poc"},"Hydra-for-voting"),"\nproject has been started earlier this year as a proof-of-concept to\nexplore how a Hydra Head could help improve the voting or rather\ntallying process for Catalyst and other large-scale on-chain\ndecision-making process. It's been on pause for a few months due to\nother priorities but it's been revived recently and put to use to\ntally votes for the Cardano Summit's awards recipients."),(0,r.kt)("p",null,"This development effort led to a couple of new features and fixes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ability to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1111"},"submit\na transaction"),"\nfor layer 1 using 'standard' CBOR-hex format"),(0,r.kt)("li",{parentName:"ul"},"Upgrade to the checked-in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1117"},"protocol\nparameters"),"\nused by demo network which were out of sync with the internal ledger\nversion"),(0,r.kt)("li",{parentName:"ul"},"Discussion on the usage of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1141"},"extended payment\nkeys")," in\nin relation to the Hydra Head protocol")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hydra voting UI",src:a(6039).Z,width:"2670",height:"1328"})," ",(0,r.kt)("small",null,(0,r.kt)("center",null,"Hydra Tallying UI"))),(0,r.kt)("h3",{id:"zk-snarks-on-hydra"},"ZK Snarks on Hydra"),(0,r.kt)("p",null,"The team has initiated discussions with another funded Catalyst Fund10\nproject, exploring the implementation of a ",(0,r.kt)("a",{parentName:"p",href:"https://projectcatalyst.io/funds/10/f10-development-and-infrastructure/a-zero-knowledge-proof-framework-for-cardano-based-on-hydra-and-zk-snarks"},"zero-knowledge proof system"),"\nfor Cardano, utilizing Hydra and ZK Snarks. At this early stage, there\nis minimal progress to display, but the team is eager to start the\ndevelopment of this promising tool."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The monthly review meeting for October 2023 was held on 2023-10-30 via Google\nMeet with these ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1pJMRp0YsszJenUvDmknm3wq9yyUE1CDRSYijjILrkHo"},"slides")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1U4yZhliGykxF3BddAAXb4RD417UvsQWB"},"recording"),"."),(0,r.kt)("p",null,"As mentioned above, the meeting was about 45 minutes of demonstrations - which\nclearly shows that we are in the wake of Catalyst Fund10 where several project\nproposals involving Hydra and Mithril got funded and at the same time everyone\nwas preparing for the Cardano Summit 2023."),(0,r.kt)("p",null,"With this many community contributions and projects moving forward, there was\nnot much time to discuss the Hydra roadmap or go into details about Mithril\nproject status. This is great!"),(0,r.kt)("p",null,"Besides, the project roadmaps seem to be well aligned where our next features\nin-line are most anticipated (incremental de-/commits) and the adoption of Mithril\nis showing a healthy level with clear next steps and features ahead."),(0,r.kt)("p",null,"It is getting increasingly hard to keep track of all the new developments around\nHydra. However, that is also often not needed and the Cardano builders just set\noff and ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/AltiMario/status/1711738372320825827?s=20"},"build\nthings")," using\nHydra these days."),(0,r.kt)("p",null,"November will start with the Cardano Summit, likely yielding even more feedback\nand feature ideas from users. Following this, there will be several productive weeks\nfocused on feature development before the usual Christmas and New Year breaks across the teams."))}u.isMDXComponent=!0},58369:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-10-hypix-0a880910a75eea98c2be77f520f1d691.png"},34402:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-10-kupo-8aa459cbfcbfd884cbd7efd66a88ef19.gif"},83033:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-10-roadmap-f6527e7656a553a4a1b730328278cc6a.jpg"},6039:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hydra-voting-d2eb296eff8d804cdc95409c5cc427b8.png"}}]);