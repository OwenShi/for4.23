<template>
  <div class="layout"
    @touchmove="touchMove"
    >
    <mu-raised-button label="Our Conquest Is the Sea of Stars" class="start" @click="start"></mu-raised-button>
  </div>
</template>
<style scoped>
.layout {
  width: 100%;
  height: 100%;
  background-color: #b3e5fc;
  position: absolute;
  display: flex;
  justify-content: center
}
.start {
  margin: 70% auto 0 auto;
}
</style>
<script>
export default {
  data () {
    return {
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0
    }
  },
  methods: {
    touchMove (ev) {
      console.log(ev.changedTouches[0].pageX)
      console.log(ev.changedTouches[0].pageY)
    },
    start () {
      console.log('hhh')
      this.$router.push('/main/1')
    }
  }
}
</script>
