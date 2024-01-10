const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.once("open", () => {
  console.log("MongoDB connected successfully!");
});

module.exports = mongoose;
