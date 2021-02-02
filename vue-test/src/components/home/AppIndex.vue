<template>
  <div style="margin-top: 40px">
    <side-menu class="side-menu"></side-menu>
    <div class="home">
      <div class="header">
        <div style="height: 150px"></div>
        <carousel></carousel>
        <quick-nav class="quick-nav"></quick-nav>
      </div>
    </div>
  </div>

</template>

<script>
  import SideMenu from "./SideMenu";
  import QuickNav from "./QuickNav";
  import Carousel from "./Carousel";
    export default {
      name: "AppIndex",
      components:{SideMenu,Carousel,QuickNav}
    }
</script>

<style scoped>
  .side-menu {
    margin-left: 50%;
    left: -680px;
    top: 100px;
  }
  .home{
    width: 990px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -20px;
  }
  .header{
    background-color: white;
  }
  .quick-nav{
    float: right;
      margin-top: -450px;
      margin-right: 480px;
  }
</style>
