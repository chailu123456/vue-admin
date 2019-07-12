import component from './index.vue'

const SelectDown = {
  install: function(Vue) {
    Vue.component(component.name, component)
  }
}
export default SelectDown