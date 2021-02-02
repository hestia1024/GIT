<template>
  <el-menu
    default-active="0"
    @select="handleSelect"
    style="position: fixed">
    <el-menu-item index="0">
      <i class="el-icon-menu"></i>
      <span slot="title">技术采用</span>
    </el-menu-item>
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">最近更新</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-document"></i>
      <span slot="title">下载源码</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      <span slot="title">关于我们</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
    export default {
    }
</script>

<style scoped>

</style>
