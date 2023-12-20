"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[7903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,u=c["".concat(p,".").concat(m)]||c[m]||h[m]||r;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={title:"December 2022",slug:"2022-12",authors:"ch1bo",tags:["monthly"]},i=void 0,s={permalink:"/head-protocol/ja/monthly/2022-12",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/monthly/2022-12-monthly.md",source:"@site/monthly/2022-12-monthly.md",title:"December 2022",description:"This report summarizes the work on Hydra since November 2022 and also serves as",date:"2023-01-09T08:43:30.000Z",formattedDate:"2023\u5e741\u67089\u65e5",tags:[{label:"monthly",permalink:"/head-protocol/ja/monthly/tags/monthly"}],readingTime:4,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Software Engineering Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"December 2022",slug:"2022-12",authors:"ch1bo",tags:["monthly"]},prevItem:{title:"January 2023",permalink:"/head-protocol/ja/monthly/2023-01"},nextItem:{title:"November 2022",permalink:"/head-protocol/ja/monthly/2022-11"}},p={authorsImageUrls:[void 0]},l=[{value:"Roadmap",id:"roadmap",level:2},{value:"Notable changes",id:"notable-changes",level:4},{value:"Development",id:"development",level:2},{value:"Hydra V1 Specification",id:"hydra-v1-specification",level:2},{value:"Community",id:"community",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:l},c="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This report summarizes the work on Hydra since November 2022 and also serves as\na preparation & write-up of the monthly review meeting, in which we update major\nstakeholders of the project on recent developments and gather their feedback on\nour proposed plan forward each month."),(0,o.kt)("h2",{id:"roadmap"},"Roadmap"),(0,o.kt)("p",null,"Looking at our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/input-output-hk/projects/21"},"roadmap")," we\ncan report the following updates:"),(0,o.kt)("h4",{id:"notable-changes"},"Notable changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Completed ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/194"},"Validate coordinated head protocol against formal model #194 ")," "),(0,o.kt)("li",{parentName:"ul"},"Detailed a follow-up ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/656"},"Validate soundness with Model Based Testing #656")),(0,o.kt)("li",{parentName:"ul"},"Focus on specification and gap-closing to support audit"),(0,o.kt)("li",{parentName:"ul"},"Scoped down 0.9.0 to be only about script updates and moved ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/215"},"Commit from external wallet #215")," into next version"),(0,o.kt)("li",{parentName:"ul"},"Groomed ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/195"},"React to mainchain protocol changes #195")),(0,o.kt)("li",{parentName:"ul"},"More users requesting ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/196"},"Support timed transactions #196"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(33351).Z,width:"3119",height:"985"})),(0,o.kt)("small",null,(0,o.kt)("center",null,"Latest roadmap with drafted 0.10.0 version.")),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2022-11-30..2022-12-31"},"Issues closed since last report")),(0,o.kt)("p",null,"This month we have been working on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Fixed ",(0,o.kt)("inlineCode",{parentName:"strong"},"AcquirePointTooOld")," errors")," by changing the way the internal wallet\ninitializes its state\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/621"},"#621"),". See the PR\ndescription for details. This did not strictly happen this month, but we have\nnot mentioned it last time. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Closed first gap in Head Contract"),": We collected gaps between specification\nand current implementation in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/452"},"#452")," and started now\nclosing them. This first issue, was to prevent DoS / stalling of heads, by\nbounding the lower and upper transaction validity time of the ",(0,o.kt)("inlineCode",{parentName:"p"},"close"),"\ntransaction. As always, time handling is hard and this required detailed\ndiscussion in the form of an ADR. See\n",(0,o.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/adr/21"},"ADR21")," for more details.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Reduced cost of commits")," by at least ",(0,o.kt)("strong",{parentName:"p"},"30%")," using reference scripts also\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},"commit")," transaction. We only used reference scripts in ",(0,o.kt)("inlineCode",{parentName:"p"},"abort")," so far.\nThis reduces the min ADA cost of ",(0,o.kt)("inlineCode",{parentName:"p"},"commit")," because the transactions are roughly\n5.2KB smaller."),(0,o.kt)("p",{parentName:"li"},"Before:\n",(0,o.kt)("img",{src:n(72245).Z,width:"557",height:"108"})),(0,o.kt)("p",{parentName:"li"},"After:\n",(0,o.kt)("img",{src:n(12451).Z,width:"553",height:"107"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Use nix flakes & build docker images using nix"),": Triggered by a migration\nto Cicero for a nix-based CI, we started using nix flakes for ",(0,o.kt)("inlineCode",{parentName:"p"},"nix build")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"nix develop")," instead of the legacy ",(0,o.kt)("inlineCode",{parentName:"p"},"nix-shell")," in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/646"},"#646"),". While we ended up\nsticking with Github Actions as the only CI and a Cachix cache, we extended\nthis work to build our docker images more efficiently using ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/654"},"#654"),"."),(0,o.kt)("p",{parentName:"li"},"Image sizes went down between 20-50%:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(39207).Z,width:"1552",height:"244"})),(0,o.kt)("p",{parentName:"li"},"While docker CI builds on ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," went down to 1-10min (from 10-30m+)!"))),(0,o.kt)("h2",{id:"hydra-v1-specification"},"Hydra V1 Specification"),(0,o.kt)("p",null,"Finally, we bit the bullet and started a write-up of the specification. Over the\nlast couple of months we had worked with marked up versions (see below) of the\noriginal paper and a GDoc to discuss and review the protocol as it was\nimplemented."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7644).Z,width:"707",height:"540"})),(0,o.kt)("p",null,"As we also updated the security properties and proofs, we started aggregating a\nLaTeX document on overleaf. While it holds a similar background and\npreliminaries as the original paper, it only specifies a single version of the\nprotocol with no variants, less modularization, as well as explicit assumptions\nand important notes for implementors."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4722).Z,width:"1577",height:"689"})),(0,o.kt)("p",null,"We aim to be publishing the spec as part of the main ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra"},"hydra repository")," soon."),(0,o.kt)("h2",{id:"community"},"Community"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Hydra for Payments project")," completed the first phase of this work stream\nby tagging version ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/obsidiansystems/hydra-pay/releases/tag/v0.1.0"},"0.1.0"),".\nThis open source project conducted by Obsidian Systems and sponsored by IOG\ncreated a great starting point for developers to build services/APIs of\npayment channels using Hydra Head. This month we reviewed the improved\ndocumentation and are looking forward to see this work applied to eventually\nbuild fast & cheap payments for light-wallet users and power payment channel\nuse cases from business-to-business (B2B) in the short-term.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Hydra for Voting project")," kicked off this joint project between IOG\nResearch, Catalyst & Hydra Tribes, and the Cardano Foundation. The goal is to\nassess suitability of Hydra Head to support voting use cases by implementing\nparts of Catalyst voting system on Hydra Head and benchmark execution at\nscale. The kick-off meeting took place on December 15.\n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Blog post by CF"),": To round off the year, Matthias wrote a nice\n",(0,o.kt)("a",{parentName:"p",href:"https://cardanofoundation.org/en/news/hydra-head-protocol-an-open-source-solution-for-scalability/"},"retrospective blog\npost"),"\nabout Hydra at the CF. Besides summarizing our progress made in 2022 it also\ngives an outlook where Hydra is headed for in 2023."))),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,'Although Hydra is in essence an open source project right now, we would love to\nmake it "even more open source" in the coming months. Our vision of Hydra\nrequires to have the builders of the Cardano ecosystem to be part of this\njourney. For that matter, we want not only to open up these monthly reports, but\nthe review meeting backing it as well!'),(0,o.kt)("p",null,"This, besides our engagements with the community above, will allow the project\nto grow beyond IOG & CF contributions. To become the true Cardano open source\nproject we believe will be worthy to serve as the scalability component required\nby the Cardano network."))}h.isMDXComponent=!0},12451:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2022-12-commit-new-aad3874fc0d688c64d1e40fd556433d3.png"},72245:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2022-12-commit-782f8dd66a0344326187358e3f41bc48.png"},39207:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2022-12-docker-images-bc1665869d91e36b30b5191f084e141a.png"},7644:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2022-12-marked-up-paper-5354284a6ca23c01b74593af47a94fa2.png"},33351:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2022-12-roadmap-120a9df31c88202e1d06943bbcf156c8.png"},4722:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2022-12-spec-overleaf-36d2b23cfb2f8931a3e4200623041da1.png"}}]);