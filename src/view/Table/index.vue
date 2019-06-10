<template>
  <div>
    <Btn @handleClick="btn" :text="defaultText"></Btn>
    <Sheel :tableData="tableDatas[0]" :checkdata="checkdata" :opation="opation"></Sheel>

  </div>
</template>
<script>
import Vue from 'vue'
import geek from '@/api/geek'
import {Json} from './json.js'
const { columns } = Json
import Adda from './add'
export default {
  data() {
    return {
      defaultText: '批量操作',
      tableDatas: [{
        columns: columns(this)[0],
        tbodydata: []
      }],
      checkdata: true,
      opation:{
        checkClick:this.checkClick,
        setting:this.setting
      },
      formdata:{
        username: '李彬',
        province: '陕西省',
        city: '西安市',
        adress: '雁塔区',
        email: '723000'
      }
    }
  },
  created () {
    this.getdata()
  },
  methods: {
    setting(data, render) {
      console.log(render)
      render.action(data) // 调用action的方法
    },
    addData(v) {
      this.$popup.show({
        writetext: {
          data: '',
          component: Adda
        },
        yes (a) {
         console.log('ssssssssssssssss')
         console.log(a)
        }
      })
    },
    async addOrder(parmas) {
      let data = await geek.addorder(parmas)
      console.log(data)
      this.getdata()
    },
    edit(v) {
     this.$popup.show({
        writetext: {
          data: v,
          component: Adda
        },
        yes (a) {
         console.log(a)
        }
      })
    },
    btn () {
      this.checkdata = !this.checkdata
      this.defaultText =  this.defaultText === '取消' ? '批量操作' : '取消'
    },
    checkClick (data) {
      console.log(data)
    },
    async getdata() {
      let that = this
      try{
        let data = await geek.order()

        that.tableDatas[0].tbodydata = data
      }catch(err) {

      }
    }
  }
}
</script>
<style lang="sass"> 

</style>
