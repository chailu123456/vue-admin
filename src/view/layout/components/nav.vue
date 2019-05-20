
<template>
  <div class="do-nav">
    <ul>
      <router-link tag="li" v-for="(item, index) in menuLists" :key="index" @click.native="selectItem(item, 'parent')" :to='`/${item.alias}`'>
        <div>{{item.name}}</div>
      </router-link>  
    </ul>
  </div>  
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  created() {},
  methods:{
    selectItem (val) {
      console.log(val)
      this['SET_CURRENTSENCE'](val.alias)
      this['SET_SUBMENULISTS'](JSON.stringify(val.next)) // 等同于this.$store.commit('increment', val.next)
      localStorage.setItem('subMenuLists', JSON.stringify(val.next))
      localStorage.setItem('currentsence', JSON.stringify(val.alias))
    },
    ...mapMutations([
        'SET_SUBMENULISTS',
        'SET_CURRENTSENCE'
      ]),
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
  }
}
</style>