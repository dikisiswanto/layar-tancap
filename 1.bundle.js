(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(e,t,n){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=document.createElement("template");return n.innerHTML="\n\t\t<style>\n\t\t".concat(t,"\n\t\t</style>\n\t\t").concat(e,"\n\t"),document.importNode(n.content,!0)}},11:function(e,t,n){"use strict";n.d(t,"h",(function(){return u})),n.d(t,"i",(function(){return c})),n.d(t,"f",(function(){return p})),n.d(t,"g",(function(){return d})),n.d(t,"e",(function(){return h})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return w})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return x}));var r=n(9),o=n.n(r),a=n(14);function i(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){i=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw o}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(){return{method:"GET",headers:{Accept:"application/json"}}}function c(e,t){null===t&&(t=[]),t.push({key:"api_key",val:a.e}),t.push({key:"include_adult",val:!1}),t.push({key:"include_video",val:!1});var n,r=[],o=i(t);try{for(o.s();!(n=o.n()).done;){var s=n.value,u="".concat(s.key,"=").concat(s.val);r.push(u)}}catch(e){o.e(e)}finally{o.f()}return"".concat(a.a+e,"?").concat(r.join("&"))}function l(e){return null===e?null:a.c+e}function f(e){return""===e||null===e?null:o()(e).year()}function p(){return o()().toDate()}function d(){return o()().subtract(1,"months")}function h(e){return null!==e?o()(e).format("YYYY-MM-DD"):""}function y(e){if(null===e)return"?";var t=Math.floor(e/60),n=e%60;return 0===n?"".concat(t,"h"):"".concat(t,"h ").concat(n,"m")}function m(e,t,n){return null===e||""===e||0===e||0===e.length?t:n}function v(e){var t,n="",r="?",o=i(e);try{for(o.s();!(t=o.n()).done;){var a=t.value;if("Director"===a.job){n=a.id,r=a.name;break}}}catch(e){o.e(e)}finally{o.f()}return{id:n,name:r}}function g(e){if(""===e)return"0";var t="";return t="number"==typeof e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):parseFloat(e.replace(/\,/g,"")).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),"$".concat(t)}function j(e){if(null===e||0===e.length)return"";if(e.length<2)return"Science Fiction"===e[0].name?"Sci-Fi":e[0].name;var t="Science Fiction"===e[0].name?"Sci-Fi":e[0].name,n="Science Fiction"===e[1].name?"Sci-Fi":e[1].name;return"".concat(t,"/").concat(n)}function b(e){var t,n,r;return e.external_ids.homepage=e.homepage||null,{id:e.id,title:e.title,overview:e.overview,poster:l(e.poster_path),rate:e.vote_average,vote:e.vote_count,genres:e.genres,shortGenre:j(e.genres),release:(r=e.release_date,null!==r?o()(r).format("D MMMM YYYY"):""),releaseYear:f(e.release_date),productions:(t=e.production_companies,n=[],t.map((function(e){return n.push(e.name)})),n.join(", ")),budget:m(e.budget,"?",g(e.budget)),revenue:m(e.revenue,"?",g(e.revenue)),duration:y(e.runtime),director:v(e.credits.crew).name}}function w(e){return e%1==0?"".concat(e.toString(),".0"):e}function k(e){var t,n=[],r=i(e);try{for(r.s();!(t=r.n()).done;){var o=t.value,a={mediaType:"movie",id:o.id,title:o.title,poster:l(o.poster_path),rate:o.vote_average,releaseYear:f(o.release_date)};n.push(a)}}catch(e){r.e(e)}finally{r.f()}return n}function x(e){var t,n=[],r=i(e);try{for(r.s();!(t=r.n()).done;){var o=t.value,a=o.media_type;if("movie"===a){var s={mediaType:a,id:o.id,title:o.title,poster:l(o.poster_path),rate:o.vote_average,releaseYear:f(o.release_date)};n.push(s)}}}catch(e){r.e(e)}finally{r.f()}return n}},13:function(e,t,n){"use strict";var r=n(14),o=n(11);function a(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t,n,r,o,a,i){try{var s=e[a](i),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){s(a,r,o,i,u,"next",e)}function u(e){s(a,r,o,i,u,"throw",e)}i(void 0)}))}}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i,s,l,f,p,d,h,y,m;return t=e,(n=[{key:"getTrending",value:(m=u(regeneratorRuntime.mark((function e(t){var n,r,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(o.i("/trending/movie/day",null),o.h());case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent,n.ok){e.next=10;break}return this.handleError(),e.abrupt("return");case 10:a=r.results,i=o.c(a),t(i),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0),this.handleError();case 19:case"end":return e.stop()}}),e,this,[[0,15]])}))),function(e){return m.apply(this,arguments)})},{key:"discover",value:(y=u(regeneratorRuntime.mark((function e(t,n){var r,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(o.i("/discover/movie",t),o.h());case 3:return r=e.sent,e.next=6,r.json();case 6:if(a=e.sent,r.ok){e.next=10;break}return this.handleError(),e.abrupt("return");case 10:i=a.results,i=o.c(i),n(i),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0),this.handleError();case 19:case"end":return e.stop()}}),e,this,[[0,15]])}))),function(e,t){return y.apply(this,arguments)})},{key:"getIndonesianMovies",value:(h=u(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[{key:"region",val:"ID"},{key:"with_original_language",val:"id"},{key:"sort_by",val:"popularity.desc"},{key:"page",val:1}],this.discover(n,t);case 2:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)})},{key:"getShowing",value:(d=u(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[{key:"primary_release_date.gte",val:o.e(o.g())},{key:"primary_release_date.lte",val:o.e(o.f())},{key:"sort_by",val:"popularity.desc"},{key:"page",val:1}],this.discover(n,t);case 2:case"end":return e.stop()}}),e,this)}))),function(e){return d.apply(this,arguments)})},{key:"getUpcomingMovies",value:(p=u(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[{key:"primary_release_date.gte",val:o.e(o.f())},{key:"sort_by",val:"popularity.desc"},{key:"page",val:1}],this.discover(n,t);case 2:case"end":return e.stop()}}),e,this)}))),function(e){return p.apply(this,arguments)})},{key:"getMoviesByGenre",value:(f=u(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[{key:"with_genres",val:t},{key:"sort_by",val:"popularity.desc"},{key:"page",val:1}],this.discover(r,n);case 2:case"end":return e.stop()}}),e,this)}))),function(e,t){return f.apply(this,arguments)})},{key:"search",value:(l=u(regeneratorRuntime.mark((function e(t,n){var r,a,i,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=[{key:"query",val:t},{key:"page",val:1}],e.next=4,fetch(o.i("/search/multi",r),o.h());case 4:return a=e.sent,e.next=7,a.json();case 7:if(i=e.sent,a.ok){e.next=11;break}return this.handleError(),e.abrupt("return");case 11:s=o.d(i.results),n(s),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0),this.handleError();case 19:case"end":return e.stop()}}),e,this,[[0,15]])}))),function(e,t){return l.apply(this,arguments)})},{key:"getMovie",value:(s=u(regeneratorRuntime.mark((function e(t,n){var r,a,i,s,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="/movie/".concat(t),a=[{key:"append_to_response",val:"external_ids,credits,videos,images"}],e.next=5,fetch(o.i(r,a),o.h());case 5:return i=e.sent,e.next=8,i.json();case 8:if(s=e.sent,i.ok){e.next=12;break}return this.handleError(),e.abrupt("return");case 12:u=o.b(s),n(u),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0),this.handleError();case 20:case"end":return e.stop()}}),e,this,[[0,16]])}))),function(e,t){return s.apply(this,arguments)})},{key:"getGenreById",value:function(e){var t,n=a(r.b);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(e===o.id.toString())return o.name}}catch(e){n.e(e)}finally{n.f()}return"-"}},{key:"handleError",value:function(){console.log("Oops, something went wrong. Please try again.")}}])&&c(t.prototype,n),i&&c(t,i),e}();t.a=l},14:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return s}));var r="https://api.themoviedb.org/3",o="https://image.tmdb.org/t/p/w500",a="https://image.tmdb.org/t/p/h632",i="722af6d6186fe5b159504e8123359a35",s=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Sci-Fi"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]},15:function(e,t,n){"use strict";var r=n(10),o=n(164),a=n.n(o),i=n(165),s=n.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t="function"==typeof Map?new Map:void 0;return(f=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return p(e,arguments,y(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),h(r,e)})(e)}function p(e,t,n){return(p=d()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&h(o,n.prototype),o}).apply(null,arguments)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(f,e);var t,n,o,i,u=(t=f,function(){var e,n=y(t);if(d()){var r=y(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return l(this,e)});function f(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(e=u.call(this)).shadowDOM=e.attachShadow({mode:"open"}),e}return n=f,(o=[{key:"connectedCallback",value:function(){this._title="Loading...",this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML="",this.shadowDOM.appendChild(this.createElem())}},{key:"createElem",value:function(){var e=Object(r.a)(a.a,s.a);return e.querySelector("h3").innerText=this._title,e}},{key:"title",set:function(e){this._title=e,this.render()}}])&&c(n.prototype,o),i&&c(n,i),f}(f(HTMLElement));customElements.define("title-bar",m)},156:function(e,t,n){var r={"./af":29,"./af.js":29,"./ar":30,"./ar-dz":31,"./ar-dz.js":31,"./ar-kw":32,"./ar-kw.js":32,"./ar-ly":33,"./ar-ly.js":33,"./ar-ma":34,"./ar-ma.js":34,"./ar-sa":35,"./ar-sa.js":35,"./ar-tn":36,"./ar-tn.js":36,"./ar.js":30,"./az":37,"./az.js":37,"./be":38,"./be.js":38,"./bg":39,"./bg.js":39,"./bm":40,"./bm.js":40,"./bn":41,"./bn.js":41,"./bo":42,"./bo.js":42,"./br":43,"./br.js":43,"./bs":44,"./bs.js":44,"./ca":45,"./ca.js":45,"./cs":46,"./cs.js":46,"./cv":47,"./cv.js":47,"./cy":48,"./cy.js":48,"./da":49,"./da.js":49,"./de":50,"./de-at":51,"./de-at.js":51,"./de-ch":52,"./de-ch.js":52,"./de.js":50,"./dv":53,"./dv.js":53,"./el":54,"./el.js":54,"./en-SG":55,"./en-SG.js":55,"./en-au":56,"./en-au.js":56,"./en-ca":57,"./en-ca.js":57,"./en-gb":58,"./en-gb.js":58,"./en-ie":59,"./en-ie.js":59,"./en-il":60,"./en-il.js":60,"./en-nz":61,"./en-nz.js":61,"./eo":62,"./eo.js":62,"./es":63,"./es-do":64,"./es-do.js":64,"./es-us":65,"./es-us.js":65,"./es.js":63,"./et":66,"./et.js":66,"./eu":67,"./eu.js":67,"./fa":68,"./fa.js":68,"./fi":69,"./fi.js":69,"./fo":70,"./fo.js":70,"./fr":71,"./fr-ca":72,"./fr-ca.js":72,"./fr-ch":73,"./fr-ch.js":73,"./fr.js":71,"./fy":74,"./fy.js":74,"./ga":75,"./ga.js":75,"./gd":76,"./gd.js":76,"./gl":77,"./gl.js":77,"./gom-latn":78,"./gom-latn.js":78,"./gu":79,"./gu.js":79,"./he":80,"./he.js":80,"./hi":81,"./hi.js":81,"./hr":82,"./hr.js":82,"./hu":83,"./hu.js":83,"./hy-am":84,"./hy-am.js":84,"./id":85,"./id.js":85,"./is":86,"./is.js":86,"./it":87,"./it-ch":88,"./it-ch.js":88,"./it.js":87,"./ja":89,"./ja.js":89,"./jv":90,"./jv.js":90,"./ka":91,"./ka.js":91,"./kk":92,"./kk.js":92,"./km":93,"./km.js":93,"./kn":94,"./kn.js":94,"./ko":95,"./ko.js":95,"./ku":96,"./ku.js":96,"./ky":97,"./ky.js":97,"./lb":98,"./lb.js":98,"./lo":99,"./lo.js":99,"./lt":100,"./lt.js":100,"./lv":101,"./lv.js":101,"./me":102,"./me.js":102,"./mi":103,"./mi.js":103,"./mk":104,"./mk.js":104,"./ml":105,"./ml.js":105,"./mn":106,"./mn.js":106,"./mr":107,"./mr.js":107,"./ms":108,"./ms-my":109,"./ms-my.js":109,"./ms.js":108,"./mt":110,"./mt.js":110,"./my":111,"./my.js":111,"./nb":112,"./nb.js":112,"./ne":113,"./ne.js":113,"./nl":114,"./nl-be":115,"./nl-be.js":115,"./nl.js":114,"./nn":116,"./nn.js":116,"./pa-in":117,"./pa-in.js":117,"./pl":118,"./pl.js":118,"./pt":119,"./pt-br":120,"./pt-br.js":120,"./pt.js":119,"./ro":121,"./ro.js":121,"./ru":122,"./ru.js":122,"./sd":123,"./sd.js":123,"./se":124,"./se.js":124,"./si":125,"./si.js":125,"./sk":126,"./sk.js":126,"./sl":127,"./sl.js":127,"./sq":128,"./sq.js":128,"./sr":129,"./sr-cyrl":130,"./sr-cyrl.js":130,"./sr.js":129,"./ss":131,"./ss.js":131,"./sv":132,"./sv.js":132,"./sw":133,"./sw.js":133,"./ta":134,"./ta.js":134,"./te":135,"./te.js":135,"./tet":136,"./tet.js":136,"./tg":137,"./tg.js":137,"./th":138,"./th.js":138,"./tl-ph":139,"./tl-ph.js":139,"./tlh":140,"./tlh.js":140,"./tr":141,"./tr.js":141,"./tzl":142,"./tzl.js":142,"./tzm":143,"./tzm-latn":144,"./tzm-latn.js":144,"./tzm.js":143,"./ug-cn":145,"./ug-cn.js":145,"./uk":146,"./uk.js":146,"./ur":147,"./ur.js":147,"./uz":148,"./uz-latn":149,"./uz-latn.js":149,"./uz.js":148,"./vi":150,"./vi.js":150,"./x-pseudo":151,"./x-pseudo.js":151,"./yo":152,"./yo.js":152,"./zh-cn":153,"./zh-cn.js":153,"./zh-hk":154,"./zh-hk.js":154,"./zh-tw":155,"./zh-tw.js":155};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=156},164:function(e,t){e.exports="<div class=title-section> <h3></h3> </div>"},165:function(e,t,n){var r=n(166);e.exports="string"==typeof r?r:r.toString()},166:function(e,t,n){(t=n(0)(!1)).push([e.i,".title-section {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: flex-end;\r\n\tmargin: 50px 0 20px 50px;\r\n}\r\n\r\n.title-section h3 {\r\n\tmargin-right: 10px;\r\n\tfont-size: 1.6em;\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n\t.title-section {\r\n\t\tmargin: 50px 0 20px 30px;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 640px) {\r\n\t.title-section {\r\n\t\tmargin: 50px 0 20px 20px;\r\n\t}\r\n}",""]),e.exports=t},167:function(e,t){e.exports='<footer> <p>&copy; Diki Siswanto. Design adopted from <a href=https://movion.hiwijaya.com target=_blank rel="noopener noreferrer">Movion</a></p> <p>Powered by <a class=tmdb href=https://www.themoviedb.org/ target=_blank rel="noopener noreferrer">TMDb</a></p> </footer>'},168:function(e,t,n){var r=n(169);e.exports="string"==typeof r?r:r.toString()},169:function(e,t,n){(t=n(0)(!1)).push([e.i,"/* Footer */\r\nfooter {\r\n\tmargin: 100px 50px 50px 50px;\r\n\tcolor: #80868B;\r\n}\r\n\r\nfooter a {\r\n\tfont-weight: 700;\r\n\tcolor: #80868B;\r\n\ttext-decoration: none;\r\n}\r\n\r\nfooter .tmdb {\r\n\tcolor: #01d277;\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n\tfooter {\r\n\t\tmargin: 100px 30px 80px 30px;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 640px) {\r\n\tfooter {\r\n\t\tmargin: 100px 20px 70px 20px;\r\n\t}\r\n}",""]),e.exports=t},19:function(e,t){e.exports="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FFF' stroke-width='1' stroke-linecap='round' stroke-linejoin='round' class='feather feather-image'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'%3E%3C/circle%3E%3Cpolyline points='21 15 16 10 5 21'%3E%3C/polyline%3E%3C/svg%3E"},20:function(e,t){e.exports="data:image/svg+xml,%3C?xml version='1.0'?%3E %3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 473.486 473.486' style='enable-background:new 0 0 473.486 473.486;' xml:space='preserve' width='512px' height='512px'%3E%3Cg%3E%3Cpolygon points='473.486,182.079 310.615,157.952 235.904,11.23 162.628,158.675 0,184.389 117.584,299.641 91.786,462.257 237.732,386.042 384.416,460.829 357.032,298.473 ' data-original='%23000000' class='active-path' data-old_color='%23000000' fill='%23FFE170'/%3E%3C/g%3E %3C/svg%3E"},27:function(e,t,n){"use strict";var r=n(10),o=n(167),a=n.n(o),i=n(168),s=n.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t="function"==typeof Map?new Map:void 0;return(f=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return p(e,arguments,y(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),h(r,e)})(e)}function p(e,t,n){return(p=d()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&h(o,n.prototype),o}).apply(null,arguments)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(f,e);var t,n,o,i,u=(t=f,function(){var e,n=y(t);if(d()){var r=y(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return l(this,e)});function f(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(e=u.call(this)).shadowDOM=e.attachShadow({mode:"open"}),e}return n=f,(o=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.appendChild(this.createElem())}},{key:"createElem",value:function(){return Object(r.a)(a.a,s.a)}}])&&c(n.prototype,o),i&&c(n,i),f}(f(HTMLElement));customElements.define("footer-area",m)}}]);