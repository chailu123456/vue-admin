import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import Login from '@/api/login'
let userInfo = localStorage.getItem('userInfo')
let token = localStorage.getItem('token')
let menuLists = localStorage.getItem('menuLists')
let subMenuLists = localStorage.getItem('subMenuLists')
let currentsence = localStorage.getItem('currentsence')

const store = new Vuex.Store({
  state: {
    a: 1,
    menuLists: menuLists, 
    userInfo: userInfo,
    token: token,
    subMenuLists: subMenuLists,
    currentsence: currentsence
  },
  getters: {
    menuLists: state => state.menuLists
  },
  mutations: {
    SET_TOKEN: (state, params) => state.token = params,
    SET_MENULISTS: (state, params) => state.menuLists = params,
    SET_SUBMENULISTS: (state, params) => state.subMenuLists = params,
    SET_CURRENTSENCE: (state, params) => state.currentsence = params
  },
  actions: {
    async Login({commit}, parmas) {
      console.log(parmas)
      let data = await Login.login(parmas)
      console.log(data)
      if (data.token) {
        console.log(data.menu)
        localStorage.setItem('token', token)
        localStorage.setItem('menuLists', JSON.stringify(data.data.menu))
      }
    }
  }
})
export default store