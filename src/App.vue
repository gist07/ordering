<template>
<div id="app" class="clearfix">
<div class="lefts">
  <LeftNav></LeftNav>
</div>
 <div class="main">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import LeftNav from '@/components/common/LeftNav';
export default {
  name: 'App',
  components:{
     LeftNav
  }
}
</script>

<style>
.lefts{
  height: 100%;
    width:5%;
    background-color:#337780;
    float:left;
    position:fixed;
    left:0;
    top: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position:relative;
}
.main{
  width:95%;
  background:#eff2f7;
  height: 100%;
  overflow:hidden;
  float:right;
}
</style>
