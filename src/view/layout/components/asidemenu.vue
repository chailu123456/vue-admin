
<template>
  <div class="do-aside">
    <ul>
      <router-link tag="li" v-for="(item, index) in subMenuLists" :key="index" @click.native="selectItem(item, 'parent')" :to='`/${currentsence}/${item.alias}`'>
        <span>{{item.name}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      subMenuLists: [
        {id:1,name:'Button 按钮',alias: 'button'},
        {id:2,name:'Radio & Checkbox',alias: 'radio'},
        {id:3,name:'Table表格',alias: 'table'},
        {id:4,name:'Pagination 分页',alias: 'pagination'},
        {id:5,name:'Loading 加载',alias: 'loading'},
        {id:5,name:'Cascader 级联选择器',alias: 'cascader'},
        {id:5,name:'Tabs 标签',alias: 'tabs'},
      ],
      currentsence: 'compnent'
    }
  },
  created() {
    
  },
  methods:{
    selectItem() {

    }
  },
  computed:{

  }
  
}
</script>

<style lang="scss" type="text/sss" scoped>
.do-aside{
  ul {
    li {
      height: 40px;
      line-height:40px;
      font-size: 12px;
      color: #fff;
      text-align: left;
      &:hover {
        cursor: pointer;
        background: #506f8e;
      }
      span {
        padding-left: 10px;
      }
    }
  }
}
</style>