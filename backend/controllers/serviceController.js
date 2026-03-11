const Service = require("../models/serviceModel");

exports.getAllServices = async (req, res) => {
  try {

    const services = await Service.find();

    res.json(services);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};


exports.getServiceDetails = async (req, res) => {

  try {

    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json(service);

  } catch (error) {

    if (error.name === 'CastError') {
      return res.status(400).json({ message: "Invalid service ID" });
    }

    res.status(500).json({ error: error.message });

  }

};