"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[6145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,u=d["".concat(c,".").concat(h)]||d[h]||m[h]||o;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},54704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(52991),i=n(1116);const s={sidebar_position:1},c="Overview",l={unversionedId:"index",id:"index",title:"Overview",description:"Hydra is the layer 2 scalability solution for Cardano, which aims to increase transaction speed through low latency and high throughput and minimize transaction cost.",source:"@site/core-concepts/index.md",sourceDirName:".",slug:"/",permalink:"/head-protocol/core-concepts/",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/core-concepts/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Scalability",permalink:"/head-protocol/core-concepts/scalability"}},p={},d=[],m={toc:d},h="wrapper";function u(e){let{components:t,...s}=e;return(0,r.kt)(h,(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Hydra is the layer 2 scalability solution for Cardano, which aims to increase transaction speed through low latency and high throughput and minimize transaction cost."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2020/299.pdf"},"Hydra Head")," is the first protocol of the Hydra family and embodies the foundation for more advanced deployment scenarios relying on isomorphic, multi-party state-channels. For an introduction to the protocol also check out these two blog posts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://iohk.io/en/blog/posts/2021/09/17/hydra-cardano-s-solution-for-ultimate-scalability/"},"Hydra \u2013 Cardano\u2019s solution for ultimate Layer 2 scalability")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://iohk.io/en/blog/posts/2022/02/03/implementing-hydra-heads-the-first-step-towards-the-full-hydra-vision/"},"Implementing Hydra Heads: the first step towards the full Hydra vision "))),(0,r.kt)("p",null,"There are different flavors and extensions of the Hydra Head protocol, but let's start by looking at the full lifecycle of a basic Hydra Head, and how it allows for isomorphic state transfer between layer 1 and layer 2."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(82431).Z,width:"960",height:"540"})),(0,r.kt)("p",null,"A Hydra Head is formed by a group of online and responsive participants. Participants ",(0,r.kt)("strong",{parentName:"p"},"init"),"ialize a Head by announcing several parameters on-chain, including the participants list. Then each of the participants ",(0,r.kt)("strong",{parentName:"p"},"commit"),"s unspent transaction outputs (UTXOs) from the Cardano main-chain to it, before all the UTXOs are ",(0,r.kt)("strong",{parentName:"p"},"collect"),"ed and made available in a Hydra Head as initial state (",(0,r.kt)("inlineCode",{parentName:"p"},"U0"),"). At any moment before collecting, participants can also ",(0,r.kt)("strong",{parentName:"p"},"abort")," the process and recover their funds."),(0,r.kt)("p",null,"While open, they can use the Hydra Head via a hydra-node to submit transactions over the Head network. Transactions have the same format and properties as on the main-chain: they are ",(0,r.kt)("em",{parentName:"p"},"isomorphic"),". When UTXO entries are spent, and new UTXO entries are created in a Hydra Head, all participants are required to acknowledge and agree on the new state in so-called snapshots (",(0,r.kt)("inlineCode",{parentName:"p"},"U1..Un"),"). Snapshots are ",(0,r.kt)("em",{parentName:"p"},"not")," posted back onto the layer 1, but are only kept around by the participants."),(0,r.kt)("p",null,"Any participant can ",(0,r.kt)("strong",{parentName:"p"},"close")," the Head using a snapshot, when for example they wish to cash out on the mainnet, or if another party misbehaves or stalls the Head's evolution. There is a mechanism to ",(0,r.kt)("strong",{parentName:"p"},"contest")," the final state on the main chain. Ultimately, a ",(0,r.kt)("strong",{parentName:"p"},"fanout")," transaction distributes the final agreed state and makes available on the layer 1 what only existed virtually in the Head."),(0,r.kt)(o.Z,{items:(0,i.V)().items.filter((e=>{let{docId:t}=e;return"index"!=t})),mdxType:"DocCardList"}))}u.isMDXComponent=!0},52991:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(67294),r=n(86010),o=n(53438),i=n(39960),s=n(13919),c=n(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:n}=e;return a.createElement(i.Z,{href:t,className:(0,r.Z)("card padding--lg",l.cardContainer)},n)}function d(e){let{href:t,icon:n,title:o,description:i}=e;return a.createElement(p,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",l.cardTitle),title:o},n," ",o),i&&a.createElement("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:i},i))}function m(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?a.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return a.createElement(d,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function u(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(h,{item:t});case"category":return a.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,o.jA)();return a.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return a.createElement(f,e);const i=(0,o.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(u,{item:e})))))}},82431:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hydra-head-lifecycle-b8449385e9041a214bf8c6e52830de3c.svg"}}]);