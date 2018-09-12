<template>
    <swiper class="banner" :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of sliders" :key="item.id">
      <img :src="item.imgURl" alt="" class="banner-img" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'index-swiper',
  props: {
    sliders: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: ".swiper-pagination"
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .banner{
    width: 100%;
    overflow hidden;
    height: 0;
    padding-bottom: 31.25%;
    .banner-img{
      width: 100%;
    }
    .swiper-pagination >>> .swiper-pagination-bullet-active {
      background: #fff;
    }
  }
</style>
