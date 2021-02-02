<template>
<!--  NavMenu-->
    <el-menu
      :default-active="this.$route.path"
      router
      mode="horizontal"
      background-color="white"
      text-color="#222"
      active-text-color="red"
      style="min-width: 1300px">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
      <!--NavMenu中间文字-->
      <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">White Jotter - Your Mind Palace</span>
      <!--NavMenu右侧下拉菜单-->
      <el-dropdown trigger="click" style="float: right">
      <i class="el-icon-menu" style="font-size: 45px;color: #222;padding-top: 5px;padding-right: 20px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="dialogVisible = true">Log out</el-dropdown-item>
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
    </el-menu>

</template>

<script>
  export default {
    name: 'NavMenu',
    data () {
      return {
        navList: [
          {name: '/index', navItem: '首页'},
          {name: '/jotter', navItem: '笔记本'},
          {name: '/library', navItem: '图书馆'},
          {name: '/admin', navItem: '个人中心'}
        ],
        dialogVisible: false,
      }
    },
    methods:{
      logout() {
        localStorage.clear()
        this.$router.go(0)
      }
    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
</style>
