# tab组件文档

```html
<template>
    
</template>

<script>

	export default {
		props: {
            state: {
                type: [String, Number],  sType: 0, // 0关闭状态 1开启状态
                default () {
                    return 0
                }
            },
            switchStyle: {
                type: [String, Boolean, Number],  switchStyle: true, // switch样式 true表有字，false代表无字
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
        }
	}
</script>

      
<!--  

-->
```
