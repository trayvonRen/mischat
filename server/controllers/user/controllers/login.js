const User = require('../../../models/User')
const jsonwebtoken = require('jsonwebtoken')
const { serverConfig } = require('../../../config')
async function login(ctx, next) {
  ctx.verifyParams({
    email: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  })

  const { email, password } = ctx.request.body
  const user = await User.findOne({
    email,
  })

  if (!user) {
    ctx.errCode = 1
    ctx.errMessage = '该邮箱未注册, 请先注册账号!'
  } else if (user.password !== password) {
    ctx.errCode = 1
    ctx.errMessage = '密码错误，请重新输入！'
  } else {
    ctx.errCode = 0
    ctx.data = '登录成功！'
    const { _id, email } = user
    const token = jsonwebtoken.sign(
      {
        _id,
        email,
      },
      serverConfig.JWT_SECRET,
      {
        expiresIn: '1d',
      }
    )

    ctx.cookies.set('token', token, {
      maxAge: 1000 * 60 * 60 * 3, // cookie 有效时长 3h
      httpOnly: false, // 是否只用于 http 请求中获取
      overwrite: false, // 是否允许重写
    })
  }

  ctx.status = 200
  next()
}

module.exports = login
