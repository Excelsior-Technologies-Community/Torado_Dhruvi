const express = require("express");
const router = express.Router();

const {
    createTeamForm,
    getTeamForms
} = require("../controllers/teamFormController");

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    next();
};

router.post("/", authMiddleware, createTeamForm);

router.get("/", getTeamForms);

module.exports = router;