<template>
  <div class="order-operation">
    <ul class="from">
      <li>
        <span>姓名：</span>
        <input type="text" v-model="formdata.username">
      </li>
      <li>
        <span>省份：</span>
        <input type="text" v-model="formdata.province">
      </li>
      <li>
        <span>城市：</span>
        <input type="text" v-model="formdata.city">
      </li>
      <li>
        <span>地址：</span>
        <input type="text" v-model="formdata.adress">
      </li>
      <li>
        <span>邮编：</span>
        <input type="text" v-model="formdata.email">
      </li>
    </ul>
    <div class="operation-button">
      <Btn @handleClick="no" class="canale" text="取消"></Btn>
      <Btn @handleClick="yes" text="确认"></Btn>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'add',
  props: ['data'],
  data() {
    return {
      formdata: {
        username: '',
        province: '',
        city: '',
        adress: '',
        email: ''
      }
    }
  },
  created () {
    if (this.data) {
      this.formdata.username = this.data.username
      this.formdata.province = this.data.province
      this.formdata.adress = this.data.adress
      this.formdata.city = this.data.city
      this.formdata.email = this.data.email
      this.formdata.id = this.data.id
    }
    
  },
  methods:{
    yes() {
      let that = this
      that.$emit('childSay', that.formdata)
    },
    no() {
      let that = this
      that.$emit('childBye', null)
    }
  }
}
</script>

<style lang="scss" scoped>
.order-operation {
  ul.from {
    margin-top: 20px;
    width: 100%;
    font-size: 12px;
    li {
      margin: 10px 0;
      height: 34px;
      line-height: 34px;
      span {
        display: inline-block;
        margin: 0 4px;
      }
      input {
        width: 80%;
        height: 34px;
        line-height: 34px;
        padding: 0 10px;
        border-radius:4px;
        font-size: 12x;
        border:1px solid rgba(220,223,236,1);
        &:hover {
          cursor: pointer;
          border: 1px solid #738ae0;
        }
      }
      input::-webkit-input-placeholder {
        padding: 0 10px;
        font-size: 12x;
      }
    }
  }
  .operation-button {
    margin-top: 20px;
    text-align: right;
    .do-ui-button {
      display: inline-block;
    }
    .canale {
      width: 90px;
      button {
        background: #fff !important;
        color: #606266;
      }
    }
  }
}
</style>


