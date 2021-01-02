const User = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('config')

const userService = {
  editProfile: async (req, res) => {
    try {
      const { data, userId } = req.body
      const user = await User.findById(userId)

      if (!userId) return res.status(401).json({ message: "Not correct user id" })

      user.name = data.name
      await user.save()

      const token = jwt.sign(
        { userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      )

      res.status(200).json({
        id: user.id,
        name: user.name,
        token
      })
    } catch (e) {
      res.status(500).json({ message: "Something went wrong, please try again later." })
    }
  }
}

module.exports = userService