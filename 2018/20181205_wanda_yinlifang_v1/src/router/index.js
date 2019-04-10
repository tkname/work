import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import result from '@/components/result'

Vue.use(Router)

export default new Router({
  mode:'history',
  base: '/apps/gzqg/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/index.html',
      name: 'index',
      component: index,
    },
    {
      path: '/result',
      name: 'result',
      component: result,
      meta:{
        title:'关注广州轻工集团抽观影套餐'
      }
    }
  ]
})
