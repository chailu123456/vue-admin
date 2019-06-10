<template>
  <div class="ui-button">
    <Btn class="login_btn" @handleClick="btn" :widthStyle="widthStyle" text="button组件"></Btn>
  </div>
</template>
<script>
import geek from '@/api/geek'

export default {
  data() {
    return {
      widthStyle:[{
        width: '120px',
        borderRadius: '4px'
      }]
    }
  },
  methods: {
    btn () {
      console.log('dss')
      this.sqltese()
    },
    async sqltese() {
      try {
        let res = await geek.test()
        console.log(res)
      }catch(err) {

      }
    }
  }
}
</script>
<style lang="scss" scoped>
.ui-button {
  padding: 10px;
  height: 100%;

}
</style>
