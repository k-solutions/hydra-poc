"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[4085],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(i),p=a,m=h["".concat(d,".").concat(p)]||h[p]||u[p]||o;return i?n.createElement(m,r(r({ref:t},c),{},{components:i})):n.createElement(m,r({ref:t},c))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[h]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=i[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},45494:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=i(87462),a=(i(67294),i(3905));const o={sidebar_label:"Delegated Voucher Invitational",sidebar_position:1},r="Delegated Voucher Auctions (Invitational)",s={unversionedId:"auctions/delegated-voucher-invitational/index",id:"auctions/delegated-voucher-invitational/index",title:"Delegated Voucher Auctions (Invitational)",description:"The first complete prototype of an auction that can host its bidding process on L2.",source:"@site/use-cases/auctions/delegated-voucher-invitational/index.md",sourceDirName:"auctions/delegated-voucher-invitational",slug:"/auctions/delegated-voucher-invitational/",permalink:"/head-protocol/use-cases/auctions/delegated-voucher-invitational/",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/use-cases/auctions/delegated-voucher-invitational/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Delegated Voucher Invitational",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Auctions",permalink:"/head-protocol/use-cases/auctions/"},next:{title:"Delegated Voucher Open",permalink:"/head-protocol/use-cases/auctions/delegated-voucher-open/"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Design",id:"design",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Prerequisites from Hydra technical roadmap",id:"prerequisites-from-hydra-technical-roadmap",level:2},{value:"Remaining limitations",id:"remaining-limitations",level:2}],c={toc:l},h="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(h,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"delegated-voucher-auctions-invitational"},"Delegated Voucher Auctions (Invitational)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The first complete prototype of an auction that can host its bidding process on L2.")),(0,a.kt)("admonition",{title:"This use case is under development",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This project is an ongoing effort in collaboration with MLabs. Source code and documentation can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mlabs-haskell/hydra-auction"},"here"),".")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"As the first building block of what might grow, with the help of the Cardano community, into a Hydra-based auction framework, we develop a first complete prototype of an auction that can host its bidding process on a Cardano Hydra Head. Among the design candidates considered in our ",(0,a.kt)("a",{parentName:"p",href:"https://iohk.io/en/blog/posts/2023/01/20/implementing-auction-projects-using-hydra/"},"Jan 2023 paper"),", the delegated voucher auction makes the best use of the respective strengths of Cardano mainnet (L1) and the Hydra Head protocol (L2) while mitigating their weaknesses."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(52164).Z,width:"3600",height:"2577"})),(0,a.kt)("p",null,"Cardano ensures the integrity of its mainnet ledger by broadcasting each transaction across a large globally-distributed network of independent nodes and randomly selecting a slot leader among them to add the next block to the chain. This makes it exceedingly hard to add an invalid transaction to the ledger, censor a new transaction from reaching the ledger, or contradict the existence and position of a stable transaction within the ledger. Furthermore, Cardano\u2019s Ouroboros consensus protocol is robust to nodes freely entering and leaving the network, as long as an honest majority of stake is maintained. However, Cardano mainnet has a high overhead of cost and latency, because every transaction and block must be broadcast, stored, and validated on every node across the world.\nThe Hydra Head protocol massively reduces this cost and latency overhead by distributing its ledger across a much smaller network of direct participants in the protocol and only tracking transactions that interact with a small subset of the mainnet UTxOs. However, it is up to the direct participants in the Hydra Head protocol to maintain the integrity of the ledger and all participants must unanimously agree on every transaction that gets added to the ledger. This means that anyone committing funds to a Hydra Head must either directly participate in the protocol or else effectively grant custody over the committed funds to the direct participants. It also means that no one can do anything in the Hydra Head without unanimous consent from the direct participants. Furthermore, the Hydra Head protocol requires all participants to be online and responsive to each other, or else it will stall its progress."),(0,a.kt)("h2",{id:"design"},"Design"),(0,a.kt)("p",null,"We want the bidding experience to be lively and efficient, which is difficult to provide on L1, so we host the bidding process of our auction on L2. However, we can\u2019t have the bidders be direct participants in the Hydra Head, because it is impossible to get their unanimous consent on every bid since they are competing against each other in the auction.\nInstead, we define an independent group of delegates who will directly participate in the Hydra Head protocol on the seller's and bidders\u2019 behalf to witness the bids. These delegates perform a role similar to the combination of stakepool and lightwallet providers on Cardano L1.\nSince the bidders and seller are not direct participants in the Hydra Head, we do not commit any of the bidders\u2019 funds or the seller\u2019s NFT auction lot to the auction, because we do not want to grant the delegates custody over them. Instead, the Hydra Head is used purely to manage the informational aspect of the bidding process (Which bids were made? What is the current standing bid?). The auction lot and the bidders\u2019 funds remain on L1 at all times.\nSince the bidders\u2019 funds are not present on the Hydra Head ledger, there is no way to provide proof to validators on L2 that any bidder has sufficient funds committed to honoring his bid. Instead, we allow the seller to require that bidders place fixed security deposits into a smart contract on L1 towards the auction, such that the seller can claim the winning bidder\u2019s security deposit if the winning bid is dishonored, as compensation for wasting everyone\u2019s time.\nThe fixed deposit provides some protection to the seller against dishonorable behavior from bidders, but in some cases (e.g. if bids get unexpectedly high), it may still be advantageous to a bidder to dishonor his genuinely-placed bid or even to place a disingenuous bid to sabotage the auction. To feel comfortable selling an NFT in an auction with a fixed-size security deposit, the seller needs to be able to manage this risk. Furthermore, the seller may need to apply know-your-customer (KYC) and anti-money-laundering (AML) processes to the auction.\nFor these reasons, we implement an invitational private version of the auction where the seller has absolute discretion over which bidders may participate in the auction. The public version of the auction where bidders can freely participate will be implemented in a later milestone."),(0,a.kt)("h2",{id:"workflow"},"Workflow"),(0,a.kt)("p",null,"In this prototype, each auction would work as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Delegates initialize a Hydra Head, making it available to host the bidding for a yet-to-be-announced auction."),(0,a.kt)("li",{parentName:"ol"},"The seller announces an auction to sell a given NFT (the \u201cauction lot\u201d), sets the terms of the auction (including the security deposit amount required), deposits the NFT into the auction smart contract, and indicates which Hydra Head will host the auction\u2019s bidding process on L2."),(0,a.kt)("li",{parentName:"ol"},"Prospective bidders register their interest to participate in the auction by placing security deposits into the auction smart contract."),(0,a.kt)("li",{parentName:"ol"},"Near the bidding start time (defined in the auction terms), the bidding process for the auction moves from L1 (where the auction was announced) to L2 (the delegates\u2019 Hydra Head)."),(0,a.kt)("li",{parentName:"ol"},"The seller invites bidders to participate in the auction and starts the auction\u2019s bidding phase. The seller has absolute discretion on which bidders to invite into the auction, based on the security deposits placed and KYC/AML considerations."),(0,a.kt)("li",{parentName:"ol"},"Bidders submit bids to delegates, who collectively witness the bids in the Hydra Head ledger and confirm bids to bidders via multi-signed ledger snapshots."),(0,a.kt)("li",{parentName:"ol"},"At the end of the bidding phase, the Hydra Head is closed and the standing bid is moved to L1. The bidder that submitted that standing bid becomes the winner of the auction."),(0,a.kt)("li",{parentName:"ol"},"Up to the voucher expiry time, the winning bidder can purchase the auction lot for the standing bid price."),(0,a.kt)("li",{parentName:"ol"},"After the voucher expiry time, if the winning bidder has not purchased the auction lot, the seller can reclaim it and claim the winning bidder\u2019s security deposit for the auction. Otherwise, the winning bidder can reclaim his security deposit."),(0,a.kt)("li",{parentName:"ol"},"All other bidders can reclaim their security deposits at the end of the bidding phase.")),(0,a.kt)("h2",{id:"prerequisites-from-hydra-technical-roadmap"},"Prerequisites from Hydra technical roadmap"),(0,a.kt)("p",null,"The prerequisites for Hydra for this milestone mainly deal with support for using smart contracts on L2:\nDuring the design and early implementation phase of this milestone, we identified the following prerequisites to enable using the auction smart contracts on L2."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a method to the Hydra node API to commit UTxOs from script addresses."),(0,a.kt)("li",{parentName:"ul"},"Support committing multiple UTxOs per Hydra Head participant, so that collateral UTxOs can be committed to the Hydra Head for transactions with validator scripts on L2."),(0,a.kt)("li",{parentName:"ul"},"Allow time to pass on the L2 ledger (instead of maintaining time fixed at the start time of the Hydra Head).\nFortunately, the Hydra core devs implemented all of these features during the course of the milestone. Thank you! \ud83d\ude80")),(0,a.kt)("h2",{id:"remaining-limitations"},"Remaining limitations"),(0,a.kt)("p",null,"This initial prototype auction design still has the following limitations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Auction implementation is a prototype, not necessarily ready for production."),(0,a.kt)("li",{parentName:"ul"},"Open auctions (where bidders can freely enter any auction to bid) are not supported."),(0,a.kt)("li",{parentName:"ul"},"Bids are backed only by fixed security deposits from bidders, which may be less than the full bid amount."),(0,a.kt)("li",{parentName:"ul"},"A new Hydra Head must be opened for every auction."),(0,a.kt)("li",{parentName:"ul"},"Delegates can censor bidders from submitting bids to the auction."),(0,a.kt)("li",{parentName:"ul"},"Delegates are responsible on L2 for ensuring that the standing bid of the auction can only be replaced by a new bid that exceeds it by the minimum increment defined in the auction terms. However, bidders receive a multi-signed proof for every confirmed bid, which can be used as incontrovertible proof against delegates if there\u2019s any foul play. In principle, this could allow for off-chain arbitration mechanisms to resolve disputes and/or an additional smart contract module where delegates could provide deposits that would be slashable if such evidence is provided.")))}u.isMDXComponent=!0},52164:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/running-auctions-on-cardano-d8aa54c6b6919ec90304d5d31899260c.png"}}]);