<template>
  <div class="order-operation">
    <ul class="from">
      <li>
        <span>姓名</span>
        <input type="text" v-model="formdata.username">
      </li>
      <li>
        <span>省份</span>
        <input type="text" v-model="formdata.province">
      </li>
      <li>
        <span>城市</span>
        <input type="text" v-model="formdata.city">
      </li>
      <li>
        <span>地址</span>
        <input type="text" v-model="formdata.adress">
      </li>
      <li>
        <span>邮编</span>
        <input type="text" v-model="formdata.email">
      </li>
    </ul>
    <button @click="yes">sss</button>
  </div>
</template>

<script>
export default {
  name: 'add',
  props: ['data'],
  data() {
    return {
      formdata: {
        username: '武状元',
        province: '陕西省',
        city: '西安市',
        adress: '长安区',
        email: '723000'
      }
    }
  },
  created () {
    if (this.data) {
      this.formdata = this.data
    }
    
  },
  methods:{
    yes() {
      console.log(this.formdata)
      this.$emit('child-say', this.formData)
    }
  }
}
</script>

<style lang="scss" scoped>
.order-operation {
  ul.from {
    width: 100%;
    font-size: 12px;
    li {
      margin: 10px 0;
      width: 80%;
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
      }
      input::-webkit-input-placeholder {
        padding: 0 10px;
        font-size: 12x;
      }
    }
  }
}
</style>


