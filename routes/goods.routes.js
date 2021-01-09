const goodsService = require ('../services/goods.service')
const { Router } = require('express')

const router = Router()

router.get('/users', goodsService.getAllGoods)

module.exports = router