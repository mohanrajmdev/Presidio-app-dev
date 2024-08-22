const express = require('express');
const Stadium = require('../models/Stadium');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, seats, towers } = req.body;
    const stadium = new Stadium({ name, seats, towers });
    await stadium.save();
    res.status(201).json(stadium);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const stadiums = await Stadium.find();
    res.status(200).json(stadiums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const stadium = await Stadium.findById(id);
    if (!stadium) {
      return res.status(404).json({ error: 'Stadium not found' });
    }
    res.status(200).json(stadium);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, seats, towers } = req.body;
    const stadium = await Stadium.findByIdAndUpdate(id, { name, seats, towers }, { new: true });
    if (!stadium) {
      return res.status(404).json({ error: 'Stadium not found' });
    }
    res.status(200).json(stadium);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch('/:id/seats', async (req, res) => {
    try {
      const { id } = req.params;
      const { seats } = req.body;
      const stadium = await Stadium.findByIdAndUpdate(id, { seats }, { new: true });
      if (!stadium) {
        return res.status(404).json({ error: 'Stadium not found' });
      }
      res.status(200).json(stadium);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;