webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},o,!1,function(e){a("gsu9")},null,null).exports,n=a("/ocq"),s={data:function(){return{options:[{value:"",label:"全部"},{value:"2014",label:"2014"},{value:"2015",label:"2015"},{value:"2016",label:"2016"},{value:"2017",label:"2017"},{value:"2018",label:"2018"},{value:"2019",label:"2019"}],tableData:[],year:"",schoolName:"",subjectName:"",localProvinceName:"",score:"",pageIndex:1}},methods:{resetDateFilter:function(){this.$refs.filterTable.clearFilter("date")},clearFilter:function(){this.$refs.filterTable.clearFilter()},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.year==e},filterHandler:function(e,t,a){return t[a.property]===e},load:function(){var e=this;this.$axios.post("/score/find",{schoolName:this.schoolName,subjectName:this.subjectName,localProvinceName:this.localProvinceName,score:this.score,year:this.year,pageSize:20,pageIndex:this.pageIndex}).then(function(t){e.tableData=t.data})},currentChange:function(e){this.pageIndex=index,load()},prev:function(){this.pageIndex--,load()},next:function(e){this.pageIndex++,load()}},computed:{noMore:function(){return this.count>=20},disabled:function(){return this.loading||this.noMore}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("el-select",{attrs:{placeholder:"请选择年份"},model:{value:e.year,callback:function(t){e.year=t},expression:"year"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-col",{attrs:{span:3}},[a("el-input",{attrs:{placeholder:"请输入院校名称"},model:{value:e.schoolName,callback:function(t){e.schoolName=t},expression:"schoolName"}})],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-input",{attrs:{placeholder:"请输入专业"},model:{value:e.subjectName,callback:function(t){e.subjectName=t},expression:"subjectName"}})],1),e._v(" "),a("el-col",{attrs:{span:3}},[a("el-input",{attrs:{placeholder:"请输入考生所在地"},model:{value:e.localProvinceName,callback:function(t){e.localProvinceName=t},expression:"localProvinceName"}})],1),e._v(" "),a("el-col",{attrs:{span:3}},[a("el-input",{attrs:{placeholder:"高考成绩"},model:{value:e.score,callback:function(t){e.score=t},expression:"score"}})],1),e._v(" "),a("el-col",{attrs:{span:1}},[a("el-button",{attrs:{icon:"el-icon-search",circle:""},on:{click:e.load}})],1)],1),e._v(" "),a("el-table",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.load,expression:"load"}],ref:"filterTable",staticStyle:{width:"100%"},attrs:{slot:"append",height:"700",data:e.tableData,"infinite-scroll-disabled":"disabled"},slot:"append"},[a("el-table-column",{attrs:{prop:"schoolName",label:"高校",sortable:"",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"subjectName",label:"专业",width:"280"}}),e._v(" "),a("el-table-column",{attrs:{prop:"localProvinceName",label:"生源地",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"studentType",label:"科目类型",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"maxScore",label:"最高分",sortable:"",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"averageScore",label:"平均分",sortable:"",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"minScore",label:"最低分",sortable:"",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"year",label:"年份",width:"80",filters:[{text:"2014",value:"2014"},{text:"2015",value:"2015"},{text:"2016",value:"2016"},{text:"2017",value:"2017"},{text:"2018",value:"2018"}],"filter-method":e.filterTag}})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-change":"currentChange","prev-click":"prev","next-click":"next",layout:"prev, pager, next",total:1e3}})],1)],1)},staticRenderFns:[]};var i=a("VU/8")(s,c,!1,function(e){a("iwrD")},"data-v-1a7ade8a",null).exports;l.default.use(n.a);var u=new n.a({routes:[{path:"/",name:"HelloWorld",component:i}]}),p=a("zL8q"),d=a.n(p),v=(a("tvR6"),a("mtWM")),b=a.n(v);l.default.config.productionTip=!1,l.default.prototype.$axios=b.a,b.a.defaults.baseURL="http://localhost:8282/",l.default.use(b.a),l.default.use(d.a),new l.default({el:"#app",router:u,components:{App:r},template:"<App/>"})},gsu9:function(e,t){},iwrD:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.a6061ffd253c7d3b9890.js.map