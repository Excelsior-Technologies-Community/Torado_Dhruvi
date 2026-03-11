const express = require("express");
const router = express.Router();

router.get("/help", (req, res) => {
  res.json({
    success: true,
    message: "Help API working"
  });
});

module.exports = router;