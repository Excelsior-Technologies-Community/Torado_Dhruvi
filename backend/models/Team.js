const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: String,
  role: String,
  description: String,
  phone: String,
  email: String,
  image: String,
  technology: Number,
  marketing: Number,
  business: Number
});

module.exports = mongoose.model("Team", teamSchema);