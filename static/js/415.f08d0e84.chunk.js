"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{854:function(t,e,n){n.d(e,{Z:function(){return i}});n(2791);var r=n(3920),a=n(184);function i(t){var e=t.isLoading;return(0,a.jsx)(r.Rf,{visible:e,color:"#4fa94d",width:"100",ariaLabel:"falling-lines-loading"})}},1510:function(t,e,n){n.d(e,{Z:function(){return s}});n(2791);var r=n(7689),a=n(1087),i=n(8820),c={movieList:"MovieList_movieList__uFrOZ",movieCard:"MovieList_movieCard__+xH2O",movieCardImg:"MovieList_movieCardImg__Tpw-r",link:"MovieList_link__+cn-g"},u=n(184);function s(t){var e=t.movies,n=(0,r.TH)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("ul",{className:c.movieList,children:e.map((function(t){var e=t.id,r=t.title,s=t.poster_path;return(0,u.jsx)("li",{className:c.movieListItem,children:(0,u.jsx)(a.rU,{className:c.link,to:"/movies/".concat(e),state:{from:n},children:(0,u.jsxs)("div",{className:c.movieCard,children:[s?(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(s),alt:r,className:c.movieCardImg}):(0,u.jsx)(i.ofX,{size:200}),r]})})},e)}))}),(0,u.jsx)(r.j3,{})]})}},2787:function(t,e,n){n.d(e,{Z:function(){return i}});n(2791);var r="Title_mainTitle__hv-ZC",a=n(184);function i(t){var e=t.title;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("h2",{className:r,children:e})})}},1256:function(t,e,n){n.d(e,{Bt:function(){return l},Tg:function(){return s},bI:function(){return o},jC:function(){return f},y:function(){return v}});var r=n(5861),a=n(7757),i=n.n(a),c=n(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="dab4c4a62a8aa2e980834751b172c3fb",s=function(){var t=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day?api_key=".concat(u));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?api_key=".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},5415:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(9439),a=n(2791),i=n(1256),c=n(1510),u=n(2787),s=n(854),o=n(184);function f(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],f=e[1],v=(0,a.useState)(!1),l=(0,r.Z)(v,2),p=l[0],d=l[1];return(0,a.useEffect)((function(){d(!0),(0,i.Tg)().then((function(t){var e=t.results;f(e)})).finally((function(){d(!1)}))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.Z,{title:"Trending today"}),(0,o.jsx)(c.Z,{movies:n}),p&&(0,o.jsx)(s.Z,{})]})}}}]);
//# sourceMappingURL=415.f08d0e84.chunk.js.map