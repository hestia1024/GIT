<template>
  <div class="content-bd" v-ref="Article">
    <div>
      <span v-html="Article[0].content">
        {{Article[0].content}}
      </span>
    </div>
    <div v-show="type">
      <el-divider></el-divider>
      <el-link class="type" type="info" :underline="false" v-on:click="detail(Article[0].articleType.id)">
        <span class="type-icon">{{Article[0].articleType.type}}</span>
        <div  style="float: left;margin-left: 30px;margin-top: 23px">
          <H1>{{Article[0].articleType.type}}</H1>
          <span>{{Article[0].articleType.abs}}</span>
        </div>
      </el-link>
    </div>
    <el-divider></el-divider>
  </div>
</template>

<script>
    export default {
      name: "ArticleContent",
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
        },
        detail(id) {
          this.$router.push({
            path: '/topic/list',
            query: {
              typeId: id
            }
          })
        }
      },
      created() {
        this.loadArticle()
      }
    }
</script>

<style scoped>
  .content-bd{
    width: 700px;
    text-align: left;
  }
  span{
    font-size: 16px;
    line-height: 1.7;
    line-height: 32px;
  }
  .type-icon{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    float: left;
    background: #febd31;
    text-align: center;
    line-height: 120px;
    font-size: 36px;
    font-weight: 700;
    color: #fff;
  }
</style>
