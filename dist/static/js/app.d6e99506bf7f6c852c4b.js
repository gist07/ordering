webpackJsonp([1],{"+c6r":function(t,e){},"+fcD":function(t,e){},Hq11:function(t,e){},KwiH:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("ul",t._l(t.itemList,function(e,s){return a("li",{key:s,staticClass:"change",attrs:{id:t.activeClass==s?"active":""},on:{click:function(e){return t.getItem(s)}}},[a("i",{class:e.icon}),t._v(" "),a("p",[t._v(t._s(e.text))])])}),0)])},staticRenderFns:[]};var n={name:"App",components:{LeftNav:a("VU/8")({name:"LeftNav",data:function(){return{activeClass:"",itemList:[{icon:"icon iconfont icon-tubiao-",text:"收银"},{icon:"icon iconfont icon-dianpu",text:"店铺"},{icon:"icon iconfont icon-hanbao",text:"商品"},{icon:"icon iconfont icon-huiyuan",text:"会员"},{icon:"icon iconfont icon-tongji",text:"统计"},{icon:"icon iconfont icon-shezhi-copy",text:"设置"}]}},methods:{getItem:function(t){switch(this.activeClass=t,t){case 0:this.$router.push("/");break;case 1:this.$router.push("dianpu");break;case 2:this.$router.push("shoplist");break;case 3:this.$router.push("vip");break;case 4:this.$router.push("tongji");break;case 5:this.$router.push("shezhi")}}}},i,!1,function(t){a("sGSt")},null,null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"clearfix",attrs:{id:"app"}},[e("div",{staticClass:"lefts"},[e("LeftNav")],1),this._v(" "),e("div",{staticClass:"main"},[e("router-view")],1)])},staticRenderFns:[]};var o=a("VU/8")(n,l,!1,function(t){a("+fcD")},null,null).exports,c=a("/ocq"),r=a("mvHQ"),u=a.n(r),d=a("mtWM"),h=a.n(d),v={name:"Pos",data:function(){return{tableData:[],guadan:[],isNull:!0,guadanMoney:0,guadanCount:0,totalCount:0,totalMoney:0,often:[],snack:[],Drinks:[],Hamburger:[],Setmeal:[],activeName:"dc",dateTime:[],isMode:"",names:[]}},created:function(){var t=this;h.a.get("https://www.easy-mock.com/mock/5cd2ca355110c02a69f7b4f2/example/alldata").then(function(e){t.often=e.data.often}).catch(function(t){alert("网络错误，请联系管理员~"),console.log(t)}),h.a.get("https://www.easy-mock.com/mock/5cd2ca355110c02a69f7b4f2/example/table").then(function(e){t.Hamburger=e.data.hanbao,t.Drinks=e.data.yinliao,t.snack=e.data.xiaoshi,t.Setmeal=e.data.taocan}).catch(function(t){alert("网络错误，请联系管理员~"),console.log(t)})},computed:{peisong:function(){return"wm"!=this.activeName?null:0<=this.totalMoney&&this.totalMoney<=30?15:30<this.totalMoney&&this.totalMoney<=50?12:50<this.totalMoney&&this.totalMoney<=80?9:80<this.totalMoney&&this.totalMoney<=120?4:120<this.totalMoney?1:void 0}},methods:{addOrderList:function(t){if(this.isNull){for(var e=!1,a=0;a<this.tableData.length;a++)this.tableData[a].id==t.id&&(e=!0);if(e){this.tableData.filter(function(e){return e.id==t.id})[0].count++}else{var s={id:t.id,name:t.name,money:t.money,count:1};this.tableData.push(s)}this.getAllCount(this.tableData)}else this.$message.error("已有订单挂单中，请先结账或取消该订单~")},takeout:function(){this.activeName="wm",this.getAllCount(this.tableData)},gohome:function(){this.activeName="dc",this.getAllCount(this.tableData)},ListGoods:function(){0!=this.totalCount?0==this.guadan.length?(this.isNull=!0,this.activeName="gd",this.isNull?this.guadan=this.tableData:this.guadan,this.isNull?this.guadanMoney=this.totalMoney:this.guadanMoney,this.isNull?this.guadanCount=this.totalCount:this.guadanCount,this.isNull=!1,this.tableData=[],this.getAllCount(this.guadan),this.totalCount=0,this.totalMoney=0):this.$message.error("已有订单挂单中，请先结账或取消该订单~"):this.$message.error("不能空挂单！请先点餐~")},cancelList:function(){this.guadan=[],this.guadanMoney=0,this.guadanCount=0,this.isNull=!0},deletecount:function(t){this.tableData=this.tableData.filter(function(e){return e.id!=t.id}),this.getAllCount(this.tableData)},getAllCount:function(t){var e=this;this.totalMoney=0,this.totalCount=0,t.forEach(function(t){e.totalCount+=parseInt(t.count),e.totalMoney+=t.count*t.money})},delAllGoods:function(){this.tableData=[],this.totalCount=0,this.totalMoney=0},nowtime:function(){for(var t=new Date,e=t.getFullYear()+"-"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds(),a="",s=1;s<=10;s++)a+=Math.floor(10*Math.random());var i={ident:a,money:this.totalMoney,time:e,Mode:this.isMode,names:this.names};this.dateTime.push(i),localStorage.setItem("data",u()(this.dateTime))},checkout:function(){var t=this;0!=this.totalCount?(this.totalMoney+=this.peisong,null==this.peisong?this.isMode="店内点餐":this.isMode="外卖配送",this.tableData.forEach(function(e){t.names+=e.name,t.names+="  "}),this.nowtime(),this.names="",this.tableData=[],this.totalCount=0,this.totalMoney=0,this.$message({type:"success",message:"结账成功，感谢你为店里出来一份力~"})):this.$message.error("不能空结账！请重新试试~")},guadancheckout:function(){0!=this.guadanCount?(this.guadan=[],this.nowtime(),this.isMode="店内点餐",this.guadanCount=0,this.guadanMoney=0,this.isNull=!0,this.$message({type:"success",message:"结账成功，感谢你为店里出来一份力~"})):this.$message.error("不能空结账！请重新试试~")},handleSelectionChange:function(t){this.multipleSelection=t}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pos"},[a("el-row",{staticStyle:{height:"100%"}},[a("el-col",{staticClass:"pos-order",attrs:{span:8,id:"order-list"}},[a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"点餐",name:"dc"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",height:"350",stripe:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"商品名称"}}),t._v(" "),a("el-table-column",{attrs:{label:"数量",width:"120",prop:"count"}}),t._v(" "),a("el-table-column",{attrs:{prop:"money",label:"金额",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100%",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"medium"},on:{click:function(a){return t.deletecount(e.row)}}})]}}])})],1),t._v(" "),a("div",{staticClass:"totaldiv"},[a("span",{attrs:{"text-align":"left"}},[t._v("总计:")]),t._v(" "),a("small",[t._v("数量: ")]),t._v(" "+t._s(t.totalCount)+" ， "),a("small",[t._v("总金额:")]),t._v(" "+t._s(t.totalMoney)+"元\n             ")]),t._v(" "),a("div",{staticClass:"div-btn"},[a("el-button",{attrs:{type:"warning"},on:{click:t.ListGoods}},[t._v("挂单")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.delAllGoods()}}},[t._v("清空")]),t._v(" "),a("el-button",{attrs:{type:"success"},on:{click:t.checkout}},[t._v("下单")]),t._v(" "),a("el-button",{attrs:{type:"success"},on:{click:t.takeout}},[t._v("外卖配送")])],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"挂单",name:"gd"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.guadan,border:"",height:"350",stripe:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"商品名称"}}),t._v(" "),a("el-table-column",{attrs:{label:"数量",width:"120",prop:"count"}}),t._v(" "),a("el-table-column",{attrs:{prop:"money",label:"金额",width:"90"}})],1),t._v(" "),a("div",{staticClass:"totaldiv"},[a("span",{attrs:{"text-align":"left"}},[t._v("总计:")]),t._v(" "),a("small",[t._v("数量: ")]),t._v(" "+t._s(t.guadanCount)+" ， "),a("small",[t._v("总金额:")]),t._v(" "+t._s(t.guadanMoney)+"元\n             ")]),t._v(" "),a("div",{staticClass:"div-btn"},[a("el-button",{attrs:{type:"danger"},on:{click:t.cancelList}},[t._v("取消订单")]),t._v(" "),a("el-button",{attrs:{type:"success"},on:{click:t.guadancheckout}},[t._v("下单")])],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"外卖",name:"wm"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",height:"350",stripe:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"商品名称"}}),t._v(" "),a("el-table-column",{attrs:{label:"数量",width:"120",prop:"count"}}),t._v(" "),a("el-table-column",{attrs:{prop:"money",label:"金额",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100%",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"medium"},on:{click:function(a){return t.deletecount(e.row)}}})]}}])})],1),t._v(" "),a("div",{staticClass:"totaldiv"},[a("span",{attrs:{"text-align":"left"}},[t._v("总计:")]),t._v(" "),a("small",[t._v("数量: ")]),t._v(" "+t._s(t.totalCount)+" ， "),a("small",[t._v("总金额:")]),t._v(" "+t._s(t.totalMoney+t.peisong)+"元"),a("small",[t._v(" (配送费:"+t._s(t.peisong)+"元)")])]),t._v(" "),a("div",{staticClass:"div-btn"},[a("el-button",{attrs:{type:"danger"},on:{click:t.delAllGoods}},[t._v("取消订单")]),t._v(" "),a("el-button",{attrs:{type:"success"},on:{click:t.gohome}},[t._v("到店取餐")]),t._v(" "),a("el-button",{attrs:{type:"success"},on:{click:t.checkout}},[t._v("下单")])],1)],1)],1)],1),t._v(" "),a("el-col",{staticStyle:{"border-left":"1px solid #c0ccda"},attrs:{span:16}},[a("div",{staticClass:"often-goods"},[a("div",{staticClass:"title"},[t._v("常用商品")]),t._v(" "),a("div",{staticClass:"often-goods-list"},[a("ul",{staticClass:"clearfix"},t._l(t.often,function(e){return a("li",{on:{click:function(a){return t.addOrderList(e)}}},[a("span",{staticClass:"foodImg"},[a("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.img}},[a("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中"),a("span",{staticClass:"dot"},[t._v("...")])])])],1),t._v(" "),a("div",{staticClass:"foodinfo"},[a("span",{staticClass:"foodName"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"foodMoney"},[t._v("￥"+t._s(e.money)+"元")])])])}),0)])]),t._v(" "),a("div",{staticClass:"goods-type"},[a("el-tabs",[a("el-tab-pane",{attrs:{label:"汉堡"}},[a("ul",{staticClass:"cookList clearfix"},t._l(t.Hamburger,function(e){return a("li",{on:{click:function(a){return t.addOrderList(e)}}},[a("span",{staticClass:"foodImg"},[a("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.img}},[a("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中"),a("span",{staticClass:"dot"},[t._v("...")])])])],1),t._v(" "),a("div",{staticClass:"foodinfo"},[a("span",{staticClass:"foodName"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"foodMoney"},[t._v("￥"+t._s(e.money)+"元")])])])}),0)]),t._v(" "),a("el-tab-pane",{attrs:{label:"小食"}},[a("ul",{staticClass:"cookList"},t._l(t.snack,function(e){return a("li",{on:{click:function(a){return t.addOrderList(e)}}},[a("span",{staticClass:"foodImg"},[a("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.img}},[a("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中"),a("span",{staticClass:"dot"},[t._v("...")])])])],1),t._v(" "),a("div",{staticClass:"foodinfo"},[a("span",{staticClass:"foodName"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"foodMoney"},[t._v("￥"+t._s(e.money)+"元")])])])}),0)]),t._v(" "),a("el-tab-pane",{attrs:{label:"饮料"}},[a("ul",{staticClass:"cookList"},t._l(t.Drinks,function(e){return a("li",{on:{click:function(a){return t.addOrderList(e)}}},[a("span",{staticClass:"foodImg"},[a("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.img}},[a("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中"),a("span",{staticClass:"dot"},[t._v("...")])])])],1),t._v(" "),a("div",{staticClass:"foodinfo"},[a("span",{staticClass:"foodName"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"foodMoney"},[t._v("￥"+t._s(e.money)+"元")])])])}),0)]),t._v(" "),a("el-tab-pane",{attrs:{label:"套餐"}},[a("ul",{staticClass:"cookList"},t._l(t.Setmeal,function(e){return a("li",{on:{click:function(a){return t.addOrderList(e)}}},[a("span",{staticClass:"foodImg"},[a("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.img}},[a("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中"),a("span",{staticClass:"dot"},[t._v("...")])])])],1),t._v(" "),a("div",{staticClass:"foodinfo"},[a("span",{staticClass:"foodName"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"foodMoney"},[t._v("￥"+t._s(e.money)+"元")])])])}),0)])],1)],1)])],1)],1)},staticRenderFns:[]},p=a("VU/8")(v,m,!1,null,null,null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{staticClass:"header"},[s("h1",{attrs:{id:"title"}},[t._v("营业资质")])]),t._v(" "),s("div",{staticClass:"main"},[s("h2",{attrs:{id:"title2"}},[t._v("  食品安全监督公示")]),t._v(" "),s("div",{staticClass:"second"},[s("img",{staticStyle:{margin:"0 50px"},attrs:{src:a("cLpZ"),height:"-1",width:"-1"}}),t._v(" "),s("span",{staticClass:"pf"},[t._v(" 检查结果：C")])]),t._v(" "),s("ul",[s("li",[t._v("单位名称：武汉东湖新技术开发区xx餐饮店")]),t._v(" "),s("li",[t._v("经营地址：武汉市东湖开发区xx大道xx号")]),t._v(" "),s("li",[t._v("法定代表人：xxx")]),t._v(" "),s("li",[t._v("许可证号：xxxxxxx")]),t._v(" "),s("li",[t._v("经营范围：")]),t._v(" "),s("li",[t._v("有效期：xxxx-xx-xx")])])])])}]};var _=a("VU/8")({name:"dianpu",data:function(){return{}}},f,!1,function(t){a("+c6r")},"data-v-229469c6",null).exports,g={name:"shoplist",data:function(){return{snack:[],Drinks:[],Hamburger:[],Setmeal:[]}},created:function(){var t=this;h.a.get("https://www.easy-mock.com/mock/5cd2ca355110c02a69f7b4f2/example/table").then(function(e){t.Hamburger=e.data.hanbao,t.Drinks=e.data.yinliao,t.snack=e.data.xiaoshi,t.Setmeal=e.data.taocan}).catch(function(t){alert("网络错误，请联系管理员~"),console.log(t)})}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page clearfix"},[t._m(0),t._v(" "),a("div",{staticClass:"mains"},[a("h3",{attrs:{id:"title2"}},[t._v("汉堡区")]),t._v(" "),a("ul",{staticClass:"cookList clearfix"},t._l(t.Hamburger,function(e){return a("li",[a("span",{staticClass:"foodImg"},[a("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.img}},[a("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中"),a("span",{staticClass:"dot"},[t._v("...")])])])],1),t._v(" "),a("div",{staticClass:"foodinfo"},[a("span",{staticClass:"foodName"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"foodMoney"},[t._v("￥"+t._s(e.money)+"元")])])])}),0),t._v(" "),a("h3",{staticStyle:{"margin-top":"15px"},attrs:{id:"title2"}},[t._v("小食区")]),t._v(" "),a("ul",{staticClass:"cookList clearfix"},t._l(t.snack,function(e){return a("li",[a("span",{staticClass:"foodImg"},[a("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.img}},[a("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中"),a("span",{staticClass:"dot"},[t._v("...")])])])],1),t._v(" "),a("div",{staticClass:"foodinfo"},[a("span",{staticClass:"foodName"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"foodMoney"},[t._v("￥"+t._s(e.money)+"元")])])])}),0),t._v(" "),a("h3",{staticStyle:{"margin-top":"15px"},attrs:{id:"title2"}},[t._v("饮料区")]),t._v(" "),a("ul",{staticClass:"cookList clearfix"},t._l(t.Drinks,function(e){return a("li",[a("span",{staticClass:"foodImg"},[a("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.img}},[a("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中"),a("span",{staticClass:"dot"},[t._v("...")])])])],1),t._v(" "),a("div",{staticClass:"foodinfo"},[a("span",{staticClass:"foodName"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"foodMoney"},[t._v("￥"+t._s(e.money)+"元")])])])}),0),t._v(" "),a("h3",{staticStyle:{"margin-top":"15px"},attrs:{id:"title2"}},[t._v("套餐区")]),t._v(" "),a("ul",{staticClass:"cookList clearfix"},t._l(t.Setmeal,function(e){return a("li",[a("span",{staticClass:"foodImg"},[a("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.img}},[a("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中"),a("span",{staticClass:"dot"},[t._v("...")])])])],1),t._v(" "),a("div",{staticClass:"foodinfo"},[a("span",{staticClass:"foodName"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"foodMoney"},[t._v("￥"+t._s(e.money)+"元")])])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h1",{attrs:{id:"title"}},[this._v("所有商品")])])}]};var C=a("VU/8")(g,b,!1,function(t){a("dUQK")},"data-v-5c35b624",null).exports,y={name:"vip",data:function(){return{tableData:[],pagesize:6,currentPage:1,searchData:"",modules:[],modic:""}},created:function(){var t=this;h.a.get("https://www.easy-mock.com/mock/5cd2ca355110c02a69f7b4f2/example/user").then(function(e){t.tableData=e.data.data,t.modules=t.tableData}).catch(function(t){alert("网络错误，请联系管理员~"),console.log(t)})},mounted:function(){document.querySelector("#btn").onkeydown=function(t){var e=t||window.event;e&&13==e.keyCode&&document.querySelector("#elbtn").click()}},watch:{searchData:function(t,e){""&&(this.list=this.modules)}},methods:{disenable:function(t){if("已禁用"==t.statu||"未启用"==t.statu)return this.$message.error("未启用或已禁用的不可禁用~"),!1;t.statu="已禁用"},deleteone:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.tableData=e.tableData.filter(function(e){return e.id!=t.id}),e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},search:function(){var t=this;""===t.searchData||void 0===t.searchData?""===t.modic||void 0===t.modic?t.tableData=t.modules:(t.tableData=[],t.modules.map(function(e){-1!=e.statu.search(t.modic)&&t.tableData.push(e)})):(t.tableData=[],""===t.modic||void 0===t.modic?t.modules.map(function(e){-1!=e.id.search(t.searchData)&&t.tableData.push(e),-1!=e.name.search(t.searchData)&&t.tableData.push(e)}):t.modules.map(function(e){-1!=e.id.search(t.searchData)&&-1!=e.statu.search(t.modic)&&t.tableData.push(e),-1!=e.name.search(t.searchData)&&-1!=e.statu.search(t.modic)&&t.tableData.push(e)}))},handleSizeChange:function(t){this.pagesize=t},handleCurrentChange:function(t){this.currentPage=t}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page clearfix"},[t._m(0),t._v(" "),a("div",{staticClass:"mains"},[a("label",{staticStyle:{"margin-left":"30px"},attrs:{for:"textart"}},[t._v("用户名：")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchData,expression:"searchData"}],attrs:{type:"text",id:"btn",placeholder:"请输入用户名或ID"},domProps:{value:t.searchData},on:{input:function(e){e.target.composing||(t.searchData=e.target.value)}}}),t._v(" "),a("span",{staticStyle:{"margin-right":"30px"}},[t._v("状态:")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.modic,expression:"modic"}],staticStyle:{width:"220px",height:"35px"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.modic=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("-请选择-")]),t._v(" "),a("option",[t._v("已启用")]),t._v(" "),a("option",[t._v("已禁用")]),t._v(" "),a("option",[t._v("未启用")])]),t._v(" "),a("el-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"danger",id:"elbtn"},on:{click:t.search}},[t._v("查询")])],1),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:t.tableData.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize),border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{prop:"statu",label:"状态",width:"250",id:"zt"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.disenable(e.row)}}},[t._v("禁用")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.deleteone(e.row)}}},[t._v("删除")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"text",label:"备注"}})],1),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next, sizes, total, jumper","page-sizes":[6,12,18],"page-size":t.pagesize,total:t.tableData.length,"current-page":t.currentPage},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{attrs:{id:"title"}},[this._v("用户列表")])])}]};var w=a("VU/8")(y,x,!1,function(t){a("NM0a")},"data-v-09e80f7f",null).exports,k={name:"vip",data:function(){return{pagesize:5,currentPage:1,value1:""}},computed:{tableData:function(){return JSON.parse(localStorage.getItem("data"))||[]}},methods:{handleSizeChange:function(t){this.pagesize=t},handleCurrentChange:function(t){this.currentPage=t}}},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page clearfix"},[t._m(0),t._v(" "),a("div",{staticClass:"mains"},[a("label",{staticStyle:{"margin-left":"30px"}},[t._v("操作日期：")]),t._v(" "),a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),t._v(" "),a("el-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary",id:"elbtn"}},[t._v("查询")])],1),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:t.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"ident",label:"订单编号",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"money",label:"消费金额",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{prop:"time",label:"日期",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Mode",label:"配送方式",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{prop:"names",label:"购买商品"}})],1),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next, sizes, total, jumper","page-sizes":[5,10],"page-size":t.pagesize,total:t.tableData.length,"current-page":t.currentPage},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{attrs:{id:"title"}},[this._v("店铺流水")])])}]};var A=a("VU/8")(k,D,!1,function(t){a("KwiH")},"data-v-03b110d8",null).exports,M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page clearfix"},[t._m(0),t._v(" "),a("div",{staticClass:"mains"},[a("el-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-collapse-item",{attrs:{title:"关于系统",name:"1"}},[a("div",[t._v("这个点餐系统是第一个vue demo")]),t._v(" "),a("div",[t._v("采用vue-cli+vue-router+element-ui编写而成")])]),t._v(" "),a("el-collapse-item",{attrs:{title:"版本信息",name:"2"}},[a("div",[t._v("当前版本：1.0.0")]),t._v(" "),a("div",[t._v("后期会更新")])]),t._v(" "),a("el-collapse-item",{attrs:{title:"系统更新",name:"3"}},[a("div",[t._v("简化流程")]),t._v(" "),a("div",[t._v("清晰明确")])]),t._v(" "),a("el-collapse-item",{attrs:{title:"意见反馈",name:"4"}},[a("div",[t._v("text1")]),t._v(" "),a("div",[t._v("text2")])])],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h1",{attrs:{id:"title"}},[this._v("设置")])])}]};var S=a("VU/8")({name:"shezhi",data:function(){return{activeName:"1"}}},M,!1,function(t){a("Hq11")},"data-v-9ef792fc",null).exports,N={name:"notfound",data:function(){return{}},methods:{getdata:function(){console.log(this.$route.query.name)}}},z={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pages"},[e("span",[this._v("404")]),this._v(" "),e("h1",[this._v("您搜索的页面未找到!!!")])])}]};var L=a("VU/8")(N,z,!1,function(t){a("Q7lu")},"data-v-336f71fc",null).exports;s.default.use(c.a);var E=new c.a({name:"history",routes:[{path:"/",name:"Pos",component:p},{path:"/dianpu",name:"dianpu",component:_},{path:"/shoplist",name:"shoplist",component:C},{path:"/vip",name:"vip",component:w},{path:"/tongji",name:"tongji",component:A},{path:"/shezhi",name:"shezhi",component:S},{path:"*",component:L}]}),H=a("zL8q"),R=a.n(H);a("tvR6");s.default.config.productionTip=!1,s.default.use(R.a),new s.default({el:"#app",router:E,components:{App:o},template:"<App/>"})},NM0a:function(t,e){},Q7lu:function(t,e){},cLpZ:function(t,e){t.exports="data:image/jpeg;base64,UklGRkIFAABXRUJQVlA4WAoAAAAQAAAAWgAAWgAAQUxQSMkAAAABLyAkIPwfK2tuRETwJRw1kuRIQ6Fqh0CtjoAjsI7B8ifjeqZu3TOi/xMwjQW/ItR+x4JzyggL20S4KwGAAEQANCC2hXCIEKKqAiKuGkTlCOFVWKDVbhMWYYWdu+oqolpgoL7M1q+ZzJYHJjOsyYYrzguaOZvRDH9AI3Upw/noXmb50Bqrt5kSDwwJjwQPTAlmjdU7ZavuQvRmnR/NcGgyYpcynC8ezYxvkHbJgLtsT0JmlWW2fUQy23sruEMlpjH+a1faYYzPyR0AVlA4IFIEAACQGACdASpbAFsAPnkwkkekoyGhONts+JAPCWgAzq3mfwHZIWZ8XxpHFfgjho0IdpM4nb3eYD9afV69JHnGfzPrM/QA8tj9sfhZ8nTNSOzHap+wMMA009JBNL8lT5H0AGdX8CLgzC/bDJaQUUPOuQ9Fu/LFRcfEIfLyEGxzDf7qdVF3j+ZxAhFKBHIcNUYr5NROEHqMimrvCBnT/hK/dXF/vi9vItTCc0qZT3TW8ebYOKcjtECXVqvXCud1EnSXs17miULsTFcV4TVZJgOAAP78ABNWmt9v7rDFt7vkJR+g0xvKa8TB33rH4A1w60wrXc9WD0Whdv8a0D09ZZ5kyi6z686McztEKbe6Ae8bqKWusBE08uVHy2U0fywLT+V3/d+JMpfPYgEKlQ9UK7u2+UahOgr2ZJqrhNKjMXQhevh7wsetTP0rUls0PDlpLXSlCMxWwOOxQs3dhJgr/6Nzxxd6PJPtrH/Rscb9TM9YMYNR8W93jZjSwj+GtqdDToo2P1uquMjmSqPau0sdlO/UzKtpAu0GWL6l23/L6NAr6XG+u1viHtuCyZuLSSjxUfffYdC3DxOEfEvnsH8s+0OX+dEnxTR/5w1WA2gHz4Gi7XVgLz4cGOoX+tNr4wjB+KEizpyzmP9s32Q1b32VGpNYONfd47/iJ/Dch7vnWqBYQ+V0cvK/c+Gi1ofXw8ibXKeU4klWT9kmRVbgYy38kw+XYNw+bsXP0kxbKzGSChdMUZ7U8BuAsGZVjCVV0eWDvScFB9Xk0tim+Ac+UlQ+hH5Epr+ws68p1XlWg5WsynnZcrj9RKfCc1w67Jk2i2yDx+Y1o5hhdreNe2inCgCweAsRue2UpSZU9NeAJNGzIqSEyDoJwDLrn92t99ZqYkOeeMPBzJ9f59lLlzyA4B/oEFZPizMYiki8PsFn0jY+jFyHwZeldnSHYRsJlHxaD8cCnmDu1quGyXnht0ItwQioypdq6K8tekKX+VqR/GK4ybHagzgDUIO0nXGWTqY/rIv50f177hzhVn1U90xKvrPWiHagwGi2cT4qzA4rMDhXgjQ+SzuKtUoA1cDVRDac/6tMYZuHU7QSzQxWAh05nmQ8Secdoe2VvwDX/Z7Mhp5bCXCC1RPVv48METuDAjWZNTEsXcz/6QEPqUUgky7Z4Qfq4yqW3LgvXOoBaxY6HBt5urxWHxqn1f97VfnS6sviC7QrWN2lQGDQAYoc2JI0+Bayr6O/lX7/Bhj2vgc7vc5AF3Y7/OZAaRog2kRtcP/X/4t1OUlDUdEtvr7NFE+JtwL0RywqQK1eRfS2qTwdZS2+Qj0hyyV5B7qJreb/n1hGxYJ4T9zoQXjiiOaBJIirzTuRHY/yfyTHPnL29o/2vk948XsRikcKfri1yhtcpeb/qwsklvX7wE/hlhPnI6PaX8fQN0DEEW3kaBkcthfAMsajGWCJAReH+ZLofO29vuZquKI6Pr+d/AAAAA=="},dUQK:function(t,e){},sGSt:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d6e99506bf7f6c852c4b.js.map