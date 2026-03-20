const Comment = require("../models/commentModel");

exports.addComment = async (req, res) => {
  try {

    const { name, email, message } = req.body;

    const newComment = new Comment({
      name,
      email,
      message
    });

    await newComment.save();

    res.json({ success: true, message: "Comment added" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};