webpackJsonp([13],{"991W":function(t,n){},"D/cR":function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"d",function(){return o}),e.d(n,"e",function(){return s}),e.d(n,"c",function(){return c}),e.d(n,"b",function(){return p}),e.d(n,"f",function(){return d}),e.d(n,"i",function(){return l}),e.d(n,"j",function(){return f}),e.d(n,"h",function(){return m}),e.d(n,"g",function(){return h}),e.d(n,"z",function(){return g}),e.d(n,"D",function(){return v}),e.d(n,"E",function(){return b}),e.d(n,"C",function(){return L}),e.d(n,"B",function(){return q}),e.d(n,"A",function(){return O}),e.d(n,"F",function(){return w}),e.d(n,"k",function(){return I}),e.d(n,"n",function(){return j}),e.d(n,"o",function(){return D}),e.d(n,"m",function(){return z}),e.d(n,"l",function(){return E}),e.d(n,"u",function(){return P}),e.d(n,"x",function(){return W}),e.d(n,"y",function(){return x}),e.d(n,"w",function(){return C}),e.d(n,"v",function(){return F}),e.d(n,"p",function(){return A}),e.d(n,"s",function(){return R}),e.d(n,"t",function(){return S}),e.d(n,"r",function(){return N}),e.d(n,"q",function(){return k});var i=e("mtWM"),r=e.n(i),u=e("mw3O");e.n(u);r.a.interceptors.response.use(function(t){return console.log(t),t});var a=function(t){return r()({url:"/api/api/menuadd ",method:"post",data:t})},o=function(t){return r()({url:"/api/api/menulist",method:"get",params:t})},s=function(t){return r()({url:"/api/api/menuinfo",method:"get",params:t})},c=function(t){return r()({url:"/api/api/menuedit",method:"post",data:t})},p=function(t){return r()({url:"/api/api/menudelete",method:"post",data:t})},d=function(t){return r()({url:"/api/api/roleadd",method:"post",data:t})},l=function(){return r()({url:"/api/api/rolelist",method:"get"})},f=function(t){return r()({url:"/api/api/roleinfo",method:"get",params:t})},m=function(t){return r()({url:"/api/api/roleedit",method:"post",data:t})},h=function(t){return r()({url:"/api/api/roledelete",method:"post",data:t})},g=function(t){return r()({url:"/api/api/useradd",method:"post",data:t})},v=function(t){return r()({url:"/api/api/userlist",method:"get",params:t})},b=function(t){return r()({url:"/api/api/userinfo",method:"get",params:t})},L=function(t){return r()({url:"/api/api/useredit",method:"post",data:t})},q=function(t){return r()({url:"/api/api/userdelete",method:"post",data:t})},O=function(){return r()({url:"/api/api/usercount",method:"get"})},w=function(t){return r()({url:"/api/api/userlogin",method:"post",data:t})},I=function(t){var n=new FormData;for(var e in t)n.append(e,t[e]);return r()({url:"/api/api/cateadd",method:"post",data:n})},j=function(t){return r()({url:"/api/api/catelist",method:"get",params:t})},D=function(t){return r()({url:"/api/api/cateinfo",method:"get",params:t})},z=function(t){var n=new FormData;for(var e in t)n.append(e,t[e]);return r()({url:"/api/api/cateedit",method:"post",data:n})},E=function(t){return r()({url:"/api/api/catedelete",method:"post",data:t})},P=function(t){return r()({url:"/api/api/specsadd",method:"post",data:t})},W=function(t){return r()({url:"/api/api/specslist",method:"get",params:t})},x=function(t){return r()({url:"/api/api/specsinfo",method:"get",params:t})},C=function(t){return r()({url:"/api/api/specsedit",method:"post",data:t})},F=function(t){return r()({url:"/api/api/specsdelete",method:"post",data:t})},A=function(t){var n=new FormData;for(var e in t)n.append(e,t[e]);return r()({url:"/api/api/goodsadd",method:"post",data:n})},R=function(t){return r()({url:"/api/api/goodslist",method:"get",params:t})},S=function(t){return r()({url:"/api/api/goodsinfo",method:"get",params:t})},N=function(t){var n=new FormData;for(var e in t)n.append(e,t[e]);return r()({url:"/api/api/goodsedit",method:"post",data:n})},k=function(t){return r()({url:"/api/api/goodsdelete",method:"post",data:t})}},DGKc:function(t,n){},IcnI:function(t,n,e){"use strict";var i=e("7+uW"),r=e("NYxO"),u=e("D/cR"),a={state:{list:[]},mutations:{changeList:function(t,n){t.list=n}},actions:{requestMenuList:function(t){Object(u.d)({istree:!0}).then(function(n){t.commit("changeList",n.data.list)})}},getters:{list:function(t){return t.list}},namespaced:!0};i.default.use(r.a);var o={state:{list:[]},mutations:{changeList:function(t,n){t.list=n}},actions:{requestRoleList:function(t){Object(u.i)().then(function(n){t.commit("changeList",n.data.list)})}},getters:{list:function(t){return t.list}},namespaced:!0};i.default.use(r.a);var s={state:{list:[],total:0,size:2,page:1},mutations:{changeList:function(t,n){t.list=n},changeCount:function(t,n){t.total=n},changePage:function(t,n){t.page=n}},actions:{requestuserList:function(t){Object(u.D)({page:t.state.page,size:t.state.size}).then(function(n){t.commit("changeList",n.data.list)})},requestuserCount:function(t){Object(u.A)().then(function(n){t.commit("changeCount",n.data.list[0].total)})},changeCurrentPages:function(t,n){t.commit("changePage",n),t.dispatch("requestuserList")}},getters:{list:function(t){return t.list},total:function(t){return t.total},page:function(t){return t.page},size:function(t){return t.size}},namespaced:!0};i.default.use(r.a);var c={state:{list:[]},mutations:{changeList:function(t,n){t.list=n}},actions:{requestcateList:function(t){Object(u.n)({istree:!0}).then(function(n){t.commit("changeList",n.data.list)})}},getters:{list:function(t){return t.list}},namespaced:!0};i.default.use(r.a);var p={state:{list:[]},mutations:{changeList:function(t,n){t.list=n}},actions:{requestspecsList:function(t){Object(u.x)({size:10,page:1}).then(function(n){var e=n.data.list;e.forEach(function(t){t.attrs=JSON.parse(t.attrs)}),t.commit("changeList",e)})}},getters:{list:function(t){return t.list}},namespaced:!0},d=e("mvHQ"),l=e.n(d);i.default.use(r.a);var f={state:{list:sessionStorage.getItem("list")?JSON.parse(sessionStorage.getItem("list")):{}},mutations:{changeList:function(t,n){t.list=n,sessionStorage.setItem("list",l()(n))}},actions:{requestuserList:function(t,n){t.commit("changeList",n)}},getters:{list:function(t){return t.list}},namespaced:!0};i.default.use(r.a);var m={state:{list:[]},mutations:{changeList:function(t,n){t.list=n}},actions:{requestgoodsList:function(t){Object(u.s)({istree:!0}).then(function(n){t.commit("changeList",n.data.list)})}},getters:{list:function(t){return t.list}},namespaced:!0};i.default.use(r.a);n.a=new r.a.Store({modules:{menu:a,role:o,manger:s,cate:c,specs:p,user:f,goods:m}})},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var u=e("VU/8")({},r,!1,function(t){e("DGKc")},null,null).exports,a=e("YaEn"),o=(e("991W"),e("zL8q")),s=e.n(o),c=(e("tvR6"),e("IcnI"));i.default.use(s.a),i.default.prototype.$preImg="http://localhost:3000",new i.default({el:"#app",router:a.a,store:c.a,components:{App:u},template:"<App/>"})},YaEn:function(t,n,e){"use strict";e.d(n,"b",function(){return o});var i=e("7+uW"),r=e("/ocq"),u=e("IcnI"),a=this;i.default.use(r.a);var o=[{path:"menu",component:function(){return e.e(2).then(e.bind(null,"MWAP"))},name:"菜单管理"},{path:"role",component:function(){return e.e(3).then(e.bind(null,"P2Xi"))},name:"角色管理",beforeEnter:function(t,n,e){"/index/home"==n.path?e():e("/login")}},{path:"manger",component:function(){return e.e(4).then(e.bind(null,"xCIP"))},name:"管理员管理"},{path:"classify",component:function(){return e.e(5).then(e.bind(null,"2Bvk"))},name:"商品分类"},{path:"spec",component:function(){return e.e(6).then(e.bind(null,"cFc7"))},name:"商城规格"},{path:"goods",component:function(){return e.e(1).then(e.bind(null,"KY6z"))},name:"商品管理"},{path:"vip",component:function(){return e.e(7).then(e.bind(null,"lCjK"))},name:"会员管理"},{path:"banner",component:function(){return e.e(11).then(e.bind(null,"PZur"))},name:"轮播图管理"},{path:"seckill",component:function(){return e.e(8).then(e.bind(null,"4Zld"))},name:"秒杀管理"}],s=new r.a({routes:[{path:"/login",component:function(){return e.e(10).then(e.bind(null,"QlWu"))}},{path:"/index",component:function(){return e.e(9).then(e.bind(null,"Qt9A"))},children:[{path:"home",component:function(){return e.e(0).then(e.bind(null,"nU8l"))},beforeEnter:function(t,n,e){"/login"==n.path&&u.a.state.user.list?e():e("/login")}},{path:"",redirect:"home"}].concat(o)},{path:"*",redirect:"login"}]});s.beforeEach(function(t,n,e){"/login"==t.path&&e(),u.a.state.user.list.menus?e():a.$router.push("/login")}),n.a=s},tvR6:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.4c1dacf08a46cd0f38e8.js.map