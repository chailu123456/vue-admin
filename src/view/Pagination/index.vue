<template>
  <div>
    分页
    <button @click="load">加载</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    load() {
      this.$loading.show()
    }
  }
}
</script>
<style lang="sass"> 

</style>
