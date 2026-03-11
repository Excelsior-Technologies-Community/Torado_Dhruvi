const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  category: String
});

module.exports = mongoose.model("Service", serviceSchema);