<template>
  <div class="do-ui-paging">
    <em class="arrowLeft" v-if="totalPages>2" :class="{'forbid': currentPage===1}" @click="arrowLeft"> <i class="iconfont icon-return" ></i></em>
    <div class="page-content small-page" v-if="totalPages<7">
      <span v-for="(item,index) in totalPages" @click="currentpage(index+1)" :class="{'active': currentPage===index+1}" :key="index">
        {{index+1}}
      </span>
      <br>
    </div>
    <div class="page-content large-page" v-else>
      <span @click="currentpage(1)" :class="{'active': currentPage===1}">1</span>
      <span v-if="currentPage > 4" @click="currentpage(currentPage-5)" class="ellipsis"><i class="iconfont icon-more iconleft"></i></span>
      <span @click="currentpage(val-2)" :class="{'active': currentPage===this.val-2}">{{this.val-2}}</span>
      <span @click="currentpage(val-1)" :class="{'active': currentPage===this.val-1}">{{this.val-1}}</span>
      <span @click="currentpage(val)" :class="{'active': currentPage===this.val}">{{this.val}}</span>
      <span @click="currentpage(val+1)" :class="{'active': currentPage===this.val+1}">{{this.val+1}}</span>
      <span @click="currentpage(val+2)" v-if="currentPage!=totalPages" :class="{'active': currentPage===this.val+2}">{{this.val+2}}</span>
      <span v-if="currentPage <= totalPages-4" @click="currentpage(currentPage+5)" class="ellipsis"><i class="iconfont icon-more"></i></span>
      <span @click="currentpage(totalPages)" :class="{'active': currentPage===totalPages}">{{totalPages}}</span>
    </div>
    <em class="arrowRight" v-if="totalPages>2" :class="{'forbid': currentPage===totalPages}" @click="arrowRight"><i class="iconfont icon-next"></i></em>
    <div class="go-page" v-if="jump">
      <i>前往</i>
      <input type='text' @blur="pageNum(pages)" @keyup.enter="pageNum(pages)" v-model="pages" oninput = "value=value.replace(/[^\d]/g,'')" />
      <i>页</i>
    </div>
  </div>
</template>
<script>
import vue from 'vue'
import './index.scss'
export default {
  name: 'Page',
  props:{
    currentIndex:{
      type: Number,
      default() {
        return 1
      }
    },
    totalPages: {
      type: Number,
      default() {
        return 20
      }
    },
    jump:{
      type: Boolean,
      default() {
        return true
      }
    }
  },
  data() {
    return {
      val: 4,
      pages: null,
      currentPage: this.currentIndex
    }
  },
  methods: {
    arrowLeft() {
      if (this.currentPage === 1) {
        this.currentPage = 1
      } else {
        this.currentPage--
        this.currentpage(this.currentPage--)
      }
    },
    arrowRight() {
      if (this.currentPage === this.totalPages) {
        this.currentPage = this.totalPages
      } else {
        this.currentPage++
        this.currentpage(this.currentPage++)
      }
    },
    pageNum(pages) {
      if (pages>this.totalPages){
        pages = this.totalPages
        this.pages = pages
      } 
      this.currentpage(pages*1)
    },
    currentpage(num) {
      this.currentPage = num
      this.$emit('page', num)
      let lastnum = this.totalPages -3
      if (num >= lastnum) {
        return this.val = lastnum
      }
      if (num < 4) {
        this.val = 4
      } else {
        this.val = num
      }
      
    }
  }
}
</script>
<style lang="scss" scoped>


</style>
