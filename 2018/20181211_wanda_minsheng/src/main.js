// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import layer from 'vue-layer'

import wx from 'weixin-js-sdk'
import axios from 'axios'
import VueJsonp from 'vue-jsonp'

import Vuelidate from 'vuelidate'
Vue.use(VueJsonp,wx,axios,Vuelidate)

import '@/assets/js/rem'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
