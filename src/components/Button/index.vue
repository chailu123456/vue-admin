<template>
  <div class="do-ui-button">
    <button :style="widthStyle" @click="handleClick">{{text}}</button>
  </div>
</template>

<script>
export default {
  name: 'Btn',
  props:{
    text:{
      type: String,
      default () {
        return '默认按钮'
      }
    },
    widthStyle: {
      default () {
        return [{
          width: '90px'
        }]
      }
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    handleClick () {
      this.$emit('handleClick')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.do-ui-button {
  display: inline-block;
  button {
    min-width: 90px;
    height:34px;
    line-height:34px;
    color: #fff;
    background:rgba(115,138,224,1);
    border-radius:4px;
    font-size: 12px;
    border: none;
    &:hover {
      background:#5f78d5;
      cursor: pointer;
    }
  }
}
</style>
