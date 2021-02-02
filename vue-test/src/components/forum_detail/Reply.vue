<template>
  <el-card class="pfMain">
    <div style="width: 100%">
      <div
        id="editor"
        class="content-input">
      </div>
    </div>
    <div>
      <el-button class="post-button" type="danger" v-on:click="postThread">回复</el-button>
    </div>
  </el-card>
</template>

<script>
  import E from "wangeditor";
  export default {
    name: "Reply",
    data() {
      return {
        content:''
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
      editor.create()
    },
    inject:['reload'],
    methods:{
      postThread(){
        if(localStorage.getItem("user")){
          this.$axios
            .post('/addPost',
              this.$qs.stringify({
                'userId':this.$cookies.get("userId"),
                'threadId':this.getParams(),
                'content':this.content,
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
      getParams(){
        return this.$route.query.id
      },
    },
  }
</script>

<style scoped>
  .pfMain{
    margin-left: 20px;
    margin-top: 40px;
    padding-bottom: 20px;
    padding-top: 20px;
  }
  .content-input {
    width: 800px;
    float: left;
    text-align: left;
  }
  .post-button{
    float: left;
    margin-top: 340px;
    margin-left: 30px;
  }
</style>
