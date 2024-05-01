const Emprunt = require("../models/empruntModel");

exports.addEmprunt = async (req, res) => {
  try {
    const { livre, client } = req.body;
    // Assuming livre and client IDs are provided in the request body
    const newEmprunt = new Emprunt({ livre, client });
    await newEmprunt.save();
    res.status(201).json(newEmprunt);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.returnLivre = async (req, res) => {
  try {
    // Assuming livre ID is provided in the request body
    const emprunt = await Emprunt.findOneAndUpdate(
      { livre: req.body.livre, dateRetour: null },
      { dateRetour: Date.now() }
    );
    if (!emprunt) {
      return res
        .status(404)
        .json({ message: "Emprunt not found or livre already returned" });
    }
    res.status(200).json(emprunt);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getEmpruntsByClientId = async (req, res) => {
  try {
    const emprunts = await Emprunt.find({ client: req.params.idClient });
    res.status(200).json(emprunts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
