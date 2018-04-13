<template>
  <div class="layout">
    <div v-for="(item, index) in inList" :key=index>
      <card-image :imgTitle="item.title" :imgTime="item.time" :imgSrc="item.src"></card-image>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import cardImage from '../components/CardImage'
export default {
  data () {
    return {
      inList: [
        {
          title: '磨磨风景区',
          time: '2018/4/23',
          src: require('../assets/image/timg.jpeg')
        },
        {
          title: 'fgoo',
          time: '2015/2/5',
          src: require('../assets/image/fgo-1.jpg')
        }
      ]
    }
  },
  components: {
    cardImage
  }
}
</script>
