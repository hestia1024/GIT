<template>
  <el-card>
    <div class="nf-body">
      <span class="title">快讯</span>
      <div class="item" v-for="item in Article.slice(0,5)">
        <span class="date">{{ item.time | relativeTime }}</span>
        <el-link :underline="false" type="info" class="text" v-on:click="detail(item.id)">{{item.title}}</el-link>
      </div>
    </div>
  </el-card>
</template>

<script>
    export default {
      name: "NewsFlash",
      data(){
        return{
          Article:[]
        }
      },
      created(){
        this.loadArticle()
      },
      inject:['reload'],
      methods: {
        loadArticle() {
          var _this = this
          this.$axios
            .post('/findAllArticleByType',
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
          .then(
            this.reload()
          )
          this.$router.push({
            path:'/ad',
            query:{
              id:id
            }
          })
        },
      }
    }
</script>

<style scoped>
  .nf-body{
    margin: 30px;
    text-align: left;
  }
  .title{
    font-size: 24px;
    font-weight: bold;
  }
  .item{
    padding-top: 24px;
  }
  .date{
    color: #949494;
    font-size: 14px;
  }
  .text{
    padding-top: 20px;
    font-size: 19px;
    color: #343538;
  }
</style>
