import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ebook from '@/Ebook'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ebook',
      component: Ebook
    },
    // {
    //   path: '/Ebook',
    //   name: 'Ebook',
    //   component: Ebook
    // }
  ]
})
