<template>
  <div class="do-mod-switch">
    <div :class="{switchClose: !open, switchopen: open}" v-if="switchStyle"  @click="openClose">
      <span></span>
    </div>
    <div :class="{close: !open, isopen: open}" v-else @click="openClose">
      <span></span>
      <i>{{text}}</i>
    </div>
  </div>
</template>

<script>
import vue from 'vue'
import './index.scss'

export default {
  name: 'Switches',
  props: {
    state: {
      type: [String, Number],
      default () {
        return 0
      }
    },
    switchStyle: {
      type: [String, Boolean, Number],
      default () {
        return true
      }
    }
  },
  data () {
    return {
      open: false,
      text: '停用'
    }
  },
  created () {
    if (this.state == 1) {
      this.open = true
      this.text = '启用'
    }
  },
  methods: {
    openClose () {
      this.open = !this.open
      if (this.open) {
        this.text = '启用'
      } else {
        this.text = '停用'
      }
      this.$emit('currentState', this.open)
    }
  }
}
</script>

<style rel="stylesheet" lang="scss" scoped>
</style>
