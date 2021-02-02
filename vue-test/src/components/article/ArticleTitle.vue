<template>
  <div class="divider" v-ref="Article">
    <span class="title">{{Article[0].title}}</span>
    <div class="line-second">
      <el-link class="type" type="info" :underline="false">{{Article[0].type}}</el-link>
      <span class="time">{{ Article[0].time | relativeTime }}</span>
    </div>
    <div class="line-last" v-show="type">
      <i class="el-icon-chat-line-round" style="font-size: 28px;color: #bdbdbd"></i>
      <span style="font-size: 28px;color: #bdbdbd">{{Article[0].abs}}</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "ArticleTitle",
      data(){
        return{
          Article:[]
        }
      },
      methods:{
        loadArticle() {
          var _this = this
          this.$axios
            .post('/findAllById',this.$qs.stringify({
              'id':this.getParams()
            }))
            .then(resp => {
              if (resp && resp.status === 200) {
                _this.Article = resp.data
                if(this.Article[0].articleType.id === 9){
                  this.type = false;
                }else{
                  this.type = true;
                }
              }
            })
        },
        getParams(){
          return this.$route.query.id
        }
      },
      created() {
        this.loadArticle()
      }
    }
</script>

<style scoped>
  .divider{
    border-left: 5px solid #eaeaea;
    width: 700px;
    float: left;
    padding-left: 20px;
    margin-bottom: 40px;
  }
  .title{
    font-size: 30px;
    font-weight: bold;
    float: left;
    text-align: left;
  }
  .line-second{
    float: left;
    margin-top: 20px;
    width: 100%;

  }
  .type{
    font-size: 16px;
    float: left;
  }
  .time{
    font-size: 16px;
    color: #949494;
    float: left;
  }
  .line-last{
    float: left;
    margin-top: 30px;
    text-align: left;
  }
</style>
