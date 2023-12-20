"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[4921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:5},i="Hydra Networking",s={unversionedId:"architecture/networking",id:"architecture/networking",title:"Hydra Networking",description:"This document provides details about the Hydra Networking Layer, eg. the network comprised of Hydra nodes upon which Heads can be opened.",source:"@site/core-concepts/architecture/networking.md",sourceDirName:"architecture",slug:"/architecture/networking",permalink:"/head-protocol/es/core-concepts/architecture/networking",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/core-concepts/architecture/networking.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Hydra Node Architecture",permalink:"/head-protocol/es/core-concepts/architecture/"},next:{title:"API Behavior",permalink:"/head-protocol/es/core-concepts/behavior"}},l={},p=[{value:"Ouroboros",id:"ouroboros",level:2},{value:"Cardano Networking",id:"cardano-networking",level:2},{value:"Current State",id:"current-state",level:2},{value:"Gossip diffusion network",id:"gossip-diffusion-network",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hydra-networking"},"Hydra Networking"),(0,r.kt)("p",null,"This document provides details about the ",(0,r.kt)("em",{parentName:"p"},"Hydra Networking Layer"),", eg. the network comprised of Hydra nodes upon which Heads can be opened."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udee0 This document is a work in progress. We know the current situation w.r.t. networking is less than ideal, it's just a way to get started and have ",(0,r.kt)("em",{parentName:"p"},"something")," that works. There is already a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/237"},"proposal")," to improve the situation by making the network more dynamic.")),(0,r.kt)("h1",{id:"questions"},"Questions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What's the expected topology of the transport layer?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Are connected peers a subset/superset/identity set of the Head parties?"))),(0,r.kt)("li",{parentName:"ul"},"Do we need the delivery ordering and reliability guarantees TCP provides?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TCP is full-duplex stream oriented persistent connection between nodes"),(0,r.kt)("li",{parentName:"ul"},"Our networking layer is based on asynchronous messages passing which seems better suited to UDP"))),(0,r.kt)("li",{parentName:"ul"},"Do we need to care about nodes being reachable through firewalls?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This could be something we push onto end users, eg. let them be responsible of configuring their firewalls/NATs to match Hydra node needs"),(0,r.kt)("li",{parentName:"ul"},"Probably easier for business/corporate/organisation players than for end-users"))),(0,r.kt)("li",{parentName:"ul"},"Do we want ",(0,r.kt)("em",{parentName:"li"},"privacy")," within a Head?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The details of txs should be opaque for outside observers, only the end result of the Head's fanout is observable"))),(0,r.kt)("li",{parentName:"ul"},"How do we know/discover peers/parties?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The paper assumes there exists a ",(0,r.kt)("em",{parentName:"li"},"Setup")," phase where",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"In order to create a head-protocol instance, an initiator invites a set of participants ${p1,...,pn}$ (himself being one of them) to join by announcing to them the protocol parameters: the list of participants, the parameters of the (multi-)signature scheme to be used, etc.\nEach party then establishes pairwise authenticated channels to all other parties."))),(0,r.kt)("li",{parentName:"ul"},"What exactly is a ",(0,r.kt)("em",{parentName:"li"},"list of participants"),"? It seems at the very least each participant should be ",(0,r.kt)("em",{parentName:"li"},"identified"),", in order to be distinguished from each other, but how? Some naming scheme? IP:Port address? Public key? Certificate?"),(0,r.kt)("li",{parentName:"ul"},'What are "pairwise authenticated channels" exactly? Are these actual TCP/TLS connections? Or is it more a layer 4 (Transport) or layer 5 (Session) solution?'))),(0,r.kt)("li",{parentName:"ul"},"How open do we want our network protocol to be?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We are currently using Ouroboros stack with CBOR encoding of messages, this will make it somewhat hard to have other tools be part of the Hydra network")))),(0,r.kt)("h1",{id:"investigations"},"Investigations"),(0,r.kt)("h2",{id:"ouroboros"},"Ouroboros"),(0,r.kt)("p",null,"We had a meeting with network team on 2022-02-14 where we investigated how Ouroboros network stack fits in Hydra.\nDiscussion quickly derived on performance, with Neil Davies giving some interesting numbers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"World circumference: 600ms"),(0,r.kt)("li",{parentName:"ul"},"Latency w/in 1 continent: 50-100ms"),(0,r.kt)("li",{parentName:"ul"},"Latency w/in DC: 2-3ms"),(0,r.kt)("li",{parentName:"ul"},"Subsecond roundtrip should be fine wherever the nodes are located"),(0,r.kt)("li",{parentName:"ul"},"basic reliability of TCP connections decrease w/ distance:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"w/in DC connection can last forever)"),(0,r.kt)("li",{parentName:"ul"},"outside DC: it's hard to keep a single TCP cnx up forever, if a reroute occurs because some intermediate node is down, it takes 90s to resettle a route"),(0,r.kt)("li",{parentName:"ul"},"This implies that as the number of connections goes up, the probability of having at least one connection down at all time increases"))),(0,r.kt)("li",{parentName:"ul"},"closing of the head must be dissociated from network connections => a TCP cnx disappearing =/=> closing the head"),(0,r.kt)("li",{parentName:"ul"},"Within cardano network, propagation of a single empty block takes 400ms (to reach 10K nodes)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ouroboros network should withstand 1000s of connections (there are some system-level limits)"))),(0,r.kt)("li",{parentName:"ul"},"Modelling Hydra network",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A logical framework for modelling performance of network associate CDF with time for a message to appear at all nodes (this is what is done in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-sim"},"hydra-sim")),(0,r.kt)("li",{parentName:"ul"},"We could define a layer w/ the semantics we expect, eg. Snocket = PTP connection w/ ordered guaranteed messages delivery. Do we need that in Hydra?"))),(0,r.kt)("li",{parentName:"ul"},"How about ",(0,r.kt)("a",{parentName:"li",href:"https://wireguard.io"},"Wireguard"),"? It's a very interesting approach, with some shortcomings:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"no global addressing scheme"),(0,r.kt)("li",{parentName:"ul"},"there is one ",(0,r.kt)("inlineCode",{parentName:"li"},"eth")," interface / connection"),(0,r.kt)("li",{parentName:"ul"},"on the plus side, it transparently manages IP address changes"),(0,r.kt)("li",{parentName:"ul"},"does not help w/ Firewalls, eg. NAT needs to be configured on each node")))),(0,r.kt)("h2",{id:"cardano-networking"},"Cardano Networking"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra.wiki/blob/master/Networking.md#L1"},"this wiki page")," for detailed notes about how Cardano network works and uses Ouroboros."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cardano is a global network spanning 1000s of nodes, with nodes coming and going and a widely varying topology. Its main purpose is ",(0,r.kt)("em",{parentName:"li"},"block propagation"),": Blocks produced by some nodes according to the consensus rules needs to reach every node in the network in less than 20 seconds."),(0,r.kt)("li",{parentName:"ul"},"Nodes cannot be connected to all other nodes, as such block diffusion occurs through some form of ",(0,r.kt)("em",{parentName:"li"},"gossipping")," whereby a node is connected to a limited set of peers with which it exchanges blocks"),(0,r.kt)("li",{parentName:"ul"},"Nodes need to be resilient to adversarial behaviour from peers or other nodes, as such they need to control the amount and rate of data they want to ingest, hence the need for a ",(0,r.kt)("em",{parentName:"li"},"pull-based")," messaging layer"),(0,r.kt)("li",{parentName:"ul"},"Producer nodes are sensitive assets as they need access to signing keys, hence are usually run behind ",(0,r.kt)("em",{parentName:"li"},"relay nodes")," in order to increase safety and reduce the risk of DoS or other malicious activities"),(0,r.kt)("li",{parentName:"ul"},"Nodes are expected to run behind ADSL or cable boxes, firewalls, or in other complex networking settings preventing nodes to be ",(0,r.kt)("em",{parentName:"li"},"addressed")," directly, hence the need for nodes to ",(0,r.kt)("em",{parentName:"li"},"initiate")," connections to externally reachable ",(0,r.kt)("em",{parentName:"li"},"relay nodes"),", and for ",(0,r.kt)("em",{parentName:"li"},"pull-based")," messaging")),(0,r.kt)("h1",{id:"implementations"},"Implementations"),(0,r.kt)("h2",{id:"current-state"},"Current State"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hydra nodes form a network of pairwise connected ",(0,r.kt)("em",{parentName:"li"},"peers")," using Point-to-point (e.g TCP) connections. Those connections are expected to be up and running at all time",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Nodes use ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/"},"Ouroboros")," as the underlying network abstraction, which takes care of managing connections with peers providing a reliable Point-to-Point stream-based communication abstraction called a ",(0,r.kt)("inlineCode",{parentName:"li"},"Snocket")),(0,r.kt)("li",{parentName:"ul"},"All messages are ",(0,r.kt)("em",{parentName:"li"},"broadcast")," to peers using the PTP connections"),(0,r.kt)("li",{parentName:"ul"},"Due to the nature of the Hydra protocol, the lack of connection to a peer prevents any progress of the Head"))),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"hydra-node")," can only open a Head with ",(0,r.kt)("em",{parentName:"li"},"all")," its peers, and only them. This implies the nodes need to know in advance the topology of the peers and Heads they want to open"),(0,r.kt)("li",{parentName:"ul"},"Connected nodes implement basic ",(0,r.kt)("em",{parentName:"li"},"failure detection")," through heartbeats and monitoring exchanged messages"),(0,r.kt)("li",{parentName:"ul"},"Messages between peers are signed using party's hydra key and also validated upon receiving.")),(0,r.kt)("h2",{id:"gossip-diffusion-network"},"Gossip diffusion network"),(0,r.kt)("p",null,"The following diagram is one possible implementation of a pull-based messaging system for Hydra, drawn from a discussion with IOG's networking engineers:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hydra pull-based network",src:n(56013).Z,width:"5827",height:"2745"})))}u.isMDXComponent=!0},56013:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hydra-pull-based-network-82c3d214f8e8d9b2054a23a4fadd48db.jpg"}}]);