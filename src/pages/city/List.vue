
<template>
  <div class="list">
    <div class="area">
      <div class="title border-topbottom">当前位置</div>
      <div class="content">
        <div class="button">
          <div class="border button-text button-active">{{ city || '上海'}}</div>
        </div>
      </div>
    </div>

    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="content">
        <div class="button">
          <div class="border button-text button-active">{{ city || '上海'}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'city-list',
  props: ["list","hotcity"],
  watch: {
    list () {
      console.log(this.list,"w")
    }
  },
  computed: {
    ...mapState(["city"])
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/styles/common/varibles.styl';

  .title{
    line-height .54rem;
    padding-left: .3rem;
    background #eee;
    color: #616161;
    font-size: .26rem;
    &::before, &::after{
      border-color: #9e9e9e;
    }
  }
  .content{
    overflow hidden;
    padding: 0 .4rem 0 .2rem;
    display: flex;
    .button {
      float left;
      width: 33.33%;
      .button-text{
        margin: .2rem;
        border: .02rem solid #999;
        border-radius: .05rem;
        text-align center;
        line-height .6rem;
      }
      .button-active{
        color: $bgColor;
        border-color: $bgColor; 
      }
    } 
  }
</style>
