const mongoose = require('mongoose');

const jobPositionSchema = new mongoose.Schema({
  positionName: String,
  description: String,
  department: String,
  requirements: String,
  phases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProcessPhase' }],
});

module.exports = mongoose.model('JobPosition', jobPositionSchema);
