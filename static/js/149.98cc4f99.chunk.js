"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[149],{854:function(e,t,n){n.d(t,{Z:function(){return i}});n(791);var r=n(920),a=n(184);function i(e){var t=e.isLoading;return(0,a.jsx)(r.Rf,{visible:t,color:"#4fa94d",width:"100",ariaLabel:"falling-lines-loading"})}},510:function(e,t,n){n.d(t,{Z:function(){return s}});n(791);var r=n(689),a=n(87),i=n(820),u={movieList:"MovieList_movieList__uFrOZ",movieCard:"MovieList_movieCard__+xH2O",movieCardImg:"MovieList_movieCardImg__Tpw-r",link:"MovieList_link__+cn-g"},c=n(184);function s(e){var t=e.movies,n=(0,r.TH)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("ul",{className:u.movieList,children:t.map((function(e){var t=e.id,r=e.title,s=e.poster_path;return(0,c.jsx)("li",{className:u.movieListItem,children:(0,c.jsx)(a.rU,{className:u.link,to:"/movies/".concat(t),state:{from:n},children:(0,c.jsxs)("div",{className:u.movieCard,children:[s?(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(s),alt:r,className:u.movieCardImg}):(0,c.jsx)(i.ofX,{size:200}),r]})})},t)}))}),(0,c.jsx)(r.j3,{})]})}},787:function(e,t,n){n.d(t,{Z:function(){return i}});n(791);var r="Title_mainTitle__hv-ZC",a=n(184);function i(e){var t=e.title;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("h2",{className:r,children:t})})}},256:function(e,t,n){n.d(t,{Bt:function(){return v},Tg:function(){return s},bI:function(){return o},jC:function(){return f},y:function(){return l}});var r=n(861),a=n(757),i=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="dab4c4a62a8aa2e980834751b172c3fb",s=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(c));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},149:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(439),a=n(791),i=n(87),u=n(256),c=n(820),s=n(184);function o(e){var t=e.onSearch,n=(0,a.useState)(""),i=(0,r.Z)(n,2),u=i[0],o=i[1];return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!u)return console.error("Please enter a sometings");t(u),o("")},children:[(0,s.jsx)("input",{type:"text",placeholder:"Enter for search movies",name:"query",value:u,onChange:function(e){o(e.target.value.toLowerCase())}}),(0,s.jsx)("button",{type:"submit",children:(0,s.jsx)(c.RB5,{size:"15"})})]})})}var f=n(510),l=n(787),v=n(854);function m(){var e,t=(0,i.lr)(),n=(0,r.Z)(t,2),c=n[0],m=n[1],p=(0,a.useState)([]),d=(0,r.Z)(p,2),h=d[0],g=d[1],x=(0,a.useState)(!1),_=(0,r.Z)(x,2),j=_[0],Z=_[1],b=(0,a.useState)(null),y=(0,r.Z)(b,2),k=y[0],w=y[1],C=null!==(e=c.get("query"))&&void 0!==e?e:"";return(0,a.useEffect)((function(){C&&(Z(!0),(0,u.bI)(C).then((function(e){var t=e.results;g(t)})).catch((function(e){return w(e)})).finally((function(){return Z(!1)})))}),[C]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{title:"Search for your movie"}),k&&(0,s.jsx)("h2",{children:k.message}),(0,s.jsx)(o,{value:C,onSearch:function(e){m(""!==e?{query:e}:{})}}),h.length>0&&(0,s.jsx)(f.Z,{movies:h}),j&&(0,s.jsx)(v.Z,{})]})}}}]);
//# sourceMappingURL=149.98cc4f99.chunk.js.map