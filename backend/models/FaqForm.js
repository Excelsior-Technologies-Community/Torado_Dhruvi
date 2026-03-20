const mongoose = require("mongoose");

const faqFormSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  message: String
}, { timestamps: true });

module.exports = mongoose.model("FaqForm", faqFormSchema);