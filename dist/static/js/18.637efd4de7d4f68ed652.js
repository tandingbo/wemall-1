webpackJsonp([18],{"2Vrk":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={mixins:[e("WEj0").c],data:function(){return{cacheList:[],cacheNextPage:"",currentTab:2}},watch:{currentTab:function(t,i){var e=this.list,s=this.nextPage;this.list=this.cacheList,this.nextPage=this.cacheNextPage,this.cacheList=e,this.cacheNextPage=s,this.list.length||this.queryList()}},mounted:function(){this.queryList()},methods:{queryList:function(t){var i=this,e=t||(1===this.currentTab?"/api/post/comments":"/api/article/choiceness");this.$http.withLoading(e).then(function(t){i.setListData(t.list)})},toggleLike:function(t){},gotoProduct:function(t){this.$router.push("/product/"+t.goods_id)},gotoArticle:function(t){this.$router.push("/shares/article/"+t.id)}}},a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"page shares-page"},[e("x-navbar",{staticClass:"mgb",model:{value:t.currentTab,callback:function(i){t.currentTab=i},expression:"currentTab"}},[e("mt-tab-item",{attrs:{id:1}},[t._v("晒单")]),t._v(" "),e("mt-tab-item",{attrs:{id:2}},[t._v("文章")])],1),t._v(" "),1===t.currentTab?e("div",{staticClass:"card-list"},t._l(t.list,function(i){return e("x-card",{key:i.id,staticClass:"card-list-item",attrs:{pic:i.goods_cover,"pic-width":"4.53rem","pic-height":"4.2667rem"},nativeOn:{click:function(e){t.gotoProduct(i)}}},[e("p",{staticClass:"black-3 mgb"},[t._v(t._s(i.comment))]),t._v(" "),e("x-media-object",{attrs:{pic:i.headimg,size:"30px"}},[e("div",[t._v(t._s(i.username))]),t._v(" "),e("div",{staticClass:"star",class:(s={},s["star-"+i.star]=!0,s)})]),t._v(" "),e("div",[t._v(t._s(i.goods_name))])],1);var s})):t._e(),t._v(" "),2===t.currentTab?e("div",{staticClass:"card-list"},t._l(t.list,function(i){return e("x-card",{key:i.id,staticClass:"card-list-item",attrs:{pic:i.cover,"pic-width":"4.53rem","pic-height":"4.2667rem"}},[e("p",{staticClass:"black-3 mgb",on:{click:function(e){t.gotoArticle(i)}}},[t._v(t._s(i.author))]),t._v(" "),e("div",[e("x-icon",{attrs:{type:"praise"},nativeOn:{click:function(e){t.toggleLike(i)}}}),t._v(" "),e("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(i.collect_num))])],1)])})):t._e()],1)},staticRenderFns:[]},c=e("/Xao")(s,a,!1,null,null,null);i.default=c.exports}});
//# sourceMappingURL=18.637efd4de7d4f68ed652.js.map