const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bookedSeats: [{
    stadium: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Stadium',
    },
    seat: {
      type: Number,
      required: true,
    },
    tower: {
      type: String,
      required: true,
    }
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
