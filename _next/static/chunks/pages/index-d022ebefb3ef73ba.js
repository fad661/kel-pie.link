(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7985:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return rt},default:function(){return it}});var r=n(9499),i=n(7812),o=n(7294),c=n(705),a=n.n(c),l={RED:"#f6abab",BLUE:"#c5cfff",GREEN:"#beeeb5",NONE:"#ccc"},s=function(t){return Object.keys(l).findIndex((function(e){return l[e]===t}))},u=n(7460),d=n(917),f=function(t,e){return(0,d.iv)("box-sizing:border-box;position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column;margin:5px;border:1px solid #ccc;border-radius:5px;padding:10px;background:",e,";@media print{margin:",t===u.Lm.PRINT?"5px":0,";break-inside:avoid;}","")},p=function(t,e){return(0,d.iv)(f(t,e)," width:63mm;height:44mm;","")},m=function(t,e){return(0,d.iv)(f(t,e)," height:88mm;width:63mm;","")},b=n(5944),g="halfPorker",h="porker",y=function(t){var e=t.size,n=void 0===e?h:e,r=t.background,i=t.children,c=(0,u.Vd)().printMode,a=(0,o.useMemo)((function(){return n===g?p(c,r):m(c,r)}),[c,n,r]);return(0,b.tZ)("li",{css:a,children:i})},v=function(t){t.color;return(0,b.tZ)(y,{})};var x={ul:{name:"1poikzr",styles:"width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:-20px;margin:0;padding:0;list-style:none"},li:function(t){return(0,d.iv)("display:flex;justify-content:center;align-items:center;border:5px solid ",t,";border-radius:50%;width:70%;aspect-ratio:1/1;writing-mode:vertical-rl;font-size:2.4em;color:",t,";font-weight:bolder;background:#fff;","")}},w=function(t){var e=t.color,n=t.amount,r=(0,o.useMemo)((function(){return x.li(e)}),[]);return(0,b.tZ)(y,{children:(0,b.tZ)("ul",{css:x.ul,children:(0,b.tZ)("li",{css:r,children:n})})})};var Z={wrapper:{name:"nwa8ad",styles:"display:flex;flex-direction:column;justify-content:flex-start;align-items:strech;width:100%;height:100%"},section:{name:"vi767p",styles:"position:relative;padding:10px 0;&:not(:last-child){height:min-content;border-bottom:1px solid #ccc;}"},leaderPoint:{name:"bndn9g",styles:'bottom:0;left:0;margin:0;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;gap:5px;writing-mode:vertical-rl;font-size:2.4em;line-height:1;font-weigh:bolder;&:before{display:block;content:"";content:attr(title);font-size:0.2em;color:#ccc;}'},slots:{name:"12l6f30",styles:"display:flex;align-items:flex-start;gap:10px;margin:0;padding:0;list-style:none"},slot:{name:"18tv5aj",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:1px;writing-mode:vertical-rl;text-orientation:sideways;&:before{display:block;content:attr(title);font-size:0.4em;color:#ccc;}"},cost:{name:"1fobyf3",styles:"display:flex;flex-direction:row;gap:2px;margin:0;padding:0;list-style:none"},badge:function(t){return(0,d.iv)("box-sizing:border-box;background:",null!==t&&void 0!==t?t:"#fff",";border:1px solid ",null!==t&&void 0!==t?t:l.NONE,";border-radius:50%;width:0.5em;aspect-ratio:1/1;","")}},k=function(t){var e=t.costs,n=(0,o.useMemo)((function(){return e.sort((function(t,e){return function(t,e){return s(t)-s(e)}(t.color,e.color)}))}),[e]);return(0,b.tZ)("ul",{css:Z.cost,children:n.map((function(t){return(0,i.Z)(Array(t.amount)).map((function(){return(0,b.tZ)("li",{css:Z.badge(t.color)},a()(t))}))}))})},O=function(t){t.projectType;var e=t.leaderPoint,n=t.slots;(0,o.useMemo)((function(){}),[n]);return(0,b.tZ)(y,{children:(0,b.BX)("div",{css:Z.wrapper,children:[(0,b.tZ)("section",{css:Z.section,children:(0,b.tZ)("p",{css:Z.leaderPoint,title:"LP",children:e})}),(0,b.tZ)("section",{css:Z.section,children:(0,b.tZ)("ul",{css:Z.slots,children:n.map((function(t){return(0,b.tZ)("li",{css:Z.slot,title:"".concat(t.pointType," ").concat(t.difficluty),children:(0,b.tZ)(k,{costs:t.costs})},a()(t))}))})})]})})};var j={p:{name:"289nek",styles:"display:flex;justify-content:center;align-items:center;border-radius:50%;width:70%;aspect-ratio:1/1;writing-mode:vertical-rl;font-size:2.4em;color:#ccc;font-weight:bolder;background:#fff"}},P=function(t){var e=t.turn;return(0,b.tZ)(y,{children:(0,b.tZ)("p",{css:j.p,children:e})})};var M=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,d.iv)("display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:flex-start;flex-direction:row;gap:20px;margin:0;padding:0;list-style:none;@media print{gap:0;flex-direction:",t?"row-reverse":"row",";}","")},_={a4:{name:"177cy0i",styles:"width:100%;margin:20px;@media print{margin:0;-webkit-print-color-adjust:exact;page-break-before:always;}"},title:{name:"bkz348",styles:"color:#ccc;@media print{display:none;}"},ul:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,d.iv)(M(t),";","")}},C="A4",T=function(t){var e=t.size,n=void 0===e?"A4":e,r=t.title,i=t.children,c=t.reverse,a=void 0!==c&&c,l=(0,o.useMemo)((function(){if(n===C)return _.a4}),[n]);return(0,b.BX)("section",{css:l,children:[(0,b.tZ)("h2",{css:_.title,children:r}),(0,b.tZ)("ul",{css:_.ul(a),children:i})]})},E=n(6835),z=n(338);var B={footer:{name:"1vwnwf1",styles:"z-index:100;position:sticky;bottom:0;width:100%;display:flex;justify-content:space-around;align-items:center;padding:20px 40px;background:#fff;box-shadow:rgba(149, 157, 165, 0.2) 0px 8px 24px;@media print{display:none;}"},select:{name:"httug0",styles:"border:1px solid transparent;border-radius:10px;padding:8px"},button:{name:"jzonl0",styles:"cursor:pointer;outline:none;background:#fff;border:2px solid #FF5959;border-radius:20px;color:#FF5959;padding:10px 20px;&:hover{background:#FF5959;color:#fff;}"}};function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var A=function(t,e){(0,z.parse)(t,{complete:function(t){e(t.data)},header:!0})},X=function(t){var e=t.options,n=void 0===e?[]:e,r=t.onSelect,i=void 0===r?function(){}:r,o=t.selectedValue;return(0,b.tZ)("select",{css:B.select,onChange:i,children:n.map((function(t){return(0,b.tZ)("option",{value:t.value,selected:t.value===o,children:t.label},a()(t))}))})},D=function(t){var e=t.onParseMoneyCallback,n=t.onParseProjectCallback,r=t.onParseManaCallback,i=(0,u.Vd)(),c=i.sideType,a=i.setSideType,l=i.printMode,s=i.setPrintMode,d=i.loadCardType,f=i.setLoadCardType,p=(0,o.useMemo)((function(){return{options:Object.entries(u.g).map((function(t){var e=(0,E.Z)(t,2),n=e[0];return{value:e[1],label:n}})),onSelect:function(t){var e=parseInt(t.currentTarget.value);a(e)},selectedValue:c}}),[c,a]),m=(0,o.useMemo)((function(){return{options:Object.entries(u.Lm).map((function(t){var e=(0,E.Z)(t,2),n=e[0];return{value:e[1],label:n}})),onSelect:function(t){var e=parseInt(t.currentTarget.value);s(e)},selectedValue:l}}),[l,s]),g=(0,o.useMemo)((function(){return{options:Object.entries(u.WK).map((function(t){var e=(0,E.Z)(t,2),n=e[0];return{value:e[1],label:n}})),onSelect:function(t){var e=t.currentTarget.value;f((function(){return e}))},selectedValue:d}}),[d,f]),h=(0,o.useCallback)((function(t){if(null!==t.target.files){var n=t.target.files[0];A(n,e)}}),[e]),y=(0,o.useCallback)((function(t){if(null!==t.target.files){var e=t.target.files[0];A(e,n)}}),[n]),v=(0,o.useCallback)((function(t){if(null!==t.target.files){var e=t.target.files[0];A(e,r)}}),[r]),x=(0,o.useCallback)((function(){window.print()}),[]),w=(0,o.useMemo)((function(){switch(d){case u.WK.MONEY:return h;case u.WK.PROJECT:return y;case u.WK.MANA:return v;default:return function(){}}}),[d,h,y,v]);return(0,b.BX)("footer",{css:B.footer,children:[(0,b.BX)("div",{children:[(0,b.tZ)("div",{children:(0,b.tZ)("strong",{children:"Side Type"})}),(0,b.tZ)(X,S({},p))]}),(0,b.BX)("div",{children:[(0,b.tZ)("div",{children:(0,b.tZ)("strong",{children:"Print Mode"})}),(0,b.tZ)("div",{children:(0,b.tZ)(X,S({},m))})]}),(0,b.BX)("div",{children:[(0,b.tZ)("div",{children:(0,b.tZ)("strong",{children:"Card Type"})}),(0,b.BX)("div",{children:[(0,b.tZ)(X,S({},g)),(0,b.tZ)("input",{type:"file",name:"money",onChange:w})]})]}),(0,b.tZ)("div",{children:(0,b.tZ)("button",{css:B.button,type:"button",onClick:x,children:"Print"})})]})};var I={label:function(t){return(0,d.iv)("z-index:3;position:absolute;top:0;right:0;margin:0;border-radius:0 0 0 10px;padding:2mm;display:flex;list-style:none;color:#fff;background:",t,";font-size:3mm;font-weight:bold;","")},ul:{name:"12tk95s",styles:"z-index:3;position:absolute;top:2mm;left:2mm;margin:0;padding:0;display:flex;list-style:none"},li:{name:"1siybi",styles:"width:8mm;height:8mm"},background:function(t){return(0,d.iv)("z-index:1;position:absolute;bottom:0;width:100%;height:80%;background:",t,";opacity:.4;clip-path:circle(99.1% at 100% 99%);","")},picture:{name:"4h295q",styles:"display:flex;justify-content:center;align-items:flex-start;z-index:2;width:80%;height:80%"},textWrapper:function(t){return(0,d.iv)("box-sizing:border-box;z-index:3;background:#fff;font-size:2mm;font-weight:bold;position:absolute;bottom:2mm;border:1px solid ",t,";border-radius:10px;padding:2mm 4mm;width:90%;height:40%;& p{margin:0;padding:2mm 0;&:first-child{border-bottom:1px solid #ccc;}}","")}},F="\u30a2\u30bf\u30c3\u30af",V="\u52dd\u5229\u70b9",H="\u8cfc\u5165",L="\u30a2\u30af\u30b7\u30e7\u30f3",R="\u30c9\u30ed\u30fc",W="\u30ea\u30a2\u30af\u30b7\u30e7\u30f3",Y="\u5e02\u5834\u64cd\u4f5c",K="\u30b8\u30e7\u30fc\u30ab\u30fc",G=function(t){var e=t.mana,n=t.abilityType,r=t.marketAbility,c=void 0===r?"":r,l=t.additionalAbility,s=void 0===l?"":l;console.log(e);var u=(0,o.useMemo)((function(){switch(n){case F:case K:return["#F16056","anubis.png"];case V:case L:return["#00A583","bastet.png"];case H:return["#F2D324","horus.png"];case W:case R:return["#4D73BB","wenet.png"];case Y:return["#f1b356","set.png"];default:return["#AB5792","sata.png"]}}),[n]),d=u[0],f=u[1];return(0,b.BX)(y,{children:[(0,b.tZ)("p",{css:I.label(d),children:n}),e?(0,b.tZ)("ul",{css:I.ul,children:(0,i.Z)(Array(e)).map((function(){return(0,b.tZ)("li",{css:I.li,children:(0,b.tZ)("img",{src:"/images/mana.svg"})},"".concat(a()(e),"-").concat(e))}))}):null,(0,b.tZ)("div",{css:I.background(d)}),(0,b.tZ)("picture",{css:I.picture,children:(0,b.tZ)("img",{src:"/images/".concat(f)})}),(0,b.BX)("div",{css:I.textWrapper(d),children:[(0,b.tZ)("p",{children:c}),(0,b.tZ)("p",{children:s})]})]})};function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var q=function(t){switch(t){case"red":case"r":return l.RED;case"blue":case"b":return l.BLUE;case"green":case"g":return l.GREEN;default:return l.NONE}},J=function(t){var e=Q(t.slot1_type,t.slot1_dif,t.slot1_costs),n=Q(t.slot2_type,t.slot2_dif,t.slot2_costs),r=Q(t.slot3_type,t.slot3_dif,t.slot3_costs),i=[];return e&&i.push(e),n&&i.push(n),r&&i.push(r),i},Q=function(t,e,n){return t&&e&&n?{difficluty:parseInt(e),pointType:t,costs:$(n)}:null},$=function(t){return["r","g","b","n"].map((function(e){return{color:q(e),amount:tt(t,e)}}))},tt=function(t,e){return t.split("").filter((function(t){return t===e})).length},et={name:"10y1gc6",styles:"body{margin:0;min-height:100vh;}img{width:100%;}@page{margin:10px;}"},nt=function(t,e){var n=Math.ceil(t.length/e);return new Array(n).fill(0).map((function(n,r){return t.slice(r*e,(r+1)*e)}))},rt=!0,it=function(){var t=(0,u.Vd)(),e=t.sideType,n=(t.loadCardType,(0,o.useState)([])),c=n[0],l=n[1],s=(0,o.useState)([]),f=s[0],p=s[1],m=(0,o.useState)([]),g=m[0],h=m[1],y=(0,o.useCallback)((function(t){var e=t.map((function(t){return{color:q(t.color),amount:parseInt(t.amount)}}));l(e)}),[]),x=(0,o.useCallback)((function(t){var e=t.map((function(t){return{leaderPoint:parseInt(t.leaderPoint),turn:parseInt(t.turn),projectType:t.type,slots:J(t)}}));p(e)}),[]),Z=(0,o.useCallback)((function(t){var e=t.reduce((function(t,e){var n=(0,i.Z)(Array(parseInt(e["\u679a\u6570"]))).map((function(){return{mana:parseInt(e["\u30de\u30ca"]),abilityType:e["\u52b9\u679c\u306e\u5c5e\u6027"],marketAbility:e["\u5909\u52d5"],additionalAbility:e["\u52b9\u679c"],count:parseInt(e["\u679a\u6570"])}}));return t.concat(n)}),[]);h(e)}),[]),k=(0,o.useMemo)((function(){return nt(c,9)}),[c]),j=(0,o.useMemo)((function(){return nt(f,9)}),[f]),M=(0,o.useMemo)((function(){return nt(g,9)}),[g]);return(0,b.BX)(b.HY,{children:[(0,b.tZ)(d.xB,{styles:et}),k.map((function(t){return(0,b.BX)(b.HY,{children:[(0,b.tZ)(T,{title:"\u7d19\u5e63: \u8868",children:t.map((function(t){return(0,b.tZ)(w,{color:t.color,amount:t.amount},"front-".concat(a()(t)))}))}),e===u.g.BOTH?(0,b.tZ)(T,{title:"\u7d19\u5e63: \u88cf",reverse:!0,children:t.map((function(t){return(0,b.tZ)(v,{color:t.color},"back-".concat(a()(t)))}))}):null]})})),j.map((function(t){return(0,b.BX)(b.HY,{children:[(0,b.tZ)(T,{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8: \u8868",children:t.map((function(t){return(0,b.tZ)(O,{leaderPoint:t.leaderPoint,slots:t.slots},"front-".concat(a()(t)))}))}),e===u.g.BOTH?(0,b.tZ)(T,{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8: \u88cf",reverse:!0,children:t.map((function(t){return(0,b.tZ)(P,{turn:t.turn},"back-".concat(a()(t)))}))}):null]})})),M.map((function(t){return(0,b.tZ)(b.HY,{children:(0,b.tZ)(T,{title:"\u30a2\u30af\u30b7\u30e7\u30f3\u30ab\u30fc\u30c9",children:t.map((function(t){return(0,b.tZ)(G,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?U(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t),"front-".concat(a()(t)))}))})})})),(0,b.tZ)(D,{onParseMoneyCallback:y,onParseProjectCallback:x,onParseManaCallback:Z})]})}},8312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7985)}])}},function(t){t.O(0,[687,774,888,179],(function(){return e=8312,t(t.s=e);var e}));var e=t.O();_N_E=e}]);