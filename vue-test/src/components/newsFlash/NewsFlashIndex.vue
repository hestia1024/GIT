<template>
  <div>
    <Header></Header>
    <SideMenu></SideMenu>
    <div class="main">
      <NewsFlashContent></NewsFlashContent>
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
  import NewsFlashContent from "./NewsFlashContent";
  import Footer from "../common/Footer";
  import BackTop from "../common/BackTop";
    export default {
      name: "NewsFlashIndex",
      components: {Header, SideMenu,NewsFlashContent,Footer,BackTop},
    }
</script>

<style scoped>
</style>
