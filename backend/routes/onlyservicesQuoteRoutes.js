const express = require("express");
const router = express.Router();
const controller = require("../controllers/onlyservicesQuoteController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, controller.addQuote);

module.exports = router;