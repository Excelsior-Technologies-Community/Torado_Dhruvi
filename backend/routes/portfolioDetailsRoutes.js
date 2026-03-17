const express = require("express");
const router = express.Router();
const { getPortfolioDetails } = require("../controllers/portfolioDetailsController");

router.get("/:id", getPortfolioDetails);

module.exports = router;