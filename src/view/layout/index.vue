<template>
  <div class="do-layout">
    <header class="do-layout-header">
      <navTab></navTab>
    </header>

    <content class="layout-content">
      <aside class="layout-aside" v-if="asidemenu">
        <asidemenu></asidemenu>
      </aside>
      <app-main :class="{contentShow: isactive, contents: noaside}"></app-main>
    </content>
  </div>
</template>

<script>
import navTab from './components/nav'
import asidemenu from './components/asidemenu'
import appMain from './components/appMain'
export default {
  name: 'login',
  data () {
    return {
      isactive: true,
      asidemenu: true,
      noaside: false
    }
  },
  created () {

  },
  methods:{
    
  },
  components:{
    navTab,
    asidemenu,
    appMain
  },
  watch: {
    '$route'(v){
      if (v.meta && v.meta.title != '组件') {
        this.asidemenu = false
        this.noaside = true
      } else {
        this.noaside = false
        this.asidemenu = true
      }
      
    }
  }
}
</script>

<style lang="scss">
.do-layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
  aside {
    display: inline-block;
    width:160px;
    height: calc(100% - 60px);
    background: #343957;
  }
  .do-layout-header {
    height: 60px;
    background: #2a5788;
  }
  .layout-content {
    float: right;
    width: 100%;
    height: 100%;
    
  }
  .contentShow {
    width: calc(100% - 160px);
    float: right;
    height: 100%;
    overflow: hidden;
  }
  .contents {
    width: 100%;
  }
  
}
</style>
