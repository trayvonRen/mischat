const Router = require('koa-router')
const { register, getEmailCode, login } = require('../controllers/user')
const router = new Router({
  prefix: '/user',
})

router.post('/postRegister', register)

router.post('/getEmailCode', getEmailCode)

router.post('/postLogin', login)
module.exports = router
