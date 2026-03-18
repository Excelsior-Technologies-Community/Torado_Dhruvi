const mongoose = require("mongoose");

const onlyservicesSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String
});

module.exports = mongoose.model("OnlyServices", onlyservicesSchema);