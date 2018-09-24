<template>
  <div class="gallary" @click="handleGallaryClose">
    <swiper class="container" ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) of imgList" :key="index">
        <img :src="item" class="gallary-img" @click.stop />
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
export default {
  name: 'gallary',
  props: {
    imgList: Array,
    default: []
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        observer: true,
        observeParents: true,
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  },
  methods: {
    handleGallaryClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang='stylus' scoped>
  .container >>> .swiper-pagination-fraction
    color: #fff
    bottom: .6rem
  .gallary
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: #000
    .container
      width: 100%
      height: 100%
      .gallary-img
        width: 100%
        position: absolute
        left: 0
        top: 50%
        margin-top: -50%
</style>
