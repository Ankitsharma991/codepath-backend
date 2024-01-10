const mongoose = require("mongoose");
require('dotenv').config();

const username = "Ankitsharma991";
const password = "A@sharmaa11";
const databaseName = "codepath";

// const uri = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(password)}@cluster0.8o3ect1.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

const uri = process.env.MONGODB_URI;


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
