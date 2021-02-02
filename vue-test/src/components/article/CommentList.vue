<template>
    <div class="cl-body">
      <span class="title">评论</span>
      <div style="text-align: left" v-for="item in Comment.slice(0,a)">
        <div class="nickName">
          <span>{{item.user.nickName}}:</span>
          <span class="date-text" style="float: right">{{ item.time | relativeTime }}</span>
        </div>
        <div class="content">
          <span>{{item.comtent}}</span>
        </div>
        <el-divider></el-divider>
      </div>
      <el-link v-show="moreDisplay" class="more" :underline="false" type="info" v-on:click="more">更多评论</el-link>
      <el-divider></el-divider>
    </div>
</template>

<script>
    export default {
      name: "CommentList",
      data(){
        return{
          Comment:[],
          a:3,
          moreDisplay:true,
        }
      },
      mounted: function () {
        this.loadComment()
      },
      methods: {
        loadComment() {
          var _this = this
          this.$axios
            .post('/findAllComment',
              this.$qs.stringify({
                'articleId':this.getParams()
              })
            )
            .then(resp => {
              if (resp && resp.status === 200) {
                _this.Comment = resp.data
              }
            })
        },
        getParams(){
          return this.$route.query.id
        },
        more(){
          this.a += 3;
          if(this.a>=this.Comment.length){
            this.moreDisplay=false
          }
        },
      }
    }
</script>

<style scoped>
  .cl-body{
    width: 700px;
  }
  .title{
    font-size: 24px;
    font-weight: bold;
    width: 100%;
    text-align: left;
    float: left;
    margin-bottom: 20px;
  }
  .nickName{
    margin-top: 20px;
    font-size: 20px;
    width: 100%;
    font-weight: bold;
  }
  .content{
    margin-top: 20px;
    font-size: 16px;
    width: 100%;
    text-indent:32px;
  }
  .date-text{
    font-size: 16px;
    font-weight: normal;
  }
  .more{
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  }
</style>
