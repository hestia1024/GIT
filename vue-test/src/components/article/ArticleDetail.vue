<template>
  <div>
    <Header></Header>
    <SideMenu></SideMenu>
    <div class="main">
      <div class="main-left">
        <ArticleTitle></ArticleTitle>
        <ArticleContent></ArticleContent>
        <CommentList></CommentList>
        <PostComment></PostComment>
        <Interest></Interest>
      </div>
      <div class="main-right">
        <div class="news-flash">
          <NewsFlash></NewsFlash>
        </div>
        <Affix :offset-top="65">
          <div class="popular-article">
            <PopularArticle ></PopularArticle>
          </div>
        </Affix>
      </div>
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
  import ArticleTitle from "../article/ArticleTitle";
  import ArticleContent from "./ArticleContent";
  import Interest from "./Interest";
  import CommentList from "./CommentList";
  import PostComment from "./PostComment";
  import NewsFlash from "../index/NewsFlash";
  import PopularArticle from "../index/PopularArticle";
  import ArticleList from "../index/ArticleList";
  import Footer from "../common/Footer";
  import BackTop from "../common/BackTop";

  export default {
    name: "index",
    components: {Header, SideMenu,ArticleTitle,ArticleContent,CommentList,PostComment,Interest,NewsFlash, PopularArticle,ArticleList,Footer,BackTop},

  }
</script>

<style scoped>
  .main{
    width: 1188px;
    height: 100%;
    padding-top: 125px;
    margin-left: 200px;
    float: left;
  }
  .main-left{
    float: left;
    padding-left: 20px;
  }
  .main-right{
    width: 418px;
    padding-left: 16px;
    float: right;
  }
  .news-flash{
    border: 1px solid #f9f9f9;
    background-color: #f9f9f9;
  }
  .popular-article{
    margin-top: 10px;
    border: 1px solid #f9f9f9;
    background-color: #f9f9f9;
  }
</style>
