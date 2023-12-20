"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[6932],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var o=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(i),h=n,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return i?o.createElement(m,a(a({ref:t},c),{},{components:i})):o.createElement(m,a({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var d=2;d<r;d++)a[d]=i[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},69032:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=i(87462),n=(i(67294),i(3905));const r={sidebar_label:"Delegated Voucher Open",sidebar_position:2},a="Delegated Voucher Auctions (Open)",s={unversionedId:"auctions/delegated-voucher-open/index",id:"auctions/delegated-voucher-open/index",title:"Delegated Voucher Auctions (Open)",description:"Extension of invitational auctions to enable open auctions, where bidders can freely participate without permission from sellers. It would require bids to be fully collateralized upon submission.",source:"@site/use-cases/auctions/delegated-voucher-open/index.md",sourceDirName:"auctions/delegated-voucher-open",slug:"/auctions/delegated-voucher-open/",permalink:"/head-protocol/unstable/use-cases/auctions/delegated-voucher-open/",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/use-cases/auctions/delegated-voucher-open/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Delegated Voucher Open",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Delegated Voucher Invitational",permalink:"/head-protocol/unstable/use-cases/auctions/delegated-voucher-invitational/"},next:{title:"SDK for Delegated Voucher Auctions",permalink:"/head-protocol/unstable/use-cases/auctions/delegated-voucher-sdk/"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Prerequisites from Hydra technical roadmap",id:"prerequisites-from-hydra-technical-roadmap",level:2},{value:"Remaining limitations",id:"remaining-limitations",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"delegated-voucher-auctions-open"},"Delegated Voucher Auctions (Open)"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Extension of invitational auctions to enable open auctions, where bidders can freely participate without permission from sellers. It would require bids to be fully collateralized upon submission.")),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The private invitational auction from the initial prototype is a very common use case, but there is also demand for a more casual auction format, whereby bidders can freely participate in any public auction without any vetting from sellers.\nHowever, for sellers to be comfortable with this auction format, we need stronger backing for bids to mitigate the risk of bidders attempting to dishonor their bids \u2013 ideally, all bids should be fully collateralized by bidder deposits towards the auction. Thus, as a possible extension of the initial prototype auction design , we can replace the fixed security deposit from the prototype with a method that allows bidders to place sufficient deposits on L1 and then show proof of these deposits whenever they make bids on L2."),(0,n.kt)("h2",{id:"workflow"},"Workflow"),(0,n.kt)("p",null,"In this step, each public auction would work as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Delegates initialize a Hydra Head, making it available to host the bidding for a yet-to-be-announced auction."),(0,n.kt)("li",{parentName:"ol"},"The seller announces an auction to sell a given NFT (the \u201cauction lot\u201d), sets the terms of the auction, deposits the NFT into the auction smart contract, and indicates which Hydra Head will host the auction\u2019s bidding process on L2."),(0,n.kt)("li",{parentName:"ol"},"Near the bidding start-time, the bidding process for the auction moves from L1 (where the auction was announced) to L2 (the delegates\u2019 Hydra Head)."),(0,n.kt)("li",{parentName:"ol"},"Bidders submit bids to delegates, who collectively witness the bids in the Hydra Head ledger and confirm bids to bidders via multi-signed ledger snapshots.\nA bid is valid only if proof is attached of a sufficient deposit placed by the bidder on L1 towards the auction. Bidders make these deposits as needed on L1, to support their bids on L2."),(0,n.kt)("li",{parentName:"ol"},"At the end of the bidding phase, the Hydra Head is closed and the standing bid is moved to L1. The bidder that submitted that standing bid becomes the winner of the auction."),(0,n.kt)("li",{parentName:"ol"},"At the end of the bidding phase, the standing bid and the winning bidder\u2019s deposit are used to send the auction lot to the winning bidder and the winning bid payment to the seller."),(0,n.kt)("li",{parentName:"ol"},"At the end of the bidding phase, all other bidders can reclaim their bid deposits.")),(0,n.kt)("h2",{id:"prerequisites-from-hydra-technical-roadmap"},"Prerequisites from Hydra technical roadmap"),(0,n.kt)("p",null,"No specific prerequisites are currently anticipated, but some may come up."),(0,n.kt)("h2",{id:"remaining-limitations"},"Remaining limitations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Auction implementation is a prototype, not necessarily ready for production."),(0,n.kt)("li",{parentName:"ul"},"A new Hydra Head must be opened for every auction."),(0,n.kt)("li",{parentName:"ul"},"Delegates can censor bidders from submitting bids to the auction."),(0,n.kt)("li",{parentName:"ul"},"Delegates are responsible on L2 for ensuring that the standing bid of the auction can only be replaced by a new bid that exceeds it by the minimum increment defined in the auction terms. However, bidders receive a multi-signed proof for every confirmed bid, which can be used as incontrovertible proof against delegates if there\u2019s any foul play.")))}p.isMDXComponent=!0}}]);