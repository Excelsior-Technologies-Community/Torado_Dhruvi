const express = require("express");
const router = express.Router();
const { getPortfolio, createPortfolio } = require("../controllers/portfolioController");

router.get("/portfolio", getPortfolio);
router.post("/portfolio", createPortfolio);

module.exports = router;