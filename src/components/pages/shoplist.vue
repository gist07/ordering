<template>
<div class="page clearfix">
    <div class="header">
        <h1 id="title">所有商品</h1>
     </div>
     <div class="mains">

        <h3 id="title2">汉堡区</h3>
        <ul class="cookList clearfix">
           <li v-for='item in Hamburger'>
              <span class="foodImg"> <el-image :src="item.img"style="width:100%;height:100%">
                <div slot="placeholder" class="image-slot"> 加载中<span  class="dot">...</span></div></el-image>
              </span>
          <div class="foodinfo">
             <span class="foodName">{{item.name}}</span>
             <span class="foodMoney">￥{{item.money}}元</span>
          </div>
           </li>
        </ul>

       <h3 id="title2" style="margin-top:15px;">小食区</h3>
        <ul class="cookList clearfix">
           <li v-for='item in snack'>
             <span class="foodImg"> <el-image :src="item.img"style="width:100%;height:100%">
                <div slot="placeholder" class="image-slot"> 加载中<span  class="dot">...</span></div></el-image>
             </span>
          <div class="foodinfo">
             <span class="foodName">{{item.name}}</span>
             <span class="foodMoney">￥{{item.money}}元</span>
          </div>
           </li>
        </ul>

       <h3 id="title2" style="margin-top:15px;">饮料区</h3>
        <ul class="cookList clearfix">
           <li v-for='item in Drinks'>
             <span class="foodImg"> <el-image :src="item.img"style="width:100%;height:100%">
                <div slot="placeholder" class="image-slot"> 加载中<span  class="dot">...</span></div></el-image>
            </span>
          <div class="foodinfo">
             <span class="foodName">{{item.name}}</span>
             <span class="foodMoney">￥{{item.money}}元</span>
          </div>
           </li>
        </ul>

        <h3 id="title2" style="margin-top:15px;">套餐区</h3>
        <ul class="cookList clearfix">
           <li v-for='item in Setmeal'>
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
</template>
<script type="text/javascript">
import axios from 'axios';
    export default{
        name:'shoplist',
        data(){
            return{
             snack:[],
             Drinks:[],
             Hamburger:[],
             Setmeal:[],
            }
        },
        created(){
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
}
#title2{
text-align:left;
border-bottom:1px solid #2395ff;
height:65px;
line-height:65px;
margin-left:15px;
}
</style>