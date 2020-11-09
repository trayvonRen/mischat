import HttpUtils from './http'

class Https {
  postLogin = parmas => HttpUtils.post('/user/postLogin', parmas)
}

export default new Https()
