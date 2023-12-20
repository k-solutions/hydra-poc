"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[6817],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=h(a),u=r,c=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(c,i(i({ref:t},p),{},{components:a})):n.createElement(c,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var h=2;h<o;h++)i[h]=a[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73409:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var n=a(87462),r=(a(67294),a(3905));const o={title:"November 2023",slug:"2023-11",authors:["ch1bo","abailly"],tags:["monthly"]},i=void 0,s={permalink:"/head-protocol/unstable/ja/monthly/2023-11",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/monthly/2023-11-monthly.md",source:"@site/monthly/2023-11-monthly.md",title:"November 2023",description:"This report summarizes the work on Hydra since October 2023. It serves as",date:"2023-12-04T12:50:55.000Z",formattedDate:"2023\u5e7412\u67084\u65e5",tags:[{label:"monthly",permalink:"/head-protocol/unstable/ja/monthly/tags/monthly"}],readingTime:5.76,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Software Engineering Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"},{name:"Arnaud Bailly",title:"Lead Architect",url:"https://github.com/abailly-iohk",imageURL:"https://github.com/abailly-iohk.png",key:"abailly"}],frontMatter:{title:"November 2023",slug:"2023-11",authors:["ch1bo","abailly"],tags:["monthly"]},nextItem:{title:"October 2023",permalink:"/head-protocol/unstable/ja/monthly/2023-10"}},l={authorsImageUrls:[void 0,void 0]},h=[{value:"Roadmap",id:"roadmap",level:2},{value:"Notable updates",id:"notable-updates",level:4},{value:"Hydra development",id:"hydra-development",level:2},{value:"MeshJS + Hydra",id:"meshjs--hydra",level:3},{value:"Rendering the Hydra specification",id:"rendering-the-hydra-specification",level:3},{value:"Community update",id:"community-update",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:h},d="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This report summarizes the work on Hydra since October 2023. It serves as\npreparation for the monthly review meeting (see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1JA_frlOXVrrBeaBGUnIq3U9cclrfU1A2cZR9B2AeVJg"},"slides")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1-iv8IveUzA2KrJV_Kqrgx4ts05Ow0zjM"},"recording"),"), where the team updates project stakeholders on recent\ndevelopments to gather their feedback on proposed plans."),(0,r.kt)("h2",{id:"roadmap"},"Roadmap"),(0,r.kt)("p",null,"This month, several items were restructured on the project\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/input-output-hk/projects/21/views/7"},"roadmap"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The roadmap with features and ideas",src:a(48936).Z,width:"10064",height:"4868"})," ",(0,r.kt)("small",null,(0,r.kt)("center",null,"The latest roadmap with features and ideas"))),(0,r.kt)("h4",{id:"notable-updates"},"Notable updates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Release of version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.14.0")," is imminent as most of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/1096"},"stateless chain\nobservation #1096"),"\nfeature is done and only some internal refactoring missing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The user-submitted feature idea on supporting extended keys,\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/1141"},"#1141"),", has\nbeen refined. The purpose of this item is now clear, and although\nit's not currently a priority, work on it can be started.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Two new items were created to improve the developer experience of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/1146"},"Hydra build\ntoolchain #1146"),". Additionally, a\nfollow-up on things learned by ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-poll")," aims to create a full end-to-end\nexample of a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/1098"},"two-player game in a Hydra head\n#1098"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There was already an item about reacting to main chain parameter changes on the\nroadmap, which included not only protocol parameter updates, but also\nhard-fork events. With the upcoming hard fork into ",(0,r.kt)("inlineCode",{parentName:"p"},"Conway"),", the team split off the\nchanges needed to navigate the hard fork and clarified them:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1177"},"Conway support #1177")," will make the ",(0,r.kt)("inlineCode",{parentName:"li"},"hydra-node")," support Conway and allow users to keep heads open across the hard fork."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1178"},"Drop Babbage support #1178")," will eventually drop support for the Babbage era and retain maintainability."),(0,r.kt)("li",{parentName:"ul"},"The original item is only about ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/195"},"reacting to protocol parameter changes #195")," now."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Substantial updates were made to the design of the next major feature ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/1057"},"Incremental decommit #1057"),", and work on it can be started.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In general, the team prepared several of these \ud83d\udcad idea items and many of them will turn into \ud83d\udcac features soon."))),(0,r.kt)("h2",{id:"hydra-development"},"Hydra development"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2023-10-31..2023-11-30"},"Issues and pull requests closed since the last\nreport")),(0,r.kt)("p",null,"This month, the team worked on the following:"),(0,r.kt)("h3",{id:"meshjs--hydra"},"MeshJS + Hydra"),(0,r.kt)("p",null,"At the beginning of month, the team attended the Cardano Summit in Dubai where they held\nthe ",(0,r.kt)("em",{parentName:"p"},"Hydra MasterClass")," workshop. There they also presented the Hydra-Poll dApp\nwhich is using MeshJS to build Hydra transactions on the frontend."),(0,r.kt)("p",null,"The Hydra team collaborated closely with the MeshJS team and as the outcome of this work\nThe MeshJS team added some Hydra specific features to the MeshJS SDK. There is a nice low\nlevel ",(0,r.kt)("a",{parentName:"p",href:"https://meshjs.dev/apis/transaction/builderExample"},"API")," for building\ncustom transactions which is pretty similar to what ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-cli")," does."),(0,r.kt)("p",null,"Now you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"isHydra")," field which you can pass to this API which then uses\nanother set of protocol paramters suitable for Hydra (eg. usually in Hydra we\nwant to have zero transaction fees, reduce script execution units etc.)."),(0,r.kt)("p",null,"Big thanks to the MeshJS team on giving much needed support. They were\npresenting these changes in the monthly review meeting so make sure to watch the\n",(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1-iv8IveUzA2KrJV_Kqrgx4ts05Ow0zjM"},"recording"),"."),(0,r.kt)("h3",{id:"rendering-the-hydra-specification"},"Rendering the Hydra specification"),(0,r.kt)("p",null,"Besides working on the design of incremental commits itself, the team also\ntidied up the way the ",(0,r.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/core-concepts/specification"},"Hydra protocol\nspecification"),"\nis written."),(0,r.kt)("p",null,"So far, the specification was written in LaTex and rendered to a PDF. LaTeX was\na good choice because of its expressiveness on math expressions, but not so\ngreat a choice for pull requests and the entry barrier is quite\nhigh. The majority of documentation around Hydra and Mithril is written using\nMarkdown and rendered into a webpage using a static site generator, currently\n",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),". Most modern Markdown renderers do support\nLaTeX-style math nowadays, even the normal ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions"},"GitHub file\npreview"),"."),(0,r.kt)("p",null,"Hence, the team experimented with using the more standard Markdown format to write the\nspecification, but still being able to use LaTeX math ",(0,r.kt)("strong",{parentName:"p"},"and")," LaTeX macros\n(which are ",(0,r.kt)("em",{parentName:"p"},"still")," heavily used in the spec). The aim is to have both, a\nPDF and HTML rendering."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://ipfs.io/ipfs/QmPUTYaSViLEyZcGmsTPL4jHdGSevH3yc3RD7TRhU3ivwH?filename=Peek%202023-11-28%2018-42.gif",alt:null})),(0,r.kt)("p",null,"While not yet finished, the GIF above shows the progress being made using\n",(0,r.kt)("a",{parentName:"p",href:"https://pandoc.org/"},"pandoc")," to resolve macros, producing a PDF via ",(0,r.kt)("inlineCode",{parentName:"p"},"xelatex"),"\nand Docusaurus compatible markdown. Using powerful extensions of pandoc one can\neven convert TikZ, GraphViz and Mermaid into both target formats."),(0,r.kt)("h2",{id:"community-update"},"Community update"),(0,r.kt)("p",null,"Beside the great work done by the MeshJS team towards supporting Hydra in the browser, here are some news and updates on community-led work streams related to Hydra:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SundaeLabs has made good progress on their ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/1118"},"offline mode\nPR")," which should\nhit the main branch soon,")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TxPipe has been collaborating with IOG's creative engineering team\nto build ",(0,r.kt)("em",{parentName:"p"},"Cardaminal"),", a command-line wallet, and demonstrated it\nduring the monthly review meeting. Cardaminal is built in Rust,\nleveraging ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/txpipe/pallas"},"Pallas")," libraries, and\nis aimed at being a fully-fledged scriptable wallet providing users\nwith powerful stateful transaction edition capabilities, native\nassets management, chain synchronisation, etc."),(0,r.kt)("p",{parentName:"li"},"The plan is to make Cardaminal compatible with Hydra - to be able to\nuse it to interact with a head - and Mithril - using snapshots to\nsynchronise the wallet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The team behind ",(0,r.kt)("a",{parentName:"p",href:"https://projectcatalyst.io/funds/10/f10-development-and-infrastructure/a-zero-knowledge-proof-framework-for-cardano-based-on-hydra-and-zk-snarks"},"ZK Snarks in\nHydra"),"\nCatalyst proposal is making good progress and should be able to give\na demo at the next monthly review meeting"))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The monthly review meeting for November 2023 was held on 2023-11-27 via Google\nMeet with these ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1JA_frlOXVrrBeaBGUnIq3U9cclrfU1A2cZR9B2AeVJg"},"slides")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1-iv8IveUzA2KrJV_Kqrgx4ts05Ow0zjM"},"recording"),"."),(0,r.kt)("p",null,"The Hydra team is thankful to have again had so many great demos from the numerous projects\nin and around Hydra and Mithril projects - we should really schedule it to be one\nhour planned duration. Also, if you have not watched it already, make sure to\ncheck out the recording, the written report is merely expanding on a couple of\ntopics but cannot render the cool demonstrations."),(0,r.kt)("p",null,"At first look, the demonstrated projects may appear not related - we even had a\nminimal command-line wallet on the show after all. But as we went on, these\nimpulses spark discussions and it becomes clear that all of these projects are\nconnected."),(0,r.kt)("p",null,"For example, the terminal-based wallet 'Cardaminal' as it was presented the\nfirst time in public this month, could itself become a Mithril client for faster\nsynchronizing or even light-mode using the recently published Rust client\nlibrary for Mithril. Furthermore, such a minimal wallet would be a great testing\nground for a Hydra-aware wallet. The MeshJS integration also has further\npotential of Hydra specific ",(0,r.kt)("inlineCode",{parentName:"p"},"fetcher")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"submitter")," providers."),(0,r.kt)("p",null,"On the other hand, we also stumbled over not-so-optimistic sentiment even in\nmuch more mature scaling solutions like the Bitcoin Lightning Network. ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/udiWertheimer/status/1719122153155473492"},"This\ntweet")," summarizes\nthat creating non-custodial ","[scalability/LN]"," solutions 'feel like the most\nthankless thing in the world'."),(0,r.kt)("p",null,"It is an exciting ride still, but events like this monthly review meeting with\nits colorful demonstrations of small steps to improve the usability\nand scalability of Cardano piece by piece with often unknown synergies is also\nempowering. This month again made us feel not 'only a tribe', but more a working\ngroup across the Cardano community .. the Cardano Scaling group!?"))}m.isMDXComponent=!0},48936:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-11-roadmap-4d71f2e1c5303a1ecbc4311421f8d889.jpg"}}]);