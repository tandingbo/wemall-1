webpackJsonp([7],{"0Jjs":function(t,i,e){(t.exports=e("BkJT")(!0)).push([t.i,"\n.article-content {\n  font-size: 14px;\n  line-height: 20px;\n  background-color: #fff;\n  padding: 0.4267rem 0.48rem;\n}\n.article-content img {\n  max-width: 100%;\n}\n","",{version:3,sources:["E:/dev/wemall/src/views/my/notice.vue"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,2BAA2B;CAC5B;AACD;EACE,gBAAgB;CACjB",file:"notice.vue",sourcesContent:["\n.article-content {\n  font-size: 14px;\n  line-height: 20px;\n  background-color: #fff;\n  padding: 0.4267rem 0.48rem;\n}\n.article-content img {\n  max-width: 100%;\n}\n"],sourceRoot:""}])},Km0d:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"page article-page"},[this.article?i("div",[i("x-cell",{staticClass:"article-title bdb"},[i("p",{staticClass:"mgb",staticStyle:{"line-height":"1.25"}},[this._v(this._s(this.article.title))]),this._v(" "),i("p",{staticClass:"black-3 fs-sm"},[i("time",[this._v(this._s(this._f("fullTime")(1e3*this.article.created_at)))])])]),this._v(" "),i("div",{staticClass:"article-content"},[i("div",{domProps:{innerHTML:this._s(this.article.content)}})])],1):this._e(),this._v(" "),this.error?i("div",[this._v("\n    "+this._s(this.error)+"\n  ")]):this._e()])},staticRenderFns:[]},s=e("/Xao")({data:function(){return{id:this.$route.params.id,article:null,error:""}},mounted:function(){this.queryArticleDetail()},methods:{queryArticleDetail:function(){var t=this;this.$http.withLoading("/api/notices/"+this.id).then(function(i){t.article=i.data},function(i){t.error=i.message})}}},n,!1,function(t){e("bXcD")},null,null);i.default=s.exports},bXcD:function(t,i,e){var n=e("0Jjs");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("8bSs")("a034df6a",n,!0)}});
//# sourceMappingURL=7.87fa51becab559616a74.js.map