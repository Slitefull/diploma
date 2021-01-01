const profileService = require('../services/profile.service')
const { Router } = require('express')

const router = Router()

router.put('/user', profileService.editProfile)