<template>
  <div class="layout">
    <div class="header">
      <mu-tabs :value="mainTab" @change="handleMainTabChange">
        <mu-tab value="out" icon="flight_takeoff"/>
        <mu-tab value="in" icon="home"/>
      </mu-tabs>
    </div>
    <div class="content">
      <transition :name='transitionName'>
        <router-view class="route"></router-view>
      </transition>
    </div>
    <div class="footer"></div>
  </div>
</template>
<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.route {
  position: absolute;
  width: 100%;
  transition: all 0.1s ease-out;
}
.slide-left-enter-active {
  transform: translate(100%, 0);
}
.slide-right-enter-active {
  transform: translate(-100%, 0);
}
</style>
<script>
export default {
  data () {
    return {
      mainTab: 'out',
      transitionName: ''
    }
  },
  mounted () {
    this.$router.replace('/main/out')
  },
  methods: {
    handleMainTabChange (val) {
      this.mainTab = val
      this.$router.replace('/main/' + val)
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path === '/main/out') {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  }
}
</script>
