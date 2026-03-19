const express = require("express");
const router = express.Router();
const { getBlogById } = require("../controllers/blogdetailsController");

router.get("/:id", getBlogById);

module.exports = router;