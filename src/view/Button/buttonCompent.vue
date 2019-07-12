<template>
  <div class="ui-button">
    <Btn class="login_btn" @handleClick="btn" :widthStyle="widthStyle2" text="主要按钮"></Btn>
    <Btn class="login_btn" @handleClick="btn" :widthStyle="widthStyle2" text="成功按钮"></Btn>
    <Btn class="login_btn" @handleClick="btn" :widthStyle="widthStyle3" text="信息按钮"></Btn>
    <Btn class="login_btn" @handleClick="btn" :widthStyle="widthStyle4" text="警告按钮"></Btn>
    <Btn class="login_btn" @handleClick="btn" :widthStyle="widthStyle5" text="危险按钮"></Btn>
    <Btn class="login_btn" @handleClick="btn" :widthStyle="widthStyle6" text="搜索按钮"></Btn>
    <br>
    <h1>复合型输入框</h1>
    <Inputs :defaultVal='defaultVal' placeholder="请输入搜索内容" :widthStyle="inputStyle">
      <div slot="contents" class="input-slide-content">
        <p @click="btnSlide">{{searchVal}}</p>
        <ul v-if="slideShow">
          <li v-for="(item,index) in selectContent" @click="slidebtn(item,index)" :key="index" :class="{'active': currIndex===index}">{{item.value}}</li>
        </ul>
      </div>
    </Inputs>
    <h1>正常输入框</h1>
    <Inputs placeholder="请选择" v-model="val" :widthStyle="inputStyle"></Inputs>
    <h1>禁止输入</h1>
    <Inputs :disabled="true" :widthStyle="inputStyle"></Inputs>
  </div>
</template>
<script>
import geek from '@/api/geek'

export default {
  data() {
    return {
      widthStyle:[{
        width: '90px',
        borderRadius: '4px'
      }],
      val: '666',
      defaultVal: '海底捞',
      searchVal: '场景名称',
      slideShow: false,
      selectContent:[
        {id:1,value:'场景名称'},
        {id:2,value:'URL'},
        {id:3,value:'备注'},
        {id:4,value:'品牌ID'}
      ],
      inputStyle:[{
        width: '160px',
        borderRadius: '4px'
      }],
      widthStyle2:[{
        width: '90px',
        background:'#409eff',
        color: '#fff'
      }],
      widthStyle3:
        [{
          width: '90px',
          background:'#67c23a',
          color: '#fff'
        }],
      widthStyle4: 
        [{
        width: '90px',
        background:'#e6a23c',
        color: '#fff'
      }],
       
      widthStyle5: 
        [{
        width: '90px',
        background:'#f56c6c',
        color: '#fff'
       }],
      widthStyle6: 
        [{
          width: '90px',
          background:'#f56c6c',
          color: '#fff',
          borderRadius:'20px'
        }],
      currIndex: -1
    }
  },
  methods: {
    btn () {
      this.Toast({
        msg:'成功',  // message显示信息
        state:'success' // 状态 success：成功  err：错误  tips：提示  warn：警告
      })
    },
    slidebtn(item,index) {
      console.log(item)
      this.currIndex = index
      this.searchVal = item.value
      this.slideShow = false
    },
    btnSlide() {
      console.log('sss')
      this.slideShow = !this.slideShow
    }
  }
}
</script>
<style lang="scss" scoped>
.ui-button {
  padding: 10px;
  height: 100%;
  .active {
    background: #efefef;
  }
}
</style>
