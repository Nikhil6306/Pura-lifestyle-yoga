const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer');

// Get all trainers
router.get('/', async (req, res) => {
  try {
    const trainers = await Trainer.find().sort({ rating: -1 });
    res.json(trainers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get trainer by ID
router.get('/:id', async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id);
    if (!trainer) return res.status(404).json({ error: 'Trainer not found' });
    res.json(trainer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create trainer (admin)
router.post('/', async (req, res) => {
  try {
    const trainer = new Trainer(req.body);
    await trainer.save();
    res.status(201).json(trainer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update trainer (admin)
router.put('/:id', async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!trainer) return res.status(404).json({ error: 'Trainer not found' });
    res.json(trainer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
