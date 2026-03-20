const express = require("express");
const router = express.Router();
const Faq = require("../models/Faq");
const FaqForm = require("../models/FaqForm");
const verifyToken = require("../middleware/authMiddleware");

 router.get("/", async (req, res) => {
  try {
    const data = await Faq.find().sort({ _id: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { question, answer } = req.body;

    const newFaq = new Faq({ question, answer });
    await newFaq.save();

    res.status(201).json(newFaq);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/submit", verifyToken, async (req, res) => {

  try {

    const { name, phone, email, message } = req.body;

    const formData = new FaqForm({
      name,
      phone,
      email,
      message
    });

    await formData.save();

    res.json({ success: true, message: "Form submitted" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});

module.exports = router;