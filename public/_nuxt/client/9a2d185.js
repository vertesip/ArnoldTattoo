(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{323:function(t,n,e){var content=e(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(66).default)("eb2409cc",content,!0,{sourceMap:!1})},335:function(t,n,e){"use strict";e(323)},336:function(t,n,e){var l=e(65)((function(i){return i[1]}));l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap);"]),l.push([t.i,"@import url(https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css);"]),l.push([t.i,"/*purgecss start ignore*/\nsection[data-v-fa0b3162]{\n  background:#0d0d0d;\n  background-size:cover\n}\n.slider-wrapper[data-v-fa0b3162]{\n  display:flex;\n  opacity:0;\n  flex-direction:column\n}\n.gallery-background[data-v-fa0b3162]{\n  height:100vh;\n  width:100%;\n  -o-object-fit:cover;\n     object-fit:cover\n}\n.slider[data-v-fa0b3162]{\n  width:100%;\n  position:relative;\n  overflow:hidden\n}\n.slide-ana[data-v-fa0b3162],.slider[data-v-fa0b3162]{\n  height:600px\n}\n.slide-ana>div[data-v-fa0b3162]{\n  display:flex;\n  align-items:center;\n  width:100%;\n  height:100%;\n  position:absolute;\n  transition:all 1s\n}\n.instagram-pic[data-v-fa0b3162]{\n  height:-webkit-fill-available\n}\n@media (min-width:300px) and (max-width:884px){\n.slider[data-v-fa0b3162]{\n    height:550px\n}\n}\n@media (min-width:768px) and (max-width:1023px){\n.slider[data-v-fa0b3162]{\n    height:581px\n}\n}\n@media (min-width:1024px) and (max-width:1280px){\n.slider[data-v-fa0b3162]{\n    height:379px\n}\n}\n.slider2[data-v-fa0b3162]{\n  width:100%;\n  height:395px;\n  position:relative;\n  overflow:hidden\n}\n.slide-ana2[data-v-fa0b3162]{\n  height:100%\n}\n.slide-ana2>div[data-v-fa0b3162]{\n  width:100%;\n  height:100%;\n  position:absolute;\n  transition:all 1s\n}\n@media (min-width:300px) and (max-width:1023px){\n.slider2[data-v-fa0b3162]{\n    height:378px\n}\n}\n.lds-ring[data-v-fa0b3162]{\n  display:flex;\n  position:absolute;\n  left:0;\n  right:0;\n  top:50%;\n  opacity:1;\n  margin:0 auto;\n  width:80px;\n  height:80px\n}\n.lds-ring div[data-v-fa0b3162]{\n  box-sizing:border-box;\n  display:block;\n  position:absolute;\n  width:64px;\n  height:64px;\n  margin:8px;\n  border-radius:50%;\n  -webkit-animation:lds-ring-data-v-fa0b3162 1.2s cubic-bezier(.5,0,.5,1) infinite;\n          animation:lds-ring-data-v-fa0b3162 1.2s cubic-bezier(.5,0,.5,1) infinite;\n  border:8px solid transparent;\n  border-top-color:#fff\n}\n.lds-ring div[data-v-fa0b3162]:first-child{\n  -webkit-animation-delay:-.45s;\n          animation-delay:-.45s\n}\n.lds-ring div[data-v-fa0b3162]:nth-child(2){\n  -webkit-animation-delay:-.3s;\n          animation-delay:-.3s\n}\n.lds-ring div[data-v-fa0b3162]:nth-child(3){\n  -webkit-animation-delay:-.15s;\n          animation-delay:-.15s\n}\n@-webkit-keyframes lds-ring-data-v-fa0b3162{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n@keyframes lds-ring-data-v-fa0b3162{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},350:function(t,n,e){"use strict";e.r(n);var l=e(345),o=e.n(l),r=(e(346),{name:"GallerySection",components:{VueSlickCarousel:o.a},data:function(){return{settings:{dots:!1,infinite:!0,arrows:!1,autoplay:!0,speed:500,slidesToShow:0,slidesToScroll:1,touchThreshold:5,responsive:[{breakpoint:768,settings:{arrows:!1,slidesToShow:2}},{breakpoint:576,settings:{arrows:!1,slidesToShow:1}}]}}},mounted:function(){document.querySelector(".slider-wrapper").style.opacity="1",document.querySelector(".lds-ring").style.opacity="0","undefined"!=typeof window&&(window.innerWidth>1339?this.settings.slidesToShow=3:window.innerWidth>1079?this.settings.slidesToShow=2:(window.innerWidth,this.settings.slidesToShow=1))},methods:{showNext:function(){this.$refs.carousel.next()},showPrev:function(){this.$refs.carousel.prev()}}}),c=(e(335),e(15)),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"relative",staticStyle:{"background-image":"linear-gradient( to bottom, rgba(13,13,13,1), rgba(13,13,13,0), rgba(13,13,13,1) ),linear-gradient( to top, rgba(13,13,13,1), rgba(13,13,13,0.8), rgba(13,13,13,1) ),url(background.jpg)"},attrs:{id:"gallery"}},[e("img",{staticClass:"mx-auto my-20",attrs:{src:"gallery.png",alt:"Gallery header"}}),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"slider-wrapper"},[e("div",{staticClass:"container mx-auto relative"},[e("div",{staticClass:"\n          flex\n          items-center\n          justify-between\n          absolute\n          inset-0\n          w-full\n          h-full\n        "},[e("button",{staticClass:"\n            z-30\n            ml-10\n            focus:outline-none\n            focus:bg-gray-400\n            focus:ring-2\n            focus:ring-offset-2\n            focus:ring-gray-400\n          ",attrs:{id:"next",role:"button","aria-label":"slide forward"},on:{click:t.showPrev}},[e("svg",{attrs:{width:"24px",height:"24px",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M7 1L1 7L7 13",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),e("button",{staticClass:"\n            z-30\n            mr-10\n            focus:outline-none\n            focus:bg-gray-400\n            focus:ring-2\n            focus:ring-offset-2\n            focus:ring-gray-400\n          ",attrs:{id:"next",role:"button","aria-label":"slide forward"},on:{click:t.showNext}},[e("svg",{attrs:{width:"24px",height:"24px",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1 1L7 7L1 13",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),t._v(" "),e("div",{staticClass:"\n          flex\n          items-center\n          justify-center\n          w-full\n          h-full\n          py-24\n          sm:py-8\n          px-4\n        "},[e("div",{staticClass:"slider"},[e("div",{staticClass:"slide-ana"},[e("VueSlickCarousel",t._b({ref:"carousel"},"VueSlickCarousel",t.settings,!1),[e("div",{staticClass:"px-3"},[e("div",{staticClass:"flex flex-shrink-0 relative w-full sm:w-auto"},[e("img",{staticClass:"object-cover object-center w-full z-10",attrs:{src:"photo.png",alt:"black chair and white table"}}),t._v(" "),e("img",{staticClass:"\n                      instagram-pic\n                      object-cover object-center\n                      w-full\n                      z-0\n                      absolute\n                    ",attrs:{src:"https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",alt:"black chair and white table"}}),t._v(" "),e("div",{staticClass:"\n                      bg-gray-800 bg-opacity-30\n                      absolute\n                      w-full\n                      h-full\n                      p-6\n                    "})])]),t._v(" "),e("div",{staticClass:"px-3"},[e("div",{staticClass:"flex flex-shrink-0 relative w-full sm:w-auto"},[e("img",{staticClass:"object-cover object-center w-full z-10",attrs:{src:"photo.png",alt:"black chair and white table"}}),t._v(" "),e("img",{staticClass:"\n                      instagram-pic\n                      object-cover object-center\n                      w-full\n                      z-0\n                      absolute\n                    ",attrs:{src:"https://images.unsplash.com/photo-1605647533135-51b5906087d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",alt:"black chair and white table"}}),t._v(" "),e("div",{staticClass:"\n                      bg-gray-800 bg-opacity-30\n                      absolute\n                      w-full\n                      h-full\n                      p-6\n                    "})])]),t._v(" "),e("div",{staticClass:"px-3"},[e("div",{staticClass:"flex flex-shrink-0 relative w-full sm:w-auto"},[e("img",{staticClass:"object-cover object-center w-full z-10",attrs:{src:"photo.png",alt:"black chair and white table"}}),t._v(" "),e("img",{staticClass:"\n                      instagram-pic\n                      object-cover object-center\n                      w-full\n                      z-0\n                      absolute\n                    ",attrs:{src:"https://images.unsplash.com/photo-1579035478707-49db569751d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=733&q=80",alt:"black chair and white table"}}),t._v(" "),e("div",{staticClass:"\n                      bg-gray-800 bg-opacity-30\n                      absolute\n                      w-full\n                      h-full\n                      p-6\n                    "})])]),t._v(" "),e("div",{staticClass:"px-3"},[e("div",{staticClass:"flex flex-shrink-0 relative w-full sm:w-auto"},[e("img",{staticClass:"object-cover object-center w-full z-10",attrs:{src:"photo.png",alt:"black chair and white table"}}),t._v(" "),e("img",{staticClass:"\n                      instagram-pic\n                      object-cover object-center\n                      w-full\n                      z-0\n                      absolute\n                    ",attrs:{src:"https://images.unsplash.com/photo-1541121514895-0f36e7d38d14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",alt:"black chair and white table"}}),t._v(" "),e("div",{staticClass:"\n                      bg-gray-800 bg-opacity-30\n                      absolute\n                      w-full\n                      h-full\n                      p-6\n                    "})])]),t._v(" "),e("div",{staticClass:"px-3"},[e("div",{staticClass:"flex flex-shrink-0 relative w-full sm:w-auto"},[e("img",{staticClass:"object-cover object-center w-full z-10",attrs:{src:"photo.png",alt:"black chair and white table"}}),t._v(" "),e("img",{staticClass:"\n                      instagram-pic\n                      object-cover object-center\n                      w-full\n                      z-0\n                      absolute\n                    ",attrs:{src:"https://images.unsplash.com/photo-1597852075234-fd721ac361d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",alt:"black chair and white table"}}),t._v(" "),e("div",{staticClass:"\n                      bg-gray-800 bg-opacity-30\n                      absolute\n                      w-full\n                      h-full\n                      p-6\n                    "})])])])],1)])])])])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"lds-ring"},[e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div")])}],!1,null,"fa0b3162",null);n.default=component.exports}}]);