(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b3c7146"],{"05d0":function(e,t,n){"use strict";n("b683")},"15e7":function(e,t,n){},"16c0":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c={class:"container"};function o(e,t,n,o,i,a){var s=Object(r["resolveComponent"])("HomeCategory"),u=Object(r["resolveComponent"])("HomeBanner"),l=Object(r["resolveComponent"])("HomeNew"),d=Object(r["resolveComponent"])("HomeHot"),b=Object(r["resolveComponent"])("HomeProduct");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,[Object(r["createVNode"])(s),Object(r["createVNode"])(u),Object(r["createVNode"])(l),Object(r["createVNode"])(d),Object(r["createVNode"])(b)])}n("b0c0");var i=function(e){return Object(r["pushScopeId"])("data-v-0ed5e6ef"),e=e(),Object(r["popScopeId"])(),e},a={class:"home-category"},s={class:"menu"},u=["onMouseenter"],l={key:0,class:"layer"},d=i((function(){return Object(r["createElementVNode"])("h4",null,[Object(r["createTextVNode"])("分类推荐 "),Object(r["createElementVNode"])("small",null,"根据您的购买或浏览记录推荐")],-1)})),b=["src"],f={class:"info"},O={class:"name ellipsis-2"},m={class:"desc ellipsis"},j={class:"price"},p=i((function(){return Object(r["createElementVNode"])("i",null,"¥",-1)}));function h(e,t,n,c,o,i){var h=Object(r["resolveComponent"])("RouterLink"),v=Object(r["resolveComponent"])("XtxSkeleton");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["createElementVNode"])("ul",s,[c.secons.length?(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],{key:0},Object(r["renderList"])(c.secons,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:e.id,onMouseenter:function(t){return c.cateId=e.id}},[Object(r["createVNode"])(h,{to:"/"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.name),1)]})),_:2},1024),e.children?(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],{key:0},Object(r["renderList"])(e.children,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(h,{key:e.id,to:"/"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.name),1)]})),_:2},1024)})),128)):Object(r["createCommentVNode"])("",!0)],40,u)})),128)):(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:1},Object(r["renderList"])(9,(function(e){return Object(r["createElementVNode"])("li",{key:e},[Object(r["createVNode"])(v,{width:40,height:20,style:{"margin-right":"10px"},bg:"rgba(255,255,255,0.2)"}),Object(r["createVNode"])(v,{width:50,height:20,style:{"margin-right":"5px"},bg:"rgba(255,255,255,0.2)"}),Object(r["createVNode"])(v,{width:50,height:20,style:{"margin-right":"5px"},bg:"rgba(255,255,255,0.2)"})])})),64))]),c.cateGoods&&c.cateGoods.goods?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",l,[d,Object(r["createElementVNode"])("ul",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.cateGoods.goods,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:e.id},[Object(r["createVNode"])(h,{to:"/goods/".concat(e.id)},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("img",{src:e.picture,alt:""},null,8,b),Object(r["createElementVNode"])("div",f,[Object(r["createElementVNode"])("p",O,Object(r["toDisplayString"])(e.name),1),Object(r["createElementVNode"])("p",m,Object(r["toDisplayString"])(e.desc),1),Object(r["createElementVNode"])("p",j,[p,Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.price),1)])])]})),_:2},1032,["to"])])})),128))])])):Object(r["createCommentVNode"])("",!0)])}n("d81d"),n("fb6a"),n("7db0"),n("d3b7");var v=n("5502"),g={name:"HomeCategory",setup:function(){var e=Object(v["d"])(),t=Object(r["ref"])(null),n=Object(r["computed"])((function(){return e.state.category.list.map((function(e){return{id:e.id,name:e.name,children:e.children.slice(0,2)}}))})),c=Object(r["computed"])((function(){return e.state.category.list.find((function(e){return e.id===t.value}))}));return{secons:n,cateId:t,cateGoods:c}}},y=(n("a531"),n("6b0d")),k=n.n(y);const $=k()(g,[["render",h],["__scopeId","data-v-0ed5e6ef"]]);var N=$,w={class:"home-banner"};function V(e,t,n,c,o,i){var a=Object(r["resolveComponent"])("XtxSlider");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",w,[Object(r["createVNode"])(a,{data:c.list,autoPlay:""},null,8,["data"])])}var D=n("1da1"),S=(n("96cf"),n("3191")),E={name:"HomeBanner",setup:function(){var e=Object(r["ref"])([]),t=function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(S["a"])();case 2:n=t.sent,r=n.result,console.log("轮播图数据",r),e.value=r;case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t(),{list:e,getListBanner:t}}};n("247b");const B=k()(E,[["render",V],["__scopeId","data-v-66e3a1c4"]]);var x=B,_={ref:"pannel",class:"goods-list"},C={alt:""},M={class:"name"},H={class:"price"};function L(e,t,n,c,o,i){var a=Object(r["resolveComponent"])("xtx-more"),s=Object(r["resolveComponent"])("RouterLink"),u=Object(r["resolveComponent"])("HomePanel"),l=Object(r["resolveDirective"])("imglazy");return Object(r["openBlock"])(),Object(r["createBlock"])(u,{title:"新鲜好物","sub-title":"新鲜出炉 品质靠谱",ref:"target"},{right:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(a)]})),default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("ul",_,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.list,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:e.id},[Object(r["createVNode"])(s,{to:"/goods/".concat(e.id)},{default:Object(r["withCtx"])((function(){return[Object(r["withDirectives"])(Object(r["createElementVNode"])("img",C,null,512),[[l,e.picture]]),Object(r["createElementVNode"])("p",M,Object(r["toDisplayString"])(e.name),1),Object(r["createElementVNode"])("p",H,"¥"+Object(r["toDisplayString"])(e.price),1)]})),_:2},1032,["to"])])})),128))],512)]})),_:1},512)}var T={class:"home-panel"},I={class:"container"},F={class:"head"};function R(e,t,n,c,o,i){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",T,[Object(r["createElementVNode"])("div",I,[Object(r["createElementVNode"])("div",F,[Object(r["createElementVNode"])("h3",null,[Object(r["createTextVNode"])(Object(r["toDisplayString"])(n.title),1),Object(r["createElementVNode"])("small",null,Object(r["toDisplayString"])(n.subTitle),1)]),Object(r["renderSlot"])(e.$slots,"right",{},void 0,!0)]),Object(r["renderSlot"])(e.$slots,"default",{},void 0,!0)])])}var Y={name:"HomePanel",props:{title:{type:String,default:""},subTitle:{type:String,default:""}}};n("e381");const P=k()(Y,[["render",R],["__scopeId","data-v-1c095ba0"]]);var W=P,z=n("806c"),A={components:{HomePanel:W},setup:function(){var e=Object(r["ref"])([]);function t(){return n.apply(this,arguments)}function n(){return n=Object(D["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(S["e"])();case 2:n=t.sent,e.value=n.result;case 4:case"end":return t.stop()}}),t)}))),n.apply(this,arguments)}var c=Object(z["b"])(t),o=c.target;return{list:e,target:o}}};n("05d0");const G=k()(A,[["render",L],["__scopeId","data-v-81e5dc8a"]]);var J=G,U={class:"goods-list"},Z=["alt"],X={class:"name"},q={class:"desc"};function Q(e,t,n,c,o,i){var a=Object(r["resolveComponent"])("xtx-more"),s=Object(r["resolveComponent"])("RouterLink"),u=Object(r["resolveComponent"])("home-panel"),l=Object(r["resolveDirective"])("imglazy");return Object(r["openBlock"])(),Object(r["createBlock"])(u,{title:"人气推荐",subTitle:"人气爆款 不容错过",ref:"target"},{right:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(a)]})),default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("ul",U,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.list,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:e.id},[Object(r["createVNode"])(s,{to:"/"},{default:Object(r["withCtx"])((function(){return[Object(r["withDirectives"])(Object(r["createElementVNode"])("img",{alt:e.alt},null,8,Z),[[l,e.picture]]),Object(r["createElementVNode"])("p",X,Object(r["toDisplayString"])(e.title),1),Object(r["createElementVNode"])("p",q,Object(r["toDisplayString"])(e.alt),1)]})),_:2},1024)])})),128))])]})),_:1},512)}var K={name:"HomeHot",components:{homePanel:W},setup:function(){var e=Object(r["ref"])([]),t=function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(S["d"])();case 2:n=t.sent,r=n.result,console.log("人气推荐",r),e.value=r;case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=Object(z["b"])(t),c=n.target;return{list:e,getListHot:t,target:c}}};n("f6f5");const ee=k()(K,[["render",Q],["__scopeId","data-v-5c19b145"]]);var te=ee,ne={class:"home-product",ref:"target"},re={class:"sub"},ce={class:"box"},oe={alt:""},ie={class:"label"},ae={class:"goods-list"};function se(e,t,n,c,o,i){var a=Object(r["resolveComponent"])("RouterLink"),s=Object(r["resolveComponent"])("XtxMore"),u=Object(r["resolveComponent"])("HomeGoods"),l=Object(r["resolveComponent"])("HomePanel"),d=Object(r["resolveDirective"])("imglazy");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",ne,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.List,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(l,{title:e.name,key:e.id},{right:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",re,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.children,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(a,{to:"/",key:e.id},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.name),1)]})),_:2},1024)})),128))]),Object(r["createVNode"])(s)]})),default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",ce,[Object(r["createVNode"])(a,{class:"cover",to:"/"},{default:Object(r["withCtx"])((function(){return[Object(r["withDirectives"])(Object(r["createElementVNode"])("img",oe,null,512),[[d,e.picture]]),Object(r["createElementVNode"])("strong",ie,[Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.name)+"馆",1),Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.saleInfo),1)])]})),_:2},1024),Object(r["createElementVNode"])("ul",ae,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.goods,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:e.id},[Object(r["createVNode"])(u,{goods:e},null,8,["goods"])])})),128))])])]})),_:2},1032,["title"])})),128))],512)}var ue=function(e){return Object(r["pushScopeId"])("data-v-671ae176"),e=e(),Object(r["popScopeId"])(),e},le={class:"goods-item"},de={alt:""},be={class:"name ellipsis-2"},fe={class:"desc"},Oe={class:"price"},me={class:"extra"},je=ue((function(){return Object(r["createElementVNode"])("span",null,"找相似",-1)})),pe=ue((function(){return Object(r["createElementVNode"])("span",null,"发现现多宝贝 >",-1)}));function he(e,t,n,c,o,i){var a=Object(r["resolveComponent"])("RouterLink"),s=Object(r["resolveDirective"])("imglazy");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",le,[Object(r["createVNode"])(a,{to:"/goods/".concat(n.goods.id),class:"image"},{default:Object(r["withCtx"])((function(){return[Object(r["withDirectives"])(Object(r["createElementVNode"])("img",de,null,512),[[s,n.goods.picture]])]})),_:1},8,["to"]),Object(r["createElementVNode"])("p",be,Object(r["toDisplayString"])(n.goods.name),1),Object(r["createElementVNode"])("p",fe,Object(r["toDisplayString"])(n.goods.desc),1),Object(r["createElementVNode"])("p",Oe,"¥"+Object(r["toDisplayString"])(n.goods.price),1),Object(r["createElementVNode"])("div",me,[Object(r["createVNode"])(a,{to:"/"},{default:Object(r["withCtx"])((function(){return[je,pe]})),_:1})])])}var ve={name:"HomeGoods",props:{goods:{type:Object,default:function(){return{}}}}};n("b634");const ge=k()(ve,[["render",he],["__scopeId","data-v-671ae176"]]);var ye=ge,ke={name:"HomeProduct",components:{HomePanel:W,HomeGoods:ye},setup:function(){var e=Object(r["ref"])([]),t=function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(S["b"])();case 2:n=t.sent,r=n.result,e.value=r;case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=Object(z["b"])(t),c=n.target;return{List:e,target:c}}};n("628f");const $e=k()(ke,[["render",se],["__scopeId","data-v-58d0353a"]]);var Ne=$e,we={name:"xtx-home-page",components:{HomeCategory:N,HomeBanner:x,HomeNew:J,HomeHot:te,HomeProduct:Ne},setup:function(){return{}}};n("7211");const Ve=k()(we,[["render",o],["__scopeId","data-v-7b5c91c2"]]);t["default"]=Ve},"1d1a":function(e,t,n){},"247b":function(e,t,n){"use strict";n("413f")},"36f7":function(e,t,n){},"413f":function(e,t,n){},"5a0c":function(e,t,n){!function(t,n){e.exports=n()}(0,(function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",c="second",o="minute",i="hour",a="day",s="week",u="month",l="quarter",d="year",b="date",f="Invalid Date",O=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,j={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},h={s:p,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),c=n%60;return(t<=0?"+":"-")+p(r,2,"0")+":"+p(c,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),c=t.clone().add(r,u),o=n-c<0,i=t.clone().add(r+(o?-1:1),u);return+(-(r+(n-c)/(o?c-i:i-c))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:s,d:a,D:b,h:i,m:o,s:c,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",g={};g[v]=j;var y=function(e){return e instanceof w},k=function(e,t,n){var r;if(!e)return v;if("string"==typeof e)g[e]&&(r=e),t&&(g[e]=t,r=e);else{var c=e.name;g[c]=e,r=c}return!n&&r&&(v=r),r||!n&&v},$=function(e,t){if(y(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},N=h;N.l=k,N.i=y,N.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function j(e){this.$L=k(e.locale,null,!0),this.parse(e)}var p=j.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(N.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(O);if(r){var c=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],c,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],c,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return N},p.isValid=function(){return!(this.$d.toString()===f)},p.isSame=function(e,t){var n=$(e);return this.startOf(t)<=n&&n<=this.endOf(t)},p.isAfter=function(e,t){return $(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<$(e)},p.$g=function(e,t,n){return N.u(e)?this[t]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,t){var n=this,r=!!N.u(t)||t,l=N.p(e),f=function(e,t){var c=N.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?c:c.endOf(a)},O=function(e,t){return N.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,j=this.$M,p=this.$D,h="set"+(this.$u?"UTC":"");switch(l){case d:return r?f(1,0):f(31,11);case u:return r?f(1,j):f(0,j+1);case s:var v=this.$locale().weekStart||0,g=(m<v?m+7:m)-v;return f(r?p-g:p+(6-g),j);case a:case b:return O(h+"Hours",0);case i:return O(h+"Minutes",1);case o:return O(h+"Seconds",2);case c:return O(h+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,t){var n,s=N.p(e),l="set"+(this.$u?"UTC":""),f=(n={},n[a]=l+"Date",n[b]=l+"Date",n[u]=l+"Month",n[d]=l+"FullYear",n[i]=l+"Hours",n[o]=l+"Minutes",n[c]=l+"Seconds",n[r]=l+"Milliseconds",n)[s],O=s===a?this.$D+(t-this.$W):t;if(s===u||s===d){var m=this.clone().set(b,1);m.$d[f](O),m.init(),this.$d=m.set(b,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](O);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[N.p(e)]()},p.add=function(r,l){var b,f=this;r=Number(r);var O=N.p(l),m=function(e){var t=$(f);return N.w(t.date(t.date()+Math.round(e*r)),f)};if(O===u)return this.set(u,this.$M+r);if(O===d)return this.set(d,this.$y+r);if(O===a)return m(1);if(O===s)return m(7);var j=(b={},b[o]=t,b[i]=n,b[c]=e,b)[O]||1,p=this.$d.getTime()+r*j;return N.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",c=N.z(this),o=this.$H,i=this.$m,a=this.$M,s=n.weekdays,u=n.months,l=function(e,n,c,o){return e&&(e[n]||e(t,r))||c[n].substr(0,o)},d=function(e){return N.s(o%12||12,e,"0")},b=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},O={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:N.s(a+1,2,"0"),MMM:l(n.monthsShort,a,u,3),MMMM:l(u,a),D:this.$D,DD:N.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,s,2),ddd:l(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(o),HH:N.s(o,2,"0"),h:d(1),hh:d(2),a:b(o,i,!0),A:b(o,i,!1),m:String(i),mm:N.s(i,2,"0"),s:String(this.$s),ss:N.s(this.$s,2,"0"),SSS:N.s(this.$ms,3,"0"),Z:c};return r.replace(m,(function(e,t){return t||O[e]||c.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,b,f){var O,m=N.p(b),j=$(r),p=(j.utcOffset()-this.utcOffset())*t,h=this-j,v=N.m(this,j);return v=(O={},O[d]=v/12,O[u]=v,O[l]=v/3,O[s]=(h-p)/6048e5,O[a]=(h-p)/864e5,O[i]=h/n,O[o]=h/t,O[c]=h/e,O)[m]||h,f?v:N.a(v)},p.daysInMonth=function(){return this.endOf(u).$D},p.$locale=function(){return g[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=k(e,t,!0);return r&&(n.$L=r),n},p.clone=function(){return N.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},j}(),V=w.prototype;return $.prototype=V,[["$ms",r],["$s",c],["$m",o],["$H",i],["$W",a],["$M",u],["$y",d],["$D",b]].forEach((function(e){V[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),$.extend=function(e,t){return e.$i||(e(t,w,$),e.$i=!0),$},$.locale=k,$.isDayjs=y,$.unix=function(e){return $(1e3*e)},$.en=g[v],$.Ls=g,$.p={},$}))},"628f":function(e,t,n){"use strict";n("36f7")},7211:function(e,t,n){"use strict";n("7f98")},"7f98":function(e,t,n){},"806c":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n("3835"),c=n("5550"),o=n("6ec5"),i=n("7a23"),a=n("5a0c"),s=n.n(a);function u(e){var t=Object(i["ref"])(null),n=Object(c["b"])(t,(function(t){var n=Object(r["a"])(t,2),c=n[0].isIntersecting;n[1];console.log("组价进入了视口",c),c&&(o(),e())}),{threshold:0}),o=n.stop;return{target:t}}function l(e){var t=Object(i["ref"])(0),n=Object(i["computed"])((function(){return s.a.unix(t.value).format("mm分ss秒")})),r=Object(o["w"])((function(){t.value--,t.value<=0&&c()}),1e3,{immediate:!1}),c=r.pause,a=r.resume;function u(n){0===t.value&&(t.value=e||n),a()}return Object(i["onUnmounted"])((function(){c()})),{countTime:t,start:u,pause:c,countTimeText:n}}},"8d76":function(e,t,n){},"9e98":function(e,t,n){},a531:function(e,t,n){"use strict";n("8d76")},b634:function(e,t,n){"use strict";n("15e7")},b683:function(e,t,n){},e381:function(e,t,n){"use strict";n("1d1a")},f6f5:function(e,t,n){"use strict";n("9e98")}}]);
//# sourceMappingURL=chunk-1b3c7146.7a114e99.js.map