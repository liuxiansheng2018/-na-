
<template>
  <div>
      <detail-banner :bannerImage= "bannerImg" :imgList="imgList"></detail-banner>
  </div>
</template>

<script>
import DetailBanner from "./banner"
import axios from "axios";
export default {
  name: "detail-index",
  props:['id'],
  data () {
    return {
      bannerImg: "",
      imgList: []
    }
  },
  components: {
    DetailBanner  
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json',{
        params: {
          id: this.id
        }   
      }).then(this.handleGetDeatailSucc.bind(this)).catch(this.handleGetDeatailErr.bind(this))
    },
    handleGetDeatailSucc (res) {
      res && (res = res.data)
      if( res && res.ret && res.data ) {
        this.bannerImg = res.data.bannerImg;
        this.imgList = res.data.imgList
      }else {
        this.handleGetDeatailErr()
      }
      console.log(res)
    },
    handleGetDeatailErr () {
      console.log( " Deatail Err" )
    }
  },
  created () {
    this.getDetailInfo()
  },
  watch: {
    id () {
      if( this.id ) {
        this.getDetailInfo()
      }
    }
  }
 }
</script>

<style scoped lang="stylus">

</style>
