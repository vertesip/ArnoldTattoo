(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3,4,5,7,8,9,10,11],{321:function(t,n,e){var content=e(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("287d7002",content,!0,{sourceMap:!1})},322:function(t,n,e){var content=e(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("4b8d5545",content,!0,{sourceMap:!1})},323:function(t,n,e){"use strict";e(321)},324:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nhtml{\n  scroll-behavior:smooth\n}\n::-webkit-scrollbar{\n  width:10px\n}\n::-webkit-scrollbar-track{\n  background:#0e0e0e\n}\n::-webkit-scrollbar-thumb{\n  background:transparent;\n  background:#4a4a4a;\n  background:#cfcfcf\n}\n.nav,.nav>div>aside{\n  background:#0e0e0e;\n  transition:.2s\n}\n#__layout>main>nav,.nav{\n  transition:.2s\n}\n.nav{\n  display:initial;\n  height:50px\n}\n.logo{\n  opacity:1;\n  transition:.2s\n}\n.transparent-nav{\n  background:transparent;\n  height:100px\n}\n.transparent-logo{\n  opacity:0\n}\nul li a{\n  text-shadow:1px 1px #000\n}\naside>ul{\n  gap:20px\n}\n.nav-links li a{\n  transition:.2s;\n  border-bottom-color:#aa923b\n}\n.nav-links li a:hover{\n  border-bottom-width:2px;\n  padding-bottom:.25rem;\n  border-bottom-color:#aa923b\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},325:function(t,n,e){"use strict";e(322)},326:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nfooter[data-v-74dbc31f]{\n  margin-top:auto;\n  background:#0e0e0e\n}\n@media only screen and (max-width:766px){\nfooter>div[data-v-74dbc31f]{\n    display:flex;\n    flex-direction:column;\n    gap:5px\n}\nfooter>div>span[data-v-74dbc31f]{\n    text-align:left\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},327:function(t,n,e){"use strict";e.r(n);var o={name:"NavBar",data:function(){return{isOpen:!1}},watch:{isOpen:{immediate:!0,handler:function(t){t?document.body.style.setProperty("overflow","hidden"):document.body.style.removeProperty("overflow")}}},mounted:function(){var t=this;window.addEventListener("scroll",this.onScroll);var nav=document.querySelector(".nav"),n=document.querySelector(".logo");this.windowTop=window.top.scrollY,0!==window.top.scrollY&&(nav.classList.remove("transparent-nav"),n.classList.remove("transparent-logo")),document.addEventListener("keydown",(function(n){27===n.keyCode&&t.isOpen&&(t.isOpen=!1)}))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){var nav=document.querySelector(".nav"),n=document.querySelector(".logo");this.windowTop=window.top.scrollY,0===window.top.scrollY?(nav.classList.add("transparent-nav"),n.classList.add("transparent-logo")):(nav.classList.remove("transparent-nav"),n.classList.remove("transparent-logo"))},drawer:function(){this.isOpen=!this.isOpen}}},r=(e(323),e(17)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"nav transparent transparent-nav fixed z-10 w-full h-12 px-5 z-50"},[e("div",{staticClass:"flex items-center justify-between h-full max-w-7xl m-auto"},[e("div",[e("nuxt-link",{attrs:{to:{path:"/"}}},[e("img",{staticClass:"logo transparent-logo max-h-10",attrs:{src:"logo.webp",alt:"Arnold Tattoo Logo"}})])],1),t._v(" "),e("div",{staticClass:"md:hidden"},[e("button",{staticClass:"text-gray-500 w-10 h-10 relative focus:outline-none",on:{click:t.drawer}},[e("div",{staticClass:"\n            block\n            w-5\n            absolute\n            left-1/2\n            top-1/2\n            transform\n            -translate-x-1/2 -translate-y-1/2\n          "},[e("span",{staticClass:"\n              block\n              absolute\n              h-0.5\n              w-5\n              bg-white\n              transform\n              transition\n              duration-500\n              ease-in-out\n            ",class:t.isOpen?"rotate-45":"-translate-y-1.5",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",{staticClass:"\n              block\n              absolute\n              h-0.5\n              w-5\n              bg-white\n              transform\n              transition\n              duration-500\n              ease-in-out\n            ",class:t.isOpen?"opacity-0":"",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",{staticClass:"\n              block\n              absolute\n              h-0.5\n              w-5\n              bg-white\n              transform\n              transition\n              duration-500\n              ease-in-out\n            ",class:t.isOpen?"-rotate-45":"translate-y-1.5",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),e("div",{staticClass:"hidden md:block"},[e("ul",{staticClass:"flex space-x-8 text-sm font-sans text-white nav-links"},[e("li",[e("nuxt-link",{attrs:{to:{path:"/",hash:"#about-me"}}},[t._v("Rólam")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:{path:"/galleria"}}},[t._v("Galéria")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:{path:"/",hash:"#booking"}}},[t._v("Időpontfoglalás")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:{path:"/",hash:"#shirts"}}},[t._v("Pólók")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:{path:"/",hash:"#googleMap"}}},[t._v("Kapcsolat")])],1)])]),t._v(" "),e("transition",{attrs:{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"z-10 fixed inset-0 transition-opacity",on:{keydown:function(n){if(!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"]))return null;t.isOpen=!1}}},[e("div",{staticClass:"absolute inset-0 bg-black opacity-50",attrs:{tabindex:"0"},on:{click:function(n){t.isOpen=!1}}})])]),t._v(" "),e("aside",{staticClass:"\n        p-5\n        transform\n        top-0\n        left-0\n        w-64\n        fixed\n        h-full\n        overflow-auto\n        ease-in-out\n        transition-all\n        duration-300\n        z-30\n      ",class:t.isOpen?"translate-x-0":"-translate-x-full"},[e("ul",{staticClass:"font-sans text-white flex flex-col"},[e("li",{on:{click:function(n){t.isOpen=!1}}},[e("nuxt-link",{attrs:{to:{path:"/",hash:"#about-me"}}},[t._v("Rólam")])],1),t._v(" "),e("li",{on:{click:function(n){t.isOpen=!1}}},[e("nuxt-link",{attrs:{to:{path:"/galleria"}}},[t._v("Galéria")])],1),t._v(" "),e("li",{on:{click:function(n){t.isOpen=!1}}},[e("nuxt-link",{attrs:{to:{path:"/",hash:"#booking"}}},[t._v("Időpontfoglalás")])],1),t._v(" "),e("li",{on:{click:function(n){t.isOpen=!1}}},[e("nuxt-link",{attrs:{to:{path:"/",hash:"#shirts"}}},[t._v("Pólók")])],1),t._v(" "),e("li",{on:{click:function(n){t.isOpen=!1}}},[e("nuxt-link",{attrs:{to:{path:"/",hash:"#googleMap"}}},[t._v("Kapcsolat")])],1)]),t._v(" "),e("div",{staticClass:"follow"},[e("p",{staticClass:"italic font-sans text-sm"},[t._v("follow us:")]),t._v(" "),e("div",{staticClass:"social flex space-x-5 mt-4"},[e("a",{attrs:{href:"https://www.facebook.com/arnoldt.tattoo",target:"_blank"}},[e("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[e("path",{attrs:{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])]),t._v(" "),e("a",{attrs:{href:"https://www.instagram.com/kolozsvari_arnold/",target:"_blank"}},[e("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"instagram",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}})])])])])])],1)])}),[],!1,null,null,null);n.default=component.exports},328:function(t,n,e){"use strict";e.r(n);var o={name:"FooterElement"},r=(e(325),e(17)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",{staticClass:"\n    p-4\n    shadow\n    md:flex md:items-center md:justify-between md:p-6\n    dark:bg-gray-800\n  "},[e("div",{staticClass:"max-w-7xl mx-auto flex w-full justify-between"},[e("div",{staticClass:"flex flex-col gap-2"},[e("span",{staticClass:"text-sm sm:text-center text-white"},[t._v("© 2022 Arnold Tattoo. Minden jog fenntartva\n      ")]),t._v(" "),e("div",{staticClass:"flex gap-3"},[e("a",{attrs:{href:"https://www.facebook.com/arnoldt.tattoo",target:"_blank"}},[e("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[e("path",{attrs:{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])]),t._v(" "),e("a",{attrs:{href:"https://www.instagram.com/kolozsvari_arnold/",target:"_blank"}},[e("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"instagram",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}})])])])]),t._v(" "),e("ul",{staticClass:"flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0"},[e("li",[e("nuxt-link",{staticStyle:{"border-bottom":"none"},attrs:{to:{path:"/adatvedelem"}}},[t._v("Adatvédelmi nyilatkozat")])],1)])])])}),[],!1,null,"74dbc31f",null);n.default=component.exports},329:function(t,n,e){var content=e(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("45f1da7e",content,!0,{sourceMap:!1})},330:function(t,n,e){var content=e(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("59c10913",content,!0,{sourceMap:!1})},331:function(t,n,e){var content=e(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("9e92d2f6",content,!0,{sourceMap:!1})},332:function(t,n,e){var content=e(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("02b81b4c",content,!0,{sourceMap:!1})},333:function(t,n,e){var content=e(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("4778a3d6",content,!0,{sourceMap:!1})},337:function(t,n,e){"use strict";e(329)},338:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nsection[data-v-bac51ba6]{\n  background:#0d0d0d;\n  position:relative\n}\n.banner[data-v-bac51ba6]{\n  height:100vh;\n  width:100%;\n  -o-object-fit:cover;\n     object-fit:cover;\n  -webkit-mask-image:linear-gradient(180deg,#000 50%,transparent);\n  mask-image:linear-gradient(180deg,#000 50%,transparent)\n}\n.logo[data-v-bac51ba6]{\n  position:absolute;\n  left:0;\n  right:0;\n  top:0;\n  bottom:0;\n  margin:auto;\n  max-height:-webkit-fill-available;\n  z-index:1\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},339:function(t,n,e){"use strict";e(330)},340:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nsection[data-v-33b764c0]{\n  background:#0d0d0d\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},341:function(t,n,e){"use strict";e(331)},342:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap);"]),o.push([t.i,"@import url(https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css);"]),o.push([t.i,"/*purgecss start ignore*/\n.vm--container .vm--modal[data-v-717b895a]{\n  max-width:90vh!important;\n  margin:10px auto!important\n}\nsection[data-v-717b895a]{\n  background:#0d0d0d;\n  background-size:cover\n}\n.slider-wrapper[data-v-717b895a]{\n  display:flex;\n  opacity:0;\n  flex-direction:column\n}\n.gallery-background[data-v-717b895a]{\n  height:100vh;\n  width:100%;\n  -o-object-fit:cover;\n     object-fit:cover\n}\n.slider[data-v-717b895a]{\n  width:100%;\n  position:relative;\n  overflow:hidden\n}\n.slide-ana[data-v-717b895a],.slider[data-v-717b895a]{\n  height:600px\n}\n.slide-ana>div[data-v-717b895a]{\n  display:flex;\n  align-items:center;\n  width:100%;\n  height:100%;\n  position:absolute;\n  transition:all 1s\n}\n.instagram-pic[data-v-717b895a]{\n  margin:26px;\n  max-width:340px;\n  max-height:360px;\n  -o-object-fit:cover;\n     object-fit:cover;\n  transition:.4s\n}\n.slick-slide:hover .instagram-pic[data-v-717b895a]{\n  transform:scale(1.2)\n}\n@media (min-width:0px) and (max-width:339px){\n.slider[data-v-717b895a]{\n    height:490px\n}\n.instagram-pic[data-v-717b895a]{\n    margin:5vw;\n    max-width:74vw;\n    max-height:77vw\n}\n}\n@media (min-width:340px) and (max-width:580px){\n.slider[data-v-717b895a]{\n    height:600px\n}\n.instagram-pic[data-v-717b895a]{\n    margin:2.112676056338028vw;\n    max-width:82vw;\n    max-height:85vw\n}\n}\n@media (min-width:581px) and (max-width:766px){\n.slider[data-v-717b895a]{\n    height:800px\n}\n.instagram-pic[data-v-717b895a]{\n    margin:35px;\n    max-width:518px;\n    max-height:525px\n}\n}\n@media (min-width:767px) and (max-width:770px){\n.slider[data-v-717b895a]{\n    height:800px\n}\n.instagram-pic[data-v-717b895a]{\n    margin:35px;\n    max-width:636px;\n    max-height:642px\n}\n}\n@media (min-width:771px) and (max-width:999px){\n.slider[data-v-717b895a]{\n    height:581px\n}\n.instagram-pic[data-v-717b895a]{\n    margin:24px;\n    max-width:297px;\n    max-height:307px\n}\n}\n@media (min-width:1000px) and (max-width:1023px){\n.slider[data-v-717b895a]{\n    height:581px\n}\n.instagram-pic[data-v-717b895a]{\n    margin:15px;\n    max-width:192px;\n    max-height:199px\n}\n}\n@media (min-width:1024px) and (max-width:1280px){\n.slider[data-v-717b895a]{\n    height:379px\n}\n.instagram-pic[data-v-717b895a]{\n    margin:20px;\n    max-width:272px;\n    max-height:282px\n}\n}\n@media only screen and (max-width:649px){\n.more-pics[data-v-717b895a]{\n    margin-bottom:60px!important\n}\n}\n.slider2[data-v-717b895a]{\n  width:100%;\n  height:395px;\n  position:relative;\n  overflow:hidden\n}\n.slide-ana2[data-v-717b895a]{\n  height:100%\n}\n.slide-ana2>div[data-v-717b895a]{\n  width:100%;\n  height:100%;\n  position:absolute;\n  transition:all 1s\n}\n@media (min-width:300px) and (max-width:1023px){\n.slider2[data-v-717b895a]{\n    height:378px\n}\n}\n.lds-ring[data-v-717b895a]{\n  display:flex;\n  position:absolute;\n  left:0;\n  right:0;\n  top:50%;\n  opacity:1;\n  margin:0 auto;\n  width:80px;\n  height:80px\n}\n.lds-ring div[data-v-717b895a]{\n  box-sizing:border-box;\n  display:block;\n  position:absolute;\n  width:64px;\n  height:64px;\n  margin:8px;\n  border-radius:50%;\n  -webkit-animation:lds-ring-data-v-717b895a 1.2s cubic-bezier(.5,0,.5,1) infinite;\n          animation:lds-ring-data-v-717b895a 1.2s cubic-bezier(.5,0,.5,1) infinite;\n  border:8px solid transparent;\n  border-top-color:#fff\n}\n.lds-ring div[data-v-717b895a]:first-child{\n  -webkit-animation-delay:-.45s;\n          animation-delay:-.45s\n}\n.lds-ring div[data-v-717b895a]:nth-child(2){\n  -webkit-animation-delay:-.3s;\n          animation-delay:-.3s\n}\n.lds-ring div[data-v-717b895a]:nth-child(3){\n  -webkit-animation-delay:-.15s;\n          animation-delay:-.15s\n}\n@-webkit-keyframes lds-ring-data-v-717b895a{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n@keyframes lds-ring-data-v-717b895a{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n.btn[data-v-717b895a]{\n  border-radius:0.25rem;\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  font-weight:700\n}\n.btn-blue[data-v-717b895a]{\n  background-color:#fff;\n  color:#0d0d0d;\n  margin:0 auto;\n  transition:.4s;\n  font-weight:500;\n  padding:10px 45px;\n  font-weight:400;\n  font-size:20px\n}\n.btn-blue[data-v-717b895a]:hover{\n  background-color:#c3c3bf\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},343:function(t,n,e){"use strict";e(332)},344:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nsection[data-v-ec9cb278]{\n  height:900px\n}\n.lds-ring[data-v-ec9cb278]{\n  display:flex;\n  position:absolute;\n  left:0;\n  right:0;\n  top:50%;\n  opacity:1;\n  margin:0 auto;\n  width:80px;\n  height:80px\n}\n.lds-ring div[data-v-ec9cb278]{\n  box-sizing:border-box;\n  display:block;\n  position:absolute;\n  width:64px;\n  height:64px;\n  margin:8px;\n  border-radius:50%;\n  -webkit-animation:lds-ring-data-v-ec9cb278 1.2s cubic-bezier(.5,0,.5,1) infinite;\n          animation:lds-ring-data-v-ec9cb278 1.2s cubic-bezier(.5,0,.5,1) infinite;\n  border:8px solid transparent;\n  border-top-color:#fff\n}\n.lds-ring div[data-v-ec9cb278]:first-child{\n  -webkit-animation-delay:-.45s;\n          animation-delay:-.45s\n}\n.lds-ring div[data-v-ec9cb278]:nth-child(2){\n  -webkit-animation-delay:-.3s;\n          animation-delay:-.3s\n}\n.lds-ring div[data-v-ec9cb278]:nth-child(3){\n  -webkit-animation-delay:-.15s;\n          animation-delay:-.15s\n}\n@-webkit-keyframes lds-ring-data-v-ec9cb278{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n@keyframes lds-ring-data-v-ec9cb278{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\nsection[data-v-ec9cb278]{\n  background:#0d0d0d\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},345:function(t,n,e){"use strict";e(333)},346:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nsection[data-v-022aa492]{\n  background:#0d0d0d;\n  z-index:0;\n  background-size:cover\n}\np[data-v-022aa492]{\n  text-shadow:1px 1px #000\n}\n@media only screen and (max-width:832px){\nsection>div[data-v-022aa492]{\n    margin:20px 0;\n    gap:50px\n}\n}\n@media (min-width:501px) and (max-width:640px){\n.photo[data-v-022aa492]{\n    margin:0 auto\n}\n.instagram-pic[data-v-022aa492]{\n    height:100%;\n    width:100%;\n    margin:0 auto\n}\n}\n@media (min-width:200px) and (max-width:500px){\n.photo[data-v-022aa492]{\n    margin:0 auto\n}\n.instagram-pic[data-v-022aa492]{\n    height:100%;\n    width:100%;\n    margin:0 auto\n}\n.shirt-wrapper[data-v-022aa492]{\n    width:100%\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},347:function(t,n,e){"use strict";var o=e(3),r=e(4),l=e(52),c=e(348),d=e(214),f=e(5),h=RangeError,m=String,v=Math.floor,x=r(d),w=r("".slice),y=r(1..toFixed),k=function(t,n,e){return 0===n?e:n%2==1?k(t,n-1,e*t):k(t*t,n/2,e)},_=function(data,t,n){for(var e=-1,o=n;++e<6;)o+=t*data[e],data[e]=o%1e7,o=v(o/1e7)},C=function(data,t){for(var n=6,e=0;--n>=0;)e+=data[n],data[n]=v(e/t),e=e%t*1e7},T=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var n=m(data[t]);s=""===s?n:s+x("0",7-n.length)+n}return s};o({target:"Number",proto:!0,forced:f((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!f((function(){y({})}))},{toFixed:function(t){var n,e,o,r,d=c(this),f=l(t),data=[0,0,0,0,0,0],v="",y="0";if(f<0||f>20)throw h("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return m(d);if(d<0&&(v="-",d=-d),d>1e-21)if(e=(n=function(t){for(var n=0,e=t;e>=4096;)n+=12,e/=4096;for(;e>=2;)n+=1,e/=2;return n}(d*k(2,69,1))-69)<0?d*k(2,-n,1):d/k(2,n,1),e*=4503599627370496,(n=52-n)>0){for(_(data,0,e),o=f;o>=7;)_(data,1e7,0),o-=7;for(_(data,k(10,o,1),0),o=n-1;o>=23;)C(data,1<<23),o-=23;C(data,1<<o),_(data,1,1),C(data,2),y=T(data)}else _(data,0,e),_(data,1<<-n,0),y=T(data)+x("0",f);return y=f>0?v+((r=y.length)<=f?"0."+x("0",f-r)+y:w(y,0,r-f)+"."+w(y,r-f)):v+y}})},348:function(t,n,e){var o=e(4);t.exports=o(1..valueOf)},351:function(t,n,e){var content=e(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("d175d662",content,!0,{sourceMap:!1})},353:function(t,n,e){"use strict";e.r(n);var o={name:"BannerSection"},r=(e(337),e(17)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("img",{staticClass:"logo",attrs:{src:"logo.webp",alt:"Logo"}}),t._v(" "),e("img",{staticClass:"banner",attrs:{src:"bg_logo_nelkul.webp",alt:"Banner"}})])}],!1,null,"bac51ba6",null);n.default=component.exports},354:function(t,n,e){"use strict";e.r(n);var o={name:"AboutMeSection"},r=(e(339),e(17)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{attrs:{id:"about-me"}},[e("img",{staticClass:"mx-auto",attrs:{src:"at.webp",alt:"Arnold Tattoo"}}),t._v(" "),e("p",{staticClass:"text-white max-w-7xl mx-auto text-justify p-4"},[t._v("\n    Sziasztok! Kolozsvári Arnold a nevem, körülbelül 2007 környékén kezdtem\n    foglalkozni tetoválások készítésével 😅 persze már előtte is érdekelt a\n    téma. Jelenleg Komáromban dolgozom, Arnold Tattoo nevű szalonomban.\n    Korábban Győrben dolgoztam, de Svájcban is tetováltam. Jelenleg\n    Németországban is fellelheto vagyok. Többnyire a fekete fehér melókat\n    kedvelem ,de szívesen színezek be embereket 😂 itt van pár melóm\n    csekkoljátok és ha felkeltettem érdeklődésedet bátran keress fel. 🤘\n  ")])])}],!1,null,"33b764c0",null);n.default=component.exports},355:function(t,n,e){"use strict";e.r(n);e(14),e(38),e(119);var o=e(334),r=e.n(o),l=(e(335),e(120),e(213)),c=e(336),d={name:"GallerySection",components:{VueSlickCarousel:r.a},data:function(){return{settings:{dots:!1,infinite:!0,arrows:!1,autoplay:!0,mobileFirst:!0,speed:500,slidesToShow:0,slidesToScroll:1,touchThreshold:5,responsive:[{breakpoint:1e3,settings:{arrows:!1,slidesToShow:2}},{breakpoint:770,settings:{arrows:!1,slidesToShow:1}}]},images:[],modalImage:""}},mounted:function(){var t=this;document.querySelector(".slider-wrapper").style.opacity="1",document.querySelector(".lds-ring").style.opacity="0","undefined"!=typeof window&&(window.innerWidth>1339?this.settings.slidesToShow=3:window.innerWidth>1079?this.settings.slidesToShow=2:(window.innerWidth,this.settings.slidesToShow=1),this.hide());var n=Object(c.a)(),e=Object(l.b)(n,"gs://arnoldtattoo.appspot.com"),o=Object(l.d)(e);Object(l.c)(o).then((function(n){n.prefixes.forEach((function(t){})),n.items.forEach((function(n){Object(l.a)(Object(l.d)(e,n._location.path)).then((function(n){t.images.push(n)})).catch((function(t){}))}))})).catch((function(t){console.log(t)}))},computed:{},methods:{showNext:function(){this.$refs.carousel.next()},showPrev:function(){this.$refs.carousel.prev()},show:function(){this.$modal.show("listing")},hide:function(){this.$modal.hide("listing")},showImage:function(image){this.show(),this.modalImage=image},handleBeforeOpen:function(){this.$refs.listing.modal.renderedHeight=""}}},f=(e(341),e(17)),component=Object(f.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"relative",staticStyle:{"background-image":"linear-gradient( to bottom, rgba(13,13,13,1), rgba(13,13,13,0), rgba(13,13,13,1) ),linear-gradient( to top, rgba(13,13,13,1), rgba(13,13,13,0.8), rgba(13,13,13,1) ),url(background.webp)"},attrs:{id:"gallery"}},[e("modal",{ref:"listing",attrs:{name:"listing",adaptive:!0,width:"90%",maxWidth:900,height:"auto",scrollable:!0},on:{"before-open":t.handleBeforeOpen}},[e("img",{attrs:{src:t.modalImage}})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"slider-wrapper max-w-7xl mx-auto"},[e("div",{staticClass:"container mx-auto relative"},[e("div",{staticClass:"\n          flex\n          items-center\n          justify-between\n          absolute\n          inset-0\n          w-full\n          h-full\n        "},[e("button",{staticClass:"\n            z-30\n            ml-10\n            focus:outline-none\n            focus:bg-gray-400\n            focus:ring-2\n            focus:ring-offset-2\n            focus:ring-gray-400\n          ",attrs:{id:"next",role:"button","aria-label":"slide forward"},on:{click:t.showPrev}},[e("svg",{attrs:{width:"24px",height:"24px",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M7 1L1 7L7 13",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),e("button",{staticClass:"\n            z-30\n            mr-10\n            focus:outline-none\n            focus:bg-gray-400\n            focus:ring-2\n            focus:ring-offset-2\n            focus:ring-gray-400\n          ",attrs:{id:"next",role:"button","aria-label":"slide forward"},on:{click:t.showNext}},[e("svg",{attrs:{width:"24px",height:"24px",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1 1L7 7L1 13",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),t._v(" "),e("div",{staticClass:"\n          flex\n          items-center\n          justify-center\n          w-full\n          h-full\n          py-24\n          sm:py-8\n          px-4\n        "},[e("div",{staticClass:"slider"},[e("div",{staticClass:"slide-ana"},[this.images.length>3?e("VueSlickCarousel",t._b({ref:"carousel"},"VueSlickCarousel",t.settings,!1),t._l(t.images,(function(image,n){return e("div",{key:n,staticClass:"px-3",on:{click:function(n){return t.showImage(image)}}},[e("div",{staticClass:"flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer overflow-hidden"},[e("img",{staticClass:"object-cover object-center w-full z-10",attrs:{src:"photo.webp"}}),t._v(" "),e("img",{staticClass:"\n                      instagram-pic\n                      object-cover object-center\n                      w-full\n                      z-0\n                      absolute\n                    ",attrs:{src:image}}),t._v(" "),e("div",{staticClass:"\n                      bg-gray-800 bg-opacity-30\n                      absolute\n                      w-full\n                      h-full\n                      p-6\n                    "})])])})),0):t._e()],1)])])])]),t._v(" "),e("nuxt-link",{staticStyle:{"border-bottom":"none"},attrs:{to:{path:"/galleria"}}},[e("button",{staticClass:"btn btn-blue flex justify-center text-white text-2xl more-pics"},[t._v("\n      Kattints ide a többi képért\n    ")])])],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"lds-ring"},[e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div")])}],!1,null,"717b895a",null);n.default=component.exports},356:function(t,n,e){"use strict";e.r(n);var o={name:"BookingSection",mounted:function(){}},r=(e(343),e(17)),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("section",{attrs:{id:"booking"}},[n("vue-calendly",{attrs:{url:"https://calendly.com/arnoldtattoo",height:900}})],1)}),[],!1,null,"ec9cb278",null);n.default=component.exports},357:function(t,n,e){"use strict";e.r(n);var o={name:"ShirtsSection"},r=(e(345),e(17)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticStyle:{"background-image":"linear-gradient( to bottom, rgba(13,13,13,1), rgba(13,13,13,0), rgba(13,13,13,1) ),linear-gradient( to top, rgba(13,13,13,1), rgba(13,13,13,0.8), rgba(13,13,13,1) ),url('ship.webp')"},attrs:{id:"shirts"}},[e("div",{staticClass:"flex max-w-7xl mx-auto p-4 flex-wrap justify-around my-20 gap-3"},[e("div",{staticClass:"flex flex-shrink-0 relative sm:w-auto overflow-hidden shirt-wrapper"},[e("img",{staticClass:"object-cover object-center w-full z-10 max-w-md w-full shadow-md photo",attrs:{src:"photo.webp"}}),t._v(" "),e("img",{staticClass:"\n                      instagram-pic\n                      object-cover object-center\n                      w-full\n                      z-0\n                      absolute\n                    ",attrs:{src:"shirt2.webp"}}),t._v(" "),e("div",{staticClass:"\n                      bg-gray-800 bg-opacity-30\n                      absolute\n                      w-full\n                      h-full\n                      p-6\n                    "})]),t._v(" "),e("p",{staticClass:"text-white flex items-center"},[t._v("\n      Arnold tattoo pólók már elérhetők a szalonban.\n    ")])])])}],!1,null,"022aa492",null);n.default=component.exports},358:function(t,n,e){"use strict";e.r(n);e(53),e(347);var o={data:function(){return{map:null,ShopCoordinates:{lat:47.74295,lng:18.1253163},zoom:6,mapStyle:{styles:[{featureType:"all",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#aa923b"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#c4c4c4"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#e5c163"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21},{visibility:"on"}]},{featureType:"poi.business",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#aa923b"},{lightness:"0"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#000000"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#e5c163"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#575757"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.stroke",stylers:[{color:"#2c2c2c"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#999999"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}]}}},mounted:function(){var t=this;this.$refs.mapRef.$mapPromise.then((function(map){t.map=map}))},methods:{handleDrag:function(){var t={lat:this.map.getCenter().lat(),lng:this.map.getCenter().lng()},n=this.map.getZoom();localStorage.center=JSON.stringify(t),localStorage.zoom=n}},computed:{mapCoordinates:function(){return this.map?{lat:this.map.getCenter().lat().toFixed(4),lng:this.map.getCenter().lng().toFixed(4)}:{lat:47.74295,lng:18.1253163}}}},r=e(17),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{attrs:{id:"googleMap"}},[e("GmapMap",{ref:"mapRef",staticStyle:{width:"100%",height:"400px"},attrs:{center:t.ShopCoordinates,zoom:15,options:t.mapStyle},on:{dragend:t.handleDrag}},[e("gmap-marker",{attrs:{position:t.ShopCoordinates},on:{click:function(n){t.center=t.ShopCoordinates}}})],1)],1)}),[],!1,null,null,null);n.default=component.exports},364:function(t,n,e){"use strict";e(351)},365:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nhtml[data-v-34631867]{\n  scroll-behavior:smooth;\n  background:#0d0d0d\n}\n#__layout[data-v-34631867],#__layout>main[data-v-34631867],#__nuxt[data-v-34631867],body[data-v-34631867]{\n  min-height:100vh;\n  display:flex;\n  flex-direction:column\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},375:function(t,n,e){"use strict";e.r(n);var o={name:"IndexPage"},r=(e(364),e(17)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("NavBar"),t._v(" "),e("BannerSection"),t._v(" "),e("AboutMeSection"),t._v(" "),e("GallerySection"),t._v(" "),e("BookingSection"),t._v(" "),e("ShirtsSection"),t._v(" "),e("GoogleMap"),t._v(" "),e("FooterElement")],1)}),[],!1,null,"34631867",null);n.default=component.exports;installComponents(component,{NavBar:e(327).default,BannerSection:e(353).default,AboutMeSection:e(354).default,GallerySection:e(355).default,BookingSection:e(356).default,ShirtsSection:e(357).default,GoogleMap:e(358).default,FooterElement:e(328).default})}}]);