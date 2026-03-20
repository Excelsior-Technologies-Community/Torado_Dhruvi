const express = require("express");
const router = express.Router();
const { addComment, getComments } = require("../controllers/commentController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, addComment);
router.get("/", getComments);

module.exports = router;