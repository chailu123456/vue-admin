<template>
  <div class="do-select">
    <h1>radio单选框</h1>
    <label for="One">同意
    <input type="radio" value="One" id="One" v-model="picked">
    </label>
    <label for="two">不同意
    <input type="radio" value="two" id="two" v-model="picked">
    </label>
    <h1>checkbox复选框</h1>
    <input type="checkbox" value="李明" v-model="arr">
    <input type="checkbox" value="张三" v-model="arr">
    <input type="checkbox" value="李小龙" v-model="arr">
    <input type="checkbox" value="姚明" v-model="arr">
    <div class="slider-switch">
      <h1>开关</h1>
      <Switches @currentState="currentState"></Switches>
    </div>
  </div>
</template>

<script>
import vue from 'vue'
export default {
  name: 'radio',
  data () {
    return {
      picked: '',
      arr:[]
    }
  },
  created() {
   
  },
  methods: {
    currentState(data) {
      console.log(data)
    }
  }

}
</script>

<style lang="scss">
.do-select {
  padding: 20px;
}
</style>
