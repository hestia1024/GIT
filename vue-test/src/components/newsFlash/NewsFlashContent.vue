<template>
    <div class="nf-body">
      <div class="item" v-for="item in Article.slice(0,a)">
        <div class="title">
          <span>{{item.title}}</span>
        </div>
        <div class="time">
          <span>{{ item.time | relativeTime }}</span>
        </div>
        <div class="content">
        <span>{{item.content}}</span>
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
      name: "NewsFlashContent",
      data(){
        return{
          Article:[],
          a:5,
          moreDisplay:true,
          noMoreDisplay:false
        }
      },
      created(){
        this.loadArticle()
      },
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
  .nf-body{
    width: 1175px;
    height: 100%;
    padding-top: 80px;
    margin-left: 220px;
    float: left;
    text-align: left;
  }
  .item{
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 30px;
    padding-top: 30px;
  }
  .time{
    font-size: 14px;
    color: #bdbdbd;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .title{
    font-weight: bold;
    font-size: 20px;

  }
  .content{
    text-align: left;
    color: #949494;
    font-size: 16px;
    border-left: 3px solid #bdbdbd;
    padding-left: 20px;
  }

  .more{
    width: 100%;
    font-size: 24px;
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
  }
</style>
