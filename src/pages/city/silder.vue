<template>
  <div class="silder">
    <div class="silder-list" ref="list">
      <div class="silder-item" 
           v-for="(item,index) in alphabet" 
           :key="item" 
           @touchstart="handleTouchStart(index)" 
           @touchmove="handleTouchMove">{{item}}
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
 name: 'city-silder' ,
 props: {
   list: Array
 },
 computed: {
   alphabet () {
      let arr = []
      for (let i of this.list) {
        arr.push(i.classify)  
      }
      return arr
    },
    areaTop () {
    return this.$refs.list.offsetTop - this.$refs.list.offsetHeight /2 + 81;
  }
 },
methods: {
   handleTouchStart (item) {
     this.$emit('changeLetter', item)
   },
   handleTouchMove (e) {
     let index = Math.floor((e.touches[0].clientY -  this.areaTop ) / 20 );
      index = index < 0 ? 0 : index;
      index = (index >= this.alphabet.length ) ? (this.alphabet.length -1 ) : index; 
     this.$emit('changeLetter', index)
     console.log(e)
   }

 }
}
</script>
<style scoped lang="stylus">
@import '../../assets/styles/common/varibles.styl';
  .silder {
    position absolute;
    right: 0;
    top: 1.62rem;
    bottom 0;
    width: .6rem;
    background  #fff;
    .silder-list{
      height: auto;
      position absolute;
      width: 100%;
      top: 50%;
      transform:translateY(-50%);
      .silder-item {
        color: #666;
        text-align center;
        line-height .36rem;
      }
    }
  }
</style>
