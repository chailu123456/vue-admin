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
}
export default new Geek()