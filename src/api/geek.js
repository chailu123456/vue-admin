import base from '@/utils/base'

class Geek extends base {
  city () {
    return this.instance.get('/api/common_conf/cities')
  }
}
export default new Geek()