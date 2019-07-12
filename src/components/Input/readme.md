
<template>
  <div class="do-ui-input">
    <div class="input-slide"> 
      <slot name="contents"></slot>     复合型输入框 带有下拉框的搜索。通过插槽传值
    </div>
    <div class="input-operation">
      <input v-model="defaultVal" :type="inputType" :style="widthStyle" :disabled="disabled" :placeholder="defaultPlaceholder" class="do-input">
    </div>
  </div>
</template>


<script>

	export default {
    props:{
      placeholder:{   // placeholder占位符值
        type: String,
        default () {
          return '请输入内容'
        }
      },
      inputType: {  // input框类型
        type: String,
        default() {
          return 'type'
        }
      },
      defaultVal: {  // input默认显示值
        type: String,
        default() {
          return ''
        }
      },
      disabled: {  // input是否只读 禁用状态
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
		data () {
			selectSearch: '',
				
		}
	}
</script>