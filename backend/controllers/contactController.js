const Contact = require("../models/contactModel");

const createContact = async (req, res) => {
  try {

    const { name, email, subject, phone, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      subject,
      phone,
      message,
userId: req.user.id
});

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }
};

module.exports = { createContact };