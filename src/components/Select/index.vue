<template>
  <div class="do-ui-select">
    <div class="select-val" @click.stop="selectbtn">
      <input type="text" v-model="Val" placeholder="请选择">
      <i class="iconfont icon-down1" v-if="hanVal"></i>
      <i class="iconfont icon-close" @click.stop="clearVal" v-if="!hanVal"></i>
    </div>
    <ul class="select-menu" v-if="listShow">
      <li v-for="(item,index) in NewItems" @click.stop="selectTab(item)" :key="index">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SelectDown',
  props:{
    selectList:{
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
    attrVal: {
      type: String,
      default() {
        return 'index'
      }
    },
    defaultVal: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data () {
    return {
      hanVal: true,
      listShow: false,
      Val: this.defaultVal,
      selectArr: this.selectList
    }
  },
  created() {
    if (this.Val) this.hanVal = false
  },
  mounted () {
    document.addEventListener('click', this.handleBodyClick)
  },
  destroyed () {
    document.removeEventListener('click', this.handleBodyClick)
  },
  methods: {
    handleBodyClick() {
      if (this.NewItems[0].index<0) {
        this.Val = ''
      }
      this.listShow = false
    },
    clearVal() {
      this.Val = ''
      this.hanVal = false
      this.$emit('selectval', '')
    },
    selectTab(val) {
      this.Val = val[this.attrVal]
      if (val.index<0) {
        val.name = ''
      }
      this.$emit('selectval', val)
      this.listShow = !this.listShow
    },
    selectbtn() {
      this.listShow = !this.listShow
    }
  },
  computed:{
    NewItems() {
     var _this = this;
     var NewItems = [];
     this.selectArr.map(function(item) {
      if (item.name.search(_this.Val) != -1) {
       NewItems.push(item);
      }
     });
      if (NewItems.length == 0 && _this.Val) {
        let NewItems = [{index:-3,name:'暂无数据'}]
        return NewItems
      }
     return NewItems
    }
  },
  watch:{
    'Val'(val) {
      console.log(val)
      this.hanVal = true
      if (val) return this.hanVal = false
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.do-ui-select {
  position: relative;
  .select-val {
    width:180px;
    height:34px;
    border-radius:4px;
    border:1px solid rgba(220,223,236,1);
    overflow: hidden;
    
    input {
      float: left;
      padding: 6px;
      border: none;
      width:154px;
      height:34px;
      font-size: 12px;
      &:hover {
        cursor: pointer;
      }
    }
    i {
      float: right;
      height: 34px;
      line-height: 34px;
      margin-right: 6px;
      font-size: 14px;
      color: rgba(220,223,236,1);
      &:hover{
        color: #DCDFEC;
      }
    }
  }
  .select-menu {
    position: absolute;
    z-index: 99;
    width: 180px;
    min-height:34px;
    max-height: 270px;
    overflow: hidden;
    overflow-y: scroll;
    background:rgba(255,255,255,1);
    box-shadow:0px 4px 12px 0px rgba(54,68,123,0.22);
    border-radius:4px;
    li {
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      &:hover {
        cursor: pointer;
        background:rgba(243,245,255,1)
      }
    }
  }
}
</style>
