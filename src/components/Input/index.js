import component from './index.vue'

const Input = {
  install: function(Vue) {
    Vue.component(component.name, component)
  }
}
export default Input