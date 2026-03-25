const mongoose = require("mongoose");

const privacySchema = new mongoose.Schema({
  title: String,
  description: String
});

module.exports = mongoose.model("PrivacyPolicy", privacySchema);