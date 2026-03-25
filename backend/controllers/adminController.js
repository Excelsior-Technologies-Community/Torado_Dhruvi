const User = require("../models/User");
const Contact = require("../models/contactModel");
const Service = require("../models/serviceModel");
const Portfolio = require("../models/Portfolio");
const Team = require("../models/Team");
const BlogNews = require("../models/blognewsModel");
const Testimonial = require("../models/testimonialModel");
const Faq = require("../models/Faq");

const modelsMap = {
  users: User,
  contacts: Contact,
  services: Service,
  portfolios: Portfolio,
  teams: Team,
  blogs: BlogNews,
  testimonials: Testimonial,
  faqs: Faq
};

exports.getDashboardStats = async (req, res) => {
  try {
    const stats = {};
    for (const key in modelsMap) {
      if (modelsMap.hasOwnProperty(key)) {
        stats[key] = await modelsMap[key].countDocuments();
      }
    }
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

exports.getList = async (req, res) => {
  const collectionName = req.params.collection;
  const Model = modelsMap[collectionName];
  if (!Model) {
    return res.status(404).json({ message: "Collection not found" });
  }
  
  try {
    const data = await Model.find().sort({ _id: -1 }); // newest first if applicable
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

exports.deleteEntity = async (req, res) => {
  const collectionName = req.params.collection;
  const id = req.params.id;
  const Model = modelsMap[collectionName];
  if (!Model) {
    return res.status(404).json({ message: "Collection not found" });
  }
  
  try {
    await Model.findByIdAndDelete(id);
    res.json({ success: true, message: `${collectionName} entry deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
