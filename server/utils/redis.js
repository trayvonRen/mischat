const { redisConfig } = require('../config')
const redis = require('redis')

const getRedis = key => {
  return new Promise((resolve, reject) => {
    let redisClient = redis.createClient(redisConfig)
    redisClient.on('ready', err => {
      // console.log('redis connect successfully !')
    })
    redisClient.auth(redisConfig.password, () => {
      // console.log('redis auth successfully !')
    })

    redisClient.get(key, function (err, value) {
      redisClient.quit()
      resolve(value)
    })
  })
}

const setRedis = (key, value) => {
  return new Promise((resolve, reject) => {
    let redisClient = redis.createClient(redisConfig)
    redisClient.on('ready', err => {
      // console.log('redis connect successfully !')
    })
    redisClient.auth(redisConfig.password, () => {
      // console.log('redis auth successfully !')
    })
    console.log(value)
    redisClient.set(key, value, redisClient.print)
    resolve()
  })
}
module.exports = { setRedis, getRedis }
