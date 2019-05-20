import component from './index.vue'

const Btn = {
  install: function(Vue) {
    Vue.component(component.name, component)
  }
}
export default Btn