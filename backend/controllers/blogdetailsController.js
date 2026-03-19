const Blog = require("../models/blognewsModel");

exports.getBlogById = async (req, res) => {
  try {
    const data = await Blog.findById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};