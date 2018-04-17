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
          title: '1',
          time: '2018/2/14',
          src: require('../assets/now/IMG_20180214_165920.jpg'),
          text: '结婚的时候 可能要请这座图书馆 喝喜酒'
        },
        {
          title: '2',
          time: '2018/3/10',
          src: require('../assets/now/395378E7F565AEDF156E4BC2AB5B7523.jpg'),
          text: '名为 从南京回来就不许再走了 的拥抱'
        },
        {
          title: '3',
          time: '2018/4/6',
          src: require('../assets/now/QQ20180416-0.jpg'),
          text: '中二可能会迟到 但永远不会缺席'
        },
        {
          title: '3',
          time: '2018/4/6',
          src: require('../assets/now/QQ20180416-0.jpg'),
          text: '这张 放在 最后吧 论拍照水平的差距'
        }
      ]
    }
  },
  components: {
    cardImage
  }
}
</script>
