<template>
  <div class="pc-body">
    <span class="title">发表评论</span>
    <div>
      <el-input type="textarea" :rows="6" v-model="content" placeholder="请输入内容"></el-input>
      <el-button type="primary" style="margin-top: 20px" v-on:click="addComment">发布</el-button>
      <el-dialog
        title="未登录"
        :visible.sync="dialogVisible"
        width="20%"
        append-to-body>
        <span>您还未登录，无法发表评论，是否立刻登录</span>
        <span slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="login">去登录</el-button>
      </span>
      </el-dialog>
    </div>
    <el-divider></el-divider>
  </div>

</template>

<script>
    export default {
      name: "PostComment",
      data(){
        return{
          content:'',
          dialogVisible: false,
        }
      },
      inject:['reload'],
      methods:{
        addComment () {
          if(localStorage.getItem("user")){
            this.$axios
              .post('/increaseCommentNum',
                this.$qs.stringify({
                  'id':this.getParams()
                })
              )
            this.$axios
              .post('/addComment',
                this.$qs.stringify({
                  'articleId':this.getParams(),
                  'userId':this.$cookies.get("userId"),
                  'content':this.content
                })
              )
              .then(resp => {
                if (resp && resp.status === 200) {
                  this.reload()
                }
              })
          }else{
            this.dialogVisible = true
          }
        },
        login(){
          this.$router.push({path:'/login'});
        },
        getParams(){
          return this.$route.query.id
        }
      }
    }
</script>

<style scoped>
  .pc-body{
    width: 750px;
  }
  .title{
    font-size: 24px;
    font-weight: bold;
    width: 100%;
    text-align: left;
    float: left;
    margin-bottom: 20px;
  }
</style>
