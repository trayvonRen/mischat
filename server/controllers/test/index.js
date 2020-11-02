/**
 * 自动化导入脚本
 */
const fs = require('fs')
const dirOutput = {}
fs.readdirSync(__dirname + '\\controllers').forEach(file => {
  if (file === 'index.js') return
  const controller = file.slice(0, file.indexOf('.'))
  dirOutput[controller] = require(`./controllers/${file}`)
})

module.exports = dirOutput
