const PrivacyPolicy = require("../models/PrivacyPolicy");

exports.getPrivacyPolicy = async (req, res) => {
  try {
    const data = await PrivacyPolicy.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addPrivacyPolicy = async (req, res) => {
  try {
    const newPolicy = new PrivacyPolicy(req.body);
    const saved = await newPolicy.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};