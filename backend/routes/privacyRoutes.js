const express = require("express");
const router = express.Router();
const {
  getPrivacyPolicy,
  addPrivacyPolicy
} = require("../controllers/privacyController");

router.get("/privacy", getPrivacyPolicy);
router.post("/privacy", addPrivacyPolicy);

module.exports = router;