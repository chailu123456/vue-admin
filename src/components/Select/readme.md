<script>

	export default {
    props:{
      selectList:{   // 默认下拉菜单数据
        type: Array,
        default () {
          return [
            {index:0,name:'1'},
            {index:1,name:'222'},
            {index:2,name:'官网333后台'},
            {index:3,name:'444444444444'}
          ]
        }
      },
      attrVal: {   // 对象属性
        type: String,
        default() {
          return 'index'
        }
      },
      defaultVal: {  // 下拉菜单默认显示值
        type: String,
        default() {
          return ''
        }
      }
    },
		data () {
			selectSearch: '',
				
		}
	}
</script>