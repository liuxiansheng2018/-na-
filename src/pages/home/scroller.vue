<template>
  <div ref="scroller"> 
    <div class="content">
      <transition name="loading">
        <div v-show="isLoading" class="loading">正在加载...</div>
      </transition>
      
      <router-link class="item" v-for="item in list" :key="item.id" :to=" '/detail/' + item.id" tag="div">
        <img v-lazy ="item.imgurl" alt="" class="item-img"/>
        <div class="item-content">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-price">
            <span class="price-tag">¥</span>
            {{item.price}}
            <span class="item-start">起</span></p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll';
import {mapState} from 'vuex';
import axios from "axios";
export default {
  name: 'index-scroller',
  props: {
    sights: Array
  },
  watch: {
    list () {
      this.$nextTick( () => {
        this.scroller.refresh()
      })
    },
    
  },
  data () {
    return {
      isLoading: false,
      moreSights: [],
      pageNum: 1,
      isFetching: false,
    }
  },
  computed: {
    list () {
      return this.sights.concat(this.moreSights)
    },
    ...mapState(["city"]),  
  },
  methods: {
    createScroll () {
      this.scroller = new BScroll(this.$refs.scroller, {
        probeType: 3
      })
    },
    bindEvents () {
      this.scroller.on('scroll', this.handleScroll.bind(this)); //屏幕滚动的时候
      this.scroller.on('scrollEnd', this.handleScrollEnd.bind(this))  //滚动结束的时候

    },
    handleScroll (e) {
      if( e.y > 60 && !this.isLoading ) {
        this.getListInfo()
        this.isLoading = true;
      }
    },
    handleScrollEnd (e) {
      this.isLoading = false;
    },
    getListInfo () { 
      if( !isFetching ) {
        this.isFetching = true
        axios.get('/api/sightlist.json?city=' + this.city + `&page=`+ this.pageNum)
        .then(this.handleGetListSucc.bind(this))
        .catch(this.handleGetListErr.bind(this))   
      }
      
    },
    handleGetListSucc (res) {

      res&& (res = res.data);
      res.data&&res.data.list&& (this.moreSights = this.moreSights.concat(res.data.list) );
      this.pageNum ++;
      this.isFetching = fasle; 
    },
    handleGetListErr () {
      this.isFetching = fasle;
      console.log('scroll err')
    }
  },
  mounted () {
    this.createScroll();
    this.bindEvents();
    
  }
}
</script>
<style scoped lang="stylus">
.loading {
  // position absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  color: #919191;
  text-align center;
  line-height: .8rem;
}
.loading-enter-active, .loading-leave-active {
  transition: opacity .5s,
}
.loading-enter, .fade-leave-to {
  opacity: 0;
}
.item{
  padding: .24rem
    display: flex;
  .item-img{
    width: 1.4rem
      height: 1.4rem
      margin-right: .2rem
  }
  .item-content{
    flex: 1;
    .item-title {
      margin: .04rem 0 .1rem 0;
      font-size: .3rem;
      color: #212121;
    }
    .item-desc{
      margin-top: .2rem
        margin-bottom: .1rem
        font-size: .28rem
      color: #9e9e9e;
    }
    .item-price{
      margin-top: .2rem
        font-size: .36rem
      color: #ff8300;
      .price-tag{
        font-size: .24rem;
      }
      .item-start{
        font-size: .24rem;
        color: #9e9e9e;
      }
    }
  }
}
</style>
