<template>
  <div class="main">
    <city-header></city-header>
    <city-search></city-search>
    <city-list class="list" :list="list" :hotcity="historyList"></city-list>>
  </div>
</template>
<script>
import CityHeader from './header';
import CitySearch from './search';
import CityList from "./list";
import axios from 'axios';
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
    CityList
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
    }
  },
  mounted () {
    this.getListInfo()
  }
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

    }
  }
</style>
