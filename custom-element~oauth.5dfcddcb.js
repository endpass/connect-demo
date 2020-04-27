(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["custom-element~oauth"],{1878:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("6362");n("e06a"),n("7004"),n("416f"),n("ac2f"),n("7be5");var i=n("b104"),r={name:"VLabel",extends:i.LabelMolecule};const s=r,a=void 0,l=void 0,c=void 0,d=void 0;var u=o.__vue_normalize__({},a,s,l,d,c,void 0,void 0);e.default=u},1896:function(t,e,n){"use strict";var o=n("6362"),i=n("e06a"),r={name:"InputAtom",inheritAttrs:!1,props:{skin:{type:String,default:"primary",validator:function(t){return-1!==["primary","secondary"].indexOf(t)}},value:{type:[String,Number],default:null},disabled:{type:Boolean,default:!1}},computed:{listeners:function(){var t=this;return i._objectSpread2({},this.$listeners,{input:function(e){t.$emit("input",e.target.value)}})},inputAtomCssClass:function(){var t;return Object.assign(this.themeCssClass,(t={},i._defineProperty(t,this.skin,!!this.skin),i._defineProperty(t,"is-error",this.$attrs["is-error"]),t))}},mixins:[i.ThemeMixin]};const s=r;var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"input-atom",class:t.inputAtomCssClass,attrs:{disabled:t.disabled}},[n("input",t._g(t._b({staticClass:"input-atom-control",attrs:{disabled:t.disabled},domProps:{value:t.value}},"input",t.$attrs,!1),t.listeners)),t._v(" "),t._t("default")],2)},l=[];const c=void 0,d=void 0,u=void 0,v=!1;var m=o.__vue_normalize__({render:a,staticRenderFns:l},c,s,d,v,u,void 0,void 0);e.InputAtom=m},2005:function(t,e,n){"use strict";var o=n("6cdb"),i=n.n(o);i.a},"43d4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("6362"),i=n("e06a"),r={name:"VCard",mixins:[i.ThemeMixin]};const s=r;var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-card",class:t.themeCssClass},[t._t("default")],2)},l=[];const c=void 0,d=void 0,u=void 0,v=!1;var m=o.__vue_normalize__({render:a,staticRenderFns:l},c,s,d,v,u,void 0,void 0);e.default=m},"519a":function(t,e,n){},6795:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"form-field"},[t.label?n("p",{staticClass:"form-field__label"},[t._v("\n    "+t._s(t.label)+"\n  ")]):t._e(),n("div",{staticClass:"form-field__content"},[t._t("default")],2)])},i=[],r={name:"FormField",props:{label:{type:String,default:null}}},s=r,a=(n("ed65"),n("2877")),l=Object(a["a"])(s,o,i,!1,null,null,null),c=l.exports;n.d(e,"a",function(){return c})},"6ab1":function(t,e,n){"use strict";var o=n("6362"),i=n("e06a"),r={name:"ErrorAtom",props:{error:{type:String,required:!0}},mixins:[i.ThemeMixin]};const s=r;var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error-atom",class:t.themeCssClass},[t._v("\n  "+t._s(t.error)+"\n")])},l=[];const c=void 0,d=void 0,u=void 0,v=!1;var m=o.__vue_normalize__({render:a,staticRenderFns:l},c,s,d,v,u,void 0,void 0);e.ErrorAtom=m},"6cdb":function(t,e,n){},7565:function(t,e,n){"use strict";var o=n("6362"),i=n("e06a"),r={name:"FieldAtom",mixins:[i.ThemeMixin]};const s=r;var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field-atom",class:t.themeCssClass},[t._t("default")],2)},l=[];const c=void 0,d=void 0,u=void 0,v=!1;var m=o.__vue_normalize__({render:a,staticRenderFns:l},c,s,d,v,u,void 0,void 0);e.FieldAtom=m},7890:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("6362");n("e06a");var i=n("7004"),r=n("416f"),s=n("1896"),a=n("6ab1");n("ac2f"),n("7be5");var l=n("b104"),c=n("9d30"),d=n("7565"),u={name:"VInput",inheritAttrs:!1,props:{label:{type:String,default:""},tooltipLabel:{type:String,default:""},value:{type:[String,Number],default:null},error:{type:String,default:""},description:{type:String,default:""},disabled:{type:Boolean,default:!1},skin:{type:String,default:"primary",validator:function(t){return-1!==["primary","secondary"].indexOf(t)}}},computed:{isError:function(){return!!this.error}},components:{LabelMolecule:l.LabelMolecule,InputAtom:s.InputAtom,FieldAtom:d.FieldAtom,ErrorAtom:a.ErrorAtom,DescriptionAtom:c.DescriptionAtom,IconAtom:r.IconAtom,SvgAtom:i.SvgAtom},model:{event:"input",prop:"value"}};const v=u;var m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("field-atom",[t.label?n("label-molecule",{attrs:{label:t.label,disabled:t.disabled,"tooltip-label":t.tooltipLabel}}):t._e(),t._v(" "),t.description?n("description-atom",t._b({attrs:{description:t.description}},"description-atom",t.$attrs,!1)):t._e(),t._v(" "),n("input-atom",t._g(t._b({attrs:{value:t.value,"is-error":t.isError,disabled:t.disabled,skin:t.skin}},"input-atom",t.$attrs,!1),t.$listeners),[t.isError?n("icon-atom",{attrs:{"is-error":t.isError}},[n("svg-atom",{attrs:{name:"error"}})],1):t._e()],1),t._v(" "),t.isError?n("error-atom",{attrs:{error:t.error}}):t._e()],1)},p=[];const _=void 0,f=void 0,b=void 0,h=!1;var C=o.__vue_normalize__({render:m,staticRenderFns:p},_,v,f,h,b,void 0,void 0);e.default=C},"7be5":function(t,e,n){"use strict";var o=n("6362"),i=n("e06a"),r={name:"TooltipAtom",inheritAttrs:!1,props:{show:{type:Boolean,default:!1},position:{type:String,default:"top-left",validator:function(t){return["top-left","top-right","bottom-left","bottom-right"].includes(t)}}},computed:{tagCssClass:function(){return i._objectSpread2({},this.themeCssClass,i._defineProperty({},"position-".concat(this.position),!0))}},mixins:[i.ThemeMixin]};const s=r;var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"tooltip-atom-fade"}},[n("div",t._b({directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"tooltip-atom",class:t.tagCssClass},"div",t.$attrs,!1),[n("div",{staticClass:"tooltip-atom-container"},[t._t("default")],2)])])},l=[];const c=void 0,d=void 0,u=void 0,v=!1;var m=o.__vue_normalize__({render:a,staticRenderFns:l},c,s,d,v,u,void 0,void 0);e.TooltipAtom=m},"84d4":function(t,e,n){},"9d30":function(t,e,n){"use strict";var o=n("6362"),i=n("e06a"),r={name:"DescriptionAtom",props:{description:{type:String,required:!0}},mixins:[i.ThemeMixin]};const s=r;var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"description-atom",class:t.themeCssClass},[t._v("\n  "+t._s(t.description)+"\n  "),t._t("default")],2)},l=[];const c=void 0,d=void 0,u=void 0,v=!1;var m=o.__vue_normalize__({render:a,staticRenderFns:l},c,s,d,v,u,void 0,void 0);e.DescriptionAtom=m},ac2f:function(t,e,n){"use strict";var o=n("6362"),i={name:"HoverAtom",inheritAttrs:!1,data:function(){return{isHover:!1}},methods:{onMouseOver:function(){this.isHover=!0},onMouseLeave:function(){this.isHover=!1}}};const r=i;var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g(t._b({on:{mouseover:t.onMouseOver,mouseleave:t.onMouseLeave}},"div",t.$attrs,!1),t.$listeners),[t._t("default",null,{isHover:t.isHover})],2)},a=[];const l=void 0,c=void 0,d=void 0,u=!1;var v=o.__vue_normalize__({render:s,staticRenderFns:a},l,r,c,u,d,void 0,void 0);e.HoverAtom=v},af38:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-controls"},[n("client-id",{staticClass:"header-controls-client-id"}),n("logout-button",{staticClass:"header-controls-logout"})],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-label",{attrs:{label:"Client ID of application"}}),n("div",{staticClass:"client-id-container"},[n("v-input",{staticClass:"client-id-input",attrs:{placeholder:"type client id here..."},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSet(e)}},model:{value:t.clientId,callback:function(e){t.clientId=e},expression:"clientId"}}),n("v-button",{attrs:{"is-inline":"",disabled:t.disabled,"is-loading":t.isLoading},on:{click:t.onSet}},[t._v("\n      Set\n    ")])],1)],1)},s=[],a=(n("96cf"),n("3b8d")),l=n("7890"),c=n.n(l),d=n("1878"),u=n.n(d),v=n("d4d6"),m=n.n(v),p=n("4360"),_={name:"ClientId",connectStore:p["a"],data:function(){return{clientId:this.$options.connectStore.clientId,isLoading:!1}},computed:{disabled:function(){return this.clientId===this.$options.connectStore.clientId}},methods:{onSet:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.disabled){t.next=2;break}return t.abrupt("return");case 2:return this.isLoading=!0,t.next=5,this.$options.connectStore.setClientId(this.clientId);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},components:{VLabel:u.a,VInput:c.a,VButton:m.a}},f=_,b=(n("2005"),n("2877")),h=Object(b["a"])(f,r,s,!1,null,null,null),C=h.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-button",{staticClass:"v-logout-button",attrs:{skin:"ghost-error","is-inline":""},on:{click:t.onLogout}},[t._v("\n  Logout\n")])},y=[],A={name:"LogoutButton",connectStore:p["a"],methods:{onLogout:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,this.$options.connectStore.logout();case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},components:{VButton:m.a}},S=A,x=Object(b["a"])(S,g,y,!1,null,null,null),$=x.exports,L={name:"HeaderControls",components:{LogoutButton:$,ClientId:C}},E=L,I=(n("c490"),Object(b["a"])(E,o,i,!1,null,null,null)),k=I.exports;n.d(e,"a",function(){return k})},b104:function(t,e,n){"use strict";var o=n("6362"),i=n("e06a"),r=n("7004"),s=n("416f"),a=n("ac2f"),l=n("7be5"),c={name:"LabelAtom",props:{label:{type:String,default:""},disabled:{type:Boolean,default:!1}},mixins:[i.ThemeMixin]};const d=c;var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"label-atom",class:t.themeCssClass,attrs:{disabled:t.disabled}},[t._v("\n  "+t._s(t.label)+"\n  "),t._t("default")],2)},v=[];const m=void 0,p=void 0,_=void 0,f=!1;var b=o.__vue_normalize__({render:u,staticRenderFns:v},m,d,p,f,_,void 0,void 0),h={name:"LabelMolecule",props:{label:{type:String,default:""},disabled:{type:Boolean,default:!1},tooltipLabel:{type:String,default:""},icon:{type:String,default:"info"}},mixins:[i.ThemeMixin],components:{LabelAtom:b,TooltipAtom:l.TooltipAtom,HoverAtom:a.HoverAtom,IconAtom:s.IconAtom,SvgAtom:r.SvgAtom}};const C=h;var g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label-atom",{staticClass:"label-molecule",attrs:{label:t.label,disabled:t.disabled}},[t.tooltipLabel?n("hover-atom",{staticClass:"label-molecule-tooltip",class:t.themeCssClass,scopedSlots:t._u([{key:"default",fn:function(e){var o=e.isHover;return[n("tooltip-atom",{attrs:{show:o,position:"bottom-left"}},[t._v("\n      "+t._s(t.tooltipLabel)+"\n    ")]),t._v(" "),n("icon-atom",{staticClass:"label-molecule-icon"},[n("svg-atom",{attrs:{name:t.icon}})],1)]}}],null,!1,2927682378)}):t._e()],1)},y=[];const A=void 0,S=void 0,x=void 0,$=!1;var L=o.__vue_normalize__({render:g,staticRenderFns:y},A,C,S,$,x,void 0,void 0);e.LabelMolecule=L},c490:function(t,e,n){"use strict";var o=n("84d4"),i=n.n(o);i.a},ed65:function(t,e,n){"use strict";var o=n("519a"),i=n.n(o);i.a}}]);