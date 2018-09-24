
<template>
<div ref="wrapper">
  <div class="list">
    <div class="area" ref="current">
      <div class="title border-topbottom">当前位置</div>
      <div class="content">
        <div class="button" @click="handleCityClick(city)">
          <div class="button-text button-active">{{ city || '上海'}}</div>
        </div>
      </div>
  </div>

    <div class="area1" ref="hotcity">
        <div class="title1">热门城市</div>
        <div class="content1">
          <div class="button1" v-for="item of hotcity" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button-text1">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>

      <div class="area" v-for="(item,key) of list" :key="key" ref="key">
      <div class="title">{{item.classify}}</div>
      <div class="content">
        <div class="content-item" 
              v-for="itemInfo of item.cityList"
              :key="itemInfo.id"
             @click="handleCityClick(itemInfo.name)">
          <div class="button-text button-active">{{ itemInfo.name }}</div>
        </div>
      </div>
  </div>
  </div>
</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import BScroll from 'better-scroll'
export default {
  name: 'city-list',
  props: ["list","hotcity"],
  watch: {
    list () {
      console.log(this.list,"w")
      // this.$nextTick( () => {
      //   this.scroll.refresh()
      // })
    }
  },
  computed: {
    ...mapState(["city"]),
    areaPositions () {
      const arr = [];
      arr.push(this.$refs.current.offsetTop);
      arr.push(this.$refs.hotcity.offsetTop);
      for( let i in this.list ) {
        //console.log(this.$refs.key[i].offsetTop)
        arr.push(this.$refs.key[i].offsetTop);
      }
      return arr;
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city);
      this.$router.push("/")
      console.log(city)
    },
    scrollToIndex (item) {
      this.scroll.scrollToElement(this.$refs.key[item])
    },
    ...mapMutations(['changeCity']),
    handleScroll (e) {
        const y = -e.y;
        let flag= false;
          for( let i = 0; i< this.areaPositions.length;  i++ ) {
            if( y >this.areaPositions[i] -27 && y <  this.areaPositions[i]) {
              const diff = y -this.areaPositions[i] + 27;
              flag = true;  
              this.$emit('fixChange', diff);
              break;
             console.log("a")
            }
              !flag && this.$emit('fixChange')
            
          }
        this.$emit("scroll",e)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: 3
    });
    this.scroll.on("scroll", this.handleScroll.bind(this));
  },
  
  activated () {
    this.scroll&&this.scroll.refresh()
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/styles/common/varibles.styl';
.area
    .title
      line-height: .54rem
      padding-left: .3rem
      background: #eee
      color: #616161
      font-size: .26rem
      border-top: 1px solid #9e9e9e
      border-bottom: 1px solid #9e9e9e
    .content
      overflow: hidden
      .button
        float: left
        width:33.33%
        .button-text
          line-height: .6rem
          margin: .2rem
          border: .02rem solid #999
          border-radius:.06rem
          text-align: center
          color: $bgColor
          border: 1px solid $bgColor
  .area1
    .title1
      line-height: .54rem
      padding-left: .3rem
      background: #eee
      color: #616161
      font-size: .26rem
      border-top: 1px solid #9e9e9e
      border-bottom: 1px solid #9e9e9e
    .content1
      overflow: hidden
      padding: 0 .4rem 0 .2rem
      .button1
        float: left
        width:33.33%
        .button-text1
          line-height: .6rem
          margin: .2rem
          border: .02rem solid #999
          border-radius:.06rem
          text-align: center
          color: black
          border: 1px solid #999
  .content-item
    line-height: .7rem
    padding-left: .3rem
    background: #fff
    color: #616161
    font-size: .26rem
    border-bottom: 1px solid #ccc

    
</style>
