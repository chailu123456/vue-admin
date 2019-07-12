import base from '@/utils/base'

class User extends base {
  constructor () {
    super()
  }

  login (data) {
    return this.instance.post('/user/login', data)
  }

  register (data) {
    return this.instance.post('/register', data)
  }

  upload (data) {
    return this.instance.post('/upload/logo', data)
  }

  imglist (data) {
    return this.instance.get('/imgarr',{data})
  }
}
export default new User()