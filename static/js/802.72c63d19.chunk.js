"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[802],{623:function(e,t,r){var n=r(861),a=r(757),i=r.n(a),c=r(243),o="7f4ba582d55c3d33bf97672c5d45e075",s={getTrendingMovies:function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o),e.next=4,c.Z.get(t);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),searchMovies:function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(t),e.next=4,c.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),getMovieDetails:function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o),e.next=4,c.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),getMovieCredits:function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o),e.next=4,c.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),getMovieReviews:function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o),e.next=4,c.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()};t.Z=s},802:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(861),a=r(439),i=r(757),c=r.n(i),o=r(791),s=r(689),u=r(87),v=r(623),l={cardfilm:"movieDetails_cardfilm__lC847",details:"movieDetails_details__uqRj1",link:"movieDetails_link__-Uslt",goBackButton:"movieDetails_goBackButton__E05j-"},p=r(184),m=function(){var e,t=(0,s.TH)(),r=(0,s.s0)(),i=(0,s.UO)().movieId,m=(0,o.useState)(null),d=(0,a.Z)(m,2),f=d[0],h=d[1];if((0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Z.getMovieDetails(i);case 2:t=e.sent,h(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[i]),(0,o.useEffect)((function(){var e;localStorage.setItem("fromLocation",null===(e=t.state)||void 0===e?void 0:e.from)}),[null===(e=t.state)||void 0===e?void 0:e.from]),!f)return(0,p.jsx)("div",{children:"Loading..."});var g=f.title,k=f.vote_average,w=f.overview,x=f.genres,_=(10*k).toLocaleString(void 0,{minimumFractionDigits:1,maximumFractionDigits:1}),b=localStorage.getItem("fromLocation");return(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:l.cardfilm,children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(f.poster_path),alt:f.title,width:"250"}),(0,p.jsxs)("div",{className:l.details,children:[(0,p.jsx)("h1",{children:g}),(0,p.jsxs)("p",{className:l.userscore,children:["User Score: ",_,"%"]}),(0,p.jsxs)("p",{className:l.overview,children:["Overview: ",w]}),(0,p.jsxs)("p",{children:["Genres: ",x.map((function(e){return e.name})).join(", ")]}),(0,p.jsx)("button",{className:l.goBackButton,onClick:function(){r("movies"===b?"/movies":"/home")},children:"Go back"})]})]}),(0,p.jsx)(u.rU,{to:"/movies/".concat(i,"/cast"),className:l.link,children:"Cast"}),(0,p.jsx)(u.rU,{to:"/movies/".concat(i,"/reviews"),className:l.link,children:"Reviews"}),(0,p.jsx)(s.j3,{})]})}}}]);
//# sourceMappingURL=802.72c63d19.chunk.js.map