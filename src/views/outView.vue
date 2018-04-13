<template>
  <div class="layout">
    <div v-if="showAll">
      <div @click="imgDetail(item)" v-for="(item, index) in outList" :key=index>
        <card-image :imgTitle="item.title" :imgTime="item.time" :imgSrc="item.src"></card-image>
      </div>
    </div>
    <div v-else>
      <car-detail :imgTitle="currentImg.title" :imgTime="currentImg.time" :imgSrc="currentImg.src" :imgText="currentImg.text"></car-detail>
      <mu-raised-button class="back-button" backgroundColor="#b3e5fc" label="BACK" @click="back" fullWidth/>
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
          title: '磨山风景区',
          time: '2018/4/23',
          src: require('../assets/image/timg.jpeg'),
          text: 'what are you talking about'
        },
        {
          title: 'fgo',
          time: '2015/2/5',
          src: require('../assets/image/fgo-1.jpg'),
          text: 'hahahahaha'
        },
        {
          title: '磨山风景区',
          time: '2018/4/23',
          src: require('../assets/image/timg.jpeg'),
          text: 'acsaudhh'
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
