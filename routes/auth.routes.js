const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Admin = require('../models/admin')
const config = require('../config/default.json')


const router = Router()

router.post('/register', async (req, res) => {
  try {
    const { name, surname, email, password } = req.body

    const candidate = await Admin.findOne({email})
    if (candidate) return res.status(400).json({ message: "This user already exists!", resultCode: 0 })

    const hashedPassword = await bcrypt.hash(password, 12)
    const admin = new Admin({name, surname, email, password: hashedPassword})
    await admin.save()

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

    const admin = Admin.findOne(email)
    if (!admin) return res.status(400).json({ message: "User is not found.", resultCode: 0 })

    const isMatch = await bcrypt.compare(password, admin.password)
    if (!isMatch) return res.status(400).json({ message: "Invalid password, please try again", resultCode: 0 })

    const token = jwt.sign(
      { userId: admin.id },
      config.get('jwtSecret'),
      { expiresIn: '1h' }
    )

    res.json({ token, userId: user.id, resultCode: 1 })
  } catch (e) {
    res.status(500).json({
      message: "Something went wrong, please try again later.",
      resultCode: 0
    })
  }
})

module.exports = router