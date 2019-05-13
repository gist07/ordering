<template>
    <div class="pos">
         <el-row style="height:100%;">
            <el-col :span='8' class="pos-order" id="order-list">
            <el-tabs  v-model="activeName">
              <el-tab-pane label='点餐' name='dc'>
               <el-table :data="tableData" border style="width:100%" height="350" stripe  @selection-change="handleSelectionChange" ref="multipleTable">
                 <el-table-column type="selection" width='55'></el-table-column>
                 <el-table-column prop='name' label='商品名称'></el-table-column>
                 <el-table-column label='数量' width="120" prop='count'></el-table-column>
                 <el-table-column prop='money' label='金额' width="90"></el-table-column>
                 <el-table-column label='操作' width="100%" fixed='right'>
                    <template slot-scope='scope'>
                       <el-button type='danger' icon="el-icon-delete" circle size="medium" @click='deletecount(scope.row)'></el-button>
                    </template>
                  </el-table-column>
                </el-table>
                 <div class="totaldiv">
                 <span text-align="left">总计:</span>
                   <small>数量: </small>&nbsp;{{totalCount}} ， <small>总金额:</small>&nbsp;{{totalMoney}}元
                 </div>
                 <div class="div-btn">
                   <el-button type="warning" @click='ListGoods'>挂单</el-button>
                   <el-button type="danger" @click='delAllGoods()'>清空</el-button>
                   <el-button type="success" @click='checkout'>下单</el-button>
                   <el-button type="success" @click='takeout'>外卖配送</el-button>
                 </div>
              </el-tab-pane>
               <el-tab-pane label='挂单' name="gd">
                  <el-table :data="guadan" border style="width:100%" height="350" stripe  @selection-change="handleSelectionChange" ref="multipleTable">
                 <el-table-column type="selection" width='55'></el-table-column>
                 <el-table-column prop='name' label='商品名称'></el-table-column>
                 <el-table-column label='数量' width="120" prop='count'>
                 </el-table-column>
                 <el-table-column prop='money' label='金额' width="90"></el-table-column>
                </el-table>
                 <div class="totaldiv">
                 <span text-align="left">总计:</span>
                   <small>数量: </small>&nbsp;{{guadanCount}} ， <small>总金额:</small>&nbsp;{{guadanMoney}}元
                 </div>
                 <div class="div-btn">
                   <el-button type="danger" @click="cancelList">取消订单</el-button>
                   <el-button type="success" @click='guadancheckout'>下单</el-button>
                 </div>
               </el-tab-pane>
               <el-tab-pane label='外卖' name='wm'>
                  <el-table :data="tableData" border style="width:100%" height="350" stripe  @selection-change="handleSelectionChange" ref="multipleTable">
                 <el-table-column type="selection" width='55'></el-table-column>
                 <el-table-column prop='name' label='商品名称'></el-table-column>
                 <el-table-column label='数量' width="120" prop='count'>
                 </el-table-column>
                 <el-table-column prop='money' label='金额' width="90"></el-table-column>
                 <el-table-column label='操作' width="100%" fixed='right'>
                    <template slot-scope='scope'>
                       <el-button type='danger' icon="el-icon-delete" circle size="medium" @click='deletecount(scope.row)'></el-button>
                    </template>
                  </el-table-column>
                </el-table>
                 <div class="totaldiv">
                 <span text-align="left">总计:</span>
                   <small>数量: </small>&nbsp;{{totalCount}} ， <small>总金额:</small>&nbsp;{{totalMoney+peisong}}元<small>&nbsp;(配送费:{{peisong}}元)</small>
                 </div>
                 <div class="div-btn">
                   <el-button type="danger" @click="delAllGoods">取消订单</el-button>
                   <el-button type="success" @click='gohome'>到店取餐</el-button>
                   <el-button type="success" @click='checkout'>下单</el-button>
                 </div>
               </el-tab-pane>
            </el-tabs>
            </el-col>

           <el-col :span='16' style=" border-left:1px solid #c0ccda;">
               <div class="often-goods">
                 <div class="title">常用商品</div>
                   <div class="often-goods-list">
                     <ul class="clearfix">
                      <li v-for='item in often' @click='addOrderList(item)'>
                    <span class="foodImg"> <el-image :src="item.img"style="width:100%;height:100%">
                         <div slot="placeholder" class="image-slot"> 加载中<span  class="dot">...</span></div></el-image>
                    </span>
                      <div class="foodinfo">
                        <span class="foodName">{{item.name}}</span>
                        <span class="foodMoney">￥{{item.money}}元</span>
                      </div>
                      </li>
                     </ul>
                   </div>
                   </div>
                   <div class="goods-type">
                      <el-tabs>
                        <el-tab-pane label='汉堡'>
                            <ul class="cookList clearfix">
                            <li v-for='item in Hamburger' @click='addOrderList(item)'>
                               <span class="foodImg"> <el-image :src="item.img"style="width:100%;height:100%">
                                <div slot="placeholder" class="image-slot"> 加载中<span  class="dot">...</span></div></el-image>
                               </span>
                              <div class="foodinfo">
                               <span class="foodName">{{item.name}}</span>
                              <span class="foodMoney">￥{{item.money}}元</span>
                             </div>
                            </li>
                          </ul>
                         </el-tab-pane>
                         <el-tab-pane label='小食'>
                            <ul class="cookList">
                            <li v-for='item in snack' @click='addOrderList(item)'>
                               <span class="foodImg"> <el-image :src="item.img"style="width:100%;height:100%">
                                <div slot="placeholder" class="image-slot"> 加载中<span  class="dot">...</span></div></el-image>
                               </span>
                              <div class="foodinfo">
                               <span class="foodName">{{item.name}}</span>
                               <span class="foodMoney">￥{{item.money}}元</span>
                              </div>
                            </li>
                          </ul>
                         </el-tab-pane>
                         <el-tab-pane label='饮料'>
                            <ul class="cookList">
                            <li v-for='item in Drinks' @click='addOrderList(item)'>
                              <span class="foodImg"> <el-image :src="item.img"style="width:100%;height:100%">
                                <div slot="placeholder" class="image-slot"> 加载中<span  class="dot">...</span></div></el-image>
                              </span>
                               <div class="foodinfo">
                               <span class="foodName">{{item.name}}</span>
                               <span class="foodMoney">￥{{item.money}}元</span>
                               </div>
                            </li>
                          </ul>
                         </el-tab-pane>
                        <el-tab-pane label='套餐'>
                            <ul class="cookList">
                            <li v-for='item in Setmeal' @click='addOrderList(item)'>
                              <span class="foodImg"> <el-image :src="item.img"style="width:100%;height:100%">
                                <div slot="placeholder" class="image-slot"> 加载中<span  class="dot">...</span></div></el-image>
                              </span>
                               <div class="foodinfo">
                               <span class="foodName">{{item.name}}</span>
                               <span class="foodMoney">￥{{item.money}}元</span>
                               </div>
                            </li>
                          </ul>
                         </el-tab-pane>
                      </el-tabs>
                   </div>
           </el-col>
         </el-row>
    </div>
