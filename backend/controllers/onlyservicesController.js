const OnlyServices = require("../models/onlyservicesModel");

exports.getServices = async (req, res) => {
    try {
        const services = await OnlyServices.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addService = async (req, res) => {
    try {
        const newService = new OnlyServices(req.body);
        await newService.save();
        res.json(newService);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};