<template>
  <div class="card-layout">
    <mu-card>
      <mu-card-header :title="imgTitle" :subTitle="imgTime"></mu-card-header>
      <transition-group name="list">
        <div class="text-box" v-for="(item, index) in showArr" :key="index">
          <p>{{item}}</p>
        </div>
      </transition-group>
      <transition name="photo">
        <mu-card-media v-if="textCompleted">
          <img :src="imgSrc">
        </mu-card-media>
      </transition>
    </mu-card>
  </div>
</template>
<style>
.text-box {
  text-align: center;
}
.list-item {
  opacity: 1;
}
.list-enter-active {
  transition: all 1s;
}
.list-enter {
  opacity: 0;
}
.photo {
  opacity: 1;
}
.photo-enter-active {
  transition: all 1s;
}
.photo-enter {
  opacity: 0;
}
</style>
<script>
export default {
  props: {
    imgTitle: {
      type: String,
      required: true
    },
    imgTime: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    },
    imgText: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      textArr: [],
      showArr: [],
      textTime: null,
      textCompleted: false
    }
  },
  mounted () {
    let textArr = this.imgText.split('')
    console.log(textArr)
    this.textArr = textArr
    this.showText()
  },
  methods: {
    showText () {
      const textLength = parseInt(this.textArr.length)
      let index = 0
      // 实现文字瀑布效果
      this.textTime = setInterval(() => {
        console.log(index)
        console.log(textLength)
        console.log(this.showArr)
        if (index > (textLength - 1)) {
          clearInterval(this.textTime)
          this.textCompleted = true
        }
        console.log(this.textArr[index])
        this.showArr.push(this.textArr[index])
        index++
      }, 400)
    }
  },
  beforeDestroy () {
    if (this.textTime) {
      clearInterval(this.textTime)
    }
  }
}
</script>
