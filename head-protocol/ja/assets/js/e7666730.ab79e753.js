"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[4225],{19257:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(60614);const r={terminalWindow:"terminalWindow_wGrl",terminalWindowHeader:"terminalWindowHeader_o9Cs",terminalWindowBody:"terminalWindowBody_tzdS",row:"row_Rn7G",buttons:"buttons_IGLB",right:"right_fWp9",dot:"dot_fGZE"};function o(e){let{children:t,minHeight:n}=e;const o="string"==typeof t?a.createElement(i.Z,null,t):t;return a.createElement("div",{className:r.terminalWindow,style:{minHeight:n}},a.createElement("div",{className:r.terminalWindowHeader},a.createElement("div",{className:r.buttons},a.createElement("span",{className:r.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:r.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:r.dot,style:{background:"#58cb42"}}))),a.createElement("div",{className:r.terminalWindowBody},o))}},81770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var a=n(87462),i=(n(67294),n(3905)),r=n(19257);const o={sidebar_position:6},s="Operating a Hydra Node",d={unversionedId:"getting-started/operating-hydra",id:"getting-started/operating-hydra",title:"Operating a Hydra Node",description:"This page aims at helping Hydra users troubleshoot issues when running their own instances of hydra-node and participate in a Hydra Head.",source:"@site/docs/getting-started/operating-hydra.md",sourceDirName:"getting-started",slug:"/getting-started/operating-hydra",permalink:"/head-protocol/ja/docs/getting-started/operating-hydra",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/docs/getting-started/operating-hydra.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u3067\u4f7f\u7528(Docker\u306a\u3057)",permalink:"/head-protocol/ja/docs/getting-started/demo/without-docker"},next:{title:"Hydra development",permalink:"/head-protocol/ja/docs/getting-started/developing-on-hydra"}},l={},h=[{value:"Logs",id:"logs",level:2},{value:"Monitoring",id:"monitoring",level:2},{value:"Common Issues",id:"common-issues",level:2},{value:"No Head is observed from the chain",id:"no-head-is-observed-from-the-chain",level:3},{value:"Head does not make progress",id:"head-does-not-make-progress",level:3}],m={toc:h},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"operating-a-hydra-node"},"Operating a Hydra Node"),(0,i.kt)("p",null,"This page aims at helping Hydra users troubleshoot issues when running their own instances of ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra-node")," and participate in a Hydra Head."),(0,i.kt)("h2",{id:"logs"},"Logs"),(0,i.kt)("p",null,"Following ",(0,i.kt)("a",{parentName:"p",href:"/adr/9"},"ADR-9")," design principles, the ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra-node")," provides ",(0,i.kt)("a",{parentName:"p",href:"https://json.org"},"JSON")," formatted logs on the ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," stream, one line per log item. The log items follow a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/master/hydra-node/json-schemas/logs.yaml"},"JSON schema"),". This logging capability is kept voluntarily simple and non configurable in order to ease integration of Hydra logging into more general log analysis infrastructure, whether a custom ELK stack, third-party services, docker sidecars..."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There is an unpublished ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/master/hydra-cluster/exe/log-filter/Main.hs"},"log-filter")," executable that one can attach to a hydra-node in order to trim down the volume of information in the log stream. This filter provides ",(0,i.kt)("em",{parentName:"p"},"some")," filtering features, namely removing transactions bodies and replacing them with transaction ids, but it's not general enough to warrant publication. Similar capabilities can be easily provided with tools like ",(0,i.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq"),".")),(0,i.kt)("h2",{id:"monitoring"},"Monitoring"),(0,i.kt)("p",null,"When given ",(0,i.kt)("inlineCode",{parentName:"p"},"--monitoring-port PORT")," argument, the hydra-node executable will expose a ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io"},"Prometheus")," compatible HTTP ",(0,i.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint on the given port to enable ",(0,i.kt)("em",{parentName:"p"},"scraping")," of exposed metrics."),(0,i.kt)("p",null,"For example, assuming a hydra-node was started with ",(0,i.kt)("inlineCode",{parentName:"p"},"--monitoring-port 6001"),", this command"),(0,i.kt)(r.Z,{mdxType:"TerminalWindow"},"curl http://localhost:6001/metrics"),(0,i.kt)("p",null,"will output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'# TYPE hydra_head_confirmed_tx counter\nhydra_head_confirmed_tx  0\n# TYPE hydra_head_events counter\nhydra_head_events  50467\n# TYPE hydra_head_requested_tx counter\nhydra_head_requested_tx  0\n# TYPE hydra_head_tx_confirmation_time_ms histogram\nhydra_head_tx_confirmation_time_ms_bucket{le="5.0"} 0.0\nhydra_head_tx_confirmation_time_ms_bucket{le="10.0"} 0.0\nhydra_head_tx_confirmation_time_ms_bucket{le="50.0"} 0.0\nhydra_head_tx_confirmation_time_ms_bucket{le="100.0"} 0.0\nhydra_head_tx_confirmation_time_ms_bucket{le="1000.0"} 0.0\nhydra_head_tx_confirmation_time_ms_bucket{le="+Inf"} 0.0\nhydra_head_tx_confirmation_time_ms_sum  0.0\nhydra_head_tx_confirmation_time_ms_count  0\n')),(0,i.kt)("h2",{id:"common-issues"},"Common Issues"),(0,i.kt)("h3",{id:"no-head-is-observed-from-the-chain"},"No Head is observed from the chain"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hydra-node")," is connected to a ",(0,i.kt)("inlineCode",{parentName:"li"},"cardano-node")," that's on the wrong\nnetwork. Check the ",(0,i.kt)("inlineCode",{parentName:"li"},"--network")," command-line argument and the\n",(0,i.kt)("inlineCode",{parentName:"li"},"cardano-node")," configuration"),(0,i.kt)("li",{parentName:"ul"},"Note that the ",(0,i.kt)("inlineCode",{parentName:"li"},"hydra-node")," cannot start if it cannot connect to the\n",(0,i.kt)("inlineCode",{parentName:"li"},"cardano-node"),", which might require some time as the ",(0,i.kt)("inlineCode",{parentName:"li"},"cardano-node"),"\nneeds to revalidate its database and possibly even reconstruct its\nledger state when it starts and its connections are not open until\nit's ready. If running as a service or a container, make sure the orchestrator restarts the process when it crashes"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("em",{parentName:"li"},"Scripts")," transaction identifier is invalid. This transaction id\nis available in the\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/releases/tag/0.10.0"},"release"),"\npage for the 3 major networks (",(0,i.kt)("inlineCode",{parentName:"li"},"preview"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"preprod"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mainnet"),")"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"hydra-node"),"'s ",(0,i.kt)("em",{parentName:"li"},"Cardano signing key")," is inconsistent with the\n",(0,i.kt)("em",{parentName:"li"},"Verification key")," from the ",(0,i.kt)("inlineCode",{parentName:"li"},"Init")," transaction. Check the\n",(0,i.kt)("inlineCode",{parentName:"li"},"--cardano-signing-key")," parameter points to the right key, and that\npeers have the correct ",(0,i.kt)("inlineCode",{parentName:"li"},"--cardano-verification-key")," for your host."),(0,i.kt)("li",{parentName:"ul"},"The peers' ",(0,i.kt)("em",{parentName:"li"},"Cardano verification keys")," are incorrect. This is\nmirroring the above issue, check parameters on all peers.")),(0,i.kt)("h3",{id:"head-does-not-make-progress"},"Head does not make progress"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Peers are not correctly connected to each others'. Check the\n",(0,i.kt)("inlineCode",{parentName:"li"},"--peer")," arguments point to the right ",(0,i.kt)("inlineCode",{parentName:"li"},"host:port")," for each\npeer. ",(0,i.kt)("inlineCode",{parentName:"li"},"PeerConnected")," message should be sent to the client (or\nappears in the logs) and be consistent for all peers involved in a\nHead."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("em",{parentName:"li"},"Hydra signing key")," for our node or the ",(0,i.kt)("em",{parentName:"li"},"Hydra verification\nkeys")," for peers do not match what's expected by each node. Check\nthat ",(0,i.kt)("inlineCode",{parentName:"li"},"AckSn")," messages are received by all parties and that the\n",(0,i.kt)("inlineCode",{parentName:"li"},"LogicOutcome")," log does not contain any ",(0,i.kt)("inlineCode",{parentName:"li"},"Error"))))}c.isMDXComponent=!0}}]);