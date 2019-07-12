import component from './index.vue'

const Page = {
  install: function(Vue) {
    Vue.component(component.name, component)
  }
}
export default Page