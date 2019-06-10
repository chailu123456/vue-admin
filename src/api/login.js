import base from '@/utils/base'

class User extends base {
  constructor () {
    super()
  }

  login (data) {
    return this.instance.post('/login', data)
  }

  register (data) {
    return this.instance.post('/register', data)
  }

  upload (data) {
    return this.instance.post('/upload', data)
  }
}
export default new User()