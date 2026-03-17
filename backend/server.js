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

const app = express();

app.use(cors());
app.use(express.json());

const path = require("path");

app.use(
  "/images",
  express.static(path.join(__dirname, "../frontend/src/assets"))
);

app.use("/api", helpRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/torado")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);

app.use("/api", contactRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api", aboutRoutes);
app.use("/api", portfolioRoutes);

app.use("/api/portfolio-details", require("./routes/portfolioDetailsRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});