</template>
<script type="text/javascript">
import axios from 'axios';
    export default{
      name:'Pos',
      data(){
        return {
          tableData: [],
          guadan:[],
          isNull:true,
          guadanMoney:0,
          guadanCount:0,
          totalCount:0,
          totalMoney:0,
          often:[],
          snack:[],
          Drinks:[],
          Hamburger:[],
          Setmeal:[],
          activeName: 'dc',
          dateTime:[],
          isMode:'',
          names:[]
       }
      },
     created(){
        axios.get('https://www.easy-mock.com/mock/5cd2ca355110c02a69f7b4f2/example/alldata').then(response=>{
           this.often=response.data.often;

        }).catch(error=>{
           alert('网络错误，请联系管理员~')
           console.log(error);
        });
        axios.get('https://www.easy-mock.com/mock/5cd2ca355110c02a69f7b4f2/example/table').then(response=>{
           this.Hamburger=response.data.hanbao;
           this.Drinks=response.data.yinliao;
           this.snack=response.data.xiaoshi;
           this.Setmeal=response.data.taocan;

        }).catch(error=>{
           alert('网络错误，请联系管理员~')
           console.log(error);
        });
     },
     computed:{
        peisong:function(){
          if(this.activeName=='wm'){
            if(0<=this.totalMoney&&this.totalMoney<=30){
                  return 15;
            }else if(30<this.totalMoney&&this.totalMoney<=50){
                  return 12;
            }else if(50<this.totalMoney&&this.totalMoney<=80){
                  return 9;
            }else if(80<this.totalMoney&&this.totalMoney<=120){
                  return 4;
            }else if(120<this.totalMoney){
                  return 1;
            }
          }else{
             return null;
          }
        }
     },
      methods:{
         addOrderList(item){
          if(this.isNull){
             let ishave=false;
            for (var i=0;i<this.tableData.length;i++){
                if(this.tableData[i].id==item.id){
                  ishave=true
                }
            }
            //判断是否存在，若存在，则数量加1，不存在新建一个添加进去
            if(ishave){
               let arr=this.tableData.filter(o=>o.id==item.id);
               arr[0].count++;
            }
            else{
              let newGoods={
                id:item.id,
                name:item.name,
                money:item.money,
                count:1
              };
              this.tableData.push(newGoods);
            }
            this.getAllCount(this.tableData);
          }
          else {
            this.$message.error('已有订单挂单中，请先结账或取消该订单~')
          }
         },
         takeout(){
            this.activeName='wm';
            this.getAllCount(this.tableData);
         },
         gohome(){
            this.activeName='dc';
            this.getAllCount(this.tableData);
         },
         ListGoods(){
          if(this.totalCount!=0){
            if(this.guadan.length==0){
            this.isNull=true;
            this.activeName='gd';
            this.isNull?this.guadan=this.tableData:this.guadan;
            this.isNull?this.guadanMoney=this.totalMoney:this.guadanMoney;
            this.isNull?this.guadanCount=this.totalCount:this.guadanCount;
            this.isNull=false;
            this.tableData=[];
            this.getAllCount(this.guadan);
             this.totalCount=0;
             this.totalMoney=0;
            }
          else{
            this.$message.error('已有订单挂单中，请先结账或取消该订单~')
          }
        }
          else{
             this.$message.error('不能空挂单！请先点餐~')
           }
         },
         cancelList(){
             this.guadan=[];
             this.guadanMoney=0;
             this.guadanCount=0;
             this.isNull=true;
         },
         deletecount(item){
            this.tableData=this.tableData.filter(o=>o.id!=item.id);
            this.getAllCount(this.tableData);
         },
        getAllCount(tablearr){
            this.totalMoney=0;
            this.totalCount=0;
           tablearr.forEach(element=>{
               this.totalCount+=parseInt(element.count);
               this.totalMoney+=element.count*element.money;
            })
         },
        delAllGoods(){
          this.tableData=[];
           this.totalCount=0;
           this.totalMoney=0;
        },
        nowtime(){
          let date=new Date();
          let nowdata=date.getFullYear() + '-'+(date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'+
                      date.getDate() + ' '+date.getHours() + ':'+ date.getMinutes() + ':'+date.getSeconds();
          let value='';
          for(let j=1;j<=10;j++){
              value+=Math.floor(Math.random()*10);
            }
          let tem={
            ident:value,
            money:this.totalMoney,
            time:nowdata,
            Mode:this.isMode,
            names:this.names
          }
          this.dateTime.push(tem);
         localStorage.setItem('data',JSON.stringify(this.dateTime));
        },
        checkout(){
           if(this.totalCount!=0){
           this.totalMoney+=this.peisong;
           if(this.peisong==null){
              this.isMode='店内点餐'
           }
           else{
            this.isMode='外卖配送'
           }
           this.tableData.forEach(o=>{
              this.names+=o.name;
              this.names+='  ';
           })
            this.nowtime();
            this.names='';
            this.tableData=[];
            this.totalCount=0;
            this.totalMoney=0;
            this.$message({
              type:'success',
              message:'结账成功，感谢你为店里出来一份力~'
            })
           }
           else{
             this.$message.error('不能空结账！请重新试试~')
           }
        },
        guadancheckout(){
           if(this.guadanCount!=0){
            this.guadan=[];
            this.nowtime();
            this.isMode='店内点餐';
            this.guadanCount=0;
            this.guadanMoney=0;
            this.isNull=true;
            this.$message({
              type:'success',
              message:'结账成功，感谢你为店里出来一份力~'
            })
           }
           else{
             this.$message.error('不能空结账！请重新试试~')
           }
        },
        handleSelectionChange(val) {
           this.multipleSelection = val;
        }
      }
    }
</script>