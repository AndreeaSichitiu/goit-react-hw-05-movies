"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{2168:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(9439),a=t(2791),u=t(7689),c=t(1256),i="Reviews_review__sHbuN",s="Reviews_reviewContent__oX1fD",o="Reviews_reviewContainer__tMkPK",f=t(184);function p(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],p=n[1],v=(0,u.UO)().movieId;return(0,a.useEffect)((function(){(0,c.Bt)(v).then((function(e){var n=e.results;p(n)}))}),[v]),(0,f.jsx)(f.Fragment,{children:t.length>0?t.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,f.jsxs)("ul",{className:o,children:[(0,f.jsx)("li",{children:(0,f.jsxs)("b",{className:i,children:[" Author: ",t]})}),(0,f.jsx)("li",{className:s,children:r})]},n)})):(0,f.jsx)("p",{className:i,children:"Sorry, there is no review for this movie"})})}},1256:function(e,n,t){t.d(n,{Bt:function(){return v},Tg:function(){return s},bI:function(){return o},jC:function(){return f},y:function(){return p}});var r=t(5861),a=t(7757),u=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="dab4c4a62a8aa2e980834751b172c3fb",s=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.4daa223c.chunk.js.map