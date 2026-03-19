const express = require("express");
const router = express.Router();
const controller = require("../controllers/blognewsController");

router.get("/", controller.getBlogNews);
router.post("/", controller.addBlogNews);

module.exports = router;