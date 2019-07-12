import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import Login from '@/api/login'
let logourl = localStorage.getItem('logourl')
let token = localStorage.getItem('token')

const store = new Vuex.Store({
  state: {
    logourl: logourl,
    token: token
  },
  getters: {
    token: state=>state.token,
    logourl: state=>state.logourl,
  },
  mutations: {
    SET_TOKEN: (state, params) => state.token = params,
    SET_LOGOURL: (state, params) => state.logourl = params
  },
  actions: {
    async Login({commit}, parmas) {
      let res = await Login.login(parmas)
      if (res) {
        commit('SET_TOKEN', res[0].token)
        commit('SET_LOGOURL', res[0].logourl)
        localStorage.setItem('logourl', res[0].logourl)
        localStorage.setItem('token', res[0].token)
        return res
      } else {
        alert('账号或密码错误')
      }
    },
    async Register({commit}, parmas) {
      let data = await Login.register(parmas)
      if (data) {
        commit('SET_TOKEN', data[0].token)
        localStorage.setItem('logourl', data[0].logourl)
        localStorage.setItem('token', data[0].token)
      }
      return data
    }
  }
})
export default store