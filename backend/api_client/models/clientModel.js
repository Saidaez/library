const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
