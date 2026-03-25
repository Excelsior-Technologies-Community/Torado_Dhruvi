const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { getDashboardStats, getList, deleteEntity } = require("../controllers/adminController");

router.get("/dashboard", authMiddleware, getDashboardStats);
router.get("/:collection/list", authMiddleware, getList);
router.delete("/:collection/:id", authMiddleware, deleteEntity);

module.exports = router;
