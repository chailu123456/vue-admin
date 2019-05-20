<template>
  <div class="do-layout">
    <header class="do-layout-header">
      <navTab></navTab>
    </header>
    <aside class="layout-aside">
      <asidemenu></asidemenu>
    </aside>
    <content class="layout-content">
      <router-view></router-view>
    </content>
  </div>
</template>

<script>
import navTab from './components/nav'
import asidemenu from './components/asidemenu'
export default {
  name: 'login',
  data () {
    return {
      
    }
  },
  created () {

  },
  methods:{
    
  },
  components:{
    navTab,
    asidemenu
  }
}
</script>

<style lang="scss">
.do-layout {
  width: 100%;
  height: 100%;
  aside {
    display: inline-block;
    width:160px;
    height: calc(100% - 60px);
    background: #32323d;
  }
  .do-layout-header {
    height: 60px;
    background: #2a5788;
  }
  .layout-content {
    display: inline-block;
    width:calc(100% - 160px);
    height: calc(100% - 60px);
    float: right;
    background: #ccc;
  }
  
}
</style>
