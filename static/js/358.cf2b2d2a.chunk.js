"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[358],{256:function(e,n,r){r.d(n,{Bt:function(){return f},Tg:function(){return s},bI:function(){return o},jC:function(){return p},y:function(){return d}});var t=r(861),a=r(757),c=r.n(a),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="dab4c4a62a8aa2e980834751b172c3fb",s=function(){var e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},358:function(e,n,r){r.r(n),r.d(n,{default:function(){return d}});var t=r(439),a=r(791),c=r(689),u=r(87),i=r(256),s=r(853),o=r(184);function p(e){var n=e.to;return(0,o.jsx)(u.rU,{to:n,children:(0,o.jsxs)("button",{children:[(0,o.jsx)(s.aiR,{}),"Back"]})})}var d=function(){var e,n,r=(0,a.useState)({}),s=(0,t.Z)(r,2),d=s[0],f=s[1],l=(0,c.UO)().movieId,h=null!==(e=null===(n=(0,c.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";(0,a.useEffect)((function(){(0,i.jC)(l).then(f)}),[l]);var v=d.poster_path,x=d.title,j=d.genres,g=d.overview,m=d.vote_average,w=d.release_date;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p,{to:h}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(v),alt:x})}),(0,o.jsxs)("div",{children:[x&&(0,o.jsxs)("h2",{children:[x," ",w.substr(0,4)]}),(0,o.jsxs)("p",{children:["User Score: ",m&&Math.floor(10*m),"%"]}),(0,o.jsx)("h2",{children:"Overview"}),(0,o.jsx)("p",{children:g}),(0,o.jsx)("h2",{children:"Genres"}),j&&(0,o.jsx)("p",{children:j.map((function(e){return e.name})).join(", ")})]})]}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("h3",{children:"Additional information"}),(0,o.jsx)("li",{children:(0,o.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]}),(0,o.jsx)(c.j3,{})]})}}}]);
//# sourceMappingURL=358.cf2b2d2a.chunk.js.map