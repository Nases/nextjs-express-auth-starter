import nextConnect from 'next-connect'
import auth from '../../assets/middleware/auth'
import dbConnect from '../../assets/middleware/dbConnect'
import User from '../../assets/models/User'

const handler = nextConnect()

handler.use(auth)
handler.use((req, res) => {
  dbConnect()
  // User.find().then(value => res.send(value)).catch(err => res.send(err))
  const newUser = new User({
    email: 'test@test.testyooo',
    password: 'passwordyoo'
  })
  newUser.save().then(value => {
    console.log(value)
    res.send(value)
  }).catch(err => {
    console.log(err)
    res.send(err)
  })
})


export default handler