webpackJsonp([4],{c2y8:function(t,e){},cFc7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("3cXf"),r=n.n(a),i=n("4YfN"),s=n.n(i),o=n("fUgm"),c=n("D/cR"),l=n("BGi1"),u={props:["info"],components:{},computed:s()({},Object(o.c)({roleList:"role/list"})),data:function(){return{attrArr:[{value:""}],form:{specsname:"",attrs:"",status:1}}},mounted:function(){},methods:s()({},Object(o.b)({requestList:"spec/requestList",requestTotal:"spec/requestTotal"}),{addAttr:function(){this.attrArr.push({value:""})},delAttr:function(t){this.attrArr.splice(t,1)},empty:function(){this.form={specsname:"",attrs:"",status:1},this.attrArr=[{value:""}]},cancel:function(){this.info.show=!1,this.info.isAdd||this.empty()},add:function(){var t=this;this.attrArr.some(function(t){return""==t.value})?Object(l.b)("属性规格均不能为空"):(this.form.attrs=r()(this.attrArr.map(function(t){return t.value})),Object(c.O)(this.form).then(function(e){200==e.data.code?(Object(l.a)(e.data.msg),t.empty(),t.cancel(),t.requestTotal(),t.requestList()):Object(l.b)(e.data.msg)}))},getDetail:function(t){var e=this;Object(c.R)({id:t}).then(function(t){e.form=t.data.list[0],e.attrArr=JSON.parse(t.data.list[0].attrs).map(function(t){return{value:t}})})},update:function(){var t=this;this.attrArr.some(function(t){return""==t.value})?Object(l.b)("属性规格均不能为空"):(this.form.attrs=r()(this.attrArr.map(function(t){return t.value})),Object(c.T)(this.form).then(function(e){200==e.data.code?(Object(l.a)("修改成功"),t.empty(),t.cancel(),t.requestList()):Object(l.b)(e.data.msg)}))}})},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add"},[n("el-dialog",{attrs:{title:t.info.title,visible:t.info.show},on:{"update:visible":function(e){return t.$set(t.info,"show",e)}}},[n("el-form",{attrs:{model:t.form}},[n("el-form-item",{attrs:{label:"规格名称","label-width":"80px"}},[n("el-input",{model:{value:t.form.specsname,callback:function(e){t.$set(t.form,"specsname",e)},expression:"form.specsname"}})],1),t._v(" "),t._l(t.attrArr,function(e,a){return n("el-form-item",{key:a,attrs:{label:"规格属性","label-width":"80px"}},[n("el-input",{model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"item.value"}}),t._v(" "),0==a?n("el-button",{attrs:{type:"primary"},on:{click:t.addAttr}},[t._v("新增规格属性")]):n("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.delAttr(a)}}},[t._v("删除")])],1)}),t._v(" "),n("el-form-item",{attrs:{label:"状态","label-width":"80px"}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],2),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){return t.cancel()}}},[t._v("取 消")]),t._v(" "),t.info.isAdd?n("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添 加")]):n("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("修 改")])],1)],1)],1)},staticRenderFns:[]};var f=n("C7Lr")(u,d,!1,function(t){n("c2y8")},"data-v-7e2a7af8",null).exports,m={components:{},computed:s()({},Object(o.c)({list:"spec/list",total:"spec/total",size:"spec/size"})),data:function(){return{}},methods:s()({},Object(o.b)({requestList:"spec/requestList",requestTotal:"spec/requestTotal",changePage:"spec/changePage"}),{edit:function(t){this.$emit("edit",t)},del:function(t){var e=this;Object(c.Q)({id:t}).then(function(t){200==t.data.code?(Object(l.a)("删除成功"),e.requestList(),e.requestTotal()):Object(l.b)(t.data.msg)})},cPage:function(t){this.changePage(t),this.requestList()}}),mounted:function(){this.requestTotal(),this.requestList()}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list}},[n("el-table-column",{attrs:{prop:"id",label:"规格编号",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"specsname",label:"规格名称",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{label:"规格属性",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.attrs,function(e){return n("el-tag",{key:e},[t._v(t._s(e))])})}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?n("el-button",{attrs:{type:"primary"}},[t._v("启用")]):n("el-button",{attrs:{type:"info"}},[t._v("禁用")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.edit(e.row.id)}}},[t._v("编辑")]),t._v(" "),n("del-btn",{on:{confirm:function(n){return t.del(e.row.id)}}})]}}])})],1),t._v(" "),n("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.size,total:t.total},on:{"current-change":t.cPage}})],1)},staticRenderFns:[]};var v={components:{vAdd:f,vList:n("C7Lr")(m,p,!1,function(t){n("iqDh")},"data-v-3e6bf34d",null).exports},data:function(){return{info:{show:!1,title:"添加商品规格",isAdd:!0}}},methods:{add:function(){this.info.show=!0,this.info.title="添加商品规格",this.info.isAdd=!0},edit:function(t){this.info.show=!0,this.info.title="编辑商品规格",this.info.isAdd=!1,this.$refs.add.getDetail(t)}},mounted:function(){}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添加")]),t._v(" "),n("v-add",{ref:"add",attrs:{info:t.info}}),t._v(" "),n("v-list",{on:{edit:function(e){return t.edit(e)}}})],1)},staticRenderFns:[]};var b=n("C7Lr")(v,h,!1,function(t){n("oZKS")},"data-v-a0750060",null);e.default=b.exports},iqDh:function(t,e){},oZKS:function(t,e){}});
//# sourceMappingURL=4.e049e686bffb3ebed674.js.map