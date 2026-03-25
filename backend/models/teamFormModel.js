const mongoose = require("mongoose");

const teamFormSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    phone: String,
    message: String
}, { timestamps: true });

module.exports = mongoose.model("TeamForm", teamFormSchema);