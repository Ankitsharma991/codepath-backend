const express = require('express');
const mongoose = require('./config/mongoose');
const jobPositionsRoutes = require('./routes/jobPositions');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/api/jobpositions', jobPositionsRoutes);
// app.use('')

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
