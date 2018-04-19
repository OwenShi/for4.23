<template>
  <div class="layout"
    >
    <div class="titleText">4.23</div>
    <mu-raised-button label=" 金风玉露一相逢，便胜却人间无数。 " class="start" @click="start"></mu-raised-button>
  </div>
</template>
<style scoped>
.layout {
  width: 100%;
  height: 100%;
  background-color: #b3e5fc;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.start {
  margin: 30% auto 0 auto;
}
.titleText {
  font-size: 70px;
  font-style: oblique;
  text-align: center;
  font-weight: 900;
  color: rgba(101, 67, 56, 0.7);
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
    start () {
      console.log('hhh')
      this.$router.push('/main/1')
    }
  }
}
</script>
