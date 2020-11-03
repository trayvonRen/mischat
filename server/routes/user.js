const Router = require('koa-router')
const { register, getEmailCode } = require('../controllers/user')
const router = new Router({
  prefix: '/user',
})

router.post('/postRegister', register)

router.post('/getEmailCode', getEmailCode)

module.exports = router
