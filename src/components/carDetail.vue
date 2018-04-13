<template>
  <div class="card-layout">
    <mu-card>
      <mu-card-header :title="imgTitle" :subTitle="imgTime"></mu-card-header>
      <mu-card-media>
        <img :src="imgSrc">
      </mu-card-media>
      <mu-card-text>{{imgText}}</mu-card-text>
    </mu-card>
  </div>
</template>
<style>

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
    }
  }
}
</script>
