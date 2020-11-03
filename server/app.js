const Koa = require('koa')
const mongoose = require('mongoose')
const parameter = require('./middleware/koa-parameter.js')
const koaBody = require('koa-body')
const error = require('koa-json-error')
const { serverConfig } = require('./config')
const routing = require('./routes')

const app = new Koa()

// 链接数据库
mongoose.set('useCreateIndex', true)
mongoose.connect(
  serverConfig.MONGODB_CONNECT_STR,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => console.log('mongodb connect successfully')
)
mongoose.connection.on('error', console.error)

// 解析请求体，并保存上传的图片
app.use(koaBody())

// 参数校验
app.use(parameter(app))

// 错误处理
function formatError(err) {
  return {
    errCode: err.status,
    errMessage: err.message,
  }
}

// 注册路由
routing(app)

// 使用错误处理中间件
app.use(error(formatError))

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
