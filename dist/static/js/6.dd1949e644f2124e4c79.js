webpackJsonp([6],{LHFB:function(t,e,n){(t.exports=n("BkJT")(!0)).push([t.i,"\n.page {\n  font-size: 14px;\n}\n.myfoot-list {\n  overflow: hidden;\n  padding: 0 0.27rem;\n  /*margin-bottom: -0.25rem;*/\n}\n.myfoot-item {\n  float: left;\n  margin-right: 0.4rem;\n  margin-bottom: 0.25rem;\n}\n.myfoot-item:nth-child(2n) {\n  margin-right: 0;\n}\n","",{version:3,sources:["E:/dev/wemall/src/views/my/my-views.vue"],names:[],mappings:";AACA;EACE,gBAAgB;CACjB;AACD;EACE,iBAAiB;EACjB,mBAAmB;EACnB,4BAA4B;CAC7B;AACD;EACE,YAAY;EACZ,qBAAqB;EACrB,uBAAuB;CACxB;AACD;EACE,gBAAgB;CACjB",file:"my-views.vue",sourcesContent:["\n.page {\n  font-size: 14px;\n}\n.myfoot-list {\n  overflow: hidden;\n  padding: 0 0.27rem;\n  /*margin-bottom: -0.25rem;*/\n}\n.myfoot-item {\n  float: left;\n  margin-right: 0.4rem;\n  margin-bottom: 0.25rem;\n}\n.myfoot-item:nth-child(2n) {\n  margin-right: 0;\n}\n"],sourceRoot:""}])},RTQw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={mixins:[n("WEj0").c],data:function(){return{isEdit:!1,selectedItems:{0:!1}}},computed:{isAllSelected:function(){for(var t in this.selectedItems)if(!this.selectedItems[t])return!1;return!0}},mounted:function(){this.queryList()},methods:{queryList:function(t){var e=this;this.$http.withLoading(t||"/api/history/goodses").then(function(t){e.setListData(t.list)})},deleteGoods:function(t){console.log("delete "+t)},toggleEdit:function(){this.isEdit=!this.isEdit},deleteAll:function(){},toggleSelect:function(t){this.selectedItems[t]=!this.selectedItems[t]},toggleSelectAll:function(t){for(var e in this.selectedItems)this.selectedItems[e]=t}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page my-views-page"},[n("x-cell",[t._v("\n    共找到4个足迹\n    "),n("x-button",{attrs:{slot:"right",inline:"",pill:""},nativeOn:{click:function(e){t.toggleEdit(e)}},slot:"right"},[t._v(t._s(t.isEdit?"完成":"编辑"))])],1),t._v(" "),n("div",{staticStyle:{margin:"0.3733rem 0.48rem","font-size":"12px",color:"#999999"}},[t._v("11月15日")]),t._v(" "),n("div",{staticClass:"myfoot-list"},[n("x-card",{staticClass:"myfoot-item",attrs:{pic:"/static/img/order.png","pic-width":"4.53rem","pic-height":"4.2667rem"}},[n("span",[t._v("2017年新款茶灵春季茶灵茶灵面膜50ml 提...")]),t._v(" "),n("x-money",{attrs:{slot:"meta",value:158},slot:"meta"}),t._v(" "),n("div",{attrs:{slot:"extra"},slot:"extra"},[t.isEdit?n("x-checkbox",{attrs:{value:t.selectedItems[0]},on:{input:function(e){t.toggleSelect(0)}}}):n("x-icon",{staticStyle:{width:"25px",height:"25px"},attrs:{type:"delete_goods"},nativeOn:{click:function(e){t.deleteGoods(0)}}})],1)],1)],1),t._v(" "),t.isEdit?n("x-fixed-bottom",{staticStyle:{"font-size":"14px"}},[n("x-cell",{attrs:{slot:"content"},slot:"content"},[n("x-checkbox",{attrs:{value:t.isAllSelected},on:{input:t.toggleSelectAll}}),t._v(" "),n("span",[t._v("全选")])],1),t._v(" "),n("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.deleteAll(e)}}},[t._v("删除")])],1):t._e()],1)},staticRenderFns:[]},o=n("/Xao")(i,s,!1,function(t){n("lI9M")},null,null);e.default=o.exports},lI9M:function(t,e,n){var i=n("LHFB");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("8bSs")("7dc9f4ce",i,!0)}});
//# sourceMappingURL=6.dd1949e644f2124e4c79.js.map