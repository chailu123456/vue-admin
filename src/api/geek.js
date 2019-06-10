import base from '@/utils/base'

class Geek extends base {
  test () {
    return this.instance.get('/test')
  }

  order() {
    return this.instance.get('/order')
  }

  addorder(data) {
    return this.instance.put('/order',data)
  }
}
export default new Geek()