import Vue from 'vue'
import loadTemp from './index.vue'

let Load = {};  // 定义插件对象

Load.install = (Vue, options) => { //Vue的install方法，用于定义vue插件
    const assign = Object.assign
    // 如果存在loading 不重复创建DOM
    if (document.getElementsByClassName('.do-ui-loading').length) return
    // 创建一个VUE构造器
    let lTemp = Vue.extend(loadTemp);

    // 提供一个在页面上已存在的DOM元素作为Vue实例的挂载目标。
    // 在实例挂载之后，可以通过$vm.$el访问。
    // 如果这个选项在实例化时有用到，实例将立即进入编译过程。否则，需要显示调用vm.$mount()手动开启编译(如下)
    // 提供的元素只能作为挂载点。所有的挂载元素会被vue生成的dom替换。因此不能挂载在顶级元素(html, body)上

    // 实例化VUE实例
    let $vm = new lTemp();
    let noop = function(){}
    // 此处使用$mount来手动开启编译。用$el来访问元素，并插入到body中
    let tpl = $vm.$mount().$el;
    document.body.appendChild(tpl);
    Vue.prototype.$loading = { //在Vue的原型上添加实例方法，以全局调用
      show(obj) {
        $vm.showLoading = true;
        if (!obj) {
          $vm.selectConfirm = false
          return
        }
        //通过传入props改变$vm下的属性控制组件 例如$vm.text = options
        let {yes, no} = obj
        yes = yes || noop
        no = no || noop
        $vm.callback = {
          yes,
          no
        }
        if (obj.writetext) {
          assign($vm, obj.writetext) // 合并值到$vm
        }
      },
      hide() {
        $vm.showLoading = false;
      }
    }
}
//导出Load
export default Load;