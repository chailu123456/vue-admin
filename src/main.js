// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Btn from '@/components/Button'
import store from '@/store'
import global from './utils/global'
window.global = global
Vue.config.productionTip = false

Vue.use(Btn)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
