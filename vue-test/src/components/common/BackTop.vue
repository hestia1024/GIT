<template>
  <BackTop :height="100" :bottom="200">
    <Icon type="md-arrow-round-up" class="top"/>
  </BackTop>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
  .top{
    padding: 10px;
    background: rgba(64,158,255,1);
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }
</style>
