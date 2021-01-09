const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: { type: String },
  price: { type: Number },
  count: { type: Number },
  thumbnail: { type: String }
})

module.exports = model('Goods', schema)