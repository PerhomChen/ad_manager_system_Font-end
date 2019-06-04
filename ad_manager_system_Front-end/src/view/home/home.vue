
<template>
  <div class="home">
    <div class="head">
       <home-page></home-page>
    </div>
  
   <br>
  </div>
</template>

<script>
import homePage from '../../components/home/home-page';

export default {
   components: {
     homePage
  }
}
</script>

<style lang="less">
@import "./home.less";
</style>
