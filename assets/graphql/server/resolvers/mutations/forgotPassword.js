import { SignUpSchema } from '../../../../validation/schemas'
import bcrypt from 'bcryptjs'
import User from '../../../../models/User'
import { setUserSession } from '../../utils/auth'


const forgotPassword = async (obj, args, { req, res }, info) => {
  console.log(args)
  const forgotPasswordForm = (obj, args) => {
    console.log(args)
  }
  return { forgotPasswordForm: 'args' }
  return SignUpSchema.validate({ email, password, confirmPassword }).then(values => {
    return User.exists({ email }).then(exists => {
      if (!exists) {
        return bcrypt.genSalt(10).then(salt => {
          return bcrypt.hash(password, salt).then(hash => {
            return User({ email, password: hash }).save().then(user => {
              return setUserSession(res, user._id).then(() => {
                return user
              }).catch(err => { throw err })
            }).catch(err => { throw err })
          }).catch(err => { throw err })
        }).catch(err => { throw err })
      } else { throw new Error('This email is already registered.') }
    }).catch(err => { throw err })
  }).catch(err => { throw err })
}

export default forgotPassword