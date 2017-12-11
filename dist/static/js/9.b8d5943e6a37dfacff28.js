webpackJsonp([9],{KZiI:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=n("4YfN"),e=n.n(s),i={data:function(){return{id:this.$route.params.id,swipeImgs:[],goodsInfo:{},skuVisible:!1,skuModel:null,skuValue:null,comboVisible:!1,combos:[],selectedCombo:"xxx-1",comments:[],commentsTotal:10,commentsGoodPercent:"",cartCount:0,recommends:[]}},computed:{selectedSku:function(){return this.goodsInfo.id?this.goodsInfo.is_sku?this.$utils.skuTool.getSelectedSku(this.skuValue,this.skuModel)||{}:this.goodsInfo.skus[0]||{}:{}},selectedSkuText:function(){return this.$utils.skuTool.getSkuText(this.selectedSku)}},mounted:function(){this.pageInit()},methods:{pageInit:function(){this.fetchDetails().then(this.fetchRecommends),this.fetchCombos(),this.fetchComments(),this.fetchCommentReport(),this.fetchCartNumbers()},fetchDetails:function(){var t=this;return this.$http.withLoading("/api/goodses/"+this.id).then(function(o){var n=o.data;t.goodsInfo=n,t.initSlider(n.images),n.is_sku&&t.initSkuData(n)},function(o){t.error=o.message})},fetchCombos:function(){var t=this,o={goods_id:this.id};this.$http("/api/goods/combs",{params:o}).then(function(o){t.combos=o.list.map(function(o,n){return e()({},o,{show_name:"套装"+t.$utils.getChinaNum(n+1)})})},function(o){t.$toast(o.message)})},fetchComments:function(){var t=this,o={goods_id:this.id};this.$http("/api/goods/comments",{params:o}).then(function(o){t.comments=o.list.data.map(function(t){var o=[];for(var n in t.sku_name_arr)o.push(t.sku_name_arr[n]);return e()({},t,{sku_show_name:o.join("  ")})}),t.commentsTotal=o.list.total})},fetchCommentReport:function(){var t=this,o={goods_id:this.id};this.$http("/api/comments/data",{params:o}).then(function(o){o.data.count?t.commentsGoodPercent=o.data.good_colmment/o.data.count:t.commentsGoodPercent=""})},fetchCartNumbers:function(){var t=this;this.$http("/api/cart/nums").then(function(o){t.cartCount=o.data.shopcart_count})},fetchRecommends:function(){var t=this,o=this.goodsInfo.goods_cat_id_third||this.goodsInfo.goods_cat_id_second||this.goodsInfo.goods_cat_id_first;if(o){var n={goods_cat_id:o};this.$http("/api/goods/guesses",{params:n}).then(function(o){t.recommends=o.list})}else console.error("获取分类id失败")},initSlider:function(t){var o="";for(var n in t)t[n].is_default?o=t[n].path:this.swipeImgs.push(t[n].path);o&&this.swipeImgs.unshift(o)},initSkuData:function(t){this.skuModel={property:t.property,skus:t.skus,goodsInfo:{name:t.name,title:t.goods_title,image:this.getGoodsDefaultImage(t)}};var o=this.$route.query.sku_id;o&&(this.skuValue={skuId:o,amount:1,selectedProps:this.$utils.skuTool.getSelectedProps(o,t.skus)})},getGoodsDefaultImage:function(t){var o=t.images.filter(function(t){return t.is_default})[0]||t.images[0];return o?o.path:""},likeGoods:function(){},shareGoods:function(){},addCart:function(){var t=this,o=this.selectedSku.id,n=this.goodsInfo.is_sku?this.skuValue&&this.skuValue.amount:1;return o?0===this.selectedSku.stock?this.$toast("库存不足"):n?void this.$http.withLoading({url:"/api/goods/carts",method:"post",data:{goods_id:this.id,num:n,sku_id:o}}).then(function(o){t.$toast("已加入购物车"),t.$nextTick(function(){t.cartCount+=1,t.skuVisible=!1})}):this.$toast({message:"请选择商品数量"}):this.$toast("请选择规格")},gotoCart:function(){this.$router.push({path:"/cart"})},buyNow:function(){},showProdCombo:function(){this.comboVisible=!0},showSku:function(){this.skuVisible=!0},resetSku:function(){},skuVisibleChange:function(t){this.skuVisible=t},skuValueChange:function(t){this.skuValue=t,console.log(t)}}},a={render:function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"page-product-detail"},[n("div",{staticClass:"top-slider-wrap bdb"},[n("x-slider",{staticClass:"bdb",attrs:{indicator:"number",length:t.swipeImgs.length}},t._l(t.swipeImgs,function(t){return n("x-slider-item",{key:t},[n("img",{attrs:{src:t,alt:""}})])})),t._v(" "),n("x-icon",{staticClass:"product-like-icon",attrs:{type:"praise"},nativeOn:{click:function(o){t.likeGoods(o)}}}),t._v(" "),n("x-icon",{staticClass:"product-share-icon",attrs:{type:"share"},nativeOn:{click:function(o){t.shareGoods(o)}}})],1),t._v(" "),n("div",{staticClass:"mod_pd mgb prod-info"},[n("p",{staticClass:"title black-2 fs-lg"},[t._v(t._s(t.goodsInfo.goods_title))]),t._v(" "),n("x-money",{staticClass:"price",attrs:{value:t.selectedSku.sale_price,size:"large"}})],1),t._v(" "),n("div",{staticClass:"mgb"},[n("x-cell",{attrs:{"icon-right":"more",bordered:""},nativeOn:{click:function(o){t.showProdCombo(o)}}},[n("span",{staticClass:"black-3",staticStyle:{"margin-right":"1.2em"}},[t._v("促销")]),t._v(" "),n("span",{staticClass:"red"},[t._v("优惠套装")]),t._v(" "),n("span",[t._v("| 最高省200.00元")])]),t._v(" "),t.goodsInfo.is_sku?n("x-cell",{attrs:{"icon-right":"more"},nativeOn:{click:function(o){t.showSku(o)}}},[n("span",{staticClass:"black-3"},[t._v("已选规格：")]),t._v(" "),n("span",[t._v(t._s(t.selectedSkuText))])]):t._e()],1),t._v(" "),n("comment-short-list",{attrs:{comments:t.comments,total:t.commentsTotal,"good-percent":t.commentsGoodPercent}}),t._v(" "),n("prod-recommend",{attrs:{items:t.recommends}}),t._v(" "),n("long-detail",{attrs:{content:t.goodsInfo.desc}}),t._v(" "),n("x-fixed-bottom",{staticClass:"product-detail-bottom"},[n("div",{staticClass:"gocart-button",class:{"has-goods":t.cartCount>0},on:{click:t.gotoCart}},[n("div",{staticClass:"gocart-button-inner"},[n("x-icon",{attrs:{type:"cart"}}),t._v(" "),n("br"),t._v(" "),n("span",[t._v("购物车")]),t._v(" "),n("i",{staticClass:"gocart-button-redpoint"})],1)]),t._v(" "),n("x-button",{attrs:{type:"primary"},nativeOn:{click:function(o){t.addCart(o)}}},[t._v("加入购物车")]),t._v(" "),n("x-button",{attrs:{type:"danger"},nativeOn:{click:function(o){t.buyNow(o)}}},[t._v("立即购买")])],1),t._v(" "),n("prod-sku",{attrs:{visible:t.skuVisible,value:t.skuValue,"sku-model":t.skuModel},on:{"visible-change":t.skuVisibleChange,input:t.skuValueChange,cart:t.addCart,buy:t.buyNow}}),t._v(" "),n("prod-combo",{attrs:{visible:t.comboVisible,options:t.combos,value:t.selectedCombo},on:{"visible-change":function(o){t.comboVisible=o},input:function(o){t.selectedCombo=o}}})],1)},staticRenderFns:[]},r=n("/Xao")(i,a,!1,function(t){n("lkZe")},null,null);o.default=r.exports},"ks/y":function(t,o,n){(t.exports=n("BkJT")(!0)).push([t.i,"\n.top-slider-wrap {\n  position: relative;\n}\n.top-slider-wrap .x-slider-item img {\n  height: 8.4rem;\n}\n.product-like-icon.x-icon,\n.product-share-icon.x-icon {\n  position: absolute;\n  top: 0.4237rem;\n  width: 26px;\n  height: 26px;\n}\n.product-like-icon {\n  left: 0.48rem;\n}\n.product-share-icon {\n  right: 0.48rem;\n}\n.gocart-button {\n  position: relative;\n  text-align: center;\n  font-size: 12px;\n  width: 2rem;\n  background: #fff;\n  border-top: 1px solid #e8e8e8;\n}\n.gocart-button-inner {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.gocart-button-redpoint {\n  display: none;\n  position: absolute;\n  right: 5px;\n  top: -2px;\n  background-color: red;\n  width: 6px;\n  height: 6px;\n  border-radius: 100%;\n}\n.gocart-button.has-goods .gocart-button-redpoint {\n  display: block;\n}\n.product-detail-bottom {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n.product-detail-bottom > * {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n","",{version:3,sources:["E:/dev/wemall/src/views/product/detail.vue"],names:[],mappings:";AACA;EACE,mBAAmB;CACpB;AACD;EACE,eAAe;CAChB;AACD;;EAEE,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,aAAa;CACd;AACD;EACE,cAAc;CACf;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,8BAA8B;CAC/B;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,yCAAyC;UACjC,iCAAiC;CAC1C;AACD;EACE,cAAc;EACd,mBAAmB;EACnB,WAAW;EACX,UAAU;EACV,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,oBAAoB;CACrB;AACD;EACE,eAAe;CAChB;AACD;EACE,2BAA2B;MACvB,wBAAwB;UACpB,qBAAqB;CAC9B;AACD;EACE,oBAAoB;MAChB,YAAY;UACR,QAAQ;CACjB",file:"detail.vue",sourcesContent:["\n.top-slider-wrap {\n  position: relative;\n}\n.top-slider-wrap .x-slider-item img {\n  height: 8.4rem;\n}\n.product-like-icon.x-icon,\n.product-share-icon.x-icon {\n  position: absolute;\n  top: 0.4237rem;\n  width: 26px;\n  height: 26px;\n}\n.product-like-icon {\n  left: 0.48rem;\n}\n.product-share-icon {\n  right: 0.48rem;\n}\n.gocart-button {\n  position: relative;\n  text-align: center;\n  font-size: 12px;\n  width: 2rem;\n  background: #fff;\n  border-top: 1px solid #e8e8e8;\n}\n.gocart-button-inner {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.gocart-button-redpoint {\n  display: none;\n  position: absolute;\n  right: 5px;\n  top: -2px;\n  background-color: red;\n  width: 6px;\n  height: 6px;\n  border-radius: 100%;\n}\n.gocart-button.has-goods .gocart-button-redpoint {\n  display: block;\n}\n.product-detail-bottom {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n.product-detail-bottom > * {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n"],sourceRoot:""}])},lkZe:function(t,o,n){var s=n("ks/y");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("8bSs")("1f057d86",s,!0)}});
//# sourceMappingURL=9.b8d5943e6a37dfacff28.js.map