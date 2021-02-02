<template>
  <div class="header-body">
    <img src="../../assets/icon/logoHead.png" alt="" class="HeaderLogo">
    <el-button v-show="notLogin" type="text" class="login-login-text" v-on:click="Login">登录/注册</el-button>
    <el-dropdown v-show="logined" trigger="click" style="float: right">
      <el-button type="text" class="login-login-text" v-ref="user">
        {{user[0].nickName}}<i class="el-icon-user-solid"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown" style="margin-right: 120px">
        <el-dropdown-item @click.native="dialogVisible = true">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dialog
      title="退出登录"
      :visible.sync="dialogVisible"
      width="20%"
      append-to-body>
      <span>确认退出登录</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="logout">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
    export default {
      name: "index-header",
      inject:['reload'],
      data(){
        return{
          user:[],
          notLogin :true,
          logined:false,
          dialogVisible: false,
        }
      },
      methods: {
        Login(){
          this.$router.push({path:'/login'});
        },
        logout(){
          localStorage.clear()
          this.reload()
        },
      },
      created() {
        if(localStorage.getItem("user")){
          this.notLogin = false;
          this.logined = true;
          var _this = this
          this.$axios
            .post('/getNickName',
              this.$qs.stringify({
                'username':localStorage.getItem("user").split("\"")[1]
              })
            )
            .then(resp => {
              if (resp && resp.status === 200) {
                _this.user = resp.data
                this.$cookies.set("userId",this.user[0].id)
              }
            })
        }else {
          this.user=[0];
        }
      }
    }

</script>

<style scoped>
  .HeaderLogo{
    width: 10%;
    height: 10%;
    float: left;
    margin-left: 220px;
  }
  .login-login-text{
    float: right;
    font-weight: bold;
    font-size: 16px;
    color: black;
    margin-right: 132px;
  }
  .header-body{
    min-width: 100%;
    z-index: 99;
    padding: 16px 0px;
    background-color: white;
    position: fixed;
  }
</style>
