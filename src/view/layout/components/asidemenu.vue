
<template>
  <div class="do-aside">
    <ul>
      <router-link tag="li" v-for="(item, index) in subMenuLists" :key="index" @click.native="selectItem(item, 'parent')" :to='`/${currentsence}/${item.alias}`'>
        <div>{{item.name}}</div>
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
        {id:1,name:'按钮',alias: 'button'},
        {id:2,name:'Radio 单选框',alias: 'radio'},
        {id:3,name:'Checkbox',alias: 'checkbox'},
        {id:4,name:'Input 输入框',alias: 'input'},
        {id:5,name:'Select 选择器',alias: 'select'},
        {id:5,name:'Cascader 级联选择器',alias: 'cascader'},
        {id:5,name:'Switch 开关',alias: 'switch'},
      ]
    }
  },
  created() {
    
  },
  methods:{
    selectItem() {

    }
  },
  computed:{
    ...mapState({
      subMenuLists: state=>JSON.parse(state.subMenuLists),
      currentsence: state=>state.currentsence
    })
  }
  
}
</script>

<style lang="scss" type="text/sss" scoped>
.do-aside{
  ul {
    li {
      height: 60px;
      line-height:60px;
      color: #fff;
      text-align: center;
      &:hover {
        cursor: pointer;
        background: #506f8e;
      }
    }
  }
}
</style>