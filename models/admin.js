const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: { type: String },
  surname: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

module.exports = model('Admins', schema)