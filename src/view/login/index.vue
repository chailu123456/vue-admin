<template>
  <div class="login">
    <!-- <input type="text" placeholder="请输入账号"><br>
    <input type="password" placeholder="请输入密码"><br>
    <Btn @handleClick="login" class="login_btn" :widthStyle="widthStyle" text="登陆"></Btn> -->
    <div :class="{container: isActive, 'right-panel-active': isactive}" id="container">
      <div class="form-container sign-up-container">
        <form>
          <h1>注册</h1>
          <span>第三方账号注册</span>
          <input type="value" v-model="from.uid" oninput = "value=value.replace(/[^\d]/g,'')" placeholder="账号" />
          <input type="password" v-model="from.password" onkeyup="value=value.replace(/[\u4e00-\u9fa5]/ig,'')"  placeholder="密码" />
          <button @click.prevent="register">注册</button>
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form>
          <h1>登录</h1>
          <span>第三方账号登录</span>
          <input type="value" v-model="from.uid" oninput = "value=value.replace(/[^\d]/g,'')" placeholder="账号" />
          <input type="password" v-model="from.password" onkeyup="value=value.replace(/[\u4e00-\u9fa5]/ig,'')"  placeholder="密码" />
          <a href="#">忘记密码？</a>
          <button @click.prevent="login">登录</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>欢迎回来！</h1>
            <p>请您先登录的个人信息，进行操作。</p>
            <button class="ghost" @click.prevent="signIn">登录</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>你好朋友！</h1>
            <p>输入您的个人信息注册成为会员。</p>
            <button class="ghost" @click.prevent="signUp">注册</button>
          </div>
        </div>
      </div>
    </div>
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
        password: "",
        uid: "",
        url: 'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg'
      },
      isactive: false,
      isActive:true
    }
  },
  created() {

  },
  methods:{
    signIn () {
      this.isactive = false
    },
    signUp () {
      this.isactive = true
    },
    register () {
			let data = this.from
      if (data.uid && data.password) {
        this.$store.dispatch('Register', data).then(v => {
          if (v) {
						this.Toast({
							msg:'注册成功',  // message显示信息
							state:'success' // 状态 success：成功  err：错误  tips：提示  warn：警告
						})
						this.$router.push('/compnent')
					} 
        })
      } else {
				this.Toast({
					msg:'账号或密码不能为空',  // message显示信息
					state:'tips' // 状态 success：成功  err：错误  tips：提示  warn：警告
				})
      }
    },
    login() {
      let data = this.from
      if (data.uid && data.password) {
        this.$store.dispatch('Login', data).then(v => {
					if (v) this.$router.push('/compnent')
        })
      } else {
        this.Toast({
					msg:'账号或密码不能为空',  // message显示信息
					state:'tips' // 状态 success：成功  err：错误  tips：提示  warn：警告
				})
      }
    }
  },
  ...mapActions([
    'Login'
  ])
}
</script>

<style scoped>

* {
	box-sizing: border-box;
}
.logo {
  margin-top: 10%;
}
body {
	background: #f6f5f7;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	margin: -20px 0 50px;
}

h1 {
	font-weight: bold;
	margin: 0;
}

h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
/* 	text-decoration: none; */
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container {
  float: left;
    margin-top: 10%;
	background-color: #fff;
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 50%;
	max-width: 100%;
	min-height: 480px;
  margin-left: 25%;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
	background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  	transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}

.social-container {
	margin: 20px 0;
}

.social-container a {
	border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
}


</style>
