const mongoose = require('mongoose');

const stadiumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  towers: {
    type: [String],
    required: true,
  },
});

const Stadium = mongoose.model('Stadium', stadiumSchema);

module.exports = Stadium;
