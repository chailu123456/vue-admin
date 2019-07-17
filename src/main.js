// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import complist from './components.js'
for(var a in complist){
  Vue.use(complist[a])
}

import '@/style/index.scss'
import '@/style/icon.scss'
import store from '@/store'
import global from './utils/global'

import './router/routerInspect.js'

window.global = global
Vue.config.productionTip = false
Vue.use(VueQuillEditor)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
