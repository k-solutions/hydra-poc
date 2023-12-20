"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[7988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_label:"\u30b9\u30bf\u30fc\u578b\u30d8\u30c3\u30c9\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",sidebar_position:3},i="\u30b9\u30bf\u30fc\u578b\u30d8\u30c3\u30c9\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",o={unversionedId:"star-shaped/index",id:"star-shaped/index",title:"\u30b9\u30bf\u30fc\u578b\u30d8\u30c3\u30c9\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",description:"\u3053\u306e\u8cc7\u6599\u306f\u3001\u73fe\u5728\u4f5c\u6210\u4e2d\u306e\u3082\u306e\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs-topologies/current/star-shaped/index.md",sourceDirName:"star-shaped",slug:"/star-shaped/",permalink:"/head-protocol/unstable/ja/topologies/star-shaped/",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/i18n/ja/docusaurus-plugin-content-docs-topologies/current/star-shaped/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"\u30b9\u30bf\u30fc\u578b\u30d8\u30c3\u30c9\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Managed Hydra Head",permalink:"/head-protocol/unstable/ja/topologies/managed/"},next:{title:"Delegated Head",permalink:"/head-protocol/unstable/ja/topologies/delegated-head/"}},p={},s=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3",id:"\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3",level:2},{value:"\u30aa\u30d5\u30c1\u30a7\u30fc\u30f3\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3",id:"\u30aa\u30d5\u30c1\u30a7\u30fc\u30f3\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u30b9\u30bf\u30fc\u578b\u30d8\u30c3\u30c9\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"},"\u30b9\u30bf\u30fc\u578b\u30d8\u30c3\u30c9\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"),(0,r.kt)("p",null,"\ud83d\udee0\ufe0f \u3053\u306e\u8cc7\u6599\u306f\u3001\u73fe\u5728\u4f5c\u6210\u4e2d\u306e\u3082\u306e\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u306f\u3001\u3044\u308f\u3086\u308b\u30b9\u30bf\u30fc\u578b\u306eHydra\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u52d5\u4f5c\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,r.kt)("p",null,"\u30b9\u30bf\u30fc\u578b\u306eHydra\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3001\u3088\u308a\u6b63\u78ba\u306b\u306f\u30b9\u30bf\u30fc\u578b\u306e\u30d8\u30c3\u30c9\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306f\u6b21\u306e\u3082\u306e\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c0\u30a6\u30f3\u30bf\u30a4\u30e0\u306e\u5c11\u306a\u3044\u300cHead-as-a-service\u300d\u3092\u63d0\u4f9b\u3059\u308b\u4e2d\u592e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u3002\u304a\u305d\u3089\u304f\u3053\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u30db\u30b9\u30c8\u3059\u308b\u306e\u306b\u5341\u5206\u306a\u30ea\u30bd\u30fc\u30b9\u3092\u6301\u3064\u4f01\u696d\u307e\u305f\u306f\u7d44\u7e54\u304c\u904b\u55b6\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30ce\u30fc\u30c9\u3002DApp\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3001\u307e\u305f\u306f\u30e2\u30d0\u30a4\u30eb/\u30d1\u30fc\u30bd\u30ca\u30eb\u30a6\u30a9\u30ec\u30c3\u30c8\u3067\u3001\u5e38\u306b\u30aa\u30f3\u30e9\u30a4\u30f3\u3067\u3042\u308b\u3068\u306f\u9650\u3089\u305a\u3001\u884c\u3063\u305f\u308a\u6765\u305f\u308a\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Star-shaped Heads Network",src:n(63761).Z,width:"4862",height:"3290"})),(0,r.kt)("p",null,"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30ce\u30fc\u30c9\u306f\u3001L2\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u3063\u3066\u5168\u3066\u306eHydra\u306e\u5b89\u5168\u6027\u3092\u4fdd\u8a3c\u3057\u306a\u304c\u3089\u3001\u5e38\u306b\u30aa\u30f3\u30e9\u30a4\u30f3\u306e\u300c\u30d5\u30eb\u300dHydra\u30ce\u30fc\u30c9\u3092\u64cd\u4f5c\u3059\u308b\u3068\u3044\u3046\u904b\u7528\u4e0a\u306e\u8ca0\u62c5\u3092\u8ca0\u308f\u305a\u306b\uff08\u4f8b\u3048\u3070\u3001\u30ce\u30fc\u30c9\u306e\u7d44\u307f\u8fbc\u307f\u7248\u3084\u8efd\u91cf\u7248\u3092\u4f7f\u3063\u3066\uff09\u52b9\u7387\u7684\u306b\u3001\u4f4e\u30b3\u30b9\u30c8\u3067\u76f8\u4e92\u4f5c\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u305f\u3044\u3068\u601d\u3063\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u6570\u306f100\u53f0\u30011000\u53f0\u3068\u591a\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u5e38\u306b\u3059\u3079\u3066\u304c\u540c\u6642\u306b\u7a3c\u52d5\u3057\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30ce\u30fc\u30c9\u306f\u30b5\u30fc\u30d0\u30fc\u3068\u30da\u30a2\u30d8\u30c3\u30c9(\u4f8b\u3048\u3070 ",(0,r.kt)("em",{parentName:"p"},"\u30c1\u30e3\u30cd\u30eb")," )\u3092\u78ba\u7acb\u3057\u307e\u3059\u3002\u3053\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306f\u901a\u5e38\u306e\u30de\u30eb\u30c1\u30d1\u30fc\u30c6\u30a3\u30d8\u30c3\u30c9\u3088\u308a\u3082\u7c21\u5358\u3067\u3059\u3002 \u30b5\u30fc\u30d0\u30fc\u306f\u65e2\u77e5\u306eID\u3092\u6301\u3061\u3001 \u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u7bc4\u56f2\u5916\u3067\u3042\u308b\u7279\u5b9a\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u7528\u3057\u3066\u30d8\u30c3\u30c9\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u3068\u304d\u306b\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u5fc5\u8981\u306a\u30d1\u30e9\u30e1\u30fc\u30bf(\u30ad\u30fc\u3001IP)\u3092 \u5e38\u306b\u30b5\u30fc\u30d0\u30fc\u306b\u63d0\u4f9b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30ce\u30fc\u30c9\u304c\u300c\u305d\u306e\u300d\u30d8\u30c3\u30c9\u306b\u6295\u7a3f\u3059\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u306b\u3088\u3063\u3066\u3001\u30b5\u30fc\u30d0\u30fc\u304c\u7dad\u6301\u3059\u308b\u4ed6\u306e\u30d8\u30c3\u30c9\u306b\u53cd\u6620\u3055\u308c\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u8cea\u554f"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30da\u30a2\u30ef\u30a4\u30ba\u30d8\u30c3\u30c9\u306e\u300c\u6301\u7d9a\u6642\u9593\u300d\u304c\u5909\u5316\u3059\u308b\u3053\u3068\u306f\u60f3\u5b9a\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3057\u3087\u3046\u304b\u3002\u4f8b\u3048\u3070\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u6765\u3066\u30d8\u30c3\u30c9\u3092\u958b\u304d\u3001\u3044\u304f\u3064\u304b\u306e\u3053\u3068\u3092\u884c\u3044\u305d\u308c\u3092\u9589\u3058\u305f\u5834\u5408\u3001\u540c\u3058\u30b5\u30fc\u30d0\u30fc\u306b\u3088\u3063\u3066\u7dad\u6301\u3055\u308c\u3066\u3044\u308b\u4ed6\u306e\u30d8\u30c3\u30c9\u306f\u958b\u3044\u305f\u307e\u307e\u3067\u3059\u304b\uff1f"),(0,r.kt)("li",{parentName:"ul"},"\u30b5\u30fc\u30d0\u30fc\u306f\u3001\u30da\u30a2\u30ef\u30a4\u30ba\u30d8\u30c3\u30c9\u3054\u3068\u306bHydra\u30d8\u30c3\u30c9\u306e\u57fa\u672c\u7684\u306a\u5b89\u5168\u6027\u3092\u7dad\u6301\u3059\u308b\u3053\u3068\u3092\u3069\u306e\u3088\u3046\u306b\u4fdd\u8a3c\u3057\u307e\u3059\u304b\uff1f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u3053\u306e\u56f3\u304c\u793a\u5506\u3059\u308b\u306e\u306f\u3001",(0,r.kt)("em",{parentName:"li"},"\u30cf\u30c3\u30b7\u30e5\u30bf\u30a4\u30e0\u30ed\u30c3\u30af\u30b3\u30f3\u30c8\u30e9\u30af\u30c8")," (",(0,r.kt)("a",{parentName:"li",href:"https://docs.lightning.engineering/the-lightning-network/multihop-payments/hash-time-lock-contract-htlc"},"HTLC"),") \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30b5\u30fc\u30d0\u30fc\u304c\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u305d\u306e\u5b9b\u5148\u306b\u9069\u5207\u306b\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3057\u306a\u304b\u3063\u305f\u5834\u5408\u306b\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5e38\u306bUTxO\u3092\u53d6\u308a\u623b\u305b\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3059\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u3069\u306e\u3088\u3046\u306a\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u304b\uff1f\u3000HTLC\u306f\u3001\u652f\u6255\u3044\u30b9\u30bf\u30a4\u30eb\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306b\u306f\u9069\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u305f\u3068\u3048\u3070DApp\u306b\u306f\u9069\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u306f\u3001\u305d\u308c\u3089\u3092\u9069\u5fdc\u3055\u305b\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30b5\u30fc\u30d0\u30fc\u304c1\u3064\u306e\u30d8\u30c3\u30c9\u5185\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u9069\u5207\u306a\u30d8\u30c3\u30c9\u306b\u300c\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u300d\u3067\u304d\u308b\u3068\u3044\u3046\u6697\u9ed9\u306e\u524d\u63d0\u304c\u3042\u308b\u3088\u3046\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u304c\u30d8\u30c3\u30c9\u306b\u6295\u7a3f\u3055\u308c\u305fUTxO\u306e\u30a2\u30c9\u30ec\u30b9\u3092\u300c\u7406\u89e3\u300d\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002")))),(0,r.kt)("h2",{id:"\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3"},"\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u56f3\u306f\u3001\u30a2\u30ea\u30b9\u3001\u30dc\u30d6\u306e\u9593\u306e2\u3064\u306e\u30da\u30a2\u30ef\u30a4\u30ba\u30d8\u30c3\u30c9\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u3092\u8868\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Star-shaped Network On-Chain",src:n(68871).Z,width:"1897",height:"413"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u5099\u8003"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u3053\u308c\u306f\u3001\u4e00\u65b9\u306e\u30d8\u30c3\u30c9\u3067\u8d77\u3053\u3063\u305f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u3082\u3046\u4e00\u65b9\u306e\u30d8\u30c3\u30c9\u306b\u53cd\u6620\u3055\u308c\u3001\u305d\u306e\u7d50\u679c\u3001\u6700\u7d42\u7684\u306aUTxO ",(0,r.kt)("inlineCode",{parentName:"li"},"c")," \u304c\uff08\u5f37\u304f\uff09\u4e00\u8cab\u3057\u3066\u3044\u308b\u3068\u4eee\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u3064\u307e\u308a\u3001\u4e21\u65b9\u306e\u30d8\u30c3\u30c9\u304c\u540c\u3058 $U_0$ \u30bb\u30c3\u30c8\u304b\u3089\u59cb\u307e\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u3053\u308c\u306f\u3069\u306e\u3088\u3046\u306b\u5b9f\u884c\u3067\u304d\u308b\u304b\u308f\u304b\u308a\u307e\u305b\u3093\uff08\u56f3\u3067\u306f\u8d64\u3067\u56f2\u3093\u3067\u3044\u307e\u3059\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6700\u7d42\u7684\u306aUTxO\u30bb\u30c3\u30c8\u306e\u6574\u5408\u6027\u304c\u53d6\u308c\u3066\u3044\u308c\u3070\u3001\u3069\u306e\u3088\u3046\u306a\u30d1\u30fc\u30c6\u30a3\u3067\u3082Fanout\u304c\u53ef\u80fd\u3067\u3059\u3002\u3064\u307e\u308a\u30011\u3064\u306e",(0,r.kt)("inlineCode",{parentName:"li"},"\u03bd_head"),"\u304c\u3076\u3089\u4e0b\u304c\u3063\u305f\u307e\u307e\u3001\u65e2\u306b\u3042\u308bUTxO\uff08\u56f3\u3067\u306f\u30b0\u30ec\u30fc\u30a2\u30a6\u30c8\u3057\u305f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\uff09\u3092\u518d\u73fe\u3059\u308b\u3088\u3046\u306b\u4f7f\u7528\u4e0d\u53ef\u80fd\u306b\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u306e\u3067\u3059\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u30d8\u30c3\u30c9\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u306f\u7d50\u3073\u3064\u3044\u3066\u3044\u307e\u3059\u3002\u4e00\u65b9\u304c\u9589\u3058\u3089\u308c\u308b\u3068\u3001\u3082\u3046\u4e00\u65b9\u3082\u9589\u3058\u3089\u308c\u307e\u3059\u3002\u30b5\u30fc\u30d0\u30fc\u306f\u305d\u308c\u304c\u4e8b\u5b9f\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002")),(0,r.kt)("h2",{id:"\u30aa\u30d5\u30c1\u30a7\u30fc\u30f3\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3"},"\u30aa\u30d5\u30c1\u30a7\u30fc\u30f3\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u6b21\u306e\u56f3\u306f\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u4f1d\u64ad\u3092\u78ba\u5b9f\u306b\u3059\u308b\u305f\u3081\u306b\u3001\u69d8\u3005\u306a\u300c\u30ce\u30fc\u30c9\u300d\u9593\u3067\u4ea4\u63db\u3055\u308c\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u30b7\u30fc\u30b1\u30f3\u30b9\u3092\u8868\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Star-shaped Network Off-Chain Protocol",src:n(92330).Z,width:"520",height:"757"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u5099\u8003"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30b5\u30fc\u30d0\u306f2\u3064\u306e\u30ce\u30fc\u30c9 ",(0,r.kt)("inlineCode",{parentName:"li"},"M(A)")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"li"},"M(B)")," \u3067\u8868\u73fe\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Alice"),"\u304c\u81ea\u5206\u306e\u30ce\u30fc\u30c9\u3067\u767a\u884c\u3057\u305f ",(0,r.kt)("inlineCode",{parentName:"li"},"newTx")," \u306f\u3001\u30b5\u30fc\u30d0\u306b\u3088\u3063\u3066 ",(0,r.kt)("inlineCode",{parentName:"li"},"Bob")," \u306e\u30ce\u30fc\u30c9\u306b\u3082 ",(0,r.kt)("inlineCode",{parentName:"li"},"newTx")," \u3068\u3057\u3066\u4f1d\u642c\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u3053\u306e\u56f3\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u304c",(0,r.kt)("inlineCode",{parentName:"li"},"Alice")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"li"},"Bob")," \u306e\u3069\u3061\u3089\u304b\u307e\u305f\u306f\u4e21\u65b9\u306b\u4fdd\u8a3c\u3092\u63d0\u4f9b\u3059\u308b\u305f\u3081\u306b\u6295\u7a3f\u3059\u308b\u5fc5\u8981\u306e\u3042\u308b\u8ffd\u52a0\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\uff08\u305f\u3068\u3048\u3070\u3001\u30d8\u30c3\u30c9\u5185\u306eHTLC\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\uff09\u3092\u8868\u3059\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u306e\u4e00\u8cab\u6027\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u3001\u30b5\u30fc\u30d0\u30fc\u306f\u5e38\u306b\u30ea\u30fc\u30c0\u30fc\u3067\u3042\u308a\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u306e\u767a\u4fe1\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b\u3082\u306e\u3068\u4eee\u5b9a\u3057\u307e\u3059\u3002")))}c.isMDXComponent=!0},92330:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/off-chain-protocol-e3962146cdd4905688da7c366154f834.png"},63761:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/star-shaped-general-532cfafec07585ab262bbbee9acee8eb.jpg"},68871:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/star-shaped-txs-bef2a52039a88dc3cbd49358322377bd.png"}}]);