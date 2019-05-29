import base from '@/utils/base'

class User extends base {
  constructor () {
    super()
  }

  login (data) {
    console.log(data)
    return this.instance.post('/ccc', data)
  }

  upload (data) {
    return this.instance.post('/upload', data)
  }
}
export default new User()