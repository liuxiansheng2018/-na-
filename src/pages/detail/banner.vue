<template>
<div>
    <div class="banner" @click="handleGetBanner">
        <img class="banner-image" :src="bannerImage" />
    </div>
    <gallay v-show="show" :imgList="imgList" @close="handleGallay"></gallay>
</div>
</template>
<script>
import Gallay from 'components/common/gallay/gallay.vue'
export default {
  name: "index-banner",
  props: ["bannerImage", "imgList"],
  components: {
    Gallay
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleGetBanner () {
      this.show = true;
    },
    handleGallay () {
      this.show = false; 
    }
  }
}
</script>
<style scoped lang="stylus">
  .banner{
    overflow hidden;
    height 0;
    padding-bottom: 55%; 
    .banner-image{
      width: 100%;
    }
  }
</style>
