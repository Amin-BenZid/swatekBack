const mongoose = require("mongoose");

let schemaNewProduit = new mongoose.Schema({
  logo: {
    type: String,
    required: true,
    trim: true,
  },

  ProduitName: {
    type: String,
    required: true,
    trim: true,
  },
  ProduitDes: {
    type: String,
    required: true,
    trim: true,
  },
});

var Produit = mongoose.model("Produit", schemaNewProduit);

module.exports = Produit;
