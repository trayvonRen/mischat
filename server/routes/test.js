const Router = require('koa-router')
const { getTest } = require('../controllers/test')
const router = new Router({
  prefix: '/test',
})

/**
 * 按类别查询商品销量接口
 */
router.get('/typedSales', getTest)

module.exports = router
