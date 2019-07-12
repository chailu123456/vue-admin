<template>
  <div class="do-ui-input">
    <div class="input-slide">
      <slot name="contents"></slot>
    </div>
    <div class="input-operation">
      <input :value="value" :type="inputType" @input="updateVal($event.target.value)" :style="widthStyle" :disabled="disabled" :placeholder="placeholder" class="do-input">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inputs',
  props:{
    placeholder:{
      type: String,
      default () {
        return '请输入内容'
      }
    },
    inputType: {
      type: String,
      default() {
        return 'type'
      }
    },
    value: {
      type: String,
      default() {
        return ''
      }
    },
    disabled: {
      type: Boolean,
      default() {
        return false
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
  created () {
    this.val = this.value
  },
  data () {
    return {
      val: ''
    }
  },
  methods:{
    updateVal: function(val) {
      this.$emit('input', val); 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.do-ui-input {
  font-size: 12px;
  height: 34px;
  .input-operation {
    float: left;
    height: 34px;
    display: inline-block;
    .do-input {
      padding: 0 10px;
      width:300px;
      height:34px;
      border-radius:4px;
      border:1px solid rgba(220,223,236,1);
    }
    .do-input:focus {
      border: 1px solid #738ae0;
    }
  }
  
  .input-slide {
    display: inline-block;
    float: left;
    height: 34px;
    position: relative;
    .input-slide-content {
      margin-right: -6px;
      background: #fff;
      p {
        width: 100px;
        min-width: 100px;
        height: 34px;
        line-height: 34px;
        border-radius: 4px;
        border: 1px solid #dcdfec;
        border-top-right-radius:0;
        border-bottom-right-radius:0;
        padding: 0 4px;
        &:hover {
          cursor: pointer;
        }
      }
      ul {
        z-index: 9;
        position: absolute;
        background:rgba(255,255,255,1);
        box-shadow:0px 4px 12px 0px rgba(54,68,123,0.22);
        li {
          width: 100px;
          height: 30px;
          line-height: 30px;
          padding: 0 6px;
          &:hover {
            background: #f5f7fa;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
