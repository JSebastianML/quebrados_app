// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import router from './router'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(vueRouter)
Vue.use(Chartkick.use(Chart))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
