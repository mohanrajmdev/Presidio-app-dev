const express = require('express');
const Admin = require('../models/Admin');
const Stadium = require('../models/Stadium');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, password, stadiumId } = req.body;
    const stadium = await Stadium.findById(stadiumId);
    const admin = new Admin({ name, email, password, stadium });
    await admin.save();
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const admins = await Admin.find().populate('stadium');
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
