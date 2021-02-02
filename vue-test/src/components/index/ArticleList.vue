<template>
  <div>
    <div class="al-item" v-for="item in Article.slice(0,a)">
      <el-divider></el-divider>
      <div class="left">
        <el-link class="type-text" :underline="false" v-on:click="typeList(item.articleType.id)">{{item.articleType.type}}</el-link>
        <span class="date-text">{{ item.time | relativeTime }}</span>
        <el-link :underline="false" v-on:click="detail(item.id)" style="width: 100%;float: left">
          <span class="title">{{item.title}}</span>
          <span class="abstract">{{item.abs}}</span>
        </el-link>
      </div>
      <div class="right">
        <img src="../../../static/img/article-img/img1.png" alt="" class="img">
        <div style="text-align: right">
          <i class="el-icon-chat-dot-round" style="font-size: 18px;margin-right: 120px">{{item.comment_num}}</i>
          <i class="el-icon-view" style="font-size: 18px">{{item.click}}</i>
        </div>
      </div>
    </div>
    <el-link v-show="moreDisplay" class="more" :underline="false" type="info" v-on:click="more">查看更多</el-link>
    <div class="more">
      <span v-show="noMoreDisplay">没有更多了</span>
    </div>
  </div>

</template>

<script>
    export default {
      name: "ArticleList",
      data(){
        return{
          Article:[],
          a:5,
          moreDisplay:true,
          noMoreDisplay:false
        }
      },
      created() {
        this.loadArticle()
        console.log(this.Article[0].time)
      },
      methods: {
        loadArticle() {
          var _this = this
          this.$axios
            .post('/findArticleByArticleTypeNotIn',
              this.$qs.stringify({
                'typeId':9
              })
            )
            .then(resp => {
              if (resp && resp.status === 200) {
                _this.Article = resp.data
              }
            })
        },
        detail(id){
          this.$axios
            .post('/increaseClickNum',
              this.$qs.stringify({
                'id':id
              })
            )
          this.$router.push({
            path:'/ad',
            query:{
              id:id
            }
          })
        },
        typeList(id){
          this.$router.push({
            path:'/topic/list',
            query:{
              id:id
            }
          })
        },
        more(){
          this.a += 5;
          if(this.a>=this.Article.length){
            this.moreDisplay=false,
              this.noMoreDisplay=true
          }
        }
      }
    }
</script>


<style scoped>
  .al-item{
    padding-top: 3px;
    margin-top: 10px;
    width: 750px;
  }
  .type-text{
    float: left;
    color: #949494;
    font-size: 16px;
  }
  .date-text{
    float: right;
    color: #949494;
    font-size: 16px;
  }
  .img{
    width: 180px;
    height: 120px;
    margin-left: 18px;
  }
  .title{
    float: left;
    width: 500px;
    font-size: 20px;
    font-weight: bold;
    padding-top: 10px;
  }
  .abstract{
    float: left;
    padding-top: 18px;
    color: #949494;
  }
  .left{
    width: 550px;
    float: left;
    padding-right: 20px;
    text-align: left;
  }
  .more{
    font-size: 24px;
    text-align: center;
    margin-top: 30px;
    font-weight: bold;
  }
</style>
