const express = require("express");
const router = express.Router();

const contactController = require("../Controllers/contactController");

// get Contact
router.get("/get", contactController.getContact);
// add Contact
router.post("/add", contactController.addContact);

module.exports = router;
