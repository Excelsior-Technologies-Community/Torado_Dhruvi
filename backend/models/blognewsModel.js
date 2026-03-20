const mongoose = require("mongoose");

const blognewsSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  date: String,
  image: String,
  tags: [String]
});

module.exports = mongoose.model("BlogNews", blognewsSchema);