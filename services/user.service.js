const User = require('../models/user')

const userService = {
  editProfile: async (req, res) => {
    try {
      const { name, token } = req.body

      if (!token) return res.status(403).json({ message: 'Access denied' })

      res.status(200).json({ message: "Changed" })
    } catch (e) {
      res.status(500).json({ message: "Something went wrong, please try again later." })
    }
  }
}

module.exports = userService