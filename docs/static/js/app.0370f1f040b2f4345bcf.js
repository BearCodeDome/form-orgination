webpackJsonp([0],[,,function(e,t,n){function a(e){n(12)}var i=n(0)(n(7),n(18),a,null,null);e.exports=i.exports},function(e,t,n){"use strict";var a=n(1),i=n(20),l=n(14),r=n.n(l),o=n(15),s=n.n(o);a.a.use(i.a),t.a=new i.a({routes:[{path:"/",name:"hello",component:r.a},{path:"/structure",name:"structure",component:s.a}]})},function(e,t,n){function a(e){n(13)}var i=n(0)(n(6),n(19),a,null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=n(4),l=n.n(i),r=n(3);a.a.config.productionTip=!1,new a.a({el:"#app",router:r.a,template:"<App/>",components:{App:l.a}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"form-organization",props:{organization:{type:Array,default:function(){return[]}},value:{required:!1},search:{type:Boolean,default:!1},placeholder:{type:String,default:"按拼音或汉字搜索"}},data:function(){return{organizationNavs:[],currOrganization:[],currParent:null,content:[],visible:!1,cur:"",searchVal:"",result:[],position:!1}},created:function(){this.currOrganization=this.organization,this.initValue()},computed:{filterSearch:function(){var e=this.searchVal;return e?this.currOrganization.filter(function(t){return-1!==t.value.indexOf(e)||-1!==t.label.indexOf(e)}):this.currOrganization.slice(0)},classes:function(){return{"ms-organization-body-top":this.position,"ms-organization-body-with-search":this.search}}},filters:{filterContent:function(e){return e.length?e.map(function(e){return e.label}).join("/"):""}},mounted:function(){this.$nextTick(function(){})},methods:{toggleChild:function(){this.visible?this.hide():this.show()},show:function(){this.visible=!0,document.addEventListener("click",this.closeOnDocumentClick,!1)},hide:function(){this.visible=!1,document.removeEventListener("click",this.closeOnDocumentClick,!1)},closeOnDocumentClick:function(e){this.$el.contains(e.target)||this.hide()},showChild:function(e){this.result=[];var t=this.organizationNavs,n=this.currOrganization;this.searchVal="",e.children&&e.children.length?(t.push({value:e.value,label:e.label,children:e.children,parentNode:n}),this.content.push({value:e.value,label:e.label}),this.organizationNavs=t,this.currOrganization=e.children,this.$emit("input",[])):-1===this.content.indexOf(e)&&(this.cur&&this.content.pop(),this.content.push({value:e.value,label:e.label}),this.cur=e.value,this.visible=!1,this.result=this.content,this.$emit("input",this.content.map(function(e){return e.value})))},changeNav:function(e,t){this.result=[];var n=this.organizationNavs,a=this.content;this.currOrganization=e.parentNode,0===t?(this.content=[],this.organizationNavs=[]):(this.organizationNavs=n.splice(0,t),this.content=a.splice(0,t)),this.cur="",this.$emit("input",[])},initValue:function(){function e(n,a){for(var i=0;i<n.length;i++){var l=n[i];if(l&&l.value){if(l.value===a){t={parentNode:n,node:n[i]};break}if(!l.children||!l.children.length)break;e(l.children,a)}}return t}var t={},n=this.organization,a=this.value;if(a&&a.length)for(var i=0;i<a.length;i++){var l=e(n,a[i]),r=l.node;r&&(r.children&&r.children.length?(this.organizationNavs.push({value:r.value,label:r.label,children:r.children,parentNode:l.parentNode}),n=r.children):(this.currOrganization=l.parentNode,this.cur=r.value),this.content.push({value:r.value,label:r.label})),this.result=this.content}}},beforeDestroy:function(){this.hide()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),i=n.n(a);t.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App",seleted:[],seleted2:[],seleted3:[],organization:[],organization2:[],organization3:[]}},created:function(){this.init()},methods:{init:function(){this.genOrganization(),this.genOrganization2(),this.genOrganization3()},genOrganization:function(){var e=this;setTimeout(function(){[{value:"beijing",label:"北京"},{value:"shanghai",label:"上海"},{value:"shenzhen",label:"深圳"},{value:"hangzhou",label:"杭州"},{value:"zhengzhou",label:"郑州"},{value:"guangzhou",label:"广州"},{value:"xiamen",label:"厦门"}].forEach(function(t){e.organization.push(t)})},1e3)},genOrganization2:function(){var e=this;setTimeout(function(){[{value:"beijing",label:"北京",children:[{value:"chaoyang",label:"朝阳"},{value:"haidian",label:"海淀"},{value:"changping",label:"昌平"},{value:"shunyi",label:"顺义"}]},{value:"shanghai",label:"上海",children:[{value:"baoshan",label:"宝山"},{value:"jiading",label:"嘉定"},{value:"songjiang",label:"松江"},{value:"pudong",label:"浦东"}]}].forEach(function(t){e.organization2.push(t)})},1e3)},genOrganization3:function(){var e=this;setTimeout(function(){[{value:"beijing",label:"北京",children:[{value:"chaoyang",label:"朝阳",children:[{value:"wangjing",label:"望京"}]},{value:"haidian",label:"海淀",children:[{value:"zhongguancun",label:"中关村"}]},{value:"changping",label:"昌平",children:[{value:"huoying",label:"霍营"}]},{value:"shunyi",label:"顺义"}]},{value:"shanghai",label:"上海",children:[{value:"baoshan",label:"宝山"},{value:"jiading",label:"嘉定"},{value:"songjiang",label:"松江"},{value:"pudong",label:"浦东"}]}].forEach(function(t){e.organization3.push(t)})},1e3)}},components:{FormOrganization:i.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),i=n.n(a);t.default={name:"structure",data:function(){return{structure:[],seleted:[],seleted2:[],currStructure:[]}},computed:{},created:function(){for(var e=[{code:42e4,name:"湖北省",parentCode:0},{code:420100,name:"武汉市",parentCode:42e4},{code:420101,name:"市辖区",parentCode:420100},{code:420102,name:"江岸区",parentCode:420100},{code:420103,name:"江汉区",parentCode:420100},{code:420104,name:"硚口区",parentCode:420100},{code:420105,name:"汉阳区",parentCode:420100},{code:421e3,name:"荆州市",parentCode:42e4},{code:421001,name:"市辖区",parentCode:421e3},{code:421002,name:"沙市区",parentCode:421e3},{code:421003,name:"荆州区",parentCode:421e3},{code:43e4,name:"湖南省",parentCode:0},{code:430100,name:"长沙市",parentCode:43e4},{code:430101,name:"市辖区",parentCode:430100},{code:430102,name:"芙蓉区",parentCode:430100},{code:430103,name:"天心区",parentCode:430100},{code:430104,name:"岳麓区",parentCode:430100}],t=0;t<e.length;t++)this.structure.push({value:e[t].code,parentValue:e[t].parentCode,label:e[t].name,nodeData:e[t]});this.currStructure=this.buildTree2(this.structure)},methods:{buildTree:function(e){if("[object Array]"!==Object.prototype.toString.call(e)||0===e.length)return null;var t=void 0,n=void 0,a=void 0,i=e.length,l=[];if(1===i)return e[0];for(var r=0;r<i;r++)if(t=e[r],a=!1,t.parentValue){console.log(t);for(var o=0;o<i;o++)if(n=e[o],n.value===t.parentValue){n.children||(n.children=[]),n.children.push(t),n.leaf=!1,a=!0;break}a||l.push(t)}else l.push(t);return 1===l.length?l[0]:l},buildTree2:function(e){var t=e.length;return 1===t?e[0]:e.filter(function(t){return t.parentValue&&e.find(function(e){if(e.value===t.parentValue)return e.children||(e.children=[]),e.children.push(t),e.leaf=!1,e})?void 0:t})}},components:{FormOrganization:i.a}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){function a(e){n(10)}var i=n(0)(n(8),n(16),a,null,null);e.exports=i.exports},function(e,t,n){function a(e){n(11)}var i=n(0)(n(9),n(17),a,null,null);e.exports=i.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[e._m(0),e._v(" "),n("div",{staticClass:"ms-form"},[n("div",{staticClass:"ms-form-item"},[n("label",{staticClass:"ms-form-label"},[e._v("一级级联:")]),e._v(" "),n("div",{staticClass:"ms-form-input-block"},[n("form-organization",{attrs:{organization:e.organization},model:{value:e.seleted,callback:function(t){e.seleted=t},expression:"seleted"}})],1)]),e._v(" "),n("div",{staticClass:"ms-form-item"},[n("label",{staticClass:"ms-form-label"},[e._v("二级级联:")]),e._v(" "),n("div",{staticClass:"ms-form-input-block"},[n("form-organization",{attrs:{organization:e.organization2},model:{value:e.seleted2,callback:function(t){e.seleted2=t},expression:"seleted2"}})],1)]),e._v(" "),n("div",{staticClass:"ms-form-item"},[n("label",{staticClass:"ms-form-label"},[e._v("三级级联:")]),e._v(" "),n("div",{staticClass:"ms-form-input-block"},[n("form-organization",{attrs:{organization:e.organization3},model:{value:e.seleted3,callback:function(t){e.seleted3=t},expression:"seleted3"}})],1)])]),e._v(" "),n("div",{staticClass:"router-links"},[n("router-link",{attrs:{to:{path:"/structure"}}},[e._v("查看前端处理数据的情况")])],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h4",[e._v("后端处理数据的情况")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"structure-wrap hello"},[e._m(0),e._v(" "),n("div",{staticClass:"ms-form"},[n("div",{staticClass:"ms-form-item"},[n("label",{staticClass:"ms-form-label"},[e._v("组织架构:")]),e._v(" "),n("div",{staticClass:"ms-form-input-block"},[n("form-organization",{attrs:{organization:e.currStructure},model:{value:e.seleted,callback:function(t){e.seleted=t},expression:"seleted"}})],1)]),e._v(" "),n("div",{staticClass:"ms-form-item"},[n("label",{staticClass:"ms-form-label"},[e._v("组织架构:")]),e._v(" "),n("div",{staticClass:"ms-form-input-block"},[n("form-organization",{attrs:{organization:e.currStructure},model:{value:e.seleted2,callback:function(t){e.seleted2=t},expression:"seleted2"}})],1)])]),e._v(" "),n("div",{staticClass:"router-links"},[n("router-link",{attrs:{to:{path:"/"}}},[e._v("查看后端处理数据情况")])],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h4",[e._v("前端处理数据的情况")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ms-organization-wrap"},[n("div",{staticClass:"ms-organization-title",on:{click:e.toggleChild}},[e.result.length?e._e():n("span",[e._v("请选择")]),e._v("\n      "+e._s(e._f("filterContent")(e.result))+"\n    ")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"ms-organization-body",class:e.classes},[n("div",{staticClass:"ms-organization-body-header"},[e.search?n("div",{staticClass:"ms-organization-search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchVal,expression:"searchVal"}],attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.searchVal},on:{input:function(t){t.target.composing||(e.searchVal=t.target.value)}}})]):e._e(),e._v(" "),e.organizationNavs.length?n("div",{staticClass:"ms-organization-router"},[n("span",[e._v("已选择:")]),e._v(" "),e._l(e.organizationNavs,function(t,a){return n("a",{key:t.value,on:{click:function(n){n.preventDefault(),n.stopPropagation(),e.changeNav(t,a)}}},[e._v(e._s(t.label)),e.organizationNavs.length-1!==a?n("span",[e._v(">")]):e._e()])})],2):e._e()]),e._v(" "),n("div",{staticClass:"ms-organization-content"},[e.filterSearch.length?n("ul",{staticClass:"ms-organization-options"},e._l(e.filterSearch,function(t,a){return n("li",{key:t.value,class:{active:t.value===e.cur},on:{click:function(n){n.stopPropagation(),e.showChild(t)}}},[n("div",[e._v(e._s(t.label))])])})):n("ul",{staticClass:"ms-organization-options"},[n("li",[n("div",[e._v("没有匹配项")])])])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}}],[5]);
//# sourceMappingURL=app.0370f1f040b2f4345bcf.js.map