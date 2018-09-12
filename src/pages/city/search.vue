<template>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或者拼音" />
    </div>
</template>
<script>
export default {
  name: "city-search"  
}
</script>
<style scoped lang="stylus">
@import '../../assets/styles/common/varibles.styl'
  .search{
    height: .74rem;
    background: $bgColor;
    padding: 0 .2rem;
    .search-input {
         margin-top: .06rem;
         border none;
         width: 100%;
         line-height .62rem;
         text-align center;
         font-size: .24rem;
         border-radius: .1rem;  
         color: #666;
         box-sizing: border-box;

      }
  }
</style>
