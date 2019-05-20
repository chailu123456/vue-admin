
<template>
  <div class="do-aside">
    <ul>
      <router-link tag="li" v-for="(item, index) in subMenuLists" :key="index" @click.native="selectItem(item, 'parent')" :to='`/${currentsence}/${item.alias}`'>
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
  created() {
    console.log(this.subMenuLists)
  },
  methods:{
    selectItem() {

    }
  },
  computed:{
    ...mapState({
      subMenuLists: state=>JSON.parse(state.subMenuLists),
      currentsence: state=>state.currentsence
    })
  }
  
}
</script>

<style lang="scss" type="text/sss" scoped>
.do-aside{
  ul {
    li {
      height: 60px;
      line-height:60px;
      color: #fff;
      text-align: center;
      &:hover {
        cursor: pointer;
        background: #506f8e;
      }
    }
  }
}
</style>