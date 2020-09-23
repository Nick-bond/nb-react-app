const { Schema, model } = require('mongoose');

const schema = new Schema({
  id: { type: String },
  rating: { type: Number },
});

module.exports = model('Rating', schema);
