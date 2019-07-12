<template>
  <div class="do-ui-slide">
    <div class="slide" @click.stop="slidebtn">
      <span draggable="false" :style="{left:widthdrag+'px'}" ondragstart="return false;" class="dragball" :title="percentage" @mousedown="move"></span>
      <em :style="{width:widthdrag+'px'}"></em>
      <i>{{percentage}}</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props:{
    percentage:{
      type: Number,
      default () {
        return 0
      }
    }
  },
  data () {
    return {
      widthdrag: 0
    }
  },
  created() {
    this.widthdrag = this.percentage*3
  },
  methods: {
    move(e) {
      console.log(e)
      let odiv = e.target;        //获取目标元素
      //算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft;
      let disY = e.clientY - odiv.offsetTop;
      document.onmousemove = (e)=>{       //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX;    
        let top = e.clientY - disY;
        if (left > 290) {
          left = 300
        } 
        if (left<0) {
          left = 0
        }
        this.widthdrag = left
        this.percentage = (this.widthdrag/3).toFixed(0)
        //移动当前元素
        odiv.style.left = left + 'px';
        // odiv.style.top = top + 'px';
      };
      document.onmouseup = (e) => {
          document.onmousemove = null;
          document.onmouseup = null;
      };
    },
    slidebtn(e) {
      let oSpan = document.getElementsByClassName('dragball')[0]
      let left = e.clientX - 258;
      if (left<=0) {
        left = 0
      }
      this.widthdrag = left
      this.percentage = (this.widthdrag/3).toFixed(0)
      oSpan.style.left = left + 'px';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.do-ui-slide {
  .slide {
  width: 300px;
  height: 6px;
  margin: 16px 0;
  background-color: #e4e7ed;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  vertical-align: middle;
  span {
    display: inline-block;
    position: absolute;
    width: 16px;
    height: 16px;
    border: 2px solid #409eff;
    background-color: #fff;
    border-radius: 50%;
    user-select: none;
    top: -6px;
    z-index: 99;
    &:hover {
      cursor: grab;
      transform: scale(1.2);
    }
  }
  em {
    position: absolute;
    width: 0;
    height: 6px;
    background-color: #409eff;
    border-radius: 3px;
    animation: 300ms;
  }
}
}
</style>
