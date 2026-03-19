const mongoose = require("mongoose");

const blogdetailsSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  image: String,
  date: String,
  tags: [String]
});

module.exports = mongoose.model("BlogDetails", blogdetailsSchema);