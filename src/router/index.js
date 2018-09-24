import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/home'
import City from '@/pages/city'
import Detail from '@/pages/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/city',
      name: "City",
      component: City
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      props: true,
    }
  ]
})
