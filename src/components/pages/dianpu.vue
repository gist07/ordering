<template>
    <div class="page">
     <div class="header">
        <h1 id="title">营业资质</h1>
     </div>
     <div class="main">
        <h2 id="title2">&nbsp;&nbsp;食品安全监督公示</h2>
        <div class="second">
        <img src="../../../static/pf.jpg" height="-1" width="-1" style="margin:0 50px;">
        <span class="pf"> 检查结果：C</span>
        </div>
         <ul>
          <li>单位名称：武汉东湖新技术开发区xx餐饮店</li>
          <li>经营地址：武汉市东湖开发区xx大道xx号</li>
          <li>法定代表人：xxx</li>
          <li>许可证号：xxxxxxx</li>
          <li>经营范围：</li>
          <li>有效期：xxxx-xx-xx</li>
         </ul>
     </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        name:'dianpu',
        data(){
            return{

            }
        }
    }
</script>
<style type="text/css" scoped>
.page{
   margin:0 auto;
     width:60%;
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
.main{
  margin-top:10px;
  background:#fff;
  width:100%;
}
#title2{
text-align:left;
border-bottom:1px solid #eee;
height:65px;
line-height:65px;
}
.second{
    height: 120px;
    display: flex;
    justify-content:start;
    align-items:center;
    border-bottom:1px solid #eee;
}
ul{
   width:100%;
   height: 600px;
    margin:0;
    padding-left:30px;
}
li{
    height:10%;
    width:100%;
     border-bottom:1px solid #eee;
     list-style:none;
     text-align:left;
     line-height:60px;
}
</style>