webpackJsonp([3],{NpI6:function(t,e){},OO79:function(t,e){},P2Xi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),o=n.n(i),s=n("NYxO"),r=n("D/cR"),l={computed:o()({},Object(s.c)({list:"role/list"})),components:{},data:function(){return{}},methods:o()({edit:function(t){this.$emit("edit",t)},del:function(t){var e=this;Object(r.g)({id:t}).then(function(t){alert("删除成功"),e.requestRoleList()})}},Object(s.b)({requestRoleList:"role/requestRoleList"})),mounted:function(){this.requestRoleList()}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.list,"row-key":"id",border:"","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[n("el-table-column",{attrs:{prop:"id",label:"角色编号",sortable:"",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"rolename",label:"角色名称",sortable:"",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?n("el-button",{attrs:{type:"primary"}},[t._v("启用")]):n("el-button",{attrs:{type:"danger"}},[t._v("禁用")])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.edit(e.row.id)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(n){return t.del(e.row.id)}}},[t._v("删除")])]}}])})],1)],1)},staticRenderFns:[]};var u=n("VU/8")(l,a,!1,function(t){n("sdrj")},null,null).exports,d=n("mvHQ"),c=n.n(d),f={props:["info"],computed:o()({},Object(s.c)({menuList:"menu/list"})),components:{},data:function(){return{width:"160px",form:{rolename:"",menus:[],status:1},defaultProps:{children:"children",label:"label"}}},methods:o()({empty:function(){this.form={rolename:"",menus:[],status:1},this.form.menus=this.$refs.tree.setCheckedKeys([])},hide:function(){this.info.isShow=!1},add:function(){var t=this;this.form.menus=c()(this.$refs.tree.getCheckedKeys()),Object(r.f)(this.form).then(function(e){t.empty(),t.requestRoleList(),t.hide()})}},Object(s.b)({requestMenuList:"menu/requestMenuList",requestRoleList:"role/requestRoleList"}),{look:function(t){var e=this;Object(r.j)({id:t}).then(function(n){e.form=n.data.list,e.form.menus=e.$refs.tree.setCheckedKeys(JSON.parse(n.data.list.menus)),e.form.id=t})},update:function(){var t=this;this.form.menus=c()(this.$refs.tree.getCheckedKeys()),Object(r.h)(this.form).then(function(e){t.requestRoleList(),t.hide()})}}),mounted:function(){0==this.menuList.length&&this.requestMenuList()}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{title:t.info.title,visible:t.info.isShow},on:{"update:visible":function(e){return t.$set(t.info,"isShow",e)}}},[n("el-form",{attrs:{model:t.form}},[n("el-form-item",{attrs:{label:"角色名称","label-width":t.width}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.rolename,callback:function(e){t.$set(t.form,"rolename",e)},expression:"form.rolename"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"角色权限","label-width":t.width}},[n("el-tree",{ref:"tree",attrs:{data:t.menuList,"show-checkbox":"","node-key":"id",props:{children:"children",label:"title"}}})],1),t._v(" "),n("el-form-item",{attrs:{label:"状态","label-width":t.width}},[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[t._v("\n          >\n        ")])],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.info.isShow=!1}}},[t._v("取 消")]),t._v(" "),t.info.isAdd?n("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添 加")]):n("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("修 改")])],1)],1)],1)},staticRenderFns:[]};var m={components:{vList:u,vAdd:n("VU/8")(f,h,!1,function(t){n("OO79")},null,null).exports},data:function(){return{info:{isShow:!1,title:"角色添加",isAdd:!0}}},methods:{willAdd:function(){this.info.isShow=!this.info.isShow,this.info.title="角色添加",this.info.isAdd=!0,this.$refs.one.empty()},edit:function(t){this.info.isShow=!0,this.$refs.one.look(t),this.info.title="角色修改",this.info.isAdd=!1}},mounted:function(){}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{attrs:{type:"primary"},on:{click:t.willAdd}},[t._v("添加")]),t._v(" "),n("v-add",{ref:"one",attrs:{info:t.info}}),t._v(" "),n("v-list",{on:{edit:function(e){return t.edit(e)}}})],1)},staticRenderFns:[]};var v=n("VU/8")(m,p,!1,function(t){n("NpI6")},null,null);e.default=v.exports},sdrj:function(t,e){}});
//# sourceMappingURL=3.3dbaf852e621c47f4f18.js.map