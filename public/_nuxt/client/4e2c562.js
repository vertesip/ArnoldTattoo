(window.webpackJsonp=window.webpackJsonp||[]).push([[13,8,10],{279:function(t,e,n){var content=n(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(109).default)("287d7002",content,!0,{sourceMap:!1})},280:function(t,e,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(109).default)("5db86cbe",content,!0,{sourceMap:!1})},282:function(t,e,n){"use strict";n(279)},283:function(t,e,n){var l=n(108)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\n::-webkit-scrollbar{\n  width:10px\n}\n::-webkit-scrollbar-track{\n  background:#0e0e0e\n}\n::-webkit-scrollbar-thumb{\n  background:transparent;\n  background:#4a4a4a;\n  background:#cfcfcf\n}\n.nav,.nav>div>aside{\n  background:#0e0e0e;\n  transition:.2s\n}\n#__layout>main>nav,.nav{\n  transition:.2s\n}\n.nav{\n  display:initial;\n  height:50px\n}\n.logo{\n  opacity:1;\n  transition:.2s\n}\n.transparent-nav{\n  background:transparent;\n  height:100px\n}\n.transparent-logo{\n  opacity:0\n}\nli .active{\n  border-bottom-color:#aa923b\n}\nul li a{\n  text-shadow:1px 1px #000\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},284:function(t,e,n){"use strict";n(280)},285:function(t,e,n){var l=n(108)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\nfooter[data-v-4888edae]{\n  margin-top:auto;\n  background:#0e0e0e\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},294:function(t,e,n){"use strict";n.r(e);n(12),n(33);var l={name:"NavBar",data:function(){return{isOpen:!1}},watch:{isOpen:{immediate:!0,handler:function(t){t?document.body.style.setProperty("overflow","hidden"):document.body.style.removeProperty("overflow")}}},mounted:function(){var t=this;window.addEventListener("scroll",this.onScroll);var nav=document.querySelector(".nav"),e=document.querySelector(".logo");this.windowTop=window.top.scrollY,0!==window.top.scrollY&&(nav.classList.remove("transparent-nav"),e.classList.remove("transparent-logo")),document.addEventListener("keydown",(function(e){27===e.keyCode&&t.isOpen&&(t.isOpen=!1)})),document.querySelectorAll('a[href^="#"]').forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({block:"center",inline:"center",behavior:"smooth"})}))}))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){var nav=document.querySelector(".nav"),e=document.querySelector(".logo");this.windowTop=window.top.scrollY,0===window.top.scrollY?(nav.classList.add("transparent-nav"),e.classList.add("transparent-logo")):(nav.classList.remove("transparent-nav"),e.classList.remove("transparent-logo"))},drawer:function(){this.isOpen=!this.isOpen}}},r=(n(282),n(47)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav transparent transparent-nav fixed z-10 w-full h-12 px-5 z-50"},[n("div",{staticClass:"flex items-center justify-between h-full max-w-7xl m-auto"},[t._m(0),t._v(" "),n("div",{staticClass:"md:hidden"},[n("button",{staticClass:"text-gray-500 w-10 h-10 relative focus:outline-none",on:{click:t.drawer}},[n("div",{staticClass:"\n            block\n            w-5\n            absolute\n            left-1/2\n            top-1/2\n            transform\n            -translate-x-1/2 -translate-y-1/2\n          "},[n("span",{staticClass:"\n              block\n              absolute\n              h-0.5\n              w-5\n              bg-white\n              transform\n              transition\n              duration-500\n              ease-in-out\n            ",class:t.isOpen?"rotate-45":"-translate-y-1.5",attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{staticClass:"\n              block\n              absolute\n              h-0.5\n              w-5\n              bg-white\n              transform\n              transition\n              duration-500\n              ease-in-out\n            ",class:t.isOpen?"opacity-0":"",attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{staticClass:"\n              block\n              absolute\n              h-0.5\n              w-5\n              bg-white\n              transform\n              transition\n              duration-500\n              ease-in-out\n            ",class:t.isOpen?"-rotate-45":"translate-y-1.5",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),t._m(1),t._v(" "),n("transition",{attrs:{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"z-10 fixed inset-0 transition-opacity",on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.isOpen=!1}}},[n("div",{staticClass:"absolute inset-0 bg-black opacity-50",attrs:{tabindex:"0"},on:{click:function(e){t.isOpen=!1}}})])]),t._v(" "),n("aside",{staticClass:"\n        p-5\n        transform\n        top-0\n        left-0\n        w-64\n        fixed\n        h-full\n        overflow-auto\n        ease-in-out\n        transition-all\n        duration-300\n        z-30\n      ",class:t.isOpen?"translate-x-0":"-translate-x-full"},[n("div",{staticClass:"close"},[n("button",{staticClass:"absolute top-0 right-0 mt-4 mr-4",on:{click:function(e){t.isOpen=!1}}},[n("svg",{staticClass:"w-6 h-6",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{d:"M6 18L18 6M6 6l12 12"}})])])]),t._v(" "),n("ul",{staticClass:"divide-y font-sans text-white"},[n("li",[n("a",{staticClass:"my-4 inline-block",attrs:{href:"#about-me"},on:{click:function(e){t.isOpen=!1}}},[t._v("Rólam")])]),t._v(" "),n("li",[n("a",{staticClass:"my-4 inline-block",attrs:{href:"#gallery"},on:{click:function(e){t.isOpen=!1}}},[t._v("Galéria")])]),t._v(" "),n("li",[n("a",{staticClass:"my-4 inline-block",attrs:{href:"#booking"},on:{click:function(e){t.isOpen=!1}}},[t._v("Időpontfoglalás")])]),t._v(" "),n("li",[n("a",{staticClass:"my-4 inline-block",attrs:{href:"#shirts"},on:{click:function(e){t.isOpen=!1}}},[t._v("Pólók")])]),t._v(" "),n("li",[n("a",{staticClass:"my-4 inline-block",attrs:{href:"#contact"},on:{click:function(e){t.isOpen=!1}}},[t._v("Kapcsolat")])])]),t._v(" "),n("div",{staticClass:"follow"},[n("p",{staticClass:"italic font-sans text-sm"},[t._v("\n          follow us:\n        ")]),t._v(" "),n("div",{staticClass:"social flex space-x-5 mt-4"},[n("a",{attrs:{href:"#"}},[n("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"twitter",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])]),t._v(" "),n("a",{attrs:{href:"#"}},[n("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[n("path",{attrs:{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])]),t._v(" "),n("a",{attrs:{href:"#"}},[n("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"instagram",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}})])]),t._v(" "),n("a",{attrs:{href:"#"}},[n("svg",{staticClass:"h-5 w-5 fill-current text-white",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"youtube",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"}},[n("path",{attrs:{fill:"currentColor",d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"}})])])])])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"logo transparent-logo max-h-10",attrs:{src:"logo.png",alt:"Arnold Tattoo Logo"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hidden md:block"},[n("ul",{staticClass:"flex space-x-8 text-sm font-sans text-white"},[n("li",[n("a",{staticClass:"active border-b-2 pb-1",attrs:{href:"#about-me"}},[t._v("Rólam")])]),t._v(" "),n("li",[n("a",{attrs:{href:"galleria"}},[t._v("Galéria")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#booking"}},[t._v("Időpontfoglalás")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#shirts"}},[t._v("Pólók")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#contact"}},[t._v("Kapcsolat")])])])])}],!1,null,null,null);e.default=component.exports},295:function(t,e,n){"use strict";n.r(e);var l={name:"FooterElement"},r=(n(284),n(47)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"\n    p-4\n    shadow\n    md:flex md:items-center md:justify-between md:p-6\n    dark:bg-gray-800\n  "},[n("div",{staticClass:"max-w-7xl mx-auto flex w-full justify-between"},[n("span",{staticClass:"text-sm sm:text-center text-white"},[t._v("© 2022\n      "),n("a",{staticClass:"hover:underline",attrs:{href:"https://flowbite.com"}},[t._v("Arnold Tattoo")]),t._v(".\n      All Rights Reserved.\n    ")]),t._v(" "),n("ul",{staticClass:"\n      flex flex-wrap\n      items-center\n      mt-3\n      text-sm\n      text-white\n      sm:mt-0\n    "},[n("li",[n("a",{staticClass:"mr-4 hover:underline md:mr-6",attrs:{href:"#"}},[t._v("About")])]),t._v(" "),n("li",[n("a",{staticClass:"mr-4 hover:underline md:mr-6",attrs:{href:"#"}},[t._v("Privacy Policy")])]),t._v(" "),n("li",[n("a",{staticClass:"mr-4 hover:underline md:mr-6",attrs:{href:"#"}},[t._v("Licensing")])]),t._v(" "),n("li",[n("a",{staticClass:"hover:underline",attrs:{href:"#"}},[t._v("Contact")])])])])])}],!1,null,"4888edae",null);e.default=component.exports},306:function(t,e,n){var content=n(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(109).default)("0350a0fe",content,!0,{sourceMap:!1})},316:function(t,e,n){"use strict";n(306)},317:function(t,e,n){var l=n(108)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\nhtml[data-v-ae2786e6]{\n  scroll-behavior:smooth\n}\nmain[data-v-ae2786e6]{\n  background:#0d0d0d\n}\nimg[data-v-ae2786e6]{\n  height:-webkit-fill-available\n}\n#__layout[data-v-ae2786e6],#__layout>main[data-v-ae2786e6],#__nuxt[data-v-ae2786e6],body[data-v-ae2786e6]{\n  min-height:100vh;\n  display:flex;\n  flex-direction:column\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},330:function(t,e,n){"use strict";n.r(e);var l={name:"GalleryPage"},r=(n(316),n(47)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("NavBar"),t._v(" "),t._m(0),t._v(" "),n("FooterElement")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap justify-center my-28"},[n("div",{staticClass:"p-3 max-w-md"},[n("div",{staticClass:"flex flex-shrink-0 relative w-full sm:w-auto"},[n("img",{staticClass:"object-cover object-center w-full z-10",attrs:{src:"photo.png",alt:"black chair and white table"}}),t._v(" "),n("img",{staticClass:"instagram-pic object-cover object-center w-full z-0 absolute",attrs:{src:"https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",alt:"black chair and white table"}}),t._v(" "),n("div",{staticClass:"bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"})])]),t._v(" "),n("div",{staticClass:"p-3 max-w-md"},[n("div",{staticClass:"flex flex-shrink-0 relative w-full sm:w-auto"},[n("img",{staticClass:"object-cover object-center w-full z-10",attrs:{src:"photo.png",alt:"black chair and white table"}}),t._v(" "),n("img",{staticClass:"instagram-pic object-cover object-center w-full z-0 absolute",attrs:{src:"https://images.unsplash.com/photo-1605647533135-51b5906087d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",alt:"black chair and white table"}}),t._v(" "),n("div",{staticClass:"bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"})])]),t._v(" "),n("div",{staticClass:"p-3 max-w-md"},[n("div",{staticClass:"flex flex-shrink-0 relative w-full sm:w-auto"},[n("img",{staticClass:"object-cover object-center w-full z-10",attrs:{src:"photo.png",alt:"black chair and white table"}}),t._v(" "),n("img",{staticClass:"instagram-pic object-cover object-center w-full z-0 absolute",attrs:{src:"https://images.unsplash.com/photo-1579035478707-49db569751d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=733&q=80",alt:"black chair and white table"}}),t._v(" "),n("div",{staticClass:"bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"})])]),t._v(" "),n("div",{staticClass:"p-3 max-w-md"},[n("div",{staticClass:"flex flex-shrink-0 relative w-full sm:w-auto"},[n("img",{staticClass:"object-cover object-center w-full z-10",attrs:{src:"photo.png",alt:"black chair and white table"}}),t._v(" "),n("img",{staticClass:"instagram-pic object-cover object-center w-full z-0 absolute",attrs:{src:"https://images.unsplash.com/photo-1541121514895-0f36e7d38d14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",alt:"black chair and white table"}}),t._v(" "),n("div",{staticClass:"bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"})])]),t._v(" "),n("div",{staticClass:"p-3 max-w-md"},[n("div",{staticClass:"flex flex-shrink-0 relative w-full sm:w-auto"},[n("img",{staticClass:"object-cover object-center w-full z-10",attrs:{src:"photo.png",alt:"black chair and white table"}}),t._v(" "),n("img",{staticClass:"instagram-pic object-cover object-center w-full z-0 absolute",attrs:{src:"https://images.unsplash.com/photo-1597852075234-fd721ac361d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",alt:"black chair and white table"}}),t._v(" "),n("div",{staticClass:"bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"})])])])}],!1,null,"ae2786e6",null);e.default=component.exports;installComponents(component,{NavBar:n(294).default,FooterElement:n(295).default})}}]);