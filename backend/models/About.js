const mongoose = require("mongoose");

const provideSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  icon: String
});

const aboutSchema = new mongoose.Schema({
  title: String,
  description: String,
  clientSatisfaction: Number,
  financeConsulting: Number,
  provides: [provideSchema]
});

module.exports = mongoose.model("About", aboutSchema);