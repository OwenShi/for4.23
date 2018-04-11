<template>
  <div id="app">
    <transition :name="routeClass">
      <router-view class="main-route"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      routeClass: ''
    }
  },
  watch: {
    '$route' (to, from) {
      console.log('sssf', from.path)
      if (from.path === '/') {
        console.log('hahahss')
        this.routeClass = 'start'
      } else {
        console.log('hah')
        this.routeClass = ''
      }
    }
  }
}
</script>

<style scoped>
.main-route {
  position: absolute;
  width: 100%;
  transition: all 1s ease-out
}
.start-enter {
  opacity: 0;
}
.start-enter-to {
  opacity: 1;
}
</style>
