const Portfolio = require("../models/Portfolio");

// GET all portfolio
exports.getPortfolio = async (req, res) => {
  try {
    const data = await Portfolio.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD portfolio
exports.createPortfolio = async (req, res) => {
  try {
    const portfolio = new Portfolio(req.body);

    const savedData = await portfolio.save();

    res.status(201).json({
      message: "Portfolio added successfully",
      data: savedData
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};