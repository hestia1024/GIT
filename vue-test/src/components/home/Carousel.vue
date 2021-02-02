<template>
  <el-card class="card-carousel">
    <el-carousel trigger="click">
      <el-carousel-item v-for="item in items" :key="item.id">
        <a :href=item.link target="_blank">
          <img :src=item.img alt="" class="carousel-img">
        </a>
        <h3>{{ item.title }}</h3>
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template>

<script>
    export default {
      name: "Carousel",
      data(){
        return {
          items:[{
            id:1,
            title:'How2J.cn - Java 全栈学习网站',
            img:'../../../static/img/carousel/how2j.png',
            link:'http://how2j.cn?p=50613'},
          {
            id: 2,
            title: 'Vue.js - 渐进式 JavaScript 框架',
            img: '../../../static/img/carousel/vue.png',
            link: 'https://cn.vuejs.org/'
          },
          {
            id: 3,
            title: 'element-ui - 网站快速成型工具',
            img: '../../../static/img/carousel/element.png',
            link: 'http://element-cn.eleme.io/#/zh-CN'
          }]
        }
      }
    }
</script>

<style scoped>

.card-carousel{
  margin-left: 20px;
  width: 680px;
  height: 320px;
}

.carousel-img{
  width: 100%;
  height: 100%;
}

.el-carousel__item h3 {
  color: black;
  font-size: 15px;
  /*line-height: 300px;*/
  bottom: 43px;
  float: left;
  position: relative;
}
</style>
