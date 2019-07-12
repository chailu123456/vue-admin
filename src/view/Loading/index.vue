<template>
  <div>
    <Btn class="login_btn" @handleClick="load" text="开启loading"></Btn>
    <Btn class="login_btn" @handleClick="loadConfirm"  text="loading 确认"></Btn>
    <Btn class="login_btn" @handleClick="close" text="关闭loading"></Btn>
    <Btn class="login_btn" @handleClick="framPopule" text="populr 弹框"></Btn>
  </div>
</template>
<script>
import Vue from 'vue'
import add from './add'
export default {
  data() {
    return {
      
    }
  },
  created () {
    console.log(this)
  },
  methods: {
    loadConfirm() {
      this.$loading.show({
        writetext: {
          prompt:'这是一段内容',
          title: '标题名称'
        },
        yes (a) {
          console.log(a)
        }
      })
    },
    load() {
      this.$loading.show()
    },
    close() {
      this.$loading.hide()
    },
    // populr
    framPopule() {
      let that = this
      this.$popup.show({
        writetext: {
          data: {a:2,f:5},
          component: add
        },
        yes (a) {
          console.log(a)
        },
        no(d) {
          console.log(d)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login_btn {
  float:left;
  margin: 30px;
}
</style>
