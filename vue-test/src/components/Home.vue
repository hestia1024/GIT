<template>

  <div class="poster">
    <nav-menu></nav-menu>
    <router-view/>

  </div>
</template>

<script>
  import NavMenu from './common/NavMenu'
  export default {
    beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background-color:#f6f6f6;margin:0px')
    },
    beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
    },
    name: 'Home',
    components: {NavMenu}
  }
</script>

<style scoped>
  .poster {
    height: 100%;
    width: 100%;
    position: fixed;
  }
</style>
