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
        {
          userId: user.id,
          name: user.name,
        },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      )

      res.status(200).json({ token })
    } catch (e) {
      res.status(500).json({ message: "Something went wrong, please try again later." })
    }
  },
  updateRole: async (req, res) => {
    try {
      const { userId, role } = req.body
      const user = await User.findById(userId)

      if(!user) return res.status(401).json({ message: "User was not found!" })

      user.role = role

      await user.save()
      res.status(200).json({ message: "User role was updated" })
    } catch (e) {
      res.status(500).json({ message: "Something went wrong, please try again later." })
    }
  }
}

module.exports = userService