import axios from 'axios'
let url = 'http://localhost:3000'
import store from '@/store'
const instance = axios.create({
  baseURL: url,
  timeout: 3000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  window.Loading.show()
  // 在发送请求之前做些什么
  if (store.getters.token) {
    let token = store.getters.token
    config.headers['Authorization'] = token
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  window.Loading.hide()
  return Promise.reject(error)
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  let {data} = response
  setTimeout(function(){
    window.Loading.hide()
  },500)
  if (data.code === 200) {
    return data.data
  }
  if (data.code === 403) {
    window.Toast({
      msg:'登陆超时，正在返回登陆页...',  // message显示信息
      state:'tips' // 状态 success：成功  err：错误  tips：提示  warn：警告
    })
    setTimeout(function() {
      localStorage.clear()
      location.reload()
    },2000)

  }
}, function (error) {
  // 对响应错误做点什么
  // window.Loading.hide()
  return Promise.reject(error);
});

class base {
  constructor () {
    this.instance = instance
  }
}
export default base
