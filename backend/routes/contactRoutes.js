const express = require("express");
const { createContact } = require("../controllers/contactController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/contact", authMiddleware, createContact);

module.exports = router;