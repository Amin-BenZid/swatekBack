const mongoose = require("mongoose");

let schemaLogin = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: [true, "password is required"],
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

var Login = mongoose.model("Login", schemaLogin);

module.exports = Login;
