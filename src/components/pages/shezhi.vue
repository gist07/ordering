<template>
    <div class="page clearfix">
    <div class="header">
        <h1 id="title">设置</h1>
     </div>
      <div class="mains">
       <el-collapse v-model="activeName" accordion>
  <el-collapse-item title="关于系统" name="1">
    <div>这个点餐系统是第一个vue demo</div>
    <div>采用vue-cli+vue-router+element-ui编写而成</div>
  </el-collapse-item>
  <el-collapse-item title="版本信息" name="2">
    <div>当前版本：1.0.0</div>
    <div>后期会更新</div>
  </el-collapse-item>
  <el-collapse-item title="系统更新" name="3">
    <div>简化流程</div>
    <div>清晰明确</div>
  </el-collapse-item>
  <el-collapse-item title="意见反馈" name="4">
    <div>text1</div>
    <div>text2</div>
  </el-collapse-item>
</el-collapse>
      </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        name:'shezhi',
        data(){
            return{
              activeName:'1'
            }
        }
    }
</script>
<style type="text/css" scoped>
.page{
   margin:0 auto;
     width:70%;
}
.header{
    background:#2395ff;
    height: 50px;
}
#title{
    height: 50px;
    line-height:50px;
    color:#fff;
}
.mains{
  margin-top:10px;
  background:#fff;
  width:100%;
  text-align:left;
  height:500px;
}
</style>