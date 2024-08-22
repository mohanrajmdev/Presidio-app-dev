// routes/user.js

const express = require('express');
const User = require('../models/User');
const Stadium = require('../models/Stadium');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/book-seat', async (req, res) => {
  try {
    const { userId, stadiumId, seat, tower } = req.body;
    const stadium = await Stadium.findById(stadiumId);
    const user = await User.findById(userId);

    if (!stadium || !user) {
      return res.status(404).json({ error: 'Stadium or User not found' });
    }

    user.bookedSeats.push({ stadium, seat, tower });
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find().populate('bookedSeats.stadium');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
