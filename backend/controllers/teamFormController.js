const TeamForm = require("../models/teamFormModel");

// ✅ CREATE (POST)
exports.createTeamForm = async (req, res) => {
    try {
        const newForm = new TeamForm(req.body);
        await newForm.save();

        res.json({
            success: true,
            message: "Team form submitted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

// ✅ GET ALL DATA
exports.getTeamForms = async (req, res) => {
    try {
        const data = await TeamForm.find().sort({ createdAt: -1 });

        res.json({
            success: true,
            data
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching data"
        });
    }
};