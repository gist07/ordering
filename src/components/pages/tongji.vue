<template>
    <div class="page clearfix">
    <div class="header">
        <h2 id="title">店铺流水</h2>
     </div>
     <div class="mains">
        <label style="margin-left:30px;">操作日期：</label>
     <el-date-picker
      v-model="value1"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
        <el-button type="primary" style="margin-left:15px;" id="elbtn">查询</el-button>
     </div>
       <el-table :data="tableData" border style="width:100%;margin-top:30px;" stripe ref="multipleTable">
         <el-table-column prop="ident" label="订单编号" width="200"></el-table-column>
         <el-table-column prop="money" label="消费金额" width="250"></el-table-column>
         <el-table-column prop="time" label="日期" width="250"></el-table-column>
         <el-table-column prop="Mode" label="配送方式" width="250"></el-table-column>
        <el-table-column prop="names" label="购买商品" ></el-table-column>
       </el-table>
         <el-pagination background
            layout="prev, pager, next, sizes, total, jumper"
            :page-sizes="[5, 10,]"
            :page-size="pagesize"
            :total="tableData.length"
            :current-page="currentPage"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            >
        </el-pagination>
     </div>
</template>
<script type="text/javascript">
import axios from 'axios';
    export default{
        name:'vip',
     data() {
      return {
        pagesize: 5,
        currentPage:1,
        value1:'',
      }
     },
    computed:{
      tableData(){
          var lac=JSON.parse(localStorage.getItem('data'))||[];
            return lac;
      }
     },
   methods:{
    handleSizeChange: function (size) {
          this.pagesize = size;
        },
    handleCurrentChange: function(currentPage){
         this.currentPage = currentPage;
        },
        }
    }
</script>
<style type="text/css" scoped>
.page{
   margin:0 auto;
     width:97%;
     background:#fff;
}
.header{
    height: 75px;
    border-bottom: 1px solid #eee;
}
#title{
    height: 75px;
    line-height:75px;
    color:#2395ff;
    text-align:left;
    margin-left:20px;
}
#btn{
  margin-right:15px;
  width:220px;
  height:25px;
}
.mains{
  margin-top:10px;
  width:100%;
  height: 120px;
  text-align:left;
  line-height:120px;
  border:1px solid #cecece;
  background:#eff2f7;
}
</style>