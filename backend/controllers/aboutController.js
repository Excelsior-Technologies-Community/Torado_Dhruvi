const About = require("../models/About");

exports.getAboutData = async (req, res) => {
  try {

    const about = await About.findOne();

    if (!about) {
      return res.status(404).json({ message: "About data not found" });
    }

    res.status(200).json(about);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};