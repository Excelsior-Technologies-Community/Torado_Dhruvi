const mongoose = require("mongoose");

const pricingSchema = new mongoose.Schema({
  title: String,
  price: Number,
  duration: String,
  features: [String]
});

module.exports = mongoose.model("Pricing", pricingSchema);