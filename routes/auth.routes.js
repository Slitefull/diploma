const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const config = require('config')


const router = Router()

router.post('/register', async (req, res) => {
  try {
    const { name, surname, email, password } = req.body

    const candidate = await User.findOne({email})
    if (candidate) return res.status(400).json({ message: "This user already exists!", resultCode: 0 })

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({name, surname, email, password: hashedPassword})
    await user.save()

    res.status(201).json({ message: "New user has been created!", resultCode: 1 })
  } catch (e) {
    res.status(500).json({
      message: "Something went wrong, please try again later.",
      resultCode: 0
    })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({email})

    if (!user) return res.status(400).json({ message: "User is not found.", resultCode: 0 })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ message: "Invalid password, please try again", resultCode: 0 })

    const token = jwt.sign(
      { userId: user.id },
      config.get('jwtSecret'),
      { expiresIn: '1h' }
    )

    res.status(200).json({ token, userId: user.id, resultCode: 1 })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: "Something went wrong, please try again later.",
      resultCode: 0
    })
  }
})

module.exports = router