import ToastComponent from './index.vue'
const Toast = {};
let index = 999
let cur = 1;
// 注册Toast
Toast.install = function (Vue) {
  // 生成一个Vue的子类
  // 同时这个子类也就是组件
Vue.prototype.Toast = (message, duration = 2540) => {
  const ToastConstructor = Vue.extend(ToastComponent)

    let dialog = document.getElementsByClassName('dialog-tips').length
    dialog++
  // 生成一个该子类的实例
  const instance = new ToastConstructor()
  // 将这个实例挂载在我创建的div上
  // 并将此div加入全局挂载点内部
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  // 通过Vue的原型注册一个方法
  // 让所有实例共享这个方法
    instance.$el.style.zIndex = index++
    instance.$el.style.top = (50*dialog)+'px'
    cur++
    instance.dataMsg = message
    instance.visible = true
    setTimeout(() => {
      instance.visible = false
    }, duration)
  }
window.Toast = Vue.prototype.Toast
}
export default Toast