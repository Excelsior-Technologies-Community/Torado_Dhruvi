const mongoose = require("mongoose");

const portfolioDetailsSchema = new mongoose.Schema({
    title: String,
    category: String,
    client: String,
    date: String,
    image: String,
    description: String,
    challenge: String
});

module.exports = mongoose.model("PortfolioDetails", portfolioDetailsSchema);