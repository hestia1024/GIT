<template>
  <el-card>
    <div class="pr-body">
      <span class="title">热门文章</span>
      <div class="item"  v-for="(item,index)  in Article.slice(0,5)" >
        <el-link :underline="false" type="info" class="text" v-on:click="detail(item.id)">
          <span class="num">{{index+1}}.</span>
          {{item.title}}
        </el-link>
      </div>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "PopularArticle",
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
          .get('/findArticleOrderByClick')
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
  .pr-body{
    margin: 30px;
    text-align: left;
  }
  .title{
    font-size: 24px;
    font-weight: bold;
    align:left;
  }
  .item{
    padding-top: 24px;
  }
  .text{
    font-size: 19px;
    color: #343538;
  }
  .num{
    font-style: italic;
    color: #f88a2c;
    font-size: 20px;
  }
</style>
