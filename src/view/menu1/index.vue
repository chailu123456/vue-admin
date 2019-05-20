<template>
  <div>
    <h1>8988888888888888888888</h1>
    <Btn @handleClick="login" class="login_btn" :widthStyle="widthStyle" text="点击"></Btn>
  </div>
</template>
<script>
import geek from '@/api/geek'
export default {
  data() {
    return {
      widthStyle:[{
        width: '180px',
        borderRadius: '100px'
      }]
    }
  },
  methods: {
    login() {
      this.cityData()
    },
    async cityData() {
      try{
        let data = await geek.city()
        console.log(data)
      }catch(err) {

      }
    }
  }
}
</script>
<style lang="sass"> 

</style>
