<template>
  <div class="layout">
    <div id="canvas-box"></div>
  </div>
</template>
<style>
.layout {
  display: flex
}
#canvas-box {
  flex-basis: 100%;
  height: 500px;
  background-color: #b3e5fc;
}
</style>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    const myCanvas = document.getElementById('canvas-box')
    console.log(myCanvas)
  }
}
</script>
