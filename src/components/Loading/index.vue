<template>
  <div class="do-ui-loading" v-show="showLoading">
    <div class="loading-opation" v-if="selectConfirm">
      <div class="tip">{{title}}</div>
      <p class="tip-say">{{prompt}}</p>
      <div class="btn-opation">
        <span class="loading-btn" @click="no">取消</span>
        <span class="loading-btn loading-btn-confirm" @click="yes">确定</span>
      </div>
    </div>
    <div class="layer-loading" v-else>
      <div class="loading"></div>
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue'
import './index.scss'
export default {
  name: 'Loading',
  props:{
    showLoading: false,
    prompt: {
      type: String,
      default () {
        return '此操作将永久删除该文件, 是否继续?'
      }
    },
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
      selectConfirm: true
    }
  },
  methods:{
    yes () {
      this.callback['yes']('ssds')
      this.showLoading = false
      // this.$loading.hide()
      
    },
    no () {
      this.$loading.hide()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
