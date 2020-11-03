const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
  nickname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
    default: 0,
  },
  sex: {
    type: Number,
    required: false,
    default: 0,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: false,
    default: '该用户太懒了，还没有任何自我介绍 ( ╯□╰ )',
  },
  company: {
    type: String,
    required: false,
    default: '',
  },
  headportrait: {
    type: String,
    required: false,
    default: 'http://mischatqiniu.trayvonren.top/defaulthead1.png',
  },
  friend: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
    require: false,
  },
  joingroup: {
    type: [Schema.Types.ObjectId],
    ref: 'GroupChat',
    require: false,
  },
})

module.exports = model('User', userSchema)
