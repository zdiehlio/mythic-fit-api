const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  name: String,
  class: String,
  level: Number,
  xp: Number,
})

const User = mongoose.model('user', UserSchema)
module.exports = User