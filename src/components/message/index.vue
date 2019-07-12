<template>
   <!-- 全局提示框 -->
   <div :class="{'dialog-center':visible}" class="dialog-tips">
     <div class="content">
       <i v-if="dataMsg.state ==='success'" class="iconfont icon-chenggong"></i>
       <i v-if="dataMsg.state ==='err'" class="iconfont icon-xiaoxi-shibai"></i>
       <i v-if="dataMsg.state ==='tips'" class="iconfont icon-icon"></i>
       <i v-if="dataMsg.state ==='warn'" class="iconfont icon-wuuiconsuotanhao"></i>
       <span>{{dataMsg.msg}}</span>
      </div>
   </div>
</template>
<script>
export default {
 data() {
  return {
   visible: false,
   dataMsg: {}
  }
 },
 methods: {

 },
 watch:{
   visible(v) {
     if (v === false) {
       setTimeout(()=>{
         this.$el.remove(this.$el) //删除当前节点
       },1100)
     }
   }
 }
}
</script>

<style lang="scss" scoped>
.dialog-tips{
  position: fixed;
  z-index: 100;
  top: 10px;
  left: 50%;
  transition: all 1s ease;
  min-width: 220px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  white-space: nowrap;
  background:rgba(255,255,255,1);
  box-shadow:0px 2px 10px 0px rgba(115,138,224,0.2);
  border-radius: 4px;
  opacity: 0;
  .dialog-tips-icon{
    width: 54px;
    height: 54px;
    display: inline-block;
    margin-bottom: 13px;
  }
  .content {
    padding: 0 20px;
    span {
      margin: 0 4px;
      color: #5C5C66;
    }
    i {
      font-size:14px;
      color: #3cb48b;
    }
    i.icon-xiaoxi-shibai{
      color: #f15352;
    }
    i.icon-wuuiconsuotanhao{
      color: #f39b43;
    }
    i.icon-icon {
      color: #e8e54b;
    }
  }
}
.dialog-center {
  top: 40px;
  opacity: 1;
  transition: all 1000ms ease;
}

</style>