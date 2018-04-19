<template>
  <div class="layout">
    <div class="header">
      <!-- <mu-tabs :value="mainTab" @change="handleMainTabChange">
        <mu-tab value="out" icon="flight_takeoff"/>
        <mu-tab value="in" icon="home"/>
      </mu-tabs> -->
      <mu-tabs :value="mainTab" shift @change="handleMainTabChange">
        <mu-tab value="1" title="PAST" ></mu-tab>
        <mu-tab value="2" title="NOW" ></mu-tab>
        <mu-tab value="3" title="FEATURE" ></mu-tab>
        <!-- <mu-bottom-nav-item value="draw" title="到此一游" icon="home"></mu-bottom-nav-item> -->
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
  transition: all 0.2s ease-out;
}
.slide-left-enter-active, .slide-right-leave-active{
  transform: translate(-100%, 0);
}
.slide-right-enter-active, .slide-left-leave-active{
  transform: translate(100%, 0);
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
    this.$router.replace('/main/1')
  },
  methods: {
    handleMainTabChange (val) {
      this.mainTab = val
      this.$router.replace('/main/' + val)
    }
  },
  watch: {
    '$route' (to, from) {
      if ((from.path === '/main/1' && to.path === '/main/2') || (from.path === '/main/2' && to.path === '/main/3') || (from.path === '/main/1' && to.path === '/main/3')) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  }
}
</script>
