const nodemailer = require('nodemailer')
const { smtpConfig } = require('../../../config')
const transporter = nodemailer.createTransport(smtpConfig)
const { setRedis } = require('../../../utils/redis')

async function getEmailCode(ctx, next) {
  ctx.verifyParams({
    email: {
      type: 'string',
      required: true,
    },
  })

  const { email } = ctx.request.body
  // 生成验证码随机数
  let code = Math.random().toString().substr(2, 4)
  const mail = {
    // 发件人 邮箱  '昵称<发件人邮箱>'
    from: smtpConfig.auth.user,
    // 主题
    subject: '激活验证码',
    // 收件人 的邮箱 可以是其他邮箱 不一定是qq邮箱
    to: email,
    //这里可以添加html标签
    html: `<b>您的激活验证码为：${code}, 2 分钟内有效，请谨慎保管。</b>`,
  }
  transporter.sendMail(mail, function (error, info) {
    if (error) {
      return console.log(error)
    }
    transporter.close()
    // console.log('mail sent:', info.response)
  })

  // 将邮件验证码存入 redis， 并设置过期时间
  setRedis(email, JSON.stringify({ code, expire: Date.now() + 1000 * 60 * 2 }))
  ctx.status = 200
  next()
}

module.exports = getEmailCode
