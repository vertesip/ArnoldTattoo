(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3,4,5,7,8,10,11],{320:function(t,n,e){var content=e(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("287d7002",content,!0,{sourceMap:!1})},321:function(t,n,e){var content=e(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("4b8d5545",content,!0,{sourceMap:!1})},322:function(t,n,e){"use strict";e(320)},323:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nhtml{\n  scroll-behavior:smooth\n}\n::-webkit-scrollbar{\n  width:10px\n}\n::-webkit-scrollbar-track{\n  background:#0e0e0e\n}\n::-webkit-scrollbar-thumb{\n  background:transparent;\n  background:#4a4a4a;\n  background:#cfcfcf\n}\n.nav,.nav>div>aside{\n  background:#0e0e0e;\n  transition:.2s\n}\n#__layout>main>nav,.nav{\n  transition:.2s\n}\n.nav{\n  display:initial;\n  height:50px\n}\n.logo{\n  opacity:1;\n  transition:.2s\n}\n.transparent-nav{\n  background:transparent;\n  height:100px\n}\n.transparent-logo{\n  opacity:0\n}\nul li a{\n  text-shadow:1px 1px #000\n}\naside>ul{\n  gap:20px\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},324:function(t,n,e){"use strict";e(321)},325:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nfooter[data-v-74dbc31f]{\n  margin-top:auto;\n  background:#0e0e0e\n}\n@media only screen and (max-width:766px){\nfooter>div[data-v-74dbc31f]{\n    display:flex;\n    flex-direction:column;\n    gap:5px\n}\nfooter>div>span[data-v-74dbc31f]{\n    text-align:left\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},326:function(t,n,e){"use strict";e.r(n);var o={name:"NavBar",data:function(){return{isOpen:!1}},watch:{isOpen:{immediate:!0,handler:function(t){t?document.body.style.setProperty("overflow","hidden"):document.body.style.removeProperty("overflow")}}},mounted:function(){var t=this;window.addEventListener("scroll",this.onScroll);var nav=document.querySelector(".nav"),n=document.querySelector(".logo");this.windowTop=window.top.scrollY,0!==window.top.scrollY&&(nav.classList.remove("transparent-nav"),n.classList.remove("transparent-logo")),document.addEventListener("keydown",(function(n){27===n.keyCode&&t.isOpen&&(t.isOpen=!1)}))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){var nav=document.querySelector(".nav"),n=document.querySelector(".logo");this.windowTop=window.top.scrollY,0===window.top.scrollY?(nav.classList.add("transparent-nav"),n.classList.add("transparent-logo")):(nav.classList.remove("transparent-nav"),n.classList.remove("transparent-logo"))},drawer:function(){this.isOpen=!this.isOpen}}},r=(e(322),e(17)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"nav transparent transparent-nav fixed z-10 w-full h-12 px-5 z-50"},[e("div",{staticClass:"flex items-center justify-between h-full max-w-7xl m-auto"},[e("div",[e("nuxt-link",{attrs:{to:{path:"/"}}},[e("img",{staticClass:"logo transparent-logo max-h-10",attrs:{src:"logo.png",alt:"Arnold Tattoo Logo"}})])],1),t._v(" "),e("div",{staticClass:"md:hidden"},[e("button",{staticClass:"text-gray-500 w-10 h-10 relative focus:outline-none",on:{click:t.drawer}},[e("div",{staticClass:"\n            block\n            w-5\n            absolute\n            left-1/2\n            top-1/2\n            transform\n            -translate-x-1/2 -translate-y-1/2\n          "},[e("span",{staticClass:"\n              block\n              absolute\n              h-0.5\n              w-5\n              bg-white\n              transform\n              transition\n              duration-500\n              ease-in-out\n            ",class:t.isOpen?"rotate-45":"-translate-y-1.5",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",{staticClass:"\n              block\n              absolute\n              h-0.5\n              w-5\n              bg-white\n              transform\n              transition\n              duration-500\n              ease-in-out\n            ",class:t.isOpen?"opacity-0":"",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",{staticClass:"\n              block\n              absolute\n              h-0.5\n              w-5\n              bg-white\n              transform\n              transition\n              duration-500\n              ease-in-out\n            ",class:t.isOpen?"-rotate-45":"translate-y-1.5",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),e("div",{staticClass:"hidden md:block"},[e("ul",{staticClass:"flex space-x-8 text-sm font-sans text-white"},[e("li",[e("nuxt-link",{attrs:{to:{path:"/",hash:"#about-me"}}},[t._v("Rólam")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:{path:"/galleria"}}},[t._v("Galéria")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:{path:"/",hash:"#booking"}}},[t._v("Időpontfoglalás")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:{path:"/",hash:"#shirts"}}},[t._v("Pólók")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:{path:"/",hash:"#googleMap"}}},[t._v("Kapcsolat")])],1)])]),t._v(" "),e("transition",{attrs:{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"z-10 fixed inset-0 transition-opacity",on:{keydown:function(n){if(!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"]))return null;t.isOpen=!1}}},[e("div",{staticClass:"absolute inset-0 bg-black opacity-50",attrs:{tabindex:"0"},on:{click:function(n){t.isOpen=!1}}})])]),t._v(" "),e("aside",{staticClass:"\n        p-5\n        transform\n        top-0\n        left-0\n        w-64\n        fixed\n        h-full\n        overflow-auto\n        ease-in-out\n        transition-all\n        duration-300\n        z-30\n      ",class:t.isOpen?"translate-x-0":"-translate-x-full"},[e("div",{staticClass:"close"},[e("button",{staticClass:"absolute top-0 right-0 mt-4 mr-4",on:{click:function(n){t.isOpen=!1}}},[e("svg",{staticClass:"w-6 h-6",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{d:"M6 18L18 6M6 6l12 12"}})])])]),t._v(" "),e("ul",{staticClass:"font-sans text-white flex flex-col"},[e("li",{on:{click:function(n){t.isOpen=!1}}},[e("nuxt-link",{attrs:{to:{path:"/",hash:"#about-me"}}},[t._v("Rólam")])],1),t._v(" "),e("li",{on:{click:function(n){t.isOpen=!1}}},[e("nuxt-link",{attrs:{to:{path:"/galleria"}}},[t._v("Galéria")])],1),t._v(" "),e("li",{on:{click:function(n){t.isOpen=!1}}},[e("nuxt-link",{attrs:{to:{path:"/",hash:"#booking"}}},[t._v("Időpontfoglalás")])],1),t._v(" "),e("li",{on:{click:function(n){t.isOpen=!1}}},[e("nuxt-link",{attrs:{to:{path:"/",hash:"#shirts"}}},[t._v("Pólók")])],1),t._v(" "),e("li",{on:{click:function(n){t.isOpen=!1}}},[e("nuxt-link",{attrs:{to:{path:"/",hash:"#googleMap"}}},[t._v("Kapcsolat")])],1)]),t._v(" "),e("div",{staticClass:"follow"},[e("p",{staticClass:"italic font-sans text-sm"},[t._v("follow us:")]),t._v(" "),e("div",{staticClass:"social flex space-x-5 mt-4"},[e("a",{attrs:{href:"https://www.facebook.com/arnoldt.tattoo",target:"_blank"}},[e("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[e("path",{attrs:{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])]),t._v(" "),e("a",{attrs:{href:"https://www.instagram.com/kolozsvari_arnold/",target:"_blank"}},[e("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"instagram",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}})])])])])])],1)])}),[],!1,null,null,null);n.default=component.exports},327:function(t,n,e){"use strict";e.r(n);var o={name:"FooterElement"},r=(e(324),e(17)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",{staticClass:"\n    p-4\n    shadow\n    md:flex md:items-center md:justify-between md:p-6\n    dark:bg-gray-800\n  "},[e("div",{staticClass:"max-w-7xl mx-auto flex w-full justify-between"},[e("div",{staticClass:"flex flex-col gap-2"},[e("span",{staticClass:"text-sm sm:text-center text-white"},[t._v("© 2022 Arnold Tattoo. Minden jog fenntartva\n      ")]),t._v(" "),e("div",{staticClass:"flex gap-3"},[e("a",{attrs:{href:"https://www.facebook.com/arnoldt.tattoo",target:"_blank"}},[e("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[e("path",{attrs:{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])]),t._v(" "),e("a",{attrs:{href:"https://www.instagram.com/kolozsvari_arnold/",target:"_blank"}},[e("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"instagram",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}})])])])]),t._v(" "),e("ul",{staticClass:"flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0"},[e("li",[e("nuxt-link",{staticStyle:{"border-bottom":"none"},attrs:{to:{path:"/adatvedelem"}}},[t._v("Adatvédelmi nyilatkozat")])],1)])])])}),[],!1,null,"74dbc31f",null);n.default=component.exports},328:function(t,n,e){var content=e(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("6f76ceb1",content,!0,{sourceMap:!1})},329:function(t,n,e){var content=e(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("3677247c",content,!0,{sourceMap:!1})},330:function(t,n,e){var content=e(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("93b67e96",content,!0,{sourceMap:!1})},331:function(t,n,e){var content=e(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("69c26f44",content,!0,{sourceMap:!1})},332:function(t,n,e){var content=e(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("0c235ee0",content,!0,{sourceMap:!1})},333:function(t,n,e){"use strict";e(328)},334:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nsection[data-v-6ea04a92]{\n  background:#0d0d0d;\n  position:relative\n}\n.banner[data-v-6ea04a92]{\n  height:100vh;\n  width:100%;\n  -o-object-fit:cover;\n     object-fit:cover;\n  -webkit-mask-image:linear-gradient(180deg,#000 50%,transparent);\n  mask-image:linear-gradient(180deg,#000 50%,transparent)\n}\n.logo[data-v-6ea04a92]{\n  position:absolute;\n  left:0;\n  right:0;\n  top:0;\n  bottom:0;\n  margin:auto;\n  max-height:-webkit-fill-available;\n  z-index:1\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},335:function(t,n,e){"use strict";e(329)},336:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nsection[data-v-689cf5e9]{\n  background:#0d0d0d\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},337:function(t,n,e){var map={"./at.png":338,"./background.jpg":339,"./bg_logo_nelkul.png":340,"./favicon.ico":341,"./gallery.png":342,"./gallery/274715628_471775764379338_4382020898604230668_n.webp":343,"./gallery/275935764_490839785806269_7383219440987325020_n.webp":344,"./gallery/277804829_501649164725331_7225738029099511224_n.webp":345,"./gallery/278508155_508128010744113_3433975312242100447_n.webp":346,"./gallery/279005256_511788750378039_5903530006355461080_n.webp":347,"./gallery/279019128_511788743711373_1425367768301718400_n.webp":348,"./logo.png":349,"./photo.png":350,"./ship.jpeg":351,"./shirt1.jpg":352,"./shirt2.jpg":353};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=337},338:function(t,n,e){t.exports=e.p+"img/at.e28d732.png"},339:function(t,n,e){t.exports=e.p+"img/background.12b9940.jpg"},340:function(t,n,e){t.exports=e.p+"img/bg_logo_nelkul.cdd21f1.png"},341:function(t,n){throw new Error("Module parse failed: Unexpected character '\0' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},342:function(t,n,e){t.exports=e.p+"img/gallery.e9043a9.png"},343:function(t,n,e){t.exports=e.p+"img/274715628_471775764379338_4382020898604230668_n.520ec6f.webp"},344:function(t,n,e){t.exports=e.p+"img/275935764_490839785806269_7383219440987325020_n.7fa9959.webp"},345:function(t,n,e){t.exports=e.p+"img/277804829_501649164725331_7225738029099511224_n.2ce650d.webp"},346:function(t,n,e){t.exports=e.p+"img/278508155_508128010744113_3433975312242100447_n.31fa27d.webp"},347:function(t,n,e){t.exports=e.p+"img/279005256_511788750378039_5903530006355461080_n.1ee1969.webp"},348:function(t,n,e){t.exports=e.p+"img/279019128_511788743711373_1425367768301718400_n.bcdae84.webp"},349:function(t,n,e){t.exports=e.p+"img/logo.c4d9453.png"},350:function(t,n,e){t.exports=e.p+"img/photo.d95a46d.png"},351:function(t,n,e){t.exports=e.p+"img/ship.7004801.jpeg"},352:function(t,n,e){t.exports=e.p+"img/shirt1.b1d99f2.jpg"},353:function(t,n,e){t.exports=e.p+"img/shirt2.36604e1.jpg"},354:function(t,n,e){"use strict";e(330)},355:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap);"]),o.push([t.i,"@import url(https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css);"]),o.push([t.i,"/*purgecss start ignore*/\nsection[data-v-c159b464]{\n  background:#0d0d0d;\n  background-size:cover\n}\n.slider-wrapper[data-v-c159b464]{\n  display:flex;\n  opacity:0;\n  flex-direction:column\n}\n.gallery-background[data-v-c159b464]{\n  height:100vh;\n  width:100%;\n  -o-object-fit:cover;\n     object-fit:cover\n}\n.slider[data-v-c159b464]{\n  width:100%;\n  position:relative;\n  overflow:hidden\n}\n.slide-ana[data-v-c159b464],.slider[data-v-c159b464]{\n  height:600px\n}\n.slide-ana>div[data-v-c159b464]{\n  display:flex;\n  align-items:center;\n  width:100%;\n  height:100%;\n  position:absolute;\n  transition:all 1s\n}\n.instagram-pic[data-v-c159b464]{\n  height:-webkit-fill-available\n}\n@media (min-width:0px) and (max-width:339px){\n.slider[data-v-c159b464]{\n    height:490px\n}\n}\n@media (min-width:340px) and (max-width:580px){\n.slider[data-v-c159b464]{\n    height:600px\n}\n}\n@media (min-width:581px) and (max-width:770px){\n.slider[data-v-c159b464]{\n    height:800px\n}\n}\n@media (min-width:768px) and (max-width:1023px){\n.slider[data-v-c159b464]{\n    height:581px\n}\n}\n@media (min-width:1024px) and (max-width:1280px){\n.slider[data-v-c159b464]{\n    height:379px\n}\n}\n.slider2[data-v-c159b464]{\n  width:100%;\n  height:395px;\n  position:relative;\n  overflow:hidden\n}\n.slide-ana2[data-v-c159b464]{\n  height:100%\n}\n.slide-ana2>div[data-v-c159b464]{\n  width:100%;\n  height:100%;\n  position:absolute;\n  transition:all 1s\n}\n@media (min-width:300px) and (max-width:1023px){\n.slider2[data-v-c159b464]{\n    height:378px\n}\n}\n.lds-ring[data-v-c159b464]{\n  display:flex;\n  position:absolute;\n  left:0;\n  right:0;\n  top:50%;\n  opacity:1;\n  margin:0 auto;\n  width:80px;\n  height:80px\n}\n.lds-ring div[data-v-c159b464]{\n  box-sizing:border-box;\n  display:block;\n  position:absolute;\n  width:64px;\n  height:64px;\n  margin:8px;\n  border-radius:50%;\n  -webkit-animation:lds-ring-data-v-c159b464 1.2s cubic-bezier(.5,0,.5,1) infinite;\n          animation:lds-ring-data-v-c159b464 1.2s cubic-bezier(.5,0,.5,1) infinite;\n  border:8px solid transparent;\n  border-top-color:#fff\n}\n.lds-ring div[data-v-c159b464]:first-child{\n  -webkit-animation-delay:-.45s;\n          animation-delay:-.45s\n}\n.lds-ring div[data-v-c159b464]:nth-child(2){\n  -webkit-animation-delay:-.3s;\n          animation-delay:-.3s\n}\n.lds-ring div[data-v-c159b464]:nth-child(3){\n  -webkit-animation-delay:-.15s;\n          animation-delay:-.15s\n}\n@-webkit-keyframes lds-ring-data-v-c159b464{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n@keyframes lds-ring-data-v-c159b464{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},356:function(t,n,e){"use strict";e(331)},357:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nsection[data-v-dc67d720]{\n  height:700px\n}\n.lds-ring[data-v-dc67d720]{\n  display:flex;\n  position:absolute;\n  left:0;\n  right:0;\n  top:50%;\n  opacity:1;\n  margin:0 auto;\n  width:80px;\n  height:80px\n}\n.lds-ring div[data-v-dc67d720]{\n  box-sizing:border-box;\n  display:block;\n  position:absolute;\n  width:64px;\n  height:64px;\n  margin:8px;\n  border-radius:50%;\n  -webkit-animation:lds-ring-data-v-dc67d720 1.2s cubic-bezier(.5,0,.5,1) infinite;\n          animation:lds-ring-data-v-dc67d720 1.2s cubic-bezier(.5,0,.5,1) infinite;\n  border:8px solid transparent;\n  border-top-color:#fff\n}\n.lds-ring div[data-v-dc67d720]:first-child{\n  -webkit-animation-delay:-.45s;\n          animation-delay:-.45s\n}\n.lds-ring div[data-v-dc67d720]:nth-child(2){\n  -webkit-animation-delay:-.3s;\n          animation-delay:-.3s\n}\n.lds-ring div[data-v-dc67d720]:nth-child(3){\n  -webkit-animation-delay:-.15s;\n          animation-delay:-.15s\n}\n@-webkit-keyframes lds-ring-data-v-dc67d720{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n@keyframes lds-ring-data-v-dc67d720{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\nsection[data-v-dc67d720]{\n  background:#0d0d0d\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},358:function(t,n,e){"use strict";e(332)},359:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nsection[data-v-5bb016e8]{\n  background:#0d0d0d;\n  z-index:0;\n  background-size:cover\n}\np[data-v-5bb016e8]{\n  text-shadow:1px 1px #000\n}\n@media only screen and (max-width:832px){\nsection>div[data-v-5bb016e8]{\n    margin:20px 0;\n    gap:50px\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},362:function(t,n,e){var content=e(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("5af6ed4b",content,!0,{sourceMap:!1})},367:function(t,n,e){"use strict";e.r(n);var o={name:"BannerSection"},r=(e(333),e(17)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("img",{staticClass:"logo",attrs:{src:"logo.png",alt:"Logo"}}),t._v(" "),e("img",{staticClass:"banner",attrs:{src:"bg_logo_nelkul.png",alt:"Banner"}})])}],!1,null,"6ea04a92",null);n.default=component.exports},368:function(t,n,e){"use strict";e.r(n);var o={name:"AboutMeSection"},r=(e(335),e(17)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{attrs:{id:"about-me"}},[e("img",{staticClass:"mx-auto",attrs:{src:"at.png",alt:"Arnold Tattoo"}}),t._v(" "),e("p",{staticClass:"text-white max-w-7xl mx-auto text-justify p-4"},[t._v("\n    Sziasztok! Kolozsvári Arnold a nevem, körülbelül 2007 környékén kezdtem\n    foglalkozni tetoválások készítésével 😅 persze már előtte is érdekelt a\n    téma. Jelenleg Komáromban dolgozom, Arnold Tattoo nevű szalonomban.\n    Korábban Győrben dolgoztam, de Svájcban is tetováltam. Jelenleg\n    Németországban is fellelheto vagyok. Többnyire a fekete fehér melókat\n    kedvelem ,de szívesen színezek be embereket 😂 itt van pár melóm\n    csekkoljátok és ha felkeltettem érdeklődésedet bátran keress fel. 🤘\n  ")])])}],!1,null,"689cf5e9",null);n.default=component.exports},369:function(t,n,e){"use strict";e.r(n);e(14),e(39),e(140);var o=e(363),r=e.n(o),l=(e(364),e(141),e(212)),c=e(365),d={name:"GallerySection",components:{VueSlickCarousel:r.a},data:function(){return{settings:{dots:!1,infinite:!0,arrows:!1,autoplay:!0,speed:500,slidesToShow:0,slidesToScroll:1,touchThreshold:5,responsive:[{breakpoint:1e3,settings:{arrows:!1,slidesToShow:2}},{breakpoint:770,settings:{arrows:!1,slidesToShow:1}}]},image:null,images:[],courselImages:[{id:"1",src:"gallery/274715628_471775764379338_4382020898604230668_n.webp"},{id:"2",src:"gallery/275935764_490839785806269_7383219440987325020_n.webp"},{id:"3",src:"gallery/277804829_501649164725331_7225738029099511224_n.webp"},{id:"4",src:"gallery/278508155_508128010744113_3433975312242100447_n.webp"},{id:"5",src:"gallery/279005256_511788750378039_5903530006355461080_n.webp"},{id:"6",src:"gallery/279019128_511788743711373_1425367768301718400_n.webp"}]}},mounted:function(){var t=this;document.querySelector(".slider-wrapper").style.opacity="1",document.querySelector(".lds-ring").style.opacity="0","undefined"!=typeof window&&(window.innerWidth>1339?this.settings.slidesToShow=3:window.innerWidth>1079?this.settings.slidesToShow=2:(window.innerWidth,this.settings.slidesToShow=1));var n=Object(c.a)(),e=Object(l.b)(n,"gs://arnoldtattoo.appspot.com"),o=Object(l.d)(e);Object(l.c)(o).then((function(n){n.prefixes.forEach((function(t){})),n.items.forEach((function(n){Object(l.a)(Object(l.d)(e,n._location.path)).then((function(n){t.images.push(n)})).catch((function(t){}))}))})).catch((function(t){console.log(t)}))},computed:{},methods:{showNext:function(){this.$refs.carousel.next()},showPrev:function(){this.$refs.carousel.prev()},getImgUrl:function(path){return e(337)("./"+path)}}},f=(e(354),e(17)),component=Object(f.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"relative",staticStyle:{"background-image":"linear-gradient( to bottom, rgba(13,13,13,1), rgba(13,13,13,0), rgba(13,13,13,1) ),linear-gradient( to top, rgba(13,13,13,1), rgba(13,13,13,0.8), rgba(13,13,13,1) ),url(background.jpg)"},attrs:{id:"gallery"}},[t._m(0),t._v(" "),e("div",{staticClass:"slider-wrapper max-w-7xl mx-auto"},[e("div",{staticClass:"container mx-auto relative"},[e("div",{staticClass:"\n          flex\n          items-center\n          justify-between\n          absolute\n          inset-0\n          w-full\n          h-full\n        "},[e("button",{staticClass:"\n            z-30\n            ml-10\n            focus:outline-none\n            focus:bg-gray-400\n            focus:ring-2\n            focus:ring-offset-2\n            focus:ring-gray-400\n          ",attrs:{id:"next",role:"button","aria-label":"slide forward"},on:{click:t.showPrev}},[e("svg",{attrs:{width:"24px",height:"24px",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M7 1L1 7L7 13",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),e("button",{staticClass:"\n            z-30\n            mr-10\n            focus:outline-none\n            focus:bg-gray-400\n            focus:ring-2\n            focus:ring-offset-2\n            focus:ring-gray-400\n          ",attrs:{id:"next",role:"button","aria-label":"slide forward"},on:{click:t.showNext}},[e("svg",{attrs:{width:"24px",height:"24px",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1 1L7 7L1 13",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),t._v(" "),e("div",{staticClass:"\n          flex\n          items-center\n          justify-center\n          w-full\n          h-full\n          py-24\n          sm:py-8\n          px-4\n        "},[e("div",{staticClass:"slider"},[e("div",{staticClass:"slide-ana"},[this.images.length>3?e("VueSlickCarousel",t._b({ref:"carousel"},"VueSlickCarousel",t.settings,!1),t._l(t.images,(function(image,n){return e("div",{key:n,staticClass:"px-3"},[e("div",{staticClass:"flex flex-shrink-0 relative w-full sm:w-auto"},[e("img",{staticClass:"object-cover object-center w-full z-10",attrs:{src:"photo.png"}}),t._v(" "),e("img",{staticClass:"\n                      instagram-pic\n                      object-cover object-center\n                      w-full\n                      z-0\n                      absolute\n                    ",attrs:{src:image}}),t._v(" "),e("div",{staticClass:"\n                      bg-gray-800 bg-opacity-30\n                      absolute\n                      w-full\n                      h-full\n                      p-6\n                    "})])])})),0):t._e()],1)])])])])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"lds-ring"},[e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div")])}],!1,null,"c159b464",null);n.default=component.exports},370:function(t,n,e){"use strict";e.r(n);var o={name:"BookingSection",mounted:function(){}},r=(e(356),e(17)),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("section",{attrs:{id:"booking"}},[n("vue-calendly",{attrs:{url:"https://calendly.com/arnoldtattoo",height:700}})],1)}),[],!1,null,"dc67d720",null);n.default=component.exports},371:function(t,n,e){"use strict";e.r(n);var o={name:"ShirtsSection"},r=(e(358),e(17)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticStyle:{"background-image":"linear-gradient( to bottom, rgba(13,13,13,1), rgba(13,13,13,0), rgba(13,13,13,1) ),linear-gradient( to top, rgba(13,13,13,1), rgba(13,13,13,0.8), rgba(13,13,13,1) ),url('ship.jpeg')"},attrs:{id:"shirts"}},[e("div",{staticClass:"flex max-w-7xl mx-auto p-4 flex-wrap justify-around my-20 gap-3"},[e("img",{staticClass:"max-w-md w-full shadow-md",attrs:{src:"shirt2.jpg"}}),t._v(" "),e("p",{staticClass:"text-white flex items-center"},[t._v("\n      Arnold tattoo pólók már elérhetők a szalonban.\n    ")])])])}],!1,null,"5bb016e8",null);n.default=component.exports},376:function(t,n,e){"use strict";e(362)},377:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nhtml[data-v-a7589c10]{\n  scroll-behavior:smooth\n}\n#__layout[data-v-a7589c10],#__layout>main[data-v-a7589c10],#__nuxt[data-v-a7589c10],body[data-v-a7589c10]{\n  min-height:100vh;\n  display:flex;\n  flex-direction:column\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},390:function(t,n,e){"use strict";e.r(n);var o={name:"IndexPage"},r=(e(376),e(17)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("NavBar"),t._v(" "),e("BannerSection"),t._v(" "),e("AboutMeSection"),t._v(" "),e("GallerySection"),t._v(" "),e("BookingSection"),t._v(" "),e("ShirtsSection"),t._v(" "),e("FooterElement")],1)}),[],!1,null,"a7589c10",null);n.default=component.exports;installComponents(component,{NavBar:e(326).default,BannerSection:e(367).default,AboutMeSection:e(368).default,GallerySection:e(369).default,BookingSection:e(370).default,ShirtsSection:e(371).default,FooterElement:e(327).default})}}]);