const mongoose = require("mongoose");

const empruntSchema = new mongoose.Schema({
  livre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Livre",
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  dateEmprunt: {
    type: Date,
    default: Date.now,
  },
  dateRetour: {
    type: Date,
    default: null,
  },
});

const Emprunt = mongoose.model("Emprunt", empruntSchema);

module.exports = Emprunt;
