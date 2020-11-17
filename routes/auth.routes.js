const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Admin = require('../models/admin')
const config = require('../config/default.json')


const router = Router()

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body

    const candidate = await Admin.findOne({email})
    if (candidate) return res.status(400).json({ message: "This user already exists!" })

    const hashedPassword = await bcrypt.hash(password, 12)
    const admin = new Admin({email, password: hashedPassword})
    await admin.save()

    res.status(201).json({ message: "New user has been created!" })
  } catch (e) {
    res.status(500).json({
      message: "Something went wrong, please try again later."
    })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const admin = Admin.findOne(email)
    if (!admin) return res.status(400).json({ message: "User is not found." })

    const isMatch = await bcrypt.compare(password, admin.password)
    if (!isMatch) return res.status(400).json({ message: "Invalid password, please try again" })

    const token = jwt.sign(
      { userId: admin.id },
      config.get('jwtSecret'),
      { expiresIn: '1h' }
    )

    res.json({ token, userId: user.id })
  } catch (e) {
    res.status(500).json({
      message: "Something went wrong, please try again later."
    })
  }
})

module.exports = router