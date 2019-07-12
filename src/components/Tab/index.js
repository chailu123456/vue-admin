import component from './index.vue'

const Tab = {
  install: function(Vue) {
    Vue.component(component.name, component)
  }
}
export default Tab