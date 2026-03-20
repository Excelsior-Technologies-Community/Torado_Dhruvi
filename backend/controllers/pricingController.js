const Pricing = require("../models/Pricing");

exports.getPricingPlans = async (req, res) => {
  try {
    const plans = await Pricing.find();
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};