"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[3094],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29966:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_label:"SDK for Delegated Voucher Auctions",sidebar_position:3},i="SDK for Delegated Voucher Auctions",s={unversionedId:"auctions/delegated-voucher-sdk/index",id:"auctions/delegated-voucher-sdk/index",title:"SDK for Delegated Voucher Auctions",description:"Modular SDK for App developers supporting delegated voucher auctions",source:"@site/use-cases/auctions/delegated-voucher-sdk/index.md",sourceDirName:"auctions/delegated-voucher-sdk",slug:"/auctions/delegated-voucher-sdk/",permalink:"/head-protocol/ja/use-cases/auctions/delegated-voucher-sdk/",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/use-cases/auctions/delegated-voucher-sdk/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"SDK for Delegated Voucher Auctions",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Delegated Voucher Open",permalink:"/head-protocol/ja/use-cases/auctions/delegated-voucher-open/"},next:{title:"Auctions-as-a-service Single",permalink:"/head-protocol/ja/use-cases/auctions/always-on-service-single/"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Features and Scope",id:"features-and-scope",level:2},{value:"Remaining limitations",id:"remaining-limitations",level:2},{value:"Prerequisites from Hydra technical roadmap",id:"prerequisites-from-hydra-technical-roadmap",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sdk-for-delegated-voucher-auctions"},"SDK for Delegated Voucher Auctions"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Modular SDK for App developers supporting delegated voucher auctions")),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The first two milestones result in a hydra-based auction implementation that contains the essential features necessary for a viable launch on Cardano. However, in order for it actually be usable in a commercial product, we will need to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Improve performance and robustness to production-ready levels."),(0,n.kt)("li",{parentName:"ul"},"Develop a browser-based frontend UI that provides a pleasant UX."),(0,n.kt)("li",{parentName:"ul"},"Upgrade backend services to support a vibrant ecosystem of sellers, bidders, and delegates creating and interacting with multiple auctions at the same time.")),(0,n.kt)("p",null,"As the next step, we will explore building an open-source SDK for delegated voucher auctions that is ready to be used by any dApp that needs auction features. Furthermore, the SDK should be composed from modular components that can themselves be reused in other hydra-based applications that have similar smart contract architectures."),(0,n.kt)("h2",{id:"features-and-scope"},"Features and Scope"),(0,n.kt)("p",null,"For the auction smart contracts, we will need to implement the following optimizations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use reference scripts for auction validators and minting policies."),(0,n.kt)("li",{parentName:"ul"},"Explore ways to make validators and minting policies non-parametric, so that the same reference scripts can be re-used in multiple auctions \u2013 possibly as a standardized modular component across different dApps.")),(0,n.kt)("p",null,"The reference implementation from the first two milestones can handle only a handful of auctions and has a rudimentary system for discovering auctions, bidders, sellers, delegates, and hydra heads. For a commercial product, this would have to be significantly improved with a properly scalable and dynamic directory and state indexer for the auctions ecosystem:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sellers, bidders, delegates, and other people can discover which auctions are currently active, who the relevant participants are in those auctions, and how to interact with them."),(0,n.kt)("li",{parentName:"ul"},"Lightweight subscriptions are available for events of specific auctions."),(0,n.kt)("li",{parentName:"ul"},"Aggregate metrics for current and historic auctions are available for general users.")),(0,n.kt)("p",null,"Most crucially, we will need to develop frontend UI code to provide an ergonomic and pleasant UX for auctions. For this purpose, it is highly desirable to partner-up with existing projects in Cardano that have developed significant expertise on marketplace and auction UX."),(0,n.kt)("h2",{id:"remaining-limitations"},"Remaining limitations"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A new Hydra Head must be opened for every auction."),(0,n.kt)("li",{parentName:"ol"},"Delegates can censor bidders from submitting bids to the auction."),(0,n.kt)("li",{parentName:"ol"},"Delegates are responsible on L2 for ensuring that the standing bid of the auction can only be replaced by a new bid that exceeds it by the minimum increment defined in the auction terms. However, bidders receive a multi-signed proof for every confirmed bid, which can be used as 4. incontrovertible proof against delegates if there\u2019s any foul play.")),(0,n.kt)("h2",{id:"prerequisites-from-hydra-technical-roadmap"},"Prerequisites from Hydra technical roadmap"),(0,n.kt)("p",null,"To be determined."))}p.isMDXComponent=!0}}]);