const express = require("express");
const router = express.Router();

const {
    getTestimonials,
    addTestimonial
} = require("../controllers/testimonialController");

router.get("/", getTestimonials);
router.post("/add", addTestimonial);

module.exports = router;