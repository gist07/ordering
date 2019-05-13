<template>
    <div class="left">
      <ul>
        <!-- <li id="active">
          <i class="icon iconfont icon-tubiao-"></i><p>收银</p>
        </li>
        <li>
          <i class="icon iconfont icon-dianpu"></i><p>店铺</p>
        </li>
        <li>
          <i class="icon iconfont icon-hanbao"></i><p>商品</p>
        </li>
        <li>
          <i class="icon iconfont icon-huiyuan"></i><p>会员</p>
        </li>
        <li>
          <i class="icon iconfont icon-tongji"></i><p>统计</p>
        </li>
        <li>
          <i class="icon iconfont icon-shezhi-copy"></i><p>设置</p>
        </li> -->
        <li :id="activeClass==index?'active':'' " v-for="(item,index) in itemList" :key="index" @click='getItem(index)' class="change">
          <i :class="item.icon"></i>
          <p>{{item.text}}</p>
        </li>
      </ul>
    </div>
</template>

<script type="text/javascript">
    export default{
      name:'LeftNav',
      data(){
        return {
          activeClass:'',
          itemList:[
            {icon:'icon iconfont icon-tubiao-',text:'收银'},
            {icon:'icon iconfont icon-dianpu',text:'店铺'},
            {icon:'icon iconfont icon-hanbao',text:'商品'},
            {icon:'icon iconfont icon-huiyuan',text:'会员'},
            {icon:'icon iconfont icon-tongji',text:'统计'},
            {icon:'icon iconfont icon-shezhi-copy',text:'设置'},
          ]
        }
      },
      methods:{
         getItem:function(index){
          this.activeClass=index;
            switch(index){
               case 0: this.$router.push('/');break;
               case 1: this.$router.push('dianpu');break;
               case 2: this.$router.push('shoplist');break;
               case 3: this.$router.push('vip');break;
               case 4: this.$router.push('tongji');break;
               case 5: this.$router.push('shezhi');break;

            }
         }
      }
    };
</script>
<style type="text/css" media="screen">
.left{
    color:#fff;
    font-size:10px;
    height: 100%;
    width:100%;
    background-color:#337780;
    float:left;
}
.iconfont{
    font-size:24px;
  }
.left ul{
    margin:0;
    padding:0;
}
.left li{
    list-style:none;
    text-align:center;
    padding:10px;
    border-bottom: 1px solid #20a0ff;
    cursor:pointer;
}
.left ul #active{
   transition:all .6s;
  background:#409EFF;
  color:#fff;
}
</style>