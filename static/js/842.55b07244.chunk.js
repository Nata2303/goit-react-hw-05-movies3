"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{623:function(e,r,t){var n=t(861),a=t(757),c=t.n(a),u=t(243),i="7f4ba582d55c3d33bf97672c5d45e075",o={getTrendingMovies:function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i),e.next=4,u.Z.get(r);case 4:return t=e.sent,e.abrupt("return",t.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),searchMovies:function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(r),e.next=4,u.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),getMovieDetails:function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(i),e.next=4,u.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),getMovieCredits:function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(i),e.next=4,u.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),getMovieReviews:function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(i),e.next=4,u.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()};r.Z=o},842:function(e,r,t){t.r(r);var n=t(861),a=t(439),c=t(757),u=t.n(c),i=t(791),o=t(87),s=t(623),p=t(154),v=t(184);r.default=function(){var e=(0,i.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.getTrendingMovies();case 2:r=e.sent,c(r.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{className:p.Z.trending,children:"Trending Movies"}),(0,v.jsx)("ul",{children:t.map((function(e){return(0,v.jsx)("li",{className:p.Z.movie,children:(0,v.jsx)(o.rU,{className:p.Z.link,to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=842.55b07244.chunk.js.map