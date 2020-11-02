/**
 * 测试路由
 */

async function getTest(ctx, next) {
  ctx.status = 200
  ctx.data = {
    name: 'test',
  }
  next()
}

module.exports = getTest
