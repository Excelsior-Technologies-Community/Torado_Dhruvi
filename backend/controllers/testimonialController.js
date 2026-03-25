const Testimonial = require("../models/testimonialModel");

exports.getTestimonials = async (req, res) => {
    try {
        const data = await Testimonial.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addTestimonial = async (req, res) => {
    try {
        const newTestimonial = new Testimonial(req.body);
        const saved = await newTestimonial.save();
        res.json(saved);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};