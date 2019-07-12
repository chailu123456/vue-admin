<template>
  <div class="do-person-center">
    <h1>个人中心</h1>
    <div class="person-image">
      <img :src="logoUrl" alt="">
      <input type="file"  @change="toBase64($event)">
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import Login from '@/api/login'
export default {
  name: 'other',
  data () {
    return {
      logoUrl: 'http://static.igeekee.cn/scenelogo/default.png-180x180style'
    }
  },
  methods: {
    toBase64(e) {
      let that = this
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]) //转BASE64
      reader.onload=function(e) {
        that.upImg(e)
      }
    },
    async upImg (parmas) {
      let a = {
        base: parmas.target.result
      }
      try {
        let data = await Login.upload(a)
        let data2 = await Login.imglist()
        console.log(data2)
        this.logoUrl = 'http://localhost:3000/'+ data.url
        localStorage.setItem('logourl', this.logoUrl)
        this.$store.commit('SET_LOGOURL', this.logoUrl); //提交`minusPrice,payload为2
      }catch(err) {
        console.log(err)
      }
    }
  }

}
</script>

<style lang="sass">

</style>
