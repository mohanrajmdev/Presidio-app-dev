const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
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
  stadium: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stadium',
  },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
