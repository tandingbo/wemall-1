webpackJsonp([18],{"+BtE":function(e,t,n){var i=n("sTs3");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("8bSs")("7b84290a",i,!0)},Qrio:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("a3Yh"),o=n.n(i),r={0:"未知",1:"男",2:"女"},l={data:function(){return{profile:{avatar:"",background:"",username:"",gender:"",birthday:"",motto:""},current:"",editValue:"",months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],selectedMonthIndex:0}},computed:{days:function(){return this.$utils.getMonthDays(this.selectedMonthIndex+1)}},mounted:function(){this.fetchProfile()},methods:{fetchProfile:function(){var e=this;this.$http.withLoading("/api/users").then(function(t){e.profile.avatar=t.data.headimg,e.profile.background=t.data.background,e.profile.username=t.data.username,e.profile.gender=r[t.data.sex],e.profile.birthday=e.formatBirthday(t.data.birthday),e.profile.motto=t.data.motto})},initUpload:function(){},formatBirthday:function(e){if(!e)return"";var t=new Date(1e3*e);return t.getMonth()+1+"月"+t.getDate()+"号"},showPopup:function(e){this.current=e,this.editValue=this.profile[e]},onSelectMonth:function(e){this.selectedMonthIndex=e,this.current="day"},onSelectDay:function(e){if(this.selectedMonthIndex+1+"月"+e+"日"!==this.profile.birthday){var t=("00"+(this.selectedMonthIndex+1)).slice(-2),n=("00"+e).slice(-2);this.updateProfile("birthday",new Date(t+"-"+n)/1e3)}else this.current=""},genderChange:function(e){this.profile.gender!==e?this.updateProfile("sex","男"===e?1:2):this.current=""},save:function(){this.profile[this.current]!==this.editValue?this.updateProfile(this.current,this.editValue):this.current=""},updateProfile:function(e,t){var n=this,i=o()({},e,t);this.$http.withLoading({url:"/api/users",data:i,method:"post"}).then(function(){n.fetchProfile(),n.current=""})},onPopupVisibleChange:function(e){e||(this.current="")}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"profile-field"},[n("div",{staticClass:"profile-label"},[e._v("头像")]),e._v(" "),n("div",{staticClass:"profile-value"},[n("div",{staticClass:"image",staticStyle:{width:"1.6rem",height:"1.6rem"}},[n("img",{attrs:{src:e.profile.headimg}})])])]),e._v(" "),n("div",{staticClass:"profile-field mgb"},[n("div",{staticClass:"profile-label"},[e._v("背景")]),e._v(" "),n("div",{staticClass:"profile-value"},[n("div",{staticClass:"image",staticStyle:{width:"2.4rem",height:"1.6rem"}},[n("img",{attrs:{src:e.profile.background}})])])]),e._v(" "),n("div",{staticClass:"profile-field",attrs:{"icon-right":"more"},on:{click:function(t){e.showPopup("username")}}},[n("div",{staticClass:"profile-label"},[e._v("昵称")]),e._v(" "),n("div",{staticClass:"profile-value"},[e._v(e._s(e.profile.username))])]),e._v(" "),n("div",{staticClass:"profile-field",attrs:{"icon-right":"more"},on:{click:function(t){e.showPopup("gender")}}},[n("div",{staticClass:"profile-label"},[e._v("性别")]),e._v(" "),n("div",{staticClass:"profile-value"},[e._v(e._s(e.profile.gender))])]),e._v(" "),n("div",{staticClass:"profile-field",attrs:{"icon-right":"more"},on:{click:function(t){e.showPopup("month")}}},[n("div",{staticClass:"profile-label"},[e._v("生日")]),e._v(" "),n("div",{staticClass:"profile-value"},[e._v(e._s(e.profile.birthday))])]),e._v(" "),n("div",{staticClass:"profile-field",attrs:{"icon-right":"more"},on:{click:function(t){e.showPopup("motto")}}},[n("div",{staticClass:"profile-label"},[e._v("个性签名")]),e._v(" "),n("div",{staticClass:"profile-value"},[e._v(e._s(e.profile.motto))])]),e._v(" "),n("mt-popup",{staticClass:"profile-popup",attrs:{position:"right",value:!!e.current},on:{input:e.onPopupVisibleChange}},["username"===e.current||"motto"===e.current?n("div",[n("x-field",{model:{value:e.editValue,callback:function(t){e.editValue=t},expression:"editValue"}})],1):e._e(),e._v(" "),"username"===e.current||"motto"===e.current?n("x-button",{staticClass:"profile-popup-btn",attrs:{type:"primary",size:"full"},nativeOn:{click:function(t){e.save(t)}}},[e._v("\n      保存\n    ")]):e._e(),e._v(" "),"gender"===e.current?n("x-radio-select",{attrs:{value:e.editValue,options:[{label:"男",value:"男"},{label:"女",value:"女"}]},on:{input:e.genderChange}}):e._e(),e._v(" "),"month"===e.current?n("div",{staticClass:"profile-popup-list"},e._l(e.months,function(t,i){return n("x-cell",{key:t,attrs:{bordered:""},nativeOn:{click:function(t){e.onSelectMonth(i)}}},[n("div",[e._v(e._s(t))]),e._v(" "),n("x-icon",{attrs:{slot:"right",type:"next_page"},slot:"right"})],1)})):e._e(),e._v(" "),"day"===e.current?n("div",{staticClass:"profile-popup-list"},e._l(e.days,function(t){return n("x-cell",{key:t,attrs:{bordered:""},nativeOn:{click:function(n){e.onSelectDay(t)}}},[n("div",[e._v(e._s(t)+"号")]),e._v(" "),n("x-icon",{attrs:{slot:"right",type:"next_page"},slot:"right"})],1)})):e._e()],1)],1)},staticRenderFns:[]},s=n("/Xao")(l,a,!1,function(e){n("+BtE")},null,null);t.default=s.exports},sTs3:function(e,t,n){(e.exports=n("BkJT")(!0)).push([e.i,"\n.profile-field {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0.4267rem 0.48rem;\n  background-color: #fff;\n  border-bottom: 1px solid #f0f0f0;\n}\n.profile-label {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n}\n.profile-value {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: right;\n  padding-right: 12px;\n}\n.profile-value > * {\n  display: inline-block;\n}\n.profile-value::after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  right: 0;\n  width: 9px;\n  height: 16px;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  background-image: url(\"/static/icon/ic_next_page.png\");\n  background-size: cover;\n}\n.profile-popup {\n  width: 100%;\n  height: 100%;\n  background-color: #f0f0f0;\n}\n.profile-popup-btn {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.profile-popup-list {\n  overflow: auto;\n  height: 100%;\n}\n","",{version:3,sources:["E:/dev/wemall/src/views/my/profile.vue"],names:[],mappings:";AACA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,2BAA2B;EAC3B,uBAAuB;EACvB,iCAAiC;CAClC;AACD;EACE,oBAAoB;MAChB,eAAe;UACX,WAAW;CACpB;AACD;EACE,mBAAmB;EACnB,oBAAoB;MAChB,YAAY;UACR,QAAQ;EAChB,kBAAkB;EAClB,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,SAAS;EACT,WAAW;EACX,aAAa;EACb,oCAAoC;UAC5B,4BAA4B;EACpC,uDAAuD;EACvD,uBAAuB;CACxB;AACD;EACE,YAAY;EACZ,aAAa;EACb,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,QAAQ;CACT;AACD;EACE,eAAe;EACf,aAAa;CACd",file:"profile.vue",sourcesContent:["\n.profile-field {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0.4267rem 0.48rem;\n  background-color: #fff;\n  border-bottom: 1px solid #f0f0f0;\n}\n.profile-label {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n}\n.profile-value {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: right;\n  padding-right: 12px;\n}\n.profile-value > * {\n  display: inline-block;\n}\n.profile-value::after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  right: 0;\n  width: 9px;\n  height: 16px;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  background-image: url(\"/static/icon/ic_next_page.png\");\n  background-size: cover;\n}\n.profile-popup {\n  width: 100%;\n  height: 100%;\n  background-color: #f0f0f0;\n}\n.profile-popup-btn {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.profile-popup-list {\n  overflow: auto;\n  height: 100%;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=18.ec67b9c76b5614f06c3f.js.map