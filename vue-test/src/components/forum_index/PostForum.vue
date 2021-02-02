<template>
  <el-card class="pfMain">
    <div>
      <el-input
        type="text"
        placeholder="请输入标题"
        v-model="title"
        maxlength="40"
        show-word-limit
        class="title-input">
      </el-input>
    </div>
    <div style="font-size: 16px;line-height: 20px">
      <span>板块选择:</span>
      <Select v-model="type" size="large" class="type-select">
        <Option v-for="item in ThreadType" :value="item.id" :key="item.id">{{ item.type}}</Option>
      </Select>
    </div>
    <div style="width: 100%">
      <div
        id="editor"
        class="content-input">
      </div>
    </div>
    <div>
      <el-button class="post-button" type="danger" v-on:click="postThread">发表帖子</el-button>
      <el-dialog
        title="未登录"
        :visible.sync="dialogVisible"
        width="20%"
        append-to-body>
        <span>您还未登录，无法发表帖子，是否立刻登录</span>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="login">去登录</el-button>
      </span>
      </el-dialog>
    </div>
  </el-card>
</template>

<script>
  import E from "wangeditor";
  export default {
    name: "PostForum",
    data() {
      return {
        title: '',
        content:'',
        ThreadType:[],
        type: '',
        dialogVisible: false,
      }
    },
    mounted () {
      var editor = new E('#editor')
      editor.config.menus = [          // 菜单配置
        'head',  // 标题
        'bold',  // 粗体
        'fontSize',  // 字号
        'fontName',  // 字体
        'italic',  // 斜体
        'underline',  // 下划线
        'strikeThrough',  // 删除线
        'foreColor',  // 文字颜色
        'backColor',  // 背景颜色
        'link',  // 插入链接
        'justify',  // 对齐方式
        'quote',  // 引用
        'emoticon',  // 表情
        'image',  // 插入图片
        'code',  // 插入代码
        'undo',  // 撤销
        'redo'  // 重复
      ]
      editor.config.onchange = (html) => {
        this.content = html
      }
      editor.config.zIndex = 1
      editor.create()
    },
    inject:['reload'],
    methods:{
      loadThreadType() {
        var _this = this
        this.$axios
          .get('/findAllThreadType')
          .then(resp => {
            if (resp && resp.status === 200) {
              _this.ThreadType = resp.data
            }
          })
      },
      postThread(){
        if(localStorage.getItem("user")){
          this.$axios
            .post('/addThread',
              this.$qs.stringify({
                'title':this.title,
                'userId':this.$cookies.get("userId"),
                'content':this.content,
                'typeId':this.type
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
    },
    created() {
      this.loadThreadType()
    }
  }
</script>

<style scoped>
  .pfMain{
    margin-left: 20px;
    margin-top: 40px;
    padding-bottom: 20px;
  }
  .title-input{
    width: 600px;
    float: left;
    margin-bottom: 20px;
  }
  .content-input {
    width: 900px;
    float: left;
    text-align: left;
  }
  .post-button{
    float: left;
    margin-top: 340px;
    margin-left: 30px;
  }
  .type-select{
    width:200px;
    margin-right: 200px
  }
</style>
