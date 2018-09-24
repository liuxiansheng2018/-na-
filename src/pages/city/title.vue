<template>
    <div class="fixedtitle" v-show="show" ref="titles">当前位置</div>
</template>
<script>
export default {
  name: 'title',
  data () {
    return {
      show: false,
    }
  },
  methods: {
    setShow (flag) {
      console.log(flag)
      this.show = flag;
    },
    setMove (num) {
      this.$refs.titles.style.top = ( 81 - num ) + 'px' 
    }
  }
}
</script>
<style scoped lang="stylus">
  .fixedtitle {
      position fixed;
      top: 1.08rem;
      left: 0;
      right: 0;
      line-height .54rem;
      padding-left: .4rem;
      background #eee;
      font-size:.24rem;
    }
</style>
