(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{12:function(t,n,r){"use strict";var e=r(19),o=r.n(e),i=r(20),a=r.n(i),c=r(11),u=r(10),l=r(21),s=r.n(l),p=r(22),f=r.n(p);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function h(t,n){return!n||"object"!==d(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function m(t){var n="function"==typeof Map?new Map:void 0;return(m=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return v(t,arguments,w(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),g(e,t)})(t)}function v(t,n,r){return(v=b()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var o=new(Function.bind.apply(t,e));return r&&g(o,r.prototype),o}).apply(null,arguments)}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function g(t,n){return(g=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&g(t,n)}(p,t);var n,r,e,i,l=(n=p,function(){var t,r=w(n);if(b()){var e=w(this).constructor;t=Reflect.construct(r,arguments,e)}else t=r.apply(this,arguments);return h(this,t)});function p(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(t=l.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return r=p,(e=[{key:"connectedCallback",value:function(){this._grid=!1}},{key:"render",value:function(){this.shadowDOM.appendChild(this.createElem())}},{key:"createElem",value:function(){var t=Object(u.a)(s.a,f.a),n=t.querySelector(".poster");n.href="movie/".concat(this._poster.id),this._grid&&n.classList.add("poster-grid");var r=t.querySelector(".image"),e=document.createElement("img");null===this._poster.poster?(r.classList.remove("image"),e.src=o.a):(r.classList.remove("default-poster"),e.src=this._poster.poster),e.addEventListener("load",(function(){r.classList.remove("shimmer"),r.appendChild(e)})),t.querySelector("h5").innerText=this._poster.title;var i=t.querySelector(".rating"),l=document.createElement("img"),p=t.querySelector(".rate");return l.src=a.a,i.insertBefore(l,p),p.innerText=0===this._poster.rate?"-":Object(c.a)(this._poster.rate),t.querySelector(".year").innerText=this._poster.releaseYear,t}},{key:"poster",set:function(t){this._poster=t,this.render()}},{key:"grid",set:function(t){this._grid=t}}])&&y(r.prototype,e),i&&y(r,i),p}(m(HTMLElement));customElements.define("poster-item",x)},157:function(t,n){t.exports='<main> <search-bar></search-bar> <genre-list id=genres></genre-list> <section> <title-bar title="Now Playing"></title-bar> <gallery-list id=now-playing></gallery-list> </section> <section> <title-bar title="Trending Movies"></title-bar> <gallery-list id=trending-movies></gallery-list> </section> <section> <title-bar title="Indonesian Movies"></title-bar> <gallery-list id=indonesian-movies></gallery-list> </section> <section> <title-bar title="Upcoming Movies"></title-bar> <gallery-list id=upcoming-movies></gallery-list> </section> </main> <footer-area></footer-area>'},158:function(t,n){t.exports='<div class=discover> <form action="" id=search> <input type=search placeholder="Search for movie" value="" name=query autocomplete=off> </form> </div>'},159:function(t,n,r){var e=r(160);t.exports="string"==typeof e?e:e.toString()},16:function(t,n){t.exports="<div class=loader-wrapper> <div class=loader></div> </div>"},160:function(t,n,r){(n=r(0)(!1)).push([t.i,".discover {\r\n\tmargin: 50px;\r\n\tpadding: 10px 30px;\r\n\tdisplay: block;\r\n\tbackground: #202124;\r\n}\r\n\r\n.discover input {\r\n\tfont-size: 1em;\r\n\twidth: 100%;\r\n\tbackground: transparent;\r\n\theight: 50px;\r\n\tborder: none;\r\n\toutline: none;\r\n\tcolor: #ccc;\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n\t.discover  {\r\n\t\tmargin: 40px 30px;\r\n\t\tpadding: 5px 15px;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 640px) {\r\n\t.discover  {\r\n\t\tmargin: 30px 20px;\r\n\t\tpadding: 5px 12px;\r\n\t}\r\n}",""]),t.exports=n},161:function(t,n){t.exports="<div class=genres> <div class=pad></div> <div class=pad></div> </div>"},162:function(t,n,r){var e=r(163);t.exports="string"==typeof e?e:e.toString()},163:function(t,n,r){(n=r(0)(!1)).push([t.i,".genres {\r\n\tdisplay: flex;\r\n\tposition: relative;\r\n\tflex-direction: row;\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\toverflow-x: scroll;\r\n\twhite-space: nowrap;\r\n\tscroll-snap-align: start;\r\n\tscroll-snap-type: x mandatory;\r\n\tscroll-padding: 50px;\r\n\t-ms-overflow-style: none;\r\n\tbox-sizing: border-box;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.genres::-webkit-scrollbar {\r\n\tdisplay: none;\r\n}\r\n\r\n.genres a {\r\n\tmargin-right: 10px;\r\n\tpadding: 20px 40px;\r\n\tcolor: #FFE170;\r\n\tbackground-color: #262626;\r\n\tscroll-snap-align: start;\r\n\ttransition: padding 0.2s ease;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.genres a:hover {\r\n\tpadding: 20px 50px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.genres .pad {\r\n\tflex-shrink: 0;\r\n\twidth: 50px;\r\n}\r\n\r\n.genres a h5 {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 1024px) {\r\n\t.genres {\r\n\t\tscroll-padding: 30px;\r\n\t}\r\n\r\n\t.genres .pad {\r\n\t\twidth: 30px;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 640px) {\r\n\t.genres {\r\n\t\tscroll-padding: 20px;\r\n\t}\r\n\r\n\t.genres a {\r\n\t\tpadding: 15px 35px;\r\n\t}\r\n\r\n\t.genres .pad {\r\n\t\twidth: 20px;\r\n\t}\r\n}",""]),t.exports=n},17:function(t,n,r){var e=r(18);t.exports="string"==typeof e?e:e.toString()},178:function(t,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return A}));var e=r(13),o=r(10),i=r(157),a=r.n(i),c=r(158),u=r.n(c),l=r(159),s=r.n(l);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function d(t,n){return!n||"object"!==p(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function y(t){var n="function"==typeof Map?new Map:void 0;return(y=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return h(t,arguments,b(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),v(e,t)})(t)}function h(t,n,r){return(h=m()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var o=new(Function.bind.apply(t,e));return r&&v(o,r.prototype),o}).apply(null,arguments)}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function v(t,n){return(v=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var g=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&v(t,n)}(c,t);var n,r,e,i,a=(n=c,function(){var t,r=b(n);if(m()){var e=b(this).constructor;t=Reflect.construct(r,arguments,e)}else t=r.apply(this,arguments);return d(this,t)});function c(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return r=c,(e=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.appendChild(this.createElem())}},{key:"createElem",value:function(){var t=Object(o.a)(u.a,s.a);return t.querySelector("form").addEventListener("submit",(function(t){t.preventDefault();var n=encodeURI(t.target.query.value);n&&(window.history.pushState({},window.title,"movie/search/".concat(n)),window.dispatchEvent(new PopStateEvent("popstate")))})),t}}])&&f(r.prototype,e),i&&f(r,i),c}(y(HTMLElement));customElements.define("search-bar",g);var w=r(14),x=r(161),O=r.n(x),S=r(162),_=r.n(S);function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function j(t,n){return!n||"object"!==k(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function M(t){var n="function"==typeof Map?new Map:void 0;return(M=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return R(t,arguments,D(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),T(e,t)})(t)}function R(t,n,r){return(R=P()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var o=new(Function.bind.apply(t,e));return r&&T(o,r.prototype),o}).apply(null,arguments)}function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function T(t,n){return(T=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function D(t){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var C=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&T(t,n)}(c,t);var n,r,e,i,a=(n=c,function(){var t,r=D(n);if(P()){var e=D(this).constructor;t=Reflect.construct(r,arguments,e)}else t=r.apply(this,arguments);return j(this,t)});function c(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return r=c,(e=[{key:"connectedCallback",value:function(){this._data=w.b,this.render()}},{key:"render",value:function(){this.shadowDOM.appendChild(this.createElem())}},{key:"createElem",value:function(){var t=Object(o.a)(O.a,_.a),n=t.querySelector(".genres"),r=n.querySelector(".pad:nth-child(2)");return this._data.map((function(t){var e=document.createElement("a");e.setAttribute("href","movie/genre/".concat(t.id));var o=document.createElement("h5");o.innerText=t.name,e.appendChild(o),n.insertBefore(e,r)})),t}}])&&E(r.prototype,e),i&&E(r,i),c}(M(HTMLElement));customElements.define("genre-list",C);r(15),r(28),r(27);function q(t){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function L(t,n){return!n||"object"!==q(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function z(t){var n="function"==typeof Map?new Map:void 0;return(z=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return H(t,arguments,U(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),N(e,t)})(t)}function H(t,n,r){return(H=I()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var o=new(Function.bind.apply(t,e));return r&&N(o,r.prototype),o}).apply(null,arguments)}function I(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function N(t,n){return(N=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function U(t){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var B=new e.a,A=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&N(t,n)}(u,t);var n,r,e,i,c=(n=u,function(){var t,r=U(n);if(I()){var e=U(this).constructor;t=Reflect.construct(r,arguments,e)}else t=r.apply(this,arguments);return L(this,t)});function u(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return r=u,(e=[{key:"connectedCallback",value:function(){this.shadowDOM.innerHTML="",this.shadowDOM.appendChild(this.feed())}},{key:"feed",value:function(){var t=Object(o.a)(a.a);return this.loadShowingMovies(t),this.loadTrendingMovies(t),this.loadIndonesianMovies(t),this.loadUpcomingMovies(t),t}},{key:"loadTrendingMovies",value:function(t){var n=this,r=t.querySelector("#trending-movies");this.render(r),B.getTrending((function(t){n.render(r,t)}))}},{key:"loadUpcomingMovies",value:function(t){var n=this,r=t.querySelector("#upcoming-movies");this.render(r),B.getUpcomingMovies((function(t){n.render(r,t)}))}},{key:"loadShowingMovies",value:function(t){var n=this,r=t.querySelector("#now-playing");this.render(r),B.getShowing((function(t){n.render(r,t)}))}},{key:"loadIndonesianMovies",value:function(t){var n=this,r=t.querySelector("#indonesian-movies");this.render(r),B.getIndonesianMovies((function(t){n.render(r,t)}))}},{key:"render",value:function(t,n){t.gallery=n;var r=t.previousElementSibling;r.title=r.getAttribute("title")}}])&&F(r.prototype,e),i&&F(r,i),u}(z(HTMLElement));customElements.define("home-page",A)},18:function(t,n,r){(n=r(0)(!1)).push([t.i,"/* loader */\r\n.loader-wrapper {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tmin-height: 150px;\r\n}\r\n\r\n.loader,\r\n.loader:before,\r\n.loader:after {\r\n\tbackground: #ffe170;\r\n\t-webkit-animation: loading 1s infinite ease-in-out;\r\n\tanimation: loading 1s infinite ease-in-out;\r\n\twidth: 1em;\r\n\theight: 4em;\r\n}\r\n\r\n.loader {\r\n\tcolor: #ffe170;\r\n\tposition: relative;\r\n\tfont-size: 11px;\r\n\t-webkit-animation-delay: -0.16s;\r\n\tanimation-delay: -0.16s;\r\n}\r\n\r\n.loader:before,\r\n.loader:after {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tcontent: '';\r\n}\r\n\r\n.loader:before {\r\n\tleft: -1.5em;\r\n\t-webkit-animation-delay: -0.32s;\r\n\tanimation-delay: -0.32s;\r\n}\r\n\r\n.loader:after {\r\n\tleft: 1.5em;\r\n}\r\n\r\n@-webkit-keyframes loading {\r\n\r\n\t0%,\r\n\t80%,\r\n\t100% {\r\n\t\tbox-shadow: 0 0;\r\n\t\theight: 4em;\r\n\t}\r\n\r\n\t40% {\r\n\t\tbox-shadow: 0 -2em;\r\n\t\theight: 5em;\r\n\t}\r\n}\r\n\r\n@keyframes loading {\r\n\r\n\t0%,\r\n\t80%,\r\n\t100% {\r\n\t\tbox-shadow: 0 0;\r\n\t\theight: 4em;\r\n\t}\r\n\r\n\t40% {\r\n\t\tbox-shadow: 0 -2em;\r\n\t\theight: 5em;\r\n\t}\r\n}\r\n\r\n/* loader */",""]),t.exports=n},21:function(t,n){t.exports='<a href="" class=poster> <div class="default-poster image shimmer"> </div> <h5 class=title></h5> <div class=chorizontal> <div class=rating> <div class=rate></div> </div> <h5 class=year></h5> </div> </a>'},22:function(t,n,r){var e=r(23);t.exports="string"==typeof e?e:e.toString()},23:function(t,n,r){(n=r(0)(!1)).push([t.i,".poster {\r\n\twidth: 240px;\r\n\tmargin-right: 10px;\r\n\tbox-sizing: border-box;\r\n\tscroll-snap-align: start;\r\n\toverflow: hidden;\r\n\tflex-shrink: 0;\r\n\tbox-sizing: border-box;\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n\tdisplay: block;\r\n}\r\n\r\n.poster .image,\r\n.poster .default-poster {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\theight: 0;\r\n\tpadding-top: 150%;\r\n\toverflow: hidden;\r\n\tbackground-color: #202124;\r\n}\r\n\r\n.poster .default-poster img {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\tmargin-top: -20px;\r\n\tmargin-left: -20px;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\ttransition: transform 0.5s ease;\r\n}\r\n\r\n.poster .image img {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttransition: transform 0.5s ease;\r\n}\r\n\r\n.poster .image:hover img,\r\n.poster .default-poster:hover img {\r\n\ttransform: scale(1.1);\r\n}\r\n\r\n.poster .title {\r\n\tmargin: 12px 0;\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\ttext-overflow: ellipsis;\r\n\tfont-size: 1.0em;\r\n}\r\n\r\n.poster .year {\r\n\tcolor: #80868B;\r\n\tmargin: 0;\r\n\tmargin-left: 20px;\r\n\tfont-size: 1.0em;\r\n}\r\n\r\n.explore {\r\n\twidth: 240px;\r\n\theight: 360px;\r\n\tcolor: #FFE170;\r\n\tbackground-color: #262626;\r\n\tscroll-snap-align: start;\r\n}\r\n\r\n.poster-grid {\r\n\twidth: 100%;\r\n\tmax-width: 100%;\r\n\tpadding-right: 10px;\r\n\tmargin-right: 0;\r\n\tmargin-bottom: 40px;\r\n}\r\n\r\n/* rating */\r\n.rating {\r\n\tdisplay: inline-flex;\r\n\tflex-direction: row;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.rating img {\r\n\twidth: 14px;\r\n\theight: 14px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.rating div {\r\n\tcolor: #FFE170;\r\n\tfont-weight: 700;\r\n}\r\n\r\n.chorizontal {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tflex-direction: row;\r\n}\r\n\r\n/* Shimmer */\r\n.shimmer {\r\n\tbackground-color: #202124;\r\n\tbackground-image: linear-gradient(to right, #202124 0%, rgba(78, 62, 5, 0.25) 20%, rgba(78, 64, 11, 0.45) 40%, #202124 100%);\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tanimation-duration: 1s;\r\n\tanimation-fill-mode: forwards;\r\n\tanimation-iteration-count: infinite;\r\n\tanimation-name: placeholderShimmer;\r\n\tanimation-timing-function: linear;\r\n}\r\n\r\n@keyframes placeholderShimmer {\r\n\t0% {\r\n\t\tbackground-position: -468px 0;\r\n\t}\r\n\r\n\t100% {\r\n\t\tbackground-position: 468px 0;\r\n\t}\r\n}\r\n\r\n\r\n@media only screen and (max-width: 1024px) {\r\n\t.poster {\r\n\t\twidth: 200px;\r\n\t}\r\n\r\n\t.explore {\r\n\t\twidth: 200px;\r\n\t\theight: 300px;\r\n\t}\r\n}\r\n\r\n\r\n@media only screen and (max-width: 480px) {\r\n\t.poster {\r\n\t\twidth: 180px;\r\n\t}\r\n\r\n\t.explore {\r\n\t\twidth: 180px;\r\n\t\theight: 270px;\r\n\t}\r\n\r\n}",""]),t.exports=n},24:function(t,n){t.exports="<div class=gallery> <div class=pad></div> <div class=not-found></div> <div class=pad></div> </div>"},25:function(t,n,r){var e=r(26);t.exports="string"==typeof e?e:e.toString()},26:function(t,n,r){(n=r(0)(!1)).push([t.i,".movies {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tpadding: 0 50px;\r\n}\r\n\r\n.movies > poster-item {\r\n\twidth: 16.666%;\r\n}\r\n\r\n.gallery {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\toverflow-x: scroll;\r\n\twhite-space: nowrap;\r\n\tscroll-snap-type: x mandatory;\r\n\tscroll-padding: 50px;\r\n\t-ms-overflow-style: none;\r\n}\r\n\r\n.gallery::-webkit-scrollbar {\r\n\tdisplay: none;\r\n}\r\n\r\n.gallery .pad {\r\n\tflex-shrink: 0;\r\n\twidth: 50px;\r\n}\r\n\r\n@media only screen and (max-width: 1500px) {\r\n\t.movies > poster-item {\r\n\t\twidth: 20%;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n\t.gallery {\r\n\t\tscroll-padding: 30px;\r\n\t}\r\n\r\n\t.gallery .pad {\r\n\t\twidth: 30px;\r\n\t}\r\n\r\n\t.movies {\r\n\t\tpadding: 0 30px;\r\n\t}\r\n\r\n}\r\n\r\n@media only screen and (max-width: 640px) {\r\n\t.gallery {\r\n\t\tscroll-padding: 20px;\r\n\t}\r\n\r\n\t.gallery .pad {\r\n\t\twidth: 20px;\r\n\t}\r\n\r\n\t.movies {\r\n\t\tpadding:  0 20px;\r\n\t}\r\n\r\n\t.movies > poster-item {\r\n\t\twidth: 33.333333%;\r\n\t}\r\n}\r\n@media only screen and (max-width: 480px) {\r\n\t.movies > poster-item {\r\n\t\twidth: 50%;\r\n\t}\r\n}",""]),t.exports=n},28:function(t,n,r){"use strict";var e=r(10),o=r(16),i=r.n(o),a=r(17),c=r.n(a);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function s(t,n){return!n||"object"!==u(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function p(t){var n="function"==typeof Map?new Map:void 0;return(p=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return f(t,arguments,h(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),y(e,t)})(t)}function f(t,n,r){return(f=d()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var o=new(Function.bind.apply(t,e));return r&&y(o,r.prototype),o}).apply(null,arguments)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function y(t,n){return(y=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&y(t,n)}(p,t);var n,r,o,a,u=(n=p,function(){var t,r=h(n);if(d()){var e=h(this).constructor;t=Reflect.construct(r,arguments,e)}else t=r.apply(this,arguments);return s(this,t)});function p(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(t=u.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return r=p,(o=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.appendChild(this.createElem())}},{key:"createElem",value:function(){return Object(e.a)(i.a,c.a)}}])&&l(r.prototype,o),a&&l(r,a),p}(p(HTMLElement));customElements.define("loader-item",m);r(12);var v=r(24),b=r.n(v),g=r(25),w=r.n(g);function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function S(t,n){return!n||"object"!==x(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function _(t){var n="function"==typeof Map?new Map:void 0;return(_=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return k(t,arguments,M(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),j(e,t)})(t)}function k(t,n,r){return(k=E()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var o=new(Function.bind.apply(t,e));return r&&j(o,r.prototype),o}).apply(null,arguments)}function E(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function j(t,n){return(j=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var R=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&j(t,n)}(c,t);var n,r,o,i,a=(n=c,function(){var t,r=M(n);if(E()){var e=M(this).constructor;t=Reflect.construct(r,arguments,e)}else t=r.apply(this,arguments);return S(this,t)});function c(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return r=c,(o=[{key:"connectedCallback",value:function(){this._data=null,this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML="",this._data?this.shadowDOM.appendChild(this.createElem()):this.shadowDOM.appendChild(this.createLoader())}},{key:"createLoader",value:function(){return document.createElement("loader-item")}},{key:"createElem",value:function(){var t=this,n=Object(e.a)(b.a,w.a),r=n.querySelector(".gallery"),o=r.querySelector(".pad");this._grid?(r.className="movies",o.parentNode.removeChild(o)):r.className="gallery";var i=r.querySelector(".pad:nth-child(2)"),a=r.querySelector(".not-found");if(this._data.length)this._data.map((function(n){var e=document.createElement("poster-item");e.grid=!!t._grid,e.poster=n,i?r.insertBefore(e,i):r.appendChild(e)}));else{var c=document.createElement("p");c.innerText="Nothing found...",a.appendChild(c)}return n}},{key:"grid",set:function(t){this._grid=t}},{key:"gallery",set:function(t){this._data=t,this.render()}}])&&O(r.prototype,o),i&&O(r,i),c}(_(HTMLElement));customElements.define("gallery-list",R)}}]);