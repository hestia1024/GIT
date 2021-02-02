<template>
  <div class="footer-body">
    <el-divider></el-divider>
    <img src="../../assets/icon/logoFooter.png" alt="" class="img-footer">
    <span class="footer-up-slogan">专业的区块链研究机构与资讯平台</span>
    <div style="float: right">
      <div class="footer-right">
        <el-link class="footer-link" type="info" :underline="false">关于我们</el-link>
        <el-link class="footer-link" type="info" :underline="false">加入我们</el-link>
        <el-link class="footer-link" type="info" :underline="false">风险提示</el-link>
      </div>
      <div style="margin-left: 110px">
        <span>联系我们：827556378@qq.com</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
  .footer-body{
    width: 1387px;
    height: auto;
    float: left;
    padding-left: 199px;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .img-footer{
    width: 80px;
    height: 40px;
    float: left;
    margin-left: 20px;
  }
  .footer-up-slogan{
    float: left;
    margin-top: 5px;
    margin-left: 20px;
    font-size: 20px;
    font-weight: bold;
  }
  .footer-right{

  }
  .footer-link{
    margin-left: 20px;
    margin-bottom: 30px;
    margin-top: 5px;
    font-size: 18px;
    color: black;
  }
</style>
