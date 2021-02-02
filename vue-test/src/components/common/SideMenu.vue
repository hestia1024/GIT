<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        class="el-menu-vertical-demo"
        :default-active="this.$route.path"
        router>
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/nf">
          <i class="el-icon-menu"></i>
          <span slot="title">快讯</span>
        </el-menu-item>
        <el-menu-item index="/topic">
          <i class="el-icon-menu"></i>
          <span slot="title">专题</span>
        </el-menu-item>
        <el-menu-item index="/forum">
          <i class="el-icon-menu"></i>
          <span slot="title">论坛</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    name:"SideMenu",
  }
</script>

<style scoped>
  .el-menu-vertical-demo{
    position: fixed;
    margin-left: 80px;
    top: 80px;
  }
  span{
    font-weight: bold;
    font-size: 20px;
  }
</style>
