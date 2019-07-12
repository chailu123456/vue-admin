<template>
  <div>
    <h1>组件</h1>
    <div class="button-list">
      <Btn class="login_btn" @handleClick="no" :widthStyle="widthStyle2" text="取消"></Btn>
      <Btn class="login_btn" @handleClick="yes" text="确定"></Btn>
    </div>
  </div>  
</template>

<script>
import Vue from 'vue'
export default {
  name: 'add',
  props:['data'],
  data() {
    return {
      mmm: {
        a:'的事实'
      },
      widthStyle2: [
        {
          background: '#fff',
          color:'#606266'
        }
      ]

      
    }
  },
  methods:{
    no () {
      this.$emit('childBye')
    },
    yes() {
      this.$emit('childSay', mmm)
    }
  }
}
</script>

<style lang=="sass" scoped>

</style>
