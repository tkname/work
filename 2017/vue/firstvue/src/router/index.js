import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Histor from '@/components/Histor'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hh',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/ww',
      name: 'Histor',
      component: Histor
    }    
  ]
})

