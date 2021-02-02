<template>
  <div>
    <Header></Header>
    <SideMenu></SideMenu>
    <div class="main">
      <ForumItem></ForumItem>
      <ForumList></ForumList>
      <PostForum></PostForum>
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
  import ForumList from "./ForumList";
  import PostForum from "./PostForum";
  import Footer from "../common/Footer";
  import BackTop from "../common/BackTop";
  export default {
    name: "forumIndex",
    components:{Header,SideMenu,ForumList,PostForum,Footer,BackTop}
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
