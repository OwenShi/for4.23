<template>
  <div class="layout">
    <div v-if="showAll">
      <div @click="imgDetail(item)" v-for="(item, index) in inList" :key=index>
        <card-image :imgTitle="item.title" :imgTime="item.time" :imgSrc="item.src"></card-image>
      </div>
    </div>
    <div v-else>
      <car-detail :imgTitle="currentImg.title" :imgTime="currentImg.time" :imgSrc="currentImg.src" :imgText="currentImg.text"></car-detail>
      <mu-raised-button class="back-button" label="BACK" @click="back" fullWidth/>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import cardImage from '../components/CardImage'
import carDetail from '../components/carDetail'
export default {
  data () {
    return {
      showAll: true,
      inList: [
        {
          title: '今朝有酒',
          time: '2018/2/14',
          src: require('../assets/now/IMG_20180214_165920.jpg'),
          text: '结婚的时候 可能要请这座图书馆 喝喜酒'
        },
        {
          title: '今朝有酒',
          time: '2018/3/10',
          src: require('../assets/now/395378E7F565AEDF156E4BC2AB5B7523.jpg'),
          text: '名为 从南京回来就不许再走了 的拥抱'
        },
        {
          title: '今朝有酒',
          time: '2018/4/6',
          src: require('../assets/now/QQ20180416-0.jpg'),
          text: '中二可能会迟到 但永远不会缺席'
        },
        {
          title: '今朝有酒',
          time: '2018/4/6',
          src: require('../assets/now/2711E4F7264E495B12DE7A19A3DE860B.jpg'),
          text: '这张 放在 最后吧 论拍照水平的差距'
        }
      ],
      currentImg: {
        title: '',
        time: '',
        src: '',
        text: ''
      }
    }
  },
  components: {
    cardImage,
    carDetail
  },
  methods: {
    imgDetail (item) {
      this.showAll = false
      this.interval = true
      this.currentImg.title = item.title
      this.currentImg.time = item.time
      this.currentImg.src = item.src
      this.currentImg.text = item.text
    },
    back () {
      this.showAll = true
    }
  }
}
</script>
