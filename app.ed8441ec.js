(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+""+({"custom-element~oauth":"custom-element~oauth","custom-element":"custom-element",oauth:"oauth",examples:"examples"}[e]||e)+".ed8441ec.js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"custom-element~oauth":1,"custom-element":1,oauth:1,examples:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r=({"custom-element~oauth":"custom-element~oauth","custom-element":"custom-element",oauth:"oauth",examples:"examples"}[e]||e)+".ed8441ec.css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;i.push(["56d7","chunk-vendors"]),n()})({"020e":function(e,t,n){"use strict";var r=n("8796"),a=n.n(r);a.a},"15fd":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("cebc"),a=n("d225"),o=n("b0b4"),i=n("2b0e"),c=function(){function e(){Object(a["a"])(this,e)}return Object(o["a"])(e,[{key:"showNotify",value:function(e){i["default"].notify(e)}},{key:"showInfo",value:function(e){this.showNotify(Object(r["a"])({},e,{type:"is-info"}))}},{key:"showError",value:function(e){this.showNotify(Object(r["a"])({type:"is-danger"},e))}}]),e}()},"2d4e":function(e,t,n){"use strict";var r=n("8125"),a=n.n(r);a.a},4360:function(e,t,n){"use strict";var r,a,o,i,c=function(e,t,n){return new t({store:e,name:n})},u=n("b50d"),s=n("cebc"),l=(n("96cf"),n("3b8d")),p=n("d225"),f=n("b0b4"),d=n("308d"),h=n("6bb5"),m=n("4e2b"),v=n("d360"),_=n("8d27"),b=n("de6b"),y=n("785d"),g=n("aa59"),P=n("493f"),E=n("145b"),O=n("15fd"),w={VUE_APP_AUTH_URL:"https://auth.endpass.com",VUE_APP_OAUTH_SERVER:"https://api.endpass.com/v1",VUE_APP_OAUTH_CLIENT_ID:"ee8b2a12-089d-45a2-a224-89eab10fa96d",VUE_APP_IS_PRODUCTION:!0,VUE_APP_IS_E2E_CONNECT:!1,VUE_APP_WITH_SYMLINKS:!1}.VUE_APP_OAUTH_CLIENT_ID,A=(r=Object(_["b"])({generateMutationSetters:!0}),r((i=function(e){function t(){var e,n;Object(p["a"])(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=Object(d["a"])(this,(e=Object(h["a"])(t)).call.apply(e,[this].concat(a))),n.isInited=!1,n.connectInstance=null,n.initialPromise=null,n.clientId=w,n.errorNotify=new O["a"],n}return Object(m["a"])(t,e),Object(f["a"])(t,[{key:"setClientId",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t?t.trim():"",this.clientId=n||w;case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"customAction",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.connectInstance.logout();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e["catch"](0);case 7:return e.next=9,this.connectInstance.auth();case 9:case"end":return e.stop()}},e,this,[[0,5]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"logout",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.connectInstance.logout();case 3:window.location.reload(),e.next=8;break;case 6:e.prev=6,e.t0=e["catch"](0);case 8:case"end":return e.stop()}},e,this,[[0,6]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"login",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.connectInstance.auth();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),this.errorNotify.showError({title:"Auth Error",text:e.t0});case 8:case"end":return e.stop()}},e,this,[[0,5]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"initConnect",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,n,r=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:{},!this.isInited){e.next=3;break}return e.abrupt("return");case 3:if(!this.initialPromise){e.next=7;break}return e.next=6,this.initialPromise;case 6:return e.abrupt("return");case 7:this.initialPromise=new Promise(function(e){n=e}),console.log("using clientId as: ".concat(this.clientId)),this.connectInstance=new b["a"](Object(s["a"])({authUrl:{VUE_APP_AUTH_URL:"https://auth.endpass.com",VUE_APP_OAUTH_SERVER:"https://api.endpass.com/v1",VUE_APP_OAUTH_CLIENT_ID:"ee8b2a12-089d-45a2-a224-89eab10fa96d",VUE_APP_IS_PRODUCTION:!0,VUE_APP_IS_E2E_CONNECT:!1,VUE_APP_WITH_SYMLINKS:!1}.VUE_APP_AUTH_URL||"https://auth.endpass.com",clientId:this.clientId,oauthServer:{VUE_APP_AUTH_URL:"https://auth.endpass.com",VUE_APP_OAUTH_SERVER:"https://api.endpass.com/v1",VUE_APP_OAUTH_CLIENT_ID:"ee8b2a12-089d-45a2-a224-89eab10fa96d",VUE_APP_IS_PRODUCTION:!0,VUE_APP_IS_E2E_CONNECT:!1,VUE_APP_WITH_SYMLINKS:!1}.VUE_APP_OAUTH_SERVER,widget:!1,plugins:[y["a"],P["a"],g["a"],E["a"]]},t)),n(),this.isInited=!0;case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"createLoginButton",value:function(e){return this.connectInstance.createLoginButton(e)}}]),t}(_["c"]),o=i,Object(v["a"])(o.prototype,"setClientId",[_["a"]],Object.getOwnPropertyDescriptor(o.prototype,"setClientId"),o.prototype),Object(v["a"])(o.prototype,"customAction",[_["a"]],Object.getOwnPropertyDescriptor(o.prototype,"customAction"),o.prototype),Object(v["a"])(o.prototype,"logout",[_["a"]],Object.getOwnPropertyDescriptor(o.prototype,"logout"),o.prototype),Object(v["a"])(o.prototype,"login",[_["a"]],Object.getOwnPropertyDescriptor(o.prototype,"login"),o.prototype),Object(v["a"])(o.prototype,"initConnect",[_["a"]],Object.getOwnPropertyDescriptor(o.prototype,"initConnect"),o.prototype),a=o))||a),I=A;n.d(t,"a",function(){return j});var U=Object(u["a"])(),x=function(e,t){return c(U,e,t)},j=x(I,"connect");t["b"]=U},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("c1a5"),o=n("ee98"),i=n.n(o),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("theme-provider",[n("app-layout",{attrs:{id:"app"}})],1)},u=[],s=n("9b8a"),l=n.n(s),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-layout",attrs:{id:e.id}},[n("div",{staticClass:"app-layout-bg-header"}),n("div",{staticClass:"app-layout-bg-footer"}),n("div",{staticClass:"app-layout-area"},[n("header",{staticClass:"app-layout-header"},[n("app-header")],1),n("nav",{staticClass:"app-layout-nav"},[n("nav-sidebar")],1),n("main",{staticClass:"app-layout-content"},[n("router-view")],1)]),n("notifications")],1)},f=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notify-container"},[n("notifications",{attrs:{speed:500,duration:5e3,width:"auto",position:"top center","data-test":"app-notification",classes:"notification app-notification"}})],1)},h=[],m={name:"NotificationsView"},v=m,_=(n("020e"),n("2877")),b=Object(_["a"])(v,d,h,!1,null,null,null),y=b.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-sidebar"},[n("ul",{staticClass:"nav-sidebar-list"},[n("li",[n("router-link",{attrs:{to:{name:"Oauth",query:e.$route.query},exact:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.isActive,a=t.navigate;return[n("v-button",{attrs:{skin:e.getSkin(r)},on:{click:a}},[n("v-svg-icon",{attrs:{slot:"iconBefore",width:"18px",height:"18px",name:"keypass"},slot:"iconBefore"}),e._v("\n          Oauth\n        ")],1)]}}])})],1),n("li",[n("router-link",{attrs:{to:{name:"Examples",query:e.$route.query}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.isActive,a=(t.href,t.navigate);return[n("v-button",{attrs:{skin:e.getSkin(r)},on:{click:a}},[n("v-svg-icon",{attrs:{slot:"iconBefore",width:"18px",height:"18px",name:"file-view"},slot:"iconBefore"}),e._v("\n          Examples\n        ")],1)]}}])})],1)])])},P=[],E=n("d4d6"),O=n.n(E),w=n("025f"),A=n.n(w),I={name:"NavSidebarView",data:function(){return{navMenuActive:!1}},methods:{getSkin:function(e){return e?"tertiary":"ghost"}},components:{VSvgIcon:A.a,VButton:O.a}},U=I,x=(n("878d"),Object(_["a"])(U,g,P,!1,null,null,null)),j=x.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-header"},[r("img",{attrs:{src:n("d0cf")}})])}],T={name:"AppHeader"},k=T,N=(n("9e88"),Object(_["a"])(k,C,S,!1,null,null,null)),V=N.exports,R={name:"AppLayout",props:{id:{type:String,required:!0}},components:{AppHeader:V,Notifications:y,NavSidebar:j}},L=R,H=(n("2d4e"),Object(_["a"])(L,p,f,!1,null,"2e1b77a6",null)),D=H.exports,B={name:"App",components:{AppLayout:D,ThemeProvider:l.a}},M=B,q=Object(_["a"])(M,c,u,!1,null,null,null),$=q.exports,K=(n("7f7f"),n("96cf"),n("3b8d")),W=n("8c4f"),Y=n("4360");r["default"].use(W["a"]);var J=new W["a"]({routes:[{path:"/",name:"Oauth",component:function(){return Promise.all([n.e("custom-element~oauth"),n.e("oauth")]).then(n.bind(null,"dcf5"))}},{path:"/custom-element",name:"CustomElement",component:function(){return Promise.all([n.e("custom-element~oauth"),n.e("custom-element")]).then(n.bind(null,"6eb5"))}},{path:"/examples",name:"Examples",component:function(){return n.e("examples").then(n.bind(null,"50db"))}}]}),F=function(){var e=Object(K["a"])(regeneratorRuntime.mark(function e(t,n,r){var a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.query.clientId,o=a!==Y["a"].clientId,!o){e.next=5;break}return e.next=5,Y["a"].setClientId(a);case 5:return e.abrupt("return",r());case 6:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}(),z=function(e,t){var n=e.query.clientId,r=n!==Y["a"].clientId;t.name&&r&&n&&window.location.reload()};J.beforeEach(F),J.afterEach(z);var G=J,Q=n("2066"),X=n.n(Q),Z=function(e){var t=new X.a;Object.assign(e,{e2eBridge:t})},ee=Z;n("a878"),n("15e3"),n("e7eb");r["default"].use(i.a),r["default"].use(a["a"]),r["default"].config.productionTip=!1,ee(window),new r["default"]({router:G,store:Y["b"],render:function(e){return e($)}}).$mount("#app")},6512:function(e,t,n){},8125:function(e,t,n){},"878d":function(e,t,n){"use strict";var r=n("6512"),a=n.n(r);a.a},8796:function(e,t,n){},"9e88":function(e,t,n){"use strict";var r=n("cc18"),a=n.n(r);a.a},b50d:function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62");r["default"].use(a["a"]),t["a"]=function(){var e=new a["a"].Store({strict:!JSON.parse({VUE_APP_AUTH_URL:"https://auth.endpass.com",VUE_APP_OAUTH_SERVER:"https://api.endpass.com/v1",VUE_APP_OAUTH_CLIENT_ID:"ee8b2a12-089d-45a2-a224-89eab10fa96d",VUE_APP_IS_PRODUCTION:!0,VUE_APP_IS_E2E_CONNECT:!1,VUE_APP_WITH_SYMLINKS:!1}.VUE_APP_IS_PRODUCTION)});return e}},cc18:function(e,t,n){},d0cf:function(e,t,n){e.exports=n.p+"img/logo.a98d1249.svg"},e7eb:function(e,t,n){}});