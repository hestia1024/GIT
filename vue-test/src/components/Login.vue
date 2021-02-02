<template>
  <body id="poster">
    <el-form class="login-container" label-position="left" label-width="0px">
    <h3 class="login_title">系统登录</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password" @keyup.enter.native="login" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-switch
        v-model="remember"
        active-text="记住密码">
      </el-switch>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #d1dbe5;border: none" @click="dialogFormVisible = true">注册</el-button>
      <el-dialog
        title="注册"
        :visible.sync="dialogFormVisible"
        append-to-body
        class="register-dialog"
        :model="registerForm"
        :rules="rules">
        <el-form :model="form" >
          <el-form-item label="昵称">
            <el-input type="text" v-model="registerForm.nickName"
                      auto-complete="off" placeholder="昵称"></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input type="text" v-model="registerForm.username"
                      auto-complete="off" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password"  v-model="registerForm.password"
                      auto-complete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input type="password" v-model="registerForm.comfirmPassword"
                      auto-complete="off" placeholder="确认密码"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="text" @click="dialogFormVisible = false">已有账号，立刻登录</el-button>
          <el-button type="primary"  v-on:click="register">确认注册</el-button>
        </div>
      </el-dialog>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        remember: true,
        dialogFormVisible: false,
        formLabelWidth: '120px',
        responseResult: [],
        loginForm: {
          username: this.$cookies.get("username"),
          password: this.$cookies.get("password")
        },
        registerForm:{
          nickName:'',
          username:'',
          password:'',
          comfirmPassword:''
        },
        rules: {
          username: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
          password: [{required: true, message: '密码不能为空', trigger: 'blur'}],
          passwordConfirm: [{required: true, message: '密码不能为空', trigger: 'blur'}]
        }
      }
    },
    methods: {
      login () {
        var _this = this
        console.log(this.$store.state)
        if(this.loginForm.username===null) {
          this.$message({
            message: '请输入用户名',
            type: 'error'
          })
        }
        this.$axios
          .post('/login', {
            username: this.loginForm.username,
            password: this.loginForm.password
          })
          .then(resp => {
            if (resp.data.code === 200){
              if(this.remember == true){
                this.$cookies.set("username",this.loginForm.username)
                this.$cookies.set("password",this.loginForm.password)
              }else{
                this.$cookies.remove("username")
                this.$cookies.remove("password")
              }
              _this.$store.commit('login', this.loginForm.username)
              var path = this.$route.query.redirect
              this.$router.replace({path: path === '/' || path === undefined ? '/' : path})
            }else if(resp.data.code === 400){
              this.$message({
                message: '密码错误！',
                type: 'error'
              });
            }
          })
          .catch(error => {
          })
      },

      register(){
        var _this = this
        if(this.registerForm.password !== this.registerForm.comfirmPassword){
          this.$message({
            message:'两次输入的密码不一致',
            type:'error'
          })
        }else if(this.registerForm.nickName===''){
          this.$message({
            message:'请填写昵称',
            type:'error'
          })
        }else if(this.registerForm.username===''){
          this.$message({
            message:'请填写用户名',
            type:'error'
          })
        }else if(this.registerForm.password===''){
          this.$message({
            message:'请填写密码',
            type:'error'
          })
        }
        this.$axios.post("/register",{
          nickName: this.registerForm.nickName,
          username:this.registerForm.username,
          password:this.registerForm.password,
        })
        .then(Resp => {
          if(Resp.data.code === 200){
            this.dialogFormVisible = false
            this.$message({
              message:'注册成功',
              type:'Resp'
            })
          }else if(Resp.data.code === 500){
            this.$message({
              message:'该用户名已存在',
              type:'error'
            })
          }else if(Resp.data.code === 501){
            this.$message({
              message:'改昵称已存在',
              type:'error'
            })
          }
        })
        .catch(error=> {
        })
      }
    }
  }
</script>

<style>
  #poster {
    background:url("../assets/eva.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
  }
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .register-dialog{
    margin: -30px auto;
    width: 50%;
    height: 100%;
  }
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

</style>
