<template>
    <div class="header">
      <div class="back iconfont">&#xe624;</div>
      <div class="search">
        <div class="search-content">
          <span class="iconfont search-icon">&#xe607;</span>
          请输入游玩景点/城市主题
        </div>
      </div>
      <router-link to="/city">
        <div class="city">
        {{city}}
        </div>
      </router-link>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'index-header',
  computed: {
    ...mapState(["city"])
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/styles/common/varibles.styl' 
  .header {
    display: flex;
    height: .88rem;
    background: $bgColor;
    .back {
      text-align center;
      width: .8rem;
      line-height .88rem;
      font-size .44rem;
      font-weight: 700; 
      color: #fff;
    }
    .search {
      flex 1;  
      .search-content{
        margin-top .14rem;
        border-radius: .1rem;
        line-height .6rem;
        width: 100%;
        height: .6rem;
        background #fff;  
        text-indent: .2rem;
        color: #ccc;
        .search-icon{
          position relative;
          top: .02rem;
        }
      }
    }
    .city{
      position relative
      float: right;  
      line-height .88rem;
      padding: 0 0.46rem 0 .22rem;
      font-size: .28rem;
      color: #fff;
      max-width: 1.6rem;
      white-space nowrap;
      overflow hidden;
      text-overflow: ellipsis;
    }
    .city::before{
      position absolute;
      right: .16rem;
      top: .38rem;
      width: 0;
      height: 0;
      content: "\0020";
      border-left: .12rem solid transparent;  
      border-right: .12rem solid transparent;
      border-top: .12rem solid #fff;
    }
  }
  
</style>
