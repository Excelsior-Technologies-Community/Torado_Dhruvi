const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const helpRoutes = require("./routes/helpRoutes");
const contactRoutes = require("./routes/contactRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");

const portfolioDetailsRoutes = require("./routes/portfolioDetailsRoutes");
const onlyservicesRoutes = require("./routes/onlyservicesRoutes");
const quoteRoutes = require("./routes/onlyservicesQuoteRoutes");
const blognewsRoutes = require("./routes/blognewsRoutes");
const blogdetailsRoutes = require("./routes/blogdetailsRoutes");
const commentRoutes = require("./routes/commentRoutes");
const faqRoutes = require("./routes/faq");
const testimonialRoutes = require("./routes/testimonialRoutes");
const privacyRoutes = require("./routes/privacyRoutes");
const teamRoutes = require("./routes/teamRoutes");
const teamFormRoutes = require("./routes/teamFormRoutes");


const app = express();

app.use(cors());
app.use(express.json());

const path = require("path");

app.use(
  "/images",
  express.static(path.join(__dirname, "../frontend/src/assets"))
);

app.use("/api", helpRoutes);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/torado";

const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected");

    app.use("/api/auth", authRoutes);
    app.use("/api", protectedRoutes);
    app.use("/api", contactRoutes);
    app.use("/api/services", serviceRoutes);
    app.use("/api", aboutRoutes);
    app.use("/api", portfolioRoutes);
    app.use("/api/portfolio-details", require("./routes/portfolioDetailsRoutes"));
    app.use("/api/onlyservices", onlyservicesRoutes);
    app.use("/api/quote", quoteRoutes);
    app.use("/api/blognews", blognewsRoutes);
    app.use("/api/blogdetails", blogdetailsRoutes);
    app.use("/api/comments", commentRoutes);
    app.use("/api/pricing", require("./routes/pricingRoutes"));
    app.use("/api/faqs", faqRoutes);
    app.use("/api/testimonials", testimonialRoutes);
    app.use("/api", privacyRoutes);
    app.use("/api/team", teamRoutes);
    app.use("/api/teamForm", teamFormRoutes);
    app.use("/api/admin", require("./routes/adminRoutes"));

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message || err);
    process.exit(1); 
  }
};

startServer();
