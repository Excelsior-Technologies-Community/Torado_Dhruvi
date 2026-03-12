const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
    title: String,
    description: String,
    clientSatisfaction: Number,
    financeConsulting: Number
});

module.exports = mongoose.model("About", aboutSchema);