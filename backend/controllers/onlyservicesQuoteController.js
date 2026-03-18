const Quote = require("../models/onlyservicesQuoteModel");

exports.addQuote = async (req, res) => {

  try {

    const newQuote = new Quote({
      ...req.body,
      userId: req.user.id
    });

    await newQuote.save();

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ success: false });
  }

};