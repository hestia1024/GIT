<template>
  <div>
    <Header></Header>
    <SideMenu></SideMenu>
    <div class="main">
      <Detail></Detail>
      <Reply></Reply>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
    <BackTop></BackTop>
  </div>
</template>

<script>
  import Header from "../common/Header";
  import SideMenu from "../common/SideMenu";
  import Detail from "./Detail"
  import Reply from "./Reply";
  import Footer from "../common/Footer";
  import BackTop from "../common/BackTop";
  export default {
    name: "ForumDetailIndex",
    components:{Header,SideMenu,Detail,Reply,Footer,BackTop}

  }
</script>

<style scoped>
  .main{
    width: 1188px;
    height: 100%;
    padding-top: 80px;
    margin-left: 200px;
    float: left;
  }
</style>
