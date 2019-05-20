<template>
  <div class="login">
    <input type="text" placeholder="请输入账号"><br>
    <input type="password" placeholder="请输入密码"><br>
    <Btn @handleClick="login" class="login_btn" :widthStyle="widthStyle" text="登陆"></Btn>
  </div>
</template>

<script>

import Login from '@/api/login'
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      widthStyle:[{
        width: '180px',
        borderRadius: '100px'
      }],
      from:{
        passwd: "846304126",
        uid: "146"
      }
    }
  },
  created() {

  },
  methods:{
    login() {
      let data = this.from
      // this.logins(this.from)
      this.$store.dispatch('Login', data).then(v => {
        this.$router.push('/analysis')
      })
      // this.$router.push('/home')
    },
    async logins (parmas) {
      // console.log(parmas)
      try {
        let data = await Login.login(parmas)
        console.log(data)
        this.$router.push('/home')
      }catch(err) {

      }
    }
  },
  ...mapActions([
    'Login'
  ])
}
</script>

<style lang="scss">
.login {
  margin-top: 20%;
  text-align: center;
  input {
    width:160px;
    margin:6px 0;
    height:34px;
    line-height:34px;
    border:1px solid #dddddd;
    padding: 0 10px;
    border-radius: 40px;
    font-size: 12px;
    outline: none;
    &:hover{
      border: 1px solid #738AE0;
    }
  }
  .login_btn {
    margin-top: 10px;
  }
}
</style>
