<template>
  <el-card class="card-carousel">
    <el-carousel trigger="click" indicator-position="none">
      <el-carousel-item v-for="item in items" :key="item.id">
        <a :href=item.link target="_blank">
          <img :src=item.img alt="" class="carousel-img">
        </a>
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template>

<script>
    export default {
      name: "index-carousel",
      data(){
        return {
          items:[{
            id:1,
            img:'../../../static/img/carousel/Carousel1.png',
            link:''},
            {
              id: 2,
              img: '../../../static/img/carousel/Carousel2.png',
              link: ''
            },
            {
              id: 3,
              img: '../../../static/img/carousel/Carousel3.png',
              link: ''
            }]
        }
      }
    }
</script>

<style>
  .card-carousel{
    width: 750px;
    height: 300px;
  }

  .carousel-img{
    width: 100%;
    height: 100%;
  }
  .el-card__body{
    padding: 0px;
  }
</style>
