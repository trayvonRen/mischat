const User = require('../../../models/User')
const { getRedis } = require('../../../utils/redis')

async function register(ctx, next) {
  ctx.verifyParams({
    nickname: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    emailcode: {
      type: 'string',
      required: true,
    },
  })
  const { email, emailcode } = ctx.request.body
  const user = await User.findOne({
    email: email,
  })

  if (user) {
    ctx.errCode = 1
    ctx.errMessage = '该邮箱已经注册！'
  } else {
    let redisEmailcode = await getRedis(email)
    if (redisEmailcode) {
      let { code, expire } = JSON.parse(redisEmailcode)
      if (expire < Date.now()) {
        ctx.errCode = 1
        ctx.errMessage = '验证码已经过期，请重新获取！'
      } else if (code !== emailcode) {
        ctx.errCode = 1
        ctx.errMessage = '验证码不正确，请重新输入！'
      } else {
        ctx.errCode = 0
        ctx.errMessage = '注册成功！'
        const user = await new User(ctx.request.body).save()
        ctx.data = user
      }
    } else {
      ctx.errCode = 1
      ctx.errMessage = '请获取邮箱验证码！'
    }
  }
  ctx.status = 200
  next()
}

module.exports = register
