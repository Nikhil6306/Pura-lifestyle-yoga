const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  tags: [String],
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 5
  },
  reviews: {
    type: Number,
    default: 0
  },
  emoji: String,
  availability: {
    type: String,
    default: 'Mon–Sat'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Trainer', trainerSchema);
