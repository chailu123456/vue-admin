<template>
  <div>
    <Page :totalPages="allpages" :jump="true" @page="currentpages"></Page>
  </div>
</template>

<script>
export default {
  name: 'page',
  data () {
    return {
      allpages: 12,
    }
  },
  methods:{
    currentpages(page) {
      console.log(page)
    }
  }

}
</script>

<style lang="scss">

</style>
