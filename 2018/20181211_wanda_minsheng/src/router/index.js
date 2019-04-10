import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  mode:'history',
  base: 'apps/CMBC/',
  routes: [
    {
      path: '/index.html',
      name: 'index',
      component: index
    }
  ]
})
