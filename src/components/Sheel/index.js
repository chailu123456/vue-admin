import component from './index.vue'

const Sheel = {
  install: function(Vue) {
    Vue.component(component.name, component)
  }
}
export default Sheel