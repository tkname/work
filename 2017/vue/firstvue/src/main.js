// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	  el: '#app',
	  router,
	  template: '<App/>',
	  components: { App },
	  data: {
	    a: 1
	  },
	  created: function () {
	    // `this` 指向 vm 实例
	    console.log('a is: ' + this.a)
	  },
	  methods: {
		  btn:function(){
		  	console.log(222);
		  }	  	
	  }

	})
