<template>
  <div class="do-editor">
    <h1>富文本编辑器</h1>
    <div class="editor">
      <quill-editor
        v-model="cont"
        ref="myTextEditor"
        @change="onChange()"
      ></quill-editor>
    </div>
    <Btn class="editor-pull" @handleClick="publish" text="发表"></Btn>
    <Btn class="editor-pull" @handleClick="look" text="查看"></Btn>
    <div class="articlist" v-if="showCont">
      <div v-html="showCont"></div>
    </div>
  </div>
</template>

<script>
import Login from '@/api/login'
import geek from '@/api/geek'
export default {
  name: 'other',
  data () {
    return {
      cont: '',
      showCont: ''
    }
  },
  computed: {
    editor() {
      return this.$refs.myTextEditor.quill
    }
  },
  // 页面加载后执行 为编辑器的图片图标和视频图标绑定点击事件
  mounted() {
    // getModule 为编辑器的内部属性
    this.$refs.myTextEditor.quill.getModule('toolbar').addHandler('image', this.imgClick) // 为图片ICON绑定事件
    // this.$refs.myTextEditor.quill.getModule('toolbar').addHandler('video', this.videoHandler)  // 为视频ICON绑定事件
  },
  methods: {
    publish() {
      let articCont = {
        contents : this.cont
      }
      this.Article(articCont)
    },
    async Article(parmas) {
      let date = await geek.writetxt(parmas)
      if (data) {
        this.Toast({
          msg:'成功',  // message显示信息
          state:'success' // 状态 success：成功  err：错误  tips：提示  warn：警告
        })
      }
      console.log(date)
    },
    onChange() {

    },
    look() {
      this.getArticle()
    },
    async getArticle() {
      let date = await geek.writegettxt()
      this.showCont = date
    },
    imgClick() {
      /*内存创建input file*/
      var input = document.createElement('input');
      input.type = 'file';
      input.name = this.fileName;
      input.accept = 'image/jpeg,image/png,image/jpg,image/gif';
      input.onchange = this.onFileChange;
      input.click()
    },
    /*选择上传图片切换*/
    onFileChange(e) {
      let that = this
      var fileInput = e.target;
      if (fileInput.files.length === 0) {
        return
      }
      this.editor.focus();
      if (fileInput.files[0].size > this.maxUploadSize) {
        this.$alert('图片不能大于500KB', '图片尺寸过大', {
          confirmButtonText: '确定',
          type: 'warning',
        })
      }
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]) //转BASE64
      reader.onload=function(e) {
        that.upImg(e)
      }
    },
    async upImg (parmas) {
      let a = {
        base: parmas.target.result
      }
      try {
        let data = await Login.upload(a)
        let imgUrl = 'http://localhost:3000/'+ data.url
        this.editor.insertEmbed(this.editor.getSelection().index, 'image', imgUrl)
      }catch(err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.do-editor {
  .editor {
    width: 100%;
    min-height: 350px;
    .quill-editor {
      height: 300px;
      min-height: 300px;
    }
  }
}

</style>
