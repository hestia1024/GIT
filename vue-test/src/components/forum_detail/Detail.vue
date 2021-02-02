<template>
  <el-card class="body">
    <table class="table" v-ref="Thread">
      <tr class="top">
        <th class="top-left">查看: {{Thread[0].click}} | 回复: {{Thread[0].post}}</th>
        <th class="top-right">{{Thread[0].title}}</th>
      </tr>
      <tr class="main">
        <td class="main-left">
          <div style="border-bottom: 1px solid #949494;padding-bottom: 5px">
            <span style="font-size: 16px;">{{Thread[0].user.nickName}}</span>
          </div>
          <div style="padding-left: 25px">
            <el-avatar
              shape="square"
              :size="150"
              src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
              class="avatar">
            </el-avatar>
            <div style="padding: 10px 0;">
              <span>[LV.1]初来乍到</span>
            </div>
            <div style="padding: 10px 0;font-size: 16px">
              <span>身份</span>
            </div>
          </div>
        </td>
        <td class="main-right">
          <div style="border-bottom: 1px solid #949494;font-weight: bold">
            <span>发表于{{ Thread[0].time | relativeTime }}</span>
          </div>
          <div style="padding-top: 10px;">
            <span v-html="Thread[0].content"></span>
          </div>
        </td>
      </tr>
      <tr v-for="item in Reply">
        <td class="main-left">
          <div style="border-bottom: 1px solid #949494;padding-bottom: 5px">
            <span style="font-size: 16px;">{{item.user.nickName}}</span>
          </div>
          <div style="padding-left: 25px">
            <el-avatar
              shape="square"
              :size="150"
              src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
              class="avatar">
            </el-avatar>
            <div style="padding: 10px 0;">
              <span>[LV.1]初来乍到</span>
            </div>
            <div style="padding: 10px 0;font-size: 16px">
              <span>身份</span>
            </div>
          </div>
        </td>
        <td class="main-right">
          <div style="border-bottom: 1px solid #949494;font-weight: bold">
            <span>发表于{{ item.time | relativeTime }}</span>
          </div>
          <div style="padding-top: 10px;">
            <span v-html="item.content"></span>
          </div>
        </td>
      </tr>
    </table>
  </el-card>
</template>

<script>
  export default {
    name: "Detail",
    data() {
      return {
        Thread:[],
        Reply:[],
      }
    },
    methods:{
      loadThread() {
        var _this = this
        this.$axios
          .post('/findThreadById',this.$qs.stringify({
            'id':this.getParams()
          }))
          .then(resp => {
            if (resp && resp.status === 200) {
              _this.Thread = resp.data
            }
          })
      },
      loadReply(){
        var _this = this
        this.$axios
          .post('/findAllReplyById',this.$qs.stringify({
            'threadId':this.getParams()
          }))
          .then(resp => {
            if (resp && resp.status === 200) {
              _this.Reply = resp.data
            }
          })
      },
      getParams(){
        return this.$route.query.id
      },
    },
    created() {
      this.loadThread()
      this.loadReply()
    }
  }
</script>

<style scoped>
  .body{
    margin-top: 20px;
    margin-left: 20px;
  }
  .table{
    width: 100%;
    border: 1px solid #ccc;
    border-collapse: collapse;
  }
  .table th,.table td{
    border: 1px solid #ccc;
    padding: 10px;
  }
  .top-left{
    width: 20%;
    background-color: rgb(102, 177, 255)
  }
  .top-right{
    width: 80%;
    font-size: 20px;
    text-align: left;
  }
  .main{
    height: 500px
  }
  .main-right{
    text-align: left;
    vertical-align: top;

  }
  .main-right span{
    font-size: 16px;
    line-height: 28px;
  }
  .main-left{
    background-color: rgb(102, 177, 255);
    text-align: left;
    font-weight: bold;
    vertical-align: top;
  }
  .avatar{
    margin-top: 15px;
  }
</style>
