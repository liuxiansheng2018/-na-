// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick' //解决300ms延迟
import '@/assets/styles/base/border.css' // 一像素边框的问题
import '@/assets/styles/base/reset.css'// 公共样式
import '@/assets/styles/icon/iconfont.css'// iconfont文字图标库
import VueAwesomeSwiper from 'vue-awesome-swiper'//引入了滚动轮播插件
import 'swiper/dist/css/swiper.css';
import VueLazyload from 'vue-lazyload'; //懒加载
import store from '@/store/index.js'
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
Vue.config.productionTip = false

FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
