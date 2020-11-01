const mongoose = require('mongoose')

export const UserSchema = mongoose.Schema({
  roleId: {
    type: Number,
    default: 2
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    default: null
  },
  lastName: {
    type: String,
    default: null
  },
  address: {
    type: String,
    default: null
  },
  registrationDate: {
    type: Date,
    default: Date.now
  },
  passwordLastUpdated: {
    type: Date,
    default: Date.now
  },
  forgotPasswordToken: {
    type: String,
    default: null
  }
})

let User
try {
  User = mongoose.model('User')
} catch (err) {
  User = mongoose.model('User', UserSchema)
}


module.exports = User
module.exports.UserSchema = UserSchema