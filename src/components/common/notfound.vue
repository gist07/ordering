<template>
   <div class="pages">
      <span>404</span>
      <h1>您搜索的页面未找到!!!</h1>
   </div>
</template>
<script type="text/javascript">
    export default{
        name:'notfound',
        data(){
            return{

            }
        },
        methods:{
            getdata(){
               console.log(this.$route.query.name);
            }
        }
    }
</script>
<style type="text/css" media="screen" scoped>
.pages{
    margin-top:15%;
     color:#ccc;
}
span{
    font-size:50px;
}

</style>