!function(e){function t(t){for(var r,c,i=t[0],l=t[1],u=t[2],p=0,f=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={0:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;o.push([33,1]),n()}({25:function(e,t){},31:function(e,t){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(17),c=n.n(o),i=(n(25),n(6)),l=n(2);function u(e){return a.a.createElement("div",{className:"header-container"},a.a.createElement("div",{className:"header"},a.a.createElement("img",{src:"https://i.ibb.co/Ydj1Mz2/skylinemagic.jpg",alt:"skylinemagic",border:"0"}),a.a.createElement("h1",{id:"banner-title"},"AFBELARDI"),a.a.createElement("button",{className:"nav",onClick:()=>{window.scrollBy(0,600)}},"Store"),a.a.createElement(i.b,{to:"/about"},a.a.createElement("button",{className:"nav"},"About"))))}function s(e){return a.a.createElement("main",{className:"product-listings"},a.a.createElement(a.a.Fragment,null,Object.keys(e.data).length?e.data.map(e=>a.a.createElement("ul",{key:e.title},a.a.createElement("li",{key:e.image},a.a.createElement(i.b,{to:"/".concat(e._id)},a.a.createElement("img",{className:"product-image",src:e.image}))))):""))}function p(e,t,n,r,a,o,c){try{var i=e[o](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,a)}var f=n(11);n(31);function m(e,t,n,r,a,o,c){try{var i=e[o](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,a)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){m(o,r,a,c,i,"next",e)}function i(e){m(o,r,a,c,i,"throw",e)}c(void 0)}))}}const h=Object(f.a)("pk_test_51IaUxUBxAJS3ymB4uO2cKT0DJx92FJSZyzMfpAOk4iLI566gVGYZHIQ2EV83tkxwq16oD2NbQClcxZCrPHpL88fU00cZ8L3GR9");var y=n(8),b=n(18),v=n.n(b);function g(){const e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n\twidth: 475px;\n\tmargin: 30px auto;\n\tbox-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),\n\t\tinset 0 1px 0 #829fff;\n\tborder-radius: 4px;\n\tbackground-color: #7795f8;\n\tposition: relative;\n"]);return g=function(){return e},e}y.a.div(g());function E(){const e=j(["\n\tmargin-top: 40px;\n"]);return E=function(){return e},e}function O(){const e=j(["\n\tfont-size: 58px;\n"]);return O=function(){return e},e}function w(){const e=j(["\n\twidth: 475px;\n\tmargin: 30px auto 0 auto;\n\ttext-align: center;\n\tcolor: #fff;\n"]);return w=function(){return e},e}function j(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const x=y.a.div(w()),k=y.a.div(O()),S=y.a.div(E());var P=[{Component:function(e){return a.a.createElement("div",{className:"AboutPage"},"This is the ",e.page," page")},key:"About",path:"/about"},{Component:function(){const[e,t]=Object(r.useState)(0),[n,o]=Object(r.useState)(0);return Object(r.useEffect)(()=>{setTimeout(()=>{t(window.innerWidth),o(window.innerHeight)},100)}),a.a.createElement(Layout,{title:"Success!"},a.a.createElement(x,null,a.a.createElement(v.a,{width:e,height:n,numberOfPieces:450}),a.a.createElement(k,null,"congrats!"),a.a.createElement(S,null,"Stripe has successfully processed your payment")))},key:"Success",path:"/success"},{Component:function(e){const[t,n]=Object(r.useState)({});Object(r.useEffect)(()=>{d((function*(){try{const t=yield fetch("/api/photos/".concat(e.match.params.id)),r=yield t.json();n(r)}catch(e){console.error(e)}}))()},[]);const o=function(){var e=d((function*(e){console.log(t.price);const n=yield h,r=yield fetch("/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({price:t.price})}),a=yield r.json();(yield n.redirectToCheckout({sessionId:a.id})).error}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:"StorePage"},a.a.createElement("div",{className:"show-wrapper"},a.a.createElement(u,null)),a.a.createElement("h1",{id:"show-title"},t.title),a.a.createElement("div",{className:"show-section"},a.a.createElement("img",{className:"show-image",loading:"lazy",src:t.image})),a.a.createElement("h2",{id:"size"},t.size),a.a.createElement("h3",{id:"price"},"$",t.price),a.a.createElement("div",{id:"checkout-form"},a.a.createElement("button",{role:"link",onClick:o},"Checkout")))},key:"Show",path:"/:id"},{Component:function(e){const[t,n]=Object(r.useState)([]);return Object(r.useEffect)(()=>{var e;(e=function*(){try{const e=yield fetch("/api/photos"),t=yield e.json();yield n(t)}catch(e){console.error(e)}},function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){p(o,r,a,c,i,"next",e)}function i(e){p(o,r,a,c,i,"throw",e)}c(void 0)}))})()},[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"StorePage"},a.a.createElement(u,null),a.a.createElement("h1",{id:"store-title"},"STORE"),a.a.createElement(s,{data:t})))},key:"Store",path:"/"}],N=n(19);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const z=Object(f.a)("pk_test_51IaUxUBxAJS3ymB4uO2cKT0DJx92FJSZyzMfpAOk4iLI566gVGYZHIQ2EV83tkxwq16oD2NbQClcxZCrPHpL88fU00cZ8L3GR9");var _=()=>a.a.createElement(i.a,null,a.a.createElement(N.Elements,{stripe:z},a.a.createElement(l.c,null,P.map(e=>{let{Component:t,key:n,path:r}=e;return a.a.createElement(l.a,{key:n,path:r,component:e=>a.a.createElement(t,C({},e,{page:n}))})}))));const T=document.getElementById("store");c.a.render(a.a.createElement(_,null),T)}});