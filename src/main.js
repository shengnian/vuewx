import '@/styles/index.scss'

import Vue from 'vue'
import FastClick from 'fastclick'

import App from './App'
import router from './router'
import store from './store'

import './icons' // icon
import './errorLog' // error
import './permission' // permission
import './mock' // simulation data

import * as filters from './filters' // global filters
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
