const express = require("express");
const { verifyAdminToken } = require("../Controllers/authorization");
const router = express.Router();

const contactController = require("../Controllers/contactController");

// get Contact
router.get("/get", contactController.getContact);
// add Contact
router.post("/add", contactController.addContact);
// delete contact
router.delete("/delete/:id", verifyAdminToken, contactController.deleteContact);

module.exports = router;
