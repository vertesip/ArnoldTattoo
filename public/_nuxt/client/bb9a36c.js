(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3,4,7,8,9,10],{321:function(t,e,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("287d7002",content,!0,{sourceMap:!1})},322:function(t,e,n){var content=n(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("586070b7",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";n(321)},324:function(t,e,n){var o=n(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nhtml{\n  scroll-behavior:smooth\n}\n::-webkit-scrollbar{\n  width:10px\n}\n::-webkit-scrollbar-track{\n  background:#0e0e0e\n}\n::-webkit-scrollbar-thumb{\n  background:transparent;\n  background:#4a4a4a;\n  background:#cfcfcf\n}\n.nav,.nav>div>aside{\n  background:#0e0e0e;\n  transition:.2s\n}\n#__layout>main>nav,.nav{\n  transition:.2s\n}\n.nav{\n  display:initial;\n  height:50px\n}\n.logo{\n  opacity:1;\n  transition:.2s\n}\n.transparent-nav{\n  background:transparent;\n  height:100px\n}\n.transparent-logo{\n  opacity:0\n}\nul li a{\n  text-shadow:1px 1px #000\n}\naside>ul{\n  gap:20px\n}\n.nav-links li a{\n  transition:.2s;\n  border-bottom-color:#aa923b\n}\n.nav-links li a:hover{\n  border-bottom-width:2px;\n  padding-bottom:.25rem;\n  border-bottom-color:#aa923b\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},325:function(t,e,n){"use strict";n(322)},326:function(t,e,n){var o=n(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nfooter[data-v-52885f88]{\n  margin-top:auto;\n  background:#0e0e0e\n}\n@media only screen and (max-width:766px){\nfooter>div[data-v-52885f88]{\n    display:flex;\n    flex-direction:column;\n    gap:5px\n}\nfooter>div>span[data-v-52885f88]{\n    text-align:left\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},327:function(t,e,n){"use strict";n.r(e);var o={name:"NavBar",data:function(){return{isOpen:!1}},watch:{isOpen:{immediate:!0,handler:function(t){t?document.body.style.setProperty("overflow","hidden"):document.body.style.removeProperty("overflow")}}},mounted:function(){var t=this;window.addEventListener("scroll",this.onScroll);var nav=document.querySelector(".nav"),e=document.querySelector(".logo");this.windowTop=window.top.scrollY,0!==window.top.scrollY&&(nav.classList.remove("transparent-nav"),e.classList.remove("transparent-logo")),document.addEventListener("keydown",(function(e){27===e.keyCode&&t.isOpen&&(t.isOpen=!1)}))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){var nav=document.querySelector(".nav"),e=document.querySelector(".logo");this.windowTop=window.top.scrollY,0===window.top.scrollY?(nav.classList.add("transparent-nav"),e.classList.add("transparent-logo")):(nav.classList.remove("transparent-nav"),e.classList.remove("transparent-logo"))},drawer:function(){this.isOpen=!this.isOpen}}},r=(n(323),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav transparent transparent-nav fixed z-10 w-full h-12 px-5 z-50"},[n("div",{staticClass:"flex items-center justify-between h-full max-w-7xl m-auto"},[n("div",[n("nuxt-link",{attrs:{to:{path:"/"}}},[n("img",{staticClass:"logo transparent-logo max-h-10",attrs:{src:"logo.webp",alt:"Arnold Tattoo Logo"}})])],1),t._v(" "),n("div",{staticClass:"md:hidden"},[n("button",{staticClass:"text-gray-500 w-10 h-10 relative focus:outline-none",on:{click:t.drawer}},[n("div",{staticClass:"\n            block\n            w-5\n            absolute\n            left-1/2\n            top-1/2\n            transform\n            -translate-x-1/2 -translate-y-1/2\n          "},[n("span",{staticClass:"\n              block\n              absolute\n              h-0.5\n              w-5\n              bg-white\n              transform\n              transition\n              duration-500\n              ease-in-out\n            ",class:t.isOpen?"rotate-45":"-translate-y-1.5",attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{staticClass:"\n              block\n              absolute\n              h-0.5\n              w-5\n              bg-white\n              transform\n              transition\n              duration-500\n              ease-in-out\n            ",class:t.isOpen?"opacity-0":"",attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{staticClass:"\n              block\n              absolute\n              h-0.5\n              w-5\n              bg-white\n              transform\n              transition\n              duration-500\n              ease-in-out\n            ",class:t.isOpen?"-rotate-45":"translate-y-1.5",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),n("div",{staticClass:"hidden md:block"},[n("ul",{staticClass:"flex space-x-8 text-sm font-sans text-white nav-links"},[n("li",[n("nuxt-link",{attrs:{to:{path:"/",hash:"#about-me"}}},[t._v("Rólam")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:{path:"/galleria"}}},[t._v("Galéria")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:{path:"/",hash:"#googleMap"}}},[t._v("Kapcsolat")])],1)])]),t._v(" "),n("transition",{attrs:{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"z-10 fixed inset-0 transition-opacity",on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.isOpen=!1}}},[n("div",{staticClass:"absolute inset-0 bg-black opacity-50",attrs:{tabindex:"0"},on:{click:function(e){t.isOpen=!1}}})])]),t._v(" "),n("aside",{staticClass:"\n        p-5\n        transform\n        top-0\n        left-0\n        w-64\n        fixed\n        h-full\n        overflow-auto\n        ease-in-out\n        transition-all\n        duration-300\n        z-30\n      ",class:t.isOpen?"translate-x-0":"-translate-x-full"},[n("ul",{staticClass:"font-sans text-white flex flex-col"},[n("li",{on:{click:function(e){t.isOpen=!1}}},[n("nuxt-link",{attrs:{to:{path:"/",hash:"#about-me"}}},[t._v("Rólam")])],1),t._v(" "),n("li",{on:{click:function(e){t.isOpen=!1}}},[n("nuxt-link",{attrs:{to:{path:"/galleria"}}},[t._v("Galéria")])],1),t._v(" "),n("li",{on:{click:function(e){t.isOpen=!1}}},[n("nuxt-link",{attrs:{to:{path:"/",hash:"#googleMap"}}},[t._v("Kapcsolat")])],1)]),t._v(" "),n("div",{staticClass:"follow"},[n("p",{staticClass:"italic font-sans text-sm"},[t._v("follow us:")]),t._v(" "),n("div",{staticClass:"social flex space-x-5 mt-4"},[n("a",{attrs:{href:"https://www.facebook.com/arnoldt.tattoo",target:"_blank"}},[n("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[n("path",{attrs:{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])]),t._v(" "),n("a",{attrs:{href:"https://www.instagram.com/kolozsvari_arnold/",target:"_blank"}},[n("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"instagram",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}})])])])])])],1)])}),[],!1,null,null,null);e.default=component.exports},328:function(t,e,n){"use strict";n.r(e);var o={name:"FooterElement"},r=(n(325),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"\n    p-4\n    shadow\n    md:flex md:items-center md:justify-between md:p-6\n    dark:bg-gray-800\n  "},[n("div",{staticClass:"max-w-7xl mx-auto flex w-full justify-between"},[n("div",{staticClass:"flex flex-col gap-2"},[n("span",{staticClass:"text-sm sm:text-center text-white"},[t._v("© 2022 Arnold Tattoo. Minden jog fenntartva\n      ")]),t._v(" "),n("div",{staticClass:"flex gap-3"},[n("a",{attrs:{href:"https://www.facebook.com/arnoldt.tattoo",target:"_blank"}},[n("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[n("path",{attrs:{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])]),t._v(" "),n("a",{attrs:{href:"https://www.instagram.com/kolozsvari_arnold/",target:"_blank"}},[n("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"instagram",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}})])])])])])])}),[],!1,null,"52885f88",null);e.default=component.exports},329:function(t,e,n){var content=n(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("45f1da7e",content,!0,{sourceMap:!1})},330:function(t,e,n){var content=n(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("59c10913",content,!0,{sourceMap:!1})},331:function(t,e,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("74948f9e",content,!0,{sourceMap:!1})},335:function(t,e,n){"use strict";n(329)},336:function(t,e,n){var o=n(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nsection[data-v-bac51ba6]{\n  background:#0d0d0d;\n  position:relative\n}\n.banner[data-v-bac51ba6]{\n  height:100vh;\n  width:100%;\n  -o-object-fit:cover;\n     object-fit:cover;\n  -webkit-mask-image:linear-gradient(180deg,#000 50%,transparent);\n  mask-image:linear-gradient(180deg,#000 50%,transparent)\n}\n.logo[data-v-bac51ba6]{\n  position:absolute;\n  left:0;\n  right:0;\n  top:0;\n  bottom:0;\n  margin:auto;\n  max-height:-webkit-fill-available;\n  z-index:1\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},337:function(t,e,n){"use strict";n(330)},338:function(t,e,n){var o=n(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nsection[data-v-33b764c0]{\n  background:#0d0d0d\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},339:function(t,e,n){"use strict";n(331)},340:function(t,e,n){var o=n(69)((function(i){return i[1]}));o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap);"]),o.push([t.i,"@import url(https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css);"]),o.push([t.i,"/*purgecss start ignore*/\n#gallery[data-v-2fac01e9]{\n  padding-bottom:40px\n}\n.vm--container .vm--modal[data-v-2fac01e9]{\n  max-width:90vh!important;\n  margin:10px auto!important\n}\nsection[data-v-2fac01e9]{\n  background:#0d0d0d;\n  background-size:cover\n}\n.slider-wrapper[data-v-2fac01e9]{\n  display:flex;\n  opacity:0;\n  flex-direction:column\n}\n.gallery-background[data-v-2fac01e9]{\n  height:100vh;\n  width:100%;\n  -o-object-fit:cover;\n     object-fit:cover\n}\n.slider[data-v-2fac01e9]{\n  width:100%;\n  position:relative;\n  overflow:hidden\n}\n.slide-ana[data-v-2fac01e9],.slider[data-v-2fac01e9]{\n  height:600px\n}\n.slide-ana>div[data-v-2fac01e9]{\n  display:flex;\n  align-items:center;\n  width:100%;\n  height:100%;\n  position:absolute;\n  transition:all 1s\n}\n.instagram-pic[data-v-2fac01e9]{\n  margin:26px;\n  max-width:340px;\n  max-height:360px;\n  -o-object-fit:cover;\n     object-fit:cover;\n  transition:.4s\n}\n.slick-slide:hover .instagram-pic[data-v-2fac01e9]{\n  transform:scale(1.2)\n}\n@media (min-width:0px) and (max-width:339px){\n.slider[data-v-2fac01e9]{\n    height:490px\n}\n.instagram-pic[data-v-2fac01e9]{\n    margin:5vw;\n    max-width:74vw;\n    max-height:77vw\n}\n}\n@media (min-width:340px) and (max-width:580px){\n.slider[data-v-2fac01e9]{\n    height:600px\n}\n.instagram-pic[data-v-2fac01e9]{\n    margin:2.112676056338028vw;\n    max-width:82vw;\n    max-height:85vw\n}\n}\n@media (min-width:581px) and (max-width:766px){\n.slider[data-v-2fac01e9]{\n    height:800px\n}\n.instagram-pic[data-v-2fac01e9]{\n    margin:35px;\n    max-width:518px;\n    max-height:525px\n}\n}\n@media (min-width:767px) and (max-width:770px){\n.slider[data-v-2fac01e9]{\n    height:800px\n}\n.instagram-pic[data-v-2fac01e9]{\n    margin:35px;\n    max-width:636px;\n    max-height:642px\n}\n}\n@media (min-width:771px) and (max-width:999px){\n.slider[data-v-2fac01e9]{\n    height:581px\n}\n.instagram-pic[data-v-2fac01e9]{\n    margin:24px;\n    max-width:297px;\n    max-height:307px\n}\n}\n@media (min-width:1000px) and (max-width:1023px){\n.slider[data-v-2fac01e9]{\n    height:581px\n}\n.instagram-pic[data-v-2fac01e9]{\n    margin:15px;\n    max-width:192px;\n    max-height:199px\n}\n}\n@media (min-width:1024px) and (max-width:1280px){\n.slider[data-v-2fac01e9]{\n    height:379px\n}\n.instagram-pic[data-v-2fac01e9]{\n    margin:20px;\n    max-width:272px;\n    max-height:282px\n}\n}\n@media only screen and (max-width:649px){\n.more-pics[data-v-2fac01e9]{\n    margin-bottom:60px!important\n}\n#gallery[data-v-2fac01e9]{\n    padding-bottom:0\n}\n}\n.slider2[data-v-2fac01e9]{\n  width:100%;\n  height:395px;\n  position:relative;\n  overflow:hidden\n}\n.slide-ana2[data-v-2fac01e9]{\n  height:100%\n}\n.slide-ana2>div[data-v-2fac01e9]{\n  width:100%;\n  height:100%;\n  position:absolute;\n  transition:all 1s\n}\n@media (min-width:300px) and (max-width:1023px){\n.slider2[data-v-2fac01e9]{\n    height:378px\n}\n}\n.lds-ring[data-v-2fac01e9]{\n  display:flex;\n  position:absolute;\n  left:0;\n  right:0;\n  top:50%;\n  opacity:1;\n  margin:0 auto;\n  width:80px;\n  height:80px\n}\n.lds-ring div[data-v-2fac01e9]{\n  box-sizing:border-box;\n  display:block;\n  position:absolute;\n  width:64px;\n  height:64px;\n  margin:8px;\n  border-radius:50%;\n  -webkit-animation:lds-ring-data-v-2fac01e9 1.2s cubic-bezier(.5,0,.5,1) infinite;\n          animation:lds-ring-data-v-2fac01e9 1.2s cubic-bezier(.5,0,.5,1) infinite;\n  border:8px solid transparent;\n  border-top-color:#fff\n}\n.lds-ring div[data-v-2fac01e9]:first-child{\n  -webkit-animation-delay:-.45s;\n          animation-delay:-.45s\n}\n.lds-ring div[data-v-2fac01e9]:nth-child(2){\n  -webkit-animation-delay:-.3s;\n          animation-delay:-.3s\n}\n.lds-ring div[data-v-2fac01e9]:nth-child(3){\n  -webkit-animation-delay:-.15s;\n          animation-delay:-.15s\n}\n@-webkit-keyframes lds-ring-data-v-2fac01e9{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n@keyframes lds-ring-data-v-2fac01e9{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n.btn[data-v-2fac01e9]{\n  border-radius:0.25rem;\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  font-weight:700\n}\n.btn-blue[data-v-2fac01e9]{\n  background-color:#fff;\n  color:#0d0d0d;\n  margin:0 auto;\n  transition:.4s;\n  font-weight:500;\n  padding:10px 45px;\n  font-weight:400;\n  font-size:20px\n}\n.btn-blue[data-v-2fac01e9]:hover{\n  background-color:#c3c3bf\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},341:function(t,e,n){"use strict";var o=n(3),r=n(4),l=n(52),c=n(342),d=n(214),f=n(5),m=RangeError,h=String,v=Math.floor,x=r(d),w=r("".slice),y=r(1..toFixed),k=function(t,e,n){return 0===e?n:e%2==1?k(t,e-1,n*t):k(t*t,e/2,n)},_=function(data,t,e){for(var n=-1,o=e;++n<6;)o+=t*data[n],data[n]=o%1e7,o=v(o/1e7)},C=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=v(n/t),n=n%t*1e7},T=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+x("0",7-e.length)+e}return s};o({target:"Number",proto:!0,forced:f((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!f((function(){y({})}))},{toFixed:function(t){var e,n,o,r,d=c(this),f=l(t),data=[0,0,0,0,0,0],v="",y="0";if(f<0||f>20)throw m("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return h(d);if(d<0&&(v="-",d=-d),d>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(d*k(2,69,1))-69)<0?d*k(2,-e,1):d/k(2,e,1),n*=4503599627370496,(e=52-e)>0){for(_(data,0,n),o=f;o>=7;)_(data,1e7,0),o-=7;for(_(data,k(10,o,1),0),o=e-1;o>=23;)C(data,1<<23),o-=23;C(data,1<<o),_(data,1,1),C(data,2),y=T(data)}else _(data,0,n),_(data,1<<-e,0),y=T(data)+x("0",f);return y=f>0?v+((r=y.length)<=f?"0."+x("0",f-r)+y:w(y,0,r-f)+"."+w(y,r-f)):v+y}})},342:function(t,e,n){var o=n(4);t.exports=o(1..valueOf)},345:function(t,e,n){var content=n(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("680c5f1f",content,!0,{sourceMap:!1})},349:function(t,e,n){"use strict";n.r(e);var o={name:"BannerSection"},r=(n(335),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("img",{staticClass:"logo",attrs:{src:"logo.webp",alt:"Logo"}}),t._v(" "),n("img",{staticClass:"banner",attrs:{src:"bg_logo_nelkul.webp",alt:"Banner"}})])}],!1,null,"bac51ba6",null);e.default=component.exports},350:function(t,e,n){"use strict";n.r(e);var o={name:"AboutMeSection"},r=(n(337),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"about-me"}},[n("img",{staticClass:"mx-auto",attrs:{src:"at.webp",alt:"Arnold Tattoo"}}),t._v(" "),n("p",{staticClass:"text-white max-w-7xl mx-auto text-justify p-4"},[t._v("\n    Sziasztok! Kolozsvári Arnold a nevem, körülbelül 2007 környékén kezdtem\n    foglalkozni tetoválások készítésével 😅 persze már előtte is érdekelt a\n    téma. Jelenleg Komáromban dolgozom, Arnold Tattoo nevű szalonomban.\n    Korábban Győrben dolgoztam, de Svájcban is tetováltam. Jelenleg\n    Németországban is fellelheto vagyok. Többnyire a fekete fehér melókat\n    kedvelem ,de szívesen színezek be embereket 😂 itt van pár melóm\n    csekkoljátok és ha felkeltettem érdeklődésedet bátran keress fel. 🤘\n  ")])])}],!1,null,"33b764c0",null);e.default=component.exports},351:function(t,e,n){"use strict";n.r(e);n(14),n(38),n(119);var o=n(332),r=n.n(o),l=(n(333),n(120),n(213)),c=n(334),d={name:"GallerySection",components:{VueSlickCarousel:r.a},data:function(){return{settings:{dots:!1,infinite:!0,arrows:!1,autoplay:!0,mobileFirst:!0,speed:500,slidesToShow:3,slidesToScroll:1,touchThreshold:5,responsive:[{breakpoint:2e3,settings:{slidesToShow:3}},{breakpoint:1e3,settings:{arrows:!1,slidesToShow:2}},{breakpoint:770,settings:{arrows:!1,slidesToShow:1}}]},images:[],modalImage:""}},mounted:function(){var t=this;document.querySelector(".slider-wrapper").style.opacity="1",document.querySelector(".lds-ring").style.opacity="0","undefined"!=typeof window&&(window.innerWidth>1339?this.settings.slidesToShow=3:window.innerWidth>1079?this.settings.slidesToShow=2:(window.innerWidth,this.settings.slidesToShow=1),this.hide());var e=Object(c.a)(),n=Object(l.b)(e,"gs://arnoldtattoo.appspot.com"),o=Object(l.d)(n);Object(l.c)(o).then((function(e){e.prefixes.forEach((function(t){})),e.items.forEach((function(e){Object(l.a)(Object(l.d)(n,e._location.path)).then((function(e){t.images.push(e)})).catch((function(t){}))}))})).catch((function(t){console.log(t)}))},computed:{},methods:{showNext:function(){this.$refs.carousel.next()},showPrev:function(){this.$refs.carousel.prev()},show:function(){this.$modal.show("listing")},hide:function(){this.$modal.hide("listing")},showImage:function(image){this.show(),this.modalImage=image},handleBeforeOpen:function(){this.$refs.listing.modal.renderedHeight=""}}},f=(n(339),n(17)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"relative",staticStyle:{"background-image":"linear-gradient("},attrs:{id:"gallery"}},[n("modal",{ref:"listing",attrs:{name:"listing",adaptive:!0,width:"90%",maxWidth:900,height:"auto",scrollable:!0},on:{"before-open":t.handleBeforeOpen}},[n("img",{attrs:{src:t.modalImage}})]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"slider-wrapper max-w-7xl mx-auto"},[n("div",{staticClass:"container mx-auto relative"},[n("div",{staticClass:"\n          flex\n          items-center\n          justify-between\n          absolute\n          inset-0\n          w-full\n          h-full\n        "},[n("button",{staticClass:"\n            z-30\n            ml-10\n            focus:outline-none\n            focus:bg-gray-400\n            focus:ring-2\n            focus:ring-offset-2\n            focus:ring-gray-400\n          ",attrs:{id:"next",role:"button","aria-label":"slide forward"},on:{click:t.showPrev}},[n("svg",{attrs:{width:"24px",height:"24px",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M7 1L1 7L7 13",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),n("button",{staticClass:"\n            z-30\n            mr-10\n            focus:outline-none\n            focus:bg-gray-400\n            focus:ring-2\n            focus:ring-offset-2\n            focus:ring-gray-400\n          ",attrs:{id:"next",role:"button","aria-label":"slide forward"},on:{click:t.showNext}},[n("svg",{attrs:{width:"24px",height:"24px",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1 1L7 7L1 13",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),t._v(" "),n("div",{staticClass:"flex items-center justify-center w-full h-full sm:py-8 px-4"},[n("div",{staticClass:"slider"},[n("div",{staticClass:"slide-ana"},[this.images.length>3?n("VueSlickCarousel",t._b({ref:"carousel"},"VueSlickCarousel",t.settings,!1),t._l(t.images,(function(image,e){return n("div",{key:e,staticClass:"px-3",on:{click:function(e){return t.showImage(image)}}},[n("div",{staticClass:"\n                    flex flex-shrink-0\n                    relative\n                    w-full\n                    sm:w-auto\n                    cursor-pointer\n                    overflow-hidden\n                  "},[n("img",{staticClass:"object-contain object-center w-full z-10",attrs:{src:"photo.webp"}}),t._v(" "),n("img",{staticClass:"\n                      instagram-pic\n                      object-cover object-center\n                      w-full\n                      z-0\n                      absolute\n                    ",attrs:{src:image}}),t._v(" "),n("div",{staticClass:"\n                      bg-gray-800 bg-opacity-30\n                      absolute\n                      w-full\n                      h-full\n                      p-6\n                    "})])])})),0):t._e()],1)])])])]),t._v(" "),n("nuxt-link",{staticStyle:{"border-bottom":"none"},attrs:{to:{path:"/galleria"}}},[n("button",{staticClass:"btn btn-blue flex justify-center text-white text-2xl more-pics"},[t._v("\n      Kattints ide a többi képért\n    ")])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-ring"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")])}],!1,null,"2fac01e9",null);e.default=component.exports},352:function(t,e,n){"use strict";n.r(e);n(53),n(341);var o={data:function(){return{map:null,ShopCoordinates:{lat:47.74295,lng:18.1253163},zoom:6,mapStyle:{styles:[{featureType:"all",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#aa923b"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#c4c4c4"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#e5c163"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21},{visibility:"on"}]},{featureType:"poi.business",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#aa923b"},{lightness:"0"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#000000"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#e5c163"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#575757"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.stroke",stylers:[{color:"#2c2c2c"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#999999"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}]}}},mounted:function(){var t=this;this.$refs.mapRef.$mapPromise.then((function(map){t.map=map}))},methods:{handleDrag:function(){var t={lat:this.map.getCenter().lat(),lng:this.map.getCenter().lng()},e=this.map.getZoom();localStorage.center=JSON.stringify(t),localStorage.zoom=e}},computed:{mapCoordinates:function(){return this.map?{lat:this.map.getCenter().lat().toFixed(4),lng:this.map.getCenter().lng().toFixed(4)}:{lat:47.74295,lng:18.1253163}}}},r=n(17),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"googleMap"}},[n("GmapMap",{ref:"mapRef",staticStyle:{width:"100%",height:"400px"},attrs:{center:t.ShopCoordinates,zoom:15,options:t.mapStyle},on:{dragend:t.handleDrag}},[n("gmap-marker",{attrs:{position:t.ShopCoordinates},on:{click:function(e){t.center=t.ShopCoordinates}}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},358:function(t,e,n){"use strict";n(345)},359:function(t,e,n){var o=n(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n*[data-v-2103aba4]{\n  min-height:0;\n  min-width:0\n}\nhtml[data-v-2103aba4]{\n  scroll-behavior:smooth;\n  background:#0d0d0d\n}\n#__layout[data-v-2103aba4],#__layout>main[data-v-2103aba4],#__nuxt[data-v-2103aba4],body[data-v-2103aba4]{\n  min-height:100vh;\n  display:flex;\n  flex-direction:column\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},373:function(t,e,n){"use strict";n.r(e);var o={name:"IndexPage"},r=(n(358),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("NavBar"),t._v(" "),n("BannerSection"),t._v(" "),n("AboutMeSection"),t._v(" "),n("GallerySection"),t._v(" "),n("GoogleMap"),t._v(" "),n("FooterElement")],1)}),[],!1,null,"2103aba4",null);e.default=component.exports;installComponents(component,{NavBar:n(327).default,BannerSection:n(349).default,AboutMeSection:n(350).default,GallerySection:n(351).default,GoogleMap:n(352).default,FooterElement:n(328).default})}}]);