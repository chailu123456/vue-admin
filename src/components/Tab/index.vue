<template>
  <div class="do-ui-tab">
    <ul class="tab-title">
      <li @click="changetab(item, index)" v-for="(item, index) in tabDatas.tabs" :key="index" >
       <span :class="{'active': currIndex === index}">{{item.name}}</span> 
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Tab',
  props:{
    tabDatas:{
      type: Object,
      default() {
        return {
          tabs:[
            {index:0,name:'用户管理'},
            {index:1,name:'配置管理'},
            {index:2,name:'定时任务补偿'},
            {index:3,name:'角色管理'}
          ]
        }
      }
    },
    activeIndex:{
      type: Number,
        default() {
          return 0
        }
    }
  },
  data() {
    return {
      currIndex: this.activeIndex
    }
  },
  methods: {
    changetab(val, index) {
      this.currIndex = index
      this.$emit('currentTab', val)
    }
  }
}
</script>
<style lang="scss"> 
.do-ui-tab {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  ul.tab-title {
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    li {
      float: left;
      min-width: 90px;
      text-align: center;
      display: inline-block;
      margin: 0 10px;
      box-sizing: border-box;
      span {
        display: inline-block;
        box-sizing: border-box;
      }
      span.active {
        color: #409eff;
        box-sizing: border-box;
        border-bottom: 1.5px solid #409eff;
      }
      &:hover {
        cursor: pointer;
      }
    }
    
  }
}
</style>
