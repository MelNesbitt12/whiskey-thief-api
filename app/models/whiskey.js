const mongoose = require('mongoose')

const whiskeySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  comments: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Whiskey', whiskeySchema)
