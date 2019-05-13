<template>
    <div class="page clearfix">
    <div class="header">
        <h2 id="title">用户列表</h2>
     </div>
     <div class="mains">
        <label for="textart" style="margin-left:30px;">用户名：</label>
        <input type="text" id="btn" placeholder="请输入用户名或ID" v-model="searchData">
        <span style="margin-right:30px;">状态:</span>
        <select style="width:220px;height:35px;" v-model="modic">
            <option disabled value="">-请选择-</option>
            <option>已启用</option>
            <option>已禁用</option>
            <option>未启用</option>
        </select>
        <el-button type="danger" style="margin-left:15px;" id="elbtn" @click="search">查询</el-button>
     </div>
       <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width:100%;margin-top:30px;" stripe ref="multipleTable">
         <el-table-column prop="id" label="ID" width="200"></el-table-column>
         <el-table-column prop="name" label="姓名" width="250"></el-table-column>
         <el-table-column prop="statu" label="状态" width="250" id="zt"></el-table-column>
         <el-table-column label='操作' width="300">
          <template slot-scope='scope'>
              <el-button type="text" size="small" @click="disenable(scope.row)">禁用</el-button>
              <el-button type="text" size="small" @click="deleteone(scope.row)">删除</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="text" label="备注" ></el-table-column>
       </el-table>
         <el-pagination background
            layout="prev, pager, next, sizes, total, jumper"
            :page-sizes="[6, 12,18]"
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
        tableData: [],
        pagesize: 6,
        currentPage:1,
        searchData:"",
        modules:[],
        modic:'',
      }
     },
     created(){
         axios.get('https://www.easy-mock.com/mock/5cd2ca355110c02a69f7b4f2/example/user').then(response=>{
                   this.tableData=response.data.data;
                   this.modules=this.tableData;
        }).catch(error=>{
           alert('网络错误，请联系管理员~')
           console.log(error);
        });
     },
     mounted(){
        document.querySelector('#btn').onkeydown=function(event){
           var e=event||window.event;
            if(e&&e.keyCode==13){
               document.querySelector('#elbtn').click();
            }
        }
     },
     watch:{
       searchData(current,old){
        let that=this;
          if(current=''){
             that.list=that.modules;
          }
       }
     },
     methods:{
      disenable(item){
        if(item.statu=='已禁用'||item.statu=='未启用'){
            this.$message.error('未启用或已禁用的不可禁用~')
            return false;
        }
         item.statu='已禁用'
      },
      deleteone(item){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        this.tableData=this.tableData.filter(o=>o.id!=item.id);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      search(){
        let that=this;
        if(that.searchData==='' || typeof(that.searchData)=='undefined'){
          if (that.modic==='' || typeof(that.modic)=='undefined') {
              that.tableData=that.modules;
          }
          else{
            that.tableData=[];
           that.modules.map(function(item){
               if(item.statu.search(that.modic)!=-1){
                   that.tableData.push(item);
               }
           })
          }
        }
        else {
            that.tableData=[];
          if (that.modic==='' || typeof(that.modic)=='undefined') {
               that.modules.map(function(item){
               if(item.id.search(that.searchData)!=-1){
                  that.tableData.push(item);
               }
               if(item.name.search(that.searchData)!=-1){
                  that.tableData.push(item);
               }
           })
          }
          else{
           that.modules.map(function(item){
               if(item.id.search(that.searchData)!=-1&&item.statu.search(that.modic)!=-1){
                  that.tableData.push(item);
               }
               if(item.name.search(that.searchData)!=-1&&item.statu.search(that.modic)!=-1){
                  that.tableData.push(item);
               }
           })
          }
        }
      },
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
  margin-right:30px;
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