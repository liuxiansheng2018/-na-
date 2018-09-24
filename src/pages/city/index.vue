<template>
  <div class="main">
    <city-header></city-header>
    <city-search :list="list"></city-search>
    <city-list class="list" 
               :list="list" 
               :hotcity="historyList"
               ref="list"
               @scroll="handleScroll"
               @fixChange="handlefixChange"></city-list>
    <city-silder :list="list" @changeLetter="handleLetterChange"></city-silder>
    <fixed ref="fiexdTitle"></fixed>
  </div>
</template>
<script>
import CityHeader from './header';
import CitySearch from './search';
import CityList from "./list";
import CitySilder from "./silder"
import Fixed from "./title"
import axios from 'axios';
import {mapState} from 'vuex';
export default {
  name: 'city',
  data () {
    return {
      list: [],
      historyList: [],
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CitySilder,
    Fixed 
  },
  methods:{
    getListInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetListSucc.bind(this))
        .catch(this.handleGetListErr.bind(this))
    },
    handleGetListSucc (res) {
      res&&(res = res.data )
      if( res && res.data ) {
        res.data.city && ( this.list = res.data.city )
        res.data.hotcityList && (this.historyList = res.data.hotcityList)
        
      }else {
        this.handleGetListErr()
      }
        //console.log(res)
    },
    handleGetListErr () {
      console.log("error city")
    },
    handleLetterChange (item) {
      this.$refs.list.scrollToIndex(item)
      console.log(item)
    },
    handleScroll (e) {
        this.$refs.fiexdTitle.setShow(!(e.y > 0))  
    },
    handlefixChange (num) {
        this.$refs.fiexdTitle.setMove(num || 0)  

    }
  },
  mounted () {
    this.getListInfo()
  },
  
}
</script>
<style scoped lang="stylus">
  .main{
    display flex;
    flex-direction: column;
    position absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    .list{
      flex: 1;
      overflow hidden;
    }
  }
</style>
