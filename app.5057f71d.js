(function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return u.p+""+({"custom-element~oauth":"custom-element~oauth","custom-element":"custom-element",oauth:"oauth",examples:"examples"}[t]||t)+".5057f71d.js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"custom-element~oauth":1,oauth:1,examples:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r=({"custom-element~oauth":"custom-element~oauth","custom-element":"custom-element",oauth:"oauth",examples:"examples"}[t]||t)+".5057f71d.css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var p=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[t]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var f=l;i.push(["56d7","chunk-vendors"]),n()})({"020e":function(t,e,n){"use strict";var r=n("8796"),a=n.n(r);a.a},"15fd":function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("cebc"),a=n("d225"),o=n("b0b4"),i=n("2b0e"),c=function(){function t(){Object(a["a"])(this,t)}return Object(o["a"])(t,[{key:"showNotify",value:function(t){i["default"].notify(t)}},{key:"showInfo",value:function(t){this.showNotify(Object(r["a"])({},t,{type:"is-info"}))}},{key:"showError",value:function(t){this.showNotify(Object(r["a"])({type:"is-danger"},t))}}]),t}()},"256c":function(t,e,n){},4360:function(t,e,n){"use strict";var r,a,o,i,c=function(t,e,n){return new e({store:t,name:n})},u=n("b50d"),s=n("cebc"),l=(n("96cf"),n("3b8d")),p=n("d225"),f=n("b0b4"),d=n("308d"),h=n("6bb5"),m=n("4e2b"),v=n("d360"),_=n("721b"),b=n("8d27"),y=n("de6b"),g=n("785d"),P=n("aa59"),O=n("493f"),E=n("145b"),w=n("15fd"),A="client-id",U=(r=Object(b["b"])({generateMutationSetters:!0}),r((i=function(t){function e(){var t,n;Object(p["a"])(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=Object(d["a"])(this,(t=Object(h["a"])(e)).call.apply(t,[this].concat(a))),n.isInited=!1,n.connectInstance=null,n.initialPromise=null,n.errorNotify=new w["a"],n}return Object(m["a"])(e,t),Object(f["a"])(e,[{key:"setClientId",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=e?e.trim():"",_["a"].save(A,n),window.location.reload();case 3:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"customAction",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.connectInstance.logout();case 3:t.next=7;break;case 5:t.prev=5,t.t0=t["catch"](0);case 7:return t.next=9,this.connectInstance.auth();case 9:case"end":return t.stop()}},t,this,[[0,5]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"logout",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.connectInstance.logout();case 3:window.location.reload(),t.next=8;break;case 6:t.prev=6,t.t0=t["catch"](0);case 8:case"end":return t.stop()}},t,this,[[0,6]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"login",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.connectInstance.auth();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),this.errorNotify.showError({title:"Auth Error",text:t.t0});case 8:case"end":return t.stop()}},t,this,[[0,5]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"initConnect",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,n,r=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=r.length>0&&void 0!==r[0]?r[0]:{},!this.isInited){t.next=3;break}return t.abrupt("return");case 3:if(!this.initialPromise){t.next=7;break}return t.next=6,this.initialPromise;case 6:return t.abrupt("return");case 7:this.initialPromise=new Promise(function(t){n=t}),this.connectInstance=new y["a"](Object(s["a"])({authUrl:{VUE_APP_AUTH_URL:"https://auth.endpass.com",VUE_APP_OAUTH_SERVER:"https://api.endpass.com/v1",VUE_APP_OAUTH_CLIENT_ID:"ee8b2a12-089d-45a2-a224-89eab10fa96d",VUE_APP_IS_PRODUCTION:!0,VUE_APP_IS_E2E_CONNECT:!1,VUE_APP_WITH_SYMLINKS:!1}.VUE_APP_AUTH_URL||"https://auth.endpass.com",clientId:this.clientId,oauthServer:{VUE_APP_AUTH_URL:"https://auth.endpass.com",VUE_APP_OAUTH_SERVER:"https://api.endpass.com/v1",VUE_APP_OAUTH_CLIENT_ID:"ee8b2a12-089d-45a2-a224-89eab10fa96d",VUE_APP_IS_PRODUCTION:!0,VUE_APP_IS_E2E_CONNECT:!1,VUE_APP_WITH_SYMLINKS:!1}.VUE_APP_OAUTH_SERVER,widget:!1,plugins:[g["a"],O["a"],P["a"],E["a"]]},e)),n(),this.isInited=!0;case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"createLoginButton",value:function(t){return this.connectInstance.createLoginButton(t)}},{key:"clientId",get:function(){var t=_["a"].load(A)||{VUE_APP_AUTH_URL:"https://auth.endpass.com",VUE_APP_OAUTH_SERVER:"https://api.endpass.com/v1",VUE_APP_OAUTH_CLIENT_ID:"ee8b2a12-089d-45a2-a224-89eab10fa96d",VUE_APP_IS_PRODUCTION:!0,VUE_APP_IS_E2E_CONNECT:!1,VUE_APP_WITH_SYMLINKS:!1}.VUE_APP_OAUTH_CLIENT_ID;return t}}]),e}(b["c"]),o=i,Object(v["a"])(o.prototype,"setClientId",[b["a"]],Object.getOwnPropertyDescriptor(o.prototype,"setClientId"),o.prototype),Object(v["a"])(o.prototype,"customAction",[b["a"]],Object.getOwnPropertyDescriptor(o.prototype,"customAction"),o.prototype),Object(v["a"])(o.prototype,"logout",[b["a"]],Object.getOwnPropertyDescriptor(o.prototype,"logout"),o.prototype),Object(v["a"])(o.prototype,"login",[b["a"]],Object.getOwnPropertyDescriptor(o.prototype,"login"),o.prototype),Object(v["a"])(o.prototype,"initConnect",[b["a"]],Object.getOwnPropertyDescriptor(o.prototype,"initConnect"),o.prototype),a=o))||a),I=U;n.d(e,"a",function(){return x});var S=Object(u["a"])(),j=function(t,e){return c(S,t,e)},x=j(I,"connect");e["b"]=S},"47ac":function(t,e,n){"use strict";var r=n("256c"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("c1a5"),o=n("ee98"),i=n.n(o),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("theme-provider",[n("app-layout",{attrs:{id:"app"}})],1)},u=[],s=n("9b8a"),l=n.n(s),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-layout",attrs:{id:t.id}},[n("div",{staticClass:"app-layout-bg-header"}),n("div",{staticClass:"app-layout-bg-footer"}),n("div",{staticClass:"app-layout-area"},[n("header",{staticClass:"app-layout-header"},[n("app-header")],1),n("nav",{staticClass:"app-layout-nav"},[n("nav-sidebar")],1),n("main",{staticClass:"app-layout-content"},[n("router-view")],1)]),n("notifications")],1)},f=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notify-container"},[n("notifications",{attrs:{speed:500,duration:5e3,width:"auto",position:"top center","data-test":"app-notification",classes:"notification app-notification"}})],1)},h=[],m={name:"NotificationsView"},v=m,_=(n("020e"),n("2877")),b=Object(_["a"])(v,d,h,!1,null,null,null),y=b.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-sidebar"},[n("ul",{staticClass:"nav-sidebar-list"},[n("li",[n("router-link",{attrs:{to:{name:"Oauth"},exact:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.isActive,a=e.navigate;return[n("v-button",{attrs:{skin:t.getSkin(r)},on:{click:a}},[n("v-svg-icon",{attrs:{slot:"iconBefore",width:"18px",height:"18px",name:"keypass"},slot:"iconBefore"}),t._v("\n          Oauth\n        ")],1)]}}])})],1),n("li",[n("router-link",{attrs:{to:{name:"Examples"}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.isActive,a=(e.href,e.navigate);return[n("v-button",{attrs:{skin:t.getSkin(r)},on:{click:a}},[n("v-svg-icon",{attrs:{slot:"iconBefore",width:"18px",height:"18px",name:"file-view"},slot:"iconBefore"}),t._v("\n          Examples\n        ")],1)]}}])})],1)])])},P=[],O=n("d4d6"),E=n.n(O),w=n("025f"),A=n.n(w),U={name:"NavSidebarView",data:function(){return{navMenuActive:!1}},methods:{getSkin:function(t){return t?"tertiary":"ghost"}},components:{VSvgIcon:A.a,VButton:E.a}},I=U,S=(n("878d"),Object(_["a"])(I,g,P,!1,null,null,null)),j=S.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-header"},[r("img",{attrs:{src:n("d0cf")}})])}],T={name:"AppHeader"},k=T,N=(n("9e88"),Object(_["a"])(k,x,C,!1,null,null,null)),V=N.exports,R={name:"AppLayout",props:{id:{type:String,required:!0}},components:{AppHeader:V,Notifications:y,NavSidebar:j}},L=R,H=(n("47ac"),Object(_["a"])(L,p,f,!1,null,"64a4d51b",null)),D=H.exports,B={name:"App",components:{AppLayout:D,ThemeProvider:l.a}},M=B,$=Object(_["a"])(M,c,u,!1,null,null,null),K=$.exports,W=n("8c4f");r["default"].use(W["a"]);var Y=new W["a"]({routes:[{path:"/",name:"Oauth",component:function(){return Promise.all([n.e("custom-element~oauth"),n.e("oauth")]).then(n.bind(null,"dcf5"))}},{path:"/custom-element",name:"CustomElement",component:function(){return Promise.all([n.e("custom-element~oauth"),n.e("custom-element")]).then(n.bind(null,"6eb5"))}},{path:"/examples",name:"Examples",component:function(){return n.e("examples").then(n.bind(null,"50db"))}}]}),q=Y,J=n("4360"),F=n("2066"),z=n.n(F),G=function(t){var e=new z.a;Object.assign(t,{e2eBridge:e})},Q=G;n("a878"),n("15e3"),n("e7eb");r["default"].use(i.a),r["default"].use(a["a"]),r["default"].config.productionTip=!1,Q(window),new r["default"]({router:q,store:J["b"],render:function(t){return t(K)}}).$mount("#app")},6512:function(t,e,n){},"878d":function(t,e,n){"use strict";var r=n("6512"),a=n.n(r);a.a},8796:function(t,e,n){},"9e88":function(t,e,n){"use strict";var r=n("cc18"),a=n.n(r);a.a},b50d:function(t,e,n){"use strict";var r=n("2b0e"),a=n("2f62");r["default"].use(a["a"]),e["a"]=function(){var t=new a["a"].Store({strict:!JSON.parse({VUE_APP_AUTH_URL:"https://auth.endpass.com",VUE_APP_OAUTH_SERVER:"https://api.endpass.com/v1",VUE_APP_OAUTH_CLIENT_ID:"ee8b2a12-089d-45a2-a224-89eab10fa96d",VUE_APP_IS_PRODUCTION:!0,VUE_APP_IS_E2E_CONNECT:!1,VUE_APP_WITH_SYMLINKS:!1}.VUE_APP_IS_PRODUCTION)});return t}},cc18:function(t,e,n){},d0cf:function(t,e,n){t.exports=n.p+"img/logo.a98d1249.svg"},e7eb:function(t,e,n){}});