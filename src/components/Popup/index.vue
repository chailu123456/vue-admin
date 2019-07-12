<template>
  <div class="do-ui-popup" v-if="show">
    <div class="popup-opation" :style="{width:width,height:height}">
      <div class="tip">{{title}}</div>
      <div class="d">
          <component
          :data="data"
          :is="component.name"
          v-if="component"
          v-on:childSay="yes"
          v-on:childBye="no"
          >
        </component>
      </div>
        
      <div class="btn-opation" v-if="false">
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
      data: null
    }
  },
  methods:{
    yes (data) {
      // this.callback['yes'](this.form)
      this.callback['yes'] && this.callback['yes'](data)
      this.show = false
      this.$el.remove(this.$el) //删除当前节点
    },
    no (data) {
      this.callback['no'] && this.callback['no'](data)
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
