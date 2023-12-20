"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[4383],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,c=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(c,i(i({ref:t},h),{},{components:a})):n.createElement(c,i({ref:t},h))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13164:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"January 2023",slug:"2023-01",authors:"ch1bo",tags:["monthly"]},i=void 0,s={permalink:"/head-protocol/unstable/ja/monthly/2023-01",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/monthly/2023-01-monthly.md",source:"@site/monthly/2023-01-monthly.md",title:"January 2023",description:"This report summarizes the work on Hydra since December 2022. It serves as",date:"2023-01-26T11:32:23.000Z",formattedDate:"2023\u5e741\u670826\u65e5",tags:[{label:"monthly",permalink:"/head-protocol/unstable/ja/monthly/tags/monthly"}],readingTime:5.845,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Software Engineering Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"January 2023",slug:"2023-01",authors:"ch1bo",tags:["monthly"]},prevItem:{title:"February 2023",permalink:"/head-protocol/unstable/ja/monthly/2023-02"},nextItem:{title:"December 2022",permalink:"/head-protocol/unstable/ja/monthly/2022-12"}},l={authorsImageUrls:[void 0]},p=[{value:"Roadmap",id:"roadmap",level:2},{value:"Development",id:"development",level:2},{value:"Community",id:"community",level:2},{value:"Themes for 2023",id:"themes-for-2023",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This report summarizes the work on Hydra since December 2022. It serves as\npreparation for the monthly review meeting, where the teams update major project\nstakeholders on recent developments to gather their feedback on the proposed\nplan forward."),(0,r.kt)("h2",{id:"roadmap"},"Roadmap"),(0,r.kt)("p",null,"Looking at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/input-output-hk/projects/21"},"roadmap"),",\nthere are just a few things to report this month:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Regroomed ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/448"},"Create updated specification for coordinated head protocol\n#448")," to \ud83d\udc9b,\nas good progress was made on the specification")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Marked ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/452"},"Align implementation with HeadV1 protocol specification\n#452")," as \ud83d\udd34, as\nthe team experienced scope creep and has not progressed as fast as expected."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The plan is to break this initiative into smaller tasks to address and\nexplain implementation challenges.")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(37330).Z,width:"3122",height:"982"})," ",(0,r.kt)("small",null,(0,r.kt)("center",null," The latest roadmap with minor\nchanges, which needs a reflection of the latest objectives. "))),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2022-12-23..2023-01-24"},"Issues closed since last\nreport")),(0,r.kt)("p",null,"This month, the team worked on the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"First write-up of Hydra spec online"),". The team has been aggregating the\nlatest definitions of on- and off-chain semantics into a new technical\nspecification. The latest version can still be found ",(0,r.kt)("a",{parentName:"p",href:"https://www.overleaf.com/project/6389ba5edbcf7a51fda1328f"},"on\nOverleaf"),", before\nits integration into the core Hydra repository. Should you have feedback,\nplease send it our way through one of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/master/SUPPORT.md"},"communication\nchannels"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Closed more gaps in the Head Contract.")," The team addressed two more gaps in\nthe on-chain scripts based on discussions on the specification."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All validators are authenticated now and ensure contract continuity by\nchecking for the state tokens in the output (or getting burned).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Abort now fully reimburses all committed UTXOs, even if two parties would\nhave committed the exact same output (quite a theoretical attack vector)."))),(0,r.kt)("p",{parentName:"li"},"This work is captured in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/452"},"#452"),", but this work\nitem is taking quite a bit longer than expected. Also, it's a single feature\nitem, lacking some rationale on certain requirements, so we intend to break\nthis down into smaller pieces over the next days and weeks.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mutation test framework improvements.")," While closing gaps in the contracts,\nthe team realized that some of the ",(0,r.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/haddock/hydra-node/tests/Hydra-Chain-Direct-Contract-Mutation.html"},"mutation\ntests"),"\nwere correctly tripping validators and making transactions invalid, but not\nalways for the right reason. In fact, some of the mutations were \u2018too harsh\u2019\nand made the even transaction not even pass phase-1 validation. The team\naddressed this by introducing a first (naiive) way to assert the right cause\nof the failure by checking strings in the validator log.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pulls/679"},"#679"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add ",(0,r.kt)("inlineCode",{parentName:"strong"},"headId")," in API and TUI.")," The team not only added the unique ",(0,r.kt)("inlineCode",{parentName:"p"},"headId"),"\nto the appropriate server outputs and the TUI\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/678"},"#678"),", but also added\nsequence numbers and timestamps to produced outputs\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/618"},"#618"),". This feature was\nasked for by users and simplifies identifying of heads and integration with\nthe hydra-node.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Hydra explorer experiment.")," Some of the team used the holiday season to\nconduct some experiments on summarizing Hydra Heads observed on a network.\nThis quick hack already demonstrates the value of a Hydra explorer as a tool\nto measure adoption by open heads on a given network. Naturally, it would\nreuse code from the hydra-node and challenge the architecture used in it for\ntracking multiple heads. Also, it will drive discussion about the versioning\nof hydra-plutus and the possibility to track multiple versions of the Hydra\nprotocol on the chain (hashes/addresses change in each version)."))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(37298).Z,width:"2765",height:"801"})," ",(0,r.kt)("small",null,(0,r.kt)("center",null," Hydra explorer first experiment\nUI "))),(0,r.kt)("h2",{id:"community"},"Community"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"The Hydra for Voting project"),", which got kicked off in December is picking\nup steam with deep dives into Catalyst voting and Hydra technology.\nDiscussions are currently held in various settings and the team is continuing\nto develop a picture of what is achievable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Hydra for auctions lite paper"),". IOG is collaborating with MLabs on\nexploring how Hydra can improve auction use cases. At this stage, the teams\ndiscussed multiple approaches on structuring the problem space with various\nHydra topologies and specific trade-offs. The full case study was published\n",(0,r.kt)("a",{parentName:"p",href:"https://www.essentialcardano.io/article/implementing-auction-projects-using-hydra"},"on Essential\nCardano"),".\nThe teams plan to upstream the findings back into the ",(0,r.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/use-cases/nft-auction/"},"use case\nsection")," on the\nHydra website from which this project originated."))),(0,r.kt)("h2",{id:"themes-for-2023"},"Themes for 2023"),(0,r.kt)("p",null,"After kicking off planning in a\n",(0,r.kt)("a",{parentName:"p",href:"http://ncoding.at:3000/head-protocol/monthly/2022-11#cardano-summit--workshop"},"workshop"),"\nand reflecting on ",(0,r.kt)("a",{parentName:"p",href:"https://cardanofoundation.org/en/news/hydra-head-protocol-an-open-source-solution-for-scalability/"},"what Hydra achieved in\n2023"),",\nthe team has progressed in fleshing out relevant themes and objectives for this\nyear to position Hydra as a sustainable open-source project in the age of\nVoltaire:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"A mainnet mature application")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Why?")," The core contributors should be able to use the protocol on\nmainnet, so it should be maintainable and mature enough to lock some ada in\na Hydra Head using a reference DApp (eg, hydraw). By creating and growing\nthis DApp, the team will\n",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Eating_your_own_dog_food"},"dogfood")," features\nand hence improve additional usability."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"How to measure?")," Number of heads on mainnet > 0 and core contributors\nfeel confident to lock at least 100\u20b3 in a Hydra Head on mainnet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Next steps:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Publish Hydra Head V1 specification"),(0,r.kt)("li",{parentName:"ul"},"Close gaps in implementation and release 0.9.0"),(0,r.kt)("li",{parentName:"ul"},"Create a request for proposals (RFP) to audit the specification and its\nimplementation"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Increase adoption")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Why?")," The team wants to showcase what is possible with Hydra through\nbenchmarks and lighthouse projects, enabling use cases and reducing friction\nto use Hydra. Also, ensuring interoperability through open standards and\nreference implementations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"How to measure?")," Number of third-party created heads on any network > 0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Next steps:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Build a basic Hydra Head explorer to measure adoption"),(0,r.kt)("li",{parentName:"ul"},"Benchmark off-chain performance (of a selected scenario)"),(0,r.kt)("li",{parentName:"ul"},"Demonstrate Hydra for payments to potential users"),(0,r.kt)("li",{parentName:"ul"},"Support Hydra for voting project"),(0,r.kt)("li",{parentName:"ul"},"Hydra for auctions project exploring a delegated voucher auction"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sustainable open-source-development")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Why?")," The team wants to scale Cardano in the long run. Hence this project\nshould not be owned by a single entity, but by the community and the Cardano\nnetwork itself. It is thus essential to make contributions to the project\npossible and ultimately it should be easy to become a contributor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"How to measure?")," Number of contributors on GitHub"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Next steps:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Open up monthly reviews"),(0,r.kt)("li",{parentName:"ul"},"Add tutorials to the website"),(0,r.kt)("li",{parentName:"ul"},"Publish and maintain a use-case-centric roadmap and feature map")))))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"This monthly review was the first public one with not only stakeholders from IOG\nand the CF, but also collaborators of the latest projects. This was the first\nstep to a more open and transparent development process."),(0,r.kt)("p",null,"The teams showed some classic demos \u2013 like the \u2018hydraw\u2019 application which has\nbeen running on the same Hydra Head for four weeks now \u2013 and some new\ndevelopments on the Hydra explorer and minor improvements to hydra-node API and\nTUI."),(0,r.kt)("p",null,"It was very interesting to bring various teams together to exchange ideas and\nthoughts on the individual roadmaps for the new year. The teams also shared the\nrelevant themes and objectives of the Hydra project for 2023 (as also listed\nabove). They will now make sure to reflect these steps into this concrete\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/input-output-hk/projects/21"},"roadmap")," such that it will\ncontain ",(0,r.kt)("a",{parentName:"p",href:"https://www.agilealliance.org/glossary/mmf/"},"marketable features"),"\nbringing us closer to these goals."))}m.isMDXComponent=!0},37298:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-01-explorer-051813ee8b3a4cac21ca35d6ba2f83d0.png"},37330:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-01-roadmap-d445b3f9b76a572928bb5b6b3e404442.png"}}]);