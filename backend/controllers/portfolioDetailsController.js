const Portfolio = require("../models/Portfolio");

exports.getPortfolioDetails = async (req, res) => {
    try {
        console.log("ID:", req.params.id);

        const data = await Portfolio.findById(req.params.id);

        if (!data) {
            console.log("❌ NOT FOUND IN DB");
            return res.status(404).json({ message: "Portfolio not found" });
        }

        console.log("✅ FOUND:", data);

        res.json(data);

    } catch (error) {
        console.error("ERROR:", error);
        res.status(500).json({ message: error.message });
    }
};