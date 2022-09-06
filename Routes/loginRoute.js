const express = require("express");
const router = express.Router();
const adminController = require("../Controllers/loginController");
const { verifyAdminToken } = require("../Controllers/authorization");

// Login admin
router.post("/login", adminController.loginAdmin);
// get messages
router.get("/contact", verifyAdminToken, adminController.contacts);

module.exports = router;
