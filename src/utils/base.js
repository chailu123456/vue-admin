import axios from 'axios'

let url = 'http://10.10.163.53:8090'

const instance = axios.create({
  baseURL: url,
  timeout: 3000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  config.headers['Authorization'] = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTgzNjg2NDcsIm5hbWUiOiLmn7TnkpAiLCJwYXRoMSI6Im9mZmljZS1zaXRlLGFuYWx5c2lzLGdlZWssdG9vbHMscXVpY2tfYXBwLHN5c3RlbV9zZXR0aW5nIiwicGF0aDIiOiJtb2R1bGVzLGVtcGxveWVlcyxsb2dzLHVzZXJfb3ZlcnZpZXcsc2NlbmVfb3ZlcnZpZXcscG9wdWxhcl9zY2VuZSx1c2VyX3RyZW5kLHVzZXJfYXJlYSxtb2JpbGVfaW5mbyx1c2VyX3R5cGUsY2hhbm5lbF9jb21wYXJpc29uLGJhdGNoX3Byb2Nlc3MscG9pX2FwLGJvdW5kYXJpZXNfY2hlY2ssbGlua19jb252ZXJzaW9uLGNvbnZlbmllbnRfdG9vbCxiYXNlX3N0YXRpb24sc2NlbmUscG9pX2JyYW5kcyxnZW5lcmFsX3NlcnYsc2Vydl9pY29uLEludGVydmFsXzEsY2hhbm5lbF9zY2VuZSxwYXJ0bmVyLGNoYW5uZWxfaWNvbixJbnRlcnZhbF8zLEludGVydmFsXzIsc2RrX2VxdWlwbWVudCxzZGtfY2hhbm5lbCxJbnRlcnZhbF80LHF1aWNrX3NjZW5lcyxxdWlja19mdW5jdGlvbnMscXVpY2tfaWNvbnMscXVpY2tfYmFubmVycyIsInVpZCI6MTQ2fQ.feOxGkpzItk8MnQAw9TRnUCZVg_wXx5T4PwG_bL_7nA'
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  let {data} = response;
  if (data.code === 200) {
    return data.data
  }
  
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

class base {
  constructor () {
    this.instance = instance
  }
}
export default base
