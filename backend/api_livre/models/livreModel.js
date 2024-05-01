// livreModel.js

const mongoose = require("mongoose");

const livreSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  titre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  auteur: {
    type: String,
    required: true,
  },
});

const Livre = mongoose.model("Livre", livreSchema);

module.exports = Livre;
