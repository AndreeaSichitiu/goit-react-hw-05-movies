"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(439),a=n(791),c=n(689),u=n(256),s=n(820),i="Cast_castContainer__NIXqj",o="Cast_cast__m5y0R",p="Cast_castImg__T4WbF",f=n(184);function d(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],d=e[1],v=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.y)(v).then((function(t){var e=t.cast;d(e)}))}),[v]),(0,f.jsx)("div",{className:i,children:n.length>0?n.map((function(t){var e=t.id,n=t.profile_path,r=t.character,a=t.name;return(0,f.jsxs)("div",{children:[n?(0,f.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w200".concat(n),alt:a}):(0,f.jsx)(s.ofX,{size:200}),(0,f.jsx)("p",{className:o,children:a}),(0,f.jsxs)("p",{className:o,children:["Character : ",r.substr(0,9)]})]},e)})):(0,f.jsx)("p",{children:" Sorry, there are no information!"})})}},256:function(t,e,n){n.d(e,{Bt:function(){return d},Tg:function(){return i},bI:function(){return o},jC:function(){return p},y:function(){return f}});var r=n(861),a=n(757),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="dab4c4a62a8aa2e980834751b172c3fb",i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.03bdef35.chunk.js.map