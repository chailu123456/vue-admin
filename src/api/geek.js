import base from '@/utils/base'

class Geek extends base {
  test () {
    return this.instance.get('/test')
  }

  order(params) {
    return this.instance.get('/order',{params})
  }
  // 添加
  addorder(data) {
    return this.instance.put('/order',data)
  }

  // 删除
  removeorder(data) {
    return this.instance.delete('/order',{data})
  }

  // 批量删除
  removeallorder(data) {
    return this.instance.delete('/allorder',{data})
  }

  // 编辑
  editorder(data) {
    return this.instance.post('/order',data)
  }

  // 获取富文本内容
  writegettxt(data) {
    return this.instance.get('/editorlist',{data})
  }

  // 发送富文本内容
  writetxt(data) {
    return this.instance.post('/editor',data)
  }
}
export default new Geek()