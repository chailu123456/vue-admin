<template>
  <div class="do-ui-tab">
    <Tab :tabDatas="tabDatas"></Tab>
    <div class="slider">
      <h1>Slider滑块</h1>
      <Slider :percentage="percentage"></Slider>
    </div>
    <div class="drap-table">
      <h1>拖拽移动</h1>
      <transition-group name="drog" tag="ul">
        <li draggable="true" v-for="(item, index) in lists" @dragstart="dragStart($event, index)" @dragover="allowDrop" @drop="drop($event, index)" v-bind:key="item">{{item}}</li>
      </transition-group>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      percentage: 10,
      lists: ['111111111', '222222222', '333333333', '4444444444444', '55555555','666666666666','777777777'],
      tabDatas: {
        tabs:[
          {index:0,name:'平台场景管理'},
          {index:1,name:'渠道管理'},
          {index:2,name:'官网后台'},
          {index:3,name:'角色管理'}
        ]
      }
    }
  },
  created() {
    
  },
  methods: {
    currentTab(data) {
      console.log(data)
    },
    //取消默认行为
    allowDrop(e){
      e.preventDefault();
    },
    //开始拖动
    dragStart(e, index){
      let tar = e.target;
      let dragIndex = e.dataTransfer.setData('curIndex', index)  //接收下表值
    },
    //放置
    drop(e, index){
      this.allowDrop(e)
      let arr = JSON.parse(JSON.stringify(this.lists));
      let curIndex = e.dataTransfer.getData('curIndex');
      let temp = arr.splice(curIndex, 1)
      arr.splice(index, 0, temp[0])
      this.lists = arr;
    }
  },
  watch:{
    'defaultVal'(val) {
      if (val) return this.hanVal = false
    }
  }
}
</script>
<style lang="scss" scoped> 
.drap-table {
  margin-top: 40px;
  ul {
    min-height: 100px;
    width: 100%;
    margin: 4px auto;
    background: #eee;
  }
  li {
    cursor: grab;
    min-height: 2em;
    margin-top: 4px;
    background: #abcded;
    text-align: center;
  }
  /*组件过渡类*/
  .drog-move {
    transition: transform 1s;
  }
}

</style>
