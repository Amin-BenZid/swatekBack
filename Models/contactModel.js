const mongoose = require("mongoose");

let schemaContact = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    lowercase: true,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    required: [true, "phone number is required"],
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  sujet: {
    type: String,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
});

var Contact = mongoose.model("Contact", schemaContact);

module.exports = Contact;
