<template>
<div class="search-wrapper">
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或者拼音" @input="handleInput"/>
    </div>
    <div class="search-list" v-show="showList" ref="list">
      <ul>
        <li v-for="item in filterResult" :key="item.name" class="search-item border-bottom">{{item.name}}</li>
      </ul>
    </div>  
</div> 
</template>
<script>
import BScroll from 'better-scroll';
export default {
  name: "city-search",
  props: ["list"],
  data () {
    return {
      showList: false,
      filterResult: []
    }
  },
  watch: {
    filterResult () {
      this.$nextTick( () => {
        this.scroll.refresh();  
      })
    }
  },
  methods: {
    handleInput (e) {
      let inputValeu = e.target.value.toLowerCase();
      if( !inputValeu ) {
        this.showList = false;      
      }else{
      this.showList = true;
      this.filterResult = this.result.filter( (item) => {
        if( item.spell.indexOf(inputValeu) > -1 || item.name.indexOf(inputValeu) > -1 ) {
          return true
        }
      })
      }
    },
  },
  computed: {
    result () {
      const result = [];
      for (let i of this.list) {
        for(let j of i.cityList) {
          result.push({
            name: j.name,
            spell: j.spell,
            id: j.id
          })
        }
      }
      return result
    }   
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.list)
  }
}
</script>
<style scoped lang="stylus">
@import '../../assets/styles/common/varibles.styl'
  .search-wrapper {
    z-index 1;
  }
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
  .search-list{
    overflow hidden;
    position absolute;
    z-index 1;  
    top: 1.62rem;
    left: 0;
    right: 0;
    bottom:0;
    background: #fff;
  }
  .search-item{
    padding-left: .2rem;
    line-height .8rem;
    background #fff;
    color: #333;
  }
</style>
