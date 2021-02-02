<template>
  <div>
    <Header></Header>
    <SideMenu></SideMenu>
    <div class="main">
      <el-link class="banner-topic" :underline="false" v-ref="ArticleType" v-on:click="detail(ArticleType[0].id)">
        <img src="../../assets/topic/NFT.png" alt="" style="float: left">
        <div class="banner-info">
          <H1 style="font-size: 32px">{{ArticleType[0].type}}学习专题</H1>
          <h3 style="margin-top: 40px">共篇{{Test[0].value}}文章</h3>
          <el-button class="banner-submit" type="text">订阅</el-button>
        </div>
      </el-link>
      <div class="part-topic">
        <el-link class="item" :underline="false" v-ref="ArticleType" v-on:click="detail(ArticleType[1].id)">
          <img src="../../assets/topic/开发者.png" alt="" class="part-topic-img">
          <el-button class="part-topic-submit" type="text">订阅</el-button>
          <div style="float: left;width: 300px;margin-top: 20px">
            <span style="float: left;font-size: 16px">共{{Test[1].value}}篇文章</span>
          </div>
          <span style="float: left;margin-top: 10px;font-size: 20px;font-weight: bold;color: black">{{ArticleType[1].type}}</span>
        </el-link>
        <el-link class="item" :underline="false" v-ref="ArticleType" v-on:click="detail(ArticleType[2].id)">
          <img src="../../assets/topic/政策.png" alt="" class="part-topic-img">
          <el-button class="part-topic-submit" type="text">订阅</el-button>
          <div style="float: left;width: 300px;margin-top: 20px">
            <span style="float: left;font-size: 16px">共{{Test[2].value}}篇文章</span>
          </div>
          <span style="float: left;margin-top: 10px;font-size: 20px;font-weight: bold;color: black">{{ArticleType[2].type}}</span>
        </el-link >
        <el-link class="item-right" :underline="false" v-ref="ArticleType" v-on:click="detail(ArticleType[3].id)">
          <img src="../../assets/topic/新品.png" alt="" class="part-topic-img">
          <el-button class="part-topic-submit" type="text">订阅</el-button>
          <div style="float: left;width: 300px;margin-top: 20px">
            <span style="float: left;font-size: 16px">共{{Test[3].value}}篇文章</span>
          </div>
          <span style="float: left;margin-top: 10px;font-size: 20px;font-weight: bold;color: black">{{ArticleType[3].type}}</span>
        </el-link>
        <el-link class="item" :underline="false" v-ref="ArticleType" v-on:click="detail(ArticleType[4].id)">
          <img src="../../assets/topic/深度.png" alt="" class="part-topic-img">
          <el-button class="part-topic-submit" type="text">订阅</el-button>
          <div style="float: left;width: 300px;margin-top: 20px">
            <span style="float: left;font-size: 16px">共{{Test[4].value}}篇文章</span>
          </div>
          <span style="float: left;margin-top: 10px;font-size: 20px;font-weight: bold;color: black">{{ArticleType[4].type}}</span>
        </el-link>
        <el-link class="item" :underline="false" v-ref="ArticleType" v-on:click="detail(ArticleType[5].id)">
          <img src="../../assets/topic/科普.png" alt="" class="part-topic-img">
          <el-button class="part-topic-submit" type="text">订阅</el-button>
          <div style="float: left;width: 300px;margin-top: 20px">
            <span style="float: left;font-size: 16px">共{{Test[5].value}}篇文章</span>
          </div>
          <span style="float: left;margin-top: 10px;font-size: 20px;font-weight: bold;color: black">{{ArticleType[5].type}}</span>
        </el-link>
        <el-link class="item-right" :underline="false" v-ref="ArticleType" v-on:click="detail(ArticleType[6].id)">
          <img src="../../assets/topic/观点.png" alt="" class="part-topic-img">
          <el-button class="part-topic-submit" type="text">订阅</el-button>
          <div style="float: left;width: 300px;margin-top: 20px">
            <span style="float: left;font-size: 16px">共{{Test[6].value}}篇文章</span>
          </div>
          <span style="float: left;margin-top: 10px;font-size: 20px;font-weight: bold;color: black">{{ArticleType[6].type}}</span>
        </el-link>
        <el-link class="item" :underline="false" v-ref="ArticleType" v-on:click="detail(ArticleType[7].id)">
          <img src="../../assets/topic/金融.png" alt="" class="part-topic-img">
          <el-button class="part-topic-submit" type="text">订阅</el-button>
          <div style="float: left;width: 300px;margin-top: 20px">
            <span style="float: left;font-size: 16px">共{{Test[7].value}}篇文章</span>
          </div>
          <span style="float: left;margin-top: 10px;font-size: 20px;font-weight: bold;color: black">{{ArticleType[7].type}}</span>
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
    name: "TopicIndex",
    components: {Header, SideMenu,Footer,BackTop},
    data(){
      return{
        ArticleType:[],
        Test:[]
      }
    },
    mounted: function () {
      this.loadArticleType()
      for (let i = 1; i < 10; i++) {
        this.getArticleTypeCount(i)
      }
    },
    methods: {
      getArticleTypeCount(id) {
        var _this = this
        this.$axios
          .post('/getArticleTypeCount',
            this.$qs.stringify({
              'typeId':id
            })
          )
          .then(resp => {
            if (resp && resp.status === 200) {
              console.log(resp.data)
              var test = JSON.parse(resp.data)
              this.Test.push(
                {value:test}
              )
            }
          })
      },
      loadArticleType() {
        var _this = this
        this.$axios
          .get('/findAllArticleType')
          .then(resp => {
            if (resp && resp.status === 200) {
              _this.ArticleType = resp.data
            }
          })
      },

      detail(id) {
        this.$router.push({
          path: '/topic/list',
          query: {
            typeId: id
          }
        })
      }
    }
  }
</script>

<style scoped>
  .main{
    width: 1188px;
    height: 100%;
    margin-top: 100px;
    margin-left: 220px;
    float: left;
  }
  .banner-topic{
    float: left;
  }
  .banner-submit{
    background-color: black;
    color: white;
    width: 80px;
    border-radius: 0px;
    font-size: 22px;
    margin-top: 20px;
  }
  .banner-info{
    float: left;
    text-align: left;
    margin-left: 50px;
    margin-top: 30px;
  }
  .item{
    width: 300px;
    float: left;
    margin-right: 144px;
    margin-top: 80px;
  }
  .item-right{
    float: left;
    width: 300px;
    margin-top: 80px;
  }
  .part-topic-img{
    float: left;
    width: 300px;
    height: 150px;
    object-fit:cover

  }
  .part-topic-submit{
    background-color: black;
    color: white;
    width: 70px;
    border-radius: 0px;
    font-size: 16px;
    font-weight: bold;
    z-index: 90;
    position: absolute;
    left: 10px;
    top: 98px;
  }
</style>
