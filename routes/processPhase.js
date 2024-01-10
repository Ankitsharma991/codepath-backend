const express = require('express');
const router = express.Router();
const ProcessPhase = require('../models/ProcessPhase');

router.post('/create', async (req, res) => {
  try {
    const processPhase = new ProcessPhase(req.body);
    await processPhase.save();
    res.status(201).json({ message: 'Process phase created successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;