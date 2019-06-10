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
      let res = await Login.login(parmas)
      if (res) {
        // alert('登陆成功')
        localStorage.setItem('logourl', res[0].logourl)
        return res
      } else {
        alert('账号或密码错误')
      }
      
    },
    async Register({commit}, parmas) {
      let data = await Login.register(parmas)
      if (data) {
        alert('注册成功')
        localStorage.setItem('logourl', data[0].logourl)}
      return
    }
  }
})
export default store