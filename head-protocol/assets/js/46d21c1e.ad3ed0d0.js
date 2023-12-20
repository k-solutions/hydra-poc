"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[6037],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),m=r,c=h["".concat(l,".").concat(m)]||h[m]||d[m]||i;return a?n.createElement(c,o(o({ref:t},u),{},{components:a})):n.createElement(c,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},83207:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"July 2023",slug:"2023-07",authors:["ch1bo","abailly","v0d1ch"],tags:["monthly"]},o=void 0,s={permalink:"/head-protocol/monthly/2023-07",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/monthly/2023-07-monthly.md",source:"@site/monthly/2023-07-monthly.md",title:"July 2023",description:"This report summarizes the work on Hydra since June 2023. It serves as",date:"2023-07-31T15:09:18.000Z",formattedDate:"July 31, 2023",tags:[{label:"monthly",permalink:"/head-protocol/monthly/tags/monthly"}],readingTime:8.42,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Software Engineering Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"},{name:"Arnaud Bailly",title:"Lead Architect",url:"https://github.com/abailly-iohk",imageURL:"https://github.com/abailly-iohk.png",key:"abailly"},{name:"Sasha Bogicevic",title:"Senior Software Engineer",url:"https://github.com/v0d1ch",imageURL:"https://github.com/v0d1ch.png",key:"v0d1ch"}],frontMatter:{title:"July 2023",slug:"2023-07",authors:["ch1bo","abailly","v0d1ch"],tags:["monthly"]},prevItem:{title:"August 2023",permalink:"/head-protocol/monthly/2023-08"},nextItem:{title:"June 2023",permalink:"/head-protocol/monthly/2023-06"}},l={authorsImageUrls:[void 0,void 0,void 0]},p=[{value:"Starmap update",id:"starmap-update",level:3},{value:"Roadmap",id:"roadmap",level:2},{value:"Release 0.11.0",id:"release-0110",level:4},{value:"Notable updates",id:"notable-updates",level:4},{value:"Development",id:"development",level:2},{value:"Authenticate network messages #727",id:"authenticate-network-messages-727",level:4},{value:"ReqSn only sends transaction IDs #728",id:"reqsn-only-sends-transaction-ids-728",level:4},{value:"GitHub security advisories",id:"github-security-advisories",level:4},{value:"Moving to GHC 9.2.7 #841",id:"moving-to-ghc-927-841",level:4},{value:"Community",id:"community",level:2},{value:"Hydra master-class",id:"hydra-master-class",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p},h="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This report summarizes the work on Hydra since June 2023. It serves as\npreparation for the monthly review meeting (see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1CQYAFztRcqofN6sbowg37QuXQ-DQU4NcDmoMghS36B8"},"slides")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/14ANZ3efuxgXpYK94EBWxZLR9TtN7voru/"},"recording"),"), where the team updates project stakeholders on recent\ndevelopments to gather their feedback on proposed plans."),(0,r.kt)("h3",{id:"starmap-update"},"Starmap update"),(0,r.kt)("p",null,"Every couple of months, the team reflects on the themes identified for 2023 (as\npresented in ",(0,r.kt)("a",{parentName:"p",href:"/monthly/2023-01#themes-for-2023"},"January"),"), and creates a high\nlevel list of possible deliverables,\neg using ",(0,r.kt)("a",{target:"_blank",href:a(36424).Z},"impact maps"),". This time, the team has come up\nwith the following items:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(52154).Z,width:"1676",height:"931"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sustainable open-source \ud83d\udc9a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Hydra master-class workshop"),": A concrete session we aim to conduct in an\nupcoming event or online as a fallback. This will also be a motivation to\nupdate our existing tutorials and improve the first-start\nexperience.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Engage and support developer community on Catalyst proposals"),": There are\naround 30 proposals mentioning Hydra in the current Catalyst funding round\nand we want to review, comment, try to align, and maybe even promote some\nproposals. The goal is to provide a platform for many new ideas while avoiding fragmentation and maximizing the reuse of work.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Further open up GitHub repositories"),": We want to provide a welcoming\nexperience to non-IOG contributors and provide an easy-to-navigate group of\nrepositories relating to Hydra.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Mainnet mature application \ud83d\udc9c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Make Hydra trivial to use"),": To enhance user and developer experience, we aim to enable a quick and frictionless setup of Hydra, possibly involving Mithril to get started. Our goal is to facilitate the opening of a distributed Hydra head with two nodes on a testnet within just a few minutes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Build a basic head explorer"),": We have previously experimented with the explorer, and now we are looking to set it up for the long term. The goal is not only to assess Hydra adoption but also to provide a valuable tool for DApp developers. Additionally, we aim to create a visualization that end users can use to answer important questions, such as 'who is running this head?'")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Drive adoption \ud83d\udc99"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Deliver the first version of HydraNow to mainnet"),":\nIt's important that the very promising use case of payments using\nHydra is made available to first users on mainnet. As a concrete example, this would be\na mobile application 'HydraNow', which uses a ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-pay")," service to enable\npeer-to-peer payment channels.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Enable uni-directional payment channels"),": This will expand the\ncapabilities of any payment channel created using Hydra, allowing deposits and\nwithdrawals while keeping the head open."))))),(0,r.kt)("p",null,"Work packages related to these items appear on the technical\nroadmap (especially ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/input-output-hk/projects/21/views/26"},"in this view"),") and in our community activities."),(0,r.kt)("h2",{id:"roadmap"},"Roadmap"),(0,r.kt)("p",null,"This month, the team released version 0.11.0, which shifts the way Hydra clients\nneed to interact with the hydra-node when committing funds. The project\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/input-output-hk/projects/21"},"roadmap")," was also updated\nto reflect the latest developments and ideas from the starmap:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The roadmap without idea items",src:a(13918).Z,width:"1938",height:"1055"})," ",(0,r.kt)("small",null,(0,r.kt)("center",null,"The roadmap without idea items"))),(0,r.kt)("h4",{id:"release-0110"},"Release 0.11.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Completes the layer 2 ledger isomorphism with timed transaction support")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Adds commit from external wallets API, which allows to:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Commit multiple UTXO"),(0,r.kt)("li",{parentName:"ul"},"Commit from scripts"),(0,r.kt)("li",{parentName:"ul"},"Commit directly from any key"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deprecated: Internal commits via the WebSocket API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/releases/tag/0.11.0"},"full release notes")," and a list of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/milestone/11?closed=1"},"delivered features")))),(0,r.kt)("h4",{id:"notable-updates"},"Notable updates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Two new items ","_",(0,r.kt)("em",{parentName:"p"},"elevated")," from user ideas and improved the API capabilities:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/735"},"ability to read protocol parameters via API #735")),(0,r.kt)("li",{parentName:"ul"},"The ability to",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/966"},"submit layer 1 transactions through hydra-node #966")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[Removing commit from internal wallet #954]","(Submit layer 1 transactions through\nhydra-node#954) is a consequence of deprecating this functionality in the\nprevious 0.11.0 release. This will make the code base and documentation\ncleaner as there will be only one way to commit funds to a head.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The first new item derived from the starmap is to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/997"},"Update tutorial and include\nMithril #997"),". The\ntutorial is already a bit outdated, this will slim it down and incorporate\nMithril to get the fastest (secure) bootstrap possible of a ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-node"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As a result of focusing on the very concrete use case of payments for mainnet\ndeployment (and hence 1.0.0 release), multiple items need to (and can) get\nreprioritized to match the requirements of this use case."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The latest roadmap with features and ideas",src:a(11171).Z,width:"2916",height:"1212"})," ",(0,r.kt)("small",null,(0,r.kt)("center",null,"The latest roadmap with features and ideas"))),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2023-06-22..2023-07-28"},"Issues and pull requests closed since last report")),(0,r.kt)("p",null,"This month, the team worked on the following:"),(0,r.kt)("h4",{id:"authenticate-network-messages-727"},"Authenticate network messages ",(0,r.kt)("a",{parentName:"h4",href:"https://github.com/input-output-hk/hydra/issues/727"},"#727")),(0,r.kt)("p",null,"The Hydra Head protocol paper states:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Each party then establishes pairwise authenticated channels to all other parties.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2020/299.pdf"},"Hydra: Fast Isomorphic State Channels, p.14")),(0,r.kt)("p",null,"Guaranteeing the authenticity and integrity of the messages received from one's peers is critical to the security of the Head protocol. Initially, we considered deferring this responsibility to the transport layer, for example, leaving it to Hydra node operators to use TLS or other encrypted channels to communicate with their peers. However, this introduced an additional and unnecessary operational burden on operators."),(0,r.kt)("p",null,"It appeared simple enough to reuse the existing Hydra keys (using Ed25519\ncurve), which need to be passed to the node, to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"sign")," all messages sent to peers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"verify")," all messages received from peers")),(0,r.kt)("p",null,"The net benefit of this feature is to increase the life expectancy of a head,\npreventing some forms of ",(0,r.kt)("em",{parentName:"p"},"denial of service")," attacks or wrongly configured nodes\nthat would lead to a ",(0,r.kt)("em",{parentName:"p"},"stalled head"),"."),(0,r.kt)("h4",{id:"reqsn-only-sends-transaction-ids-728"},"ReqSn only sends transaction IDs ",(0,r.kt)("a",{parentName:"h4",href:"https://github.com/input-output-hk/hydra/issues/728"},"#728")),(0,r.kt)("p",null,"This feature aligns the current implementation better with the original paper, as it requests snapshots using only the transaction identifiers, rather than the full transactions."),(0,r.kt)("p",null,"The motivation to implement this feature came from different directions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improve the performance of the protocol by reducing bandwidth usage"),(0,r.kt)("li",{parentName:"ul"},"Make it possible to have 'atomic' transaction sets submitted\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/900"},"#900"),"),"),(0,r.kt)("li",{parentName:"ul"},"Prevent 'front-running' from the current leader which, in the previous\nimplementation, could inject arbitrary (but valid) transactions that peers had\nnever seen before into a snapshot.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ReqSn"),"'s snapshots now contain only the list of transaction IDs and each\nhydra-node validates the snapshot by resolving those ideas against the set of\ntransactions they have seen (through ",(0,r.kt)("inlineCode",{parentName:"p"},"ReqTx"),"). A consequence is that this\nintroduces the possibility of space leak in the event a submitted valid\ntransaction never gets included in a snapshot, but this should not be\na problem in practice."),(0,r.kt)("p",null,"Note that the\n",(0,r.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/core-concepts/specification"},"specification"),"\nhas been updated to reflect this change."),(0,r.kt)("h4",{id:"github-security-advisories"},"GitHub security advisories"),(0,r.kt)("p",null,"There was a bug in the multi-signature verification which could compromise\noff-chain security of a Hydra Head protocol. Although the fix was quite simple, we\ndecided to use a new GitHub feature to create the first ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/security/advisories/GHSA-c8qp-cv4h-vcc4"},"GitHub security\nadvisory"),"\nfor Hydra."),(0,r.kt)("p",null,"The process creates a separate GitHub repository where potential security issues\ncould be discussed privately (between the reporter and the maintainers) since\npotential attackers should not be aware of any issues until they are fixed. The\nteam scored this issue using CVSS (The Common Vulnerability Scoring System), the\nscore was moderate (5.5), and they didn't request a CVE (Common Vulnerabilities\nand Exposures) for this (yet)."),(0,r.kt)("p",null,"The process overall works well, but Hydra CI is not checking the builds in these\nprivate, one-off forks so there is a risk of merging code that doesn't compile."),(0,r.kt)("h4",{id:"moving-to-ghc-927-841"},"Moving to GHC 9.2.7 ",(0,r.kt)("a",{parentName:"h4",href:"https://github.com/input-output-hk/hydra/pull/841"},"#841")),(0,r.kt)("p",null,"GHC 9.2 series have been around for more than a year and the whole Cardano ecosystem is gradually moving to use this new compiler version. Moreover, GHC 8.10.7 does not work reliably on aarch64 architectures, eg Mac M1/M2."),(0,r.kt)("p",null,"Moving to this new version entailed some significant changes in the code and also in the Plutus scripts:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"After (bytes)"),(0,r.kt)("th",{parentName:"tr",align:null},"Before (bytes)"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0394size"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u03bdInitial"),(0,r.kt)("td",{parentName:"tr",align:null},"4289"),(0,r.kt)("td",{parentName:"tr",align:null},"4621"),(0,r.kt)("td",{parentName:"tr",align:null},"- 7%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u03bdCommit"),(0,r.kt)("td",{parentName:"tr",align:null},"2124"),(0,r.kt)("td",{parentName:"tr",align:null},"2422"),(0,r.kt)("td",{parentName:"tr",align:null},"- 12%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u03bdHead"),(0,r.kt)("td",{parentName:"tr",align:null},"9185"),(0,r.kt)("td",{parentName:"tr",align:null},"8954"),(0,r.kt)("td",{parentName:"tr",align:null},"+ 3%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u03bcHead"),(0,r.kt)("td",{parentName:"tr",align:null},"4149"),(0,r.kt)("td",{parentName:"tr",align:null},"4458"),(0,r.kt)("td",{parentName:"tr",align:null},"-7%")))),(0,r.kt)("h2",{id:"community"},"Community"),(0,r.kt)("h3",{id:"hydra-master-class"},"Hydra master-class"),(0,r.kt)("p",null,"As already mentioned above in our starmap update, we aim to have an educational session at the upcoming Rare Evo event:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Whether you are building decentralized applications which need to be fast and scale well, or you are creating infrastructure for other builders on Cardano, we will show you how to use Hydra to make your applications and platforms utilize fast off-chain transaction processing via the Hydra Head protocol."),(0,r.kt)("p",{parentName:"blockquote"},"In this session you will learn what Hydra is all about, how to build scalable applications in a live coding session, get to know the hydra-pay and hydra-auction projects, and be guided through exercises to get your hands on these APIs and early SDKs.")),(0,r.kt)("p",null,"We are currently putting together a detailed outline and will send out\ncommunications on how to register for this exclusive session within the next 1-2\nweeks. Stay tuned."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The monthly review meeting for May was held on 2023-07-26 via Google Meet with\nthese ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1CQYAFztRcqofN6sbowg37QuXQ-DQU4NcDmoMghS36B8"},"slides")," and here is the ",(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/14ANZ3efuxgXpYK94EBWxZLR9TtN7voru/"},"recording"),"."),(0,r.kt)("p",null,"Although we had planned an awesome demo for this month's review meeting, showcasing a Hydra head hack without the authenticated messages feature, we encountered some live demo problems (lesson learned: always record a backup!). While we might present it next time, this situation emphasizes the need for continuous improvement in developer and user experiences."),(0,r.kt)("p",null,"We haven't received many questions on our journey to further mature the Hydra software stack to support various use cases building on it. However, the recently kicked-off Catalyst Fund10 sparked a nice discussion on how to handle all these great new ideas while being mindful not to fragment the scaling efforts too much."),(0,r.kt)("p",null,"Open protocols mean that new ideas can be incorporated not only into the various\ncode bases, but also in the specification and standards which ensure\ninteroperability. We discussed means to ensure adherence to standards in a\nlight-weight agile way and the challenges of educating potential contributors in\nspecification-driven development."),(0,r.kt)("p",null,"Next month we'll be at RareEvo, but might have the monthly just before in a\nhybrid session from Colorado. Until then, we'll make Hydra trivial to use and\nget started on our new objectives."))}d.isMDXComponent=!0},36424:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/2022-11-impact-97ad611fd8b3395a70498f12d26703de.png"},13918:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-07-roadmap-ex-ideas-f40d1c16b8ce755d0bc83b342c86bc8a.png"},11171:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-07-roadmap-389d8b69815010e9969b224281b64e30.png"},52154:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-07-starmap-6362d6f36ed51d70e68fa77b1dd39bf9.png"}}]);