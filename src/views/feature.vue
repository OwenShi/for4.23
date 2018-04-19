<template>
  <div class="layout">
    <div v-if="showAll">
      <div @click="imgDetail(item)" v-for="(item, index) in featureList" :key=index>
        <card-image :imgTitle="item.title" :imgTime="item.time" :imgSrc="item.src"></card-image>
      </div>
    </div>
    <div v-else>
      <car-detail :imgTitle="currentImg.title" :imgTime="currentImg.time" :imgSrc="currentImg.src" :imgText="currentImg.text"></car-detail>
      <!-- <mu-raised-button class="back-button" label="BACK" @click="back" fullWidth/> -->
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
      featureList: [
        {
          title: '来日方长',
          time: '--/--/--',
          src: require('../assets/feature/95DADCCAD965F6BF0A9EED11A2919446.jpg'),
          text: '愿有岁月可回首,且以深情共白头。'
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
  mounted () {
    // 直接加载唯一的一张imgDetail
    this.imgDetail(this.featureList[0])
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
    }
    // back () {
    //   this.showAll = true
    // }
  }
}
</script>
