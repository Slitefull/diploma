const Goods = require('../models/goods')

const goodsService = {
  getAllGoods: async (req, res) => {
    try {
      await Goods.find({}, function(err, result) {
        if (err) {
          res.status(500).json({ message: "Can't find goods." })
        } else {
          res.status(200).json({ goods: result });
        }
      })
    } catch (e) {
      res.status(500).json({ message: "Something went wrong, please try again later." })
    }
  },
}

module.exports = goodsService