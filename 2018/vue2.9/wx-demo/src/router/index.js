import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import message from '@/components/message'
import todolist from '@/components/todolist'
import total from '@/components/total'


//答题页面
import problem from '@/components/problem/index'

import login from '@/components/problem/login'


import register from '@/components/problem/register'



import VueResource from 'vue-resource'

//vue-socket  配置
import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'http://192.168.1.106:8084');


Vue.use(Router)
Vue.use(VueResource)



// 路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,

    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: todolist
    },
    {
      path: '/total',
      name: 'total',
      component: total
    },
    {
      path: '/problem',
      name: 'problem',
      component: problem,
      children:[
        {
          path: 'login',
          name:"login",
          component: login
        },
        {
          path: 'register',
          name:"register",
          component: register
        },
      ]
    }
  ]
})
