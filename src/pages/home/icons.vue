<template>
    <swiper class="icons" :options="swiperOption">
    <!-- slides -->
    <swiper-slide class="icons-pages" v-for="(page,index) of pages" :key="index">
      <div class="icons-list">
        <div v-for="item of page" :key="item.id" class="icons-item">
          <img :src="item.imgURL" alt="" class="icons-img" />
          <p class="icons-title">{{item.title}}</p>
        </div>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'index-icons',
  props: {
    icons: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: ".swiper-pagination"
      }
    }
  },
  computed: {
    pages () {
      const pages = [];
      this.icons.forEach((value, index) => {
        const page = Math.floor(index/ 8);
        if( !pages[page] ) {
          pages[page] = []
        };
        pages[page].push(value)
      }); 
        return pages
    }
  }
}
</script>

<style scoped lang="stylus">
  .icons {
    overflow: hidden;
    //height: 0;
    padding-bottom: .34em;
    width: 100%;
  }
  .icons-list {
    display: flex;
    flex-wrap: wrap; 
    .icons-item{
      width: 25%;
      margin-top: .3rem;
      text-align: center;
      .icons-img{
        width: .66rem;
        height: .66rem;
      }
      .icons-title {
        margin-top: .16rem;
        color: #333;
      }
    }
  }

</style>
