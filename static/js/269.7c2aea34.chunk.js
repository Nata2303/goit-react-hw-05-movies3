"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[269],{623:function(e,r,t){var n=t(861),a=t(757),c=t.n(a),o=t(243),u="7f4ba582d55c3d33bf97672c5d45e075",s={getTrendingMovies:function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u),e.next=4,o.Z.get(r);case 4:return t=e.sent,e.abrupt("return",t.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),searchMovies:function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(r),e.next=4,o.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),getMovieDetails:function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(u),e.next=4,o.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),getMovieCredits:function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(u),e.next=4,o.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),getMovieReviews:function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(u),e.next=4,o.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()};r.Z=s},269:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(861),a=t(439),c=t(757),o=t.n(c),u=t(791),s=t(689),i=t(87),p=t(623),v="movies_movie__1jlAK",h="movies_search__hkYQ7",l=t(184),f=function(){var e=(0,s.s0)(),r=(0,u.useState)(""),t=(0,a.Z)(r,2),c=t[0],f=t[1],d=(0,u.useState)([]),m=(0,a.Z)(d,2),g=m[0],b=m[1],w=(0,u.useCallback)(function(){var e=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Z.searchMovies(r);case 3:t=e.sent,b(t.results),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),b([]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),[]),x=(0,u.useCallback)((function(r){r.preventDefault(),w(c),e("?query=".concat(c))}),[c,e,w]);return(0,u.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("query");e&&(f(e),w(e))}),[w]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Search Movies"}),(0,l.jsxs)("form",{onSubmit:x,children:[(0,l.jsx)("input",{type:"text",value:c,onChange:function(e){return f(e.target.value)},placeholder:"Enter movie title..."}),(0,l.jsx)("button",{className:h,type:"submit",children:"Search"})]}),(0,l.jsx)("ul",{children:g.map((function(e){return(0,l.jsx)("li",{className:v,children:(0,l.jsx)(i.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=269.7c2aea34.chunk.js.map