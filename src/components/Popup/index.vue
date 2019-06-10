<template>
  <div class="do-ui-popup" v-if="show">
    <div class="popup-opation">
      <div class="tip">{{title}}</div>
      <div class="d">
          <component
          :data="data"
          :is="component.name"
          v-if="component"
          v-on:child-say="yes"
          >
        </component>
      </div>
        
      <div class="btn-opation">
        <span class="popup-btn" @click="no">取消</span>
        <span class="popup-btn popup-btn-confirm" @click="yes">确定</span>
      </div>
    </div>
  </div>
</template>

<script>
import vue from 'vue'
import './index.scss'
export default {
  name: 'Popup',
  props:{
    title: {
      type: String,
      default () {
        return '提示'
      }
    }
  },
  data () {
    return {
      callback: {},
      show: false,
      width: '',
      height: '',
      component: null,
      data: null,
      form:{
        a:2,
        s:3,
        v:4
      }
    }
  },
  methods:{
    yes (data) {
      console.log(data)
      // this.callback['yes'](this.form)
      // this.callback['yes'] && this.callback['yes'](this.data)
      this.show = false
      this.$el.remove(this.$el) //删除当前节点
    },
    no () {
      this.$el.remove(this.$el) //删除当前节点
      this.show = false
    }
  },
  watch: {
    show(v) {
      v && vue.component(this.component.name, this.component)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
