webpackJsonp([10],{RTQw:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("a3Yh"),n=i.n(s),o=i("4YfN"),l=i.n(o),c=i("ZLEe"),a=i.n(c),r={data:function(){return{loading:!0,isEdit:!1,list:[],selectedItems:{}}},computed:{isAllSelected:function(){var t=this;return this.list.every(function(e){return e.list.every(function(e){return!!t.selectedItems[e.id]})})},itemTotal:function(){if(!this.list)return 0;var t=0;return this.list.forEach(function(e){t+=e.list.length}),t}},mounted:function(){this.queryList()},methods:{queryList:function(){var t=this;this.$http.withLoading("/api/history/goodses").then(function(e){t.loading=!1,t.list=e.list})},deleteGoods:function(t){var e=this;this.$http.withLoading({url:"/api/history/goodses",data:{history_ids:t},method:"delete"}).then(function(t){e.$toast("删除成功"),e.queryList()})},toggleEdit:function(){this.isEdit=!this.isEdit},deleteAll:function(){var t=this,e=a()(this.selectedItems).filter(function(e){return t.selectedItems[e]});if(!e.length)return this.$toast("未选中足迹");this.$messagebox.confirm("确认删除足迹?").then(function(i){"cancel"!==i&&t.$http.withLoading({url:"/api/history/goodses",data:{history_ids:e.join(",")},method:"delete"}).then(function(e){t.$toast("删除成功"),t.queryList(),t.isEdit=!1})})},toggleSelect:function(t){this.selectedItems=l()({},this.selectedItems,n()({},t,!this.selectedItems[t]))},toggleSelectAll:function(t){var e={};this.list.forEach(function(i){i.list.forEach(function(i){e[i.id]=t})}),this.selectedItems=e}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page my-views-page"},[i("x-cell",[t._v("\n    共找到"+t._s(t.itemTotal)+"个足迹\n    "),i("x-button",{attrs:{slot:"right",inline:"",pill:""},nativeOn:{click:function(e){t.toggleEdit(e)}},slot:"right"},[t._v(t._s(t.isEdit?"完成":"编辑"))])],1),t._v(" "),t.loading?t._e():[t.list.length?i("div",t._l(t.list,function(e){return i("div",[i("div",{staticStyle:{margin:"0.3733rem 0.48rem","font-size":"12px",color:"#999999"}},[t._v(t._s(e.month))]),t._v(" "),i("x-card-list",t._l(e.list,function(e){return i("x-card",{key:e.id,attrs:{pic:e.cover,"pic-height":"4.2667rem"}},[i("span",[t._v(t._s(e.name))]),t._v(" "),i("x-money",{attrs:{slot:"meta",value:e.price},slot:"meta"}),t._v(" "),i("div",{attrs:{slot:"extra"},slot:"extra"},[t.isEdit?i("x-checkbox",{attrs:{value:t.selectedItems[e.id]},on:{input:function(i){t.toggleSelect(e.id)}}}):i("x-icon",{staticStyle:{width:"25px",height:"25px"},attrs:{type:"delete_goods"},nativeOn:{click:function(i){t.deleteGoods(e.id)}}})],1)],1)}))],1)})):i("div",{staticClass:"page-empty"},[t._m(0,!1,!1),t._v(" "),i("p",{staticClass:"page-empty-text"},[t._v("一个足迹都没有，快去寻找你喜欢的商品吧！")]),t._v(" "),i("x-button",{staticClass:"page-empty-btn",attrs:{type:"primary",inline:"",pill:""},nativeOn:{click:function(e){t.$router.push({path:"/product/list"})}}},[t._v("随便逛逛")])],1),t._v(" "),t.isEdit?i("x-fixed-bottom",{staticStyle:{"font-size":"14px"}},[i("x-cell",{attrs:{slot:"content"},slot:"content"},[i("x-checkbox",{attrs:{value:t.isAllSelected},on:{input:t.toggleSelectAll}}),t._v(" "),i("span",[t._v("全选")])],1),t._v(" "),i("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.deleteAll(e)}}},[t._v("删除")])],1):t._e()]],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"page-empty-img"},[e("img",{attrs:{src:"/static/icon/ic_footstep.png",alt:"icon"}})])}]},d=i("/Xao")(r,u,!1,function(t){i("SzAv")},null,null);e.default=d.exports},SzAv:function(t,e,i){var s=i("ZDk5");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("8bSs")("a821710a",s,!0)},ZDk5:function(t,e,i){(t.exports=i("BkJT")(!0)).push([t.i,"\n.page {\n  font-size: 14px;\n}\n","",{version:3,sources:["E:/dev/wemall/src/views/my/my-views.vue"],names:[],mappings:";AACA;EACE,gBAAgB;CACjB",file:"my-views.vue",sourcesContent:["\n.page {\n  font-size: 14px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=10.ff5ae0c9d74323024bc7.js.map