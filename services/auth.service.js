const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/user')


const authService = {
  register: async (req, res) => {
    try {
      const { name, surname, email, password } = req.body

      const candidate = await User.findOne({ email })
      if (candidate) return res.status(400).json({ message: "This user already exists!" })

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({ name, surname, email, password: hashedPassword })
      await user.save()

      res.status(201).json({ message: "New user has been created!" })
    } catch (e) {
      res.status(500).json({ message: "Something went wrong, please try again later." })
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ email })

      if (!user) return res.status(400).json({ message: "User is not found." })

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) return res.status(400).json({ message: "Invalid password, please try again" })

      const token = jwt.sign(
        { userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      )

      res.status(200).json({
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar || null,
        token,
      })
    } catch (e) {
      res.status(500).json({ message: "Something went wrong, please try again later." })
    }
  }
}

module.exports = authService