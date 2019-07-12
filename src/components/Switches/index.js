/**
 * 
 * @authors chailu 
 * @date    2019-07-05 16:49:38
 */

'use strict'

import component from './index.vue'

const Switches = {
  install: function(Vue){
    Vue.component(component.name, component)
  }
}

export default Switches