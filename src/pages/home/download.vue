
<template>
  <div class="download" @click="handleClickDownload">
    <slot></slot>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: 'index-download',
  methods: {
    handleClickDownload () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/styles/common/varibles.styl';
  .download {
    z-index: 3;
    position fixed;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    height: 1rem;
    background: #000;
  }
</style>
