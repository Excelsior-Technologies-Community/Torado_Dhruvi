
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const helpRoutes = require("./routes/helpRoutes");
const contactRoutes = require("./routes/contactRoutes");
const serviceRoutes = require("./routes/serviceRoutes");

const app = express();


app.use(cors());
app.use(express.json());


app.use("/api", helpRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/torado")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);

app.use("/api", contactRoutes);
app.use("/api/services", serviceRoutes);


app.listen(5000, () => {
  console.log("Server running on port 5000");
});