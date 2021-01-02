const profileService = require('../services/user.service')
const { Router } = require('express')

const router = Router()

router.put('/profile', profileService.editProfile)

module.exports = router