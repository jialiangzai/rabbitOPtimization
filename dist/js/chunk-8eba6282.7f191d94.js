(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8eba6282"],{"1ca5":function(e,t,c){"use strict";c.r(t);c("b0c0");var r=c("7a23"),n=function(e){return Object(r["pushScopeId"])("data-v-435119cf"),e=e(),Object(r["popScopeId"])(),e},a={class:"xtx-pay-checkout-page"},o={class:"container"},l=Object(r["createTextVNode"])("首页"),d=Object(r["createTextVNode"])("购物车"),b=Object(r["createTextVNode"])("填写订单"),i={key:0,class:"wrapper"},s=n((function(){return Object(r["createElementVNode"])("h3",{class:"box-title"},"收货地址",-1)})),u={class:"box-body"},j={class:"address"},O={class:"text"},m={key:0,class:"none"},p={key:1},f=n((function(){return Object(r["createElementVNode"])("span",null,[Object(r["createTextVNode"])("收"),Object(r["createElementVNode"])("i"),Object(r["createTextVNode"])("货"),Object(r["createElementVNode"])("i"),Object(r["createTextVNode"])("人：")],-1)})),N=n((function(){return Object(r["createElementVNode"])("span",null,"联系方式：",-1)})),V=n((function(){return Object(r["createElementVNode"])("span",null,"收货地址：",-1)})),v={class:"action"},E=Object(r["createTextVNode"])("切换地址"),y=Object(r["createTextVNode"])("添加地址"),h=n((function(){return Object(r["createElementVNode"])("h3",{class:"box-title"},"商品信息",-1)})),x={class:"box-body"},g={class:"goods"},k=n((function(){return Object(r["createElementVNode"])("thead",null,[Object(r["createElementVNode"])("tr",null,[Object(r["createElementVNode"])("th",{width:"520"},"商品信息"),Object(r["createElementVNode"])("th",{width:"170"},"单价"),Object(r["createElementVNode"])("th",{width:"170"},"数量"),Object(r["createElementVNode"])("th",{width:"170"},"小计"),Object(r["createElementVNode"])("th",{width:"170"},"实付")])],-1)})),w={href:"javascript:;",class:"info"},D=["src"],S={class:"right"},C=Object(r["createStaticVNode"])('<h3 class="box-title" data-v-435119cf>配送时间</h3><div class="box-body" data-v-435119cf><a class="my-btn active" href="javascript:;" data-v-435119cf>不限送货时间：周一至周日</a><a class="my-btn" href="javascript:;" data-v-435119cf>工作日送货：周一至周五</a><a class="my-btn" href="javascript:;" data-v-435119cf>双休日、假日送货：周六至周日</a></div><h3 class="box-title" data-v-435119cf>支付方式</h3><div class="box-body" data-v-435119cf><a class="my-btn active" href="javascript:;" data-v-435119cf>在线支付</a><a class="my-btn" href="javascript:;" data-v-435119cf>货到付款</a><span style="color:#999;" data-v-435119cf>货到付款需付5元手续费</span></div><h3 class="box-title" data-v-435119cf>金额明细</h3>',5),T={key:0,class:"box-body"},B={class:"total"},A=n((function(){return Object(r["createElementVNode"])("dt",null,"商品件数：",-1)})),P=n((function(){return Object(r["createElementVNode"])("dt",null,"商品总价：",-1)})),_=n((function(){return Object(r["createElementVNode"])("dt",null,[Object(r["createTextVNode"])("运"),Object(r["createElementVNode"])("i"),Object(r["createTextVNode"])("费：")],-1)})),I=n((function(){return Object(r["createElementVNode"])("dt",null,"应付总额：",-1)})),R={class:"price"},X={class:"submit"},L=Object(r["createTextVNode"])("提交订单");function z(e,t,c,n,z,F){var J=Object(r["resolveComponent"])("XtxBreadItem"),M=Object(r["resolveComponent"])("XtxBread"),q=Object(r["resolveComponent"])("XtxButton");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["createElementVNode"])("div",o,[Object(r["createVNode"])(M,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(J,{to:"/"},{default:Object(r["withCtx"])((function(){return[l]})),_:1}),Object(r["createVNode"])(J,{to:"/cart"},{default:Object(r["withCtx"])((function(){return[d]})),_:1}),Object(r["createVNode"])(J,null,{default:Object(r["withCtx"])((function(){return[b]})),_:1})]})),_:1}),n.orderDetail?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",i,[s,Object(r["createElementVNode"])("div",u,[Object(r["createElementVNode"])("div",j,[Object(r["createElementVNode"])("div",O,[n.curAddress?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",m," 您需要先添加收货地址才可提交订单。 ")),n.curAddress?(Object(r["openBlock"])(),Object(r["createElementBlock"])("ul",p,[Object(r["createElementVNode"])("li",null,[f,Object(r["createTextVNode"])(Object(r["toDisplayString"])(n.curAddress.receiver),1)]),Object(r["createElementVNode"])("li",null,[N,Object(r["createTextVNode"])(Object(r["toDisplayString"])(n.curAddress.contact),1)]),Object(r["createElementVNode"])("li",null,[V,Object(r["createTextVNode"])(Object(r["toDisplayString"])(n.curAddress.fullLocation+n.curAddress.address),1)])])):Object(r["createCommentVNode"])("",!0)]),Object(r["createElementVNode"])("div",v,[Object(r["createVNode"])(q,{class:"btn"},{default:Object(r["withCtx"])((function(){return[E]})),_:1}),Object(r["createVNode"])(q,{class:"btn"},{default:Object(r["withCtx"])((function(){return[y]})),_:1})])])]),h,Object(r["createElementVNode"])("div",x,[Object(r["createElementVNode"])("table",g,[k,Object(r["createElementVNode"])("tbody",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(n.orderDetail.goods,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("tr",{key:e.id},[Object(r["createElementVNode"])("td",null,[Object(r["createElementVNode"])("a",w,[Object(r["createElementVNode"])("img",{src:e.picture,alt:""},null,8,D),Object(r["createElementVNode"])("div",S,[Object(r["createElementVNode"])("p",null,Object(r["toDisplayString"])(e.name),1),Object(r["createElementVNode"])("p",null,Object(r["toDisplayString"])(e.attrsText),1)])])]),Object(r["createElementVNode"])("td",null,"¥"+Object(r["toDisplayString"])(e.payPrice),1),Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])(e.count),1),Object(r["createElementVNode"])("td",null,"¥"+Object(r["toDisplayString"])(e.totalPrice),1),Object(r["createElementVNode"])("td",null,"¥"+Object(r["toDisplayString"])(e.totalPayPrice),1)])})),128))])])]),C,n.orderDetail.summary?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",T,[Object(r["createElementVNode"])("div",B,[Object(r["createElementVNode"])("dl",null,[A,Object(r["createElementVNode"])("dd",null,Object(r["toDisplayString"])(n.orderDetail.summary.goodsCount)+"件",1)]),Object(r["createElementVNode"])("dl",null,[P,Object(r["createElementVNode"])("dd",null,"¥"+Object(r["toDisplayString"])(n.orderDetail.summary.totalPrice),1)]),Object(r["createElementVNode"])("dl",null,[_,Object(r["createElementVNode"])("dd",null,"¥"+Object(r["toDisplayString"])(n.orderDetail.summary.postFee),1)]),Object(r["createElementVNode"])("dl",null,[I,Object(r["createElementVNode"])("dd",R,"¥"+Object(r["toDisplayString"])(n.orderDetail.summary.totalPayPrice),1)])])])):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("div",X,[Object(r["createVNode"])(q,{type:"large",bg:"primary",onClick:n.submitOrder},{default:Object(r["withCtx"])((function(){return[L]})),_:1},8,["onClick"])])])):Object(r["createCommentVNode"])("",!0)])])}var F=c("1da1"),J=(c("d81d"),c("96cf"),c("f8b7")),M=c("6c02"),q=c("5502"),G={name:"XtxPayCheckoutPage",setup:function(){var e=Object(r["ref"])({}),t=Object(r["ref"])(null),c=Object(M["d"])(),n=Object(q["d"])(),a=function(){var c=Object(F["a"])(regeneratorRuntime.mark((function c(){var r,n;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,Object(J["b"])();case 2:r=c.sent,n=r.result,e.value=n,t.value=e.value.userAddresses[0];case 6:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();a();var o=function(){var t=Object(F["a"])(regeneratorRuntime.mark((function t(){var a,o,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=Object(r["reactive"])({deliveryTimeType:1,payType:1,buyerMessage:"",addressId:"1429265915203031042",goods:[]}),a.goods=e.value.goods.map((function(e){var t=e.skuId,c=e.count;return{skuId:t,count:c}})),t.next=4,Object(J["a"])(a);case 4:o=t.sent,l=o.result,c.push("/pay?id=".concat(l.id)),n.dispatch("cart/getListActions");case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{orderDetail:e,getDetail:a,curAddress:t,submitOrder:o}}},H=(c("bd8e"),c("6b0d")),K=c.n(H);const Q=K()(G,[["render",z],["__scopeId","data-v-435119cf"]]);t["default"]=Q},"9b3c":function(e,t,c){},bd8e:function(e,t,c){"use strict";c("9b3c")},f8b7:function(e,t,c){"use strict";c.d(t,"b",(function(){return n})),c.d(t,"a",(function(){return a})),c.d(t,"c",(function(){return o})),c.d(t,"d",(function(){return l}));var r=c("b775"),n=function(){return Object(r["a"])("/member/order/pre","get")},a=function(e){return Object(r["a"])("/member/order","post",e)},o=function(e){return Object(r["a"])("/member/order/"+e,"get")},l=function(e){var t=e.page,c=void 0===t?1:t,n=e.pageSize,a=void 0===n?10:n,o=e.orderState,l=void 0===o?0:o;return Object(r["a"])("/member/order","get",{page:c,pageSize:a,orderState:l})}}}]);
//# sourceMappingURL=chunk-8eba6282.7f191d94.js.map