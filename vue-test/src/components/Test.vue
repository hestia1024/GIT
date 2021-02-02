<template>
  <div  class="editor">
    <div id="editor"></div>
  </div>
</template>

<script>
  import E from 'wangeditor'
  export default {
    name: 'editor',
    mounted () {
      var editor = new E('#editor')
      editor.create()
    }
  }
</script>
<style>

</style>
