(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,n,t){e.exports=t.p+"static/media/me_irl3_cropped.2ead195c.jpg"},167:function(e,n,t){e.exports=t(394)},172:function(e,n,t){},177:function(e,n,t){},383:function(e,n,t){},389:function(e,n,t){var a={"./aboutImage.jpg":390,"./aboutImage2.jpg":391};function r(e){var n=i(e);return t(n)}function i(e){var n=a[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=389},390:function(e,n,t){e.exports=t.p+"static/media/aboutImage.47dfa197.jpg"},391:function(e,n,t){e.exports=t.p+"static/media/aboutImage2.9b4e3b0c.jpg"},393:function(e,n,t){},394:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(24),o=t.n(i),l=(t(172),t(396)),c=t(6),u=t(8),s=t(16),m=t(7),p=t(17),d=t(22),h=t(23),f=t(166),b=function(){function e(n,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t;Object(c.a)(this,e),"string"===typeof n?(this.top=n,this.right=t,this.bottom=a,this.left=r):(this.top="".concat(n,"px"),this.right="".concat(t,"px"),this.bottom="".concat(a,"px"),this.left="".concat(r,"px"))}return Object(u.a)(e,[{key:"toString",value:function(){return"".concat(this.top," ").concat(this.right," ").concat(this.bottom," ").concat(this.left)}}]),e}(),g=function(){function e(){Object(c.a)(this,e)}return Object(u.a)(e,null,[{key:"getTheme",value:function(){return{textColor:"#dcd6ce",backgroundColor:"#0f0f0f",page:{padding:new b(0,90),item:{padding:new b(0,20)}},navbar:{height:"56px",textColor:"#dcd6ce",textColorHighlight:"#6385a9",font:"'Roboto Slab', sans-serif",padding:new b(0,90),border:{backgroundColor:Object(f.a)(Object(m.a)(e),"textColor",this)}},mobile:{colMargin:new b(0,20,20,20),cutOff:"992",padding:new b(20,20),navbar:{padding:new b(20,40)}}}}}]),e}();function v(){var e=Object(d.a)(["\n  font-size: 40px\n  "]);return v=function(){return e},e}function y(){var e=Object(d.a)(["\n  font-family: 'Roboto', sans-serif;\n  font-size: 50px;\n  font-weight: bold;\n  margin: 0 0 10px 0\n\n  @media (max-width: ","px) {\n    margin: ","\n  }\n  "]);return y=function(){return e},e}var w=g.getTheme();var x=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return function(e,n,t){var a=h.a.h1(y(),w.mobile.cutOff,w.mobile.colMargin),i=Object(h.a)(a)(v());return"h1"===e||void 0===e?r.a.createElement(a,{style:t},n):"h2"===e?r.a.createElement(i,{style:t},n):void 0}(this.props.type,this.props.children,this.props.style)}}]),n}(a.Component);var E=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return e=this.props.height,n=this.props.width,void 0===e&&(e=40),void 0===n&&(n=100),r.a.createElement("div",{style:{height:parseInt(e),width:parseInt(n)}});var e,n}}]),n}(a.Component);function O(){var e=Object(d.a)(["\n\n  //  Overwrite bootstrap for containers\n  & .container {\n    max-width: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  & p {\n    margin: 10px 0;\n  }\n\n  display: flex;\n  flex-direction: row;\n  padding: ",";\n\n  // Mobile styles\n  @media (max-width: ","px) {\n    flex-direction: column;\n    padding: ","\n  }\n\n"]);return O=function(){return e},e}var j=g.getTheme(),k=h.a.div(O(),j.page.padding,j.mobile.cutOff,j.mobile.padding);var C=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:this.props.style},!0===(e=this.props.spacer)||void 0===e?r.a.createElement(E,null):void 0,r.a.createElement(k,null,this.props.children));var e}}]),n}(a.Component),I=(t(177),t(395)),T=t(149),M=t.n(T);function N(){var e=Object(d.a)(["\ndisplay: flex;\nflex-direction: row;\nmargin-top: 10px;\n\n\n& .icon {\n  font-size: 33px;\n  padding: 0 4px;\n  height: 100%;\n}\n\n& .iconWrapper2 {\n    background-color: #2a2a2a;\n    height: 100%;\n    border-radius: 5px;\n    padding: 0 5px 0 0;\n}\n\n& .iconWrapper2 a{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  }\n  \n\n@media (max-width: ","px) {\n  justify-content: center\n}\n\n"]);return N=function(){return e},e}function S(){var e=Object(d.a)(["\n\n  position: relative;\n  left: -200px;\n  z-index: -1;\n  // Code for mobile displays\n\n  @media (max-width: ","px) {\n    width: 100%;\n    right: 0;\n    left: 0;\n  }\n\n  & img {\n    // Mobile mode\n    @media (max-width: ","px) {\n      width: 100%;\n    }\n  }\n\n  & .fadingElement {\n    // Mobile mode\n    @media (max-width: ","px) {\n      opacity: 0\n    }\n  }\n"]);return S=function(){return e},e}function R(){var e=Object(d.a)(["\n  margin: 100px 0 100px 90px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 600px;\n\n  @media (max-width: ","px) {\n    justify-content: center;\n    text-align: center;\n    margin: 50px 20px 70px 20px;\n    min-width: auto;\n  }\n\n  & .iconWrapper {\n    @media (max-width: ","px) {\n      justify-content: center\n    }\n  }\n\n"]);return R=function(){return e},e}var W=g.getTheme(),_=h.a.div(R(),W.mobile.cutOff,W.mobile.cutOff),A=h.a.div(S(),W.mobile.cutOff,W.mobile.cutOff,W.mobile.cutOff),L=h.a.div(N(),W.mobile.cutOff),H=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(C,{spacer:!1,style:{overflowX:"hidden"}},r.a.createElement("div",{class:"padder"}),r.a.createElement(_,null,r.a.createElement(x,{style:{margin:0}},"Robbie Cook"),r.a.createElement("p",null,"Hello! I'm a developer living in Auckland, New Zealand. I love swimming, Netflix, music, and creating."),r.a.createElement("p",null,"Check out my ",r.a.createElement(I.a,{to:"/about"},"About")," page to find out more :)"),r.a.createElement(L,null,r.a.createElement("a",{href:"https://github.com/Robbie-Cook"},r.a.createElement("i",{class:"icon fab fa-github-square"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/robbie-cook/"},r.a.createElement("i",{class:"icon fab fa-linkedin"})),r.a.createElement("div",{class:"iconWrapper2"},r.a.createElement("a",{href:"mailto:robbie@robbie.pw"},r.a.createElement("i",{class:"icon fas fa-envelope-square"}),r.a.createElement("span",null,"robbie@robbie.pw"))))),r.a.createElement(A,null,r.a.createElement("div",{class:"fadingElement"}),r.a.createElement("img",{src:M.a,style:{height:"100%"}})))}}]),n}(a.Component);function U(){var e=Object(d.a)(["\ndisplay: flex;\nflex-direction: column;\nmargin: 0 40px 20px 0;\nflex: 1;\n@media (max-width: ","px) {\n    margin: ","\n}\n\n&:last-child {\n    margin-right: 0px\n}\n"]);return U=function(){return e},e}function z(){var e=Object(d.a)(["\ndisplay: flex;\nflex-direction: row;\nflex: 1;\n@media (max-width: ","px) {\n    flex-direction: column;\n}\n"]);return z=function(){return e},e}function D(){var e=Object(d.a)(["\ndisplay: flex;\nflex-direction: column"]);return D=function(){return e},e}var P=g.getTheme(),B=h.a.div(D()),J=h.a.div(z(),P.mobile.cutOff),q=h.a.div(U(),P.mobile.cutOff,P.mobile.colMargin),F=(g.getTheme(),function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement(B,null,r.a.createElement(x,{type:"h2"},"Music"),r.a.createElement(J,null,r.a.createElement(q,{class:"subpage"},r.a.createElement("p",null,"Music is one of my passions. My favourite bands at the moment are Vampire Weekend, The Killers, Brandon Flowers, and the White Stripes."),r.a.createElement("p",null,"I make some music at home, and my set up at home is an electric keyboard and a microphone at my parent's house. I also am trying to learn guitar -- I have a little acoustic guitar here in Auckland.")),r.a.createElement(q,{class:"subpage"},r.a.createElement("iframe",{width:"100%",height:"450",scrolling:"yes",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/39548578&color=%23222121&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"})))))}}]),n}(a.Component)),Q=(a.Component,t(92)),X=t(51),G=t(153),K=t.n(G),V=t(156),Z=t.n(V),$=t(154),Y=t.n($),ee=t(157),ne=t.n(ee),te=t(152),ae=t.n(te),re=t(161),ie=t.n(re),oe=t(155),le=t.n(oe),ce=t(150),ue=t.n(ce),se=t(160),me=t.n(se),pe=t(159),de=t.n(pe),he=t(89),fe=t.n(he),be=t(158),ge=t.n(be),ve=(t(178),t(52)),ye=g.getTheme(),we=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(s.a)(this,Object(m.a)(n).call(this,e))).anchorEl=r.a.createRef(),t.state={open:!1},t.handleToggle=t.handleToggle.bind(Object(X.a)(t)),t.handleClose=t.handleClose.bind(Object(X.a)(t)),t}return Object(p.a)(n,e),Object(u.a)(n,[{key:"generateNavItems",value:function(){var e=[],n=!0,t=!1,a=void 0;try{for(var i,o=this.props.pages[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var l=i.value;e.push(r.a.createElement(ue.a,{label:l.name,to:l.path,component:I.a}))}}catch(c){t=!0,a=c}finally{try{n||null==o.return||o.return()}finally{if(t)throw a}}return e}},{key:"generateNavMenuItems",value:function(){var e=[],n=!0,t=!1,a=void 0;try{for(var i,o=this.props.pages[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var l=i.value;e.push(r.a.createElement(ae.a,{onClick:this.handleMobileNavClick,component:I.a,to:l.path},l.name))}}catch(c){t=!0,a=c}finally{try{n||null==o.return||o.return()}finally{if(t)throw a}}return e}},{key:"handleToggle",value:function(){this.setState(function(e){return{open:!e.open}})}},{key:"handleMobileNavClick",value:function(){this.handleToggle()}},{key:"handleClose",value:function(e){this.anchorEl.current.contains(e.target)||this.setState({open:!1})}},{key:"render",value:function(){var e=this,n=Object(ve.withStyles)({root:{backgroundColor:ye.backgroundColor}})(K.a),t=Object(ve.withStyles)({root:Object(Q.a)({},"@media (min-width:".concat(ye.mobile.cutOff,"px)"),{display:"none"})})(Y.a),a=Object(ve.withStyles)({root:Object(Q.a)({},"@media (max-width:".concat(ye.mobile.cutOff-1,"px)"),{display:"none"})})(le.a);return r.a.createElement(n,{position:"static",color:"primary",colorPrimary:!0},r.a.createElement(Z.a,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(t,{buttonRef:this.anchorEl,"aria-owns":this.state.open?"menu-list-grow":void 0,"aria-haspopup":"true","aria-label":"Menu",color:"inherit",onClick:this.handleToggle},r.a.createElement(ne.a,null)),r.a.createElement(ge.a,{open:this.state.open,anchorEl:this.anchorEl.current,transition:!0,disablePortal:!0},function(n){var t=n.TransitionProps,a=n.placement;return r.a.createElement(de.a,Object.assign({},t,{id:"menu-list-grow",style:{transformOrigin:"bottom"===a?"center top":"center bottom"}}),r.a.createElement(fe.a,null,r.a.createElement(me.a,{onClickAway:e.handleClose},r.a.createElement(ie.a,null,e.generateNavMenuItems()))))}))),r.a.createElement(a,null,this.generateNavItems())))}}]),n}(r.a.Component),xe=(t(383),t(384),t(162));var Ee,Oe=(Ee=t(389)).keys().map(Ee);var je={height:200},ke=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement(B,null,r.a.createElement(x,{type:"h2"},"About"),r.a.createElement(J,null,r.a.createElement(q,null,r.a.createElement("p",null,"Hi! I'm a 22-year-old developer, currently working in .NET :). Check out my Github page ",r.a.createElement("a",{href:"https://github.com/Robbie-Cook"},"here")," for a list of projects I am working on."),r.a.createElement("p",null,"I studied at Otago University in Dunedin; where I got an Honours degree in Computer Science and worked as a lab demonstrator for Python and Java students. I also did some Disabilities tutoring for the University as well in my final year."),r.a.createElement("p",null,"At the moment, I am learning about SQL, web apps, and React."),r.a.createElement("p",null,"I have experience with Linux systems, LaTeX and Machine Learning (e.g. tensorflow)."),r.a.createElement("p",null,"In my spare time, I like to swim, gym, and play guitar and piano.")),r.a.createElement(q,null,r.a.createElement("div",{className:"carouselColumn"},r.a.createElement(xe.Carousel,{style:je,showThumbs:!1},function(){var e=[],n=!0,t=!1,a=void 0;try{for(var i,o=Oe[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var l=i.value;e.push(r.a.createElement("div",null,r.a.createElement("img",{src:l,className:"carouselImage"})))}}catch(c){t=!0,a=c}finally{try{n||null==o.return||o.return()}finally{if(t)throw a}}return e}()))))))}}]),n}(a.Component),Ce=t(397),Ie=function(){function e(n,t,a){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];Object(c.a)(this,e),this.name=n,this.path=t,this.component=a,this.exact=r}return Object(u.a)(e,[{key:"getRoute",value:function(){var e=r.a.createElement(Ce.a,{path:this.path,component:this.component});return this.exact&&(e=r.a.createElement(Ce.a,{exact:!0,path:this.path,component:this.component})),e}},{key:"getLink",value:function(){}}]),e}();t(393);var Te=function(){for(var e=[new Ie("Home","/",function(){return r.a.createElement(H,null)},!0),new Ie("About","/about",function(){return r.a.createElement(ke,null)}),new Ie("Music","/music",function(){return r.a.createElement(F,null)})],n=[],t=0;t<e.length;t++){var a=e[t];n.push(a.getRoute())}return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(we,{pages:e}),r.a.createElement("div",null,n))))},Me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ne(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(Te,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");Me?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ne(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Ne(e)})}}()}},[[167,1,2]]]);
//# sourceMappingURL=main.a78ca54c.chunk.js.map