webpackJsonp([14],{"8xsm":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page order-detail-page"},[t.order?[r("x-cell",{staticClass:"order-detail-banner"},[t._v("\n      "+t._s(t._f("orderStatus")(t.order.status))+"\n      "),r("div",{staticClass:"image",staticStyle:{width:"1.07rem",height:"1.07rem","background-color":"transparent"},attrs:{slot:"right"},slot:"right"},[r("img",{attrs:{src:"/static/icon/ic_change_hands_goods.png",alt:""}})])]),t._v(" "),t.order.express?r("x-media-object",{attrs:{icon:"address",size:"27px",padding:""}},[r("div",{staticClass:"success"},[t._v("江西信丰县工业园公司 已签收 签收人：本人签收")]),t._v(" "),r("div",{staticClass:"success"},[t._v("2017-05-24 20:34:3")])]):t._e(),t._v(" "),t.order.address?r("x-media-object",{staticClass:"mgb",attrs:{icon:"address",size:"27px",padding:""}},[r("x-cell",{staticStyle:{"margin-bottom":"5px"},attrs:{padding:!1}},[r("p",[t._v("收货人："+t._s(t.order.address.consignee))]),t._v(" "),r("span",{attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.order.address.phone))])]),t._v(" "),r("p",[t._v("收货地址："+t._s(t._f("address")(t.order.address)))])],1):t._e(),t._v(" "),r("div",{staticClass:"goods-list mgb"},t._l(t.order.goods,function(e){return r("div",{key:e.id,staticClass:"goods-list-item"},[r("x-media-object",{attrs:{pic:e.goods_cover,padding:"",bordered:""}},[r("div",{on:{click:function(r){t.gotoGoodsDetail(e)}}},[t._v(t._s(e.goods_name))]),t._v(" "),r("span",{attrs:{slot:"secondary"},slot:"secondary"},[t._v(t._s(t._f("goodsSkuName")(e)))]),t._v(" "),r("x-money",{attrs:{slot:"bottom-left",value:e.sale_price},slot:"bottom-left"}),t._v(" "),r("span",{attrs:{slot:"bottom-right"},slot:"bottom-right"},[t._v("x"+t._s(e.num))])],1),t._v(" "),t.order.status>0?r("x-cell",[r("div",{attrs:{slot:"right"},slot:"right"},[1===t.order.status&&1===e.status?r("x-button",{attrs:{pill:"",ghost:"",inline:""},nativeOn:{click:function(r){t.applyRefund(e,0)}}},[t._v("申请退款")]):t._e(),t._v(" "),t.order.status>1&&t.order.status<5&&1===e.status?r("x-button",{attrs:{pill:"",ghost:"",inline:""},nativeOn:{click:function(r){t.applyRefund(e,1)}}},[t._v("申请售后")]):t._e(),t._v(" "),e.status>1?r("x-button",{attrs:{pill:"",ghost:"",inline:""},nativeOn:{click:function(r){t.viewRefund(e)}}},[t._v("售后中")]):t._e()],1)]):t._e()],1)})),t._v(" "),r("div",{staticClass:"order-price mgb"},[r("x-cell",[t._v("商品总价"),r("x-money",{attrs:{slot:"right",value:t.order.goods_price,size:"small"},slot:"right"})],1),t._v(" "),r("x-cell",[t._v("运费（快递）"),r("x-money",{attrs:{slot:"right",value:t.order.express_price,size:"small"},slot:"right"})],1),t._v(" "),r("x-cell",[t._v("优惠券"),r("x-money",{attrs:{slot:"right",value:t.order.coupon_price,size:"small"},slot:"right"})],1),t._v(" "),r("x-cell",[t._v("实付款（含运费）"),r("x-money",{attrs:{slot:"right",value:t.order.actual_price,color:"red"},slot:"right"})],1)],1),t._v(" "),r("x-field-set",{staticClass:"mgb"},[r("x-field-item",{attrs:{label:"订单编号"}},[t._v(t._s(t.order.order_sn))]),t._v(" "),t.order.pay_method>=1?r("x-field-item",{attrs:{label:"微信交易流水号"}},[t._v(t._s(t.order.trade_no))]):t._e(),t._v(" "),r("x-field-item",{attrs:{label:"创建时间"}},[t._v(t._s(t._f("fullTime")(1e3*t.order.created_at)))]),t._v(" "),t.order.status>=1?r("x-field-item",{attrs:{label:"付款时间"}},[t._v(t._s(t._f("fullTime")(1e3*t.order.pay_time)))]):t._e(),t._v(" "),t.order.status>=2?r("x-field-item",{attrs:{label:"发货时间"}},[t._v(t._s(t._f("fullTime")(1e3*t.order.deliver_time)))]):t._e(),t._v(" "),t.order.status>=3?r("x-field-item",{attrs:{label:"成交时间"}},[t._v(t._s(t._f("fullTime")(1e3*t.order.confirm_time)))]):t._e()],1),t._v(" "),r("x-cell",[r("div",{attrs:{slot:"right"},slot:"right"},[3===t.order.status||t.order.status>=5?r("x-button",{attrs:{pill:"",ghost:"",inline:""},nativeOn:{click:function(e){t.deleteOrder(e)}}},[t._v("删除订单")]):t._e(),t._v(" "),0===t.order.status?r("x-button",{attrs:{pill:"",ghost:"",inline:""},nativeOn:{click:function(e){t.cancelOrder(e)}}},[t._v("取消订单")]):t._e(),t._v(" "),0===t.order.status?r("x-button",{staticClass:"primary",attrs:{pill:"",ghost:"",inline:""},nativeOn:{click:function(e){t.gotoPay(e)}}},[t._v("付款")]):t._e(),t._v(" "),1===t.order.status?r("x-button",{staticClass:"primary",attrs:{pill:"",ghost:"",inline:""},nativeOn:{click:function(e){t.remindDelivery(e)}}},[t._v("提醒发货")]):t._e(),t._v(" "),2===t.order.status||4===t.order.status?r("x-button",{attrs:{pill:"",ghost:"",inline:""},nativeOn:{click:function(e){t.gotoDelivery(e)}}},[t._v("查看物流")]):t._e(),t._v(" "),2===t.order.status||4===t.order.status?r("x-button",{staticClass:"primary",attrs:{pill:"",ghost:"",inline:""},nativeOn:{click:function(e){t.confirmOrder(e)}}},[t._v("确认收货")]):t._e(),t._v(" "),3!==t.order.status||t.order.comment_status?t._e():r("x-button",{staticClass:"primary",attrs:{pill:"",ghost:"",inline:""},nativeOn:{click:function(e){t.gotoComment(e)}}},[t._v("评价")])],1)])]:t._e()],2)},staticRenderFns:[]},i=r("/Xao")({data:function(){return{id:this.$route.params.id,order:null}},mounted:function(){this.fetchOrderDetail()},methods:{fetchOrderDetail:function(){var t=this;this.$http.withLoading("/api/orders/"+this.id).then(function(e){t.order=e.data})},gotoGoodsDetail:function(t){this.$router.push("/product/"+t.goods_id)},applyRefund:function(t,e){this.$router.push({path:"/refund/apply",query:{goodsid:t.id,type:e}})},viewRefund:function(t){this.$router.push("/refund/"+t.id)},deleteOrder:function(){var t=this;this.$messagebox.confirm("确认删除？").then(function(e){"cancel"!==e&&t.$http.withLoading({url:"/api/orders/"+t.id,method:"delete"}).then(function(e){t.$toast("删除成功"),t.$router.go(-1)})})},cancelOrder:function(t){var e=this;this.$messagebox.confirm("确认取消？").then(function(t){"cancel"!==t&&e.$http.withLoading({url:"/api/order/cancel/"+e.id,method:"put"}).then(function(t){e.$toast("取消成功"),e.$router.go(-1)})})},gotoPay:function(){this.$router.push({path:"/cart/pay",query:{orderid:this.id}})},remindDelivery:function(){},gotoDelivery:function(){this.$router.push("/order/"+this.id+"/delivery")},confirmOrder:function(){var t=this;this.$messagebox.confirm("确认收货？").then(function(e){"cancel"!==e&&t.$http.withLoading({url:"/api/order/receipts",data:{order_id:t.id},method:"post"}).then(function(e){t.$toast("收货成功"),t.fetchOrderDetail()})})},gotoComment:function(){this.$router.push("/order/"+this.id+"/comment")}}},o,!1,function(t){r("eAzq")},null,null);e.default=i.exports},eAzq:function(t,e,r){var o=r("oaJC");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r("8bSs")("184b2e52",o,!0)},oaJC:function(t,e,r){(t.exports=r("BkJT")(!0)).push([t.i,"\n.order-detail-banner.order-detail-banner {\n  padding-top: 0.7467rem;\n  padding-bottom: 0.7467rem;\n  background-image: -webkit-gradient(linear, right top, left top, from(rgb(255, 230, 101)), to(rgb(255, 188, 53)));\n  background-image: linear-gradient(-90deg, rgb(255, 230, 101) 0%, rgb(255, 188, 53) 100%);\n  color: #fff;\n  font-size: 14px;\n}\n.order-price {\n  padding-top: 0.12rem;\n  font-size: 14px;\n  background-color: #fff;\n}\n.order-price .x-cell {\n  padding-top: 0.2133rem;\n  padding-bottom: 0.2133rem;\n}\n.order-price .x-cell:last-child {\n  padding-top: 0.3467rem;\n  padding-bottom: 0.3467rem;\n  border-top: 1px solid #f0f0f0;\n  margin-top: 0.12rem;\n}\n","",{version:3,sources:["E:/dev/wemall/src/views/order/detail.vue"],names:[],mappings:";AACA;EACE,uBAAuB;EACvB,0BAA0B;EAC1B,iHAAiH;EACjH,yFAAyF;EACzF,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,qBAAqB;EACrB,gBAAgB;EAChB,uBAAuB;CACxB;AACD;EACE,uBAAuB;EACvB,0BAA0B;CAC3B;AACD;EACE,uBAAuB;EACvB,0BAA0B;EAC1B,8BAA8B;EAC9B,oBAAoB;CACrB",file:"detail.vue",sourcesContent:["\n.order-detail-banner.order-detail-banner {\n  padding-top: 0.7467rem;\n  padding-bottom: 0.7467rem;\n  background-image: -webkit-gradient(linear, right top, left top, from(rgb(255, 230, 101)), to(rgb(255, 188, 53)));\n  background-image: linear-gradient(-90deg, rgb(255, 230, 101) 0%, rgb(255, 188, 53) 100%);\n  color: #fff;\n  font-size: 14px;\n}\n.order-price {\n  padding-top: 0.12rem;\n  font-size: 14px;\n  background-color: #fff;\n}\n.order-price .x-cell {\n  padding-top: 0.2133rem;\n  padding-bottom: 0.2133rem;\n}\n.order-price .x-cell:last-child {\n  padding-top: 0.3467rem;\n  padding-bottom: 0.3467rem;\n  border-top: 1px solid #f0f0f0;\n  margin-top: 0.12rem;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=14.2fbf97cb21bed69a06b7.js.map