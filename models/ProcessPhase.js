const mongoose = require('mongoose');

const processPhaseSchema = new mongoose.Schema({
  phaseName: String,
  description: String,
  instructions: String,
});

module.exports = mongoose.model('ProcessPhase', processPhaseSchema);