<template>
  <div class="layout">
    <div v-if="showAll">
      <div @click="imgDetail(item)" v-for="(item, index) in outList" :key=index>
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
.back-button {
  margin-top: 15px;
}
</style>
<script>
import cardImage from '../components/CardImage'
import carDetail from '../components/carDetail'
export default {
  data () {
    return {
      showAll: true,
      outList: [
        {
          title: '去年今日',
          time: '2017/4/23',
          src: require('../assets/past/IMG_20170423_164153.jpg'),
          text: '强行偷拍，最为致命。'
        },
        {
          title: '去年今日',
          time: '2017/4/23',
          src: require('../assets/past/IMG_20170423_151256.jpg'),
          text: '大庭 广众 之下 这样多不好意思。'
        },
        {
          title: '去年今日',
          time: '2017/4/23',
          src: require('../assets/past/IMG_20170423_161222.jpg'),
          text: '我记得 这里 有一条 肚子很囧很囧的鱼。'
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
