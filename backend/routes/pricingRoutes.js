const express = require("express");
const router = express.Router();
const { getPricingPlans } = require("../controllers/pricingController");

router.get("/", getPricingPlans);

module.exports = router;