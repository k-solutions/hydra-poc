"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[6160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_label:"Payments",sidebar_position:3},i="Hydra for Payments",s={unversionedId:"payments/index",id:"payments/index",title:"Hydra for Payments",description:"The payments category will be restructured into a more consistent",source:"@site/use-cases/payments/index.md",sourceDirName:"payments",slug:"/payments/",permalink:"/head-protocol/unstable/fr/use-cases/payments/",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/use-cases/payments/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Payments",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Auctions-as-a-service Multi",permalink:"/head-protocol/unstable/fr/use-cases/auctions/always-on-service-multi/"},next:{title:"Inter-Wallet Payments",permalink:"/head-protocol/unstable/fr/use-cases/payments/inter-wallet-payments/"}},l={},c=[{value:"Further Reading",id:"further-reading",level:3},{value:"An Example Configuration",id:"an-example-configuration",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hydra-for-payments"},"Hydra for Payments"),(0,a.kt)("admonition",{title:"This category will be restructured",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The payments category will be restructured into a more consistent\nuse-case-centric roadmap of application scenarios. For now it still contains\nsome legacy use case articles.")),(0,a.kt)("p",null,"Hydra for Payments is an ongoing collaboration with Obsidian Systems meant to complement the evolving Hydra Head Protocol with tooling designed for payment-specific use cases."),(0,a.kt)("p",null,"The current phase of development is focused on extending the existing open-source Hydra for Payments library by providing the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"An expanded ",(0,a.kt)("strong",{parentName:"p"},"payment channel API")," with convenience features meant to reduce builder ramp-up and time-to-market for their projects.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"High-assurance mechanisms especially important for builders of commercial projects trusted with user assets.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Flexible ",(0,a.kt)("strong",{parentName:"p"},"configurations")," with sensible defaults to help builders dynamically scale their product and implement compelling user experiences."))),(0,a.kt)("p",null,"The plan is to consolidate this work and make it available as the ",(0,a.kt)("strong",{parentName:"p"},"mainnet-compatible Hydra for Payments SDK"),"."),(0,a.kt)("p",null,"To validate these aims, the launch of a ",(0,a.kt)("strong",{parentName:"p"},"mobile reference application")," will follow. The application will directly utilize the Hydra for Payments SDK for all of critical payment channel functionality."),(0,a.kt)("h3",{id:"further-reading"},"Further Reading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The post introducing the Hydra for Payments project can be found ",(0,a.kt)("a",{parentName:"p",href:"https://iohk.io/en/blog/posts/2022/11/10/hydra-for-payments-introducing-developer-tooling-to-unlock-micropayments-on-cardano/"},"here"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Hydra for Payments is under active development and the source code and documentation can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/obsidiansystems/hydra-pay"},"here"),"."))),(0,a.kt)("h3",{id:"an-example-configuration"},"An Example Configuration"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(30569).Z,width:"2314",height:"1780"})))}m.isMDXComponent=!0},30569:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hydra-for-payments-aaef454c99cac25ca8a36ec134d6faea.png"}}]);