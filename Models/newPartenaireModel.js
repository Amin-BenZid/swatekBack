const mongoose = require("mongoose");

let schemaNewPartenaire = new mongoose.Schema({
  logo: {
    type: String,
    trim: true,
    required: true,
  },
  partenairesName: {
    type: String,
    required: true,
    trim: true,
  },
  partenairesDes: {
    type: String,
    required: true,
    trim: true,
  },
});

var Partenaires = mongoose.model("Partenaires", schemaNewPartenaire);

module.exports = Partenaires;
