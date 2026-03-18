const express = require("express");
const router = express.Router();
const controller = require("../controllers/onlyservicesController");

router.get("/", controller.getServices);
router.post("/add", controller.addService);

module.exports = router;