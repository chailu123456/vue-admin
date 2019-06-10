<template>
  <section>
    <router-view>
      <!-- 这里是会被缓存的视图组件，比如 Home！ -->
    </router-view>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  created () {

  }
}
</script>

<style scoped>
.app-main {
  position: relative;
  overflow: hidden;
}
</style>
