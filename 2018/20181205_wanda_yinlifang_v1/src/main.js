// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import wx from 'weixin-js-sdk'
import axios from 'axios'
// import VueAxios from 'vue-axios'
// import jsonp from 'jsonp'
import VueJsonp from 'vue-jsonp'

Vue.use(VueJsonp,wx,axios)

import '@/assets/js/rem'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})