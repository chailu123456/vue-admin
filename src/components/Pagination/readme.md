# page组件文档

```html
<template>
    <Page :totalPages="allpages" :jump="true" @page="currentpages"></Page>
</template>

<script>

	export default {
		data () {
      props:{
        currentIndex:{  
          type: Number,   // 当前页码
          default() {
            return 1
          }
        },
        totalPages: {
          type: Number,   // 总页数
          default() {
            return 20
          }
        },
        jump:{
          type: Boolean,   //是否显示输入框前往...页
          default() {
            return true
          }
        }
      },
		},
        methods () {
            currentpages(){},    //返回当前页码
        }
	}
</script>

<!--  

-->
```
