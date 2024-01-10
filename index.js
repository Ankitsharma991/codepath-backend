const express = require('express');
const mongoose = require('./config/mongoose');
const jobPositionsRoutes = require('./routes/jobPositions');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/api/jobpositions', jobPositionsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
