(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7,10],{320:function(t,n,e){var content=e(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("287d7002",content,!0,{sourceMap:!1})},321:function(t,n,e){var content=e(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("4b8d5545",content,!0,{sourceMap:!1})},322:function(t,n,e){"use strict";e(320)},323:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nhtml{\n  scroll-behavior:smooth\n}\n::-webkit-scrollbar{\n  width:10px\n}\n::-webkit-scrollbar-track{\n  background:#0e0e0e\n}\n::-webkit-scrollbar-thumb{\n  background:transparent;\n  background:#4a4a4a;\n  background:#cfcfcf\n}\n.nav,.nav>div>aside{\n  background:#0e0e0e;\n  transition:.2s\n}\n#__layout>main>nav,.nav{\n  transition:.2s\n}\n.nav{\n  display:initial;\n  height:50px\n}\n.logo{\n  opacity:1;\n  transition:.2s\n}\n.transparent-nav{\n  background:transparent;\n  height:100px\n}\n.transparent-logo{\n  opacity:0\n}\nul li a{\n  text-shadow:1px 1px #000\n}\naside>ul{\n  gap:20px\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},324:function(t,n,e){"use strict";e(321)},325:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nfooter[data-v-74dbc31f]{\n  margin-top:auto;\n  background:#0e0e0e\n}\n@media only screen and (max-width:766px){\nfooter>div[data-v-74dbc31f]{\n    display:flex;\n    flex-direction:column;\n    gap:5px\n}\nfooter>div>span[data-v-74dbc31f]{\n    text-align:left\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},326:function(t,n,e){"use strict";e.r(n);var o={name:"NavBar",data:function(){return{isOpen:!1}},watch:{isOpen:{immediate:!0,handler:function(t){t?document.body.style.setProperty("overflow","hidden"):document.body.style.removeProperty("overflow")}}},mounted:function(){var t=this;window.addEventListener("scroll",this.onScroll);var nav=document.querySelector(".nav"),n=document.querySelector(".logo");this.windowTop=window.top.scrollY,0!==window.top.scrollY&&(nav.classList.remove("transparent-nav"),n.classList.remove("transparent-logo")),document.addEventListener("keydown",(function(n){27===n.keyCode&&t.isOpen&&(t.isOpen=!1)}))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){var nav=document.querySelector(".nav"),n=document.querySelector(".logo");this.windowTop=window.top.scrollY,0===window.top.scrollY?(nav.classList.add("transparent-nav"),n.classList.add("transparent-logo")):(nav.classList.remove("transparent-nav"),n.classList.remove("transparent-logo"))},drawer:function(){this.isOpen=!this.isOpen}}},l=(e(322),e(17)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"nav transparent transparent-nav fixed z-10 w-full h-12 px-5 z-50"},[e("div",{staticClass:"flex items-center justify-between h-full max-w-7xl m-auto"},[e("div",[e("nuxt-link",{attrs:{to:{path:"/"}}},[e("img",{staticClass:"logo transparent-logo max-h-10",attrs:{src:"logo.webp",alt:"Arnold Tattoo Logo"}})])],1),t._v(" "),e("div",{staticClass:"md:hidden"},[e("button",{staticClass:"text-gray-500 w-10 h-10 relative focus:outline-none",on:{click:t.drawer}},[e("div",{staticClass:"\n            block\n            w-5\n            absolute\n            left-1/2\n            top-1/2\n            transform\n            -translate-x-1/2 -translate-y-1/2\n          "},[e("span",{staticClass:"\n              block\n              absolute\n              h-0.5\n              w-5\n              bg-white\n              transform\n              transition\n              duration-500\n              ease-in-out\n            ",class:t.isOpen?"rotate-45":"-translate-y-1.5",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",{staticClass:"\n              block\n              absolute\n              h-0.5\n              w-5\n              bg-white\n              transform\n              transition\n              duration-500\n              ease-in-out\n            ",class:t.isOpen?"opacity-0":"",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",{staticClass:"\n              block\n              absolute\n              h-0.5\n              w-5\n              bg-white\n              transform\n              transition\n              duration-500\n              ease-in-out\n            ",class:t.isOpen?"-rotate-45":"translate-y-1.5",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),e("div",{staticClass:"hidden md:block"},[e("ul",{staticClass:"flex space-x-8 text-sm font-sans text-white"},[e("li",[e("nuxt-link",{attrs:{to:{path:"/",hash:"#about-me"}}},[t._v("Rólam")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:{path:"/galleria"}}},[t._v("Galéria")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:{path:"/",hash:"#booking"}}},[t._v("Időpontfoglalás")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:{path:"/",hash:"#shirts"}}},[t._v("Pólók")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:{path:"/",hash:"#googleMap"}}},[t._v("Kapcsolat")])],1)])]),t._v(" "),e("transition",{attrs:{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"z-10 fixed inset-0 transition-opacity",on:{keydown:function(n){if(!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"]))return null;t.isOpen=!1}}},[e("div",{staticClass:"absolute inset-0 bg-black opacity-50",attrs:{tabindex:"0"},on:{click:function(n){t.isOpen=!1}}})])]),t._v(" "),e("aside",{staticClass:"\n        p-5\n        transform\n        top-0\n        left-0\n        w-64\n        fixed\n        h-full\n        overflow-auto\n        ease-in-out\n        transition-all\n        duration-300\n        z-30\n      ",class:t.isOpen?"translate-x-0":"-translate-x-full"},[e("ul",{staticClass:"font-sans text-white flex flex-col"},[e("li",{on:{click:function(n){t.isOpen=!1}}},[e("nuxt-link",{attrs:{to:{path:"/",hash:"#about-me"}}},[t._v("Rólam")])],1),t._v(" "),e("li",{on:{click:function(n){t.isOpen=!1}}},[e("nuxt-link",{attrs:{to:{path:"/galleria"}}},[t._v("Galéria")])],1),t._v(" "),e("li",{on:{click:function(n){t.isOpen=!1}}},[e("nuxt-link",{attrs:{to:{path:"/",hash:"#booking"}}},[t._v("Időpontfoglalás")])],1),t._v(" "),e("li",{on:{click:function(n){t.isOpen=!1}}},[e("nuxt-link",{attrs:{to:{path:"/",hash:"#shirts"}}},[t._v("Pólók")])],1),t._v(" "),e("li",{on:{click:function(n){t.isOpen=!1}}},[e("nuxt-link",{attrs:{to:{path:"/",hash:"#googleMap"}}},[t._v("Kapcsolat")])],1)]),t._v(" "),e("div",{staticClass:"follow"},[e("p",{staticClass:"italic font-sans text-sm"},[t._v("follow us:")]),t._v(" "),e("div",{staticClass:"social flex space-x-5 mt-4"},[e("a",{attrs:{href:"https://www.facebook.com/arnoldt.tattoo",target:"_blank"}},[e("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[e("path",{attrs:{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])]),t._v(" "),e("a",{attrs:{href:"https://www.instagram.com/kolozsvari_arnold/",target:"_blank"}},[e("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"instagram",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}})])])])])])],1)])}),[],!1,null,null,null);n.default=component.exports},327:function(t,n,e){"use strict";e.r(n);var o={name:"FooterElement"},l=(e(324),e(17)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",{staticClass:"\n    p-4\n    shadow\n    md:flex md:items-center md:justify-between md:p-6\n    dark:bg-gray-800\n  "},[e("div",{staticClass:"max-w-7xl mx-auto flex w-full justify-between"},[e("div",{staticClass:"flex flex-col gap-2"},[e("span",{staticClass:"text-sm sm:text-center text-white"},[t._v("© 2022 Arnold Tattoo. Minden jog fenntartva\n      ")]),t._v(" "),e("div",{staticClass:"flex gap-3"},[e("a",{attrs:{href:"https://www.facebook.com/arnoldt.tattoo",target:"_blank"}},[e("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[e("path",{attrs:{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])]),t._v(" "),e("a",{attrs:{href:"https://www.instagram.com/kolozsvari_arnold/",target:"_blank"}},[e("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"instagram",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}})])])])]),t._v(" "),e("ul",{staticClass:"flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0"},[e("li",[e("nuxt-link",{staticStyle:{"border-bottom":"none"},attrs:{to:{path:"/adatvedelem"}}},[t._v("Adatvédelmi nyilatkozat")])],1)])])])}),[],!1,null,"74dbc31f",null);n.default=component.exports},360:function(t,n,e){var content=e(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("6d54f71c",content,!0,{sourceMap:!1})},372:function(t,n,e){"use strict";e(360)},373:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nhtml[data-v-5363f164]{\n  scroll-behavior:smooth\n}\nhtml[data-v-5363f164],main[data-v-5363f164]{\n  background:#0d0d0d\n}\n#__layout[data-v-5363f164],#__layout>main[data-v-5363f164],#__nuxt[data-v-5363f164],body[data-v-5363f164]{\n  min-height:100vh;\n  display:flex;\n  flex-direction:column\n}\n.image-wrapper[data-v-5363f164]{\n  max-width:416px;\n  margin-top:20px\n}\n.instagram-pic[data-v-5363f164]{\n  margin:26px;\n  max-width:340px;\n  max-height:360px;\n  -o-object-fit:fill;\n     object-fit:fill\n}\n@media (min-width:0px) and (max-width:420px){\n.instagram-pic[data-v-5363f164]{\n    margin:2.112676056338028vw;\n    max-width:85vw;\n    max-height:90vw\n}\n}\n.g-header[data-v-5363f164]{\n  max-width:500px;\n  max-height:150px;\n  width:100%\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},384:function(t,n,e){"use strict";e.r(n);e(14),e(38),e(119),e(333),e(334),e(120);var o=e(212),l=e(335),r={name:"GalleryPage",data:function(){return{images:[]}},mounted:function(){var t=this,n=Object(l.a)(),e=Object(o.b)(n,"gs://arnoldtattoo.appspot.com"),r=Object(o.d)(e);Object(o.c)(r).then((function(n){n.prefixes.forEach((function(t){})),n.items.forEach((function(n){Object(o.a)(Object(o.d)(e,n._location.path)).then((function(n){t.images.push(n)})).catch((function(t){}))}))})).catch((function(t){console.log(t)}))}},c=(e(372),e(17)),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("NavBar"),t._v(" "),e("img",{staticClass:"mx-auto mt-20 g-header",attrs:{src:"gallery.webp",alt:"Gallery header"}}),t._v(" "),e("nuxt-link",{staticStyle:{"border-bottom":"none"},attrs:{to:{path:"/"}}},[e("p",{staticClass:"flex justify-center mt-28 mb-14 text-white text-2xl"},[t._v("\n      Vissza a főoldalra\n    ")])]),t._v(" "),this.images.length>3?e("div",t._b({staticClass:"flex flex-wrap justify-center"},"div",t.settings,!1),t._l(t.images,(function(image,n){return e("div",{key:n,staticClass:"px-3 image-wrapper"},[e("div",{staticClass:"flex flex-shrink-0 relative w-full sm:w-auto"},[e("img",{staticClass:"object-cover object-center w-full z-10",attrs:{src:"photo.webp"}}),t._v(" "),e("img",{staticClass:"instagram-pic object-cover object-center w-full z-0 absolute",attrs:{src:image}}),t._v(" "),e("div",{staticClass:"bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"})])])})),0):t._e(),t._v(" "),e("FooterElement")],1)}),[],!1,null,"5363f164",null);n.default=component.exports;installComponents(component,{NavBar:e(326).default,FooterElement:e(327).default})}}]);