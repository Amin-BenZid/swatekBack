const mongoose = require("mongoose");

let schemaActualites = new mongoose.Schema({
  photo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  paragraph: {
    type: String,
    required: true,
    trim: true,
  },
  file: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
  },
});

var Actualites = mongoose.model("Actualites", schemaActualites);

module.exports = Actualites;
