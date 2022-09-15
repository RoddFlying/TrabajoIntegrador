"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[909,9438,7025],{27025:function(c,a,b){b.r(a);var d,e=b(67294);function f(){return(f=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}a.default=function(a){return e.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-label":"Arrow pointing down"},a),d||(d=e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.467 17.94V3.75a.75.75 0 011.5 0v14.19l6.186-6.187a.75.75 0 111.061 1.061l-7.467 7.467a.749.749 0 01-.311.187h-.002a.727.727 0 01-.2.032H12.2a.727.727 0 01-.2-.032h-.001a.749.749 0 01-.311-.187L4.22 12.814a.75.75 0 111.06-1.061l6.187 6.187z"})))}},909:function(e,b,a){a.d(b,{Z:function(){return m}});var f=a(85893),c=a(79547),g=a.n(c),h=a(67294),d=a(94184),i=a.n(d),j=a(69438),k=a(58434);function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var m=function(d){var v=d.cardsPerSlide,o=void 0===v?4:v,p=d.children,C=d.className,w=d.mobileCardWidth,c=void 0===w?250:w,x=d.noResultsDisplay,D=d.seeMoreCardClass,e=d.seeMoreHref,t=d.seeMoreOnClick,y=d.seeMoreText,m=void 0===y?"Show all":y,z=d.showSeeMoreCard,u=d.subtitle,q=d.title,r=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(d,["cardsPerSlide","children","className","mobileCardWidth","noResultsDisplay","seeMoreCardClass","seeMoreHref","seeMoreOnClick","seeMoreText","showSeeMoreCard","subtitle","title"]),A=(0,h.useState)(0),n=A[0],H=A[1],B=z&&h.Children.count(p)>o?h.Children.count(p)+1:h.Children.count(p);if(!B&&!x)return null;var s=Math.ceil(B/o),E={transform:"translateX(calc(-".concat(100*n,"% - ").concat(12*n,"px))")},a=1/o*100,b=(o-1)*12/o,F="string"==typeof q?(0,f.jsx)("h2",{children:q}):q,G="string"==typeof q?(0,f.jsx)("p",{children:u}):u;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){l(d,a,c[a])})}return d}({"data-testid":"carousel"},r,{className:g().dynamic([["b82072d18b4275de",[c,a,b]]])+" "+(r&&null!=r.className&&r.className||i()(C)||""),children:[(0,f.jsxs)("div",{className:g().dynamic([["b82072d18b4275de",[c,a,b]]])+" flex items-end justify-between",children:[(0,f.jsxs)("div",{className:g().dynamic([["b82072d18b4275de",[c,a,b]]]),children:[q&&F,u&&G]}),(0,f.jsxs)("div",{className:g().dynamic([["b82072d18b4275de",[c,a,b]]])+" hidden lg:flex text-green items-center",children:[e&&m&&(0,f.jsx)("a",{href:e,onClick:t,"data-testid":"carousel-see-more-link",className:g().dynamic([["b82072d18b4275de",[c,a,b]]])+" text-green font-bold  underline",children:m}),s>1&&(0,f.jsxs)("span",{className:g().dynamic([["b82072d18b4275de",[c,a,b]]])+" ml-xxl",children:[(0,f.jsx)("button",{disabled:0===n,"aria-label":"See previous",onClick:function(){H(n-1)},className:g().dynamic([["b82072d18b4275de",[c,a,b]]])+" "+(i()("rounded-full bg-white elevation-low mr-lg",{"text-deep-green-40":0===n})||""),children:(0,f.jsx)(k.default,{direction:"left"})}),(0,f.jsx)("button",{disabled:n===s-1,"aria-label":"See next",onClick:function(){H(n+1)},className:g().dynamic([["b82072d18b4275de",[c,a,b]]])+" "+(i()("rounded-full bg-white elevation-low",{"text-deep-green-40":n===s-1})||""),children:(0,f.jsx)(k.default,{direction:"right"})})]})]})]}),(0,f.jsx)("div",{style:{width:"calc(100% + 16px)"},className:g().dynamic([["b82072d18b4275de",[c,a,b]]])+" overflow-auto lg:overflow-hidden -mx-sm p-sm pb-md",children:h.Children.count(p)?(0,f.jsxs)("ul",{style:E,className:g().dynamic([["b82072d18b4275de",[c,a,b]]])+" inline-flex lg:flex -mr-sm lg:mr-none transition-transform",children:[h.Children.map(p,function(d){return(0,f.jsx)("li",{className:g().dynamic([["b82072d18b4275de",[c,a,b]]])+" flex-shrink-0 carousel__card mr-md",children:d})}),z&&e&&m&&s>1&&(0,f.jsx)("li",{className:g().dynamic([["b82072d18b4275de",[c,a,b]]])+" "+(i()("flex-shrink-0 carousel__card",D)||""),children:(0,f.jsxs)("a",{href:e,onClick:t,className:g().dynamic([["b82072d18b4275de",[c,a,b]]])+" w-full h-full flex flex-col items-center justify-center",children:[(0,f.jsx)("div",{className:g().dynamic([["b82072d18b4275de",[c,a,b]]])+" bg-light-grey rounded-full p-xl mb-sm",children:(0,f.jsx)(j.default,{width:"20",height:"20",direction:"right"})}),(0,f.jsx)("span",{className:g().dynamic([["b82072d18b4275de",[c,a,b]]])+" font-bold",children:m})]})})]}):(0,f.jsx)("div",{style:{minHeight:"100px"},className:g().dynamic([["b82072d18b4275de",[c,a,b]]])+" flex items-center justify-center w-full",children:x})}),e&&m&&(0,f.jsx)("a",{href:e,onClick:t,className:g().dynamic([["b82072d18b4275de",[c,a,b]]])+" block lg:hidden text-green font-bold mt-xs cursor-pointer underline",children:m})]})),(0,f.jsx)(g(),{id:"b82072d18b4275de",dynamic:[c,a,b],children:".carousel__card.__jsx-style-dynamic-selector{width:".concat(c,"px}@media only screen and (min-width:1025px){.carousel__card.__jsx-style-dynamic-selector{width:-webkit-calc(").concat(a,"% - ").concat(b,"px);width:-moz-calc(").concat(a,"% - ").concat(b,"px);width:calc(").concat(a,"% - ").concat(b,"px)}}")})]})}},69438:function(d,b,a){a.r(b),a.d(b,{"default":function(){return i}});var e=a(85893),c=a(94184),f=a.n(c),g=a(27025);function h(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function i(a){var c=a.className,d=a.direction,b=void 0===d?"down":d,i=a.height,j=a.width,k=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["className","direction","height","width"]);return(0,e.jsx)(g.default,function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){h(d,a,c[a])})}return d}({"aria-label":"Arrow pointing ".concat(b),className:f()("transform",void 0===c?"":c,{"-rotate-90":"right"===b,"rotate-180":"up"===b,"rotate-90":"left"===b}),height:void 0===i?"24":i,width:void 0===j?"24":j},k))}}}])