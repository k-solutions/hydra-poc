"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[8284],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},67523:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={},i="Poker Game",s={unversionedId:"other/poker-game/index",id:"other/poker-game/index",title:"Poker Game",description:"A prototypical example of a multi-party state channel.",source:"@site/use-cases/other/poker-game/index.md",sourceDirName:"other/poker-game",slug:"/other/poker-game/",permalink:"/head-protocol/unstable/ja/use-cases/other/poker-game/",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/use-cases/other/poker-game/index.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Lightning Network Payments",permalink:"/head-protocol/unstable/ja/use-cases/payments/lighting-network-like-payments/"}},l={},p=[],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"poker-game"},"Poker Game"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A prototypical example of a multi-party state channel.")),(0,n.kt)("p",null,"We love to explain how Hydra heads work using the analogy of a ",(0,n.kt)("em",{parentName:"p"},"poker game")," because it suits pretty well the fundamentals behind the Head protocol. A poker game (or any game in general) is a situation with a clear beginning and an end that evolves around a set of agreed-upon rules. In the case of a poker game, the monetary component is at the centre; players place bids and exchange money at every step of the game. Furthermore, it is comprised of a fixed set of players who have conflicting goals (i.e. win the game), don't fully trust each other but are still willing to collaborate given the agreed set of rules."),(0,n.kt)("admonition",{title:"Decentralized randomness & Multi-Party Computation",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For this use case, we assume that there's a way an agreed-upon way to implement a decentralized poker game with pseudo-randomness or multi-party computation (see, for example ",(0,n.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2018/157"},"ROYALE by David & al"),"). We focus on the state channel aspect of the story for which Hydra heads provide a solution. ")),(0,n.kt)("p",null,"In a poker game, every player can embody a Hydra Head member, running its own Hydra node. Each participant starts a Head by committing funds to that Head. These represent their chips. Once the Head is established, participants can begin playing the game by leveraging on-head Plutus contracts. Players can instantly process the transfer of funds inside the Head. This is a simple scenario where participants mainly send money to one another, mediated by a script (acting as the game dealer, warrants of the rules and good progress of the game). "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(88629).Z,width:"1043",height:"601"})),(0,n.kt)("p",null,"Eventually, the game reaches an end with a well-defined distribution of funds. Participants can then play another game or close the Head and write the end result onto the Layer 1. The whole game(s) is (are) unknown of the Layer 1. Only the final UTxO distribution is. "),(0,n.kt)("p",null,"Since the game only involves basic payments and script interactions, it could have been played entirely on the Layer 1, without reaching for a Hydra head. However, a Hydra head provides fast-paced transactions for the course of the game and cheap (or even none) fees -- besides the costs needed to establish the Hydra Head."))}u.isMDXComponent=!0},88629:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/poker-5da0a259ae448b547c2059af88b66f2b.webp"}}]);