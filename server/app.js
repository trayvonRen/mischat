const Koa = require('koa')
const { serverConfig } = require('./config')
const routing = require('./routes')

const app = new Koa()

// 注册路由
routing(app)

/**
 * 统一数据返回格式
 * {
 *    errCode: 0,
 *    errMessage: 'OK',
 *    data: {}
 * }
 */
app.use(ctx => {
  if (ctx.status !== 200) return
  ctx.body = {
    errCode: ctx.errCode || 0,
    errMessage: ctx.errMessage || 'OK',
    data: ctx.data || {},
  }
})

app.listen(serverConfig.PORT, () => console.log('server is listening ' + serverConfig.PORT))
