<template>
  <div class="table-ui">
    <div class="table-header">
      <Inputs :value="val" class="slide-down" placeholder="请输入搜索内容" @input="onInput" :widthStyle="inputStyle">
        <div slot="contents" class="input-slide-content">
          <p @click="btnSlide">{{searchVal}}</p>
          <ul v-if="slideShow">
            <li v-for="(item,index) in selectContent" @click="slidebtn(item,index)" :key="index" :class="{'active': currIndex===index}">{{item.value}}</li>
          </ul>
        </div>
      </Inputs>
      <Btn @handleClick="search" class="buttons search" text="搜索"></Btn>
      <Btn @handleClick="append" class="buttons append" text="新增"></Btn>
      <Btn @handleClick="btn" class="buttons" :text="defaultText"></Btn>
      <Btn @handleClick="yes" class="buttons" v-if="seleadd" text="确认"></Btn>
    </div>

    <Sheel :tableData="tableDatas[0]" :checkdata="checkdata" :textAlign="direction" :opation="opation"></Sheel>
    <Page :totalPages="allpages" :currentIndex="defaultPage" :jump="false" @page="currentpages"></Page>
  </div>
</template>
<script>
import Vue from 'vue'
import geek from '@/api/geek'
import {Json} from './json.js'
const { columns } = Json
import Add from './add'
export default {
  data() {
    return {
      defaultText: '批量删除',
      tableDatas: [{
        columns: columns(this)[0],
        tbodydata: []
      }],
      checkdata: true,
      allId:[],
      direction: 'center',
      seleadd: false,
      opation:{
        checkClick:this.checkClick,
        setting:this.setting
      },
      allpages: 3, // 总页数
      defaultPage: 1, // 默认显示第一页
      form:{
        page: 1,
        num: 4
      },
      inputStyle:[{
        width: '160px',
        borderRadius: '4px'
      }],
      currIndex: -1,
      val: '',
      searchVal: 'id',
      slideShow: false,
      selectContent:[
        {id:1,value:'ID'},
        {id:2,value:'姓名'},
        {id:3,value:'省份'},
        {id:4,value:'邮编'}
      ]
    }
  },
  created () {
    this.getdata(this.form)
    this.a1()
  },
  methods: {

    async a1() {
      let v = await this.b()
      console.log('----')
      console.log(v)
    },
    b() {return '32sasdad'},
    setting(data, render) {
      render.action(data) // 调用action的方法
    },
    slidebtn(item,index) {
      this.form = {
        page: 1,
        num: 4
      }
      switch(item.id) {
        case 1:
          this.searchVal = 'id';
          break;
        case 2:
          this.searchVal = 'username';
          break;
        case 3:
          this.searchVal = 'province';
          break;
        case 4:
          this.searchVal = 'email';
          break;
      }
      this.currIndex = index
      this.slideShow = false
    },
    search() {
      this.form[this.searchVal]= this.val
      console.log(this.form)
      this.getdata(this.form)
    },
    onInput(val) {
     this.val = val
    },
    btnSlide() {
      this.slideShow = !this.slideShow
    },
    remove(val) {
      let that = this
      this.$loading.show({
        writetext: {
          prompt:'此操作将永久删除该文件, 是否继续?',
          title: '提示',
          data: val
        },
        yes (a) {
          let oId = {id:a.id}
          that.deleteOrder(oId)
        }
      })
    },
    async deleteOrder(parmas) {
      let data = await geek.removeorder(parmas)
      this.getdata(this.form)
    },
    edit(v) {
      let that = this
      this.$popup.show({
        writetext: {
          data: v,
          title:'编辑',
          width: '450px',
          height: '360px',
          component: Add
        },
        yes (val) {
          that.editOrder(val)
        },
        no(a) {
          console.log(a)
        }
      })
    },
    async editOrder (parmas) {
      let data = await geek.editorder(parmas)
      this.getdata(this.form)
    },
    append() {
      let that = this
      this.$popup.show({
        writetext: {
          data: '',
          title:'新增',
          width: '450px',
          height: '360px',
          component: Add
        },
        yes (val) {
         that.addOrder(val)
        }
      })
    },
    async addOrder(parmas) {
      try {
        let data = await geek.addorder(parmas)
        this.getdata(this.form)
      } catch(e){

      }
    },
    btn () {
      if (this.defaultText === '取消') {
        this.allId = []
      }
      this.seleadd = !this.seleadd
      this.checkdata = !this.checkdata
      this.defaultText =  this.defaultText === '取消' ? '批量操作' : '取消'
    },
    yes() {
      let orderIds = this.allId.map((item)=>{
        return item.id
      })
      this.allOrder({arrayId:orderIds})
    },
    async allOrder(parmas) {
      let data = await geek.removeallorder(parmas)
      this.getdata()
    },
    checkClick (data) {
      this.allId = data
    },
    currentpages(page) {
      this.form.page = page
      this.getdata(this.form)
    },
    async getdata(parmas) {
      let that = this
      try{
        let data = await geek.order(parmas)
        if (data) {
          that.tableDatas[0].tbodydata = data.result
          that.allpages =  Math.ceil(data.totalpage/4) // 向上取整
        } else {
          that.tableDatas[0].tbodydata = []
        }
      }catch(err) {
        console.log(err)
      }
    }
  }
}
</script>
<style lang="scss"> 
.table-ui {
  padding: 10px;
  .table-header {
    width: 100%;
    height: 34px;
    margin: 10px 0;
    .slide-down {
      float: left;
    }
    .buttons {
      float: right;
    }
    .search {
      float:left;
      margin-left: 10px;
    }
    .append {
      float: right;
    }
    .active {
      background: #efefef;
    }
  }
}
</style>
