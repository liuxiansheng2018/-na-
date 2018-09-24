<template>
    <div class="main">
      <index-header></index-header>
      <index-swiper :sliders="sliders"></index-swiper>
      <index-icons :icons="icons"></index-icons>
      <index-scroller class="scroller" :sights="sights"></index-scroller>
      <download v-show="download" @close="handleDownload">下载条</download>
    </div>
</template>

<script>
import IndexHeader from './header'
import IndexSwiper from './swiper'
import IndexIcons from './icons'
import IndexScroller from './scroller'
import axios from 'axios';
import { mapState,mapMutations } from 'vuex';
//import mixin from "@/mixin/download.js";
import Download from "./download";
export default {
  name: 'index',
 // mixins: [mixin],
  data () {
    return {
      sliders: [],
      icons: [],
      sights: [],
      download: true
    }
  },
  components: {
    IndexHeader,
    IndexSwiper,
    IndexIcons,
    IndexScroller,
    Download
  },
  computed: {
    ...mapState(["city"])
  },  
  watch: {  
    city () {
      this.getIndexData()
    }
  },
  methods: {
    ...mapMutations(["changeCity"]),
    getIndexData () {
      axios.get("/api/index.json?="+ this.city)
        .then(this.handleDataSucc.bind(this))
        .catch(this.handleDataErr.bind(this))
    },
    handleDataSucc (response) {
      let res = response.data;
      console.log(res)
      if( res && res.ret && res.data ) {  
        res.data.city && (this.changeCity(res.data.city))  
         res.data.slider && ( this.sliders = res.data.slider );   
         res.data.icons && (this.icons = res.data.icons);
         res.data.sight && (this.sights = res.data.sight);    
      }else {
        this.handleDataErr()
      }  
    },
    handleDataErr () {
      console.log("error")
    },
    handleDownload () {
      this.download = false;
    }
  },
  mounted () {
    this.getIndexData()
  }
}
</script>

<style scoped lang="stylus">
  .main {
    display flex;
    flex-direction: column;
    position absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;  
    .scroller{
      flex: 1;
      overflow hidden;
      //flex-grow: 0;
      //flex-shrink: 0; 
    }
  }
</style>
