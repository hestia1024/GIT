<template>
  <div class="interest-bd">
    <span class="interest-title">你可能感兴趣</span>
    <el-link :underline="false" type="info" class="al-item" v-for="item in Article.slice(0,3)" >
      <div v-on:click="detail(item.id)">
        <img src="../../../static/img/article-img/img1.png" alt="" class="img">
        <div class="title">
          <span class="text">{{item.title}}</span>
        </div>
      </div>
    </el-link>
  </div>
</template>

<script>
    export default {
      name: "Interest",
      data(){
        return{
          Article:[]
        }
      },
      mounted: function () {
        this.loadArticle()
      },
      inject:['reload'],
      methods: {
        loadArticle() {
          var _this = this
          this.$axios
            .get('/findArticleOrderByTime')
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
            .then(
              this.reload()
            )
          this.$router.push({
            path:'/ad',
            query:{
              id:id
            }
          })
        }
      }
    }
</script>

<style scoped>
  .interest-bd{
    margin-top: 40px;
    width: 750px;
  }
  .interest-title{
    font-size: 24px;
    font-weight: bold;
    float: left;
  }
  .al-item{
    padding-top: 30px;
    height: 170px;
  }

  .img{
    width: 180px;
    height: 120px;
    float: left;
  }
  .title{
    float: left;
    font-size: 20px;
    font-weight: bold;
    width: 570px;
    text-align: left;
    height: 120px;
    display: table;
  }
  .text{
    display: table-cell;
    vertical-align: middle;
    padding-left: 20px;
    color: black;
  }

</style>
