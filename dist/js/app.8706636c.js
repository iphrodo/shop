(function(t){function a(a){for(var n,o,c=a[0],s=a[1],u=a[2],d=0,_=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&_.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(a);while(_.length)_.shift()();return i.push.apply(i,u||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],n=!0,c=1;c<e.length;c++){var s=e[c];0!==r[s]&&(n=!1)}n&&(i.splice(a--,1),t=o(o.s=e[0]))}return t}var n={},r={app:0},i=[];function o(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/vue-shop/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var l=s;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"17a7":function(t,a,e){},"245a":function(t,a,e){"use strict";e("e835")},"35f7":function(t,a,e){"use strict";e("8142")},"3c1e":function(t,a,e){"use strict";e("5f10")},"543c":function(t,a,e){"use strict";e("73b2")},"569e":function(t,a,e){},"56b9":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("vMainWrapper")],1)},i=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"v-main-wrapper l-main_wrapper"},[e("v-header"),e("keep-alive",[e("router-view")],1),e("v-footer")],1)},c=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"b-header"},[e("div",{staticClass:"b-top_section"},[e("div",{staticClass:"b-top_section-content container"},[e("v-header-user"),e("v-mini-cart")],1)]),e("div",{staticClass:"b-header_content container"},[e("router-link",{staticClass:"b-logo",attrs:{to:{name:"home"}}},[e("span",{staticClass:"b-logo-text"},[e("b",[t._v("Avenue")]),t._v(" fashion")])]),e("v-main-navigation")],1)])},u=[],l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"b-main_navigation"},[e("ul",{staticClass:"b-main_navigation-list"},[e("li",{staticClass:"b-main_navigation-item"},[e("router-link",{staticClass:"b-main_navigation-link",attrs:{to:{name:"catalog"}}},[t._v(" Mens ")])],1),t._m(0),t._m(1),t._m(2),t._m(3)])])},d=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"b-main_navigation-item"},[e("a",{staticClass:"b-main_navigation-link",attrs:{href:"#"}},[t._v("Womens")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"b-main_navigation-item"},[e("a",{staticClass:"b-main_navigation-link",attrs:{href:"#"}},[t._v("The brand")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"b-main_navigation-item"},[e("a",{staticClass:"b-main_navigation-link",attrs:{href:"#"}},[t._v("Local stores")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"b-main_navigation-item"},[e("a",{staticClass:"b-main_navigation-link",attrs:{href:"#"}},[t._v("Look book")])])}],_={name:"v-main-navigation",components:{},props:{},data:function(){return{}},computed:{},methods:{},watch:{}},f=_,m=(e("afce"),e("2877")),p=Object(m["a"])(f,l,d,!1,null,"49d8ecda",null),v=p.exports,h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"b-mini_cart"},[e("router-link",{staticClass:"b-mini_cart-link",attrs:{to:{name:"cart",params:{cart_data:t.CART}}}},[e("svg",{staticClass:"bi bi-cart-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}})]),e("span",{staticClass:"b-mini_cart-item"},[t._v("Cart: "+t._s(t.CART.length))]),e("svg",{staticClass:"bi bi-chevron-down",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}})])])],1)},b=[],C=e("5530"),g=e("2f62"),O={name:"v-mini-cart",components:{},props:{},data:function(){return{}},computed:Object(C["a"])({},Object(g["c"])(["CART"])),methods:{},watch:{}},T=O,y=(e("b843"),Object(m["a"])(T,h,b,!1,null,"a3b564ea",null)),j=y.exports,E=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"b-header_user"},[e("a",{staticClass:"b-header_user-link",attrs:{href:"#"}},[t._v("Register")]),e("a",{staticClass:"b-header_user-link",attrs:{href:"#"}},[t._v("Login")])])}],w={name:"v-header-user",components:{},props:{},data:function(){return{}},computed:{},methods:{},watch:{}},k=w,A=(e("eb44"),Object(m["a"])(k,E,R,!1,null,"56a7f396",null)),P=A.exports,$={name:"v-header",components:{vMainNavigation:v,vMiniCart:j,vHeaderUser:P},props:{},data:function(){return{}},computed:{},methods:{},watch:{}},D=$,x=(e("543c"),Object(m["a"])(D,s,u,!1,null,null,null)),M=x.exports,S=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"v-footer b-footer"},[e("div",{staticClass:"container"},[t._v(" Footer ")])])}],U=(e("35f7"),{}),I=Object(m["a"])(U,S,F,!1,null,"4f538966",null),L=I.exports,q={name:"v-main-wrapper",components:{vHeader:M,vFooter:L},props:{},data:function(){return{}},computed:{},methods:{},watch:{}},H=q,z=Object(m["a"])(H,o,c,!1,null,null,null),G=z.exports,Q={name:"app",components:{vMainWrapper:G}},B=Q,W=Object(m["a"])(B,r,i,!1,null,null,null),J=W.exports,N=e("bc3a"),V=e.n(N),K={GET_PRODUCTS_FROM_API:function(t){var a=t.commit;return V()({method:"get",url:"http://makeup-api.herokuapp.com/api/v1/products.json?brand=smashbox"}).then((function(t){return a("SET_PRODUCTS_TO_STATE",t.data),t})).catch((function(t){return console.log(t),t}))},ADD_TO_CART:function(t,a){var e=t.commit;e("SET_CART",a)},DELETE_FROM_CART:function(t,a){var e=t.commit;e("REMOVE_FROM_CART",a)}},X=(e("d81d"),e("a434"),{SET_PRODUCTS_TO_STATE:function(t,a){t.products=a},SET_CART:function(t,a){if(t.cart.length){var e=!1;t.cart.map((function(t){t.id===a.id&&(e=!0,t.quantity++)})),e||t.cart.push(a)}else t.cart.push(a)},REMOVE_FROM_CART:function(t,a){t.cart.splice(a,1)}}),Y={PRODUCTS:function(t){return t.products},CART:function(t){return t.cart}};n["default"].use(g["a"]);var Z=new g["a"].Store({state:{products:[],cart:[]},mutations:X,actions:K,getters:Y}),tt=Z,at=e("8c4f"),et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"v-catalog b-catalog container"},[e("h1",{staticClass:"b-page_title"},[t._v("Catalog")]),t.loading?e("v-loader"):t._l(t.PRODUCTS,(function(a){return e("v-catalog-item",{key:a.article,attrs:{product_data:a},on:{addToCart:t.addToCart}})}))],2)},nt=[],rt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"b-catalog-item"},[e("img",{attrs:{src:t.product_data.image_link,alt:""}}),e("router-link",{attrs:{to:{name:"product",params:{product_data:t.product_data}}}},[e("span",[t._v(t._s(t.product_data.name))])]),e("p",[t._v("price: $ "+t._s(t.product_data.price))]),e("button",{on:{click:t.addToCart}},[t._v("Add to cart")])],1)},it=[],ot={name:"v-catalog-item",components:{},props:{product_data:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{},methods:{addToCart:function(){this.$emit("addToCart",this.product_data)},goToProduct:function(){this.$emit("goToProduct")}},mounted:function(){this.$set(this.product_data,"quantity",1)}},ct=ot,st=e("8dfa");function ut(t){this["$style"]=st["default"].locals||st["default"]}var lt=Object(m["a"])(ct,rt,it,!1,ut,null,null),dt=lt.exports,_t=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"lds-dual-ring"})},ft=[],mt=(e("adf9"),{}),pt=Object(m["a"])(mt,_t,ft,!1,null,null,null),vt=pt.exports,ht={name:"v-catalog",components:{vCatalogItem:dt,vLoader:vt},props:{},data:function(){return{loading:!0}},computed:Object(C["a"])({},Object(g["c"])(["PRODUCTS"])),methods:Object(C["a"])(Object(C["a"])({},Object(g["b"])(["GET_PRODUCTS_FROM_API","ADD_TO_CART"])),{},{addToCart:function(t){this.ADD_TO_CART(t)}}),mounted:function(){var t=this;this.GET_PRODUCTS_FROM_API().then((function(a){a.data&&(console.log("Data arrived"),t.loading=!1)}))}},bt=ht,Ct=(e("3c1e"),Object(m["a"])(bt,et,nt,!1,null,null,null)),gt=Ct.exports,Ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"v-cart b-cart container"},[e("h1",{staticClass:"b-page_title"},[t._v("Cart")]),e("router-link",{attrs:{to:{name:"catalog"}}},[e("div",{staticClass:"v-catalog__link_to_cart"},[t._v("Back to catalog")])]),t.cart_data.length?t._e():e("p",[t._v("No products...")]),t._l(t.cart_data,(function(a,n){return e("v-cart-item",{key:a.id,attrs:{cart_item_data:a},on:{deleteFromCart:function(a){return t.deleteFromCart(n)}}})})),e("div",{staticClass:"v-cart_total"},[e("p",[t._v("Total: $"+t._s(t.cartTotalCost))])])],2)},Tt=[],yt=e("b85c"),jt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"v-cart-item"},[e("img",{attrs:{src:t.cart_item_data.image_link,alt:""}}),e("div",{staticClass:"v-cart-item-info"},[e("p",[t._v(t._s(t.cart_item_data.name))]),e("p",[t._v(t._s(t.cart_item_data.price))])]),e("div",{staticClass:"v-cart-item_quantity"},[e("p",[t._v("Qty:")]),e("span",[e("span",{on:{click:t.minusItemQuantity}},[t._v("-")]),t._v(" "+t._s(t.cart_item_data.quantity)+" "),e("span",{on:{click:t.plusItemQuantity}},[t._v("+")])])]),e("button",{on:{click:t.deleteFromCart}},[t._v("Delete")])])},Et=[],Rt={name:"v-cart-item",components:{},props:{cart_item_data:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{},methods:{deleteFromCart:function(){this.$emit("deleteFromCart")},minusItemQuantity:function(){if(this.cart_item_data.quantity>1)return this.cart_item_data.quantity--},plusItemQuantity:function(){return this.cart_item_data.quantity++}},watch:{},mounted:function(){}},wt=Rt,kt=e("d572");function At(t){this["$style"]=kt["default"].locals||kt["default"]}var Pt=Object(m["a"])(wt,jt,Et,!1,At,null,null),$t=Pt.exports,Dt={name:"v-cart",components:{vCartItem:$t},props:{cart_data:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{cartTotalCost:function(){if(this.cart_data.length){var t,a=[],e=Object(yt["a"])(this.cart_data);try{for(e.s();!(t=e.n()).done;){var n=t.value;a.push(n.price*n.quantity)}}catch(r){e.e(r)}finally{e.f()}return a=a.reduce((function(t,a){return t+a})),a}return 0}},methods:Object(C["a"])(Object(C["a"])({},Object(g["b"])(["DELETE_FROM_CART"])),{},{deleteFromCart:function(t){this.DELETE_FROM_CART(t)}}),watch:{}},xt=Dt,Mt=Object(m["a"])(xt,Ot,Tt,!1,null,null,null),St=Mt.exports,Ft=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"b-product-item"},[e("img",{attrs:{src:t.product_data.image,alt:""}}),e("div",{staticClass:"b-cart-item-info"},[e("p",[t._v(t._s(t.product_data.title))]),e("p",[t._v(t._s(t.product_data.price))]),e("p",[t._v(t._s(t.product_data.description))])])])},Ut=[],It={name:"v-product-item",components:{},props:{product_data:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},methods:{},watch:{}},Lt=It,qt=Object(m["a"])(Lt,Ft,Ut,!1,null,null,null),Ht=qt.exports,zt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"v-home l-home"},[e("div",{staticClass:"b-home_products container"},[t.loading?e("v-loader"):t._l(t.cutTheProducts,(function(a){return e("v-home-tiles",{key:a.id,attrs:{product_data:a},on:{addToCart:t.addToCart}})}))],2)])},Gt=[],Qt=(e("fb6a"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:"v-home-tiles b-home_tile m-tile_"+t.product_data.id},[e("div",{staticClass:"b-home_tile-image"},[e("img",{staticClass:"b-home_tile-img",attrs:{src:t.product_data.image_link,alt:""}})]),e("div",{staticClass:"b-home_tile-price"},[t._v("$"+t._s(t._f("roundPrice")(t.product_data.price)))]),e("div",{staticClass:"b-home_tile-body"},[e("router-link",{staticClass:"b-home_tile-title",attrs:{to:{name:"product",params:{product_data:t.product_data}}}},[t._v(" "+t._s(t.product_data.name)+" ")]),e("div",{staticClass:"b-home_tile-description"},[t._v(t._s(t._f("cutDescription")(t.product_data.description)))]),e("button",{staticClass:"b-home_tile-button",on:{click:t.addToCart}},[t._v("Add to cart")])],1)])}),Bt=[],Wt={name:"v-home-tiles",components:{},props:{product_data:{type:Object,default:function(){return{}}}},filters:{cutDescription:function(t){var a=t;return t.length>=80&&(a=t.substr(0,80)+"..."),a},roundPrice:function(t){return Math.round(t)}},data:function(){return{}},computed:{},methods:{addToCart:function(){this.$emit("addToCart",this.product_data)},goToProduct:function(){this.$emit("goToProduct")}},mounted:function(){this.$set(this.product_data,"quantity",1)}},Jt=Wt,Nt=(e("b8fc"),Object(m["a"])(Jt,Qt,Bt,!1,null,null,null)),Vt=Nt.exports,Kt={name:"v-home",components:{vHomeTiles:Vt,vLoader:vt},props:{},data:function(){return{loading:!0}},computed:Object(C["a"])(Object(C["a"])({},Object(g["c"])(["PRODUCTS"])),{},{cutTheProducts:function(){var t=[];return this.PRODUCTS.length>=5&&(t=this.PRODUCTS.slice(0,6)),t}}),methods:Object(C["a"])(Object(C["a"])({},Object(g["b"])(["GET_PRODUCTS_FROM_API","ADD_TO_CART"])),{},{addToCart:function(t){this.ADD_TO_CART(t)}}),mounted:function(){var t=this;this.GET_PRODUCTS_FROM_API().then((function(a){a.data&&(t.loading=!1)}))}},Xt=Kt,Yt=(e("245a"),Object(m["a"])(Xt,zt,Gt,!1,null,"afff9f7c",null)),Zt=Yt.exports;n["default"].use(at["a"]);var ta=new at["a"]({mode:"history",routes:[{path:"/catalog",name:"catalog",component:gt},{path:"/cart",name:"cart",component:St,props:!0},{path:"/product/:product_data.id",name:"product",component:Ht,props:!0},{path:"/",alias:"/home",name:"home",component:Zt}]}),aa=ta,ea=(e("569e"),e("5f5b")),na=e("b1e0");e("f9e3"),e("2dd8"),e("5df9");n["default"].config.productionTip=!1,n["default"].use(ea["a"]),n["default"].use(na["a"]),new n["default"]({render:function(t){return t(J)},store:tt,router:aa}).$mount("#app")},"5f10":function(t,a,e){},"6afd":function(t,a,e){},"6e46":function(t,a,e){t.exports={"b-catalog-item":"v-catalog-item_b-catalog-item_IjGUO"}},"73b2":function(t,a,e){},8142:function(t,a,e){},"8dfa":function(t,a,e){"use strict";var n=e("6e46"),r=e.n(n);e.d(a,"default",(function(){return r.a}))},9680:function(t,a,e){},"9ecf":function(t,a,e){},adf9:function(t,a,e){"use strict";e("17a7")},afce:function(t,a,e){"use strict";e("9ecf")},b843:function(t,a,e){"use strict";e("6afd")},b8fc:function(t,a,e){"use strict";e("56b9")},d572:function(t,a,e){"use strict";var n=e("f952"),r=e.n(n);e.d(a,"default",(function(){return r.a}))},e835:function(t,a,e){},eb44:function(t,a,e){"use strict";e("9680")},f952:function(t,a,e){t.exports={"v-cart-item":"v-cart-item_v-cart-item_2neBP"}}});
//# sourceMappingURL=app.8706636c.js.map