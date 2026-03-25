const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
    name: String,
    role: String,
    message: String,
    rating: Number,
    image: String
});

module.exports = mongoose.model("Testimonial", testimonialSchema);