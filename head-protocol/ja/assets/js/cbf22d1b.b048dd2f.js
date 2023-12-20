"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[5029],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},s="Inter-Wallet Payments",i={unversionedId:"payments/inter-wallet-payments/index",id:"payments/inter-wallet-payments/index",title:"Inter-Wallet Payments",description:"A (semi-)custodial p2p payment service through wallet providers.",source:"@site/use-cases/payments/inter-wallet-payments/index.md",sourceDirName:"payments/inter-wallet-payments",slug:"/payments/inter-wallet-payments/",permalink:"/head-protocol/ja/use-cases/payments/inter-wallet-payments/",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/use-cases/payments/inter-wallet-payments/index.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Payments",permalink:"/head-protocol/ja/use-cases/payments/"},next:{title:"Pay-per-use API",permalink:"/head-protocol/ja/use-cases/payments/pay-per-use-api/"}},l={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"inter-wallet-payments"},"Inter-Wallet Payments"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A (semi-)custodial p2p payment service through wallet providers.")),(0,n.kt)("admonition",{title:"This is a legacy article",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The payments category will be restructured into a more consistent\nuse-case-centric roadmap of application scenarios.")),(0,n.kt)("p",null,"A Hydra head is limited in terms of the number of participants. Because of this, building a large-scale peer-to-peer payment solution can't be done naively where each peer is itself a member of the Head. While the long-term roadmap already envisions routing solutions and networks of heads (see also ",(0,n.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2021/1188"},"Interhead Hydra: Two Heads Are Better Than One")," by Jourenko & al), intermediate approaches may involve trusted parties such as light wallet providers. Plus, one can rely on additional on-chain smart contracts to reduce the trust assumption as much as possible."),(0,n.kt)("p",null,"In this scenario, we imagine a Hydra Head formed by a few major light wallet providers of the network who all have a common interest in providing their users with cheap and fast inter-wallet payments. Therefore, each wallet provider is a Head member and processes transactions inside the Head on behalf of their users. To transact inside the Head, users must first lock funds they want to move on layer 2 inside a particular contract. This contract authorizes any wallet provider to redeem funds from it, provided they have proof of payment issued by the corresponding user."),(0,n.kt)("p",null,"Through their interface, wallet providers can show the ",(0,n.kt)("em",{parentName:"p"},"virtual balance")," held in each account based on the traffic on layer two. The ",(0,n.kt)("em",{parentName:"p"},"effective balance")," (i.e. the value locked on the layer one) remains unchanged. Users may ask any wallet provider to unlock funds in the contract at any time if any are left. This is done by collecting the funds at one or more of those contracts. Then funds are re-distributed accordingly: some back in locked accounts and some back to the user who requested his money back."),(0,n.kt)("p",null,"We assume in this scenario that the traffic between wallet providers is somewhat symmetrical (that is, users of wallet X spend/receive roughly as much as users of wallet Y) so that there isn't too much imbalance in the system. Furthermore, it can be enforced by wallet providers who can reject specific payments if their processing invalidates the assumption."))}m.isMDXComponent=!0}}]);