const mongoose = require("mongoose");

let schemaEquipe = new mongoose.Schema({
  photo: {
    type: String,
    required: [true, "photo is required"],
  },

  memberName: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  },
  memberRole: {
    type: String,
    required: [true, "role is required"],
    trim: true,
  },
  memberDes: {
    type: String,
  },
});

var Equipe = mongoose.model("Equipe", schemaEquipe);

module.exports = Equipe;
