<template>
  <div>
    <Header></Header>
    <SideMenu></SideMenu>
    <div class="main">
      <div class="banner">
        <img src="../../assets/topic.png" alt="" style="width: 100%">
        <el-button class="submit" type="text">订阅</el-button>
        <div class="topic-title" v-ref="Article">
          <div style="text-align: center">
            <span style="font-size: 44px;font-weight: bold">{{Article[0].articleType.type}}</span>
            <br>
            <span style="font-size: 28px">{{Article[0].articleType.abs}}</span>
          </div>
        </div>
      </div>
      <div class="list">
        <el-link class="item" :underline="false" v-for="item in Article" v-on:click="detail(item.id)">
          <el-divider></el-divider>
          <div class="left">
            <div style="float: left;width:1006px;">
              <span style="float: left;font-size: 16px">{{item.articleType.type}}</span>
              <span style="float: right;font-size: 16px;margin-right: 140px">{{ item.time | relativeTime }}</span>
            </div>
            <span class="item-title">{{item.title}}</span>
            <span style="float: left;font-size: 16px">{{item.abs}}</span>
          </div>
          <img src="../../../static/img/article-img/img1.png" alt="" class="list-img">
        </el-link>
      </div>
    </div>
    <Footer></Footer>
    <BackTop></BackTop>
  </div>
</template>

<script>
  import Header from "../common/Header";
  import SideMenu from "../common/SideMenu";
  import Footer from "../common/Footer";
  import BackTop from "../common/BackTop";
  export default {
    name: "TopicList",
    components: {Header, SideMenu,Footer,BackTop},
    data(){
      return{
        Article:[]
      }
    },
    mounted: function () {
      this.loadArticle()
    },
    methods: {
      getParams(){
        return this.$route.query.typeId
      },
      loadArticle() {
        var _this = this
        this.$axios
          .post('/findAllArticleByType',this.$qs.stringify({
          'typeId':this.getParams()
          }))
          .then(resp => {
            console.log(resp.status)
            if (resp && resp.status === 200) {
              _this.Article = resp.data
            }
          })
      },
      detail(id) {
        this.$axios
          .post('/increaseClickNum',
            this.$qs.stringify({
              'id':id
            })
          )
        this.$router.push({
          path: '/ad',
          query: {
            id: id
          }
        })
      }
    }
  }
</script>

<style scoped>
  .main{
    width: 1167px;
    height: 100%;
    margin-top: 100px;
    margin-left: 220px;
    float: left;
  }
  .banner{
    width:100%;
    height: 300px;
    background-color: #2c6b7b;
  }
  .submit{
    background-color: black;
    color: white;
    width: 100px;
    border-radius: 0px;
    font-size: 30px;
    font-weight: bold;
    z-index: 90;
    position: absolute;
    left: 250px;
    top: 313px;
  }
  .topic-title{
    width: 1000px;
    color: white;
    position: absolute;
    left: 20%;
    top: 180px;
  }
  .list{
    width: 100%;
    float: left;
  }
  .item{
    width: 100%;
    float: left;
    margin-top: 30px;
    margin-bottom: -20px;
  }
  .list-img{
    width: 180px;
    height: 120px;
    float: right;
  }
  .left{
    float: left;
    width: 900px;
  }
  .item-title{
    float: left;
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
    color: black;
    width: 1000px;
    text-align: left;
    margin-bottom: 20px;
  }
</style>
