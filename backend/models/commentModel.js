const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model("Comment", commentSchema);