const BlogNews = require("../models/blognewsModel");

// GET all blog news
exports.getBlogNews = async (req, res) => {
  try {
    const data = await BlogNews.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ADD blog news (for Postman)
exports.addBlogNews = async (req, res) => {
  try {
    const newBlog = new BlogNews(req.body);
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};