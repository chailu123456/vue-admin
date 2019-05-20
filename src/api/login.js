import base from '@/utils/base'

class User extends base {
  constructor () {
    super()
  }

  login (data) {
    console.log(data)
    return this.instance.post('/login', data)
  }

}
export default new User()