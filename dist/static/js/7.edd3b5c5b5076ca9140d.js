webpackJsonp([7],{"2Vrk":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={mixins:[s("WEj0").c],data:function(){return{cacheList:[],cacheNextPage:"",currentTab:1}},watch:{currentTab:function(t,e){var s=this.list,i=this.nextPage;this.list=this.cacheList,this.nextPage=this.cacheNextPage,this.cacheList=s,this.cacheNextPage=i,this.list.length||this.queryList()}},mounted:function(){this.queryList()},methods:{queryList:function(t){var e=this,s=t||(1===this.currentTab?"/api/post/comments":"/api/article/choiceness");this.$http.withLoading(s).then(function(t){e.setListData(t.list)})},toggleLike:function(t){},gotoProduct:function(t){this.$router.push("/product/"+t.goods_id)},gotoArticle:function(t){this.$router.push("/shares/article/"+t.id)}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page shares-page"},[s("x-navbar",{staticClass:"mgb",model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[s("mt-tab-item",{attrs:{id:1}},[t._v("晒单")]),t._v(" "),s("mt-tab-item",{attrs:{id:2}},[t._v("文章")])],1),t._v(" "),1===t.currentTab?s("x-card-list",t._l(t.list,function(e){return s("x-card",{key:e.id,attrs:{pic:e.goods_cover,"pic-height":"4.2667rem"},nativeOn:{click:function(s){t.gotoProduct(e)}}},[s("p",{staticClass:"black-3 mgb"},[t._v(t._s(e.comment))]),t._v(" "),s("x-media-object",{staticClass:"shares-comment"},[s("div",{attrs:{slot:"left"},slot:"left"},[s("x-avatar",{attrs:{src:e.headimg,size:"30px"}})],1),t._v(" "),s("div",[t._v(t._s(e.username))]),t._v(" "),s("div",{staticClass:"star",class:(i={},i["star-"+e.star]=!0,i)})]),t._v(" "),s("div",[t._v(t._s(e.goods_name))])],1);var i})):t._e(),t._v(" "),2===t.currentTab?s("x-card-list",t._l(t.list,function(e){return s("x-card",{key:e.id,attrs:{pic:e.cover,"pic-height":"4.2667rem"}},[s("p",{staticClass:"black-3 mgb",on:{click:function(s){t.gotoArticle(e)}}},[t._v(t._s(e.author))]),t._v(" "),s("div",[s("x-icon",{attrs:{type:"praise"},nativeOn:{click:function(s){t.toggleLike(e)}}}),t._v(" "),s("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(e.collect_num))])],1)])})):t._e()],1)},staticRenderFns:[]},n=s("/Xao")(i,a,!1,function(t){s("YBrG")},null,null);e.default=n.exports},YBrG:function(t,e,s){var i=s("uj2d");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("8bSs")("d9df2af8",i,!0)},uj2d:function(t,e,s){(t.exports=s("BkJT")(!0)).push([t.i,"\n.x-media.shares-comment .image {\n  border: none;\n}\n","",{version:3,sources:["E:/dev/wemall/src/views/shares/shares.vue"],names:[],mappings:";AACA;EACE,aAAa;CACd",file:"shares.vue",sourcesContent:["\n.x-media.shares-comment .image {\n  border: none;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=7.edd3b5c5b5076ca9140d.js.map