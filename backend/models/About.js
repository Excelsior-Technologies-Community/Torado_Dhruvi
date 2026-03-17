const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: String,
  role: String,
  image: String,
  facebook: String,
  twitter: String,
  instagram: String,
  linkedin: String
});

const testimonialSchema = new mongoose.Schema({
  name: String,
  role: String,
  image: String,
  message: String,
  rating: Number
});

const provideSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  icon: String
});

const aboutSchema = new mongoose.Schema({
  title: String,
  description: String,
  clientSatisfaction: Number,
  financeConsulting: Number,
  provides: [provideSchema],
  testimonials: [testimonialSchema],
  team: [teamSchema]   
   

});

module.exports = mongoose.model("About", aboutSchema);