
<template>
  <div class="do-nav">
    <ul>
      <router-link tag="li" v-for="(item, index) in menuLists" :key="index" @click.native="selectItem(item, 'parent')" :to='`/${item.alias}`'>
        <div>{{item.name}}</div>
      </router-link>
      <div class="person">
        <span @click.stop="operationUser">
          <img :src="logourl"  alt="">
          <input ref="input" type="file" hidden @change="toBase64($event)">
        </span>
        <p>{{name}}</p>
        <div class="userList" v-if="usershow">
          <em>设置</em>
          <em @click="exitLogin">退出登陆</em>
        </div>
      </div>
    </ul>
  </div>  
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import logoUrl from '@/assets/ww.jpg'
import Login from '@/api/login'
export default {
  data() {
    return {
      name: '府谷市民小柴',
      logourl: logoUrl,
      usershow: false
    }
  },
  created() {
    
  },
  methods:{
    selectItem (val) {
      this['SET_CURRENTSENCE'](val.alias)
      this['SET_SUBMENULISTS'](JSON.stringify(val.next)) // 等同于this.$store.commit('increment', val.next)
      localStorage.setItem('subMenuLists', JSON.stringify(val.next))
      localStorage.setItem('currentsence', JSON.stringify(val.alias))
    },
    upLogo () {
      this.$refs.input.click()
    },
    operationUser() {
      this.usershow = true
    },
    async toBase64 (e) {
      let that = this
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0])
      reader.onload=function(e) {
        that.upImg(e)
      }
    },
    async upImg (parmas) {
      console.log(parmas)
      let a = {
        base: parmas.target.result
      }
      console.log(a)
      try {
        let data = await Login.upload(a)
        console.log(data)
        this.logourl = 'http://localhost:3000/'+ data.url
      }catch(err) {

      }
    },
    exitLogin () {
      this.$router.push({
        path: '/'
      })
    },
    handleBodyClick () {
      this.usershow = false
    },
    ...mapMutations([
        'SET_SUBMENULISTS',
        'SET_CURRENTSENCE'
      ]),
  },
  mounted () {
    document.addEventListener('click',this.handleBodyClick)
  },
  destroyed () {
    document.removeEventListener('click', this.handleBodyClick)
  },
  computed:{
    ...mapState({
      menuLists: state=>JSON.parse(state.menuLists)
    }),
    ...mapGetters([
      'SET_MENULISTS'
    ])
    
  }
}
</script>

<style lang="scss" type="text/sss" scoped>
.do-nav{
  height:60px;
  line-height: 60px;
  ul {
    li {
      display: inline-block;
      width: 100px;
      height: 60px;
      line-height:60px;
      text-align: center;
      color: #fff;
      &:hover {
        cursor: pointer;
        background: #506f8e;
      }
    }
    .person {
      float: right;
      margin: 12px;
      position: relative;
      text-align: center;
      span {
        float: right;
        width: 32px;
        height:32px;
        overflow: hidden;
        border-radius: 50%;
        img {
          float: right;
          width: 32px;
          height:32px;
        }
      }
      p {
        float: right;
        font-size: 12px;
        color: #fff;
        height: 20px;
        margin-top: -12px;
        margin-right: 12px;
      }
      .userList {
        position: absolute;
        z-index: 99;
        width: 100px;
        top: 50px;
        padding: 4px 0;
        background: #fff;
        border: 1px solid rgba(0,0,0,.15);
        border-radius: 4px;
        em {
          font-size: 12px;
          font-style: normal;
          display: block;
          line-height: 30px;
          &:hover {
            background: #dedede;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>